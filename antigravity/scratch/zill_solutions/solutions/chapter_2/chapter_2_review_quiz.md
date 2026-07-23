# Complex Analysis — Dennis G. Zill, 2nd Edition
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
