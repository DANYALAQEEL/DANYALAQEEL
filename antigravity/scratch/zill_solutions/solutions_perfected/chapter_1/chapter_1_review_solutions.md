# Complex Analysis — Dennis G. Zill, 2nd Edition
## Chapter 1 — Review Quiz
### Problems 1 – 50 · Complete Solutions


## Problem 1

**Answer True or False. If the statement is false, justify your answer by explaining why it is false or providing a counterexample; if true, justify it by proving the statement or citing an appropriate result.**

**\( \operatorname{Re}(z_1z_2) = \operatorname{Re}(z_1)\operatorname{Re}(z_2) \)**



### Solution

* **Answer:** **False**
* **Counterexample:** Let \( z_1 = i \) and \( z_2 = i \).
  * LHS: \( \operatorname{Re}(z_1z_2) = \operatorname{Re}(i^2) = \operatorname{Re}(-1) = -1 \)
  * RHS: \( \operatorname{Re}(z_1)\operatorname{Re}(z_2) = \operatorname{Re}(i)\operatorname{Re}(i) = 0 \times 0 = 0 \)
  Since \( -1 \ne 0 \), the statement is false.

---

## Problem 2

**Answer True or False. If the statement is false, justify your answer by explaining why it is false or providing a counterexample; if true, justify it by proving the statement or citing an appropriate result.**

**\( \operatorname{Im}(4 + 7i) = 7i \)**



### Solution

* **Answer:** **False**
* **Justification:** The imaginary part of a complex number \( z = x + iy \) is the real number \( y \), not the imaginary term \( iy \). Thus, \( \operatorname{Im}(4 + 7i) = 7 \), which is a real number.

---

## Problem 3

**Answer True or False. If the statement is false, justify your answer by explaining why it is false or providing a counterexample; if true, justify it by proving the statement or citing an appropriate result.**

**\( |z - 1| = |\bar{z} - 1| \)**



### Solution

* **Answer:** **True**
* **Proof:** Since \( \bar{1} = 1 \), we can use the property of conjugation \( |w| = |\bar{w}| \):
  \[
  |\bar{z} - 1| = |\overline{z - 1}| = |z - 1|
  \]
  This is geometrically interpreted as: the distance from \( z \) to \( 1 \) is equal to the distance from its reflection \( \bar{z} \) to \( 1 \).

---

## Problem 4

**Answer True or False. If the statement is false, justify your answer by explaining why it is false or providing a counterexample; if true, justify it by proving the statement or citing an appropriate result.**

**If \( \operatorname{Im}(z) > 0 \), then \( \operatorname{Re}(1/z) > 0 \).**



### Solution

* **Answer:** **False**
* **Counterexample:** Let \( z = -1 + i \implies \operatorname{Im}(z) = 1 > 0 \).
  \[
  \frac{1}{z} = \frac{1}{-1+i} = \frac{-1-i}{2} = -\frac{1}{2} - \frac{1}{2}i
  \]
  Here, \( \operatorname{Re}(1/z) = -1/2 < 0 \). Thus, the statement is false.

---

## Problem 5

**Answer True or False. If the statement is false, justify your answer by explaining why it is false or providing a counterexample; if true, justify it by proving the statement or citing an appropriate result.**

**\( i < 10i \)**



### Solution

* **Answer:** **False**
* **Justification:** The complex number system \( \mathbb{C} \) is not an ordered field. Relational operators such as \( < \) and \( > \) have no meaning for non-real complex numbers.

---

## Problem 6

**Answer True or False. If the statement is false, justify your answer by explaining why it is false or providing a counterexample; if true, justify it by proving the statement or citing an appropriate result.**

**If \( z \ne 0 \), then \( \operatorname{Arg}(z + \bar{z}) = 0 \).**



### Solution

* **Answer:** **False**
* **Counterexample:** Let \( z = -2 + i \implies \bar{z} = -2 - i \).
  Then \( z + \bar{z} = -4 \). The principal argument of the negative real number \( -4 \) is \( \operatorname{Arg}(-4) = \pi \ne 0 \).

---

## Problem 7

