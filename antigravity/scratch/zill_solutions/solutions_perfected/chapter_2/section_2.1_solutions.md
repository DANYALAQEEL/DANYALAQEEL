# Complex Analysis — Dennis G. Zill, 2nd Edition
## Chapter 2 · Section 2.1 — Complex Functions
### Problems 1 – 38 · Complete Solutions

---

> **Key Concepts of Complex Functions**
>
> 1. **Definition:** A complex function $w = f(z)$ maps a complex variable $z = x + iy$ in the $z$-plane to $w = u + iv$ in the $w$-plane, where:
>    $$f(z) = u(x, y) + i v(x, y)$$
>    Here, $u(x, y)$ and $v(x, y)$ are real-valued functions of two real variables.
> 2. **Polar Representation:** Alternatively, using polar coordinates $z = r e^{i\theta}$:
>    $$f(z) = u(r, \theta) + i v(r, \theta)$$
> 3. **Exponential Function:** Defined as:
>    $$e^z = e^{x+iy} = e^x(\cos y + i\sin y)$$
>    * Modulus: $|e^z| = e^x$
>    * Periodicity: Periodic with pure imaginary period $2\pi i$ (i.e. $e^{z + 2\pi i} = e^z$).
> 4. **Natural Domain:** The set of all points in the complex plane for which the formula defining $f(z)$ is mathematically defined and yields a single finite value.

---

## Problems 1 – 8

**Evaluate the given complex function $f$ at the indicated points.**

#### Problem 1
State the function $f(z) = z^2 \bar{z} - 2i$ and evaluate it at the following points:
(a) $z = 2i$
(b) $z = 1 + i$
(c) $z = 3 - 2i$

**Solution:**
We are given $f(z) = z^2 \bar{z} - 2i$. We evaluate this function at each indicated point step-by-step:

**(a) At $z = 2i$:**
1. Find the complex conjugate $\bar{z}$:
   $$\bar{z} = \overline{2i} = -2i$$
2. Compute the square $z^2$:
   $$z^2 = (2i)^2 = 4i^2 = -4$$
3. Substitute these values into the function definition:
   $$f(2i) = z^2 \bar{z} - 2i = (-4)(-2i) - 2i = 8i - 2i = 6i$$
Thus, $f(2i) = \boxed{6i}$.

**(b) At $z = 1 + i$:**
1. Find the complex conjugate $\bar{z}$:
   $$\bar{z} = \overline{1+i} = 1-i$$
2. Compute the square $z^2$:
   $$z^2 = (1+i)^2 = 1 + 2i + i^2 = 1 + 2i - 1 = 2i$$
3. Substitute these values into the function definition:
   $$f(1+i) = z^2 \bar{z} - 2i = (2i)(1-i) - 2i = 2i(1) - 2i(i) - 2i = 2i + 2 - 2i = 2$$
Thus, $f(1+i) = \boxed{2}$.

**(c) At $z = 3 - 2i$:**
1. Find the complex conjugate $\bar{z}$:
   $$\bar{z} = \overline{3-2i} = 3+2i$$
2. Compute the square $z^2$:
   $$z^2 = (3-2i)^2 = 3^2 - 2(3)(2i) + (2i)^2 = 9 - 12i - 4 = 5 - 12i$$
3. Substitute these values into the function definition:
   $$f(3-2i) = z^2 \bar{z} - 2i = (5-12i)(3+2i) - 2i$$
   Expanding the product:
   $$(5-12i)(3+2i) = 5(3) + 5(2i) - 12i(3) - 12i(2i) = 15 + 10i - 36i - 24i^2$$
   Since $i^2 = -1$:
   $$15 - 26i + 24 = 39 - 26i$$
   Now subtract $2i$:
   $$f(3-2i) = 39 - 26i - 2i = 39 - 28i$$
Thus, $f(3-2i) = \boxed{39 - 28i}$.

---

#### Problem 2
State the function $f(z) = -z^3 + 2z + \bar{z}$ and evaluate it at the following points:
(a) $z = i$
(b) $z = 2 - i$
(c) $z = 1 + 2i$

**Solution:**
We are given $f(z) = -z^3 + 2z + \bar{z}$. We evaluate this function at each indicated point step-by-step:

**(a) At $z = i$:**
1. Compute the cube $z^3$:
   $$z^3 = i^3 = -i$$
2. Find the complex conjugate $\bar{z}$:
   $$\bar{z} = \overline{i} = -i$$
3. Substitute these into the function:
   $$f(i) = -z^3 + 2z + \bar{z} = -(-i) + 2(i) + (-i) = i + 2i - i = 2i$$
Thus, $f(i) = \boxed{2i}$.

**(b) At $z = 2 - i$:**
1. Compute the cube $z^3$:
   $$z^3 = (2-i)^3 = 2^3 - 3(2^2)(i) + 3(2)(i^2) - i^3 = 8 - 12i - 6 + i = 2 - 11i$$
2. Find the complex conjugate $\bar{z}$:
   $$\bar{z} = \overline{2-i} = 2+i$$
3. Substitute these into the function:
   $$f(2-i) = -(2-11i) + 2(2-i) + (2+i)$$
   $$= -2 + 11i + 4 - 2i + 2 + i$$
   Grouping the real and imaginary parts:
   $$\text{Real part: } -2 + 4 + 2 = 4$$
   $$\text{Imaginary part: } 11i - 2i + i = 10i$$
   $$f(2-i) = 4 + 10i$$
Thus, $f(2-i) = \boxed{4 + 10i}$.

**(c) At $z = 1 + 2i$:**
1. Compute the cube $z^3$:
   $$z^3 = (1+2i)^3 = 1^3 + 3(1^2)(2i) + 3(1)(2i)^2 + (2i)^3 = 1 + 6i - 12 - 8i = -11 - 2i$$
2. Find the complex conjugate $\bar{z}$:
   $$\bar{z} = \overline{1+2i} = 1-2i$$
3. Substitute these into the function:
   $$f(1+2i) = -(-11-2i) + 2(1+2i) + (1-2i)$$
   $$= 11 + 2i + 2 + 4i + 1 - 2i$$
   Grouping the real and imaginary parts:
   $$\text{Real part: } 11 + 2 + 1 = 14$$
   $$\text{Imaginary part: } 2i + 4i - 2i = 4i$$
   $$f(1+2i) = 14 + 4i$$
Thus, $f(1+2i) = \boxed{14 + 4i}$.

---

