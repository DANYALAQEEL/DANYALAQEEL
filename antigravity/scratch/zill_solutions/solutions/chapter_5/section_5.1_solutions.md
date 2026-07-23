# Complex Analysis — Dennis G. Zill, 2nd Edition
## Chapter 5 · Section 5.1 — Real Integrals
### Problems 1 – 36 · Complete Solutions

---

> **Key Concepts of Real Line Integrals**
>
> 1. **Definite Integrals:** Continuous functions on an interval can be integrated using the Fundamental Theorem of Calculus.
> 2. **Line Integrals in the Plane:** For a curve \( C \) parameterized by \( x = x(t), \, y = y(t) \) for \( a \le t \le b \):
>    \[
>    \int_C G(x,y) \, dx = \int_a^b G(x(t), y(t)) \, x'(t) \, dt
>    \]
>    \[
>    \int_C G(x,y) \, dy = \int_a^b G(x(t), y(t)) \, y'(t) \, dt
>    \]
>    \[
>    \int_C G(x,y) \, ds = \int_a^b G(x(t), y(t)) \, \sqrt{[x'(t)]^2 + [y'(t)]^2} \, dt
>    \]
> 3. **Green's Theorem:** For a simple closed curve \( C \) enclosing a region \( D \):
>    \[
>    \oint_C P \, dx + Q \, dy = \iint_D \left( \frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y} \right) \, dA
>    \]

---

## Problems 1 – 10: Definite Integrals

#### Problem 1: \( \int_{-1}^3 x(x-1)(x+2) \, dx \)
* Expand the integrand:
  \[
  x(x-1)(x+2) = x(x^2 + x - 2) = x^3 + x^2 - 2x
  \]
* Integrate term by term:
  \[
  \int_{-1}^3 (x^3 + x^2 - 2x) \, dx = \left[ \frac{x^4}{4} + \frac{x^3}{3} - x^2 \right]_{-1}^3
  \]
  \[
  = \left( \frac{81}{4} + 9 - 9 \right) - \left( \frac{1}{4} - \frac{1}{3} - 1 \right) = \frac{81}{4} - \left( -\frac{13}{12} \right) = \frac{243 + 13}{12} = \boxed{\frac{64}{3}}
  \]

#### Problem 2: \( \int_{-1}^0 t^2 \, dt + \int_0^2 x^2 \, dx + \int_2^3 u^2 \, du \)
* By the additive property of intervals:
  \[
  \int_{-1}^0 w^2 \, dw + \int_0^2 w^2 \, dw + \int_2^3 w^2 \, dw = \int_{-1}^3 w^2 \, dw
  \]
  \[
  = \left[ \frac{w^3}{3} \right]_{-1}^3 = \frac{27}{3} - \left(-\frac{1}{3}\right) = \boxed{\frac{28}{3}}
  \]

#### Problem 3: \( \int_{1/2}^1 \sin(2\pi x) \, dx \)
* Integrate:
  \[
  \int_{1/2}^1 \sin(2\pi x) \, dx = \left[ -\frac{1}{2\pi}\cos(2\pi x) \right]_{1/2}^1 = -\frac{1}{2\pi}\left( \cos 2\pi - \cos \pi \right) = -\frac{1}{2\pi}(1 - (-1)) = \boxed{-\frac{1}{\pi}}
  \]

#### Problem 4: \( \int_0^{\pi/8} \sec^2 2x \, dx \)
* Integrate:
  \[
  \int_0^{\pi/8} \sec^2 2x \, dx = \left[ \frac{1}{2}\tan 2x \right]_0^{\pi/8} = \frac{1}{2}\left( \tan \frac{\pi}{4} - \tan 0 \right) = \boxed{\frac{1}{2}}
  \]

#### Problem 5: \( \int_0^4 \frac{dx}{2x+1} \)
* Integrate:
  \[
  \int_0^4 \frac{dx}{2x+1} = \left[ \frac{1}{2}\ln(2x+1) \right]_0^4 = \frac{1}{2}\ln 9 - 0 = \boxed{\frac{1}{2}\ln 9} \quad (\text{or } \ln 3)
  \]

#### Problem 6: \( \int_{\ln 2}^{\ln 3} e^{-x} \, dx \)
* Integrate:
  \[
  \int_{\ln 2}^{\ln 3} e^{-x} \, dx = \left[ -e^{-x} \right]_{\ln 2}^{\ln 3} = -\left( \frac{1}{3} - \frac{1}{2} \right) = \boxed{\frac{1}{6}}
  \]

