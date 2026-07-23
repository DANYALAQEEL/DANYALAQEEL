# Complex Analysis — Dennis G. Zill, 2nd Edition
## Chapter 1 · Section 1.4 — Powers and Roots
### Problems 1 – 40 · Complete Solutions

---

> **Key Concepts for Roots**
>
> 1. **N-th Roots Formula:** The \( n \) distinct \( n \)-th roots of a complex number \( z = r(\cos\theta + i\sin\theta) \) are:
>    \[
>    w_k = \sqrt[n]{r} \left[ \cos\left(\frac{\theta + 2k\pi}{n}\right) + i\sin\left(\frac{\theta + 2k\pi}{n}\right) \right], \quad k = 0, 1, \dots, n-1
>    \]
> 2. **Principal N-th Root:** The root corresponding to \( k = 0 \) when using the principal argument \( \theta = \operatorname{Arg}(z) \).
> 3. **Roots of Unity:** The \( n \) distinct roots of \( z^n = 1 \) are equally spaced on the unit circle:
>    \[
>    w_k = \cos\frac{2k\pi}{n} + i\sin\frac{2k\pi}{n}, \quad k = 0, 1, \dots, n-1
>    \]

---

## Problems 1 – 14

**Compute all roots. Give the principal \( n \)-th root in each case. Sketch the roots on a circle centered at the origin.**

### Problem 1: \( (8)^{1/3} \)
* **Base in Polar Form:** \( z = 8(\cos 0 + i\sin 0) \), so \( r = 8, \, \theta = 0 \)
* **Roots:**
  \[
  w_k = \sqrt[3]{8} \left( \cos\frac{2k\pi}{3} + i\sin\frac{2k\pi}{3} \right) = 2 \left( \cos\frac{2k\pi}{3} + i\sin\frac{2k\pi}{3} \right), \quad k = 0, 1, 2
  \]
  * \( w_0 = 2(\cos 0 + i\sin 0) = 2 \)
  * \( w_1 = 2\left(\cos\frac{2\pi}{3} + i\sin\frac{2\pi}{3}\right) = -1 + \sqrt{3}i \)
  * \( w_2 = 2\left(\cos\frac{4\pi}{3} + i\sin\frac{4\pi}{3}\right) = -1 - \sqrt{3}i \)
* **Principal Root:** \( \boxed{w_0 = 2} \)

### Problem 2: \( (-1)^{1/4} \)
* **Base in Polar Form:** \( z = \cos\pi + i\sin\pi \), so \( r = 1, \, \theta = \pi \)
* **Roots:**
  \[
  w_k = 1^{1/4} \left( \cos\frac{\pi + 2k\pi}{4} + i\sin\frac{\pi + 2k\pi}{4} \right), \quad k = 0, 1, 2, 3
  \]
  * \( w_0 = \cos\frac{\pi}{4} + i\sin\frac{\pi}{4} = \frac{\sqrt{2}}{2} + \frac{\sqrt{2}}{2}i \)
  * \( w_1 = \cos\frac{3\pi}{4} + i\sin\frac{3\pi}{4} = -\frac{\sqrt{2}}{2} + \frac{\sqrt{2}}{2}i \)
  * \( w_2 = \cos\frac{5\pi}{4} + i\sin\frac{5\pi}{4} = -\frac{\sqrt{2}}{2} - \frac{\sqrt{2}}{2}i \)
  * \( w_3 = \cos\frac{7\pi}{4} + i\sin\frac{7\pi}{4} = \frac{\sqrt{2}}{2} - \frac{\sqrt{2}}{2}i \)
* **Principal Root:** \( \boxed{w_0 = \frac{\sqrt{2}}{2} + \frac{\sqrt{2}}{2}i} \)

### Problem 3: \( (-9)^{1/2} \)
* **Base in Polar Form:** \( z = 9(\cos\pi + i\sin\pi) \)
* **Roots:**
  \[
  w_k = 3 \left( \cos\frac{\pi + 2k\pi}{2} + i\sin\frac{\pi + 2k\pi}{2} \right), \quad k = 0, 1
  \]
  * \( w_0 = 3\left(\cos\frac{\pi}{2} + i\sin\frac{\pi}{2}\right) = 3i \)
  * \( w_1 = 3\left(\cos\frac{3\pi}{2} + i\sin\frac{3\pi}{2}\right) = -3i \)
