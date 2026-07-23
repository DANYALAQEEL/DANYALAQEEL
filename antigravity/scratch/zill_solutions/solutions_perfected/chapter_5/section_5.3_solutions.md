# Complex Analysis — Dennis G. Zill, 2nd Edition
## Chapter 5 · Section 5.3 — Cauchy-Goursat Theorem
### Problems 1 – 31 · Complete Solutions

---

> **Key Concepts of the Cauchy-Goursat Theorem**
>
> 1. **Simply Connected Domain:** A domain $D$ is simply connected if every simple closed contour in $D$ encloses only points in $D$ (no "holes").
> 2. **Cauchy-Goursat Theorem:** If $f(z)$ is analytic in a simply connected domain $D$, then for every simple closed contour $C$ in $D$:
>    $$
>    \oint_C f(z) \, dz = 0
>    $$
> 3. **Principle of Deformation of Contours:** If $C_1$ and $C_2$ are simple closed contours oriented counterclockwise, and $C_2$ is inside $C_1$, and $f(z)$ is analytic in the region between them and on both contours, then:
>    $$
>    \oint_{C_1} f(z) \, dz = \oint_{C_2} f(z) \, dz
>    $$
> 4. **Multiply Connected Domains:** For a domain with holes, the integral around an outer boundary equals the sum of the integrals around the inner boundaries (oriented counterclockwise):
>    $$
>    \oint_{C} f(z) \, dz = \sum_{k=1}^n \oint_{C_k} f(z) \, dz
>    $$

---

## Problems 1 – 8: Vanishing Integrals on the Unit Circle $|z|=1$

Show that $\oint_C f(z) \, dz = 0$ for the given function $f(z)$, where $C$ is the unit circle $|z|=1$ oriented counterclockwise. In each case, we show that the singularities of $f(z)$ lie strictly outside the unit disk $|z| \le 1$, meaning $f(z)$ is analytic within and on $C$. By the Cauchy-Goursat theorem, the integral is then 0.

### Problem 1
**Show that the integral vanishes for:**
$$ f(z) = z^3 - 1 + 3i $$

**Solution:**
The function $f(z) = z^3 - 1 + 3i$ is a polynomial in $z$.
* Polynomials are entire functions (analytic at every point in the complex plane $\mathbb{C}$).
* Since $f(z)$ is analytic on the simply connected domain $\mathbb{C}$, which contains $C$, by the Cauchy-Goursat theorem:
  $$
  \oint_{|z|=1} (z^3 - 1 + 3i)\,dz = \boxed{0}
  $$

---

### Problem 2
**Show that the integral vanishes for:**
$$ f(z) = z^2 + \frac{1}{z-4} $$

**Solution:**
The function $f(z) = z^2 + \frac{1}{z-4}$ is a rational function.
* The only singularity occurs where the denominator is zero: $z - 4 = 0 \implies z = 4$.
* The contour $C$ is the unit circle $|z|=1$. The singularity $z = 4$ lies outside $C$ since $|4| = 4 > 1$.
* Thus, $f(z)$ is analytic in the simply connected domain $|z| < 3$ (which contains $C$ and its interior). By the Cauchy-Goursat theorem:
  $$
  \oint_{|z|=1} \left( z^2 + \frac{1}{z-4} \right)\,dz = \boxed{0}
  $$

---

### Problem 3
**Show that the integral vanishes for:**
$$ f(z) = \frac{z}{2z+3} $$

**Solution:**
The singularity occurs where the denominator is zero:
$$
2z + 3 = 0 \implies z = -\frac{3}{2}
$$
* The singularity lies at $z = -1.5$.
* Its distance from the origin is $|-1.5| = 1.5 > 1$, so it lies strictly outside the unit circle $|z|=1$.
* Thus, $f(z)$ is analytic on and inside the unit circle. By the Cauchy-Goursat theorem:
  $$
  \oint_{|z|=1} \frac{z}{2z+3}\,dz = \boxed{0}
  $$

---

### Problem 4
**Show that the integral vanishes for:**
$$ f(z) = \frac{z-3}{z^2+2z+2} $$

**Solution:**
Find the singularities by finding the roots of the denominator $z^2+2z+2 = 0$:
$$
z = \frac{-2 \pm \sqrt{2^2 - 4(1)(2)}}{2} = \frac{-2 \pm \sqrt{-4}}{2} = -1 \pm i
$$
* The singularities are at $z_1 = -1+i$ and $z_2 = -1-i$.
* Compute their distances from the origin:
  $$
  |z_1| = |-1+i| = \sqrt{(-1)^2 + 1^2} = \sqrt{2} \approx 1.414 > 1
  $$
  $$
  |z_2| = |-1-i| = \sqrt{(-1)^2 + (-1)^2} = \sqrt{2} \approx 1.414 > 1
  $$