#### Problem 3
State the function $f(z) = \log_e |z| + i\operatorname{Arg}(z)$ and evaluate it at the following points:
(a) $z = 1$
(b) $z = 4i$
(c) $z = 1 + i$

**Solution:**
We are given $f(z) = \log_e |z| + i\operatorname{Arg}(z)$.

**(a) At $z = 1$:**
1. Modulus: $|1| = 1 \implies \log_e(1) = 0$
2. Argument: Since $z=1$ lies on the positive real axis, $\operatorname{Arg}(1) = 0$.
3. Substitute:
   $$f(1) = 0 + 0i = 0$$
Thus, $f(1) = \boxed{0}$.

**(b) At $z = 4i$:**
1. Modulus: $|4i| = 4 \implies \log_e(4) = 2\log_e 2$
2. Argument: Since $z=4i$ lies on the positive imaginary axis, $\operatorname{Arg}(4i) = \frac{\pi}{2}$.
3. Substitute:
   $$f(4i) = \log_e 4 + i\frac{\pi}{2}$$
Thus, $f(4i) = \boxed{\log_e 4 + i\frac{\pi}{2}}$.

**(c) At $z = 1 + i$:**
1. Modulus: $|1+i| = \sqrt{1^2+1^2} = \sqrt{2} \implies \log_e(\sqrt{2}) = \frac{1}{2}\log_e 2$
2. Argument: Since $z=1+i$ lies in the first quadrant, $\operatorname{Arg}(1+i) = \arctan(1/1) = \frac{\pi}{4}$.
3. Substitute:
   $$f(1+i) = \frac{1}{2}\log_e 2 + i\frac{\pi}{4}$$
Thus, $f(1+i) = \boxed{\frac{1}{2}\log_e 2 + i\frac{\pi}{4}}$.

---

#### Problem 4
State the function $f(z) = |z|^2 - 2\operatorname{Re}(iz) + z$ and evaluate it at the following points:
(a) $z = 3 - 4i$
(b) $z = 2 - i$
(c) $z = 1 + 2i$

**Solution:**
First, let's simplify the term $\operatorname{Re}(iz)$ for a general $z = x+iy$:
$$iz = i(x+iy) = ix + iy^2 = -y + ix \implies \operatorname{Re}(iz) = -y$$
So the function becomes:
$$f(z) = (x^2 + y^2) - 2(-y) + x + iy = (x^2 + y^2 + 2y + x) + iy$$

**(a) At $z = 3 - 4i$:**
1. Here $x = 3$ and $y = -4$.
2. Compute the real part:
   $$u(3, -4) = 3^2 + (-4)^2 + 2(-4) + 3 = 9 + 16 - 8 + 3 = 20$$
3. The imaginary part is $y = -4$.
4. Substitute:
   $$f(3-4i) = 20 - 4i$$
Thus, $f(3-4i) = \boxed{20 - 4i}$.

**(b) At $z = 2 - i$:**
1. Here $x = 2$ and $y = -1$.
2. Compute the real part:
   $$u(2, -1) = 2^2 + (-1)^2 + 2(-1) + 2 = 4 + 1 - 2 + 2 = 5$$
3. The imaginary part is $y = -1$.
4. Substitute:
   $$f(2-i) = 5 - i$$
Thus, $f(2-i) = \boxed{5 - i}$.

**(c) At $z = 1 + 2i$:**
1. Here $x = 1$ and $y = 2$.
2. Compute the real part:
   $$u(1, 2) = 1^2 + 2^2 + 2(2) + 1 = 1 + 4 + 4 + 1 = 10$$
3. The imaginary part is $y = 2$.
4. Substitute:
   $$f(1+2i) = 10 + 2i$$
Thus, $f(1+2i) = \boxed{10 + 2i}$.

---

#### Problem 5
State the function $f(z) = (xy - x^2) + i(3x + y)$ and evaluate it at the following points:
(a) $z = 3i$
(b) $z = 4 + i$
(c) $z = 3 - 5i$

**Solution:**
The function has real part $u(x,y) = xy - x^2$ and imaginary part $v(x,y) = 3x + y$.

**(a) At $z = 3i$:**
1. Here $x = 0, y = 3$.
2. Real part: $u(0, 3) = 0(3) - 0^2 = 0$.
3. Imaginary part: $v(0, 3) = 3(0) + 3 = 3$.
4. Substitute:
   $$f(3i) = 0 + 3i = 3i$$
Thus, $f(3i) = \boxed{3i}$.

**(b) At $z = 4 + i$:**
1. Here $x = 4, y = 1$.
2. Real part: $u(4, 1) = 4(1) - 4^2 = 4 - 16 = -12$.
3. Imaginary part: $v(4, 1) = 3(4) + 1 = 12 + 1 = 13$.
4. Substitute:
   $$f(4+i) = -12 + 13i$$
Thus, $f(4+i) = \boxed{-12 + 13i}$.

**(c) At $z = 3 - 5i$:**
1. Here $x = 3, y = -5$.
2. Real part: $u(3, -5) = 3(-5) - 3^2 = -15 - 9 = -24$.
3. Imaginary part: $v(3, -5) = 3(3) + (-5) = 9 - 5 = 4$.
4. Substitute:
   $$f(3-5i) = -24 + 4i$$
Thus, $f(3-5i) = \boxed{-24 + 4i}$.

---

#### Problem 6
State the function $f(z) = e^z$ and evaluate it at the following points:
(a) $z = 2 - \pi i$
(b) $z = \frac{\pi}{3}i$
(c) $z = \log_e 2 - \frac{5\pi}{6}i$

**Solution:**
We use Euler's formula: $e^{x+iy} = e^x(\cos y + i\sin y)$.

**(a) At $z = 2 - \pi i$:**
1. Here $x = 2, y = -\pi$.
2. Substitute into Euler's formula:
   $$f(2 - \pi i) = e^2(\cos(-\pi) + i\sin(-\pi))$$
3. Since $\cos(-\pi) = -1$ and $\sin(-\pi) = 0$:
   $$f(2 - \pi i) = e^2(-1 + 0i) = -e^2$$
Thus, $f(2-\pi i) = \boxed{-e^2}$.

**(b) At $z = \frac{\pi}{3}i$:**
1. Here $x = 0, y = \pi/3$.
2. Substitute:
   $$f(i\pi/3) = e^0(\cos(\pi/3) + i\sin(\pi/3))$$
3. Since $e^0 = 1$, $\cos(\pi/3) = 1/2$, and $\sin(\pi/3) = \sqrt{3}/2$:
   $$f(i\pi/3) = 1\left(\frac{1}{2} + i\frac{\sqrt{3}}{2}\right) = \frac{1}{2} + \frac{\sqrt{3}}{2}i$$
