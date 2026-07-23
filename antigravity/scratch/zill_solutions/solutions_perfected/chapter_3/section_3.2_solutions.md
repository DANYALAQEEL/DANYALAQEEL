# Complex Analysis — Dennis G. Zill, 2nd Edition
## Chapter 3 · Section 3.2 — Cauchy-Riemann Equations
### Problems 1 – 35 · Complete Solutions

---

> **Key Concepts of the Cauchy-Riemann Equations**
>
> 1. **Cauchy-Riemann (C-R) Equations (Cartesian):** For a complex function $f(z) = u(x, y) + i v(x, y)$, if $f$ is differentiable at $z = x + iy$, then the first-order partial derivatives of $u$ and $v$ exist and satisfy:
>    $$u_x = v_y \quad \text{and} \quad u_y = -v_x$$
> 2. **Sufficient Condition for Analyticity:** If the real-valued functions $u(x,y)$ and $v(x,y)$ and their first-order partial derivatives are continuous in a domain $D$, and satisfy the C-R equations at every point in $D$, then $f(z) = u+iv$ is analytic in $D$.
> 3. **Derivative Formula:** When $f$ is differentiable, its derivative is given by:
>    $$f'(z) = u_x + i v_x = v_y - i u_y$$
> 4. **C-R Equations (Polar):** If we express $f(z) = u(r, \theta) + i v(r, \theta)$ in polar coordinates where $z = r e^{i\theta}$:
>    $$u_r = \frac{1}{r} v_\theta \quad \text{and} \quad v_r = -\frac{1}{r} u_\theta$$
>    The derivative in polar coordinates is:
>    $$f'(z) = e^{-i\theta} (u_r + i v_r)$$

---

## Problems 1 & 2: Verification of C-R Equations for Analytic Functions

**In Problems 1 and 2, the given function is analytic for all $z$. Show that the Cauchy-Riemann equations are satisfied everywhere.**

#### Problem 1
Show that $f(z) = z^3$ satisfies the Cauchy-Riemann equations everywhere.

**Solution:**
1. Express $f(z)$ in Cartesian form $u(x,y) + iv(x,y)$ by expanding $(x+iy)^3$:
   $$f(z) = (x+iy)^3 = x^3 + 3x^2(iy) + 3x(iy)^2 + (iy)^3$$
   $$= x^3 + 3ix^2y - 3xy^2 - iy^3 = (x^3 - 3xy^2) + i(3x^2y - y^3)$$
   Thus:
   $$u(x,y) = x^3 - 3xy^2 \quad \text{and} \quad v(x,y) = 3x^2y - y^3$$
2. Compute the first-order partial derivatives:
   * $u_x = \frac{\partial}{\partial x}(x^3 - 3xy^2) = 3x^2 - 3y^2$
   * $u_y = \frac{\partial}{\partial y}(x^3 - 3xy^2) = -6xy$
   * $v_x = \frac{\partial}{\partial x}(3x^2y - y^3) = 6xy$
   * $v_y = \frac{\partial}{\partial y}(3x^2y - y^3) = 3x^2 - 3y^2$
3. Verify the Cauchy-Riemann equations:
   * $u_x = 3x^2 - 3y^2$ and $v_y = 3x^2 - 3y^2 \implies u_x = v_y$ (Satisfied).
   * $u_y = -6xy$ and $-v_x = -6xy \implies u_y = -v_x$ (Satisfied).
Since the partial derivatives are continuous and C-R equations hold for all $(x,y)$, the equations are satisfied everywhere in $\mathbb{C}$.

---

#### Problem 2
Show that $f(z) = 3z^2 + 5z - 6i$ satisfies the Cauchy-Riemann equations everywhere.

**Solution:**
1. Express $f(z)$ in Cartesian form:
   $$f(z) = 3(x+iy)^2 + 5(x+iy) - 6i$$
   $$= 3(x^2 - y^2 + 2ixy) + 5x + 5iy - 6i$$
   $$= (3x^2 - 3y^2 + 5x) + i(6xy + 5y - 6)$$
   Thus:
   $$u(x,y) = 3x^2 - 3y^2 + 5x \quad \text{and} \quad v(x,y) = 6xy + 5y - 6$$
2. Compute the first-order partial derivatives:
   * $u_x = 6x + 5$
   * $u_y = -6y$
   * $v_x = 6y$
   * $v_y = 6x + 5$
3. Verify the Cauchy-Riemann equations:
   * $u_x = 6x + 5 = v_y \implies u_x = v_y$ (Satisfied).
   * $u_y = -6y = -v_x \implies u_y = -v_x$ (Satisfied).
Since the C-R equations hold for all $(x,y) \in \mathbb{R}^2$, they are satisfied everywhere in $\mathbb{C}$.

---

## Problems 3 – 8: Showing Functions are Nowhere Analytic

**In Problems 3–8, show that the given function is not analytic at any point by demonstrating that the Cauchy-Riemann equations fail to hold.**

#### Problem 3
Show that $f(z) = \operatorname{Re}(z)$ is nowhere analytic.

**Solution:**
1. Express the function in Cartesian form:
   $$f(z) = x \implies u(x,y) = x, \quad v(x,y) = 0$$
2. Compute the partial derivatives:
   * $u_x = 1$, $u_y = 0$
   * $v_x = 0$, $v_y = 0$
3. Check C-R equations:
   * $u_x = 1 \ne v_y = 0$
Since $u_x \ne v_y$ at every point in the complex plane, the C-R equations are never satisfied. Thus, $f(z) = \operatorname{Re}(z)$ is nowhere differentiable and hence nowhere analytic.

---

#### Problem 4
Show that $f(z) = y + ix$ is nowhere analytic.

**Solution:**
1. Express in Cartesian form:
   $$u(x,y) = y \quad \text{and} \quad v(x,y) = x$$
2. Compute the partial derivatives:
   * $u_x = 0$, $u_y = 1$
   * $v_x = 1$, $v_y = 0$
3. Check C-R equations:
   * $u_x = 0 = v_y$ (Satisfied).
   * $u_y = 1 \ne -v_x = -1$ (Fails).
Since $u_y \ne -v_x$ at all points, the C-R equations are never satisfied. Thus, the function is nowhere analytic.

---

#### Problem 5
Show that $f(z) = 4z - 6\bar{z} + 3$ is nowhere analytic.

