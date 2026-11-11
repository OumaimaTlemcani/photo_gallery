var defaultText = "Hover over or tab to an image below to display it here.";

function upDate(previewPic) {
  console.log("upDate fired for: " + previewPic.alt);
  var big = document.getElementById("image");
  big.style.backgroundImage = "url('" + previewPic.src + "')";
  big.innerHTML = previewPic.alt;
}

function unDo() {
  console.log("unDo fired");
  var big = document.getElementById("image");
  big.style.backgroundImage = "url('')";
  big.innerHTML = defaultText;
}

function addTabFocus() {
  console.log("Page loaded: adding tabindex to images");
  var images = document.querySelectorAll(".preview");
  for (var i = 0; i < images.length; i++) {
    images[i].setAttribute("tabindex", "0");
  }
}
