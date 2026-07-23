# Complex Analysis — Dennis G. Zill, 2nd Edition
## Chapter 1 · Section 1.2 — Complex Plane (Vector and Modulus Properties)
### Problems 1 – 50 · Complete Solutions

---

> **Key Concepts and Modulus Properties**
>
> 1. **Vector Interpretation:** A complex number \( z = x + iy \) is represented as a position vector \( (x, y) \) starting at the origin.
> 2. **Modulus / Absolute Value:** 
>    \[
>    |z| = \sqrt{x^2 + y^2} \implies |z|^2 = z\bar{z}
>    \]
> 3. **Distance Formula:** The distance between \( z_1 \) and \( z_2 \) is:
>    \[
>    |z_2 - z_1| = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}
>    \]
> 4. **Triangle Inequalities:**
>    * \( |z_1 + z_2| \le |z_1| + |z_2| \)
>    * \( |z_1 + z_2| \ge \Big| |z_1| - |z_2| \Big| \)
>    * \( |z_1 - z_2| \le |z_1| + |z_2| \)
>    * \( |z_1 - z_2| \ge \Big| |z_1| - |z_2| \Big| \)

---

## Problems 1 – 4

**Interpret \( z_1 \) and \( z_2 \) as vectors. Graph \( z_1, z_2, z_1 + z_2, \) and \( z_1 - z_2 \).**

### Problem 1
\[
z_1 = 4 + 2i, \quad z_2 = -2 + 5i
\]
* **Vector sum:** \( z_1 + z_2 = (4 - 2) + (2 + 5)i = 2 + 7i \)
* **Vector difference:** \( z_1 - z_2 = (4 - (-2)) + (2 - 5)i = 6 - 3i \)
* *Graph description:* Draw vectors from origin to \( (4, 2) \) and \( (-2, 5) \). The sum ends at \( (2, 7) \) (diagonal of parallelogram). The difference ends at \( (6, -3) \).

### Problem 2
\[
z_1 = 1 - i, \quad z_2 = 1 + i
\]
* **Vector sum:** \( z_1 + z_2 = (1 + 1) + (-1 + 1)i = 2 \)
* **Vector difference:** \( z_1 - z_2 = (1 - 1) + (-1 - 1)i = -2i \)
* *Graph description:* Draw vectors to \( (1, -1) \) and \( (1, 1) \). The sum lies on the real axis at \( (2, 0) \). The difference lies on the negative imaginary axis at \( (0, -2) \).

### Problem 3
\[
z_1 = 5 + 4i, \quad z_2 = -3i
\]
* **Linear combination 1:** \( 3z_1 + 5z_2 = 3(5 + 4i) + 5(-3i) = 15 + 12i - 15i = 15 - 3i \)
* **Linear combination 2:** \( z_1 - 2z_2 = (5 + 4i) - 2(-3i) = 5 + 4i + 6i = 5 + 10i \)
* *Graph description:* Draw vectors ending at \( (15, -3) \) and \( (5, 10) \).

### Problem 4
\[
z_1 = 4 - 3i, \quad z_2 = -2 + 3i
\]
* **Linear combination 1:** \( 2z_1 + 4z_2 = 2(4 - 3i) + 4(-2 + 3i) = 8 - 6i - 8 + 12i = 6i \)
* **Vector difference:** \( z_1 - z_2 = (4 - (-2)) + (-3 - 3)i = 6 - 6i \)
* *Graph description:* Draw vectors ending at \( (0, 6) \) (pure imaginary) and \( (6, -6) \).

---

## Problem 5

**Given \( z_1 = 5 - 2i \) and \( z_2 = -1 - i \), find a vector \( z_3 \) in the same direction as \( z_1 + z_2 \) but four times as long.**

### Solution

**Step 1.** Find the vector sum \( z_1 + z_2 \):
\[
z_1 + z_2 = (5 - 1) + (-2 - 1)i = 4 - 3i
\]
**Step 2.** A vector pointing in the same direction as \( w \) but \( N \) times as long is simply \( N \cdot w \). Thus:
\[
z_3 = 4(z_1 + z_2) = 4(4 - 3i) = 16 - 12i
\]
\[
\boxed{z_3 = 16 - 12i}
\]

---

## Problem 6