* Both singularities lie strictly outside the unit circle $|z|=1$.
* Thus, $f(z)$ is analytic on and inside $C$. By the Cauchy-Goursat theorem:
  $$
  \oint_{|z|=1} \frac{z-3}{z^2+2z+2}\,dz = \boxed{0}
  $$

---

### Problem 5
**Show that the integral vanishes for:**
$$ f(z) = \frac{\sin z}{(z^2-25)(z^2+9)} $$

**Solution:**
The numerator $\sin z$ is an entire function. The singularities of $f(z)$ occur where the denominator is zero:
$$
(z^2-25)(z^2+9) = 0 \implies z^2 = 25 \quad \text{or } z^2 = -9
$$
* The roots are $z = \pm 5$ and $z = \pm 3i$.
* The distances from the origin are $|\pm 5| = 5 > 1$ and $|\pm 3i| = 3 > 1$.
* All four singularities lie strictly outside the unit circle $|z|=1$.
* Thus, $f(z)$ is analytic on and inside $C$. By the Cauchy-Goursat theorem:
  $$
  \oint_{|z|=1} \frac{\sin z}{(z^2-25)(z^2+9)}\,dz = \boxed{0}
  $$

---

### Problem 6
**Show that the integral vanishes for:**
$$ f(z) = \frac{e^z}{2z^2+11z+15} $$

**Solution:**
Find the roots of the denominator $2z^2+11z+15 = 0$:
$$
(2z + 5)(z + 3) = 0 \implies z_1 = -\frac{5}{2} = -2.5, \quad z_2 = -3
$$
* The distances from the origin are $|z_1| = 2.5 > 1$ and $|z_2| = 3 > 1$.
* Both singularities lie strictly outside the unit circle $|z|=1$.
* Since $e^z$ is entire, $f(z)$ is analytic on and inside $C$. By the Cauchy-Goursat theorem:
  $$
  \oint_{|z|=1} \frac{e^z}{2z^2+11z+15}\,dz = \boxed{0}
  $$

---

### Problem 7
**Show that the integral vanishes for:**
$$ f(z) = \tan z $$

**Solution:**
The function $\tan z = \frac{\sin z}{\cos z}$ has singularities where $\cos z = 0$:
$$
z = \left( n + \frac{1}{2} \right)\pi \quad \text{for } n \in \mathbb{Z}
$$
* The closest singularities to the origin are at $z = \pm \frac{\pi}{2}$.
* The distance is $|\pm \pi/2| = \pi/2 \approx 1.57 > 1$, which lies strictly outside the unit circle $|z|=1$.
* All other singularities lie even further away.
* Thus, $f(z)$ is analytic on and inside the unit circle. By the Cauchy-Goursat theorem:
  $$
  \oint_{|z|=1} \tan z \, dz = \boxed{0}
  $$

---

### Problem 8
**Show that the integral vanishes for:**
$$ f(z) = \frac{z^2-9}{\cosh z} $$

**Solution:**
The numerator is a polynomial (entire). The singularities of $f(z)$ occur where $\cosh z = 0$:
$$
\cosh z = 0 \implies e^z + e^{-z} = 0 \implies e^{2z} = -1 = e^{i(\pi + 2n\pi)} \implies z = i\left( n + \frac{1}{2} \right)\pi \quad \text{for } n \in \mathbb{Z}
$$
* The closest singularities are at $z = \pm \frac{\pi}{2}i$.
* The distance is $|\pm i \pi/2| = \pi/2 \approx 1.57 > 1$, which is outside the unit circle.
* Thus, $f(z)$ is analytic on and inside $C$. By the Cauchy-Goursat theorem:
  $$
  \oint_{|z|=1} \frac{z^2-9}{\cosh z}\,dz = \boxed{0}
  $$

---

## Problems 9 – 10: Integrals around Enclosed Singularities

### Problem 9
**Evaluate the contour integral:**
$$ \oint_C \frac{1}{z} \, dz $$
**where $C$ is the contour shown in Figure 5.34 (a closed contour enclosing the origin).**

![Figure 5.34](../../extracted_figures/figure_5_34.png)

**Solution:**
The integrand $f(z) = 1/z$ has a single singularity at the origin $z = 0$, which lies inside the closed contour $C$.
* By the Principle of Deformation of Contours, we can deform the arbitrary closed contour $C$ into a small circle $C_r$ of radius $r > 0$ centered at the origin, oriented counterclockwise:
  $$
  \oint_C \frac{1}{z} \, dz = \oint_{C_r} \frac{1}{z} \, dz
  $$
* Parameterize the circle $C_r$: $z(t) = r e^{it}$ for $0 \le t \le 2\pi \implies dz = i r e^{it}\,dt$.
* Substitute:
  $$
  \oint_{C_r} \frac{1}{z} \, dz = \int_0^{2\pi} \frac{1}{r e^{it}} \left( i r e^{it} \right) \, dt = i \int_0^{2\pi} dt = \boxed{2\pi i}
  $$

---

