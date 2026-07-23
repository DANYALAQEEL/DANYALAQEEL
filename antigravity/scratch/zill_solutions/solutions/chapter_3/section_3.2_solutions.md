# Complex Analysis — Dennis G. Zill, 2nd Edition
## Chapter 3 · Section 3.2 — Cauchy-Riemann Equations
### Problems 1 – 35 · Complete Solutions

---

> **Key Concepts of the Cauchy-Riemann Equations**
>
> 1. **Cauchy-Riemann (C-R) Equations (Cartesian):** For a complex function \( f(z) = u(x, y) + i v(x, y) \), if \( f \) is differentiable at \( z \), then:
>    \[
>    u_x = v_y \quad \text{and} \quad u_y = -v_x
>    \]
> 2. **Sufficient Condition for Analyticity:** If the real-valued functions \( u(x,y) \) and \( v(x,y) \) and their first-order partial derivatives are continuous in a domain \( D \), and satisfy the C-R equations at every point in \( D \), then \( f(z) = u+iv \) is analytic in \( D \).
> 3. **Derivative Formula:** When \( f \) is differentiable, its derivative is:
>    \[
>    f'(z) = u_x + i v_x = v_y - i u_y
>    \]
> 4. **C-R Equations (Polar):** For \( f(z) = u(r, \theta) + i v(r, \theta) \):
>    \[
>    u_r = \frac{1}{r} v_\theta \quad \text{and} \quad v_r = -\frac{1}{r} u_\theta
>    \]
>    The derivative in polar form is:
>    \[
>    f'(z) = e^{-i\theta} (u_r + i v_r)
>    \]

---

## Problems 1 & 2: Verification of C-R Equations for Analytic Functions

### Problem 1: \( f(z) = z^3 \)
* Express in Cartesian form:
  \[
  f(z) = (x+iy)^3 = (x^3 - 3xy^2) + i(3x^2y - y^3) \implies u(x,y) = x^3 - 3xy^2, \, v(x,y) = 3x^2y - y^3
  \]
* Compute first-order partial derivatives:
  \[
  u_x = 3x^2 - 3y^2, \quad v_y = 3x^2 - 3y^2 \implies u_x = v_y
  \]
  \[
  u_y = -6xy, \quad v_x = 6xy \implies u_y = -v_x
  \]
* Since the C-R equations are satisfied everywhere, the verification is complete.

### Problem 2: \( f(z) = 3z^2 + 5z - 6i \)
* Express in Cartesian form:
  \[
  f(z) = 3(x^2 - y^2 + 2ixy) + 5(x+iy) - 6i = (3x^2 - 3y^2 + 5x) + i(6xy + 5y - 6)
  \]
  \[
  u(x,y) = 3x^2 - 3y^2 + 5x, \quad v(x,y) = 6xy + 5y - 6
  \]
* Compute partial derivatives:
  \[
  u_x = 6x + 5, \quad v_y = 6x + 5 \implies u_x = v_y
  \]
  \[
  u_y = -6y, \quad v_x = 6y \implies u_y = -v_x
  \]
* C-R equations are satisfied everywhere.

---

## Problems 3 – 8: Showing Functions are Nowhere Analytic

### Problem 3: \( f(z) = \operatorname{Re}(z) = x \)
* Here \( u = x \) and \( v = 0 \).
* Compute partials: \( u_x = 1 \), \( v_y = 0 \).
* Since \( u_x \ne v_y \) everywhere, the function is nowhere analytic.

### Problem 4: \( f(z) = y + ix \)
* Here \( u = y \) and \( v = x \).
* Compute partials: \( u_x = 0 \), \( v_y = 0 \implies u_x = v_y \) is satisfied.
* However, \( u_y = 1 \) and \( v_x = 1 \implies u_y = 1 \ne -v_x = -1 \).
* Since C-R equations are never satisfied, the function is nowhere analytic.

