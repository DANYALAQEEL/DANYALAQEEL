import cmath
import numpy as np

# Path: -1 -> 0 -> i
# Segment 1: -1 to 0 along the real axis.
# Since we approach from the upper half-plane:
# For t in [-1, 0], t-1 < 0, so arg(t-1) = pi.
# So cmath.sqrt(t-1) = i*sqrt(1-t), cmath.sqrt(t+1) = sqrt(t+1).
# Thus f'(t) = i * sqrt((1-t)/(1+t)).
n = 100000
dt = 1.0 / n
int1 = 0j
for i in range(n):
    t = -1.0 + (i + 0.5) * dt
    val = 1j * np.sqrt((1.0 - t) / (1.0 + t))
    int1 += val * dt

# Segment 2: 0 to i along the imaginary axis: z(s) = i*s for s in [0, 1].
# dz = i ds.
# f'(z) = cmath.sqrt(z-1) / cmath.sqrt(z+1) = cmath.sqrt(i*s - 1) / cmath.sqrt(i*s + 1).
int2 = 0j
ds = 1.0 / n
for i in range(n):
    s = (i + 0.5) * ds
    z = 1j * s
    val = cmath.sqrt(z - 1) / cmath.sqrt(z + 1)
    int2 += val * 1j * ds

print("Segment 1 (-1 to 0):", int1)
print("Segment 2 (0 to i):", int2)
print("Total -1 -> 0 -> i:", int1 + int2)
