# Complex Analysis — Dennis G. Zill, 2nd Edition
## Chapter 1 · Section 1.5 — Sets of Points in the Complex Plane
### Problems 1 – 50 · Complete Solutions


> **Key Concepts for Sets**
>
> 1. **Common Regions:**
>    * **Circle:** \( |z - z_0| = \rho \)
>    * **Open Disk:** \( |z - z_0| < \rho \)
>    * **Closed Disk:** \( |z - z_0| \le \rho \)
>    * **Annulus:** \( \rho_1 < |z - z_0| < \rho_2 \)
> 2. **Topological Properties:**
>    * **Open Set:** Every point has a neighborhood contained entirely within the set.
>    * **Closed Set:** Contains all its boundary points.
>    * **Connected Set:** Any two points can be joined by a polygonal line segment lying entirely in the set.
>    * **Domain:** An open, connected set.
>    * **Bounded Set:** Can be enclosed entirely within a sufficiently large disk centered at the origin.
> 3. **Stereographic Projection:** Maps a point \( z = a + ib \) in the complex plane to a point \( (x_0, y_0, u_0) \) on the Riemann sphere \( x^2 + y^2 + u^2 = 1 \):
>    \[
>    x_0 = \frac{2a}{|z|^2 + 1}, \quad y_0 = \frac{2b}{|z|^2 + 1}, \quad u_0 = \frac{|z|^2 - 1}{|z|^2 + 1}
>    \]


## Problem 1

**Sketch the graph of the given equation in the complex plane.**

**\( |z - 4 + 3i| = 5 \)**

* **Equation:** \( |z - (4 - 3i)| = 5 \)
* **Geometric Interpretation:** A circle of radius \( R = 5 \) centered at the point \( z_0 = 4 - 3i \) (or Cartesian coordinate \( (4, -3) \)).
* **Cartesian Equation:** \( (x - 4)^2 + (y + 3)^2 = 25 \)

### Solution

* **Boundary:** Included (solid line).

---

## Problem 2

**Sketch the graph of the given equation in the complex plane.**

**\( |z + 2 + 2i| = 2 \)**

* **Equation:** \( |z - (-2 - 2i)| = 2 \)
* **Geometric Interpretation:** A circle of radius \( R = 2 \) centered at the point \( z_0 = -2 - 2i \) (or Cartesian coordinate \( (-2, -2) \)).
* **Cartesian Equation:** \( (x + 2)^2 + (y + 2)^2 = 4 \)

### Solution

* **Boundary:** Included (solid line).

---

## Problem 3

**Sketch the graph of the given equation in the complex plane.**

**\( |z + 3i| = 2 \)**

* **Equation:** \( |z - (-3i)| = 2 \)
* **Geometric Interpretation:** A circle of radius \( R = 2 \) centered at the point \( z_0 = -3i \) (or Cartesian coordinate \( (0, -3) \)).
* **Cartesian Equation:** \( x^2 + (y + 3)^2 = 4 \)

### Solution

* **Boundary:** Included (solid line).

---

## Problem 4

**Sketch the graph of the given equation in the complex plane.**

**\( |2z - 1| = 4 \)**

* **Equation:** \( 2\left|z - \frac{1}{2}\right| = 4 \implies \left|z - \frac{1}{2}\right| = 2 \)
* **Geometric Interpretation:** A circle of radius \( R = 2 \) centered at the point \( z_0 = \frac{1}{2} \) (or Cartesian coordinate \( (1/2, 0) \)).
* **Cartesian Equation:** \( \left(x - \frac{1}{2}\right)^2 + y^2 = 4 \)

### Solution

* **Boundary:** Included (solid line).

---

## Problem 5

**Sketch the graph of the given equation in the complex plane.**

**\( \operatorname{Re}(z) = 5 \)**

* **Geometric Interpretation:** A vertical line.
* **Cartesian Equation:** \( x = 5 \)

### Solution

* **Boundary:** Included (solid line).

---

## Problem 6

**Sketch the graph of the given equation in the complex plane.**

**\( \operatorname{Im}(z) = -2 \)**

* **Geometric Interpretation:** A horizontal line.
* **Cartesian Equation:** \( y = -2 \)

### Solution

* **Boundary:** Included (solid line).

---

## Problem 7

**Sketch the graph of the given equation in the complex plane.**

**\( \operatorname{Im}(\bar{z} + 3i) = 6 \)**

