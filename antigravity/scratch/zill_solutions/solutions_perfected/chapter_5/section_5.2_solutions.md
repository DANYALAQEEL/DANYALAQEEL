# Complex Analysis — Dennis G. Zill, 2nd Edition
## Chapter 5 · Section 5.2 — Complex Integrals
### Problems 1 – 33 · Complete Solutions

---

> **Key Concepts of Complex Contour Integration**
>
> 1. **Contour Integral Definition:** For a function $f(z)$ continuous on a smooth curve $C$ parameterized by $z(t) = x(t) + i y(t)$ for $a \le t \le b$:
>    $$
>    \int_C f(z) \, dz = \int_a^b f(z(t)) \, z'(t) \, dt
>    $$
> 2. **Analyticity & Path Independence:** If $f(z)$ is entire or analytic on a simply connected domain containing $C$, the integral depends only on the endpoints $z_0$ and $z_n$:
>    $$
>    \int_C f(z) \, dz = F(z_n) - F(z_0) \quad \text{where } F'(z) = f(z)
>    $$
> 3. **The ML-Inequality (Bounding Theorem):** If $|f(z)| \le M$ for all $z \in C$, and $L$ is the length of $C$:
>    $$
>    \left| \int_C f(z) \, dz \right| \le M L
>    $$

---

## Problems 1 – 16: Contour Integrals

Evaluate the given integral along the indicated contour.

### Problem 1
**Evaluate the contour integral:**
$$ \int_C (z+3)\,dz $$
**where $C$ is the line segment $x = 2t, \, y = 4t-1, \, 1 \le t \le 3$.**

**Solution:**
We parameterize the path as:
$$
z(t) = x(t) + i y(t) = 2t + i(4t-1) \implies dz = z'(t)\,dt = (2+4i)\,dt
$$
Substitute $z(t)$ into the integrand $z+3$:
$$
z(t)+3 = 2t + i(4t-1) + 3 = (2+4i)t + (3-i)
$$
Evaluate the integral from $t = 1$ to $t = 3$:
$$
\int_1^3 [(2+4i)t + 3-i](2+4i)\,dt = (2+4i)^2 \int_1^3 t\,dt + (3-i)(2+4i) \int_1^3 dt
$$
Compute coefficients:
$$
(2+4i)^2 = 4 + 16i - 16 = -12 + 16i
$$
$$
(3-i)(2+4i) = 6 + 12i - 2i + 4 = 10 + 10i
$$
Perform integrations:
$$
\int_1^3 t\,dt = \left[ \frac{t^2}{2} \right]_1^3 = \frac{9 - 1}{2} = 4
$$
$$
\int_1^3 dt = 3 - 1 = 2
$$
Multiply:
$$
(-12+16i)(4) + (10+10i)(2) = -48 + 64i + 20 + 20i = \boxed{-28 + 84i}
$$

---

### Problem 2
**Evaluate the contour integral:**
$$ \int_C (2\bar{z}-z)\,dz $$
**where $C$ is the parabolic path $x = -t, \, y = t^2+2, \, 0 \le t \le 2$.**

**Solution:**
Parameterize the contour:
$$
z(t) = -t + i(t^2+2) \implies dz = (-1 + 2ti)\,dt
$$
The conjugate of $z(t)$ is $\bar{z}(t) = -t - i(t^2+2)$.
The integrand is:
$$
2\bar{z} - z = 2\left(-t - i(t^2+2)\right) - \left(-t + i(t^2+2)\right) = -t - 3i(t^2+2)
$$
Multiply the integrand by $dz/dt = -1 + 2ti$:
$$
\left[-t - 3i(t^2+2)\right](-1 + 2ti) = t + 6t(t^2+2) + i\left(-2t^2 + 3(t^2+2)\right)
$$
$$
= (t + 6t^3 + 12t) + i(t^2 + 6) = (6t^3 + 13t) + i(t^2 + 6)
$$
Evaluate the integral from $t = 0$ to $t = 2$:
$$
\int_0^2 (6t^3 + 13t)\,dt + i \int_0^2 (t^2 + 6)\,dt
$$
$$
\int_0^2 (6t^3 + 13t)\,dt = \left[ \frac{6t^4}{4} + \frac{13t^2}{2} \right]_0^2 = 24 + 26 = 50
$$
$$
\int_0^2 (t^2 + 6)\,dt = \left[ \frac{t^3}{3} + 6t \right]_0^2 = \frac{8}{3} + 12 = \frac{44}{3}
$$
So the integral evaluates to:
$$
\boxed{50 + \frac{44}{3}i}
$$
*(Note: There is a small arithmetic correction here; the real part is 50, and the imaginary part is $44/3$.)*

---

### Problem 3
**Evaluate the contour integral:**
$$ \int_C z^2\,dz $$
**where $C$ is the path $z(t) = 3t + 2it, \, -2 \le t \le 2$.**

**Solution:**
Since $f(z) = z^2$ is an entire function, the contour integral depends only on the endpoints of $C$:
- Initial point: $z_0 = z(-2) = -6 - 4i$
- Terminal point: $z_1 = z(2) = 6 + 4i$
By the Fundamental Theorem for Contour Integrals:
$$
\int_C z^2\,dz = \left[ \frac{z^3}{3} \right]_{-6-4i}^{6+4i} = \frac{(6+4i)^3 - (-6-4i)^3}{3} = \frac{2(6+4i)^3}{3}
$$
Compute $(6+4i)^3$:
$$
(6+4i)^3 = 6^3 + 3(6^2)(4i) + 3(6)(4i)^2 + (4i)^3 = 216 + 432i - 288 - 64i = -72 + 368i
$$
Multiply by $2/3$:
$$
\frac{2}{3}(-72 + 368i) = \boxed{-48 + \frac{736}{3}i}
$$

---

### Problem 4
**Evaluate the contour integral:**
$$ \int_C (3z^2-2z)\,dz $$
**where $C$ is the path $z(t) = t + it^2, \, 0 \le t \le 1$.**

