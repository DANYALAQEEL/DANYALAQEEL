# Complex Analysis — Dennis G. Zill, 2nd Edition
## Chapter 3 · Section 3.4 — Applications
### Problems 1 – 22 · Complete Solutions

---

> **Key Concepts of Conformal Mappings and Electrostatic/Fluid Flows**
>
> 1. **Orthogonal Families:** For any analytic function $f(z) = u(x, y) + i v(x, y)$, the level curves $u(x, y) = c_1$ and $v(x, y) = c_2$ form two families of orthogonal curves. At any point of intersection where $f'(z_0) \ne 0$, their tangent lines are perpendicular.
>
> ![Figure 3.3](../../extracted_figures/figure_3_3.png)
>
> ![Figure 3.4](../../extracted_figures/figure_3_4.png)
>
> 2. **Velocity Field:** In a planar, incompressible, and irrotational fluid flow, the velocity field $\mathbf{F}$ is given by the gradient of the velocity potential $\phi$:
>    $$\mathbf{F}(x, y) = \nabla \phi = \frac{\partial \phi}{\partial x} \mathbf{i} + \frac{\partial \phi}{\partial y} \mathbf{j}$$
>    The gradient vector at any point is perpendicular to the equipotential curve passing through that point.
>
> ![Figure 3.5](../../extracted_figures/figure_3_5.png)
>
> 3. **Complex Potential:** If $\phi$ is the velocity potential (or electrostatic potential), its harmonic conjugate $\psi$ is the stream function (or force function). The complex potential is:
>    $$\Omega(z) = \phi(x, y) + i \psi(x, y)$$
>    The level curves $\phi(x,y) = c_1$ are equipotential lines, and the level curves $\psi(x,y) = c_2$ are streamlines (or lines of force).
>
> ![Figure 3.6](../../extracted_figures/figure_3_6.png)
>
> ![Figure 3.7](../../extracted_figures/figure_3_7.png)
>
> ![Figure 3.8](../../extracted_figures/figure_3_8.png)
>
> 4. **Dirichlet Problem:** The problem of finding a harmonic function $\phi(x,y)$ on a domain $D$ that satisfies specified boundary conditions on the boundary curve $C$ is called a Dirichlet problem.
>
> ![Figure 3.9](../../extracted_figures/figure_3_9.png)

---

## Problems 1 – 4: Identifying Level Curves

**In Problems 1–4, identify the two families of level curves defined by the given analytic function $f(z) = u + iv$. Show that they are orthogonal.**

#### Problem 1
Identify the level curves for $f(z) = 2iz - 3 + i$.

**Solution:**
1. Express $f(z)$ in Cartesian form:
   $$f(z) = 2i(x+iy) - 3 + i = 2ix - 2y - 3 + i = (-2y - 3) + i(2x + 1)$$
   Thus:
   $$u(x,y) = -2y - 3 \quad \text{and} \quad v(x,y) = 2x + 1$$
2. Determine the level curves:
   * $u(x,y) = c_1 \implies -2y - 3 = c_1 \implies y = k_1$ (horizontal lines).
   * $v(x,y) = c_2 \implies 2x + 1 = c_2 \implies x = k_2$ (vertical lines).
3. Check orthogonality:
   Since horizontal lines ($y = k_1$) and vertical lines ($x = k_2$) intersect at a $90^\circ$ angle everywhere, the two families of level curves are orthogonal.

---

#### Problem 2
Identify the level curves for $f(z) = (z-1)^2$.

**Solution:**
1. Express $f(z)$ in Cartesian form:
   $$f(z) = (x-1 + iy)^2 = (x-1)^2 - y^2 + 2i(x-1)y$$
   Thus:
   $$u(x,y) = (x-1)^2 - y^2 \quad \text{and} \quad v(x,y) = 2(x-1)y$$
2. Determine the level curves:
   * $u(x,y) = c_1 \implies (x-1)^2 - y^2 = c_1$. This represents a family of hyperbolas centered at the point $(1,0)$ opening horizontally (for $c_1 > 0$) or vertically (for $c_1 < 0$).
   * $v(x,y) = c_2 \implies 2(x-1)y = c_2 \implies y = \frac{k_2}{x-1}$. This represents a family of rectangular hyperbolas with asymptotes $x = 1$ and $y = 0$, centered at $(1,0)$.
3. Conclusion:
   These form two families of orthogonal hyperbolas centered at $(1,0)$.

---

#### Problem 3
Identify the level curves for $f(z) = \frac{1}{z}$ for $z \ne 0$.

