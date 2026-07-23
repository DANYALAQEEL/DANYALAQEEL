import cmath
import numpy as np

# Let's compute the integral of f'(z) from 1 to i and 1 to 1+i
# along straight line paths:
# 1 -> i: t(s) = 1 + s*(i - 1)
# 1 -> 1+i: t(s) = 1 + i*s

def integrate_path(start, end, n=100000):
    s_vals = np.linspace(0, 1, n)
    ds = 1.0 / (n - 1)
    total = 0.0
    for s in s_vals:
        t = start + s * (end - start)
        val = cmath.sqrt(t - 1) / cmath.sqrt(t + 1)
        total += val * (end - start) * ds
    return total

print("Path 1 to i:", integrate_path(1, 1j))
print("Path 1 to 1+i:", integrate_path(1, 1+1j))
