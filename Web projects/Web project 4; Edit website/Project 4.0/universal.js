// Footer information:

function updateClassHTML(c, html) {
    for (let i = 0; i < c.length; i++) {
        c[i].innerHTML = html;
    }
}
function updateClassHREF(c, href) {
    for (let i = 0; i < c.length; i++) {
        c[i].href = href;
    }
}


var A1 = document.getElementsByClassName("A1");
updateClassHTML(A1, "Links");
var A2 = document.getElementsByClassName("A2");
updateClassHTML(A2, "Editor Instagram");
updateClassHREF(A2, "https://www.instagram.com/aesthetic_edits_xo_/");
var A3 = document.getElementsByClassName("A3");
updateClassHTML(A3, "Github Repository");
updateClassHREF(A3, "https://github.com/XpertJosh/web-developpement-practice/");

var B1 = document.getElementsByClassName("B1");
updateClassHTML(B1, "Info")
var B2 = document.getElementsByClassName("B2");
updateClassHTML(B2, "I made this website for my friend who edits.");
var B3 = document.getElementsByClassName("B3");
updateClassHTML(B3, "All edits were made by aesthetic_edits_xo_.");