* **Principal Root:** \( \boxed{w_0 = 3i} \)

### Problem 4: \( (-125)^{1/3} \)
* **Base in Polar Form:** \( z = 125(\cos\pi + i\sin\pi) \)
* **Roots:**
  \[
  w_k = 5 \left( \cos\frac{\pi + 2k\pi}{3} + i\sin\frac{\pi + 2k\pi}{3} \right), \quad k = 0, 1, 2
  \]
  * \( w_0 = 5\left(\cos\frac{\pi}{3} + i\sin\frac{\pi}{3}\right) = \frac{5}{2} + \frac{5\sqrt{3}}{2}i \)
  * \( w_1 = 5(\cos\pi + i\sin\pi) = -5 \)
  * \( w_2 = 5\left(\cos\frac{5\pi}{3} + i\sin\frac{5\pi}{3}\right) = \frac{5}{2} - \frac{5\sqrt{3}}{2}i \)
* **Principal Root:** \( \boxed{w_0 = \frac{5}{2} + \frac{5\sqrt{3}}{2}i} \)

### Problem 5: \( (i)^{1/2} \)
* **Base in Polar Form:** \( z = \cos\frac{\pi}{2} + i\sin\frac{\pi}{2} \)
* **Roots:**
  \[
  w_k = 1^{1/2} \left( \cos\frac{\pi/2 + 2k\pi}{2} + i\sin\frac{\pi/2 + 2k\pi}{2} \right), \quad k = 0, 1
  \]
  * \( w_0 = \cos\frac{\pi}{4} + i\sin\frac{\pi}{4} = \frac{\sqrt{2}}{2} + \frac{\sqrt{2}}{2}i \)
  * \( w_1 = \cos\frac{5\pi}{4} + i\sin\frac{5\pi}{4} = -\frac{\sqrt{2}}{2} - \frac{\sqrt{2}}{2}i \)
* **Principal Root:** \( \boxed{w_0 = \frac{\sqrt{2}}{2} + \frac{\sqrt{2}}{2}i} \)

### Problem 6: \( (-i)^{1/3} \)
* **Base in Polar Form:** \( z = \cos\left(-\frac{\pi}{2}\right) + i\sin\left(-\frac{\pi}{2}\right) \)
* **Roots:**
  \[
  w_k = 1^{1/3} \left( \cos\frac{-\pi/2 + 2k\pi}{3} + i\sin\frac{-\pi/2 + 2k\pi}{3} \right), \quad k = 0, 1, 2
  \]
  * \( w_0 = \cos\left(-\frac{\pi}{6}\right) + i\sin\left(-\frac{\pi}{6}\right) = \frac{\sqrt{3}}{2} - \frac{1}{2}i \)
  * \( w_1 = \cos\frac{\pi}{2} + i\sin\frac{\pi}{2} = i \)
  * \( w_2 = \cos\frac{7\pi}{6} + i\sin\frac{7\pi}{6} = -\frac{\sqrt{3}}{2} - \frac{1}{2}i \)
* **Principal Root:** \( \boxed{w_0 = \frac{\sqrt{3}}{2} - \frac{1}{2}i} \)

### Problem 7: \( (-1 + i)^{1/3} \)
* **Base in Polar Form:** \( z = \sqrt{2}\left(\cos\frac{3\pi}{4} + i\sin\frac{3\pi}{4}ight) \)
* **Roots:**
  \[
  w_k = 2^{1/6} \left[ \cos\left(\frac{3\pi/4 + 2k\pi}{3}\right) + i\sin\left(\frac{3\pi/4 + 2k\pi}{3}\right) \right], \quad k = 0, 1, 2
  \]
  * \( w_0 = 2^{1/6}\left(\cos\frac{\pi}{4} + i\sin\frac{\pi}{4}\right) = \frac{1}{2^{1/3}} + \frac{1}{2^{1/3}}i \)
  * \( w_1 = 2^{1/6}\left(\cos\frac{11\pi}{12} + i\sin\frac{11\pi}{12}\right) \)
  * \( w_2 = 2^{1/6}\left(\cos\frac{19\pi}{12} + i\sin\frac{19\pi}{12}\right) \)