**Plot the points \( z_1 = -2 - 8i, z_2 = 3i, z_3 = -6 - 5i \). Express each side of the triangle determined by these points as a difference of vectors.**

### Solution

* **Side 1 (from \( z_1 \) to \( z_2 \)):**
  \[
  s_{12} = z_2 - z_1 = 3i - (-2 - 8i) = 2 + 11i
  \]
* **Side 2 (from \( z_2 \) to \( z_3 \)):**
  \[
  s_{23} = z_3 - z_2 = -6 - 5i - 3i = -6 - 8i
  \]
* **Side 3 (from \( z_3 \) to \( z_1 \)):**
  \[
  s_{31} = z_1 - z_3 = -2 - 8i - (-6 - 5i) = 4 - 3i
  \]

---

## Problem 7

**Determine whether the points \( z_1, z_2, z_3 \) in Problem 6 are the vertices of a right triangle.**

### Solution

**Step 1.** Calculate the lengths of each side of the triangle by taking the modulus of each difference vector:
* Length of side 12:
  \[
  L_{12} = |z_2 - z_1| = |2 + 11i| = \sqrt{2^2 + 11^2} = \sqrt{4 + 121} = \sqrt{125}
  \]
* Length of side 23:
  \[
  L_{23} = |z_3 - z_2| = |-6 - 8i| = \sqrt{(-6)^2 + (-8)^2} = \sqrt{36 + 64} = \sqrt{100} = 10
  \]
* Length of side 31:
  \[
  L_{31} = |z_1 - z_3| = |4 - 3i| = \sqrt{4^2 + (-3)^2} = \sqrt{16 + 9} = \sqrt{25} = 5
  \]

**Step 2.** Test the Pythagorean theorem \( A^2 + B^2 = C^2 \) using the squared lengths:
\[
L_{23}^2 + L_{31}^2 = 10^2 + 5^2 = 100 + 25 = 125 = L_{12}^2
\]
Since \( L_{23}^2 + L_{31}^2 = L_{12}^2 \), the triangle is a **right triangle** with the right angle located at vertex \( z_3 \).

---

## Problem 8

**The three points \( z_1 = 1 + 5i, z_2 = -4 - i, z_3 = 3 + i \) are vertices of a triangle. Find the length of the median from \( z_1 \) to the side \( z_3 - z_2 \).**

### Solution

**Step 1.** The side opposite to vertex \( z_1 \) connects the points \( z_2 \) and \( z_3 \). Find the midpoint \( M \) of this side:
\[
M = \frac{z_2 + z_3}{2} = \frac{(-4 - i) + (3 + i)}{2} = \frac{-1 + 0i}{2} = -\frac{1}{2}
\]

**Step 2.** Find the length of the median, which is the distance from vertex \( z_1 \) to midpoint \( M \):
\[
L = |z_1 - M| = \left|(1 + 5i) - \left(-\frac{1}{2}\right)\right| = \left|\frac{3}{2} + 5i\right|
\]
\[
= \sqrt{\left(\frac{3}{2}\right)^2 + 5^2} = \sqrt{\frac{9}{4} + 25} = \sqrt{\frac{109}{4}} = \frac{\sqrt{109}}{2}
\]

\[
\boxed{\text{Median length} = \frac{\sqrt{109}}{2}}
\]

---

## Problems 9 – 12

**Find the modulus of the given complex number.**

### Problem 9
\[
w = (1 - i)^2
\]
Using the property \( |z^n| = |z|^n \):
\[
|w| = |1 - i|^2 = \left(\sqrt{1^2 + (-1)^2}\right)^2 = (\sqrt{2})^2 = 2
\]
\[
\boxed{|w| = 2}
\]

### Problem 10
\[
w = i(2 - i) - 4\left(1 + \frac{1}{4}i\right)
\]
**Step 1.** Simplify \( w \) first:
\[
w = 2i - i^2 - 4 - i = 2i + 1 - 4 - i = -3 + i
\]
**Step 2.** Calculate the modulus:
\[
|w| = |-3 + i| = \sqrt{(-3)^2 + 1^2} = \sqrt{9 + 1} = \sqrt{10}
\]
\[
\boxed{|w| = \sqrt{10}}
\]