**Answer True or False. If the statement is false, justify your answer by explaining why it is false or providing a counterexample; if true, justify it by proving the statement or citing an appropriate result.**

**\( |x + iy| \le |x| + |y| \)**



### Solution

* **Answer:** **True**
* **Proof:** By definition, \( |x + iy| = \sqrt{x^2 + y^2} \). Since \( x^2 \ge 0 \) and \( y^2 \ge 0 \):
  \[
  x^2 + y^2 \le x^2 + 2|x||y| + y^2 = (|x| + |y|)^2
  \]
  Taking the square root of both sides gives \( \sqrt{x^2+y^2} \le |x| + |y| \).

---

## Problem 8

**Answer True or False. If the statement is false, justify your answer by explaining why it is false or providing a counterexample; if true, justify it by proving the statement or citing an appropriate result.**

**\( \arg(\bar{z}) = \arg(1/z) \)**



### Solution

* **Answer:** **True**
* **Proof:** We know that \( \arg(\bar{z}) = -\arg(z) \pmod{2\pi} \) and \( \arg(1/z) = -\arg(z) \pmod{2\pi} \). Thus, the two sets of arguments are identical.

---

## Problem 9

**Answer True or False. If the statement is false, justify your answer by explaining why it is false or providing a counterexample; if true, justify it by proving the statement or citing an appropriate result.**

**If \( \bar{z} = -z \), then \( z \) is pure imaginary.**



### Solution

* **Answer:** **True**
* **Proof:** Let \( z = x + iy \implies \bar{z} = x - iy \).
  Set \( x - iy = -(x + iy) = -x - iy \implies 2x = 0 \implies x = 0 \).
  Thus \( z = iy \), which is a pure imaginary number.

---

## Problem 10

**Answer True or False. If the statement is false, justify your answer by explaining why it is false or providing a counterexample; if true, justify it by proving the statement or citing an appropriate result.**

**\( \arg(-2 + 10i) = \pi - \tan^{-1}(5) + 2n\pi \) for \( n \in \mathbb{Z} \).**



### Solution

* **Answer:** **True**
* **Justification:** The point \( z = -2 + 10i \) lies in Quadrant II. The reference angle is \( \theta_R = \tan^{-1}(|10/-2|) = \tan^{-1}(5) \).
  The argument in Quadrant II is \( \theta = \pi - \theta_R + 2n\pi = \pi - \tan^{-1}(5) + 2n\pi \).

---

## Problem 11

**Answer True or False. If the statement is false, justify your answer by explaining why it is false or providing a counterexample; if true, justify it by proving the statement or citing an appropriate result.**

**If \( z \) is a root of \( a_n z^n + \dots + a_0 = 0 \), then \( \bar{z} \) is also a root.**



### Solution

* **Answer:** **False**
* **Counterexample:** Let the equation be \( z^2 - iz = 0 \). Here the coefficients are not all real.
  The root \( z_1 = i \) satisfies \( i^2 - i(i) = -1 + 1 = 0 \).
  However, the conjugate \( \bar{z}_1 = -i \) gives \( (-i)^2 - i(-i) = -1 - 1 = -2 \ne 0 \).

---

## Problem 12

**Answer True or False. If the statement is false, justify your answer by explaining why it is false or providing a counterexample; if true, justify it by proving the statement or citing an appropriate result.**

**For any nonzero complex number \( z \), there are an infinite number of values for \( \arg(z) \).**



### Solution

* **Answer:** **True**
* **Justification:** The argument is a multi-valued function defined by \( \arg(z) = \operatorname{Arg}(z) + 2n\pi \) for \( n \in \mathbb{Z} \). Since there are infinitely many integers \( n \), there are infinitely many values.

---

## Problem 13

**Answer True or False. If the statement is false, justify your answer by explaining why it is false or providing a counterexample; if true, justify it by proving the statement or citing an appropriate result.**

**If \( |z - 2| < 2 \), then \( |\operatorname{Arg}(z)| < \pi/2 \).**



### Solution

* **Answer:** **True**
* **Justification:** The set \( |z - 2| < 2 \) is an open disk of radius 2 centered at \( 2 \). This disk lies entirely in the right half-plane \( \operatorname{Re}(z) > 0 \). Any point in the right half-plane has a principal argument in the open interval \( (-\pi/2, \pi/2) \), so \( |\operatorname{Arg}(z)| < \pi/2 \).