### Problem 10
**Evaluate the contour integral:**
$$ \oint_C \frac{5}{z+1+i} \, dz $$
**where $C$ is the boundary of the region $x^4+y^4=16$ (shown in Figure 5.35).**

![Figure 5.35](../../extracted_figures/figure_5_35.png)

**Solution:**
The integrand has a single pole at $z_0 = -1-i$.
* We first check if $z_0 = -1-i$ lies inside the contour $x^4+y^4 = 16$.
  For $z_0 = -1-i$, the coordinates are $x = -1$ and $y = -1$.
  Substitute these coordinates into the boundary equation:
  $$
  x^4 + y^4 = (-1)^4 + (-1)^4 = 1 + 1 = 2
  $$
  Since $2 < 16$, the point $(-1,-1)$ lies strictly inside the region bounded by $x^4+y^4=16$.
* By the Principle of Deformation of Contours, we can deform the boundary curve $C$ to a small circle $C_r$ centered at $z_0 = -1-i$:
  $$
  \oint_C \frac{5}{z+1+i} \, dz = 5 \oint_{C_r} \frac{dz}{z - (-1-i)}
  $$
* Using the standard circular integration formula $\oint_{|z-z_0|=r} \frac{dz}{z-z_0} = 2\pi i$:
  $$
  5(2\pi i) = \boxed{10\pi i}
  $$

---

## Problems 11 – 22: Evaluation along Closed Contours

Evaluate the given closed contour integral.

### Problem 11
**Evaluate the contour integral:**
$$ \oint_C \left( z + \frac{1}{z} \right) \, dz $$
**where $C$ is the circle $|z|=2$ oriented counterclockwise.**

**Solution:**
We can split the integral:
$$
\oint_C z \, dz + \oint_C \frac{1}{z} \, dz
$$
* The first term $z$ is entire, so by Cauchy-Goursat, $\oint_C z \, dz = 0$.
* The second term $1/z$ has a pole at $z=0$, which is inside $|z|=2$. Its integral is $2\pi i$.
Summing the results:
$$
0 + 2\pi i = \boxed{2\pi i}
$$

---

### Problem 12
**Evaluate the contour integral:**
$$ \oint_C \left( z + \frac{1}{z^2} \right) \, dz $$
**where $C$ is the circle $|z|=2$ oriented counterclockwise.**

**Solution:**
We split the integral:
$$
\oint_C z \, dz + \oint_C \frac{1}{z^2} \, dz
$$
* Both $z$ and $z^{-2}$ have antiderivatives in the punctured complex plane $\mathbb{C} \setminus \{0\}$, namely $F_1(z) = z^2/2$ and $F_2(z) = -1/z$.
* Since they possess single-valued antiderivatives on a domain containing the closed contour $C$, their integrals around any closed path are 0:
  $$
  0 + 0 = \boxed{0}
  $$

---

### Problem 13
**Evaluate the contour integral:**
$$ \oint_C \frac{z}{z^2-\pi^2} \, dz $$
**where $C$ is the circle $|z|=3$ oriented counterclockwise.**

**Solution:**
The singularities occur where the denominator is zero:
$$
z^2 - \pi^2 = 0 \implies z = \pm \pi \approx \pm 3.1415
$$
* The singularities lie at $z = \pi$ and $z = -\pi$.
* The contour is $|z|=3$. The distances from the origin are $|\pm \pi| = \pi > 3$, so both singularities lie outside the circle $|z|=3$.
* Thus, the integrand is analytic on and inside $C$. By the Cauchy-Goursat theorem:
  $$
  \oint_{|z|=3} \frac{z}{z^2-\pi^2} \, dz = \boxed{0}
  $$

---

### Problem 14
**Evaluate the contour integral:**
$$ \oint_C \frac{10}{(z+i)^4} \, dz $$
**where $C$ is the circle $|z+i|=1$ oriented counterclockwise.**

**Solution:**
The integrand $f(z) = 10(z+i)^{-4}$ has a pole at $z = -i$, which is inside the circle $|z+i|=1$.
* However, the function $f(z) = 10(z+i)^{-4}$ possesses a single-valued antiderivative on the punctured plane:
  $$
  F(z) = -\frac{10}{3(z+i)^3}
  $$
* Since it has an antiderivative on a domain containing the closed contour $C$, the closed contour integral is:
  $$
  \oint_C \frac{10}{(z+i)^4} \, dz = \boxed{0}
  $$

---

### Problem 15
**Evaluate the contour integral:**
$$ \oint_C \frac{2z+1}{z^2+z} \, dz $$
**where $C$ is: (a) $|z|=1/2$, (b) $|z|=2$, (c) $|z-3i|=1$.**

