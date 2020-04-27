<template>
  <div id="app">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <section class="todoapp">
      <header class="header">
        <h1>todos</h1>
        <input
          class="new-todo"
          placeholder="What needs to be done?"
          autofocus
          v-model="newItem"
          @keyup.enter="addItem"
        />
      </header>
      <!-- This section should be hidden by default and shown when there are todos -->
      <section class="main">
        <input id="toggle-all" class="toggle-all" type="checkbox" />
        <label for="toggle-all">Mark all as complete</label>
        <Items @getlist="getList" :items="items" />
      </section>

      <Controls :length="items.length" />
    </section>
    <Footer />
  </div>
</template>

<script>
import Get from "@/services/get";
import Post from "@/services/post";
import _ from "lodash";

import Items from "./components/Items.vue";
import Controls from "./components/Controls.vue";
import Footer from "./components/Footer.vue";

// const sortBy = key => {
//   return (a, b) => (a[key] > b[key] ? 1 : b[key] > a[key] ? -1 : 0);
// };

export default {
  name: "app",
  components: {
    Footer,
    Items,
    Controls
  },
  data() {
    return {
      newItem: null,
      items: []
    };
  },
  methods: {
    async addItem() {
      await Post("/api/entries", {
        title: this.newItem,
        status: 0
      });
      this.newItem = null;
      await this.getList();
    },
    async getList() {
      const entries = await Get("/api/entries");
      this.items = _.sortBy(entries.result, "status");
      // this.items = entries.result;
      // this.items.sort(sortBy("status"));
    }
  }
};
</script>

<style lang="scss">
@import "./scss/base";
@import "./scss/todo";
</style>