**Solution:**
Since the integrand $f(z) = 3z^2-2z$ is entire, the integral is path independent and depends only on endpoints:
- Initial point: $z_0 = z(0) = 0$
- Terminal point: $z_1 = z(1) = 1+i$
By the Fundamental Theorem:
$$
\int_C (3z^2-2z)\,dz = \left[ z^3 - z^2 \right]_0^{1+i} = (1+i)^3 - (1+i)^2
$$
Compute the terms:
$$
(1+i)^2 = 2i
$$
$$
(1+i)^3 = (1+i)(2i) = -2 + 2i
$$
Subtract:
$$
(-2 + 2i) - (2i) = \boxed{-2}
$$

---

### Problem 5
**Evaluate the contour integral:**
$$ \int_C \frac{z+1}{z}\,dz $$
**where $C$ is the right half of the circle $|z|=1$ from $z=-i$ to $z=i$.**

**Solution:**
We parameterize the right half of the unit circle:
$$
z(t) = e^{it}, \quad t \in [-\pi/2, \pi/2] \implies dz = i e^{it}\,dt
$$
Substitute into the integral:
$$
\int_{-\pi/2}^{\pi/2} \frac{e^{it}+1}{e^{it}} (i e^{it})\,dt = i \int_{-\pi/2}^{\pi/2} (e^{it}+1)\,dt = i \left[ -i e^{it} + t \right]_{-\pi/2}^{\pi/2} = \left[ e^{it} + it \right]_{-\pi/2}^{\pi/2}
$$
Evaluate at limits:
$$
\left( e^{i\pi/2} + i\frac{\pi}{2} \right) - \left( e^{-i\pi/2} - i\frac{\pi}{2} \right) = \left( i + i\frac{\pi}{2} \right) - \left( -i - i\frac{\pi}{2} \right) = \boxed{(2+\pi)i}
$$

---

### Problem 6
**Evaluate the contour integral:**
$$ \int_C |z|^2\,dz $$
**where $C$ is the curve $x = t^2, \, y = 1/t, \, 1 \le t \le 2$.**

**Solution:**
We parameterize the curve:
$$
z(t) = t^2 + \frac{i}{t} \implies dz = \left( 2t - \frac{i}{t^2} \right)\,dt
$$
The modulus squared is:
$$
|z(t)|^2 = x(t)^2 + y(t)^2 = t^4 + \frac{1}{t^2}
$$
Substitute into the integral:
$$
\int_1^2 \left( t^4 + \frac{1}{t^2} \right) \left( 2t - \frac{i}{t^2} \right) \, dt = \int_1^2 \left( 2t^5 + \frac{2}{t} - i\left( t^2 + \frac{1}{t^4} \right) \right) \, dt
$$
Integrate the real and imaginary parts:
- **Real Part:**
  $$
  \int_1^2 \left( 2t^5 + \frac{2}{t} \right) \, dt = \left[ \frac{t^6}{3} + 2\ln t \right]_1^2 = \left( \frac{64}{3} + 2\ln 2 \right) - \left( \frac{1}{3} + 0 \right) = 21 + 2\ln 2
  $$
- **Imaginary Part:**
  $$
  \int_1^2 \left( t^2 + \frac{1}{t^4} \right) \, dt = \left[ \frac{t^3}{3} - \frac{1}{3t^3} \right]_1^2 = \left( \frac{8}{3} - \frac{1}{24} \right) - \left( \frac{1}{3} - \frac{1}{3} \right) = \frac{64 - 1}{24} = \frac{21}{8}
  $$
Combining them:
$$
\boxed{21 + 2\ln 2 - i\frac{21}{8}}
$$

---

### Problem 7
**Evaluate the contour integral:**
$$ \int_C \operatorname{Re}(z)\,dz $$
**where $C$ is the circle $|z|=1$ oriented counterclockwise.**

**Solution:**
Parameterize the unit circle:
$$
z(t) = e^{it} = \cos t + i\sin t, \quad 0 \le t \le 2\pi \implies dz = i e^{it}\,dt
$$
The integrand is $\operatorname{Re}(z) = \cos t$.
Substitute into the integral:
$$
\int_0^{2\pi} \cos t \left( i e^{it} \right) \, dt = i \int_0^{2\pi} \cos t (\cos t + i\sin t) \, dt
$$
$$
= i \int_0^{2\pi} \cos^2 t \, dt - \int_0^{2\pi} \sin t \cos t \, dt
$$
Using standard integrals over $[0, 2\pi]$:
$$
\int_0^{2\pi} \cos^2 t \, dt = \pi
$$
$$
\int_0^{2\pi} \sin t \cos t \, dt = \left[ \frac{\sin^2 t}{2} \right]_0^{2\pi} = 0
$$
So:
$$
i(\pi) - 0 = \boxed{\pi i}
$$

---

### Problem 8
**Evaluate the contour integral:**
$$ \int_C \left[ \frac{1}{(z+i)^3} - \frac{5}{z+i} + 8 \right]\,dz $$
**where $C$ is the circle $|z+i|=1$ oriented counterclockwise ($0 \le t \le 2\pi$).**

**Solution:**
We use the substitution $w = z+i \implies dw = dz$. The contour $C$ is mapped to the unit circle $|w|=1$:
$$
\oint_{|w|=1} \left( \frac{1}{w^3} - \frac{5}{w} + 8 \right)\,dw
$$
Since $w^{-3}$ and $8$ have antiderivatives in the punctured disk, their closed integrals are 0:
$$
\oint_{|w|=1} \frac{1}{w^3}\,dw = 0, \quad \oint_{|w|=1} 8\,dw = 0
$$
For the term $-5/w$, the integral is:
$$
\oint_{|w|=1} -\frac{5}{w}\,dw = -5(2\pi i) = -10\pi i
$$
So the sum of integrals is:
$$
\boxed{-10\pi i}
$$

---

### Problem 9
**Evaluate the contour integral:**
$$ \int_C (x^2+iy^3)\,dz $$
**where $C$ is the straight line from $z=1$ to $z=i$.**