**Solution:**
First, factor the denominator: $z^2+z = z(z+1)$. The singularities are at $z = 0$ and $z = -1$.
We perform partial fraction decomposition:
$$
\frac{2z+1}{z(z+1)} = \frac{A}{z} + \frac{B}{z+1} \implies 2z+1 = A(z+1) + Bz
$$
- $z = 0 \implies 1 = A$
- $z = -1 \implies -1 = -B \implies B = 1$
So:
$$
\frac{2z+1}{z^2+z} = \frac{1}{z} + \frac{1}{z+1}
$$

Now we evaluate the integral for each contour:
* **(a) $C$ is $|z|=1/2$:**
  - The singularity $z=0$ is inside since $|0| = 0 < 1/2$.
  - The singularity $z=-1$ is outside since $|-1| = 1 > 1/2$.
  - Thus:
    $$
    \oint_{|z|=1/2} \left( \frac{1}{z} + \frac{1}{z+1} \right)\,dz = \oint_{|z|=1/2} \frac{1}{z}\,dz + 0 = \boxed{2\pi i}
    $$
* **(b) $C$ is $|z|=2$:**
  - Both singularities $z=0$ and $z=-1$ lie inside $|z|=2$.
  - Thus:
    $$
    \oint_{|z|=2} \left( \frac{1}{z} + \frac{1}{z+1} \right)\,dz = \oint_{|z|=2} \frac{1}{z}\,dz + \oint_{|z|=2} \frac{1}{z+1}\,dz = 2\pi i + 2\pi i = \boxed{4\pi i}
    $$
* **(c) $C$ is $|z-3i|=1$:**
  - The center of the circle is $3i$. The distances of the singularities to the center are:
    - $|0 - 3i| = 3 > 1$ (outside)
    - $|-1 - 3i| = \sqrt{10} \approx 3.16 > 1$ (outside)
  - Both singularities lie outside the contour, so the integrand is analytic on and inside $C$. By Cauchy-Goursat:
    $$
    \oint_C = \boxed{0}
    $$

---

### Problem 16
**Evaluate the contour integral:**
$$ \oint_C \frac{2z}{z^2+3} \, dz $$
**where $C$ is: (a) $|z|=1$, (b) $|z|=3$, (c) $|z-i\sqrt{3}|=1$.**

**Solution:**
Factor the denominator: $z^2+3 = (z-i\sqrt{3})(z+i\sqrt{3})$. The singularities are at $z = i\sqrt{3} \approx 1.732i$ and $z = -i\sqrt{3}$.
Partial fraction decomposition:
$$
\frac{2z}{(z-i\sqrt{3})(z+i\sqrt{3})} = \frac{1}{z-i\sqrt{3}} + \frac{1}{z+i\sqrt{3}}
$$

Evaluate for each contour:
* **(a) $C$ is $|z|=1$:**
  - The singularities have distance $\sqrt{3} \approx 1.732 > 1$, so both lie outside.
  - The integrand is analytic on and inside $|z|=1$. By Cauchy-Goursat:
    $$
    \oint_C = \boxed{0}
    $$
* **(b) $C$ is $|z|=3$:**
  - Both singularities lie inside since $\sqrt{3} < 3$.
  - Thus:
    $$
    \oint_{|z|=3} \left( \frac{1}{z-i\sqrt{3}} + \frac{1}{z+i\sqrt{3}} \right)\,dz = 2\pi i + 2\pi i = \boxed{4\pi i}
    $$
* **(c) $C$ is $|z-i\sqrt{3}|=1$:**
  - The singularity $z = i\sqrt{3}$ is the center of the circle, so it lies inside.
  - The distance of the second singularity $z = -i\sqrt{3}$ to the center is $|-i\sqrt{3} - i\sqrt{3}| = 2\sqrt{3} \approx 3.46 > 1$, so it is outside.
  - Thus:
    $$
    \oint_{|z-i\sqrt{3}|=1} \left( \frac{1}{z-i\sqrt{3}} + \frac{1}{z+i\sqrt{3}} \right)\,dz = 2\pi i + 0 = \boxed{2\pi i}
    $$

---

### Problem 17
**Evaluate the contour integral:**
$$ \oint_C \frac{-3z+2}{z^2-8z+12} \, dz $$
**where $C$ is: (a) $|z-5|=2$, (b) $|z|=9$, (c) $|z|=3$.**

**Solution:**
Factor the denominator: $z^2-8z+12 = (z-2)(z-6)$. The singularities are at $z = 2$ and $z = 6$.
Partial fractions:
$$
\frac{-3z+2}{(z-2)(z-6)} = \frac{A}{z-2} + \frac{B}{z-6} \implies -3z+2 = A(z-6) + B(z-2)
$$
- $z=2 \implies -4 = -4A \implies A = 1$
- $z=6 \implies -16 = 4B \implies B = -4$
So:
$$
\frac{-3z+2}{z^2-8z+12} = \frac{1}{z-2} - \frac{4}{z-6}
$$