* **Simplify:** Let \( z = x + iy \implies \bar{z} = x - iy \).
  \[
  \bar{z} + 3i = x - iy + 3i = x + (3 - y)i
  \]
  \[
  \operatorname{Im}(\bar{z} + 3i) = 3 - y = 6 \implies y = -3
  \]
* **Geometric Interpretation:** A horizontal line.
* **Cartesian Equation:** \( y = -3 \)

### Solution

* **Boundary:** Included (solid line).

---

## Problem 8

**Sketch the graph of the given equation in the complex plane.**

**\( \operatorname{Im}(z - i) = \operatorname{Re}(z + 4 - 3i) \)**

* **Simplify:** Let \( z = x + iy \).
  * LHS: \( \operatorname{Im}(x + i(y-1)) = y - 1 \)
  * RHS: \( \operatorname{Re}((x+4) + i(y-3)) = x + 4 \)
  Set equal: \( y - 1 = x + 4 \implies y = x + 5 \)
* **Geometric Interpretation:** A line with slope \( 1 \) and \( y \)-intercept \( 5 \).
* **Cartesian Equation:** \( y = x + 5 \)

### Solution

* **Boundary:** Included (solid line).

---

## Problem 9

**Sketch the graph of the given equation in the complex plane.**

**\( |\operatorname{Re}(1 + i\bar{z})| = 3 \)**

* **Simplify:** Let \( z = x + iy \implies \bar{z} = x - iy \).
  \[
  1 + i\bar{z} = 1 + i(x - iy) = 1 + y + ix \implies \operatorname{Re}(1 + i\bar{z}) = 1 + y
  \]
  Set equal: \( |1 + y| = 3 \implies 1 + y = 3 \text{ or } 1 + y = -3 \implies y = 2 \text{ or } y = -4 \)
* **Geometric Interpretation:** A pair of parallel horizontal lines.
* **Cartesian Equations:** \( y = 2 \) and \( y = -4 \)

### Solution

* **Boundary:** Included (solid line).

---

## Problem 10

**Sketch the graph of the given equation in the complex plane.**

**\( z^2 + \bar{z}^2 = 2 \)**

* **Simplify:** Let \( z = x + iy \implies z^2 = x^2 - y^2 + 2ixy \).
  \[
  z^2 + \bar{z}^2 = (x^2 - y^2 + 2ixy) + (x^2 - y^2 - 2ixy) = 2(x^2 - y^2)
  \]
  Set equal: \( 2(x^2 - y^2) = 2 \implies x^2 - y^2 = 1 \)
* **Geometric Interpretation:** A hyperbola opening horizontally with vertices at \( (\pm 1, 0) \).
* **Cartesian Equation:** \( x^2 - y^2 = 1 \)

### Solution

* **Boundary:** Included (solid line).

---

## Problem 11

**Sketch the graph of the given equation in the complex plane.**

**\( \operatorname{Re}(z^2) = 1 \)**

* **Simplify:** Let \( z = x + iy \implies z^2 = x^2 - y^2 + 2ixy \implies \operatorname{Re}(z^2) = x^2 - y^2 \).
  Set equal: \( x^2 - y^2 = 1 \)
* **Geometric Interpretation:** A hyperbola opening horizontally with vertices at \( (\pm 1, 0) \) (identical to Problem 10).
* **Cartesian Equation:** \( x^2 - y^2 = 1 \)

### Solution

* **Boundary:** Included (solid line).

---

## Problem 12

**Sketch the graph of the given equation in the complex plane.**

**\( \arg(z) = \pi/4 \)**

* **Geometric Interpretation:** A ray emanating from the origin (origin excluded) making a \( 45^\circ \) angle with the positive real axis.
* **Cartesian Form:** \( y = x \) for \( x > 0 \)

### Solution

* **Boundary:** Solid ray line, excluding the point \( (0,0) \).

---

## Problems 13 – 24

**Sketch the set \( S \) of points in the complex plane satisfying the given inequality. Determine whether the set is (a) open, (b) closed, (c) a domain, (d) bounded, or (e) connected.**

---

## Problem 13

**Sketch the set \( S \) of points in the complex plane satisfying the given inequality. Determine whether the set is (a) open, (b) closed, (c) a domain, (d) bounded, or (e) connected:**

\[
\operatorname{Re}(z) < -1
\]

### Solution

Let \( z = x + iy \). The inequality is \( x < -1 \). This represents the open half-plane to the left of the vertical line \( x = -1 \).

* **Open:** Yes, since for every point in the set, we can find a small neighborhood contained entirely within the set.
* **Closed:** No, because the boundary line \( x = -1 \) is not included in the set.
* **Domain:** Yes, since the set is open and connected.
* **Bounded:** No, since it extends infinitely to the left and vertically.
* **Connected:** Yes, since any two points in the set can be joined by a line segment lying entirely within the set.

