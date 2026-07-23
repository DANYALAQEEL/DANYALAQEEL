# Complex Analysis — Dennis G. Zill, 2nd Edition
## Chapter 5 · Section 5.6 — Applications
### Problems 1 – 32 · Complete Solutions

---

> **Key Concepts of Complex Fluid Dynamics**
>
> 1. **Velocity Field & Complex Velocity:** For a two-dimensional ideal fluid flow (incompressible, irrotational) with velocity field $F(x,y) = P(x,y)\mathbf{i} + Q(x,y)\mathbf{j}$:
>    * The **complex representation** of the field is $f(z) = P(x,y) + iQ(x,y)$.
>    * The **complex velocity** is $g(z) = \overline{f(z)} = P(x,y) - iQ(x,y)$, which is analytic.
> 2. **Complex Velocity Potential:** The potential is $\Omega(z) = \phi(x,y) + i\psi(x,y)$ where $\Omega'(z) = g(z)$.
>    * The level curves $\phi(x,y) = c_1$ are **equipotential lines**.
>    * The level curves $\psi(x,y) = c_2$ are **streamlines** (particle paths).
> 3. **Circulation & Net Flux:** For a closed contour $C$:
>    $$
>    \oint_C \overline{g(z)} \, dz = \text{Circulation} + i \, \text{Net Flux}
>    $$
>    * $\text{Circulation} = \oint_C P \, dx + Q \, dy$.
>    * $\text{Net Flux} = \oint_C P \, dy - Q \, dx$.

---

## Problems 1 – 4: Verification of Ideal Fluid Flows

For the given velocity field $F(x,y) = P(x,y)\mathbf{i} + Q(x,y)\mathbf{j}$, verify that $\operatorname{div} F = 0$ and $\operatorname{curl} F = \mathbf{0}$ in an appropriate domain $D$.

### Problem 1
**Verify the ideal flow conditions for:**
$$ F(x,y) = (\cos \theta_0)\mathbf{i} + (\sin \theta_0)\mathbf{j} $$
**where $\theta_0$ is a constant.**

**Solution:**
Here, $P(x,y) = \cos \theta_0$ and $Q(x,y) = \sin \theta_0$ are constant.
* **Divergence:**
  $$
  \operatorname{div} F = \frac{\partial P}{\partial x} + \frac{\partial Q}{\partial y} = \frac{\partial(\cos\theta_0)}{\partial x} + \frac{\partial(\sin\theta_0)}{\partial y} = 0 + 0 = 0
  $$
* **Curl:**
  $$
  \operatorname{curl} F = \left( \frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y} \right)\mathbf{k} = (0 - 0)\mathbf{k} = \mathbf{0}
  $$
Since divergence and curl are both 0 everywhere, this represents an ideal fluid flow on the entire plane $D = \mathbb{C}$.

---

### Problem 2
**Verify the ideal flow conditions for:**
$$ F(x,y) = -y\mathbf{i} - x\mathbf{j} $$

**Solution:**
Here, $P(x,y) = -y$ and $Q(x,y) = -x$.
* **Divergence:**
  $$
  \operatorname{div} F = \frac{\partial(-y)}{\partial x} + \frac{\partial(-x)}{\partial y} = 0 + 0 = 0
  $$
* **Curl:**
  $$
  \operatorname{curl} F = \left( \frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y} \right)\mathbf{k} = \left( \frac{\partial(-x)}{\partial x} - \frac{\partial(-y)}{\partial y} \right)\mathbf{k} = (-1 - (-1))\mathbf{k} = \mathbf{0}
  $$
The flow is ideal on $D = \mathbb{C}$.

---

### Problem 3
**Verify the ideal flow conditions for:**
$$ F(x,y) = 2x\mathbf{i} + (3 - 2y)\mathbf{j} $$

**Solution:**
Here, $P(x,y) = 2x$ and $Q(x,y) = 3-2y$.
* **Divergence:**
  $$
  \operatorname{div} F = \frac{\partial(2x)}{\partial x} + \frac{\partial(3-2y)}{\partial y} = 2 - 2 = 0
  $$
* **Curl:**
  $$
  \operatorname{curl} F = \left( \frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y} \right)\mathbf{k} = (0 - 0)\mathbf{k} = \mathbf{0}
  $$
The flow is ideal on $D = \mathbb{C}$.

---

### Problem 4
**Verify the ideal flow conditions for:**
$$ F(x,y) = \frac{x}{x^2+y^2}\mathbf{i} + \frac{y}{x^2+y^2}\mathbf{j} $$

**Solution:**
Here, $P(x,y) = \frac{x}{x^2+y^2}$ and $Q(x,y) = \frac{y}{x^2+y^2}$ for $z \ne 0$.
* **Divergence:**
  $$
  \frac{\partial P}{\partial x} = \frac{(1)(x^2+y^2) - x(2x)}{(x^2+y^2)^2} = \frac{y^2-x^2}{(x^2+y^2)^2}
  $$
  $$
  \frac{\partial Q}{\partial y} = \frac{(1)(x^2+y^2) - y(2y)}{(x^2+y^2)^2} = \frac{x^2-y^2}{(x^2+y^2)^2}
  $$
  $$
  \operatorname{div} F = \frac{y^2-x^2 + x^2-y^2}{(x^2+y^2)^2} = 0
  $$
