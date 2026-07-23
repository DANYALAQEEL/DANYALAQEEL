# Complex Analysis — Dennis G. Zill, 2nd Edition
## Chapter 5 · Review Quiz
### Problems 1 – 20 · Complete Solutions

---

## Problems 1 – 12: True/False Questions

Answer True or False for each of the following statements. Provide a detailed proof or counterexample for each response.

### Problem 1
**Statement: The path $C$ defined by $z(t) = \cos t + i\sin t$ for $0 \le t \le 2\pi$ is a simple closed contour.**

**Solution:**
**True.**
* A contour is closed if the initial and terminal points coincide: $z(0) = \cos 0 + i\sin 0 = 1$ and $z(2\pi) = \cos 2\pi + i\sin 2\pi = 1$. Since $z(0) = z(2\pi)$, it is closed.
* A contour is simple if it does not intersect itself, which means $z(t_1) \ne z(t_2)$ for any $t_1 \ne t_2$ in $(0, 2\pi)$. The map $t \mapsto e^{it}$ is one-to-one on $[0, 2\pi)$, so the contour is simple.
Thus, it is a simple closed contour (the unit circle oriented counterclockwise).

---

### Problem 2
**Statement: If $f(z) = x^2 - iy^2$ where $z = x+iy$, then $\oint_C f(z) \, dz = 0$ for any simple closed contour $C$.**

**Solution:**
**False.**
* By the Cauchy-Goursat theorem, the integral around any simple closed contour is guaranteed to be 0 if $f(z)$ is analytic within and on the contour.
* Let's check the analyticity of $f(z) = x^2 - iy^2$. Here, $u(x,y) = x^2$ and $v(x,y) = -y^2$.
* We test the Cauchy-Riemann equations:
  $$
  \frac{\partial u}{\partial x} = 2x, \quad \frac{\partial v}{\partial y} = -2y
  $$
  $$
  \frac{\partial u}{\partial x} = \frac{\partial v}{\partial y} \implies 2x = -2y \implies y = -x
  $$
  $$
  \frac{\partial u}{\partial y} = 0, \quad -\frac{\partial v}{\partial x} = 0 \quad (\text{always equal})
  $$