**Solution:**
1. Express in Cartesian form:
   $$f(z) = 4(x+iy) - 6(x-iy) + 3 = 4x + 4iy - 6x + 6iy + 3 = (-2x + 3) + i(10y)$$
   Thus:
   $$u(x,y) = -2x+3 \quad \text{and} \quad v(x,y) = 10y$$
2. Compute the partial derivatives:
   * $u_x = -2$, $u_y = 0$
   * $v_x = 0$, $v_y = 10$
3. Check C-R equations:
   * $u_x = -2 \ne v_y = 10$
Since $u_x \ne v_y$ everywhere, the C-R equations are never satisfied. Thus, the function is nowhere analytic.

---

#### Problem 6
Show that $f(z) = \bar{z}^2$ is nowhere analytic.

**Solution:**
1. Express in Cartesian form:
   $$f(z) = (x-iy)^2 = x^2 - y^2 - 2ixy$$
   Thus:
   $$u(x,y) = x^2-y^2 \quad \text{and} \quad v(x,y) = -2xy$$
2. Compute the partial derivatives:
   * $u_x = 2x$, $u_y = -2y$
   * $v_x = -2y$, $v_y = -2x$
3. Check C-R equations:
   * $u_x = v_y \implies 2x = -2x \implies 4x = 0 \implies x = 0$.
   * $u_y = -v_x \implies -2y = -(-2y) \implies -2y = 2y \implies 4y = 0 \implies y = 0$.
4. Conclusion:
   The C-R equations are satisfied only at the isolated point $(0,0)$ (i.e. $z = 0$). For a function to be analytic at a point, it must be differentiable not only at that point but at every point in some open neighborhood around it. Since any neighborhood of $z=0$ contains points where C-R equations fail, the function is nowhere analytic.

---

#### Problem 7
Show that $f(z) = x^2 + y^2$ is nowhere analytic.

**Solution:**
1. Express in Cartesian form:
   $$u(x,y) = x^2+y^2 \quad \text{and} \quad v(x,y) = 0$$
2. Compute the partial derivatives:
   * $u_x = 2x$, $u_y = 2y$
   * $v_x = 0$, $v_y = 0$
3. Check C-R equations:
   * $u_x = v_y \implies 2x = 0 \implies x = 0$.
   * $u_y = -v_x \implies 2y = 0 \implies y = 0$.
4. Conclusion:
   Similar to Problem 6, the C-R equations are satisfied only at the isolated point $z = 0$. Since there is no open neighborhood of $z=0$ in which the function is differentiable, $f(z) = x^2+y^2$ is nowhere analytic.

---

#### Problem 8
Show that $f(z) = \frac{x}{x^2 + y^2} + i\frac{y}{x^2 + y^2}$ is nowhere analytic for $z \ne 0$.

**Solution:**
1. Identify the real and imaginary parts:
   $$u(x,y) = \frac{x}{x^2+y^2} \quad \text{and} \quad v(x,y) = \frac{y}{x^2+y^2}$$
2. Compute the partial derivatives using the quotient rule:
   * $u_x = \frac{1(x^2+y^2) - x(2x)}{(x^2+y^2)^2} = \frac{y^2-x^2}{(x^2+y^2)^2}$
   * $u_y = \frac{0(x^2+y^2) - x(2y)}{(x^2+y^2)^2} = -\frac{2xy}{(x^2+y^2)^2}$
   * $v_x = \frac{0(x^2+y^2) - y(2x)}{(x^2+y^2)^2} = -\frac{2xy}{(x^2+y^2)^2}$
   * $v_y = \frac{1(x^2+y^2) - y(2y)}{(x^2+y^2)^2} = \frac{x^2-y^2}{(x^2+y^2)^2}$
3. Check C-R equations:
   * $u_x = v_y \implies \frac{y^2-x^2}{(x^2+y^2)^2} = \frac{x^2-y^2}{(x^2+y^2)^2} \implies y^2 - x^2 = x^2 - y^2 \implies 2x^2 = 2y^2 \implies x^2 = y^2$.
   * $u_y = -v_x \implies -\frac{2xy}{(x^2+y^2)^2} = -\left( -\frac{2xy}{(x^2+y^2)^2} \right) \implies -2xy = 2xy \implies 4xy = 0 \implies x=0 \text{ or } y=0$.
4. Combine these conditions:
   * If $x = 0$, then $x^2 = y^2 \implies y = 0 \implies z = 0$.
   * If $y = 0$, then $x^2 = y^2 \implies x = 0 \implies z = 0$.
However, the point $z = 0$ is excluded from the domain of the function. Therefore, there are no points in the domain where the C-R equations are satisfied. The function is nowhere analytic.

---

## Problems 9 – 16: Domains of Analyticity

**In Problems 9–16, use Theorem 3.5 to show that the given function is analytic in an appropriate domain, and find its domain of analyticity.**

#### Problem 9
Show that $f(z) = e^{-x}\cos y - i e^{-x}\sin y$ is analytic, and find its domain of analyticity.

**Solution:**
1. Express in Cartesian form:
   $$u(x,y) = e^{-x}\cos y \quad \text{and} \quad v(x,y) = -e^{-x}\sin y$$
2. Compute the first-order partial derivatives:
   * $u_x = -e^{-x}\cos y$
   * $u_y = -e^{-x}\sin y$
   * $v_x = e^{-x}\sin y$
   * $v_y = -e^{-x}\cos y$
3. Verify C-R equations:
   * $u_x = -e^{-x}\cos y = v_y \implies u_x = v_y$ (Satisfied).
   * $u_y = -e^{-x}\sin y = -v_x \implies u_y = -v_x$ (Satisfied).
4. Analyze continuity:
   Since exponential, sine, and cosine functions are continuous everywhere in $\mathbb{R}^2$, the partial derivatives are continuous everywhere.
5. Conclusion:
   By Theorem 3.5, the function is analytic everywhere. The domain of analyticity is the entire complex plane:
   $$\boxed{\mathbb{C}} \quad \text{(the function is entire)}$$
   *(Note: The function is equivalent to $f(z) = e^{-z}$.)*

---

#### Problem 10
Show that $f(z) = x + \sin x \cosh y + i(y + \cos x \sinh y)$ is analytic, and find its domain of analyticity.