---

## Problem 14

**Sketch the set \( S \) of points in the complex plane satisfying the given inequality. Determine whether the set is (a) open, (b) closed, (c) a domain, (d) bounded, or (e) connected:**

\[
|\operatorname{Re}(z)| > 2
\]

### Solution

The inequality is equivalent to \( x > 2 \) or \( x < -2 \). This represents the union of two disjoint open half-planes: one to the right of \( x = 2 \) and one to the left of \( x = -2 \).

* **Open:** Yes, since it is the union of two open half-planes.
* **Closed:** No, since the boundary lines \( x = 2 \) and \( x = -2 \) are not in the set.
* **Domain:** No, since the set is not connected.
* **Bounded:** No, since it extends infinitely.
* **Connected:** No, because a path connecting a point in the right half-plane (e.g. \( 3 \)) to a point in the left half-plane (e.g. \( -3 \)) must cross the excluded vertical strip \( -2 \le x \le 2 \).

---

## Problem 15

**Sketch the set \( S \) of points in the complex plane satisfying the given inequality. Determine whether the set is (a) open, (b) closed, (c) a domain, (d) bounded, or (e) connected:**

\[
\operatorname{Im}(z) > 3
\]

### Solution

Let \( z = x + iy \). The inequality is \( y > 3 \). This represents the open half-plane above the horizontal line \( y = 3 \).

* **Open:** Yes, since every point has a neighborhood contained entirely in the set.
* **Closed:** No, since the boundary line \( y = 3 \) is not in the set.
* **Domain:** Yes, since the set is open and connected.
* **Bounded:** No, since it extends infinitely in the horizontal and upward directions.
* **Connected:** Yes, since any two points in the set can be joined by a straight line segment.

---

## Problem 16

**Sketch the set \( S \) of points in the complex plane satisfying the given inequality. Determine whether the set is (a) open, (b) closed, (c) a domain, (d) bounded, or (e) connected:**

\[
\operatorname{Re}((2+i)z+1) > 0
\]

### Solution

Let \( z = x + iy \). We compute the argument of the real part operator:
\[
(2+i)(x+iy)+1 = 2x + 2iy + ix - y + 1 = (2x - y + 1) + i(x + 2y)
\]
Taking the real part:
\[
\operatorname{Re}((2+i)z+1) = 2x - y + 1 > 0 \implies y < 2x + 1
\]
This represents the open half-plane below the line \( y = 2x + 1 \).

* **Open:** Yes, since it is an open half-plane.
* **Closed:** No, since the boundary line \( y = 2x + 1 \) is not in the set.
* **Domain:** Yes, since it is open and connected.
* **Bounded:** No, since it extends infinitely.
* **Connected:** Yes, since any two points in the half-plane can be connected by a line segment.

---

## Problem 17

**Sketch the set \( S \) of points in the complex plane satisfying the given inequality. Determine whether the set is (a) open, (b) closed, (c) a domain, (d) bounded, or (e) connected:**

\[
2 < \operatorname{Re}(z-1) < 4
\]

### Solution

Let \( z = x + iy \). Then \( \operatorname{Re}(z-1) = x - 1 \).
Substituting into the inequality:
\[
2 < x - 1 < 4 \implies 3 < x < 5
\]
This is an infinite open vertical strip between the lines \( x = 3 \) and \( x = 5 \).

* **Open:** Yes, since it is defined by strict inequalities.
* **Closed:** No, since the boundary lines \( x = 3 \) and \( x = 5 \) are not in the set.
* **Domain:** Yes, since it is open and connected.
* **Bounded:** No, since it extends infinitely in the vertical direction.
* **Connected:** Yes, since any two points in the vertical strip can be joined by a line segment.

---

## Problem 18

**Sketch the set \( S \) of points in the complex plane satisfying the given inequality. Determine whether the set is (a) open, (b) closed, (c) a domain, (d) bounded, or (e) connected:**

\[
-1 \le \operatorname{Im}(z) < 4
\]

### Solution

Let \( z = x + iy \). The inequality is \( -1 \le y < 4 \). This represents a horizontal strip bounded below by the horizontal line \( y = -1 \) (included) and above by the line \( y = 4 \) (excluded).