### Problem 11
\[
w = \frac{2i}{3 - 4i}
\]
Using the quotient property of moduli:
\[
|w| = \frac{|2i|}{|3 - 4i|} = \frac{2}{\sqrt{3^2 + (-4)^2}} = \frac{2}{\sqrt{25}} = \frac{2}{5}
\]
\[
\boxed{|w| = \frac{2}{5}}
\]

### Problem 12
\[
w = \frac{1 - 2i}{1 + i} + \frac{2 - i}{1 - i}
\]
**Step 1.** Write each fraction in standard form:
* First term:
  \[
  \frac{1 - 2i}{1 + i} = \frac{(1 - 2i)(1 - i)}{1 + 1} = \frac{1 - 3i - 2}{2} = -\frac{1}{2} - \frac{3}{2}i
  \]
* Second term:
  \[
  \frac{2 - i}{1 - i} = \frac{(2 - i)(1 + i)}{1 + 1} = \frac{2 + i + 1}{2} = \frac{3}{2} + \frac{1}{2}i
  \]
**Step 2.** Combine the terms:
\[
w = \left(-\frac{1}{2} - \frac{3}{2}i\right) + \left(\frac{3}{2} + \frac{1}{2}i\right) = 1 - i
\]
**Step 3.** Calculate the modulus:
\[
|w| = |1 - i| = \sqrt{1^2 + (-1)^2} = \sqrt{2}
\]
\[
\boxed{|w| = \sqrt{2}}
\]

---

## Problems 13 – 14

**Let \( z = x + iy \). Express the given quantity in terms of \( x \) and \( y \).**

### Problem 13
\[
|z - 1 - 3i|^2
\]
Substitute \( z = x + iy \):
\[
|x + iy - 1 - 3i|^2 = |(x - 1) + (y - 3)i|^2 = (x - 1)^2 + (y - 3)^2
\]
\[
\boxed{(x - 1)^2 + (y - 3)^2}
\]

### Problem 14
\[
|z + 5\bar{z}|
\]
Substitute \( z = x + iy \) and \( \bar{z} = x - iy \):
\[
z + 5\bar{z} = (x + iy) + 5(x - iy) = 6x - 4yi
\]
Compute the modulus:
\[
|z + 5\bar{z}| = |6x - 4yi| = \sqrt{(6x)^2 + (-4y)^2} = \sqrt{36x^2 + 16y^2} = 2\sqrt{9x^2 + 4y^2}
\]
\[
\boxed{2\sqrt{9x^2 + 4y^2}}
\]

---

## Problems 15 – 16

**Determine which of the given two complex numbers is closest to the origin. Which is closest to \( 1 + i \)?**

### Problem 15
\[
z_1 = 10 + 8i, \quad z_2 = 11 - 6i
\]
1. **Compare distance to origin (\( |z| \)):**
   * \( |z_1| = \sqrt{10^2 + 8^2} = \sqrt{164} \approx 12.806 \)
   * \( |z_2| = \sqrt{11^2 + (-6)^2} = \sqrt{157} \approx 12.530 \)
   * Since \( |z_2| < |z_1| \), **\( z_2 = 11 - 6i \) is closest to the origin**.
2. **Compare distance to \( 1 + i \) (\( |z - (1 + i)| \)):**
   * \( |z_1 - (1 + i)| = |9 + 7i| = \sqrt{9^2 + 7^2} = \sqrt{130} \approx 11.402 \)
   * \( |z_2 - (1 + i)| = |10 - 7i| = \sqrt{10^2 + (-7)^2} = \sqrt{149} \approx 12.207 \)
   * Since \( 11.402 < 12.207 \), **\( z_1 = 10 + 8i \) is closest to \( 1 + i \)**.

### Problem 16
\[
z_1 = \frac{1}{2} - \frac{1}{4}i, \quad z_2 = \frac{2}{3} + \frac{1}{6}i
\]
1. **Compare distance to origin:**
   * \( |z_1| = \sqrt{\left(\frac{1}{2}\right)^2 + \left(-\frac{1}{4}\right)^2} = \sqrt{\frac{1}{4} + \frac{1}{16}} = \sqrt{\frac{5}{16}} = \frac{\sqrt{5}}{4} \approx 0.559 \)
   * \( |z_2| = \sqrt{\left(\frac{2}{3}\right)^2 + \left(\frac{1}{6}\right)^2} = \sqrt{\frac{4}{9} + \frac{1}{36}} = \sqrt{\frac{17}{36}} = \frac{\sqrt{17}}{6} \approx 0.687 \)
   * Since \( |z_1| < |z_2| \), **\( z_1 \) is closest to the origin**.
