# Complex Analysis — Dennis G. Zill, 2nd Edition
## Chapter 5 · Section 5.3 — Cauchy-Goursat Theorem
### Problems 1 – 31 · Complete Solutions

---

> **Key Concepts of the Cauchy-Goursat Theorem**
>
> 1. **Cauchy-Goursat Theorem:** If a function \( f(z) \) is analytic in a simply connected domain \( D \), then for every simple closed contour \( C \) lying entirely in \( D \):
>    \[
>    \oint_C f(z) \, dz = 0
>    \]
> 2. **Multi-Connected Domains (Deformation Theorem):** If \( C, C_1, C_2, \dots, C_n \) are closed contours such that \( C \) encloses all \( C_k \), and \( f(z) \) is analytic in the region between them:
>    \[
>    \oint_C f(z) \, dz = \sum_{k=1}^n \oint_{C_k} f(z) \, dz
>    \]
> 3. **Fundamental Circular Integral:** For any circle \( C \) centered at \( z_0 \):
>    \[
>    \oint_C \frac{dz}{(z-z_0)^n} = \begin{cases} 2\pi i, & n=1 \\ 0, & n > 1 \end{cases}
>    \]

---

## Problems 1 – 8: Vanishing Integrals on the Unit Circle \( |z|=1 \)

For each of the following, we show that \( f(z) \) has no singularities inside or on the unit circle \( |z|=1 \), guaranteeing \( \oint_{|z|=1} f(z) \, dz = 0 \) by the Cauchy-Goursat Theorem.

#### 1. \( f(z) = z^3 - 1 + 3i \)
* **Justification:** This is a polynomial, which is an entire function (analytic everywhere). Therefore, it is analytic on and inside the unit circle.

#### 2. \( f(z) = z^2 + \frac{1}{z-4} \)
* **Justification:** The only singularity is at \( z = 4 \). Since \( |4| = 4 > 1 \), the singularity lies strictly outside the unit disk.

#### 3. \( f(z) = \frac{z}{2z+3} \)
* **Justification:** The singularity is at \( 2z+3 = 0 \implies z = -1.5 \). Since \( |-1.5| = 1.5 > 1 \), the singularity lies strictly outside the unit disk.

#### 4. \( f(z) = \frac{z-3}{z^2+2z+2} \)
* **Justification:** The singularities are the roots of \( z^2+2z+2=0 \implies z = -1 \pm i \). Since \( |-1 \pm i| = \sqrt{2} \approx 1.414 > 1 \), all singularities lie strictly outside the unit disk.

#### 5. \( f(z) = \frac{\sin z}{(z^2-25)(z^2+9)} \)
* **Justification:** The singularities are at \( z = \pm 5 \) and \( z = \pm 3i \). The moduli of these points are \( 5 \) and \( 3 \), both of which are strictly greater than \( 1 \).

#### 6. \( f(z) = \frac{e^z}{2z^2+11z+15} = \frac{e^z}{(2z+5)(z+3)} \)
* **Justification:** The singularities are at \( z = -2.5 \) and \( z = -3 \). Both moduli are greater than \( 1 \), placing them outside the unit disk.

#### 7. \( f(z) = \tan z \)
* **Justification:** The singularities of \( \tan z \) occur at \( z = (2n+1)\pi/2 \). The closest singularities are at \( \pm \pi/2 \approx \pm 1.571 \), which lie outside the unit disk.

#### 8. \( f(z) = \frac{z^2-9}{\cosh z} \)
* **Justification:** The singularities occur at the zeros of \( \cosh z \), which are \( z = i(n + 1/2)\pi \). The closest zeros are at \( \pm i\pi/2 \approx \pm 1.571i \), which lie outside the unit disk.

---

## Problems 9 – 10: Integrals around Enclosed Singularities

#### Problem 9: Evaluate \( \oint_C \frac{1}{z} \, dz \) for \( C \) enclosing the origin (Figure 5.34)
* By the deformation theorem, we can deform \( C \) to a circle centered at the origin:
  \[
  \oint_C \frac{1}{z} \, dz = \boxed{2\pi i}
  \]

#### Problem 10: Evaluate \( \oint_C \frac{5}{z+1+i} \, dz \); \( C: x^4+y^4=16 \) (Figure 5.35)
* The singularity is at \( z_0 = -1-i \). Since \( (-1)^4 + (-1)^4 = 2 < 16 \), \( z_0 \) lies inside the contour.
* Deforming \( C \) to a small circle around \( z_0 \):
  \[
  \oint_C \frac{5}{z+1+i} \, dz = 5 \oint_{C_0} \frac{dz}{z - z_0} = 5(2\pi i) = \boxed{10\pi i}
  \]

---

## Problems 11 – 22: Evaluation along Closed Contours

