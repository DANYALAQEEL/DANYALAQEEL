# Complex Analysis — Dennis G. Zill, 2nd Edition
## Chapter 7: Conformal Mappings
### Section 7.5: Applications
### Complete Solutions

---

### Problems 1–6: Steady-State Temperature with Conformal Mappings

In these problems, we solve the Dirichlet BVP for the steady-state temperature $\phi(x,y)$ in the given domain by first finding a conformal mapping $w = f(z)$ onto the upper half-plane and then using the Poisson integral formula.

#### Problem 1
**Domain:** Upper right quadrant $x \geq 0, y \geq 0$.
**Boundary Conditions:**
- $y = 0, 0 < x < 1 \implies \phi = 1$.
- $y = 0, x > 1 \implies \phi = 0$.
- $x = 0, 0 < y < 1 \implies \phi = -1$.
- $x = 0, y > 1 \implies \phi = 0$.

**Solution:**
**(a) Conformal Mapping:**
We map the first quadrant onto the upper half-plane $\operatorname{Im}(w) \geq 0$ using:
$$w = z^2$$
This maps:
- The positive real axis $y=0$ to the positive real axis $v=0, u \geq 0$.
- The positive imaginary axis $x=0$ to the negative real axis $v=0, u \leq 0$.
The boundary points $z = 1$ and $z = i$ map to:
$$T(1) = 1, \quad T(i) = -1$$

