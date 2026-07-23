# Complex Analysis — Dennis G. Zill, 2nd Edition
## Chapter 5 · Section 5.2 — Complex Integrals
### Problems 1 – 33 · Complete Solutions

---

> **Key Concepts of Complex Contour Integration**
>
> 1. **Contour Integral Definition:** For a function \( f(z) \) continuous on a smooth curve \( C \) parameterized by \( z(t) = x(t) + i y(t) \) for \( a \le t \le b \):
>    \[
>    \int_C f(z) \, dz = \int_a^b f(z(t)) \, z'(t) \, dt
>    \]
> 2. **Analyticity & Path Independence:** If \( f(z) \) is entire or analytic on a simply connected domain containing \( C \), the integral depends only on the endpoints \( z_0 \) and \( z_n \):
>    \[
>    \int_C f(z) \, dz = F(z_n) - F(z_0) \quad \text{where } F'(z) = f(z)
>    \]
> 3. **The ML-Inequality (Bounding Theorem):** If \( |f(z)| \le M \) for all \( z \in C \), and \( L \) is the length of \( C \):
>    \[
>    \left| \int_C f(z) \, dz \right| \le M L
>    \]

---

## Problems 1 – 16: Contour Integrals

#### Problem 1: \( \int_C (z+3)\,dz \); \( C: x = 2t, \, y = 4t-1, \, 1 \le t \le 3 \)
* Parameterize: \( z(t) = 2t + i(4t-1) \implies dz = (2+4i)\,dt \).
* Integrand: \( z+3 = (2+4i)t + 3-i \).
* Evaluate:
  \[
  \int_1^3 [(2+4i)t + 3-i](2+4i)\,dt = (2+4i)^2 \int_1^3 t\,dt + (3-i)(2+4i) \int_1^3 dt
  \]
  \[
  = (-12+16i)(4) + (10+10i)(2) = -48 + 64i + 20 + 20i = \boxed{-28 + 84i}
  \]

#### Problem 2: \( \int_C (2\bar{z}-z)\,dz \); \( C: x = -t, \, y = t^2+2, \, 0 \le t \le 2 \)
* Parameterize: \( z(t) = -t + i(t^2+2) \implies dz = (-1 + 2ti)\,dt \).
* Integrand: \( 2\bar{z}-z = 2(-t - i(t^2+2)) - (-t + i(t^2+2)) = -t - 3i(t^2+2) \).
* Multiply by \( dz \):
  \[
  [-t - 3i(t^2+2)](-1 + 2ti) = (6t^3 + 13t) + i(5t^2 + 6)
  \]
* Evaluate from \( 0 \) to \( 2 \):
  \[
  \int_0^2 (6t^3+13t)\,dt = 50, \quad \int_0^2 (5t^2+6)\,dt = \frac{76}{3} \implies \boxed{50 + \frac{76}{3}i}
  \]

#### Problem 3: \( \int_C z^2\,dz \); \( C: z(t) = 3t + 2it, \, -2 \le t \le 2 \)
* Since \( z^2 \) is entire, the integral depends only on the endpoints \( z_0 = z(-2) = -6-4i \) and \( z_1 = z(2) = 6+4i \):
  \[
  \int_C z^2\,dz = \left[ \frac{z^3}{3} \right]_{-6-4i}^{6+4i} = \frac{2(6+4i)^3}{3} = \boxed{-48 + \frac{736}{3}i}
  \]

#### Problem 4: \( \int_C (3z^2-2z)\,dz \); \( C: z(t) = t + it^2, \, 0 \le t \le 1 \)
* Endpoints are \( z_0 = z(0) = 0 \) and \( z_1 = z(1) = 1+i \). By path independence:
  \[
  \int_C (3z^2-2z)\,dz = \left[ z^3 - z^2 \right]_0^{1+i} = (1+i)^3 - (1+i)^2 = \boxed{-2}
  \]

#### Problem 5: \( \int_C \frac{z+1}{z}\,dz \); \( C: \) right half of circle \( |z|=1 \) from \( -i \) to \( i \)
* Parameterize: \( z(t) = e^{it}, \, -\pi/2 \le t \le \pi/2 \implies dz = i e^{it}\,dt \).
  \[
  \int_{-\pi/2}^{\pi/2} \left( 1 + e^{-it} \right) i e^{it}\,dt = i \int_{-\pi/2}^{\pi/2} (e^{it} + 1)\,dt = \left[ e^{it} + it \right]_{-\pi/2}^{\pi/2} = \boxed{(2+\pi)i}
  \]

