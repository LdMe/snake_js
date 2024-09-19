/*
Juego tipo snake en javascript

*/

//-------------------- Variables --------------------

// Canvas
var canvas;
var ctx;

// Velocidad de la serpiente (ms)
var delay = 400;

// Cantidad y tamaño de celdas
var cellsX = 20;
var cellsY = 20;
var cellSize = {
    x: 50,
    y: 50
};

// Serpiente
var snake = [];
snake[0] = {
    x: 0 ,
    y: 0
};
var snakeColor = {
    head: "green",
    body: "#33ff33",
    border: "red"
}
// Comida
var comida;

// Puntuación
var puntuacion = 0;

// Control de la serpiente
var snakeDirection;
var oldSnakeDirection; // Para evitar que la serpiente se pueda dar la vuelta sobre si misma


//-------------------- Funciones --------------------


document.addEventListener("keydown", direction);// Capturar teclas

// Crear comida
function createFood() {
    comida = {
        x: Math.floor(Math.random() * cellsX),
        y: Math.floor(Math.random() * cellsY) 
    }
}

// Reiniciar juego
function restart() {
    snake = [];
    snake[0] = {
        x: 0 ,
        y: 0
    };
    snakeDirection = "";
    oldSnakeDirection = "";
    puntuacion = 0;
    delay = 400;
    createFood();

}

// Control de la serpiente
function direction(event) {
    var tecla = event.keyCode;
    if (tecla == 37 && oldSnakeDirection != "RIGHT") {
        snakeDirection = "LEFT";
    } else if (tecla == 38 && oldSnakeDirection != "DOWN") {
        snakeDirection = "UP";
    } else if (tecla == 39 && oldSnakeDirection != "LEFT") {
        snakeDirection = "RIGHT";
    } else if (tecla == 40 && oldSnakeDirection != "UP") {
        snakeDirection = "DOWN";
    }
    if (tecla == 82) {
        location.reload();
    }
}

// Colisiones
function collision(head, array) {
    for (var i = 0; i < array.length; i++) {
        if (head.x == array[i].x && head.y == array[i].y) {
            return true;
        }
    }
    return false;
}

// Obtener canvas
function getCanvas() {
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
}
// Dibujar celda
function drawCell(x, y, color="gray", borderColor="black") {
    ctx.fillStyle = color;
    ctx.fillRect(x * cellSize.x, y * cellSize.y, cellSize.x, cellSize.y);
    ctx.strokeStyle = borderColor;
    ctx.strokeRect(x * cellSize.x, y * cellSize.y, cellSize.x, cellSize.y);
}
// Dibujar tabla
function drawTable() {
    for (var i = 0; i < cellsX; i++) {
        for (var j = 0; j < cellsY; j++) {
            drawCell(i, j);
        }
    }
}


//Dibujar comida
function drawFood() {
    drawCell(comida.x , comida.y , "red", "black");
}

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

// Dibujar puntuación
function drawScore(x) {
    ctx.fillStyle = "white";
    ctx.font = "45px Changa one";
    ctx.fillText(x, 2 * cellSize.x, 1.6 * cellSize.y);
}
// Dibujar todo
function draw() {
    drawTable();
    drawSnake();
    drawFood();
    drawScore(puntuacion);
}
//Moverse 
function move() {
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

//Comer
function eat(snakeX,snakeY) {
    if (snakeX == comida.x && snakeY == comida.y) {
        puntuacion++;
        createFood();
        return true;
    }
    return false;
}

// Aumentar velocidad
function increaseSpeed() {
    if (delay > 100)
    {
        delay *= 0.8;
    }
}

// Mirar si la cabeza se sale del tablero
function outOfBounds(snakeX, snakeY) {
    if (snakeX < 0 || snakeX >= cellsX || snakeY < 0 || snakeY >= cellsY) {
        return true;
    }
    return false;
}

// Finalizar juego
function gameOver(newHead) {
    if (outOfBounds(newHead.x, newHead.y) || collision(newHead, snake)) {
        // Detener el juego
        clearInterval(juego);
        console.log("Game Over");
        alert("Game Over\nScore: " + puntuacion+"\nPress R to restart");
        return true;
    }
    return false;
}

// Función principal
function act() {
    
    var [snakeX, snakeY] = move();// Moverse nos devuelve la nueva posición de la cabeza
    
    if (eat(snakeX, snakeY)) {// Si la serpiente come
        increaseSpeed();
        // No quitamos la cola porque la serpiente ha comido
    }
    else {
        snake.pop();// Quitar la cola
    }

    var newHead = {
        x: snakeX,
        y: snakeY
    }// Crear nueva cabeza

    // Game Over
     if (!gameOver(newHead)) {// Si no ha terminado el juego
        snake.unshift(newHead);// Añadir nueva cabeza
        oldSnakeDirection = snakeDirection;// Guardar dirección anterior
        setTimeout(act, delay);// Llamar a la función principal después de un tiempo
    }
    
    
}

// Inicializar juego
setTimeout(getCanvas, 10);// Esperar a que se cargue el canvas
createFood();
act();
var juego = setInterval(draw, 100);// Dibujar cada 100ms

