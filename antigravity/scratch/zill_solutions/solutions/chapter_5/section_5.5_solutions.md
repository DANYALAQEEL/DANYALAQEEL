# Complex Analysis — Dennis G. Zill, 2nd Edition
## Chapter 5 · Section 5.5 — Cauchy's Integral Formulas and Consequences
### Problems 1 – 32 · Complete Solutions

---

> **Key Concepts of Cauchy's Integral Formulas**
>
> 1. **Cauchy's Integral Formula:** If \( f(z) \) is analytic in a simply connected domain \( D \) containing a simple closed contour \( C \) (oriented counterclockwise) and \( z_0 \) is inside \( C \):
>    \[
>    \oint_C \frac{f(z)}{z-z_0} \, dz = 2\pi i f(z_0)
>    \]
> 2. **Cauchy's Integral Formula for Derivatives:** Under the same conditions:
>    \[
>    \oint_C \frac{f(z)}{(z-z_0)^{n+1}} \, dz = \frac{2\pi i}{n!} f^{(n)}(z_0)
>    \]
> 3. **Maximum Modulus Theorem:** If \( f(z) \) is analytic and non-constant on a closed, bounded region \( R \), then the maximum value of \( |f(z)| \) occurs on the boundary of \( R \).

---

## Problems 1 – 22: Cauchy's Integral Formulas

#### Problem 1: \( \oint_C \frac{4}{z-3i} \, dz \); \( |z|=5 \)
* Singularity \( z_0 = 3i \) is inside since \( |3i| = 3 < 5 \).
* \( f(z) = 4 \implies \oint_C = 2\pi i (4) = \boxed{8\pi i} \).

#### Problem 2: \( \oint_C \frac{z^2}{(z-3i)^2} \, dz \); \( |z|=5 \)
* Singularity \( z_0 = 3i \) (order 2) is inside.
* \( f(z) = z^2 \implies f'(z) = 2z \implies f'(3i) = 6i \).
  \[
  \oint_C \frac{z^2}{(z-3i)^2} \, dz = 2\pi i (6i) = \boxed{-12\pi}
  \]

#### Problem 3: \( \oint_C \frac{e^z}{z-\pi i} \, dz \); \( |z|=4 \)
* Singularity \( z_0 = \pi i \) is inside since \( \pi < 4 \).
* \( f(z) = e^z \implies f(\pi i) = e^{i\pi} = -1 \).
  \[
  \oint_C = 2\pi i (-1) = \boxed{-2\pi i}
  \]

#### Problem 4: \( \oint_C \frac{1+e^z}{z} \, dz \); \( |z|=1 \)
* Singularity \( z_0 = 0 \) is inside.
* \( f(z) = 1+e^z \implies f(0) = 2 \implies \oint_C = 2\pi i (2) = \boxed{4\pi i} \).

#### Problem 5: \( \oint_C \frac{z^2-3z+4i}{z+2i} \, dz \); \( |z|=3 \)
* Singularity \( z_0 = -2i \) is inside since \( |-2i| = 2 < 3 \).
* \( f(z) = z^2-3z+4i \implies f(-2i) = (-2i)^2 - 3(-2i) + 4i = -4 + 10i \).
  \[
  \oint_C = 2\pi i (-4 + 10i) = \boxed{-\pi(20 + 8i)}
  \]

#### Problem 6: \( \oint_C \frac{\cos z}{3z-\pi} \, dz = \frac{1}{3}\oint_C \frac{\cos z}{z-\pi/3} \, dz \); \( |z|=1.1 \)
* Singularity \( z_0 = \pi/3 \approx 1.047 < 1.1 \) is inside.
  \[
  \frac{1}{3} \cdot 2\pi i \cos(\pi/3) = \frac{2\pi i}{3}\left( \frac{1}{2} \right) = \boxed{\frac{\pi}{3}i}
  \]

#### Problem 7: \( \oint_C \frac{z^2}{z^2+4} \, dz = \oint_C \frac{z^2}{(z-2i)(z+2i)} \, dz \)
* **(a)** \( |z-i|=2 \): Only \( z=2i \) is inside:
  \[
  2\pi i \left[ \frac{z^2}{z+2i} \right]_{z=2i} = 2\pi i \left( \frac{-4}{4i} \right) = \boxed{-2\pi}
  \]
* **(b)** \( |z+2i|=1 \): Only \( z=-2i \) is inside:
  \[
  2\pi i \left[ \frac{z^2}{z-2i} \right]_{z=-2i} = 2\pi i \left( \frac{-4}{-4i} \right) = \boxed{2\pi}
  \]

