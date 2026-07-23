# Complex Analysis — Dennis G. Zill, 2nd Edition
## Chapter 7 Review Quiz
### Complete Solutions

---

### Problems 1–15: True/False Questions

#### Problem 1
**Statement:** If $f(z)$ is analytic at a point $z_0$, then the mapping $w = f(z)$ is conformal at $z_0$.

**Answer:** **False**

**Justification:**
For a mapping to be conformal at a point $z_0$, it must be analytic at $z_0$ **and** its derivative must satisfy $f'(z_0) \neq 0$.
For example, the function $f(z) = z^2$ is analytic at $z_0 = 0$. However, its derivative is $f'(0) = 0$, so the mapping is not conformal at $z_0 = 0$ (it doubles the angle between curves at $0$).

---

#### Problem 2
**Statement:** The mapping $w = z^2 + iz + 1$ is not conformal at $z = -\frac{1}{2}i$.

**Answer:** **True**

**Justification:**
The function $f(z) = z^2 + iz + 1$ is entire. Its derivative is:
$$f'(z) = 2z + i$$
Evaluating at $z = -\frac{1}{2}i$:
$$f'\left(-\frac{1}{2}i\right) = 2\left(-\frac{1}{2}i\right) + i = -i + i = 0$$
Since the derivative is zero at $z = -\frac{1}{2}i$, the mapping is indeed not conformal at this point.

---

#### Problem 3
**Statement:** The mapping $w = z^2 + 1$ is not conformal at $z = \pm i$.

**Answer:** **False**

**Justification:**
The derivative of $f(z) = z^2 + 1$ is $f'(z) = 2z$.
Evaluating at $z = \pm i$:
$$f'(\pm i) = \pm 2i \neq 0$$
Since the derivative is non-zero at these points, the mapping is conformal at $z = \pm i$.

---

#### Problem 4
**Statement:** The mapping $w = \bar{z}$ fails to be conformal at every point in the complex plane.

**Answer:** **True**

**Justification:**
Conformality requires the mapping to be analytic. The reflection function $f(z) = \bar{z} = x - iy$ is nowhere analytic because it does not satisfy the Cauchy-Riemann equations:
$$\frac{\partial u}{\partial x} = 1 \neq \frac{\partial v}{\partial y} = -1$$
Hence, the mapping is nowhere conformal.

---

#### Problem 5
**Statement:** A linear fractional transformation is conformal at every point in its domain.

**Answer:** **True**

**Justification:**
A linear fractional transformation $T(z) = \frac{az+b}{cz+d}$ ($ad-bc \neq 0$) is analytic for all $z \neq -d/c$. Its derivative is:
$$T'(z) = \frac{ad - bc}{(cz + d)^2}$$
Since $ad - bc \neq 0$, the derivative is never zero. Thus, the mapping is conformal at all points in its domain of analyticity.

---

#### Problem 6
**Statement:** The image of a circle under a linear fractional transformation is a circle.

**Answer:** **False**

**Justification:**
Under a linear fractional transformation, a circle is mapped to either a circle or a straight line. If the circle passes through the pole $z = -d/c$ of the transformation, its image is a straight line.

---

#### Problem 7
**Statement:** The linear fractional transformation $T(z) = \frac{z - i}{z + 1}$ maps the points $0, -1$, and $i$ onto the points $-i, \infty$, and $0$, respectively.

**Answer:** **True**

**Justification:**
- $T(0) = \frac{0 - i}{0 + 1} = -i$.
- $T(-1) = \frac{-1 - i}{0} = \infty$.
- $T(i) = \frac{i - i}{i + 1} = 0$.
Thus, the statement is true.

---

#### Problem 8
**Statement:** Given any three distinct points $z_1, z_2$, and $z_3$, there is a linear fractional transformation that maps $z_1, z_2$, and $z_3$ onto $0, 1$, and $\infty$.

**Answer:** **True**

**Justification:**
By using the cross-ratio construction:
$$T(z) = \frac{(z - z_1)(z_2 - z_3)}{(z - z_3)(z_2 - z_1)}$$
This is a well-defined linear fractional transformation that maps $z_1 \to 0$, $z_2 \to 1$, and $z_3 \to \infty$.

---

#### Problem 9
**Statement:** The inverse of the linear fractional transformation $T(z) = (az + b)/ (cz + d)$ is $T^{-1}(z) = (cz + d)/ (az + b)$.

**Answer:** **False**

**Justification:**
The inverse of $T(z) = \frac{az+b}{cz+d}$ is:
$$T^{-1}(w) = \frac{dw - b}{-cw + a}$$
It is not $(cz+d)/(az+b)$ (which is $1/T(z)$).

---

#### Problem 10
**Statement:** If $f'(z) = A(z + 1)^{-1/2}(z - 1)^{-3/4}$, then $w = f(z)$ maps the upper half-plane onto an unbounded polygonal region.

**Answer:** **True**

**Justification:**
The vertices corresponding to $x_1 = -1$ and $x_2 = 1$ have interior angles:
- $\alpha_1 = \pi/2$.
- $\alpha_2 = \pi/4$.
The sum of interior angles is $\alpha_1 + \alpha_2 = 3\pi/4 < \pi$, which cannot form a closed bounded polygon. Thus, the polygonal region is unbounded.

---

#### Problem 11
**Statement:** If $f'(z) = A(z + 1)^{-1/2}z^{-1/2}(z - 1)^{-1/2}$, then $w = f(z)$ maps the upper half-plane onto a rectangle.

**Answer:** **True**