---

## Problem 14

**Answer True or False. If the statement is false, justify your answer by explaining why it is false or providing a counterexample; if true, justify it by proving the statement or citing an appropriate result.**

**The set \( S \) of complex numbers \( z = x + iy \) whose real and imaginary parts are related by \( y = \sin x \) is a bounded set.**



### Solution

* **Answer:** **False**
* **Justification:** Although the imaginary part \( y \) is bounded (\( -1 \le y \le 1 \)), the real part \( x \) can be any real number and extends to infinity. Thus, no circle of finite radius can enclose \( S \).

---

## Problem 15

**Answer True or False. If the statement is false, justify your answer by explaining why it is false or providing a counterexample; if true, justify it by proving the statement or citing an appropriate result.**

**The set \( S \) of complex numbers satisfying \( |z| < 1 \) or \( |z - 3i| < 1 \) is a domain.**



### Solution

* **Answer:** **False**
* **Justification:** A domain must be open and **connected**. The set \( S \) is the union of two open disks centered at \( 0 \) and \( 3i \). The distance between the centers is \( 3 \), which is greater than the sum of the radii \( 1 + 1 = 2 \). Thus the two disks are disjoint, making \( S \) disconnected, so it cannot be a domain.

---

## Problem 16

**Answer True or False. If the statement is false, justify your answer by explaining why it is false or providing a counterexample; if true, justify it by proving the statement or citing an appropriate result.**

**If the set \( A \) of real parts of \( S \) is bounded and the set \( B \) of imaginary parts of \( S \) is bounded, then \( S \) is bounded.**



### Solution

* **Answer:** **True**
* **Proof:** Since \( A \) is bounded, there exists \( M_1 > 0 \) such that \( |x| < M_1 \) for all \( x \in A \). Since \( B \) is bounded, there exists \( M_2 > 0 \) such that \( |y| < M_2 \) for all \( y \in B \).
  By the triangle inequality, for any \( z = x + iy \in S \):
  \[
  |z| \le |x| + |y| < M_1 + M_2
  \]
  Thus, \( S \) is bounded by \( R = M_1 + M_2 \).

---

## Problem 17

**Answer True or False. If the statement is false, justify your answer by explaining why it is false or providing a counterexample; if true, justify it by proving the statement or citing an appropriate result.**

**The sector defined by \( -\pi/6 < \arg(z) \le \pi/6 \) is neither open nor closed.**



### Solution

* **Answer:** **True**
* **Justification:** The boundary consists of two rays: \( \theta = \pi/6 \) (which is included in the set) and \( \theta = -\pi/6 \) (which is excluded). Since the set contains some but not all of its boundary points, it is neither open nor closed.

---

## Problem 18

**Answer True or False. If the statement is false, justify your answer by explaining why it is false or providing a counterexample; if true, justify it by proving the statement or citing an appropriate result.**

**For \( z \ne 0 \), there are exactly five values of \( z^{3/5} = (z^3)^{1/5} \).**



### Solution

* **Answer:** **True**
* **Justification:** For any nonzero complex number \( w = z^3 \), there are exactly \( 5 \) distinct values for the fifth root \( w^{1/5} \).

---

## Problem 19

**Answer True or False. If the statement is false, justify your answer by explaining why it is false or providing a counterexample; if true, justify it by proving the statement or citing an appropriate result.**

**A boundary point of a set \( S \) is a point in \( S \).**



### Solution

* **Answer:** **False**
* **Counterexample:** Let \( S \) be the open disk \( |z| < 1 \). The point \( z_0 = 1 \) is a boundary point of \( S \) since any neighborhood of \( 1 \) contains points in \( S \) and points outside \( S \), yet \( 1 \notin S \).

---

## Problem 20

**Answer True or False. If the statement is false, justify your answer by explaining why it is false or providing a counterexample; if true, justify it by proving the statement or citing an appropriate result.**

**The complex plane with the real and imaginary axes deleted has no boundary points.**



### Solution