2. **Compare distance to \( 1 + i \):**
   * \( |z_1 - (1 + i)| = \left| -\frac{1}{2} - \frac{5}{4}i \right| = \sqrt{\frac{1}{4} + \frac{25}{16}} = \sqrt{\frac{29}{16}} = \frac{\sqrt{29}}{4} \approx 1.346 \)
   * \( |z_2 - (1 + i)| = \left| -\frac{1}{3} - \frac{5}{6}i \right| = \sqrt{\frac{1}{9} + \frac{25}{36}} = \sqrt{\frac{29}{36}} = \frac{\sqrt{29}}{6} \approx 0.898 \)
   * Since \( 0.898 < 1.346 \), **\( z_2 \) is closest to \( 1 + i \)**.

---

## Problems 17 – 26

**Describe the set of points \( z \) in the complex plane satisfying the given equation.**

### Problem 17
\[
\operatorname{Re}((1 + i)z - 1) = 0
\]
Let \( z = x + iy \). Expand the inner term:
\[
(1 + i)(x + iy) - 1 = x - y - 1 + (x + y)i
\]
The real part must be zero:
\[
x - y - 1 = 0 \implies y = x - 1
\]
\[
\boxed{\text{A straight line with slope 1 and } y\text{-intercept } -1}
\]

### Problem 18
\[
[\operatorname{Im}(i\bar{z})]^2 = 2
\]
Let \( z = x + iy \implies \bar{z} = x - iy \). Multiply by \( i \):
\[
i\bar{z} = i(x - iy) = y + xi
\]
The imaginary part is \( x \). Substitute back:
\[
x^2 = 2 \implies x = \pm \sqrt{2}
\]
\[
\boxed{\text{Two vertical straight lines: } x = \sqrt{2} \text{ and } x = -\sqrt{2}}
\]

### Problem 19
\[
|z - i| = |z - 1|
\]
Geometrically, this represents the set of points equidistant from \( i = (0,1) \) and \( 1 = (1,0) \). This is the perpendicular bisector of the line segment joining \( (1,0) \) and \( (0,1) \).
Analytically, substitute \( z = x + iy \):
\[
x^2 + (y - 1)^2 = (x - 1)^2 + y^2
\]
\[
x^2 + y^2 - 2y + 1 = x^2 - 2x + 1 + y^2 \implies y = x
\]
\[
\boxed{\text{The straight line } y = x}
\]

### Problem 20
\[
\bar{z} = z - 1
\]
Let \( z = x + iy \):
\[
x - iy = x + iy - 1 \implies -iy = iy - 1 \implies 2iy = 1
\]
Since \( y \) must be a real number, this equation has no solution (it implies the real part relation \( x = x - 1 \implies 0 = -1 \), which is a contradiction).
\[
\boxed{\text{The empty set (no points satisfy this equation)}}
\]

### Problem 21
\[
\operatorname{Im}(z^2) = 2
\]
Let \( z = x + iy \implies z^2 = x^2 - y^2 + 2xyi \):
\[
2xy = 2 \implies xy = 1 \implies y = \frac{1}{x}
\]
\[
\boxed{\text{A rectangular hyperbola in the first and third quadrants}}
\]

### Problem 22
\[
\operatorname{Re}(z^2) = |\sqrt{3} - i|
\]
First evaluate the right-hand side modulus:
\[
|\sqrt{3} - i| = \sqrt{3 + 1} = 2
\]
Now equate with \( \operatorname{Re}(z^2) = x^2 - y^2 \):
\[
x^2 - y^2 = 2
\]
\[
\boxed{\text{A hyperbola opening horizontally with vertices at } (\pm \sqrt{2}, 0)}
\]

### Problem 23
\[
|z - 1| = 1
\]
Using the definition of a circle \( |z - z_0| = R \):
\[
\boxed{\text{A circle of radius 1 centered at } (1, 0)}
\]

