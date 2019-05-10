var inputOfUser = document.getElementById("choose");

inputOfUser.addEventListener("input", function (event) {
  if (inputOfUser.validity.typeMismatch) {
    inputOfUser.setCustomValidity("Please lengthen this text to 6 Characters or more (you are currently using ${event.length} letters ");
  } else {
    inputOfUser.setCustomValidity("");
  }
});