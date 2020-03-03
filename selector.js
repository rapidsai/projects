var selectors = ["#library-selector", "#version-selector"];

for (var i = 0; i < selectors.length; i++) {
  var selector = selectors[i];

  document.querySelector(selector).addEventListener("change", function(e) {
    var selectedLibraryPath = e.target.value;
    var isOnRapidsAi = document.location.host.indexOf("rapids.ai") !== -1;
    var nextPagePrefix = isOnRapidsAi ? "/api" : "";

    location = nextPagePrefix + selectedLibraryPath;
  });
}