**Solution:**
1. Express $f(z)$ in Cartesian form:
   $$f(z) = \frac{x-iy}{x^2+y^2} = \frac{x}{x^2+y^2} - i\frac{y}{x^2+y^2}$$
   Thus:
   $$u(x,y) = \frac{x}{x^2+y^2} \quad \text{and} \quad v(x,y) = -\frac{y}{x^2+y^2}$$
2. Determine the level curves:
   * $u(x,y) = c_1 \implies \frac{x}{x^2+y^2} = c_1 \implies x^2 - \frac{x}{c_1} + y^2 = 0$.
     Complete the square:
     $$\left(x - \frac{1}{2c_1}\right)^2 + y^2 = \frac{1}{4c_1^2}$$
     This represents a family of circles centered at $\left(\frac{1}{2c_1}, 0\right)$ tangent to the y-axis at the origin.
   * $v(x,y) = c_2 \implies -\frac{y}{x^2+y^2} = c_2 \implies x^2 + y^2 + \frac{y}{c_2} = 0$.
     Complete the square:
     $$x^2 + \left(y + \frac{1}{2c_2}\right)^2 = \frac{1}{4c_2^2}$$
     This represents a family of circles centered at $\left(0, -\frac{1}{2c_2}\right)$ tangent to the x-axis at the origin.
3. Conclusion:
   These form two families of orthogonal circles passing through the origin.

---

#### Problem 4
Identify the level curves for $f(z) = z + \frac{1}{z}$ for $z \ne 0$.

**Solution:**
1. Express $f(z)$ in Cartesian form:
   $$f(z) = x + iy + \frac{x-iy}{x^2+y^2} = \left( x + \frac{x}{x^2+y^2} \right) + i \left( y - \frac{y}{x^2+y^2} \right)$$
   Thus:
   $$u(x,y) = x\left(1 + \frac{1}{x^2+y^2}\right) \quad \text{and} \quad v(x,y) = y\left(1 - \frac{1}{x^2+y^2}\right)$$
2. Determine the level curves:
   * $u(x,y) = c_1 \implies x\left(1 + \frac{1}{x^2+y^2}\right) = c_1$
   * $v(x,y) = c_2 \implies y\left(1 - \frac{1}{x^2+y^2}\right) = c_2$
