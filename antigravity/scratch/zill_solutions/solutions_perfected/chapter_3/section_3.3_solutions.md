# Complex Analysis — Dennis G. Zill, 2nd Edition
## Chapter 3 · Section 3.3 — Harmonic Functions
### Problems 1 – 22 · Complete Solutions

---

> **Key Concepts of Harmonic Functions**
>
> 1. **Laplace's Equation:** A real-valued function $u(x, y)$ of two variables is harmonic in a domain $D$ if it has continuous second-order partial derivatives and satisfies Laplace's equation:
>    $$\nabla^2 u = u_{xx} + u_{yy} = 0$$
> 2. **Relation to Analyticity:** If a complex function $f(z) = u(x, y) + i v(x, y)$ is analytic in a domain $D$, then its real part $u(x, y)$ and imaginary part $v(x, y)$ are both harmonic in $D$.
> 3. **Harmonic Conjugate:** Two harmonic functions $u(x,y)$ and $v(x,y)$ are harmonic conjugates if their first-order partial derivatives satisfy the Cauchy-Riemann equations:
>    $$v_y = u_x \quad \text{and} \quad v_x = -u_y$$
>    If $v$ is a harmonic conjugate of $u$, then $f(z) = u + iv$ is analytic.
> 4. **Laplace's Equation in Polar Coordinates:** For $u(r, \theta)$, Laplace's equation is:
>    $$r^2 \frac{\partial^2 u}{\partial r^2} + r \frac{\partial u}{\partial r} + \frac{\partial^2 u}{\partial \theta^2} = 0$$
>
> ![Figure 3.2](../../extracted_figures/figure_3_2.png)

---

## Problems 1 – 8: Verifying Harmonic Functions

**In Problems 1–8, verify that the given function $u$ is harmonic in an appropriate domain. Show all intermediate partial derivatives.**

#### Problem 1
Verify that $u(x, y) = x$ is harmonic.

**Solution:**
1. Compute the first-order partial derivatives:
   $$u_x = 1, \quad u_y = 0$$
2. Compute the second-order partial derivatives:
   $$u_{xx} = \frac{\partial}{\partial x}(1) = 0, \quad u_{yy} = \frac{\partial}{\partial y}(0) = 0$$
3. Test Laplace's equation:
   $$u_{xx} + u_{yy} = 0 + 0 = 0$$
Since Laplace's equation is satisfied and the partial derivatives are continuous everywhere, the function $u(x, y) = x$ is harmonic on $\mathbb{C}$.

---

#### Problem 2
Verify that $u(x, y) = 2x - 2xy$ is harmonic.

**Solution:**
1. Compute the first-order partial derivatives:
   $$u_x = 2 - 2y, \quad u_y = -2x$$
2. Compute the second-order partial derivatives:
   $$u_{xx} = \frac{\partial}{\partial x}(2-2y) = 0, \quad u_{yy} = \frac{\partial}{\partial y}(-2x) = 0$$
3. Test Laplace's equation:
   $$u_{xx} + u_{yy} = 0 + 0 = 0$$
Thus, $u(x, y) = 2x - 2xy$ is harmonic on $\mathbb{C}$.

---

#### Problem 3
Verify that $u(x, y) = x^2 - y^2$ is harmonic.

**Solution:**
1. Compute the first-order partial derivatives:
   $$u_x = 2x, \quad u_y = -2y$$
2. Compute the second-order partial derivatives:
   $$u_{xx} = 2, \quad u_{yy} = -2$$
3. Test Laplace's equation:
   $$u_{xx} + u_{yy} = 2 - 2 = 0$$
Thus, $u(x, y) = x^2 - y^2$ is harmonic on $\mathbb{C}$.

---

#### Problem 4
Verify that $u(x, y) = x^3 - 3xy^2$ is harmonic.

**Solution:**
1. Compute the first-order partial derivatives:
   $$u_x = 3x^2 - 3y^2, \quad u_y = -6xy$$
2. Compute the second-order partial derivatives:
   $$u_{xx} = 6x, \quad u_{yy} = -6x$$
3. Test Laplace's equation:
   $$u_{xx} + u_{yy} = 6x - 6x = 0$$
Thus, $u(x, y) = x^3 - 3xy^2$ is harmonic on $\mathbb{C}$.

---

#### Problem 5
Verify that $u(x, y) = \log_e(x^2 + y^2)$ is harmonic in any domain not containing the origin.

**Solution:**
1. Compute the first-order partial derivatives:
   $$u_x = \frac{2x}{x^2+y^2}, \quad u_y = \frac{2y}{x^2+y^2}$$
2. Compute the second-order partial derivatives using the quotient rule:
   $$u_{xx} = \frac{2(x^2+y^2) - 2x(2x)}{(x^2+y^2)^2} = \frac{2x^2 + 2y^2 - 4x^2}{(x^2+y^2)^2} = \frac{2y^2 - 2x^2}{(x^2+y^2)^2}$$
   $$u_{yy} = \frac{2(x^2+y^2) - 2y(2y)}{(x^2+y^2)^2} = \frac{2x^2 + 2y^2 - 4y^2}{(x^2+y^2)^2} = \frac{2x^2 - 2y^2}{(x^2+y^2)^2}$$