* **Principal Root:** \( \boxed{w_0 = 2^{-1/3}(1 + i)} \)

### Problem 8: \( (1 + i)^{1/5} \)
* **Base in Polar Form:** \( z = \sqrt{2}\left(\cos\frac{\pi}{4} + i\sin\frac{\pi}{4}\right) \)
* **Roots:**
  \[
  w_k = 2^{1/10} \left[ \cos\left(\frac{\pi/4 + 2k\pi}{5}\right) + i\sin\left(\frac{\pi/4 + 2k\pi}{5}\right) \right], \quad k = 0, 1, 2, 3, 4
  \]
  * \( w_0 = 2^{1/10}\left(\cos\frac{\pi}{20} + i\sin\frac{\pi}{20}\right) \)
  * \( w_1 = 2^{1/10}\left(\cos\frac{9\pi}{20} + i\sin\frac{9\pi}{20}\right) \)
  * \( w_2 = 2^{1/10}\left(\cos\frac{17\pi}{20} + i\sin\frac{17\pi}{20}\right) \)
  * \( w_3 = 2^{1/10}\left(\cos\frac{25\pi}{20} + i\sin\frac{25\pi}{20}\right) = 2^{1/10}\left(-\frac{\sqrt{2}}{2} - \frac{\sqrt{2}}{2}i\right) \)
  * \( w_4 = 2^{1/10}\left(\cos\frac{33\pi}{20} + i\sin\frac{33\pi}{20}\right) \)
* **Principal Root:** \( \boxed{w_0 = 2^{1/10}e^{i\pi/20}} \)

### Problem 9: \( (-1 + \sqrt{3}i)^{1/2} \)
* **Base in Polar Form:** \( z = 2\left(\cos\frac{2\pi}{3} + i\sin\frac{2\pi}{3}\right) \)
* **Roots:**
  \[
  w_k = \sqrt{2} \left[ \cos\left(\frac{2\pi/3 + 2k\pi}{2}\right) + i\sin\left(\frac{2\pi/3 + 2k\pi}{2}\right) \right], \quad k = 0, 1
  \]
  * \( w_0 = \sqrt{2}\left(\cos\frac{\pi}{3} + i\sin\frac{\pi}{3}\right) = \frac{\sqrt{2}}{2} + \frac{\sqrt{6}}{2}i \)
  * \( w_1 = \sqrt{2}\left(\cos\frac{4\pi}{3} + i\sin\frac{4\pi}{3}\right) = -\frac{\sqrt{2}}{2} - \frac{\sqrt{6}}{2}i \)
* **Principal Root:** \( \boxed{w_0 = \frac{\sqrt{2}}{2} + \frac{\sqrt{6}}{2}i} \)

### Problem 10: \( (-1 - \sqrt{3}i)^{1/4} \)
* **Base in Polar Form:** \( z = 2\left(\cos\left(-\frac{2\pi}{3}\right) + i\sin\left(-\frac{2\pi}{3}\right)\right) \)
* **Roots:**
  \[
  w_k = 2^{1/4} \left[ \cos\left(\frac{-2\pi/3 + 2k\pi}{4}\right) + i\sin\left(\frac{-2\pi/3 + 2k\pi}{4}\right) \right], \quad k = 0, 1, 2, 3
  \]
  * \( w_0 = 2^{1/4}\left(\cos\left(-\frac{\pi}{6}\right) + i\sin\left(-\frac{\pi}{6}\right)\right) = 2^{1/4}\left(\frac{\sqrt{3}}{2} - \frac{1}{2}i\right) \)
  * \( w_1 = 2^{1/4}\left(\cos\frac{\pi}{3} + i\sin\frac{\pi}{3}\right) = 2^{1/4}\left(\frac{1}{2} + \frac{\sqrt{3}}{2}i\right) \)
  * \( w_2 = 2^{1/4}\left(\cos\frac{5\pi}{6} + i\sin\frac{5\pi}{6}\right) = 2^{1/4}\left(-\frac{\sqrt{3}}{2} + \frac{1}{2}i\right) \)
  * \( w_3 = 2^{1/4}\left(\cos\frac{4\pi}{3} + i\sin\frac{4\pi}{3}\right) = 2^{1/4}\left(-\frac{1}{2} - \frac{\sqrt{3}}{2}i\right) \)
