let acc = document.getElementsByClassName('accordion-question');

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
    
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
      this.style.fontWeight ='400'
    } else {
      let active = document.querySelectorAll(".accordion-faq .accordion-question.active");
      for(let j = 0; j < active.length; j++){
        active[j].classList.remove("active");
        active[j].style.fontWeight = '400'
        active[j].nextElementSibling.style.maxHeight = null;
      }
      this.classList.toggle("active");
      panel.style.maxHeight = panel.scrollHeight + "px";
      this.style.fontWeight = '700'
    }
    });
}