#### Problem 6: \( \int_C |z|^2\,dz \); \( C: x = t^2, \, y = 1/t, \, 1 \le t \le 2 \)
* \( z(t) = t^2 + i/t \implies dz = (2t - i/t^2)\,dt \) and \( |z|^2 = t^4 + 1/t^2 \).
  \[
  \int_1^2 \left( t^4 + \frac{1}{t^2} \right) \left( 2t - \frac{i}{t^2} \right) \,dt = \int_1^2 \left( 2t^5 + \frac{2}{t} \right)\,dt - i\int_1^2 \left( t^2 + \frac{1}{t^4} \right)\,dt
  \]
  \[
  = \boxed{21 + 2\ln 2 - i\frac{21}{8}}
  \]

#### Problem 7: \( \int_C \operatorname{Re}(z)\,dz \); \( C: |z|=1 \) oriented counterclockwise
* \( z(t) = e^{it}, \, 0 \le t \le 2\pi \implies \operatorname{Re}(z) = \cos t, \, dz = ie^{it}\,dt \).
  \[
  \int_0^{2\pi} \cos t (i e^{it})\,dt = i\int_0^{2\pi} \cos^2 t\,dt - \int_0^{2\pi} \sin t \cos t\,dt = \boxed{\pi i}
  \]

#### Problem 8: \( \int_C \left[ \frac{1}{(z+i)^3} - \frac{5}{z+i} + 8 \right]\,dz \); \( C: |z+i|=1 \)
* Let \( w = z+i \implies dw = dz \). The integral becomes:
  \[
  \oint_{|w|=1} \left( \frac{1}{w^3} - \frac{5}{w} + 8 \right)\,dw = -5(2\pi i) = \boxed{-10\pi i}
  \]

#### Problem 9: \( \int_C (x^2+iy^3)\,dz \); \( C: \) straight line from \( 1 \) to \( i \)
* Line equation: \( y = 1-x \implies z = x + i(1-x), \, dz = (1-i)\,dx \) for \( x \) from \( 1 \) to \( 0 \).
  \[
  \int_1^0 \left( x^2 + i(1-x)^3 \right) (1-i)\,dx = \left[ (1-i)\frac{x^3}{3} - (1+i)\frac{(1-x)^4}{4} \right]_1^0 = \boxed{-\frac{7}{12} + \frac{1}{12}i}
  \]

#### Problem 10: \( \int_C (x^2-iy^3)\,dz \); \( C: \) lower half of circle \( |z|=1 \) from \( -1 \) to \( 1 \)
* Parameterize: \( z(t) = e^{it}, \, t \in [-\pi, 0] \implies dz = i e^{it}\,dt \).
  \[
  \int_{-\pi}^0 (\cos^2 t - i\sin^3 t)(i\cos t - \sin t)\,dt = \boxed{\frac{2}{3} + i\frac{3\pi}{8}}
  \]

#### Problem 11: \( \int_C e^z\,dz \); \( C: \) path from \( 0 \) to \( 2 \), then to \( 1+\pi i \)
* By path independence of the entire function \( e^z \):
  \[
  \int_C e^z\,dz = \left[ e^z \right]_0^{1+\pi i} = e^{1+\pi i} - 1 = \boxed{-e-1}
  \]

#### Problem 12: \( \int_C \sin z\,dz \); \( C: \) path from \( 0 \) to \( 1 \), then to \( 1+i \)
* By path independence:
  \[
  \int_C \sin z\,dz = \left[ -\cos z \right]_0^{1+i} = \boxed{1 - \cos(1+i)}
  \]

#### Problem 13: \( \int_C \operatorname{Im}(z-i)\,dz \); \( C: \) circular arc from \( 1 \) to \( i \), then line segment to \( -1 \)
* **On arc \( C_1 \):** \( z = e^{it}, \, 0 \le t \le \pi/2 \implies \int_{C_1} = 1 - \pi/4 - i/2 \).
* **On line \( C_2 \):** \( z = -t + i(1-t), \, 0 \le t \le 1 \implies \int_{C_2} = 1/2 + i/2 \).
* **Total:** \( (1 - \pi/4 - i/2) + (1/2 + i/2) = \boxed{\frac{3}{2} - \frac{\pi}{4}} \).

