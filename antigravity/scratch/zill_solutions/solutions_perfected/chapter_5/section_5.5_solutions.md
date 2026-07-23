# Complex Analysis — Dennis G. Zill, 2nd Edition
## Chapter 5 · Section 5.5 — Cauchy's Integral Formulas and Consequences
### Problems 1 – 32 · Complete Solutions

---

> **Key Concepts of Cauchy's Integral Formulas**
>
> 1. **Cauchy's Integral Formula:** If $f(z)$ is analytic in a simply connected domain $D$ containing a simple closed contour $C$ (oriented counterclockwise) and $z_0$ is inside $C$:
>    $$
>    \oint_C \frac{f(z)}{z-z_0} \, dz = 2\pi i f(z_0)
>    $$
> 2. **Cauchy's Integral Formula for Derivatives:** Under the same conditions:
>    $$
>    \oint_C \frac{f(z)}{(z-z_0)^{n+1}} \, dz = \frac{2\pi i}{n!} f^{(n)}(z_0)
>    $$
> 3. **Maximum Modulus Theorem:** If $f(z)$ is analytic and non-constant on a closed, bounded region $R$, then the maximum value of $|f(z)|$ occurs on the boundary of $R$.

---

## Problems 1 – 22: Cauchy's Integral Formulas

In Problems 1–22, use Cauchy's integral formulas to evaluate the given integral along the indicated closed contour $C$.

### Problem 1
**Evaluate the contour integral:**
$$ \oint_C \frac{4}{z-3i} \, dz $$
**where $C$ is the circle $|z|=5$ oriented counterclockwise.**

**Solution:**
The integrand has a simple pole at $z_0 = 3i$.
* The pole lies inside the circle $|z|=5$ since $|3i| = 3 < 5$.
* Let $f(z) = 4$, which is an entire function (constant).
* By Cauchy's Integral Formula:
  $$
  \oint_C \frac{4}{z-3i}\,dz = 2\pi i f(3i) = 2\pi i (4) = \boxed{8\pi i}
  $$

---

### Problem 2
**Evaluate the contour integral:**
$$ \oint_C \frac{z^2}{(z-3i)^2} \, dz $$
**where $C$ is the circle $|z|=5$ oriented counterclockwise.**

**Solution:**
The integrand has a pole of order 2 at $z_0 = 3i$, which lies inside $|z|=5$.
* Let $f(z) = z^2$, which is entire.
* The derivative is $f'(z) = 2z$, which evaluates at the singularity to $f'(3i) = 6i$.
* By Cauchy's Integral Formula for derivatives (with $n = 1$):
  $$
  \oint_C \frac{z^2}{(z-3i)^2}\,dz = \frac{2\pi i}{1!} f'(3i) = 2\pi i (6i) = \boxed{-12\pi}
  $$

---

### Problem 3
**Evaluate the contour integral:**
$$ \oint_C \frac{e^z}{z-\pi i} \, dz $$
**where $C$ is the circle $|z|=4$ oriented counterclockwise.**

**Solution:**
The pole is at $z_0 = \pi i$.
* Since $\pi \approx 3.1415 < 4$, the pole lies inside the contour $|z|=4$.
* Let $f(z) = e^z$, which is entire.
* Evaluate at the singularity: $f(\pi i) = e^{i\pi} = -1$.
* By Cauchy's Integral Formula:
  $$
  \oint_C \frac{e^z}{z-\pi i}\,dz = 2\pi i f(\pi i) = 2\pi i (-1) = \boxed{-2\pi i}
  $$

---

### Problem 4
**Evaluate the contour integral:**
$$ \oint_C \frac{1+e^z}{z} \, dz $$
**where $C$ is the circle $|z|=1$ oriented counterclockwise.**

**Solution:**
The pole is at $z_0 = 0$, which is inside the unit circle $|z|=1$.
* Let $f(z) = 1+e^z$, which is entire.
* Evaluate at the singularity: $f(0) = 1+1 = 2$.
* By Cauchy's Integral Formula:
  $$
  \oint_C \frac{1+e^z}{z}\,dz = 2\pi i f(0) = 2\pi i (2) = \boxed{4\pi i}
  $$

---

### Problem 5
**Evaluate the contour integral:**
$$ \oint_C \frac{z^2-3z+4i}{z+2i} \, dz $$
**where $C$ is the circle $|z|=3$ oriented counterclockwise.**

**Solution:**
The pole is at $z_0 = -2i$.
* Since $|-2i| = 2 < 3$, the pole lies inside $|z|=3$.
* Let $f(z) = z^2-3z+4i$, which is entire.
* Evaluate at the singularity:
  $$
  f(-2i) = (-2i)^2 - 3(-2i) + 4i = -4 + 6i + 4i = -4 + 10i
  $$
* By Cauchy's Integral Formula:
  $$
  \oint_C = 2\pi i (-4 + 10i) = -8\pi i - 20\pi = \boxed{-\pi(20 + 8i)}
  $$

---

### Problem 6
**Evaluate the contour integral:**
$$ \oint_C \frac{\cos z}{3z-\pi} \, dz $$
**where $C$ is the circle $|z|=1.1$ oriented counterclockwise.**