Evaluate for each contour:
* **(a) $C$ is $|z-5|=2$:**
  - The center is 5.
  - Distance to $z=6$ is $|6-5| = 1 < 2$ (inside).
  - Distance to $z=2$ is $|2-5| = 3 > 2$ (outside).
  - Thus, only $z=6$ is inside:
    $$
    \oint_C = 0 - 4(2\pi i) = \boxed{-8\pi i}
    $$
* **(b) $C$ is $|z|=9$:**
  - Both $z=2$ and $z=6$ are inside since $2 < 9$ and $6 < 9$.
  - Thus:
    $$
    \oint_{|z|=9} \left( \frac{1}{z-2} - \frac{4}{z-6} \right)\,dz = 2\pi i - 4(2\pi i) = \boxed{-6\pi i}
    $$
* **(c) $C$ is $|z|=3$:**
  - Singularity $z=2$ is inside ($2 < 3$).
  - Singularity $z=6$ is outside ($6 > 3$).
  - Thus, only $z=2$ is inside:
    $$
    \oint_{|z|=3} \left( \frac{1}{z-2} - \frac{4}{z-6} \right)\,dz = 2\pi i - 0 = \boxed{2\pi i}
    $$

---

### Problem 18
**Evaluate the contour integral:**
$$ \oint_C \left( \frac{3}{z+2} - \frac{1}{z-2i} \right) \, dz $$
**where $C$ is: (a) $|z|=5$, (b) $|z-i|=2$.**

**Solution:**
The singularities are at $z = -2$ and $z = 2i$.

* **(a) $C$ is $|z|=5$:**
  - Both singularities lie inside since $|-2| = 2 < 5$ and $|2i| = 2 < 5$.
  - Thus:
    $$
    \oint_{|z|=5} \left( \frac{3}{z+2} - \frac{1}{z-2i} \right)\,dz = 3(2\pi i) - 2\pi i = \boxed{4\pi i}
    $$
* **(b) $C$ is $|z-i|=2$:**
  - The center is $i$.
  - Distance to $z=2i$ is $|2i-i| = 1 < 2$ (inside).
  - Distance to $z=-2$ is $|-2-i| = \sqrt{5} \approx 2.236 > 2$ (outside).
  - Thus, only $z=2i$ is inside:
    $$
    \oint_{|z-i|=2} = 0 - 2\pi i = \boxed{-2\pi i}
    $$

---

### Problem 19
**Evaluate the contour integral:**
$$ \oint_C \frac{z-1}{z(z-i)(z-3i)} \, dz $$
**where $C$ is the circle $|z-i|=1/2$ oriented counterclockwise.**

**Solution:**
The singularities are at $z = 0$, $z = i$, and $z = 3i$. The contour is centered at $i$ with radius $1/2$.
* Distances of singularities to center $i$:
  - $|0 - i| = 1 > 1/2$ (outside)
  - $|i - i| = 0 < 1/2$ (inside)
  - $|3i - i| = 2 > 1/2$ (outside)
* So only $z = i$ lies inside the contour.
* We rewrite the integrand as $\frac{g(z)}{z-i}$ where $g(z) = \frac{z-1}{z(z-3i)}$.
* Since $g(z)$ is analytic inside and on the contour $C$, by Cauchy's Integral Formula:
  $$
  \oint_C \frac{g(z)}{z-i}\,dz = 2\pi i g(i) = 2\pi i \left[ \frac{i-1}{i(i-3i)} \right] = 2\pi i \left[ \frac{i-1}{i(-2i)} \right] = 2\pi i \left[ \frac{i-1}{2} \right] = \boxed{-\pi(1+i)}
  $$

---

### Problem 20
**Evaluate the contour integral:**
$$ \oint_C \frac{1}{z^3+2iz^2} \, dz $$
**where $C$ is the circle $|z|=1$ oriented counterclockwise.**

**Solution:**
First, factor the denominator: $z^3+2iz^2 = z^2(z+2i)$.
* The singularities are at $z = 0$ (pole of order 2) and $z = -2i$ (simple pole).
* The contour is the unit circle $|z|=1$.
  - The singularity $z = 0$ lies inside $|z|=1$.
  - The singularity $z = -2i$ lies outside since $|-2i| = 2 > 1$.
* We rewrite the integrand as $\frac{g(z)}{z^2}$ where $g(z) = \frac{1}{z+2i}$.
* Since $g(z)$ is analytic inside and on $C$, by Cauchy's Integral Formula for derivatives:
  $$
  \oint_C \frac{g(z)}{z^2}\,dz = 2\pi i g'(0)
  $$
* Find $g'(z)$:
  $$
  g'(z) = -\frac{1}{(z+2i)^2} \implies g'(0) = -\frac{1}{(2i)^2} = -\frac{1}{-4} = \frac{1}{4}
  $$
* Substitute:
  $$
  2\pi i \left( \frac{1}{4} \right) = \boxed{\frac{\pi}{2}i}
  $$

---

### Problem 21
**Evaluate the contour integral:**
$$ \oint_C \operatorname{Ln}(z+10) \, dz $$
**where $C$ is the circle $|z|=2$ oriented counterclockwise.**

