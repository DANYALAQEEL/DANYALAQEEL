# Complex Analysis — Dennis G. Zill, 2nd Edition
## Chapter 3 · Chapter 3 Review Quiz
### Problems 1 – 22 · Complete Solutions

---

> **Review of Chapter 3: Analytic Functions**
>
> 1. **Differentiability vs. Analyticity:** Differentiability is a local property at a point, whereas analyticity requires differentiability in an open neighborhood around the point.
> 2. **Cauchy-Riemann Equations:** Essential necessary conditions for differentiability. In Cartesian coordinates: \( u_x = v_y \) and \( u_y = -v_x \).
> 3. **Harmonic Functions:** Satisfy Laplace's equation \( u_{xx} + u_{yy} = 0 \). The real and imaginary parts of an analytic function are always harmonic.
> 4. **Conformal Properties:** Level curves of the real and imaginary parts of an analytic function form orthogonal trajectories at all points where the derivative is nonzero.

---

## Problems 1 – 12: True or False Questions with Justifications

### Problem 1: If a complex function \( f \) is differentiable at point \( z \), then \( f \) is analytic at \( z \).
* **Answer:** **False**
* **Justification:** Differentiability at a single point does not guarantee analyticity at that point. For \( f \) to be analytic at \( z \), it must be differentiable in an open neighborhood containing \( z \). For example, the function \( f(z) = |z|^2 \) is differentiable only at \( z = 0 \) and nowhere else; hence, it is nowhere analytic, including at \( z = 0 \).