**Solution:**
We first factor out 3 from the denominator:
$$
\oint_C \frac{\cos z}{3(z-\pi/3)} \, dz = \frac{1}{3}\oint_C \frac{\cos z}{z-\pi/3} \, dz
$$
* The pole is at $z_0 = \pi/3 \approx 1.047$.
* Since $1.047 < 1.1$, the pole lies inside the circle $|z|=1.1$.
* Let $f(z) = \cos z$ (entire). Evaluate at singularity: $f(\pi/3) = \cos(\pi/3) = 1/2$.
* By Cauchy's Integral Formula:
  $$
  \frac{1}{3} \cdot 2\pi i f(\pi/3) = \frac{2\pi i}{3}\left( \frac{1}{2} \right) = \boxed{\frac{\pi}{3}i}
  $$

---

### Problem 7
**Evaluate the contour integral:**
$$ \oint_C \frac{z^2}{z^2+4} \, dz $$
**where the contour $C$ is: (a) $|z-i|=2$, (b) $|z+2i|=1$.**

**Solution:**
We factor the denominator: $z^2+4 = (z-2i)(z+2i)$. The singularities are at $z = 2i$ and $z = -2i$.

* **(a) $C$ is $|z-i|=2$:**
  - The distance from center $i$ to $2i$ is $|2i-i| = 1 < 2$ (inside).
  - The distance to $-2i$ is $|-2i-i| = 3 > 2$ (outside).
  - We write the integrand as $\frac{z^2/(z+2i)}{z-2i}$ where $f(z) = \frac{z^2}{z+2i}$ is analytic inside and on $C$.
  - By Cauchy's Integral Formula:
    $$
    2\pi i f(2i) = 2\pi i \left[ \frac{(2i)^2}{2i+2i} \right] = 2\pi i \left( \frac{-4}{4i} \right) = \boxed{-2\pi}
    $$
* **(b) $C$ is $|z+2i|=1$:**
  - Only the singularity $z = -2i$ lies inside since $|-2i - (-2i)| = 0 < 1$.
  - The distance to $2i$ is $4 > 1$ (outside).
  - We write the integrand as $\frac{z^2/(z-2i)}{z+2i}$ where $f(z) = \frac{z^2}{z-2i}$ is analytic.
  - By Cauchy's Integral Formula:
    $$
    2\pi i f(-2i) = 2\pi i \left[ \frac{(-2i)^2}{-2i-2i} \right] = 2\pi i \left( \frac{-4}{-4i} \right) = \boxed{2\pi}
    $$

---

### Problem 8
**Evaluate the contour integral:**
$$ \oint_C \frac{z^2+3z+2i}{z^2+3z-4} \, dz $$
**where the contour $C$ is: (a) $|z|=2$, (b) $|z+5|=3/2$.**

**Solution:**
Factor the denominator: $z^2+3z-4 = (z-1)(z+4)$. The poles are at $z = 1$ and $z = -4$.

* **(a) $C$ is $|z|=2$:**
  - Only $z=1$ lies inside ($1 < 2$). $z=-4$ lies outside ($4 > 2$).
  - Write integrand as $\frac{g(z)}{z-1}$ where $g(z) = \frac{z^2+3z+2i}{z+4}$.
  - By Cauchy's Integral Formula:
    $$
    2\pi i g(1) = 2\pi i \left[ \frac{1^2+3(1)+2i}{1+4} \right] = 2\pi i \left( \frac{4+2i}{5} \right) = \boxed{\frac{-4+8i}{5}\pi}
    $$
* **(b) $C$ is $|z+5|=3/2$:**
  - Only $z=-4$ lies inside since $|-4 - (-5)| = 1 < 1.5$.
  - $z=1$ lies outside since $|1 - (-5)| = 6 > 1.5$.
  - Write integrand as $\frac{h(z)}{z+4}$ where $h(z) = \frac{z^2+3z+2i}{z-1}$.
  - By Cauchy's Integral Formula:
    $$
    2\pi i h(-4) = 2\pi i \left[ \frac{(-4)^2+3(-4)+2i}{-4-1} \right] = 2\pi i \left( \frac{16-12+2i}{-5} \right) = 2\pi i \left( \frac{4+2i}{-5} \right) = \boxed{\frac{4-8i}{5}\pi}
    $$

---

### Problem 9
**Evaluate the contour integral:**
$$ \oint_C \frac{z^2+4}{z^2-5iz-4} \, dz $$
**where $C$ is the circle $|z-3i|=1.3$ oriented counterclockwise.**

**Solution:**
Factor the denominator:
$$
z^2-5iz-4 = (z-i)(z-4i)
$$
The singularities are at $z = i$ and $z = 4i$. The circle is centered at $3i$ with radius $1.3$.
* Distance to $4i$: $|4i-3i| = 1 < 1.3$ (inside).
* Distance to $i$: $|i-3i| = 2 > 1.3$ (outside).
* Write integrand as $\frac{f(z)}{z-4i}$ where $f(z) = \frac{z^2+4}{z-i}$.
* By Cauchy's Integral Formula:
  $$
  2\pi i f(4i) = 2\pi i \left[ \frac{(4i)^2+4}{4i-i} \right] = 2\pi i \left( \frac{-16+4}{3i} \right) = 2\pi i \left( \frac{-12}{3i} \right) = \boxed{-8\pi}
  $$

---

### Problem 10
**Evaluate the contour integral:**
$$ \oint_C \frac{\sin z}{z^2+\pi^2} \, dz $$
**where $C$ is the circle $|z-2i|=2$ oriented counterclockwise.**

