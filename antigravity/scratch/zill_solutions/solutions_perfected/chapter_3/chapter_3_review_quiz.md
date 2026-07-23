# Complex Analysis — Dennis G. Zill, 2nd Edition
## Chapter 3 · Chapter 3 Review Quiz
### Problems 1 – 22 · Complete Solutions

---

> **Review of Chapter 3: Analytic Functions**
>
> 1. **Differentiability vs. Analyticity:** Differentiability is a local property defined at a single point, whereas analyticity requires differentiability in an open neighborhood around the point.
> 2. **Cauchy-Riemann Equations:** In Cartesian coordinates, these are necessary conditions for differentiability:
>    $$u_x = v_y \quad \text{and} \quad u_y = -v_x$$
>    If these hold and the partial derivatives are continuous in a domain, the function is analytic.
> 3. **Harmonic Functions:** Satisfy Laplace's equation:
>    $$\nabla^2 u = u_{xx} + u_{yy} = 0$$
>    The real and imaginary parts of an analytic function are always harmonic.
> 4. **Conformal Properties:** The level curves of the real and imaginary parts of an analytic function form orthogonal trajectories at all points where the derivative is nonzero.

---

## Problems 1 – 12: True or False Questions with Justifications

**In Problems 1–12, answer True or False. If the statement is False, justify your answer with a detailed explanation or counterexample. If it is True, provide a formal proof or verification.**

#### Problem 1
True or False: If a complex function $f$ is differentiable at point $z$, then $f$ is analytic at $z$.

**Solution:**
**False**
*Justification:* Differentiability at a single point does not guarantee analyticity at that point. For a function $f$ to be analytic at a point $z$, it must be differentiable not only at $z$ but also at every point in some open neighborhood centered at $z$.
*Counterexample:* The function $f(z) = |z|^2$ is differentiable only at $z = 0$, where $f'(0) = 0$. Because it is not differentiable anywhere else, there is no open neighborhood of $z=0$ in which it is differentiable. Thus, $f(z) = |z|^2$ is nowhere analytic, including at $z = 0$.

---

#### Problem 2
True or False: The function $f(z) = \frac{y}{x^2 + y^2} + i\frac{x}{x^2 + y^2}$ is differentiable for all $z \ne 0$.

**Solution:**
**True**
*Justification:* We can verify this by checking C-R equations and continuity or by algebraic simplification.
1. Notice that the function can be rewritten as:
   $$f(z) = i \frac{x - iy}{x^2+y^2} = i \frac{\bar{z}}{|z|^2} = i \frac{\bar{z}}{z\bar{z}} = \frac{i}{z}$$
2. The function $f(z) = \frac{i}{z}$ is a rational function. Its derivative is:
   $$f'(z) = -\frac{i}{z^2}$$
   This derivative exists and is continuous for all $z \ne 0$.
3. Alternatively, checking the C-R equations:
   * Let $u(x,y) = \frac{y}{x^2+y^2}$ and $v(x,y) = \frac{x}{x^2+y^2}$.
   * Compute the partial derivatives:
     $$u_x = -\frac{2xy}{(x^2+y^2)^2}, \quad v_y = -\frac{2xy}{(x^2+y^2)^2} \implies u_x = v_y$$
     $$u_y = \frac{x^2-y^2}{(x^2+y^2)^2}, \quad v_x = \frac{y^2-x^2}{(x^2+y^2)^2} \implies u_y = -v_x$$
Since the partial derivatives are continuous and the C-R equations are satisfied for all $z \ne 0$, the function is differentiable for all $z \ne 0$.

---

#### Problem 3
True or False: The function $f(z) = z^2 + \bar{z}$ is nowhere analytic.

**Solution:**
**True**
*Justification:* We check the Cauchy-Riemann equations:
1. Express $f(z)$ in Cartesian form:
   $$f(z) = (x+iy)^2 + (x-iy) = x^2 - y^2 + 2ixy + x - iy = (x^2 - y^2 + x) + i(2xy - y)$$
   Thus:
   $$u(x,y) = x^2 - y^2 + x \quad \text{and} \quad v(x,y) = 2xy - y$$