* **Answer:** **False**
* **Justification:** The deleted axes themselves are the boundary points of the set, because any neighborhood of a point on either axis contains points in the four quadrants (which are in the set) and points on the axes (which are not in the set).

---

## Problem 21

**Answer True or False. If the statement is false, justify your answer by explaining why it is false or providing a counterexample; if true, justify it by proving the statement or citing an appropriate result.**

**\( \operatorname{Im}(e^{i\theta}) = \sin\theta \)**



### Solution

* **Answer:** **True**
* **Justification:** By Euler's formula, \( e^{i\theta} = \cos\theta + i\sin\theta \), so the imaginary part is indeed \( \sin\theta \).

---

## Problem 22

**Answer True or False. If the statement is false, justify your answer by explaining why it is false or providing a counterexample; if true, justify it by proving the statement or citing an appropriate result.**

**The equation \( z^n = 1 \), \( n \ge 1 \), will have only real solutions for \( n=1 \) and \( n=2 \).**



### Solution

* **Answer:** **True**
* **Justification:** The roots are the \( n \)-th roots of unity. For \( n=1 \), \( z=1 \). For \( n=2 \), \( z=\pm 1 \). For \( n \ge 3 \), the roots lie on the vertices of a regular polygon inscribed in the unit circle, meaning there will always be non-real solutions in the upper/lower half-planes.

---

## Problem 23

**If \( a + ib = \frac{3 - i}{2+3i} + \frac{2 - 2i}{1 - 5i} \), then \( a = \underline{\quad} \) and \( b = \underline{\quad} \).**

* **First term:**
  \[
  \frac{3-i}{2+3i} = \frac{(3-i)(2-3i)}{13} = \frac{6 - 3 - 11i}{13} = \frac{3}{13} - \frac{11}{13}i
  \]
* **Second term:**
  \[
  \frac{2-2i}{1-5i} = \frac{(2-2i)(1+5i)}{26} = \frac{2 + 10 + 8i}{26} = \frac{12+8i}{26} = \frac{6}{13} + \frac{4}{13}i
  \]
* **Sum:**
  \[
  a + ib = \left(\frac{3}{13} + \frac{6}{13}\right) + i\left(-\frac{11}{13} + \frac{4}{13}\right) = \frac{9}{13} - \frac{7}{13}i
  \]

### Solution

* **Answers:** \( a = \boxed{9/13} \), \( b = \boxed{-7/13} \)

---

## Problem 24

**If \( z = \frac{4i}{-3 - 4i} \), then \( |z| = \underline{\quad} \).**

* Apply modulus property:
  \[
  |z| = \frac{|4i|}{|-3 - 4i|} = \frac{4}{\sqrt{9 + 16}} = \frac{4}{5}
  \]

### Solution

* **Answer:** \( \boxed{4/5} \)

---

## Problem 25

**If \( |z| = \operatorname{Re}(z) \), then \( z \) is \( \underline{\quad} \).**

* Let \( z = x+iy \implies \sqrt{x^2+y^2} = x \implies x \ge 0 \) and \( x^2 + y^2 = x^2 \implies y = 0 \).

### Solution

* **Answer:** **a nonnegative real number** (or lies on the positive real axis including the origin).

---

## Problem 26

**If \( z = 3 + 4i \), then \( \operatorname{Re}(z/\bar{z}) = \underline{\quad} \).**

* Calculate quotient:
  \[
  \frac{z}{\bar{z}} = \frac{3+4i}{3-4i} = \frac{(3+4i)^2}{25} = \frac{9 - 16 + 24i}{25} = -\frac{7}{25} + \frac{24}{25}i
  \]

### Solution

* **Answer:** \( \boxed{-7/25} \)

---

## Problem 27

**The principal argument of \( z = -1 - i \) is \( \underline{\quad} \).**

* \( z \) lies in Quadrant III with equal real and imaginary parts.

### Solution

* **Answer:** \( \boxed{-3\pi/4} \)

---

## Problem 28

**For \( z_1 = x_1 + iy_1 \) and \( z_2 = x_2 + iy_2 \), \( \bar{z}_1^2 + \bar{z}_2^2 = \underline{\quad} \).**

