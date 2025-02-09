function moveButton() {
    let button = document.getElementById("noButton");
    let buttonWidth = button.offsetWidth;
    let buttonHeight = button.offsetHeight;

    let maxX = window.innerWidth - buttonWidth - 40;
    let maxY = window.innerHeight - buttonHeight - 40;

    let x = Math.max(20, Math.random() * maxX);
    let y = Math.max(20, Math.random() * maxY);

    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
}

function sayYes() {
    document.getElementById("question").style.display = "none";
    document.getElementById("buttons").style.display = "none";
    document.getElementById("gifContainer").style.display = "flex";
}