Thus, $f(i\pi/3) = \boxed{\frac{1}{2} + \frac{\sqrt{3}}{2}i}$.

**(c) At $z = \log_e 2 - \frac{5\pi}{6}i$:**
1. Here $x = \log_e 2, y = -5\pi/6$.
2. Since $e^{\log_e 2} = 2$:
   $$f(z) = 2\left(\cos\left(-\frac{5\pi}{6}\right) + i\sin\left(-\frac{5\pi}{6}\right)\right)$$
3. Since $\cos(-5\pi/6) = -\sqrt{3}/2$ and $\sin(-5\pi/6) = -1/2$:
   $$f(z) = 2\left(-\frac{\sqrt{3}}{2} - \frac{1}{2}i\right) = -\sqrt{3} - i$$
Thus, $f(z) = \boxed{-\sqrt{3} - i}$.

---

#### Problem 7
State the function $f(z) = r + i \cos^2 \theta$ and evaluate it at the following points:
(a) $z = 3$
(b) $z = -2i$
(c) $z = 2 - i$

**Solution:**
Here the function is defined in polar coordinates $z = r e^{i\theta}$ where $r = |z|$ and $\theta = \operatorname{arg}(z)$.

**(a) At $z = 3$:**
1. Modulus: $r = |3| = 3$.
2. Argument: Since $3$ lies on the positive real axis, $\theta = 0$.
3. Substitute:
   $$f(3) = 3 + i\cos^2(0) = 3 + i(1)^2 = 3 + i$$
Thus, $f(3) = \boxed{3 + i}$.

**(b) At $z = -2i$:**
1. Modulus: $r = |-2i| = 2$.
2. Argument: Since $-2i$ lies on the negative imaginary axis, $\theta = -\pi/2$.
3. Substitute:
   $$f(-2i) = 2 + i\cos^2(-\pi/2) = 2 + i(0)^2 = 2$$
Thus, $f(-2i) = \boxed{2}$.

**(c) At $z = 2 - i$:**
1. Modulus: $r = |2-i| = \sqrt{2^2+(-1)^2} = \sqrt{5}$.
2. In polar representation, $\cos\theta = x/r = 2/\sqrt{5}$.
3. Therefore:
   $$\cos^2\theta = \left(\frac{2}{\sqrt{5}}\right)^2 = \frac{4}{5}$$
4. Substitute:
   $$f(2-i) = \sqrt{5} + i\left(\frac{4}{5}\right)$$
Thus, $f(2-i) = \boxed{\sqrt{5} + \frac{4}{5}i}$.

---

#### Problem 8
State the function $f(z) = r \sin\frac{\theta}{2} + i\cos(2\theta)$ and evaluate it at the following points:
(a) $z = -2$
(b) $z = 1 + i$
(c) $z = -5i$

**Solution:**
This function is defined in polar coordinates.

**(a) At $z = -2$:**
1. Modulus: $r = |-2| = 2$.
2. Argument: Since $-2$ lies on the negative real axis, $\theta = \pi$.
3. Substitute:
   $$f(-2) = 2\sin\frac{\pi}{2} + i\cos(2\pi) = 2(1) + i(1) = 2 + i$$
Thus, $f(-2) = \boxed{2 + i}$.

**(b) At $z = 1 + i$:**
1. Modulus: $r = |1+i| = \sqrt{2}$.
2. Argument: Since $1+i$ lies in the first quadrant on the line $y=x$, $\theta = \pi/4$.
3. Substitute:
   $$f(1+i) = \sqrt{2}\sin\frac{\pi}{8} + i\cos\left(2 \cdot \frac{\pi}{4}\right)$$
   Note that $\cos(\pi/2) = 0$. For $\sin(\pi/8)$, we use the half-angle formula:
   $$\sin\frac{\pi}{8} = \sqrt{\frac{1 - \cos(\pi/4)}{2}} = \sqrt{\frac{1 - \sqrt{2}/2}{2}} = \frac{\sqrt{2-\sqrt{2}}}{2}$$
   Therefore:
   $$f(1+i) = \sqrt{2} \left(\frac{\sqrt{2-\sqrt{2}}}{2}\right) + i(0) = \frac{\sqrt{4-2\sqrt{2}}}{2}$$
Thus, $f(1+i) = \boxed{\frac{\sqrt{4-2\sqrt{2}}}{2}}$.

**(c) At $z = -5i$:**
1. Modulus: $r = |-5i| = 5$.
2. Argument: Since $-5i$ lies on the negative imaginary axis, $\theta = -\pi/2$.
3. Substitute:
   $$f(-5i) = 5\sin\left(-\frac{\pi}{4}\right) + i\cos(-\pi)$$
   Since $\sin(-\pi/4) = -\sqrt{2}/2$ and $\cos(-\pi) = -1$:
   $$f(-5i) = 5\left(-\frac{\sqrt{2}}{2}\right) - i = -\frac{5\sqrt{2}}{2} - i$$
Thus, $f(-5i) = \boxed{-\frac{5\sqrt{2}}{2} - i}$.

---

## Problems 9 – 16

**Find the real and imaginary parts $u$ and $v$ of the given function as functions of $x$ and $y$.**

#### Problem 9
Find the real and imaginary parts of the function $f(z) = 6z - 5 + 9i$.

**Solution:**
1. Substitute $z = x+iy$ into the expression:
   $$f(z) = 6(x+iy) - 5 + 9i$$
2. Expand and group real and imaginary components:
   $$f(z) = 6x + 6iy - 5 + 9i = (6x - 5) + i(6y + 9)$$
Thus, we find:
$$\boxed{u(x, y) = 6x - 5, \quad v(x, y) = 6y + 9}$$

---

#### Problem 10
Find the real and imaginary parts of the function $f(z) = -3z + 2\bar{z} - i$.

**Solution:**
1. Substitute $z = x+iy$ and $\bar{z} = x-iy$:
   $$f(z) = -3(x+iy) + 2(x-iy) - i$$
2. Expand:
   $$f(z) = -3x - 3iy + 2x - 2iy - i$$
3. Combine real terms and imaginary terms:
   $$f(z) = (-3x + 2x) + i(-3y - 2y - 1) = -x - i(5y + 1)$$
Thus, we find:
$$\boxed{u(x, y) = -x, \quad v(x, y) = -5y - 1}$$

---

#### Problem 11
Find the real and imaginary parts of the function $f(z) = z^3 - 2z + 6$.

