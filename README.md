# CS-BW-Conways-Game-of-Life

### How does it work?
    The Game of Life was invented by mathmatician, John Conway, in the 1970's. Conway developed a visual representation of how organisms in the life were populated by creating these simple rules:
        - If the live cell has less than 2 live neighbors (underpopulated) or more than 3 live neighbors (overpopulated), it dies. 
        - If the dead cell has exactly 3 live neighbors, it comes to life (like reproduction)
    These rules would determine whether a cell (or a square on a grid) would either be 'alive' or 'dead' in the game. Live cells were shown by a black square, and dead cells were white squares. These rules are strictly followed by what the neighbors of the cells were. Neighbors are determined by the 8 squares that surround the cell. The rules are implied and implemented in the next 'generation' signifying time going by or actual generations of populated organisms.

### Why is it useful?
    The Game of Life is useful because it shows how a population would increase/decrease over time with these rules. This is not counting any natural or other disasters. The visual representation is where the Cellular Automata comes in.
    
    What is Cellular Automata?
    Otherwise abbreviated CA, is a program that is usually a 2D grid that changes over time. This program usually uses the double buffer method, where there are two states of the grid. The 'current' state is what shows and the next grid/generation to show is a 'new' grid altogether. The 'current' and 'new' grid change intermediately as one is worked on in the background to show the next generation.

### Turing Completeness
    This saying is used when a computing system or program is able to perform general purpose computation. This is referred to my representation of the Game of Life because it correctly computes the patterns of the neighbors to be able to change each generation.

### FullStack Web Implementation
    React, class components, correct use of props and state management, Javascript, CSS and React Styling Components