#### Problem 14: \( \int_C dz \); \( C: \) left half of ellipse \( x^2/36 + y^2/4 = 1 \) from \( 2i \) to \( -2i \)
* By path independence:
  \[
  \int_C dz = z \Big|_{2i}^{-2i} = \boxed{-4i}
  \]

#### Problem 15: \( \int_C z e^z\,dz \); \( C: \) square vertices \( 0, 1, 1+i, i \)
* Since \( z e^z \) is entire and \( C \) is closed:
  \[
  \oint_C z e^z\,dz = \boxed{0}
  \]

#### Problem 16: \( \int_C f(z)\,dz \); \( f(z) = 2 \, (x<0), \, 6x \, (x>0) \); \( C: y = x^2 \) from \( -1+i \) to \( 1+i \)
* **For \( x \in [-1,0] \):** \( \int_{-1}^0 2(1+2ix)\,dx = 2 - 2i \).
* **For \( x \in [0,1] \):** \( \int_0^1 6x(1+2ix)\,dx = 3 + 4i \).
* **Total:** \( (2-2i) + (3+4i) = \boxed{5 + 2i} \).

---

## Problems 17 – 20: Piecewise Linear Contour (Figure 5.21)

* **Path Interpretation:** The contour \( C \) goes from \( 0 \to 1 \to 1+i \).
  * *Errata Note:* Problem 17 is printed as \( \int_C x\,dz \) but the back-of-the-book answer is \( \frac{1}{2}i \), which corresponds to \( \int_C y\,dz \). We solve both here.

#### Problem 17: \( \int_C y\,dz \) (intended) and \( \int_C x\,dz \) (printed)
* **Intended \( \int_C y\,dz \):**
  * Along \( 0 \to 1 \): \( y = 0 \implies 0 \).
  * Along \( 1 \to 1+i \): \( x = 1, \, z=1+iy \implies \int_0^1 y(i\,dy) = \boxed{\frac{1}{2}i} \).
* **Printed \( \int_C x\,dz \):**
  * Along \( 0 \to 1 \): \( \int_0^1 x\,dx = 1/2 \).
  * Along \( 1 \to 1+i \): \( \int_0^1 1(i\,dy) = i \implies \boxed{\frac{1}{2} + i} \).

#### Problem 18: \( \int_C (2z-1)\,dz \)
* Since the integrand is entire, we evaluate using endpoints \( 0 \) and \( 1+i \):
  \[
  \int_0^{1+i} (2z-1)\,dz = \left[ z^2 - z \right]_0^{1+i} = (1+i)^2 - (1+i) = \boxed{-1 + i}
  \]

#### Problem 19: \( \int_C z^2\,dz \)
* Entire integrand:
  \[
  \int_0^{1+i} z^2\,dz = \left[ \frac{z^3}{3} \right]_0^{1+i} = \frac{2i(1+i)}{3} = \boxed{-\frac{2}{3} + \frac{2}{3}i}
  \]

#### Problem 20: \( \int_C \bar{z}^2\,dz \)
* **Along \( 0 \to 1 \):** \( \int_0^1 x^2\,dx = 1/3 \).
* **Along \( 1 \to 1+i \):** \( \int_0^1 (1-iy)^2 (i\,dy) = 1 + \frac{2}{3}i \).
* **Total:** \( 1/3 + 1 + 2/3i = \boxed{\frac{4}{3} + \frac{2}{3}i} \).

---

## Problems 21 – 24: Path Independence

#### Problems 21 – 24: \( \int_i^1 (z^2-z+2)\,dz \)
* Since \( z^2-z+2 \) is entire, the value is identical for all paths between \( i \) and \( 1 \):
  \[
  \int_i^1 (z^2-z+2)\,dz = \left[ \frac{z^3}{3} - \frac{z^2}{2} + 2z \right]_i^1 = \left( \frac{1}{3} - \frac{1}{2} + 2 \right) - \left( -\frac{i}{3} + \frac{1}{2} + 2i \right) = \boxed{\frac{4}{3} - \frac{5}{3}i}
  \]

---

## Problems 25 – 28: Upper Bounds (ML-Inequality)