3. Conclusion:
   Since $f(z)$ is analytic for $z \ne 0$, these two families of level curves are orthogonal at all points of intersection (except where $f'(z) = 1 - 1/z^2 = 0 \implies z = \pm 1$).

---

## Problems 5 – 8: Implicit Differentiation and Orthogonality

**In Problems 5–8, the given analytic function $f(z) = u + iv$ defines two families of curves $u(x,y) = c_1$ and $v(x,y) = c_2$. Use implicit differentiation to find the slopes of the tangent lines to the curves at a point of intersection, and verify that the families are orthogonal.**

#### Problem 5
Show that the level curves of $f(z) = x - 2x^2 + 2y^2 + i(y - 4xy)$ are orthogonal.

**Solution:**
1. Identify $u$ and $v$:
   $$u(x,y) = x - 2x^2 + 2y^2 \quad \text{and} \quad v(x,y) = y - 4xy$$
2. Compute the first-order partial derivatives:
   * $u_x = 1 - 4x, \quad u_y = 4y$
   * $v_x = -4y, \quad v_y = 1 - 4x$
3. Use implicit differentiation to find the tangent slopes:
   * For the curve $u(x,y) = c_1$:
     $$u_x + u_y \frac{dy}{dx} = 0 \implies m_1 = \frac{dy}{dx} = -\frac{u_x}{u_y} = -\frac{1-4x}{4y}$$
   * For the curve $v(x,y) = c_2$:
     $$v_x + v_y \frac{dy}{dx} = 0 \implies m_2 = \frac{dy}{dx} = -\frac{v_x}{v_y} = -\frac{-4y}{1-4x} = \frac{4y}{1-4x}$$
4. Multiply the slopes:
   $$m_1 m_2 = \left( -\frac{1-4x}{4y} \right) \left( \frac{4y}{1-4x} \right) = -1$$
Since $m_1 m_2 = -1$ at all points of intersection (where $y \ne 0$ and $x \ne 1/4$), the curves are orthogonal.

---

#### Problem 6
Show that the level curves of $f(z) = x^3 - 3xy^2 + i(3x^2y - y^3)$ are orthogonal.

**Solution:**
1. Identify $u$ and $v$:
   $$u(x,y) = x^3 - 3xy^2 \quad \text{and} \quad v(x,y) = 3x^2y - y^3$$
2. Compute the partial derivatives:
   * $u_x = 3x^2 - 3y^2, \quad u_y = -6xy$
   * $v_x = 6xy, \quad v_y = 3x^2 - 3y^2$
3. Compute the tangent slopes:
   * $m_1 = -\frac{u_x}{u_y} = -\frac{3x^2-3y^2}{-6xy} = \frac{3x^2-3y^2}{6xy}$
   * $m_2 = -\frac{v_x}{v_y} = -\frac{6xy}{3x^2-3y^2}$
4. Verify the product of slopes:
   $$m_1 m_2 = \left( \frac{3x^2-3y^2}{6xy} \right) \left( -\frac{6xy}{3x^2-3y^2} \right) = -1$$
Thus, the families are orthogonal.

---

#### Problem 7
Show that the level curves of $f(z) = e^{-x}\cos y - i e^{-x}\sin y$ are orthogonal.

**Solution:**
1. Identify $u$ and $v$:
   $$u(x,y) = e^{-x}\cos y \quad \text{and} \quad v(x,y) = -e^{-x}\sin y$$
2. Compute the partial derivatives:
   * $u_x = -e^{-x}\cos y, \quad u_y = -e^{-x}\sin y$
   * $v_x = e^{-x}\sin y, \quad v_y = -e^{-x}\cos y$
3. Compute the tangent slopes:
   * $m_1 = -\frac{u_x}{u_y} = -\frac{-e^{-x}\cos y}{-e^{-x}\sin y} = -\frac{\cos y}{\sin y} = -\cot y$
   * $m_2 = -\frac{v_x}{v_y} = -\frac{e^{-x}\sin y}{-e^{-x}\cos y} = \frac{\sin y}{\cos y} = \tan y$
4. Multiply the slopes:
   $$m_1 m_2 = (-\cot y)(\tan y) = -1$$
Thus, the families are orthogonal.

---

#### Problem 8
Show that the level curves of $f(z) = x + \frac{x}{x^2+y^2} + i\left(y - \frac{y}{x^2+y^2}\right)$ are orthogonal for $z \ne 0$.

**Solution:**
1. Identify $u$ and $v$:
   $$u(x,y) = x + \frac{x}{x^2+y^2} \quad \text{and} \quad v(x,y) = y - \frac{y}{x^2+y^2}$$
2. Compute the partial derivatives using the quotient rule:
   * $u_x = 1 + \frac{y^2-x^2}{(x^2+y^2)^2}, \quad u_y = -\frac{2xy}{(x^2+y^2)^2}$
   * $v_x = \frac{2xy}{(x^2+y^2)^2}, \quad v_y = 1 + \frac{y^2-x^2}{(x^2+y^2)^2}$
3. Check the C-R equations:
   * $u_x = v_y$ is satisfied.
   * $u_y = -v_x$ is satisfied.
4. Tangent slopes:
   $$m_1 = -\frac{u_x}{u_y} \quad \text{and} \quad m_2 = -\frac{v_x}{v_y} = -\frac{-u_y}{u_x} = \frac{u_y}{u_x}$$
5. Product of slopes:
   $$m_1 m_2 = \left( -\frac{u_x}{u_y} \right) \left( \frac{u_y}{u_x} \right) = -1$$
Since the C-R equations hold, the slope product is $-1$ everywhere the derivative is nonzero, proving orthogonality.

---

## Problems 9 & 10: Finding Velocity Fields

**In Problems 9 and 10, the given real-valued function $\phi$ is the velocity potential for a planar, incompressible, and irrotational fluid flow. Find the velocity field $\mathbf{F}$.**

#### Problem 9
Find the velocity field $\mathbf{F}$ for $\phi(x, y) = \frac{x}{x^2 + y^2}$.

**Solution:**
The velocity field is given by the gradient $\mathbf{F}(x,y) = \nabla \phi$:
1. Compute the partial derivatives of $\phi$:
   $$\frac{\partial \phi}{\partial x} = \frac{1(x^2+y^2) - x(2x)}{(x^2+y^2)^2} = \frac{y^2-x^2}{(x^2+y^2)^2}$$
   $$\frac{\partial \phi}{\partial y} = \frac{0 - x(2y)}{(x^2+y^2)^2} = -\frac{2xy}{(x^2+y^2)^2}$$
2. Form the velocity field:
   $$\mathbf{F}(x,y) = \frac{\partial \phi}{\partial x} \mathbf{i} + \frac{\partial \phi}{\partial y} \mathbf{j} = \frac{y^2-x^2}{(x^2+y^2)^2} \mathbf{i} - \frac{2xy}{(x^2+y^2)^2} \mathbf{j}$$
Thus, we obtain:
$$\boxed{\mathbf{F}(x,y) = \frac{y^2-x^2}{(x^2+y^2)^2} \mathbf{i} - \frac{2xy}{(x^2+y^2)^2} \mathbf{j}}$$

---

#### Problem 10
Find the velocity field $\mathbf{F}$ for $\phi(x, y) = \frac{1}{2}A\log_e[x^2 + (y+1)^2]$.

**Solution:**
The velocity field is given by the gradient $\mathbf{F}(x,y) = \nabla \phi$:
1. Compute the partial derivatives using the chain rule:
   $$\frac{\partial \phi}{\partial x} = \frac{1}{2}A \frac{2x}{x^2+(y+1)^2} = \frac{Ax}{x^2+(y+1)^2}$$
   $$\frac{\partial \phi}{\partial y} = \frac{1}{2}A \frac{2(y+1)}{x^2+(y+1)^2} = \frac{A(y+1)}{x^2+(y+1)^2}$$
2. Form the velocity field:
   $$\mathbf{F}(x,y) = \frac{Ax}{x^2+(y+1)^2} \mathbf{i} + \frac{A(y+1)}{x^2+(y+1)^2} \mathbf{j} = \frac{A}{x^2+(y+1)^2}(x\mathbf{i} + (y+1)\mathbf{j})$$
Thus, we obtain:
$$\boxed{\mathbf{F}(x,y) = \frac{A}{x^2+(y+1)^2}(x\mathbf{i} + (y+1)\mathbf{j})}$$

---

## Problems 11 – 14: Electrostatics and Heat Flow

**In Problems 11–14, solve the given boundary-value problem for electrostatic potential $\phi$ or temperature distribution. Find the potential function $\phi$, its complex potential $\Omega(z)$, and identify the equipotentials and lines of force.**

#### Problem 11
Find the potential $\phi$ and complex potential $\Omega(z)$ for the electrostatic plates shown in the figure below:

![Figure 3.10](../../extracted_figures/figure_3_10.png)

Identify the equipotentials and lines of force as shown in the field plot below:

![Figure 3.11](../../extracted_figures/figure_3_11.png)

**Solution:**
**(a) Find the potential function $\phi(x,y)$:**
1. The domain $D$ is the strip $0 < x < 1$ between two infinite conducting plates parallel to the y-axis.
2. The boundary conditions are:
   $$\phi(0,y) = 50 \quad \text{and} \quad \phi(1,y) = 0$$
3. Since the boundary conditions depend only on $x$, the potential function $\phi$ must also depend only on $x$. Laplace's equation simplifies to:
   $$\frac{d^2 \phi}{dx^2} = 0$$
4. Integrate twice:
   $$\phi(x) = Ax + B$$
5. Apply the boundary conditions:
   * At $x = 0$: $\phi(0) = B = 50$.
   * At $x = 1$: $\phi(1) = A(1) + 50 = 0 \implies A = -50$.
6. Thus, the potential function is:
   $$\phi(x,y) = 50 - 50x$$

**(b) Find the complex potential $\Omega(z)$:**
1. We find the harmonic conjugate $\psi(x,y)$ of $\phi(x,y) = 50 - 50x$:
   * $\psi_y = \phi_x = -50 \implies \psi(x,y) = -50y + h(x)$.
   * $\psi_x = -\phi_y = 0 \implies h'(x) = 0 \implies h(x) = C$.
   Setting the arbitrary constant $C = 0$:
   $$\psi(x,y) = -50y$$
2. Construct the complex potential $\Omega(z)$:
   $$\Omega(z) = \phi(x,y) + i \psi(x,y) = 50 - 50x - 50iy = 50 - 50(x + iy) = 50 - 50z$$

**(c) Identify the curves:**
* **Equipotentials:** $\phi(x,y) = c_1 \implies 50 - 50x = c_1 \implies x = k_1$ (vertical lines).
* **Lines of force:** $\psi(x,y) = c_2 \implies -50y = c_2 \implies y = k_2$ (horizontal lines).
These correspond to the field lines illustrated in Figure 3.11.

---

#### Problem 12
Find the potential $\phi$, complex potential $\Omega(z)$, and describe the equipotential curves and lines of force for the infinite conducting plates shown in the figure below:

![Figure 3.12](../../extracted_figures/figure_3_12.png)

**Solution:**
**(a) Find the potential function $\phi(x,y)$:**
1. The domain $D$ is the horizontal strip $-1 < y < 2$ bounded by two infinite conducting plates parallel to the x-axis.
2. The boundary conditions are:
   $$\phi(x,-1) = 10 \quad \text{and} \quad \phi(x,2) = 20$$
3. Since the boundary conditions depend only on $y$, the potential function $\phi$ depends only on $y$. Laplace's equation simplifies to:
   $$\frac{d^2 \phi}{dy^2} = 0$$
4. Integrate twice:
   $$\phi(y) = Ay + B$$
5. Apply the boundary conditions:
   * At $y = -1$: $\phi(-1) = -A + B = 10 \quad \text{(Eq. 1)}$.
   * At $y = 2$: $\phi(2) = 2A + B = 20 \quad \text{(Eq. 2)}$.
   Subtract Eq. 1 from Eq. 2:
   $$3A = 10 \implies A = \frac{10}{3}$$
   Substitute into Eq. 1:
   $$- \frac{10}{3} + B = 10 \implies B = \frac{40}{3}$$
6. Thus, the potential function is:
   $$\phi(x,y) = \frac{10}{3}y + \frac{40}{3}$$

**(b) Find the complex potential $\Omega(z)$:**
1. Find the harmonic conjugate $\psi(x,y)$:
   * $\psi_x = -\phi_y = -\frac{10}{3} \implies \psi(x,y) = -\frac{10}{3}x + h(y)$.
   * $\psi_y = \phi_x = 0 \implies h'(y) = 0 \implies h(y) = 0$.
   Thus:
   $$\psi(x,y) = -\frac{10}{3}x$$
2. Construct the complex potential $\Omega(z)$:
   $$\Omega(z) = \phi(x,y) + i \psi(x,y) = \left( \frac{10}{3}y + \frac{40}{3} \right) + i \left( -\frac{10}{3}x \right)$$
   $$= -\frac{10}{3}i(x + iy) + \frac{40}{3} = -\frac{10i}{3}z + \frac{40}{3}$$

**(c) Identify the curves:**
* **Equipotentials:** $\phi(x,y) = c_1 \implies y = k_1$ (horizontal lines).
* **Lines of force:** $\psi(x,y) = c_2 \implies x = k_2$ (vertical lines).

---

#### Problem 13
Find the electrostatic potential $\phi$ and complex potential $\Omega(z)$ in the infinite wedge shown in the figure below:

![Figure 3.13](../../extracted_figures/figure_3_13.png)

**Solution:**
**(a) Find the potential function $\phi(r,\theta)$:**
1. The domain $D$ is the wedge $0 < \theta < \pi/4$ in the complex plane.
2. The boundary conditions are given on the rays:
   $$\phi(r,0) = 0 \quad \text{and} \quad \phi(r,\pi/4) = 30$$
3. Since the boundary conditions depend only on the angle $\theta$, the potential function $\phi$ depends only on $\theta$. Laplace's equation in polar coordinates simplifies to:
   $$\frac{d^2 \phi}{d\theta^2} = 0$$
4. Integrate twice:
   $$\phi(\theta) = A\theta + B$$
5. Apply the boundary conditions:
   * At $\theta = 0$: $\phi(0) = B = 0$.
   * At $\theta = \pi/4$: $\phi(\pi/4) = A(\pi/4) = 30 \implies A = \frac{120}{\pi}$.
6. Thus, the potential function is:
   $$\phi(r,\theta) = \frac{120}{\pi}\theta$$

**(b) Find the complex potential $\Omega(z)$:**
1. Find the harmonic conjugate $\psi(r,\theta)$ using polar C-R equations:
   * $\psi_r = -\frac{1}{r} \phi_\theta = -\frac{120}{\pi r} \implies \psi(r,\theta) = -\frac{120}{\pi} \ln r + h(\theta)$.
   * $\psi_\theta = r \phi_r = 0 \implies h'(\theta) = 0 \implies h(\theta) = 0$.
   Thus:
   $$\psi(r,\theta) = -\frac{120}{\pi} \ln r$$
2. Construct the complex potential $\Omega(z)$:
   $$\Omega(z) = \phi(r,\theta) + i \psi(r,\theta) = \frac{120}{\pi}\theta - i\frac{120}{\pi} \ln r = -i\frac{120}{\pi}(\ln r + i\theta)$$
   Using $z = r e^{i\theta} \implies \operatorname{Ln}(z) = \ln r + i\theta$:
   $$\Omega(z) = -i\frac{120}{\pi}\operatorname{Ln}(z)$$

**(c) Identify the curves:**
* **Equipotentials:** $\phi = c_1 \implies \theta = k_1$ (radial rays from the origin).
* **Lines of force:** $\psi = c_2 \implies r = k_2$ (concentric circular arcs centered at the origin).

---

#### Problem 14
Find the temperature distribution $\phi$, complex potential $\Omega(z)$, and describe the isotherms and heat flux lines in the region between the concentric cylinders shown in the figure below:

![Figure 3.14](../../extracted_figures/figure_3_14.png)

**Solution:**
**(a) Find the temperature distribution $\phi(r)$:**
1. The domain $D$ is the region between the concentric cylinders of radii $a$ and $b$ ($a < b$).
2. The boundary conditions are constant on the cylinders:
   $$\phi(a) = k_0 \quad \text{and} \quad \phi(b) = k_1$$
3. Since the boundary conditions depend only on the radial distance $r$, the potential function $\phi$ depends only on $r$. Laplace's equation in polar coordinates simplifies to the Cauchy-Euler equation:
   $$r^2 \frac{d^2 \phi}{dr^2} + r \frac{d\phi}{dr} = 0 \implies r \phi'' + \phi' = 0$$
4. Let $u = \phi' \implies r u' + u = 0 \implies \frac{u'}{u} = -\frac{1}{r} \implies \ln u = -\ln r + C_0 \implies \phi'(r) = \frac{A}{r}$.
5. Integrate with respect to $r$:
   $$\phi(r) = A \ln r + B$$
6. Apply the boundary conditions:
   * At $r = a$: $A \ln a + B = k_0 \quad \text{(Eq. 1)}$.
   * At $r = b$: $A \ln b + B = k_1 \quad \text{(Eq. 2)}$.
   Subtract Eq. 2 from Eq. 1:
   $$A(\ln a - \ln b) = k_0 - k_1 \implies A = \frac{k_0 - k_1}{\ln(a/b)}$$
   Substitute $A$ back into Eq. 1:
   $$B = k_0 - A \ln a = k_0 - \frac{k_0 - k_1}{\ln(a/b)} \ln a = \frac{k_0\ln(a/b) - k_0\ln a + k_1\ln a}{\ln(a/b)} = \frac{-k_0\ln b + k_1\ln a}{\ln(a/b)}$$
7. Thus, the potential function is:
   $$\phi(r) = \frac{(k_0 - k_1)\ln r - k_0\ln b + k_1\ln a}{\ln(a/b)}$$

**(b) Find the complex potential $\Omega(z)$:**
1. Find the harmonic conjugate $\psi(r,\theta)$ using polar C-R equations:
   * $\psi_r = -\frac{1}{r} \phi_\theta = 0 \implies \psi(r,\theta) = h(\theta)$.
   * $\psi_\theta = r \phi_r = r\left(\frac{A}{r}\right) = A \implies \psi(r,\theta) = A\theta + C'$.
   Setting the arbitrary constant $C' = 0$:
   $$\psi(r,\theta) = A\theta$$
2. Construct the complex potential $\Omega(z)$:
   $$\Omega(z) = \phi(r,\theta) + i \psi(r,\theta) = (A \ln r + B) + i(A \theta) = A(\ln r + i\theta) + B$$
   $$= A \operatorname{Ln}(z) + B = \frac{k_0 - k_1}{\ln(a/b)} \operatorname{Ln}(z) + \frac{k_1\ln a - k_0\ln b}{\ln(a/b)}$$

**(c) Identify the curves:**
* **Isotherms (equipotentials):** $\phi = c_1 \implies r = k_1$ (concentric circles).
* **Heat flux lines (lines of force):** $\psi = c_2 \implies \theta = k_2$ (radial rays from the origin).

---

## Focus on Concepts (Problems 15 – 18)

#### Problem 15
Show that the level curve $v(x,y) = 0$ for the analytic function $f(z) = z + 1/z$ consists of the real axis (excluding the origin) and the unit circle $|z| = 1$.

**Solution:**
1. Express the imaginary part $v(x,y)$ of $f(z)$:
   $$v(x,y) = y \left( 1 - \frac{1}{x^2+y^2} \right)$$
2. Set $v(x,y) = 0$:
   $$y \left( 1 - \frac{1}{x^2+y^2} \right) = 0$$
3. This equation is satisfied if:
   * **Case 1:** $y = 0$. Since $z \ne 0$, this represents the real axis excluding the origin.
   * **Case 2:** $1 - \frac{1}{x^2+y^2} = 0 \implies x^2+y^2 = 1 \implies |z| = 1$. This represents the unit circle centered at the origin.
Thus, the level curve $v(x,y) = 0$ consists of the real axis (except the origin) and the unit circle.

---

#### Problem 16
Explain why the level curves of $u = x^2-y^2$ and $v = 2xy$ for $f(z) = z^2$ are not orthogonal at the origin $z = 0$.

**Solution:**
1. The level curves passing through the origin $z = 0$ (where $u=0$ and $v=0$) are:
   * For $u = x^2 - y^2 = 0 \implies y = \pm x$ (two diagonal lines intersecting at the origin).
   * For $v = 2xy = 0 \implies x = 0$ or $y = 0$ (the coordinate axes).
2. The angle of intersection between the lines $y = x$ and $x = 0$ is $45^\circ$. Since they do not intersect at a $90^\circ$ angle, they are not orthogonal.
3. **Explanation:**
   The conformance property (which guarantees that level curves intersect orthogonally) holds only at points where the derivative of the analytic function is nonzero. For $f(z) = z^2$, the derivative is:
   $$f'(z) = 2z \implies f'(0) = 0$$
   Since the derivative is zero at $z = 0$ (the origin is a critical point), the mapping is not conformal there, and orthogonality is not preserved.

---

#### Problem 17
Explain why the condition $f'(z_0) \ne 0$ is necessary for the orthogonality of the level curves of $u(x,y)$ and $v(x,y)$ at $z_0$.

**Solution:**
1. The slopes of the tangent lines to the level curves $u(x,y) = c_1$ and $v(x,y) = c_2$ are given by:
   $$m_1 = -\frac{u_x}{u_y} \quad \text{and} \quad m_2 = -\frac{v_x}{v_y}$$
2. If $f'(z_0) = 0$, then $u_x + i v_x = 0 \implies u_x = 0$ and $v_x = 0$.
3. By the Cauchy-Riemann equations, this also implies $v_y = 0$ and $u_y = 0$.
4. At such a point, all four first-order partial derivatives are zero, which means the slopes $m_1 = -0/0$ and $m_2 = -0/0$ are undefined.
5. In this case, the level curves may have singular points (such as cusps, nodes, or self-intersections), and the angles of intersection are not preserved. Thus, $f'(z_0) \ne 0$ is necessary to guarantee nonzero gradients and well-defined orthogonal tangent directions.

---

#### Problem 18
Are orthogonal trajectories of families of curves always defined by the real and imaginary parts of an analytic function? Show by a counterexample.

**Solution:**
**No.** Orthogonal trajectories can be defined by functions that are not analytic.
*Counterexample:* Let $f(z) = \bar{z} = x - iy$.
1. Here, $u(x,y) = x$ and $v(x,y) = -y$.
2. The level curves are:
   * $u(x,y) = c_1 \implies x = k_1$ (vertical lines).
   * $v(x,y) = c_2 \implies y = k_2$ (horizontal lines).
3. These two families of curves are orthogonal. However, the function $f(z) = \bar{z}$ is nowhere analytic (as shown in Section 3.1 Problem 21). This proves that orthogonal trajectories do not require the defining function to be analytic.

---

## Problems 21 & 22: Fluid Flows and Electrostatics

#### Problem 21
For the complex potential $\Omega(z) = A\left( z + \frac{1}{z} \right)$ with $A = 1$:
(a) Find the Cartesian potential $\phi(x,y)$ and stream function $\psi(x,y)$.
(b) Find the polar potential $\phi(r,\theta)$ and stream function $\psi(r,\theta)$.

**Solution:**
**(a) Cartesian Functions:**
1. Express $\Omega(z)$ in Cartesian coordinates:
   $$\Omega(z) = (x+iy) + \frac{x-iy}{x^2+y^2} = \left( x + \frac{x}{x^2+y^2} \right) + i \left( y - \frac{y}{x^2+y^2} \right)$$
2. Identify the real part $\phi$ and imaginary part $\psi$:
   $$\phi(x,y) = x\left(1 + \frac{1}{x^2+y^2}\right) \quad \text{and} \quad \psi(x,y) = y\left(1 - \frac{1}{x^2+y^2}\right)$$
Thus:
$$\boxed{\phi(x,y) = x\left(1 + \frac{1}{x^2+y^2}\right)}$$
$$\boxed{\psi(x,y) = y\left(1 - \frac{1}{x^2+y^2}\right)}$$

**(b) Polar Functions:**
1. Express $\Omega(z)$ in polar coordinates using $z = r e^{i\theta}$ and $1/z = r^{-1} e^{-i\theta}$:
   $$\Omega(z) = A\left( r e^{i\theta} + \frac{1}{r} e^{-i\theta} \right)$$
   $$= A \left[ r(\cos\theta + i\sin\theta) + \frac{1}{r}(\cos\theta - i\sin\theta) \right]$$
   $$= A \left( r + \frac{1}{r} \right) \cos\theta + i A \left( r - \frac{1}{r} \right) \sin\theta$$
2. Identify $\phi$ and $\psi$:
   $$\phi(r,\theta) = A\left( r + \frac{1}{r} \right) \cos\theta \quad \text{and} \quad \psi(r,\theta) = A\left( r - \frac{1}{r} \right) \sin\theta$$
Thus, for $A=1$:
$$\boxed{\phi(r,\theta) = \left( r + \frac{1}{r} \right) \cos\theta}$$
$$\boxed{\psi(r,\theta) = \left( r - \frac{1}{r} \right) \sin\theta}$$

---

#### Problem 22
Let the complex potential be:
$$\Omega(z) = \log_e \frac{z+1}{z-1} + i\operatorname{Arg} \frac{z+1}{z-1}$$
(a) Show that the equipotential curves $\phi(x,y) = c_1$ and lines of force $\psi(x,y) = c_2$ are circles.
(b) Describe the behavior of the centers of the circles as $c_1 \to \infty$, $c_1 \to -\infty$, and $c_1 \to 0$.
(c) Show that all circular lines of force pass through the points $z = 1$ and $z = -1$.

**Solution:**
**(a) Show curves are circles:**
1. **For the equipotential curves $\phi(x,y) = c_1$:**
   $$\phi(x,y) = \operatorname{Re}\Omega(z) = \ln\left| \frac{z+1}{z-1} \right| = c_1 \implies \left| \frac{z+1}{z-1} \right| = e^{c_1} = k$$
   Squaring both sides:
   $$\frac{(x+1)^2+y^2}{(x-1)^2+y^2} = k^2 \implies (x+1)^2 + y^2 = k^2[(x-1)^2 + y^2]$$
   $$x^2 + 2x + 1 + y^2 = k^2(x^2 - 2x + 1 + y^2)$$
   $$(k^2 - 1)x^2 - 2(k^2 + 1)x + (k^2 - 1)y^2 + (k^2 - 1) = 0$$
   Divide by $k^2 - 1$ (for $k \ne 1 \implies c_1 \ne 0$):
   $$x^2 - 2 \frac{k^2+1}{k^2-1} x + y^2 + 1 = 0$$
   Note that $\frac{k^2+1}{k^2-1} = \frac{e^{2c_1}+1}{e^{2c_1}-1} = \coth c_1$.
   $$x^2 - 2(\coth c_1)x + y^2 + 1 = 0$$
   Complete the square:
   $$(x - \coth c_1)^2 + y^2 = \coth^2 c_1 - 1 = \operatorname{csch}^2 c_1$$
   This is the equation of a circle of radius $|\operatorname{csch} c_1|$ centered at $(\coth c_1, 0)$.
2. **For the lines of force $\psi(x,y) = c_2$:**
   $$\psi(x,y) = \operatorname{Im}\Omega(z) = \operatorname{Arg}(z+1) - \operatorname{Arg}(z-1) = c_2$$
   Take the tangent of both sides:
   $$\tan c_2 = \tan(\operatorname{Arg}(z+1) - \operatorname{Arg}(z-1))$$
   Using the identity $\tan(A-B) = \frac{\tan A - \tan B}{1 + \tan A \tan B}$, where $\tan A = \frac{y}{x+1}$ and $\tan B = \frac{y}{x-1}$:
   $$\tan c_2 = \frac{\frac{y}{x+1} - \frac{y}{x-1}}{1 + \frac{y^2}{x^2-1}} = \frac{\frac{y(x-1) - y(x+1)}{x^2-1}}{\frac{x^2+y^2-1}{x^2-1}} = \frac{-2y}{x^2+y^2-1}$$
   Let $\cot c_2 = M$. Then:
   $$x^2+y^2-1 = -2y M \implies x^2 + y^2 + 2(\cot c_2)y - 1 = 0$$
   Complete the square:
   $$x^2 + (y + \cot c_2)^2 = 1 + \cot^2 c_2 = \csc^2 c_2$$
   This is a circle of radius $|\csc c_2|$ centered at $(0, -\cot c_2)$.

**(b) Behavior of centers of equipotential circles:**
* As $c_1 \to \infty \implies \coth c_1 \to 1$, so the centers approach $(1,0)$.
* As $c_1 \to -\infty \implies \coth c_1 \to -1$, so the centers approach $(-1,0)$.
* As $c_1 \to 0^+ \implies \coth c_1 \to \infty$, so the centers move to positive infinity on the x-axis.
* As $c_1 \to 0^- \implies \coth c_1 \to -\infty$, so the centers move to negative infinity on the x-axis.

**(c) Show circles pass through $z = \pm 1$:**
The circles representing the lines of force have the equation:
$$x^2 + (y + \cot c_2)^2 = \csc^2 c_2$$
Let's substitute the points $z = 1 \implies (1,0)$ and $z = -1 \implies (-1,0)$ into the LHS of this equation:
$$\text{LHS} = (\pm 1)^2 + (0 + \cot c_2)^2 = 1 + \cot^2 c_2$$
Using the trigonometric identity $1 + \cot^2 \theta = \csc^2 \theta$:
$$\text{LHS} = \csc^2 c_2 = \text{RHS}$$
Since the coordinates of both points satisfy the equation, all circular lines of force pass through $z = 1$ and $z = -1$.