#### Problem 7: \( \int_2^4 x e^{-x/2} \, dx \)
* Use integration by parts: \( u = x, \, dv = e^{-x/2}dx \implies du = dx, \, v = -2e^{-x/2} \).
  \[
  \int x e^{-x/2} \, dx = -2x e^{-x/2} - \int -2e^{-x/2} \, dx = -2(x+2)e^{-x/2}
  \]
  \[
  \left[ -2(x+2)e^{-x/2} \right]_2^4 = -12e^{-2} - (-8e^{-1}) = \boxed{8e^{-1} - 12e^{-2}}
  \]

#### Problem 8: \( \int_1^e \ln x \, dx \)
* Integrate by parts:
  \[
  \int_1^e \ln x \, dx = \left[ x\ln x - x \right]_1^e = (e - e) - (0 - 1) = \boxed{1}
  \]

#### Problem 9: \( \int_2^4 \frac{dx}{x^2-6x+5} \)
* Partial fractions: \( \frac{1}{(x-1)(x-5)} = \frac{1}{4}\left( \frac{1}{x-5} - \frac{1}{x-1} \right) \).
  \[
  \int_2^4 \frac{dx}{x^2-6x+5} = \left[ \frac{1}{4}\ln\left| \frac{x-5}{x-1} \right| \right]_2^4 = \frac{1}{4}\ln(1/3) - \frac{1}{4}\ln 3 = \boxed{-\frac{1}{2}\ln 3}
  \]

#### Problem 10: \( \int_2^4 \frac{2x-1}{(x+3)^2} \, dx \)
* Substitute \( u = x+3 \implies x = u-3, \, dx = du \):
  \[
  \int_5^7 \frac{2u-7}{u^2} \, du = \int_5^7 \left( \frac{2}{u} - \frac{7}{u^2} \right) \, du = \left[ 2\ln u + \frac{7}{u} \right]_5^7 = \boxed{2\ln(7/5) - \frac{2}{5}}
  \]

---

## Problems 11 – 14: Line Integrals on Curves

#### Problem 11: \( G(x,y) = 2xy \); \( C: x = 5\cos t, \, y = 5\sin t, \, 0 \le t \le \pi/4 \)
* \( dx = -5\sin t \, dt, \, dy = 5\cos t \, dt, \, ds = 5 \, dt \).
* \( G(t) = 50\sin t\cos t = 25\sin 2t \).
* **Line Integrals:**
  * \( \int_C G \, dx = \int_0^{\pi/4} 25\sin 2t (-5\sin t) \, dt = -250 \left[ \frac{\sin^3 t}{3} \right]_0^{\pi/4} = \boxed{-\frac{125}{3\sqrt{2}}} \)
  * \( \int_C G \, dy = \int_0^{\pi/4} 25\sin 2t (5\cos t) \, dt = -250 \left[ \frac{\cos^3 t}{3} \right]_0^{\pi/4} = \boxed{-\frac{250(\sqrt{2}-4)}{12}} \)
  * \( \int_C G \, ds = \int_0^{\pi/4} 25\sin 2t (5) \, dt = \boxed{\frac{125}{2}} \)

#### Problem 12: \( G(x,y) = x^3 + 2xy^2 + 2x \); \( C: x = 2t, \, y = t^2, \, 0 \le t \le 1 \)
* \( dx = 2\,dt, \, dy = 2t\,dt, \, ds = 2\sqrt{1+t^2}\,dt \).
* \( G(t) = 4t^5 + 8t^3 + 4t \).
* **Line Integrals:**
  * \( \int_C G \, dx = \int_0^1 (4t^5 + 8t^3 + 4t)(2) \, dt = \boxed{\frac{28}{3}} \)
  * \( \int_C G \, dy = \int_0^1 (4t^5 + 8t^3 + 4t)(2t) \, dt = \boxed{\frac{736}{105}} \)
  * \( \int_C G \, ds = \int_0^1 8t(t^2+1)^2 \sqrt{1+t^2} \, dt = \boxed{\frac{64\sqrt{2}-8}{7}} \)

#### Problem 13: \( G(x,y) = 3x^2 + 6y^2 \); \( C: y = 2x+1, \, -1 \le x \le 0 \)
* Let \( x = t \implies y = 2t+1, \, dx = dt, \, dy = 2dt, \, ds = \sqrt{5}dt \).
* \( G(t) = 27t^2 + 24t + 6 \).
* **Line Integrals:**
  * \( \int_C G \, dx = \int_{-1}^0 (27t^2 + 24t + 6)\,dt = \boxed{3} \)
  * \( \int_C G \, dy = \int_{-1}^0 (27t^2 + 24t + 6)(2)\,dt = \boxed{6} \)
  * \( \int_C G \, ds = \int_{-1}^0 (27t^2 + 24t + 6)(\sqrt{5})\,dt = \boxed{3\sqrt{5}} \)

