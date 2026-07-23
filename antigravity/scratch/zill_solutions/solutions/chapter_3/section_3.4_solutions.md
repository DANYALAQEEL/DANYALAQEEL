# Complex Analysis — Dennis G. Zill, 2nd Edition
## Chapter 3 · Section 3.4 — Applications
### Problems 1 – 22 · Complete Solutions

---

> **Key Concepts of Conformal Mappings and Electrostatic/Fluid Flows**
>
> 1. **Orthogonal Families:** For any analytic function \( f(z) = u(x, y) + i v(x, y) \), the level curves \( u(x, y) = c_1 \) and \( v(x, y) = c_2 \) form two families of orthogonal curves. At any point of intersection where \( f'(z_0) \ne 0 \), their tangent lines are perpendicular.
> 2. **Velocity Field:** In a planar, incompressible, and irrotational fluid flow, the velocity field \( \mathbf{F} \) is given by the gradient of the velocity potential \( \phi \):
>    \[
>    \mathbf{F}(x, y) = \nabla \phi = \frac{\partial \phi}{\partial x} \mathbf{i} + \frac{\partial \phi}{\partial y} \mathbf{j}
>    \]
> 3. **Complex Potential:** If \( \phi \) is the velocity potential (or electrostatic potential), its harmonic conjugate \( \psi \) is the stream function (or force function). The complex potential is:
>    \[
>    \Omega(z) = \phi(x, y) + i \psi(x, y)
>    \]

---

## Problems 1 – 4: Identifying Level Curves

### Problem 1: \( f(z) = 2iz - 3 + i \)
* Express in Cartesian form:
  \[
  f(z) = 2i(x+iy) - 3 + i = (-2y - 3) + i(2x + 1)
  \]
  \[
  u(x,y) = -2y - 3, \quad v(x,y) = 2x + 1
  \]
* Level curves:
  * \( u(x,y) = c_1 \implies y = k_1 \) (horizontal lines).
  * \( v(x,y) = c_2 \implies x = k_2 \) (vertical lines).
* **Orthogonal families:** Horizontal lines and vertical lines.

### Problem 2: \( f(z) = (z-1)^2 \)
* Express in Cartesian form:
  \[
  f(z) = (x-1+iy)^2 = (x-1)^2 - y^2 + 2i(x-1)y
  \]
  \[
  u(x,y) = (x-1)^2 - y^2, \quad v(x,y) = 2(x-1)y
  \]
* Level curves:
  * \( u(x,y) = c_1 \implies (x-1)^2 - y^2 = c_1 \) (hyperbolas opening horizontally or vertically).
  * \( v(x,y) = c_2 \implies 2(x-1)y = c_2 \implies y = \frac{k_2}{x-1} \) (rectangular hyperbolas with asymptotes \( x=1 \) and \( y=0 \)).
* **Orthogonal families:** Hyperbolas centered at the point \( (1,0) \).

### Problem 3: \( f(z) = 1/z \)
* Express in Cartesian form:
  \[
  u(x,y) = \frac{x}{x^2+y^2}, \quad v(x,y) = -\frac{y}{x^2+y^2}
  \]
* Level curves:
  * \( u(x,y) = c_1 \implies \left(x - \frac{1}{2c_1}\right)^2 + y^2 = \frac{1}{4c_1^2} \) (circles tangent to the y-axis at the origin).
  * \( v(x,y) = c_2 \implies x^2 + \left(y + \frac{1}{2c_2}\right)^2 = \frac{1}{4c_2^2} \) (circles tangent to the x-axis at the origin).
* **Orthogonal families:** Two families of orthogonal circles passing through the origin.

### Problem 4: \( f(z) = z + 1/z \)
* Express in Cartesian form:
  \[
  u(x,y) = x\left(1 + \frac{1}{x^2+y^2}\right), \quad v(x,y) = y\left(1 - \frac{1}{x^2+y^2}\right)
  \]
* **Orthogonal families:** The curves \( x\left(1 + \frac{1}{x^2+y^2}\right) = c_1 \) and \( y\left(1 - \frac{1}{x^2+y^2}\right) = c_2 \).

---

## Problems 5 – 8: Implicit Differentiation and Orthogonality

Using implicit differentiation, the slopes of the tangent lines are \( m_1 = -u_x/u_y \) and \( m_2 = -v_x/v_y \). By C-R equations \( u_x = v_y \) and \( u_y = -v_x \), the product is \( m_1 m_2 = -1 \).

### Problem 5: \( f(z) = x - 2x^2 + 2y^2 + i(y - 4xy) \)
* \( u = x - 2x^2 + 2y^2, \, v = y - 4xy \).
* Partials: \( u_x = 1 - 4x \), \( u_y = 4y \); \( v_x = -4y \), \( v_y = 1 - 4x \).
* Slopes:
  \[
  m_1 = -\frac{1-4x}{4y}, \quad m_2 = \frac{4y}{1-4x} \implies m_1 m_2 = -1
  \]

### Problem 6: \( f(z) = x^3 - 3xy^2 + i(3x^2y - y^3) \)
* \( u = x^3 - 3xy^2, \, v = 3x^2y - y^3 \).
* Partials: \( u_x = 3x^2 - 3y^2 \), \( u_y = -6xy \); \( v_x = 6xy \), \( v_y = 3x^2 - 3y^2 \).
* Slopes:
  \[
  m_1 = \frac{3x^2-3y^2}{6xy}, \quad m_2 = -\frac{6xy}{3x^2-3y^2} \implies m_1 m_2 = -1
  \]

### Problem 7: \( f(z) = e^{-x}\cos y - i e^{-x}\sin y \)
* \( u = e^{-x}\cos y, \, v = -e^{-x}\sin y \).
* Partials: \( u_x = -e^{-x}\cos y \), \( u_y = -e^{-x}\sin y \); \( v_x = e^{-x}\sin y \), \( v_y = -e^{-x}\cos y \).
* Slopes:
  \[
  m_1 = -\cot y, \quad m_2 = \tan y \implies m_1 m_2 = -1
  \]

### Problem 8: \( f(z) = x + \frac{x}{x^2+y^2} + i\left(y - \frac{y}{x^2+y^2}\right) \)
* Partials:
  \[
  u_x = 1 + \frac{y^2-x^2}{(x^2+y^2)^2}, \, u_y = -\frac{2xy}{(x^2+y^2)^2}; \quad v_x = \frac{2xy}{(x^2+y^2)^2}, \, v_y = 1 + \frac{y^2-x^2}{(x^2+y^2)^2}
  \]
* Since C-R equations \( u_x = v_y \) and \( u_y = -v_x \) hold, the slopes satisfy \( m_1 m_2 = -1 \).

---

## Problems 9 & 10: Finding Velocity Fields

### Problem 9: \( \phi(x, y) = \frac{x}{x^2 + y^2} \)
* Compute the gradient of \( \phi \):
  \[
  \frac{\partial \phi}{\partial x} = \frac{y^2-x^2}{(x^2+y^2)^2}, \quad \frac{\partial \phi}{\partial y} = \frac{-2xy}{(x^2+y^2)^2}
  \]
* **Velocity field:** \( \mathbf{F}(x,y) = \boxed{\frac{y^2-x^2}{(x^2+y^2)^2} \mathbf{i} - \frac{2xy}{(x^2+y^2)^2} \mathbf{j}} \).

### Problem 10: \( \phi(x, y) = \frac{1}{2}A\log_e[x^2 + (y+1)^2] \)
* Compute the gradient of \( \phi \):
  \[
  \frac{\partial \phi}{\partial x} = \frac{Ax}{x^2+(y+1)^2}, \quad \frac{\partial \phi}{\partial y} = \frac{A(y+1)}{x^2+(y+1)^2}
  \]
* **Velocity field:** \( \mathbf{F}(x,y) = \boxed{\frac{A}{x^2+(y+1)^2}(x\mathbf{i} + (y+1)\mathbf{j})} \).

---

## Problems 11 – 14: Electrostatics and Heat Flow

### Problem 11: Electrostatic plates at \( x=0 \) and \( x=1 \)
* **(a) Potential function:** Since the boundaries are parallel to the y-axis:
  \[
  \phi(x) = Ax + B \implies \phi(0) = B = 50, \, \phi(1) = A + 50 = 0 \implies \phi(x,y) = \boxed{50 - 50x}
  \]
* **(b) Complex potential:** Find harmonic conjugate \( \psi(x,y) \):
  \[
  \psi_y = \phi_x = -50 \implies \psi(x,y) = -50y \implies \Omega(z) = 50 - 50x - 50iy = \boxed{50 - 50z}
  \]

### Problem 12: Electrostatic plates at \( y=-1 \) and \( y=2 \)
* **(a) Potential function:**
  \[
  \phi(y) = Ay + B \implies \phi(-1) = -A + B = 10, \, \phi(2) = 2A + B = 20 \implies A = \frac{10}{3}, \, B = \frac{40}{3}
  \]
  \[
  \phi(x,y) = \boxed{\frac{10}{3}y + \frac{40}{3}}
  \]
* **(b) Complex potential:** Find conjugate \( \psi \):
  \[
  \psi_x = -\phi_y = -\frac{10}{3} \implies \psi(x,y) = -\frac{10}{3}x \implies \Omega(z) = \boxed{-\frac{10i}{3}z + \frac{40}{3}}
  \]
* **(c) Curves:** Equipotentials are horizontal lines \( y = k_1 \); lines of force are vertical lines \( x = k_2 \).

### Problem 13: Wedge potential \( \phi(\theta) \)
* **(a) Solve \( \phi''(\theta) = 0 \):**
  \[
  \phi(\theta) = A\theta + B \implies \phi(0) = B = 0, \, \phi(\pi/4) = A(\pi/4) = 30 \implies \phi(r,\theta) = \boxed{\frac{120}{\pi}\theta}
  \]
* **(b) Complex potential:** Find conjugate \( \psi \):
  \[
  \psi_r = -\frac{1}{r}\phi_\theta = -\frac{120}{\pi r} \implies \psi = -\frac{120}{\pi}\log_e r \implies \Omega(z) = \boxed{-i\frac{120}{\pi}\operatorname{Ln}(z)}
  \]
* **(c) Curves:** Equipotentials are radial rays \( \theta = c_1 \); lines of force are concentric circular arcs \( r = c_2 \).

### Problem 14: Cylinders of radii \( a \) and \( b \)
* **(a) Show solution:** Solve Cauchy-Euler equation \( r^2\phi'' + r\phi' = 0 \implies \phi(r) = A\log_e r + B \).
  Boundary conditions:
  \[
  A\log_e a + B = k_0, \quad A\log_e b + B = k_1
  \]
  Solving for \( A \) and \( B \) yields the equations:
  \[
  A = \frac{k_0-k_1}{\log_e(a/b)}, \quad B = \frac{-k_0\log_e b + k_1\log_e a}{\log_e(a/b)}
  \]
* **(b) Complex potential:**
  \[
  \psi_r = 0, \, \psi_\theta = r\phi_r = A \implies \psi = A\theta \implies \Omega(z) = \boxed{A\operatorname{Ln}(z) + B}
  \]
* **(c) Curves:** Isotherms are concentric circles \( r = c_1 \); heat flux lines are radial lines \( \theta = c_2 \).

---

## Focus on Concepts (Problems 15 – 18)

### Problem 15: Level curve \( v(x,y) = 0 \) for \( f(z) = z + 1/z \)
* Since \( v(x,y) = y\left(1 - \frac{1}{x^2+y^2}\right) = 0 \), the level curve consists of:
  1. The real axis \( y = 0 \) (excluding the origin \( z=0 \)).
  2. The unit circle \( x^2+y^2 = 1 \).

### Problem 16: Intersection of \( u = x^2-y^2 \) and \( v = 2xy \) at \( z=0 \)
* The level curves are \( y = \pm x \) (for \( u=0 \)) and the axes \( x=0, \, y=0 \) (for \( v=0 \)). They intersect at the origin at an angle of \( 45^\circ \). They are not orthogonal because the derivative \( f'(z) = 2z \) is zero at \( z=0 \), which violates the conformance condition.

### Problem 17: Requirement of \( f'(z_0) \ne 0 \)
* The slopes of the tangent lines are defined by \( u_x, \, u_y, \, v_x, \, v_y \). If \( f'(z_0) = 0 \implies u_x = u_y = v_x = v_y = 0 \), the tangent slopes are undefined, and the level curves may possess singular points (such as self-intersections) where orthogonality is not preserved.

### Problem 18: Are Orthogonal Trajectories always Analytic?
* **No.** Counterexample: \( f(z) = \bar{z} = x - iy \). Its level curves are vertical lines \( x = c_1 \) and horizontal lines \( y = -c_2 \), which are orthogonal. However, \( f(z) = \bar{z} \) is nowhere analytic.

---

## Problems 21 & 22: Fluid Flows and Electrostatics

### Problem 21: \( \Omega(z) = A(z + 1/z) \) with \( A = 1 \)
* **(a) Cartesian potential and stream functions:**
  \[
  \phi(x,y) = \boxed{x\left(1 + \frac{1}{x^2+y^2}\right)}, \quad \psi(x,y) = \boxed{y\left(1 - \frac{1}{x^2+y^2}\right)}
  \]
* **(b) Polar potential and stream functions:**
  \[
  \phi(r,\theta) = \boxed{A\left(r + \frac{1}{r}\right)\cos\theta}, \quad \psi(r,\theta) = \boxed{A\left(r - \frac{1}{r}\right)\sin\theta}
  \]

### Problem 22: Electrostatic complex potential \( \Omega(z) = \log_e \frac{z+1}{z-1} + i\operatorname{Arg} \frac{z+1}{z-1} \)
* **(a) Show curves are circles:**
  * For \( \phi(x,y) = c_1 \implies \left| \frac{z+1}{z-1} \right| = e^{c_1} = k \implies \frac{(x+1)^2+y^2}{(x-1)^2+y^2} = k^2 \).
    Expanding and simplifying using \( \frac{k^2+1}{k^2-1} = \coth c_1 \):
    \[
    \boxed{(x - \coth c_1)^2 + y^2 = \operatorname{csch}^2 c_1}
    \]
  * For \( \psi(x,y) = c_2 \implies \operatorname{Arg}(z+1) - \operatorname{Arg}(z-1) = c_2 \).
    Taking the tangent of both sides and using trigonometric identity:
    \[
    \tan c_2 = \frac{y/(x+1) - y/(x-1)}{1 + y^2/(x^2-1)} = \frac{-2y}{x^2+y^2-1} \implies \boxed{x^2 + (y + \cot c_2)^2 = \csc^2 c_2}
    \]
* **(b) Behavior of centers:**
  * As \( c_1 \to \infty \implies \coth c_1 \to 1 \), centers approach \( (1,0) \).
  * As \( c_1 \to -\infty \implies \coth c_1 \to -1 \), centers approach \( (-1,0) \).
  * As \( c_1 \to 0^+ \implies \coth c_1 \to \infty \), centers move to positive infinity on the x-axis.
  * As \( c_1 \to 0^- \implies \coth c_1 \to -\infty \), centers move to negative infinity on the x-axis.
* **(c) Passing through \( \pm 1 \):**
  * Substitute \( (\pm 1, 0) \) into the circle equation for \( \psi \):
    \[
    (\pm 1)^2 + (0 + \cot c_2)^2 = 1 + \cot^2 c_2 = \csc^2 c_2 \quad \text{(satisfied)}
    \]
    Thus, all circular lines of force pass through both \( z = 1 \) and \( z = -1 \).