#### Problem 11: \( \oint_C \left( z + \frac{1}{z} \right) \, dz \); \( |z|=2 \)
* The term \( z \) is entire, and \( 1/z \) has a simple pole at \( z=0 \) inside the circle:
  \[
  \oint_C z\,dz + \oint_C \frac{1}{z}\,dz = 0 + 2\pi i = \boxed{2\pi i}
  \]

#### Problem 12: \( \oint_C \left( z + \frac{1}{z^2} \right) \, dz \); \( |z|=2 \)
* Since \( n=2 > 1 \), the second term integrates to 0:
  \[
  \oint_C z\,dz + \oint_C \frac{1}{z^2}\,dz = 0 + 0 = \boxed{0}
  \]

#### Problem 13: \( \oint_C \frac{z}{z^2-\pi^2} \, dz \); \( |z|=3 \)
* Singularities at \( z = \pm \pi \). Since \( \pi \approx 3.142 > 3 \), both lie outside the contour:
  \[
  \oint_C \frac{z}{z^2-\pi^2} \, dz = \boxed{0}
  \]

#### Problem 14: \( \oint_C \frac{10}{(z+i)^4} \, dz \); \( |z+i|=1 \)
* By the circular power formula for \( n=4 > 1 \):
  \[
  \oint_{|z+i|=1} \frac{10}{(z+i)^4} \, dz = \boxed{0}
  \]

#### Problem 15: \( \oint_C \frac{2z+1}{z^2+z} \, dz = \oint_C \left( \frac{1}{z} + \frac{1}{z+1} \right) \, dz \)
* **(a)** \( |z|=1/2 \): Only \( z=0 \) is inside: \( 2\pi i + 0 = \boxed{2\pi i} \).
* **(b)** \( |z|=2 \): Both \( z=0 \) and \( z=-1 \) are inside: \( 2\pi i + 2\pi i = \boxed{4\pi i} \).
* **(c)** \( |z-3i|=1 \): Neither singularity is inside: \( \boxed{0} \).

#### Problem 16: \( \oint_C \frac{2z}{z^2+3} \, dz = \oint_C \left( \frac{1}{z-i\sqrt{3}} + \frac{1}{z+i\sqrt{3}} \right) \, dz \)
* **(a)** \( |z|=1 \): Both poles \( \pm i\sqrt{3} \) lie outside: \( \boxed{0} \).
* **(b)** \( |z-2i|=1 \): Only \( +i\sqrt{3} \) is inside: \( 2\pi i + 0 = \boxed{2\pi i} \).
* **(c)** \( |z|=4 \): Both poles are inside: \( 2\pi i + 2\pi i = \boxed{4\pi i} \).

#### Problem 17: \( \oint_C \frac{-3z+2}{z^2-8z+12} \, dz = \oint_C \left( \frac{1}{z-2} - \frac{4}{z-6} \right) \, dz \)
* **(a)** \( |z-5|=2 \): Only \( z=6 \) is inside: \( 0 - 4(2\pi i) = \boxed{-8\pi i} \).
* **(b)** \( |z|=9 \): Both \( z=2 \) and \( z=6 \) are inside: \( 2\pi i - 4(2\pi i) = \boxed{-6\pi i} \).

#### Problem 18: \( \oint_C \left( \frac{3}{z+2} - \frac{1}{z-2i} \right) \, dz \)
* **(a)** \( |z|=5 \): Both poles are inside: \( 3(2\pi i) - 2\pi i = \boxed{4\pi i} \).
* **(b)** \( |z-2i|=1/2 \): Only \( z=2i \) is inside: \( 0 - 2\pi i = \boxed{-2\pi i} \).

#### Problem 19: \( \oint_C \frac{z-1}{z(z-i)(z-3i)} \, dz \); \( |z-i|=1/2 \)
* Only \( z=i \) is inside. Let \( g(z) = \frac{z-1}{z(z-3i)} \):
  \[
  \oint_C \frac{g(z)}{z-i} \, dz = 2\pi i g(i) = 2\pi i \frac{i-1}{i(-2i)} = \pi i (i-1) = \boxed{-\pi(1+i)}
  \]

#### Problem 20: \( \oint_C \frac{1}{z^3+2iz^2} \, dz = \oint_C \frac{1}{z^2(z+2i)} \, dz \); \( |z|=1 \)
* The pole at \( z=0 \) (order 2) is inside; \( z=-2i \) is outside. Let \( g(z) = \frac{1}{z+2i} \):
  \[
  \oint_C \frac{g(z)}{z^2} \, dz = 2\pi i g'(0) = 2\pi i \left( -\frac{1}{(2i)^2} \right) = \boxed{\frac{\pi}{2}i}
  \]

