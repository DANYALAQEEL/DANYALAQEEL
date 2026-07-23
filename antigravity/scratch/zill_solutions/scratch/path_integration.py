import cmath
import numpy as np

# Path: -1 -> 1 -> 1+i
# Let's compute the integral of f'(z) along this path.
# For the segment -1 to 1: we approach from the upper half-plane, so arg(t-1) = +pi, arg(t+1) = 0.
# So cmath.sqrt(t-1) = i * sqrt(1-t), cmath.sqrt(t+1) = sqrt(t+1).
# Thus f'(t) = i * sqrt((1-t)/(1+t)).
# Let's integrate this numerically from -1 to 1.

n = 1000000
dt = 2.0 / n
int1 = 0j
for i in range(n):
    t = -1.0 + (i + 0.5) * dt
    # analytic f'(t)
    val = 1j * np.sqrt((1.0 - t) / (1.0 + t))
    int1 += val * dt

# For the segment 1 to 1+i: z(s) = 1 + i*s for s in [0, 1].
# dz = i ds.
# f'(z) = cmath.sqrt(z-1) / cmath.sqrt(z+1) = cmath.sqrt(i*s) / cmath.sqrt(2+i*s)
int2 = 0j
ds = 1.0 / n
for i in range(n):
    s = (i + 0.5) * ds
    z = 1.0 + 1j * s
    val = cmath.sqrt(z - 1) / cmath.sqrt(z + 1)
    int2 += val * 1j * ds

print("Integral -1 -> 1:", int1)
print("Integral 1 -> 1+i:", int2)
print("Total -1 -> 1 -> 1+i:", int1 + int2)
