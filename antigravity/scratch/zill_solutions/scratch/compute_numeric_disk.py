import scipy.integrate as integrate
import cmath
import numpy as np

# Poisson integral formula for the disk:
# \phi(z) = 1/(2\pi) \int_{-\pi}^{\pi} f(t) (1 - |z|^2) / |e^{it} - z|^2 dt
def phi_disk(z, f):
    z_abs = abs(z)
    if z_abs < 1e-9:
        # At the center, it's just the average of f(t)
        val = integrate.quad(lambda t: f(t), -np.pi, np.pi)[0]
        return val / (2.0 * np.pi)
    
    # Numerically integrate
    func = lambda t: f(t) * (1.0 - z_abs**2) / (abs(cmath.exp(1j*t) - z)**2)
    val = integrate.quad(func, -np.pi, np.pi)[0]
    return val / (2.0 * np.pi)

# Problem 15: f(t) = t**2
f15 = lambda t: t**2
# Problem 16: f(t) = e**(-|t|)
f16 = lambda t: np.exp(-abs(t))

points = [0.0, 0.5 + 0.5j, 1j/3.0]
names = ["(0,0)", "(1/2, 1/2)", "(0, 1/3)"]

print("Problem 15 values:")
for p, name in zip(points, names):
    print(f"At {name}: {phi_disk(p, f15):.6f}")

print("\nProblem 16 values:")
for p, name in zip(points, names):
    print(f"At {name}: {phi_disk(p, f16):.6f}")