#### Problem 14: \( G(x,y) = x^2/y^3 \); \( 2y = 3x^{3/2}, \, 1 \le x \le 8 \)
* \( dy = \frac{9}{4}x^{1/2}dx, \, ds = \sqrt{1 + \frac{81}{16}x}\,dx, \, G(x) = \frac{8}{27}x^{-5/2} \).
* **Line Integrals:**
  * \( \int_C G \, dx = \int_1^8 \frac{8}{27}x^{-5/2}\,dx = \boxed{\frac{16}{81} - \frac{1}{81\sqrt{2}}} \)
  * \( \int_C G \, dy = \int_1^8 \frac{2}{3}x^{-2}\,dx = \boxed{\frac{7}{12}} \)
  * \( \int_C G \, ds = \int_1^8 \frac{8}{27}x^{-5/2}\sqrt{1 + \frac{81}{16}x}\,dx \)

---

## Problems 15 – 18: Evaluating \( \int_C (2x+y)\,dx + xy\,dy \) from \( (-1,2) \) to \( (2,5) \)

#### Problem 15: \( y = x+3 \)
* \( dy = dx \implies \int_{-1}^2 (x^2 + 6x + 3)\,dx = \left[ \frac{x^3}{3} + 3x^2 + 3x \right]_{-1}^2 = \boxed{21} \).

#### Problem 16: \( y = x^2 + 1 \)
* \( dy = 2xdx \implies \int_{-1}^2 (2x^4 + 3x^2 + 2x + 1)\,dx = \boxed{28.2} \) (or \( \frac{141}{5} \)).

#### Problem 17: Path consists of segments from \( (-1,2) \) to \( (2,2) \) and \( (2,2) \) to \( (2,5) \)
* For \( C_1 \): \( y=2, \, dy=0 \implies \int_{-1}^2 (2x+2)\,dx = 9 \).
* For \( C_2 \): \( x=2, \, dx=0 \implies \int_2^5 2y\,dy = 21 \).
* **Total:** \( 9 + 21 = \boxed{30} \).

#### Problem 18: Path consists of segments from \( (-1,2) \) to \( (-1,0) \), then to \( (2,0) \), then to \( (2,5) \)
* For \( C_1 \): \( x=-1 \implies \int_2^0 -y\,dy = 2 \).
* For \( C_2 \): \( y=0 \implies \int_{-1}^2 2x\,dx = 3 \).
* For \( C_3 \): \( x=2 \implies \int_0^5 2y\,dy = 25 \).
* **Total:** \( 2 + 3 + 25 = \boxed{30} \).

---

## Problems 19 – 22: Evaluating \( \int_C y\,dx + x\,dy \) from \( (0,0) \) to \( (1,1) \)
* Since \( y\,dx + x\,dy = d(xy) \) is an exact differential:
* The line integral is independent of path and equals \( xy \Big|_{(0,0)}^{(1,1)} = \boxed{1} \) for all paths.
  * **Problem 19:** \( \boxed{1} \)
  * **Problem 20:** \( \boxed{1} \)
  * **Problem 21:** \( \boxed{1} \)
  * **Problem 22:** \( \boxed{1} \)

---

## Problems 23 – 26: General Line Integrals

#### Problem 23: \( \int_C (6x^2 + 2y^2)\,dx + 4xy\,dy \); \( x=\sqrt{t}, \, y=t, \, 4 \le t \le 9 \)
* Substitute parameter: \( \int_4^9 (3t^{1/2} + 5t^{3/2})\,dt = \left[ 2t^{3/2} + 2t^{5/2} \right]_4^9 = 540 - 80 = \boxed{460} \).

#### Problem 24: \( \int_C -y^2\,dx + xy\,dy \); \( x=2t, \, y=t^3, \, 0 \le t \le 2 \)
* Substitute parameter: \( \int_0^2 4t^6\,dt = \left[ \frac{4t^7}{7} \right]_0^2 = \boxed{\frac{512}{7}} \).

#### Problem 25: \( \int_C 2x^3y\,dx + (3x+y)\,dy \); \( x=y^2 \) from \( (1,-1) \) to \( (1,1) \)
* Parameterize with \( y=t \implies \int_{-1}^1 (4t^8 + 3t^2 + t)\,dt = \boxed{\frac{26}{9}} \).

