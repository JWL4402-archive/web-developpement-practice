function collapse(obj, content, id, coll) {
    obj.classList.toggle("active");
    if (document.getElementById(content).style.display === "block") {
        document.getElementById(content).style.display = "none";
    } else {
        document.getElementById(content).style.display = "block";
    }
    
    var navBar = document.getElementById(id);
    var collapseContainer = document.getElementsByClassName(coll);
    navBar.style.height = concat(collapseContainer.offsetHeight, "px");

}

function alignCollapse() {

   
}
window.onload = alignCollapse();