### Problem 2: The function \( f(z) = \frac{y}{x^2 + y^2} + i\frac{x}{x^2 + y^2} \) is differentiable for all \( z \ne 0 \).
* **Answer:** **True**
* **Justification:** Let \( u = \frac{y}{x^2+y^2} \) and \( v = \frac{x}{x^2+y^2} \). Note that \( f(z) = \frac{i}{z} \). The derivative is \( f'(z) = -\frac{i}{z^2} \), which exists and is continuous for all \( z \ne 0 \). Alternatively, checking the C-R equations:
  \[
  u_x = -\frac{2xy}{(x^2+y^2)^2}, \quad v_y = -\frac{2xy}{(x^2+y^2)^2} \implies u_x = v_y
  \]
  \[
  u_y = \frac{x^2-y^2}{(x^2+y^2)^2}, \quad v_x = \frac{y^2-x^2}{(x^2+y^2)^2} \implies u_y = -v_x
  \]
  Since the partial derivatives are continuous and C-R equations hold for all \( z \ne 0 \), the function is differentiable for all \( z \ne 0 \).

### Problem 3: The function \( f(z) = z^2 + \bar{z} \) is nowhere analytic.
* **Answer:** **True**
* **Justification:** We express \( f(z) = (x^2 - y^2 + x) + i(2xy - y) \), so \( u = x^2-y^2+x \) and \( v = 2xy-y \).
  * \( u_x = 2x+1 \), \( v_y = 2x-1 \).
  * For \( u_x = v_y \implies 2x+1 = 2x-1 \implies 1 = -1 \), which is impossible.
  Since the C-R equations are never satisfied, the function is nowhere differentiable and hence nowhere analytic.

### Problem 4: The function \( f(z) = \cos y - i\sin y \) is nowhere differentiable.
* **Answer:** **True**
* **Justification:** Let \( u = \cos y \) and \( v = -\sin y \).
  * \( u_x = 0 \), \( v_y = -\cos y \implies \cos y = 0 \implies y = \frac{\pi}{2} + k\pi \).
  * \( u_y = -\sin y \), \( v_x = 0 \implies \sin y = 0 \implies y = m\pi \).
  Since \( y \) cannot simultaneously satisfy both conditions, C-R equations are never satisfied. Thus, the function is nowhere differentiable.

### Problem 5: There does not exist an analytic function \( f(z) = u(x, y) + i v(x, y) \) for which \( u(x, y) = y^3 + 5x \).
* **Answer:** **True**
* **Justification:** The real part of an analytic function must be harmonic. For \( u(x, y) = y^3 + 5x \):
  * \( u_x = 5 \implies u_{xx} = 0 \).
  * \( u_y = 3y^2 \implies u_{yy} = 6y \).
  * \( u_{xx} + u_{yy} = 6y \ne 0 \) (except along the line \( y = 0 \)).
  Since \( u \) is not harmonic, no such analytic function exists.

### Problem 6: The function \( u(x, y) = e^{4x} \cos 2y \) is the real part of an analytic function.
* **Answer:** **False**
* **Justification:** For \( u(x, y) = e^{4x}\cos 2y \):
  * \( u_x = 4e^{4x}\cos 2y \implies u_{xx} = 16e^{4x}\cos 2y \).
  * \( u_y = -2e^{4x}\sin 2y \implies u_{yy} = -4e^{4x}\cos 2y \).
  * \( u_{xx} + u_{yy} = 12e^{4x}\cos 2y \ne 0 \).
  Since \( u \) is not harmonic, it cannot be the real part of an analytic function.

### Problem 7: If \( f(z) = e^x\cos y + i e^x\sin y \), then \( f'(z) = f(z) \).
* **Answer:** **True**
* **Justification:** The given function is the complex exponential function \( f(z) = e^z \). It is an entire function, and its derivative is \( \frac{d}{dz}(e^z) = e^z = f(z) \).

### Problem 8: If \( u(x, y) \) and \( v(x, y) \) are harmonic functions in a domain \( D \), then the function \( f(z) = (u_y - v_x) + i(u_x + v_y) \) is analytic in \( D \).
* **Answer:** **True**
* **Justification:** Let \( U = u_y - v_x \) and \( V = u_x + v_y \). We check the C-R equations for \( f \):
  * \( U_x = u_{yx} - v_{xx} \) and \( V_y = u_{xy} + v_{yy} \). Since \( u \) is harmonic, \( u_{xy} = u_{yx} \). For \( U_x = V_y \implies -v_{xx} = v_{yy} \implies v_{xx} + v_{yy} = 0 \), which is true because \( v \) is harmonic.
  * \( U_y = u_{yy} - v_{xy} \) and \( -V_x = -u_{xx} - v_{yx} \). For \( U_y = -V_x \implies u_{yy} = -u_{xx} \implies u_{xx} + u_{yy} = 0 \), which is true because \( u \) is harmonic.
  Since the partial derivatives are continuous and the C-R equations are satisfied, \( f(z) \) is analytic in \( D \).

### Problem 9: If \( g \) is an entire function, then \( f(z) = (iz^2 + z)\overline{g(z)} \) is necessarily an entire function.
* **Answer:** **False**
* **Justification:** The conjugate function \( \overline{g(z)} \) is analytic if and only if \( g(z) \) is a constant function. If \( g(z) \) is nonconstant, then \( \overline{g(z)} \) is nowhere analytic, which generally makes \( f(z) \) nowhere analytic. For example, if \( g(z) = z \) (entire), then \( f(z) = (iz^2+z)\bar{z} \). The derivative with respect to \( \bar{z} \) is \( \frac{\partial f}{\partial \bar{z}} = iz^2 + z \ne 0 \), so \( f \) is not analytic.

### Problem 10: The Cauchy-Riemann equations are necessary conditions for differentiability.
* **Answer:** **True**
* **Justification:** If a complex function \( f(z) = u(x, y) + i v(x, y) \) is differentiable at a point \( z \), then the first-order partial derivatives of \( u \) and \( v \) must exist at that point and satisfy the C-R equations \( u_x = v_y \) and \( u_y = -v_x \).

### Problem 11: The Cauchy-Riemann equations can be satisfied at a point \( z \), but the function \( f(z) = u(x, y) + i v(x, y) \) can be nondifferentiable at \( z \).
* **Answer:** **True**
* **Justification:** The C-R equations are necessary but not sufficient for differentiability. For differentiability, the partial derivatives must also be continuous (or the real and imaginary parts must be differentiable in the real sense). A standard counterexample is \( f(z) = \frac{z^5}{|z|^4} \) for \( z \ne 0 \) and \( f(0) = 0 \), which satisfies the C-R equations at the origin but is not differentiable there.

### Problem 12: If the function \( f(z) = u(x, y) + i v(x, y) \) is analytic at a point \( z \), then necessarily the function \( g(z) = v(x, y) - i u(x, y) \) is analytic at \( z \).
* **Answer:** **True**
* **Justification:** Note that \( g(z) = -i f(z) \). Since \( f(z) \) is analytic at \( z \) and multiplication by a complex constant preserves analyticity, \( g(z) \) is also analytic at \( z \).

---

## Problems 13 – 22: Fill in the Blanks

### Problem 13: If \( f(z) = \frac{1}{z^2 + 5iz - 4} \), then \( f'(z) = \) \_\_\_\_\_\_\_\_.
* **Answer:** \( \mathbf{-\frac{2z + 5i}{(z^2 + 5iz - 4)^2}} \)
* **Solution:** Applying the chain rule: \( f'(z) = -(z^2 + 5iz - 4)^{-2} \cdot (2z + 5i) = -\frac{2z + 5i}{(z^2 + 5iz - 4)^2} \).

### Problem 14: The function \( f(z) = \frac{1}{z^2 + 5iz - 4} is not analytic at \) \_\_\_\_\_\_\_\_.
* **Answer:** \( \mathbf{z = -i, \, -4i} \)
* **Solution:** The function fails to be analytic where the denominator is zero:
  \[
  z^2 + 5iz - 4 = 0 \implies (z+i)(z+4i) = 0 \implies z = -i, \, -4i
  \]

### Problem 15: The function \( f(z) = (2 - x)^3 + i(y - 1)^3 \) is differentiable at \( z = \) \_\_\_\_\_\_\_\_.
* **Answer:** \( \mathbf{2 + i} \)
* **Solution:** Let \( u = (2-x)^3 \) and \( v = (y-1)^3 \).
  * \( u_x = -3(2-x)^2 \), \( v_y = 3(y-1)^2 \). For C-R: \( -3(2-x)^2 = 3(y-1)^2 \implies (x-2)^2 + (y-1)^2 = 0 \implies x=2, \, y=1 \).
  * \( u_y = 0 \), \( v_x = 0 \implies u_y = -v_x \) is always satisfied.
  Thus, \( f \) is differentiable only at \( z = 2 + i \).

### Problem 16: For \( f(z) = 2x^3 + 3iy^2 \), \( f'(x + i x^2) = \) \_\_\_\_\_\_\_\_.
* **Answer:** \( \mathbf{6x^2} \)
* **Solution:** Let \( u = 2x^3 \) and \( v = 3y^2 \).
  * \( u_x = 6x^2 \), \( v_y = 6y \implies y = x^2 \) for differentiability.
  * The derivative along the curve \( y = x^2 \) (which is \( z = x+ix^2 \)) is given by:
    \[
    f'(z) = u_x + i v_x = 6x^2 + i(0) = 6x^2
    \]

### Problem 17: For \( f(z) = \frac{x-1}{(x-1)^2 + (y-1)^2} - i\frac{y-1}{(x-1)^2 + (y-1)^2} \) in \( D \), \( f'(z) = \) \_\_\_\_\_\_\_\_.
* **Answer:** \( \mathbf{-\frac{1}{(z - 1 - i)^2}} \)
* **Solution:** Note that the function is equivalent to \( f(z) = \frac{1}{z - (1+i)} \). Its derivative is:
  \[
  f'(z) = -\frac{1}{(z - 1 - i)^2}
  \]

### Problem 18: Find an analytic function \( f(z) = \log_e(x^2 + y^2) + i \) \_\_\_\_\_\_\_\_.
* **Answer:** \( \mathbf{2\operatorname{Arg}(z) + C} \) (or \( \mathbf{2\tan^{-1}(y/x) + C} \))
* **Solution:** Since \( \log_e(x^2+y^2) = 2 \log_e |z| = \operatorname{Re}(2\operatorname{Ln}(z)) \), the analytic function is:
  \[
  f(z) = 2\operatorname{Ln}(z) + iC = \log_e(x^2+y^2) + i(2\operatorname{Arg}(z) + C)
  \]

### Problem 19: The function \( f(z) \) is analytic in a domain \( D \) and \( f(z) = c + iv(x, y) \), where \( c \) is a real constant. Then \( f \) is a \_\_\_\_\_\_\_\_ in \( D \).
* **Answer:** **constant**
* **Solution:** Since \( u(x,y) = c \), we have \( u_x = 0 \) and \( u_y = 0 \). By C-R equations, \( v_x = -u_y = 0 \) and \( v_y = u_x = 0 \). Since all partial derivatives of \( u \) and \( v \) are zero, \( f(z) \) is a constant function.

### Problem 20: \( \lim_{z \to 2i} \frac{z^5 - 4iz^4 - 4z^3 + z^2 - 4iz + 4}{5z^4 - 20iz^3 - 21z^2 - 4iz + 4} = \) \_\_\_\_\_\_\_\_.
* **Answer:** \( \mathbf{\frac{1}{2}} \) (or \( \mathbf{0.5} \))
* **Solution:** By direct substitution at \( z = 2i \):
  * Numerator: \( (2i)^5 - 4i(2i)^4 - 4(2i)^3 + (2i)^2 - 4i(2i) + 4 = 32i - 64i + 32i - 4 + 8 + 4 = 8 \).
  * Denominator: \( 5(2i)^4 - 20i(2i)^3 - 21(2i)^2 - 4i(2i) + 4 = 80 - 160 + 84 + 8 + 4 = 16 \).
  * The limit is \( \frac{8}{16} = \frac{1}{2} \).

### Problem 21: \( u(x, y) = c_1 \) where \( u(x, y) = e^{-x}(x \sin y - y \cos y) \) and \( v(x, y) = c_2 \) where \( v(x, y) = \) \_\_\_\_\_\_\_\_ are orthogonal families.
* **Answer:** \( \mathbf{e^{-x}(x \cos y + y \sin y) + C} \)
* **Solution:** The function \( u(x,y) \) is the real part of the analytic function \( g(z) = i z e^{-z} \). The imaginary part is the harmonic conjugate \( v(x,y) = e^{-x}(x\cos y + y\sin y) + C \).

### Problem 22: The statement “There exists a function \( f \) that is analytic for \( \operatorname{Re}(z) \ge 1 \) and is not analytic anywhere else” is false because \_\_\_\_\_\_\_\_.
* **Answer:** **the domain of analyticity of a function must be an open set**
* **Solution:** Analyticity at a point requires differentiability in an open neighborhood around that point. Thus, the set of points where a function is analytic must be an open set. The set \( \operatorname{Re}(z) \ge 1 \) is closed and not open; any point on the boundary \( \operatorname{Re}(z) = 1 \) would require the function to be differentiable in a neighborhood extending into \( \operatorname{Re}(z) < 1 \).