* **Principal Root:** \( \boxed{w_0 = 2^{1/4}\left(\frac{\sqrt{3}}{2} - \frac{1}{2}i\right)} \)

### Problem 11: \( (3 + 4i)^{1/2} \)
* Find roots algebraically: solve \( (a + ib)^2 = 3 + 4i \).
  \[
  a^2 - b^2 = 3 \qquad \text{and} \qquad 2ab = 4 \implies ab = 2
  \]
  Since \( a^2 - b^2 = 3 \) and \( ab = 2 \), the integer solutions are \( a = \pm 2 \) and \( b = \pm 1 \).
  * \( w_0 = 2 + i \)
  * \( w_1 = -2 - i \)
* **Principal Root:** \( \boxed{w_0 = 2 + i} \)

### Problem 12: \( (5 + 12i)^{1/2} \)
* Solve \( (a + ib)^2 = 5 + 12i \).
  \[
  a^2 - b^2 = 5 \qquad \text{and} \qquad 2ab = 12 \implies ab = 6
  \]
  The integer solutions are \( a = \pm 3 \) and \( b = \pm 2 \).
  * \( w_0 = 3 + 2i \)
  * \( w_1 = -3 - 2i \)
* **Principal Root:** \( \boxed{w_0 = 3 + 2i} \)

### Problem 13: \( \left( \frac{16i}{1 + i} \right)^{1/8} \)
* **Simplify base:**
  \[
  \frac{16i(1 - i)}{2} = 8i + 8 = 8\sqrt{2}\left(\cos\frac{\pi}{4} + i\sin\frac{\pi}{4}\right) = 2^{7/2}e^{i\pi/4}
  \]
* **Roots:**
  \[
  w_k = 2^{7/16} \left[ \cos\left(\frac{\pi/4 + 2k\pi}{8}\right) + i\sin\left(\frac{\pi/4 + 2k\pi}{8}\right) \right], \quad k = 0, 1, \dots, 7
  \]
  * \( w_0 = 2^{7/16} \left(\cos\frac{\pi}{32} + i\sin\frac{\pi}{32}\right) \)
* **Principal Root:** \( \boxed{w_0 = 2^{7/16}e^{i\pi/32}} \)