**Solution:**
The straight line from $(1,0)$ to $(0,1)$ is given by $y = 1-x$, so we parameterize with $x$ running from $1$ to $0$:
$$
z(x) = x + i(1-x) \implies dz = (1-i)\,dx
$$
Integrand:
$$
x^2 + i y^3 = x^2 + i(1-x)^3
$$
Multiply by $dz = (1-i)dx$:
$$
\int_1^0 \left[ x^2 + i(1-x)^3 \right] (1-i)\,dx = (1-i) \int_1^0 x^2\,dx + (1-i)i \int_1^0 (1-x)^3\,dx
$$
$$
= (1-i) \left[ \frac{x^3}{3} \right]_1^0 + (1+i) \left[ -\frac{(1-x)^4}{4} \right]_1^0
$$
$$
= (1-i) \left( 0 - \frac{1}{3} \right) + (1+i) \left( -\frac{1}{4} - 0 \right)
$$
$$
= -\frac{1}{3} + \frac{1}{3}i - \frac{1}{4} - \frac{1}{4}i = \left( -\frac{1}{3} - \frac{1}{4} \right) + i\left( \frac{1}{3} - \frac{1}{4} \right) = \boxed{-\frac{7}{12} + \frac{1}{12}i}
$$

---

### Problem 10
**Evaluate the contour integral:**
$$ \int_C (x^2-iy^3)\,dz $$
**where $C$ is the lower half of the circle $|z|=1$ from $z=-1$ to $z=1$.**

**Solution:**
We parameterize the lower half of the unit circle:
$$
z(t) = e^{it} = \cos t + i\sin t, \quad t \in [-\pi, 0] \implies dz = i e^{it}\,dt = (-\sin t + i\cos t)\,dt
$$
Integrand:
$$
x^2 - i y^3 = \cos^2 t - i\sin^3 t
$$
Integrand times $dz/dt$:
$$
(\cos^2 t - i\sin^3 t)(-\sin t + i\cos t) = \left( -\sin t\cos^2 t + \sin^3 t\cos t \right) + i\left( \cos^3 t + \sin^4 t \right)
$$
We integrate each part from $t = -\pi$ to $t = 0$:
- **Real Part:**
  $$
  \int_{-\pi}^0 \left( -\sin t\cos^2 t + \sin^3 t\cos t \right)\,dt
  $$
  Use substitutions $u=\cos t$ for the first term, $w=\sin t$ for the second:
  $$
  = \left[ \frac{\cos^3 t}{3} + \frac{\sin^4 t}{4} \right]_{-\pi}^0 = \left( \frac{1}{3} + 0 \right) - \left( -\frac{1}{3} + 0 \right) = \frac{2}{3}
  $$
- **Imaginary Part:**
  $$
  \int_{-\pi}^0 \left( \cos^3 t + \sin^4 t \right)\,dt
  $$
  Using trigonometric identities:
  $$
  \int_{-\pi}^0 \cos^3 t\,dt = \int_{-\pi}^0 (1-\sin^2 t)\cos t\,dt = \left[ \sin t - \frac{\sin^3 t}{3} \right]_{-\pi}^0 = 0
  $$
  $$
  \int_{-\pi}^0 \sin^4 t\,dt = \int_{-\pi}^0 \left( \frac{1-\cos 2t}{2} \right)^2\,dt = \int_{-\pi}^0 \frac{1 - 2\cos 2t + \cos^2 2t}{4}\,dt
  $$
  $$
  = \int_{-\pi}^0 \left( \frac{1}{4} - \frac{1}{2}\cos 2t + \frac{1 + \cos 4t}{8} \right)\,dt = \int_{-\pi}^0 \left( \frac{3}{8} - \frac{1}{2}\cos 2t + \frac{1}{8}\cos 4t \right)\,dt
  $$
  $$
  = \left[ \frac{3}{8}t - \frac{1}{4}\sin 2t + \frac{1}{32}\sin 4t \right]_{-\pi}^0 = 0 - \left( -\frac{3\pi}{8} \right) = \frac{3\pi}{8}
  $$
Combining them:
$$
\boxed{\frac{2}{3} + i\frac{3\pi}{8}}
$$

---

### Problem 11
**Evaluate the contour integral:**
$$ \int_C e^z\,dz $$
**where $C$ is the polygonal path consisting of the line segments from $z=0$ to $z=2$ and from $z=2$ to $z=1+\pi i$.**

**Solution:**
Since $e^z$ is an entire function, its contour integral is independent of path and depends only on endpoints:
- Initial point: $z_0 = 0$
- Terminal point: $z_1 = 1+\pi i$
By the Fundamental Theorem:
$$
\int_C e^z\,dz = \left[ e^z \right]_0^{1+\pi i} = e^{1+\pi i} - e^0 = e^1 e^{i\pi} - 1
$$
Since $e^{i\pi} = -1$:
$$
e(-1) - 1 = \boxed{-e - 1}
$$

---

### Problem 12
**Evaluate the contour integral:**
$$ \int_C \sin z\,dz $$
**where $C$ is the polygonal path consisting of the line segments from $z=0$ to $z=1$ and from $z=1$ to $z=1+i$.**

**Solution:**
Since $\sin z$ is entire, the integral is path independent with endpoints $z_0 = 0$ and $z_1 = 1+i$:
$$
\int_C \sin z\,dz = \left[ -\cos z \right]_0^{1+i} = -\cos(1+i) - (-\cos 0) = \boxed{1 - \cos(1+i)}
$$
We can expand $\cos(1+i)$ using the identity $\cos(x+iy) = \cos x\cosh y - i\sin x\sinh y$:
$$
= \boxed{1 - \cos(1)\cosh(1) + i\sin(1)\sinh(1)}
$$

---

### Problem 13
**Evaluate the contour integral:**
$$ \int_C \operatorname{Im}(z-i)\,dz $$
**where $C$ is the polygonal path consisting of the circular arc along $|z|=1$ from $z=1$ to $z=i$ and the line segment from $z=i$ to $z=-1$.**

**Solution:**
Let $C = C_1 \cup C_2$. Note that $z-i = x + i(y-1) \implies \operatorname{Im}(z-i) = y-1$.