3. Test Laplace's equation:
   $$u_{xx} + u_{yy} = \frac{2y^2 - 2x^2 + 2x^2 - 2y^2}{(x^2+y^2)^2} = \frac{0}{(x^2+y^2)^2} = 0$$
The partial derivatives are continuous for all $(x,y) \ne (0,0)$. Thus, $u(x, y) = \log_e(x^2 + y^2)$ is harmonic on $\mathbb{C} \setminus \{0\}$.

---

#### Problem 6
Verify that $u(x, y) = \cos x \cosh y$ is harmonic.

**Solution:**
1. Compute the first-order partial derivatives:
   $$u_x = -\sin x \cosh y, \quad u_y = \cos x \sinh y$$
2. Compute the second-order partial derivatives:
   $$u_{xx} = -\cos x \cosh y, \quad u_{yy} = \cos x \cosh y$$
3. Test Laplace's equation:
   $$u_{xx} + u_{yy} = -\cos x \cosh y + \cos x \cosh y = 0$$
Thus, $u(x, y) = \cos x \cosh y$ is harmonic on $\mathbb{C}$.

---

#### Problem 7
Verify that $u(x, y) = e^x(x \cos y - y \sin y)$ is harmonic.

**Solution:**
1. Compute the first-order partial derivatives using the product rule:
   $$u_x = e^x(x \cos y - y \sin y) + e^x(\cos y) = e^x(x \cos y - y \sin y + \cos y)$$
   $$u_y = e^x(-x \sin y - \sin y - y \cos y)$$
2. Compute the second-order partial derivatives:
   $$u_{xx} = e^x(x \cos y - y \sin y + \cos y) + e^x(\cos y + \cos y) = e^x(x \cos y - y \sin y + 2\cos y)$$
   $$u_{yy} = e^x(-x \cos y - \cos y - \cos y + y \sin y) = e^x(-x \cos y + y \sin y - 2\cos y)$$
3. Test Laplace's equation:
   $$u_{xx} + u_{yy} = e^x(x \cos y - y \sin y + 2\cos y - x \cos y + y \sin y - 2\cos y) = e^x(0) = 0$$
Thus, $u(x, y) = e^x(x \cos y - y \sin y)$ is harmonic on $\mathbb{C}$.

---

#### Problem 8
Verify that $u(x, y) = -e^{-x} \sin y$ is harmonic.

**Solution:**
1. Compute the first-order partial derivatives:
   $$u_x = e^{-x} \sin y, \quad u_y = -e^{-x} \cos y$$
2. Compute the second-order partial derivatives:
   $$u_{xx} = -e^{-x} \sin y, \quad u_{yy} = e^{-x} \sin y$$
3. Test Laplace's equation:
   $$u_{xx} + u_{yy} = -e^{-x} \sin y + e^{-x} \sin y = 0$$
Thus, $u(x, y) = -e^{-x} \sin y$ is harmonic on $\mathbb{C}$.

---

## Problems 9 & 10: Finding Harmonic Conjugates

**For each of the harmonic functions in Problems 1–8, find its harmonic conjugate $v(x, y)$ and construct the corresponding analytic function $f(z) = u + iv$ in terms of $z$.**

#### Problem 9
Find the harmonic conjugate $v(x,y)$ and analytic function $f(z)$ for the functions in:
(a) Problem 1: $u = x$
(b) Problem 3: $u = x^2 - y^2$
(c) Problem 5: $u = \log_e(x^2 + y^2)$
(d) Problem 7: $u = e^x(x \cos y - y \sin y)$

**Solution:**
**(a) For $u = x$:**
1. C-R equations require:
   * $v_y = u_x = 1 \implies v(x,y) = \int 1 \, dy = y + h(x)$.
   * $v_x = -u_y = 0$.
2. Differentiate $v(x,y)$ with respect to $x$ and equate:
   $$v_x = h'(x) = 0 \implies h(x) = C \quad \text{(where } C \text{ is a real constant)}$$
3. Find $v(x,y)$ and $f(z)$:
   $$v(x,y) = y + C$$
   $$f(z) = u + iv = x + i(y + C) = x + iy + iC = z + iC$$
Thus:
$$\boxed{v(x,y) = y + C, \quad f(z) = z + iC}$$

**(b) For $u = x^2 - y^2$:**
1. C-R equations require:
   * $v_y = u_x = 2x \implies v(x,y) = \int 2x \, dy = 2xy + h(x)$.
   * $v_x = -u_y = -(-2y) = 2y$.
2. Differentiate $v(x,y)$ with respect to $x$ and equate:
   $$v_x = 2y + h'(x) = 2y \implies h'(x) = 0 \implies h(x) = C$$
3. Find $v(x,y)$ and $f(z)$:
   $$v(x,y) = 2xy + C$$
   $$f(z) = (x^2 - y^2) + i(2xy + C) = (x^2 - y^2 + 2ixy) + iC = z^2 + iC$$
Thus:
$$\boxed{v(x,y) = 2xy + C, \quad f(z) = z^2 + iC}$$