### Problem 14: \( \left( \frac{1 + i}{\sqrt{3} + i} \right)^{1/6} \)
* **Simplify base:**
  \[
  \frac{\sqrt{2}e^{i\pi/4}}{2e^{i\pi/6}} = \frac{\sqrt{2}}{2}e^{i\pi/12} = 2^{-1/2}e^{i\pi/12}
* **Roots:**
  \[
  w_k = 2^{-1/12} \left[ \cos\left(\frac{\pi/12 + 2k\pi}{6}\right) + i\sin\left(\frac{\pi/12 + 2k\pi}{6}\right) \right], \quad k = 0, 1, \dots, 5
  \]
  * \( w_0 = 2^{-1/12} \left(\cos\frac{\pi}{72} + i\sin\frac{\pi}{72}\right) \)
* **Principal Root:** \( \boxed{w_0 = 2^{-1/12}e^{i\pi/72}} \)

---

## Problems 15 – 18

### Problem 15
**(a) Verify that \( (4 + 3i)^2 = 7 + 24i \).**
\[
(4 + 3i)^2 = 16 + 24i + 9i^2 = 16 + 24i - 9 = 7 + 24i \quad \text{(Verified)}
\]
**(b) Find the two values of \( (7 + 24i)^{1/2} \).**
Since \( (4+3i)^2 = 7+24i \), the two values are:
\[
\boxed{w_0 = 4 + 3i \quad \text{and} \quad w_1 = -4 - 3i}
\]

### Problem 16
**Rework Problem 15 using the polar form root formula.**
* \( z = 7 + 24i \implies r = 25, \, \theta = \operatorname{Arg}(z) = \arctan(24/7) \).
* The roots are \( w_k = 5 \left[ \cos\left(\frac{\theta + 2k\pi}{2}\right) + i\sin\left(\frac{\theta + 2k\pi}{2}\right) \right] \) for \( k = 0, 1 \).
* Use half-angle formulas for \( \theta/2 \):
  * \( \cos\frac{\theta}{2} = \sqrt{\frac{1 + \cos\theta}{2}} = \sqrt{\frac{1 + 7/25}{2}} = \sqrt{\frac{16}{25}} = \frac{4}{5} \)
  * \( \sin\frac{\theta}{2} = \sqrt{\frac{1 - \cos\theta}{2}} = \sqrt{\frac{1 - 7/25}{2}} = \sqrt{\frac{9}{25}} = \frac{3}{5} \)
* For \( k = 0 \): \( w_0 = 5\left(\frac{4}{5} + i \frac{3}{5}\right) = 4 + 3i \).
* For \( k = 1 \): \( w_1 = -w_0 = -4 - 3i \).
* Both matches Problem 15.

### Problem 17
**Find all solutions of the equation \( z^4 + 1 = 0 \).**
This is equivalent to finding the four 4-th roots of \( -1 \):
\[
z^4 = -1 \implies z = (-1)^{1/4}
\]
Referencing Problem 2, the four solutions are:
\[
\boxed{z_1, z_2, z_3, z_4 = \pm \frac{\sqrt{2}}{2} \pm \frac{\sqrt{2}}{2}i}
\]

### Problem 18
**Use \( 8i = (2 + 2i)^2 \) to find all solutions of the equation \( z^2 - 8z + 16 = 8i \).**
* Factor the left-hand side:
  \[
  (z - 4)^2 = 8i
  \]
* Substitute \( 8i = (2+2i)^2 \):
  \[
  (z - 4)^2 = (2 + 2i)^2 \implies z - 4 = \pm (2 + 2i)
  \]
* Solve for \( z \):
  * Case 1: \( z - 4 = 2 + 2i \implies z = 6 + 2i \)
  * Case 2: \( z - 4 = -2 - 2i \implies z = 2 - 2i \)
* The solutions are:
  \[
  \boxed{z = 6 + 2i \quad \text{and} \quad z = 2 - 2i}
  \]

---

## Problems 19 – 24 (Roots of Unity)

### Problem 19
**(a) Show that the \( n \)-th roots of unity are given by (1).**
By setting \( z = 1 = 1(\cos 0 + i\sin 0) \) in the root formula:
\[
w_k = 1^{1/n} \left[ \cos\left(\frac{0 + 2k\pi}{n}\right) + i\sin\left(\frac{0 + 2k\pi}{n}\right) \right] = \cos\frac{2k\pi}{n} + i\sin\frac{2k\pi}{n}
\]
**(b) Find the roots of unity for \( n=3, 4, 5 \).**
* For \( n = 3 \): \( 1, \, -\frac{1}{2} + \frac{\sqrt{3}}{2}i, \, -\frac{1}{2} - \frac{\sqrt{3}}{2}i \)
* For \( n = 4 \): \( 1, \, i, \, -1, \, -i \)
* For \( n = 5 \): \( 1, \, e^{i2\pi/5}, \, e^{i4\pi/5}, \, e^{i6\pi/5}, \, e^{i8\pi/5} \)
**(c) carefully plot...** These vertices form regular polygons inscribed in the unit circle.

### Problem 20
**Suppose \( w \) is a cube root of unity corresponding to \( k=1 \): \( w = e^{i2\pi/3} \).**
**(a) How are \( w \) and \( w^2 \) related?**
\[
w^2 = e^{i4\pi/3} = \bar{w} \quad (\text{complex conjugates})
\]
**(b) Verify \( 1 + w + w^2 = 0 \).**
\[
1 + \left(-\frac{1}{2} + \frac{\sqrt{3}}{2}i\right) + \left(-\frac{1}{2} - \frac{\sqrt{3}}{2}i\right) = 1 - 1 = 0 \quad \text{(Verified)}
\]
**(c) Explain how this follows by factoring \( w^3 = 1 \).**
Since \( w^3 - 1 = 0 \), factoring gives \( (w-1)(1+w+w^2) = 0 \). Since \( w \ne 1 \), we must divide by \( w-1 \ne 0 \), yielding \( 1+w+w^2=0 \).

### Problem 21
**Show that the \( n \)-th roots of unity can be written as \( 1, w_n, w_n^2, \dots, w_n^{n-1} \).**
Let \( w_n = e^{i2\pi/n} \). For any \( k \):
\[
w_n^k = \left(e^{i2\pi/n}\right)^k = e^{i2k\pi/n} = \cos\frac{2k\pi}{n} + i\sin\frac{2k\pi}{n}
\]
Since this matches the roots formula in Problem 19, the set of powers contains all \( n \) distinct roots of unity.

### Problem 22
**Solve the equation \( (z+2)^n + z^n = 0 \).**
* **For \( n=1 \):**
  \[
  z + 2 + z = 0 \implies 2z = -2 \implies \boxed{z = -1}
  \]
* **For \( n=2 \):**
  \[
  (z + 2)^2 + z^2 = 0 \implies 2z^2 + 4z + 4 = 0 \implies z^2 + 2z + 2 = 0
  \]
  Applying the quadratic formula:
  \[
  z = \frac{-2 \pm \sqrt{4 - 8}}{2} = \boxed{-1 \pm i}
  \]

### Problem 23
**Consider \( (z+2)^n + z^n = 0 \).**
**(a) Find all solutions for \( n=6 \).**
\[
(z+2)^6 = -z^6 \implies \left(\frac{z+2}{-z}\right)^6 = 1
\]
Let \( w = \frac{z+2}{-z} \). Then \( w \) is a 6-th root of unity: \( w_k = e^{ik\pi/3} \) for \( k = 0, 1, \dots, 5 \).
Solve for \( z \):
\[
z + 2 = -w_k z \implies z(1 + w_k) = -2 \implies z = -\frac{2}{1 + w_k}
\]
Substitute \( w_k = \cos(k\pi/3) + i\sin(k\pi/3) \):
\[
z_k = -\frac{2}{1 + \cos(k\pi/3) + i\sin(k\pi/3)} = -1 + i\tan\frac{k\pi}{6}
\]
For \( k = 3 \), \( 1+w_3 = 0 \) (unbounded/no solution). The 5 solutions are:
\[
\boxed{z_k = -1 + i\tan\frac{k\pi}{6}, \quad k = 0, 1, 2, 4, 5}
\]
**(b) Conjecture:** All solutions lie on the vertical line \( \operatorname{Re}(z) = -1 \).
*Proof:* The equation implies \( |z+2|^n = |-z|^n \implies |z+2| = |z| \). This represents the perpendicular bisector of the line segment between \( 0 \) and \( -2 \), which is \( \operatorname{Re}(z) = -1 \).

### Problem 24
**Show that \( 1 + w_n + w_n^2 + \dots + w_n^{n-1} = 0 \).**
Let \( S = 1 + w_n + w_n^2 + \dots + w_n^{n-1} \). Multiply by \( (w_n - 1) \):
\[
S(w_n - 1) = w_n^n - 1
\]
Since \( w_n \) is a root of unity, \( w_n^n = 1 \). Thus:
\[
S(w_n - 1) = 0
\]
Since \( w_n \ne 1 \implies w_n - 1 \ne 0 \), it must be that \( S = 0 \).

---

## Problems 25 – 30

### Problem 25
**(a) Compute \( (i^{1/2})^3 \):**
\( i^{1/2} \) has two values: \( w_0 = e^{i\pi/4} = \frac{\sqrt{2}}{2} + \frac{\sqrt{2}}{2}i \) and \( w_1 = e^{i5\pi/4} = -\frac{\sqrt{2}}{2} - \frac{\sqrt{2}}{2}i \).
* \( w_0^3 = e^{i3\pi/4} = -\frac{\sqrt{2}}{2} + \frac{\sqrt{2}}{2}i \)
* \( w_1^3 = e^{i15\pi/4} = e^{-i\pi/4} = \frac{\sqrt{2}}{2} - \frac{\sqrt{2}}{2}i \)
**(b) Compute \( (i^3)^{1/2} \):**
\( i^3 = -i \). The square roots of \( -i \) are:
* \( u_0 = \cos(-\pi/4) + i\sin(-\pi/4) = \frac{\sqrt{2}}{2} - \frac{\sqrt{2}}{2}i \)
* \( u_1 = \cos(3\pi/4) + i\sin(3\pi/4) = -\frac{\sqrt{2}}{2} + \frac{\sqrt{2}}{2}i \)
Both sets of values are identical.
**(c) Compute \( i^{3/2} \) using (5):**
Matches the same values: \( \boxed{\pm \left(-\frac{\sqrt{2}}{2} + \frac{\sqrt{2}}{2}i\right)} \).

### Problem 26
**Solve \( w^2 = (-1 + i)^5 \).**
* Simplify right side:
  \[
  -1 + i = \sqrt{2}e^{i3\pi/4} \implies (-1 + i)^5 = 4\sqrt{2}e^{i15\pi/4} = 4\sqrt{2}e^{-i\pi/4}
  \]
* Now solve \( w^2 = 4\sqrt{2}e^{-i\pi/4} \):
  \[
  w_k = \sqrt{4\sqrt{2}} e^{i \frac{-\pi/4 + 2k\pi}{2}} = 2^{5/4}e^{i \frac{-\pi + 8k\pi}{8}}, \quad k = 0, 1
  \]
  * \( w_0 = 2^{5/4}e^{-i\pi/8} \)
  * \( w_1 = 2^{5/4}e^{i7\pi/8} \)

---

## Focus on Concepts (Problems 27 – 34)

### Problem 27
Roots are equally spaced on a circle with angular spacing \( 2\pi/n \).
* For \( n = 3 \): Spacing is \( 120^\circ \). The other two roots are rotated by \( \pm 120^\circ \).
* For \( n = 4 \): Spacing is \( 90^\circ \). The other roots are rotated by \( 90^\circ, 180^\circ, 270^\circ \).
* For \( n = 5 \): Spacing is \( 72^\circ \). The other roots are rotated by multiples of \( 72^\circ \).

### Problem 28
The equation \( z^n = 1 \) has only real solutions if and only if all vertices of the root polygon lie on the real axis.
* For \( n=1 \): Root is \( 1 \) (real).
* For \( n=2 \): Roots are \( 1, -1 \) (real).
* For \( n \ge 3 \): The roots form a regular polygon inscribed in the unit circle, which must have vertices in the upper/lower half-planes (yielding non-real roots).
* Thus, the only values are \( \boxed{n=1 \text{ and } n=2} \).

### Problem 29
* **(a) Calculator values:**
  \( w_0 = 2^{1/4}(\cos(\pi/8) + i\sin(\pi/8)) \approx 1.1892(0.9239 + 0.3827i) \approx 1.09868 + 0.45509i \).
  \( w_1 = -w_0 \approx -1.09868 - 0.45509i \).
* **(b) Exact values:** derived using half-angle formulas:
  \[
  \boxed{w_0 = \sqrt{\frac{1+\sqrt{2}}{2}} + i \sqrt{\frac{\sqrt{2}-1}{2}}, \quad w_1 = -\sqrt{\frac{1+\sqrt{2}}{2}} - i \sqrt{\frac{\sqrt{2}-1}{2}}}
  \]

### Problem 30
The sum of the vectors representing the \( n \)-th roots of unity is zero. Physically, this means that the center of mass (centroid) of the regular polygon formed by the roots lies at the origin.

### Problem 31
No. If a non-real complex number \( z \) had a real \( n \)-th root \( w = x \in \mathbb{R} \), then \( w^n = x^n \) would be a real number. But \( w^n = z \) is non-real, which is a contradiction.

### Problem 32
No. The cube roots of \( z \) are spaced by \( 120^\circ \) in argument. Since the first quadrant only spans an angle of \( 90^\circ \), it is geometrically impossible for two distinct cube roots to lie in the first quadrant.

### Problem 33
The roots form a square centered at the origin. Let \( w_0 = a + ib \) be one root (neither real nor pure imaginary, so \( a \ne 0, b \ne 0 \)). The remaining roots are:
\[
w_1 = iw_0 = -b + ai, \quad w_2 = -w_0 = -a - bi, \quad w_3 = -iw_0 = b - ai
\]
Since \( a \ne 0 \) and \( b \ne 0 \), all roots have nonzero real and imaginary parts, meaning none of them are real or pure imaginary.

### Problem 34
*Graph description:* Plot \( w_0 = r^{1/3}e^{i\theta/3} \) in the first quadrant. Plot its square \( w_0^2 \) and cube \( w_0^3 = z \), demonstrating modulus scaling and argument addition.
