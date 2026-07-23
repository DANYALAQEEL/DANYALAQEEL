# Complex Analysis — Dennis G. Zill, 2nd Edition
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
