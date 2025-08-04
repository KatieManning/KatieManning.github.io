function displayDDM() {
    document.getElementById("dropDown").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.dropBtn')) {
        document.getElementById("dropDown").classList.remove('show');    }
}