#### Problem 25: \( \int_C \frac{e^z}{z^2+1}\,dz \); \( C: |z|=5 \)
* \( L = 10\pi \).
* On the contour: \( |z^2+1| \ge |z|^2 - 1 = 24 \), and \( |e^z| = e^x \le e^5 \).
* ML-Bound:
  \[
  \left| \oint_C \frac{e^z}{z^2+1}\,dz \right| \le \frac{e^5}{24} \cdot 10\pi = \boxed{\frac{5\pi e^5}{12}}
  \]
  *(Note: The back-of-the-book answer lists \( \frac{5}{12}\pi e^2 \), which is a typo for \( \frac{5}{12}\pi e^5 \)).*

#### Problem 26: \( \int_C \frac{1}{z^2-2i}\,dz \); \( C: \) right half of circle \( |z|=6 \)
* \( L = 6\pi \).
* On the contour: \( |z^2-2i| \ge |z|^2 - 2 = 34 \implies M = 1/34 \).
* ML-Bound:
  \[
  \left| \int_C \frac{1}{z^2-2i}\,dz \right| \le \frac{6\pi}{34} = \boxed{\frac{3\pi}{17}}
  \]

#### Problem 27: \( \int_C (z^2+4)\,dz \); \( C: \) line segment from \( 0 \) to \( 1+i \)
* \( L = \sqrt{2} \).
* On the segment: \( |z| \le \sqrt{2} \implies |z^2+4| \le |z|^2 + 4 \le 6 \).
* ML-Bound:
  \[
  \left| \int_C (z^2+4)\,dz \right| \le 6 \cdot \sqrt{2} = \boxed{6\sqrt{2}}
  \]

#### Problem 28: \( \int_C \frac{1}{z^3}\,dz \); \( C: \) quarter circle \( |z|=4 \)
* \( L = 2\pi \).
* On the contour: \( |z|=4 \implies M = 1/64 \).
* ML-Bound:
  \[
  \left| \int_C \frac{1}{z^3}\,dz \right| \le \frac{2\pi}{64} = \boxed{\frac{\pi}{32}}
  \]

---

## Focus on Concepts

#### Problem 29:
* **(a)** Using Riemann Sum:
  \[
  \sum_{k=1}^n \Delta z_k = (z_1 - z_0) + (z_2 - z_1) + \dots + (z_n - z_{n-1}) = z_n - z_0
  \]
  Taking the limit gives \( \int_C dz = z_n - z_0 \).
* **(b)** In Problem 14: \( z_n - z_0 = -2i - 2i = -4i \). (Verified).
* **(c)** For any closed curve, \( z_n = z_0 \implies \oint_C dz = 0 \).

#### Problem 30:
* Choose \( z_k^* = \frac{z_k + z_{k-1}}{2} \):
  \[
  \sum_{k=1}^n z_k^* \Delta z_k = \sum_{k=1}^n \frac{z_k + z_{k-1}}{2}(z_k - z_{k-1}) = \frac{1}{2}\sum_{k=1}^n (z_k^2 - z_{k-1}^2) = \frac{1}{2}(z_n^2 - z_0^2)
  \]
  Taking the limit gives \( \int_C z \, dz = \frac{1}{2}(z_n^2 - z_0^2) \).

#### Problem 31:
* **(a)** \( z_0 = 1+i, \, z_1 = 2+3i \):
  \[
  \int_C (6z+4)\,dz = 3(z_1^2 - z_0^2) + 4(z_1 - z_0) = 3(-5+10i) + 4(1+2i) = \boxed{-11 + 38i}
  \]
* **(b)** Closed curve \( \implies \boxed{0} \).

#### Problem 32:
* \( L = 1 \).
* For \( z = 3+iy, \, 0 \le y \le 1 \):
  \[
  |z-i| \ge 3, \quad |z+i| \ge \sqrt{10} \implies |z^2+1| \ge 3\sqrt{10}
  \]
* Bound:
  \[
  \left| \int_C \frac{1}{z^2+1}\,dz \right| \le \boxed{\frac{1}{3\sqrt{10}}}
  \]

#### Problem 33:
* \( L = 4 \).
* For \( z = t+3i, \, 0 \le t \le 4 \):
  \[
  |\operatorname{Ln}(z+3)| \le \sqrt{ \left(\ln\sqrt{58}\right)^2 + \left(\frac{\pi}{4}\right)^2 } \approx 2.18
  \]
* Bound:
  \[
  \left| \int_C \operatorname{Ln}(z+3)\,dz \right| \le 4 \sqrt{\left(\ln\sqrt{58}\right)^2 + \frac{\pi^2}{16}} \approx \boxed{8.72}
  \]
