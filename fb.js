// ... your existing JavaScript ...

function menu() {
    let sidebar = document.getElementById("side-bar");
    sidebar.classList.add("active");
    sidebar.style.left = '0';
}

function clsemenu() {
    let sidebar = document.getElementById("side-bar");
    sidebar.classList.remove("active");
    sidebar.style.left = '-300px';
}

// ... your existing JavaScript ...

function opn() {
    document.getElementById('chatbot').style.visibility = 'visible';
    document.getElementById('button').style.visibility = 'hidden';
    document.getElementById('closebutton').style.visibility = 'visible';
}
 function clse() {
        document.getElementById('chatbot').style.visibility = 'hidden';
        document.getElementById('button').style.visibility = 'visible';
        document.getElementById('closebutton').style.visibility = 'hidden';
}