### Problem 24
\[
|z - i| = 2|z - 1|
\]
Square both sides:
\[
|z - i|^2 = 4|z - 1|^2
\]
Substitute \( z = x + iy \):
\[
x^2 + (y - 1)^2 = 4\left[(x - 1)^2 + y^2\right]
\]
\[
x^2 + y^2 - 2y + 1 = 4\left[x^2 - 2x + 1 + y^2\right] = 4x^2 - 8x + 4 + 4y^2
\]
Rearrange and collect terms:
\[
3x^2 + 3y^2 - 8x + 2y + 3 = 0
\]
Divide by 3:
\[
x^2 + y^2 - \frac{8}{3}x + \frac{2}{3}y + 1 = 0
\]
Complete the squares:
\[
\left(x - \frac{4}{3}\right)^2 + \left(y + \frac{1}{3}\right)^2 = -1 + \frac{16}{9} + \frac{1}{9} = \frac{8}{9}
\]
\[
\boxed{\text{A circle centered at } \left(\frac{4}{3}, -\frac{1}{3}\right) \text{ with radius } R = \frac{2\sqrt{2}}{3}}
\]

### Problem 25
\[
|z - 2| = \operatorname{Re}(z)
\]
Substitute \( z = x + iy \). Note that \( \operatorname{Re}(z) = x \ge 0 \):
\[
\sqrt{(x - 2)^2 + y^2} = x \implies (x - 2)^2 + y^2 = x^2
\]
\[
x^2 - 4x + 4 + y^2 = x^2 \implies y^2 = 4x - 4 = 4(x - 1)
\]
Since \( x = 1 + \frac{y^2}{4} \ge 1 \), the condition \( x \ge 0 \) is satisfied automatically.
\[
\boxed{\text{A parabola opening to the right with vertex at } (1, 0) \text{ and focus at } (2, 0)}
\]

### Problem 26
\[
|z| = \operatorname{Re}(z)
\]
Substitute \( z = x + iy \) with \( x \ge 0 \):
\[
\sqrt{x^2 + y^2} = x \implies x^2 + y^2 = x^2 \implies y^2 = 0 \implies y = 0
\]
Since \( y = 0 \) and \( x \ge 0 \):
\[
\boxed{\text{The non-negative real axis (i.e. } z = x \ge 0 \text{)}}
\]

---

## Problems 27 – 28

**Establish the given inequality.**

### Problem 27
**If \( |z| = 2 \), show that \( |z + 6 + 8i| \le 13 \).**

By the triangle inequality:
\[
|z + 6 + 8i| \le |z| + |6 + 8i|
\]
Compute the modulus of the constant term:
\[
|6 + 8i| = \sqrt{36 + 64} = 10
\]
Substitute the values:
\[
|z + 6 + 8i| \le 2 + 10 = 12
\]
Since \( 12 \le 13 \), the inequality \( |z + 6 + 8i| \le 13 \) holds true.

### Problem 28
**If \( |z| = 1 \), show that \( 1 \le |z^2 - 3| \le 4 \).**

1. **Upper Bound:**
   By the triangle inequality:
   \[
   |z^2 - 3| \le |z^2| + |-3| = |z|^2 + 3 = 1^2 + 3 = 4
   \]
2. **Lower Bound:**
   By the reverse triangle inequality:
   \[
   |z^2 - 3| \ge \Big| |z^2| - |-3| \Big| = \Big| |z|^2 - 3 \Big| = |1 - 3| = 2
   \]
   Since \( 2 \ge 1 \), we have \( |z^2 - 3| \ge 1 \).
Combining both results:
\[
1 \le |z^2 - 3| \le 4
\]

---

## Problem 29

**Find an upper bound for the modulus of \( 3z^2 + 2z + 1 \) if \( |z| \le 1 \).**

### Solution

Apply the generalized triangle inequality:
\[
|3z^2 + 2z + 1| \le 3|z|^2 + 2|z| + 1
\]
Substitute the maximum value of \( |z| = 1 \):
\[
|3z^2 + 2z + 1| \le 3(1)^2 + 2(1) + 1 = 6
\]
\[
\boxed{\text{Upper bound} = 6}
\]

---

## Problem 30

**Find an upper bound for the reciprocal of the modulus of \( z^4 - 5z^2 + 6 \) if \( |z| = 2 \).**

### Solution