**Solution:**
1. Express in Cartesian form:
   $$u(x,y) = x + \sin x \cosh y \quad \text{and} \quad v(x,y) = y + \cos x \sinh y$$
2. Compute the partial derivatives:
   * $u_x = 1 + \cos x \cosh y$
   * $u_y = \sin x \sinh y$
   * $v_x = -\sin x \sinh y$
   * $v_y = 1 + \cos x \cosh y$
3. Verify C-R equations:
   * $u_x = 1 + \cos x \cosh y = v_y \implies u_x = v_y$ (Satisfied).
   * $u_y = \sin x \sinh y = -v_x \implies u_y = -v_x$ (Satisfied).
4. Analyze continuity:
   All partial derivatives are composed of sums and products of polynomials, trigonometric, and hyperbolic functions, which are continuous everywhere.
5. Conclusion:
   The domain of analyticity is the entire complex plane:
   $$\boxed{\mathbb{C}} \quad \text{(the function is entire)}$$
   *(Note: The function is equivalent to $f(z) = z + \sin z$.)*

---

#### Problem 11
Show that $f(z) = e^{x^2-y^2}\cos(2xy) + ie^{x^2-y^2}\sin(2xy)$ is analytic, and find its domain of analyticity.

**Solution:**
1. Express in Cartesian form:
   $$u(x,y) = e^{x^2-y^2}\cos(2xy) \quad \text{and} \quad v(x,y) = e^{x^2-y^2}\sin(2xy)$$
2. Compute the partial derivatives using the product and chain rules:
   * $u_x = 2x e^{x^2-y^2}\cos(2xy) - 2y e^{x^2-y^2}\sin(2xy)$
   * $u_y = -2y e^{x^2-y^2}\cos(2xy) - 2x e^{x^2-y^2}\sin(2xy)$
   * $v_x = 2x e^{x^2-y^2}\sin(2xy) + 2y e^{x^2-y^2}\cos(2xy)$
   * $v_y = -2y e^{x^2-y^2}\sin(2xy) + 2x e^{x^2-y^2}\cos(2xy)$
3. Verify C-R equations:
   * Compare $u_x$ and $v_y$:
     $$u_x = 2x e^{x^2-y^2}\cos(2xy) - 2y e^{x^2-y^2}\sin(2xy) = v_y \implies u_x = v_y \quad \text{(Satisfied)}$$
   * Compare $u_y$ and $-v_x$:
     $$-v_x = -2y e^{x^2-y^2}\cos(2xy) - 2x e^{x^2-y^2}\sin(2xy) = u_y \implies u_y = -v_x \quad \text{(Satisfied)}$$
4. Analyze continuity:
   The partial derivatives are products of exponential, trigonometric, and polynomial functions, which are continuous everywhere.
5. Conclusion:
   The domain of analyticity is the entire complex plane:
   $$\boxed{\mathbb{C}} \quad \text{(the function is entire)}$$
   *(Note: The function is equivalent to $f(z) = e^{z^2}$.)*

---

#### Problem 12
Show that $f(z) = 4x^2 + 5x - 4y^2 + 9 + i(8xy + 5y - 1)$ is analytic, and find its domain of analyticity.

**Solution:**
1. Express in Cartesian form:
   $$u(x,y) = 4x^2 + 5x - 4y^2 + 9 \quad \text{and} \quad v(x,y) = 8xy + 5y - 1$$
2. Compute the partial derivatives:
   * $u_x = 8x + 5$
   * $u_y = -8y$
   * $v_x = 8y$
   * $v_y = 8x + 5$
3. Verify C-R equations:
   * $u_x = 8x + 5 = v_y \implies u_x = v_y$ (Satisfied).
   * $u_y = -8y = -v_x \implies u_y = -v_x$ (Satisfied).
4. Analyze continuity:
   The partial derivatives are polynomials (linear functions of $x$ and $y$), which are continuous everywhere.
5. Conclusion:
   The domain of analyticity is the entire complex plane:
   $$\boxed{\mathbb{C}} \quad \text{(the function is entire)}$$
   *(Note: The function is equivalent to $f(z) = 4z^2 + 5z + 9 - i$.)*

---

#### Problem 13
Show that $f(z) = \frac{x-1}{(x-1)^2+y^2} - i\frac{y}{(x-1)^2+y^2}$ is analytic in an appropriate domain, and find this domain.

**Solution:**
1. Express in Cartesian form:
   $$u(x,y) = \frac{x-1}{(x-1)^2+y^2} \quad \text{and} \quad v(x,y) = \frac{-y}{(x-1)^2+y^2}$$
2. Let $X = x-1$. Then the functions are:
   $$u = \frac{X}{X^2+y^2} \quad \text{and} \quad v = \frac{-y}{X^2+y^2}$$
3. Compute the partial derivatives with respect to $x$ (using $X_x = 1$) and $y$:
   * $u_x = u_X X_x = \frac{1(X^2+y^2) - X(2X)}{(X^2+y^2)^2} = \frac{y^2-X^2}{(X^2+y^2)^2} = \frac{y^2-(x-1)^2}{((x-1)^2+y^2)^2}$
   * $u_y = \frac{-2Xy}{(X^2+y^2)^2} = -\frac{2(x-1)y}{((x-1)^2+y^2)^2}$
   * $v_x = v_X X_x = -y \left( -\frac{2X}{(X^2+y^2)^2} \right) = \frac{2Xy}{(X^2+y^2)^2} = \frac{2(x-1)y}{((x-1)^2+y^2)^2}$
   * $v_y = \frac{-1(X^2+y^2) - (-y)(2y)}{(X^2+y^2)^2} = \frac{y^2-X^2}{(X^2+y^2)^2} = \frac{y^2-(x-1)^2}{((x-1)^2+y^2)^2}$
4. Verify C-R equations:
   * $u_x = \frac{y^2-(x-1)^2}{((x-1)^2+y^2)^2} = v_y \implies u_x = v_y$ (Satisfied).
   * $u_y = -\frac{2(x-1)y}{((x-1)^2+y^2)^2} = -v_x \implies u_y = -v_x$ (Satisfied).
5. Analyze continuity:
   The partial derivatives are rational functions. They are continuous everywhere except where their denominators are zero:
   $$(x-1)^2+y^2 = 0 \implies x-1=0 \text{ and } y=0 \implies z = 1$$