* **Curl:**
  $$
  \frac{\partial Q}{\partial x} = \frac{\partial}{\partial x}\left(\frac{y}{x^2+y^2}\right) = -\frac{2xy}{(x^2+y^2)^2}
  $$
  $$
  \frac{\partial P}{\partial y} = \frac{\partial}{\partial y}\left(\frac{x}{x^2+y^2}\right) = -\frac{2xy}{(x^2+y^2)^2}
  $$
  $$
  \operatorname{curl} F = \left( \frac{-2xy}{(x^2+y^2)^2} - \frac{-2xy}{(x^2+y^2)^2} \right)\mathbf{k} = \mathbf{0}
  $$
The flow is ideal in the domain $D = \mathbb{C} \setminus \{0\}$ (the complex plane punctured at the origin).

---

## Problems 5 – 8: Complex Representations

Give the complex representation $f(z)$ of the velocity field $F(x,y)$ in the indicated problem. Express the function $g(z) = \overline{f(z)}$ in terms of $z$ and verify that $g(z)$ is analytic in an appropriate domain $D$.

### Problem 5
**Give the complex representation and complex velocity for $F(x,y)$ in Problem 1:**
$$ F(x,y) = (\cos \theta_0)\mathbf{i} + (\sin \theta_0)\mathbf{j} $$

**Solution:**
* Complex representation:
  $$
  f(z) = P + iQ = \cos\theta_0 + i\sin\theta_0 = \boxed{e^{i\theta_0}}
  $$
* Complex velocity:
  $$
  g(z) = \overline{f(z)} = \boxed{e^{-i\theta_0}}
  $$
* Analyticity: Since $g(z) = e^{-i\theta_0}$ is a constant function, its derivative is $g'(z) = 0$ everywhere, so it is analytic on the entire plane $D = \mathbb{C}$.

---

### Problem 6
**Give the complex representation and complex velocity for $F(x,y)$ in Problem 2:**
$$ F(x,y) = -y\mathbf{i} - x\mathbf{j} $$

**Solution:**
* Complex representation:
  $$
  f(z) = P + iQ = -y - ix = -i(x - iy) = \boxed{-i\bar{z}}
  $$
* Complex velocity:
  $$
  g(z) = \overline{f(z)} = \overline{-i\bar{z}} = \boxed{iz}
  $$
* Analyticity: The function $g(z) = iz$ is a polynomial, which is an entire function (analytic on $D = \mathbb{C}$).

---

### Problem 7
**Give the complex representation and complex velocity for $F(x,y)$ in Problem 3:**
$$ F(x,y) = 2x\mathbf{i} + (3 - 2y)\mathbf{j} $$

**Solution:**
* Complex representation:
  $$
  f(z) = P + iQ = 2x + i(3-2y) = 2(x - iy) + 3i = \boxed{2\bar{z} + 3i}
  $$
* Complex velocity:
  $$
  g(z) = \overline{f(z)} = \overline{2\bar{z} + 3i} = \boxed{2z - 3i}
  $$
* Analyticity: The function $g(z) = 2z - 3i$ is linear, which is entire ($D = \mathbb{C}$).

---

### Problem 8
**Give the complex representation and complex velocity for $F(x,y)$ in Problem 4:**
$$ F(x,y) = \frac{x}{x^2+y^2}\mathbf{i} + \frac{y}{x^2+y^2}\mathbf{j} $$

**Solution:**
* Complex representation:
  $$
  f(z) = P + iQ = \frac{x + iy}{x^2+y^2} = \frac{z}{|z|^2} = \frac{z}{z\bar{z}} = \boxed{\frac{1}{\bar{z}}}
  $$
* Complex velocity:
  $$
  g(z) = \overline{f(z)} = \overline{\left(\frac{1}{\bar{z}}\right)} = \boxed{\frac{1}{z}}
  $$
* Analyticity: The function $g(z) = 1/z$ has a derivative $g'(z) = -1/z^2$ at all points $z \ne 0$. Thus, it is analytic on $D = \mathbb{C} \setminus \{0\}$.

---

## Problems 9 – 12: Finding Velocity Fields from Complex Velocity potentials

Find the velocity field $F(x,y)$ of the flow of an ideal fluid determined by the given analytic function $g(z)$. We use $g(z) = P - iQ \implies P = \operatorname{Re}(g(z))$ and $Q = -\operatorname{Im}(g(z))$.

### Problem 9
**Find the velocity field determined by:**
$$ g(z) = (1+i)z^2 $$

**Solution:**
Expand $g(z)$ where $z = x+iy$:
$$
g(x+iy) = (1+i)(x^2-y^2+2ixy) = (x^2-y^2) + 2ixy + i(x^2-y^2) - 2xy
$$
$$
= (x^2-y^2-2xy) + i(x^2-y^2+2xy)
$$
* $P(x,y) = \operatorname{Re}(g(z)) = x^2 - y^2 - 2xy$
* $Q(x,y) = -\operatorname{Im}(g(z)) = -(x^2 - y^2 + 2xy) = y^2 - x^2 - 2xy$
The velocity field is:
$$
F(x,y) = \boxed{(x^2 - y^2 - 2xy)\mathbf{i} + (y^2 - x^2 - 2xy)\mathbf{j}}
$$