We want to find an upper bound for:
\[
\frac{1}{|z^4 - 5z^2 + 6|}
\]
This is equivalent to finding a positive lower bound for the denominator \( |z^4 - 5z^2 + 6| \).
**Step 1.** Factor the expression:
\[
z^4 - 5z^2 + 6 = (z^2 - 3)(z^2 - 2)
\]
**Step 2.** Find a lower bound for each factor using the reverse triangle inequality:
* For \( |z^2 - 3| \):
  \[
  |z^2 - 3| \ge \Big| |z|^2 - 3 \Big| = |2^2 - 3| = |4 - 3| = 1
  \]
* For \( |z^2 - 2| \):
  \[
  |z^2 - 2| \ge \Big| |z|^2 - 2 \Big| = |2^2 - 2| = |4 - 2| = 2
  \]
**Step 3.** Combine the lower bounds:
\[
|z^4 - 5z^2 + 6| = |z^2 - 3||z^2 - 2| \ge 1 \times 2 = 2
\]
**Step 4.** Take the reciprocal:
\[
\frac{1}{|z^4 - 5z^2 + 6|} \le \frac{1}{2}
\]
\[
\boxed{\text{Upper bound} = \frac{1}{2}}
\]

---

## Problems 31 – 32

**Find a number \( z \) that satisfies the given equation.**

### Problem 31
\[
|z| - z = 2 + i
\]
Let \( z = x + iy \implies |z| = \sqrt{x^2 + y^2} \):
\[
\sqrt{x^2 + y^2} - (x + iy) = 2 + i
\]
\[
(\sqrt{x^2 + y^2} - x) - yi = 2 + i
\]
Equate real and imaginary parts:
1. **Imaginary parts:**
   \[
   -y = 1 \implies y = -1
   \]
2. **Real parts:**
   \[
   \sqrt{x^2 + y^2} - x = 2
   \]
Substitute \( y = -1 \) into the real equation:
\[
\sqrt{x^2 + 1} - x = 2 \implies \sqrt{x^2 + 1} = x + 2
\]
Square both sides (requiring \( x + 2 \ge 0 \implies x \ge -2 \)):
\[
x^2 + 1 = (x + 2)^2 = x^2 + 4x + 4 \implies 1 = 4x + 4 \implies 4x = -3 \implies x = -\frac{3}{4}
\]
Since \( x = -3/4 \ge -2 \), it is a valid solution.
\[
\boxed{z = -\frac{3}{4} - i}
\]

### Problem 32
\[
|z|^2 + 1 + 12i = 6z
\]
Let \( z = x + iy \implies |z|^2 = x^2 + y^2 \):
\[
(x^2 + y^2) + 1 + 12i = 6(x + iy) = 6x + 6yi
\]
Equate real and imaginary parts:
1. **Imaginary parts:**
   \[
   12 = 6y \implies y = 2
   \]
2. **Real parts:**
   \[
   x^2 + y^2 + 1 = 6x
   \]
Substitute \( y = 2 \) into the real equation:
\[
x^2 + 4 + 1 = 6x \implies x^2 - 6x + 5 = 0
\]
Factor the quadratic:
\[
(x - 1)(x - 5) = 0 \implies x = 1 \quad \text{or} \quad x = 5
\]
The two solutions are:
\[
\boxed{z = 1 + 2i \quad \text{and} \quad z = 5 + 2i}
\]

---

## Focus on Concepts (Problems 33 – 50)

### Problem 33
* **(b) Geometrical relationship of \( z \) and \( \bar{z} \):**
  The complex conjugate \( \bar{z} = a - ib \) is the reflection of \( z = a + ib \) across the **real axis** (\( x \)-axis).
* **(c) Geometrical relationship of \( z \) and \( z_1 = -a + ib \):**
  \( z_1 \) is the reflection of \( z \) across the **imaginary axis** (\( y \)-axis).

### Problem 34
* **(a) Geometrical relationship of \( z \) and \( -z \):**
  \( -z \) is the reflection of \( z \) **through the origin** (equivalently, a rotation of \( 180^\circ \) or \( \pi \) radians).
* **(b) Geometrical relationship of \( z \) and \( z^{-1} \):**
  Since \( z^{-1} = \frac{\bar{z}}{|z|^2} \), the vector points in the direction of the conjugate \( \bar{z} \), but its length is scaled by the factor \( \frac{1}{|z|^2} \).