* **Open:** No, because any neighborhood around a point on the boundary line \( y = -1 \) contains points with \( y < -1 \) which are outside the set.
* **Closed:** No, because the boundary points on the line \( y = 4 \) are not in the set.
* **Domain:** No, since it is not open.
* **Bounded:** No, since it extends infinitely in the horizontal direction.
* **Connected:** Yes, since any two points in the strip can be joined by a line segment lying entirely in the strip.

---

## Problem 19

**Sketch the set \( S \) of points in the complex plane satisfying the given inequality. Determine whether the set is (a) open, (b) closed, (c) a domain, (d) bounded, or (e) connected:**

\[
\operatorname{Re}(z^2) > 0
\]

### Solution

Let \( z = x + iy \). Then \( z^2 = x^2 - y^2 + 2ixy \implies \operatorname{Re}(z^2) = x^2 - y^2 > 0 \implies x^2 > y^2 \implies |x| > |y| \).
This represents two open V-shaped sectors containing the positive and negative real axes, bounded by the lines \( y = x \) and \( y = -x \), meeting at the origin (origin excluded).

* **Open:** Yes, since it is defined by a strict inequality.
* **Closed:** No, since the boundary lines \( y = \pm x \) are not in the set.
* **Domain:** No, since the set is not connected.
* **Bounded:** No, since the sectors extend infinitely.
* **Connected:** No, because a path connecting a point in the right sector (e.g. \( 1 \)) to a point in the left sector (e.g. \( -1 \)) must pass through the origin \( (0,0) \), which is excluded from the set.

---

## Problem 20

**Sketch the set \( S \) of points in the complex plane satisfying the given inequality. Determine whether the set is (a) open, (b) closed, (c) a domain, (d) bounded, or (e) connected:**

\[
\operatorname{Im}(z) < \operatorname{Re}(z)
\]

### Solution

Let \( z = x + iy \). The inequality is \( y < x \). This represents the open half-plane below the line \( y = x \).

* **Open:** Yes, since it is defined by a strict inequality.
* **Closed:** No, since the boundary line \( y = x \) is not in the set.
* **Domain:** Yes, since the set is open and connected.
* **Bounded:** No, since it extends infinitely.
* **Connected:** Yes, since any two points in the set can be joined by a line segment.

---

## Problem 21

**Sketch the set \( S \) of points in the complex plane satisfying the given inequality. Determine whether the set is (a) open, (b) closed, (c) a domain, (d) bounded, or (e) connected:**

\[
|z-i| > 1
\]

### Solution

The inequality represents the set of all points whose distance from \( i \) is strictly greater than 1. Geometrically, this is the exterior of the circle of radius 1 centered at \( i \).

* **Open:** Yes, since every point has a neighborhood contained entirely in the set.
* **Closed:** No, since the boundary circle \( |z - i| = 1 \) is not in the set.
* **Domain:** Yes, since the set is open and connected.
* **Bounded:** No, since it extends infinitely outward.
* **Connected:** Yes, since any two points in the exterior can be connected by a path going around the excluded disk.

---

## Problem 22

**Sketch the set \( S \) of points in the complex plane satisfying the given inequality. Determine whether the set is (a) open, (b) closed, (c) a domain, (d) bounded, or (e) connected:**

\[
2 < |z-i| < 3
\]

### Solution

The inequality represents the set of points whose distance from \( i \) is strictly between 2 and 3. Geometrically, this is the open annulus centered at \( i \) with inner radius 2 and outer radius 3.

* **Open:** Yes, since it is defined by strict inequalities.
* **Closed:** No, since the boundary circles \( |z-i| = 2 \) and \( |z-i| = 3 \) are not in the set.
* **Domain:** Yes, since the set is open and connected.
* **Bounded:** Yes, since the set is bounded (e.g., lies within the disk \( |z| < 4 \)).
* **Connected:** Yes, since any two points in the annulus can be connected by a path lying entirely within the annulus.

---

## Problem 23

**Sketch the set \( S \) of points in the complex plane satisfying the given inequality. Determine whether the set is (a) open, (b) closed, (c) a domain, (d) bounded, or (e) connected:**

\[
1 \le |z - 1 - i| < 2
\]

### Solution

The inequality represents the set of points whose distance from \( 1+i \) is at least 1 but strictly less than 2. Geometrically, this is a semi-open annulus centered at \( 1+i \) where the inner boundary circle \( |z - 1 - i| = 1 \) is included and the outer boundary circle \( |z - 1 - i| = 2 \) is excluded.

* **Open:** No, since points on the inner circle have neighborhoods containing points outside the set.
* **Closed:** No, since boundary points on the outer circle are not in the set.
* **Domain:** No, since the set is not open.
* **Bounded:** Yes, since it is bounded.
* **Connected:** Yes, since any two points can be connected by a path.