1. **Along $C_1$ (arc from $1$ to $i$):**
   Parameterize as $z(t) = e^{it} = \cos t + i\sin t$, $t$ from $0$ to $\pi/2$.
   $dz = i e^{it}\,dt = (-\sin t + i\cos t)\,dt$, and $y-1 = \sin t - 1$.
   $$
   \int_{C_1} (y-1)\,dz = \int_0^{\pi/2} (\sin t - 1)(-\sin t + i\cos t)\,dt
   $$
   $$
   = \int_0^{\pi/2} \left( -\sin^2 t + \sin t \right)\,dt + i \int_0^{\pi/2} \left( \sin t\cos t - \cos t \right)\,dt
   $$
   Integrals:
   - Real part:
     $$
     \int_0^{\pi/2} \left( -\frac{1-\cos 2t}{2} + \sin t \right)\,dt = \left[ -\frac{t}{2} + \frac{\sin 2t}{4} - \cos t \right]_0^{\pi/2} = \left( -\frac{\pi}{4} + 0 - 0 \right) - (0 + 0 - 1) = 1 - \frac{\pi}{4}
     $$
   - Imaginary part:
     $$
     \int_0^{\pi/2} (\sin t\cos t - \cos t)\,dt = \left[ \frac{\sin^2 t}{2} - \sin t \right]_0^{\pi/2} = \left( \frac{1}{2} - 1 \right) - 0 = -\frac{1}{2}
     $$
   So $\int_{C_1} = 1 - \frac{\pi}{4} - \frac{1}{2}i$.

2. **Along $C_2$ (segment from $i$ to $-1$):**
   The segment goes from $(0,1)$ to $(-1,0)$, which is the line $y = x+1$, so $x = y-1$.
   Parameterize as $z(y) = y-1 + iy \implies dz = (1+i)\,dy$, for $y$ running from $1$ to $0$.
   Integrand: $y-1$.
   $$
   \int_{C_2} (y-1)(1+i)\,dy = (1+i) \int_1^0 (y-1)\,dy = (1+i) \left[ \frac{(y-1)^2}{2} \right]_1^0 = (1+i)\left( \frac{1}{2} - 0 \right) = \frac{1+i}{2}
   $$

Total integral:
$$
\int_C = \left( 1 - \frac{\pi}{4} - \frac{1}{2}i \right) + \left( \frac{1}{2} + \frac{1}{2}i \right) = \boxed{\frac{3}{2} - \frac{\pi}{4}}
$$

---

### Problem 14
**Evaluate the contour integral:**
$$ \int_C dz $$
**where $C$ is the left half of the ellipse $x^2/36 + y^2/4 = 1$ from $z=2i$ to $z=-2i$.**

**Solution:**
Since $f(z) = 1$ is entire, the integral is path independent and depends only on endpoints:
- Initial point: $z_0 = 2i$
- Terminal point: $z_1 = -2i$
By the Fundamental Theorem:
$$
\int_C 1\,dz = [z]_{2i}^{-2i} = -2i - 2i = \boxed{-4i}
$$

---

### Problem 15
**Evaluate the contour integral:**
$$ \int_C z e^z\,dz $$
**where $C$ is the square with vertices $0, \, 1, \, 1+i, \, i$ oriented counterclockwise.**

**Solution:**
Since $f(z) = z e^z$ is an entire function (product of entire functions $z$ and $e^z$), it is analytic inside and on the closed square contour $C$. By the Cauchy-Goursat theorem (or path independence of entire functions on a closed loop):
$$
\oint_C z e^z\,dz = \boxed{0}
$$

---

### Problem 16
**Evaluate the contour integral:**
$$ \int_C f(z)\,dz $$
**where $f(z) = \begin{cases} 2, & x < 0 \\ 6x, & x > 0 \end{cases}$ and $C$ is the parabola $y = x^2$ from $z=-1+i$ to $z=1+i$.**

**Solution:**
The path $C$ goes from $x = -1$ to $x = 1$. We split the contour at $x = 0$:
- $C_1$: parabola $y = x^2$ for $x \in [-1, 0]$ (where $x < 0 \implies f(z) = 2$).
- $C_2$: parabola $y = x^2$ for $x \in [0, 1]$ (where $x > 0 \implies f(z) = 6x$).

On the parabola, $z(x) = x + ix^2 \implies dz = (1 + 2xi)\,dx$.

1. **Along $C_1$:**
   $$
   \int_{C_1} f(z)\,dz = \int_{-1}^0 2(1 + 2xi)\,dx = \left[ 2x + 2ix^2 \right]_{-1}^0 = 0 - (-2 + 2i) = 2 - 2i
   $$

2. **Along $C_2$:**
   $$
   \int_{C_2} f(z)\,dz = \int_0^1 6x(1 + 2xi)\,dx = \int_0^1 (6x + 12ix^2)\,dx = \left[ 3x^2 + 4ix^3 \right]_0^1 = 3 + 4i
   $$

Total integral:
$$
\int_C = \int_{C_1} + \int_{C_2} = (2-2i) + (3+4i) = \boxed{5 + 2i}
$$

---

## Problems 17 – 20: Piecewise Linear Contour

Evaluate the given integral along the contour $C$ shown in Figure 5.21.

![Figure 5.21](../../extracted_figures/figure_5_21.png)

The contour $C$ consists of $C_1$ (segment from $0$ to $1$ along the real axis) and $C_2$ (vertical segment from $1$ to $1+i$).
* **On $C_1$:** $y = 0 \implies z = x, \, dz = dx$ for $x \in [0, 1]$.
* **On $C_2$:** $x = 1 \implies z = 1+iy, \, dz = i\,dy$ for $y \in [0, 1]$.

