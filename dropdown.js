/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function dropMenu() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

// Toggle dropdown when button is clicked
document.addEventListener('DOMContentLoaded', function() {
  var dropbtns = document.getElementsByClassName("dropbtn");
  for (var i = 0; i < dropbtns.length; i++) {
    dropbtns[i].addEventListener("click", function() {
      var dropdown = this.nextElementSibling;
      dropdown.classList.toggle("show");
    });
  }
});