#### Problem 21: \( \oint_C \operatorname{Ln}(z+10) \, dz \); \( |z|=2 \)
* The branch cut of \( \operatorname{Ln}(z+10) \) is \( z \le -10 \), which lies entirely outside the disk \( |z| \le 2 \). Thus the integrand is analytic on and inside \( C \):
  \[
  \oint_C \operatorname{Ln}(z+10) \, dz = \boxed{0}
  \]

#### Problem 22: \( \oint_C \left[ \frac{5}{(z-2)^3} + \frac{3}{(z-2)^2} - \frac{10}{z-2} + 7\csc z \right] \, dz \); \( |z-2|=1/2 \)
* The pole \( z=2 \) is inside; all poles of \( \csc z \) (\( z = n\pi \)) are outside.
  \[
  0 + 0 - 10(2\pi i) + 0 = \boxed{-20\pi i}
  \]

#### Problem 23: Figure-Eight Contour (Figure 5.36)
* Split into two loops: \( C_1 \) (around 0) and \( C_2 \) (around 1).
  * **If \( C_1 \) is clockwise and \( C_2 \) is counterclockwise:**
    \[
    \oint_{C_1} \left( \frac{3}{z} + \frac{5}{z-1} \right)\,dz + \oint_{C_2} \left( \frac{3}{z} + \frac{5}{z-1} \right)\,dz = -3(2\pi i) + 5(2\pi i) = \boxed{4\pi i}
    \]
  * **If \( C_1 \) is counterclockwise and \( C_2 \) is clockwise:**
    \[
    3(2\pi i) - 5(2\pi i) = \boxed{-4\pi i}
    \]

#### Problem 24: Circular Power Formula Proof
* Parameterize circle \( z = z_0 + r e^{it} \implies dz = i r e^{it}\,dt \):
  \[
  \oint_C \frac{dz}{(z-z_0)^n} = i r^{1-n} \int_0^{2\pi} e^{i(1-n)t}\,dt
  \]
  * If \( n = 1 \): \( i \int_0^{2\pi} dt = 2\pi i \).
  * If \( n > 1 \): \( i r^{1-n} \left[ \frac{e^{i(1-n)t}}{i(1-n)} \right]_0^{2\pi} = 0 \). (Q.E.D.)

---

## Problems 25 – 26: General Closed Contour Integrals

#### Problem 25: \( \oint_C \left[ \frac{e^z}{z+3} - 3\bar{z} \right] \, dz \); \( |z|=1 \)
* On \( |z|=1 \), \( \bar{z} = 1/z \):
  \[
  \oint_{|z|=1} \frac{e^z}{z+3}\,dz - 3\oint_{|z|=1} \frac{dz}{z} = 0 - 3(2\pi i) = \boxed{-6\pi i}
  \]

#### Problem 26: \( \oint_C \left( z^3 + z^2 + \operatorname{Re}(z) \right) \, dz \); \( C: \) triangle \( 0 \to 1+2i \to 1 \to 0 \)
* The analytic part \( z^3+z^2 \) integrates to 0. Integrate \( \operatorname{Re}(z) \):
  * **\( C_1 \, (0 \to 1) \):** \( y=0 \implies \int_0^1 x\,dx = 1/2 \).
  * **\( C_2 \, (1 \to 1+2i) \):** \( x=1 \implies \int_0^2 1(i\,dy) = 2i \).
  * **\( C_3 \, (1+2i \to 0) \):** \( y=2x \implies \int_1^0 x(1+2i)\,dx = -1/2 - i \).
* **Total:** \( 1/2 + 2i - 1/2 - i = \boxed{i} \).

---

## Focus on Concepts

#### Problem 27:
* All functions (a), (b), (c), (d) are products, compositions, or quotients of entire functions where the denominators are never zero. Thus they are entire, and by Cauchy-Goursat, any closed contour integral of them is 0.

#### Problem 28:
* Guaranteed to be 0 for any closed contour \( C \) that does not enclose or pass through the singularities:
  * **(a)** \( z = 0, \, \pm i \).
  * **(b)** \( z = n\pi \), \( n \in \mathbb{Z} \).
  * **(c)** \( z = 2n\pi i \), \( n \in \mathbb{Z} \).
  * **(d)** the nonpositive real axis.

#### Problem 29:
* Replacing \( \bar{z} = 1/z \) on \( |z|=1 \) transforms the non-analytic function \( \bar{z} \) into the analytic function \( 1/z \) (except at \( z=0 \)), making the integral easily computable using residue/integral formulas.

#### Problem 30:
* Since \( e^z \) is entire, the path integral is independent of the contour shape and only depends on the endpoints:
  \[
  \int_0^{2+2i} e^z\,dz = \boxed{e^{2+2i} - 1} = e^2(\cos 2 + i\sin 2) - 1
  \]

#### Problem 31:
* Since \( e^z \) is entire, the contour integral \( \oint_C e^z\,dz = 0 \) for any closed contour.