### Problem 5: \( f(z) = 4z - 6\bar{z} + 3 \)
* Express in Cartesian form:
  \[
  f(z) = 4(x+iy) - 6(x-iy) + 3 = (-2x + 3) + i(10y) \implies u = -2x+3, \, v = 10y
  \]
* Compute partials: \( u_x = -2 \), \( v_y = 10 \).
* Since \( u_x \ne v_y \), the function is nowhere analytic.

### Problem 6: \( f(z) = \bar{z}^2 \)
* Express in Cartesian form:
  \[
  f(z) = (x-iy)^2 = (x^2 - y^2) - 2ixy \implies u = x^2-y^2, \, v = -2xy
  \]
* Compute partials:
  \[
  u_x = 2x, \, v_y = -2x \implies u_x = v_y \iff x = 0
  \]
  \[
  u_y = -2y, \, v_x = -2y \implies u_y = -v_x \iff y = 0
  \]
* C-R equations are satisfied only at the isolated point \( z = 0 \). Since analyticity at a point requires differentiability in an open neighborhood, \( f \) is nowhere analytic.

### Problem 7: \( f(z) = x^2 + y^2 \)
* Here \( u = x^2+y^2 \) and \( v = 0 \).
* Compute partials:
  \[
  u_x = 2x, \, v_y = 0 \iff x = 0
  \]
  \[
  u_y = 2y, \, v_x = 0 \iff y = 0
  \]
* Satisfied only at \( z = 0 \), hence nowhere analytic.

### Problem 8: \( f(z) = \frac{x}{x^2 + y^2} + i\frac{y}{x^2 + y^2} \) for \( z \ne 0 \)
* Here \( u = \frac{x}{x^2+y^2} \) and \( v = \frac{y}{x^2+y^2} \).
* Compute partials:
  \[
  u_x = \frac{y^2-x^2}{(x^2+y^2)^2}, \quad v_y = \frac{x^2-y^2}{(x^2+y^2)^2}
  \]
  For \( u_x = v_y \implies y^2-x^2 = x^2-y^2 \implies x^2 = y^2 \).
  \[
  u_y = \frac{-2xy}{(x^2+y^2)^2}, \quad v_x = \frac{-2xy}{(x^2+y^2)^2}
  \]
  For \( u_y = -v_x \implies -2xy = 2xy \implies xy = 0 \implies x=0 \text{ or } y=0 \).
* Combining these conditions, we must have \( x=y=0 \), which is excluded from the domain. Thus C-R equations are never satisfied, and the function is nowhere analytic.

---

## Problems 9 – 16: Domains of Analyticity

### Problem 9: \( f(z) = e^{-x}\cos y - i e^{-x}\sin y \)
* \( u = e^{-x}\cos y \), \( v = -e^{-x}\sin y \).
* Compute partials:
  \[
  u_x = -e^{-x}\cos y, \quad v_y = -e^{-x}\cos y \implies u_x = v_y
  \]
  \[
  u_y = -e^{-x}\sin y, \quad v_x = e^{-x}\sin y \implies u_y = -v_x
  \]
* The partials are continuous everywhere.
* **Domain of analyticity:** Entire complex plane \( \boxed{\mathbb{C}} \).

### Problem 10: \( f(z) = x + \sin x \cosh y + i(y + \cos x \sinh y) \)
* \( u = x + \sin x \cosh y \), \( v = y + \cos x \sinh y \).
* Compute partials:
  \[
  u_x = 1 + \cos x \cosh y, \quad v_y = 1 + \cos x \cosh y \implies u_x = v_y
  \]
  \[
  u_y = \sin x \sinh y, \quad v_x = -\sin x \sinh y \implies u_y = -v_x
  \]
* Partials are continuous everywhere.
* **Domain of analyticity:** Entire complex plane \( \boxed{\mathbb{C}} \).