* Using properties of conjugation:
  \[
  \bar{z}_1^2 + \bar{z}_2^2 = \overline{z_1^2} + \overline{z_2^2} = \overline{z_1^2 + z_2^2}
  \]

### Solution

* **Answer:** \( \boxed{\overline{z_1^2 + z_2^2}} \)

---

## Problem 29

**For \( (1 + i) \):**

Let \( 1+i = \sqrt{2}e^{i\pi/4} \).

### Solution

* **arg\(((1+i)^5)\):** \( 5 \times \pi/4 = \boxed{5\pi/4} \).
* **\( |(1+i)^6| \):** \( (\sqrt{2})^6 = \boxed{8} \).
* **Im\(((1+i)^7)\):** \( (1+i)^7 = (\sqrt{2})^7 e^{i 7\pi/4} = 8\sqrt{2} \left(\frac{\sqrt{2}}{2} - \frac{\sqrt{2}}{2}i\right) = 8 - 8i \implies \boxed{-8} \).
* **Re\(((1+i)^8)\):** \( (1+i)^8 = (\sqrt{2})^8 e^{i 2\pi} = 16 \implies \boxed{16} \).

---

## Problem 30

**\( \left( \frac{1}{2} + \frac{\sqrt{3}}{2}i \right)^{483} = \underline{\quad} \).**

* Base is \( e^{i\pi/3} \).
* Raise to power: \( e^{i 483\pi/3} = e^{i 161\pi} = e^{i\pi} = -1 \) (since \( 161 \equiv 1 \pmod 2 \)).

### Solution

* **Answer:** \( \boxed{-1} \)

---

## Problem 31

**If \( z \) is in the second quadrant, then \( i\bar{z} \) is in the \( \underline{\quad} \) quadrant.**

* Let \( z = x + iy \) with \( x < 0, y > 0 \).
* Conjugate: \( \bar{z} = x - iy \).
* Multiply by \( i \): \( i\bar{z} = i(x - iy) = y + ix \).
* Since \( y > 0 \) and \( x < 0 \), the real part is positive and the imaginary part is negative.

### Solution

* **Answer:** **fourth**

---

## Problem 32

**\( i^{127} - 5i^9 + 2i - 1 = \underline{\quad} \).**

* \( i^{127} = i^{124} \cdot i^3 = -i \)
* \( i^9 = i^8 \cdot i = i \)
* Sum: \( -i - 5i + 2i - 1 = -4i - 1 \).

### Solution

* **Answer:** \( \boxed{-1 - 4i} \)

---

## Problem 33

**Of the three points \( z_1 = 2.5 + 1.9i \), \( z_2 = 1.5 - 2.9i \), and \( z_3 = -2.4 + 2.2i \), \( \underline{\quad} \) is the farthest from the origin.**

* Calculate moduli:
  * \( |z_1| = \sqrt{6.25 + 3.61} = \sqrt{9.86} \approx 3.14 \)
  * \( |z_2| = \sqrt{2.25 + 8.41} = \sqrt{10.66} \approx 3.26 \)
  * \( |z_3| = \sqrt{5.76 + 4.84} = \sqrt{10.60} \approx 3.25 \)

### Solution

* **Answer:** \( \boxed{z_2} \)

---

## Problem 34

**If \( 3i\bar{z} - 2z = 6 \), then \( z = \underline{\quad} \).**

* Let \( z = x+iy \implies \bar{z} = x-iy \).
  \[
  3i(x - iy) - 2(x + iy) = 6 \implies 3ix + 3y - 2x - 2iy = 6
  \]
  \[
  (3y - 2x) + i(3x - 2y) = 6
  \]
* Set up system:
  1. \( -2x + 3y = 6 \)
  2. \( 3x - 2y = 0 \implies y = 1.5x \)
* Substitute: \( -2x + 4.5x = 6 \implies 2.5x = 6 \implies x = 2.4 \implies y = 3.6 \).

### Solution

* **Answer:** \( \boxed{2.4 + 3.6i} \)

---

## Problem 35

**If \( 2x - 3yi + 9 = -x + 2yi + 5i \), then \( z = \underline{\quad} \).**

* Group terms:
  \[
  (2x + 9) - 3yi = -x + (2y + 5)i
  \]