**Solution:**
1. Substitute $z = x+iy$:
   $$f(z) = (x+iy)^3 - 2(x+iy) + 6$$
2. Expand $(x+iy)^3$ using binomial expansion:
   $$(x+iy)^3 = x^3 + 3x^2(iy) + 3x(iy)^2 + (iy)^3 = x^3 + 3ix^2y - 3xy^2 - iy^3$$
   $$= (x^3 - 3xy^2) + i(3x^2y - y^3)$$
3. Substitute this back:
   $$f(z) = (x^3 - 3xy^2) + i(3x^2y - y^3) - 2x - 2iy + 6$$
4. Group real and imaginary components:
   $$f(z) = (x^3 - 3xy^2 - 2x + 6) + i(3x^2y - y^3 - 2y)$$
Thus, we find:
$$\boxed{u(x, y) = x^3 - 3xy^2 - 2x + 6, \quad v(x, y) = 3x^2y - y^3 - 2y}$$

---

#### Problem 12
Find the real and imaginary parts of the function $f(z) = z^2 + \bar{z}^2$.

**Solution:**
1. Substitute $z = x+iy$ and $\bar{z} = x-iy$:
   $$f(z) = (x+iy)^2 + (x-iy)^2$$
2. Expand both terms:
   $$(x+iy)^2 = x^2 - y^2 + 2ixy$$
   $$(x-iy)^2 = x^2 - y^2 - 2ixy$$
3. Add the two expressions:
   $$f(z) = (x^2 - y^2 + 2ixy) + (x^2 - y^2 - 2ixy) = 2(x^2 - y^2) + 0i$$
Thus, we find:
$$\boxed{u(x, y) = 2(x^2 - y^2), \quad v(x, y) = 0}$$

---

#### Problem 13
Find the real and imaginary parts of the function $f(z) = \frac{\bar{z}}{z + 1}$.

**Solution:**
1. Substitute $z = x+iy$ and $\bar{z} = x-iy$:
   $$f(z) = \frac{x-iy}{x+1+iy}$$
2. Multiply the numerator and the denominator by the complex conjugate of the denominator, which is $(x+1) - iy$:
   $$f(z) = \frac{(x-iy)((x+1)-iy)}{((x+1)+iy)((x+1)-iy)}$$
3. Compute the denominator:
   $$\text{Denominator} = (x+1)^2 + y^2$$
4. Expand the numerator:
   $$\text{Numerator} = (x-iy)(x+1-iy) = x(x+1) - ixy - iy(x+1) + (iy)^2$$
   $$= x^2 + x - ixy - ixy - iy - y^2 = (x^2 + x - y^2) - i(2xy + y)$$
5. Combine parts:
   $$f(z) = \frac{x^2 + x - y^2}{(x+1)^2 + y^2} - i \frac{2xy + y}{(x+1)^2 + y^2}$$
Thus, we find:
$$\boxed{u(x, y) = \frac{x^2 + x - y^2}{(x+1)^2 + y^2}, \quad v(x, y) = -\frac{2xy + y}{(x+1)^2 + y^2}}$$

---

#### Problem 14
Find the real and imaginary parts of the function $f(z) = z + \frac{1}{z}$.

**Solution:**
1. Substitute $z = x+iy$:
   $$f(z) = x + iy + \frac{1}{x+iy}$$
2. Rationalize the reciprocal term:
   $$\frac{1}{x+iy} = \frac{x-iy}{(x+iy)(x-iy)} = \frac{x-iy}{x^2+y^2} = \frac{x}{x^2+y^2} - i\frac{y}{x^2+y^2}$$
3. Substitute this back:
   $$f(z) = x + iy + \frac{x}{x^2+y^2} - i\frac{y}{x^2+y^2}$$
4. Group real and imaginary components:
   $$f(z) = \left(x + \frac{x}{x^2+y^2}\right) + i\left(y - \frac{y}{x^2+y^2}\right) = x\left(1 + \frac{1}{x^2+y^2}\right) + iy\left(1 - \frac{1}{x^2+y^2}\right)$$
Thus, we find:
$$\boxed{u(x, y) = x\left(1 + \frac{1}{x^2+y^2}\right), \quad v(x, y) = y\left(1 - \frac{1}{x^2+y^2}\right)}$$

---

#### Problem 15
Find the real and imaginary parts of the function $f(z) = e^{2z + i}$.

**Solution:**
1. Substitute $z = x+iy$ in the exponent:
   $$2z + i = 2(x+iy) + i = 2x + i(2y + 1)$$
2. Apply Euler's formula:
   $$e^{2z+i} = e^{2x + i(2y+1)} = e^{2x} (\cos(2y+1) + i\sin(2y+1))$$
3. Distribute $e^{2x}$:
   $$f(z) = e^{2x}\cos(2y+1) + i e^{2x}\sin(2y+1)$$
Thus, we find:
$$\boxed{u(x, y) = e^{2x}\cos(2y+1), \quad v(x, y) = e^{2x}\sin(2y+1)}$$

---

#### Problem 16
Find the real and imaginary parts of the function $f(z) = e^{z^2}$.

**Solution:**
1. Substitute $z = x+iy$ and compute the exponent $z^2$:
   $$z^2 = (x+iy)^2 = x^2 - y^2 + 2ixy$$
2. Apply Euler's formula:
   $$e^{z^2} = e^{(x^2-y^2) + i(2xy)} = e^{x^2-y^2} (\cos(2xy) + i\sin(2xy))$$
3. Distribute the real exponential term:
   $$f(z) = e^{x^2-y^2}\cos(2xy) + i e^{x^2-y^2}\sin(2xy)$$
Thus, we find:
$$\boxed{u(x, y) = e^{x^2-y^2}\cos(2xy), \quad v(x, y) = e^{x^2-y^2}\sin(2xy)}$$

---

## Problems 17 – 22

**Find the real and imaginary parts $u$ and $v$ of the given function as functions of $r$ and $\theta$.**

#### Problem 17
Find the polar real and imaginary parts of the function $f(z) = \bar{z}$.

**Solution:**
1. Express $z$ in polar coordinates: $z = r e^{i\theta}$.
2. Take the complex conjugate:
   $$\bar{z} = \overline{r e^{i\theta}} = r e^{-i\theta}$$
3. Expand using Euler's formula:
   $$\bar{z} = r(\cos(-\theta) + i\sin(-\theta)) = r\cos\theta - i r\sin\theta$$
Thus, we find:
$$\boxed{u(r, \theta) = r\cos\theta, \quad v(r, \theta) = -r\sin\theta}$$