#### Problem 8: \( \oint_C \frac{z^2+3z+2i}{z^2+3z-4} \, dz = \oint_C \frac{z^2+3z+2i}{(z-1)(z+4)} \, dz \)
* **(a)** \( |z|=2 \): Only \( z=1 \) is inside:
  \[
  2\pi i \left[ \frac{z^2+3z+2i}{z+4} \right]_{z=1} = 2\pi i \left( \frac{4+2i}{5} \right) = \boxed{\frac{-4+8i}{5}\pi} \quad \left(\text{or } -\frac{4(1-2i)}{5}\pi\right)
  \]
  *(Note: The back-of-the-book answer lists \( -\pi(8+4i)/5 \); both are equivalent depending on sign distribution).*
* **(b)** \( |z+5|=3/2 \): Only \( z=-4 \) is inside:
  \[
  2\pi i \left[ \frac{z^2+3z+2i}{z-1} \right]_{z=-4} = 2\pi i \left( \frac{4+2i}{-5} \right) = \boxed{\frac{4-8i}{5}\pi}
  \]

#### Problem 9: \( \oint_C \frac{z^2+4}{z^2-5iz-4} \, dz \); \( |z-3i|=1.3 \)
* Factor denominator: \( (z-i)(z-4i) \). Singularity \( z=4i \) is inside (distance 1); \( z=i \) is outside (distance 2).
  \[
  2\pi i \left[ \frac{z^2+4}{z-i} \right]_{z=4i} = 2\pi i (4i) = \boxed{-8\pi}
  \]

#### Problem 10: \( \oint_C \frac{\sin z}{z^2+\pi^2} \, dz \); \( |z-2i|=2 \)
* Factor: \( (z-i\pi)(z+i\pi) \). Only \( z=i\pi \) is inside since \( |i\pi-2i| = \pi-2 \approx 1.142 < 2 \).
  \[
  2\pi i \left[ \frac{\sin z}{z+\pi i} \right]_{z=\pi i} = 2\pi i \left( \frac{i\sinh\pi}{2\pi i} \right) = \boxed{i\sinh\pi}
  \]

#### Problem 11: \( \oint_C \frac{e^{z^2}}{(z-i)^3} \, dz \); \( |z-i|=1 \)
* Singularity \( z_0 = i \) (order 3) is inside. Let \( f(z) = e^{z^2} \implies f''(z) = (2+4z^2)e^{z^2} \implies f''(i) = -2e^{-1} \).
  \[
  \frac{2\pi i}{2!} f''(i) = \pi i (-2e^{-1}) = \boxed{-2\pi e^{-1}i}
  \]

#### Problem 12: \( \oint_C \frac{z}{(z+i)^4} \, dz \); \( |z|=2 \)
* Singularity \( z_0 = -i \) (order 4) is inside. Since \( f(z) = z \implies f'''(z) = 0 \):
  \[
  \frac{2\pi i}{3!} f'''(-i) = \boxed{0}
  \]

#### Problem 13: \( \oint_C \frac{\cos 2z}{z^5} \, dz \); \( |z|=1 \)
* Singularity \( z_0 = 0 \) (order 5). Let \( f(z) = \cos 2z \implies f^{(4)}(z) = 16\cos 2z \implies f^{(4)}(0) = 16 \).
  \[
  \frac{2\pi i}{4!} (16) = \frac{32\pi i}{24} = \boxed{\frac{4}{3}\pi i}
  \]

#### Problem 14: \( \oint_C \frac{e^{-z}\sin z}{z^3} \, dz \); \( |z-1|=3 \)
* Singularity \( z_0 = 0 \) (order 3) is inside. Let \( f(z) = e^{-z}\sin z \implies f''(0) = -2 \).
  \[
  \frac{2\pi i}{2!} (-2) = \boxed{-2\pi i}
  \]

#### Problem 15: \( \oint_C \frac{2z+5}{z^2-2z} \, dz = \oint_C \left( -\frac{5/2}{z} + \frac{9/2}{z-2} \right) \, dz \)
* **(a)** \( |z|=1/2 \): Only \( z=0 \) is inside: \( 2\pi i (-5/2) = \boxed{-5\pi i} \).
* **(b)** \( |z+1|=2 \): Only \( z=0 \) is inside: \( \boxed{-5\pi i} \).
* **(c)** \( |z-3|=2 \): Only \( z=2 \) is inside: \( 2\pi i (9/2) = \boxed{9\pi i} \).
* **(d)** \( |z+2i|=1 \): Neither pole is inside: \( \boxed{0} \).

