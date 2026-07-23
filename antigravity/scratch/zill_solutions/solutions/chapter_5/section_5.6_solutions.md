# Complex Analysis — Dennis G. Zill, 2nd Edition
## Chapter 5 · Section 5.6 — Applications of Contour Integration
### Problems 1 – 32 · Complete Solutions

---

> **Key Concepts of Complex Fluid Dynamics**
>
> 1. **Velocity Field & Complex Velocity:** For an ideal fluid flow (incompressible, irrotational) with velocity field \( F(x,y) = P(x,y)\mathbf{i} + Q(x,y)\mathbf{j} \):
>    * The **complex representation** of the field is \( f(z) = P(x,y) + iQ(x,y) \).
>    * The **complex velocity** is \( g(z) = \overline{f(z)} = P(x,y) - iQ(x,y) \), which is analytic.
> 2. **Complex Velocity Potential:** The potential is \( \Omega(z) = \phi(x,y) + i\psi(x,y) \) where \( \Omega'(z) = g(z) \).
>    * The level curves \( \phi(x,y) = c_1 \) are **equipotential lines**.
>    * The level curves \( \psi(x,y) = c_2 \) are **streamlines** (particle paths).
> 3. **Circulation & Net Flux:** For a closed contour \( C \):
>    \[
>    \oint_C f(z) \, dz = \text{Circulation} + i \, \text{Net Flux}
>    \]
>    * \( \text{Circulation} = \oint_C P \, dx + Q \, dy \).
>    * \( \text{Net Flux} = \oint_C P \, dy - Q \, dx \).

---

## Problems 1 – 4: Verification of Ideal Fluid Flows

For each velocity field \( F(x,y) = P\mathbf{i} + Q\mathbf{j} \), we verify \( \operatorname{div} F = \frac{\partial P}{\partial x} + \frac{\partial Q}{\partial y} = 0 \) (incompressibility) and \( \operatorname{curl} F = \left(\frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y}\right)\mathbf{k} = \mathbf{0} \) (irrotationality).

#### Problem 1: \( F(x,y) = (\cos \theta_0)\mathbf{i} + (\sin \theta_0)\mathbf{j} \)
* \( \operatorname{div} F = 0 + 0 = 0 \).
* \( \operatorname{curl} F = (0 - 0)\mathbf{k} = \mathbf{0} \). (Verified).

#### Problem 2: \( F(x,y) = -y\mathbf{i} - x\mathbf{j} \)
* \( P = -y, \, Q = -x \).
* \( \operatorname{div} F = \frac{\partial(-y)}{\partial x} + \frac{\partial(-x)}{\partial y} = 0 \).
* \( \operatorname{curl} F = (-1 - (-1))\mathbf{k} = \mathbf{0} \). (Verified).

#### Problem 3: \( F(x,y) = 2x\mathbf{i} + (3 - 2y)\mathbf{j} \)
* \( P = 2x, \, Q = 3-2y \).
* \( \operatorname{div} F = 2 - 2 = 0 \).
* \( \operatorname{curl} F = (0 - 0)\mathbf{k} = \mathbf{0} \). (Verified).

#### Problem 4: \( F(x,y) = \frac{x}{x^2+y^2}\mathbf{i} + \frac{y}{x^2+y^2}\mathbf{j} \)
* \( P = \frac{x}{x^2+y^2}, \, Q = \frac{y}{x^2+y^2} \).
* \( \operatorname{div} F = \frac{y^2-x^2}{(x^2+y^2)^2} + \frac{x^2-y^2}{(x^2+y^2)^2} = 0 \).
* \( \operatorname{curl} F = \left( \frac{-2xy}{(x^2+y^2)^2} - \frac{-2xy}{(x^2+y^2)^2} \right)\mathbf{k} = \mathbf{0} \). (Verified for \( z \ne 0 \)).

---

## Problems 5 – 8: Complex Representations

#### Problem 5:
* \( f(z) = P+iQ = \boxed{\cos \theta_0 + i\sin \theta_0 = e^{i\theta_0}} \).
* \( g(z) = \overline{f(z)} = \boxed{e^{-i\theta_0}} \) (analytic everywhere as it is constant).

#### Problem 6:
* \( f(z) = P+iQ = \boxed{-y - ix = -i\bar{z}} \).
* \( g(z) = \overline{f(z)} = \boxed{iz} \) (analytic everywhere as it is a polynomial).

#### Problem 7:
* \( f(z) = P+iQ = \boxed{2\bar{z} + 3i} \).
* \( g(z) = \overline{f(z)} = \boxed{2z - 3i} \) (analytic everywhere).