---

## Problem 24

**Sketch the set \( S \) of points in the complex plane satisfying the given inequality. Determine whether the set is (a) open, (b) closed, (c) a domain, (d) bounded, or (e) connected:**

\[
2 \le |z - 3 + 4i| \le 5
\]

### Solution

The inequality represents the set of points whose distance from \( 3-4i \) is between 2 and 5 (inclusive). Geometrically, this is a closed annulus centered at \( 3-4i \) where both the inner boundary circle (radius 2) and the outer boundary circle (radius 5) are included.

* **Open:** No, since it contains its boundary points.
* **Closed:** Yes, since it contains all its boundary points.
* **Domain:** No, since the set is not open.
* **Bounded:** Yes, since the set is bounded.
* **Connected:** Yes, since any two points can be connected by a path.

---

## Problem 25

**Give the boundary points of the sets in Problems 13 – 24.**

### Solution

* **Problem 13:** The vertical line \( x = -1 \).
* **Problem 14:** The two vertical lines \( x = 2 \) and \( x = -2 \).
* **Problem 15:** The horizontal line \( y = 3 \).
* **Problem 16:** The line \( y = 2x + 1 \).
* **Problem 17:** The two vertical lines \( x = 3 \) and \( x = 5 \).
* **Problem 18:** The two horizontal lines \( y = -1 \) and \( y = 4 \).
* **Problem 19:** The two straight lines \( y = x \) and \( y = -x \).
* **Problem 20:** The line \( y = x \).
* **Problem 21:** The circle \( |z - i| = 1 \).
* **Problem 22:** The two concentric circles \( |z - i| = 2 \) and \( |z - i| = 3 \).
* **Problem 23:** The two concentric circles \( |z - (1+i)| = 1 \) and \( |z - (1+i)| = 2 \).
* **Problem 24:** The two concentric circles \( |z - (3-4i)| = 2 \) and \( |z - (3-4i)| = 5 \).

---

## Problem 26

**Consider the set \( S \) consisting of the complex plane with the circle \( |z| = 5 \) deleted.**

### Solution

* **Boundary Points:** The circle \( |z| = 5 \).
* **Connectivity:** **No**, \( S \) is not connected. It is partitioned into the interior region \( |z| < 5 \) and the exterior region \( |z| > 5 \). Any path connecting a point in the interior to a point in the exterior must cross the deleted circle boundary, which is not in \( S \).

---

## Problem 27

**Sketch the set of points in the complex plane satisfying the given inequality or description.**

**\( 0 \le \arg(z) \le \pi/6 \)**



### Solution

* **Description:** An infinite sector of angle \( 30^\circ \) in Quadrant I, bounded by the positive real axis and the ray \( y = \frac{1}{\sqrt{3}}x \) for \( x > 0 \). The origin is excluded (argument is undefined).

---

## Problem 28

**Sketch the set of points in the complex plane satisfying the given inequality or description.**

**\( -\pi < \arg(z) < \pi/2 \)**



### Solution

* **Description:** An infinite sector extending from the negative real axis (exclusive) counterclockwise to the positive imaginary axis (exclusive). This includes all of Quadrants I, III, and IV, excluding the boundary rays.

---

## Problem 29

**Sketch the set of points in the complex plane satisfying the given inequality or description.**

**Describe the set shown in Figure 1.25.**



### Solution

* **Analysis:** The boundary consists of two solid rays emanating from the origin with angles \( 2\pi/3 \) and \( -2\pi/3 \). The shaded region contains the positive real axis.
* **Inequality:**
  \[
  \boxed{-\frac{2\pi}{3} \le \operatorname{arg}(z) \le \frac{2\pi}{3}} \quad \text{or} \quad \boxed{|\operatorname{arg}(z)| \le \frac{2\pi}{3}}
  \]

![Figure 1.25](../../extracted_figures/figure_1_25.png)

---

## Problem 30

**Sketch the set of points in the complex plane satisfying the given inequality or description.**

**Describe the set shown in Figure 1.26.**



### Solution

* **Analysis:** The boundary is the imaginary axis (solid vertical line), and the shaded region is the left half-plane.
* **Inequality:**
  \[
  \boxed{\frac{\pi}{2} \le \operatorname{arg}(z) \le \frac{3\pi}{2}} \quad \text{or} \quad \boxed{|\operatorname{arg}(z)| \ge \frac{\pi}{2}}
  \]

![Figure 1.26](../../extracted_figures/figure_1_26.png)