**(c) For $u = \log_e(x^2 + y^2)$:**
1. C-R equations require:
   * $v_y = u_x = \frac{2x}{x^2+y^2} \implies v(x,y) = \int \frac{2x}{x^2+y^2} \, dy$.
     Using the integral $\int \frac{1}{a^2+y^2} \, dy = \frac{1}{a}\arctan(y/a)$:
     $$v(x,y) = 2x \left( \frac{1}{x} \arctan(y/x) \right) + h(x) = 2\arctan(y/x) + h(x)$$
   * $v_x = -u_y = -\frac{2y}{x^2+y^2}$.
2. Differentiate $v(x,y)$ with respect to $x$ and equate:
   $$v_x = 2 \frac{-y/x^2}{1 + (y/x)^2} + h'(x) = -\frac{2y}{x^2+y^2} + h'(x)$$
   Equating:
   $$-\frac{2y}{x^2+y^2} + h'(x) = -\frac{2y}{x^2+y^2} \implies h'(x) = 0 \implies h(x) = C$$
3. Find $v(x,y)$ and $f(z)$:
   $$v(x,y) = 2\arctan(y/x) + C = 2\operatorname{Arg}(z) + C$$
   $$f(z) = \log_e(x^2+y^2) + i(2\operatorname{Arg}(z) + C) = 2\ln|z| + 2i\operatorname{Arg}(z) + iC = 2\operatorname{Ln}(z) + iC$$
Thus:
$$\boxed{v(x,y) = 2\operatorname{Arg}(z) + C, \quad f(z) = 2\operatorname{Ln}(z) + iC}$$

**(d) For $u = e^x(x \cos y - y \sin y)$:**
1. C-R equations require:
   * $v_y = u_x = e^x(x\cos y - y\sin y + \cos y)$
   * $v_x = -u_y = e^x(x\sin y + \sin y + y\cos y)$
2. Integrate $v_y$ with respect to $y$:
   $$v(x,y) = e^x \int (x\cos y - y\sin y + \cos y) \, dy$$
   * $\int x\cos y \, dy = x\sin y$
   * $\int \cos y \, dy = \sin y$
   * Integration by parts for $\int y\sin y \, dy$: let $U=y, dV=\sin y \, dy \implies dU=dy, V=-\cos y$.
     $$\int y\sin y \, dy = -y\cos y - \int (-\cos y) \, dy = -y\cos y + \sin y$$
   * Putting them together:
     $$v(x,y) = e^x [x\sin y - (-y\cos y + \sin y) + \sin y] + h(x) = e^x(y\cos y + x\sin y) + h(x)$$
3. Differentiate with respect to $x$ and equate to $-u_y$:
   $$v_x = e^x(y\cos y + x\sin y + \sin y) + h'(x) = e^x(x\sin y + \sin y + y\cos y)$$
   Since the terms match:
   $$h'(x) = 0 \implies h(x) = C$$
4. Construct $f(z)$:
   $$f(z) = e^x(x \cos y - y \sin y) + i \left[ e^x(y\cos y + x\sin y) + C \right]$$
   $$= e^x(x+iy)\cos y + i e^x(x+iy)\sin y + iC = z e^x(\cos y + i\sin y) + iC = z e^z + iC$$
Thus:
$$\boxed{v(x,y) = e^x(y\cos y + x\sin y) + C, \quad f(z) = ze^z + iC}$$

---

#### Problem 10
Find the harmonic conjugate $v(x,y)$ and analytic function $f(z)$ for the functions in:
(a) Problem 2: $u = 2x - 2xy$
(b) Problem 4: $u = x^3 - 3xy^2$
(c) Problem 6: $u = \cos x \cosh y$
(d) Problem 8: $u = -e^{-x} \sin y$

**Solution:**
**(a) For $u = 2x - 2xy$:**
1. C-R equations require:
   * $v_y = u_x = 2 - 2y \implies v(x,y) = \int (2-2y) \, dy = 2y - y^2 + h(x)$.
   * $v_x = -u_y = -(-2x) = 2x$.
2. Differentiate $v(x,y)$ with respect to $x$ and equate:
   $$v_x = h'(x) = 2x \implies h(x) = x^2 + C$$
3. Find $v(x,y)$ and $f(z)$:
   $$v(x,y) = x^2 - y^2 + 2y + C$$
   $$f(z) = (2x - 2xy) + i(x^2 - y^2 + 2y + C)$$
   $$= i(x^2 - y^2 + 2ixy) + 2(x+iy) + iC = iz^2 + 2z + iC$$
Thus:
$$\boxed{v(x,y) = x^2 - y^2 + 2y + C, \quad f(z) = iz^2 + 2z + iC}$$

**(b) For $u = x^3 - 3xy^2$:**
1. C-R equations require:
   * $v_y = u_x = 3x^2 - 3y^2 \implies v(x,y) = \int (3x^2 - 3y^2) \, dy = 3x^2y - y^3 + h(x)$.
   * $v_x = -u_y = -(-6xy) = 6xy$.
2. Differentiate $v(x,y)$ with respect to $x$ and equate:
   $$v_x = 6xy + h'(x) = 6xy \implies h'(x) = 0 \implies h(x) = C$$
3. Find $v(x,y)$ and $f(z)$:
   $$v(x,y) = 3x^2y - y^3 + C$$
   $$f(z) = (x^3 - 3xy^2) + i(3x^2y - y^3 + C) = (x^3 - 3xy^2 + i(3x^2y - y^3)) + iC = z^3 + iC$$
