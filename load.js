function readSingleFile(e) {
  let file = e.target.files[0];
  if (!file) {
    return;
  }

  let reader = new FileReader();
  reader.onload = function (e) {
    let contents = e.target.result;
    displayContents(contents);
  };
  reader.readAsText(file);
}

function displayContents(contents) {
  let element = document.getElementById("file-content");
  element.innerHTML = contents;
}

document
  .getElementById("file-input")
  .addEventListener("change", readSingleFile, false);