---

## Problem 31

**Solve the given pair of simultaneous equations.**

**\( |z| = 2 \) and \( |z - 2| = 2 \)**

These equations represent two circles:
1. \( x^2 + y^2 = 4 \) (Circle centered at origin)
2. \( (x - 2)^2 + y^2 = 4 \implies x^2 - 4x + 4 + y^2 = 4 \implies x^2 - 4x + y^2 = 0 \)

### Solution

Subtracting the second equation from the first:
\[
(x^2 + y^2) - (x^2 - 4x + y^2) = 4 - 0
\]
\[
4x = 4 \implies x = 1
\]
Substitute \( x = 1 \) back into the first circle:
\[
1^2 + y^2 = 4 \implies y^2 = 3 \implies y = \pm \sqrt{3}
\]
The two solutions are:
\[
\boxed{z = 1 + \sqrt{3}i \quad \text{and} \quad z = 1 - \sqrt{3}i}
\]

---

## Problem 32

**Solve the given pair of simultaneous equations.**

**\( |z - i| = 5 \) and \( \arg(z) = \pi/4 \)**

* Since \( \arg(z) = \pi/4 \), we can write \( z = x + ix \) for some \( x > 0 \).
* Substitute \( z = x + ix \) into the circle equation:
  \[
  |x + ix - i| = 5 \implies |x + i(x - 1)| = 5
  \]
  \[
  x^2 + (x - 1)^2 = 25
  \]
  \[
  x^2 + x^2 - 2x + 1 = 25 \implies 2x^2 - 2x - 24 = 0
  \]
  \[
  x^2 - x - 12 = 0 \implies (x - 4)(x + 3) = 0
  \]
* Since \( x > 0 \), we select \( x = 4 \).
* The solution is:
  \[
  \boxed{z = 4 + 4i}
  \]

### Solution



---

## Problem 33

If \( \rho_1 = 0 \), the inequality \( 0 < |z - z_0| \) defines the set of all complex numbers except \( z = z_0 \). This is a **punctured or deleted complex plane**.

### Solution

For \( |z + 2 - 5i| > 0 \), it represents **the entire complex plane excluding the single point \( z_0 = -2 + 5i \)**.

---

## Problem 34

* **(a)** The boundary points of a deleted neighborhood of \( z_0 \) (defined by \( 0 < |z - z_0| < \rho \)) are **the center point \( z_0 \)** and **the outer circle \( |z - z_0| = \rho \)**.

### Solution

* **(b)** The boundary points of the complex plane \( \mathbb{C} \) is **the empty set \( \emptyset \)** because \( \mathbb{C} \) has no boundary points in \( \mathbb{C} \).
* **(c)** Examples of sets that are neither open nor closed:
  1. The half-open line segment \( \{ z = x \in \mathbb{R} : 0 \le x < 1 \} \).
  2. The half-open disk \( \{ z \in \mathbb{C} : |z| \le 1 \} \setminus \{ 1 \} \).
  3. The semi-open annulus \( 1 < |z| \le 2 \).

---

## Problem 35

* **(a) Connected Sets:**

### Solution

1. Open disk: \( |z| < 1 \)
  2. Entire plane: \( \mathbb{C} \)
  3. Upper half-plane: \( \operatorname{Im}(z) > 0 \)
  4. Closed annulus: \( 1 \le |z| \le 2 \)
  5. Ray: \( \arg(z) = \pi/4 \)
* **(b) Disconnected Sets:**
  1. Disjoint half-planes: \( |\operatorname{Re}(z)| > 1 \)
  2. Punctured plane minus an axis: \( \mathbb{C} \setminus \operatorname{Re}(z) \)
  3. Finite set: \( \{ 1, 2 \} \)
  4. Union of two disjoint disks: \( |z| < 1 \cup |z - 3| < 1 \)
  5. Punctured plane: \( \operatorname{Re}(z) \ne 0 \)

---

## Problem 36

Let \( z \) lie in the disk \( |z - z_0| \le \rho \). By the triangle inequality:
\[
|z| = |z - z_0 + z_0| \le |z - z_0| + |z_0| \le \rho + |z_0|
\]

### Solution

Since \( \rho + |z_0| \) is a finite real number, we can choose any real number \( R > \rho + |z_0| \). Then \( |z| < R \) for all \( z \) in the disk, proving that the disk is bounded.

---

## Problem 37

The equation \( |z - z_0| = |z - z_1| \) states that the distance from \( z \) to \( z_0 \) is equal to the distance from \( z \) to \( z_1 \). This defines the **perpendicular bisector of the line segment joining the points \( z_0 \) and \( z_1 \)**.