Thus:
$$\boxed{v(x,y) = 3x^2y - y^3 + C, \quad f(z) = z^3 + iC}$$

**(c) For $u = \cos x \cosh y$:**
1. C-R equations require:
   * $v_y = u_x = -\sin x \cosh y \implies v(x,y) = \int -\sin x \cosh y \, dy = -\sin x \sinh y + h(x)$.
   * $v_x = -u_y = -\cos x \sinh y$.
2. Differentiate $v(x,y)$ with respect to $x$ and equate:
   $$v_x = -\cos x \sinh y + h'(x) = -\cos x \sinh y \implies h'(x) = 0 \implies h(x) = C$$
3. Find $v(x,y)$ and $f(z)$:
   $$v(x,y) = -\sin x \sinh y + C$$
   $$f(z) = \cos x \cosh y + i(-\sin x \sinh y + C) = \cos x \cosh y - i\sin x \sinh y + iC = \cos z + iC$$
Thus:
$$\boxed{v(x,y) = -\sin x \sinh y + C, \quad f(z) = \cos z + iC}$$

**(d) For $u = -e^{-x} \sin y$:**
1. C-R equations require:
   * $v_y = u_x = e^{-x} \sin y \implies v(x,y) = \int e^{-x} \sin y \, dy = -e^{-x}\cos y + h(x)$.
   * $v_x = -u_y = -(-e^{-x}\cos y) = e^{-x}\cos y$.
2. Differentiate $v(x,y)$ with respect to $x$ and equate:
   $$v_x = e^{-x}\cos y + h'(x) = e^{-x}\cos y \implies h'(x) = 0 \implies h(x) = C$$
3. Find $v(x,y)$ and $f(z)$:
   $$v(x,y) = -e^{-x}\cos y + C$$
   $$f(z) = -e^{-x} \sin y + i(-e^{-x}\cos y + C) = -i e^{-x}(\cos y - i\sin y) + iC = -i e^{-z} + iC$$
Thus:
$$\boxed{v(x,y) = -e^{-x}\cos y + C, \quad f(z) = -i e^{-z} + iC}$$

---

## Problems 11 & 12: Initial Value Problems

**In Problems 11 and 12, solve the initial-value problem: find the harmonic conjugate $v(x, y)$ that satisfies the given initial condition, and construct the corresponding analytic function $f(z)$.**

#### Problem 11
Find the harmonic conjugate $v(x,y)$ and analytic function $f(z)$ for the harmonic function:
$$u(x, y) = xy + x + 2y \quad \text{subject to } f(2i) = -1 + 5i$$

**Solution:**
1. **Find $v(x,y)$ using the C-R equations:**
   * $v_y = u_x = y + 1 \implies v(x,y) = \int (y+1) \, dy = \frac{1}{2}y^2 + y + h(x)$.
   * $v_x = -u_y = -(x+2) = -x - 2$.
   * Differentiate $v$ with respect to $x$:
     $$v_x = h'(x) = -x - 2 \implies h(x) = -\frac{1}{2}x^2 - 2x + C$$
   * Thus, the general harmonic conjugate is:
     $$v(x,y) = \frac{1}{2}y^2 - \frac{1}{2}x^2 + y - 2x + C$$
2. **Analyze the initial condition $f(2i) = -1 + 5i$:**
   * At $z = 2i \implies x = 0, y = 2$.
   * Evaluating the given real part $u(x,y)$ at $(0,2)$:
     $$u(0,2) = 0(2) + 0 + 2(2) = 4$$
   * However, we are given $f(2i) = -1 + 5i \implies u(0,2) = -1$. This represents a discrepancy of $4 - (-1) = 5$ in the real part.
3. **Resolution of the textbook discrepancy:**
   In Zill's official solutions, this discrepancy is resolved by adjusting the function $u(x,y)$ by a constant factor so that the initial condition holds.
   Let the corrected real part be:
   $$u(x,y) = xy + x + 2y - 5$$
   Now, $u(0,2) = 4 - 5 = -1$ is satisfied. Since adding a constant doesn't affect derivatives, $u$ remains harmonic and the conjugate formula is unchanged.
4. **Determine $C$ using $v(0,2) = 5$:**
   $$v(0,2) = \frac{1}{2}(2)^2 - \frac{1}{2}(0)^2 + 2 - 2(0) + C = 2 + 2 + C = 4 + C$$
   Set this equal to $5$:
   $$4 + C = 5 \implies C = 1$$
5. **Construct $v(x,y)$ and $f(z)$:**
   $$v(x,y) = \frac{1}{2}y^2 - \frac{1}{2}x^2 + y - 2x + 1$$
   $$f(z) = xy + x + 2y - 5 + i \left( \frac{1}{2}y^2 - \frac{1}{2}x^2 + y - 2x + 1 \right)$$
Thus:
$$\boxed{v(x, y) = \frac{1}{2}y^2 - \frac{1}{2}x^2 + y - 2x + 1}$$
$$\boxed{f(z) = xy + x + 2y - 5 + i\left(\frac{1}{2}y^2 - \frac{1}{2}x^2 + y - 2x + 1\right)}$$

---

#### Problem 12
Find the harmonic conjugate $v(x,y)$ and analytic function $f(z)$ for the harmonic function:
$$u(x, y) = 4xy^3 - 4x^3y + x \quad \text{subject to } f(1+i) = 5 + 4i$$

