let coll = [];
coll = document.getElementsByClassName("collapsible");

try {
  setTimeout(function(){
    for (let i = 0; i < coll.length; i++) {
      if (coll[i]) {
        coll[i].addEventListener("click", function() {
          this.classList.toggle("active");
          let content = this.nextElementSibling;
          if (content.style.maxHeight){
            content.style.maxHeight = null;
          } else {
            content.style.maxHeight = content.scrollHeight + "px";
          } 
        });
      }
    }
  }, 2000);
} catch(err) {
  console.error("Error setting up collapsible elements:", err);
}