### Problem 17
**Evaluate $\int_C x\,dz$ (printed) and $\int_C y\,dz$ (intended by the textbook's back-of-the-book answer):**

**Solution:**

* **Intended Integral $\int_C y\,dz$:**
  - Along $C_1$: $y = 0 \implies \int_{C_1} 0\,dx = 0$.
  - Along $C_2$: $y$ goes from $0$ to $1$, $dz = i\,dy$.
    $$
    \int_{C_2} y\,dz = \int_0^1 y(i\,dy) = i \left[ \frac{y^2}{2} \right]_0^1 = \boxed{\frac{1}{2}i}
    $$

* **Printed Integral $\int_C x\,dz$:**
  - Along $C_1$: $x$ goes from $0$ to $1$, $dz = dx$.
    $$
    \int_{C_1} x\,dz = \int_0^1 x\,dx = \frac{1}{2}
    $$
  - Along $C_2$: $x = 1$, $dz = i\,dy$ for $y \in [0, 1]$.
    $$
    \int_{C_2} 1\,dz = \int_0^1 1(i\,dy) = i
    $$
  - Total: $\boxed{\frac{1}{2} + i}$.

---

### Problem 18
**Evaluate the contour integral:**
$$ \int_C (2z-1)\,dz $$

**Solution:**
Since $2z-1$ is entire, the integral is path independent and depends only on endpoints $z_0 = 0$ and $z_1 = 1+i$:
$$
\int_C (2z-1)\,dz = \left[ z^2 - z \right]_0^{1+i} = (1+i)^2 - (1+i) = 2i - 1 - i = \boxed{-1 + i}
$$

---

### Problem 19
**Evaluate the contour integral:**
$$ \int_C z^2\,dz $$

**Solution:**
Since $z^2$ is entire, the integral is path independent and depends only on endpoints $z_0 = 0$ and $z_1 = 1+i$:
$$
\int_C z^2\,dz = \left[ \frac{z^3}{3} \right]_0^{1+i} = \frac{(1+i)^3}{3} = \frac{-2+2i}{3} = \boxed{-\frac{2}{3} + \frac{2}{3}i}
$$

---

### Problem 20
**Evaluate the contour integral:**
$$ \int_C \bar{z}^2\,dz $$

**Solution:**
Since $\bar{z}^2$ is not analytic, we must evaluate along the segments:
1. **Along $C_1$ ($y=0$):**
   $$
   \int_0^1 x^2\,dx = \frac{1}{3}
   $$
2. **Along $C_2$ ($x=1$):**
   $z = 1+iy \implies \bar{z} = 1-iy \implies \bar{z}^2 = 1 - y^2 - 2iy$, and $dz = i\,dy$.
   $$
   \int_0^1 (1 - y^2 - 2iy)i\,dy = \int_0^1 (2y + i(1-y^2))\,dy = \left[ y^2 + i\left(y - \frac{y^3}{3}\right) \right]_0^1 = 1 + \frac{2}{3}i
   $$
Total:
$$
\frac{1}{3} + 1 + \frac{2}{3}i = \boxed{\frac{4}{3} + \frac{2}{3}i}
$$

---

## Problems 21 – 24: Path Independence

Evaluate the integral:
$$ \int_C (z^2-z+2)\,dz $$
from $i$ to $1$ along the contour $C$ shown in the figures. Since $f(z) = z^2-z+2$ is an entire function, the integral is independent of the path. We first compute the path-independent value using the Fundamental Theorem:
$$
\int_i^1 (z^2-z+2)\,dz = \left[ \frac{z^3}{3} - \frac{z^2}{2} + 2z \right]_i^1
$$
$$
= \left( \frac{1}{3} - \frac{1}{2} + 2 \right) - \left( \frac{i^3}{3} - \frac{i^2}{2} + 2i \right)
$$
$$
= \frac{11}{6} - \left( -\frac{i}{3} + \frac{1}{2} + 2i \right) = \frac{11}{6} - \frac{1}{2} - i\left( 2 - \frac{1}{3} \right) = \frac{8}{6} - \frac{5}{3}i = \boxed{\frac{4}{3} - \frac{5}{3}i}
$$
We now evaluate this directly along the four different paths.

### Problem 21
**Evaluate the integral along the line segment from $i$ to $1$:**

![Figure 5.22](../../extracted_figures/figure_5_22.png)

**Solution:**
The line segment $C$ connecting $(0,1)$ and $(1,0)$ is given by $y = 1-x$.
We parameterize with $x$ running from $0$ to $1$:
$$
z(x) = x + i(1-x) \implies dz = (1-i)\,dx
$$
Integrand:
$$
z^2 - z + 2 = (x+i(1-x))^2 - (x+i(1-x)) + 2
$$
$$
= x^2 - (1-x)^2 + 2ix(1-x) - x - i(1-x) + 2
$$
$$
= x^2 - (1 - 2x + x^2) - x + 2 + i(2x - 2x^2 - 1 + x)
$$
$$
= (x+1) + i(-2x^2 + 3x - 1)
$$
Multiply by $dz = (1-i)dx$:
$$
[(x+1) + i(-2x^2+3x-1)](1-i) = \left( x+1 - (-2x^2+3x-1)i^2 \right) + i\left( -2x^2+3x-1 - (x+1) \right)
$$
$$
= (-2x^2 + 4x) + i(-2x^2 + 2x - 2)
$$
Integrate from $x=0$ to $x=1$:
$$
\int_0^1 (-2x^2 + 4x)\,dx = \left[ -\frac{2x^3}{3} + 2x^2 \right]_0^1 = -\frac{2}{3} + 2 = \frac{4}{3}
$$
$$
\int_0^1 (-2x^2 + 2x - 2)\,dx = \left[ -\frac{2x^3}{3} + x^2 - 2x \right]_0^1 = -\frac{2}{3} + 1 - 2 = -\frac{5}{3}
$$
Total:
$$
\boxed{\frac{4}{3} - \frac{5}{3}i}
$$
This matches the path independent value.

---

### Problem 22
**Evaluate the integral along the polygonal path consisting of the vertical segment from $i$ to $1+i$ and the horizontal segment from $1+i$ to $1$:**

![Figure 5.23](../../extracted_figures/figure_5_23.png)

**Solution:**
Let $C = C_1 \cup C_2$.
1. **Along $C_1$ (vertical from $i$ to $1+i$):**
   $y = 1 \implies z = x+i, \, dz = dx$ for $x \in [0, 1]$.
   $$
   z^2 - z + 2 = (x+i)^2 - (x+i) + 2 = x^2 - 1 + 2ix - x - i + 2 = x^2 - x + 1 + i(2x-1)
   $$
   $$
   \int_{C_1} = \int_0^1 (x^2-x+1)\,dx + i \int_0^1 (2x-1)\,dx
   $$
   $$
   = \left[ \frac{x^3}{3} - \frac{x^2}{2} + x \right]_0^1 + i \left[ x^2 - x \right]_0^1 = \frac{5}{6} + i(0) = \frac{5}{6}
   $$

2. **Along $C_2$ (horizontal from $1+i$ to $1$):**
   $x = 1 \implies z = 1+iy, \, dz = i\,dy$, for $y$ running from $1$ to $0$.
   $$
   z^2 - z + 2 = (1+iy)^2 - (1+iy) + 2 = 1 - y^2 + 2iy - 1 - iy + 2 = 2 - y^2 + iy
   $$
   Multiply by $dz = i\,dy$:
   $$
   (2-y^2 + iy)i = -y + i(2-y^2)
   $$
   $$
   \int_{C_2} = \int_1^0 [-y + i(2-y^2)]\,dy = \left[ -\frac{y^2}{2} + i\left(2y - \frac{y^3}{3}\right) \right]_1^0
   $$
   $$
   = 0 - \left( -\frac{1}{2} + i\left(2 - \frac{1}{3}\right) \right) = \frac{1}{2} - \frac{5}{3}i
   $$

Total:
$$
\frac{5}{6} + \frac{1}{2} - \frac{5}{3}i = \frac{8}{6} - \frac{5}{3}i = \boxed{\frac{4}{3} - \frac{5}{3}i}
$$
This matches the path independent value.

---

### Problem 23
**Evaluate the integral along the parabolic curve $y = 1-x^2$ from $i$ to $1$:**

![Figure 5.24](../../extracted_figures/figure_5_24.png)

**Solution:**
Parameterize as $x=t, \, y=1-t^2 \implies z(t) = t + i(1-t^2)$, $dz = (1 - 2ti)\,dt$, for $t$ from $0$ to $1$.
Integrand:
$$
z^2 - z + 2 = (t + i(1-t^2))^2 - (t + i(1-t^2)) + 2
$$
$$
= t^2 - (1-t^2)^2 + 2it(1-t^2) - t - i(1-t^2) + 2
$$
$$
= -t^4 + 3t^2 - t + 1 + i(-2t^3 + t^2 + 2t - 1)
$$
Multiply by $dz = (1-2ti)\,dt$:
- Real part:
  $$
  (-t^4+3t^2-t+1)(1) - (-2t^3+t^2+2t-1)(-2t) = -5t^4 + 2t^3 + 7t^2 - 3t + 1
  $$
- Imaginary part:
  $$
  (-t^4+3t^2-t+1)(-2t) + (-2t^3+t^2+2t-1)(1) = 2t^5 - 8t^3 + 3t^2 - 1
  $$
Integrate from $t=0$ to $1$:
$$
\int_0^1 (-5t^4 + 2t^3 + 7t^2 - 3t + 1)\,dt = \left[ -t^5 + \frac{t^4}{2} + \frac{7t^3}{3} - \frac{3t^2}{2} + t \right]_0^1 = \frac{4}{3}
$$
$$
\int_0^1 (2t^5 - 8t^3 + 3t^2 - 1)\,dt = \left[ \frac{t^6}{3} - 2t^4 + t^3 - t \right]_0^1 = -\frac{5}{3}
$$
Total:
$$
\boxed{\frac{4}{3} - \frac{5}{3}i}
$$
This matches the path independent value.

---

### Problem 24
**Evaluate the integral along the circular arc $x^2+y^2=1$ in the first quadrant from $i$ to $1$:**

![Figure 5.25](../../extracted_figures/figure_5_25.png)

**Solution:**
Parameterize as $z(t) = e^{it}$ for $t$ from $\pi/2$ to $0$.
$dz = i e^{it}\,dt$.
Integrand: $z^2 - z + 2 = e^{2it} - e^{it} + 2$.
Multiply by $dz$:
$$
\int_{\pi/2}^0 (e^{2it} - e^{it} + 2) i e^{it}\,dt = i \int_{\pi/2}^0 (e^{3it} - e^{2it} + 2e^{it})\,dt
$$
Integrate:
$$
= \left[ \frac{1}{3}e^{3it} - \frac{1}{2}e^{2it} + 2e^{it} \right]_{\pi/2}^0
$$
$$
= \left( \frac{1}{3} - \frac{1}{2} + 2 \right) - \left( \frac{1}{3}e^{3\pi i/2} - \frac{1}{2}e^{\pi i} + 2e^{\pi i/2} \right)
$$
Since $e^{3\pi i/2} = -i$, $e^{\pi i} = -1$, and $e^{\pi i/2} = i$:
$$
= \frac{11}{6} - \left( -\frac{1}{3}i + \frac{1}{2} + 2i \right) = \frac{11}{6} - \frac{1}{2} - i\left( 2 - \frac{1}{3} \right) = \frac{8}{6} - \frac{5}{3}i = \boxed{\frac{4}{3} - \frac{5}{3}i}
$$
This matches the path independent value.

---

## Problems 25 – 28: Upper Bounds (ML-Inequality)

Find an upper bound for the absolute value of the given integral along the indicated contour.

### Problem 25
**Find an upper bound for:**
$$ \left| \oint_C \frac{e^z}{z^2+1}\,dz \right| $$
**where $C$ is the circle $|z|=5$.**

**Solution:**
1. **Length $L$:** The length of the circle $|z|=5$ is $L = 2\pi(5) = 10\pi$.
2. **Upper bound $M$:** We want to find a constant $M$ such that $\left| \frac{e^z}{z^2+1} \right| \le M$ on $C$.
   - For the numerator, $|e^z| = e^{\operatorname{Re}(z)} = e^x$. Since $|z|=5$ on $C$, $x \le 5$, so $|e^z| \le e^5$.
   - For the denominator, by the reverse triangle inequality: $|z^2+1| \ge |z|^2 - 1 = 5^2 - 1 = 24$.
   - So:
     $$
     \left| \frac{e^z}{z^2+1} \right| \le \frac{e^5}{24} = M
     $$
3. **Applying Bounding Theorem:**
   $$
   \left| \oint_C \frac{e^z}{z^2+1}\,dz \right| \le M L = \frac{e^5}{24} \cdot 10\pi = \boxed{\frac{5\pi e^5}{12}}
   $$
   *Errata Note:* The textbook's back-of-the-book answer lists the bound as $\frac{5}{12}\pi e^2$, which contains a typographical error (writing $e^2$ instead of $e^5$). Our derived bound of $\frac{5\pi e^5}{12}$ is the mathematically correct one.

---

### Problem 26
**Find an upper bound for:**
$$ \left| \int_C \frac{1}{z^2-2i}\,dz \right| $$
**where $C$ is the right half of the circle $|z|=6$ from $z = -6i$ to $z = 6i$.**

**Solution:**
1. **Length $L$:** The path is a semicircle of radius 6, so its length is $L = 6\pi$.
2. **Upper bound $M$:**
   - By the reverse triangle inequality: $|z^2-2i| \ge |z|^2 - |2i| = 36 - 2 = 34$.
   - Thus, on $C$:
     $$
     \left| \frac{1}{z^2-2i} \right| \le \frac{1}{34} = M
     $$
3. **Applying Bounding Theorem:**
   $$
   \left| \int_C \frac{1}{z^2-2i}\,dz \right| \le M L = \frac{6\pi}{34} = \boxed{\frac{3\pi}{17}}
   $$

---

### Problem 27
**Find an upper bound for:**
$$ \left| \int_C (z^2+4)\,dz \right| $$
**where $C$ is the line segment from $z=0$ to $z=1+i$.**

**Solution:**
1. **Length $L$:** The length of the line segment from $0$ to $1+i$ is $L = |1+i| = \sqrt{2}$.
2. **Upper bound $M$:**
   - For any point $z$ on the line segment, $|z| \le \sqrt{2}$.
   - Using the triangle inequality: $|z^2+4| \le |z|^2 + 4 \le (\sqrt{2})^2 + 4 = 6$.
   - Thus, $M = 6$.
3. **Applying Bounding Theorem:**
   $$
   \left| \int_C (z^2+4)\,dz \right| \le M L = 6 \cdot \sqrt{2} = \boxed{6\sqrt{2}}
   $$

---

### Problem 28
**Find an upper bound for:**
$$ \left| \int_C \frac{1}{z^3}\,dz \right| $$
**where $C$ is the quarter circle $|z|=4$ from $z=4i$ to $z=4$.**

**Solution:**
1. **Length $L$:** The path is a quarter of a circle of radius 4, so $L = \frac{2\pi(4)}{4} = 2\pi$.
2. **Upper bound $M$:**
   - On the circle $|z|=4$, we have $|z^3| = |z|^3 = 64$.
   - Thus:
     $$
     \left| \frac{1}{z^3} \right| = \frac{1}{64} = M
     $$
3. **Applying Bounding Theorem:**
   $$
   \left| \int_C \frac{1}{z^3}\,dz \right| \le M L = \frac{1}{64} \cdot 2\pi = \boxed{\frac{\pi}{32}}
   $$

---

## Focus on Concepts

### Problem 29
**(a) Use Definition 5.3 to show for any smooth curve $C$ between $z_0$ and $z_n$ that $\int_C dz = z_n - z_0$.**
**(b) Use the result in part (a) to verify your answer to Problem 14.**
**(c) What is $\oint_C dz$ when $C$ is a simple closed curve?**

**Solution:**
**(a)** By the definition of the contour integral (Definition 5.3):
$$
\int_C dz = \lim_{\|P\| \to 0} \sum_{k=1}^n \Delta z_k
$$
Since $\Delta z_k = z_k - z_{k-1}$:
$$
\sum_{k=1}^n \Delta z_k = (z_1 - z_0) + (z_2 - z_1) + \dots + (z_n - z_{n-1})
$$
This is a telescoping sum, which simplifies directly to:
$$
\sum_{k=1}^n \Delta z_k = z_n - z_0
$$
Since the sum is constant for any partition, the limit is also:
$$
\int_C dz = \boxed{z_n - z_0}
$$

**(b)** In Problem 14, the path $C$ starts at $z_0 = 2i$ and ends at $z_1 = -2i$.
Using the result in (a):
$$
\int_C dz = z_1 - z_0 = -2i - 2i = \boxed{-4i}
$$
This matches our earlier result.

**(c)** For a simple closed curve, the initial point and terminal point are identical, so $z_n = z_0$.
Thus:
$$
\oint_C dz = z_0 - z_0 = \boxed{0}
$$

---

### Problem 30
**Use Definition 5.3 to show for any smooth curve $C$ between $z_0$ and $z_n$ that $\int_C z \, dz = \frac{1}{2}(z_n^2 - z_0^2)$. [Hint: The integral exists. So choose $z_k^* = z_k$ and $z_k^* = z_{k-1}$.]**

**Solution:**
Since the integral is guaranteed to exist for any smooth curve $C$ because $f(z) = z$ is continuous, we can choose any sample points $z_k^* \in [z_{k-1}, z_k]$ to evaluate the Riemann sum.
Let's choose two different sets of sample points:
1. Choose $z_k^* = z_k$:
   $$
   I_1 = \sum_{k=1}^n z_k \Delta z_k = \sum_{k=1}^n z_k (z_k - z_{k-1})
   $$
2. Choose $z_k^* = z_{k-1}$:
   $$
   I_2 = \sum_{k=1}^n z_{k-1} \Delta z_k = \sum_{k=1}^n z_{k-1} (z_k - z_{k-1})
   $$
Taking the average of these two Riemann sums:
$$
\frac{I_1 + I_2}{2} = \frac{1}{2} \sum_{k=1}^n (z_k + z_{k-1})(z_k - z_{k-1}) = \frac{1}{2} \sum_{k=1}^n (z_k^2 - z_{k-1}^2)
$$
This is a telescoping sum:
$$
\sum_{k=1}^n (z_k^2 - z_{k-1}^2) = z_n^2 - z_0^2
$$
So the average is:
$$
\frac{I_1 + I_2}{2} = \frac{1}{2}(z_n^2 - z_0^2)
$$
As the partition norm $\|P\| \to 0$, both Riemann sums $I_1$ and $I_2$ must converge to the value of the integral $\int_C z \, dz$.
Therefore:
$$
\int_C z \, dz = \lim_{\|P\| \to 0} I_1 = \lim_{\|P\| \to 0} I_2 = \lim_{\|P\| \to 0} \frac{I_1 + I_2}{2} = \boxed{\frac{1}{2}(z_n^2 - z_0^2)}
$$

---

### Problem 31
**Use the results of Problems 29 and 30 to evaluate $\int_C (6z+4)\,dz$ where $C$ is:**
**(a) The straight line from $1+i$ to $2+3i$.**
**(b) The closed contour $x^4+y^4 = 4$.**

**Solution:**
Using the linearity of contour integrals:
$$
\int_C (6z+4)\,dz = 6\int_C z\,dz + 4\int_C dz
$$

**(a)** The path goes from $z_0 = 1+i$ to $z_1 = 2+3i$.
Using the results from Problems 29 and 30:
$$
6\int_C z\,dz + 4\int_C dz = 6 \left[ \frac{1}{2}(z_1^2 - z_0^2) \right] + 4(z_1 - z_0) = 3(z_1^2 - z_0^2) + 4(z_1 - z_0)
$$
Compute:
- $z_0 = 1+i \implies z_0^2 = 2i$
- $z_1 = 2+3i \implies z_1^2 = 4 + 12i - 9 = -5 + 12i$
- $z_1^2 - z_0^2 = -5 + 10i$
- $z_1 - z_0 = 1+2i$
Substitute:
$$
3(-5+10i) + 4(1+2i) = -15 + 30i + 4 + 8i = \boxed{-11 + 38i}
$$

**(b)** The contour $C$ is closed, which means $z_1 = z_0$.
Using the results:
$$
3(z_0^2 - z_0^2) + 4(z_0 - z_0) = \boxed{0}
$$

---

### Problem 32
**Find an upper bound for the absolute value of the integral $\int_C \frac{1}{z^2+1}\,dz$, where the contour $C$ is the line segment from $z=3$ to $z=3+i$. Use the fact that $|z^2+1| = |z-i||z+i|$ where $|z-i|$ and $|z+i|$ represent, respectively, the distances from $i$ and $-i$ to points $z$ on $C$.**

**Solution:**
1. **Length $L$:** The segment goes from $(3,0)$ to $(3,1)$, so its length is $L = 1$.
2. **Upper bound $M$:**
   Any point on the segment is of the form $z = 3+iy$ for $0 \le y \le 1$.
   We wish to find the minimum of $|z^2+1| = |z-i||z+i|$ on the segment:
   - The distance $|z-i|$ from $i$ to $z = 3+iy$ is:
     $$
     |z-i| = |3+i(y-1)| = \sqrt{3^2 + (y-1)^2} = \sqrt{9 + (y-1)^2}
     $$
     Since $0 \le y \le 1$, the minimum occurs at $y=1$, where $|z-i| = 3$.
   - The distance $|z+i|$ from $-i$ to $z = 3+iy$ is:
     $$
     |z+i| = |3+i(y+1)| = \sqrt{3^2 + (y+1)^2} = \sqrt{9 + (y+1)^2}
     $$
     Since $0 \le y \le 1$, the minimum occurs at $y=0$, where $|z+i| = \sqrt{10}$.
   - Thus, on the segment:
     $$
     |z^2+1| = |z-i||z+i| \ge 3 \cdot \sqrt{10} = 3\sqrt{10}
     $$
     So the integrand is bounded by:
     $$
     \left| \frac{1}{z^2+1} \right| \le \frac{1}{3\sqrt{10}} = M
     $$
3. **Applying Bounding Theorem:**
   $$
   \left| \int_C \frac{1}{z^2+1}\,dz \right| \le M L = \frac{1}{3\sqrt{10}} \cdot 1 = \boxed{\frac{1}{3\sqrt{10}}}
   $$

---

### Problem 33
**Find an upper bound for the absolute value of the integral $\int_C \operatorname{Ln}(z+3)\,dz$, where the contour $C$ is the line segment from $z=3i$ to $z=4+3i$.**

**Solution:**
1. **Length $L$:** The segment goes from $(0,3)$ to $(4,3)$ horizontally, so its length is $L = 4$.
2. **Upper bound $M$:**
   Any point on $C$ is of the form $z = t + 3i$ for $0 \le t \le 4$.
   Let $w = z+3 = (t+3) + 3i$. The variable $t+3$ ranges from $3$ to $7$.
   The function is $\operatorname{Ln}(w) = \ln|w| + i\operatorname{Arg}(w)$.
   Its modulus is:
   $$
   |\operatorname{Ln}(w)| = \sqrt{(\ln|w|)^2 + (\operatorname{Arg}(w))^2}
   $$
   For $w = (t+3) + 3i$:
   - $|w| = \sqrt{(t+3)^2 + 9}$. The maximum is at $t=4$, where $|w| = \sqrt{7^2+9} = \sqrt{58}$.
     So $\ln|w| \le \ln\sqrt{58}$.
   - The argument $\operatorname{Arg}(w) = \arctan\left(\frac{3}{t+3}\right)$. For $t \in [0, 4]$, the maximum occurs at $t=0$, where $\operatorname{Arg}(w) = \arctan(1) = \pi/4$.
   - A conservative upper bound for $|\operatorname{Ln}(w)|$ is found by taking the maximum of the real and imaginary parts:
     $$
     |\operatorname{Ln}(w)| \le \sqrt{ (\ln\sqrt{58})^2 + (\pi/4)^2 } \approx \sqrt{ 2.03^2 + 0.785^2 } \approx \sqrt{ 4.12 + 0.616 } \approx 2.18
     $$
3. **Applying Bounding Theorem:**
   $$
   \left| \int_C \operatorname{Ln}(z+3)\,dz \right| \le M L = 4 \cdot 2.18 = \boxed{8.72}
   $$
   *(Note: Using the exact maximum modulus of $\operatorname{Ln}(w)$ along the path, which occurs at $t=4$ and is $\approx 2.07$, yields a tighter bound of $4 \cdot 2.07 = 8.28$. Both are valid upper bounds).*
