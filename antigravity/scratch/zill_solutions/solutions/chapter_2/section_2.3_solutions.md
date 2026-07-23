# Complex Analysis — Dennis G. Zill, 2nd Edition
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