**Solution:**
The principal branch of the complex logarithm $\operatorname{Ln}(z+10)$ has a branch cut along the negative real axis starting from the branch point:
$$
z+10 \le 0 \implies z \le -10
$$
* The branch cut is the ray $(-\infty, -10]$ along the real axis.
* The contour $C$ is $|z|=2$. The entire disk $|z| \le 2$ lies far to the right of the branch cut (the closest point of the branch cut is at $x = -10$).
* Thus, $\operatorname{Ln}(z+10)$ is analytic on a simply connected domain containing $|z| \le 2$. By the Cauchy-Goursat theorem:
  $$
  \oint_{|z|=2} \operatorname{Ln}(z+10)\,dz = \boxed{0}
  $$

---

### Problem 22
**Evaluate the contour integral:**
$$ \oint_C \left[ \frac{5}{(z-2)^3} + \frac{3}{(z-2)^2} - \frac{10}{z-2} + 7\csc z \right] \, dz $$
**where $C$ is the circle $|z-2|=1/2$ oriented counterclockwise.**

**Solution:**
We can split the integral:
$$
\oint_C \frac{5}{(z-2)^3}\,dz + \oint_C \frac{3}{(z-2)^2}\,dz - \oint_C \frac{10}{z-2}\,dz + \oint_C 7\csc z\,dz
$$
* The contour is $|z-2|=1/2$, which encloses only the singularity $z=2$:
  - The terms $\frac{5}{(z-2)^3}$ and $\frac{3}{(z-2)^2}$ have antiderivatives in the punctured disk, so their integrals are 0.
  - The term $\frac{10}{z-2}$ integrates to $10(2\pi i) = 20\pi i$.
  - The term $7\csc z = \frac{7}{\sin z}$ has poles at $z = n\pi$ for $n \in \mathbb{Z}$. The closest poles are at $z = 0$ and $z = \pi \approx 3.14$.
    Both poles are outside the circle $|z-2|=1/2$ since:
    - $|0-2| = 2 > 1/2$
    - $|\pi-2| \approx 1.14 > 1/2$
    Thus, $7\csc z$ is analytic inside and on $C$, so its integral is 0.
* Combining the results:
  $$
  0 + 0 - 20\pi i + 0 = \boxed{-20\pi i}
  $$

---

### Problem 23
**Evaluate the closed line integral:**
$$ \oint_C \frac{8z - 3}{z^2 - z} \, dz $$
**where $C$ is the "figure-eight" contour shown in Figure 5.36.**

![Figure 5.36](../../extracted_figures/figure_5_36.png)

**Solution:**
The denominator factors as $z^2-z = z(z-1)$, so the singularities are at $z = 0$ and $z = 1$.
Using partial fractions:
$$
\frac{8z-3}{z(z-1)} = \frac{A}{z} + \frac{B}{z-1} \implies 8z-3 = A(z-1) + Bz
$$
- $z=0 \implies -3 = -A \implies A = 3$
- $z=1 \implies 5 = B$
So:
$$
\frac{8z-3}{z^2-z} = \frac{3}{z} + \frac{5}{z-1}
$$
The figure-eight contour $C$ consists of two loops: the left loop $C_1$ (enclosing $z=0$) oriented counterclockwise, and the right loop $C_2$ (enclosing $z=1$) oriented clockwise (negative orientation).
* **For $C_1$ (counterclockwise around 0):**
  $$
  \oint_{C_1} \left( \frac{3}{z} + \frac{5}{z-1} \right)\,dz = 3(2\pi i) + 0 = 6\pi i
  $$
* **For $C_2$ (clockwise around 1):**
  $$
  \oint_{C_2} \left( \frac{3}{z} + \frac{5}{z-1} \right)\,dz = 0 - 5(2\pi i) = -10\pi i
  $$
The total integral around the figure-eight is:
$$
\oint_C = \oint_{C_1} + \oint_{C_2} = 6\pi i - 10\pi i = \boxed{-4\pi i}
$$

---

### Problem 24
**Suppose $z_0$ is any constant complex number interior to any simple closed contour $C$. Show that for a positive integer $n$:**
$$
\oint_C \frac{dz}{(z-z_0)^n} = \begin{cases} 2\pi i, & n=1 \\ 0, & n > 1 \end{cases}
$$

**Solution:**
By the Principle of Deformation of Contours, we can deform the simple closed contour $C$ into a small circle $C_r$ centered at $z_0$ of radius $r$, oriented counterclockwise:
$$
z(t) = z_0 + r e^{it}, \quad 0 \le t \le 2\pi \implies dz = i r e^{it}\,dt
$$
Substitute into the integral:
$$
\oint_C \frac{dz}{(z-z_0)^n} = \oint_{C_r} \frac{dz}{(z-z_0)^n} = \int_0^{2\pi} \frac{i r e^{it}}{(r e^{it})^n}\,dt = i r^{1-n} \int_0^{2\pi} e^{i(1-n)t}\,dt
$$
- **Case 1: $n = 1$:**
  $$
  i r^0 \int_0^{2\pi} 1 \, dt = i (2\pi) = 2\pi i
  $$
