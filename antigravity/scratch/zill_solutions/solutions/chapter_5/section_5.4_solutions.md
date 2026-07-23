# Complex Analysis — Dennis G. Zill, 2nd Edition
## Chapter 5 · Section 5.4 — Independence of Path
### Problems 1 – 28 · Complete Solutions

---

> **Key Concepts of Path Independence (Theorem 5.7)**
>
> 1. **Analyticity & Antiderivatives:** If \( f(z) \) is continuous in a domain \( D \), then the contour integral \( \int_C f(z)\,dz \) is independent of path in \( D \) if and only if \( f(z) \) possesses an antiderivative \( F(z) \) in \( D \) (i.e., \( F'(z) = f(z) \)).
> 2. **Fundamental Theorem for Contour Integrals:** If \( C \) is any path in \( D \) starting at \( z_0 \) and ending at \( z_1 \):
>    \[
>    \int_{z_0}^{z_1} f(z) \, dz = F(z_1) - F(z_0)
>    \]
> 3. **Integration by Parts:** If \( U(z) \) and \( V(z) \) have continuous derivatives in \( D \):
>    \[
>    \int_{z_0}^{z_1} U(z) V'(z) \, dz = U(z) V(z) \Big|_{z_0}^{z_1} - \int_{z_0}^{z_1} U'(z) V(z) \, dz
>    \]

---

## Problems 1 – 2: Path Evaluation and Theorem 5.7 Comparison

#### Problem 1: \( \int_C (4z-1)\,dz \) from \( -i \) to \( i \) along the unit circle (right semicircle)
* **(a) Alternative Path:** Line segment along the imaginary axis: \( z = iy, \, dy = dt \) for \( y \in [-1, 1] \implies dz = i\,dy \).
  \[
  \int_{-1}^1 (4iy-1) i\,dy = \int_{-1}^1 (-4y - i)\,dy = \left[ -2y^2 - iy \right]_{-1}^1 = (-2-i) - (-2+i) = \boxed{-2i}
  */
  \]
* **(b) Theorem 5.7:**
  \[
  \int_{-i}^i (4z-1)\,dz = \left[ 2z^2 - z \right]_{-i}^i = (2i^2 - i) - (2(-i)^2 + i) = \boxed{-2i}
  \]

#### Problem 2: \( \int_C e^z\,dz \) from \( 3+i \) to \( 3+3i \)
* **(a) Alternative Path:** Straight vertical segment: \( z(t) = 3 + it, \, 1 \le t \le 3 \implies dz = i\,dt \).
  \[
  \int_1^3 e^{3+it} i\,dt = \left[ e^{3+it} \right]_1^3 = \boxed{e^3(e^{3i} - e^i)}
  \]
* **(b) Theorem 5.7:**
  \[
  \int_{3+i}^{3+3i} e^z\,dz = \left[ e^z \right]_{3+i}^{3+3i} = \boxed{e^3(e^{3i} - e^i)}
  \]

---

## Problems 3 – 4: Path-Independent Line Integrals

#### Problem 3: \( \int_C 2z\,dz \); \( C: z(t) = 2t^3 + i(t^4-4t^3+2), \, -1 \le t \le 1 \)
* Endpoints: \( z_0 = z(-1) = -2 + 7i \) and \( z_1 = z(1) = 2 - i \).
* Antiderivative: \( F(z) = z^2 \).
  \[
  F(z_1) - F(z_0) = (2-i)^2 - (-2+7i)^2 = (3-4i) - (-45-28i) = \boxed{48 + 24i}
  \]

#### Problem 4: \( \int_C 2z\,dz \); \( C: z(t) = 2\cos^3 \pi t - i\sin^2(\pi t/4), \, 0 \le t \le 2 \)
* Endpoints: \( z_0 = z(0) = 2 \) and \( z_1 = z(2) = 2 - i \).
  \[
  F(z_1) - F(z_0) = (2-i)^2 - 2^2 = (3-4i) - 4 = \boxed{-1 - 4i}
  \]

---

## Problems 5 – 20: Fundamental Theorem of Calculus Applications

#### Problem 5: \( \int_0^{3+i} z^2\,dz \)
\[
\left[ \frac{z^3}{3} \right]_0^{3+i} = \frac{(3+i)^3}{3} = \frac{18 + 26i}{3} = \boxed{6 + \frac{26}{3}i}
\]

#### Problem 6: \( \int_{-2i}^1 (3z^2-4z+5i)\,dz \)
\[
\left[ z^3 - 2z^2 + 5iz \right]_{-2i}^1 = (-1+5i) - (18+8i) = \boxed{-19 - 3i}
\]

#### Problem 7: \( \int_{1-i}^{1+i} z^3\,dz \)
\[
\left[ \frac{z^4}{4} \right]_{-2i}^1 = \frac{(1+i)^4 - (1-i)^4}{4} = \frac{-4 - (-4)}{4} = \boxed{0}
\]

#### Problem 8: \( \int_{-3i}^{2i} (z^3-z)\,dz \)
\[
\left[ \frac{z^4}{4} - \frac{z^2}{2} \right]_{-3i}^{2i} = \left( 4 + 2 \right) - \left( \frac{81}{4} + \frac{9}{2} \right) = \boxed{-\frac{75}{4}}
\]

#### Problem 9: \( \int_{-i/2}^{1-i} (2z+1)^2\,dz \)
\[
\left[ \frac{(2z+1)^3}{6} \right]_{-i/2}^{1-i} = \frac{(3-2i)^3 - (1-i)^3}{6} = \boxed{-\frac{7}{6} - \frac{22}{3}i}
\]

#### Problem 10: \( \int_1^i (iz+1)^3\,dz \)
\[
\left[ \frac{(iz+1)^4}{4i} \right]_1^i = 0 - \frac{(i+1)^4}{4i} = 0 - (-1/i) = \boxed{-i}
\]

#### Problem 11: \( \int_{i/2}^i e^{\pi z}\,dz \)
\[
\left[ \frac{e^{\pi z}}{\pi} \right]_{i/2}^i = \frac{e^{i\pi} - e^{i\pi/2}}{\pi} = \boxed{-\frac{1}{\pi} - \frac{1}{\pi}i}
\]

#### Problem 12: \( \int_{1-i}^{1+2i} z e^{z^2}\,dz \)
\[
\left[ \frac{e^{z^2}}{2} \right]_{1-i}^{1+2i} = \boxed{\frac{e^{-3+4i} - e^{-2i}}{2}}
\]

#### Problem 13: \( \int_\pi^{\pi+2i} \sin(z/2)\,dz \)
\[
\left[ -2\cos(z/2) \right]_\pi^{\pi+2i} = -2\cos\left( \frac{\pi}{2} + i \right) = \boxed{2i\sinh 1} \approx 2.3504i
\]

#### Problem 14: \( \int_{1-2i}^{\pi i} \cos z\,dz \)
\[
\left[ \sin z \right]_{1-2i}^{\pi i} = \boxed{-\sin 1 \cosh 2 + i(\sinh \pi + \cos 1 \sinh 2)}
\]

#### Problem 15: \( \int_{\pi i}^{2\pi i} \cosh z\,dz \)
\[
\left[ \sinh z \right]_{\pi i}^{2\pi i} = 0 - 0 = \boxed{0}
\]

#### Problem 16: \( \int_i^{1+(\pi/2)i} \sinh 3z\,dz \)
\[
\left[ \frac{\cosh 3z}{3} \right]_i^{1+(\pi/2)i} = \boxed{-\frac{1}{3}\cos 3 - \frac{i}{3}\sinh 3}
\]

#### Problem 17: \( \int_C \frac{1}{z}\,dz \); circular arc from \( -4i \) to \( 4i \)
* The path is in the right half-plane where the principal branch \( \operatorname{Ln} z \) is analytic:
  \[
  \operatorname{Ln}(4i) - \operatorname{Ln}(-4i) = \left( \ln 4 + i\frac{\pi}{2} \right) - \left( \ln 4 - i\frac{\pi}{2} \right) = \boxed{\pi i}
  \]

#### Problem 18: \( \int_C \frac{1}{z}\,dz \); segment from \( 1+i \) to \( 4+4i \)
* The segment is in the first quadrant:
  \[
  \operatorname{Ln}(4+4i) - \operatorname{Ln}(1+i) = \operatorname{Ln}\left( 4(1+i) \right) - \operatorname{Ln}(1+i) = \boxed{\ln 4}
  \]

#### Problem 19: \( \int_C \frac{1}{z^2}\,dz \) from \( -4i \) to \( 4i \)
* The antiderivative is \( -1/z \), analytic on any path not containing the origin:
  \[
  \left[ -\frac{1}{z} \right]_{-4i}^{4i} = -\frac{1}{4i} - \left( -\frac{1}{-4i} \right) = \frac{i}{4} - \left(-\frac{i}{4}\right) = \boxed{\frac{1}{2}i}
  \]

#### Problem 20: \( \int_{1-i}^{1+\sqrt{3}i} \left( z + \frac{1}{z} + \frac{1}{z^2} \right)\,dz \) in the right half-plane
* Antiderivative: \( F(z) = \frac{z^2}{2} + \operatorname{Ln} z - \frac{1}{z} \).
  \[
  F(1+\sqrt{3}i) - F(1-i) = \boxed{-1 + \frac{3+\sqrt{3}}{4} + i\left(\sqrt{3}+1 + \frac{7\pi}{12} + \frac{\sqrt{3}}{4}\right)}
  \]

---

## Problems 21 – 24: Integration by Parts

#### Problem 21: \( \int_\pi^i e^z \cos z \, dz \)
* Using the identity \( \int e^z\cos z\,dz = \frac{1}{2}e^z(\sin z + \cos z) \):
  \[
  \left[ \frac{e^z(\sin z + \cos z)}{2} \right]_\pi^i = \boxed{\frac{e^{1+i} + e^\pi}{2}}
  \]

#### Problem 22: \( \int_0^i z \sin z \, dz \)
* Parts: \( U = z, \, dV = \sin z \, dz \implies \int z\sin z\,dz = -z\cos z + \sin z \):
  \[
  \left[ -z\cos z + \sin z \right]_0^i = -i\cosh 1 + i\sinh 1 = \boxed{-i e^{-1}}
  \]

#### Problem 23: \( \int_i^{1+i} z e^z \, dz \)
* Parts: \( \int z e^z\,dz = (z-1)e^z \):
  \[
  \left[ (z-1)e^z \right]_i^{1+i} = i e^{1+i} - (i-1)e^i = \boxed{e^{1+i}i - (i-1)e^i}
  \]

#### Problem 24: \( \int_0^{\pi i} z^2 e^z \, dz \)
* Parts: \( \int z^2 e^z\,dz = (z^2-2z+2)e^z \):
  \[
  \left[ (z^2-2z+2)e^z \right]_0^{\pi i} = (-\pi^2 - 2\pi i + 2)(-1) - 2 = \boxed{\pi^2 - 4 + 2\pi i}
  \]

---

## Problems 25 – 26: Principal Branch Integrals

#### Problem 25: \( \int_C \frac{1}{4z^{1/2}}\,dz \); circle \( z = 4e^{it}, \, -\pi/2 \le t \le \pi/2 \)
* Antiderivative: \( F(z) = \frac{1}{2}z^{1/2} \).
* Endpoints: \( z_0 = -4i = 4e^{-i\pi/2} \) and \( z_1 = 4i = 4e^{i\pi/2} \).
  \[
  F(z_1) - F(z_0) = \frac{1}{2}\left( 2e^{i\pi/4} - 2e^{-i\pi/4} \right) = i\sin(\pi/4) \cdot 2 = \boxed{\sqrt{2}i}
  \]

#### Problem 26: \( \int_1^{9i} 3z^{1/2}\,dz \)
* Antiderivative: \( F(z) = 2z^{3/2} \).
  \[
  2(9i)^{3/2} - 2(1)^{3/2} = 2\left( 27 e^{i3\pi/4} \right) - 2 = \boxed{-27\sqrt{2} - 2 + 27\sqrt{2}i}
  \]

---

## Focus on Concepts

#### Problem 27: Antiderivative of \( f(z) = \sin z^2 \)
* By integration of power series:
  \[
  F(z) = \int_0^z \sin(w^2)\,dw = \sum_{n=0}^\infty \frac{(-1)^n z^{4n+3}}{(4n+3)(2n+1)!}
  \]

#### Problem 28: Domain and Antiderivative of \( f(z) = z(z+1)^{1/2} \)
* **Domain:** We cut the plane along the negative real axis starting from the branch point \( z = -1 \):
  \[
  D = \mathbb{C} \setminus \{ x+iy \in \mathbb{C} \mid x \le -1, \, y = 0 \}
  \]
* **Antiderivative:** Using substitution \( u = z+1 \):
  \[
  F(z) = \boxed{\frac{2}{5}(z+1)^{5/2} - \frac{2}{3}(z+1)^{3/2}}
  \]
