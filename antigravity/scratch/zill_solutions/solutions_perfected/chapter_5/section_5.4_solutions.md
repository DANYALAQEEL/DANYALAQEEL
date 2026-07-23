# Complex Analysis — Dennis G. Zill, 2nd Edition
## Chapter 5 · Section 5.4 — Independence of Path
### Problems 1 – 28 · Complete Solutions

---

> **Key Concepts of Path Independence (Theorem 5.7)**
>
> 1. **Analyticity & Antiderivatives:** If $f(z)$ is continuous in a domain $D$, then the contour integral $\int_C f(z)\,dz$ is independent of path in $D$ if and only if $f(z)$ possesses an antiderivative $F(z)$ in $D$ (i.e., $F'(z) = f(z)$).
> 2. **Fundamental Theorem for Contour Integrals:** If $C$ is any path in $D$ starting at $z_0$ and ending at $z_1$:
>    $$
>    \int_{z_0}^{z_1} f(z) \, dz = F(z_1) - F(z_0)
>    $$
> 3. **Integration by Parts:** If $U(z)$ and $V(z)$ have continuous derivatives in $D$:
>    $$
>    \int_{z_0}^{z_1} U(z) V'(z) \, dz = U(z) V(z) \Big|_{z_0}^{z_1} - \int_{z_0}^{z_1} U'(z) V(z) \, dz
>    $$

---

## Problems 1 – 2: Path Evaluation and Theorem 5.7 Comparison

In Problems 1 and 2, evaluate the given integral along the indicated contour $C$:
**(a) by using an alternative path of integration**
**(b) by using Theorem 5.7**

### Problem 1
**Evaluate the contour integral:**
$$ \int_C (4z-1)\,dz $$
**where $C$ is the right semicircle of the unit circle $|z|=1$ from $z = -i$ to $z = i$ (shown in Figure 5.42).**

![Figure 5.42](../../extracted_figures/figure_5_42.png)

**Solution:**

**(a) Using an Alternative Path:**
We choose the straight line segment along the imaginary axis from $-i$ to $i$ as the alternative path.
* Parametrization: $z(y) = iy$ for $y \in [-1, 1] \implies dz = i\,dy$.
* Substitute into the integral:
  $$
  \int_{-1}^1 (4iy-1) i\,dy = \int_{-1}^1 (-4y - i)\,dy = \left[ -2y^2 - iy \right]_{-1}^1
  $$
* Evaluate at the limits:
  $$
  \text{At } y = 1: \quad -2(1)^2 - i(1) = -2 - i
  $$
  $$
  \text{At } y = -1: \quad -2(-1)^2 - i(-1) = -2 + i
  $$
* Subtract:
  $$
  (-2-i) - (-2+i) = \boxed{-2i}
  $$

**(b) Using Theorem 5.7:**
Since the integrand $f(z) = 4z-1$ is entire, the integral is independent of path and can be evaluated using its antiderivative $F(z) = 2z^2 - z$:
$$
\int_{-i}^i (4z-1)\,dz = \left[ 2z^2 - z \right]_{-i}^i = \left( 2i^2 - i \right) - \left( 2(-i)^2 - (-i) \right)
$$
Since $i^2 = -1$ and $(-i)^2 = -1$:
$$
(-2 - i) - (-2 + i) = \boxed{-2i}
$$
Both methods yield the identical result.

---

### Problem 2
**Evaluate the contour integral:**
$$ \int_C e^z\,dz $$
**where $C$ is the vertical line segment from $z = 3+i$ to $z = 3+3i$ (shown in Figure 5.43).**

![Figure 5.43](../../extracted_figures/figure_5_43.png)

**Solution:**

**(a) Using an Alternative Path:**
We evaluate the integral directly using the given vertical segment:
* Parametrization: $z(t) = 3 + it$ for $1 \le t \le 3 \implies dz = i\,dt$.
* Substitute:
  $$
  \int_1^3 e^{3+it} i\,dt = i e^3 \int_1^3 e^{it}\,dt = i e^3 \left[ \frac{e^{it}}{i} \right]_1^3 = e^3 \left[ e^{it} \right]_1^3 = \boxed{e^3(e^{3i} - e^i)}
  $$

**(b) Using Theorem 5.7:**
Since $e^z$ is entire, we use the antiderivative $F(z) = e^z$:
$$
\int_{3+i}^{3+3i} e^z\,dz = \left[ e^z \right]_{3+i}^{3+3i} = \boxed{e^3(e^{3i} - e^i)}
$$
Both methods yield the identical result.

---

## Problems 3 – 4: Path-Independent Line Integrals

Evaluate the given integral along the indicated contour $C$.

### Problem 3
**Evaluate the contour integral:**
$$ \int_C 2z\,dz $$
**where $C$ is the path $z(t) = 2t^3 + i(t^4-4t^3+2), \, -1 \le t \le 1$.**

**Solution:**
Since $f(z) = 2z$ is an entire function, the integral is path independent and depends only on the endpoints of the contour $C$:
* **Initial point $z_0 = z(-1)$:**
  $$
  z(-1) = 2(-1)^3 + i\left((-1)^4 - 4(-1)^3 + 2\right) = -2 + i(1 + 4 + 2) = -2 + 7i
  $$
* **Terminal point $z_1 = z(1)$:**
  $$
  z(1) = 2(1)^3 + i\left(1^4 - 4(1)^3 + 2\right) = 2 + i(1 - 4 + 2) = 2 - i
  $$
* **Antiderivative $F(z) = z^2$:**
  $$
  \int_C 2z\,dz = [z^2]_{-2+7i}^{2-i} = (2-i)^2 - (-2+7i)^2
  $$
  Compute the squares:
  $$
  (2-i)^2 = 4 - 4i - 1 = 3 - 4i
  $$
  $$
  (-2+7i)^2 = 4 - 28i - 49 = -45 - 28i
  $$
  Subtract:
  $$
  (3-4i) - (-45-28i) = 3 + 45 - 4i + 28i = \boxed{48 + 24i}
  $$

---

### Problem 4
**Evaluate the contour integral:**
$$ \int_C 2z\,dz $$
**where $C$ is the path $z(t) = 2\cos^3 \pi t - i\sin^2(\pi t/4), \, 0 \le t \le 2$.**

**Solution:**
The integrand $2z$ is entire, so the integral is path independent. Find endpoints:
* **Initial point $z_0 = z(0)$:**
  $$
  z(0) = 2\cos^3(0) - i\sin^2(0) = 2(1) - 0 = 2
  $$
* **Terminal point $z_1 = z(2)$:**
  $$
  z(2) = 2\cos^3(2\pi) - i\sin^2(\pi/2) = 2(1) - i(1) = 2 - i
  $$
* **Evaluate using $F(z) = z^2$:**
  $$
  \int_C 2z\,dz = [z^2]_2^{2-i} = (2-i)^2 - 2^2 = (3-4i) - 4 = \boxed{-1 - 4i}
  $$

---

## Problems 5 – 20: Fundamental Theorem of Calculus Applications

In Problems 5–20, use Theorem 5.7 to evaluate the given integral.

### Problem 5
**Evaluate the integral:**
$$ \int_0^{3+i} z^2\,dz $$

**Solution:**
The antiderivative of $z^2$ is $F(z) = \frac{z^3}{3}$:
$$
\int_0^{3+i} z^2\,dz = \left[ \frac{z^3}{3} \right]_0^{3+i} = \frac{(3+i)^3}{3}
$$
Compute $(3+i)^3$:
$$
(3+i)^3 = 3^3 + 3(3^2)(i) + 3(3)(i^2) + i^3 = 27 + 27i - 9 - i = 18 + 26i
$$
Divide by 3:
$$
\frac{18 + 26i}{3} = \boxed{6 + \frac{26}{3}i}
$$

---

### Problem 6
**Evaluate the integral:**
$$ \int_{-2i}^1 (3z^2-4z+5i)\,dz $$

**Solution:**
The antiderivative is $F(z) = z^3 - 2z^2 + 5iz$:
$$
\int_{-2i}^1 (3z^2-4z+5i)\,dz = \left[ z^3 - 2z^2 + 5iz \right]_{-2i}^1
$$
* Evaluate at $z = 1$:
  $$
  1^3 - 2(1)^2 + 5i(1) = 1 - 2 + 5i = -1 + 5i
  $$
* Evaluate at $z = -2i$:
  $$
  (-2i)^3 - 2(-2i)^2 + 5i(-2i) = 8i + 8 + 10 = 18 + 8i
  $$
* Subtract:
  $$
  (-1 + 5i) - (18 + 8i) = \boxed{-19 - 3i}
  $$

---

### Problem 7
**Evaluate the integral:**
$$ \int_{1-i}^{1+i} z^3\,dz $$

**Solution:**
The antiderivative is $F(z) = \frac{z^4}{4}$:
$$
\int_{1-i}^{1+i} z^3\,dz = \left[ \frac{z^4}{4} \right]_{1-i}^{1+i} = \frac{(1+i)^4 - (1-i)^4}{4}
$$
Compute powers:
$$
(1+i)^2 = 2i \implies (1+i)^4 = (2i)^2 = -4
$$
$$
(1-i)^2 = -2i \implies (1-i)^4 = (-2i)^2 = -4
$$
Substitute:
$$
\frac{-4 - (-4)}{4} = \boxed{0}
$$

---

### Problem 8
**Evaluate the integral:**
$$ \int_{-3i}^{2i} (z^3-z)\,dz $$

**Solution:**
The antiderivative is $F(z) = \frac{z^4}{4} - \frac{z^2}{2}$:
$$
\int_{-3i}^{2i} (z^3-z)\,dz = \left[ \frac{z^4}{4} - \frac{z^2}{2} \right]_{-3i}^{2i}
$$
* Evaluate at $z = 2i$:
  $$
  \frac{(2i)^4}{4} - \frac{(2i)^2}{2} = \frac{16}{4} - \frac{-4}{2} = 4 + 2 = 6
  $$
* Evaluate at $z = -3i$:
  $$
  \frac{(-3i)^4}{4} - \frac{(-3i)^2}{2} = \frac{81}{4} - \frac{-9}{2} = \frac{81}{4} + \frac{18}{4} = \frac{99}{4}
  $$
* Subtract:
  $$
  6 - \frac{99}{4} = \frac{24 - 99}{4} = \boxed{-\frac{75}{4}}
  $$

---

### Problem 9
**Evaluate the integral:**
$$ \int_{-i/2}^{1-i} (2z+1)^2\,dz $$

**Solution:**
Using the chain rule for integration, the antiderivative is $F(z) = \frac{(2z+1)^3}{6}$:
$$
\int_{-i/2}^{1-i} (2z+1)^2\,dz = \left[ \frac{(2z+1)^3}{6} \right]_{-i/2}^{1-i}
$$
* Evaluate at $z = 1-i$:
  $$
  2(1-i)+1 = 3-2i \implies (3-2i)^3 = 3^3 - 3(3^2)(2i) + 3(3)(2i)^2 - (2i)^3 = 27 - 54i - 36 + 8i = -9 - 46i
  $$
* Evaluate at $z = -i/2$:
  $$
  2(-i/2)+1 = 1-i \implies (1-i)^3 = (1-i)^2(1-i) = -2i(1-i) = -2 - 2i
  $$
* Subtract and divide by 6:
  $$
  \frac{(-9 - 46i) - (-2 - 2i)}{6} = \frac{-7 - 44i}{6} = \boxed{-\frac{7}{6} - \frac{22}{3}i}
  $$

---

### Problem 10
**Evaluate the integral:**
$$ \int_1^i (iz+1)^3\,dz $$

**Solution:**
The antiderivative is $F(z) = \frac{(iz+1)^4}{4i}$:
$$
\int_1^i (iz+1)^3\,dz = \left[ \frac{(iz+1)^4}{4i} \right]_1^i
$$
* Evaluate at $z = i$:
  $$
  i(i)+1 = 0 \implies 0
  $$
* Evaluate at $z = 1$:
  $$
  i(1)+1 = 1+i \implies (1+i)^4 = -4
  $$
* Subtract:
  $$
  0 - \frac{-4}{4i} = \frac{1}{i} = \boxed{-i}
  $$

---

### Problem 11
**Evaluate the integral:**
$$ \int_{i/2}^i e^{\pi z}\,dz $$

**Solution:**
The antiderivative is $F(z) = \frac{e^{\pi z}}{\pi}$:
$$
\int_{i/2}^i e^{\pi z}\,dz = \left[ \frac{e^{\pi z}}{\pi} \right]_{i/2}^i = \frac{e^{\pi i} - e^{\pi i/2}}{\pi}
$$
Since $e^{\pi i} = -1$ and $e^{\pi i/2} = i$:
$$
\boxed{-\frac{1}{\pi} - \frac{1}{\pi}i}
$$

---

### Problem 12
**Evaluate the integral:**
$$ \int_{1-i}^{1+2i} z e^{z^2}\,dz $$

**Solution:**
Using substitution $u = z^2 \implies du = 2z\,dz$, the antiderivative is $F(z) = \frac{1}{2}e^{z^2}$:
$$
\int_{1-i}^{1+2i} z e^{z^2}\,dz = \left[ \frac{1}{2}e^{z^2} \right]_{1-i}^{1+2i}
$$
Compute exponents:
- For $z = 1+2i$: $z^2 = 1 - 4 + 4i = -3+4i$.
- For $z = 1-i$: $z^2 = 1 - 1 - 2i = -2i$.
Substitute:
$$
\frac{1}{2}\left( e^{-3+4i} - e^{-2i} \right) = \boxed{\frac{1}{2}e^{-3+4i} - \frac{1}{2}e^{-2i}}
$$

---

### Problem 13
**Evaluate the integral:**
$$ \int_\pi^{\pi+2i} \sin(z/2)\,dz $$

**Solution:**
The antiderivative is $F(z) = -2\cos(z/2)$:
$$
\int_\pi^{\pi+2i} \sin(z/2)\,dz = \left[ -2\cos(z/2) \right]_\pi^{\pi+2i} = -2\cos\left( \frac{\pi}{2} + i \right) + 2\cos\left(\frac{\pi}{2}\right)
$$
Since $\cos(\pi/2) = 0$:
$$
-2\cos\left( \frac{\pi}{2} + i \right)
$$
Using the trigonometric identity $\cos(A+B) = \cos A\cos B - \sin A\sin B$:
$$
\cos\left( \frac{\pi}{2} + i \right) = \cos(\pi/2)\cosh(1) - i\sin(\pi/2)\sinh(1) = 0 - i(1)\sinh(1) = -i\sinh(1)
$$
Multiply by $-2$:
$$
-2\left(-i\sinh(1)\right) = \boxed{2i\sinh(1)} \quad (\approx 2.3504i)
$$

---

### Problem 14
**Evaluate the integral:**
$$ \int_{1-2i}^{\pi i} \cos z\,dz $$

**Solution:**
The antiderivative is $F(z) = \sin z$:
$$
\int_{1-2i}^{\pi i} \cos z\,dz = \left[ \sin z \right]_{1-2i}^{\pi i} = \sin(\pi i) - \sin(1-2i)
$$
Using identities:
- $\sin(\pi i) = i\sinh\pi$
- $\sin(1-2i) = \sin(1)\cosh(2) - i\cos(1)\sinh(2)$
Substitute:
$$
\boxed{i\sinh\pi - \sin(1)\cosh(2) + i\cos(1)\sinh(2)}
$$

---

### Problem 15
**Evaluate the integral:**
$$ \int_{\pi i}^{2\pi i} \cosh z\,dz $$

**Solution:**
The antiderivative is $F(z) = \sinh z$:
$$
\int_{\pi i}^{2\pi i} \cosh z\,dz = \left[ \sinh z \right]_{\pi i}^{2\pi i} = \sinh(2\pi i) - \sinh(\pi i)
$$
Since $\sinh(iy) = i\sin y$:
- $\sinh(2\pi i) = i\sin(2\pi) = 0$
- $\sinh(\pi i) = i\sin(\pi) = 0$
So:
$$
0 - 0 = \boxed{0}
$$

---

### Problem 16
**Evaluate the integral:**
$$ \int_i^{1+(\pi/2)i} \sinh 3z\,dz $$

**Solution:**
The antiderivative is $F(z) = \frac{1}{3}\cosh 3z$:
$$
\int_i^{1+(\pi/2)i} \sinh 3z\,dz = \left[ \frac{1}{3}\cosh 3z \right]_i^{1+(\pi/2)i} = \frac{1}{3}\cosh\left( 3 + \frac{3\pi}{2}i \right) - \frac{1}{3}\cosh(3i)
$$
Using identities:
- $\cosh(3i) = \cos(3)$
- $\cosh\left(3 + i\frac{3\pi}{2}\right) = \cosh(3)\cos(3\pi/2) + i\sinh(3)\sin(3\pi/2) = -i\sinh(3)$
Substitute:
$$
\boxed{-\frac{i}{3}\sinh(3) - \frac{1}{3}\cos(3)}
$$

---

### Problem 17
**Evaluate the integral:**
$$ \int_C \frac{1}{z}\,dz $$
**where $C$ is the circular arc in the right half-plane from $z = -4i$ to $z = 4i$.**

**Solution:**
The function $f(z) = 1/z$ is analytic on the right half-plane $\operatorname{Re}(z) > 0$, which is a simply connected domain. In this domain, the principal branch of the logarithm $\operatorname{Ln} z$ is a continuous antiderivative of $1/z$.
Using the Fundamental Theorem:
$$
\int_{-4i}^{4i} \frac{1}{z}\,dz = \left[ \operatorname{Ln} z \right]_{-4i}^{4i} = \operatorname{Ln}(4i) - \operatorname{Ln}(-4i)
$$
Evaluate logs:
- $\operatorname{Ln}(4i) = \ln 4 + i\frac{\pi}{2}$
- $\operatorname{Ln}(-4i) = \ln 4 - i\frac{\pi}{2}$
Subtract:
$$
\left( \ln 4 + i\frac{\pi}{2} \right) - \left( \ln 4 - i\frac{\pi}{2} \right) = \boxed{\pi i}
$$

---

### Problem 18
**Evaluate the integral:**
$$ \int_C \frac{1}{z}\,dz $$
**where $C$ is the line segment from $z = 1+i$ to $z = 4+4i$.**

**Solution:**
The segment lies entirely in the first quadrant where the principal logarithm $\operatorname{Ln} z$ is analytic.
Using the Fundamental Theorem:
$$
\int_{1+i}^{4+4i} \frac{1}{z}\,dz = \left[ \operatorname{Ln} z \right]_{1+i}^{4+4i} = \operatorname{Ln}(4+4i) - \operatorname{Ln}(1+i)
$$
Evaluate:
$$
\operatorname{Ln}(4+4i) = \ln|4+4i| + i\operatorname{Arg}(4+4i) = \ln(4\sqrt{2}) + i\frac{\pi}{4}
$$
$$
\operatorname{Ln}(1+i) = \ln|1+i| + i\operatorname{Arg}(1+i) = \ln(\sqrt{2}) + i\frac{\pi}{4}
$$
Subtract:
$$
\ln(4\sqrt{2}) - \ln(\sqrt{2}) + i\left( \frac{\pi}{4} - \frac{\pi}{4} \right) = \ln\left( \frac{4\sqrt{2}}{\sqrt{2}} \right) = \boxed{\ln 4}
$$

---

### Problem 19
**Evaluate the integral:**
$$ \int_C \frac{1}{z^2}\,dz $$
**where $C$ is the circular arc in the right half-plane from $z = -4i$ to $z = 4i$.**

**Solution:**
The function $1/z^2$ is analytic on the domain $\mathbb{C} \setminus \{0\}$, which contains the right half-plane. It possesses a single-valued antiderivative $F(z) = -1/z$ on this domain.
Using the Fundamental Theorem:
$$
\int_{-4i}^{4i} \frac{1}{z^2}\,dz = \left[ -\frac{1}{z} \right]_{-4i}^{4i} = -\frac{1}{4i} - \left( -\frac{1}{-4i} \right) = \frac{i}{4} - \left( -\frac{i}{4} \right) = \boxed{\frac{1}{2}i}
$$

---

### Problem 20
**Evaluate the integral:**
$$ \int_{1-i}^{1+\sqrt{3}i} \left( z + \frac{1}{z} + \frac{1}{z^2} \right)\,dz $$
**where the path of integration lies in the right half-plane.**

**Solution:**
Since the path lies in the right half-plane, the integrand is analytic and possesses the antiderivative:
$$
F(z) = \frac{z^2}{2} + \operatorname{Ln} z - \frac{1}{z}
$$
Evaluate at endpoints $z_0 = 1-i$ and $z_1 = 1+\sqrt{3}i$:
* **Evaluate at $z_1 = 1+\sqrt{3}i$:**
  - $z_1^2/2 = \frac{1 - 3 + 2\sqrt{3}i}{2} = -1 + \sqrt{3}i$
  - $\operatorname{Ln}(1+\sqrt{3}i) = \ln|2| + i\operatorname{Arg}(1+\sqrt{3}i) = \ln 2 + i\frac{\pi}{3}$
  - $-1/z_1 = -\frac{1}{1+\sqrt{3}i} = -\frac{1-\sqrt{3}i}{4} = -\frac{1}{4} + \frac{\sqrt{3}}{4}i$
  - So $F(z_1) = -\frac{5}{4} + \ln 2 + i\frac{5\sqrt{3}}{4} + i\frac{\pi}{3}$
* **Evaluate at $z_0 = 1-i$:**
  - $z_0^2/2 = \frac{1 - 1 - 2i}{2} = -i$
  - $\operatorname{Ln}(1-i) = \ln\sqrt{2} - i\frac{\pi}{4} = \frac{1}{2}\ln 2 - i\frac{\pi}{4}$
  - $-1/z_0 = -\frac{1}{1-i} = -\frac{1+i}{2} = -\frac{1}{2} - \frac{1}{2}i$
  - So $F(z_0) = -\frac{1}{2} + \frac{1}{2}\ln 2 - i\frac{3}{2} - i\frac{\pi}{4}$
* **Subtract $F(z_1) - F(z_0)$:**
  $$
  \boxed{-\frac{3}{4} + \frac{1}{2}\ln 2 + i\left( \frac{5\sqrt{3}}{4} + \frac{3}{2} \right) + i\frac{7\pi}{12}}
  $$

---

## Problems 21 – 24: Integration by Parts

Use integration by parts to evaluate the given integral.

### Problem 21
**Evaluate:**
$$ \int_\pi^i e^z \cos z \, dz $$

**Solution:**
Let $I = \int e^z \cos z \, dz$.
Use integration by parts twice:
1. $u = \cos z \implies du = -\sin z\,dz$, and $dv = e^z\,dx \implies v = e^z$.
   $$
   I = e^z \cos z + \int e^z \sin z \, dz
   $$
2. For the second integral, let $U = \sin z \implies dU = \cos z\,dz$, and $dV = e^z\,dz \implies V = e^z$.
   $$
   \int e^z \sin z \, dz = e^z \sin z - \int e^z \cos z \, dz = e^z \sin z - I
   $$
So:
$$
I = e^z \cos z + e^z \sin z - I \implies 2I = e^z(\cos z + \sin z) \implies I = \frac{1}{2}e^z(\cos z + \sin z)
$$
Evaluate from $\pi$ to $i$:
$$
\frac{1}{2} \left[ e^z(\cos z + \sin z) \right]_\pi^i = \frac{1}{2}e^i(\cos i + \sin i) - \frac{1}{2}e^\pi(\cos\pi + \sin\pi)
$$
Substitute values:
- $\cos\pi = -1, \, \sin\pi = 0$
- $\cos i = \cosh 1, \, \sin i = i\sinh 1$
So:
$$
\boxed{\frac{1}{2}e^i(\cosh 1 + i\sinh 1) + \frac{1}{2}e^\pi} \quad (\approx 11.4928 + 0.9667i)
$$

---

### Problem 22
**Evaluate:**
$$ \int_0^i z \sin z \, dz $$

**Solution:**
We use integration by parts: Let $u = z \implies du = dz$, and $dv = \sin z\,dz \implies v = -\cos z$.
$$
\int z \sin z \, dz = -z\cos z + \int \cos z\,dz = -z\cos z + \sin z
$$
Evaluate from $0$ to $i$:
$$
\left[ -z\cos z + \sin z \right]_0^i = (-i\cos i + \sin i) - 0
$$
Since $\cos i = \cosh 1$ and $\sin i = i\sinh 1$:
$$
-i\cosh 1 + i\sinh 1 = \boxed{i(\sinh 1 - \cosh 1)} = -i e^{-1}
$$

---

### Problem 23
**Evaluate:**
$$ \int_i^{1+i} z e^z \, dz $$

**Solution:**
We use integration by parts: Let $u = z \implies du = dz$, and $dv = e^z\,dz \implies v = e^z$.
$$
\int z e^z \, dz = z e^z - e^z = (z-1)e^z
$$
Evaluate from $i$ to $1+i$:
$$
\left[ (z-1)e^z \right]_i^{1+i} = i e^{1+i} - (i-1)e^i = \boxed{i e^{1+i} + (1-i)e^i} \quad (\approx -0.9056 + 1.7699i)
$$

---

### Problem 24
**Evaluate:**
$$ \int_0^{\pi i} z^2 e^z \, dz $$

**Solution:**
Using integration by parts twice:
$$
\int z^2 e^z \, dz = (z^2 - 2z + 2)e^z
$$
Evaluate from $0$ to $\pi i$:
$$
\left[ (z^2 - 2z + 2)e^z \right]_0^{\pi i} = \left( (\pi i)^2 - 2(\pi i) + 2 \right) e^{\pi i} - 2
$$
Since $e^{\pi i} = -1$ and $(\pi i)^2 = -\pi^2$:
$$
\left( -\pi^2 - 2\pi i + 2 \right)(-1) - 2 = \pi^2 - 2 + 2\pi i - 2 = \boxed{\pi^2 - 4 + 2\pi i}
$$

---

## Problems 25 – 26: Principal Branch Integrals

### Problem 25
**Evaluate the contour integral:**
$$ \int_C \frac{1}{4z^{1/2}}\,dz $$
**where $z^{1/2}$ is the principal branch of the square root, and $C$ is the right semicircle $z = 4e^{it}, \, -\pi/2 \le t \le \pi/2$.**

**Solution:**
The principal branch $z^{1/2}$ is analytic in the right half-plane $\operatorname{Re}(z) > 0$.
The antiderivative of $\frac{1}{4}z^{-1/2}$ is $F(z) = \frac{1}{2}z^{1/2}$.
Using the Fundamental Theorem:
$$
\int_C \frac{1}{4z^{1/2}}\,dz = \left[ \frac{1}{2}z^{1/2} \right]_{-4i}^{4i} = \frac{1}{2}\left( (4i)^{1/2} - (-4i)^{1/2} \right)
$$
Compute principal square roots:
- $4i = 4e^{i\pi/2} \implies (4i)^{1/2} = 2e^{i\pi/4} = \sqrt{2} + i\sqrt{2}$
- $-4i = 4e^{-i\pi/2} \implies (-4i)^{1/2} = 2e^{-i\pi/4} = \sqrt{2} - i\sqrt{2}$
Subtract:
$$
\frac{1}{2} \left[ (\sqrt{2} + i\sqrt{2}) - (\sqrt{2} - i\sqrt{2}) \right] = \frac{1}{2}\left( 2i\sqrt{2} \right) = \boxed{\sqrt{2}i}
$$

---

### Problem 26
**Evaluate the integral:**
$$ \int_1^{9i} 3z^{1/2}\,dz $$
**where the path of integration lies in the right half-plane.**

**Solution:**
The antiderivative is $F(z) = 2z^{3/2}$:
$$
\int_1^{9i} 3z^{1/2}\,dz = \left[ 2z^{3/2} \right]_1^{9i} = 2(9i)^{3/2} - 2(1)^{3/2}
$$
Evaluate:
- $(9i)^{3/2} = \left( (9i)^{1/2} \right)^3 = \left( 3e^{i\pi/4} \right)^3 = 27 e^{3\pi i/4} = 27 \left( -\frac{1}{\sqrt{2}} + i\frac{1}{\sqrt{2}} \right)$
So:
$$
2(9i)^{3/2} - 2 = 54 \left( -\frac{1}{\sqrt{2}} + i\frac{1}{\sqrt{2}} \right) - 2 = \boxed{-27\sqrt{2} - 2 + i 27\sqrt{2}}
$$

---

## Focus on Concepts

### Problem 27
**Show that the function $f(z) = \sin z^2$ has an antiderivative on the entire complex plane, and hence explain why $\oint_C \sin z^2\,dz = 0$ for any closed contour $C$.**

**Solution:**
By Theorem 5.8 (or the fact that any entire function has an antiderivative), since $f(z) = \sin z^2$ is a composition of the entire functions $\sin w$ and $z^2$, it is entire.
* The antiderivative can be defined as:
  $$
  F(z) = \int_0^z \sin s^2 \, ds
  $$
* Since $f(z)$ is entire, it possesses an antiderivative $F(z)$ everywhere in the complex plane $\mathbb{C}$.
* By Theorem 5.7, the existence of an antiderivative in the domain $\mathbb{C}$ guarantees that the integral along any closed path $C$ in $\mathbb{C}$ is 0:
  $$
  \oint_C \sin z^2 \, dz = \boxed{0}
  $$

---

### Problem 28
**Determine the domain of analyticity and find an antiderivative for the function $f(z) = z(z+1)^{1/2}$ where the principal branch of the fractional power is used.**

**Solution:**
The principal branch of the square root $(z+1)^{1/2}$ has a branch cut along the real axis:
$$
z+1 \le 0 \implies z \le -1
$$
* **Domain of Analyticity:** The domain $D$ is the complex plane excluding the ray $(-\infty, -1]$ along the real axis:
  $$
  D = \mathbb{C} \setminus (-\infty, -1]
  $$
* **Finding an Antiderivative:** We use substitution $u = z+1 \implies z = u-1, \, dz = du$:
  $$
  \int z(z+1)^{1/2}\,dz = \int (u-1)u^{1/2}\,du = \int (u^{3/2} - u^{1/2})\,du = \frac{2}{5}u^{5/2} - \frac{2}{3}u^{3/2}
  $$
  Substituting back $u = z+1$:
  $$
  F(z) = \boxed{\frac{2}{5}(z+1)^{5/2} - \frac{2}{3}(z+1)^{3/2}}
  $$
  This function is analytic on the same domain $D$.