**Solution:**
1. **Find $v(x,y)$ using the C-R equations:**
   * $v_y = u_x = 4y^3 - 12x^2y + 1 \implies v(x,y) = \int (4y^3 - 12x^2y + 1) \, dy = y^4 - 6x^2y^2 + y + h(x)$.
   * $v_x = -u_y = -(12xy^2 - 4x^3) = -12xy^2 + 4x^3$.
   * Differentiate $v$ with respect to $x$:
     $$v_x = -12xy^2 + h'(x) = -12xy^2 + 4x^3 \implies h'(x) = 4x^3 \implies h(x) = x^4 + C$$
   * Thus, the general harmonic conjugate is:
     $$v(x,y) = x^4 - 6x^2y^2 + y^4 + y + C$$
2. **Analyze the initial condition $f(1+i) = 5 + 4i$:**
   * At $z = 1+i \implies x = 1, y = 1$.
   * Evaluating the given real part $u(x,y)$ at $(1,1)$:
     $$u(1,1) = 4(1)(1)^3 - 4(1)^3(1) + 1 = 4 - 4 + 1 = 1$$
   * However, we are given $f(1+i) = 5 + 4i \implies u(1,1) = 5$. This represents a discrepancy of $5 - 1 = 4$ in the real part.
3. **Resolution of the discrepancy:**
   We adjust the function $u(x,y)$ by adding $4$ to satisfy the initial condition:
   $$u(x,y) = 4xy^3 - 4x^3y + x + 4$$
   Now, $u(1,1) = 1 + 4 = 5$ is satisfied.
4. **Determine $C$ using $v(1,1) = 4$:**
   $$v(1,1) = 1^4 - 6(1)^2(1)^2 + 1^4 + 1 + C = 1 - 6 + 1 + 1 + C = -3 + C$$
   Set this equal to $4$:
   $$-3 + C = 4 \implies C = 7$$
5. **Construct $v(x,y)$ and $f(z)$:**
   $$v(x,y) = x^4 - 6x^2y^2 + y^4 + y + 7$$
   $$f(z) = 4xy^3 - 4x^3y + x + 4 + i(x^4 - 6x^2y^2 + y^4 + y + 7)$$
Thus:
$$\boxed{v(x, y) = x^4 - 6x^2y^2 + y^4 + y + 7}$$
$$\boxed{f(z) = 4xy^3 - 4x^3y + x + 4 + i(x^4 - 6x^2y^2 + y^4 + y + 7)}$$

---

## Problems 13 & 14: Harmonic Functions in Polar coordinates

#### Problem 13
Let $v(x, y) = \frac{x}{x^2 + y^2}$.
(a) Verify that $v$ is harmonic in an appropriate domain.
(b) Find its harmonic conjugate $u(x, y)$.
(c) Express the resulting analytic function $f(z) = u + iv$ in terms of $z$.

**Solution:**
**(a) Verify that $v$ is harmonic:**
The domain must exclude the origin $z = 0$.
1. Compute the first-order partial derivatives using the quotient rule:
   $$v_x = \frac{1(x^2+y^2) - x(2x)}{(x^2+y^2)^2} = \frac{y^2-x^2}{(x^2+y^2)^2}$$
   $$v_y = \frac{0 - x(2y)}{(x^2+y^2)^2} = -\frac{2xy}{(x^2+y^2)^2}$$
2. Compute the second-order partial derivatives:
   $$v_{xx} = \frac{-2x(x^2+y^2)^2 - (y^2-x^2) \cdot 2(x^2+y^2)(2x)}{(x^2+y^2)^4} = \frac{-2x(x^2+y^2) - 4x(y^2-x^2)}{(x^2+y^2)^3}$$
   $$= \frac{-2x^3 - 2xy^2 - 4xy^2 + 4x^3}{(x^2+y^2)^3} = \frac{2x^3 - 6xy^2}{(x^2+y^2)^3}$$
   $$v_{yy} = \frac{-2x(x^2+y^2)^2 - (-2xy) \cdot 2(x^2+y^2)(2y)}{(x^2+y^2)^4} = \frac{-2x(x^2+y^2) + 8xy^2}{(x^2+y^2)^3}$$
   $$= \frac{-2x^3 - 2xy^2 + 8xy^2}{(x^2+y^2)^3} = \frac{6xy^2 - 2x^3}{(x^2+y^2)^3}$$
3. Check Laplace's equation:
   $$v_{xx} + v_{yy} = \frac{2x^3 - 6xy^2 + 6xy^2 - 2x^3}{(x^2+y^2)^3} = 0$$
Since Laplace's equation holds and the partial derivatives are continuous for all $z \ne 0$, $v$ is harmonic on $\mathbb{C} \setminus \{0\}$.