### Solution



---

## Problem 38

The equation \( |z - i| + |z + i| = 1 \) represents the set of points where the sum of the distances to the two foci \( i \) and \( -i \) is \( 1 \).
However, the distance between the two foci is \( |i - (-i)| = 2 \). By the triangle inequality, for any point \( z \):
\[
|z - i| + |z + i| \ge |(z - i) - (z + i)| = 2
\]

### Solution

Since a sum of distances cannot be less than the distance between the points, the equation has no solutions.
**The set of points is the empty set \( \emptyset \).**

---

## Problem 39



### Solution

* **Analysis:** The shaded region is exterior to the circle of radius 3 centered at \( 3i \) and exterior to the circle of radius 2 centered at \( -i \). Both boundaries are included.
* **Set Notation:**
  \[
  \boxed{\{ z : |z - 3i| \ge 3 \text{ and } |z + i| \ge 2 \}}
  \]

![Figure 1.27](../../extracted_figures/figure_1_27.png)

---

## Problem 40



### Solution

* **Analysis:** The shaded region is a half-annulus in the upper half-plane, bounded by circles of radius \( r \) and \( R \). All boundaries are included.
* **Set Notation:**
  \[
  \boxed{\{ z : r \le |z| \le R \text{ and } \operatorname{Im}(z) \ge 0 \}} \quad \text{or} \quad \boxed{\{ z : r \le |z| \le R \text{ and } 0 \le \operatorname{arg}(z) \le \pi \}}
  \]

![Figure 1.28](../../extracted_figures/figure_1_28.png)

---

## Problem 41

For the set \( S = \{ i/n : n = 1, 2, 3, \dots \} \):

### Solution

* **Boundary:** Every point in \( S \) is a boundary point, and the limit point \( 0 \) (which is not in \( S \)) is also a boundary point. The set of boundary points is \( S \cup \{0\} \).
* **Open:** **No**, no point has a neighborhood contained entirely in \( S \).
* **Closed:** **No**, the boundary point \( 0 \) is not contained in the set.
* **Connected:** **No**, it consists of isolated points.
* **Bounded:** **Yes**, all points lie within the neighborhood \( |z| < 2 \).

---

## Problem 42

Yes, a finite set \( S = \{ z_1, z_2, \dots, z_n \} \) is always bounded.

### Solution

*Proof:* Let \( M = \max\{ |z_1|, |z_2|, \dots, |z_n| \} \). Since the set is finite, the maximum exists and is a finite real number. We can choose \( R = M + 1 \). Then \( |z| < R \) for all \( z \in S \), verifying that the set is bounded.

---

## Problem 43

* **(a) \( |z-2+i| < 3 \):** **Convex**. All open/closed disks are convex.

### Solution

* **(b) \( 1 < |z| < 2 \):** **Not Convex**. A line segment connecting two opposite points (e.g. \( 1.5 \) and \( -1.5 \)) passes through \( 0 \), which is not in the set.
* **(c) \( x > 2, y \le -1 \):** **Convex**. An intersection of two half-planes is convex.
* **(d) \( y < x^2 \):** **Not Convex**. The points \( (-2, 3) \) and \( (2, 3) \) lie in the region, but their midpoint \( (0, 3) \) does not since \( 3 \not< 0 \).
* **(e) \( \operatorname{Re}(z) \le 5 \):** **Convex**. A half-plane is always convex.
* **(f) \( \operatorname{Re}(z) \ne 0 \):** **Not Convex**. The points \( 1 \) and \( -1 \) are in the set, but their midpoint \( 0 \) is not.

---

## Problem 44

**Yes**. By definition, any two points in a convex set can be joined by a straight line segment that lies entirely within the set. Since a line segment is a continuous path, every convex set is path-connected and therefore connected.

### Solution



---

## Problem 45

**Yes, the empty set \( \emptyset \) is open.**

### Solution

A set is open if for every element in the set, there exists a neighborhood around it contained in the set. Since \( \emptyset \) contains no elements, the condition is vacuously true.
*(Note: It is also closed, as its complement is \( \mathbb{C} \), which is open).*

---

## Problem 46

* **(a) Union:** **Yes**, the union of any family of open sets is open.

### Solution

