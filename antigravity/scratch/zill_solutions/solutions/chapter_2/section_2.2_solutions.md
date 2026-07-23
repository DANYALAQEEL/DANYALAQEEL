# Complex Analysis — Dennis G. Zill, 2nd Edition
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
