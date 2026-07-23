# Complex Analysis — Dennis G. Zill, 2nd Edition
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