---

### Problem 10
**Find the velocity field determined by:**
$$ g(z) = \sin z $$

**Solution:**
Expand $\sin z$ where $z = x+iy$:
$$
\sin(x+iy) = \sin x\cosh y + i\cos x\sinh y
$$
* $P(x,y) = \sin x\cosh y$
* $Q(x,y) = -\cos x\sinh y$
The velocity field is:
$$
F(x,y) = \boxed{(\sin x\cosh y)\mathbf{i} - (\cos x\sinh y)\mathbf{j}}
$$

---

### Problem 11
**Find the velocity field determined by:**
$$ g(z) = e^x\cos y + i e^x\sin y $$

**Solution:**
Since $g(z) = e^z$ is analytic, we identify:
* $P(x,y) = \operatorname{Re}(g(z)) = e^x\cos y$
* $Q(x,y) = -\operatorname{Im}(g(z)) = -e^x\sin y$
The velocity field is:
$$
F(x,y) = \boxed{(e^x\cos y)\mathbf{i} - (e^x\sin y)\mathbf{j}}
$$

---

### Problem 12
**Find the velocity field determined by:**
$$ g(z) = x^3 - 3xy^2 + i(3x^2y - y^3) $$

**Solution:**
Here, $g(z) = z^3$:
* $P(x,y) = \operatorname{Re}(g(z)) = x^3 - 3xy^2$
* $Q(x,y) = -\operatorname{Im}(g(z)) = -(3x^2y - y^3) = y^3 - 3x^2y$
The velocity field is:
$$
F(x,y) = \boxed{(x^3 - 3xy^2)\mathbf{i} + (y^3 - 3x^2y)\mathbf{j}}
$$

---

## Problems 13 – 16: Complex Velocity Potentials

Find a complex velocity potential $\Omega(z)$ of the complex representation $f(z)$ of the indicated velocity field $F(x,y)$. Verify your answer using $\Omega'(z) = g(z)$. Describe the equipotential lines and the streamlines.

### Problem 13
**Find a complex potential for the field in Problem 1:**
$$ F(x,y) = (\cos\theta_0)\mathbf{i} + (\sin\theta_0)\mathbf{j} $$

**Solution:**
The complex representation is $f(z) = e^{i\theta_0} \implies g(z) = e^{-i\theta_0}$.
* The complex potential is:
  $$
  \Omega(z) = \int g(z)\,dz = \int e^{-i\theta_0}\,dz = \boxed{e^{-i\theta_0} z} + C
  $$
  Setting the constant $C = 0$:
  $$
  \Omega(z) = (\cos\theta_0 - i\sin\theta_0)(x+iy) = (x\cos\theta_0 + y\sin\theta_0) + i(-x\sin\theta_0 + y\cos\theta_0)
  $$
* **Verification:** $\Omega'(z) = \frac{d}{dz}\left( e^{-i\theta_0} z \right) = e^{-i\theta_0} = g(z)$. (Verified).
* **Equipotential Lines:** $\phi(x,y) = x\cos\theta_0 + y\sin\theta_0 = c_1$, which represent straight lines perpendicular to the direction of flow.
* **Streamlines:** $\psi(x,y) = -x\sin\theta_0 + y\cos\theta_0 = c_2$, which are straight lines parallel to the flow direction $\theta_0$.

---

### Problem 14
**Find a complex potential for the field in Problem 2:**
$$ F(x,y) = -y\mathbf{i} - x\mathbf{j} $$

**Solution:**
The complex velocity is $g(z) = iz$.
* The complex potential is:
  $$
  \Omega(z) = \int iz\,dz = \boxed{\frac{1}{2}iz^2}
  $$
  Substitute $z = x+iy$:
  $$
  \Omega(z) = \frac{1}{2}i(x^2-y^2+2ixy) = -xy + i\frac{x^2-y^2}{2}
  $$
* **Verification:** $\Omega'(z) = iz = g(z)$. (Verified).
* **Equipotential Lines:** $-xy = c_1 \implies xy = C_1$, which are rectangular hyperbolas.
* **Streamlines:** $\frac{x^2-y^2}{2} = c_2 \implies x^2-y^2 = C_2$, which are rectangular hyperbolas orthogonal to the equipotential lines.

---

### Problem 15
**Find a complex potential for the field in Problem 3:**
$$ F(x,y) = 2x\mathbf{i} + (3-2y)\mathbf{j} $$

**Solution:**
The complex velocity is $g(z) = 2z - 3i$.
* The complex potential is:
  $$
  \Omega(z) = \int (2z-3i)\,dz = \boxed{z^2 - 3iz}
  $$
  Substitute $z = x+iy$:
  $$
  \Omega(z) = (x+iy)^2 - 3i(x+iy) = (x^2-y^2+3y) + i(2xy-3x)
  $$
