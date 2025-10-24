function acende() {
    const lampada = document.getElementById("vidro")
    if (lampada.style.backgroundColor === "rgb(242, 231, 11)") {
        lampada.style.backgroundColor = "#000000";
    }
    else {
        lampada.style.backgroundColor = "rgb(242, 231, 11)";
    }
}