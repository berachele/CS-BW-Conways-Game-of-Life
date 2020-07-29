import pygame
import os
import grid

os.environ["SDL_VIDEO_CENTERED"]='1'

width, height = 1200, 700
size = (width, height)

pygame.init()
pygame.display.set_caption("Conway's Game of Life")
screen = pygame.display.set_mode(size)
clock = pygame.time.Clock()
fps = 60

black = (0, 0, 0)
pink = (199, 21, 133)
white = (255, 255, 255)

scaler = 40
offset = 1

Grid = grid.Grid(width, height, scaler, offset)
Grid.random2d_array()

running = True

while running:
    clock.tick(fps)
    screen.fill(black)

    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            run = False

    Grid.Conway(off_color=white, on_color=pink, surface=screen)

    pygame.display.update()