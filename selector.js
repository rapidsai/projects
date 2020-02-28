var libSelector = document.querySelector("#library-selector");
var versionSelector = document.querySelector("#version-selector");

libSelector.addEventListener("change", function(e) {
  var hasEnArray = [
    "clx",
    "cudf",
    "cugraph",
    "cuml",
    "cuspatial",
    "cuxfilter",
    "nvstrings"
  ];
  var selectedLibrary = e.target.value;
  var nextPagePath = "";

  if (document.location.host.indexOf("rapids.ai") !== -1) {
    nextPagePath += "/api";
  }

  nextPagePath += "/" + selectedLibrary;
  if (hasEnArray.indexOf(selectedLibrary) !== -1) {
    nextPagePath += "/en";
  }

  nextPagePath += "/stable/";

  location = nextPagePath;
});

versionSelector.addEventListener("change", function(e) {
  var selectedVersion = e.target.value;
  location = "../" + selectedVersion;
});
