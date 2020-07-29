import pygame
import numpy as np
import random

class Grid:
    def __init__(self, width, height, scale, offset):
        self.scale = scale
        self.columns = int(height / scale)
        self.rows = int(width / scale)
        self.size = (self.rows, self.columns)
        self.grid_array = np.ndarray(shape=(self.size))
        self.offset = offset
    
    #setup the grid
    def random2d_array(self):
        for x in range(self.rows):
            for y in range(self.columns):
                self.grid_array[x][y] = random.randint(0, 1)

    
    def Conway(self, off_color, on_color, surface):
        for x in range(self.rows):
            for y in range(self.columns):
                y_pos = y * self.scale
                x_pos = x * self.scale

                #implementing colors if dead or alive
                if self.grid_array[x][y] == 1:
                    pygame.draw.rect(surface, on_color, [x_pos, y_pos, self.scale-self.offset, self.scale-self.offset])
                else:
                    pygame.draw.rect(surface, off_color, [x_pos, y_pos, self.scale-self.offset, self.scale-self.offset])

        #next is new array
        next = np.ndarray(shape=(self.size))
        #implementing state of cells with rules of game
        for x in range(self.rows):
            for y in range(self.columns):
                state = self.grid_array[x][y]
                neighbors = self.get_neighbors(x, y)
                #if state of cell is dead and has 3 live neighbors, its next state will be alive
                if state == 0 and neighbors == 3:
                    next[x][y] = 1
                #if state of cell is alive and has less than 2 live neighrbors or more than 3, cell's next state is dead
                elif state == 1 and (neighbors < 2 or neighbors > 3):
                    next[x][y] = 0
                #otherwise the state of the cell stays the same
                else:
                    next[x][y] = state

        self.grid_array = next
        
    #getting neightbors, and edges wrap around to next edge
    def get_neighbors(self, x, y):
        total = 0
        for n in range(-1, 2):
            for m in range(-1, 2):
                x_edge = (x + n + self.rows) % self.rows
                y_edge = (y + m + self.columns) % self.columns
                total += self.grid_array[x_edge][y_edge]

        total -= self.grid_array[x][y]
        return total