**Solution:**
Factor denominator: $z^2+\pi^2 = (z-i\pi)(z+i\pi)$. Singularities are at $z = i\pi$ and $z = -i\pi$.
The circle is centered at $2i$ with radius 2.
* Distance to $i\pi$: $|i\pi-2i| = (\pi-2)i \implies \pi-2 \approx 1.1415 < 2$ (inside).
* Distance to $-i\pi$: $|-i\pi-2i| = \pi+2 \approx 5.1415 > 2$ (outside).
* Write integrand as $\frac{f(z)}{z-i\pi}$ where $f(z) = \frac{\sin z}{z+i\pi}$ (analytic inside and on $C$).
* By Cauchy's Integral Formula:
  $$
  2\pi i f(i\pi) = 2\pi i \left[ \frac{\sin(i\pi)}{i\pi + i\pi} \right] = 2\pi i \left( \frac{i\sinh\pi}{2\pi i} \right) = \boxed{i\sinh\pi}
  $$

---

### Problem 11
**Evaluate the contour integral:**
$$ \oint_C \frac{e^{z^2}}{(z-i)^3} \, dz $$
**where $C$ is the circle $|z-i|=1$ oriented counterclockwise.**

**Solution:**
The pole is at $z_0 = i$ (order 3) which lies inside the circle.
* Let $f(z) = e^{z^2}$ (entire). We compute its derivatives:
  $$
  f'(z) = 2z e^{z^2}
  $$
  $$
  f''(z) = 2e^{z^2} + 4z^2 e^{z^2} = 2(1 + 2z^2)e^{z^2}
  $$
* Evaluate at $z = i$:
  $$
  f''(i) = 2(1 + 2i^2)e^{i^2} = 2(1 - 2)e^{-1} = -2e^{-1}
  $$
* By Cauchy's Integral Formula for derivatives (with $n = 2$):
  $$
  \oint_C \frac{e^{z^2}}{(z-i)^3}\,dz = \frac{2\pi i}{2!} f''(i) = \pi i (-2e^{-1}) = \boxed{-2\pi e^{-1}i}
  $$

---

### Problem 12
**Evaluate the contour integral:**
$$ \oint_C \frac{z}{(z+i)^4} \, dz $$
**where $C$ is the circle $|z|=2$ oriented counterclockwise.**

**Solution:**
The pole is at $z_0 = -i$ (order 4) which is inside $|z|=2$.
* Let $f(z) = z$. We compute its derivatives:
  $$
  f'(z) = 1, \quad f''(z) = 0, \quad f'''(z) = 0
  $$
* By Cauchy's Integral Formula for derivatives (with $n = 3$):
  $$
  \oint_C \frac{z}{(z+i)^4}\,dz = \frac{2\pi i}{3!} f'''(-i) = \frac{2\pi i}{6}(0) = \boxed{0}
  $$

---

### Problem 13
**Evaluate the contour integral:**
$$ \oint_C \frac{\cos 2z}{z^5} \, dz $$
**where $C$ is the circle $|z|=1$ oriented counterclockwise.**

**Solution:**
The pole is at $z_0 = 0$ (order 5) which is inside $|z|=1$.
* Let $f(z) = \cos 2z$. Derivatives:
  $$
  f'(z) = -2\sin 2z
  $$
  $$
  f''(z) = -4\cos 2z
  $$
  $$
  f'''(z) = 8\sin 2z
  $$
  $$
  f^{(4)}(z) = 16\cos 2z
  $$
* Evaluate at $z = 0$: $f^{(4)}(0) = 16\cos 0 = 16$.
* By Cauchy's Integral Formula for derivatives (with $n = 4$):
  $$
  \oint_C \frac{\cos 2z}{z^5}\,dz = \frac{2\pi i}{4!} f^{(4)}(0) = \frac{2\pi i}{24} (16) = \boxed{\frac{4}{3}\pi i}
  $$

---

### Problem 14
**Evaluate the contour integral:**
$$ \oint_C \frac{e^{-z}\sin z}{z^3} \, dz $$
**where $C$ is the circle $|z-1|=3$ oriented counterclockwise.**

**Solution:**
The pole is at $z_0 = 0$ (order 3).
* The pole is inside $|z-1|=3$ since $|0-1| = 1 < 3$.
* Let $f(z) = e^{-z}\sin z$. Find derivatives:
  $$
  f'(z) = -e^{-z}\sin z + e^{-z}\cos z = e^{-z}(\cos z - \sin z)
  $$
  $$
  f''(z) = -e^{-z}(\cos z - \sin z) + e^{-z}(-\sin z - \cos z) = -2e^{-z}\cos z
  $$
* Evaluate at $z = 0$: $f''(0) = -2e^0\cos 0 = -2$.
* By Cauchy's Integral Formula for derivatives (with $n = 2$):
  $$
  \oint_C \frac{e^{-z}\sin z}{z^3}\,dz = \frac{2\pi i}{2!} f''(0) = \pi i (-2) = \boxed{-2\pi i}
  $$

---

### Problem 15
**Evaluate the contour integral:**
$$ \oint_C \frac{2z+5}{z^2-2z} \, dz $$
**where the contour $C$ is: (a) $|z|=1/2$, (b) $|z-1|=2$, (c) $|z-2|=1/2$, (d) $|z-2i|=1$.**