6. Conclusion:
   By Theorem 3.5, the function is analytic everywhere except at the singular point $z = 1$:
   $$\boxed{z \ne 1} \quad \text{or} \quad \mathbb{C} \setminus \{1\}$$
   *(Note: The function is equivalent to $f(z) = \frac{1}{z-1}$.)*

---

#### Problem 14
Analyze the function $f(z) = x^3 + xy^2 + \frac{x}{x^2+y^2} + i\left( x^2y + y^3 - \frac{y}{x^2+y^2} \right)$ for analyticity.

**Solution:**
**Part 1: Analysis of the function as printed in the textbook**
1. Identify the real and imaginary parts:
   $$u(x,y) = x^3 + xy^2 + \frac{x}{x^2+y^2} \quad \text{and} \quad v(x,y) = x^2y + y^3 - \frac{y}{x^2+y^2}$$
2. Compute the partial derivatives:
   * $u_x = 3x^2 + y^2 + \frac{y^2-x^2}{(x^2+y^2)^2}$
   * $v_y = x^2 + 3y^2 + \frac{y^2-x^2}{(x^2+y^2)^2}$
3. Check the first C-R equation $u_x = v_y$:
   $$3x^2 + y^2 + \frac{y^2-x^2}{(x^2+y^2)^2} = x^2 + 3y^2 + \frac{y^2-x^2}{(x^2+y^2)^2} \implies 2x^2 = 2y^2 \implies x^2 = y^2$$
4. Compute the remaining partial derivatives:
   * $u_y = 2xy - \frac{2xy}{(x^2+y^2)^2}$
   * $v_x = 2xy + \frac{2xy}{(x^2+y^2)^2}$
5. Check the second C-R equation $u_y = -v_x$:
   $$2xy - \frac{2xy}{(x^2+y^2)^2} = -\left( 2xy + \frac{2xy}{(x^2+y^2)^2} \right) \implies 4xy = 0 \implies x=0 \text{ or } y=0$$
6. Combine the conditions:
   * For both C-R equations to hold, we must have $x^2 = y^2$ and ($x=0$ or $y=0$).
   * This is satisfied only at $x=0$ and $y=0$, which means $z = 0$.
   * However, at $z = 0$, the function is undefined.
Therefore, the function as printed in the textbook is **nowhere analytic**.

**Part 2: Corrected function analysis**
If we correct the function to $f(z) = z^3 + \frac{1}{z}$, we have:
$$f(z) = (x+iy)^3 + \frac{x-iy}{x^2+y^2} = \left( x^3 - 3xy^2 + \frac{x}{x^2+y^2} \right) + i \left( 3x^2y - y^3 - \frac{y}{x^2+y^2} \right)$$
Under this correction:
1. Identify the corrected real and imaginary parts:
   $$u(x,y) = x^3 - 3xy^2 + \frac{x}{x^2+y^2} \quad \text{and} \quad v(x,y) = 3x^2y - y^3 - \frac{y}{x^2+y^2}$$
2. Compute the partial derivatives:
   * $u_x = 3x^2 - 3y^2 + \frac{y^2-x^2}{(x^2+y^2)^2}$
   * $u_y = -6xy - \frac{2xy}{(x^2+y^2)^2}$
   * $v_x = 6xy - \frac{-2xy}{(x^2+y^2)^2} = 6xy + \frac{2xy}{(x^2+y^2)^2}$
   * $v_y = 3x^2 - 3y^2 - \frac{x^2-y^2}{(x^2+y^2)^2} = 3x^2 - 3y^2 + \frac{y^2-x^2}{(x^2+y^2)^2}$
3. Verify the C-R equations:
   * $u_x = v_y$ is satisfied everywhere (except at $z=0$).
   * $u_y = -v_x$ is satisfied everywhere (except at $z=0$).
4. Conclusion:
   With this correction, the function is analytic everywhere except the origin:
   $$\boxed{z \ne 0} \quad \text{or} \quad \mathbb{C} \setminus \{0\}$$

---

#### Problem 15
Show that $f(z) = \frac{\cos\theta}{r} - i\frac{\sin\theta}{r}$ is analytic in an appropriate domain, and find this domain.

**Solution:**
We use polar coordinates. The C-R equations in polar coordinates are:
$$u_r = \frac{1}{r} v_\theta \quad \text{and} \quad v_r = -\frac{1}{r} u_\theta$$
1. Identify the real and imaginary parts:
   $$u(r,\theta) = \frac{\cos\theta}{r} \quad \text{and} \quad v(r,\theta) = -\frac{\sin\theta}{r}$$
2. Compute the first-order partial derivatives:
   * $u_r = -\frac{\cos\theta}{r^2}$
   * $u_\theta = -\frac{\sin\theta}{r}$
   * $v_r = \frac{\sin\theta}{r^2}$
   * $v_\theta = -\frac{\cos\theta}{r}$
3. Verify C-R polar equations:
   * Compare $u_r$ and $\frac{1}{r} v_\theta$:
     $$u_r = -\frac{\cos\theta}{r^2} \quad \text{and} \quad \frac{1}{r} v_\theta = \frac{1}{r}\left( -\frac{\cos\theta}{r} \right) = -\frac{\cos\theta}{r^2} \implies u_r = \frac{1}{r} v_\theta \quad \text{(Satisfied)}$$
   * Compare $v_r$ and $-\frac{1}{r} u_\theta$:
     $$v_r = \frac{\sin\theta}{r^2} \quad \text{and} \quad -\frac{1}{r} u_\theta = -\frac{1}{r}\left( -\frac{\sin\theta}{r} \right) = \frac{\sin\theta}{r^2} \implies v_r = -\frac{1}{r} u_\theta \quad \text{(Satisfied)}$$
4. Analyze continuity:
   The partial derivatives are continuous for all $r > 0$ and all $\theta$.
5. Conclusion:
   By Theorem 3.5, the function is analytic everywhere except at the origin $r = 0$:
   $$\boxed{r > 0} \quad \text{or} \quad z \ne 0$$
   *(Note: The function is equivalent to $f(z) = \frac{1}{z}$.)*

---

#### Problem 16
Show that $f(z) = 5r\cos\theta + r^4\cos 4\theta + i(5r\sin\theta + r^4\sin 4\theta)$ is analytic, and find its domain of analyticity.