* Equate parts:
  1. \( 2x + 9 = -x \implies 3x = -9 \implies x = -3 \)
  2. \( -3y = 2y + 5 \implies -5y = 5 \implies y = -1 \)

### Solution

* **Answer:** \( \boxed{z = -3 - i} \)

---

## Problem 36

**If \( z = \frac{5}{-\sqrt{3} + i} \), then \( \operatorname{Arg}(z) = \underline{\quad} \).**

* Rewrite denominator: \( -\sqrt{3} + i = 2 e^{i 5\pi/6} \).
* So \( z = \frac{5}{2} e^{-i 5\pi/6} \).

### Solution

* **Answer:** \( \boxed{-5\pi/6} \)

---

## Problem 37

**If \( z \ne 0 \) is a real number, then \( z + z^{-1} \) is real. Other complex numbers \( z = x + iy \) for which \( z + z^{-1} \) is real are defined by \( |z| = \underline{\quad} \).**

* Let \( z + 1/z = w \in \mathbb{R} \implies z + 1/z = \bar{z} + 1/\bar{z} \).
  \[
  (z - \bar{z}) - \left(\frac{z - \bar{z}}{|z|^2}\right) = 0 \implies (z - \bar{z})\left(1 - \frac{1}{|z|^2}\right) = 0
  \]
  For non-real \( z \) (\( z \ne \bar{z} \)), we must have \( 1 - 1/|z|^2 = 0 \implies |z| = 1 \).

### Solution

* **Answer:** \( \boxed{1} \)

---

## Problem 38

**The position vector of length \( 10 \) passing through \( (1, -1) \) is the same as the complex number \( z = \underline{\quad} \).**

* Direction vector: \( 1 - i \), which has length \( \sqrt{2} \).
* Normalize and scale:
  \[
  z = 10 \frac{1 - i}{\sqrt{2}} = 5\sqrt{2} - 5\sqrt{2}i
  \]

### Solution

* **Answer:** \( \boxed{5\sqrt{2} - 5\sqrt{2}i} \)

---

## Problem 39

**The vector \( z = (2 + 2i)(\sqrt{3} + i) \) lies in the \( \underline{\quad} \) quadrant.**

* Find the arguments:
  * \( \operatorname{Arg}(2 + 2i) = \pi/4 \)
  * \( \operatorname{Arg}(\sqrt{3} + i) = \pi/6 \)
* Total argument: \( \theta = \pi/4 + \pi/6 = 5\pi/12 \) (lies in \( (0, \pi/2) \)).

### Solution

* **Answer:** **first**

---

## Problem 40

**The boundary of the set \( S \) of complex numbers satisfying both \( \operatorname{Im}(z) > 0 \) and \( |z - 3i| > 1 \) is \( \underline{\quad} \).**



### Solution

* **Answer:** **the real axis and the circle \( |z - 3i| = 1 \)**.

---

## Problem 41

**In words, the region in the complex plane for which \( \operatorname{Re}(z) < \operatorname{Im}(z) \) is \( \underline{\quad} \).**



### Solution

* **Answer:** **the set of all points \( z \) above the line \( y = x \)**.

---

## Problem 42

**The region in the complex plane consisting of the two disks \( |z + i| \le 1 \) and \( |z - i| \le 1 \) is \( \underline{\quad} \) (connected/not connected).**



### Solution

* **Answer:** **connected** (they touch at the origin \( z=0 \)).

---

## Problem 43

**The circles \( |z - z_0| = |\bar{z}_0 - z_0| \) and \( |z - \bar{z}_0| = |z_0 - \bar{z}_0| \) intersect on the \( \underline{\quad} \).**

* Since the two circles are centered at conjugate points and have equal radii, their intersection is symmetric and lies on the line of symmetry.

### Solution

* **Answer:** **real axis**

---

## Problem 44

**In complex notation, an equation of the circle with center \( -1 \) that passes through \( 2 - i \) is \( \underline{\quad} \).**

* Radius is the distance from \( -1 \) to \( 2-i \):
  \[
  R = |2 - i - (-1)| = |3 - i| = \sqrt{9 + 1} = \sqrt{10}
  \]