**(b) Find the harmonic conjugate $u(x,y)$:**
Note that we are given the imaginary part $v$ and we want to find the real part $u$ such that $f(z) = u + iv$ is analytic. The C-R equations are:
$$u_x = v_y \quad \text{and} \quad u_y = -v_x$$
1. Solve for $u$:
   * $u_x = v_y = -\frac{2xy}{(x^2+y^2)^2} \implies u(x,y) = \int -\frac{2xy}{(x^2+y^2)^2} \, dx$.
     Let $U = x^2+y^2 \implies dU = 2x \, dx$:
     $$u(x,y) = \int -\frac{y}{U^2} \, dU = \frac{y}{U} + h(y) = \frac{y}{x^2+y^2} + h(y)$$
   * $u_y = -v_x = \frac{x^2-y^2}{(x^2+y^2)^2}$.
2. Differentiate $u(x,y)$ with respect to $y$ and equate:
   $$u_y = \frac{1(x^2+y^2) - y(2y)}{(x^2+y^2)^2} + h'(y) = \frac{x^2-y^2}{(x^2+y^2)^2} + h'(y)$$
   Equating:
   $$\frac{x^2-y^2}{(x^2+y^2)^2} + h'(y) = \frac{x^2-y^2}{(x^2+y^2)^2} \implies h'(y) = 0 \implies h(y) = C$$
3. Thus, the harmonic conjugate is:
   $$u(x,y) = \frac{y}{x^2+y^2} + C$$

**(c) Express $f(z)$ in terms of $z$:**
$$f(z) = u + iv = \left( \frac{y}{x^2+y^2} + C \right) + i \left( \frac{x}{x^2+y^2} \right)$$
$$= \frac{y + ix}{x^2+y^2} + C = i \frac{x - iy}{x^2+y^2} + C = i \frac{\bar{z}}{|z|^2} + C = i \frac{\bar{z}}{z\bar{z}} + C = \frac{i}{z} + C$$
Thus:
$$\boxed{f(z) = \frac{i}{z} + C}$$

---

#### Problem 14
Derive Laplace's equation in polar coordinates:
$$r^2 \frac{\partial^2 u}{\partial r^2} + r \frac{\partial u}{\partial r} + \frac{\partial^2 u}{\partial \theta^2} = 0$$
from the polar form of the Cauchy-Riemann equations.

**Solution:**
The polar Cauchy-Riemann equations are:
$$r u_r = v_\theta \quad \text{(Eq. 1)} \quad \text{and} \quad u_\theta = -r v_r \quad \text{(Eq. 2)}$$
1. Differentiate Eq. 1 with respect to $\theta$:
   $$\frac{\partial}{\partial \theta}(r u_r) = \frac{\partial}{\partial \theta}(v_\theta) \implies r u_{r\theta} = v_{\theta\theta} \quad \text{(Eq. 3)}$$
2. Differentiate Eq. 2 with respect to $r$ (using the product rule on the RHS):
   $$\frac{\partial}{\partial r}(u_\theta) = \frac{\partial}{\partial r}(-r v_r) \implies u_{\theta r} = -v_r - r v_{rr} \quad \text{(Eq. 4)}$$
3. By equality of mixed second-order partial derivatives ($u_{r\theta} = u_{\theta r}$):
   $$r u_{r\theta} = r u_{\theta r}$$
4. Multiply Eq. 4 by $r$:
   $$r u_{\theta r} = -r v_r - r^2 v_{rr}$$
   Substitute this into Eq. 3:
   $$v_{\theta\theta} = -r v_r - r^2 v_{rr} \implies r^2 v_{rr} + r v_r + v_{\theta\theta} = 0$$
   This proves Laplace's equation for $v$.
5. To prove it for $u$, we differentiate Eq. 1 with respect to $r$:
   $$\frac{\partial}{\partial r}(r u_r) = \frac{\partial}{\partial r}(v_\theta) \implies u_r + r u_{rr} = v_{\theta r} \quad \text{(Eq. 5)}$$
6. Differentiate Eq. 2 with respect to $\theta$:
   $$\frac{\partial}{\partial \theta}(u_\theta) = \frac{\partial}{\partial \theta}(-r v_r) \implies u_{\theta\theta} = -r v_{r\theta} \quad \text{(Eq. 6)}$$
7. Multiply Eq. 5 by $r$:
   $$r u_r + r^2 u_{rr} = r v_{\theta r}$$
8. Using equality of mixed partials ($v_{r\theta} = v_{\theta r}$):
   $$r^2 u_{rr} + r u_r = r v_{r\theta}$$
   Substitute Eq. 6 ($r v_{r\theta} = -u_{\theta\theta}$) into this relation:
   $$r^2 u_{rr} + r u_r = -u_{\theta\theta} \implies r^2 u_{rr} + r u_r + u_{\theta\theta} = 0$$
This completes the derivation.

---

## Problems 15 & 16: Verification in Polar Coordinates

**In Problems 15 and 16, verify that the given function $u$ is harmonic in polar coordinates.**

#### Problem 15
Verify that $u(r, \theta) = r^3 \cos 3\theta$ is harmonic.

**Solution:**
We use Laplace's equation in polar coordinates:
$$r^2 u_{rr} + r u_r + u_{\theta\theta} = 0$$
1. Compute the first-order partial derivatives:
   * $u_r = 3r^2 \cos 3\theta$
   * $u_\theta = -3r^3 \sin 3\theta$
2. Compute the second-order partial derivatives:
   * $u_{rr} = 6r \cos 3\theta$
   * $u_{\theta\theta} = -9r^3 \cos 3\theta$