*Proof:* Let \( z \in S_1 \cup S_2 \). Then \( z \in S_1 \) or \( z \in S_2 \). If \( z \in S_1 \), since \( S_1 \) is open, there is a neighborhood \( N(z, \epsilon) \subset S_1 \subset S_1 \cup S_2 \). The same applies if \( z \in S_2 \). Thus, \( S_1 \cup S_2 \) is open.
* **(b) Intersection:** **Yes**, the finite intersection of open sets is open.
  *Proof:* Let \( z \in S_1 \cap S_2 \implies z \in S_1 \) and \( z \in S_2 \). Since they are open, there exist \( N(z, \epsilon_1) \subset S_1 \) and \( N(z, \epsilon_2) \subset S_2 \). Let \( \epsilon = \min(\epsilon_1, \epsilon_2) > 0 \). Then \( N(z, \epsilon) \subset S_1 \cap S_2 \), proving the intersection is open.

---

## Problem 47

The intersection of the line from \( (a, 0) \) to \( (0, 1) \) with the circle \( x_0^2 + y_0^2 = 1 \) yields:
\[
x_0 = \frac{2a}{a^2 + 1}, \quad y_0 = \frac{a^2 - 1}{a^2 + 1}
\]

### Solution

* **For \( a = -1/4 \):** \( x_0 = \frac{-1/2}{17/16} = -\frac{8}{17} \), \( y_0 = \frac{-15/16}{17/16} = -\frac{15}{17} \implies \boxed{\left(-\frac{8}{17}, -\frac{15}{17}\right)} \)
* **For \( a = 1/2 \):** \( x_0 = \frac{1}{5/4} = \frac{4}{5} \), \( y_0 = \frac{-3/4}{5/4} = -\frac{3}{5} \implies \boxed{\left(\frac{4}{5}, -\frac{3}{5}\right)} \)
* **For \( a = -3 \):** \( x_0 = \frac{-6}{10} = -\frac{3}{5} \), \( y_0 = \frac{8}{10} = \frac{4}{5} \implies \boxed{\left(-\frac{3}{5}, \frac{4}{5}\right)} \)
* **For \( a = 1 \):** \( x_0 = \frac{2}{2} = 1 \), \( y_0 = \frac{0}{2} = 0 \implies \boxed{(1, 0)} \)
* **For \( a = 10 \):** \( x_0 = \frac{20}{101} \), \( y_0 = \frac{99}{101} \implies \boxed{\left(\frac{20}{101}, \frac{99}{101}\right)} \)

---

## Problem 48

For \( z = 2 + 5i \implies a = 2, b = 5, |z|^2 = 29 \):
\[
x_0 = \frac{2(2)}{29 + 1} = \frac{4}{30} = \frac{2}{15}
\]
\[
y_0 = \frac{2(5)}{29 + 1} = \frac{10}{30} = \frac{1}{3}
\]
\[
u_0 = \frac{29 - 1}{29 + 1} = \frac{28}{30} = \frac{14}{15}
\]

### Solution

* **Point on Sphere:** \( \boxed{\left(\frac{2}{15}, \frac{1}{3}, \frac{14}{15}\right)} \)

---

## Problem 49

* **(a) Unit Circle \( |z| = 1 \):** Corresponds to the points where \( u_0 = 0 \). This is the **equator** of the unit sphere.

### Solution

* **(b) Inside Disk \( |z| < 1 \):** Corresponds to the points where \( u_0 < 0 \). This is the **entire lower hemisphere** (including the south pole \( (0,0,-1) \)).
* **(c) Exterior \( |z| > 1 \):** Corresponds to the points where \( u_0 > 0 \). This is the **entire upper hemisphere** (excluding the north pole \( (0,0,1) \)).

---

## Problem 50

To find the line containing \( (0, 0, 1) \) and \( (a, b, 0) \), we parameterize it:
\[
\mathbf{L}(t) = (1 - t)(0, 0, 1) + t(a, b, 0) = (ta, tb, 1 - t)
\]
We find the intersection with the unit sphere:
\[
(ta)^2 + (tb)^2 + (1-t)^2 = 1 \implies t^2(a^2 + b^2) + 1 - 2t + t^2 = 1
\]
\[
t^2(a^2 + b^2 + 1) = 2t
\]
Since \( t \ne 0 \) (excluding the north pole itself):
\[
t = \frac{2}{a^2 + b^2 + 1}
\]
Substitute \( t \) back into the parameterization:
\[
x_0 = \frac{2a}{a^2 + b^2 + 1}, \quad y_0 = \frac{2b}{a^2 + b^2 + 1}, \quad u_0 = 1 - t = \frac{a^2 + b^2 - 1}{a^2 + b^2 + 1}
\]

### Solution

These formulas match the stereographic projection coordinates exactly.

---