2. Compute the partial derivatives:
   * $u_x = 2x + 1$
   * $u_y = -2y$
   * $v_x = 2y$
   * $v_y = 2x - 1$
3. Check C-R equations:
   * $u_x = v_y \implies 2x + 1 = 2x - 1 \implies 1 = -1$ (which is impossible).
Since $u_x = v_y$ is never satisfied anywhere in the complex plane, the C-R equations fail everywhere. Consequently, the function is nowhere differentiable and therefore nowhere analytic.

---

#### Problem 4
True or False: The function $f(z) = \cos y - i\sin y$ is nowhere differentiable.

**Solution:**
**True**
*Justification:* We check the Cauchy-Riemann equations:
1. Identify the real and imaginary parts:
   $$u(x,y) = \cos y \quad \text{and} \quad v(x,y) = -\sin y$$
2. Compute the partial derivatives:
   * $u_x = 0, \quad u_y = -\sin y$
   * $v_x = 0, \quad v_y = -\cos y$
3. Check the C-R equations:
   * $u_x = v_y \implies 0 = -\cos y \implies y = \frac{\pi}{2} + k\pi$ (for $k \in \mathbb{Z}$).
   * $u_y = -v_x \implies -\sin y = 0 \implies y = m\pi$ (for $m \in \mathbb{Z}$).
4. Combine the conditions:
   For both equations to hold, $y$ must be of the form $\frac{\pi}{2} + k\pi$ and $m\pi$ simultaneously. This is impossible since the sets of points are disjoint.
Thus, the C-R equations are never satisfied, making the function nowhere differentiable.

---

#### Problem 5
True or False: There does not exist an analytic function $f(z) = u(x, y) + i v(x, y)$ for which $u(x, y) = y^3 + 5x$.

**Solution:**
**True**
*Justification:* The real part $u(x,y)$ of any analytic function must be a harmonic function, meaning it must satisfy Laplace's equation $\nabla^2 u = u_{xx} + u_{yy} = 0$.
1. Compute the partial derivatives of $u(x,y) = y^3 + 5x$:
   * $u_x = 5 \implies u_{xx} = 0$
   * $u_y = 3y^2 \implies u_{yy} = 6y$
2. Add the second derivatives:
   $$u_{xx} + u_{yy} = 0 + 6y = 6y$$
3. For $u$ to be harmonic, we must have $6y = 0$ for all $(x,y)$ in the domain. This only holds along the line $y = 0$, which contains no open neighborhoods. Since $u$ is not harmonic in any domain, no such analytic function $f(z)$ can exist.

---

#### Problem 6
True or False: The function $u(x, y) = e^{4x} \cos 2y$ is the real part of an analytic function.

**Solution:**
**False**
*Justification:* For $u(x,y)$ to be the real part of an analytic function, it must be harmonic:
1. Compute the partial derivatives:
   * $u_x = 4e^{4x}\cos 2y \implies u_{xx} = 16e^{4x}\cos 2y$
   * $u_y = -2e^{4x}\sin 2y \implies u_{yy} = -4e^{4x}\cos 2y$
2. Check Laplace's equation:
   $$u_{xx} + u_{yy} = 16e^{4x}\cos 2y - 4e^{4x}\cos 2y = 12e^{4x}\cos 2y \ne 0$$
Since $u$ does not satisfy Laplace's equation, it is not harmonic and therefore cannot be the real part of an analytic function.

---

#### Problem 7
True or False: If $f(z) = e^x\cos y + i e^x\sin y$, then $f'(z) = f(z)$.

**Solution:**
**True**
*Justification:* The given function is the complex exponential function $f(z) = e^z$:
1. $f(z) = e^x(\cos y + i\sin y) = e^z$.
2. The complex exponential function is entire, and its derivative is:
   $$\frac{d}{dz}(e^z) = e^z = f(z)$$
