import random
import pyautogui, time

pyautogui.FAILSAFE = False

time.sleep(10)

def down(count):
  pyautogui.press('down', presses=count)

def up(count):
  pyautogui.press('up', presses=count)

def enter():
  pyautogui.press('return')

def tab(count):
  pyautogui.press('tab', presses=count)

def sleep(count):
  time.sleep(count)

def rndn(limit):
  return random.randint(1,limit)

if __name__ == '__main__':
  tab(1)
  sleep(1)
  tab(1)
  sleep(1)
  tab(1)
  sleep(1)
  time.sleep(3)
  for x in range(0, 1000000):
    for _ in range(5): # 5 times down with enter and hotkey combo for each
      down(2)
      time.sleep(random.randint(10,20))
      enter()
      time.sleep(random.randint(20,30))

    for _ in range(5): # 5 times up with enter and hotkey combo for each
      up(2)
      time.sleep(random.randint(30,60))
      enter()
      time.sleep(random.randint(40,60))