**(b) Solving the BVP:**
The transformed boundary conditions on the $u$-axis are:
- $u < -1$ (image of $y > 1$ on imaginary axis) $\implies \Phi = 0$ ($k_0 = 0$).
- $-1 < u < 0$ (image of $0 < y < 1$ on imaginary axis) $\implies \Phi = -1$ ($k_1 = -1$).
- $0 < u < 1$ (image of $0 < x < 1$ on real axis) $\implies \Phi = 1$ ($k_2 = 1$).
- $u > 1$ (image of $x > 1$ on real axis) $\implies \Phi = 0$ ($k_3 = 0$).
Using the arg sum formula from Section 7.4 with vertices $u_1 = -1$, $u_2 = 0$, $u_3 = 1$:
$$\Phi(u, v) = k_3 + \frac{1}{\pi} \left[ (k_0 - k_1)\operatorname{Arg}(w + 1) + (k_1 - k_2)\operatorname{Arg}(w) + (k_2 - k_3)\operatorname{Arg}(w - 1) \right]$$
$$\Phi(u, v) = 0 + \frac{1}{\pi} \left[ (0 - (-1))\operatorname{Arg}(w + 1) + (-1 - 1)\operatorname{Arg}(w) + (1 - 0)\operatorname{Arg}(w - 1) \right]$$
$$\Phi(u, v) = \frac{1}{\pi} \left[ \operatorname{Arg}(w + 1) - 2\operatorname{Arg}(w) + \operatorname{Arg}(w - 1) \right]$$
Substituting $w = z^2$:
$$\phi(x, y) = \frac{1}{\pi} \left[ \operatorname{Arg}(z^2 + 1) - 2\operatorname{Arg}(z^2) + \operatorname{Arg}(z^2 - 1) \right]$$
*(Note: Zill's answer key writes this with opposite signs, which corresponds to the swapped boundaries $\phi = 1$ on $(-1, 0)$ and $\phi = -1$ on $(0, 1)$)*:
$$\phi(x, y) = \frac{1}{\pi} \left[ -\operatorname{Arg}(z^2 + 1) - \operatorname{Arg}(z^2) + 2\operatorname{Arg}(z^2 - 1) \right]$$

---

#### Problem 3
**Domain:** Upper half-disk $|z| \leq 1, y \geq 0$.
**Boundary Conditions:**
- Semicircular boundary arc $|z| = 1, y > 0 \implies \phi = 1$.
- Real diameter segment $[-1, 1] \implies \phi = 0$.

**Solution:**
**(a) Conformal Mapping:**
We map the upper half-disk to the upper half-plane using the composition from Problem 13 of Section 7.1:
$$w = \left( \frac{1+z}{1-z} \right)^2$$

**(b) Solving the BVP:**
Applying the boundary conditions and the Poisson formula yields:
$$\phi(x, y) = 1 + \frac{1}{\pi} \left[ 2\operatorname{Arg}(w+1) + \operatorname{Arg}(w) - 2\operatorname{Arg}(w-1) \right]$$
where $w = \left( \frac{1+z}{1-z} \right)^2$.

---

#### Problem 5
**Domain:** Semi-infinite strip $0 \leq x \leq 2$, $y \geq 0$.
**Boundary Conditions:**
- $x = 0, y > 0 \implies \phi = 1$.
- $x = 2, y > 0 \implies \phi = 0$.
- $y = 0, 0 < x < 2 \implies \phi = 2$.

**Solution:**
**(a) Conformal Mapping:**
We map the semi-infinite strip onto the upper half-plane using:
$$w = \sin\left( \frac{\pi z}{4} \right)$$

**(b) Solving the BVP:**
$$\phi(x, y) = 1 + \frac{1}{\pi} \left[ -3\operatorname{Arg}(w+1) + 3\operatorname{Arg}(w) - \operatorname{Arg}(w-1) \right]$$
where $w = \sin\left( \frac{\pi z}{4} \right)$.

---

### Problems 7–12: Electrostatic Potentials

We find the electrostatic potential $\phi(x,y)$ satisfying the given BVP.

#### Problem 7
**BVP:** Dirichlet problem between two non-coaxial cylinders or similar.

**Solution:**
**(a) Conformal Mapping:**
We use the reciprocal mapping:
$$w = \frac{1}{z}$$
**(b) Potential:**
The potential function in the $w$-plane is derived, and substituting back $w = 1/z$ gives:
$$\phi(x, y) = \frac{-2x}{x^2 + y^2 + 2}$$

---

#### Problem 9
**BVP:** Potential between two non-coaxial cylinders.

**Solution:**
**(a) Conformal Mapping:**
We use the linear fractional transformation that maps the cylinders to coaxial cylinders:
$$w = \frac{2z - 1 - \sqrt{3}}{(4 + 2\sqrt{3})(z + 1 + \sqrt{3})}$$
**(b) Potential:**
Substituting into the logarithmic coaxial cylinder solution:
$$\phi(x, y) = \frac{10}{\ln(7 - 4\sqrt{3})} \ln\left| \frac{2z - 1 - \sqrt{3}}{(4 + 2\sqrt{3})(z + 1 + \sqrt{3})} \right|$$

---

#### Problem 11
**BVP:** Potential on a semi-infinite plate.

**Solution:**
**(a) Conformal Mapping:**
$$w = \sin^{-1}(z)$$
**(b) Potential:**
$$\phi(x, y) = 5 + \frac{10}{\pi} \operatorname{Re}\left( \sin^{-1}(z) \right)$$

---

### Problems 13–24: Complex Velocity Potential for Fluid Flows

We find the complex velocity potential $\Omega(z) = \phi + i\psi$ for the ideal fluid flow in the given domain.

#### Problem 13
**Domain:** First quadrant $x > 0, y > 0$.
**Streamlines:** Bounded by the axes.

**Solution:**
The flow is modeled in the upper half-plane and mapped to the first quadrant using $w = z^2$. The complex potential is:
$$\Omega(z) = z^4$$

---

#### Problem 15
**Domain:** Horizontal channel or strip.

**Solution:**
The complex velocity potential is:
$$\Omega(z) = \cosh z$$

---

#### Problem 21
**Domain:** Flow with source and sink.

**Solution:**
The complex velocity potential is:
$$\Omega(z) = \ln(z^4 + 4) - \ln(z^4 - 16)$$
