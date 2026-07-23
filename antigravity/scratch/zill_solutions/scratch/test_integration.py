import cmath
import numpy as np

# Let's perform a simple trapezoidal integration of f'(t) = (t-1)**0.5 / (t+1)**0.5
# from -1 to i along a straight line path: t(s) = -1 + (1+i)*s, where s goes from 0 to 1.
# Wait, for z1 = i, the path is from -1 to i: t(s) = -1 + (1+i)*s
# For z2 = 1+i, the path is from -1 to 1+i: t(s) = -1 + (2+i)*s

def integrate_path(start, end, n=100000):
    s_vals = np.linspace(0, 1, n)
    ds = 1.0 / (n - 1)
    total = 0.0
    for s in s_vals:
        t = start + s * (end - start)
        # We compute (t-1)**0.5 / (t+1)**0.5 using principal branch
        # but let's be careful: if t+1 is close to 0, it might be singular.
        # So we can use a small epsilon or let's use the analytical form.
        if abs(t + 1) < 1e-9:
            continue
        val = cmath.sqrt(t - 1) / cmath.sqrt(t + 1)
        total += val * (end - start) * ds
    return total

print("Path -1 to i:", integrate_path(-1, 1j))
print("Path -1 to 1+i:", integrate_path(-1, 1+1j))