**Solution:**
We use polar coordinates:
1. Identify the real and imaginary parts:
   $$u(r,\theta) = 5r\cos\theta + r^4\cos 4\theta \quad \text{and} \quad v(r,\theta) = 5r\sin\theta + r^4\sin 4\theta$$
2. Compute the first-order partial derivatives:
   * $u_r = 5\cos\theta + 4r^3\cos 4\theta$
   * $u_\theta = -5r\sin\theta - 4r^4\sin 4\theta$
   * $v_r = 5\sin\theta + 4r^3\sin 4\theta$
   * $v_\theta = 5r\cos\theta + 4r^4\cos 4\theta$
3. Verify C-R polar equations:
   * Compare $u_r$ and $\frac{1}{r}v_\theta$:
     $$\frac{1}{r}v_\theta = \frac{1}{r}(5r\cos\theta + 4r^4\cos 4\theta) = 5\cos\theta + 4r^3\cos 4\theta = u_r \quad \text{(Satisfied)}$$
   * Compare $v_r$ and $-\frac{1}{r}u_\theta$:
     $$-\frac{1}{r}u_\theta = -\frac{1}{r}(-5r\sin\theta - 4r^4\sin 4\theta) = 5\sin\theta + 4r^3\sin 4\theta = v_r \quad \text{(Satisfied)}$$
4. Analyze continuity:
   The partial derivatives are continuous everywhere.
5. Conclusion:
   The domain of analyticity is the entire complex plane:
   $$\boxed{\mathbb{C}} \quad \text{(the function is entire)}$$
   *(Note: The function is equivalent to $f(z) = 5z + z^4$.)*

---

## Problems 17 & 18: Determining Constants for Analyticity

**In Problems 17 and 18, find real constants $a$, $b$, $c$, and $d$ so that the given function $f$ is analytic.**

#### Problem 17
Find the constants $a$ and $b$ such that $f(z) = 3x - y + 5 + i(ax + by - 3)$ is analytic everywhere.

**Solution:**
For $f$ to be analytic, it must satisfy the C-R equations:
1. Identify the real and imaginary parts:
   $$u(x,y) = 3x-y+5 \quad \text{and} \quad v(x,y) = ax+by-3$$
2. Compute the partial derivatives:
   * $u_x = 3, \quad u_y = -1$
   * $v_x = a, \quad v_y = b$
3. Apply the C-R equations:
   * $u_x = v_y \implies 3 = b \implies b = 3$
   * $u_y = -v_x \implies -1 = -a \implies a = 1$
Thus, the constants are:
$$\boxed{a = 1, \quad b = 3}$$

---

#### Problem 18
Find the constants $a$, $b$, $c$, and $d$ such that $f(z) = x^2 + axy + by^2 + i(cx^2 + dxy + y^2)$ is analytic everywhere.

**Solution:**
For $f$ to be analytic, it must satisfy the C-R equations:
1. Identify the real and imaginary parts:
   $$u(x,y) = x^2 + axy + by^2 \quad \text{and} \quad v(x,y) = cx^2 + dxy + y^2$$
2. Compute the partial derivatives:
   * $u_x = 2x + ay$
   * $u_y = ax + 2by$
   * $v_x = 2cx + dy$
   * $v_y = dx + 2y$
3. Apply C-R equations:
   * **First equation:** $u_x = v_y$:
     $$2x + ay = dx + 2y$$
     For this to hold for all $x$ and $y$, the coefficients of $x$ and $y$ on both sides must match:
     $$d = 2 \quad \text{and} \quad a = 2$$
   * **Second equation:** $u_y = -v_x$:
     $$ax + 2by = -(2cx + dy) \implies ax + 2by = -2cx - dy$$
     Substitute the values $a = 2$ and $d = 2$:
     $$2x + 2by = -2cx - 2y$$
     Equate the coefficients of $x$ and $y$:
     $$2 = -2c \implies c = -1$$
     $$2b = -2 \implies b = -1$$
Thus, the constants are:
$$\boxed{a = 2, \quad b = -1, \quad c = -1, \quad d = 2}$$

---

## Problems 19 – 22: Differentiable along Curves

**In Problems 19–22, show that the given function is not analytic at any point but is differentiable along the indicated curve.**

#### Problem 19
Show that $f(z) = x^2 + y^2 + 2ixy$ is nowhere analytic but is differentiable along the x-axis ($y = 0$).

**Solution:**
1. Identify the real and imaginary parts:
   $$u(x,y) = x^2+y^2 \quad \text{and} \quad v(x,y) = 2xy$$
2. Compute the partial derivatives:
   * $u_x = 2x, \quad u_y = 2y$
   * $v_x = 2y, \quad v_y = 2x$
3. Apply C-R equations:
   * $u_x = v_y \implies 2x = 2x$ (Always satisfied).
   * $u_y = -v_x \implies 2y = -2y \implies 4y = 0 \implies y = 0$.
4. Conclusion:
   * The C-R equations hold if and only if $y = 0$ (the real axis/x-axis).
   * Since the C-R equations are satisfied only on the line $y = 0$, there is no open neighborhood of any point in the complex plane where they hold. Thus, the function is nowhere analytic.
   * However, because the partial derivatives are continuous, the function is differentiable at every point on the line $y=0$ (the x-axis).

---

#### Problem 20
Show that $f(z) = 3x^2y^2 - 6ix^2y^2$ is nowhere analytic but is differentiable along the coordinate axes.

**Solution:**
1. Identify the real and imaginary parts:
   $$u(x,y) = 3x^2y^2 \quad \text{and} \quad v(x,y) = -6x^2y^2$$
2. Compute the partial derivatives:
   * $u_x = 6xy^2, \quad u_y = 6x^2y$
   * $v_x = -12xy^2, \quad v_y = -12x^2y$
3. Apply C-R equations:
   * **First equation:** $u_x = v_y$:
     $$6xy^2 = -12x^2y \implies 6xy^2 + 12x^2y = 0 \implies 6xy(y + 2x) = 0$$
     This holds if $x=0$, $y=0$, or $y = -2x$.
   * **Second equation:** $u_y = -v_x$:
     $$6x^2y = -(-12xy^2) = 12xy^2 \implies 6x^2y - 12xy^2 = 0 \implies 6xy(x - 2y) = 0$$
     This holds if $x=0$, $y=0$, or $x = 2y$.
