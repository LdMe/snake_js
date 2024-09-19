// Finalizar juego
function gameOver(newHead) {
    if (newHead.x < 0 || newHead.x >= cellsX || newHead.y < 0 || newHead.y >= cellsY || collision(newHead, snake)) {
        // Detener el juego
        clearInterval(juego);
        clearInterval(act);
        console.log("Game Over");
        alert("Game Over\nScore: " + puntuacion+"\nPress R to restart");
        return true;
    }
    return false;
}


// Finalizar juego
function gameOver(newHead) {
    /*TODO: si la cabeza de la serpiente sale de los límites del tablero o colisiona con el cuerpo*/ {
        // Detener el juego
        clearInterval(juego);
        clearInterval(act);
        console.log("Game Over");
        alert("Game Over\nScore: " + puntuacion+"\nPress R to restart");
        return true;
    }
    return false;
}