---

#### Problem 18
Find the polar real and imaginary parts of the function $f(z) = |z|$.

**Solution:**
1. Modulus: For $z = r e^{i\theta}$, we have $|z| = r$.
2. Write as a complex function:
   $$f(z) = r + 0i$$
Thus, we find:
$$\boxed{u(r, \theta) = r, \quad v(r, \theta) = 0}$$

---

#### Problem 19
Find the polar real and imaginary parts of the function $f(z) = z^4$.

**Solution:**
1. Express $z$ in polar coordinates: $z = r e^{i\theta}$.
2. Compute the fourth power using De Moivre's formula:
   $$z^4 = (r e^{i\theta})^4 = r^4 e^{i4\theta}$$
3. Apply Euler's formula:
   $$z^4 = r^4\cos(4\theta) + i r^4\sin(4\theta)$$
Thus, we find:
$$\boxed{u(r, \theta) = r^4\cos(4\theta), \quad v(r, \theta) = r^4\sin(4\theta)}$$

---

#### Problem 20
Find the polar real and imaginary parts of the function $f(z) = z + \frac{1}{z}$.

**Solution:**
1. Express $z$ in polar coordinates: $z = r e^{i\theta}$.
2. Substitute:
   $$f(z) = r e^{i\theta} + \frac{1}{r e^{i\theta}} = r e^{i\theta} + \frac{1}{r} e^{-i\theta}$$
3. Expand using Euler's formula:
   $$f(z) = r(\cos\theta + i\sin\theta) + \frac{1}{r}(\cos\theta - i\sin\theta)$$
4. Group the real and imaginary terms:
   $$f(z) = \left(r + \frac{1}{r}\right)\cos\theta + i\left(r - \frac{1}{r}\right)\sin\theta$$
Thus, we find:
$$\boxed{u(r, \theta) = \left(r + \frac{1}{r}\right)\cos\theta, \quad v(r, \theta) = \left(r - \frac{1}{r}\right)\sin\theta}$$

---

#### Problem 21
Find the polar real and imaginary parts of the function $f(z) = e^z$.

**Solution:**
1. Write $z$ in polar form: $z = r(\cos\theta + i\sin\theta)$.
2. Substitute into the exponential function:
   $$e^z = e^{r\cos\theta + i r\sin\theta}$$
3. Split the exponent and apply Euler's formula:
   $$e^z = e^{r\cos\theta} e^{i r\sin\theta} = e^{r\cos\theta} (\cos(r\sin\theta) + i\sin(r\sin\theta))$$
Thus, we find:
$$\boxed{u(r, \theta) = e^{r\cos\theta}\cos(r\sin\theta), \quad v(r, \theta) = e^{r\cos\theta}\sin(r\sin\theta)}$$

---

#### Problem 22
Find the polar real and imaginary parts of the function $f(z) = x^2 + y^2 - yi$.

**Solution:**
1. We know that $x^2 + y^2 = r^2$ and $y = r\sin\theta$.
2. Substitute these polar identities into the function:
   $$f(z) = r^2 - i(r\sin\theta)$$
Thus, we find:
$$\boxed{u(r, \theta) = r^2, \quad v(r, \theta) = -r\sin\theta}$$

---

## Problems 23 – 26

**Find the natural domain of the given complex function $f$.**

#### Problem 23
Find the natural domain of the function $f(z) = 2\operatorname{Re}(z) - iz^2$.

**Solution:**
1. Analyze the terms of the function:
   * The real part $\operatorname{Re}(z) = x$ is defined for all $z \in \mathbb{C}$.
   * The squared term $z^2 = x^2 - y^2 + 2ixy$ is defined for all $z \in \mathbb{C}$.
2. Therefore, there are no division-by-zero, negative square-roots, or undefined logarithms.
Thus, the natural domain is:
$$\boxed{\text{All complex numbers } \mathbb{C}}$$

---

#### Problem 24
Find the natural domain of the function $f(z) = \frac{3z + 2i}{z^3 + 4z^2 + z}$.

**Solution:**
1. The function is undefined where its denominator equals zero:
   $$z^3 + 4z^2 + z = 0$$
2. Factor the denominator:
   $$z(z^2 + 4z + 1) = 0$$
3. This yields the roots:
   $$z = 0 \quad \text{or} \quad z^2 + 4z + 1 = 0$$
4. Use the quadratic formula for the second part:
   $$z = \frac{-4 \pm \sqrt{16 - 4(1)(1)}}{2} = \frac{-4 \pm \sqrt{12}}{2} = \frac{-4 \pm 2\sqrt{3}}{2} = -2 \pm \sqrt{3}$$
5. These three points must be excluded from the domain.
Thus, the natural domain is:
$$\boxed{\text{All complex numbers } z \ne 0, -2 \pm \sqrt{3}}$$

---

#### Problem 25
Find the natural domain of the function $f(z) = \frac{iz}{|z - 1|}$.

**Solution:**
1. The function is undefined when the denominator is zero:
   $$|z - 1| = 0$$
2. The modulus is zero if and only if the complex number itself is zero:
   $$z - 1 = 0 \implies z = 1$$
3. Therefore, $z = 1$ is the only excluded point.
Thus, the natural domain is:
$$\boxed{\text{All complex numbers } z \ne 1}$$

---

#### Problem 26
Find the natural domain of the function $f(z) = \frac{iz}{|z| - 1}$.

**Solution:**
1. The function is undefined when the denominator is zero:
   $$|z| - 1 = 0 \implies |z| = 1$$
2. This is the equation of the unit circle centered at the origin.
Thus, the natural domain is:
$$\boxed{\text{All complex numbers } z \text{ except those on the unit circle } |z| = 1}$$

---

## Focus on Concepts (Problems 27 – 38)

#### Problem 27
Determine whether the following expressions define complex functions $f(z)$:
(a) $\arg(z)$
(b) $\operatorname{Arg}(z)$
(c) $\cos(\arg(z)) + i\sin(\arg(z))$
(d) $z^{1/2}$
(e) $|z|$
(f) $\operatorname{Re}(z)$

**Solution:**
By definition, a complex function must assign a unique single complex value to each point in its domain.

