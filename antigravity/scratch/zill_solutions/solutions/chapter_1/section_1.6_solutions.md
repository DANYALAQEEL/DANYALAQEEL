# Complex Analysis — Dennis G. Zill, 2nd Edition
## Chapter 1 · Section 1.6 — Applications
### Problems 1 – 40 · Complete Solutions

---

> **Key Concepts for Applications**
>
> 1. **Quadratic Formula:** For the complex quadratic equation \( az^2 + bz + c = 0 \):
>    \[
>    z = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
>    \]
> 2. **Exponential Form:** A complex number in polar form can be written compactly using Euler's formula \( e^{i\theta} = \cos\theta + i\sin\theta \):
>    \[
>    z = r e^{i\theta}
>    \]
> 3. **Differential Equations:** For a homogeneous linear second-order DE \( ay'' + by' + cy = 0 \) with real coefficients, if the roots of the characteristic equation \( ar^2 + br + c = 0 \) are \( \alpha \pm i\beta \), the general solution is:
>    \[
>    y = e^{\alpha x}(c_1 \cos(\beta x) + c_2 \sin(\beta x))
>    \]
> 4. **LRC Series Circuits:** The charge \( q_p(t) \) and current \( ip(t) = \frac{dq_p}{dt} \) satisfy:
>    \[
>    L \frac{d^2q}{dt^2} + R \frac{dq}{dt} + \frac{1}{C} q = E_0 \cos(\gamma t)
>    \]
>    The complex impedance is \( Z_c = R + j\left(L\gamma - \frac{1}{C\gamma}\right) = R + jX \), and the impedance is \( Z = |Z_c| \).

---

## Problems 1 – 6

**Solve the given quadratic equation using the quadratic formula. Then factor the polynomial.**

### Problem 1: \( z^2 + iz - 2 = 0 \)
* **Coefficients:** \( a = 1, \, b = i, \, c = -2 \)
* **Discriminant:** \( b^2 - 4ac = i^2 - 4(1)(-2) = -1 + 8 = 7 \)
* **Roots:**
  \[
  z = \frac{-i \pm \sqrt{7}}{2} = \pm \frac{\sqrt{7}}{2} - \frac{1}{2}i
  \]
* **Factorization:**
  \[
  \boxed{\left(z - \frac{\sqrt{7}}{2} + \frac{1}{2}i\right)\left(z + \frac{\sqrt{7}}{2} + \frac{1}{2}i\right) = 0}
  \]

### Problem 2: \( iz^2 - z + i = 0 \)
* **Coefficients:** \( a = i, \, b = -1, \, c = i \)
* **Discriminant:** \( b^2 - 4ac = (-1)^2 - 4(i)(i) = 1 - 4(-1) = 5 \)
* **Roots:**
  \[
  z = \frac{1 \pm \sqrt{5}}{2i} = \frac{1 \pm \sqrt{5}}{2}(-i) = -\frac{1 \pm \sqrt{5}}{2}i
  \]
* **Factorization:**
  \[
  \boxed{i\left(z + \frac{1 + \sqrt{5}}{2}i\right)\left(z + \frac{1 - \sqrt{5}}{2}i\right) = 0}
  \]

### Problem 3: \( z^2 - (1 + i)z + 6 - 17i = 0 \)
* **Coefficients:** \( a = 1, \, b = -(1 + i), \, c = 6 - 17i \)
* **Discriminant:**
  \[
  b^2 - 4ac = (1 + i)^2 - 4(6 - 17i) = 2i - 24 + 68i = -24 + 70i
  \]
* **Square Roots of \( -24 + 70i \):**
  Solve \( (x + iy)^2 = -24 + 70i \implies x^2 - y^2 = -24, \, 2xy = 70 \implies xy = 35 \).
  The integer solutions are \( x = \pm 5, \, y = \pm 7 \) (since \( 25 - 49 = -24 \)).
  So, \( \sqrt{-24+70i} = \pm (5 + 7i) \).
* **Roots:**
  \[
  z = \frac{(1 + i) \pm (5 + 7i)}{2} \implies z_1 = 3 + 4i, \quad z_2 = -2 - 3i
  \]
* **Factorization:**
  \[
  \boxed{(z - 3 - 4i)(z + 2 + 3i) = 0}
  \]

### Problem 4: \( z^2 - (1 + 9i)z - 20 + 5i = 0 \)
* **Coefficients:** \( a = 1, \, b = -(1 + 9i), \, c = -20 + 5i \)
* **Discriminant:**
  \[
  b^2 - 4ac = (1 + 9i)^2 - 4(-20 + 5i) = 1 + 18i - 81 + 80 - 20i = -2i
  \]
* **Square Roots of \( -2i \):**
  \( -2i = 2 e^{-i\pi/2} \implies \sqrt{-2i} = \pm \sqrt{2} e^{-i\pi/4} = \pm \sqrt{2}\left(\frac{\sqrt{2}}{2} - \frac{\sqrt{2}}{2}i\right) = \pm (1 - i) \).
* **Roots:**
  \[
  z = \frac{(1 + 9i) \pm (1 - i)}{2} \implies z_1 = 1 + 4i, \quad z_2 = 5i
  \]
* **Factorization:**
  \[
  \boxed{(z - 1 - 4i)(z - 5i) = 0}
  \]

### Problem 5: \( z^2 + 2z - \sqrt{3}i = 0 \)
* **Coefficients:** \( a = 1, \, b = 2, \, c = -\sqrt{3}i \)
* **Discriminant:** \( b^2 - 4ac = 4 + 4\sqrt{3}i = 8 e^{i\pi/3} \)
* **Square Roots of \( 4 + 4\sqrt{3}i \):**
  \( \pm \sqrt{8} e^{i\pi/6} = \pm 2\sqrt{2} \left( \frac{\sqrt{3}}{2} + \frac{1}{2}i \right) = \pm (\sqrt{6} + \sqrt{2}i) \).
* **Roots:**
  \[
  z = \frac{-2 \pm (\sqrt{6} + \sqrt{2}i)}{2} = -1 \pm \left(\frac{\sqrt{6}}{2} + \frac{\sqrt{2}}{2}i\right)
  \]
* **Factorization:**
  \[
  \boxed{\left(z + 1 - \frac{\sqrt{6}}{2} - \frac{\sqrt{2}}{2}i\right)\left(z + 1 + \frac{\sqrt{6}}{2} + \frac{\sqrt{2}}{2}i\right) = 0}
  \]

### Problem 6: \( 3z^2 + (2 - 3i)z - 1 - 3i = 0 \)
* **Coefficients:** \( a = 3, \, b = 2 - 3i, \, c = -1 - 3i \)
* **Discriminant:** \( b^2 - 4ac = (2 - 3i)^2 - 12(-1 - 3i) = -5 - 12i + 12 + 36i = 7 + 24i \)
* **Square Roots of \( 7 + 24i \):** \( \pm (4 + 3i) \) (from Problem 15 in Exercises 1.4).
* **Roots:**
  \[
  z = \frac{-(2 - 3i) \pm (4 + 3i)}{6} \implies z_1 = \frac{2 + 6i}{6} = \frac{1}{3} + i, \quad z_2 = \frac{-6}{6} = -1
  \]
* **Factorization:**
  \[
  \boxed{3\left(z - \frac{1}{3} - i\right)(z + 1) = (3z - 1 - 3i)(z + 1) = 0}
  \]

---

## Problems 7 – 12

**Express the given complex number in the exponential form \( z = r e^{i\theta} \).**

### Problem 7: \( -10 \)
* \( r = 10, \, \theta = \pi \implies \boxed{10 e^{i\pi}} \)

### Problem 8: \( -2\pi i \)
* \( r = 2\pi, \, \theta = -\frac{\pi}{2} \implies \boxed{2\pi e^{-i\pi/2}} \)

### Problem 9: \( -4 - 4i \)
* \( r = 4\sqrt{2}, \, \theta = -\frac{3\pi}{4} \equiv \frac{5\pi}{4} \pmod{2\pi} \implies \boxed{4\sqrt{2} e^{5\pi/4 i}} \) (or \( 4\sqrt{2} e^{-3\pi/4 i} \))

### Problem 10: \( \frac{2}{1 + i} \)
* Simplify: \( \frac{2(1-i)}{2} = 1 - i \)
* \( r = \sqrt{2}, \, \theta = -\frac{\pi}{4} \implies \boxed{\sqrt{2} e^{-i\pi/4}} \)

### Problem 11: \( (3 - i)^2 \)
* Expand: \( (3 - i)^2 = 9 - 6i - 1 = 8 - 6i \)
* \( r = \sqrt{64 + 36} = 10 \), \( \theta = \arctan(-6/8) = \arctan(-3/4) \approx -0.64350 \) rad
* \[
  \boxed{10 e^{i \arctan(-3/4)}}
  \]

### Problem 12: \( (1 + i)^{20} \)
* \( 1 + i = \sqrt{2} e^{i\pi/4} \)
* Raise to power: \( (1+i)^{20} = (\sqrt{2})^{20} e^{20i\pi/4} = 1024 e^{5i\pi} = \boxed{1024 e^{i\pi}} \) (since \( 5\pi \equiv \pi \pmod{2\pi} \))

---

## Problems 13 – 16

**Find linearly independent solutions of the given homogeneous differential equation.**

### Problem 13: \( y'' - 4y' + 13y = 0 \)
* **Characteristic Equation:** \( m^2 - 4m + 13 = 0 \implies (m - 2)^2 + 9 = 0 \implies m = 2 \pm 3i \)
* **Linearly Independent Solutions:**
  \[
  \boxed{y_1 = e^{2x}\cos(3x), \quad y_2 = e^{2x}\sin(3x)}
  \]

### Problem 14: \( 3y'' + 2y' + y = 0 \)
* **Characteristic Equation:** \( 3m^2 + 2m + 1 = 0 \implies m = \frac{-2 \pm \sqrt{4 - 12}}{6} = -\frac{1}{3} \pm \frac{\sqrt{2}}{3}i \)
* **Linearly Independent Solutions:**
  \[
  \boxed{y_1 = e^{-x/3}\cos\left(\frac{\sqrt{2}}{3}x\right), \quad y_2 = e^{-x/3}\sin\left(\frac{\sqrt{2}}{3}x\right)}
  \]

### Problem 15: \( y'' + y' + y = 0 \)
* **Characteristic Equation:** \( m^2 + m + 1 = 0 \implies m = -\frac{1}{2} \pm \frac{\sqrt{3}}{2}i \)
* **Linearly Independent Solutions:**
  \[
  \boxed{y_1 = e^{-x/2}\cos\left(\frac{\sqrt{3}}{2}x\right), \quad y_2 = e^{-x/2}\sin\left(\frac{\sqrt{3}}{2}x\right)}
  \]

### Problem 16: \( y'' + 2y' + 4y = 0 \)
* **Characteristic Equation:** \( m^2 + 2m + 4 = 0 \implies m = \frac{-2 \pm \sqrt{4 - 16}}{2} = -1 \pm \sqrt{3}i \)
* **Linearly Independent Solutions:**
  \[
  \boxed{y_1 = e^{-x}\cos(\sqrt{3}x), \quad y_2 = e^{-x}\sin(\sqrt{3}x)}
  \]

---

## Problems 17 – 18

**Find the steady-state charge \( q_p(t) \) and steady-state current \( i_p(t) \) for the LRC-series circuit. Find the complex impedance \( Z_c \) and impedance \( Z \).**

### Problem 17: \( 0.5 \frac{d^2q}{dt^2} + 3 \frac{dq}{dt} + 12.5 q = 10\cos(5t) \)
* **Parameters:** \( L = 0.5, \, R = 3, \, C = 1/12.5 = 0.08, \, \gamma = 5 \)
* **Complex Impedance:**
  \[
  Z_c = R + j\left(L\gamma - \frac{1}{C\gamma}\right) = 3 + j\left(0.5(5) - \frac{1}{0.08(5)}\right) = 3 + j(2.5 - 2.5) = \boxed{3 + 0j}
  \]
* **Impedance:** \( Z = |Z_c| = \boxed{3} \)
* **Steady-State Charge \( q_p(t) \):**
  Write \( E(t) = 10\cos(5t) = \operatorname{Re}(10 e^{j5t}) \). Let \( q_p(t) = \operatorname{Re}(Q e^{j5t}) \).
  \[
  \left(-L\gamma^2 + jR\gamma + \frac{1}{C}\right) Q = 10 \implies (-12.5 + 15j + 12.5) Q = 10
  \]
  \[
  15j Q = 10 \implies Q = -\frac{2}{3}j
  \]
  \[
  q_p(t) = \operatorname{Re}\left(-\frac{2}{3}j e^{j5t}\right) = \operatorname{Re}\left(-\frac{2}{3}j (\cos(5t) + j\sin(5t))\right) = \boxed{\frac{2}{3}\sin(5t)}
  \]
* **Steady-State Current \( i_p(t) = \frac{dq_p}{dt} \):**
  \[
  i_p(t) = \frac{d}{dt}\left(\frac{2}{3}\sin(5t)\right) = \boxed{\frac{10}{3}\cos(5t)}
  \]
  *(Note: The textbook answers page contains a minor typo listing \( i_p(t) = \frac{10}{3}\sin(5t) \) instead of \( \cos(5t) \).)*

### Problem 18: \( \frac{d^2q}{dt^2} + 2 \frac{dq}{dt} + 2q = 100\sin(t) \)
* **Parameters:** \( L = 1, \, R = 2, \, C = 0.5, \, \gamma = 1 \)
* **Complex Impedance:**
  \[
  Z_c = R + j\left(L\gamma - \frac{1}{C\gamma}\right) = 2 + j\left(1 - \frac{1}{0.5}\right) = \boxed{2 - j}
  \]
* **Impedance:** \( Z = |Z_c| = \sqrt{2^2 + (-1)^2} = \boxed{\sqrt{5}} \)
* **Steady-State Charge \( q_p(t) \):**
  Write \( E(t) = 100\sin(t) = \operatorname{Im}(100 e^{jt}) \). Let \( q_p(t) = \operatorname{Im}(Q e^{jt}) \).
  \[
  \left(-L\gamma^2 + jR\gamma + \frac{1}{C}\right) Q = 100 \implies (-1 + 2j + 2) Q = 100
  \]
  \[
  (1 + 2j) Q = 100 \implies Q = \frac{100(1-2j)}{5} = 20 - 40j
  \]
  \[
  q_p(t) = \operatorname{Im}((20 - 40j)(\cos t + j\sin t)) = \boxed{20\sin t - 40\cos t}
  \]
* **Steady-State Current \( i_p(t) = \frac{dq_p}{dt} \):**
  \[
  i_p(t) = \frac{d}{dt}(20\sin t - 40\cos t) = \boxed{20\cos t + 40\sin t}
  \]

---

## Focus on Concepts (Problems 19 – 30)

### Problem 19
Solve \( z^4 - 2z^2 + 1 - 2i = 0 \).
Let \( u = z^2 \). The equation becomes \( u^2 - 2u + (1-2i) = 0 \).
Factor as:
\[
(u - 1)^2 - 2i = 0 \implies (u - 1)^2 = 2i
\]
The square roots of \( 2i \) are \( \pm (1+i) \). Thus:
\[
u - 1 = \pm (1+i) \implies u_1 = 2 + i, \quad u_2 = -i
\]
Now solve \( z^2 = u \):
* **Case 1: \( z^2 = -i \)**
  \[
  z = \pm e^{-i\pi/4} = \boxed{\pm \left( \frac{\sqrt{2}}{2} - \frac{\sqrt{2}}{2}i \right)}
  \]
* **Case 2: \( z^2 = 2 + i \)**
  Let \( z = x + iy \implies x^2 - y^2 = 2, \, 2xy = 1 \implies y = 1/(2x) \).
  \[
  x^2 - \frac{1}{4x^2} = 2 \implies 4x^4 - 8x^2 - 1 = 0 \implies x^2 = \frac{8 + \sqrt{80}}{8} = \frac{2+\sqrt{5}}{2}
  \]
  Taking the positive square root:
  \[
  x = \sqrt{\frac{\sqrt{5}+2}{2}}, \quad y = \sqrt{\frac{\sqrt{5}-2}{2}}
  \]
  Thus:
  \[
  z = \boxed{\pm \left( \sqrt{\frac{\sqrt{5}+2}{2}} + i \sqrt{\frac{\sqrt{5}-2}{2}} \right)}
  \]

### Problem 20
Prove that if \( z_1 \) is a root of \( az^2 + bz + c = 0 \) with real coefficients \( a, b, c \), then \( \bar{z}_1 \) is also a root.
*Proof:* Since \( z_1 \) is a root:
\[
a z_1^2 + b z_1 + c = 0
\]
Take the conjugate of both sides:
\[
\overline{a z_1^2 + b z_1 + c} = \bar{0} = 0
\]
Using conjugate properties:
\[
\bar{a} \bar{z}_1^2 + \bar{b} \bar{z}_1 + \bar{c} = 0
\]
Since \( a, b, c \) are real, \( \bar{a} = a, \, \bar{b} = b, \, \bar{c} = c \).
\[
a \bar{z}_1^2 + b \bar{z}_1 + c = 0
\]
which proves \( \bar{z}_1 \) is also a root of the equation.

### Problem 21
Factor \( 4z^2 + 12z + 34 = 0 \) given one root \( z_1 = -\frac{3}{2} + \frac{5}{2}i \).
By Problem 20, the second root must be the conjugate \( z_2 = -\frac{3}{2} - \frac{5}{2}i \).
Using the factorization formula \( a(z - z_1)(z - z_2) = 0 \):
\[
\boxed{4\left(z + \frac{3}{2} - \frac{5}{2}i\right)\left(z + \frac{3}{2} + \frac{5}{2}i\right) = 0}
\]

### Problem 22
Factor \( 5z^2 - 2z + 4 = 0 \) given one root \( z_1 = \frac{1}{5} + \frac{\sqrt{19}}{5}i \).
The conjugate root is \( z_2 = \frac{1}{5} - \frac{\sqrt{19}}{5}i \).
Factorization:
\[
\boxed{5\left(z - \frac{1}{5} - \frac{\sqrt{19}}{5}i\right)\left(z - \frac{1}{5} + \frac{\sqrt{19}}{5}i\right) = 0}
\]

### Problem 23
* **(a)** Find a quadratic polynomial equation for which \( 2-i \) is one root:
  Assuming real coefficients, the conjugate root is \( 2+i \).
  \[
  P(z) = (z - (2-i))(z - (2+i)) = (z - 2 + i)(z - 2 - i) = (z-2)^2 + 1 = \boxed{z^2 - 4z + 5 = 0}
  \]
* **(b) Is it unique?** No, because we can multiply the equation by any nonzero complex constant \( A \ne 0 \), yielding \( A(z^2 - 4z + 5) = 0 \), which has the same roots. Furthermore, if non-real coefficients are allowed, the second root does not have to be \( 2+i \), giving infinitely many monic quadratic polynomials.

### Problem 24
Prove that if the coefficients are not all real, the conjugate \( \bar{z}_1 \) of a root \( z_1 \) is not necessarily a root.
*Proof:* Let \( z_1 \) satisfy \( a z_1^2 + b z_1 + c = 0 \). Conjugating both sides:
\[
\bar{a} \bar{z}_1^2 + \bar{b} \bar{z}_1 + \bar{c} = 0
\]
Since at least one coefficient is not real, we have \( \bar{a} \ne a \), \( \bar{b} \ne b \), or \( \bar{c} \ne c \). Thus, we cannot substitute the original coefficients, meaning \( a \bar{z}_1^2 + b \bar{z}_1 + c \ne 0 \) in general, and the conjugate is not a root.

### Problem 25
Factor \( 3iz^2 + (9 - 16i)z - 17 - i \) given \( z_1 = 5 + 2i \).
* Use the sum of roots formula: \( z_1 + z_2 = -b/a = -\frac{9-16i}{3i} = \frac{16i-9}{3i} = \frac{16}{3} + 3i \).
* Find \( z_2 \):
  \[
  z_2 = \frac{16}{3} + 3i - (5 + 2i) = \frac{1}{3} + i
  \]
* Factorization:
  \[
  \boxed{3i(z - 5 - 2i)\left(z - \frac{1}{3} - i\right) = (z - 5 - 2i)(3iz - i + 3)}
  \]

### Problem 26
Factor \( 4z^2 + (-13 + 18i)z - 5 - 10i \) given \( z_1 = 3 - 4i \).
* Sum of roots: \( z_1 + z_2 = -b/a = -\frac{-13+18i}{4} = \frac{13}{4} - \frac{9}{2}i \).
* Find \( z_2 \):
  \[
  z_2 = \frac{13}{4} - \frac{9}{2}i - (3 - 4i) = \frac{1}{4} - \frac{1}{2}i
  \]
* Factorization:
  \[
  \boxed{4(z - 3 + 4i)\left(z - \frac{1}{4} + \frac{1}{2}i\right) = (z - 3 + 4i)(4z - 1 + 2i)}
  \]

### Problem 27
Substitute \( x = i\theta \) into the Maclaurin series for \( e^x \):
\[
e^{i\theta} = \sum_{n=0}^{\infty} \frac{(i\theta)^n}{n!} = 1 + i\theta - \frac{\theta^2}{2!} - i\frac{\theta^3}{3!} + \frac{\theta^4}{4!} + i\frac{\theta^5}{5!} - \dots
\]
Group the real and imaginary parts:
\[
e^{i\theta} = \left( 1 - \frac{\theta^2}{2!} + \frac{\theta^4}{4!} - \dots \right) + i \left( \theta - \frac{\theta^3}{3!} + \frac{\theta^5}{5!} - \dots \right)
\]
Identify the Taylor series expansions of \( \cos\theta \) and \( \sin\theta \):
\[
e^{i\theta} = \cos\theta + i\sin\theta \quad \text{(Euler's Formula)}
\]

### Problem 28
* **(a) Verify general solution:**
  Let \( y = c_1\cos\theta + c_2\sin\theta \implies y' = -c_1\sin\theta + c_2\cos\theta \implies y'' = -c_1\cos\theta - c_2\sin\theta = -y \).
  Thus \( y'' + y = 0 \). Since \( \cos\theta \) and \( \sin\theta \) are linearly independent, this is the general solution.
* **(b) Verify \( e^{i\theta} \) solution:**
  Let \( y = e^{i\theta} \implies y' = i e^{i\theta} \implies y'' = i^2 e^{i\theta} = -e^{i\theta} \).
  Thus \( y'' + y = 0 \) is satisfied.
* **(c) Determine coefficients:**
  Let \( e^{i\theta} = c_1\cos\theta + c_2\sin\theta \).
  * At \( \theta = 0 \implies e^0 = c_1\cos 0 + c_2\sin 0 \implies c_1 = 1 \).
  * Derivative: \( i e^{i\theta} = -c_1\sin\theta + c_2\cos\theta \).
  * At \( \theta = 0 \implies i = c_2 \implies c_2 = i \).
  Thus, \( e^{i\theta} = \cos\theta + i\sin\theta \).

### Problem 29
Find homogeneous linear second-order DE for which \( y = e^{-5x}\cos(2x) \) is a solution.
* The roots of the characteristic equation are \( m = -5 \pm 2i \).
* The characteristic equation is:
  \[
  (m - (-5 + 2i))(m - (-5 - 2i)) = (m+5)^2 + 4 = m^2 + 10m + 29 = 0
  \]
* The corresponding differential equation is:
  \[
  \boxed{y'' + 10y' + 29y = 0}
  \]

### Problem 30
* **(a) Differentiate circuit DE:**
  \[
  \frac{d}{dt}\left(L\frac{di}{dt} + Ri + \frac{1}{C}q\right) = \frac{d}{dt}(E_0 \sin\gamma t) \implies L\frac{d^2i}{dt^2} + R\frac{di}{dt} + \frac{1}{C}i = E_0\gamma\cos\gamma t
  \]
* **(b) Solve with undetermined coefficients:**
  Let \( i_{p1}(t) = A e^{j\gamma t} \). Substitute:
  \[
  \left(-\gamma^2 L + j\gamma R + \frac{1}{C}\right) A e^{j\gamma t} = E_0\gamma e^{j\gamma t}
  \]
  \[
  A = \frac{E_0\gamma}{1/C - L\gamma^2 + jR\gamma} = \frac{E_0}{R + j(L\gamma - 1/(C\gamma))} = \frac{E_0}{Z_c}
  \]
* **(c) Real Part Connection:**
  Since \( E_0\gamma\cos\gamma t = \operatorname{Re}(E_0\gamma e^{j\gamma t}) \), the solution is the real part:
  \[
  i_p(t) = \operatorname{Re}\left(A e^{j\gamma t}\right) = \operatorname{Re}\left(\frac{E_0}{Z_c} e^{j\gamma t}\right) = \operatorname{Re}\left(\frac{E_0}{|Z_c|e^{j\theta}} e^{j\gamma t}\right) = \frac{E_0}{Z}\cos(\gamma t - \theta)
  \]
  This matches the real-method solution (15).

---

## Computer Lab Assignments (Problems 31 – 38)

### Problem 31: Factor \( z^2 - 3iz - 2 \)
* Roots: \( (z - 2i)(z - i) = 0 \implies \boxed{(z - 2i)(z - i)} \).

### Problem 32: Factor \( z^2 - \sqrt{3}z - i \)
* Discriminant: \( 3 + 4i \). Square roots: \( \pm(2 + i) \).
* Roots: \( z = \frac{\sqrt{3} \pm (2 + i)}{2} \implies z_1 = \frac{\sqrt{3}+2}{2} + \frac{1}{2}i, \, z_2 = \frac{\sqrt{3}-2}{2} - \frac{1}{2}i \).
* Factorization:
  \[
  \boxed{\left(z - \frac{\sqrt{3}+2}{2} - \frac{1}{2}i\right)\left(z - \frac{\sqrt{3}-2}{2} + \frac{1}{2}i\right)}
  \]

### Problem 33: Factor \( iz^2 - (2 + 3i)z + 1 + 5i \)
* Solve \( z^2 - (3-2i)z + (5-i) = 0 \). Discriminant: \( -15 - 8i = (1 - 4i)^2 \).
* Roots: \( z = \frac{3-2i \pm (1-4i)}{2} \implies z_1 = 2 - 3i, \, z_2 = 1 + i \).
* Factorization:
  \[
  \boxed{i(z - 2 + 3i)(z - 1 - i)}
  \]

### Problem 34: Factor \( (3 + i)z^2 + (1 + 7i)z - 10 \)
* Solve using formula. Discriminant: \( (1+7i)^2 + 40(3+i) = 72 + 26i \).
* Square root of \( 72 + 26i \approx (8.544 + 1.522i)^2 \).
* Roots:
  * \( z_1 = \frac{-(1+7i) + (8.544+1.522i)}{2(3+i)} \approx 0.362 - 0.788i \)
  * \( z_2 = \frac{-(1+7i) - (8.544+1.522i)}{2(3+i)} \approx -1.162 - 1.412i \)

### Problems 35 – 38: CAS Equation Solving
* **Problem 35 (\( z^3 - 4z^2 + 10 = 0 \)):** Three roots (1 real, 2 complex conjugates).
* **Problem 36 (\( z^4 + 4iz^2 + 10i = 0 \)):** Four complex roots.
* **Problem 37 (\( z^5 - z - 12 = 0 \)):** Five complex roots.
* **Problem 38 (\( z^6 - z^4 + 3iz^3 - 1 = 0 \)):** Six complex roots.

---

## Projects (Problems 39 – 40)

### Problem 39: Cubic Formula
* **(a) depressed cubic:**
  Substitute \( z = x - a/3 \) into \( z^3 + az^2 + bz + c = 0 \). Expanding and simplifying yields:
  \[
  x^3 + \left(b - \frac{a^2}{3}\right)x + \left(c - \frac{ab}{3} + \frac{2a^3}{27}\right) = 0 \implies x^3 = mx + n
  \]
  where:
  \[
  m = \frac{a^2}{3} - b \quad \text{and} \quad n = \frac{ab}{3} - c - \frac{2a^3}{27}
  \]
* **(b) depressed cubic for \( z^3 + 3z^2 - 3z - 9 = 0 \):**
  \( a = 3, \, b = -3, \, c = -9 \implies z = x - 1 \).
  * \( m = 3 - (-3) = 6 \)
  * \( n = -3 - (-9) - 2 = 4 \)
  * Depressed cubic: \( \boxed{x^3 = 6x + 4} \)
* **(c) solve depressed cubic:**
  Applying the formula:
  \[
  x = [2 + \sqrt{4-8}]^{1/3} + [2 - \sqrt{4-8}]^{1/3} = (2+2i)^{1/3} + (2-2i)^{1/3}
  \]
  Evaluate the roots:
  \( (2+2i)^{1/3} = \sqrt{2}e^{i\pi/12} \) and \( (2-2i)^{1/3} = \sqrt{2}e^{-i\pi/12} \).
  Adding them:
  \[
  x_1 = \sqrt{2}\left(e^{i\pi/12} + e^{-i\pi/12}\right) = 2\sqrt{2}\cos(\pi/12) = 2\sqrt{2}\left(\frac{\sqrt{6}+\sqrt{2}}{4}\right) = \sqrt{3} + 1
  \]
  This yields \( z_1 = x_1 - 1 = \boxed{\sqrt{3}} \).
  The other two roots correspond to adding multiples of \( 2\pi/3 \) to arguments, yielding:
  \[
  z_2 = -\sqrt{3}, \quad z_3 = -3
  \]
  which perfectly match the factors of \( (z^2 - 3)(z + 3) = 0 \).

### Problem 40: Complex Matrices
* **(a) Classification:**
  * \( A \) is **skew-Hermitian** since \( \bar{A}^T = -A \).
  * \( B \) is **unitary** since \( \bar{B}^T = B^{-1} \).
  * \( C \) is **Hermitian** since \( \bar{C}^T = C \).
* **(b) Hermitian Diagonal:**
  The elements on the main diagonal of a Hermitian matrix must be **real**.
  *Proof:* For diagonal elements, \( A_{ii} = \bar{A}_{ii} \), which is only possible if \( A_{ii} \in \mathbb{R} \).
* **(c) Skew-Hermitian Diagonal:**
  The diagonal elements of a skew-Hermitian matrix must be **pure imaginary or zero**.
  *Proof:* \( A_{ii} = -\bar{A}_{ii} \implies \operatorname{Re}(A_{ii}) = 0 \).
* **(d) Hermitian Eigenvalues:**
  Eigenvalues of a Hermitian matrix are **real**.
  *Proof:* Let \( Ax = \lambda x \). Then \( x^H A x = \lambda x^H x \). Taking the conjugate transpose yields \( x^H A^H x = \bar{\lambda} x^H x \). Since \( A^H = A \), we have \( \lambda x^H x = \bar{\lambda} x^H x \), which implies \( \lambda = \bar{\lambda} \) since \( x^H x \ne 0 \).
* **(e) Skew-Hermitian Eigenvalues:**
  Eigenvalues of a skew-Hermitian matrix are **pure imaginary or zero**.
  *Proof:* Let \( Ax = \lambda x \). Then \( A = iH \) where \( H \) is Hermitian. Eigenvalues of Skew-Hermitian are \( i \times \text{eigenvalues of Hermitian} \), which are real, thus they are pure imaginary or zero.
* **(f) Unitary Eigenvalues:**
  Eigenvalues of a unitary matrix are **unimodular** (\( |\lambda| = 1 \)), located on the **unit circle** in the complex plane.
* **(g) Unitary Determinant:**
  \( A^H A = I \implies \det(A^H)\det(A) = 1 \implies \bar{\det(A)}\det(A) = 1 \implies |\det(A)|^2 = 1 \implies |\det(A)| = 1 \).
* **(i) Real Analogues:**
  * Hermitian \( \rightarrow \) **Symmetric**
  * Skew-Hermitian \( \rightarrow \) **Skew-Symmetric**
  * Unitary \( \rightarrow \) **Orthogonal**