### Problem 11: \( f(z) = e^{x^2-y^2}\cos(2xy) + ie^{x^2-y^2}\sin(2xy) \)
* \( u = e^{x^2-y^2}\cos(2xy) \), \( v = e^{x^2-y^2}\sin(2xy) \).
* Compute partials:
  \[
  u_x = 2x e^{x^2-y^2}\cos(2xy) - 2y e^{x^2-y^2}\sin(2xy), \quad v_y = 2x e^{x^2-y^2}\cos(2xy) - 2y e^{x^2-y^2}\sin(2xy) \implies u_x = v_y
  \]
  \[
  u_y = -2y e^{x^2-y^2}\cos(2xy) - 2x e^{x^2-y^2}\sin(2xy), \quad v_x = 2y e^{x^2-y^2}\cos(2xy) + 2x e^{x^2-y^2}\sin(2xy) \implies u_y = -v_x
  \]
* Partials are continuous everywhere.
* **Domain of analyticity:** Entire complex plane \( \boxed{\mathbb{C}} \) (Note: \( f(z) = e^{z^2} \)).

### Problem 12: \( f(z) = 4x^2 + 5x - 4y^2 + 9 + i(8xy + 5y - 1) \)
* \( u = 4x^2 + 5x - 4y^2 + 9 \), \( v = 8xy + 5y - 1 \).
* Compute partials:
  \[
  u_x = 8x + 5, \quad v_y = 8x + 5 \implies u_x = v_y
  \]
  \[
  u_y = -8y, \quad v_x = 8y \implies u_y = -v_x
  \]
* Partials are continuous everywhere.
* **Domain of analyticity:** Entire complex plane \( \boxed{\mathbb{C}} \) (Note: \( f(z) = 4z^2 + 5z + 9 - i \)).

### Problem 13: \( f(z) = \frac{x-1}{(x-1)^2+y^2} - i\frac{y}{(x-1)^2+y^2} \)
* \( u = \frac{x-1}{(x-1)^2+y^2} \), \( v = \frac{-y}{(x-1)^2+y^2} \).
* Let \( X = x-1 \).
  \[
  u_x = u_X = \frac{y^2-X^2}{(X^2+y^2)^2}, \quad v_y = \frac{y^2-X^2}{(X^2+y^2)^2} \implies u_x = v_y
  \]
  \[
  u_y = \frac{-2Xy}{(X^2+y^2)^2}, \quad v_x = v_X = \frac{2Xy}{(X^2+y^2)^2} \implies u_y = -v_x
  \]
* Partials are continuous everywhere except where \( (x-1)^2+y^2 = 0 \implies z = 1 \).
* **Domain of analyticity:** All points in the complex plane except \( \boxed{z = 1} \) (Note: \( f(z) = 1/(z-1) \)).

### Problem 14: \( f(z) = x^3 + xy^2 + \frac{x}{x^2+y^2} + i\left( x^2y + y^3 - \frac{y}{x^2+y^2} \right) \)
* **Analysis of Textbook Typo:**
  * As written in the textbook, \( u = x^3 + xy^2 + \frac{x}{x^2+y^2} \) and \( v = x^2y + y^3 - \frac{y}{x^2+y^2} \).
  * Checking C-R equations:
    \[
    u_x = 3x^2 + y^2 + \frac{y^2-x^2}{(x^2+y^2)^2}, \quad v_y = x^2 + 3y^2 + \frac{y^2-x^2}{(x^2+y^2)^2}
    \]
    For \( u_x = v_y \implies 2x^2 = 2y^2 \implies y = \pm x \).
    \[
    u_y = 2xy - \frac{2xy}{(x^2+y^2)^2}, \quad v_x = 2xy + \frac{2xy}{(x^2+y^2)^2}
    \]
    For \( u_y = -v_x \implies 4xy = 0 \implies x = 0 \text{ or } y = 0 \).
  * Thus, C-R equations are only satisfied at the origin, where the function is undefined. The function as printed is **nowhere analytic**.
* **Corrected Function Analysis:**
  * If the function is corrected to \( f(z) = z^3 + 1/z \):
    \[
    f(z) = (x^3 - 3xy^2 + \frac{x}{x^2+y^2}) + i(3x^2y - y^3 - \frac{y}{x^2+y^2})
    \]
    This is analytic everywhere except the origin \( z = 0 \).
