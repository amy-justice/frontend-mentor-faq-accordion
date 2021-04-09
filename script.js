let acc = document.getElementsByClassName('accordion-question');

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        for(j = 0; j < acc.length; j++) {
            acc[j].nextElementSibling.style.maxHeight = null;
            acc[j].style.fontWeight = '400';
        }
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
        this.style.fontWeight = '400';
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
        this.style.fontWeight = '700';
      }
    });
}