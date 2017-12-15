import sys

import numpy as np
import cv2
from matplotlib import pyplot as plt

img = cv2.imread(sys.argv[1])
hsv = cv2.cvtColor(img, cv2.COLOR_BGR2HSV)
h,s,v = cv2.split(hsv)
V = v.reshape((-1,1))
print V
plt.hist(V, 250, [0, 250])
plt.show()