function collapse(obj, content) {
    obj.classList.toggle("active");
    if (document.getElementById(content).style.display === "block") {
        document.getElementById(content).style.display = "none";
    } else {
        document.getElementById(content).style.display = "block";
    }
}

function alignCollapse() {
    var navBar = document.getElementById("navBar");
    var collapseContainer = document.getElementsByClassName("collapseContainer");
    navBar.style.height = collapseContainer.offsetHeight;
}
window.onload = alignCollapse();