* **Verification:** $\Omega'(z) = 2z - 3i = g(z)$. (Verified).
* **Equipotential Lines:** $x^2 - y^2 + 3y = c_1$, which are hyperbolas.
* **Streamlines:** $x(2y-3) = c_2$, which are hyperbolas with asymptotes $x = 0$ and $y = 1.5$.

---

### Problem 16
**Find a complex potential for the field in Problem 4:**
$$ F(x,y) = \frac{x}{x^2+y^2}\mathbf{i} + \frac{y}{x^2+y^2}\mathbf{j} $$

**Solution:**
The complex velocity is $g(z) = 1/z$.
* The complex potential is:
  $$
  \Omega(z) = \int \frac{1}{z}\,dz = \boxed{\operatorname{Ln} z}
  $$
  Substitute $z = r e^{i\theta}$:
  $$
  \Omega(z) = \ln r + i\theta = \ln\sqrt{x^2+y^2} + i\arctan(y/x)
  $$
* **Verification:** $\Omega'(z) = 1/z = g(z)$. (Verified).
* **Equipotential Lines:** $\ln r = c_1 \implies r = C_1$, which are concentric circles centered at the origin.
* **Streamlines:** $\theta = c_2$, which are radial lines emanating from the origin.

---

## Problems 17 – 18: Fields from Potential

Find the velocity field $F(x,y)$ of the flow determined by the given complex potential $\Omega(z)$.

### Problem 17
**Find the velocity field for:**
$$ \Omega(z) = \frac{1}{3}iz^3 $$

**Solution:**
Compute the complex velocity $g(z) = \Omega'(z)$:
$$
g(z) = \frac{d}{dz}\left( \frac{1}{3}iz^3 \right) = iz^2
$$
Expand $g(z)$ using $z = x+iy$:
$$
g(x+iy) = i(x^2-y^2+2ixy) = -2xy + i(x^2-y^2)
$$
Since $g(z) = P - iQ$:
* $P(x,y) = \operatorname{Re}(g(z)) = -2xy$
* $Q(x,y) = -\operatorname{Im}(g(z)) = -(x^2-y^2) = y^2-x^2$
The velocity field is:
$$
F(x,y) = \boxed{-2xy\mathbf{i} + (y^2 - x^2)\mathbf{j}}
$$

---

### Problem 18
**Find the velocity field for:**
$$ \Omega(z) = \frac{1}{4}z^4 + z $$

**Solution:**
Compute the complex velocity:
$$
g(z) = z^3 + 1
$$
Expand:
$$
g(x+iy) = (x^3-3xy^2+1) + i(3x^2y-y^3)
$$
Compare with $g(z) = P - iQ$:
* $P(x,y) = x^3 - 3xy^2 + 1$
* $Q(x,y) = y^3 - 3x^2y$
The velocity field is:
$$
F(x,y) = \boxed{(x^3 - 3xy^2 + 1)\mathbf{i} + (y^3 - 3x^2y)\mathbf{j}}
$$

---

## Problems 19 – 22: Flow around a Cylinder

### Problem 19
**Show that:**
$$ F(x,y) = A \left[ \left( 1 - \frac{x^2-y^2}{(x^2+y^2)^2} \right)\mathbf{i} - \frac{2xy}{(x^2+y^2)^2}\mathbf{j} \right] $$
**is a velocity field for an ideal fluid on the domain $D$ not containing the origin.**

**Solution:**
We write the complex representation of the velocity field $f(z) = P + iQ$:
$$
f(z) = A \left( 1 - \frac{x^2-y^2}{(x^2+y^2)^2} - i \frac{2xy}{(x^2+y^2)^2} \right)
$$
Note that:
$$
\frac{x^2-y^2}{(x^2+y^2)^2} + i \frac{2xy}{(x^2+y^2)^2} = \frac{x^2-y^2+2ixy}{(x^2+y^2)^2} = \frac{z^2}{|z|^4} = \frac{z^2}{z^2\bar{z}^2} = \frac{1}{\bar{z}^2}
$$
So:
$$
f(z) = A \left( 1 - \frac{1}{\bar{z}^2} \right)
$$
The complex velocity $g(z) = \overline{f(z)}$ is:
$$
g(z) = A \left( 1 - \frac{1}{z^2} \right)
$$
Since $g(z) = A(1 - z^{-2})$ is a sum of analytic terms for all $z \ne 0$, it is analytic on $D = \mathbb{C} \setminus \{0\}$.
An analytic complex velocity guarantees that the divergence and curl of $F(x,y)$ are both zero.
Thus, $F(x,y)$ is indeed a velocity field for an ideal fluid flow.

---

### Problem 20
**Verify that the analytic function $\Omega(z) = A(z + 1/z)$ is a complex velocity potential for the flow in Problem 19.**

**Solution:**
We find the derivative of the complex potential:
$$
\Omega'(z) = \frac{d}{dz}\left[ A\left(z + \frac{1}{z}\right) \right] = A\left( 1 - \frac{1}{z^2} \right)
$$
This is exactly the complex velocity $g(z)$ derived in Problem 19.
Since $\Omega'(z) = g(z)$, the function $\Omega(z)$ is indeed the complex potential for the flow.