- **Case 2: $n > 1$:**
  Since $1-n \ne 0$:
  $$
  i r^{1-n} \left[ \frac{e^{i(1-n)t}}{i(1-n)} \right]_0^{2\pi} = \frac{r^{1-n}}{1-n} \left( e^{i(1-n)2\pi} - e^0 \right)
  $$
  Since $1-n$ is a non-zero integer, $e^{i(1-n)2\pi} = 1$:
  $$
  \frac{r^{1-n}}{1-n} (1 - 1) = 0
  $$
Thus, the result is proved.

---

## Problems 25 – 26: General Closed Contour Integrals

Evaluate the given contour integral by any means.

### Problem 25
**Evaluate the contour integral:**
$$ \oint_C \left[ \frac{e^z}{z+3} - 3\bar{z} \right] \, dz $$
**where $C$ is the unit circle $|z|=1$ oriented counterclockwise.**

**Solution:**
We split the integral:
$$
\oint_C \frac{e^z}{z+3}\,dz - 3\oint_C \bar{z}\,dz
$$
* For the first term, the singularity is at $z = -3$, which lies outside the unit circle $|z|=1$. Thus, $\frac{e^z}{z+3}$ is analytic on and inside $C$, so its integral is 0 by Cauchy-Goursat.
* For the second term, on the unit circle $|z|=1$, we have $z\bar{z} = |z|^2 = 1 \implies \bar{z} = 1/z$.
  So:
  $$
  \oint_C \bar{z}\,dz = \oint_C \frac{1}{z}\,dz = 2\pi i
  $$
Substitute back:
$$
0 - 3(2\pi i) = \boxed{-6\pi i}
$$

---

### Problem 26
**Evaluate the contour integral:**
$$ \oint_C \left( z^3 + z^2 + \operatorname{Re}(z) \right) \, dz $$
**where $C$ is the triangle with vertices $0, \, 1+2i, \, 1$ oriented counterclockwise.**

**Solution:**
We split the integral:
$$
\oint_C (z^3 + z^2)\,dz + \oint_C \operatorname{Re}(z)\,dz
$$
* The first term $z^3+z^2$ is entire, so its integral around any closed contour is 0.
* The second term is $\operatorname{Re}(z) = x$, which is not analytic. We must integrate along the three sides of the triangle:
  - $C_1$: from $0$ to $1$ along the real axis.
    $y=0 \implies z=x, \, dz=dx$ for $x \in [0, 1]$.
    $$
    \int_{C_1} x\,dz = \int_0^1 x\,dx = \frac{1}{2}
    $$
  - $C_2$: from $1$ to $1+2i$.
    $x=1 \implies z=1+iy, \, dz=i\,dy$ for $y$ from $0$ to $2$.
    $$
    \int_{C_2} x\,dz = \int_0^2 1(i\,dy) = 2i
    $$
  - $C_3$: from $1+2i$ to $0$.
    The line is $y = 2x \implies z = x + 2ix = x(1+2i) \implies dz = (1+2i)\,dx$, for $x$ running from $1$ to $0$.
    $$
    \int_{C_3} x\,dz = \int_1^0 x(1+2i)\,dx = (1+2i) \left[ \frac{x^2}{2} \right]_1^0 = -\frac{1+2i}{2} = -\frac{1}{2} - i
    $$
Summing the results:
$$
0 + \frac{1}{2} + 2i - \frac{1}{2} - i = \boxed{i}
$$

---

## Focus on Concepts

### Problem 27
**Explain why $\oint_C f(z) \, dz = 0$ for each of the following functions where $C$ is any simple closed contour in the complex plane:**
**(a) $f(z) = (5iz^4 - 4z^2 + 2 - 6i)^9$**
**(b) $f(z) = (z^2 - 3iz)e^{5z}$**
**(c) $f(z) = \frac{\sin z}{e^{z^2}}$**
**(d) $f(z) = z \cos^2 z$**

**Solution:**
For any function that is entire (analytic everywhere in the complex plane $\mathbb{C}$), the Cauchy-Goursat theorem guarantees that its integral along any simple closed contour is 0. We verify that all four functions are entire:
- **(a)** $f(z)$ is a polynomial function of degree 36. All polynomials are entire.
- **(b)** $f(z)$ is the product of a polynomial $z^2-3iz$ (entire) and a complex exponential $e^{5z}$ (entire). The product of entire functions is entire.
- **(c)** $f(z) = \sin z \cdot e^{-z^2}$ is the product of the sine function (entire) and an exponential composite $e^{-z^2}$ (entire). Thus, it is entire.
- **(d)** $f(z) = z \cos^2 z$ is the product of $z$ (entire) and $\cos^2 z$ (entire). Thus, it is entire.