* **(a) $\arg(z)$:** **No**. The argument is multi-valued since any angle $\theta_0 + 2n\pi$ for $n \in \mathbb{Z}$ represents the same point (e.g., $\arg(i) = \frac{\pi}{2} + 2n\pi$).
* **(b) $\operatorname{Arg}(z)$:** **Yes**, because the principal argument is restricted to a single interval $(-\pi, \pi]$, making it single-valued.
* **(c) $\cos(\arg(z)) + i\sin(\arg(z))$:** **Yes**. Since $\cos$ and $\sin$ are periodic with period $2\pi$, any representation of $\arg(z)$ (which differ by multiples of $2\pi$) will yield the exact same value. In fact, this expression simplifies to $z/|z|$.
* **(d) $z^{1/2}$:** **No**. Every non-zero complex number has exactly two distinct square roots (differing by sign), so this is a multi-valued relation, not a function.
* **(e) $|z|$:** **Yes**, since the modulus of a complex number is a unique non-negative real number.
* **(f) $\operatorname{Re}(z)$:** **Yes**, since the real part of a complex number is unique.

---

#### Problem 28
Find the range of the following functions on the indicated sets:
(a) $f(z) = \operatorname{Im}(z)$ on the closed disk $|z| \le 2$.
(b) $f(z) = |z|$ on the square region $0 \le x \le 1$, $0 \le y \le 1$.
(c) $f(z) = \bar{z}$ on the upper half-plane $\operatorname{Im}(z) > 0$.

**Solution:**
**(a) $f(z) = \operatorname{Im}(z)$ on $|z| \le 2$:**
The set $|z| \le 2$ represents a disk of radius 2. The imaginary part $y$ of any point in this disk ranges from a minimum of $-2$ to a maximum of $2$. Since the disk is connected, $y$ takes all values in between.
* **Range:** $\boxed{[-2, 2]}$ (or $\{ w \in \mathbb{R} : -2 \le w \le 2 \}$).

**(b) $f(z) = |z|$ on the square $0 \le x \le 1$, $0 \le y \le 1$:**
The modulus $|z| = \sqrt{x^2+y^2}$ is a real number representing the distance to the origin.
* Minimum distance: At the origin $(0, 0) \implies |0| = 0$.
* Maximum distance: At the farthest corner $(1, 1) \implies |1+i| = \sqrt{1^2+1^2} = \sqrt{2}$.
Since the square region is a connected set, the range consists of all values between these bounds.
* **Range:** $\boxed{[0, \sqrt{2}]}$.

**(c) $f(z) = \bar{z}$ on the upper half-plane $\operatorname{Im}(z) > 0$:**
For any point $z = x+iy$ in the upper half-plane, we have $y > 0$. Its conjugate is $\bar{z} = x-iy$. The imaginary part of the image is $-y$. Since $y > 0$, we have $-y < 0$. The real part $x$ can be any real number.
* **Range:** $\boxed{\text{The lower half-plane } \operatorname{Im}(w) < 0}$.

---

#### Problem 29
Find the natural domain and range of the following complex functions:
(a) $f(z) = \frac{z}{|z|}$
(b) $f(z) = 3 + 4i + \frac{5z}{|z|}$
(c) $f(z) = \frac{z + \bar{z}}{z - \bar{z}}$

**Solution:**
**(a) $f(z) = \frac{z}{|z|}$:**
* **Natural Domain:** Undefined only at the origin where $|z| = 0$.
  * **Domain:** $\boxed{z \ne 0}$.
* **Range:** Let $z = r e^{i\theta}$. Then $f(z) = \frac{r e^{i\theta}}{r} = e^{i\theta}$. The modulus of the output is $|f(z)| = |e^{i\theta}| = 1$. The argument can be any value.
  * **Range:** $\boxed{\text{The unit circle } |w| = 1}$.

**(b) $f(z) = 3 + 4i + \frac{5z}{|z|}$:**
* **Natural Domain:** Undefined only where $|z| = 0 \implies z = 0$.
  * **Domain:** $\boxed{z \ne 0}$.
* **Range:** Since $\frac{z}{|z|}$ lies on the unit circle $|w_0| = 1$, the term $\frac{5z}{|z|}$ lies on the circle of radius 5 centered at the origin. Adding $3+4i$ shifts this circle.
  * **Range:** $\boxed{\text{The circle of radius 5 centered at } 3 + 4i}$, defined by $|w - (3 + 4i)| = 5$.

**(c) $f(z) = \frac{z + \bar{z}}{z - \bar{z}}$:**
* **Natural Domain:** Undefined when the denominator is zero:
  $$z - \bar{z} = 0 \implies 2iy = 0 \implies y = 0 \implies z \text{ is real}$$
  * **Domain:** $\boxed{\text{All non-real complex numbers } z \notin \mathbb{R}}$ (or $\operatorname{Im}(z) \ne 0$).
* **Range:** Simplify the expression:
  $$f(z) = \frac{2x}{2iy} = \frac{x}{iy} = -i\frac{x}{y}$$
  Since $y \ne 0$, the ratio $x/y$ can take any real value in $(-\infty, \infty)$ because $x$ can be any real number.
  * **Range:** $\boxed{\text{The entire imaginary axis } \operatorname{Re}(w) = 0}$.

---

#### Problem 30
Find a complex function $f$ whose natural domain excludes the points $0$, $1+i$, and $1-i$.

**Solution:**
To exclude these specific points, we can define a rational function whose denominator has roots at exactly these points.
Let $P(z)$ be a polynomial with roots at $0$, $1+i$, and $1-i$:
$$P(z) = z(z - (1+i))(z - (1-i))$$
Expand the product of the complex conjugates:
$$(z - (1+i))(z - (1-i)) = ((z-1) - i)((z-1) + i) = (z-1)^2 - i^2 = z^2 - 2z + 1 + 1 = z^2 - 2z + 2$$
Now multiply by $z$:
$$P(z) = z(z^2 - 2z + 2) = z^3 - 2z^2 + 2z$$
We define $f(z) = 1/P(z)$:
$$f(z) = \frac{1}{z^3 - 2z^2 + 2z}$$
* **Natural Domain:** All complex numbers except $0, 1+i, 1-i$.
Thus, one such function is:
$$\boxed{f(z) = \frac{1}{z^3 - 2z^2 + 2z}}$$

---

#### Problem 31
Find the natural domain and range of the function $f(z) = \cos(x-y) + i\sin(x-y)$.

**Solution:**
* **Natural Domain:** Since $x$ and $y$ are real parts of $z$, and the real trigonometric functions $\cos(t)$ and $\sin(t)$ are defined for all real numbers $t = x-y$, the function is defined for all $z$.
  * **Domain:** $\boxed{\text{All complex numbers } \mathbb{C}}$.
