//Comer
function eat(snakeX,snakeY) {
    if (snakeX == comida.x && snakeY == comida.y) {
        puntuacion++;
        createFood();
        return true;
    }
    return false;
}

//Comer
function eat(snakeX,snakeY) {
    /*TODO: si coincide la posicion de la cabeza con la posicion de la comida*/{
        /*TODO: incrementar la puntuacion*/
        createFood();
        return true;
    }
    return false;
}