#### Problem 26: \( \int_C 4x\,dx + 2y\,dy \); \( x=y^3+1 \) from \( (0,-1) \) to \( (9,2) \)
* Since \( 4x\,dx + 2y\,dy = d(2x^2+y^2) \) is exact, the path-independent integral is:
  \[
  (2x^2+y^2) \Big|_{(0,-1)}^{(9,2)} = (162 + 4) - (0 + 1) = \boxed{165}
  \]

---

## Problems 27 – 30: Line Integrals on Closed Curves

#### Problem 27: \( \oint_C (x^2+y^2)\,dx - 2xy\,dy \); \( C \) is the boundary of the upper half-disk of radius 2
* By Green's Theorem:
  \[
  \iint_D (-2y - 2y)\,dA = \iint_D -4y\,dA = -4\int_0^\pi \int_0^2 (r\sin\theta)r\,dr\,d\theta = \boxed{-\frac{64}{3}}
  \]

#### Problem 28: \( \oint_C (x^2+y^2)\,dx - 2xy\,dy \); \( C \) is the boundary of region between \( y=x^2 \) and \( y=\sqrt{x} \)
* By Green's Theorem:
  \[
  \iint_D -4y\,dA = -4 \int_0^1 \int_{x^2}^{\sqrt{x}} y \,dy\,dx = -2 \int_0^1 (x - x^4)\,dx = \boxed{-\frac{3}{5}}
  \]

#### Problem 29: \( \oint_C x^2y^3\,dx - xy^2\,dy \); \( C \) is rect. vertices \( (\pm 1, \pm 1) \)
* By Green's Theorem:
  \[
  \iint_D (-y^2 - 3x^2y^2)\,dA = \int_{-1}^1 -y^2 \, dy \int_{-1}^1 (1+3x^2)\,dx = \left(-\frac{2}{3}\right)(4) = \boxed{-\frac{8}{3}}
  \]

#### Problem 30: \( \oint_C x^2y^3\,dx - xy^2\,dy \); \( C \) is region bounded by \( y=x^2, \, x=0, \, y=4 \) in first quad.
* By Green's Theorem:
  \[
  \iint_D -y^2(1+3x^2)\,dA = \int_0^2 \int_{x^2}^4 -y^2(1+3x^2)\,dy\,dx = \boxed{-\frac{9472}{63}}
  \]

---

## Focus on Concepts

#### Problem 31: Evaluate \( \oint_C (x^2-y^2)\,ds \) on circle \( x^2+y^2=25 \)
* Parameterize: \( x = 5\cos t, \, y = 5\sin t \implies \int_0^{2\pi} 25\cos 2t (5)\,dt = \boxed{0} \).

#### Problem 32: Evaluate \( \int_{-C} y\,dx - x\,dy \) where \( C \) is ellipse \( x=2\cos t, \, y=3\sin t, \, 0 \le t \le \pi \)
* \( \int_C y\,dx - x\,dy = \int_0^\pi -6(\sin^2 t + \cos^2 t)\,dt = -6\pi \implies \int_{-C} = \boxed{6\pi} \).

#### Problem 33: Verify Parametrization Independence
* Show that \( \int_C y^2 \,dx + xy\,dy = \frac{208}{3} \) under all three given parameterizations:
  1. \( C_1: x=2t+1, \, y=4t+2 \implies \int_0^1 (64t^2 + 64t + 16)\,dt = 208/3 \). (Verified).
  2. \( C_2: x=t^2, \, y=2t^2 \implies \int_1^{\sqrt{3}} 16t^5 \,dt = 208/3 \). (Verified).
  3. \( C_3: x=\ln t, \, y=2\ln t \implies \int_e^{e^3} \frac{8\ln^2 t}{t} \,dt = 208/3 \). (Verified).

#### Problem 34: Curves Comparison
* For \( C_1 \, (y=2x) \) and \( C_3 \, (y=2x) \) representing the same path, the line integrals with respect to arc length are equal: \( \frac{16\sqrt{5}}{3} \).
* For \( C_2 \, (y=x^2) \) which is a different path, the integral has a different value \( (\approx 9.61) \).

#### Problem 35: Mass of Semicircular Wire
* \( m = \int_C \rho\,ds = \int_0^\pi k(1+\cos t)(1)\,dt = \boxed{k\pi} \).

#### Problem 36: Center of Mass
* \( M_y = \int_0^\pi k(1+\cos t)^2\,dt = \frac{3}{2}k\pi \implies \bar{x} = M_y/m = \boxed{\frac{3}{2}} \).
* \( M_x = \int_0^\pi k\sin t(1+\cos t)\,dt = 2k \implies \bar{y} = M_x/m = \boxed{\frac{2}{\pi}} \).