* **Range:** We can rewrite the function using Euler's formula:
  $$f(z) = e^{i(x-y)}$$
  Since $x$ and $y$ can be any real numbers, the difference $t = x-y$ ranges over all real numbers $\mathbb{R}$. The values of $e^{it}$ for $t \in \mathbb{R}$ trace the unit circle.
  * **Range:** $\boxed{\text{The unit circle } |w| = 1}$.

---

#### Problem 32
Express the following functions in terms of the variables $z$ and $\bar{z}$:
(a) $f(z) = x^2 + y^2$
(b) $f(z) = x - 2y + 2 + (6x + y)i$
(c) $f(z) = x^2 - y^2 - (5xy)i$
(d) $f(z) = 3y^2 + 3x^2 i$

**Solution:**
We use the standard relations: $x = \frac{z+\bar{z}}{2}$ and $y = \frac{z-\bar{z}}{2i} = i\frac{\bar{z}-z}{2}$.

**(a) $f(z) = x^2 + y^2$:**
We know $x^2 + y^2 = |z|^2 = z\bar{z}$.
* **Answer:** $\boxed{f(z) = z\bar{z}}$

**(b) $f(z) = x - 2y + 2 + (6x + y)i$:**
Substitute $x$ and $y$:
$$f(z) = \left(\frac{z+\bar{z}}{2}\right) - 2\left(\frac{z-\bar{z}}{2i}\right) + 2 + 6i\left(\frac{z+\bar{z}}{2}\right) + i\left(\frac{z-\bar{z}}{2i}\right)$$
Note that $1/i = -i$:
$$f(z) = \frac{1}{2}z + \frac{1}{2}\bar{z} - i(\bar{z} - z) + 2 + 3i(z+\bar{z}) + \frac{1}{2}(z-\bar{z})$$
$$= \frac{1}{2}z + \frac{1}{2}\bar{z} - i\bar{z} + iz + 2 + 3iz + 3i\bar{z} + \frac{1}{2}z - \frac{1}{2}\bar{z}$$
Group coefficients of $z$ and $\bar{z}$:
$$\text{Coefficient of } z: \frac{1}{2} + i + 3i + \frac{1}{2} = 1 + 4i$$
$$\text{Coefficient of } \bar{z}: \frac{1}{2} - i + 3i - \frac{1}{2} = 2i$$
Don't forget the constant term $+2$:
* **Answer:** $\boxed{f(z) = (1+4i)z + 2i\bar{z} + 2}$

**(c) $f(z) = x^2 - y^2 - (5xy)i$:**
Substitute $x$ and $y$:
$$f(z) = \left(\frac{z+\bar{z}}{2}\right)^2 - \left(\frac{z-\bar{z}}{2i}\right)^2 - 5i\left(\frac{z+\bar{z}}{2}\right)\left(\frac{z-\bar{z}}{2i}\right)$$
$$= \frac{z^2 + 2z\bar{z} + \bar{z}^2}{4} - \frac{z^2 - 2z\bar{z} + \bar{z}^2}{-4} - \frac{5i}{4i}(z^2 - \bar{z}^2)$$
Note that $-1/-4 = +1/4$ and $-5i/4i = -5/4$:
$$= \frac{z^2 + 2z\bar{z} + \bar{z}^2}{4} + \frac{z^2 - 2z\bar{z} + \bar{z}^2}{4} - \frac{5}{4}(z^2 - \bar{z}^2)$$
Combine the first two terms:
$$= \frac{2z^2 + 2\bar{z}^2}{4} - \frac{5}{4}z^2 + \frac{5}{4}\bar{z}^2$$
$$= \frac{1}{2}z^2 + \frac{1}{2}\bar{z}^2 - \frac{5}{4}z^2 + \frac{5}{4}\bar{z}^2$$
$$= \left(\frac{2}{4} - \frac{5}{4}\right)z^2 + \left(\frac{2}{4} + \frac{5}{4}\right)\bar{z}^2$$
$$= -\frac{3}{4}z^2 + \frac{7}{4}\bar{z}^2$$
* **Answer:** $\boxed{f(z) = -\frac{3}{4}z^2 + \frac{7}{4}\bar{z}^2}$

**(d) $f(z) = 3y^2 + 3x^2 i$:**
Substitute $x$ and $y$:
$$f(z) = 3\left(\frac{z-\bar{z}}{2i}\right)^2 + 3i\left(\frac{z+\bar{z}}{2}\right)^2$$
Since $(2i)^2 = -4$ and $2^2 = 4$:
$$= -\frac{3}{4}(z^2 - 2z\bar{z} + \bar{z}^2) + \frac{3i}{4}(z^2 + 2z\bar{z} + \bar{z}^2)$$
Group terms:
$$= \frac{3(i-1)}{4}z^2 + \frac{6(i+1)}{4}z\bar{z} + \frac{3(i-1)}{4}\bar{z}^2$$
Simplify the middle coefficient:
$$\frac{6(i+1)}{4} = \frac{3(i+1)}{2}$$
* **Answer:** $\boxed{f(z) = \frac{3(i-1)}{4}z^2 + \frac{3(i+1)}{2}z\bar{z} + \frac{3(i-1)}{4}\bar{z}^2}$

---

#### Problem 33
Show that for the complex exponential function $f(z) = e^z$:
(a) The modulus is $|e^z| = e^x$.
(b) There are no values of $z$ for which $e^z = 0$.
(c) The function is periodic with a pure imaginary period $2\pi i$.

**Solution:**
**(a) Modulus $|e^z| = e^x$:**
By Definition, we write $e^z = e^{x+iy} = e^x(\cos y + i\sin y)$.
Since $e^x$ is a positive real number, the modulus is:
$$|e^z| = |e^x| |\cos y + i\sin y| = e^x \sqrt{\cos^2 y + \sin^2 y}$$
Using the trigonometric identity $\cos^2 y + \sin^2 y = 1$:
$$|e^z| = e^x \sqrt{1} = e^x$$
This completes the proof.

**(b) Show $e^z \ne 0$ for all $z \in \mathbb{C}$:**
Suppose there exists a complex number $z = x+iy$ such that $e^z = 0$.
Taking the modulus of both sides:
$$|e^z| = |0| = 0$$
From part (a), $|e^z| = e^x$, so:
$$e^x = 0$$
However, for any real number $x$, the real exponential function $e^x$ is strictly positive ($e^x > 0$), meaning it can never equal 0.
Thus, we have a contradiction, proving that $e^z \ne 0$ for all $z \in \mathbb{C}$.