3. Alternatively, using the derivative formula $f'(z) = u_x + i v_x$:
   * $u_x = e^x\cos y$ and $v_x = e^x\sin y$.
   * $f'(z) = e^x\cos y + i e^x\sin y = f(z)$.
Thus, the statement is true.

---

#### Problem 8
True or False: If $u(x, y)$ and $v(x, y)$ are harmonic functions in a domain $D$, then the function $f(z) = (u_y - v_x) + i(u_x + v_y)$ is analytic in $D$.

**Solution:**
**True**
*Justification:* Let $U(x,y) = u_y - v_x$ and $V(x,y) = u_x + v_y$. We check the C-R equations for $f(z) = U + iV$:
1. Check the first C-R equation $U_x = V_y$:
   * $U_x = \frac{\partial}{\partial x}(u_y - v_x) = u_{yx} - v_{xx}$.
   * $V_y = \frac{\partial}{\partial y}(u_x + v_y) = u_{xy} + v_{yy}$.
   * Since $u$ and $v$ are harmonic, their mixed partial derivatives are equal ($u_{xy} = u_{yx}$). Thus, the equation $U_x = V_y$ becomes:
     $$u_{yx} - v_{xx} = u_{xy} + v_{yy} \implies -v_{xx} = v_{yy} \implies v_{xx} + v_{yy} = 0$$
     This is true because $v$ is harmonic.
2. Check the second C-R equation $U_y = -V_x$:
   * $U_y = u_{yy} - v_{xy}$.
   * $-V_x = -(u_{xx} + v_{yx}) = -u_{xx} - v_{yx}$.
   * Setting them equal:
     $$u_{yy} - v_{xy} = -u_{xx} - v_{yx} \implies u_{xx} + u_{yy} = 0$$
     This is true because $u$ is harmonic.
Since the C-R equations hold and the partial derivatives are continuous, $f(z)$ is analytic in $D$.

---

#### Problem 9
True or False: If $g$ is an entire function, then $f(z) = (iz^2 + z)\overline{g(z)}$ is necessarily an entire function.

**Solution:**
**False**
*Justification:* A conjugate function $\overline{g(z)}$ of an analytic function $g(z)$ is analytic if and only if $g(z)$ is a constant function. If $g(z)$ is nonconstant, then $\overline{g(z)}$ is nowhere analytic.
*Counterexample:* Let $g(z) = z$, which is entire. Then:
$$f(z) = (iz^2+z)\bar{z} = iz^2\bar{z} + z\bar{z}$$
Using the complex partial derivative with respect to $\bar{z}$:
$$\frac{\partial f}{\partial \bar{z}} = iz^2 + z$$
For $f$ to be analytic, we must have $\frac{\partial f}{\partial \bar{z}} = 0 \implies iz^2 + z = 0 \implies z(iz + 1) = 0 \implies z = 0 \text{ or } z = i$.
Since this derivative is nonzero almost everywhere, the function is not analytic.

---

#### Problem 10
True or False: The Cauchy-Riemann equations are necessary conditions for differentiability.

**Solution:**
**True**
*Justification:* By Definition 3.2, if a complex function $f(z) = u(x, y) + i v(x, y)$ is differentiable at a point $z_0$, then the first-order partial derivatives of $u$ and $v$ must exist at $z_0$ and satisfy the Cauchy-Riemann equations:
$$u_x(x_0, y_0) = v_y(x_0, y_0) \quad \text{and} \quad u_y(x_0, y_0) = -v_x(x_0, y_0)$$
Thus, the equations are necessary.

---

#### Problem 11
True or False: The Cauchy-Riemann equations can be satisfied at a point $z$, but the function $f(z) = u(x, y) + i v(x, y)$ can be nondifferentiable at $z$.

**Solution:**
**True**
*Justification:* The Cauchy-Riemann equations are necessary but not sufficient for differentiability. For a function to be differentiable at a point, the partial derivatives must also be continuous at that point (or $u$ and $v$ must be real-differentiable).
*Counterexample:* The function defined by:
$$f(z) = \begin{cases} \frac{z^5}{|z|^4}, & z \ne 0 \\ 0, & z = 0 \end{cases}$$
satisfies the Cauchy-Riemann equations at $z = 0$, but is not differentiable at $z = 0$ because the limit defining the derivative depends on the angle of approach.