#### Problem 8:
* \( f(z) = P+iQ = \frac{x+iy}{x^2+y^2} = \frac{z}{|z|^2} = \boxed{\frac{1}{\bar{z}}} \).
* \( g(z) = \overline{f(z)} = \boxed{\frac{1}{z}} \) (analytic in \( \mathbb{C} \setminus \{0\} \)).

---

## Problems 9 – 12: Finding Velocity Fields from Complex Velocity potentials

Using \( g(z) = P - iQ \implies P = \operatorname{Re}(g(z)) \) and \( Q = -\operatorname{Im}(g(z)) \):

#### Problem 9: \( g(z) = (1+i)z^2 \)
* \( g(x+iy) = (1+i)(x^2-y^2+2ixy) = (x^2-y^2-2xy) + i(x^2-y^2+2xy) \).
* \( F(x,y) = \boxed{(x^2 - y^2 - 2xy)\mathbf{i} + (y^2 - x^2 - 2xy)\mathbf{j}} \).

#### Problem 10: \( g(z) = \sin z \)
* \( g(x+iy) = \sin x\cosh y + i\cos x\sinh y \).
* \( F(x,y) = \boxed{(\sin x\cosh y)\mathbf{i} - (\cos x\sinh y)\mathbf{j}} \).

#### Problem 11: \( g(z) = e^x\cos y + i e^x\sin y \)
* \( F(x,y) = \boxed{(e^x\cos y)\mathbf{i} - (e^x\sin y)\mathbf{j}} \).

#### Problem 12: \( g(z) = x^3 - 3xy^2 + i(3x^2y - y^3) \)
* \( F(x,y) = \boxed{(x^3 - 3xy^2)\mathbf{i} + (y^3 - 3x^2y)\mathbf{j}} \).

---

## Problems 13 – 16: Complex Velocity Potentials

#### Problem 13:
* \( \Omega(z) = \int e^{-i\theta_0} \, dz = \boxed{e^{-i\theta_0} z} \).
* Streamlines: \( -x\sin \theta_0 + y\cos \theta_0 = c_2 \) (straight lines parallel to flow).

#### Problem 14:
* \( \Omega(z) = \int iz \, dz = \boxed{\frac{1}{2}iz^2} \).
* Streamlines: \( x^2-y^2 = c_2 \) (hyperbolas).

#### Problem 15:
* \( \Omega(z) = \int (2z-3i) \, dz = \boxed{z^2 - 3iz} \).
* Streamlines: \( 2xy - 3x = c_2 \).

#### Problem 16:
* \( \Omega(z) = \int \frac{1}{z} \, dz = \boxed{\operatorname{Ln} z} \).
* Streamlines: \( \theta = c_2 \implies y = C_2 x \) (radial lines from the origin).

---

## Problems 17 – 18: Fields from Potential

