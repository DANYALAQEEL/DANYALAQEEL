# Complex Analysis — Dennis G. Zill, 2nd Edition
## Chapter 5 · Chapter 5 Review Quiz
### Problems 1 – 40 · Complete Solutions

---

## Problems 1 – 20: True or False with Justifications

#### 1. If \( z(t) \), \( a \le t \le b \), is a parametrization of a contour \( C \) and \( z(a) = z(b) \), then \( C \) is a simple closed contour.
* **Answer:** **False**
* **Justification:** The condition \( z(a) = z(b) \) guarantees that \( C \) is a closed contour, but it does not guarantee that it is *simple*. A simple closed contour cannot self-intersect, whereas a closed contour like a figure-eight self-intersects.

#### 2. The real line integral \( \int_C (x^2 + y^2) \, dx + 2xy \, dy \), where \( C \) is given by \( y = x^3 \) from \( (0, 0) \) to \( (1,1) \), has the same value on the curve \( y = x^6 \) from \( (0, 0) \) to \( (1,1) \).
* **Answer:** **True**
* **Justification:** The differential form \( (x^2+y^2)\,dx + 2xy\,dy \) is exact because \( \frac{\partial}{\partial y}(x^2+y^2) = 2y = \frac{\partial}{\partial x}(2xy) \). Since it is exact, the line integral is independent of the path.

#### 3. The sector defined by \( -\pi/6 < \arg(z) < \pi/6 \) is a simply connected domain.
* **Answer:** **True**
* **Justification:** The sector is a star-like domain centered at any positive real number; it contains no holes, is path-connected, and any closed curve in it can be continuously shrunk to a point.

#### 4. If \( f \) is analytic at \( z_0 \), then \( f''' \) necessarily exists at \( z_0 \).
* **Answer:** **True**
* **Justification:** By Theorem 5.11, if \( f \) is analytic at a point, it possesses derivatives of all orders at that point.

#### 5. If \( f \) is analytic within and on a simple closed contour \( C \) and \( z_0 \) is any point within \( C \), then the value of \( f(z_0) \) is determined by the values of \( f(z) \) on \( C \).
* **Answer:** **True**
* **Justification:** This is the statement of Cauchy's Integral Formula: \( f(z_0) = \frac{1}{2\pi i} \oint_C \frac{f(z)}{z-z_0} \, dz \).

#### 6. If \( f \) is analytic on a simple closed contour \( C \), then \( \oint_C f(z) \, dz = 0 \).
* **Answer:** **False**
* **Justification:** The function must be analytic *within* the contour as well. For example, \( f(z) = 1/z \) is analytic on the circle \( C: |z|=1 \), but \( \oint_C \frac{1}{z}\,dz = 2\pi i \ne 0 \).

#### 7. If \( f \) is continuous in a domain \( D \) and has an antiderivative \( F \) in \( D \), then an integral \( \int_C f(z) \, dz \) has the same value on all contours \( C \) in \( D \) between the initial point \( z_0 \) and terminal point \( z_1 \).
* **Answer:** **True**
* **Justification:** This is the Fundamental Theorem for Contour Integrals (Theorem 5.7), which establishes path independence.

#### 8. If \( \oint_C f(z) \, dz = 0 \) for every simple closed contour \( C \), then \( f \) is analytic within and on \( C \).
* **Answer:** **True**
* **Justification:** This is Morera's Theorem (Theorem 5.15), the converse of the Cauchy-Goursat theorem.

#### 9. The value of \( \int_C \frac{z-2}{z} \, dz \) is the same for any path \( C \) in the right half-plane \( \operatorname{Re}(z) > 0 \) between \( z = 1 + i \) and \( z = 10 + 8i \).
* **Answer:** **True**
* **Justification:** The integrand \( f(z) = 1 - 2/z \) is analytic in the right half-plane \( \operatorname{Re}(z) > 0 \), which is a simply connected domain. By path independence, the integral is the same for any path.

#### 10. If \( g \) is entire, then \( \oint_C \frac{g(z)}{z-i} \, dz = \oint_{C_1} \frac{g(z)}{z-i} \, dz \), where \( C \) is the circle \( |z| = 3 \) and \( C_1 \) is the ellipse \( x^2 + \frac{1}{9}y^2 = 1 \).
* **Answer:** **True**
* **Justification:** Both contours enclose the single singularity \( z=i \). By the Principle of Deformation of Contours (Theorem 5.5), the integrals are equal.

