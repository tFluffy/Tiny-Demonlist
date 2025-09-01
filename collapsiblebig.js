(function() {
  // Use function scope to avoid global variable conflicts
  var coll2 = document.getElementsByClassName("collapsibleBig");

  for (var i = 0; i < coll2.length; i++) {
    if (coll2[i]) {
      coll2[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
          content.style.display = "none";
        } else {
          content.style.display = "block";
        }
      });
    }
  }
})();