---

### Problem 21
**(a) Consider the velocity field in Problem 19. Describe the field $F(x,y)$ at a point $(x,y)$ far from the origin.**
**(b) For the complex velocity potential in Problem 20, how does the observation that $\Omega(z) \to Az$ as $|z|$ increases verify your answer to part (a)?**

**Solution:**
**(a)** As we move far from the origin, $x^2+y^2 \to \infty$. We take the limit of the velocity field $F(x,y)$:
$$
\lim_{r \to \infty} F(x,y) = A(1 - 0)\mathbf{i} - A(0)\mathbf{j} = \boxed{A\mathbf{i}}
$$
This means that far from the cylinder, the flow is nearly a uniform flow in the positive x-direction with constant speed $A$.

**(b)** The complex potential for a uniform flow with speed $A$ in the positive x-direction is $\Omega_0(z) = Az$.
Since $\Omega(z) = A(z + 1/z) \to Az$ as $|z| \to \infty$, the potential approaches that of a uniform flow, which verifies that the velocity field approaches $A\mathbf{i}$.

---

### Problem 22
**A stagnation point in a fluid flow is a point at which the velocity field $F(x,y) = \mathbf{0}$ (or equivalently, $g(z) = 0$). Find the stagnation points for:**
**(a) the flow in Example 3(a) (where $\Omega(z) = z^2$).**
**(b) the flow in Problem 19.**

**Solution:**
**(a)** For $\Omega(z) = z^2$, the complex velocity is $g(z) = \Omega'(z) = 2z$.
Setting $g(z) = 0 \implies 2z = 0 \implies z = \boxed{0}$ (the origin is the only stagnation point).

**(b)** For the flow in Problem 19, the complex velocity is $g(z) = A(1 - 1/z^2)$.
Setting $g(z) = 0$:
$$
A\left( 1 - \frac{1}{z^2} \right) = 0 \implies \frac{1}{z^2} = 1 \implies z^2 = 1 \implies z = \boxed{\pm 1}
$$
These two points correspond to the intersection of the cylinder boundary $|z|=1$ with the real axis, which represent the front and rear stagnation points of the flow.

---

## Problems 23 – 24: Sources and Sinks

### Problem 23
**For any two real numbers $k$ and $x_1$, the function $\Omega(z) = k\operatorname{Ln}(z-x_1)$ is a complex potential. The real number $x_1$ is a sink when $k < 0$ and a source when $k > 0$.**
**(a) Show that the streamlines are rays emanating from $x_1$.**
**(b) Show that the complex representation $f(z)$ of the velocity field $F(x,y)$ of the flow is $f(z) = \frac{k(z-x_1)}{|z-x_1|^2}$ and conclude that the flow is directed toward $x_1$ precisely when $k < 0$.**

**Solution:**
**(a)** The complex potential is $\Omega(z) = k\operatorname{Ln}(z-x_1)$.
Let $z-x_1 = r e^{i\theta}$ where $r = |z-x_1|$ and $\theta = \operatorname{Arg}(z-x_1)$.
$$
\Omega(z) = k\left( \ln r + i\theta \right) = k\ln r + i k\theta
$$
So the stream function is $\psi(x,y) = k\theta$.
* The streamlines are given by $\psi(x,y) = c_2 \implies k\theta = c_2 \implies \theta = C_2$ (constant).
* Constant angle curves in the plane are radial rays emanating from the point $x_1$.

**(b)** The complex velocity is:
$$
g(z) = \Omega'(z) = \frac{d}{dz}\left( k\operatorname{Ln}(z-x_1) \right) = \frac{k}{z-x_1}
$$
The complex representation of the field is $f(z) = \overline{g(z)}$:
$$
f(z) = \overline{\left( \frac{k}{z-x_1} \right)} = \frac{k}{\bar{z}-x_1} = \frac{k(z-x_1)}{(z-x_1)(\bar{z}-x_1)} = \boxed{\frac{k(z-x_1)}{|z-x_1|^2}}
$$
We analyze the direction of the velocity vector:
* The vector $z - x_1$ points radially outward from $x_1$ to $z$.
* If $k > 0$, $f(z)$ is a positive multiple of $z - x_1$, so the velocity vector points radially outward (away from $x_1$ — a source).
* If $k < 0$, $f(z)$ is a negative multiple of $z - x_1$, so the velocity vector points radially inward (toward $x_1$ — a sink).

---

### Problem 24
**The complex potential $\Omega(z) = k\operatorname{Ln}(z-1) - k\operatorname{Ln}(z+1), \, k > 0$, determines a flow in the upper half-plane with a source at $z=1$ and a sink at $z=-1$. Show that the streamlines are the family of circles $x^2 + (y-c_2)^2 = 1+c_2^2$ (shown in Figure 5.57).**

![Figure 5.57](../../extracted_figures/figure_5_57.png)