4. Determine the intersection of the conditions:
   * If $x = 0$, both equations are satisfied since $0 = 0$.
   * If $y = 0$, both equations are satisfied.
   * If $x \ne 0$ and $y \ne 0$, we must have $y = -2x$ and $x = 2y \implies x = 2(-2x) = -4x \implies 5x = 0$, which contradicts $x \ne 0$.
5. Conclusion:
   * The C-R equations hold if and only if $x = 0$ (the y-axis) or $y = 0$ (the x-axis).
   * Since they hold only on the coordinate axes (which contain no open neighborhoods), the function is nowhere analytic.
   * However, since the partial derivatives are continuous, the function is differentiable at all points on the coordinate axes.

---

#### Problem 21
Show that $f(z) = x^3 + 3xy^2 - x + i(y^3 + 3x^2y - y)$ is nowhere analytic but is differentiable along the coordinate axes.

**Solution:**
1. Identify the real and imaginary parts:
   $$u(x,y) = x^3 + 3xy^2 - x \quad \text{and} \quad v(x,y) = y^3 + 3x^2y - y$$
2. Compute the partial derivatives:
   * $u_x = 3x^2 + 3y^2 - 1$
   * $u_y = 6xy$
   * $v_x = 6xy$
   * $v_y = 3y^2 + 3x^2 - 1$
3. Apply C-R equations:
   * **First equation:** $u_x = v_y \implies 3x^2 + 3y^2 - 1 = 3x^2 + 3y^2 - 1$ (Always satisfied).
   * **Second equation:** $u_y = -v_x \implies 6xy = -6xy \implies 12xy = 0 \implies x = 0 \text{ or } y = 0$.
4. Conclusion:
   The C-R equations hold if and only if $x = 0$ (y-axis) or $y = 0$ (x-axis). Thus, the function is nowhere analytic but is differentiable along the coordinate axes.

---

#### Problem 22
Show that $f(z) = x^2 - x + y^2 + i(y - 2xy)$ is nowhere analytic but is differentiable along a curve. Identify the curve.

**Solution:**
1. Identify the real and imaginary parts:
   $$u(x,y) = x^2 - x + y^2 \quad \text{and} \quad v(x,y) = y - 2xy$$
2. Compute the partial derivatives:
   * $u_x = 2x - 1, \quad u_y = 2y$
   * $v_x = -2y, \quad v_y = 1 - 2x$
3. Apply C-R equations:
   * **First equation:** $u_x = v_y$:
     $$2x - 1 = 1 - 2x \implies 4x = 2 \implies x = \frac{1}{2}$$
   * **Second equation:** $u_y = -v_x$:
     $$2y = -(-2y) \implies 2y = 2y \quad \text{(Always satisfied)}$$
4. Conclusion:
   * The C-R equations are satisfied along the vertical line:
     $$\boxed{x = \frac{1}{2}}$$
   * Since this curve has no interior points (it is a line), the function is nowhere analytic.
   * However, because the partial derivatives are continuous, the function is differentiable at all points on the line $x = \frac{1}{2}$.

---

## Problems 23 & 24: Derivatives using the C-R Equation Formula

**In Problems 23 and 24, use the formula $f'(z) = u_x + i v_x$ to find the derivative of the given function.**

#### Problem 23
Find the derivative of the function in Problem 9: $f(z) = e^{-x}\cos y - i e^{-x}\sin y$.

