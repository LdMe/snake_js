
# Snake Game en JavaScript

Este repositorio contiene el código base para un juego tipo Snake que los alumnos deben completar. Algunas funciones están implementadas, pero hay partes clave que deben ser desarrolladas por los estudiantes.

## Introducción

El juego de Snake funciona en un canvas de HTML5 donde la serpiente se mueve por una cuadrícula. A continuación, te proporcionamos una breve explicación de las variables globales y su función en el juego:

### Variables Globales

- **Canvas (`canvas`)** y **Contexto (`ctx`)**: Usados para dibujar la serpiente, la comida y la tabla en el navegador.
- **Velocidad (`delay`)**: Controla el tiempo entre cada movimiento de la serpiente (inicialmente, cada 400 milisegundos).
- **Tamaño de la tabla (`cellsX`, `cellsY`, `cellSize`)**: Define el número de celdas en la cuadrícula y el tamaño de cada celda.
- **Serpiente (`snake`)**: Un array de objetos que almacena las coordenadas de cada parte de la serpiente. cada elemento del array es un objeto con las propiedades `x` y `y`.
- **Colores de la serpiente (`snakeColor`)**: Define los colores de la cabeza, el cuerpo y el borde de la serpiente.
- **Comida (`comida`)**: Un objeto que almacena las coordenadas de la comida.
- **Puntuación (`puntuacion`)**: La cantidad de puntos acumulados por la serpiente.
- **Dirección de la serpiente (`snakeDirection`, `oldSnakeDirection`)**: Almacena la dirección actual y anterior de la serpiente para evitar que se gire sobre sí misma.

Tu objetivo es completar el código donde veas comentarios `TODO`. A continuación, detallamos las funciones que debes completar, paso a paso.

### Funciones a Completar

1. **Función `collision(head, array)`**
   - **Descripción:** Esta función verifica si la cabeza de la serpiente ha colisionado con alguna parte de su cuerpo.
   - **Pasos:**
     1. Implementa un bucle que recorra cada elemento del array.
     2. Dentro del bucle, comprueba si las coordenadas de la cabeza (`head.x` y `head.y`) coinciden con las coordenadas de cualquier elemento del cuerpo (`array[i].x` y `array[i].y`).
     3. Si hay coincidencia, devuelve `true` indicando que ha ocurrido una colisión.
     4. Si no hay colisión, al terminar el bucle devuelve `false`.

2. **Función `drawTable()`**
   - **Descripción:** Esta función dibuja la tabla de celdas en el canvas.
   - **Pasos:**
     1. Implementa un bucle que recorra todas las celdas en el eje X (de 0 a `cellsX`).
     2. Anidado dentro del primer bucle, añade otro bucle para recorrer las celdas en el eje Y (de 0 a `cellsY`).
     3. En cada iteración de los bucles, utiliza la función `drawCell(i, j)` para dibujar las celdas del tablero.

3. **Función `drawSnake()`**
   - **Descripción:** Esta función dibuja la serpiente en el canvas, usando un color diferente para la cabeza.
   - **Pasos:**
     1. Implementa un bucle que recorra cada parte del cuerpo de la serpiente (array `snake`).
     2. Si es la primera iteración (es decir, la cabeza de la serpiente), asigna el color de la cabeza (`snakeColor.head`).
     3. En caso contrario, usa el color del cuerpo (`snakeColor.body`).
     4. Llama a `drawCell` con las coordenadas `x` y `y` correspondientes a la parte de la serpiente y el color adecuado.

4. **Función `move()`**
   - **Descripción:** Esta función calcula la nueva posición de la cabeza de la serpiente en base a la dirección actual.
   - **Pasos:**
     1. Guarda las coordenadas actuales de la cabeza de la serpiente (posición X e Y del primer elemento del array `snake`).
     2. Según la dirección almacenada en `snakeDirection`, actualiza las coordenadas:
        - Si la dirección es `LEFT`, disminuye la coordenada X.
        - Si es `UP`, disminuye la coordenada Y.
        - Si es `RIGHT`, aumenta la coordenada X.
        - Si es `DOWN`, aumenta la coordenada Y.
     3. Devuelve las nuevas coordenadas de la cabeza.

5. **Función `eat(snakeX, snakeY)`**
   - **Descripción:** Esta función verifica si la serpiente ha comido la comida.
   - **Pasos:**
     1. Comprueba si las coordenadas de la cabeza de la serpiente (parámetros `snakeX` y `snakeY`) coinciden con las coordenadas de la comida (`comida.x` y `comida.y`).
     2. Si coinciden, incrementa la puntuación (`puntuacion++`), crea nueva comida llamando a `createFood()`, y devuelve `true` (indicando que la serpiente ha comido).
     3. Si no hay coincidencia, devuelve `false`.

6. **Función `outOfBounds(snakeX, snakeY)`**
   - **Descripción:** Verifica si la cabeza de la serpiente ha salido del tablero.
   - **Pasos:**
     1. Comprueba si las coordenadas de la cabeza (`snakeX`, `snakeY`) están fuera de los límites del tablero.
     2. Si están fuera de los límites (`snakeX < 0`, `snakeX >= cellsX`, `snakeY < 0`, `snakeY >= cellsY`), devuelve `true`.
     3. Si no, devuelve `false`.

## Guía de Uso

1. Clona el repositorio:
   ```bash
   git clone <URL del repositorio>
   ```

2. Abre el archivo `index.html` en tu navegador o con Live Server de Visual Studio Code.

3. Completa las funciones donde veas los comentarios `TODO`. Si tienes dudas o necesitas verificar tus respuestas, puedes encontrar las soluciones en la carpeta `js/cheats`, donde cada archivo `.js` lleva el nombre de la función correspondiente.

4. Una vez completadas las funciones, prueba el juego recargando la página.

Si quieres ver el juego completo antes de terminar los ejercicios, puedes cambiar el link en `index.html` para que apunte a `js/cheats/juego_full.js`. Para volver a ver el juego original, cambia el link en `index.html` a `js/juego.js`.

## Recursos Disponibles

- **Carpeta `js/cheats`:** Aquí puedes encontrar las soluciones para las funciones en caso de necesitar ayuda.

## Controles del Juego

- Usa las flechas del teclado para mover la serpiente.
- Presiona la tecla `R` para reiniciar el juego.

---
