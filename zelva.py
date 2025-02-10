import math
from turtle import forward, exitonclick, left

left(90)
forward(90)
strecha = ((45 ** 2 + 45 ** 2) ** 0.5)
uhelStrecha = math.degrees(math.acos(45 / strecha))
left(uhelStrecha)
forward(strecha)
left(180 - 2 * uhelStrecha)
forward(strecha)
left(uhelStrecha)
forward(90)
domecek = (90 ** 2 + 90 ** 2) ** 0.5
uhelDomecek = math.degrees(math.acos(90 / domecek))
left(180 - uhelDomecek)
forward(domecek)
left(180 - uhelDomecek)
forward(90)
left(180 - uhelDomecek)
forward(domecek)
left(180 + uhelDomecek)
forward(90)
exitonclick()
