# Complex Analysis — Dennis G. Zill, 2nd Edition
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
