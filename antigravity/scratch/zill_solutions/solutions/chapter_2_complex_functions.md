# Complex Analysis — Dennis G. Zill, 2nd Edition
# Chapter 2: Complex Functions and Mappings
## Complete Solutions Manual

---

## Table of Contents
- [Section 2.1 — Complex Functions](#section-21-complex-functions)
- [Section 2.2 — Complex Functions as Mappings](#section-22-complex-functions-as-mappings)
- [Section 2.3 — Linear Mappings](#section-23-linear-mappings)
- [Section 2.4 — Special Power Functions](#section-24-special-power-functions)
- [Section 2.5 — Reciprocal Function](#section-25-reciprocal-function)
- [Section 2.6 — Limits and Continuity](#section-26-limits-and-continuity)
- [Section 2.7 — Applications](#section-27-applications)
- [Chapter 2 Review Quiz](#chapter-2-review-quiz)

---

<a name="section-21-complex-functions"></a>
# Section 2.1 — Complex Functions
## Chapter 2 · Section 2.1 — Complex Functions
### Problems 1 – 38 · Complete Solutions

---

> **Key Concepts of Complex Functions**
>
> 1. **Definition:** A complex function \( w = f(z) \) maps a complex variable \( z = x + iy \) in the \( z \)-plane to \( w = u + iv \) in the \( w \)-plane, where:
>    \[
>    f(z) = u(x, y) + i v(x, y)
>    \]
>    \( u(x, y) \) and \( v(x, y) \) are real-valued functions of two real variables.
> 2. **Polar Representation:** Alternatively, using \( z = r e^{i\theta} \):
>    \[
>    f(z) = u(r, \theta) + i v(r, \theta)
>    \]
> 3. **Exponential Function:** Defined as:
>    \[
>    e^z = e^{x+iy} = e^x(\cos y + i\sin y)
>    \]
>    * Modulus: \( |e^z| = e^x \)
>    * Periodicity: Periodic with pure imaginary period \( 2\pi i \) (i.e. \( e^{z + 2\pi i} = e^z \)).
> 4. **Natural Domain:** The set of all points in the complex plane for which the formula defining \( f(z) \) is mathematically defined and yields a single finite value.

---

## Problems 1 – 8

**Evaluate the given complex function \( f \) at the indicated points.**

### Problem 1: \( f(z) = z^2 \bar{z} - 2i \)
**(a) \( z = 2i \):**
* \( \bar{z} = -2i \), \( z^2 = -4 \)
* \( f(2i) = (-4)(-2i) - 2i = 8i - 2i = \boxed{6i} \)

**(b) \( z = 1 + i \):**
* \( \bar{z} = 1 - i \), \( z^2 = (1+i)^2 = 2i \)
* \( f(1+i) = (2i)(1-i) - 2i = 2i + 2 - 2i = \boxed{2} \)

**(c) \( z = 3 - 2i \):**
* \( \bar{z} = 3 + 2i \), \( z^2 = 9 - 12i - 4 = 5 - 12i \)
* \( f(3-2i) = (5 - 12i)(3 + 2i) - 2i = (15 + 24 + 10i - 36i) - 2i = 39 - 26i - 2i = \boxed{39 - 28i} \)

### Problem 2: \( f(z) = -z^3 + 2z + \bar{z} \)
**(a) \( z = i \):**
* \( z^3 = -i \), \( \bar{z} = -i \)
* \( f(i) = -(-i) + 2i - i = i + 2i - i = \boxed{2i} \)

**(b) \( z = 2 - i \):**
* \( z^3 = (2-i)^3 = 8 - 12i + 6i^2 - i^3 = 8 - 12i - 6 + i = 2 - 11i \)
* \( \bar{z} = 2 + i \)
* \( f(2-i) = -(2-11i) + 2(2-i) + (2+i) = -2 + 11i + 4 - 2i + 2 + i = \boxed{4 + 10i} \)

**(c) \( z = 1 + 2i \):**
* \( z^3 = (1+2i)^3 = 1 + 6i + 12i^2 + 8i^3 = 1 + 6i - 12 - 8i = -11 - 2i \)
* \( \bar{z} = 1 - 2i \)
* \( f(1+2i) = -(-11-2i) + 2(1+2i) + (1-2i) = 11 + 2i + 2 + 4i + 1 - 2i = \boxed{14 + 4i} \)

### Problem 3: \( f(z) = \log_e |z| + i\operatorname{Arg}(z) \)
**(a) \( z = 1 \):**
* \( |1| = 1 \implies \log_e(1) = 0 \), \( \operatorname{Arg}(1) = 0 \)
* \( f(1) = 0 + 0i = \boxed{0} \)

**(b) \( z = 4i \):**
* \( |4i| = 4 \implies \log_e(4) = 2\log_e 2 \), \( \operatorname{Arg}(4i) = \frac{\pi}{2} \)
* \( f(4i) = \boxed{\log_e 4 + i\frac{\pi}{2}} \)

**(c) \( z = 1 + i \):**
* \( |1+i| = \sqrt{2} \implies \log_e(\sqrt{2}) = \frac{1}{2}\log_e 2 \), \( \operatorname{Arg}(1+i) = \frac{\pi}{4} \)
* \( f(1+i) = \boxed{\frac{1}{2}\log_e 2 + i\frac{\pi}{4}} \)

### Problem 4: \( f(z) = |z|^2 - 2\operatorname{Re}(iz) + z \)
Let \( z = x+iy \implies iz = -y + ix \implies \operatorname{Re}(iz) = -y \).
So \( f(z) = x^2 + y^2 + 2y + x + iy = (x^2 + y^2 + 2y + x) + iy \).

**(a) \( z = 3 - 4i \):**
* \( x = 3, \, y = -4 \)
* \( f(3-4i) = (9 + 16 - 8 + 3) - 4i = \boxed{20 - 4i} \)

**(b) \( z = 2 - i \):**
* \( x = 2, \, y = -1 \)
* \( f(2-i) = (4 + 1 - 2 + 2) - i = \boxed{5 - i} \)

**(c) \( z = 1 + 2i \):**
* \( x = 1, \, y = 2 \)
* \( f(1+2i) = (1 + 4 + 4 + 1) + 2i = \boxed{10 + 2i} \)

### Problem 5: \( f(z) = (xy - x^2) + i(3x + y) \)
**(a) \( z = 3i \):**
* \( x = 0, \, y = 3 \)
* \( f(3i) = (0 - 0) + i(0 + 3) = \boxed{3i} \)

**(b) \( z = 4 + i \):**
* \( x = 4, \, y = 1 \)
* \( f(4+i) = (4 - 16) + i(12 + 1) = \boxed{-12 + 13i} \)

**(c) \( z = 3 - 5i \):**
* \( x = 3, \, y = -5 \)
* \( f(3-5i) = (-15 - 9) + i(9 - 5) = \boxed{-24 + 4i} \)

### Problem 6: \( f(z) = e^z \)
**(a) \( z = 2 - \pi i \):**
* \( f(2-\pi i) = e^2(\cos(-\pi) + i\sin(-\pi)) = e^2(-1 + 0i) = \boxed{-e^2} \)

**(b) \( z = \frac{\pi}{3}i \):**
* \( f(i\pi/3) = e^0(\cos(\pi/3) + i\sin(\pi/3)) = \boxed{\frac{1}{2} + \frac{\sqrt{3}}{2}i} \)

**(c) \( z = \log_e 2 - \frac{5\pi}{6}i \):**
* \( e^{\log_e 2} = 2 \)
* \( f(z) = 2\left(\cos\left(-\frac{5\pi}{6}\right) + i\sin\left(-\frac{5\pi}{6}\right)\right) = 2\left(-\frac{\sqrt{3}}{2} - \frac{1}{2}i\right) = \boxed{-\sqrt{3} - i} \)

### Problem 7: \( f(z) = r + i \cos^2 \theta \)
For a point \( z = x+iy = r e^{i\theta} \).
**(a) \( z = 3 \):**
* \( r = 3, \, \theta = 0 \)
* \( f(3) = 3 + i\cos^2(0) = \boxed{3 + i} \)

**(b) \( z = -2i \):**
* \( r = 2, \, \theta = -\pi/2 \)
* \( f(-2i) = 2 + i\cos^2(-\pi/2) = 2 + 0 = \boxed{2} \)

**(c) \( z = 2 - i \):**
* \( r = \sqrt{5} \). Since \( \cos\theta = x/r = 2/\sqrt{5} \implies \cos^2\theta = 4/5 \).
* \( f(2-i) = \boxed{\sqrt{5} + \frac{4}{5}i} \)

### Problem 8: \( f(z) = r \sin\frac{\theta}{2} + i\cos(2\theta) \)
**(a) \( z = -2 \):**
* \( r = 2, \, \theta = \pi \)
* \( f(-2) = 2\sin\frac{\pi}{2} + i\cos(2\pi) = 2(1) + i(1) = \boxed{2 + i} \)

**(b) \( z = 1 + i \):**
* \( r = \sqrt{2}, \, \theta = \pi/4 \)
* \( f(1+i) = \sqrt{2}\sin\frac{\pi}{8} + i\cos\frac{\pi}{2} = \sqrt{2}\left(\frac{\sqrt{2-\sqrt{2}}}{2}\right) + 0i = \boxed{\frac{\sqrt{4-2\sqrt{2}}}{2}} \approx 0.54120 \)

**(c) \( z = -5i \):**
* \( r = 5, \, \theta = -\pi/2 \)
* \( f(-5i) = 5\sin\left(-\frac{\pi}{4}\right) + i\cos(-\pi) = 5\left(-\frac{\sqrt{2}}{2}\right) - i = \boxed{-\frac{5\sqrt{2}}{2} - i} \)

---

## Problems 9 – 16

**Find the real and imaginary parts \( u \) and \( v \) of the given function as functions of \( x \) and \( y \).**

### Problem 9: \( f(z) = 6z - 5 + 9i \)
* \( f(z) = 6(x+iy) - 5 + 9i = (6x - 5) + i(6y + 9) \)
* \( \boxed{u(x, y) = 6x - 5, \quad v(x, y) = 6y + 9} \)

### Problem 10: \( f(z) = -3z + 2\bar{z} - i \)
* \( f(z) = -3(x+iy) + 2(x-iy) - i = -3x - 3iy + 2x - 2iy - i = -x - i(5y + 1) \)
* \( \boxed{u(x, y) = -x, \quad v(x, y) = -5y - 1} \)

### Problem 11: \( f(z) = z^3 - 2z + 6 \)
* \( z^3 = x^3 - 3xy^2 + i(3x^2y - y^3) \)
* \( f(z) = (x^3 - 3xy^2 - 2x + 6) + i(3x^2y - y^3 - 2y) \)
* \( \boxed{u(x, y) = x^3 - 3xy^2 - 2x + 6, \quad v(x, y) = 3x^2y - y^3 - 2y} \)

### Problem 12: \( f(z) = z^2 + \bar{z}^2 \)
* \( z^2 = x^2 - y^2 + 2ixy \), \( \bar{z}^2 = x^2 - y^2 - 2ixy \)
* \( f(z) = 2(x^2 - y^2) \)
* \( \boxed{u(x, y) = 2(x^2 - y^2), \quad v(x, y) = 0} \)

### Problem 13: \( f(z) = \frac{\bar{z}}{z + 1} \)
* Multiply numerator and denominator by \( \bar{z} + 1 \):
  \[
  f(z) = \frac{\bar{z}(\bar{z} + 1)}{(z+1)(\bar{z}+1)} = \frac{\bar{z}^2 + \bar{z}}{(x+1)^2 + y^2} = \frac{(x^2-y^2-2ixy) + (x-iy)}{(x+1)^2 + y^2} = \frac{(x^2-y^2+x) - i(2xy+y)}{(x+1)^2 + y^2}
  \]
* \[
  \boxed{u(x, y) = \frac{x^2 - y^2 + x}{(x+1)^2 + y^2}, \quad v(x, y) = -\frac{2xy + y}{(x+1)^2 + y^2}}
  \]

### Problem 14: \( f(z) = z + \frac{1}{z} \)
* \( f(z) = x+iy + \frac{x-iy}{x^2+y^2} = \left(x + \frac{x}{x^2+y^2}\right) + i\left(y - \frac{y}{x^2+y^2}\right) \)
* \[
  \boxed{u(x, y) = x\left(1 + \frac{1}{x^2+y^2}\right), \quad v(x, y) = y\left(1 - \frac{1}{x^2+y^2}\right)}
  \]

### Problem 15: \( f(z) = e^{2z + i} \)
* \( e^{2z+i} = e^{2x + i(2y+1)} = e^{2x}(\cos(2y+1) + i\sin(2y+1)) \)
* \( \boxed{u(x, y) = e^{2x}\cos(2y+1), \quad v(x, y) = e^{2x}\sin(2y+1)} \)

### Problem 16: \( f(z) = e^{z^2} \)
* \( z^2 = x^2 - y^2 + 2ixy \)
* \( e^{z^2} = e^{x^2-y^2} e^{i 2xy} = e^{x^2-y^2}(\cos(2xy) + i\sin(2xy)) \)
* \( \boxed{u(x, y) = e^{x^2-y^2}\cos(2xy), \quad v(x, y) = e^{x^2-y^2}\sin(2xy)} \)

---

## Problems 17 – 22

**Find the real and imaginary parts \( u \) and \( v \) of the given function as functions of \( r \) and \( \theta \).**

### Problem 17: \( f(z) = \bar{z} \)
* \( z = r e^{i\theta} \implies \bar{z} = r e^{-i\theta} = r\cos\theta - i r\sin\theta \)
* \( \boxed{u(r, \theta) = r\cos\theta, \quad v(r, \theta) = -r\sin\theta} \)

### Problem 18: \( f(z) = |z| \)
* \( f(z) = r \)
* \( \boxed{u(r, \theta) = r, \quad v(r, \theta) = 0} \)

### Problem 19: \( f(z) = z^4 \)
* \( f(z) = (r e^{i\theta})^4 = r^4 e^{i4\theta} = r^4\cos(4\theta) + i r^4\sin(4\theta) \)
* \( \boxed{u(r, \theta) = r^4\cos(4\theta), \quad v(r, \theta) = r^4\sin(4\theta)} \)

### Problem 20: \( f(z) = z + \frac{1}{z} \)
* \( f(z) = r e^{i\theta} + \frac{1}{r}e^{-i\theta} = r(\cos\theta + i\sin\theta) + \frac{1}{r}(\cos\theta - i\sin\theta) \)
* \[
  \boxed{u(r, \theta) = \left(r + \frac{1}{r}\right)\cos\theta, \quad v(r, \theta) = \left(r - \frac{1}{r}\right)\sin\theta}
  \]

### Problem 21: \( f(z) = e^z \)
* \( z = r\cos\theta + i r\sin\theta \)
* \( e^z = e^{r\cos\theta}(\cos(r\sin\theta) + i\sin(r\sin\theta)) \)
* \( \boxed{u(r, \theta) = e^{r\cos\theta}\cos(r\sin\theta), \quad v(r, \theta) = e^{r\cos\theta}\sin(r\sin\theta)} \)

### Problem 22: \( f(z) = x^2 + y^2 - yi \)
* Since \( x^2+y^2 = r^2 \) and \( y = r\sin\theta \):
* \( f(z) = r^2 - i r\sin\theta \)
* \( \boxed{u(r, \theta) = r^2, \quad v(r, \theta) = -r\sin\theta} \)

---

## Problems 23 – 26

**Find the natural domain of the given complex function \( f \).**

### Problem 23: \( f(z) = 2\operatorname{Re}(z) - iz^2 \)
* The functions \( \operatorname{Re}(z) = x \) and \( z^2 \) are defined for all complex values.
* **Natural Domain:** **All complex numbers \( \mathbb{C} \)**.

### Problem 24: \( f(z) = \frac{3z + 2i}{z^3 + 4z^2 + z} \)
* The function is undefined when the denominator is zero:
  \[
  z(z^2 + 4z + 1) = 0 \implies z = 0 \quad \text{or} \quad z = \frac{-4 \pm \sqrt{16-4}}{2} = -2 \pm \sqrt{3}
* **Natural Domain:** **All complex numbers \( z \ne 0, \, -2 \pm \sqrt{3} \)**.

### Problem 25: \( f(z) = \frac{iz}{|z - 1|} \)
* The denominator is zero when \( |z - 1| = 0 \implies z = 1 \).
* **Natural Domain:** **All complex numbers \( z \ne 1 \)**.

### Problem 26: \( f(z) = \frac{iz}{|z| - 1} \)
* The denominator is zero when \( |z| - 1 = 0 \implies |z| = 1 \).
* **Natural Domain:** **All complex numbers \( z \) except those on the unit circle \( |z| = 1 \)**.

---

## Focus on Concepts (Problems 27 – 38)

### Problem 27
**Do the following expressions define complex functions \( f(z) \)?**
* **(a) \( \arg(z) \):** **No**. The argument is multi-valued (e.g. \( \arg(i) = \frac{\pi}{2} + 2n\pi \)). A function must assign a unique value to each input.
* **(b) \( \operatorname{Arg}(z) \):** **Yes**, because the principal argument is restricted to the interval \( (-\pi, \pi] \), which makes it single-valued.
* **(c) \( \cos(\arg(z)) + i\sin(\arg(z)) \):** **Yes**. Since \( \cos \) and \( \sin \) have period \( 2\pi \), any representative of \( \arg(z) \) yields the same value.
* **(d) \( z^{1/2} \):** **No**, because every nonzero number has two distinct square roots.
* **(e) \( |z| \):** **Yes**, since the modulus of a complex number is a unique real number.
* **(f) \( \operatorname{Re}(z) \):** **Yes**, since the real part is unique.

### Problem 28
* **(a) Range of \( f(z) = \operatorname{Im}(z) \) on \( |z| \le 2 \):**
  Since \( |z| \le 2 \), the imaginary part \( y \) varies between \( -2 \) and \( 2 \).
  * **Range:** \( [-2, 2] \) (or \( \{ w \in \mathbb{R} : -2 \le w \le 2 \} \)).
* **(b) Range of \( f(z) = |z| \) on \( 0 \le x \le 1, \, 0 \le y \le 1 \):**
  The minimum modulus is at \( z=0 \implies |z| = 0 \). The maximum modulus is at the corner \( z = 1+i \implies |z| = \sqrt{2} \). Since the square region is connected, the range is continuous.
  * **Range:** \( [0, \sqrt{2}] \).
* **(c) Range of \( f(z) = \bar{z} \) on the upper half-plane \( \operatorname{Im}(z) > 0 \):**
  If \( y > 0 \), the conjugate is \( x - iy \), which has a negative imaginary part.
  * **Range:** **The lower half-plane \( \operatorname{Im}(w) < 0 \)**.

### Problem 29
* **(a) \( f(z) = \frac{z}{|z|} \):**
  * **Natural Domain:** \( z \ne 0 \).
  * **Range:** Note that \( |f(z)| = \left|\frac{z}{|z|}\right| = \frac{|z|}{|z|} = 1 \).
    * **Range:** **The unit circle \( |w| = 1 \)**.
* **(b) \( f(z) = 3 + 4i + \frac{5z}{|z|} \):**
  * **Natural Domain:** \( z \ne 0 \).
  * **Range:** Since \( \frac{z}{|z|} \) lies on the unit circle, \( \frac{5z}{|z|} \) lies on a circle of radius 5 centered at the origin. Adding \( 3+4i \) translates this circle.
    * **Range:** **The circle of radius 5 centered at \( 3 + 4i \)** (defined by \( |w - (3 + 4i)| = 5 \)).
* **(c) \( f(z) = \frac{z + \bar{z}}{z - \bar{z}} \):**
  * **Natural Domain:** Undefined when the denominator is zero: \( z = \bar{z} \implies z \in \mathbb{R} \).
    * **Domain:** **All non-real complex numbers \( z \notin \mathbb{R} \)**.
  * **Range:**
    \[
    f(z) = \frac{2x}{2iy} = -i\frac{x}{y}
    \]
    Since \( y \ne 0 \) (non-real) and \( x \) can be any real number, \( x/y \) ranges over all real numbers \( \mathbb{R} \).
    * **Range:** **The entire imaginary axis \( \operatorname{Re}(w) = 0 \)**.

### Problem 30
We want the natural domain to exclude \( 0, 1+i, 1-i \). This is accomplished by placing a polynomial with these roots in the denominator:
\[
P(z) = z(z - (1+i))(z - (1-i)) = z((z-1)^2 + 1) = z(z^2 - 2z + 2) = z^3 - 2z^2 + 2z
\]
* **Example Function:**
  \[
  \boxed{f(z) = \frac{1}{z^3 - 2z^2 + 2z}}
  \]

### Problem 31: \( f(z) = \cos(x-y) + i\sin(x-y) \)
* **Natural Domain:** **All complex numbers \( \mathbb{C} \)**.
* **Range:** Note that \( f(z) = e^{i(x-y)} \). Since \( x-y \) ranges over all real numbers \( \mathbb{R} \), the values lie on the unit circle.
* **Range:** **The unit circle \( |w| = 1 \)**.

### Problem 32
Express \( x \) and \( y \) as: \( x = \frac{z + \bar{z}}{2} \) and \( y = \frac{z - \bar{z}}{2i} \).
* **(a) \( f(z) = x^2 + y^2 \):**
  \[
  x^2 + y^2 = z\bar{z} \implies \boxed{f(z) = z\bar{z}}
  \]
* **(b) \( f(z) = x - 2y + 2 + (6x + y)i \):**
  Substitute \( x \) and \( y \):
  \[
  f(z) = \frac{z+\bar{z}}{2} - \frac{z-\bar{z}}{i} + 2 + 6i\frac{z+\bar{z}}{2} + i\frac{z-\bar{z}}{2i}
  \]
  Combine coefficients of \( z \) and \( \bar{z} \):
  \[
  = \boxed{(1 + 3i)z + i\bar{z} + 2}
  \]
* **(c) \( f(z) = x^2 - y^2 - (5xy)i \):**
  \[
  x^2 - y^2 - 5xy i = \left(\frac{z+\bar{z}}{2}\right)^2 - \left(\frac{z-\bar{z}}{2i}\right)^2 - 5i\left(\frac{z+\bar{z}}{2}\right)\left(\frac{z-\bar{z}}{2i}\right)
  \]
  \[
  = \frac{z^2+2z\bar{z}+\bar{z}^2}{4} + \frac{z^2-2z\bar{z}+\bar{z}^2}{4} - \frac{5}{4}(z^2-\bar{z}^2) = \boxed{-\frac{3}{4}z^2 + z\bar{z} + \frac{7}{4}\bar{z}^2}
  \]
* **(d) \( f(z) = 3y^2 + 3x^2 i \):**
  \[
  3\left(\frac{z-\bar{z}}{2i}\right)^2 + 3i\left(\frac{z+\bar{z}}{2}\right)^2 = -\frac{3}{4}(z^2 - 2z\bar{z} + \bar{z}^2) + \frac{3i}{4}(z^2 + 2z\bar{z} + \bar{z}^2)
  \]
  \[
  = \boxed{\frac{3(i-1)}{4}z^2 + \frac{3(i+1)}{2}z\bar{z} + \frac{3(i-1)}{4}\bar{z}^2}
  \]

### Problem 33
* **(a)** By definition, \( e^z = e^x(\cos y + i\sin y) \). The modulus is:
  \[
  |e^z| = |e^x| |\cos y + i\sin y| = e^x \sqrt{\cos^2 y + \sin^2 y} = e^x
  \]
* **(b) Are there any \( z \) such that \( e^z = 0 \)?**
  **No**. If \( e^z = 0 \implies |e^z| = 0 \implies e^x = 0 \). But the real exponential function \( e^x \) is never zero for any real \( x \).
* **(c) Show period is \( 2\pi i \):**
  \[
  e^{z + 2\pi i} = e^{x + i(y + 2\pi)} = e^x(\cos(y + 2\pi) + i\sin(y + 2\pi)) = e^x(\cos y + i\sin y) = e^z
  \]

### Problem 34
Show that \( \overline{e^z} = e^{\bar{z}} \):
* LHS: \( \overline{e^z} = \overline{e^x(\cos y + i\sin y)} = e^x(\cos y - i\sin y) \)
* RHS: \( e^{\bar{z}} = e^{x-iy} = e^x(\cos(-y) + i\sin(-y)) = e^x(\cos y - i\sin y) \)
* Both sides match.

### Problem 35
What can be said about \( z \) if \( |e^{-z}| < 1 \)?
* \( |e^{-z}| = e^{-x} \).
* \( e^{-x} < 1 \implies -x < 0 \implies x > 0 \).
* **Answer:** **\( z \) lies in the right half-plane \( \operatorname{Re}(z) > 0 \)**.

### Problem 36
Let \( f(z) = \frac{e^{iz} + e^{-iz}}{2} \).
* **(a) Show periodic with period \( 2\pi \):**
  \[
  f(z+2\pi) = \frac{e^{i(z+2\pi)} + e^{-i(z+2\pi)}}{2} = \frac{e^{iz}e^{2\pi i} + e^{-iz}e^{-2\pi i}}{2}
  \]
  Since \( e^{2\pi i} = e^{-2\pi i} = 1 \):
  \[
  = \frac{e^{iz} + e^{-iz}}{2} = f(z)
  \]
* **(b) If \( z = x \):**
  \[
  f(x) = \frac{e^{ix} + e^{-ix}}{2} = \frac{(\cos x + i\sin x) + (\cos x - i\sin x)}{2} = \boxed{\cos x}
  \]

### Problem 37
**Find the period of the given function.**
* **(a) \( f(z) = e^{z+\pi} \):** The translation by \( \pi \) does not change the exponential's period.
  * **Period:** \( \boxed{2\pi i} \)
* **(b) \( f(z) = e^{\pi z} \):** We want \( e^{\pi(z+P)} = e^{\pi z}e^{\pi P} = e^{\pi z} \implies \pi P = 2\pi i \implies P = 2i \).
  * **Period:** \( \boxed{2i} \)
* **(c) \( f(z) = e^{2iz} \):** We want \( 2i P = 2\pi i \implies P = \pi \).
  * **Period:** \( \boxed{\pi} \)
* **(d) \( f(z) = e^{3z+i} \):** We want \( 3P = 2\pi i \implies P = \frac{2\pi}{3}i \).
  * **Period:** \( \boxed{\frac{2\pi}{3}i} \)

### Problem 38
* Since \( f(z) \) has period \( i \implies f(z+i) = f(z) \).
* We want to find the period \( P \) of \( g(z) = f(iz-2) \):
  \[
  g(z+P) = f(i(z+P) - 2) = f((iz - 2) + i P)
  \]
  For this to equal \( f(iz-2) \), we must have \( i P = i \implies P = 1 \).
* **Period:** \( \boxed{1} \)


---

<a name="section-22-complex-functions-as-mappings"></a>
# Section 2.2 — Complex Functions as Mappings
## Chapter 2 · Section 2.2 — Complex Functions as Mappings
### Problems 1 – 33 · Complete Solutions

---

> **Key Concepts of Complex Mappings**
>
> 1. **Mappings:** A complex function \( w = f(z) \) is viewed as a mapping from the \( z \)-plane to the \( w \)-plane. A subset \( S \) in the \( z \)-plane maps to its image \( S' \) in the \( w \)-plane.
> 2. **Parametric Curves:** A curve \( C \) in the complex plane is parametrized by a complex-valued function of a real variable \( t \): \( z(t) = x(t) + i y(t) \) for \( a \le t \le b \).
> 3. **Image of a Curve:** The image \( C' \) of a curve \( C \) under \( w = f(z) \) has the parametrization \( w(t) = f(z(t)) \) for \( a \le t \le b \).
> 4. **Linear Mapping (Rotations and Scale):** Mappings of the form \( w = az \) perform rotation and magnification. If \( a = r_0 e^{i\theta_0} \), then points are magnified by \( r_0 \) and rotated by \( \theta_0 \).

---

## Problems 1 – 8

**Find the image \( S' \) of the set \( S \) under the given complex mapping \( w = f(z) \).**

### Problem 1: \( f(z) = \bar{z} \); \( S \) is the horizontal line \( y = 3 \)
* Points in \( S \) can be written as \( z = x + 3i \) for \( x \in \mathbb{R} \).
* Applying the mapping: \( w = \bar{z} = \overline{x + 3i} = x - 3i \).
* Expressing in terms of \( u \) and \( v \): \( u = x \) and \( v = -3 \).
* **Image \( S' \):** The horizontal line \( v = -3 \) in the \( w \)-plane.

### Problem 2: \( f(z) = \bar{z} \); \( S \) is the line \( y = x \)
* Points in \( S \) can be written as \( z = x + ix \) for \( x \in \mathbb{R} \).
* Applying the mapping: \( w = \bar{z} = \overline{x + ix} = x - ix \).
* Expressing in terms of \( u \) and \( v \): \( u = x \) and \( v = -x = -u \).
* **Image \( S' \):** The line \( v = -u \) in the \( w \)-plane.

### Problem 3: \( f(z) = 3z \); \( S \) is the half-plane \( \operatorname{Im}(z) > 2 \)
* Points in \( S \) satisfy \( y > 2 \).
* Applying the mapping: \( w = 3z = 3x + 3iy \implies u = 3x, \, v = 3y \).
* Since \( y > 2 \implies v = 3y > 6 \).
* **Image \( S' \):** The half-plane \( \operatorname{Im}(w) > 6 \).

### Problem 4: \( f(z) = 3z \); \( S \) is the vertical strip \( 2 \le \operatorname{Re}(z) < 3 \)
* Points in \( S \) satisfy \( 2 \le x < 3 \).
* Applying the mapping: \( w = 3z = 3x + 3iy \implies u = 3x, \, v = 3y \).
* Since \( 2 \le x < 3 \implies 6 \le u < 9 \).
* **Image \( S' \):** The vertical strip \( 6 \le \operatorname{Re}(w) < 9 \).

### Problem 5: \( f(z) = (1 + i)z \); \( S \) is the vertical line \( x = 2 \)
* Points in \( S \) are \( z = 2 + iy \) for \( y \in \mathbb{R} \).
* Applying the mapping:
  \[
  w = (1+i)(2+iy) = 2 + iy + 2i - y = (2 - y) + i(2 + y)
  \]
* Therefore:
  \[
  u = 2 - y, \quad v = 2 + y
  \]
* Add the two equations: \( u + v = 4 \implies v = 4 - u \).
* **Image \( S' \):** The line \( v = 4 - u \) in the \( w \)-plane.

### Problem 6: \( f(z) = (1 + i)z \); \( S \) is the line \( y = 2x + 1 \)
* Points in \( S \) are \( z = x + i(2x + 1) \) for \( x \in \mathbb{R} \).
* Applying the mapping:
  \[
  w = (1+i)(x + i(2x+1)) = x + ix + i(2x+1) - (2x+1) = (-x - 1) + i(3x + 1)
  \]
* Therefore:
  \[
  u = -x - 1 \implies x = -u - 1
  \]
  \[
  v = 3x + 1 = 3(-u-1) + 1 = -3u - 2
  \]
* **Image \( S' \):** The line \( v = -3u - 2 \) in the \( w \)-plane.

### Problem 7: \( f(z) = iz + 4 \); \( S \) is the half-plane \( \operatorname{Im}(z) \le 1 \)
* Points in \( S \) satisfy \( y \le 1 \).
* Applying the mapping:
  \[
  w = i(x+iy) + 4 = -y + 4 + ix \implies u = 4 - y, \, v = x
  \]
* Since \( y \le 1 \implies -y \ge -1 \implies u = 4 - y \ge 3 \).
* **Image \( S' \):** The half-plane \( \operatorname{Re}(w) \ge 3 \).

### Problem 8: \( f(z) = iz + 4 \); \( S \) is the horizontal strip \( -1 < \operatorname{Im}(z) < 2 \)
* Points in \( S \) satisfy \( -1 < y < 2 \).
* Applying the mapping:
  \[
  w = i(x+iy) + 4 = -y + 4 + ix \implies u = 4 - y, \, v = x
  \]
* Since \( -1 < y < 2 \implies -2 < -y < 1 \implies 2 < 4 - y < 5 \implies 2 < u < 5 \).
* **Image \( S' \):** The vertical strip \( 2 < \operatorname{Re}(w) < 5 \).

---

## Problems 9 – 14

**Find the image of the given line under the complex mapping \( w = z^2 \).**

*Recall that \( w = z^2 = x^2 - y^2 + 2ixy \implies u = x^2 - y^2 \) and \( v = 2xy \).*

### Problem 9: \( y = 1 \)
* We have \( u = x^2 - 1 \) and \( v = 2x \implies x = v/2 \).
* Substitute into \( u \):
  \[
  u = \left(\frac{v}{2}\right)^2 - 1 = \frac{v^2}{4} - 1
  \]
* **Image:** The parabola \( u = \frac{v^2}{4} - 1 \).

### Problem 10: \( x = -3 \)
* We have \( u = 9 - y^2 \) and \( v = -6y \implies y = -v/6 \).
* Substitute into \( u \):
  \[
  u = 9 - \left(-\frac{v}{6}\right)^2 = 9 - \frac{v^2}{36}
  \]
* **Image:** The parabola \( u = 9 - \frac{v^2}{36} \).

### Problem 11: \( x = 0 \) (The imaginary axis)
* Points are \( z = iy \) for \( y \in \mathbb{R} \).
* \( w = z^2 = (iy)^2 = -y^2 \).
* Since \( y^2 \ge 0 \), the image points satisfy \( u \le 0 \) and \( v = 0 \).
* **Image:** The negative real axis, i.e., the ray \( -\infty < u \le 0, \, v = 0 \).

### Problem 12: \( y = 0 \) (The real axis)
* Points are \( z = x \) for \( x \in \mathbb{R} \).
* \( w = z^2 = x^2 \).
* Since \( x^2 \ge 0 \), the image points satisfy \( u \ge 0 \) and \( v = 0 \).
* **Image:** The positive real axis, i.e., the ray \( 0 \le u < \infty, \, v = 0 \).

### Problem 13: \( y = x \)
* Points are \( z = x + ix = x(1+i) \implies z^2 = x^2(2i) = 2x^2 i \).
* Since \( x^2 \ge 0 \), the image points lie on the imaginary axis with \( v \ge 0 \).
* **Image:** The positive imaginary axis, i.e., the ray \( u = 0, \, 0 \le v < \infty \).

### Problem 14: \( y = -x \)
* Points are \( z = x - ix = x(1-i) \implies z^2 = x^2(-2i) = -2x^2 i \).
* Since \( x^2 \ge 0 \), the image points lie on the imaginary axis with \( v \le 0 \).
* **Image:** The negative imaginary axis, i.e., the ray \( u = 0, \, -\infty < v \le 0 \).

---

## Problems 15 – 20

**For each problem: (a) plot the parametric curve \( C \) given by \( z(t) \) and describe the curve in words, (b) find a parametrization of the image, \( C' \), of \( C \) under the given complex mapping \( w = f(z) \), and (c) plot \( C' \) and describe this curve in words.**

### Problem 15: \( z(t) = 2(1 - t) + it, \, 0 \le t \le 1 \); \( f(z) = 3z \)
* **(a) Curve \( C \) in words:** A straight line segment from \( z(0) = 2 \) on the real axis to \( z(1) = i \) on the imaginary axis.
* **(b) Parametrization of \( C' \):**
  \[
  w(t) = f(z(t)) = 3(2(1-t) + it) = 6(1-t) + 3it, \quad 0 \le t \le 1
  \]
* **(c) Curve \( C' \) in words:** A straight line segment from \( w(0) = 6 \) to \( w(1) = 3i \).

### Problem 16: \( z(t) = i(1 - t) + (1 + i)t, \, 0 \le t < \infty \); \( f(z) = -z \)
* **(a) Curve \( C \) in words:** Simplifying \( z(t) = i - it + t + it = t + i \). As \( t \ge 0 \), this is a horizontal ray emanating from \( i \) and extending to the right.
* **(b) Parametrization of \( C' \):**
  \[
  w(t) = -z(t) = -t - i, \quad 0 \le t < \infty
  \]
* **(c) Curve \( C' \) in words:** A horizontal ray emanating from \( -i \) and extending to the left.

### Problem 17: \( z(t) = 1 + 2e^{it}, \, 0 \le t \le 2\pi \); \( f(z) = z + 1 - i \)
* **(a) Curve \( C \) in words:** A circle of radius 2 centered at \( z = 1 \).
* **(b) Parametrization of \( C' \):**
  \[
  w(t) = (1 + 2e^{it}) + 1 - i = 2 - i + 2e^{it}, \quad 0 \le t \le 2\pi
  \]
* **(c) Curve \( C' \) in words:** A circle of radius 2 centered at \( w = 2 - i \).

### Problem 18: \( z(t) = i + e^{it}, \, 0 \le t \le \pi \); \( f(z) = (z - i)^3 \)
* **(a) Curve \( C \) in words:** The upper semicircle of radius 1 centered at \( i \).
* **(b) Parametrization of \( C' \):**
  \[
  w(t) = (z(t) - i)^3 = (e^{it})^3 = e^{3it}, \quad 0 \le t \le \pi
  \]
* **(c) Curve \( C' \) in words:** As \( t \) goes from \( 0 \) to \( \pi \), the angle \( 3t \) goes from \( 0 \) to \( 3\pi \). This represents the unit circle traversed counterclockwise starting at \( w = 1 \) and ending at \( w = -1 \), completing \( 1.5 \) full revolutions.

### Problem 19: \( z(t) = t, \, 0 \le t \le 2 \); \( f(z) = e^{i\pi z} \)
* **(a) Curve \( C \) in words:** A line segment on the real axis from \( 0 \) to \( 2 \).
* **(b) Parametrization of \( C' \):**
  \[
  w(t) = e^{i\pi t}, \quad 0 \le t \le 2
  \]
* **(c) Curve \( C' \) in words:** As \( t \) goes from \( 0 \) to \( 2 \), the argument goes from \( 0 \) to \( 2\pi \). This is the unit circle traversed counterclockwise once, starting and ending at \( w = 1 \).

### Problem 20: \( z(t) = 4e^{it}, \, 0 \le t \le \pi \); \( f(z) = \operatorname{Re}(z) \)
* **(a) Curve \( C \) in words:** The upper semicircle of radius 4 centered at the origin.
* **(b) Parametrization of \( C' \):**
  \[
  w(t) = \operatorname{Re}(4e^{it}) = 4\cos t, \quad 0 \le t \le \pi
  \]
* **(c) Curve \( C' \) in words:** As \( t \) varies from \( 0 \) to \( \pi \), \( 4\cos t \) decreases from \( 4 \) to \( -4 \). This is the real line segment from \( 4 \) to \( -4 \) on the real axis.

---

## Problems 21 – 26

**Use parametrizations to find the image, \( C' \), of the curve \( C \) under the given complex mapping \( w = f(z) \).**

### Problem 21: \( f(z) = z^3 \); \( C \) is the positive imaginary axis
* Parametrize \( C \): \( z(t) = it \) for \( 0 \le t < \infty \).
* Find the image:
  \[
  w(t) = (it)^3 = -i t^3, \quad 0 \le t < \infty
  \]
* **Image \( C' \):** The negative imaginary axis (including the origin).

### Problem 22: \( f(z) = iz \); \( C \) is the circle \( |z - 1| = 2 \)
* Parametrize \( C \): \( z(t) = 1 + 2e^{it} \) for \( 0 \le t \le 2\pi \).
* Find the image:
  \[
  w(t) = i(1 + 2e^{it}) = i + 2i e^{it} = i + 2e^{i(t + \pi/2)}, \quad 0 \le t \le 2\pi
  \]
* **Image \( C' \):** The circle \( |w - i| = 2 \) (centered at \( i \) with radius 2).

### Problem 23: \( f(z) = 1/z \); \( C \) is the circle \( |z| = 2 \)
* Parametrize \( C \): \( z(t) = 2e^{it} \) for \( 0 \le t \le 2\pi \).
* Find the image:
  \[
  w(t) = \frac{1}{2e^{it}} = \frac{1}{2}e^{-it}, \quad 0 \le t \le 2\pi
  \]
* **Image \( C' \):** The circle \( |w| = 1/2 \) (centered at the origin with radius \( 1/2 \), traversed clockwise).

### Problem 24: \( f(z) = 1/z \); \( C \) is the line segment from \( 1 - i \) to \( 2 - 2i \)
* The segment lies on the ray \( y = -x \) (or angle \( -\pi/4 \)).
* Parametrize the segment: \( z(t) = t(1-i) \) for \( 1 \le t \le 2 \).
* Find the image:
  \[
  w(t) = \frac{1}{t(1-i)} = \frac{1}{t}\left(\frac{1+i}{2}\right) = \frac{1}{2t} + i\frac{1}{2t}, \quad 1 \le t \le 2
  \]
* Let \( s = \frac{1}{2t} \). Since \( 1 \le t \le 2 \implies \frac{1}{4} \le s \le \frac{1}{2} \).
* **Image \( C' \):** The line segment from \( \frac{1}{4} + \frac{1}{4}i \) to \( \frac{1}{2} + \frac{1}{2}i \) along the line \( v = u \).

### Problem 25: \( f(z) = z + \bar{z} \); \( C \) is the semicircle of the unit circle \( |z| = 1 \) in the upper half-plane \( \operatorname{Im}(z) \ge 0 \)
* Parametrize \( C \): \( z(t) = e^{it} \) for \( 0 \le t \le \pi \).
* Find the image:
  \[
  w(t) = e^{it} + e^{-it} = 2\cos t, \quad 0 \le t \le \pi
  \]
* As \( t \) goes from \( 0 \) to \( \pi \), \( 2\cos t \) ranges continuously from \( 2 \) to \( -2 \).
* **Image \( C' \):** The real line segment from \( -2 \) to \( 2 \), i.e., \( [-2, 2] \) on the real axis.

### Problem 26: \( f(z) = e^z \); \( C \) is the ray emanating from the origin and containing \( 2 + \sqrt{3}i \)
* The ray is \( z(t) = t(2 + \sqrt{3}i) \) for \( 0 \le t < \infty \).
* Find the image:
  \[
  w(t) = e^{t(2+\sqrt{3}i)} = e^{2t} e^{i \sqrt{3}t}, \quad 0 \le t < \infty
  \]
* **Image \( C' \):** A logarithmic spiral starting at \( w = 1 \) (at \( t = 0 \)) and winding outwards counterclockwise to infinity.

---

## Focus on Concepts (Problems 27 – 33)

### Problem 27
**Find the image of the line \( x = 1 \) under the complex mapping \( w = 1/z \).**
* **(a)** The points on the line are \( z = 1 + iy \) for \( y \in \mathbb{R} \).
  \[
  f(z) = \frac{1}{1+iy} = \frac{1-iy}{1+y^2} \implies u = \frac{1}{1+y^2}, \quad v = -\frac{y}{1+y^2}
  \]
* **(b) Show that \( (u - 1/2)^2 + v^2 = 1/4 \):**
  \[
  \left(u - \frac{1}{2}\right)^2 + v^2 = \left(\frac{1}{1+y^2} - \frac{1}{2}\right)^2 + \left(-\frac{y}{1+y^2}\right)^2
  \]
  \[
  = \left(\frac{2 - (1+y^2)}{2(1+y^2)}\right)^2 + \frac{y^2}{(1+y^2)^2} = \frac{(1-y^2)^2}{4(1+y^2)^2} + \frac{4y^2}{4(1+y^2)^2}
  \]
  \[
  = \frac{1 - 2y^2 + y^4 + 4y^2}{4(1+y^2)^2} = \frac{(1+y^2)^2}{4(1+y^2)^2} = \frac{1}{4}
  \]
* **(c) Describe the image:** A circle of radius \( 1/2 \) centered at \( w = 1/2 \).
* **(d) Is there a point on the line \( x=1 \) that maps onto \( 0 \)?**
  No. Since \( u = \frac{1}{1+y^2} \), there is no real \( y \) for which \( u = 0 \). Hence, the origin \( w = 0 \) is excluded. The correct description is: **the circle \( |w - 1/2| = 1/2 \) except for the point \( w = 0 \)**.

### Problem 28
**Consider the parametrization \( z(t) = i(1 - t) + 3t \), \( 0 \le t \le 1 \).**
* **(a) Describe in words:** A straight line segment from \( i \) to \( 3 \).
* **(b) What is the difference between this and \( z(t) = 3(1-t) + it \) for \( 0 \le t \le 1 \)?**
  They trace the same segment, but in opposite directions (the first from \( i \) to \( 3 \), the second from \( 3 \) to \( i \)).
* **(c) What is the difference between this and \( z(t) = 3(\frac{1}{2}t) + i(1 - \frac{1}{2}t) \) for \( 0 \le t \le 2 \)?**
  They trace the exact same segment with the same direction, but the second travels at half the speed and takes 2 units of time to complete.
* **(d) Find a parametrization of the line segment from \( 1 + 2i \) to \( 2 + i \) where \( 0 \le t \le 3 \):**
  Using linear interpolation:
  \[
  z(0) = B = 1+2i
  \]
  \[
  z(3) = 3A + 1+2i = 2+i \implies 3A = 1-i \implies A = \frac{1-i}{3}
  \]
  \[
  \boxed{z(t) = \left(\frac{1-i}{3}\right)t + 1 + 2i, \quad 0 \le t \le 3}
  \]

### Problem 29: Image of circle \( |z - z_0| = R \) under \( f(z) = iz - 2 \)
* Parametrize the circle: \( z(t) = z_0 + R e^{it} \) for \( 0 \le t \le 2\pi \).
* Find the image:
  \[
  w(t) = i(z_0 + R e^{it}) - 2 = (i z_0 - 2) + i R e^{it} = (i z_0 - 2) + R e^{i(t + \pi/2)}, \quad 0 \le t \le 2\pi
  \]
* **Image:** A circle of radius \( R \) centered at \( w = i z_0 - 2 \).

### Problem 30
**Consider the line \( y = mx + b \).**
* **(a) Parametrization \( z(t) \):**
  \[
  \boxed{z(t) = t + i(mt + b), \quad -\infty < t < \infty}
  \]
* **(b) Image under \( w = z + 2 - 3i \):**
  \[
  w(t) = (t+2) + i(mt + b - 3)
  \]
  This is a translation. The image is a line parallel to the original with the equation \( y = mx + b - 3 - 2m \).
* **(c) Image under \( w = 3z \):**
  \[
  w(t) = 3t + i(3mt + 3b)
  \]
  This is a magnification. The image is the line \( y = mx + 3b \).

### Problem 31
* If \( z = x+iy \implies w = \bar{z} = x-iy \). The \( x \)-coordinate is unchanged, and the \( y \)-coordinate is negated. This represents a reflection across the horizontal axis \( y = 0 \) (the real axis).

### Problem 32: \( f(z) = az \) with \( |a| = 1 \)
* **(a) Prove distance preservation:**
  \[
  |f(z_1) - f(z_2)| = |a z_1 - a z_2| = |a(z_1 - z_2)| = |a| |z_1 - z_2|
  \]
  Since \( |a| = 1 \):
  \[
  = |z_1 - z_2|
  \]
* **(b) Geometric interpretation:**
  The mapping preserves distances between any two points (an isometry or rigid motion).
* **(c) Image of a circle:**
  Since distances are preserved, any circle of radius \( R \) is mapped onto another circle of radius \( R \).

### Problem 33: Angle preservation under \( w = az \)
* **(a)** A ray \( C \) emanating from the origin is \( z(t) = t e^{i\theta_0} \) for \( t \ge 0 \).
  * Its image is \( w(t) = a z(t) = t (a e^{i\theta_0}) \) for \( t \ge 0 \).
  * Since \( a \ne 0 \) is a constant, this is also a ray emanating from the origin in the direction of \( a e^{i\theta_0} \).
* **(b) Show angle is preserved:**
  Let \( z_1 = r_1 e^{i\theta_1} \) on \( C_1 \) and \( z_2 = r_2 e^{i\theta_2} \) on \( C_2 \).
  Let \( w_1 = a z_1 \) and \( w_2 = a z_2 \). Using the angle formula:
  \[
  \cos\theta' = \frac{w_1 \bar{w}_2 + \bar{w}_1 w_2}{2 |w_1| |w_2|} = \frac{(a z_1)(\bar{a} \bar{z}_2) + (\bar{a} \bar{z}_1)(a z_2)}{2 |a| |z_1| |a| |z_2|} = \frac{|a|^2(z_1 \bar{z}_2 + \bar{z}_1 z_2)}{2 |a|^2 |z_1| |z_2|} = \frac{z_1 \bar{z}_2 + \bar{z}_1 z_2}{2 |z_1| |z_2|} = \cos\theta
  \]
  Since both cosine values are identical, the angle \( \theta' = \theta \).


---

<a name="section-23-linear-mappings"></a>
# Section 2.3 — Linear Mappings
## Chapter 2 · Section 2.3 — Linear Mappings
### Problems 1 – 35 · Complete Solutions

---

> **Key Concepts of Linear Mappings**
>
> 1. **Complex Linear Function:** Defined as \( f(z) = az + b \) for complex constants \( a \) and \( b \) with \( a \ne 0 \).
> 2. **Decomposition:** A linear mapping can be expressed as a composition:
>    \[
>    f(z) = (T \circ M \circ R)(z)
>    \]
>    where:
>    * Rotation: \( R(z) = e^{i\theta_0} z \) (where \( \theta_0 = \operatorname{Arg}(a) \))
>    * Magnification: \( M(z) = |a| z \)
>    * Translation: \( T(z) = z + b \)
> 3. **Shape Preservation:** Linear mappings can rotate, scale, and translate a geometric figure, but they always preserve its similarity (i.e., they preserve angles and the basic shape of the figure).
> 4. **Fixed Point:** A point \( z_0 \) is a fixed point of a mapping \( f \) if \( f(z_0) = z_0 \). For a nonidentity linear mapping \( f(z) = az + b \), there is a unique fixed point \( z_0 = \frac{b}{1-a} \) (if \( a \ne 1 \)).

---

## Problems 1 – 6

**For the given linear mapping \( w = f(z) \): (a) find the image of the closed disk \( |z| \le 1 \), and (b) describe the action of the mapping.**

### Problem 1: \( f(z) = z + 3i \)
* **(a) Image:** The mapping is a translation by \( 3i \). The center of the disk shifts from \( 0 \) to \( 3i \), while the radius remains \( 1 \).
  * **Image Disk:** \( \boxed{|w - 3i| \le 1} \)
* **(b) Action:** Translation vertically upwards by 3 units.

### Problem 2: \( f(z) = z + 2 - i \)
* **(a) Image:** The mapping is a translation by \( 2 - i \). The center of the disk shifts to \( 2 - i \).
  * **Image Disk:** \( \boxed{|w - (2 - i)| \le 1} \)
* **(b) Action:** Translation to the right by 2 units and downwards by 1 unit.

### Problem 3: \( f(z) = 3iz \)
* **(a) Image:** Write \( 3i = 3e^{i\pi/2} \). The mapping rotates the disk by \( \pi/2 \) and magnifies its radius by a factor of 3.
  * **Image Disk:** \( \boxed{|w| \le 3} \)
* **(b) Action:** Rotation by \( \pi/2 \) (counterclockwise) followed by magnification by 3.

### Problem 4: \( f(z) = (1 + i)z \)
* **(a) Image:** Write \( 1+i = \sqrt{2}e^{i\pi/4} \). The mapping rotates the disk by \( \pi/4 \) and magnifies its radius by \( \sqrt{2} \).
  * **Image Disk:** \( \boxed{|w| \le \sqrt{2}} \)
* **(b) Action:** Rotation by \( \pi/4 \) (counterclockwise) followed by magnification by \( \sqrt{2} \).

### Problem 5: \( f(z) = 2z - i \)
* **(a) Image:** First, magnification by 2 changes the disk to \( |z| \le 2 \). Then, translation by \( -i \) shifts the center to \( -i \).
  * **Image Disk:** \( \boxed{|w + i| \le 2} \)
* **(b) Action:** Magnification by a factor of 2 followed by translation downwards by 1 unit.

### Problem 6: \( f(z) = (6 - 5i)z + 1 - 3i \)
* **(a) Image:** The magnification factor is \( |6 - 5i| = \sqrt{36 + 25} = \sqrt{61} \). The translation shifts the center of the scaled disk to \( 1 - 3i \).
  * **Image Disk:** \( \boxed{|w - (1 - 3i)| \le \sqrt{61}} \)
* **(b) Action:** Rotation by \( \operatorname{Arg}(6-5i) \approx -0.695 \) radians (clockwise), magnification by \( \sqrt{61} \), followed by translation by \( 1 - 3i \).

---

## Problems 7 – 12

**Find the image of the triangle with vertices \( 0, 1, \) and \( i \) under the given linear mapping \( w = f(z) \).**

*Since linear mappings preserve straight lines, we only need to find the images of the three vertices.*

### Problem 7: \( f(z) = z + 2i \)
* \( f(0) = 2i \)
* \( f(1) = 1 + 2i \)
* \( f(i) = 3i \)
* **Image:** The triangle with vertices \( \boxed{2i, \, 1 + 2i, \, 3i} \).

### Problem 8: \( f(z) = 3z \)
* \( f(0) = 0 \)
* \( f(1) = 3 \)
* \( f(i) = 3i \)
* **Image:** The triangle with vertices \( \boxed{0, \, 3, \, 3i} \).

### Problem 9: \( f(z) = e^{i\pi/4}z \)
* \( f(0) = 0 \)
* \( f(1) = e^{i\pi/4} = \frac{\sqrt{2}}{2} + i\frac{\sqrt{2}}{2} \)
* \( f(i) = i e^{i\pi/4} = e^{i3\pi/4} = -\frac{\sqrt{2}}{2} + i\frac{\sqrt{2}}{2} \)
* **Image:** The triangle with vertices \( \boxed{0, \, \frac{\sqrt{2}}{2} + i\frac{\sqrt{2}}{2}, \, -\frac{\sqrt{2}}{2} + i\frac{\sqrt{2}}{2}} \).

### Problem 10: \( f(z) = \frac{1}{2i}z = -\frac{i}{2}z \)
* \( f(0) = 0 \)
* \( f(1) = -\frac{1}{2}i \)
* \( f(i) = -\frac{i^2}{2} = \frac{1}{2} \)
* **Image:** The triangle with vertices \( \boxed{0, \, \frac{1}{2}, \, -\frac{1}{2}i} \).

### Problem 11: \( f(z) = -3z + i \)
* \( f(0) = i \)
* \( f(1) = -3 + i \)
* \( f(i) = -3i + i = -2i \)
* **Image:** The triangle with vertices \( \boxed{i, \, -3 + i, \, -2i} \).

### Problem 12: \( f(z) = (1 - i)z - 2 \)
* \( f(0) = -2 \)
* \( f(1) = 1 - i - 2 = -1 - i \)
* \( f(i) = (1 - i)i - 2 = i + 1 - 2 = -1 + i \)
* **Image:** The triangle with vertices \( \boxed{-2, \, -1 - i, \, -1 + i} \).

---

## Problems 13 – 16

**Express the given linear mapping \( w = f(z) \) as a composition of a rotation, magnification, and a translation. Then describe the action in words.**

### Problem 13: \( f(z) = 3iz + 4 \)
* Here \( a = 3i = 3e^{i\pi/2} \), and \( b = 4 \).
* **Composition:** \( f(z) = T(M(R(z))) \) where:
  * Rotation: \( R(z) = e^{i\pi/2} z = iz \) (rotation by \( \pi/2 \) counterclockwise)
  * Magnification: \( M(z) = 3z \) (magnification by 3)
  * Translation: \( T(z) = z + 4 \) (translation by 4)
* **Action:** The mapping rotates the point counterclockwise by \( 90^\circ \), scales its distance from the origin by a factor of 3, and then shifts it 4 units to the right.

### Problem 14: \( f(z) = 5 \left( \cos \frac{\pi}{5} + i \sin \frac{\pi}{5} \right) z + 7i \)
* Here \( a = 5e^{i\pi/5} \), and \( b = 7i \).
* **Composition:** \( f(z) = T(M(R(z))) \) where:
  * Rotation: \( R(z) = e^{i\pi/5}z \) (rotation by \( \pi/5 \) counterclockwise)
  * Magnification: \( M(z) = 5z \) (magnification by 5)
  * Translation: \( T(z) = z + 7i \) (translation by \( 7i \))
* **Action:** The mapping rotates the point counterclockwise by \( 36^\circ \), scales its distance from the origin by a factor of 5, and then shifts it 7 units upwards.

### Problem 15: \( f(z) = -\frac{1}{2}z + 1 - \sqrt{3}i \)
* Here \( a = -\frac{1}{2} = \frac{1}{2}e^{i\pi} \), and \( b = 1 - \sqrt{3}i \).
* **Composition:** \( f(z) = T(M(R(z))) \) where:
  * Rotation: \( R(z) = e^{i\pi}z = -z \) (rotation by \( \pi \) radians / reflection through origin)
  * Magnification: \( M(z) = \frac{1}{2}z \) (magnification by \( 1/2 \))
  * Translation: \( T(z) = z + 1 - \sqrt{3}i \) (translation by \( 1 - \sqrt{3}i \))
* **Action:** The mapping rotates the point by \( 180^\circ \) (or negates it), scales its distance from the origin by a factor of \( 1/2 \), and then shifts it by \( 1 - \sqrt{3}i \).

### Problem 16: \( f(z) = (3 - 2i)z + 12 \)
* Let's find polar form of \( a = 3 - 2i \):
  * Modulus: \( |a| = \sqrt{9 + 4} = \sqrt{13} \)
  * Argument: \( \theta_0 = \operatorname{Arg}(3-2i) = \tan^{-1}(-2/3) \approx -0.588 \) radians
* **Composition:** \( f(z) = T(M(R(z))) \) where:
  * Rotation: \( R(z) = e^{-i\tan^{-1}(2/3)}z \) (rotation by \( \approx 33.69^\circ \) clockwise)
  * Magnification: \( M(z) = \sqrt{13}z \) (magnification by \( \sqrt{13} \))
  * Translation: \( T(z) = z + 12 \) (translation by 12)
* **Action:** The mapping rotates the point clockwise by \( \approx 33.69^\circ \), scales its distance from the origin by a factor of \( \sqrt{13} \), and then shifts it 12 units to the right.

---

## Problems 17 – 22

**Find a linear mapping \( f(z) = az + b \) that maps the set \( S \) onto the set \( S' \).**

### Problem 17: \( S \) (triangle with vertices \( 0, 1, 1+i \)) onto \( S' \) (triangle with vertices \( 2i, 3i, -1+3i \))
* Let \( f(z) = az + b \). Map vertices:
  1. \( f(0) = b \implies b = 2i \)
  2. \( f(1) = a + b = 3i \implies a + 2i = 3i \implies a = i \)
* Let's check the third vertex:
  \[
  f(1+i) = i(1+i) + 2i = i - 1 + 2i = -1 + 3i
  \]
  This matches the third vertex of \( S' \) exactly.
* **Mapping:** \( \boxed{f(z) = iz + 2i} \)

### Problem 18: \( S \) (circle \( |z - 1| = 3 \)) onto \( S' \) (circle \( |z + i| = 5 \))
* We map the center \( z_c = 1 \) to the center \( w_c = -i \), and scale the radius from 3 to 5.
* Let \( f(z) = a(z - 1) - i \).
* For radius scaling, we require \( |a| = 5/3 \). Choosing \( a = 5/3 \) (no rotation):
  \[
  f(z) = \frac{5}{3}(z - 1) - i = \frac{5}{3}z - \frac{5}{3} - i
  \]
* **Mapping:** \( \boxed{f(z) = \frac{5}{3}z - \frac{5}{3} - i} \)

### Problem 19: \( S \) (imaginary axis) onto \( S' \) (line through \( i \) and \( 1 + 2i \))
* A direction vector for \( S' \) is \( (1+2i) - i = 1+i \).
* Let's map \( 0 \to i \) and \( i \to 1+2i \):
  1. \( f(0) = b \implies b = i \)
  2. \( f(i) = a(i) + i = 1+2i \implies ai = 1+i \implies a = 1 - i \)
* **Mapping:** \( \boxed{f(z) = (1-i)z + i} \)
* *Verification:* Let \( z = iy \) be a point on the imaginary axis:
  \[
  f(iy) = (1-i)(iy) + i = iy + y + i = y + i(y+1)
  \]
  This is a point \( x' + iy' \) where \( y' = x' + 1 \), which is exactly the line passing through \( (0,1) \) and \( (1,2) \).

### Problem 20: \( S \) (square with vertices \( 1 + i, -1 + i, -1 - i, 1 - i \)) onto \( S' \) (square with vertices \( 1, 2 + i, 1 + 2i, i \))
* The center of \( S \) is \( z_c = 0 \), and the center of \( S' \) is \( w_c = 1+i \).
* Thus, \( b = 1+i \).
* The distance of vertices of \( S \) from the center \( 0 \) is \( \sqrt{2} \), and for \( S' \) from \( 1+i \) is \( 1 \).
* The magnification factor is \( |a| = \frac{1}{\sqrt{2}} \).
* The vertex \( 1+i \) (at angle \( \pi/4 \)) maps to \( 2+i \). The vector from center \( 1+i \) to \( 2+i \) is \( 1 \) (at angle \( 0 \)).
* Thus, the rotation angle is \( -\pi/4 \).
* Hence,
  \[
  a = \frac{1}{\sqrt{2}} e^{-i\pi/4} = \frac{1}{\sqrt{2}} \left(\frac{1}{\sqrt{2}} - i\frac{1}{\sqrt{2}}\right) = \frac{1-i}{2}
  \]
* **Mapping:** \( \boxed{f(z) = \frac{1-i}{2}z + 1 + i} \)

### Problem 21: Two mappings mapping the square \( S_1 \) (vertices \( 0, 1, 1+i, i \)) onto \( S_2 \) (vertices \( -1, 0, i, -1+i \))
* Both squares have the same size, so \( |a| = 1 \).
* **Mapping 1 (Pure translation):**
  Shift the square to the left by 1 unit:
  * \( \boxed{f_1(z) = z - 1} \)
  * *Check:* \( 0 \to -1 \), \( 1 \to 0 \), \( 1+i \to i \), \( i \to -1+i \). Correct.
* **Mapping 2 (Rotation by \( \pi/2 \) about the origin):**
  Rotate counterclockwise by \( 90^\circ \):
  * \( \boxed{f_2(z) = iz} \)
  * *Check:* \( 0 \to 0 \), \( 1 \to i \), \( 1+i \to -1+i \), \( i \to -1 \). Correct.

### Problem 22: Two mappings mapping \( \operatorname{Re}(z) \ge 2 \) onto \( \operatorname{Re}(z) \ge 5 \)
* **Mapping 1 (Pure translation):**
  Shift right by 3 units:
  * \( \boxed{f_1(z) = z + 3} \)
* **Mapping 2 (Magnification by 2 and translation):**
  Let \( f(z) = 2z + b \). The boundary \( x=2 \) must map to \( u=5 \):
  \[
  \operatorname{Re}(f(2+iy)) = \operatorname{Re}(4 + 2iy + b) = 4 + \operatorname{Re}(b) = 5 \implies \operatorname{Re}(b) = 1
  \]
  Let \( b = 1 \):
  * \( \boxed{f_2(z) = 2z + 1} \)

---

## Problems 23 – 24

**Parametric Curve Transformations**

### Problem 23: Line segment \( z(t) = z_0(1-t) + z_1 t \), \( 0 \le t \le 1 \)
* **(a) Translation \( T(z) = z + b \):**
  \[
  w(t) = z_0(1-t) + z_1 t + b = (z_0 + b)(1-t) + (z_1 + b)t, \quad 0 \le t \le 1
  \]
  * **In words:** The line segment connecting \( z_0 + b \) to \( z_1 + b \).
* **(b) Rotation \( R(z) = az, \, |a| = 1 \):**
  \[
  w(t) = a z_0(1-t) + a z_1 t, \quad 0 \le t \le 1
  \]
  * **In words:** The line segment connecting \( az_0 \) to \( az_1 \).
* **(c) Magnification \( M(z) = az, \, a > 0 \):**
  \[
  w(t) = a z_0(1-t) + a z_1 t, \quad 0 \le t \le 1
  \]
  * **In words:** The line segment connecting \( az_0 \) to \( az_1 \).

### Problem 24: Circle \( z(t) = z_0 + re^{it} \), \( 0 \le t \le 2\pi \)
* **(a) Translation \( T(z) = z + b \):**
  \[
  w(t) = (z_0 + b) + re^{it}, \quad 0 \le t \le 2\pi
  \]
  * **In words:** A circle of radius \( r \) centered at \( z_0 + b \).
* **(b) Rotation \( R(z) = az, \, |a| = 1 \) (where \( a = e^{i\theta_a} \)):**
  \[
  w(t) = az_0 + r e^{i(t + \theta_a)}, \quad 0 \le t \le 2\pi
  \]
  * **In words:** A circle of radius \( r \) centered at \( az_0 \).
* **(c) Magnification \( M(z) = az, \, a > 0 \):**
  \[
  w(t) = az_0 + ar e^{it}, \quad 0 \le t \le 2\pi
  \]
  * **In words:** A circle of radius \( ar \) centered at \( az_0 \).

---

## Problems 25 – 26

**Compositions of Linear Mappings**

### Problem 25
* **(a) Rotation by \( \pi/4 \), magnification by 2, and translation by \( 1+i \):**
  \[
  f_a(z) = 2e^{i\pi/4}z + 1 + i = 2\left(\frac{\sqrt{2}}{2} + i\frac{\sqrt{2}}{2}\right)z + 1 + i = \boxed{(\sqrt{2} + \sqrt{2}i)z + 1 + i}
  \]
* **(b) Magnification by 2, translation by \( \sqrt{2} \), and rotation by \( \pi/4 \):**
  \[
  f_b(z) = e^{i\pi/4}(2z + \sqrt{2}) = 2e^{i\pi/4}z + \sqrt{2}e^{i\pi/4} = \boxed{(\sqrt{2} + \sqrt{2}i)z + 1 + i}
  \]
* **(c) Translation by \( \frac{1}{2}\sqrt{2} \), rotation by \( \pi/4 \), then magnification by 2:**
  \[
  f_c(z) = 2 \left[ e^{i\pi/4} \left( z + \frac{1}{2}\sqrt{2} \right) \right] = 2e^{i\pi/4}z + \sqrt{2}e^{i\pi/4} = \boxed{(\sqrt{2} + \sqrt{2}i)z + 1 + i}
  \]
* **(d) Observation:**
  All three linear mappings are identical. Even though the order of composition differs, the translation constants are adjusted accordingly to produce the same final mapping.

### Problem 26: \( f(z) = (1 + \sqrt{3}i)z + i \)
* Polar form of \( a = 1 + \sqrt{3}i \): \( a = 2e^{i\pi/3} \).
* **(a) \( f(z) = T \circ M \circ R(z) \):**
  * Rotation: \( R(z) = e^{i\pi/3}z \) (rotate by \( \pi/3 \) counterclockwise)
  * Magnification: \( M(z) = 2z \) (magnify by 2)
  * Translation: \( T(z) = z + i \) (translate by \( i \))
  * **In words:** Rotate counterclockwise by \( 60^\circ \), magnify by 2, then translate vertically upwards by 1.
* **(b) \( f(z) = M \circ T \circ R(z) \):**
  * We need \( M(T(R(z))) = 2(e^{i\pi/3}z + b) = 2e^{i\pi/3}z + 2b = 2e^{i\pi/3}z + i \implies b = i/2 \).
  * Rotation: \( R(z) = e^{i\pi/3}z \)
  * Translation: \( T(z) = z + i/2 \)
  * Magnification: \( M(z) = 2z \)
  * **In words:** Rotate counterclockwise by \( 60^\circ \), translate vertically upwards by \( 1/2 \), then magnify by 2.
* **(c) \( f(z) = R \circ M \circ T(z) \):**
  * We need \( R(M(T(z))) = e^{i\pi/3}(2(z+b)) = 2e^{i\pi/3}z + 2e^{i\pi/3}b = 2e^{i\pi/3}z + i \).
  * Thus:
    \[
    2e^{i\pi/3}b = i \implies b = \frac{i}{2e^{i\pi/3}} = \frac{1}{2} e^{i(\pi/2 - \pi/3)} = \frac{1}{2}e^{i\pi/6} = \frac{\sqrt{3}}{4} + \frac{1}{4}i
    \]
  * Translation: \( T(z) = z + \frac{\sqrt{3}}{4} + \frac{1}{4}i \)
  * Magnification: \( M(z) = 2z \)
  * Rotation: \( R(z) = e^{i\pi/3}z \)
  * **In words:** Translate by \( \frac{\sqrt{3}}{4} + \frac{1}{4}i \), magnify by 2, then rotate counterclockwise by \( 60^\circ \).

---

## Focus on Concepts (Problems 27 – 35)

### Problem 27
* **(a) Two translations:** \( T_1(z) = z + b_1 \), \( T_2(z) = z + b_2 \).
  \[
  T_2(T_1(z)) = (z + b_1) + b_2 = z + (b_1 + b_2)
  \]
  which is a translation. Since complex addition is commutative, order does not matter.
* **(b) Two rotations:** \( R_1(z) = a_1 z \), \( R_2(z) = a_2 z \) with \( |a_1|=|a_2|=1 \).
  \[
  R_2(R_1(z)) = a_2(a_1 z) = (a_2 a_1)z
  \]
  which is a rotation since \( |a_2 a_1| = 1 \). Order does not matter since complex multiplication is commutative.
* **(c) Two magnifications:** \( M_1(z) = a_1 z \), \( M_2(z) = a_2 z \) with \( a_1, a_2 > 0 \).
  \[
  M_2(M_1(z)) = a_2(a_1 z) = (a_2 a_1)z
  \]
  which is a magnification since \( a_2 a_1 > 0 \). Order does not matter since real multiplication is commutative.

### Problem 28
* **(a) Can a translation \( T(z)=z+b, \, b \ne 0 \) and a nonidentity rotation \( R(z)=az, \, a \ne 1 \) commute?**
  * \( T(R(z)) = az + b \) and \( R(T(z)) = a(z+b) = az + ab \).
  * For commutativity: \( b = ab \implies b(1-a) = 0 \).
  * Since \( b \ne 0 \) and \( a \ne 1 \), this is never satisfied. **No**.
* **(b) Can a translation \( T(z)=z+b, \, b \ne 0 \) and a nonidentity magnification \( M(z)=az, \, a > 0, \, a \ne 1 \) commute?**
  * Similarly, \( b(1-a) = 0 \) is impossible. **No**.
* **(c) Can a nonidentity rotation and a nonidentity magnification commute?**
  * Yes, because they are represented by multiplications \( a_1 z \) and \( a_2 z \), which commute: \( a_1(a_2 z) = a_2(a_1 z) \). **Yes**.

### Problem 29
* We want \( g(x+iy) = -x + iy \).
* Reflection about the real axis gives \( \bar{z} = x - iy \). Negating this gives \( -\bar{z} = -x + iy \).
* **Mapping:** \( \boxed{g(z) = -\bar{z}} \)

### Problem 30
* To obtain \( w_0 = a\bar{z}_0 + b \) (where \( a = re^{i\theta} \)):
  1. Reflect \( z_0 \) about the real axis to get \( \bar{z}_0 \).
  2. Rotate \( \bar{z}_0 \) by \( \theta \) counterclockwise to get \( e^{i\theta}\bar{z}_0 \).
  3. Magnify by \( r \) to get \( re^{i\theta}\bar{z}_0 \).
  4. Translate by \( b \) to get \( re^{i\theta}\bar{z}_0 + b \).

### Problem 31
* If \( |f(z)| = |z| \) for all \( z \in \mathbb{C} \):
  * For \( z = 0 \implies |f(0)| = |b| = 0 \implies b = 0 \).
  * Then \( |az| = |z| \implies |a||z| = |z| \implies |a| = 1 \).
  * **Conclusion:** \( f(z) \) is a pure rotation centered at the origin (i.e. \( f(z) = az \) with \( |a| = 1 \)).

### Problem 32
* If \( |f(z_2) - f(z_1)| = |z_2 - z_1| \) for all \( z_1, z_2 \):
  * Since \( |f(z_2) - f(z_1)| = |(az_2+b) - (az_1+b)| = |a(z_2-z_1)| = |a||z_2-z_1| \).
  * For this to equal \( |z_2 - z_1| \), we must have \( |a| = 1 \).
  * **Conclusion:** \( f(z) \) is a rigid motion (an isometry), which is a composition of a rotation and a translation (i.e. \( f(z) = az + b \) with \( |a| = 1 \)).

### Problem 33
* **(a) Fixed point of \( f(z) = az + b \):**
  * Set \( az_0 + b = z_0 \implies z_0(1-a) = b \).
  * If \( a \ne 1 \), there is a unique fixed point: \( \boxed{z_0 = \frac{b}{1-a}} \).
  * If \( a = 1 \) and \( b \ne 0 \), there are no fixed points.
  * If \( a = 1 \) and \( b = 0 \), every point is a fixed point.
* **(b) Example with no fixed point:**
  * \( \boxed{f(z) = z + 1} \) (a translation has no fixed point).
* **(c) Example with more than one fixed point:**
  * \( \boxed{f(z) = z} \) (the identity mapping has infinitely many fixed points).
* **(d) Prove that if \( f(z_0) = z_0 \) and \( f \circ g = g \circ f \), then \( g(z_0) \) is a fixed point of \( f \):**
  * Evaluate \( f(g(z_0)) \):
    \[
    f(g(z_0)) = (f \circ g)(z_0) = (g \circ f)(z_0) = g(f(z_0))
    \]
  * Since \( f(z_0) = z_0 \), this equals:
    \[
    = g(z_0)
    \]
  * Therefore, \( g(z_0) \) satisfies the equation \( f(w) = w \), showing it is a fixed point of \( f \).

### Problem 34
* **(a) Why is \( |z| \le 2 \) invariant under \( R(z) = az, \, |a| = 1 \)?**
  * For any \( z \) with \( |z| \le 2 \), the image satisfies \( |w| = |az| = |a||z| = |z| \le 2 \). Thus the image remains in the disk. Since the rotation is bijective, the entire disk maps onto itself.
* **(b) Invariant sets under translation \( T(z) = z + b, \, b \ne 0 \):**
  * Any straight line parallel to the vector \( b \) is invariant. E.g. the line \( z(t) = z_0 + tb \) maps to \( w(t) = z(t) + b = z_0 + (t+1)b \), which is the same set of points.
* **(c) Invariant sets under magnification \( M(z) = az, \, a > 0, \, a \ne 1 \):**
  * Any straight line passing through the origin (i.e. \( z(t) = t e^{i\theta_0} \)) is invariant, because \( w(t) = a t e^{i\theta_0} \) just rescales the parameter \( t \) without changing the set of points.

### Problem 35
* **(a) Formulas for \( a \) and \( b \):**
  * Given \( az_1 + b = w_1 \) and \( az_2 + b = w_2 \).
  * Subtracting the two equations gives \( a(z_1 - z_2) = w_1 - w_2 \implies \boxed{a = \frac{w_1 - w_2}{z_1 - z_2}} \).
  * Substituting \( a \) into the first equation:
    \[
    b = w_1 - a z_1 = w_1 - \frac{w_1 - w_2}{z_1 - z_2} z_1 = \boxed{\frac{w_2 z_1 - w_1 z_2}{z_1 - z_2}}
    \]
  * Because these equations yield unique values for \( a \) and \( b \) (since \( z_1 \ne z_2 \)), the linear function \( f(z) = az + b \) is uniquely determined.
* **(b) Show not uniquely determined by one point:**
  * Consider two linear functions \( f_1(z) = z \) and \( f_2(z) = 2z \).
  * Both functions map the point \( 0 \) to \( 0 \), yet \( f_1 \ne f_2 \).


---

<a name="section-24-special-power-functions"></a>
# Section 2.4 — Special Power Functions
## Chapter 2 · Section 2.4 — Special Power Functions
### Problems 1 – 57 · Complete Solutions

---

> **Key Concepts of Special Power Functions**
>
> 1. **Power Function \( z^n \):** For \( n \ge 2 \), the mapping \( w = z^n \) scales the modulus to \( r^n \) and multiplies the argument by \( n \):
>    \[
>    w = r^n e^{i n\theta}
>    \]
> 2. **Squaring Mapping \( w = z^2 \):**
>    * Horizontal lines \( y = k \ne 0 \) map to parabolas: \( u = \frac{v^2}{4k^2} - k^2 \) (opening right).
>    * Vertical lines \( x = k \ne 0 \) map to parabolas: \( u = k^2 - \frac{v^2}{4k^2} \) (opening left).
>    * Rays \( \arg(z) = \theta_0 \) map to rays \( \arg(w) = 2\theta_0 \).
> 3. **Principal Root Function \( z^{1/n} \):** The single-valued branch defined by:
>    \[
>    z^{1/n} = r^{1/n} e^{i \theta / n} \quad \text{where } \theta = \operatorname{Arg}(z) \in (-\pi, \pi]
>    \]
>    The range of this function is the sector \( (-\pi/n, \pi/n] \).

---

## Problems 1 – 14: Image under \( w = z^2 \)

### Problem 1: The ray \( \arg(z) = \pi/3 \)
* Under \( w = z^2 \), the argument is doubled: \( \arg(w) = 2(\pi/3) = 2\pi/3 \).
* **Image:** The ray \( \arg(w) = 2\pi/3 \).

### Problem 2: The ray \( \arg(z) = -3\pi/4 \)
* Under \( w = z^2 \), the argument is doubled: \( \arg(w) = 2(-3\pi/4) = -3\pi/2 \equiv \pi/2 \pmod{2\pi} \).
* **Image:** The ray \( \arg(w) = \pi/2 \) (positive imaginary axis).

### Problem 3: The line \( x = 3 \)
* This is a vertical line. Using the mapping equations \( u = x^2 - y^2 \) and \( v = 2xy \):
  \[
  u = 9 - y^2, \quad v = 6y \implies y = \frac{v}{6}
  \]
  Substitute \( y \) into \( u \):
  \[
  u = 9 - \left(\frac{v}{6}\right)^2 = 9 - \frac{v^2}{36}
  \]
* **Image:** The parabola \( u = 9 - \frac{v^2}{36} \).

### Problem 4: The line \( y = -5 \)
* This is a horizontal line.
  \[
  u = x^2 - 25, \quad v = -10x \implies x = -\frac{v}{10}
  \]
  Substitute \( x \) into \( u \):
  \[
  u = \left(-\frac{v}{10}\right)^2 - 25 = \frac{v^2}{100} - 25
  \]
* **Image:** The parabola \( u = \frac{v^2}{100} - 25 \).

### Problem 5: The line \( y = -1/4 \)
* This is a horizontal line.
  \[
  u = x^2 - \frac{1}{16}, \quad v = -\frac{x}{2} \implies x = -2v
  \]
  Substitute \( x \) into \( u \):
  \[
  u = (-2v)^2 - \frac{1}{16} = 4v^2 - \frac{1}{16}
  \]
* **Image:** The parabola \( u = 4v^2 - \frac{1}{16} \).

### Problem 6: The line \( x = 3/2 \)
* This is a vertical line.
  \[
  u = \frac{9}{4} - y^2, \quad v = 3y \implies y = \frac{v}{3}
  \]
  Substitute \( y \) into \( u \):
  \[
  u = \frac{9}{4} - \frac{v^2}{9}
  \]
* **Image:** The parabola \( u = \frac{9}{4} - \frac{v^2}{9} \).

### Problem 7: The positive imaginary axis
* This is the ray \( \arg(z) = \pi/2 \).
* Under \( w = z^2 \), the argument is doubled: \( \arg(w) = \pi \).
* **Image:** The negative real axis, i.e., the ray \( v = 0, \, -\infty < u \le 0 \).

### Problem 8: The line \( y = x \)
* This line consists of two rays: \( \arg(z) = \pi/4 \) and \( \arg(z) = -3\pi/4 \).
* Under \( w = z^2 \), both rays map to \( \arg(w) = \pi/2 \) (since \( 2(\pi/4) = \pi/2 \) and \( 2(-3\pi/4) = -3\pi/2 \equiv \pi/2 \)).
* **Image:** The positive imaginary axis, i.e., the ray \( u = 0, \, 0 \le v < \infty \).

### Problem 9: The circular arc \( |z| = 1/2, \, 0 \le \arg(z) \le \pi \)
* The modulus is squared: \( |w| = (1/2)^2 = 1/4 \).
* The argument is doubled: \( 0 \le \arg(w) \le 2\pi \).
* **Image:** The entire circle \( |w| = 1/4 \).

### Problem 10: The circular arc \( |z| = 4/3, \, -\pi/2 \le \arg(z) \le \pi/6 \)
* The modulus is squared: \( |w| = (4/3)^2 = 16/9 \).
* The argument is doubled: \( -\pi \le \arg(w) \le \pi/3 \).
* **Image:** The circular arc \( |w| = 16/9 \) for \( -\pi \le \arg(w) \le \pi/3 \).

### Problem 11: The triangle with vertices \( 0, 1, 1+i \)
* The boundary segments are:
  1. **Segment from \( 0 \) to \( 1 \):** \( y = 0, \, 0 \le x \le 1 \implies v = 0, \, 0 \le u \le 1 \).
  2. **Segment from \( 0 \) to \( 1+i \):** \( y = x, \, 0 \le x \le 1 \implies u = 0, \, 0 \le v \le 2 \).
  3. **Segment from \( 1 \) to \( 1+i \):** \( x = 1, \, 0 \le y \le 1 \implies u = 1 - v^2/4 \) for \( 0 \le v \le 2 \).
* **Image:** The region bounded by the real segment \( [0, 1] \), the imaginary segment \( [0, 2i] \), and the parabolic arc \( u = 1 - v^2/4 \) for \( 0 \le v \le 2 \).

### Problem 12: The triangle with vertices \( 0, 1+2i, -1+2i \)
* The boundary segments are:
  1. **Segment from \( 0 \) to \( 1+2i \):** \( z(t) = t(1+2i) \implies w(t) = t^2(-3+4i) \), which is the straight line segment from \( 0 \) to \( -3+4i \).
  2. **Segment from \( 0 \) to \( -1+2i \):** \( z(t) = t(-1+2i) \implies w(t) = t^2(-3-4i) \), which is the straight line segment from \( 0 \) to \( -3-4i \).
  3. **Segment from \( -1+2i \) to \( 1+2i \):** \( y = 2, \, -1 \le x \le 1 \implies u = x^2 - 4, \, v = 4x \implies u = v^2/16 - 4 \) for \( -4 \le v \le 4 \).
* **Image:** The region bounded by the straight segments from \( 0 \) to \( -3 \pm 4i \), and the parabolic arc \( u = v^2/16 - 4 \) for \( -4 \le v \le 4 \).

### Problem 13: The square with vertices \( 0, 1, 1+i, i \)
* The boundary segments map as follows:
  1. **Segment from \( 0 \) to \( 1 \):** maps to \( [0, 1] \) on the real axis.
  2. **Segment from \( 0 \) to \( i \):** maps to \( [-1, 0] \) on the real axis (since \( (iy)^2 = -y^2 \)).
  3. **Segment from \( 1 \) to \( 1+i \):** maps to the parabolic arc \( u = 1 - v^2/4 \) for \( 0 \le v \le 2 \).
  4. **Segment from \( i \) to \( 1+i \):** lies on \( y=1, \, 0 \le x \le 1 \implies u = x^2 - 1, \, v = 2x \implies u = v^2/4 - 1 \) for \( 0 \le v \le 2 \).
* **Image:** The region in the upper half-plane bounded by the real segment \( [-1, 1] \) and the two parabolic arcs \( u = 1 - v^2/4 \) and \( u = v^2/4 - 1 \) for \( 0 \le v \le 2 \).

### Problem 14: The polygon with vertices \( 0, 1, 1+i, -1+i \)
* The boundary segments map as follows:
  1. **Segment from \( 0 \) to \( 1 \):** maps to \( [0, 1] \) on the real axis.
  2. **Segment from \( 0 \) to \( -1+i \):** lies on \( y = -x, \, -1 \le x \le 0 \implies w(t) = t^2(-2i) \). This maps to the segment \( [0, -2i] \) on the imaginary axis.
  3. **Segment from \( 1 \) to \( 1+i \):** maps to the parabolic arc \( u = 1 - v^2/4 \) for \( 0 \le v \le 2 \).
  4. **Segment from \( -1+i \) to \( 1+i \):** lies on \( y=1, \, -1 \le x \le 1 \implies u = v^2/4 - 1 \) for \( -2 \le v \le 2 \).
* **Image:** The region bounded by the real segment \( [0, 1] \), the imaginary segment \( [0, -2i] \), the parabolic arc \( u = 1 - v^2/4 \) (for \( 0 \le v \le 2 \)), and the parabolic arc \( u = v^2/4 - 1 \) (for \( -2 \le v \le 2 \)).

---

## Problems 15 – 20: Compositions

### Problem 15: The ray \( \arg(z) = \pi/3 \); \( f(z) = 2z^2 + 1 - i \)
* Under \( w_1 = z^2 \), the ray maps to \( \arg(w_1) = 2\pi/3 \).
* Multiplying by 2 and translating by \( 1 - i \) shifts the origin of the ray to \( 1 - i \).
* **Image:** The ray emanating from \( 1 - i \) and extending in the direction \( 2\pi/3 \), containing the point \( \sqrt{3} - 1 - i \) (note: the endpoint \( 1 - i \) is not included).

### Problem 16: The line segment from \( 0 \) to \( -1+i \); \( f(z) = \sqrt{2}z^2 + 2 - i \)
* The segment has vertices \( 0 \) and \( -1+i \). Under \( w_1 = z^2 \), it maps to the imaginary segment from \( 0 \) to \( -2i \).
* Under \( f(z) = \sqrt{2}w_1 + 2 - i \):
  * \( 0 \to 2 - i \)
  * \( -2i \to -2\sqrt{2}i + 2 - i = 2 - i(2\sqrt{2} + 1) \)
* **Image:** The line segment from \( 2 - i \) to \( 2 - i(2\sqrt{2} + 1) \).

### Problem 17: The line \( x = 2 \); \( f(z) = iz^2 - 3 \)
* Under \( w_1 = z^2 \), \( x=2 \) maps to the parabola \( u_1 = 4 - \frac{v_1^2}{16} \).
* Under \( w = i w_1 - 3 \):
  * Multiplication by \( i \) rotates the parabola counterclockwise by \( \pi/2 \), swapping axes: \( u_2 = -v_1 \) and \( v_2 = u_1 \implies v_2 = 4 - \frac{u_2^2}{16} \).
  * Translation by \( -3 \) shifts the real axis: \( u = u_2 - 3 \implies u_2 = u + 3 \).
* **Image:** The parabola \( v = 4 - \frac{(u+3)^2}{16} \).

### Problem 18: The line \( y = -3 \); \( f(z) = -z^2 + i \)
* Under \( w_1 = z^2 \), \( y=-3 \) maps to the parabola \( u_1 = \frac{v_1^2}{36} - 9 \).
* Under \( w = -w_1 + i \):
  * Negation rotates the parabola by \( \pi \): \( u_2 = -u_1, \, v_2 = -v_1 \implies u_2 = 9 - \frac{v_2^2}{36} \).
  * Translation by \( i \) shifts the imaginary axis: \( v = v_2 + 1 \implies v_2 = v - 1 \).
* **Image:** The parabola \( u = 9 - \frac{(v-1)^2}{36} \).

### Problem 19: The circular arc \( |z| = 2, \, 0 \le \arg(z) \le \pi/2 \); \( f(z) = \frac{1}{4}e^{i\pi/4}z^2 \)
* Under \( w_1 = z^2 \), the arc maps to \( |w_1| = 4, \, 0 \le \arg(w_1) \le \pi \).
* Under \( w = \frac{1}{4}e^{i\pi/4} w_1 \):
  * Modulus: \( |w| = \frac{1}{4}(4) = 1 \).
  * Argument: \( \pi/4 \le \arg(w) \le \pi + \pi/4 = 5\pi/4 \).
* **Image:** The circular arc \( |w| = 1 \) for \( \frac{1}{4}\pi \le \arg(w) \le \frac{5}{4}\pi \).

### Problem 20: The triangle with vertices \( 0, 1, 1+i \); \( f(z) = -\frac{1}{4}iz^2 + 1 \)
* Let's map the boundary curves of the image region under \( w_1 = z^2 \):
  1. The real segment \( [0, 1] \) maps to the line segment from \( f(0) = 1 \) to \( f(1) = 1 - \frac{1}{4}i \).
  2. The imaginary segment \( [0, 2i] \) maps to the real segment from \( f(0) = 1 \) to \( f(1+i) = 3/2 \).
  3. The parabolic arc \( u_1 = 1 - v_1^2/4 \) maps as follows:
     \[
     w = -\frac{1}{4}i(u_1 + i v_1) + 1 = \frac{v_1}{4} + i\left(1 - \frac{u_1}{4}\right)
     \]
     Let \( u = v_1/4 \implies v_1 = 4u \) and \( v = 1 - u_1/4 \implies u_1 = 4(1-v) \).
     Substitute into \( u_1 = 1 - v_1^2/4 \):
     \[
     4(1-v) = 1 - 4u^2 \implies v = u^2 + \frac{3}{4}
     \]
     Since \( 0 \le v_1 \le 2 \implies 0 \le u \le 1/2 \).
* **Image:** The region bounded by the straight segments from \( 1 \) to \( 1 - \frac{1}{4}i \), from \( 1 \) to \( 3/2 \), and the parabolic arc \( v = u^2 + 3/4 \) for \( 0 \le u \le 1/2 \).

---

## Problems 21 – 24: Higher Powers

### Problem 21: Image of the ray \( \arg(z) = \pi/6 \)
* **(a) \( f(z) = z^3 \implies \arg(w) = 3(\pi/6) = \pi/2 \).**
  * **Image:** The ray \( \arg(w) = \pi/2 \) (positive imaginary axis).
* **(b) \( f(z) = z^4 \implies \arg(w) = 4(\pi/6) = 2\pi/3 \).**
  * **Image:** The ray \( \arg(w) = 2\pi/3 \).
* **(c) \( f(z) = z^5 \implies \arg(w) = 5(\pi/6) = 5\pi/6 \).**
  * **Image:** The ray \( \arg(w) = 5\pi/6 \).

### Problem 22: Image of the first quadrant \( 0 \le \arg(z) \le \pi/2 \)
* **(a) \( f(z) = z^2 \implies 0 \le \arg(w) \le \pi \).**
  * **Image:** The upper half-plane \( \operatorname{Im}(w) \ge 0 \).
* **(b) \( f(z) = z^3 \implies 0 \le \arg(w) \le 3\pi/2 \).**
  * **Image:** The three-quarter plane consisting of Q1, Q2, and Q3.
* **(c) \( f(z) = z^4 \implies 0 \le \arg(w) \le 2\pi \).**
  * **Image:** The entire complex plane \( \mathbb{C} \).

### Problem 23: Image of the region \( 1 \le |z| \le 2, \, \pi/4 \le \arg(z) \le 3\pi/4 \)
* **(a) \( f(z) = z^2 \):**
  * Modulus: \( 1 \le |w| \le 4 \).
  * Argument: \( \pi/2 \le \arg(w) \le 3\pi/2 \).
  * **Image:** The region \( 1 \le |w| \le 4, \, \pi/2 \le \arg(w) \le 3\pi/2 \).
* **(b) \( f(z) = z^3 \):**
  * Modulus: \( 1 \le |w| \le 8 \).
  * Argument: \( 3\pi/4 \le \arg(w) \le 9\pi/4 \).
  * **Image:** The region \( 1 \le |w| \le 8, \, 3\pi/4 \le \arg(w) \le 9\pi/4 \).
* **(c) \( f(z) = z^4 \):**
  * Modulus: \( 1 \le |w| \le 16 \).
  * Argument: \( \pi \le \arg(w) \le 3\pi \), which covers the full \( 2\pi \) angular range.
  * **Image:** The annulus \( 1 \le |w| \le 16 \).

### Problem 24: Image of the region in Problem 23 under:
* **(a) \( f(z) = 3z^2 + i \):**
  * **Image:** The translated region: \( \{ w \in \mathbb{C} : 3 \le |w - i| \le 12, \, \pi/2 \le \arg(w - i) \le 3\pi/2 \} \).
* **(b) \( f(z) = (i + 1)z^3 + 1 \):**
  * Note \( 1+i = \sqrt{2}e^{i\pi/4} \). The region is rotated by \( \pi/4 \) and scaled by \( \sqrt{2} \), then shifted by 1.
  * **Image:** \( \{ w \in \mathbb{C} : \sqrt{2} \le |w - 1| \le 8\sqrt{2}, \, \pi \le \arg(w - 1) \le 5\pi/2 \} \).
* **(c) \( f(z) = \frac{1}{2}z^4 - i \):**
  * **Image:** The translated annulus: \( \{ w \in \mathbb{C} : \frac{1}{2} \le |w + i| \le 8 \} \).

---

## Problems 25 – 30: Principal Roots Evaluations

### Problem 25: \( z^{1/2} \) at \( z = -i \)
* \( -i = e^{-i\pi/2} \implies \operatorname{Arg}(-i) = -\pi/2 \).
* \( z^{1/2} = 1^{1/2} e^{i(-\pi/4)} = \cos(-\pi/4) + i\sin(-\pi/4) = \boxed{\frac{\sqrt{2}}{2} - \frac{\sqrt{2}}{2}i} \).

### Problem 26: \( z^{1/2} \) at \( z = 2 + i \)
* \( |z| = \sqrt{5} \). Let \( w = u+iv = z^{1/2} \) with \( u > 0 \):
  \[
  u = \sqrt{\frac{\sqrt{5} + 2}{2}}, \quad v = \sqrt{\frac{\sqrt{5} - 2}{2}}
  \]
* **Answer:** \( \boxed{\sqrt{\frac{\sqrt{5} + 2}{2}} + i\sqrt{\frac{\sqrt{5} - 2}{2}}} \).

### Problem 27: \( z^{1/3} \) at \( z = -1 \)
* \( -1 = e^{i\pi} \implies \operatorname{Arg}(-1) = \pi \).
* \( z^{1/3} = 1^{1/3} e^{i\pi/3} = \cos(\pi/3) + i\sin(\pi/3) = \boxed{\frac{1}{2} + \frac{\sqrt{3}}{2}i} \).

### Problem 28: \( z^{1/3} \) at \( z = -3 + 3i \)
* \( |-3 + 3i| = 3\sqrt{2} \), \( \operatorname{Arg}(-3+3i) = 3\pi/4 \).
* \( z^{1/3} = (3\sqrt{2})^{1/3} e^{i(3\pi/12)} = 18^{1/6}e^{i\pi/4} = 18^{1/6} \left(\frac{\sqrt{2}}{2} + i\frac{\sqrt{2}}{2}\right) = \boxed{\left(\frac{3}{2}\right)^{1/3}(1 + i)} \).

### Problem 29: \( z^{1/4} \) at \( z = -1 + \sqrt{3}i \)
* \( |-1 + \sqrt{3}i| = 2 \), \( \operatorname{Arg}(-1+\sqrt{3}i) = 2\pi/3 \).
* \( z^{1/4} = 2^{1/4} e^{i(2\pi/12)} = 2^{1/4} e^{i\pi/6} = 2^{1/4} \left(\frac{\sqrt{3}}{2} + \frac{1}{2}i\right) = \boxed{\frac{18^{1/4}}{2} + i\frac{2^{1/4}}{2}} \).

### Problem 30: \( z^{1/5} \) at \( z = -4\sqrt{3} + 4i \)
* \( |-4\sqrt{3} + 4i| = 8 \), \( \operatorname{Arg}(-4\sqrt{3}+4i) = 5\pi/6 \).
* \( z^{1/5} = 8^{1/5} e^{i(5\pi/30)} = 2^{3/5} e^{i\pi/6} = 2^{3/5} \left(\frac{\sqrt{3}}{2} + \frac{1}{2}i\right) = \boxed{\frac{\sqrt{3}}{2^{2/5}} + i\frac{1}{2^{2/5}}} \).

---

## Problems 31 – 40: Image under \( w = z^{1/2} \)

### Problem 31: The ray \( \arg(z) = \pi/4 \)
* **Image:** The ray \( \arg(w) = \pi/8 \).

### Problem 32: The ray \( \arg(z) = -2\pi/3 \)
* **Image:** The ray \( \arg(w) = -\pi/3 \).

### Problem 33: The positive imaginary axis
* **Image:** The ray \( \arg(w) = \pi/4 \).

### Problem 34: The negative real axis
* The negative real axis corresponds to \( \operatorname{Arg}(z) = \pi \).
* **Image:** The ray \( \arg(w) = \pi/2 \) (positive imaginary axis).

### Problem 35: The arc \( |z| = 9, \, -\pi/2 \le \arg(z) \le \pi \)
* Modulus: \( |w| = \sqrt{9} = 3 \).
* Argument: \( -\pi/4 \le \arg(w) \le \pi/2 \).
* **Image:** The circular arc \( |w| = 3 \) for \( -\frac{1}{4}\pi \le \arg(w) \le \frac{1}{2}\pi \).

### Problem 36: The arc \( |z| = 4/7, \, -\pi/2 \le \arg(z) \le \pi/4 \)
* Modulus: \( |w| = 2/\sqrt{7} \).
* Argument: \( -\pi/4 \le \arg(w) \le \pi/8 \).
* **Image:** The circular arc \( |w| = \frac{2}{\sqrt{7}} \) for \( -\frac{1}{4}\pi \le \arg(w) \le \frac{1}{8}\pi \).

### Problem 37: The parabola \( x = 9/4 - y^2/9 \)
* Match with the parabola equation \( x = k^2 - \frac{y^2}{4k^2} \):
  * \( k^2 = 9/4 \implies k = 3/2 \) (since \( u = k > 0 \) for the principal branch).
  * \( \frac{1}{4k^2} = \frac{1}{9} \) (consistent).
* **Image:** The vertical line \( u = 3/2 \).

### Problem 38: The parabola \( x = y^2/10 - 5/2 \)
* Match with the parabola equation \( x = \frac{y^2}{4k^2} - k^2 \):
  * \( k^2 = 5/2 \implies k = \sqrt{5/2} = \sqrt{10}/2 \).
  * \( \frac{1}{4k^2} = \frac{1}{10} \) (consistent).
* **Image:** The union of the two half-lines \( v = \sqrt{10}/2 \) (for \( u \ge 0 \)) and \( v = -\sqrt{10}/2 \) (for \( u > 0 \)).

### Problem 39: The region \( x \ge 4 - y^2/16 \)
* The boundary parabola \( x = 4 - y^2/16 \) corresponds to \( k = 2 \), mapping to the line \( u = 2 \).
* The region lies to the right of the parabola (e.g., contains the point \( z = 4 \implies w = 2 \)).
* **Image:** The half-plane \( u \ge 2 \).

### Problem 40: The sector in Figure 2.38: \( 0 \le |z| \le R, \, 0 \le \arg(z) \le 3\pi/4 \)
* Modulus: \( 0 \le |w| \le \sqrt{R} \).
* Argument: \( 0 \le \arg(w) \le 3\pi/8 \).
* **Image:** The sector \( 0 \le |w| \le \sqrt{R}, \, 0 \le \arg(w) \le 3\pi/8 \).

---

## Focus on Concepts (Problems 41 – 57)

### Problem 41
* Under \( w = z^2 \), we have \( u = x^2 - y^2 \) and \( v = 2xy \).
* For the hyperbola \( xy = k \implies v = 2k \).
* **Image:** The horizontal line \( v = 2k \).

### Problem 42
* Under \( w = z^2 \), we have \( u = x^2 - y^2 \) and \( v = 2xy \).
* For the hyperbola \( x^2 - y^2 = k \implies u = k \).
* **Image:** The vertical line \( u = k \).

### Problem 43
* We want \( 2\arg(z) = \pi/2 + 2n\pi \implies \arg(z) = \pi/4 + n\pi \).
* **Two sets:** The ray \( \arg(z) = \pi/4 \) and the ray \( \arg(z) = -3\pi/4 \).

### Problem 44
* The image set \( S' \) is bounded by \( v = 0 \), \( u = -v \), and \( u = 1 - v^2/4 \).
* In the \( z \)-plane, these boundaries map back under \( z = w^{1/2} \) as follows:
  * \( v = 0 \implies y = 0 \) (real axis).
  * \( \arg(w) = 3\pi/4 \implies \arg(z) = 3\pi/8 \) or \( \arg(z) = -5\pi/8 \).
  * \( u = 1 - v^2/4 \implies x = 1 \) or \( x = -1 \).
* **Two sets:**
  1. The region in Q1 bounded by the real axis, the ray \( \arg(z) = 3\pi/8 \), and the vertical line \( x = 1 \).
  2. The region in Q3 bounded by the imaginary axis, the ray \( \arg(z) = -5\pi/8 \), and the vertical line \( x = -1 \).

### Problem 45
* Let \( z' = iz = -y + ix \). If \( z \) is on the line \( y = k \), then \( z' \) is on the vertical line \( x' = -k \).
* The vertical line \( x' = -k \) maps under \( w' = z'^2 \) to the parabola \( u' = k^2 - \frac{v'^2}{4k^2} \).
* Since \( w = z^2 = (-iz')^2 = -z'^2 = -w' \):
  \[
  u = -u' = -\left(k^2 - \frac{v^2}{4k^2}\right)
  \]
  This completes the proof.

### Problem 46
* We want \( 3\arg(z) = \pi + 2n\pi \implies \arg(z) = \pi/3 + 2n\pi/3 \).
* **Three sets:** The rays \( \arg(z) = \pi/3 \), \( \arg(z) = \pi \), and \( \arg(z) = -\pi/3 \).

### Problem 47
* We want \( |z|^4 = 4 \implies |z| = \sqrt{2} \).
* **Four sets:** The four quarter-circle arcs of \( |z| = \sqrt{2} \) defined by:
  1. \( |z| = \sqrt{2}, \, 0 \le \arg(z) < \pi/2 \)
  2. \( |z| = \sqrt{2}, \, \pi/2 \le \arg(z) < \pi \)
  3. \( |z| = \sqrt{2}, \, -\pi \le \arg(z) < -\pi/2 \)
  4. \( |z| = \sqrt{2}, \, -\pi/2 \le \arg(z) < 0 \)

### Problem 48
* A line through the origin consists of rays \( \arg(z) = \theta_0 \) and \( \arg(z) = \theta_0 + \pi \).
* Under \( w = z^n \), these map to rays \( \arg(w) = n\theta_0 \) and \( \arg(w) = n\theta_0 + n\pi \).
* If \( n \) is odd, \( n\pi \) is an odd multiple of \( \pi \), so the two image rays are in opposite directions, forming a full straight line.
* If \( n \) is even, \( n\pi \) is a multiple of \( 2\pi \), so both rays map to the same ray. The image is a ray, not a full line.
* **Answer:** Only for odd \( n \ge 3 \) do they map onto lines. For even \( n \), they map onto rays.

### Problem 49
* **Yes**. As shown in Problem 37, a parabola of the form \( x = k^2 - \frac{y^2}{4k^2} \) (which has its vertex on the x-axis at \( x = k^2 \)) maps to the vertical line \( u = k \) under the principal square root function.

### Problem 50
* **(a)** Let \( f(z_1) = f(z_2) \implies a z_1 + b = a z_2 + b \implies a z_1 = a z_2 \). Since \( a \ne 0 \), dividing by \( a \) gives \( z_1 = z_2 \). Hence, \( f \) is one-to-one on \( \mathbb{C} \).
* **(b) Inverse:** \( w = az + b \implies z = \frac{w - b}{a} \implies \boxed{f^{-1}(w) = \frac{w - b}{a}} \).

### Problem 51
* **(a)** Let \( f(z_1) = f(z_2) \implies \frac{a}{z_1} + b = \frac{a}{z_2} + b \implies \frac{a}{z_1} = \frac{a}{z_2} \). Since \( a \ne 0 \), \( z_1 = z_2 \). Hence, \( f \) is one-to-one.
* **(b) Inverse:** \( w = \frac{a}{z} + b \implies z = \frac{a}{w - b} \implies \boxed{f^{-1}(w) = \frac{a}{w - b}} \).

### Problem 52: Image of \( \operatorname{Im}(z) \ge 0 \) (angular range \( [0, \pi] \))
* **(a) \( f(z) = z^{1/2} \implies \arg(w) \in [0, \pi/2] \).**
  * **Image:** The first quadrant \( u \ge 0, \, v \ge 0 \).
* **(b) \( f(z) = z^{1/3} \implies \arg(w) \in [0, \pi/3] \).**
  * **Image:** The sector \( 0 \le \arg(w) \le \pi/3 \).
* **(c) \( f(z) = z^{1/4} \implies \arg(w) \in [0, \pi/4] \).**
  * **Image:** The sector \( 0 \le \arg(w) \le \pi/4 \).

### Problem 53: Image of \( |z| \le 8, \, \pi/2 \le \arg(z) \le 3\pi/4 \)
* **(a) \( f(z) = z^{1/2} \):**
  * **Image:** The sector \( 0 \le |w| \le 2\sqrt{2}, \, \pi/4 \le \arg(w) \le 3\pi/8 \).
* **(b) \( f(z) = z^{1/3} \):**
  * **Image:** The sector \( 0 \le |w| \le 2, \, \pi/6 \le \arg(w) \le \pi/4 \).
* **(c) \( f(z) = z^{1/4} \):**
  * **Image:** The sector \( 0 \le |w| \le 8^{1/4}, \, \pi/8 \le \arg(w) \le 3\pi/16 \).

### Problem 54
* We want a sector of angle range \( 2\pi/3 \).
* Let \( f(z) = -z^{1/3} = e^{i\pi} z^{1/3} \).
* Since \( \operatorname{Arg}(z) \in (-\pi, \pi] \implies \arg(z^{1/3}) \in (-\pi/3, \pi/3] \).
* Multiplying by \( e^{i\pi} \) shifts the range to \( (\pi - \pi/3, \pi + \pi/3] = (2\pi/3, 4\pi/3] \).
* **Function:** \( \boxed{f(z) = -z^{1/3}} \).

### Problem 55
* The Riemann surface for \( f(z) = z^3 \) is constructed by taking three copies of the complex plane cut along the negative real axis (sheets \( S_1, S_2, S_3 \)).
* Join the lower edge of the cut on \( S_1 \) to the upper edge of the cut on \( S_2 \).
* Join the lower edge of the cut on \( S_2 \) to the upper edge of the cut on \( S_3 \).
* Join the lower edge of the cut on \( S_3 \) back to the upper edge of the cut on \( S_1 \).

### Problem 56
* **(a)** Let \( w = 2iz^2 - i \) on \( |z| \le 2, \, 0 \le \arg(z) \le \pi/2 \).
  * Let \( w_1 = z^2 \implies 0 \le |w_1| \le 4, \, 0 \le \arg(w_1) \le \pi \).
  * Let \( w_2 = 2i w_1 \implies |w_2| \le 8, \, \operatorname{Re}(w_2) \le 0 \) (left half-disk).
  * Let \( w = w_2 - i \).
  * The maximum modulus is \( M = |-8i - i| = 9 \).
  * The minimum modulus occurs when \( w_2 = i \) (which is inside the left half-disk), giving \( |w| = 0 \implies L = 0 \).
  * **Bounds:** \( \boxed{0 \le |2iz^2 - i| \le 9} \).
* **(b) Points achieving the bounds:**
  * For \( L = 0 \implies 2iz^2 = i \implies z^2 = 1/2 \implies z_0 = \boxed{\frac{\sqrt{2}}{2}} \).
  * For \( M = 9 \implies 2iz^2 = -8i \implies z^2 = -4 \implies z_1 = \boxed{2i} \).

### Problem 57
* **(a)** Let \( f(z) = \frac{1}{3}z^2 + 1 - i \) on \( 2 \le |z| \le 3, \, 0 \le \arg(z) \le \pi \).
  * Let \( w_2 = \frac{1}{3}z^2 \implies \frac{4}{3} \le |w_2| \le 3, \, 0 \le \arg(w_2) \le 2\pi \).
  * Let \( w = w_2 + 1 - i \).
  * The point \( c = -1 + i \) has modulus \( \sqrt{2} \approx 1.414 \). Since \( 4/3 \le \sqrt{2} \le 3 \), the point \( c \) lies in the domain of \( w_2 \).
  * Thus, we can choose \( w_2 = -1+i \implies w = 0 \), so the minimum modulus is \( L = 0 \).
  * The maximum modulus occurs at the boundary point farthest from \( c \), which is in the opposite direction on the outer circle \( |w_2| = 3 \):
    \[
    M = 3 + |c| = 3 + \sqrt{2}
    \]
  * **Bounds:** \( \boxed{0 \le |f(z)| \le 3 + \sqrt{2}} \).
* **(b) Points achieving the bounds:**
  * For \( L = 0 \implies z^2 = 3(-1+i) = -3 + 3i = 3\sqrt{2} e^{i3\pi/4} \implies z_0 = \boxed{\sqrt{3\sqrt{2}} e^{i3\pi/8}} \).
  * For \( M = 3+\sqrt{2} \implies z^2 = 3\left(3\frac{1-i}{\sqrt{2}}\right) = \frac{9}{\sqrt{2}} e^{-i\pi/4} = \frac{9}{\sqrt{2}} e^{i7\pi/4} \implies z_1 = \boxed{3 \cdot 2^{-1/4} e^{i7\pi/8}} \).


---

<a name="section-25-reciprocal-function"></a>
# Section 2.5 — Reciprocal Function
## Chapter 2 · Section 2.5 — Reciprocal Function
### Problems 1 – 30 · Complete Solutions

---

> **Key Concepts of the Reciprocal Function**
>
> 1. **Definition:** The reciprocal function is \( f(z) = 1/z \) for \( z \ne 0 \). In polar form:
>    \[
>    w = \frac{1}{r} e^{-i\theta}
>    \]
> 2. **Inversion and Reflection:** The reciprocal function can be viewed as inversion in the unit circle \( z \to \frac{1}{r}e^{i\theta} \) followed by reflection across the real axis \( w \to \frac{1}{r}e^{-i\theta} \).
> 3. **Mapping Lines and Circles:**
>    * A vertical line \( x = k \ne 0 \) maps to the circle \( |w - 1/(2k)| = 1/(2k) \).
>    * A horizontal line \( y = k \ne 0 \) maps to the circle \( |w + i/(2k)| = 1/(2k) \).
>    * Circles passing through the origin map to straight lines not passing through the origin.
>    * Circles not passing through the origin map to circles.
> 4. **Generalized Circles:** The equation \( A(x^2+y^2) + Bx + Cy + D = 0 \) represents a line if \( A = 0 \), and a circle if \( A \ne 0 \) and \( B^2 + C^2 - 4AD > 0 \). Under the reciprocal mapping, this maps to:
>    \[
>    D(u^2+v^2) + Bu - Cv + A = 0
>    \]

---

## Problems 1 – 10: Image under \( w = 1/z \)

### Problem 1: The circle \( |z| = 5 \)
* Since \( |w| = 1/|z| \):
* **Image:** The circle \( \boxed{|w| = 1/5} \).

### Problem 2: The semicircle \( |z| = 1/2, \, \pi/2 \le \arg(z) \le 3\pi/2 \)
* Modulus: \( |w| = 1/(1/2) = 2 \).
* Argument: \( \arg(w) = -\arg(z) \implies -3\pi/2 \le \arg(w) \le -\pi/2 \equiv \pi/2 \le \arg(w) \le 3\pi/2 \).
* **Image:** The semicircle \( \boxed{|w| = 2, \, \pi/2 \le \arg(w) \le 3\pi/2} \).

### Problem 3: The semicircle \( |z| = 3, \, -\pi/4 \le \arg(z) \le 3\pi/4 \)
* Modulus: \( |w| = 1/3 \).
* Argument: \( \arg(w) = -\arg(z) \implies -3\pi/4 \le \arg(w) \le \pi/4 \).
* **Image:** The semicircle \( \boxed{|w| = 1/3, \, -3\pi/4 \le \arg(w) \le \pi/4} \).

### Problem 4: The quarter circle \( |z| = 1/4, \, \pi/2 \le \arg(z) \le \pi \)
* Modulus: \( |w| = 4 \).
* Argument: \( \arg(w) = -\arg(z) \implies -\pi \le \arg(w) \le -\pi/2 \).
* **Image:** The quarter circle \( \boxed{|w| = 4, \, -\pi \le \arg(w) \le -\pi/2} \).

### Problem 5: The annulus \( 1/3 \le |z| \le 2 \)
* Modulus: \( 1/2 \le |w| \le 3 \).
* **Image:** The annulus \( \boxed{1/2 \le |w| \le 3} \).

### Problem 6: The region \( 1 \le |z| \le 4, \, 0 \le \arg(z) \le 2\pi/3 \)
* Modulus: \( 1/4 \le |w| \le 1 \).
* Argument: \( \arg(w) = -\arg(z) \implies -2\pi/3 \le \arg(w) \le 0 \).
* **Image:** The region \( \boxed{1/4 \le |w| \le 1, \, -2\pi/3 \le \arg(w) \le 0} \).

### Problem 7: The ray \( \arg(z) = \pi/4 \)
* **Image:** The ray \( \boxed{ \arg(w) = -\pi/4 } \).

### Problem 8: The line segment from \( -1 \) to \( 1 \) on the real axis excluding \( z = 0 \)
* The segment consists of \( 0 < x \le 1 \implies w = 1/x \ge 1 \) and \( -1 \le x < 0 \implies w = 1/x \le -1 \).
* **Image:** The union of two real intervals: \( \boxed{(-\infty, -1] \cup [1, \infty)} \) on the real axis.

### Problem 9: The line \( y = 4 \)
* This is a horizontal line \( y = k \) with \( k = 4 \). Using equation (6):
  \[
  \left| w + \frac{i}{2k} \right| = \frac{1}{2k} \implies \left| w + \frac{i}{8} \right| = \frac{1}{8}
  \]
* **Image:** The circle \( \boxed{|w + i/8| = 1/8} \).

### Problem 10: The line \( x = 1/6 \)
* This is a vertical line \( x = k \) with \( k = 1/6 \). Using equation (5):
  \[
  \left| w - \frac{1}{2k} \right| = \frac{1}{2k} \implies \boxed{|w - 3| = 3}
  \]
* **Image:** The circle \( |w - 3| = 3 \).

---

## Problems 11 – 14: Mapping Circles to Lines

*Recall that the circle \( |z - z_c| = r \) maps to a line if it passes through the origin \( z=0 \).*

### Problem 11: The circle \( |z + i| = 1 \)
* This circle contains the origin \( z=0 \) and center \( -i \).
* Matching with the horizontal circle formula \( |z + 1/(2ki)| = 1/(2k) \):
  \[
  \frac{1}{2k} = 1 \implies k = 1/2
  \]
* **Image:** The horizontal line \( \boxed{v = 1/2} \) (or \( \operatorname{Im}(w) = 1/2 \)).

### Problem 12: The circle \( |z + 1/(3i)| = 1/3 \implies |z - i/3| = 1/3 \)
* Center is \( i/3 \), radius is \( 1/3 \). Passes through the origin.
* Matching with \( |z + 1/(2ki)| = 1/(2k) \):
  \[
  \frac{1}{2ki} = -\frac{i}{3} \implies 2k = -3 \implies k = -3/2
  \]
* **Image:** The horizontal line \( \boxed{v = -3/2} \) (or \( \operatorname{Im}(w) = -3/2 \)).

### Problem 13: The circle \( |z - 2| = 2 \)
* Center is \( 2 \), radius is \( 2 \). Passes through the origin.
* Matching with \( |z - 1/(2k)| = 1/(2k) \):
  \[
  \frac{1}{2k} = 2 \implies k = 1/4
  \]
* **Image:** The vertical line \( \boxed{u = 1/4} \) (or \( \operatorname{Re}(w) = 1/4 \)).

### Problem 14: The circle \( |z + 1/4| = 1/4 \)
* Center is \( -1/4 \), radius is \( 1/4 \). Passes through the origin.
* Matching with \( |z - 1/(2k)| = 1/(2k) \):
  \[
  -\frac{1}{2k} = -\frac{1}{4} \implies k = -2
  \]
* **Image:** The vertical line \( \boxed{u = -2} \) (or \( \operatorname{Re}(w) = -2 \)).

---

## Problems 15 – 18: Shaded Regions

### Problem 15: The region \( S \) between the vertical lines \( x = -2 \) and \( x = -1 \)
* The line \( x = -1 \) maps to the circle \( |w + 1/2| = 1/2 \).
* The line \( x = -2 \) maps to the circle \( |w + 1/4| = 1/4 \).
* **Image:** The region bounded by the two circles: \( \boxed{\left| w + \frac{1}{4} \right| \ge \frac{1}{4} \quad \text{and} \quad \left| w + \frac{1}{2} \right| \le \frac{1}{2}} \).

### Problem 16: The region \( S \) inside the circle \( |z| = 3 \) in the first quadrant \( x \ge 0, \, y \ge 0 \)
* The first quadrant maps to the fourth quadrant (\( u \ge 0, \, v \le 0 \)).
* The interior \( |z| < 3 \) maps to the exterior \( |w| > 1/3 \).
* **Image:** The region in the fourth quadrant lying outside the circle \( |w| = 1/3 \) (defined by \( u \ge 0, \, v \le 0, \, |w| \ge 1/3 \)).

### Problem 17: The region \( S \) in Q3 bounded by \( |z| = 1/2 \), \( y = x \), and the real axis
* The quadrant is Q3, where \( \arg(z) \in [\pi, 5\pi/4] \).
* Under \( w = 1/z \), the argument becomes \( \arg(w) = -\arg(z) \in [-5\pi/4, -\pi] \equiv [3\pi/4, \pi] \) (first half of Q2).
* The boundary \( |z| = 1/2 \) maps to \( |w| = 2 \), and the interior \( |z| < 1/2 \) maps to the exterior \( |w| > 2 \).
* **Image:** The region bounded by \( v = 0 \), \( v = -u \), and \( |w| = 2 \) containing the point \( -3 + 2i \).

### Problem 18: The region \( S \) in Q1 bounded by \( x = 1 \) and \( y = 1 \)
* The line \( x = 1 \) maps to the disk \( |w - 1/2| \le 1/2 \).
* The line \( y = 1 \) maps to the disk \( |w + i/2| \le 1/2 \).
* The region \( x \ge 1, \, y \ge 1 \) maps to the intersection of the two disks.
* **Image:** The region bounded by the circles \( |w - 1/2| = 1/2 \) and \( |w + i/2| = 1/2 \).

---

## Problems 19 – 22: Compositions

### Problem 19: \( h(z) = \frac{2i}{z} + 1 \)
* **(a) Action:** Reciprocal mapping \( w_1 = 1/z \) followed by a rotation of \( \pi/2 \), magnification by 2, and translation by 1.
* **(b) Image of the line \( x = 4 \):**
  * Under \( 1/z \): maps to the circle \( |w_1 - 1/8| = 1/8 \).
  * Under \( 2iw_1 + 1 \): the center \( 1/8 \to 1 + i/4 \), and the radius is scaled by 2 to \( 1/4 \).
  * **Image Circle:** \( \boxed{|w - (1 + i/4)| = 1/4} \)
* **(c) Image of the circle \( |z + 2| = 2 \):**
  * Under \( 1/z \): since it passes through the origin, it maps to the vertical line \( u_1 = -1/4 \).
  * Under \( 2iw_1 + 1 \): \( w = 2i(-1/4 + i v_1) + 1 = (1 - 2v_1) - i/2 \).
  * **Image Line:** The horizontal line \( \boxed{v = -1/2} \).

### Problem 20: \( h(z) = \frac{1}{2iz - 1} \)
* **(a) Action:** Rotation by \( \pi/2 \), magnification by 2, and translation by \( -1 \), followed by reciprocal mapping.
* **(b) Image of the line \( y = 1 \):**
  * Under \( 2iz - 1 \): the line \( z = x+i \to w_1 = 2i(x+i) - 1 = -3 + 2ix \), which is the vertical line \( u_1 = -3 \).
  * Under \( 1/w_1 \): maps to the circle \( \boxed{|w + 1/6| = 1/6} \).
* **(c) Image of the circle \( |z + i| = 1/2 \):**
  * Under \( 2iz - 1 \): the center \( -i \to 1 \), and the radius becomes \( 2(1/2) = 1 \). This gives the circle \( |w_1 - 1| = 1 \).
  * Under \( 1/w_1 \): since the circle passes through the origin, it maps to the vertical line \( \boxed{u = 1/2} \).

### Problem 21: \( h(z) = 1/z^2 \)
* **(a) Composition:** \( h(z) = f(g(z)) \) where \( g(z) = z^2 \) and \( f(z) = 1/z \).
* **(b) Image of the circle \( |z + i/2| = 1/2 \):**
  * Under \( 1/z \): maps to the horizontal line \( v_1 = 1 \).
  * Under squaring \( w = w_1^2 \): maps to the parabola \( \boxed{u = \frac{v^2}{4} - 1} \).
* **(c) Image of the circle \( |z - 1| = 1 \):**
  * Under \( 1/z \): maps to the vertical line \( u_1 = 1/2 \).
  * Under squaring \( w = w_1^2 \): maps to the parabola \( \boxed{u = \frac{1}{4} - v^2} \).

### Problem 22: \( h(z) = \frac{3i}{z^2} + 1 + i \)
* **(a) Composition:** \( h(z) = T(M(R(f(g(z))))) \) where \( g(z)=z^2 \), \( f(z)=1/z \), \( R(z)=iz \), \( M(z)=3z \), and \( T(z)=z+1+i \).
* **(b) Image of the circle \( |z + i/2| = 1/2 \):**
  * Under \( 1/z^2 \): maps to the parabola \( u_1 = v_1^2/4 - 1 \).
  * Under rotation by \( \pi/2 \): becomes \( v_2 = u_2^2/4 - 1 \).
  * Under magnification by 3: becomes \( v_3 = u_3^2/12 - 3 \).
  * Under translation by \( 1+i \): becomes \( v - 1 = \frac{(u-1)^2}{12} - 3 \implies \boxed{v = \frac{(u-1)^2}{12} - 2} \).
* **(c) Image of the circle \( |z - 1| = 1 \):**
  * Under \( 1/z^2 \): maps to the parabola \( u_1 = 1/4 - v_1^2 \).
  * Under rotation by \( \pi/2 \): becomes \( v_2 = 1/4 - u_2^2 \).
  * Under magnification by 3: becomes \( v_3 = 3/4 - u_3^2/3 \).
  * Under translation by \( 1+i \): becomes \( v - 1 = 3/4 - \frac{(u-1)^2}{3} \implies \boxed{v = \frac{7}{4} - \frac{(u-1)^2}{3}} \).

---

## Focus on Concepts (Problems 23 – 30)

### Problem 23: Proof of vertical line mapping
* Let \( z = k + iy \) (\( k \ne 0 \)). Under \( w = 1/z = u+iv \):
  \[
  u = \frac{k}{k^2 + y^2}, \quad v = -\frac{y}{k^2 + y^2}
  \]
* Now evaluate the circle equation:
  \[
  \left(u - \frac{1}{2k}\right)^2 + v^2 = \left(\frac{k}{k^2+y^2} - \frac{1}{2k}\right)^2 + \left(-\frac{y}{k^2+y^2}\right)^2
  \]
  \[
  = \left(\frac{2k^2 - (k^2+y^2)}{2k(k^2+y^2)}\right)^2 + \frac{y^2}{(k^2+y^2)^2} = \frac{(k^2-y^2)^2 + 4k^2 y^2}{4k^2 (k^2+y^2)^2} = \frac{(k^2+y^2)^2}{4k^2 (k^2+y^2)^2} = \frac{1}{4k^2}
  \]
* Since this represents the circle centered at \( (1/(2k), 0) \) with radius \( 1/(2k) \), the proof is complete.

### Problem 24: Direct verification
* The circle \( |z - 1/2| = 1/2 \) has the equation \( (x - 1/2)^2 + y^2 = 1/4 \implies x^2 + y^2 = x \).
* Under \( w = 1/z \):
  \[
  u = \frac{x}{x^2 + y^2} = \frac{x}{x} = 1
  \]
* Since \( v = -\frac{y}{x^2+y^2} \) ranges over all real values, the image is the vertical line \( \operatorname{Re}(w) = 1 \).

### Problem 25
* **(a)** If \( A = 0 \), the equation is \( Bx + Cy + D = 0 \), which represents a straight line.
* **(b) Completing the square for \( A \ne 0 \):**
  \[
  x^2 + \frac{B}{A}x + y^2 + \frac{C}{A}y = -\frac{D}{A}
  \]
  \[
  \left(x + \frac{B}{2A}\right)^2 + \left(y + \frac{C}{2A}\right)^2 = \frac{B^2}{4A^2} + \frac{C^2}{4A^2} - \frac{D}{A} = \frac{B^2+C^2-4AD}{4A^2} = \frac{\Delta}{4A^2}
  \]
  This is a circle centered at \( \left(-\frac{B}{2A}, -\frac{C}{2A}\right) \) with radius \( \frac{\sqrt{\Delta}}{2A} \).

### Problem 26
* **(a)** Substituting polar equations: \( A r^2 + B r \cos\theta + C r \sin\theta + D = 0 \).
* **(b)** Since \( z = re^{i\theta} \implies w = 1/z = \frac{1}{r}e^{-i\theta} = \frac{1}{r}(\cos\theta - i\sin\theta) \).
* **(c)** We have \( u = \frac{1}{r}\cos\theta \implies \cos\theta = r u \), and \( v = -\frac{1}{r}\sin\theta \implies \sin\theta = -r v \).
* **(d)** Divide the polar equation in (a) by \( r^2 \):
  \[
  A + B \frac{\cos\theta}{r} + C \frac{\sin\theta}{r} + \frac{D}{r^2} = 0
  \]
  Substitute \( u \), \( v \), and \( u^2+v^2 = 1/r^2 \):
  \[
  A + Bu - Cv + D(u^2 + v^2) = 0 \implies D(u^2+v^2) + Bu - Cv + A = 0
  \]

### Problem 27: Line \( L \): \( Bx + Cy + D = 0 \) (\( A = 0 \))
* **(a) Image is a line:** When the \( u^2+v^2 \) coefficient in the image is zero: \( \boxed{D = 0} \) (i.e. the line passes through the origin).
* **(b) Slope comparison:** If \( D = 0 \implies Bu - Cv = 0 \implies v = (B/C)u \). The slope of \( L' \) is \( B/C \), whereas the slope of \( L \) is \( -B/C \). Thus, the slope of the image line is the negative of the slope of the original line.
* **(c) Image is a circle:** When \( \boxed{D \ne 0} \) (the line does not pass through the origin).
* **(d) Center and radius:** Center is \( \boxed{\left(-\frac{B}{2D}, \, \frac{C}{2D}\right)} \) and radius is \( \boxed{\frac{\sqrt{B^2+C^2}}{2D}} \).

### Problem 28: Circle \( S \): \( A(x^2+y^2) + Bx + Cy + D = 0 \) (\( A \ne 0 \))
* **(a) Image is a line:** When \( \boxed{D = 0} \) (the circle passes through the origin).
* **(b) Image is a circle:** When \( \boxed{D \ne 0} \) (the circle does not pass through the origin).
* **(c) Center and radius:** Center of \( S' \) is \( \boxed{\left(-\frac{B}{2D}, \, \frac{C}{2D}\right)} \) and radius is \( \boxed{\frac{\sqrt{B^2+C^2-4AD}}{2D}} \).

### Problem 29: Bounds of \( f(z) = \frac{1+i}{z} + 2 \) on \( 1 \le |z| \le 2 \)
* **(a)** Let \( w_2 = \frac{1+i}{z} \). For \( 1 \le |z| \le 2 \implies \frac{\sqrt{2}}{2} \le |w_2| \le \sqrt{2} \).
  * Let \( w = w_2 + 2 \). Since the annulus contains all directions:
  * Maximum distance from \( 2 \) is \( 2 + \sqrt{2} \).
  * Since \( c = -2 \) has modulus \( 2 > \sqrt{2} \), the closest point is in the direction of \( -2 \), giving a minimum distance of \( 2 - \sqrt{2} \).
  * **Bounds:** \( \boxed{2 - \sqrt{2} \le |f(z)| \le 2 + \sqrt{2}} \).
* **(b) Achieving points:**
  * Minimum is at \( w_2 = -\sqrt{2} \implies \frac{1+i}{z} = -\sqrt{2} \implies z_0 = \boxed{-\frac{\sqrt{2}}{2} - i\frac{\sqrt{2}}{2}} \).
  * Maximum is at \( w_2 = \sqrt{2} \implies \frac{1+i}{z} = \sqrt{2} \implies z_1 = \boxed{\frac{\sqrt{2}}{2} + i\frac{\sqrt{2}}{2}} \).

### Problem 30: Bounds of \( f(z) = \frac{1}{z+i} \) on \( x \ge 2 \)
* **(a)** Let \( z' = z + i \implies \operatorname{Re}(z') \ge 2 \). Under \( w = 1/z' \), this half-plane maps to the disk \( |w - 1/4| \le 1/4 \).
  * The maximum modulus in this disk is at \( w = 1/2 \).
  * **Upper Bound:** \( \boxed{M = 1/2} \).
* **(b) Achieving point:**
  * \( \frac{1}{z_0+i} = \frac{1}{2} \implies z_0 = \boxed{2 - i} \).


---

<a name="section-26-limits-and-continuity"></a>
# Section 2.6 — Limits and Continuity
## Chapter 2 · Section 2.6 — Limits and Continuity
### Problems 1 – 60 · Complete Solutions

---

> **Key Concepts of Limits and Continuity**
>
> 1. **Complex Limit:** The limit \( \lim_{z \to z_0} f(z) = L \) means that \( f(z) \) can be made arbitrarily close to \( L \) for all \( z \) sufficiently close to \( z_0 \) (with \( z \ne z_0 \)).
> 2. **Theorem 2.1 (Component Limits):** If \( f(z) = u(x, y) + i v(x, y) \) and \( L = u_0 + i v_0 \), then:
>    \[
>    \lim_{z \to z_0} f(z) = L \iff \lim_{(x,y) \to (x_0,y_0)} u(x, y) = u_0 \quad \text{and} \quad \lim_{(x,y) \to (x_0,y_0)} v(x, y) = v_0
>    \]
> 3. **Nonexistence of a Limit:** If \( f(z) \) approaches two different values as \( z \to z_0 \) along two different paths, then the complex limit does not exist.
> 4. **Continuity:** A function \( f \) is continuous at \( z_0 \) if:
>    \[
>    \lim_{z \to z_0} f(z) = f(z_0)
>    \]
> 5. **Branch Cuts:** Branches of multi-valued functions (like \( \operatorname{Arg}(z) \) or \( z^{1/2} \)) are discontinuous along their branch cuts (usually the negative real axis).

---

## Problems 1 – 8: Limits using Theorem 2.1

### Problem 1: \( \lim_{z \to 2i} (z^2 - \bar{z}) \)
* Let \( z = x+iy \implies z^2 - \bar{z} = (x^2 - y^2 - x) + i(2xy + y) \).
* As \( z \to 2i \implies x \to 0, \, y \to 2 \):
  * Real part: \( \lim_{(x,y) \to (0,2)} (x^2 - y^2 - x) = -4 \).
  * Imaginary part: \( \lim_{(x,y) \to (0,2)} (2xy + y) = 2 \).
* **Limit:** \( \boxed{-4 + 2i} \).

### Problem 2: \( \lim_{z \to 1+i} \frac{z - \bar{z}}{z + \bar{z}} \)
* Note that \( \frac{z - \bar{z}}{z + \bar{z}} = \frac{2iy}{2x} = i\frac{y}{x} \).
* As \( z \to 1+i \implies x \to 1, \, y \to 1 \):
  * Limit: \( \lim_{(x,y) \to (1,1)} i\frac{y}{x} = i \).
* **Limit:** \( \boxed{i} \).

### Problem 3: \( \lim_{z \to 1-i} (|z|^2 - i\bar{z}) \)
* Let \( z = x+iy \implies |z|^2 - i\bar{z} = (x^2 + y^2 - y) - ix \).
* As \( z \to 1-i \implies x \to 1, \, y \to -1 \):
  * Real part: \( 1 + 1 - (-1) = 3 \).
  * Imaginary part: \( -1 \).
* **Limit:** \( \boxed{3 - i} \).

### Problem 4: \( \lim_{z \to 3i} \frac{\operatorname{Im}(z^2)}{z + \operatorname{Re}(z)} \)
* \( z^2 = x^2 - y^2 + 2ixy \implies \operatorname{Im}(z^2) = 2xy \).
* The limit expression is \( \frac{2xy}{2x + iy} \).
* As \( z \to 3i \implies x \to 0, \, y \to 3 \):
  * Limit: \( \frac{2(0)(3)}{2(0) + 3i} = 0 \).
* **Limit:** \( \boxed{0} \).

### Problem 5: \( \lim_{z \to \pi i} e^z \)
* \( e^z = e^x\cos y + i e^x\sin y \).
* As \( z \to \pi i \implies x \to 0, \, y \to \pi \):
  * Real part: \( e^0\cos\pi = -1 \).
  * Imaginary part: \( e^0\sin\pi = 0 \).
* **Limit:** \( \boxed{-1} \).

### Problem 6: \( \lim_{z \to i} z e^z \)
* By continuity of \( z \) and \( e^z \), we can evaluate directly:
  \[
  \lim_{z \to i} z e^z = i e^i = i(\cos 1 + i\sin 1) = \boxed{-\sin 1 + i\cos 1}
  \]

### Problem 7: \( \lim_{z \to 2+i} (e^z + z) \)
* Evaluate directly:
  \[
  e^{2+i} + 2 + i = e^2(\cos 1 + i\sin 1) + 2 + i = \boxed{(2 + e^2\cos 1) + i(1 + e^2\sin 1)} \approx 5.9923 + 7.2177i
  \]

### Problem 8: \( \lim_{z \to i} \left( \log_e(x^2+y^2) + i\arctan\frac{y}{x} \right) \) with \( x > 0 \)
* As \( z \to i \implies x \to 0^+, \, y \to 1 \):
  * Real part: \( \log_e(1) = 0 \).
  * Imaginary part: \( \lim_{x \to 0^+} \arctan(1/x) = \pi/2 \).
* **Limit:** \( \boxed{i\frac{\pi}{2}} \).

---

## Problems 9 – 16: Limits using Algebraic Properties

### Problem 9: \( \lim_{z \to 2-i} (z^2 - z) \)
* Evaluate directly:
  \[
  (2-i)^2 - (2-i) = 4 - 4i - 1 - 2 + i = \boxed{1 - 3i}
  \]

### Problem 10: \( \lim_{z \to i} (z^5 - z^2 + z) \)
* Evaluate directly:
  \[
  i^5 - i^2 + i = i - (-1) + i = \boxed{1 + 2i}
  \]

### Problem 11: \( \lim_{z \to e^{i\pi/4}} \left( z + \frac{1}{z} \right) \)
* Since \( z = e^{i\pi/4} \implies 1/z = e^{-i\pi/4} \):
  \[
  z + 1/z = 2\cos(\pi/4) = \boxed{\sqrt{2}}
  \]

### Problem 12: \( \lim_{z \to 1+i} \frac{z^2 + 1}{z^2 - 1} \)
* Since \( (1+i)^2 = 2i \):
  \[
  \frac{2i + 1}{2i - 1} = \frac{1+2i}{-1+2i} = \frac{(1+2i)(-1-2i)}{5} = \frac{-1 - 4i + 4}{5} = \boxed{\frac{3}{5} - \frac{4}{5}i}
  \]

### Problem 13: \( \lim_{z \to -i} \frac{z^4 - 1}{z + i} \)
* Factor the numerator: \( z^4 - 1 = (z^2-1)(z-i)(z+i) \).
* Cancel the common factor \( z+i \) (since \( z \ne -i \)):
  \[
  \lim_{z \to -i} (z^2 - 1)(z - i) = ((-i)^2 - 1)(-i - i) = (-2)(-2i) = \boxed{4i}
  \]

### Problem 14: \( \lim_{z \to 2+i} \frac{z^2 - (2+i)^2}{z - (2+i)} \)
* Cancel the common factor \( z - (2+i) \):
  \[
  \lim_{z \to 2+i} (z + 2 + i) = 2 + i + 2 + i = \boxed{4 + 2i}
  \]

### Problem 15: \( \lim_{z \to z_0} \frac{(az+b) - (az_0+b)}{z-z_0} \)
* Simplify the numerator:
  \[
  \lim_{z \to z_0} \frac{a(z-z_0)}{z-z_0} = \boxed{a}
  \]

### Problem 16: \( \lim_{z \to -3+i\sqrt{2}} \frac{z + 3 - i\sqrt{2}}{z^2 + 6z + 11} \)
* Note that \( z^2 + 6z + 11 = (z + 3 - i\sqrt{2})(z + 3 + i\sqrt{2}) \).
* Cancel the common factor:
  \[
  \lim_{z \to -3+i\sqrt{2}} \frac{1}{z + 3 + i\sqrt{2}} = \frac{1}{-3+i\sqrt{2} + 3 + i\sqrt{2}} = \frac{1}{2i\sqrt{2}} = \boxed{-\frac{\sqrt{2}}{4}i}
  \]

---

## Problems 17 – 20: Directional Limits

### Problem 17: \( \lim_{z \to 0} \frac{\operatorname{Re}(z)}{\operatorname{Im}(z)} \)
* **(a) Along the line \( y = x \):** \( z = x+ix \implies \frac{x}{x} = \boxed{1} \).
* **(b) Along the imaginary axis:** \( z = iy \implies \frac{0}{y} = \boxed{0} \).
* **(c) Conclusion:** Since the two paths yield different limits (\( 1 \ne 0 \)), the limit **does not exist**.

### Problem 18: \( \lim_{z \to i} (|z| + i\operatorname{Arg}(iz)) \)
* Note \( iz = -y + ix \).
* **(a) Approach along unit circle from Q1:** Here \( z = e^{i\theta} \) with \( \theta \to \pi/2^- \implies iz = e^{i(\theta+\pi/2)} \). Since \( \theta + \pi/2 < \pi \), \( \operatorname{Arg}(iz) \to \pi \).
  * Limit: \( 1 + i\pi \).
* **(b) Approach along unit circle from Q2:** Here \( \theta \to \pi/2^+ \implies \theta + \pi/2 > \pi \). So the principal argument is \( \theta + \pi/2 - 2\pi = \theta - 3\pi/2 \to -\pi \).
  * Limit: \( 1 - i\pi \).
* **(c) Conclusion:** Since \( 1 + i\pi \ne 1 - i\pi \), the limit **does not exist**.

### Problem 19: \( \lim_{z \to 0} (z/\bar{z})^2 \)
* **(a) Along the real axis:** \( z = x \implies (x/x)^2 = \boxed{1} \).
* **(b) Along the imaginary axis:** \( z = iy \implies (iy/(-iy))^2 = (-1)^2 = \boxed{1} \).
* **(c) Explanation:** No. Checking two paths only proves *nonexistence* if they differ. To prove existence, one must show the same limit for all paths.
* **(d) Along the line \( y = x \):** \( z = x(1+i) \implies \bar{z} = x(1-i) \implies (z/\bar{z})^2 = (i)^2 = \boxed{-1} \).
* **(e) Conclusion:** Since the path \( y=x \) yields \( -1 \ne 1 \), the limit **does not exist**.

### Problem 20: \( \lim_{z \to 0} \left( \frac{2y^2}{x^2 + y^2} - \frac{x^2 - y^2}{y^2} i \right) \)
* Let \( z \to 0 \) along the line \( y = mx \):
  \[
  \lim_{z \to 0} \left( \frac{2m^2 x^2}{x^2(1+m^2)} - \frac{x^2(1-m^2)}{m^2 x^2}i \right) = \frac{2m^2}{1+m^2} - \frac{1-m^2}{m^2}i
  \]
* **(a) Along \( y = x \) (\( m=1 \)):** \( \frac{2}{2} - 0i = \boxed{1} \).
* **(b) Along \( y = -x \) (\( m=-1 \)):** \( \frac{2}{2} - 0i = \boxed{1} \).
* **(c) Explanation:** No. Path-dependence must be tested for all paths.
* **(d) Along \( y = 2x \) (\( m=2 \)):** \( \frac{8}{5} + \frac{3}{4}i \).
* **(e) Conclusion:** The limit **does not exist** since it depends on the slope \( m \).

---

## Problems 21 – 26: Limits Involving Infinity

### Problem 21: \( \lim_{z \to \infty} \frac{z^2 + iz - 2}{(1+2i)z^2} \)
* Divide numerator and denominator by \( z^2 \):
  \[
  \lim_{z \to \infty} \frac{1 + i/z - 2/z^2}{1 + 2i} = \frac{1}{1+2i} = \boxed{\frac{1}{5} - \frac{2}{5}i}
  \]

### Problem 22: \( \lim_{z \to \infty} \frac{iz + 1}{2z - i} \)
* Divide by \( z \):
  \[
  \lim_{z \to \infty} \frac{i + 1/z}{2 - i/z} = \frac{i}{2} = \boxed{\frac{1}{2}i}
  \]

### Problem 23: \( \lim_{z \to i} \frac{z^2 - 1}{z^2 + 1} \)
* Let's evaluate the reciprocal:
  \[
  \lim_{z \to i} \frac{z^2 + 1}{z^2 - 1} = \frac{0}{-2} = 0 \implies \lim_{z \to i} \frac{z^2 - 1}{z^2 + 1} = \boxed{\infty}
  \]

### Problem 24: \( \lim_{z \to -i/2} \frac{(1-i)z + i}{2z + i} \)
* Evaluate the reciprocal:
  \[
  \lim_{z \to -i/2} \frac{2z + i}{(1-i)z + i} = \frac{0}{-1/2 + i/2} = 0 \implies \boxed{\infty}
  \]

### Problem 25: \( \lim_{z \to \infty} \frac{z^2 - (2+3i)z + 1}{iz - 3} \)
* Evaluate using \( w = 1/z \):
  \[
  \lim_{w \to 0} \frac{i/w - 3}{1/w^2 - (2+3i)/w + 1} = \lim_{w \to 0} \frac{iw^2 - 3w^3}{1 - (2+3i)w + w^2} = 0 \implies \text{Limit is } \boxed{\infty}
  \]

### Problem 26: \( \lim_{z \to i} \frac{z^2 + 1}{z^2 + z + 1 - i} \)
* Factor the numerator and denominator:
  \[
  \frac{z^2+1}{z^2+z+1-i} = \frac{(z-i)(z+i)}{(z-i)(z+1+i)} = \frac{z+i}{z+1+i} \quad (z \ne i)
  \]
* Evaluate:
  \[
  \lim_{z \to i} \frac{z+i}{z+1+i} = \frac{2i}{1+2i} = \frac{2i(1-2i)}{5} = \boxed{\frac{4}{5} + \frac{2}{5}i}
  \]

---

## Problems 27 – 34: Continuity Proofs

### Problem 27: \( f(z) = z^2 - iz + 3 - 2i \); \( z_0 = 2 - i \)
* Since \( f \) is a polynomial, it is continuous everywhere:
  \[
  \lim_{z \to z_0} f(z) = f(2-i) = (2-i)^2 - i(2-i) + 3 - 2i = 3 - 4i - 1 - 2i - 1 + 3 - 2i = \boxed{4 - 8i}
  \]
  Thus, \( f \) is continuous at \( z_0 \).

### Problem 28: \( f(z) = \frac{z^3 - 1}{z} \); \( z_0 = 3i \)
* The denominator is nonzero at \( z_0 \). Thus \( f \) is continuous:
  \[
  f(3i) = \frac{(3i)^3 - 1}{3i} = \frac{-27i - 1}{3i} = -9 + \frac{i}{3}
  \]

### Problem 29: \( f(z) = \frac{z^3}{z^3 + 3z^2 + z} \); \( z_0 = i \)
* Denominator at \( z_0 = i \): \( i^3 + 3i^2 + i = -3 \ne 0 \).
* Since the denominator is nonzero, the rational function is continuous:
  \[
  f(i) = \frac{-i}{-3} = \boxed{\frac{1}{3}i}
  \]

### Problem 30: \( f(z) = \frac{z - 3i}{z^2 + 2z - 1} \); \( z_0 = 1 + i \)
* Denominator at \( z_0 = 1+i \): \( (1+i)^2 + 2(1+i) - 1 = 1 + 4i \ne 0 \).
* Since the denominator is nonzero, \( f \) is continuous at \( z_0 \).

### Problem 31: \( f(z) = \begin{cases} \frac{z^3-1}{z-1}, & |z| \ne 1 \\ 3, & |z| = 1 \end{cases} \); \( z_0 = 1 \)
* Note that \( |z_0| = 1 \implies f(1) = 3 \).
* Evaluate the limit for \( z \ne 1 \):
  \[
  \lim_{z \to 1} \frac{z^3-1}{z-1} = \lim_{z \to 1} (z^2 + z + 1) = 3
  \]
* Since \( \lim_{z \to 1} f(z) = f(1) = 3 \), \( f \) is continuous at \( z_0 = 1 \).

### Problem 32: \( f(z) = \begin{cases} \frac{z^3-1}{z^2+z+1}, & |z| \ne 1 \\ \frac{-1+i\sqrt{3}}{2}, & |z| = 1 \end{cases} \); \( z_0 = \frac{1+i\sqrt{3}}{2} \)
* Note that \( |z_0| = 1 \implies f(z_0) = \frac{-1+i\sqrt{3}}{2} \).
* Evaluate the limit of the first branch as \( z \to z_0 \):
  \[
  \lim_{z \to z_0} \frac{z^3-1}{z^2+z+1} = \frac{z_0^3 - 1}{z_0^2 + z_0 + 1}
  \]
  Since \( z_0 = e^{i\pi/3} \implies z_0^3 = e^{i\pi} = -1 \):
  \[
  = \frac{-1 - 1}{1 + i\sqrt{3}} = \frac{-2}{1 + i\sqrt{3}} = \frac{-2(1 - i\sqrt{3})}{4} = \frac{-1 + i\sqrt{3}}{2}
  \]
* Since the limit matches the defined value, \( f \) is continuous at \( z_0 \).

### Problem 33: \( f(z) = \bar{z} - 3\operatorname{Re}(z) + i \); \( z_0 = 3 - 2i \)
* Since \( \bar{z} \) and \( \operatorname{Re}(z) \) are continuous everywhere:
  \[
  \lim_{z \to 3-2i} f(z) = f(3-2i) = (3+2i) - 3(3) + i = \boxed{-6 + 3i}
  \]

### Problem 34: \( f(z) = \frac{\operatorname{Re}(z)}{z} + iz - 2z^2 \); \( z_0 = e^{i\pi/4} \)
* Since \( z_0 \ne 0 \), all terms are continuous. Thus \( f \) is continuous at \( z_0 \).

---

## Problems 35 – 40: Discontinuity Proofs

### Problem 35: \( f(z) = \frac{z^2 + 1}{z + i} \); \( z_0 = -i \)
* The function value \( f(-i) \) is undefined (denominator is 0). Thus \( f \) is discontinuous.

### Problem 36: \( f(z) = \frac{1}{|z| - 1} \); \( z_0 = i \)
* Since \( |z_0| = 1 \), \( f(i) \) is undefined. Thus \( f \) is discontinuous.

### Problem 37: \( f(z) = \operatorname{Arg}(z) \); \( z_0 = -1 \)
* \( f(-1) = \pi \).
* If \( z \to -1 \) from Q2 (\( y > 0 \)): \( \operatorname{Arg}(z) \to \pi \).
* If \( z \to -1 \) from Q3 (\( y < 0 \)): \( \operatorname{Arg}(z) \to -\pi \).
* Since the two directional limits differ, the limit does not exist, so \( f \) is discontinuous.

### Problem 38: \( f(z) = \operatorname{Arg}(iz) \); \( z_0 = i \)
* At \( z_0 = i \implies iz_0 = -1 \), which lies on the branch cut of the principal argument. The limit does not exist, so \( f \) is discontinuous.

### Problem 39: \( f(z) = \begin{cases} \frac{z^3-1}{z-1}, & |z| \ne 1 \\ 3, & |z| = 1 \end{cases} \); \( z_0 = i \)
* \( f(i) = 3 \) (since \( |i| = 1 \)).
* Evaluate limit:
  \[
  \lim_{z \to i} f(z) = \lim_{z \to i} (z^2 + z + 1) = i^2 + i + 1 = i \ne 3
  \]
* The limit does not equal the function value, so \( f \) is discontinuous at \( z_0 = i \).

### Problem 40: \( f(z) = \begin{cases} \frac{z}{|z|}, & z \ne 0 \\ 1, & z = 0 \end{cases} \); \( z_0 = 0 \)
* \( f(0) = 1 \).
* Along the ray \( z = t e^{i\theta_0} \implies \lim_{t \to 0^+} f(te^{i\theta_0}) = e^{i\theta_0} \), which depends on the path direction. Thus the limit does not exist, so \( f \) is discontinuous.

---

## Problems 41 – 44: Largest Region of Continuity

### Problem 41: \( f(z) = \operatorname{Re}(z)\operatorname{Im}(z) \)
* **Region:** The entire complex plane \( \mathbb{C} \) (since \( xy \) is a real polynomial).

### Problem 42: \( f(z) = \bar{z} \)
* **Region:** The entire complex plane \( \mathbb{C} \) (since \( x \) and \( -y \) are continuous).

### Problem 43: \( f(z) = \frac{z - 1}{z\bar{z} - 4} \)
* **Region:** All points in the complex plane except those on the circle \( \boxed{|z| = 2} \) (where the denominator is 0).

### Problem 44: \( f(z) = \frac{z^2}{(|z| - 1)\operatorname{Im}(z)} \)
* **Region:** All points in the complex plane except those on the unit circle \( \boxed{|z| = 1} \) and the real axis \( \boxed{\operatorname{Im}(z) = 0} \).

---

## Focus on Concepts (Problems 45 – 56)

### Problem 45: Limit proofs using Theorem 2.1
* **(a) \( \lim_{z \to z_0} c = c \):**
  * Let \( u(x,y) = c \), \( v(x,y) = 0 \). Since \( \lim_{(x,y) \to (x_0,y_0)} c = c \) and \( \lim_{(x,y) \to (x_0,y_0)} 0 = 0 \), by Theorem 2.1, the limit is \( c \).
* **(b) \( \lim_{z \to z_0} z = z_0 \):**
  * Let \( f(z) = x + iy \). Since \( \lim x = x_0 \) and \( \lim y = y_0 \), by Theorem 2.1, the limit is \( x_0 + i y_0 = z_0 \).

### Problem 46: Proof that \( \lim_{z \to z_0} \bar{z} = \bar{z}_0 \)
* Let \( f(z) = x - iy \). Since \( \lim x = x_0 \) and \( \lim (-y) = -y_0 \), by Theorem 2.1, the limit is \( x_0 - i y_0 = \bar{z}_0 \).

### Problem 47
* **(a) \( \lim_{z \to z_0} \operatorname{Re}(z) = \operatorname{Re}(z_0) \):**
  * Use \( \operatorname{Re}(z) = \frac{z+\bar{z}}{2} \implies \lim \frac{z+\bar{z}}{2} = \frac{z_0+\bar{z}_0}{2} = \operatorname{Re}(z_0) \).
* **(b) \( \lim_{z \to z_0} \operatorname{Im}(z) = \operatorname{Im}(z_0) \):**
  * Use \( \operatorname{Im}(z) = \frac{z-\bar{z}}{2i} \implies \lim \frac{z-\bar{z}}{2i} = \frac{z_0-\bar{z}_0}{2i} = \operatorname{Im}(z_0) \).
* **(c) \( \lim_{z \to z_0} |z| = |z_0| \):**
  * Use \( |z| = \sqrt{z\bar{z}} \implies \lim \sqrt{z\bar{z}} = \sqrt{z_0\bar{z}_0} = |z_0| \).

### Problem 48: Epsilon-delta proof fill-in
* Proof: By Definition 2.8, \( \lim_{z \to z_0} z = z_0 \) if for every \( \epsilon > 0 \) there is a \( \delta > 0 \) such that \( |\boxed{z - z_0}| < \epsilon \) whenever \( 0 < |\boxed{z - z_0}| < \delta \). Setting \( \delta = \boxed{\epsilon} \) will ensure that the previous statement is true.

### Problem 49: Epsilon-delta proof fill-in
* Proof: By Definition 2.8, \( \lim_{z \to z_0} \bar{z} = \bar{z}_0 \) if for every \( \epsilon > 0 \) there is a \( \delta > 0 \) such that \( |\boxed{\bar{z} - \bar{z}_0}| < \epsilon \) whenever \( 0 < |\boxed{z - z_0}| < \delta \). By properties of complex modulus and conjugation, \( |\bar{z} - \bar{z}_0| = |\overline{z - z_0}| = |\boxed{z - z_0}| \). Therefore, if \( 0 < |z - z_0| < \delta \) and \( \delta = \boxed{\epsilon} \), then \( |\bar{z} - \bar{z}_0| < \epsilon \).

### Problem 50: Epsilon-delta proof for \( \lim_{z \to 1+i} ((1-i)z + 2i) = 2+2i \)
* **(a) Definition:** For any \( \epsilon > 0 \), there exists \( \delta > 0 \) such that \( |(1-i)z + 2i - (2+2i)| < \epsilon \) whenever \( 0 < |z - (1+i)| < \delta \).
* **(b) Factorization:**
  \[
  |(1-i)z - 2| = |1-i|\left|z - \frac{2}{1-i}\right| = \sqrt{2}|z - (1+i)| < \epsilon \implies |z - (1+i)| < \boxed{\frac{\epsilon}{\sqrt{2}}}
  \]
* **(c) Delta setting:** \( \delta = \boxed{\epsilon/\sqrt{2}} \).
* **(d) Proof:** For any \( \epsilon > 0 \), let \( \delta = \epsilon/\sqrt{2} \). If \( 0 < |z - (1+i)| < \delta \), then:
  \[
  |(1-i)z + 2i - (2+2i)| = |(1-i)(z - (1+i))| = \sqrt{2}|z - (1+i)| < \sqrt{2}\delta = \epsilon
  \]

### Problem 51
* **(a) Is \( \lim_{z \to z_0} f(z) = \lim_{z \to z_0} f(\bar{z}) \)?**
  * **No**. Counterexample: Let \( f(z) = z \). Then \( \lim_{z \to i} z = i \), but \( \lim_{z \to i} \bar{z} = -i \ne i \).
* **(b) Continuity of \( \overline{f(z)} \):**
  * **Yes**. If \( f \) is continuous, \( \lim_{z \to z_0} f(z) = f(z_0) \). By properties of limits, \( \lim_{z \to z_0} \overline{f(z)} = \overline{\lim f(z)} = \overline{f(z_0)} \). Hence \( \overline{f} \) is continuous.

### Problem 52: Axis-only limits
* **No**. If the limits along the real and imaginary axes are 0, the overall limit may still fail to exist if other directions (such as \( y = x \)) yield different values.

### Problem 53: Discontinuity of Arg(z)
* **(a)** Let \( z_0 \) lie on the negative real axis. If \( z \to z_0 \) from Q2 (\( y > 0 \)), then \( \operatorname{Arg}(z) \to \pi \). If \( z \to z_0 \) from Q3 (\( y < 0 \)), then \( \operatorname{Arg}(z) \to -\pi \). Since these directional limits do not agree, \( \operatorname{Arg}(z) \) is discontinuous.
* **(b)** The branch \( f_1(z) = \theta \) for \( -\pi < \theta < \pi \) is single-valued and continuous everywhere except on the branch cut.

### Problem 54: Three branches of \( F(z) = z^{1/3} \)
* Let \( z = r e^{i\theta} \) with \( 0 < \theta \le 2\pi \). The branches are:
  * \( \boxed{f_1(z) = r^{1/3} e^{i\theta/3}} \)
  * \( \boxed{f_2(z) = r^{1/3} e^{i(\theta + 2\pi)/3}} \)
  * \( \boxed{f_3(z) = r^{1/3} e^{i(\theta + 4\pi)/3}} \)

### Problem 55: \( F(z) = (z - 1 + i)^{1/2} \)
* **(a) Branch point:** \( \boxed{1 - i} \) (the root of the inside expression, around which winding changes the sign).
* **(b) Branches:** Let \( z - 1 + i = re^{i\theta} \) with \( -\pi < \theta \le \pi \).
  * \( f_1(z) = \sqrt{r}e^{i\theta/2} \) and \( f_2(z) = -\sqrt{r}e^{i\theta/2} \), with branch cut along the ray \( y = -1 \) for \( x \le 1 \).

### Problem 56: Branch points of \( F(z) = (z^2+1)^{1/2} \)
* Since \( z^2 + 1 = (z-i)(z+i) \), the branch points are \( \boxed{i} \) and \( \boxed{-i} \). Winding around either point individually swaps the sheets, while winding around both leaves the sheet unchanged.

---

## Computer Lab Assignments (Problems 57 – 60)

### Problem 57
* The continuous curve \( z(t) = -1/2 + i\frac{\sqrt{3}}{2}t \) crosses the negative real axis at \( t = 0 \).
* As \( t \to 0^- \implies \operatorname{Arg}(z) \to -\pi \). As \( t \to 0^+ \implies \operatorname{Arg}(z) \to \pi \).
* The image curve \( w(t) = z(t) + \operatorname{Arg}(z) \) has a jump of \( 2\pi i \) at \( t = 0 \), showing the discontinuity.

### Problem 58
* At \( t = 0 \), \( \operatorname{Arg}(z) \) jumps from \( -\pi \) to \( \pi \), which causes a jump in \( w(t) = \sqrt[4]{r}e^{i\theta/4} \) from argument \( -\pi/4 \) to \( \pi/4 \).

### Problem 59
* The circular path \( z(t) = -1/2 + 1/4 e^{it} \) crosses the negative real axis, causing a jump of \( 2\pi \) in \( \operatorname{Arg}(z) \), which translates to a jump of \( \pi \) in the argument of \( w(t) = \sqrt{r}e^{i\theta/2} \).

### Problem 60
* As \( z(t) \) wraps around the origin, it crosses the branch cuts for both \( \operatorname{Arg}(-z) \) and \( \operatorname{Arg}(iz) \), resulting in step-discontinuities in the image curve.


---

<a name="section-27-applications"></a>
# Section 2.7 — Applications
## Chapter 2 · Section 2.7 — Applications
### Problems 1 – 22 · Complete Solutions

---

> **Key Concepts of Complex Vector Fields and Planar Flows**
>
> 1. **Associated Vector Field:** For a complex function \( f(z) = u(x, y) + i v(x, y) \), the associated vector field is:
>    \[
>    \mathbf{F}(x, y) = u(x, y) \mathbf{i} + v(x, y) \mathbf{j}
>    \]
>    This means that at each point \( z = (x, y) \), we plot a vector with horizontal component \( u(x, y) \) and vertical component \( v(x, y) \).
> 2. **Streamlines:** The streamlines (paths of particles in the flow) satisfy the system:
>    \[
>    \frac{dx}{dt} = u(x, y), \quad \frac{dy}{dt} = v(x, y)
>    \]
>    Or in terms of a single first-order differential equation:
>    \[
>    \frac{dy}{dx} = \frac{v(x, y)}{u(x, y)}
>    \]

---

## Problems 1 – 8: Values in the Vector Field

For each problem, we evaluate the function at \( z = 1, \, 1+i, \, 1-i, \, i \).
* **Part (a):** These values are plotted as position vectors (starting at the origin).
* **Part (b):** These values are plotted with initial point \( z \) (as vectors in the field).

### Problem 1: \( f(z) = 2z - i \)
* **At \( z = 1 \):** \( f(1) = 2 - i \implies \) vector \( (2, -1) \) with initial point \( (1, 0) \).
* **At \( z = 1+i \):** \( f(1+i) = 2 + i \implies \) vector \( (2, 1) \) with initial point \( (1, 1) \).
* **At \( z = 1-i \):** \( f(1-i) = 2 - 3i \implies \) vector \( (2, -3) \) with initial point \( (1, -1) \).
* **At \( z = i \):** \( f(i) = i \implies \) vector \( (0, 1) \) with initial point \( (0, 1) \).

### Problem 2: \( f(z) = z^3 \)
* **At \( z = 1 \):** \( f(1) = 1 \implies \) vector \( (1, 0) \) with initial point \( (1, 0) \).
* **At \( z = 1+i \):** \( f(1+i) = -2 + 2i \implies \) vector \( (-2, 2) \) with initial point \( (1, 1) \).
* **At \( z = 1-i \):** \( f(1-i) = -2 - 2i \implies \) vector \( (-2, -2) \) with initial point \( (1, -1) \).
* **At \( z = i \):** \( f(i) = -i \implies \) vector \( (0, -1) \) with initial point \( (0, 1) \).

### Problem 3: \( f(z) = 1 - z^2 \)
* **At \( z = 1 \):** \( f(1) = 0 \implies \) vector \( (0, 0) \) with initial point \( (1, 0) \).
* **At \( z = 1+i \):** \( f(1+i) = 1 - 2i \implies \) vector \( (1, -2) \) with initial point \( (1, 1) \).
* **At \( z = 1-i \):** \( f(1-i) = 1 + 2i \implies \) vector \( (1, 2) \) with initial point \( (1, -1) \).
* **At \( z = i \):** \( f(i) = 2 \implies \) vector \( (2, 0) \) with initial point \( (0, 1) \).

### Problem 4: \( f(z) = 1/z \)
* **At \( z = 1 \):** \( f(1) = 1 \implies \) vector \( (1, 0) \) with initial point \( (1, 0) \).
* **At \( z = 1+i \):** \( f(1+i) = 1/2 - 1/2 i \implies \) vector \( (1/2, -1/2) \) with initial point \( (1, 1) \).
* **At \( z = 1-i \):** \( f(1-i) = 1/2 + 1/2 i \implies \) vector \( (1/2, 1/2) \) with initial point \( (1, -1) \).
* **At \( z = i \):** \( f(i) = -i \implies \) vector \( (0, -1) \) with initial point \( (0, 1) \).

### Problem 5: \( f(z) = z - 1/z \)
* **At \( z = 1 \):** \( f(1) = 0 \implies \) vector \( (0, 0) \) with initial point \( (1, 0) \).
* **At \( z = 1+i \):** \( f(1+i) = 1/2 + 3/2 i \implies \) vector \( (1/2, 3/2) \) with initial point \( (1, 1) \).
* **At \( z = 1-i \):** \( f(1-i) = 1/2 - 3/2 i \implies \) vector \( (1/2, -3/2) \) with initial point \( (1, -1) \).
* **At \( z = i \):** \( f(i) = 2i \implies \) vector \( (0, 2) \) with initial point \( (0, 1) \).

### Problem 6: \( f(z) = z^{1/2} \) (Principal branch: \( f(z) = \sqrt{r}e^{i\theta/2} \) for \( -\pi < \theta \le \pi \))
* **At \( z = 1 = e^{0} \):** \( f(1) = 1 \implies \) vector \( (1, 0) \) with initial point \( (1, 0) \).
* **At \( z = 1+i = \sqrt{2}e^{i\pi/4} \):** \( f(1+i) = 2^{1/4}e^{i\pi/8} \approx \boxed{1.0987 + 0.4551i} \) with initial point \( (1, 1) \).
* **At \( z = 1-i = \sqrt{2}e^{-i\pi/4} \):** \( f(1-i) = 2^{1/4}e^{-i\pi/8} \approx \boxed{1.0987 - 0.4551i} \) with initial point \( (1, -1) \).
* **At \( z = i = e^{i\pi/2} \):** \( f(i) = e^{i\pi/4} = \frac{\sqrt{2}}{2} + i\frac{\sqrt{2}}{2} \approx \boxed{0.7071 + 0.7071i} \) with initial point \( (0, 1) \).

### Problem 7: \( f(z) = 1/\bar{z} = z/|z|^2 \)
* **At \( z = 1 \):** \( f(1) = 1 \implies \) vector \( (1, 0) \) with initial point \( (1, 0) \).
* **At \( z = 1+i \):** \( f(1+i) = 1/2 + 1/2 i \implies \) vector \( (1/2, 1/2) \) with initial point \( (1, 1) \).
* **At \( z = 1-i \):** \( f(1-i) = 1/2 - 1/2 i \implies \) vector \( (1/2, -1/2) \) with initial point \( (1, -1) \).
* **At \( z = i \):** \( f(i) = i \implies \) vector \( (0, 1) \) with initial point \( (0, 1) \).

### Problem 8: \( f(z) = \log_e |z| + i \operatorname{Arg}(z) \)
* **At \( z = 1 \):** \( f(1) = 0 \implies \) vector \( (0, 0) \) with initial point \( (1, 0) \).
* **At \( z = 1+i \):** \( f(1+i) = \frac{1}{2}\log_e 2 + i\frac{\pi}{4} \approx \boxed{0.3466 + 0.7854i} \) with initial point \( (1, 1) \).
* **At \( z = 1-i \):** \( f(1-i) = \frac{1}{2}\log_e 2 - i\frac{\pi}{4} \approx \boxed{0.3466 - 0.7854i} \) with initial point \( (1, -1) \).
* **At \( z = i \):** \( f(i) = i\frac{\pi}{2} \approx \boxed{1.5708i} \) with initial point \( (0, 1) \).

---

## Problems 9 – 12: Streamlines of Planar Flows

### Problem 9: \( f(z) = 1 - 2i \)
* **(a) Find Streamlines:**
  * \( u(x,y) = 1 \), \( v(x,y) = -2 \).
  * System: \( \frac{dx}{dt} = 1, \, \frac{dy}{dt} = -2 \implies \frac{dy}{dx} = -2 \).
  * Integrating: \( \boxed{y = -2x + c} \).
* **(b) Sketch:** A family of parallel lines with slope \( -2 \).

### Problem 10: \( f(z) = 1/\bar{z} \)
* **(a) Find Streamlines:**
  * \( f(z) = \frac{x+iy}{x^2+y^2} \implies u(x,y) = \frac{x}{x^2+y^2}, \, v(x,y) = \frac{y}{x^2+y^2} \).
  * System: \( \frac{dy}{dx} = \frac{y}{x} \).
  * Integrating: \( \ln|y| = \ln|x| + C \implies \boxed{y = cx} \) (excluding the origin).
* **(b) Sketch:** A family of straight lines passing through the origin.

### Problem 11: \( f(z) = iz \)
* **(a) Find Streamlines:**
  * \( f(z) = i(x+iy) = -y + ix \implies u(x,y) = -y, \, v(x,y) = x \).
  * System: \( \frac{dy}{dx} = -\frac{x}{y} \implies x\,dx + y\,dy = 0 \).
  * Integrating: \( \boxed{x^2 + y^2 = c} \) (with \( c > 0 \)).
* **(b) Sketch:** A family of concentric circles centered at the origin.

### Problem 12: \( f(z) = (1 + i)\bar{z} \)
* **(a) Find Streamlines:**
  * \( f(z) = (1+i)(x-iy) = (x+y) + i(x-y) \implies u(x,y) = x+y, \, v(x,y) = x-y \).
  * System: \( \frac{dy}{dx} = \frac{x-y}{x+y} \).
  * Let \( y = vx \implies v + x v' = \frac{1-v}{1+v} \implies x v' = \frac{1 - 2v - v^2}{1+v} \).
  * Separating variables:
    \[
    \frac{1+v}{1-2v-v^2}\,dv = \frac{1}{x}\,dx \implies -\frac{1}{2}\ln|1-2v-v^2| = \ln|x| + C \implies x^2(1 - 2v - v^2) = c
    \]
  * Substituting \( v = y/x \):
    \[
    x^2\left(1 - \frac{2y}{x} - \frac{y^2}{x^2}\right) = c \implies \boxed{x^2 - 2xy - y^2 = c}
    \]
* **(b) Sketch:** A family of hyperbolas.

---

## Focus on Concepts (Problems 13 – 16)

### Problem 13: Translation of Vector Fields
* **Relationship:** The vector field associated with \( g(z) = f(z-1) \) is identical to the vector field of \( f(z) \) but translated 1 unit to the right. At any point \( z \), the vector \( g(z) \) is simply the vector \( f(z') \) where \( z' = z-1 \).

### Problem 14: Rotation of Vector Fields
* **Relationship:** Multiplying a complex function by \( i \) rotates every vector by \( \pi/2 \) counterclockwise. Thus, the vector field associated with \( g(z) = if(z) \) is obtained by rotating every vector in the field of \( f(z) \) by \( \pi/2 \) counterclockwise.

### Problem 15: Uniform Flow
* **(a) Streamlines of \( f(z) = c = c_1 + i c_2 \):**
  * System: \( \frac{dx}{dt} = c_1 \, \frac{dy}{dt} = c_2 \).
  * If \( c_1 \ne 0 \), then \( \frac{dy}{dx} = \frac{c_2}{c_1} \implies y = \frac{c_2}{c_1}x + k \).
  * If \( c_1 = 0 \), then \( x = k \) (vertical lines).
  * **Streamlines:** The family of parallel straight lines in the direction of the complex constant \( c \).
* **(b) Explanation:** The velocity vector at every point in the flow is identical in magnitude and direction. Since there is no variation in the velocity from point to point, the flow is uniform.

### Problem 16: Flow Around the Unit Circle
* **(b) Verify that the unit circle \( x^2+y^2 = 1 \) is a streamline:**
  * Let \( z = e^{i\theta} \) be on the unit circle. The velocity vector is:
    \[
    f(e^{i\theta}) = 1 - e^{-2i\theta} = 1 - \cos(2\theta) + i\sin(2\theta) = 2\sin^2\theta + 2i\sin\theta\cos\theta
    \]
  * The unit normal vector to the circle at \( \theta \) is \( \mathbf{n} = (\cos\theta, \, \sin\theta) \).
  * Evaluate the dot product of the velocity field \( \mathbf{F} = (2\sin^2\theta, \, 2\sin\theta\cos\theta) \) and the normal vector \( \mathbf{n} \):
    \[
    \mathbf{F} \cdot \mathbf{n} = (2\sin^2\theta)\cos\theta + (2\sin\theta\cos\theta)\sin\theta = 2\sin^2\theta\cos\theta - 2\sin^2\theta\cos\theta = 0
    \]
  * Since the velocity vector is perpendicular to the normal vector at every point on the circle, the flow is tangent to the circle. Thus, the unit circle is a streamline.
* **(c) Explanation:** As shown in (b), the unit circle boundary acts as a streamline, meaning fluid cannot cross it. For large \( |z| \), \( \lim_{z \to \infty} f(z) = 1 \), which is a uniform horizontal flow. Thus, the function \( f(z) = 1 - 1/z^2 \) represents a uniform flow that is deflected around a cylindrical barrier of radius 1.

---

## Computer Lab Assignments (Problems 17 – 22)
*CAS vector field plots can be generated using standard CAS tools like Mathematica (using `VectorPlot`) or Python's `matplotlib.pyplot.streamplot`.*


---

<a name="chapter-2-review-quiz"></a>
# Chapter 2 Review Quiz
## Chapter 2 · Review Quiz
### Problems 1 – 40 · Complete Solutions

---

## Part 1: Problems 1 – 20 (True / False)

### Problem 1: If \( f(z) \) is a complex function, then \( f(x + 0i) \) must be a real number.
* **Answer: FALSE**
* **Justification:** Counterexample: Let \( f(z) = iz \). For a real number \( z = x + 0i \), the output is \( f(x) = ix \), which is purely imaginary for \( x \ne 0 \), not real.

### Problem 2: \( \arg(z) \) is a complex function.
* **Answer: FALSE**
* **Justification:** A complex function is a function whose values are complex numbers. The multiple-valued argument function \( \arg(z) \) outputs a set of real numbers (angles). Even its single-valued branch \( \operatorname{Arg}(z) \) is a real-valued function of a complex variable.

### Problem 3: The domain of the function \( f(z) = \frac{1}{z^2 + i} \) is all complex numbers.
* **Answer: FALSE**
* **Justification:** The domain excludes the roots of \( z^2 + i = 0 \implies z^2 = -i \). These roots are:
  \[
  z = \pm e^{-i\pi/4} = \pm \left(\frac{\sqrt{2}}{2} - i\frac{\sqrt{2}}{2}\right)
  \]

### Problem 4: The domain of the function \( f(z) = e^{z^2 - (1+i)z + 2} \) is all complex numbers.
* **Answer: TRUE**
* **Justification:** The exponent \( z^2 - (1+i)z + 2 \) is a polynomial, which is defined everywhere. The complex exponential function \( e^w \) is also an entire function (defined for all complex numbers).

### Problem 5: If \( f(z) \) is a complex function with \( u(x, y) = 0 \), then the range of \( f \) lies in the imaginary axis.
* **Answer: TRUE**
* **Justification:** Since \( f(z) = u(x, y) + i v(x, y) = 0 + i v(x, y) \), all output values are purely imaginary, meaning they lie on the imaginary axis.

### Problem 6: The entire complex plane is mapped onto the real axis \( v = 0 \) by \( w = z + \bar{z} \).
* **Answer: TRUE**
* **Justification:** Since \( z + \bar{z} = 2x \), the imaginary part of \( w \) is \( v = 0 \) for all \( z \). As \( x \) ranges from \( -\infty \) to \( \infty \), the image covers the entire real axis.

### Problem 7: The entire complex plane is mapped onto the unit circle \( |w| = 1 \) by \( w = \frac{z}{|z|} \).
* **Answer: FALSE**
* **Justification:** The function is undefined at the origin \( z = 0 \), so the entire complex plane cannot be mapped.

### Problem 8: The range of the function \( f(z) = \operatorname{Arg}(z) \) is all real numbers.
* **Answer: FALSE**
* **Justification:** The range of the principal argument is restricted to the interval \( (-\pi, \pi] \).

### Problem 9: The image of the circle \( |z - z_0| = \rho \) under a complex linear mapping is a circle with a (possibly) different center, but the same radius.
* **Answer: FALSE**
* **Justification:** A linear mapping \( w = az + b \) includes magnification by \( |a| \). If \( |a| \ne 1 \), the radius of the circle changes to \( |a|\rho \).

### Problem 10: The linear mapping \( w = (1 - \sqrt{3}i)z + 2 \) acts by rotating through an angle of \( \pi/3 \) radians clockwise about the origin, magnifying by a factor of 2, then translating by 2.
* **Answer: TRUE**
* **Justification:**
  * Magnification factor: \( |a| = |1 - \sqrt{3}i| = \sqrt{1 + 3} = 2 \).
  * Rotation angle: \( \operatorname{Arg}(a) = \operatorname{Arg}(1 - \sqrt{3}i) = -\pi/3 \) (which corresponds to \( \pi/3 \) radians clockwise).
  * Translation: \( b = 2 \).

### Problem 11: There is more than one linear mapping that takes the circle \( |z - 1| = 1 \) to the circle \( |z + i| = 1 \).
* **Answer: TRUE**
* **Justification:** Any mapping of the form \( w = a(z-1) - i \) where \( |a| = 1 \) will map the circle centered at 1 to the circle centered at \( -i \). Since there are infinitely many such values of \( a \) (representing rotations about the center), there are infinitely many such mappings.

### Problem 12: The lines \( x = 3 \) and \( x = -3 \) are mapped onto the same parabola by \( w = z^2 \).
* **Answer: TRUE**
* **Justification:** The vertical line \( x = k \) maps to the parabola \( u = k^2 - \frac{v^2}{4k^2} \). Since \( k^2 = 9 \) for both \( k = 3 \) and \( k = -3 \), both lines map to the parabola \( u = 9 - \frac{v^2}{36} \).

### Problem 13: There are no solutions to the equation \( \operatorname{Arg}(z) = \operatorname{Arg}\left(z^3\right) \).
* **Answer: FALSE**
* **Justification:** For any positive real number \( z = x > 0 \), we have \( \operatorname{Arg}(z) = 0 \) and \( \operatorname{Arg}(z^3) = \operatorname{Arg}(x^3) = 0 \). Thus, all positive real numbers are solutions.

### Problem 14: If \( f(z) = z^{1/4} \) is the principal fourth root function, then \( f(-1) = -\frac{1}{2\sqrt{2}} + \frac{1}{2\sqrt{2}}i \).
* **Answer: FALSE**
* **Justification:** The principal branch is \( f(z) = |z|^{1/4} e^{i\operatorname{Arg}(z)/4} \). For \( z = -1 \), \( |z| = 1 \) and \( \operatorname{Arg}(z) = \pi \). Thus:
  \[
  f(-1) = 1^{1/4} e^{i\pi/4} = \cos\left(\frac{\pi}{4}\right) + i\sin\left(\frac{\pi}{4}\right) = \frac{1}{\sqrt{2}} + \frac{1}{\sqrt{2}}i
  \]

### Problem 15: The complex number \( i \) is not in the range of the principal cube root function.
* **Answer: TRUE**
* **Justification:** The principal cube root function \( z^{1/3} = r^{1/3} e^{i\theta/3} \) has its argument restricted to the range \( (-\pi/3, \pi/3] \). Since \( \operatorname{Arg}(i) = \pi/2 \notin (-\pi/3, \pi/3] \), the value \( i \) is not in the range.

### Problem 16: Under the mapping \( w = 1/z \) on the extended complex plane, the domain \( |z| > 3 \) is mapped onto the domain \( |w| < 1/3 \).
* **Answer: TRUE**
* **Justification:** In the extended complex plane, the point at infinity \( \infty \) is included in the domain \( |z| > 3 \). Under \( w = 1/z \), \( \infty \to 0 \) and \( z \to w \) such that \( |w| = 1/|z| < 1/3 \). Therefore, the entire disk \( |w| < 1/3 \) (including the origin \( w = 0 \)) is covered.

### Problem 17: If \( f \) is a complex function for which \( \lim_{z \to 2+i} \operatorname{Re}(f(z)) = 4 \) and \( \lim_{z \to 2+i} \operatorname{Im}(f(z)) = -1 \), then \( \lim_{z \to 2+i} f(z) = 4 - i \).
* **Answer: TRUE**
* **Justification:** This is a direct consequence of Theorem 2.1 (Component limits).

### Problem 18: If \( f \) is a complex function for which \( \lim_{x \to 0} f(x + 0i) = 0 \) and \( \lim_{y \to 0} f(0 + iy) = 0 \), then \( \lim_{z \to 0} f(z) = 0 \).
* **Answer: FALSE**
* **Justification:** The existence of limits along the coordinate axes does not guarantee the existence of the complex limit. For example, if \( f(z) = \frac{\operatorname{Re}(z)\operatorname{Im}(z)}{|z|^2} = \frac{xy}{x^2+y^2} \), then the limits along the axes are 0, but along the line \( y=x \), the limit is \( 1/2 \ne 0 \).

### Problem 19: If \( f \) is a complex function that is continuous at the point \( z = 1 + i \), then the function \( g(z) = 3 [f(z)]^2 - (2 + i)f(z) + i \) is continuous at \( z = 1 + i \).
* **Answer: TRUE**
* **Justification:** Polynomial combinations of continuous functions are continuous.

### Problem 20: If \( f \) is a complex function that is continuous on the entire complex plane, then the function \( g(z) = \overline{f(z)} \) is continuous on the entire complex plane.
* **Answer: TRUE**
* **Justification:** The conjugation function \( z \to \bar{z} \) is continuous everywhere, and the composition of continuous functions is continuous.

---

## Part 2: Problems 21 – 40 (Fill in the blanks)

### Problem 21
* **Question:** If \( f(z) = z^2 + i\bar{z} \), then the real and imaginary parts of \( f \) are \( u(x, y) = \) _____ and \( v(x, y) = \) _____ .
* **Solution:** \( f(z) = (x^2 - y^2 + y) + i(2xy + x) \).
* **Answer:** \( \mathbf{x^2 - y^2 + y} \), \( \mathbf{x + 2xy} \)

### Problem 22
* **Question:** If \( f(z) = \frac{|z - 1|}{z^2 + 2iz + 2} \), then the natural domain of \( f \) is _____ .
* **Solution:** Denominator roots: \( z^2 + 2iz + 2 = 0 \implies z = -i \pm i\sqrt{3} \).
* **Answer:** \( \mathbf{\mathbb{C} \setminus \{-i \pm i\sqrt{3}\}} \)

### Problem 23
* **Question:** If \( f(z) = z - \bar{z} \), then the range of \( f \) is contained in the _____ axis.
* **Solution:** \( z - \bar{z} = 2iy \) which is purely imaginary.
* **Answer:** **imaginary**

### Problem 24
* **Question:** The exponential function \( e^z \) has real and imaginary parts \( u(x, y) = \) _____ and \( v(x, y) = \) _____ .
* **Answer:** \( \mathbf{e^x \cos y} \), \( \mathbf{e^x \sin y} \)

### Problem 25
* **Question:** A parametrization of the line segment from \( 1 + i \) to \( 2i \) is \( z(t) = \) _____ .
* **Answer:** \( \mathbf{(1+i)(1-t) + 2ti, \, 0 \le t \le 1} \)

### Problem 26
* **Question:** A parametrization of the circle centered at \( 1-i \) with radius \( 3 \) is \( z(t) = \) _____ .
* **Answer:** \( \mathbf{1 - i + 3e^{it}, \, 0 \le t \le 2\pi} \)

### Problem 27
* **Question:** Every complex linear mapping is a composition of at most one _____ , one _____ , and one _____ .
* **Answer:** **rotation**, **magnification**, **translation**

### Problem 28
* **Question:** The complex mapping \( w = iz+2 \) rotates and _____ , but does not _____ .
* **Solution:** It rotates by \( \pi/2 \) and translates by 2, but has no magnification since \( |a| = 1 \).
* **Answer:** **translates**, **magnify**

### Problem 29
* **Question:** The function \( z^2 \) squares the modulus of \( z \) and _____ its argument.
* **Answer:** **doubles**

### Problem 30
* **Question:** The image of the sector \( 0 \le \arg(z) \le \pi/2 \) under the mapping \( w = z^3 \) is _____ .
* **Answer:** \( \mathbf{0 \le \operatorname{arg}(w) \le 3\pi/2} \)

### Problem 31
* **Question:** The image of horizontal and vertical lines under the mapping \( w = z^2 \) is _____ .
* **Answer:** **parabolas**

### Problem 32
* **Question:** The principal \( n \)th root function \( z^{1/n} \) maps the complex plane onto the region _____ .
* **Answer:** \( \mathbf{-\pi/n < \operatorname{Arg}(w) \le \pi/n} \)

### Problem 33
* **Question:** If \( f(z) = z^{1/6} \) is the principal 6th root function, then \( f(-1) = \) _____ .
* **Solution:** \( 1^{1/6} e^{i\pi/6} = \frac{\sqrt{3}}{2} + \frac{1}{2}i \).
* **Answer:** \( \mathbf{\frac{\sqrt{3}}{2} + \frac{1}{2}i} \)

### Problem 34
* **Question:** The complex reciprocal function \( 1/z \) is a composition of _____ in the unit circle followed by reflection across the _____-axis.
* **Answer:** **inversion**, **real** (or \( x \))

### Problem 35
* **Question:** According to the formal definition of a complex limit, \( \lim_{z \to 2i} (z^2 - i) = -4 - i \) if for every \( \epsilon > 0 \) there is a \( \delta > 0 \) such that \( | \)_____\( | < \epsilon \) whenever \( 0 < |z- \)_____\( | < \delta \).
* **Answer:** \( \mathbf{z^2 + 4} \), \( \mathbf{2i} \)

### Problem 36
* **Question:** If \( f(z) = \frac{z + \bar{z}}{z} \), then \( \lim_{x \to 0} f(x + 0i) = \) _____ and \( \lim_{y \to 0} f(0 + iy) = \) _____ . Therefore, \( \lim_{z \to 0} f(z) \) _____ .
* **Solution:** Along the x-axis, \( f(x) = \frac{2x}{x} = 2 \). Along the y-axis, \( f(iy) = \frac{0}{iy} = 0 \).
* **Answer:** \( \mathbf{2} \), \( \mathbf{0} \), **does not exist**

### Problem 37
* **Question:** A complex function \( f \) is continuous at \( z = z_0 \) if \( \lim_{z \to z_0} f(z) = \) _____ .
* **Answer:** \( \mathbf{f(z_0)} \)

### Problem 38
* **Question:** The function \( f(z) = \) _____ is an example of a function that is continuous on the domain \( |z| > 0, \, -\pi < \arg(z) < \pi \).
* **Answer:** \( \mathbf{\operatorname{Arg}(z)} \) (or \( \operatorname{Ln}(z) \))

### Problem 39
* **Question:** The complex function \( f(z) = \frac{x}{y} + i \log_e x \) is continuous on the region _____ .
* **Solution:** Requires \( x > 0 \) and \( y \ne 0 \).
* **Answer:** \( \mathbf{0 < x < \infty, \, y \ne 0} \)

### Problem 40
* **Question:** Both _____ and _____ are examples of multiple-valued functions.
* **Answer:** \( \mathbf{\arg(z)} \), \( \mathbf{z^{1/2}} \) (or any non-integer power)


---