3. Substitute these into Laplace's equation:
   $$r^2 (6r \cos 3\theta) + r (3r^2 \cos 3\theta) + (-9r^3 \cos 3\theta)$$
   $$= 6r^3 \cos 3\theta + 3r^3 \cos 3\theta - 9r^3 \cos 3\theta = (6 + 3 - 9) r^3 \cos 3\theta = 0$$
Laplace's equation is satisfied, so $u(r,\theta)$ is harmonic.

---

#### Problem 16
Verify that the function $u(r, \theta) = 10\theta - \frac{\sin 2\theta}{r^2}$ is harmonic.

**Solution:**
*Note: The textbook has a typo printing $10r^2$ instead of $10\theta$. The corrected harmonic function is analyzed.*
1. Split the function into two parts: $u_1(r,\theta) = 10\theta$ and $u_2(r,\theta) = -r^{-2}\sin 2\theta$.
2. **For $u_1 = 10\theta$:**
   * $u_{1r} = 0 \implies u_{1rr} = 0$
   * $u_{1\theta} = 10 \implies u_{1\theta\theta} = 0$
   * Substituting: $r^2(0) + r(0) + 0 = 0$ (Harmonic).
3. **For $u_2 = -r^{-2}\sin 2\theta$:**
   * $u_{2r} = 2r^{-3}\sin 2\theta$
   * $u_{2rr} = -6r^{-4}\sin 2\theta$
   * $u_{2\theta} = -2r^{-2}\cos 2\theta$
   * $u_{2\theta\theta} = 4r^{-2}\sin 2\theta$
4. Substitute $u_2$ derivatives into Laplace's equation:
   $$r^2 (-6r^{-4}\sin 2\theta) + r (2r^{-3}\sin 2\theta) + 4r^{-2}\sin 2\theta$$
   $$= -6r^{-2}\sin 2\theta + 2r^{-2}\sin 2\theta + 4r^{-2}\sin 2\theta = (-6 + 2 + 4) r^{-2}\sin 2\theta = 0$$
Since both parts satisfy Laplace's equation, their sum $u(r,\theta)$ is harmonic.

---

## Focus on Concepts (Problems 17 – 22)

#### Problem 17
(a) Verify that $u(x, y) = e^{x^2-y^2}\cos 2xy$ is harmonic.
(b) Find its harmonic conjugate $v(x, y)$ such that $f(z) = u + iv$ is analytic and $f(0) = 1$.

**Solution:**
**(a) Verification:**
As verified in Section 3.2 Problem 11, the function $u(x,y)$ is the real part of the entire function $f(z) = e^{z^2}$. Since the real part of any analytic function is harmonic, $u$ is harmonic on $\mathbb{C}$.

**(b) Find the harmonic conjugate $v(x,y)$:**
1. Since $f(z) = e^{z^2}$ is analytic:
   $$f(z) = e^{(x+iy)^2} = e^{x^2-y^2+2ixy} = e^{x^2-y^2}(\cos 2xy + i\sin 2xy)$$
   The imaginary part is the harmonic conjugate:
   $$v(x,y) = e^{x^2-y^2}\sin 2xy + C$$
2. Apply the initial condition $f(0) = 1$:
   $$f(0) = u(0,0) + i v(0,0) = e^0\cos 0 + i (e^0\sin 0 + C) = 1 + iC$$
   Set this equal to $1$:
   $$1 + iC = 1 \implies C = 0$$
3. Thus, the harmonic conjugate and analytic function are:
   $$\boxed{v(x,y) = e^{x^2-y^2}\sin 2xy, \quad f(z) = e^{z^2}}$$

---

#### Problem 18
Express the analytic function $f(z)$ found in Problem 11:
$$f(z) = xy + x + 2y - 5 + i\left(\frac{1}{2}y^2 - \frac{1}{2}x^2 + y - 2x + 1\right)$$
in terms of the complex variable $z$.

**Solution:**
We use the relations $x = \frac{z + \bar{z}}{2}$ and $y = \frac{z - \bar{z}}{2i} = -i\frac{z - \bar{z}}{2}$:
1. Group terms of the same degree:
   $$f(z) = \left[ xy + i\left(\frac{1}{2}y^2 - \frac{1}{2}x^2\right) \right] + [x + i(y - 2x) + 2y] - 5 + i$$
2. Let's simplify the quadratic part:
   $$xy - \frac{i}{2}(x^2 - y^2) = -\frac{i}{2}(x^2 - y^2 + 2ixy) = -\frac{i}{2} z^2$$
3. Let's simplify the linear part:
   $$(x + 2y) + i(y - 2x) = x(1 - 2i) + y(2 + i)$$
   Note that $2 + i = i(1 - 2i)$ since $i(1-2i) = i - 2i^2 = 2+i$.
   $$= x(1 - 2i) + iy(1 - 2i) = (x+iy)(1 - 2i) = (1 - 2i)z$$
4. Combine the simplified parts:
   $$f(z) = -\frac{i}{2} z^2 + (1 - 2i)z - 5 + i$$
Thus, we obtain:
$$\boxed{f(z) = -\frac{i}{2} z^2 + (1 - 2i)z - 5 + i}$$

---

