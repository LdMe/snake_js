function moverse() {
    // Antigua posición de la cabeza de la serpiente
    var snakeX = snake[0].x;
    var snakeY = snake[0].y;

    // Dirección
    switch (snakeDirection) {
        case "LEFT":
            snakeX -= 1;
            break;
        case "UP":
            snakeY -= 1;
            break;
        case "RIGHT":
            snakeX += 1;
            break;
        case "DOWN":
            snakeY += 1;
            break;
    }
    return [snakeX, snakeY];
}


function moverse() {
    // Antigua posición de la cabeza de la serpiente
    var snakeX = /*TODO: posición x de la cabeza de la serpiente*/
    var snakeY = /*TODO: posición y de la cabeza de la serpiente*/

    // Dirección
    switch (snakeDirection) {
        case "LEFT":
            /*TODO: moverse a la izquierda*/
            break;
        case "UP":
            /*TODO: moverse arriba*/
            break;
        case "RIGHT":
            /*TODO: moverse a la derecha*/
            break;
        case "DOWN":
            /*TODO: moverse abajo*/
            break;
    }
    /*TODO: devolver la nueva posición de la cabeza de la serpiente*/
}