Since all these functions are entire, their closed contour integrals are always 0.

---

### Problem 28
**Describe contours $C$ for which we are guaranteed that $\oint_C f(z) \, dz = 0$ for each of the following functions:**
**(a) $f(z) = \frac{1}{z^3+z}$**
**(b) $f(z) = \frac{1}{1 - e^z}$**
**(c) $f(z) = \frac{1}{2\pi i - \operatorname{Ln} z}$**
**(d) $f(z) = \frac{1}{\cos z}$**

**Solution:**
By the Cauchy-Goursat theorem, the integral is guaranteed to be 0 for any simple closed contour $C$ that does not enclose or pass through any singularities of the integrand.
- **(a)** Singularities are at the roots of $z^3+z = z(z^2+1) = 0 \implies z = 0, \, z = \pm i$.
  * Guaranteed to be 0 for any contour $C$ that does not enclose or pass through $0$, $i$, or $-i$.
- **(b)** Singularities occur where $1-e^z = 0 \implies e^z = 1 \implies z = 2n\pi i$ for $n \in \mathbb{Z}$.
  * Guaranteed to be 0 for any contour $C$ that does not enclose or pass through any of the points $2n\pi i$ ($0, \, \pm 2\pi i, \, \pm 4\pi i, \dots$).
- **(c)** The principal logarithm $\operatorname{Ln} z$ is undefined for $z = 0$ and is non-analytic along the nonpositive real axis (branch cut). Additionally, a singularity occurs where the denominator is zero:
  $$
  2\pi i - \operatorname{Ln} z = 0 \implies \operatorname{Ln} z = 2\pi i
  $$
  However, by definition, the imaginary part of $\operatorname{Ln} z$ is the principal argument $\operatorname{Arg}(z) \in (-\pi, \pi]$. Since $2\pi$ is outside this range, the equation $\operatorname{Ln} z = 2\pi i$ has no solution in the domain of analyticity of $\operatorname{Ln} z$.
  * Thus, the only singularities/non-analyticity region is the nonpositive real axis $(-\infty, 0]$.
  * Guaranteed to be 0 for any closed contour $C$ that does not cross or contain any portion of the nonpositive real axis.
- **(d)** Singularities occur where $\cos z = 0 \implies z = \left( n + \frac{1}{2} \right)\pi$ for $n \in \mathbb{Z}$.
  * Guaranteed to be 0 for any closed contour $C$ that does not enclose or pass through any of these points ($\pm \pi/2, \, \pm 3\pi/2, \dots$).

---

### Problem 29
**Explain why $\oint_C \bar{z} \, dz = 2\pi i$ when $C$ is the unit circle $|z|=1$, and why this does not contradict the Cauchy-Goursat theorem.**

**Solution:**
On the unit circle $|z|=1$, we have:
$$
|z|^2 = z\bar{z} = 1 \implies \bar{z} = \frac{1}{z}
$$
Thus, the integral is:
$$
\oint_{|z|=1} \bar{z} \, dz = \oint_{|z|=1} \frac{1}{z} \, dz = 2\pi i
$$
This does not contradict the Cauchy-Goursat theorem because:
1. The function $f(z) = \bar{z}$ is not analytic anywhere in the complex plane (it fails the Cauchy-Riemann equations everywhere).
2. Although we can rewrite it as $1/z$ on the boundary, the function $1/z$ is not analytic at $z=0$, which is inside the contour.
Since the integrand is not analytic within the contour, the Cauchy-Goursat theorem does not apply.

---

### Problem 30
**Evaluate the contour integral:**
$$ \int_C e^z \, dz $$
**where $C$ is the path shown in Figure 5.37 from $z=0$ to $z=2+2i$.**

![Figure 5.37](../../extracted_figures/figure_5_37.png)

**Solution:**
Since the integrand $f(z) = e^z$ is an entire function, its contour integral is independent of path and depends only on the endpoints of the contour $C$, which are $z_0 = 0$ and $z_1 = 2+2i$.
By the Fundamental Theorem:
$$
\int_0^{2+2i} e^z \, dz = \left[ e^z \right]_0^{2+2i} = \boxed{e^{2+2i} - 1} = e^2(\cos 2 + i\sin 2) - 1
$$

---

### Problem 31
**Explain why $\oint_C e^z \, dz = 0$ for any closed contour $C$ in the complex plane.**

**Solution:**
The exponential function $f(z) = e^z$ is entire (analytic everywhere in the complex plane $\mathbb{C}$).
* Since $\mathbb{C}$ is a simply connected domain containing the contour $C$ and its interior, the Cauchy-Goursat theorem guarantees that:
  $$
  \oint_C e^z \, dz = \boxed{0}
  $$
* Alternatively, since $e^z$ has a continuous antiderivative $F(z) = e^z$ defined on the entire complex plane, the integral along any closed path must be 0 by the Fundamental Theorem.