#### 11. \( \oint_C \frac{1}{(z-z_0)(z-z_1)} \, dz = 0 \) for every simple closed contour \( C \) that encloses the points \( z_0 \) and \( z_1 \).
* **Answer:** **True**
* **Justification:** By partial fractions:
  \[
  \oint_C \frac{dz}{(z-z_0)(z-z_1)} = \frac{1}{z_0-z_1} \left( \oint_C \frac{dz}{z-z_0} - \oint_C \frac{dz}{z-z_1} \right) = \frac{1}{z_0-z_1} (2\pi i - 2\pi i) = 0
  \]

#### 12. If \( f \) is analytic within and on the simple closed contour \( C \) and \( z_0 \) is a point within \( C \), then \( \oint_C \frac{f'(z)}{z-z_0} \, dz = \oint_C \frac{f(z)}{(z-z_0)^2} \, dz \).
* **Answer:** **True**
* **Justification:** Both integrals evaluate to \( 2\pi i f'(z_0) \) by Cauchy's Integral Formula (applied directly to \( f' \) on the left, and using the derivative formula on \( f \) on the right).

#### 13. \( \oint_C \operatorname{Re}(z) \, dz \) is independent of the path \( C \) between \( z_0 = 0 \) and \( z_1 = 1 + i \).
* **Answer:** **False**
* **Justification:** The function \( \operatorname{Re}(z) = x \) is not analytic, so its contour integrals are path-dependent.

#### 14. \( \int_C (4z^3 - 2z + 1) \, dz = \int_{-2}^2 (4x^3 - 2x + 1) \, dx \), where the contour \( C \) is comprised of segments \( C_1 \) and \( C_2 \) shown in Figure 5.58.
* **Answer:** **True**
* **Justification:** The integrand is entire, so the integral is independent of path and depends only on the endpoints \( z_0 = -2 \) and \( z_1 = 2 \).

#### 15. \( \oint_{C_1} z^n \, dz = \oint_{C_2} z^n \, dz \) for all integers \( n \), where \( C_1 \) is \( z(t) = e^{it} \), \( 0 \le t \le 2\pi \) and \( C_2 \) is \( z(t) = R e^{it} \), \( R > 1 \), \( 0 \le t \le 2\pi \).
* **Answer:** **True**
* **Justification:** For \( n \ne -1 \), both integrals are 0. For \( n = -1 \), both are \( 2\pi i \).

#### 16. If \( f \) is continuous on the contour \( C \), then \( \int_C f(z) \, dz + \int_{-C} f(z) \, dz = 0 \).
* **Answer:** **True**
* **Justification:** Reversing the orientation of a contour changes the sign of the line integral: \( \int_{-C} f(z) \, dz = -\int_C f(z) \, dz \).

#### 17. On any contour \( C \) with initial point \( z_0 = -i \) and terminal point \( z_1 = i \) that lies in a simply connected domain \( D \) not containing the origin or the negative real axis, \( \int_{-i}^i \frac{1}{z} \, dz = \operatorname{Ln}(i) - \operatorname{Ln}(-i) = \pi i \).
* **Answer:** **True**
* **Justification:** The principal branch \( \operatorname{Ln} z \) is analytic in \( D \), so the Fundamental Theorem of Calculus yields:
  \[
  \operatorname{Ln}(i) - \operatorname{Ln}(-i) = i\frac{\pi}{2} - \left( -i\frac{\pi}{2} \right) = \pi i
  \]

#### 18. \( \oint_C \frac{1}{z^2+1} \, dz = 0 \), where \( C \) is the ellipse \( x^2 + \frac{1}{4}y^2 = 1 \).
* **Answer:** **True**
* **Justification:** The singularities are at \( z = \pm i \), both of which lie inside the ellipse. By partial fractions, their residues are equal and opposite, summing to 0.

#### 19. If \( p(z) \) is a polynomial in \( z \) then the function \( f(z) = 1/p(z) \) can never be an entire function.
* **Answer:** **True**
* **Justification:** By the Fundamental Theorem of Algebra, any non-constant polynomial has at least one root, meaning \( 1/p(z) \) has at least one pole and cannot be entire.

#### 20. The function \( f(z) = \cos z \) is entire and not a constant and so must be unbounded.
* **Answer:** **True**
* **Justification:** According to Liouville's Theorem, any bounded entire function must be constant. Since \( \cos z \) is entire and non-constant, it must be unbounded.

---

## Problems 21 – 40: Fill in the Blanks

#### 21. \( z(t) = e^{it^2}, \, 0 \le t \le \sqrt{2\pi} \), is a parametrization for a **unit circle centered at the origin (oriented counterclockwise)**.

#### 22. \( z(t) = z_0 + e^{it}, \, 0 \le t \le 2\pi \), is a parametrization for a **unit circle centered at \( z_0 \)**.

#### 23. The difference between \( z_1(t) = e^{it}, \, 0 \le t \le 2\pi \) and \( z_2(t) = e^{i(2\pi-t)}, \, 0 \le t \le 2\pi \) is **that they describe the same circle but have opposite orientations**.

#### 24. \( \oint_C (2y + x - 6ix^2) \, dz = \) **\( 1 + \frac{1}{2}i \)**, where \( C \) is the triangle with vertices \( 0, \, i, \, 1 + i \), traversed counterclockwise.

#### 25. If \( f \) is a polynomial function and \( C \) is a simple closed contour, then \( \oint_C f(z) \, dz = \) **\( 0 \)**.

#### 26. \( \oint_C z \operatorname{Im}(z) \, dz = \) **\( \frac{2}{3} + \frac{6}{5}i \)**, where \( C \) is given by \( z(t) = 2t + t^2i, \, 0 \le t \le 1 \).

#### 27. \( \oint_C |z|^2 \, dz = \) **\( \frac{8}{3}i \)**, where \( C \) is the line segment from \( 1 - i \) to \( 1 + i \).

#### 28. \( \oint_C (\bar{z})^n \, dz = \) **\( 2\pi i \) if \( n=1 \), and \( 0 \) otherwise**, where \( C \) is \( z(t) = e^{it}, \, 0 \le t \le 2\pi \).

#### 29. \( \oint_C \sin \frac{z}{2} \, dz = \) **\( 2\cos(2+i) - 2\cos(3i) \)**, where \( C \) is given by \( z(t) = 2i + 4e^{it}, \, 0 \le t \le \pi/2 \).

#### 30. \( \oint_C \sec z \, dz = \) **\( 0 \)**, where \( C \) is \( |z| = 1 \).

#### 31. \( \oint_C \frac{1}{z(z-1)} \, dz = \) **\( 2\pi i \)**, where \( C \) is \( |z-1| = 1/2 \).

#### 32. If \( f(z) = \oint_C \frac{\xi^2 + 6\xi - 2}{\xi - z} \, d\xi \), where \( C \) is \( |z| = 3 \), then \( f(1+i) = \) **\( 2\pi(-8 + 4i) \)**.

#### 33. If \( f(z) = z^3 + e^z \) and \( C \) is \( z = 8e^{it}, \, 0 \le t \le 2\pi \), then \( \oint_C \frac{f(z)}{(z + \pi i)^3} \, dz = \) **\( 6\pi^2 - \pi i \)**.

#### 34. If \( |f(z)| \le 2 \) on the circle \( |z| = 3 \), then \( \left| \oint_C f(z) \, dz \right| \le \) **\( 12\pi \)**.

#### 35. If \( n \) is a positive integer and \( C \) is the contour \( |z| = 2 \), then \( \oint_C z^{-n}e^z \, dz = \) **\( \frac{2\pi i}{(n-1)!} \)**.

#### 36. On \( |z| = 1 \), the contour integral \( \oint_C \frac{\cos z}{z^n} \, dz \) equals **\( 2\pi i \)** for \( n = 1 \), equals **\( 0 \)** for \( n = 2 \), and equals **\( -\pi i \)** for \( n = 3 \).

#### 37. \( \oint_C z^n\,dz = \) **\( 0 \) if \( n \ne -1 \), and \( 2\pi i \) if \( n = -1 \)**, where \( n \) is an integer and \( C \) is \( |z| = 1 \).

#### 38. The value of the integral \( \oint_C \frac{z}{z + i} \, dz \) on the contour \( C \) shown in Figure 5.59 is **\( 2\pi \)**.

#### 39. The value of the integral \( \oint_C (2z + 1) \, dz \) on the contour \( C \) shown in Figure 5.60 is **\( i - 1 \)**.

#### 40. The value of the integral \( \oint_C \frac{e^z}{z^2(z-\pi i)} \, dz \) on the closed contour \( C \) shown in Figure 5.61 is **\( -2 + \frac{2}{\pi}i \)**.