* **Answer:** **Nowhere analytic** as printed in the textbook; **analytic for all \( z \ne 0 \)** if corrected to \( f(z) = z^3 + 1/z \).

### Problem 15: \( f(z) = \frac{\cos\theta}{r} - i\frac{\sin\theta}{r} \)
* Use polar form \( u = \frac{\cos\theta}{r} \), \( v = -\frac{\sin\theta}{r} \).
* Compute polar partials:
  \[
  u_r = -\frac{\cos\theta}{r^2}, \quad \frac{1}{r}v_\theta = -\frac{\cos\theta}{r^2} \implies u_r = \frac{1}{r}v_\theta
  \]
  \[
  v_r = \frac{\sin\theta}{r^2}, \quad -\frac{1}{r}u_\theta = \frac{\sin\theta}{r^2} \implies v_r = -\frac{1}{r}u_\theta
  \]
* Partials are continuous for all \( r > 0 \).
* **Domain of analyticity:** All points in the complex plane except \( \boxed{z = 0} \) (Note: \( f(z) = 1/z \)).

### Problem 16: \( f(z) = 5r\cos\theta + r^4\cos 4\theta + i(5r\sin\theta + r^4\sin 4\theta) \)
* \( u = 5r\cos\theta + r^4\cos 4\theta \), \( v = 5r\sin\theta + r^4\sin 4\theta \).
* Compute polar partials:
  \[
  u_r = 5\cos\theta + 4r^3\cos 4\theta, \quad \frac{1}{r}v_\theta = 5\cos\theta + 4r^3\cos 4\theta \implies u_r = \frac{1}{r}v_\theta
  \]
  \[
  v_r = 5\sin\theta + 4r^3\sin 4\theta, \quad -\frac{1}{r}u_\theta = 5\sin\theta + 4r^3\sin 4\theta \implies v_r = -\frac{1}{r}u_\theta
* Partials are continuous everywhere.
* **Domain of analyticity:** Entire complex plane \( \boxed{\mathbb{C}} \) (Note: \( f(z) = 5z + z^4 \)).

---

## Problems 17 & 18: Determining Constants for Analyticity

### Problem 17: \( f(z) = 3x - y + 5 + i(ax + by - 3) \)
* \( u = 3x-y+5, \, v = ax+by-3 \).
* Compute partials:
  \[
  u_x = 3, \, v_y = b \implies b = 3
  \]
  \[
  u_y = -1, \, v_x = a \implies -1 = -a \implies a = 1
  \]
* **Answer:** \( \boxed{a = 1, \, b = 3} \).

### Problem 18: \( f(z) = x^2 + axy + by^2 + i(cx^2 + dxy + y^2) \)
* \( u = x^2 + axy + by^2, \, v = cx^2 + dxy + y^2 \).
* Compute partials:
  \[
  u_x = 2x + ay, \quad v_y = dx + 2y \implies d = 2 \text{ and } a = 2
  \]
  \[
  u_y = ax + 2by, \quad v_x = 2cx + dy
  \]
  Using \( u_y = -v_x \):
  \[
  ax + 2by = -2cx - dy \implies a = -2c \implies 2 = -2c \implies c = -1
  \]
  \[
  2b = -d \implies 2b = -2 \implies b = -1
  \]
* **Answer:** \( \boxed{a = 2, \, b = -1, \, c = -1, \, d = 2} \).

---

## Problems 19 – 22: Differentiable along Curves

### Problem 19: \( f(z) = x^2 + y^2 + 2ixy \)
* \( u = x^2+y^2, \, v = 2xy \).
* Compute partials:
  \[
  u_x = 2x, \, v_y = 2x \implies u_x = v_y \text{ (always satisfied)}
  \]
  \[
  u_y = 2y, \, v_x = 2y \implies u_y = -v_x \iff 2y = -2y \iff y = 0
  \]
* C-R equations are satisfied only on the **x-axis** (\( y = 0 \)).
* The function is differentiable along the **x-axis** but nowhere analytic.

### Problem 20: \( f(z) = 3x^2y^2 - 6ix^2y^2 \)
* \( u = 3x^2y^2, \, v = -6x^2y^2 \).
* Compute partials:
  \[
  u_x = 6xy^2, \, v_y = -12x^2y \implies 6xy(y + 2x) = 0 \implies x=0, \, y=0, \text{ or } y=-2x
  \]
  \[
  u_y = 6x^2y, \, v_x = -12xy^2 \implies u_y = -v_x \iff 6xy(x - 2y) = 0 \implies x=0, \, y=0, \text{ or } x=2y
  \]
* For both equations to be satisfied: \( x = 0 \) or \( y = 0 \).
* The function is differentiable along the **coordinate axes** but nowhere analytic.

### Problem 21: \( f(z) = x^3 + 3xy^2 - x + i(y^3 + 3x^2y - y) \)
* \( u = x^3 + 3xy^2 - x, \, v = y^3 + 3x^2y - y \).
* Compute partials:
  \[
  u_x = 3x^2 + 3y^2 - 1, \, v_y = 3y^2 + 3x^2 - 1 \implies u_x = v_y \text{ (always satisfied)}
  \]
  \[
  u_y = 6xy, \, v_x = 6xy \implies u_y = -v_x \iff 12xy = 0 \implies x = 0 \text{ or } y = 0
  \]
* The function is differentiable along the **coordinate axes** but nowhere analytic.

### Problem 22: \( f(z) = x^2 - x + y + i(y^2 - 5y - x) \)
* \( u = x^2-x+y, \, v = y^2-5y-x \).
* Compute partials:
  \[
  u_x = 2x-1, \, v_y = 2y-5 \implies u_x = v_y \iff 2x-1 = 2y-5 \iff y = x+2
  \]
  \[
  u_y = 1, \, v_x = -1 \implies u_y = -v_x \iff 1 = 1 \text{ (always satisfied)}
  \]
* The function is differentiable along the line **\( y = x+2 \)** but nowhere analytic.

---

## Problems 23 & 24: Computing Derivatives

### Problem 23: Derivative of \( f(z) = e^{-x}\cos y - i e^{-x}\sin y \)
* Using \( f'(z) = u_x + i v_x \):
  \[
  f'(z) = -e^{-x}\cos y + i e^{-x}\sin y = \boxed{-f(z)}
  \]

### Problem 24: Derivative of \( f(z) = e^{x^2-y^2}\cos(2xy) + ie^{x^2-y^2}\sin(2xy) \)
* Using \( f'(z) = u_x + i v_x \):
  \[
  f'(z) = 2x e^{x^2-y^2}\cos(2xy) - 2y e^{x^2-y^2}\sin(2xy) + i\left( 2y e^{x^2-y^2}\cos(2xy) + 2x e^{x^2-y^2}\sin(2xy) \right)
  \]
  \[
  = 2(x+iy) e^{x^2-y^2} (\cos 2xy + i\sin 2xy) = \boxed{2z e^{z^2}}
  \]

---

## Problems 25 & 26

### Problem 25
* **(a) Show \( e^z \) is entire:**
  For \( u = e^x\cos y \) and \( v = e^x\sin y \):
  \[
  u_x = e^x\cos y, \, v_y = e^x\cos y \implies u_x = v_y
  \]
  \[
  u_y = -e^x\sin y, \, v_x = e^x\sin y \implies u_y = -v_x
  \]
  Since the partial derivatives are continuous and satisfy C-R everywhere, \( e^z \) is entire.
* **(b) Show \( (e^z)' = e^z \):**
  \[
  (e^z)' = u_x + i v_x = e^x\cos y + i e^x\sin y = e^z
  \]

### Problem 26: Show \( |f'(z)|^2 = u_x^2 + v_x^2 = u_y^2 + v_y^2 \)
* Since \( f'(z) = u_x + i v_x \), we have \( |f'(z)|^2 = u_x^2 + v_x^2 \).
* Applying C-R equations \( u_x = v_y \) and \( v_x = -u_y \):
  \[
  u_x^2 + v_x^2 = (v_y)^2 + (-u_y)^2 = u_y^2 + v_y^2
  \]

---

## Focus on Concepts (Problems 27 – 35)

### Problem 27: Analyticity of \( g(z) = v(x,y) + iu(x,y) \)
* Let \( U = v \) and \( V = u \). For \( g \) to be analytic:
  \[
  U_x = V_y \implies v_x = u_y, \quad U_y = -V_x \implies v_y = -u_x
  \]
* But \( f \) is analytic, so \( u_x = v_y \) and \( u_y = -v_x \).
* Combining these:
  \[
  v_x = u_y \implies v_x = -v_x \implies v_x = 0 \implies u_y = 0
  \]
  \[
  v_y = -u_x \implies u_x = -u_x \implies u_x = 0 \implies v_y = 0
  \]
* Thus, \( g(z) \) is analytic if and only if all partial derivatives of \( u \) and \( v \) are 0, which means \( f(z) \) is a constant function.

### Problem 28: Analyticity of \( g(z) = \overline{f(z)} \)
* Let \( U = u \) and \( V = -v \). For \( g \) to be analytic:
  \[
  U_x = V_y \implies u_x = -v_y, \quad U_y = -V_x \implies u_y = v_x
  \]
* Since \( f \) is analytic, \( u_x = v_y \) and \( u_y = -v_x \).
* Combining these:
  \[
  u_x = -v_y \implies u_x = -u_x \implies u_x = 0 \implies v_y = 0
  \]
  \[
  u_y = v_x \implies u_y = -u_y \implies u_y = 0 \implies v_x = 0
  \]
* Thus, \( \overline{f(z)} \) is analytic if and only if \( f(z) \) is a constant function.

### Problem 29: Proof that \( |f(z)| = c \implies f(z) \) is constant
* We have \( u^2 + v^2 = c^2 \). If \( c = 0 \), \( f(z) = 0 \) is constant. If \( c \ne 0 \), differentiate with respect to \( x \) and \( y \):
  \[
  1) \, u u_x + v v_x = 0, \quad 2) \, u u_y + v v_y = 0
  \]
* Use C-R to substitute \( v_x = -u_y \) and \( v_y = u_x \):
  \[
  \begin{cases}
  u u_x - v u_y = 0 \\
  v u_x + u u_y = 0
  \end{cases}
  \]
* The determinant of this system is \( u^2 + v^2 = c^2 \ne 0 \). Hence, the only solution is \( u_x = 0 \) and \( u_y = 0 \).
* By C-R, this also implies \( v_x = 0 \) and \( v_y = 0 \).
* Since all partials are zero, \( u \) and \( v \) are constant, so \( f(z) \) is constant.

### Problem 30: Proof that \( f'(z) = 0 \implies f(z) \) is constant
* We have \( f'(z) = u_x + i v_x = 0 \implies u_x = 0 \) and \( v_x = 0 \).
* By C-R, \( v_y = u_x = 0 \) and \( u_y = -v_x = 0 \).
* Since all first-order partials of \( u \) and \( v \) are zero throughout the domain \( D \), \( u \) and \( v \) are constant, hence \( f(z) \) is constant.

### Problem 31: Show \( f'(z) = g'(z) \implies f(z) = g(z) + c \)
* Let \( h(z) = f(z) - g(z) \). Since \( f, g \) are analytic, \( h \) is analytic.
* We have \( h'(z) = f'(z) - g'(z) = 0 \).
* By Problem 30, \( h(z) = c \) (constant) \( \implies f(z) = g(z) + c \).

### Problem 32: If \( f(z) \) and \( \overline{f(z)} \) are both analytic, then \( f \) is constant
* As proved in Problem 28, the analyticity of \( \overline{f(z)} \) implies \( f(z) \) must be a constant function.

### Problem 33: Derivation of Polar C-R Equations
* Differentiating \( u(r\cos\theta, \, r\sin\theta) \):
  \[
  u_r = u_x \cos\theta + u_y \sin\theta \quad (1), \qquad u_\theta = -r u_x \sin\theta + r u_y \cos\theta \quad (2)
  \]
  \[
  v_r = v_x \cos\theta + v_y \sin\theta \quad (3), \qquad v_\theta = -r v_x \sin\theta + r v_y \cos\theta \quad (4)
  \]
* Substitute Cartesian C-R equations \( v_x = -u_y \) and \( v_y = u_x \) into (3) and (4):
  \[
  v_r = -u_y \cos\theta + u_x \sin\theta
  \]
  \[
  v_\theta = r u_y \sin\theta + r u_x \cos\theta = r(u_x\cos\theta + u_y\sin\theta) = r u_r \implies u_r = \frac{1}{r}v_\theta
  \]
  Similarly, compare \( v_r \) and \( u_\theta \):
  \[
  v_r = -\frac{1}{r} (-r u_x\sin\theta + r u_y\cos\theta) = -\frac{1}{r}u_\theta \implies v_r = -\frac{1}{r}u_\theta
  \]

### Problem 34: Polar Derivative Formula
* Solve (1) and (2) for \( u_x \), and (3) and (4) for \( v_x \):
  \[
  u_x = u_r\cos\theta - \frac{u_\theta}{r}\sin\theta, \quad v_x = v_r\cos\theta - \frac{v_\theta}{r}\sin\theta
  \]
* Substitute into \( f'(z) = u_x + i v_x \):
  \[
  f'(z) = \left( u_r\cos\theta - \frac{u_\theta}{r}\sin\theta \right) + i \left( v_r\cos\theta - \frac{v_\theta}{r}\sin\theta \right)
  \]
* Apply polar C-R: \( u_\theta/r = -v_r \) and \( v_\theta/r = u_r \):
  \[
  f'(z) = (u_r\cos\theta + v_r\sin\theta) + i(v_r\cos\theta - u_r\sin\theta)
  \]
  \[
  = (u_r + i v_r)(\cos\theta - i\sin\theta) = e^{-i\theta}(u_r + i v_r)
  \]

### Problem 35: \( f(z) = \frac{z^5}{|z|^4} \) for \( z \ne 0 \), and \( f(0) = 0 \)
* **(a) Real and Imaginary parts:**
  Using \( z^5 = (x+iy)^5 \):
  \[
  u(x,y) = \frac{x^5 - 10x^3y^2 + 5xy^4}{(x^2+y^2)^2}, \quad v(x,y) = \frac{5x^4y - 10x^2y^3 + y^5}{(x^2+y^2)^2}
  \]
* **(b) Show not differentiable at origin:**
  Let \( \Delta z \to 0 \) along the ray \( \theta \):
  \[
  \lim_{\Delta z \to 0} \frac{f(\Delta z) - f(0)}{\Delta z} = \lim_{r \to 0} \frac{\frac{r^5 e^{5i\theta}}{r^4}}{r e^{i\theta}} = e^{4i\theta}
  \]
  Since this limit depends on \( \theta \), \( f \) is not differentiable at \( z = 0 \).
* **(c) Show C-R are satisfied at origin:**
  Evaluate partials using limit definitions at \( (0,0) \):
  \[
  u_x(0,0) = \lim_{x \to 0} \frac{u(x,0) - u(0,0)}{x} = \lim_{x \to 0} \frac{x^5/x^4}{x} = 1
  \]
  \[
  v_y(0,0) = \lim_{y \to 0} \frac{v(0,y) - v(0,0)}{y} = \lim_{y \to 0} \frac{y^5/y^4}{y} = 1 \implies u_x(0,0) = v_y(0,0)
  \]
  \[
  u_y(0,0) = \lim_{y \to 0} \frac{0 - 0}{y} = 0, \quad v_x(0,0) = \lim_{x \to 0} \frac{0 - 0}{x} = 0 \implies u_y(0,0) = -v_x(0,0)
  \]
  Thus, C-R equations are satisfied at the origin.