#### Problem 17: \( \Omega(z) = \frac{1}{3}iz^3 \)
* \( g(z) = \Omega'(z) = iz^2 = -2xy + i(x^2-y^2) \implies P = -2xy, \, Q = y^2-x^2 \).
* \( F(x,y) = \boxed{-2xy\mathbf{i} + (y^2-x^2)\mathbf{j}} \).

#### Problem 18: \( \Omega(z) = \frac{1}{4}z^4 + z \)
* \( g(z) = z^3 + 1 = (x^3-3xy^2+1) + i(3x^2y-y^3) \).
* \( F(x,y) = \boxed{(x^3 - 3xy^2 + 1)\mathbf{i} + (y^3 - 3x^2y)\mathbf{j}} \).

---

## Problems 19 – 22: Flow around a Cylinder

#### Problem 19:
* Complex velocity: \( g(z) = A(1 - 1/z^2) \), which is analytic for all \( z \ne 0 \), hence the flow is irrotational and incompressible (ideal). (Verified).

#### Problem 20:
* \( \Omega'(z) = A(1 - 1/z^2) = g(z) \). (Verified).

#### Problem 21:
* **(a)** For large \( |z| \), \( 1/z^2 \to 0 \implies F(x,y) \to A\mathbf{i} \). This is a uniform horizontal flow.
* **(b)** As \( |z| \to \infty \), \( \Omega(z) = A(z+1/z) \to Az \), which is the potential for uniform flow \( F = A\mathbf{i} \).

#### Problem 22: Stagnation Points (\( g(z)=0 \))
* **(a)** \( g(z) = 2z = 0 \implies z = \boxed{0} \).
* **(b)** \( g(z) = A(1-1/z^2) = 0 \implies z^2 = 1 \implies z = \boxed{\pm 1} \).

---

## Problems 23 – 24: Sources and Sinks

#### Problem 23:
* **(a)** Streamlines: \( \operatorname{Im}(\Omega(z)) = k\arg(z-x_1) = c_2 \implies \arg(z-x_1) = C_2 \), which are radial rays.
* **(b)** \( f(z) = \overline{\Omega'(z)} = \frac{k}{\bar{z}-x_1} = \frac{k(z-x_1)}{|z-x_1|^2} \). Flow points toward \( x_1 \) when \( k < 0 \).

#### Problem 24:
* Streamlines: \( \operatorname{Im}(\Omega(z)) = k(\theta_1 - \theta_2) = c_2 \). Geometrically, this constant difference in angle describes a family of circles passing through the two points \( z = \pm 1 \), which has the equation \( x^2 + (y-c)^2 = 1+c^2 \). (Verified).

---

## Problems 25 – 30: Circulation and Net Flux

Using \( \oint_C f(z)\,dz = \text{Circulation} + i\,\text{Net Flux} \):

#### Problem 25: \( f(z) = 1/z \); \( C: |z|=1 \)
* \( \oint_C \frac{dz}{z} = 2\pi i \implies \text{Circulation} = \boxed{0}, \quad \text{Net Flux} = \boxed{2\pi} \).

#### Problem 26: \( f(z) = 2z \); \( C: |z|=1 \)
* Entire integrand: \( \oint_C 2z\,dz = 0 \implies \text{Circulation} = \boxed{0}, \quad \text{Net Flux} = \boxed{0} \).

#### Problem 27: \( f(z) = \frac{1}{z-1} \); \( C: |z-1|=2 \)
* \( \oint_C = 2\pi i \implies \text{Circulation} = \boxed{0}, \quad \text{Net Flux} = \boxed{2\pi} \).

#### Problem 28: \( f(z) = \bar{z} \); \( C: \) square vertices \( 0, 1, 1+i, i \)
* Integrating \( \bar{z} \) along the 4 sides gives:
  \[
  \int_0^1 x\,dx + \int_0^1 (1-iy)i\,dy + \int_1^0 (x-i)\,dx + \int_1^0 (-iy)i\,dy = 2i
  \]
* \( \text{Circulation} = \boxed{0}, \quad \text{Net Flux} = \boxed{2} \).

#### Problem 29: \( F(x,y) = (4x+3y)\mathbf{i} + (2x-y)\mathbf{j} \); \( C: x^2+y^2=4 \)
* By Green's Theorem:
  * \( \text{Circulation} = \iint_D (2-3)\,dA = -\text{Area}(D) = \boxed{-4\pi} \).
  * \( \text{Net Flux} = \iint_D (4-1)\,dA = 3\text{Area}(D) = \boxed{12\pi} \).

#### Problem 30: \( F(x,y) = (x+2y)\mathbf{i} + (x-y)\mathbf{j} \); \( C: \) square vertices \( 0, 1+i, 2i, -1+i \)
* Area of the square region is 2. By Green's Theorem:
  * \( \text{Circulation} = \iint_D (1-2)\,dA = \boxed{-2} \).
  * \( \text{Net Flux} = \iint_D (1-1)\,dA = \boxed{0} \).

---

## Focus on Concepts

#### Problem 31:
* Since \( g(z) = P - iQ \) is analytic in a simply connected domain \( D \), by Cauchy-Goursat, \( \oint_C g(z)\,dz = 0 \). Expanding the integral:
  \[
  \oint_C (P - iQ)(dx + i\,dy) = \oint_C (P\,dx + Q\,dy) + i\oint_C (P\,dy - Q\,dx) = 0
  \]
  This proves both the circulation (real part) and net flux (imaginary part) must be zero. (Q.E.D.)

#### Problem 32: Vortex at \( z=0 \)
* **(a)** Complex velocity \( g(z) = \frac{a-ib}{x+iy} = \frac{ax-by - i(bx+ay)}{x^2+y^2} \). The components of the velocity vector are the real and imaginary parts:
  \[
  \frac{dx}{dt} = \frac{ax-by}{x^2+y^2}, \quad \frac{dy}{dt} = \frac{bx+ay}{x^2+y^2} \quad \text{(Verified)}
  \]
* **(b)** Differentiating polar identities yields the requested coordinate derivatives. (Verified).
* **(c)** Substituting the results from (a) into (b):
  \[
  \frac{dr}{dt} = \frac{a}{r}, \quad \frac{d\theta}{dt} = \frac{b}{r^2} \quad \text{(Verified)}
  \]
* **(d)** Differentiating \( dr/d\theta = (dr/dt)/(d\theta/dt) = ar/b \implies \ln r = a\theta/b + C \implies r = c e^{a\theta/b} \). This represents logarithmic spirals. (Verified).
