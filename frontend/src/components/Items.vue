<template>
  <ul class="todo-list">
    <li
      v-for="item in items"
      :key="item._id"
      :class="{ completed: item.status }"
    >
      <div class="view">
        <input
          class="toggle"
          type="checkbox"
          :checked="item.status"
          @change="updateItem(item)"
        />
        <label>{{ item.title }}</label>
        <button class="destroy" @click="deleteItem(item._id)"></button>
      </div>
    </li>
  </ul>
</template>

<script>
import Delete from "@/services/delete";
import Put from "@/services/put";

export default {
  name: "Items",
  props: {
    items: Array
  },
  async mounted() {
    this.getList();
  },
  methods: {
    async deleteItem(id) {
      await Delete(`/api/entries/${id}`);
      await this.getList();
    },
    async updateItem(item) {
      await Put(`/api/entries/${item._id}`, {
        id: item._id,
        doc: {
          title: item.title,
          status: !item.status
        }
      });
      this.$emit("getlist");
    },
    async getList() {
      this.$emit("getlist");
    }
  }
};
</script>