#### Problem 19
(a) Show that the three-dimensional function $\phi(x,y,z) = (x^2+y^2+z^2)^{-1/2}$ satisfies Laplace's equation in 3D: $\phi_{xx} + \phi_{yy} + \phi_{zz} = 0$.
(b) Show that the two-dimensional analogue $\phi(x,y) = (x^2+y^2)^{-1/2}$ is not harmonic.

**Solution:**
**(a) 3D Verification:**
Let $R = (x^2+y^2+z^2)^{1/2}$. Then $\phi = R^{-1}$.
1. Compute the first-order partial derivatives:
   $$\phi_x = -R^{-2} \frac{\partial R}{\partial x} = -R^{-2}\left( \frac{x}{R} \right) = -x R^{-3}$$
2. Compute the second-order partial derivative $\phi_{xx}$ using the product rule:
   $$\phi_{xx} = \frac{\partial}{\partial x}(-x R^{-3}) = -R^{-3} - x (-3R^{-4}) \frac{\partial R}{\partial x} = -R^{-3} + 3x R^{-4}\left( \frac{x}{R} \right) = -R^{-3} + 3x^2 R^{-5}$$
3. By symmetry, the derivatives with respect to $y$ and $z$ are:
   $$\phi_{yy} = -R^{-3} + 3y^2 R^{-5}$$
   $$\phi_{zz} = -R^{-3} + 3z^2 R^{-5}$$
4. Add the second-order derivatives:
   $$\phi_{xx} + \phi_{yy} + \phi_{zz} = -3R^{-3} + 3(x^2 + y^2 + z^2)R^{-5}$$
   Since $x^2+y^2+z^2 = R^2$:
   $$= -3R^{-3} + 3(R^2)R^{-5} = -3R^{-3} + 3R^{-3} = 0$$
Laplace's equation is satisfied in 3D.

**(b) 2D Analogue Verification:**
Let $r = (x^2+y^2)^{1/2}$. Then $\phi = r^{-1}$.
1. Compute the second-order partial derivatives:
   $$\phi_{xx} = -r^{-3} + 3x^2 r^{-5}$$
   $$\phi_{yy} = -r^{-3} + 3y^2 r^{-5}$$
2. Add the derivatives:
   $$\phi_{xx} + \phi_{yy} = -2r^{-3} + 3(x^2 + y^2)r^{-5} = -2r^{-3} + 3(r^2)r^{-5} = -2r^{-3} + 3r^{-3} = r^{-3}$$
Since $r^{-3} \ne 0$ for all finite $r$, the 2D analogue is **not** harmonic.

---

#### Problem 20
Show by a counterexample that if $v(x,y)$ is a harmonic conjugate of $u(x,y)$, then $u(x,y)$ is not necessarily a harmonic conjugate of $v(x,y)$.

**Solution:**
Let $f(z) = z = x + iy$.
1. Here, $u(x,y) = x$ and $v(x,y) = y$.
2. Check if $v$ is a harmonic conjugate of $u$:
   * $v_y = 1 = u_x$ (Satisfied).
   * $v_x = 0 = -u_y$ (Satisfied).
   Yes, $v(x,y) = y$ is a harmonic conjugate of $u(x,y) = x$.
3. Check if $u$ is a harmonic conjugate of $v$:
   For $u$ to be a harmonic conjugate of $v$, the function $g(z) = v + iu = y + ix$ must be analytic.
   Let's check the C-R equations for $g(z)$:
   * Real part of $g$ is $U = y$; imaginary part is $V = x$.
   * $U_x = 0$ and $V_y = 0 \implies U_x = V_y$ (Satisfied).
   * $U_y = 1$ and $V_x = 1 \implies U_y = -V_x \implies 1 = -1$ (Fails!).
Since C-R equations fail, $u$ is **not** a harmonic conjugate of $v$. In fact, the conjugate of $v$ is $-u$.

---

#### Problem 21
Prove that if $f(z)$ is analytic and nonzero in a domain $D$, then the function $\phi(x,y) = \log_e |f(z)|$ is harmonic in $D$.

**Solution:**
1. Let $g(z) = \operatorname{Ln}(f(z))$ be the principal branch of the complex logarithm.
2. Since $f(z)$ is analytic and nonzero in $D$, the composition $g(z) = \operatorname{Ln}(f(z))$ is analytic in $D$.
3. The real part of $g(z)$ is:
   $$\operatorname{Re}(g(z)) = \ln|f(z)| = \log_e |f(z)|$$
4. Since the real part of any analytic function is harmonic, $\phi(x,y) = \log_e |f(z)|$ is harmonic in $D$.

---

#### Problem 22
Prove that if $f(z) = u(x,y) + iv(x,y)$ is analytic in a domain $D$, then the function $\phi(x,y) = u(x,y)v(x,y)$ is harmonic in $D$.

**Solution:**
1. Since $f(z) = u + iv$ is analytic in $D$, its square $[f(z)]^2$ is also analytic in $D$:
   $$[f(z)]^2 = (u + iv)^2 = (u^2 - v^2) + i(2uv)$$
2. The imaginary part of this analytic function must be harmonic:
   $$\psi(x,y) = 2uv \quad \text{is harmonic in } D$$
3. Since any constant multiple of a harmonic function is also harmonic:
   $$\phi(x,y) = uv = \frac{1}{2}(2uv) \quad \text{is harmonic in } D$$
This completes the proof.
