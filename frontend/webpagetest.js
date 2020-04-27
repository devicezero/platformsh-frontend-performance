const WebPageTest = require("webpagetest");
const config = require("platformsh-config").config();

var wpt = new WebPageTest(
  "https://www.webpagetest.org/",
  process.env.WEBPAGETEST_KEY
);

wpt.runTest(
  config.getRoute("frontend").url,
  {
    connectivity: "Cable",
    location: "ec2-eu-west-1:Chrome",
    firstViewOnly: false,
    runs: 1,
    pollResults: 5,
    video: true
  },
  function processTestResult(err, result) {
    // console.log(err);

    // First view — use `repeatView` for repeat view
    console.log("Load time:", result.data.average.firstView.loadTime);
    console.log("First byte:", result.data.average.firstView.TTFB);
    console.log("Start render:", result.data.average.firstView.render);
    console.log("Speed Index:", result.data.average.firstView.SpeedIndex);
    console.log("DOM elements:", result.data.average.firstView.domElements);

    console.log(
      "(Doc complete) Requests:",
      result.data.average.firstView.requestsDoc
    );
    console.log(
      "(Doc complete) Bytes in:",
      result.data.average.firstView.bytesInDoc
    );

    console.log(
      "(Fully loaded) Time:",
      result.data.average.firstView.fullyLoaded
    );
    console.log(
      "(Fully loaded) Requests:",
      result.data.average.firstView.requestsFull
    );
    console.log(
      "(Fully loaded) Bytes in:",
      result.data.average.firstView.bytesIn
    );

    console.log(
      "Waterfall view:",
      result.data.runs[1].firstView.images.waterfall
    );
  }
);