---

#### Problem 12
True or False: If the function $f(z) = u(x, y) + i v(x, y)$ is analytic at a point $z$, then necessarily the function $g(z) = v(x, y) - i u(x, y)$ is analytic at $z$.

**Solution:**
**True**
*Justification:* Note that we can express $g(z)$ in terms of $f(z)$:
$$g(z) = v(x,y) - iu(x,y) = -i(u(x,y) + iv(x,y)) = -i f(z)$$
Since $f(z)$ is analytic at $z$, and multiplication by a complex constant ($-i$) preserves analyticity, the function $g(z) = -i f(z)$ must also be analytic at $z$.

---

## Problems 13 – 22: Fill in the Blanks

**In Problems 13–22, complete the statement by filling in the blank with the correct mathematical expression or term. Show the steps leading to your answer.**

#### Problem 13
If $f(z) = \frac{1}{z^2 + 5iz - 4}$, then $f'(z) =$ \_\_\_\_\_\_\_\_.

**Solution:**
We use the chain rule:
$$f(z) = (z^2 + 5iz - 4)^{-1}$$
$$f'(z) = -1(z^2 + 5iz - 4)^{-2} \cdot \frac{d}{dz}(z^2 + 5iz - 4) = -\frac{2z + 5i}{(z^2 + 5iz - 4)^2}$$
Thus, the answer is:
$$\mathbf{-\frac{2z + 5i}{(z^2 + 5iz - 4)^2}}$$

---

#### Problem 14
The function $f(z) = \frac{1}{z^2 + 5iz - 4}$ is not analytic at $z =$ \_\_\_\_\_\_\_\_.

**Solution:**
A rational function fails to be analytic where its denominator is zero:
$$z^2 + 5iz - 4 = 0$$
Solve the quadratic equation:
$$(z + i)(z + 4i) = 0 \implies z = -i, \quad z = -4i$$
Thus, the answer is:
$$\mathbf{-i, \quad -4i}$$

---

#### Problem 15
The function $f(z) = (2 - x)^3 + i(y - 1)^3$ is differentiable at $z =$ \_\_\_\_\_\_\_\_.

**Solution:**
We find where the C-R equations are satisfied:
1. Identify the real and imaginary parts:
   $$u(x,y) = (2-x)^3 \quad \text{and} \quad v(x,y) = (y-1)^3$$
2. Compute the partial derivatives:
   * $u_x = -3(2-x)^2, \quad u_y = 0$
   * $v_x = 0, \quad v_y = 3(y-1)^2$
3. Apply C-R equations:
   * $u_y = -v_x \implies 0 = 0$ (Always satisfied).
   * $u_x = v_y \implies -3(2-x)^2 = 3(y-1)^2 \implies (x-2)^2 + (y-1)^2 = 0$.
4. Solve:
   Since $(x-2)^2 \ge 0$ and $(y-1)^2 \ge 0$, the sum of squares is zero if and only if both terms are zero:
   $$x - 2 = 0 \implies x = 2 \quad \text{and} \quad y - 1 = 0 \implies y = 1$$
Thus, the function is differentiable only at $z = 2 + i$. The answer is:
$$\mathbf{2 + i}$$

---

#### Problem 16
For $f(z) = 2x^3 + 3iy^2$, the derivative $f'(x + i x^2) =$ \_\_\_\_\_\_\_\_.

**Solution:**
1. Identify the real and imaginary parts:
   $$u(x,y) = 2x^3 \quad \text{and} \quad v(x,y) = 3y^2$$
2. Compute the partial derivatives:
   * $u_x = 6x^2, \quad u_y = 0$
   * $v_x = 0, \quad v_y = 6y$