**Solution:**
From Problem 9, we have:
$$u_x = -e^{-x}\cos y \quad \text{and} \quad v_x = e^{-x}\sin y$$
Using the derivative formula:
$$f'(z) = u_x + i v_x = -e^{-x}\cos y + i e^{-x}\sin y = -e^{-x}(\cos y - i \sin y)$$
Since $e^{-z} = e^{-x}(\cos y - i \sin y)$, we can write:
$$f'(z) = -e^{-z}$$
Thus, we obtain:
$$\boxed{f'(z) = -e^{-x}\cos y + i e^{-x}\sin y = -e^{-z}}$$

---

#### Problem 24
Find the derivative of the function in Problem 11: $f(z) = e^{x^2-y^2}\cos(2xy) + ie^{x^2-y^2}\sin(2xy)$.

**Solution:**
From Problem 11, we have:
$$u_x = 2x e^{x^2-y^2}\cos(2xy) - 2y e^{x^2-y^2}\sin(2xy)$$
$$v_x = 2x e^{x^2-y^2}\sin(2xy) + 2y e^{x^2-y^2}\cos(2xy)$$
Using the derivative formula:
$$f'(z) = u_x + i v_x$$
$$= \left[ 2x e^{x^2-y^2}\cos(2xy) - 2y e^{x^2-y^2}\sin(2xy) \right] + i \left[ 2x e^{x^2-y^2}\sin(2xy) + 2y e^{x^2-y^2}\cos(2xy) \right]$$
Factor out $2(x+iy) e^{x^2-y^2}$:
$$= 2x e^{x^2-y^2} (\cos(2xy) + i\sin(2xy)) + 2iy e^{x^2-y^2} (\cos(2xy) + i\sin(2xy))$$
$$= 2(x + iy) e^{x^2-y^2} [\cos(2xy) + i\sin(2xy)]$$
Since $z = x+iy$ and $e^{z^2} = e^{x^2-y^2}\left(\cos(2xy) + i\sin(2xy)\right)$:
$$= 2z e^{z^2}$$
Thus, we obtain:
$$\boxed{f'(z) = 2z e^{z^2}}$$

---

## Problems 25 – 28: Entire Functions

**In Problems 25–28, show that the given function is entire by verifying C-R equations and continuity everywhere.**

#### Problem 25
Show that $f(z) = e^x\cos y + i e^x\sin y$ is entire.

**Solution:**
1. Identify the real and imaginary parts:
   $$u(x,y) = e^x\cos y \quad \text{and} \quad v(x,y) = e^x\sin y$$
2. Compute the partial derivatives:
   * $u_x = e^x\cos y, \quad u_y = -e^x\sin y$
   * $v_x = e^x\sin y, \quad v_y = e^x\cos y$
3. Verify C-R equations:
   * $u_x = e^x\cos y = v_y \implies u_x = v_y$ (Satisfied).
   * $u_y = -e^x\sin y = -v_x \implies u_y = -v_x$ (Satisfied).
4. Analyze continuity:
   The partial derivatives are continuous everywhere on $\mathbb{R}^2$ since they are products of exponential and trigonometric functions.
Therefore, by Theorem 3.5, $f(z)$ is analytic at all points in $\mathbb{C}$, which means it is an entire function. *(Note: This is the complex exponential function $f(z) = e^z$.)*

---

#### Problem 26
Show that $f(z) = \cos x \cosh y - i\sin x \sinh y$ is entire.

**Solution:**
1. Identify the real and imaginary parts:
   $$u(x,y) = \cos x \cosh y \quad \text{and} \quad v(x,y) = -\sin x \sinh y$$
2. Compute the partial derivatives:
   * $u_x = -\sin x \cosh y, \quad u_y = \cos x \sinh y$
   * $v_x = -\cos x \sinh y, \quad v_y = -\sin x \cosh y$
3. Verify C-R equations:
   * $u_x = -\sin x \cosh y = v_y \implies u_x = v_y$ (Satisfied).
   * $u_y = \cos x \sinh y = -v_x \implies u_y = -v_x$ (Satisfied).
4. Analyze continuity:
   The partial derivatives are continuous everywhere since they are composed of trigonometric and hyperbolic functions.
Therefore, the function is entire. *(Note: This is the complex cosine function $f(z) = \cos z$.)*

---

#### Problem 27
Show that $f(z) = \cosh x \cos y + i\sinh x \sin y$ is entire.

**Solution:**
1. Identify the real and imaginary parts:
   $$u(x,y) = \cosh x \cos y \quad \text{and} \quad v(x,y) = \sinh x \sin y$$
2. Compute the partial derivatives:
   * $u_x = \sinh x \cos y, \quad u_y = -\cosh x \sin y$
   * $v_x = \cosh x \sin y, \quad v_y = \sinh x \cos y$
3. Verify C-R equations:
   * $u_x = \sinh x \cos y = v_y \implies u_x = v_y$ (Satisfied).
   * $u_y = -\cosh x \sin y = -v_x \implies u_y = -v_x$ (Satisfied).
4. Analyze continuity:
   The partial derivatives are continuous everywhere.
Therefore, the function is entire. *(Note: This is the complex hyperbolic cosine function $f(z) = \cosh z$.)*

---

#### Problem 28
Show that $f(z) = \sin x \cosh y + i\cos x \sinh y$ is entire.

**Solution:**
1. Identify the real and imaginary parts:
   $$u(x,y) = \sin x \cosh y \quad \text{and} \quad v(x,y) = \cos x \sinh y$$
2. Compute the partial derivatives:
   * $u_x = \cos x \cosh y, \quad u_y = \sin x \sinh y$
   * $v_x = -\sin x \sinh y, \quad v_y = \cos x \cosh y$
3. Verify C-R equations:
   * $u_x = \cos x \cosh y = v_y \implies u_x = v_y$ (Satisfied).
   * $u_y = \sin x \sinh y = -v_x \implies u_y = -v_x$ (Satisfied).
4. Analyze continuity:
   The partial derivatives are continuous everywhere.
Therefore, the function is entire. *(Note: This is the complex sine function $f(z) = \sin z$.)*

---

## Focus on Concepts (Problems 29 – 35)

#### Problem 29
Prove that if $f(z)$ is analytic in a domain $D$ and $f'(z) = 0$ for all $z \in D$, then $f(z)$ is a constant function in $D$.

**Solution:**
1. Let $f(z) = u(x,y) + iv(x,y)$. The derivative is given by:
   $$f'(z) = u_x + i v_x = 0$$
   This implies:
   $$u_x = 0 \quad \text{and} \quad v_x = 0 \quad \text{for all } (x,y) \in D$$
2. Since $f$ is analytic in $D$, the Cauchy-Riemann equations hold:
   $$u_y = -v_x \quad \text{and} \quad v_y = u_x$$
3. Substitute the values $u_x = 0$ and $v_x = 0$ into the C-R equations:
   $$u_y = 0 \quad \text{and} \quad v_y = 0 \quad \text{for all } (x,y) \in D$$
4. Since all first-order partial derivatives of $u$ and $v$ are zero everywhere in the connected open set $D$:
   * $u_x = 0$ and $u_y = 0 \implies u(x,y) = c_1$ (a real constant).
   * $v_x = 0$ and $v_y = 0 \implies v(x,y) = c_2$ (a real constant).
5. Thus:
   $$f(z) = c_1 + i c_2 = C \quad \text{(a complex constant)}$$
This completes the proof.

---

#### Problem 30
Prove that if $f(z)$ is analytic in a domain $D$ and $|f(z)| = c$ (constant) for all $z \in D$, then $f(z)$ is constant.

**Solution:**
Let $f(z) = u(x,y) + iv(x,y)$. The modulus is $|f(z)| = \sqrt{u^2 + v^2} = c \implies u^2 + v^2 = c^2$.
1. If $c = 0$, then $u^2 + v^2 = 0 \implies u = 0$ and $v = 0$ everywhere, so $f(z) = 0$ (constant).
2. If $c \ne 0$, we differentiate the equation $u^2 + v^2 = c^2$ with respect to $x$ and $y$:
   * Differentiating with respect to $x$:
     $$2u u_x + 2v v_x = 0 \implies u u_x + v v_x = 0 \quad \text{(Eq. 1)}$$
   * Differentiating with respect to $y$:
     $$2u u_y + 2v v_y = 0 \implies u u_y + v v_y = 0 \quad \text{(Eq. 2)}$$
3. Apply the C-R equations $u_y = -v_x$ and $v_y = u_x$ to Eq. 2:
     $$u(-v_x) + v(u_x) = 0 \implies v u_x - u v_x = 0 \quad \text{(Eq. 3)}$$
4. We set up a system of equations for $u_x$ and $v_x$:
   * $u u_x + v v_x = 0$
   * $v u_x - u v_x = 0$
   Multiply the first equation by $u$ and the second by $v$, then add them:
   $$u^2 u_x + u v v_x + v^2 u_x - u v v_x = 0 \implies (u^2 + v^2)u_x = 0$$
   Since $u^2 + v^2 = c^2 \ne 0$, we must have:
   $$u_x = 0$$
5. Similarly, substitute $u_x = 0$ back into Eq. 1:
   $$v v_x = 0$$
   And into Eq. 3:
   $$-u v_x = 0$$
   Since both $u$ and $v$ cannot be zero simultaneously (as $c \ne 0$), we must have $v_x = 0$.
6. By the C-R equations:
   $$u_y = -v_x = 0 \quad \text{and} \quad v_y = u_x = 0$$
Since all partial derivatives are zero, $f(z)$ is constant.

---

#### Problem 31
If $f$ and $g$ are analytic in a domain $D$, and $f(z) = g(z)$ along a line segment in $D$, show that $f(z) = g(z)$ for all $z \in D$.

**Solution:**
This is a consequence of the Identity Theorem for analytic functions.
1. Let $h(z) = f(z) - g(z)$. Since $f$ and $g$ are analytic in $D$, $h(z)$ is also analytic in $D$.
2. We are given that $h(z) = 0$ along a line segment. A line segment contains accumulation points (limit points of the set of zeros).
3. According to the Identity Theorem, if the set of zeros of an analytic function $h(z)$ has a limit point in a domain $D$, then $h(z)$ must be identically zero throughout the entire domain $D$.
4. Thus, $h(z) = 0 \implies f(z) = g(z)$ for all $z \in D$.

---

#### Problem 32
Derive the polar form of the Cauchy-Riemann equations:
$$u_r = \frac{1}{r} v_\theta \quad \text{and} \quad v_r = -\frac{1}{r} u_\theta$$

**Solution:**
We use the relations $x = r\cos\theta$ and $y = r\sin\theta$:
1. Apply the chain rule for partial differentiation:
   $$u_r = u_x \frac{\partial x}{\partial r} + u_y \frac{\partial y}{\partial r} = u_x \cos\theta + u_y \sin\theta \quad \text{(Eq. 1)}$$
   $$u_\theta = u_x \frac{\partial x}{\partial \theta} + u_y \frac{\partial y}{\partial \theta} = u_x (-r\sin\theta) + u_y (r\cos\theta) \quad \text{(Eq. 2)}$$
2. Similarly for $v$:
   $$v_r = v_x \cos\theta + v_y \sin\theta \quad \text{(Eq. 3)}$$
   $$v_\theta = -r v_x \sin\theta + r v_y \cos\theta \quad \text{(Eq. 4)}$$
3. Apply the Cartesian C-R equations $u_x = v_y$ and $u_y = -v_x$ to Eq. 4:
   $$v_\theta = -r (-u_y) \sin\theta + r (u_x) \cos\theta = r(u_x \cos\theta + u_y \sin\theta)$$
   Using Eq. 1:
   $$v_\theta = r u_r \implies u_r = \frac{1}{r} v_\theta$$
4. Apply the Cartesian C-R equations to Eq. 3:
   $$v_r = (-u_y) \cos\theta + (u_x) \sin\theta = u_x \sin\theta - u_y \cos\theta$$
   Now compare this with Eq. 2:
   $$u_\theta = r(u_y \cos\theta - u_x \sin\theta) = -r(u_x \sin\theta - u_y \cos\theta) = -r v_r \implies v_r = -\frac{1}{r} u_\theta$$
This completes the derivation.

---

#### Problem 33
Show that if $f(z) = u(x,y) + iv(x,y)$ is analytic at a point $z_0$, the Jacobian matrix of the transformation $(x,y) \to (u,v)$ has a determinant equal to $|f'(z_0)|^2$.

**Solution:**
1. The Jacobian determinant is defined as:
   $$J(x,y) = \det \begin{pmatrix} u_x & u_y \\ v_x & v_y \end{pmatrix} = u_x v_y - u_y v_x$$
2. Since $f$ is analytic at $z_0$, the C-R equations hold: $v_y = u_x$ and $u_y = -v_x$.
3. Substitute these relations into the determinant formula:
   $$J(x,y) = u_x (u_x) - (-v_x) v_x = u_x^2 + v_x^2$$
4. The derivative of $f(z)$ is $f'(z) = u_x + i v_x$. The square of its modulus is:
   $$|f'(z)|^2 = |u_x + i v_x|^2 = u_x^2 + v_x^2$$
5. Thus:
   $$J(x,y) = |f'(z_0)|^2$$

---

#### Problem 34
Show that the polar Cauchy-Riemann equations can be compactly written as:
$$\frac{\partial f}{\partial \theta} = i r \frac{\partial f}{\partial r}$$

**Solution:**
1. Let $f = u + iv$.
2. Compute the partial derivatives:
   $$\frac{\partial f}{\partial \theta} = u_\theta + i v_\theta$$
   $$\frac{\partial f}{\partial r} = u_r + i v_r$$
3. Multiply $\frac{\partial f}{\partial r}$ by $i r$:
   $$i r \frac{\partial f}{\partial r} = i r(u_r + i v_r) = i r u_r - r v_r = -r v_r + i r u_r$$
4. Apply the polar C-R equations $u_r = \frac{1}{r}v_\theta \implies r u_r = v_\theta$ and $v_r = -\frac{1}{r}u_\theta \implies -r v_r = u_\theta$:
   $$i r \frac{\partial f}{\partial r} = u_\theta + i v_\theta = \frac{\partial f}{\partial \theta}$$
This verifies the compact formulation.

---

#### Problem 35
Show that the function $f(z) = \ln r + i\theta$ is analytic for $r > 0$ and $-\pi < \theta < \pi$.

**Solution:**
1. Identify the real and imaginary parts:
   $$u(r,\theta) = \ln r \quad \text{and} \quad v(r,\theta) = \theta$$
2. Compute the polar partial derivatives:
   * $u_r = \frac{1}{r}, \quad u_\theta = 0$
   * $v_r = 0, \quad v_\theta = 1$
3. Verify the polar C-R equations:
   * $u_r = \frac{1}{r} v_\theta \implies \frac{1}{r} = \frac{1}{r}(1)$ (Satisfied).
   * $v_r = -\frac{1}{r}u_\theta \implies 0 = -\frac{1}{r}(0)$ (Satisfied).
4. Check continuity:
   The partial derivatives $u_r = 1/r$, $u_\theta = 0$, $v_r = 0$, and $v_\theta = 1$ are continuous for all $r > 0$ and $-\pi < \theta < \pi$.
Therefore, by Theorem 3.5, $f(z) = \ln r + i\theta$ (which is the principal branch of the complex logarithm $\operatorname{Ln}(z)$) is analytic on the domain $r > 0$, $-\pi < \theta < \pi$.
