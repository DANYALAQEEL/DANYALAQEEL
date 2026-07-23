import scipy.integrate as integrate
import cmath
import numpy as np

# Problem 15: f'(z) = (z+1)**(-0.5) * (z-1)**(0.5), f(-1) = 0
# f(z) = \int_{-1}^z (t+1)**(-0.5) * (t-1)**(0.5) dt
def f15(z):
    # path from -1 to z. Let's do a straight line: t(s) = -1 + s*(z - (-1)) for s in [0, 1]
    # dt = (z + 1) ds
    # integrand: (t+1)**(-0.5) * (t-1)**(0.5) * (z + 1)
    func = lambda s: cmath.sqrt(-1 + s*(z + 1) - 1) / cmath.sqrt(-1 + s*(z + 1) + 1) * (z + 1)
    real_part = integrate.quad(lambda s: func(s).real, 0, 1)[0]
    imag_part = integrate.quad(lambda s: func(s).imag, 0, 1)[0]
    return complex(real_part, imag_part)

# Problem 16: f'(z) = (z+1)**(-0.25) * z**(-0.5) * (z-1)**(-0.25), f(0) = 0
# f(z) = \int_0^z (t+1)**(-0.25) * t**(-0.5) * (t-1)**(-0.25) dt
def f16(z):
    # path from 0 to z: t(s) = s*z
    # dt = z ds
    func = lambda s: (s*z + 1)**(-0.25) * (s*z)**(-0.5) * (s*z - 1)**(-0.25) * z
    real_part = integrate.quad(lambda s: func(s).real, 0, 1)[0]
    imag_part = integrate.quad(lambda s: func(s).imag, 0, 1)[0]
    return complex(real_part, imag_part)

# Problem 17: f'(z) = A(z+1)**(-0.5) * (z-1)**(-0.5) = A / \sqrt{z^2-1}
# Here from Problem 8, let's check what f(z) is.
# Problem 8: f'(z) = A(z+1)**(-0.5) * (z-1)**(-0.5)
# Wait, let's check what the mapping in Problem 8 is.
# From Section 7.3 Problem 8: f'(z) = A(z+1)**(-1/2)(z-1)**(-1/2).
# Let's assume A = 1 and B = 0 for standard integration: f(z) = \int_0^z (t^2-1)**(-0.5) dt = \arcsin(z) or similar (with branch cuts)
# Let's integrate with f(0) = 0:
def f17(z):
    func = lambda s: 1.0 / cmath.sqrt((s*z)**2 - 1) * z
    real_part = integrate.quad(lambda s: func(s).real, 0, 1)[0]
    imag_part = integrate.quad(lambda s: func(s).imag, 0, 1)[0]
    return complex(real_part, imag_part)

# Problem 18: f'(z) = (z+1)**(-1/3) * z**(-1/3), f(0) = 0
def f18(z):
    func = lambda s: (s*z + 1)**(-1.0/3.0) * (s*z)**(-1.0/3.0) * z
    real_part = integrate.quad(lambda s: func(s).real, 0, 1)[0]
    imag_part = integrate.quad(lambda s: func(s).imag, 0, 1)[0]
    return complex(real_part, imag_part)

print("Problem 15:")
print(f"f(i) = {f15(1j)}")
print(f"f(1+i) = {f15(1+1j)}")
print("Problem 16:")
print(f"f(i) = {f16(1j)}")
print(f"f(1+i) = {f16(1+1j)}")
print("Problem 17:")
print(f"f(i) = {f17(1j)}")
print(f"f(1+i) = {f17(1+1j)}")
print("Problem 18:")
print(f"f(i) = {f18(1j)}")
print(f"f(1+i) = {f18(1+1j)}")