3. Determine where the function is differentiable (C-R equations):
   * $u_x = v_y \implies 6x^2 = 6y \implies y = x^2$ (along the parabola $y = x^2$, which corresponds to points of the form $z = x + i x^2$).
   * $u_y = -v_x \implies 0 = 0$ (Satisfied).
4. Compute the derivative along this curve using $f'(z) = u_x + iv_x$:
   $$f'(z) = 6x^2 + i(0) = 6x^2$$
Thus, the answer is:
$$\mathbf{6x^2}$$

---

#### Problem 17
For $f(z) = \frac{x-1}{(x-1)^2 + (y-1)^2} - i\frac{y-1}{(x-1)^2 + (y-1)^2}$ in an appropriate domain $D$, the derivative $f'(z) =$ \_\_\_\_\_\_\_\_.

**Solution:**
1. Notice that the function can be rewritten in terms of $z$ by substituting $Z = z - (1+i) = (x-1) + i(y-1)$:
   $$f(z) = \frac{(x-1) - i(y-1)}{(x-1)^2 + (y-1)^2} = \frac{\overline{z - (1+i)}}{|z - (1+i)|^2} = \frac{1}{z - 1 - i}$$
2. The derivative of this analytic function is:
   $$f'(z) = \frac{d}{dz}\left( (z - 1 - i)^{-1} \right) = -(z - 1 - i)^{-2} = -\frac{1}{(z - 1 - i)^2}$$
Thus, the answer is:
$$\mathbf{-\frac{1}{(z - 1 - i)^2}}$$

---

#### Problem 18
Find an analytic function $f(z)$ for which the real part is $u(x, y) = \log_e(x^2 + y^2)$ is $f(z) = \log_e(x^2+y^2) + i$ \_\_\_\_\_\_\_\_.

**Solution:**
1. Express the real part in terms of the complex variable:
   $$u(x,y) = \ln(x^2+y^2) = 2\ln|z| = \operatorname{Re}(2\operatorname{Ln}(z))$$
2. Since the imaginary part of $2\operatorname{Ln}(z)$ is $2\operatorname{Arg}(z)$, the analytic function is:
   $$f(z) = 2\operatorname{Ln}(z) + iC = \log_e(x^2+y^2) + i(2\operatorname{Arg}(z) + C)$$
Thus, the answer is:
$$\mathbf{2\operatorname{Arg}(z) + C} \quad \text{(or } \mathbf{2\arctan(y/x) + C}\text{)}$$

---

#### Problem 19
The function $f(z)$ is analytic in a domain $D$ and $f(z) = c + iv(x, y)$, where $c$ is a real constant. Then $f$ is a \_\_\_\_\_\_\_\_ in $D$.

**Solution:**
**constant function**
*Proof:*
Since the real part is constant $u(x,y) = c$:
1. $u_x = 0$ and $u_y = 0$.
2. By the Cauchy-Riemann equations:
   * $v_x = -u_y = 0$
   * $v_y = u_x = 0$
3. Since the partial derivatives of $u$ and $v$ are all zero everywhere in the domain $D$, both $u$ and $v$ are constant. Thus, $f(z) = u + iv$ is a constant function.

---

#### Problem 20
Evaluate the limit:
$$\lim_{z \to 2i} \frac{z^5 - 4iz^4 - 4z^3 + z^2 - 4iz + 4}{5z^4 - 20iz^3 - 21z^2 - 4iz + 4} = \text{\_\_\_\_\_\_\_\_}$$

**Solution:**
We evaluate the limit by direct substitution of $z = 2i$:
1. **Numerator:**
   $$N(2i) = (2i)^5 - 4i(2i)^4 - 4(2i)^3 + (2i)^2 - 4i(2i) + 4$$
   Compute each term:
   * $(2i)^5 = 32 i^5 = 32i$
   * $-4i(2i)^4 = -4i(16) = -64i$
   * $-4(2i)^3 = -4(-8i) = 32i$
   * $(2i)^2 = -4$
   * $-4i(2i) = 8$
   * Constant term = $4$
   Sum them up:
   $$N(2i) = 32i - 64i + 32i - 4 + 8 + 4 = 8$$