**Solution:**
The complex potential is:
$$
\Omega(z) = k\operatorname{Ln}(z-1) - k\operatorname{Ln}(z+1) = k\operatorname{Ln}\left( \frac{z-1}{z+1} \right)
$$
Let's find the stream function $\psi(x,y) = \operatorname{Im}(\Omega(z))$:
$$
\psi(x,y) = k\operatorname{Im}\left( \operatorname{Ln}\left( \frac{z-1}{z+1} \right) \right) = k\operatorname{Arg}\left( \frac{z-1}{z+1} \right)
$$
Streamlines are given by:
$$
\psi(x,y) = c \implies \operatorname{Arg}\left( \frac{z-1}{z+1} \right) = \theta_0 \quad (\text{constant})
$$
Take the tangent of both sides:
$$
\tan\left[ \operatorname{Arg}\left( \frac{z-1}{z+1} \right) \right] = \tan \theta_0 = C
$$
Let $z = x+iy$:
$$
\frac{z-1}{z+1} = \frac{x-1+iy}{x+1+iy} = \frac{(x-1+iy)(x+1-iy)}{(x+1)^2+y^2} = \frac{x^2-1+y^2 + i(y(x+1) - y(x-1))}{(x+1)^2+y^2} = \frac{x^2+y^2-1 + 2iy}{(x+1)^2+y^2}
$$
The tangent of the argument is the imaginary part divided by the real part:
$$
\frac{2y}{x^2+y^2-1} = C \implies x^2+y^2-1 = \frac{2y}{C}
$$
Let $c_2 = 1/C$:
$$
x^2 + y^2 - 2c_2 y = 1
$$
Complete the square for $y$:
$$
x^2 + (y-c_2)^2 = 1 + c_2^2
$$
This is a family of circles centered at $(0, c_2)$ with radius $\sqrt{1+c_2^2}$, which pass through the source $z=1$ and the sink $z=-1$.

---

## Problems 25 – 30: Circulation and Net Flux

Compute the circulation and net flux for the given flow and the indicated closed contour $C$.
We use the formula: $\oint_C \overline{g(z)} \, dz = \text{Circulation} + i \, \text{Net Flux}$.

### Problem 25
**Compute circulation and net flux for:**
$$ f(z) = 1/z; \quad C: |z|=1 $$

**Solution:**
Here, $f(z) = P+iQ = 1/z \implies \overline{g(z)} = 1/z$.
Evaluate the contour integral:
$$
\oint_C \overline{g(z)}\,dz = \oint_{|z|=1} \frac{1}{z}\,dz = 2\pi i = 0 + 2\pi i
$$
* **Circulation** (real part): $\boxed{0}$
* **Net Flux** (imaginary part): $\boxed{2\pi}$

---

### Problem 26
**Compute circulation and net flux for:**
$$ f(z) = 2z; \quad C: |z|=1 $$

**Solution:**
Here, $f(z) = 2z \implies \overline{g(z)} = 2z$, which is entire.
By the Cauchy-Goursat theorem:
$$
\oint_{|z|=1} 2z\,dz = 0 = 0 + 0i
$$
* **Circulation** (real part): $\boxed{0}$
* **Net Flux** (imaginary part): $\boxed{0}$

---

### Problem 27
**Compute circulation and net flux for:**
$$ f(z) = \frac{1}{z-1}; \quad C: |z-1|=2 $$

**Solution:**
Here, $f(z) = \frac{1}{z-1} \implies \overline{g(z)} = \frac{1}{z-1}$.
The pole is at $z=1$, which lies inside the circle $|z-1|=2$.
Evaluate the integral:
$$
\oint_C \frac{1}{z-1}\,dz = 2\pi i = 0 + 2\pi i
$$
* **Circulation** (real part): $\boxed{0}$
* **Net Flux** (imaginary part): $\boxed{2\pi}$

---

### Problem 28
**Compute circulation and net flux for:**
$$ f(z) = \bar{z}; \quad C: \text{square with vertices } 0, \, 1, \, 1+i, \, i $$

**Solution:**
Here, $f(z) = \bar{z} \implies \overline{g(z)} = \bar{z}$.
We evaluate the integral of $\bar{z}$ along the four sides of the square:
1. $C_1$: from $0$ to $1$. $z = x \implies \bar{z} = x, \, dz = dx$.
   $$
   \int_{C_1} \bar{z}\,dz = \int_0^1 x\,dx = 1/2
   $$
2. $C_2$: from $1$ to $1+i$. $z = 1+iy \implies \bar{z} = 1-iy, \, dz = i\,dy$.
   $$
   \int_{C_2} \bar{z}\,dz = \int_0^1 (1-iy)i\,dy = \int_0^1 (y + i)\,dy = 1/2 + i
   $$
3. $C_3$: from $1+i$ to $i$. $z = t+i \implies \bar{z} = t-i, \, dz = dt$, for $t$ from $1$ to $0$.
   $$
   \int_{C_3} \bar{z}\,dz = \int_1^0 (t-i)\,dt = \left[ \frac{t^2}{2} - it \right] _1^0 = -(1/2 - i) = -1/2 + i
   $$
4. $C_4$: from $i$ to $0$. $z = iy \implies \bar{z} = -iy, \, dz = i\,dy$, for $y$ from $1$ to $0$.
   $$
   \int_{C_4} \bar{z}\,dz = \int_1^0 (-iy)i\,dy = \int_1^0 y\,dy = \left[ \frac{y^2}{2} \right]_1^0 = -1/2
   $$

