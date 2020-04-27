const config = require("platformsh-config").config();
const lighthouse = require("lighthouse");
const credentials = config.credentials("chromeheadlessbrowser");

// console.log(config.getRoute("frontend"));

(async () => {
  const URL = config.getRoute("frontend").url;

  const opts = {
    // chromeFlags: ["--headless"],
    logLevel: "info",
    port: credentials.port,
    hostname: credentials.ip,
    onlyCategories: ["performance"]
  };

  // Run Lighthouse.
  const { lhr } = await lighthouse(URL, opts, null);
  console.log(
    `Lighthouse scores: ${Object.values(lhr.categories)
      .map(c => c.score)
      .join(", ")}`
  );
})();