### Problem 35
* **(b) Effect of multiplying by \( i \) and \( -i \):**
  * Multiplying a complex number by \( i \) corresponds to a **counterclockwise rotation of \( 90^\circ \) (\( \pi/2 \) rad)** about the origin.
  * Multiplying by \( -i \) corresponds to a **clockwise rotation of \( 90^\circ \) (\( \pi/2 \) rad)** about the origin.

### Problem 36
The only complex number with modulus 0 is \( z = 0 \) (since \( \sqrt{x^2+y^2}=0 \implies x=0, y=0 \)).

### Problem 37
The equality \( |z_1 + z_2| = |z_1| + |z_2| \) holds if and only if the vectors \( z_1 \) and \( z_2 \) lie on the same line and point in the **same direction** (i.e., they are positive collinear multiples: \( z_1 = c z_2 \) for some \( c \ge 0 \), or at least one is zero).

### Problem 38
Using complex distance notation, the circle of radius 5 centered at \( z_0 = 3 - 6i \) is:
\[
\boxed{|z - (3 - 6i)| = 5}
\]

### Problem 39
The set of points satisfying \( z = \cos\theta + i\sin\theta \) represents the **unit circle** centered at the origin.

### Problem 40
An ellipse with foci at \( z_1 = -2 + i \) and \( z_2 = 2 + i \) and major axis length 8 has the equation:
\[
\boxed{|z + 2 - i| + |z - 2 - i| = 8}
\]

### Problem 41
Express Cartesian equations in complex form using \( x = \frac{z+\bar{z}}{2} \) and \( y = \frac{z-\bar{z}}{2i} \):
* **(a) \( x=3 \):**
  \[
  \frac{z+\bar{z}}{2} = 3 \implies \boxed{z+\bar{z} = 6}
  \]
* **(b) \( y=10 \):**
  \[
  \frac{z-\bar{z}}{2i} = 10 \implies \boxed{z-\bar{z} = 20i}
  \]
* **(c) \( y=x \):**
  \[
  \frac{z-\bar{z}}{2i} = \frac{z+\bar{z}}{2} \implies z-\bar{z} = i(z+\bar{z}) \implies \boxed{(1-i)z = (1+i)\bar{z}}
  \]
* **(d) \( x+2y=8 \):**
  \[
  \frac{z+\bar{z}}{2} + 2\left(\frac{z-\bar{z}}{2i}\right) = 8 \implies z+\bar{z} - 2i(z-\bar{z}) = 16 \implies \boxed{(1-2i)z + (1+2i)\bar{z} = 16}
  \]

### Problem 42
The line segment connecting two distinct complex numbers \( z_1 \) and \( z_2 \) is:
\[
\boxed{z(t) = (1-t)z_1 + tz_2, \quad 0 \le t \le 1}
\]

### Problem 43
The equation \( z_3 - z_2 = k(z_2 - z_1) \) means the vector from \( z_2 \) to \( z_3 \) is a scalar multiple of the vector from \( z_1 \) to \( z_2 \). Geometrically, this indicates that the three points \( z_1, z_2, z_3 \) are **collinear** (lie on the same straight line).

### Problem 44
Using vector definitions, \( \operatorname{Re}(z_1\bar{z}_2) = x_1 x_2 + y_1 y_2 \). This is exactly the dot product of the vectors \( \vec{z}_1 \cdot \vec{z}_2 = 0 \), indicating they are **orthogonal** (perpendicular).

### Problem 45
By modulus properties:
\[
|w| = \left|\frac{\bar{z}}{z}\right| = \frac{|\bar{z}|}{|z|}
\]
Since \( |\bar{z}| = |z| \), their ratio is \( 1 \).

### Problem 46
Let \( z = x + iy \implies |z| = \sqrt{x^2+y^2} \). Since \( x^2 \le x^2 + y^2 \), taking square roots gives:
\[
|x| \le \sqrt{x^2+y^2} \implies |\operatorname{Re}(z)| \le |z|
\]
Similarly, \( y^2 \le x^2+y^2 \implies |y| \le \sqrt{x^2+y^2} \implies |\operatorname{Im}(z)| \le |z| \).