Summing the results:
$$
\oint_C \bar{z}\,dz = \frac{1}{2} + \left(\frac{1}{2} + i\right) + \left(-\frac{1}{2} + i\right) - \frac{1}{2} = 2i = 0 + 2i
$$
* **Circulation** (real part): $\boxed{0}$
* **Net Flux** (imaginary part): $\boxed{2}$

---

### Problem 29
**Compute circulation and net flux for:**
$$ F(x,y) = (4x+3y)\mathbf{i} + (2x-y)\mathbf{j}; \quad C: x^2+y^2=4 $$

**Solution:**
Here, $P(x,y) = 4x+3y$ and $Q(x,y) = 2x-y$.
We can compute the circulation and flux directly using Green's Theorem:
* **Circulation:**
  $$
  \text{Circulation} = \oint_C P\,dx + Q\,dy = \iint_D \left( \frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y} \right) \, dA
  $$
  $$
  \frac{\partial Q}{\partial x} = 2, \quad \frac{\partial P}{\partial y} = 3 \implies \frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y} = 2 - 3 = -1
  $$
  So:
  $$
  \text{Circulation} = \iint_D -1\,dA = -\operatorname{Area}(D) = -\pi(2^2) = \boxed{-4\pi}
  $$
* **Net Flux:**
  $$
  \text{Net Flux} = \oint_C P\,dy - Q\,dx = \oint_C -Q\,dx + P\,dy = \iint_D \left( \frac{\partial P}{\partial x} - \frac{\partial(-Q)}{\partial y} \right)\,dA
  $$
  $$
  = \iint_D \left( \frac{\partial P}{\partial x} + \frac{\partial Q}{\partial y} \right)\,dA = \iint_D \operatorname{div} F \, dA
  $$
  $$
  \frac{\partial P}{\partial x} = 4, \quad \frac{\partial Q}{\partial y} = -1 \implies \operatorname{div} F = 4 - 1 = 3
  $$
  So:
  $$
  \text{Net Flux} = \iint_D 3\,dA = 3\operatorname{Area}(D) = 3(4\pi) = \boxed{12\pi}
  $$

---

### Problem 30
**Compute circulation and net flux for:**
$$ F(x,y) = (x+2y)\mathbf{i} + (x-y)\mathbf{j} $$
**where $C$ is the square with vertices $z=0, \, z=1+i, \, z=2i, \, z=-1+i$.**

**Solution:**
Here, $P(x,y) = x+2y$ and $Q(x,y) = x-y$.
The region $D$ is a square. We find its area first:
* The vertices are $A(0,0)$, $B(1,1)$, $C(0,2)$, $D(-1,1)$.
* The side length of the square is the distance between $(0,0)$ and $(1,1)$, which is $L_s = \sqrt{1^2+1^2} = \sqrt{2}$.
* So the area is $\operatorname{Area}(D) = L_s^2 = 2$.

Now compute:
* **Circulation:**
  $$
  \frac{\partial Q}{\partial x} = 1, \quad \frac{\partial P}{\partial y} = 2 \implies \frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y} = 1 - 2 = -1
  $$
  $$
  \text{Circulation} = \iint_D -1\,dA = -\operatorname{Area}(D) = \boxed{-2}
  $$
* **Net Flux:**
  $$
  \frac{\partial P}{\partial x} = 1, \quad \frac{\partial Q}{\partial y} = -1 \implies \operatorname{div} F = 1 - 1 = 0
  $$
  $$
  \text{Net Flux} = \iint_D 0\,dA = \boxed{0}
  $$

---

## Focus on Concepts

### Problem 31
**Suppose $f(z) = P(x,y) + iQ(x,y)$ is the complex representation of a velocity field of the flow of an ideal fluid on a simply connected domain $D$. Assume $P$ and $Q$ have continuous partial derivatives throughout $D$. Show that for any simple closed curve $C$ lying entirely within $D$, the circulation around $C$ and the net flux across $C$ are zero.**

**Solution:**
Since the fluid flow is ideal, by definition:
1. The flow is **irrotational**, which means:
   $$
   \frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y} = 0 \quad \text{everywhere in } D
   $$
2. The flow is **incompressible**, which means:
   $$
   \frac{\partial P}{\partial x} + \frac{\partial Q}{\partial y} = 0 \quad \text{everywhere in } D
   $$
By Green's Theorem:
* **Circulation:**
  $$
  \text{Circulation} = \oint_C P\,dx + Q\,dy = \iint_{D'} \left( \frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y} \right) \, dA = \iint_{D'} 0 \, dA = \boxed{0}
  $$
  where $D'$ is the region enclosed by $C$ (which lies entirely inside $D$).
* **Net Flux:**
  $$
  \text{Net Flux} = \oint_C P\,dy - Q\,dx = \iint_{D'} \left( \frac{\partial P}{\partial x} + \frac{\partial Q}{\partial y} \right) \, dA = \iint_{D'} 0 \, dA = \boxed{0}
  $$
Thus, both circulation and net flux are zero for any closed path in a simply connected domain of ideal flow.