**Justification:**
The vertices $x_1 = -1, x_2 = 0, x_3 = 1$, and $x_4 = \infty$ all have interior angles $\alpha_j = \pi/2$. A polygon with 4 right angles is a rectangle.

---

#### Problem 12
**Statement:** Every Dirichlet problem in the upper half-plane can be solved using the Poisson integral formula.

**Answer:** **False**

**Justification:**
The Poisson integral formula requires the boundary function $f(x) = \phi(x, 0)$ to be piecewise continuous and bounded on $(-\infty, \infty)$ for the integral to converge. If $f(x)$ grows too rapidly (e.g., $f(x) = e^{x^2}$), the integral diverges.

---

#### Problem 13
**Statement:** If $w = f(z) = u(x, y) + iv(x, y)$ is a conformal mapping of a domain $D$ onto the upper half-plane $v > 0$ and if $\Phi(u, v)$ is a harmonic function for $v > 0$, then $\phi(x, y) = \Phi(u(x, y), v(x, y))$ is harmonic on $D$.

**Answer:** **True**

**Justification:**
This is a standard theorem in complex analysis: the composition of a harmonic function with an analytic function is harmonic.

---

#### Problem 14
**Statement:** If $\psi(x, y)$ is a function defined on a domain $D$ and if the boundary of $D$ is a level curve of $\psi(x, y)$, then $\psi(x, y)$ is the stream function of an ideal fluid in $D$.

**Answer:** **False**

**Justification:**
For $\psi(x,y)$ to be a stream function, it must also be harmonic (satisfy Laplace's equation $\nabla^2 \psi = 0$) in $D$, which is not guaranteed by the statement.

---

#### Problem 15
**Statement:** Given a domain $D$, there can be more than one flow of an ideal fluid that remains inside of $D$.

**Answer:** **True**

**Justification:**
Different analytic complex potential functions $\Omega(z) = \phi + i\psi$ can satisfy the boundary streamline condition $\psi = \text{constant}$ (e.g., flows with different circulation strengths or vortex patterns).

---

### Problems 16–30: Fill in the Blanks

#### Problem 16
The analytic function $f(z) = \cosh z$ is conformal except at $z = $ **$k\pi i, \quad k \in \mathbb{Z}$**.

**Derivation:**
$$f'(z) = \sinh z = 0 \implies z = k\pi i$$

---

#### Problem 17
Conformal mappings preserve both the magnitude and the **sense** of an angle.

---

#### Problem 18
The mapping **$w = z$** (or any linear mapping $w = az+b, a \neq 0$) is conformal at every point in the complex plane.

---

#### Problem 19
If $f'(z_0) = f''(z_0) = 0$ and $f'''(z_0) \neq 0$, then the mapping $w = f(z)$ **triples** the magnitude of angles at $z_0$.

**Derivation:**
Since the first non-zero derivative at $z_0$ is of order $n=3$, by Theorem 7.2, angles are increased by a factor of $3$.

---

#### Problem 20
$T(z) = $ **$\frac{(1+i)z - i}{z - i}$** is a LFT that maps $0, 1+i, i$ to $1, i, \infty$.

---

#### Problem 21
The image of the circle $|z - 1| = 2$ under the linear fractional transformation $T(z) = (2z - i)/ (iz + 1)$ is a **circle**.

**Derivation:**
The pole is $z = i/(-1) = -i$ (or $z = i/i = i$? Denominator is $iz+1 = 0 \implies z = i$).
Since $|i - 1| = \sqrt{2} \neq 2$, the pole does not lie on the circle, so the image is a circle.

---

#### Problem 22
The image of a line $L$ under the linear fractional transformation $T(z) = (iz - 2)/ (3z + 1 - i)$ is a circle if and only if $z = $ **$\frac{-1+i}{3}$** is **not** on $L$.

---

#### Problem 23
The cross-ratio of $z, z_1, z_2$, and $z_3$ is given by **$\frac{(z-z_1)(z_2-z_3)}{(z-z_3)(z_2-z_1)}$**.

---

#### Problem 24
The derivative of a Schwarz-Christoffel mapping onto the triangle with vertices at $0, 1, 1+i$ is $f'(z) = $ **$A(z+1)^{-3/4} z^{-1/2}$**.

---

#### Problem 25
If $f'(z) = A(z+1)^{-1/2} z^{-1/4}$, the interior angles of the polygonal image are **$\pi/2, 3\pi/4$**.

**Derivation:**
- $\alpha_1/\pi - 1 = -1/2 \implies \alpha_1 = \pi/2$.
- $\alpha_2/\pi - 1 = -1/4 \implies \alpha_2 = 3\pi/4$.

---

#### Problem 26
The Poisson integral formula gives a solution provided $f(x)$ is **piecewise continuous** and **bounded** on $-\infty < x < \infty$.

---

#### Problem 27
The complex velocity potential $\Omega(z) = z^5$ describes flow in the sector $0 < \arg z < $ **$\pi/5$**.

---

#### Problem 28
If $\Omega(z) = e^z + e^{-z}$, then the complex representation of the velocity field is $f(z) = $ **$\overline{e^z - e^{-z}}$**.

---

#### Problem 29
If $z = \left( \frac{1+w}{1-w} \right)^2$ is a mapping onto $D$, then a streamline in $D$ is parametrized by $z(t) = $ **$\left( \frac{1+t+ic_2}{1-t-ic_2} \right)^2$**.

---

#### Problem 30
The potential describes the flow of an ideal fluid with a **source** at $z=2$ and $z=3$ and a **sink** at $z=4$.