* Circle equation:
  \[
  \boxed{|z + 1| = \sqrt{10}}
  \]

### Solution



---

## Problem 45

**A positive integer \( n \) for which \( (1 + i)^n = 4096 \) is \( n = \underline{\quad} \).**

* \( (1+i)^n = (\sqrt{2}e^{i\pi/4})^n = 2^{n/2} e^{in\pi/4} \).
* For this to be \( 4096 = 2^{12} \), we must have \( n/2 = 12 \implies n = 24 \).

### Solution

* **Answer:** \( \boxed{24} \)

---

## Problem 46

**\( \left| \frac{(4 - 5i)^{658}}{(5 + 4i)^{658}} \right| = \underline{\quad} \).**

* Modulus of components: \( |4-5i| = \sqrt{16+25} = \sqrt{41} \) and \( |5+4i| = \sqrt{25+16} = \sqrt{41} \).
* The ratio of moduli is \( 1 \). Thus, raising to any power remains \( 1 \).

### Solution

* **Answer:** \( \boxed{1} \)

---

## Problem 47

**From \( (\cos\theta + i\sin\theta)^4 = \cos 4\theta + i\sin 4\theta \), we get the real trigonometric identities \( \cos 4\theta = \underline{\quad} \) and \( \sin 4\theta = \underline{\quad} \).**

* Expand LHS using binomial theorem:
  \[
  \cos^4\theta + 4i\cos^3\theta\sin\theta - 6\cos^2\theta\sin^2\theta - 4i\cos\theta\sin^3\theta + \sin^4\theta
  \]

### Solution

* **Answers:**
  * \( \boxed{\cos 4\theta = \cos^4\theta - 6\cos^2\theta\sin^2\theta + \sin^4\theta} \)
  * \( \boxed{\sin 4\theta = 4\cos^3\theta\sin\theta - 4\cos\theta\sin^3\theta} \)

---

## Problem 48

**When \( z \) is a point within the open disk \( |z| < 4 \), an upper bound for \( |z^3 - 2z^2 + 6z + 2| \) is \( \underline{\quad} \).**

* Apply the triangle inequality:
  \[
  |z^3 - 2z^2 + 6z + 2| \le |z|^3 + 2|z|^2 + 6|z| + 2
  \]
* Substitute the bound \( |z| < 4 \):
  \[
  < 4^3 + 2(4^2) + 6(4) + 2 = 64 + 32 + 24 + 2 = 122
  \]

### Solution

* **Answer:** \( \boxed{122} \)

---

## Problem 49

**A cubic polynomial equation \( az^3 + bz^2 + cz + d = 0 \) with real coefficients has at least one real root because \( \underline{\quad} \).**



### Solution

* **Answer:** **non-real complex roots must appear in conjugate pairs for a polynomial with real coefficients, meaning there can only be an even number of non-real roots, so a degree 3 equation must have at least one real root**.

---

## Problem 50

**Mnemonic for Powers of \( i \)**

* **(a)** Using the circular mnemonic:

### Solution

* \( i^5, i^9, i^{13}, i^{17}, \dots \implies \boxed{i} \)
  * \( i^6, i^{10}, i^{14}, i^{18}, \dots \implies \boxed{-1} \)
  * \( i^7, i^{11}, i^{15}, i^{19}, \dots \implies \boxed{-i} \)
  * \( i^8, i^{12}, i^{16}, i^{20}, \dots \implies \boxed{1} \)
* **(b)** Rule: Divide the exponent by 4 and look at the remainder \( r \):
  * Remainder \( 1 \implies i \)
  * Remainder \( 2 \implies -1 \)
  * Remainder \( 3 \implies -i \)
  * Remainder \( 0 \implies 1 \)
* Applying the rule:
  * \( i^{33} = i^1 = \boxed{i} \)
  * \( i^{68} = i^0 = \boxed{1} \)
  * \( i^{87} = i^3 = \boxed{-i} \)
  * \( i^{102} = i^2 = \boxed{-1} \)
  * \( i^{624} = i^0 = \boxed{1} \)

![Figure 1.29](../../extracted_figures/figure_1_29.png)

---