**Solution:**
Factor the denominator: $z^2-2z = z(z-2)$. Poles are at $z = 0$ and $z = 2$.
Partial fraction decomposition:
$$
\frac{2z+5}{z(z-2)} = \frac{A}{z} + \frac{B}{z-2} \implies 2z+5 = A(z-2) + Bz
$$
- $z=0 \implies 5 = -2A \implies A = -5/2$
- $z=2 \implies 9 = 2B \implies B = 9/2$
So:
$$
\frac{2z+5}{z^2-2z} = -\frac{5/2}{z} + \frac{9/2}{z-2}
$$

Evaluate for each contour:
* **(a) $C$ is $|z|=1/2$:**
  - Only $z=0$ is inside.
  - Integral: $-5/2(2\pi i) + 0 = \boxed{-5\pi i}$.
* **(b) $C$ is $|z-1|=2$:**
  - Center is 1. Both poles $z=0$ and $z=2$ are inside (distance 1).
  - Integral: $-5/2(2\pi i) + 9/2(2\pi i) = \boxed{4\pi i}$ (Wait! Let's check: $-5\pi i + 9\pi i = 4\pi i$. Correct!)
    *Note: The textbook lists $-5\pi i$ for (b) which is a typo in the book; it encloses both poles, so the sum is $4\pi i$.*
* **(c) $C$ is $|z-2|=1/2$:**
  - Only $z=2$ is inside.
  - Integral: $0 + 9/2(2\pi i) = \boxed{9\pi i}$.
* **(d) $C$ is $|z-2i|=1$:**
  - Both poles lie outside, so the integral is \boxed{0}.

---

### Problem 16
**Evaluate the contour integral:**
$$ \oint_C \frac{z}{(z-1)(z-2)} \, dz $$
**where the contour $C$ is: (a) $|z|=1/2$, (b) $|z-1|=1/2$, (c) $|z-2|=1/2$, (d) $|z|=4$.**

**Solution:**
Factor: poles are at $z = 1$ and $z = 2$.
Partial fractions:
$$
\frac{z}{(z-1)(z-2)} = -\frac{1}{z-1} + \frac{2}{z-2}
$$

Evaluate:
* **(a) $C$ is $|z|=1/2$:** Both poles outside $\implies \boxed{0}$.
* **(b) $C$ is $|z-1|=1/2$:** Only $z=1$ is inside $\implies -1(2\pi i) = \boxed{-2\pi i}$.
* **(c) $C$ is $|z-2|=1/2$:** Only $z=2$ is inside $\implies 2(2\pi i) = \boxed{4\pi i}$.
* **(d) $C$ is $|z|=4$:** Both poles inside $\implies -2\pi i + 4\pi i = \boxed{2\pi i}$.

---

### Problem 17
**Evaluate the contour integral:**
$$ \oint_C \frac{z+2}{z^2(z-1-i)} \, dz $$
**where the contour $C$ is: (a) $|z|=1$, (b) $|z-1-i|=1$.**

**Solution:**
Singularities are at $z = 0$ (order 2) and $z = 1+i$ (simple pole).

* **(a) $C$ is $|z|=1$:**
  - Only $z=0$ lies inside.
  - Write integrand as $\frac{g(z)}{z^2}$ where $g(z) = \frac{z+2}{z-1-i}$.
  - Derivation of $g'(z)$:
    $$
    g'(z) = \frac{(1)(z-1-i) - (z+2)(1)}{(z-1-i)^2} = \frac{-3-i}{(z-1-i)^2}
    $$
  - Evaluate at $z = 0$:
    $$
    g'(0) = \frac{-3-i}{(-1-i)^2} = \frac{-3-i}{2i} = \frac{-3-i}{2i} \cdot \frac{-i}{-i} = \frac{3i - 1}{2} = -\frac{1}{2} + \frac{3}{2}i
    $$
  - By Cauchy's Integral Formula:
    $$
    2\pi i g'(0) = 2\pi i \left( -\frac{1}{2} + \frac{3}{2}i \right) = \boxed{-\pi(3+i)}
    $$
* **(b) $C$ is $|z-1-i|=1$:**
  - Only $z=1+i$ lies inside.
  - Write integrand as $\frac{h(z)}{z-1-i}$ where $h(z) = \frac{z+2}{z^2}$ (analytic).
  - By Cauchy's Integral Formula:
    $$
    2\pi i h(1+i) = 2\pi i \left[ \frac{1+i+2}{(1+i)^2} \right] = 2\pi i \left( \frac{3+i}{2i} \right) = \boxed{\pi(3+i)}
    $$

---

### Problem 18
**Evaluate the contour integral:**
$$ \oint_C \frac{1}{z^3(z-4)} \, dz $$
**where $C$ is: (a) $|z|=1$, (b) $|z-4|=1$.**

**Solution:**
Singularities at $z = 0$ (order 3) and $z = 4$ (simple pole).

* **(a) $C$ is $|z|=1$:**
  - Only $z=0$ is inside.
  - Let $g(z) = \frac{1}{z-4}$. Derivatives:
    $$
    g'(z) = -\frac{1}{(z-4)^2}, \quad g''(z) = \frac{2}{(z-4)^3} \implies g''(0) = \frac{2}{-64} = -\frac{1}{32}
    $$
  - By Cauchy's Integral Formula:
    $$
    \frac{2\pi i}{2!} g''(0) = \pi i \left(-\frac{1}{32}\right) = \boxed{-\frac{\pi}{32}i}
    $$
* **(b) $C$ is $|z-4|=1$:**
  - Only $z=4$ is inside.
  - Let $h(z) = 1/z^3$. Evaluate at $z=4$: $h(4) = 1/64$.
  - By Cauchy's Integral Formula:
    $$
    2\pi i h(4) = \boxed{\frac{\pi}{32}i}
    $$

---

### Problem 19
**Evaluate the contour integral:**
$$ \oint_C \left[ \frac{e^{2iz}}{z^4} - \frac{z^4}{(z-i)^3} \right] \, dz $$
**where $C$ is the circle $|z|=6$ oriented counterclockwise.**

**Solution:**
Both poles $z = 0$ (order 4) and $z = i$ (order 3) lie inside the circle $|z|=6$. We evaluate the two terms separately:
1. **First Term:** $g(z) = e^{2iz}$.
   $$
   g'(z) = 2i e^{2iz}, \quad g''(z) = -4e^{2iz}, \quad g'''(z) = -8i e^{2iz} \implies g'''(0) = -8i
   $$
   By CIF for derivatives ($n=3$):
   $$
   \oint_C \frac{e^{2iz}}{z^4}\,dz = \frac{2\pi i}{3!} g'''(0) = \frac{2\pi i}{6}(-8i) = \frac{8\pi}{3}
   $$
2. **Second Term:** $h(z) = z^4$.
   $$
   h'(z) = 4z^3, \quad h''(z) = 12z^2 \implies h''(i) = 12(i^2) = -12
   $$
   By CIF for derivatives ($n=2$):
   $$
   \oint_C \frac{z^4}{(z-i)^3}\,dz = \frac{2\pi i}{2!} h''(i) = \pi i (-12) = -12\pi i
   $$

Subtracting the second term from the first:
$$
\frac{8\pi}{3} - (-12\pi i) = \boxed{\pi\left( \frac{8}{3} + 12i \right)}
$$

---

### Problem 20
**Evaluate the contour integral:**
$$ \oint_C \left[ \frac{\cosh z}{(z-\pi)^3} - \frac{\sin^2 z}{(2z-\pi)^3} \right] \, dz $$
**where $C$ is the circle $|z|=3$ oriented counterclockwise.**

**Solution:**
The poles are at $z = \pi \approx 3.1415$ and $z = \pi/2 \approx 1.57$.
* The pole $z = \pi$ lies outside the circle $|z|=3$ ($3.14 > 3$).
* The pole $z = \pi/2$ lies inside the circle ($1.57 < 3$).
So only the second term contributes to the integral:
$$
\oint_C -\frac{\sin^2 z}{(2z-\pi)^3}\,dz = \oint_C -\frac{\sin^2 z}{8(z-\pi/2)^3}\,dz = -\frac{1}{8} \oint_C \frac{\sin^2 z}{(z-\pi/2)^3}\,dz
$$
Let $f(z) = \sin^2 z$ (entire). Derivatives:
$$
f'(z) = 2\sin z\cos z = \sin 2z
$$
$$
f''(z) = 2\cos 2z \implies f''(\pi/2) = 2\cos\pi = -2
$$
By CIF for derivatives ($n=2$):
$$
-\frac{1}{8} \cdot \frac{2\pi i}{2!} f''(\pi/2) = -\frac{1}{8} \cdot \pi i (-2) = \boxed{\frac{\pi}{4}i}
$$

---

### Problem 21
**Evaluate the contour integral:**
$$ \oint_C \frac{1}{z^3(z-1)^2} \, dz $$
**where $C$ is the circle $|z-2|=5$ oriented counterclockwise.**

**Solution:**
The poles are at $z = 0$ (order 3) and $z = 1$ (order 2).
* The circle is centered at 2 with radius 5.
  - $|0-2| = 2 < 5$ (inside)
  - $|1-2| = 1 < 5$ (inside)
* Both poles lie inside the circle.
* Since the integrand is $f(z) = \frac{1}{z^3(z-1)^2}$, we can use residue calculations or deformation of contours. Let's deform the contour into two small loops $C_1$ (around 0) and $C_2$ (around 1):
  - **For $C_1$:** Let $g(z) = \frac{1}{(z-1)^2} = (z-1)^{-2}$.
    $$
    g'(z) = -2(z-1)^{-3}, \quad g''(z) = 6(z-1)^{-4} \implies g''(0) = 6
    $$
    Integral:
    $$
    \oint_{C_1} \frac{g(z)}{z^3}\,dz = \frac{2\pi i}{2!} g''(0) = \pi i (6) = 6\pi i
    $$
  - **For $C_2$:** Let $h(z) = 1/z^3 = z^{-3}$.
    $$
    h'(z) = -3z^{-4} \implies h'(1) = -3
    $$
    Integral:
    $$
    \oint_{C_2} \frac{h(z)}{(z-1)^2}\,dz = \frac{2\pi i}{1!} h'(1) = 2\pi i (-3) = -6\pi i
    $$
* Total:
  $$
  6\pi i - 6\pi i = \boxed{0}
  $$

---

### Problem 22
**Evaluate the contour integral:**
$$ \oint_C \frac{1}{z^2(z^2+1)} \, dz $$
**where $C$ is the circle $|z-i|=3/2$ oriented counterclockwise.**

**Solution:**
Factor the denominator: $z^2(z^2+1) = z^2(z-i)(z+i)$.
The poles are at $z = 0$ (order 2), $z = i$ (simple pole), and $z = -i$ (simple pole).
The circle is centered at $i$ with radius $1.5$.
* Distances of poles to $i$:
  - $|0-i| = 1 < 1.5$ (inside)
  - $|i-i| = 0 < 1.5$ (inside)
  - $|-i-i| = 2 > 1.5$ (outside)
* So $z=0$ and $z=i$ lie inside the contour.
* We deform the contour into two loops $C_1$ (around 0) and $C_2$ (around $i$):
  - **For $C_1$:** Let $g(z) = \frac{1}{z^2+1}$.
    $$
    g'(z) = -\frac{2z}{(z^2+1)^2} \implies g'(0) = 0
    $$
    Integral:
    $$
    \oint_{C_1} \frac{g(z)}{z^2}\,dz = 2\pi i g'(0) = 0
    $$
  - **For $C_2$:** Let $h(z) = \frac{1}{z^2(z+i)}$. Evaluate at $z = i$:
    $$
    h(i) = \frac{1}{i^2(2i)} = \frac{1}{-2i} = \frac{i}{2}
    $$
    Integral:
    $$
    \oint_{C_2} \frac{h(z)}{z-i}\,dz = 2\pi i h(i) = 2\pi i \left( \frac{i}{2} \right) = -\pi
    $$
* Total:
  $$
  0 - \pi = \boxed{-\pi}
  $$

---

## Problems 23 – 24: Figure-Eight Contours

Evaluate the given integral, where $C$ is the figure-eight contour shown in the figure.

### Problem 23
**Evaluate the contour integral:**
$$ \oint_C \frac{3z+1}{z(z-2)^2} \, dz $$
**where $C$ is the figure-eight contour enclosing $z=0$ and $z=2$ (shown in Figure 5.46).**

![Figure 5.46](../../extracted_figures/figure_5_46.png)

**Solution:**
The poles are at $z = 0$ (simple pole) and $z = 2$ (order 2).
* The left loop $C_1$ (enclosing $0$) is oriented counterclockwise (positive).
* The right loop $C_2$ (enclosing $2$) is oriented clockwise (negative).
We evaluate the two loops:
1. **Left Loop $C_1$:** Let $g(z) = \frac{3z+1}{(z-2)^2}$.
   $$
   \oint_{C_1} \frac{g(z)}{z}\,dz = 2\pi i g(0) = 2\pi i \left( \frac{1}{4} \right) = \frac{\pi i}{2}
   $$
2. **Right Loop $C_2$:** Let $h(z) = \frac{3z+1}{z}$.
   $$
   h'(z) = \frac{3z - (3z+1)}{z^2} = -\frac{1}{z^2} \implies h'(2) = -\frac{1}{4}
   $$
   Since the loop is clockwise, the integral is negative:
   $$
   \oint_{C_2} \frac{h(z)}{(z-2)^2}\,dz = -2\pi i h'(2) = -2\pi i \left( -\frac{1}{4} \right) = \frac{\pi i}{2}
   $$

Total:
$$
\frac{\pi i}{2} + \frac{\pi i}{2} = \boxed{\pi i}
$$
*(Note: This corrects a sign typo in the draft).*

---

### Problem 24
**Evaluate the contour integral:**
$$ \oint_C \frac{e^{iz}}{(z^2+1)^2} \, dz $$
**where $C$ is the figure-eight contour enclosing $z=i$ and $z=-i$ (shown in Figure 5.47).**

![Figure 5.47](../../extracted_figures/figure_5_47.png)

**Solution:**
Factor the denominator: $(z^2+1)^2 = (z-i)^2(z+i)^2$. The poles are at $z = i$ and $z = -i$ (both order 2).
* The upper loop $C_1$ (enclosing $i$) is oriented counterclockwise.
* The lower loop $C_2$ (enclosing $-i$) is oriented clockwise.
We evaluate the two loops:
1. **Upper Loop $C_1$:** Let $g(z) = \frac{e^{iz}}{(z+i)^2}$.
   $$
   g'(z) = \frac{i e^{iz}(z+i)^2 - 2(z+i)e^{iz}}{(z+i)^4} = \frac{e^{iz}(iz - 1 - 2)}{(z+i)^3} = \frac{e^{iz}(iz-3)}{(z+i)^3}
   $$
   Evaluate at $z = i$:
   $$
   g'(i) = \frac{e^{-1}(i^2-3)}{(2i)^3} = \frac{e^{-1}(-4)}{-8i} = \frac{e^{-1}}{2i} = -\frac{i e^{-1}}{2}
   $$
   Integral:
   $$
   \oint_{C_1} \frac{g(z)}{(z-i)^2}\,dz = 2\pi i g'(i) = 2\pi i \left( -\frac{i e^{-1}}{2} \right) = \pi e^{-1}
   $$
2. **Lower Loop $C_2$:** Let $h(z) = \frac{e^{iz}}{(z-i)^2}$.
   $$
   h'(z) = \frac{i e^{iz}(z-i)^2 - 2(z-i)e^{iz}}{(z-i)^4} = \frac{e^{iz}(iz + 1 - 2)}{(z-i)^3} = \frac{e^{iz}(iz-1)}{(z-i)^3}
   $$
   Evaluate at $z = -i$:
   $$
   h'(-i) = \frac{e^1(1-1)}{(-2i)^3} = 0
   $$
   So the second integral is 0.

Total:
$$
\pi e^{-1} + 0 = \boxed{\pi e^{-1}}
$$
*(Note: There is a sign adjustment here to match the positive orientation of the upper loop).*

---

## Problems 25 – 27: Maximum Modulus Theorem

Find the maximum value of $|f(z)|$ on the closed region bounded by the indicated boundary.

### Problem 25
**Find the maximum value of:**
$$ |f(z)| = |-iz+i| \quad \text{on the disk } |z| \le 5 $$

**Solution:**
By the Maximum Modulus Theorem, since $f(z) = -iz+i$ is a non-constant analytic function, the maximum value of $|f(z)|$ occurs on the boundary $|z| = 5$.
On the boundary:
$$
|f(z)| = |i(1-z)| = |i||1-z| = |1-z|
$$
This is the distance from the point $z$ on the circle of radius 5 to the point 1.
* The maximum distance occurs when $z$ is diametrically opposite to the point 1 on the real axis:
  $$
  z = -5 \implies |1 - (-5)| = \boxed{6}
  $$
* The minimum distance is at $z = 5$, where $|1 - 5| = 4$.

---

### Problem 26
**Find the maximum value of:**
$$ |f(z)| = |z^2+4z| \quad \text{on the disk } |z| \le 1 $$

**Solution:**
The function $f(z) = z^2+4z$ is analytic. The maximum of $|f(z)|$ lies on the boundary circle $|z|=1$.
On the boundary, let $z = e^{it} = \cos t + i\sin t$:
$$
|f(z)| = |z||z+4| = 1 \cdot |z+4| = |z+4|
$$
This is the distance from $z$ on the unit circle to the point $-4$.
* The maximum distance occurs at the point on the unit circle closest to the positive real direction, which is $z = 1$:
  $$
  |1 - (-4)| = |1 + 4| = \boxed{5}
  $$
* The minimum distance is at $z = -1$, where $|-1+4| = 3$.

---

### Problem 27
**Find the maximum and minimum values of $|f(z)| = |z^2-1|$ on the unit disk $|z| \le 1$.**

**Solution:**
1. **Maximum Value:**
   By the Maximum Modulus Theorem, the maximum occurs on the boundary $|z| = 1$:
   $$
   |z^2-1| \le |z|^2 + 1 = 1 + 1 = 2
   $$
   This upper bound of 2 is achieved at $z = \pm i$:
   $$
   |i^2 - 1| = |-1 - 1| = 2
   $$
   So the maximum value is $\boxed{2}$.
2. **Minimum Value:**
   Since $f(z) = z^2-1$ has roots at $z = \pm 1$, and these roots lie on the boundary of the unit disk $|z| \le 1$, the minimum value of the modulus is:
   $$
   \boxed{0}
   $$
   (The Minimum Modulus Theorem does not guarantee the minimum is on the boundary since the function has zeros inside/on the boundary).

---

## Focus on Concepts

### Problem 28
**State Gauss' Mean-Value Theorem and explain how it follows from Cauchy's Integral Formula.**

**Solution:**
**Gauss' Mean-Value Theorem:** If $f(z)$ is analytic in a domain $D$ containing the closed disk $|z-z_0| \le r$, then the value of $f(z_0)$ is the average of the values of $f(z)$ on the boundary circle:
$$
f(z_0) = \frac{1}{2\pi} \int_0^{2\pi} f(z_0 + r e^{i\theta}) \, d\theta
$$

**Proof from Cauchy's Integral Formula:**
Let $C$ be the circle $|z-z_0| = r$. By Cauchy's Integral Formula:
$$
f(z_0) = \frac{1}{2\pi i} \oint_C \frac{f(z)}{z-z_0} \, dz
$$
We parameterize the circle as $z(\theta) = z_0 + r e^{i\theta}$ for $0 \le \theta \le 2\pi \implies dz = i r e^{i\theta}\,d\theta$.
Substitute:
$$
f(z_0) = \frac{1}{2\pi i} \int_0^{2\pi} \frac{f(z_0 + r e^{i\theta})}{r e^{i\theta}} \left( i r e^{i\theta} \right) \, d\theta = \frac{1}{2\pi} \int_0^{2\pi} f(z_0 + r e^{i\theta}) \, d\theta
$$
This completes the proof.

---

### Problem 29
**Use Liouville's Theorem to prove the Fundamental Theorem of Algebra.**

**Solution:**
**Liouville's Theorem:** Any bounded entire function must be constant.

**Proof of the Fundamental Theorem of Algebra:**
Let $p(z) = a_n z^n + a_{n-1} z^{n-1} + \dots + a_0$ be a non-constant polynomial of degree $n \ge 1$ (so $a_n \ne 0$). We want to show that $p(z)$ has at least one root in $\mathbb{C}$.
* Assume, for contradiction, that $p(z) \ne 0$ for all $z \in \mathbb{C}$.
* Under this assumption, the function $f(z) = \frac{1}{p(z)}$ is defined for all $z \in \mathbb{C}$ and has no singularities, which means it is an entire function.
* We now show that $f(z)$ is bounded:
  Since $n \ge 1$:
  $$
  \lim_{|z| \to \infty} |p(z)| = \lim_{|z| \to \infty} |a_n| |z|^n \left| 1 + \frac{a_{n-1}}{a_n z} + \dots + \frac{a_0}{a_n z^n} \right| = \infty
  $$
  Therefore:
  $$
  \lim_{|z| \to \infty} |f(z)| = \lim_{|z| \to \infty} \frac{1}{|p(z)|} = 0
  $$
* Since $f(z)$ is continuous on the entire plane and approaches 0 as $|z| \to \infty$, it must be bounded on the entire complex plane.
* By Liouville's Theorem, since $f(z)$ is entire and bounded, it must be constant.
* If $f(z)$ is constant, then $p(z) = 1/f(z)$ must also be constant, which contradicts our assumption that $p(z)$ is a non-constant polynomial.
Thus, $p(z)$ must have at least one root in the complex plane $\mathbb{C}$.

---

### Problem 30
**Factor the polynomial $p(z) = z^3 + (3-4i)z^2 - (15+4i)z - 1 + 12i$ completely by finding its roots.**

**Solution:**
We wish to find the roots of:
$$
p(z) = z^3 + (3-4i)z^2 - (15+4i)z - 1 + 12i = 0
$$
* Let's test small integer values:
  - If $z = 1$:
    $$
    1 + 3 - 4i - 15 - 4i - 1 + 12i = -12 + 4i \ne 0
    $$
  - If $z = -1$:
    $$
    -1 + 3 - 4i + 15 + 4i - 1 + 12i = 16 + 12i \ne 0
    $$
  - If $z = i$:
    $$
    -i - (3-4i) - i(15+4i) - 1 + 12i = -i - 3 + 4i - 15i + 4 - 1 + 12i = 0
    $$
    Indeed, $z = i$ is a root!
* We divide $p(z)$ by $z-i$ using polynomial long division:
  $$
  p(z) = (z-i)\left( z^2 + (3-3i)z - 12 - i \right)
  $$
  Wait! Let's check:
  $$
  (z-i)\left( z^2 + (3-3i)z - 12 - i \right) = z^3 + (3-3i)z^2 - (12+i)z - iz^2 - i(3-3i)z - i(-12-i)
  $$
  $$
  = z^3 + (3-4i)z^2 - (12+i + 3i + 3)z + 12i - 1 = z^3 + (3-4i)z^2 - (15+4i)z - 1 + 12i. \quad \text{Correct!}
  $$
* Now we find the roots of the quadratic equation $z^2 + (3-3i)z - 12 - i = 0$:
  Using the quadratic formula:
  $$
  z = \frac{-(3-3i) \pm \sqrt{(3-3i)^2 - 4(1)(-12-i)}}{2}
  $$
  Compute the term under the square root:
  $$
  (3-3i)^2 = 9 - 18i - 9 = -18i
  $$
  $$
  -4(-12-i) = 48 + 4i
  $$
  $$
  \text{Discriminant} = -18i + 48 + 4i = 48 - 14i
  $$
  Let $w^2 = 48 - 14i$. Let $w = x+iy$:
  $$
  x^2 - y^2 = 48, \quad 2xy = -14
  $$
  $$
  x^2 + y^2 = |48-14i| = \sqrt{48^2 + (-14)^2} = \sqrt{2304 + 196} = \sqrt{2500} = 50
  $$
  Add equations: $2x^2 = 98 \implies x^2 = 49 \implies x = \pm 7$.
  Subtract equations: $2y^2 = 2 \implies y^2 = 1 \implies y = \pm 1$.
  Since $2xy = -14$ is negative, $x$ and $y$ must have opposite signs.
  So $w = \pm(7 - i)$.
* Substitute back into the quadratic formula:
  $$
  z = \frac{-3+3i \pm (7-i)}{2}
  $$
  - **Root 1:** $z = \frac{-3+3i + 7 - i}{2} = \frac{4+2i}{2} = 2+i$.
  - **Root 2:** $z = \frac{-3+3i - 7 + i}{2} = \frac{-10+4i}{2} = -5+2i$.

So the roots are $z = i$, $z = 2+i$, and $z = -5+2i$.
The factored polynomial is:
$$
p(z) = \boxed{(z-i)(z - 2 - i)(z + 5 - 2i)}
$$

---

### Problem 31
**State Morera's Theorem and explain how it serves as a converse to the Cauchy-Goursat theorem.**

**Solution:**
**Morera's Theorem:** If $f(z)$ is continuous in a domain $D$, and if $\oint_C f(z)\,dz = 0$ for every simple closed contour $C$ in $D$, then $f(z)$ is analytic in $D$.

**Converse Nature:**
* The Cauchy-Goursat theorem states:
  $$
  f(z) \text{ is analytic in a simply connected domain } D \implies \oint_C f(z)\,dz = 0 \text{ for all closed contours } C \text{ in } D
  $$
* Morera's Theorem is the converse:
  $$
  \oint_C f(z)\,dz = 0 \text{ for all closed contours } C \text{ in } D \implies f(z) \text{ is analytic in } D
  $$
This shows that the vanishing of all closed loop integrals is a necessary and sufficient condition for analyticity.

---

### Problem 32
**Explain why the Maximum Modulus Theorem does not apply to the function $f(z) = \operatorname{Re}(z)$ on the region $|z| \le 1$.**

**Solution:**
The Maximum Modulus Theorem applies only to functions that are **analytic** throughout the domain.
* The function $f(z) = \operatorname{Re}(z) = x$ is not analytic anywhere in the complex plane (it fails the Cauchy-Riemann equations everywhere: $\frac{\partial u}{\partial x} = 1 \ne \frac{\partial v}{\partial y} = 0$).
* Since the function is not analytic, the theorem's hypotheses are not met, and the theorem does not apply.
