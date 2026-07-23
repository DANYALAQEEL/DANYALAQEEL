import cmath
import numpy as np

# Integrand: sqrt((1-t)/(1+t))
def integrate_path(start, end, n=100000):
    s_vals = np.linspace(0, 1, n)
    ds = 1.0 / (n - 1)
    total = 0.0
    for s in s_vals:
        t = start + s * (end - start)
        if abs(t + 1) < 1e-9:
            continue
        val = cmath.sqrt(1 - t) / cmath.sqrt(1 + t)
        total += val * (end - start) * ds
    return total

print("Path -1 to i:", integrate_path(-1, 1j))
print("Path -1 to 1+i:", integrate_path(-1, 1+1j))
