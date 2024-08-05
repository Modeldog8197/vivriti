function showDropdown(id) {
    var dropdown = document.getElementById(id);
    if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
    } else {
        dropdown.style.display = "block";
    }
}
function menu(){
    document.getElementById('menu-btn').style.visibility = 'hidden';
    document.getElementById('side-bar').style.left = '0';
    document.getElementById('close-btn').style.visibility = 'visible';
}      
function clsemenu(){
    document.getElementById('side-bar').style.left = '-2960px';
    document.getElementById('menu-btn').style.visibility = 'visible';
}