**(c) Periodicity with period $2\pi i$:**
We evaluate $e^{z + 2\pi i}$:
$$e^{z + 2\pi i} = e^{x + i(y + 2\pi)} = e^x (\cos(y + 2\pi) + i\sin(y + 2\pi))$$
Since $\cos$ and $\sin$ have a period of $2\pi$:
$$\cos(y + 2\pi) = \cos y \quad \text{and} \quad \sin(y + 2\pi) = \sin y$$
Substituting these back yields:
$$e^{z + 2\pi i} = e^x (\cos y + i\sin y) = e^z$$
Since $2\pi i$ is the smallest positive imaginary number for which this holds, $e^z$ is periodic with period $2\pi i$.

---

#### Problem 34
Show that $\overline{e^z} = e^{\bar{z}}$ for all $z \in \mathbb{C}$.

**Solution:**
We evaluate both sides of the equation separately:
* **Left-Hand Side (LHS):**
  $$e^z = e^x(\cos y + i\sin y) \implies \overline{e^z} = e^x(\cos y - i\sin y)$$
  (since $e^x$ is real, conjugation only negates the imaginary part).
* **Right-Hand Side (RHS):**
  $$z = x+iy \implies \bar{z} = x-iy$$
  Substitute this into the exponential definition:
  $$e^{\bar{z}} = e^{x - iy} = e^x(\cos(-y) + i\sin(-y))$$
  Using the symmetry properties of real trig functions ($\cos(-y) = \cos y$ and $\sin(-y) = -\sin y$):
  $$e^{\bar{z}} = e^x(\cos y - i\sin y)$$
Since LHS = RHS, we have shown that $\overline{e^z} = e^{\bar{z}}$.

---

#### Problem 35
What can be said about the complex variable $z$ if it satisfies the inequality $|e^{-z}| < 1$?

**Solution:**
1. Let $z = x+iy$. Then $-z = -x-iy$.
2. Find the modulus using the property from Problem 33(a):
   $$|e^{-z}| = e^{-x}$$
3. Substitute this into the inequality:
   $$e^{-x} < 1$$
4. Take the natural logarithm of both sides (since $\ln$ is a strictly increasing function):
   $$-x < \log_e(1) \implies -x < 0 \implies x > 0$$
5. Since $x = \operatorname{Re}(z)$:
   $$\operatorname{Re}(z) > 0$$
Thus, $z$ must lie in the **right half-plane $\operatorname{Re}(z) > 0$**.

---

#### Problem 36
Let $f(z) = \frac{e^{iz} + e^{-iz}}{2}$.
(a) Show that $f(z)$ is periodic with period $2\pi$.
(b) Show that if $z = x$ is real, then $f(x) = \cos x$.

**Solution:**
**(a) Periodicity with period $2\pi$:**
We evaluate $f(z + 2\pi)$:
$$f(z+2\pi) = \frac{e^{i(z+2\pi)} + e^{-i(z+2\pi)}}{2} = \frac{e^{iz + 2\pi i} + e^{-iz - 2\pi i}}{2}$$
Using the properties of exponentials:
$$e^{2\pi i} = \cos(2\pi) + i\sin(2\pi) = 1$$
$$e^{-2\pi i} = \cos(-2\pi) + i\sin(-2\pi) = 1$$
Substitute these back:
$$f(z+2\pi) = \frac{e^{iz}(1) + e^{-iz}(1)}{2} = \frac{e^{iz} + e^{-iz}}{2} = f(z)$$
Thus, $f(z)$ is periodic with period $2\pi$.

**(b) Real evaluation $f(x) = \cos x$:**
Let $z = x$ where $x \in \mathbb{R}$.
Substitute into the definition of $f$:
$$f(x) = \frac{e^{ix} + e^{-ix}}{2}$$
Apply Euler's formula to both terms:
$$e^{ix} = \cos x + i\sin x$$
$$e^{-ix} = \cos x - i\sin x$$
Add them together:
$$e^{ix} + e^{-ix} = 2\cos x$$
Substitute this into the fraction:
$$f(x) = \frac{2\cos x}{2} = \cos x$$
This completes the proof.

---

#### Problem 37
Find the period of the given complex function:
(a) $f(z) = e^{z+\pi}$
(b) $f(z) = e^{\pi z}$
(c) $f(z) = e^{2iz}$
(d) $f(z) = e^{3z+i}$

**Solution:**
Let $P$ be the period of the function, so $f(z+P) = f(z)$. We solve for $P$:

**(a) $f(z) = e^{z+\pi}$:**
$$f(z+P) = e^{z+P+\pi} = e^{z+\pi}e^P = f(z)e^P$$
For this to equal $f(z)$, we require $e^P = 1$. The fundamental period is:
$$P = \boxed{2\pi i}$$

**(b) $f(z) = e^{\pi z}$:**
$$f(z+P) = e^{\pi(z+P)} = e^{\pi z}e^{\pi P} = f(z)e^{\pi P}$$
We require $e^{\pi P} = 1 \implies \pi P = 2\pi i \implies P = 2i$.
Thus, the period is:
$$P = \boxed{2i}$$

**(c) $f(z) = e^{2iz}$:**
$$f(z+P) = e^{2i(z+P)} = e^{2iz}e^{2iP} = f(z)e^{2iP}$$
We require $e^{2iP} = 1 \implies 2iP = 2\pi i \implies P = \pi$.
Thus, the period is:
$$P = \boxed{\pi}$$

**(d) $f(z) = e^{3z+i}$:**
$$f(z+P) = e^{3(z+P)+i} = e^{3z+i}e^{3P} = f(z)e^{3P}$$
We require $e^{3P} = 1 \implies 3P = 2\pi i \implies P = \frac{2\pi}{3}i$.
Thus, the period is:
$$P = \boxed{\frac{2\pi}{3}i}$$

---

#### Problem 38
If the complex function $f(z)$ is periodic with period $i$, find the period of the function $g(z) = f(iz-2)$.

**Solution:**
We are given that $f(z+i) = f(z)$ for all $z \in \mathbb{C}$.
We want to find a period $P$ for $g(z)$ such that $g(z+P) = g(z)$.
Substitute $z+P$ into the definition of $g(z)$:
$$g(z+P) = f(i(z+P) - 2) = f(iz + iP - 2) = f((iz-2) + iP)$$
For this to equal $f(iz-2)$ for all $z$, the shift in $f$ must be a multiple of the period of $f$, which is $i$:
$$iP = i \implies P = 1$$
Let's verify:
$$g(z+1) = f(i(z+1)-2) = f(iz - 2 + i) = f(iz-2) = g(z)$$
Thus, the period of $g(z)$ is:
$$P = \boxed{1}$$
