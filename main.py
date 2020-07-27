import pygame
import os

os.environ["SDL_VIDEO_CENTERED"]='1'

width, height = 1440, 900
size = (width, height)

pygame.init()
pygame.display.set_caption("Conway's Game of Life")
screen = pygame.display.set_mode(size)
clock = pygame.time.Clock()
fps = 60

black = (0, 0, 0)
blue = (0, 14, 71)
white = (255, 255, 255)