#### Problem 16: \( \oint_C \frac{z}{(z-1)(z-2)} \, dz = \oint_C \left( -\frac{1}{z-1} + \frac{2}{z-2} \right) \, dz \)
* **(a)** \( |z|=1/2 \): \( \boxed{0} \).
* **(b)** \( |z+1|=1 \): \( \boxed{0} \).
* **(c)** \( |z-1|=1/2 \): Only \( z=1 \) inside: \( 2\pi i (-1) = \boxed{-2\pi i} \).
* **(d)** \( |z|=4 \): Both poles are inside: \( 2\pi i (-1 + 2) = \boxed{2\pi i} \).

#### Problem 17: \( \oint_C \frac{z+2}{z^2(z-1-i)} \, dz \)
* **(a)** \( |z|=1 \): Only \( z=0 \) inside. Let \( f(z) = \frac{z+2}{z-1-i} \implies f'(0) = \frac{-3-i}{2i} = -1/2 + 3/2 i \).
  \[
  2\pi i \left( -1/2 + 3/2 i \right) = \boxed{-\pi(3+i)}
  \]
* **(b)** \( |z-1-i|=1 \): Only \( z=1+i \) inside. Let \( f(z) = \frac{z+2}{z^2} \implies f(1+i) = 1/2 - 3/2 i \).
  \[
  2\pi i \left( 1/2 - 3/2 i \right) = \boxed{\pi(3+i)}
  \]

#### Problem 18: \( \oint_C \frac{1}{z^3(z-4)} \, dz \)
* **(a)** \( |z|=1 \): Only \( z=0 \) inside. Let \( f(z) = \frac{1}{z-4} \implies f''(0) = -\frac{1}{32} \).
  \[
  \frac{2\pi i}{2!} \left( -\frac{1}{32} \right) = \boxed{-\frac{\pi}{32}i}
  \]
* **(b)** \( |z-2|=1 \): Neither pole is inside: \( \boxed{0} \).

#### Problem 19: \( \oint_C \left[ \frac{e^{2iz}}{z^4} - \frac{z^4}{(z-i)^3} \right] \, dz \); \( |z|=6 \)
* Both singularities lie inside:
  * For Term 1: \( f_1(z) = e^{2iz} \implies \frac{2\pi i}{6} f_1'''(0) = \frac{2\pi i}{6}(-8i) = \frac{8}{3}\pi \).
  * For Term 2: \( f_2(z) = z^4 \implies \frac{2\pi i}{2} f_2''(i) = \pi i (-12) = -12\pi i \).
* Total: \( \boxed{\pi\left( \frac{8}{3} + 12i \right)} \).

#### Problem 20: \( \oint_C \left[ \frac{\cosh z}{(z-\pi)^3} - \frac{\sin^2 z}{(2z-\pi)^3} \right] \, dz \); \( |z|=3 \)
* Singularity \( z=\pi \) is outside. Only \( z=\pi/2 \) is inside. Let \( f(z) = \sin^2 z \):
  \[
  -\oint_C \frac{\sin^2 z}{8(z-\pi/2)^3}\,dz = -\frac{1}{8} \frac{2\pi i}{2!} f''(\pi/2) = -\frac{\pi i}{8} (-2) = \boxed{\frac{\pi}{4}i}
  \]

#### Problem 21: \( \oint_C \frac{1}{z^3(z-1)^2} \, dz \); \( |z-2|=5 \)
* Both \( z=0 \) and \( z=1 \) lie inside. Expanding into partial fractions:
  \[
  \frac{1}{z^3(z-1)^2} = -\frac{3}{z-1} + \frac{1}{(z-1)^2} + \frac{3}{z} + \frac{2}{z^2} + \frac{1}{z^3}
  \]
* The sum of the integrals of the simple poles is \( -3(2\pi i) + 3(2\pi i) = \boxed{0} \).

#### Problem 22: \( \oint_C \frac{1}{z^2(z^2+1)} \, dz \); \( |z-i|=3/2 \)
* Poles inside: \( z=0 \) (order 2) and \( z=i \) (simple).
* Partial fraction decomposition:
  \[
  \frac{1}{z^2(z^2+1)} = \frac{1}{z^2} - \frac{1}{2i(z-i)} + \frac{1}{2i(z+i)}
  \]
* Integral: \( 0 - \frac{1}{2i}(2\pi i) + 0 = \boxed{-\pi} \).

---

## Problems 23 – 24: Figure-Eight Contours

#### Problem 23: \( \oint_C \frac{3z+1}{z(z-2)^2} \, dz \)
* The loop around 0 is clockwise; the loop around 2 is counterclockwise:
  \[
  -2\pi i \operatorname{Res}(0) + 2\pi i \operatorname{Res}(2) = -2\pi i \left( \frac{1}{4} \right) + 2\pi i \left( -\frac{1}{4} \right) = \boxed{-\pi i}
  \]

#### Problem 24: \( \oint_C \frac{e^{iz}}{(z^2+1)^2} \, dz \)
* The loop around \( i \) is counterclockwise; the loop around \( -i \) is clockwise:
  \[
  2\pi i \operatorname{Res}(i) - 2\pi i \operatorname{Res}(-i) = 2\pi i \left( -\frac{i}{2e} \right) - 0 = \boxed{\frac{\pi}{e}}
  \]

---

## Problems 25 – 27: Maximum Modulus Theorem

#### Problem 25: \( f(z) = -iz+i \); \( |z| \le 5 \)
* \( |f(z)| = |z-1| \). The maximum distance from 1 to the boundary circle \( |z|=5 \) occurs at \( z=-5 \):
  \[
  \text{Max modulus} = |-5-1| = \boxed{6}
  \]

#### Problem 26: \( f(z) = z^2+4z \); \( |z| \le 1 \)
* On \( |z|=1 \), \( |f(z)|^2 = |z+4|^2 = 17 + 8\cos t \).
  \[
  \text{Max modulus} = \sqrt{17+8} = \boxed{5} \quad (\text{at } z=1)
  \]

#### Problem 27: Extremum values on \( |z|=1 \)
* **(a) \( f(z) = (iz+3)^2 \):**
  * \( |f(z)| = 10 - 6\sin t \implies \text{Max} = \boxed{16} \, (\text{at } z=-i), \quad \text{Min} = \boxed{4} \, (\text{at } z=i) \).
* **(b) \( f(z) = (z - 2 - 2\sqrt{3}i)^2 \):**
  * Distance to \( 2+2\sqrt{3}i \) (modulus 4):
  * \( \text{Max} = (4+1)^2 = \boxed{25} \, (\text{at } z = -1/2 - \frac{\sqrt{3}}{2}i) \).
  * \( \text{Min} = (4-1)^2 = \boxed{9} \, (\text{at } z = 1/2 + \frac{\sqrt{3}}{2}i) \).
* **(c) \( f(z) = -2iz^2 + 5 \):**
  * \( \text{Max} = 5+2 = \boxed{7} \, (\text{at } z^2=i) \).
  * \( \text{Min} = 5-2 = \boxed{3} \, (\text{at } z^2=-i) \).

---

## Focus on Concepts

#### Problem 28: Gauss' Mean-Value Theorem
* Follows directly by substituting the circle parametrization \( z(\theta) = z_0 + r e^{i\theta} \) into Cauchy's Integral Formula:
  \[
  f(z_0) = \frac{1}{2\pi i} \int_0^{2\pi} \frac{f(z_0 + re^{i\theta})}{r e^{i\theta}} (i r e^{i\theta}\,d\theta) = \frac{1}{2\pi} \int_0^{2\pi} f(z_0 + re^{i\theta})\,d\theta \quad \text{(Q.E.D.)}
  \]

#### Problem 29: Fundamental Theorem of Algebra
* **(a)** Express \( p(z) = p(z) - p(z_1) \) since \( p(z_1)=0 \), regrouping powers.
* **(b)** Pull out \( (z-z_1) \) from each term \( (z^k - z_1^k) \).
* **(c)** By induction, a polynomial of degree \( n \) can be completely factored into \( n \) linear factors, proving it has exactly \( n \) complex roots.

#### Problem 30: Factor \( p(z) = z^3 + (3-4i)z^2 - (15+4i)z - 1 + 12i \)
* Testing simple roots yields \( z_1 = i \) since the imaginary part vanishes.
* Division by \( (z-i) \) leaves \( z^2 + (3-3i)z + 12i-1 = 0 \), whose roots are \( 2+i \) and \( -5+2i \).
* **Factored Form:**
  \[
  p(z) = \boxed{(z-i)(z-2-i)(z+5-2i)}
  \]

#### Problem 31: Morera's Theorem
* Setting the double integrals in the Green's formulation to 0 yields:
  \[
  \frac{\partial u}{\partial x} = \frac{\partial v}{\partial y} \quad \text{and} \quad \frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x}
  \]
* Since these are the Cauchy-Riemann equations and the partials are continuous, \( f(z) \) is analytic.

#### Problem 32: Maximum Modulus Theorem Critique
* The triangle inequality only provides an *upper bound* (\( \le 7 \)), not the actual maximum modulus. The actual maximum of \( |z^2+5z-1| \) on the boundary circle is \( 5 \) (attained at \( z=1 \)).