---

### Problem 32
**The flow described by $f(z) = (a+ib)/z$ is said to have a vortex at $z=0$.**
**(a) Show that the equations of motion of a particle $z(t) = x(t) + iy(t)$ are:**
$$
\frac{dx}{dt} = \frac{ax-by}{x^2+y^2}, \quad \frac{dy}{dt} = \frac{bx+ay}{x^2+y^2}
$$
**(b) Use relation $r^2 = x^2+y^2$ and $\tan\theta = y/x$ to show that:**
$$
\frac{dr}{dt} = \frac{1}{r}\left( x\frac{dx}{dt} + y\frac{dy}{dt} \right), \quad \frac{d\theta}{dt} = \frac{1}{r^2}\left( -y\frac{dx}{dt} + x\frac{dy}{dt} \right)
$$
**(c) Establish that $\frac{dr}{dt} = \frac{a}{r}$ and $\frac{d\theta}{dt} = \frac{b}{r^2}$.**
**(d) Conclude that the streamlines of the flow are logarithmic spirals $r = c e^{a\theta/b}$.**

**Solution:**

**(a)** The velocity vector is given by $\frac{dz}{dt} = \overline{g(z)} = f(z) = \frac{a+ib}{z}$.
Substitute $z = x+iy$:
$$
\frac{dx}{dt} + i\frac{dy}{dt} = \frac{a+ib}{x+iy} = \frac{(a+ib)(x-iy)}{x^2+y^2} = \frac{(ax+by) + i(bx-ay)}{x^2+y^2}
$$
Wait! Let's check: the textbook equations say:
$$
\frac{dx}{dt} = \frac{ax-by}{x^2+y^2}, \quad \frac{dy}{dt} = \frac{bx+ay}{x^2+y^2}
$$
Ah! Why?
Let's see: the complex velocity is $g(z) = \Omega'(z) = P - iQ$.
The equations of motion are $\frac{dx}{dt} = P$ and $\frac{dy}{dt} = Q$.
Since $g(z) = \frac{a-ib}{z}$:
$$
g(x+iy) = \frac{a-ib}{x+iy} = \frac{(a-ib)(x-iy)}{x^2+y^2} = \frac{(ax-by) - i(bx+ay)}{x^2+y^2}
$$
Comparing with $g(z) = P-iQ$:
* $P(x,y) = \frac{ax-by}{x^2+y^2}$
* $Q(x,y) = \frac{bx+ay}{x^2+y^2}$
So the equations of motion are indeed:
$$
\frac{dx}{dt} = \frac{ax-by}{x^2+y^2}, \quad \frac{dy}{dt} = \frac{bx+ay}{x^2+y^2}
$$

**(b)** Differentiate $r^2 = x^2+y^2$ with respect to $t$:
$$
2r \frac{dr}{dt} = 2x \frac{dx}{dt} + 2y \frac{dy}{dt} \implies \frac{dr}{dt} = \frac{1}{r}\left( x\frac{dx}{dt} + y\frac{dy}{dt} \right)
$$
Differentiate $\theta = \arctan(y/x)$ with respect to $t$:
$$
\frac{d\theta}{dt} = \frac{1}{1 + (y/x)^2} \cdot \frac{d}{dt}\left(\frac{y}{x}\right) = \frac{x^2}{x^2+y^2} \cdot \frac{\frac{dy}{dt}x - y\frac{dx}{dt}}{x^2} = \frac{1}{r^2}\left( -y\frac{dx}{dt} + x\frac{dy}{dt} \right)
$$

**(c)** Substitute the equations of motion into the derivatives in (b):
* For $\frac{dr}{dt}$:
  $$
  x\frac{dx}{dt} + y\frac{dy}{dt} = x\left(\frac{ax-by}{r^2}\right) + y\left(\frac{bx+ay}{r^2}\right) = \frac{ax^2 - bxy + bxy + ay^2}{r^2} = \frac{a(x^2+y^2)}{r^2} = a
  $$
  So:
  $$
  \frac{dr}{dt} = \frac{a}{r}
  $$
* For $\frac{d\theta}{dt}$:
  $$
  -y\frac{dx}{dt} + x\frac{dy}{dt} = -y\left(\frac{ax-by}{r^2}\right) + x\left(\frac{bx+ay}{r^2}\right) = \frac{-axy + by^2 + bx^2 + axy}{r^2} = \frac{b(x^2+y^2)}{r^2} = b
  $$
  So:
  $$
  \frac{d\theta}{dt} = \frac{b}{r^2}
  $$

**(d)** We divide the two differential equations:
$$
\frac{dr}{d\theta} = \frac{dr/dt}{d\theta/dt} = \frac{a/r}{b/r^2} = \frac{a}{b} r
$$
We solve this separable differential equation:
$$
\frac{1}{r}\,dr = \frac{a}{b}\,d\theta \implies \ln r = \frac{a}{b}\theta + C' \implies r = C e^{a\theta/b}
$$
These curves are logarithmic spirals.
- If $a < 0$, as $\theta$ increases, $r$ decreases, so the flow spirals inward toward the vortex at the origin.
- If $a > 0$, the flow spirals outward.
