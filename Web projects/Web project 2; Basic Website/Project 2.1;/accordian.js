var accordian = document.getElementsByClassName("accordian");


for (var i = 0; i < accordian.length; i++) {
    accordian[i].addEventListener("click", function() {
        /* Toggle between adding and removing the active class,
        which changes the background color of the button */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        
        console.log(panel);
        console.log(panel.style.maxHeight);

        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
        
        // if (panel.style.display === "block") {
        //     panel.style.display = "none";
        // } else {
        //     panel.style.display = "block";
        // } // This text made the text appear/disappear, but was removed for the transition.
    });
}