### Problem 47
* **(a) Show \( |z| = |-z| \):**
  \[
  |-z| = \sqrt{(-x)^2 + (-y)^2} = \sqrt{x^2 + y^2} = |z|
  \]
* **(b) Show \( |z| = |\bar{z}| \):**
  \[
  |\bar{z}| = \sqrt{x^2 + (-y)^2} = \sqrt{x^2 + y^2} = |z|
  \]

### Problem 48
**Prove the parallelogram law \( |z_1 + z_2|^2 + |z_1 - z_2|^2 = 2(|z_1|^2 + |z_2|^2) \).**

Using the identity \( |w|^2 = w\bar{w} \):
\[
|z_1 + z_2|^2 = (z_1 + z_2)(\bar{z}_1 + \bar{z}_2) = z_1\bar{z}_1 + z_1\bar{z}_2 + z_2\bar{z}_1 + z_2\bar{z}_2
\]
\[
|z_1 - z_2|^2 = (z_1 - z_2)(\bar{z}_1 - \bar{z}_2) = z_1\bar{z}_1 - z_1\bar{z}_2 - z_2\bar{z}_1 + z_2\bar{z}_2
\]
Summing both equations:
\[
|z_1 + z_2|^2 + |z_1 - z_2|^2 = 2 z_1\bar{z}_1 + 2 z_2\bar{z}_2 = 2|z_1|^2 + 2|z_2|^2 = 2(|z_1|^2 + |z_2|^2)
\]
which proves the parallelogram law.

### Problem 49
**Prove \( |z_1 z_2| = |z_1||z_2| \).**

Using the identity \( |w|^2 = w\bar{w} \):
\[
|z_1 z_2|^2 = (z_1 z_2)\overline{(z_1 z_2)} = (z_1 z_2)(\bar{z}_1 \bar{z}_2) = (z_1 \bar{z}_1)(z_2 \bar{z}_2) = |z_1|^2 |z_2|^2
\]
Taking the positive square root of both sides:
\[
|z_1 z_2| = |z_1||z_2|
\]

### Problem 50
**Analytical proof of the triangle inequality \( |z_1 + z_2| \le |z_1| + |z_2| \).**

* **(a) Explain why \( |z_1 + z_2|^2 = |z_1|^2 + 2\operatorname{Re}(z_1\bar{z}_2) + |z_2|^2 \):**
  \[
  |z_1 + z_2|^2 = (z_1 + z_2)(\bar{z}_1 + \bar{z}_2) = z_1\bar{z}_1 + (z_1\bar{z}_2 + \bar{z}_1 z_2) + z_2\bar{z}_2
  \]
  Using \( z\bar{z} = |z|^2 \) and \( w + \bar{w} = 2\operatorname{Re}(w) \) for \( w = z_1\bar{z}_2 \):
  \[
  |z_1 + z_2|^2 = |z_1|^2 + 2\operatorname{Re}(z_1\bar{z}_2) + |z_2|^2
  \]
* **(b) Explain why \( (|z_1| + |z_2|)^2 = |z_1|^2 + 2|z_1\bar{z}_2| + |z_2|^2 \):**
  \[
  (|z_1| + |z_2|)^2 = |z_1|^2 + 2|z_1||z_2| + |z_2|^2
  \]
  Since \( |z_2| = |\bar{z}_2| \) and \( |z_1||\bar{z}_2| = |z_1\bar{z}_2| \):
  \[
  (|z_1| + |z_2|)^2 = |z_1|^2 + 2|z_1\bar{z}_2| + |z_2|^2
  \]
* **(c) Derive the inequality:**
  By Problem 46, we know that for any complex number, the real part is less than or equal to its absolute value. Thus:
  \[
  \operatorname{Re}(z_1\bar{z}_2) \le |z_1\bar{z}_2|
  \]
  Substitute this into the result from part (a):
  \[
  |z_1 + z_2|^2 = |z_1|^2 + 2\operatorname{Re}(z_1\bar{z}_2) + |z_2|^2 \le |z_1|^2 + 2|z_1\bar{z}_2| + |z_2|^2 = (|z_1| + |z_2|)^2
  \]
  Taking positive square roots yields:
  \[
  |z_1 + z_2| \le |z_1| + |z_2|
  \]
