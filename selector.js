var libSelector = document.querySelector("#library-selector");
var versionSelector = document.querySelector("#version-selector");

libSelector.addEventListener("change", function(e) {
  var selectedLibraryPath = e.target.value;
  var isOnRapidsAi = document.location.host.indexOf("rapids.ai") !== -1;
  var nextPagePrefix = isOnRapidsAi ? "/api" : "";

  location = nextPagePrefix + selectedLibraryPath;
});

versionSelector.addEventListener("change", function(e) {
  var selectedVersion = e.target.value;
  location = "../" + selectedVersion;
});
