

// Dibujar serpiente
function drawSnake() {
    for (var i = 0; i < snake.length; i++) {
        var color = snakeColor.body;
        if (i == 0)
        {
            color = snakeColor.head;
        }
        drawCell(snake[i].x, snake[i].y, color, snakeColor.border);   
    }
}


// Dibujar serpiente
function drawSnake() {
    /*TODO: para i de 0 al tamaño de snake*/ {
        var color = snakeColor.body;
        /*TODO: si es la cabeza*/
        {
            color = snakeColor.head;
        }
        drawCell(/*TODO: posición x de la serpiente*/, /*TODO: posición y de la serpiente*/, color, snakeColor.border);
    }
}