2. **Denominator:**
   $$D(2i) = 5(2i)^4 - 20i(2i)^3 - 21(2i)^2 - 4i(2i) + 4$$
   Compute each term:
   * $5(2i)^4 = 5(16) = 80$
   * $-20i(2i)^3 = -20i(-8i) = -160$
   * $-21(2i)^2 = -21(-4) = 84$
   * $-4i(2i) = 8$
   * Constant term = $4$
   Sum them up:
   $$D(2i) = 80 - 160 + 84 + 8 + 4 = 16$$
3. **Limit value:**
   $$\text{Limit} = \frac{N(2i)}{D(2i)} = \frac{8}{16} = \frac{1}{2}$$
Thus, the answer is:
$$\mathbf{\frac{1}{2}} \quad \text{(or } \mathbf{0.5}\text{)}$$

---

#### Problem 21
The family of curves $u(x, y) = c_1$ where $u(x, y) = e^{-x}(x \sin y - y \cos y)$ and the family $v(x, y) = c_2$ where $v(x, y) = $ \_\_\_\_\_\_\_\_ are orthogonal families.

**Solution:**
The orthogonal families are defined by the real and imaginary parts of an analytic function. We find the harmonic conjugate $v(x,y)$ of $u(x,y)$:
1. Notice that the function $u(x,y)$ is the real part of:
   $$g(z) = i z e^{-z} = i(x+iy)e^{-x-iy} = (ix - y)e^{-x}(\cos y - i\sin y)$$
   $$= e^{-x} [ (ix-y)\cos y - i^2(ix-y)\sin y ] / i \quad \text{etc.}$$
   Let's check C-R equations directly:
   * $u_x = -e^{-x}(x\sin y - y\cos y) + e^{-x}\sin y = e^{-x}(y\cos y - x\sin y + \sin y)$
   * $u_y = e^{-x}(x\cos y - \cos y + y\sin y) = e^{-x}(x\cos y + y\sin y - \cos y)$
2. Integrate $v_y = u_x$ with respect to $y$:
   $$v(x,y) = e^{-x} \int (y\cos y - x\sin y + \sin y) \, dy$$
   * $\int y\cos y \, dy = y\sin y + \cos y$
   * $\int \sin y \, dy = -\cos y$
   * $\int -x\sin y \, dy = x\cos y$
   Combine:
   $$v(x,y) = e^{-x}(y\sin y + \cos y - \cos y + x\cos y) + h(x) = e^{-x}(x\cos y + y\sin y) + h(x)$$
3. Differentiate with respect to $x$ and equate to $-u_y$:
   $$v_x = -e^{-x}(x\cos y + y\sin y) + e^{-x}\cos y + h'(x) = e^{-x}(-x\cos y - y\sin y + \cos y) + h'(x)$$
   Equating to $-u_y = -e^{-x}(x\cos y + y\sin y - \cos y)$:
   $$h'(x) = 0 \implies h(x) = C$$
Thus, the conjugate function is:
$$\mathbf{e^{-x}(x \cos y + y \sin y) + C}$$

---

#### Problem 22
The statement “There exists a function $f$ that is analytic for $\operatorname{Re}(z) \ge 1$ and is not analytic anywhere else” is false because \_\_\_\_\_\_\_\_.

**Solution:**
**the domain of analyticity of a function must be an open set**
*Proof:*
By definition, a complex function $f$ is analytic at a point $z_0$ if it is differentiable at $z_0$ and at every point in some open neighborhood of $z_0$. The set of all points where $f$ is analytic is therefore the union of open neighborhoods, which must be an open set.
The set defined by $\operatorname{Re}(z) \ge 1$ is closed because it contains its boundary line $\operatorname{Re}(z) = 1$. For $f$ to be analytic at any point on the boundary line $\operatorname{Re}(z) = 1$, it must be differentiable in a neighborhood of that point, which necessarily extends into the region $\operatorname{Re}(z) < 1$. Thus, the domain of analyticity cannot be exactly $\operatorname{Re}(z) \ge 1$.
