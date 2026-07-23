# Complex Analysis — Dennis G. Zill, 2nd Edition
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
