var intro = document.getElementsByClassName("intro")[0];

function assemble(elements) {
    let variable = 0;
    for (var i = 0; i < elements.length; i++) {
        variable += elements[i].offsetHeight;
    }
    return variable;
}

intro.style.height = assemble(intro.getElementsByTagName("*")) + 30 + "px";