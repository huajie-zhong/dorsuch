chrome.webNavigation.onCompleted.addListener(
  function (details) {
    chrome.scripting.executeScript({
      target: { tabId: details.tabId },
      function: functionToInject,
    });
  },
  {
    url: [
      { urlMatches: "https://reports.scl.cornell.edu/bedavailabilitybyroom" },
    ],
  }
);

function functionToInject() {
  const script = document.createElement("script");
  script.src = chrome.runtime.getURL("content.js");
  script.onload = function () {
    this.remove();
  };
  (document.head || document.documentElement).appendChild(script);
  readTable();
}