* The Cauchy-Riemann equations hold only along the line $y = -x$. Since they do not hold on any open neighborhood, $f(z)$ is analytic nowhere in the complex plane.
* Since $f(z)$ is not analytic, the integral is not generally 0. For example, let $C$ be the unit circle $|z|=1$. By parameterizing or applying Green's Theorem:
  $$
  \oint_C (x^2 - iy^2)\,dz = \oint_C (x^2 - iy^2)(dx + i\,dy) = \oint_C (x^2\,dx + y^2\,dy) + i\oint_C (x^2\,dy - y^2\,dx)
  $$
  Applying Green's Theorem to the imaginary part:
  $$
  \iint_{D'} \left( \frac{\partial(x^2)}{\partial x} - \frac{\partial(-y^2)}{\partial y} \right) \, dA = \iint_{D'} (2x + 2y) \, dA = 2\iint_{D'} (x+y)\,dA = 0
  $$
  Wait, what about the real part: $\oint_C x^2\,dx + y^2\,dy = \iint_{D'} (0 - 0)\,dA = 0$.
  So for the unit circle centered at the origin, the integral happens to be 0 because of symmetry.
  However, if we choose a different circle, say centered at $1+i$, the integral is not 0. Therefore, the statement is False.

---

### Problem 3
**Statement: If $f$ is analytic in a simply connected domain $D$ containing the simple closed contour $C$, then $\oint_C f(z) \, dz = 0$.**

**Solution:**
**True.**
* This is the exact statement of the Cauchy-Goursat theorem. Since $f$ is analytic in $D$ and $C$ is a simple closed contour in $D$, the integral of $f(z)$ around $C$ is 0.

---

### Problem 4
**Statement: The value of $\int_C \frac{1}{z} \, dz$ is the same for any path $C$ in the punctured plane $\mathbb{C} \setminus \{0\}$ from $z = -i$ to $z = i$.**

**Solution:**
**False.**
* The function $1/z$ is not analytic at $z=0$.
* If we integrate along a path in the right half-plane (e.g., $z(t) = e^{it}$ for $t \in [-\pi/2, \pi/2]$):
  $$
  \int_{C_1} \frac{1}{z}\,dz = \pi i
  $$
* If we integrate along a path in the left half-plane (e.g., $z(t) = e^{-it}$ for $t$ from $\pi/2$ to $3\pi/2$):
  $$
  \int_{C_2} \frac{1}{z}\,dz = -\pi i
  $$
Since $\pi i \ne -\pi i$, the integral is not path independent, so the statement is False.

---

### Problem 5
**Statement: The value of $\int_C z^2 \, dz$ is the same for any path $C$ in the complex plane from $z = -i$ to $z = i$.**

**Solution:**
**True.**
* The function $f(z) = z^2$ is entire (analytic everywhere).
* By Theorem 5.7, since the integrand is analytic on the entire simply connected domain $\mathbb{C}$, the integral is independent of path.
* The value is:
  $$
  \int_{-i}^i z^2\,dz = \left[ \frac{z^3}{3} \right]_{-i}^i = \frac{i^3 - (-i)^3}{3} = \frac{-i - i}{3} = -\frac{2}{3}i
  $$
  for any path.

---

### Problem 6
**Statement: If $f(z)$ is analytic in a domain $D$ containing a simple closed contour $C$, and $z_0$ is any point in $D$, then $\oint_C \frac{f(z)}{z-z_0} \, dz = 2\pi i f(z_0)$.**

**Solution:**
**False.**
* Cauchy's Integral Formula requires the point $z_0$ to lie **strictly inside** the contour $C$.
* If $z_0$ lies outside the contour $C$, then the function $\frac{f(z)}{z-z_0}$ is analytic inside and on $C$, so the integral is 0 by the Cauchy-Goursat theorem, not $2\pi i f(z_0)$.
* If $z_0$ lies on the contour $C$, the integral is not well-defined in the standard Riemann sense.
Therefore, the statement is False.

---

### Problem 7
**Statement: If $f$ is analytic in a simply connected domain $D$, and $f(z) \ne 0$ for all $z \in D$, then the minimum value of $|f(z)|$ on any closed bounded region $R$ in $D$ occurs on the boundary of $R$.**

**Solution:**
**True.**
* This is the Minimum Modulus Theorem.
* Since $f(z)$ is analytic and $f(z) \ne 0$ in $D$, the function $g(z) = 1/f(z)$ is also analytic in $D$.
* Applying the Maximum Modulus Theorem to $g(z)$ on $R$, the maximum of $|g(z)| = 1/|f(z)|$ occurs on the boundary of $R$.
* The maximum of $1/|f(z)|$ corresponds to the minimum of $|f(z)|$. Thus, the minimum of $|f(z)|$ must occur on the boundary.

---

### Problem 8
**Statement: If $f$ is an entire function such that $|f(z)| \le M$ for all $z$ in the complex plane, then $f(z) = C$ for some constant $C$.**

**Solution:**
**True.**
* This is Liouville's Theorem, which states that any bounded entire function must be constant.

---

### Problem 9
**Statement: $\oint_C \frac{\sin z}{z^4} \, dz = \frac{\pi i}{3}$ where $C$ is the circle $|z|=1$ oriented counterclockwise.**

**Solution:**
**False.**
* The pole is at $z_0 = 0$ (order 4), which lies inside the unit circle.
* Let $f(z) = \sin z$. We find the derivatives:
  $$
  f'(z) = \cos z, \quad f''(z) = -\sin z, \quad f'''(z) = -\cos z
  $$
* Evaluate at $z = 0$: $f'''(0) = -\cos 0 = -1$.
* By Cauchy's Integral Formula for derivatives (with $n = 3$):
  $$
  \oint_C \frac{\sin z}{z^4}\,dz = \frac{2\pi i}{3!} f'''(0) = \frac{2\pi i}{6} (-1) = -\frac{\pi i}{3}
  $$
* Since the value is $-\frac{\pi i}{3}$, which is the negative of the statement's value, the statement is False.

---

### Problem 10
**Statement: $\oint_C \frac{\cos z}{z^2} \, dz = 0$ where $C$ is the circle $|z|=1$ oriented counterclockwise.**

**Solution:**
**True.**
* The pole is at $z_0 = 0$ (order 2), which is inside $|z|=1$.
* Let $f(z) = \cos z$. Derivative: $f'(z) = -\sin z$.
* Evaluate at $z = 0$: $f'(0) = -\sin 0 = 0$.
* By Cauchy's Integral Formula for derivatives ($n = 1$):
  $$
  \oint_C \frac{\cos z}{z^2}\,dz = 2\pi i f'(0) = 2\pi i (0) = 0
  $$
Thus, the statement is True.

---

### Problem 11
**Statement: If $f(z)$ is analytic in a simply connected domain $D$ and $C$ is a simple closed contour in $D$, then $\oint_C \overline{f(z)} \, dz = 0$.**

**Solution:**
**False.**
* The conjugate function $\overline{f(z)}$ is generally not analytic unless $f(z)$ is constant.
* For example, let $f(z) = z$, which is analytic. Then $\overline{f(z)} = \bar{z}$.
* If $C$ is the unit circle $|z|=1$:
  $$
  \oint_{|z|=1} \bar{z}\,dz = 2\pi i \ne 0
  $$
Thus, the statement is False.

---

### Problem 12
**Statement: If $f(z) = P(x,y)\mathbf{i} + Q(x,y)\mathbf{j}$ is the velocity field of an ideal fluid flow in a simply connected domain $D$, then $\oint_C (P \, dx + Q \, dy) = 0$ for any closed contour $C$ in $D$.**

**Solution:**
**True.**
* The expression $P\,dx + Q\,dy$ integrated along $C$ is the circulation around $C$.
* Since the flow is ideal, it is irrotational, which means $\frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y} = 0$ throughout $D$.
* Since $D$ is simply connected and $C$ is a closed path in $D$, Green's Theorem (or path independence) guarantees that the circulation is 0.

---

## Problems 13 – 20: Calculation Questions

### Problem 13
**Evaluate the contour integral:**
$$ \oint_C \left( z^2 - z + 1 - \frac{1}{z} \right) \, dz $$
**where $C$ is the circle $|z|=1$ oriented counterclockwise.**

**Solution:**
Split the integral:
$$
\oint_C (z^2-z+1)\,dz - \oint_C \frac{1}{z}\,dz
$$
* The first term $z^2-z+1$ is a polynomial (entire), so its closed contour integral is 0.
* The second term $1/z$ has a pole at $z=0$ (inside $|z|=1$), so its integral is $2\pi i$.
So:
$$
0 - 2\pi i = \boxed{-2\pi i}
$$

---

### Problem 14
**Evaluate the contour integral:**
$$ \oint_C \frac{z^3 - e^z}{z} \, dz $$
**where $C$ is the circle $|z|=1$ oriented counterclockwise.**

**Solution:**
The pole is at $z_0 = 0$ (inside $|z|=1$).
* Let $f(z) = z^3 - e^z$ (entire).
* Evaluate at the singularity: $f(0) = 0^3 - e^0 = -1$.
* By Cauchy's Integral Formula:
  $$
  \oint_C \frac{f(z)}{z}\,dz = 2\pi i f(0) = 2\pi i (-1) = \boxed{-2\pi i}
  $$

---

### Problem 15
**Evaluate the contour integral:**
$$ \oint_C \frac{z^3 - e^z}{z^2} \, dz $$
**where $C$ is the circle $|z|=1$ oriented counterclockwise.**

**Solution:**
The pole is at $z_0 = 0$ of order 2.
* Let $f(z) = z^3 - e^z$.
* First derivative: $f'(z) = 3z^2 - e^z$.
* Evaluate at $z = 0$: $f'(0) = 3(0)^2 - e^0 = -1$.
* By Cauchy's Integral Formula for derivatives (with $n = 1$):
  $$
  \oint_C \frac{z^3 - e^z}{z^2}\,dz = 2\pi i f'(0) = 2\pi i (-1) = \boxed{-2\pi i}
  $$

---

### Problem 16
**Evaluate the contour integral:**
$$ \oint_C \frac{z^3 - e^z}{z^3} \, dz $$
**where $C$ is the circle $|z|=1$ oriented counterclockwise.**

**Solution:**
The pole is at $z_0 = 0$ of order 3.
* Let $f(z) = z^3 - e^z$.
* Second derivative: $f''(z) = 6z - e^z$.
* Evaluate at $z = 0$: $f''(0) = 6(0) - e^0 = -1$.
* By Cauchy's Integral Formula for derivatives (with $n = 2$):
  $$
  \oint_C \frac{z^3 - e^z}{z^3}\,dz = \frac{2\pi i}{2!} f''(0) = \pi i (-1) = \boxed{-\pi i}
  $$

---

### Problem 17
**Evaluate the contour integral:**
$$ \oint_C \frac{z^3 - e^z}{z^4} \, dz $$
**where $C$ is the circle $|z|=1$ oriented counterclockwise.**

**Solution:**
The pole is at $z_0 = 0$ of order 4.
* Let $f(z) = z^3 - e^z$.
* Third derivative: $f'''(z) = 6 - e^z$.
* Evaluate at $z = 0$: $f'''(0) = 6 - e^0 = 5$.
* By Cauchy's Integral Formula for derivatives (with $n = 3$):
  $$
  \oint_C \frac{z^3 - e^z}{z^4}\,dz = \frac{2\pi i}{3!} f'''(0) = \frac{2\pi i}{6} (5) = \boxed{\frac{5\pi}{3}i}
  $$

---

### Problem 18
**Evaluate the contour integral:**
$$ \oint_C \frac{z^3 - e^z}{z-5} \, dz $$
**where $C$ is the circle $|z|=1$ oriented counterclockwise.**

**Solution:**
The pole is at $z_0 = 5$.
* The pole lies outside the unit circle since $|5| = 5 > 1$.
* Since the integrand $\frac{z^3 - e^z}{z-5}$ is analytic within and on the contour $C$, by the Cauchy-Goursat theorem:
  $$
  \oint_{|z|=1} \frac{z^3 - e^z}{z-5}\,dz = \boxed{0}
  $$

---

### Problem 19
**Evaluate the contour integral:**
$$ \oint_C \frac{\cos z}{z^2-z} \, dz $$
**where $C$ is the contour shown in Figure 5.15.**

![Figure 5.15](../../extracted_figures/figure_5_15.png)

**Solution:**
Factor the denominator: $z^2-z = z(z-1)$. The poles are at $z = 0$ and $z = 1$.
* Looking at the contour $C$ in Figure 5.15 (an ellipse enclosing both poles $z = 0$ and $z = 1$, oriented counterclockwise):
* We use partial fractions to split the integral:
  $$
  \frac{1}{z(z-1)} = \frac{1}{z-1} - \frac{1}{z} \implies \frac{\cos z}{z(z-1)} = \frac{\cos z}{z-1} - \frac{\cos z}{z}
  $$
* Evaluate both integrals using Cauchy's Integral Formula since both $0$ and $1$ are inside $C$:
  $$
  \oint_C \frac{\cos z}{z-1}\,dz = 2\pi i \cos(1)
  $$
  $$
  \oint_C \frac{\cos z}{z}\,dz = 2\pi i \cos(0) = 2\pi i
  $$
* Subtract:
  $$
  \oint_C = 2\pi i \cos(1) - 2\pi i = \boxed{2\pi i(\cos 1 - 1)} \quad (\approx -2.8876i)
  $$

---

### Problem 20
**Evaluate the contour integral:**
$$ \oint_C \frac{z}{z^2-z} \, dz $$
**where $C$ is the contour shown in Figure 5.16.**

![Figure 5.16](../../extracted_figures/figure_5_16.png)

**Solution:**
We simplify the integrand:
$$
\frac{z}{z^2-z} = \frac{z}{z(z-1)} = \frac{1}{z-1} \quad \text{for } z \ne 0
$$
* The only pole of the simplified function is at $z = 1$.
* The contour $C$ shown in Figure 5.16 is a simple closed contour enclosing $z=1$ but not enclosing the origin $z=0$, oriented counterclockwise.
* Since the singularity $z=1$ is inside $C$, by Cauchy's Integral Formula:
  $$
  \oint_C \frac{1}{z-1}\,dz = \boxed{2\pi i}
  $$
