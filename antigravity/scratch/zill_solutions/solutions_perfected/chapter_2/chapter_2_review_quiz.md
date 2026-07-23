# Complex Analysis — Dennis G. Zill, 2nd Edition
## Chapter 2 · Review Quiz
### Problems 1 – 40 · Complete Solutions

---

## Part 1: Problems 1 – 20 (True / False)

#### Problem 1
State the proposition: *If $f(z)$ is a complex function, then $f(x + 0i)$ must be a real number.*
Determine whether this is true or false and provide a rigorous justification.

**Solution:**
* **Answer:** **FALSE**
* **Rigorous Justification:**
  A complex function $f: D \to \mathbb{C}$ maps complex numbers to complex numbers. Setting $z = x + 0i$ restricts the input to the real line, but does not restrict the output values to be real.
  To prove this is false, we construct a counterexample:
  Let $f(z) = i z$.
  If we evaluate $f$ at a point on the real axis $z = x + 0i$ where $x \in \mathbb{R}$:
  $$f(x + 0i) = i(x + 0i) = ix$$
  For any $x \ne 0$, the value $ix$ is a purely imaginary number, which is not a real number.
  Thus, $f(x+0i)$ does not have to be real.

---

#### Problem 2
State the proposition: *$\arg(z)$ is a complex function.*
Determine whether this is true or false and provide a rigorous justification.

**Solution:**
* **Answer:** **FALSE**
* **Rigorous Justification:**
  A complex function must be single-valued (i.e., it must assign a unique complex value to each point in its domain).
  * The argument relation $\arg(z)$ is multi-valued since any angle $\theta_0 + 2n\pi$ for $n \in \mathbb{Z}$ represents the same point $z$. Thus, it is a multi-valued relation, not a function.
  * Even if we consider the single-valued principal branch $\operatorname{Arg}(z)$, its values are real numbers (angles in the interval $(-\pi, \pi]$), so it is a real-valued function of a complex variable, not a complex-valued function of a complex variable.

---

#### Problem 3
State the proposition: *The domain of the function $f(z) = \frac{1}{z^2 + i}$ is all complex numbers.*
Determine whether this is true or false and provide a rigorous justification.

**Solution:**
* **Answer:** **FALSE**
* **Rigorous Justification:**
  The function is defined for all complex numbers except where its denominator is zero:
  $$z^2 + i = 0 \implies z^2 = -i$$
  To find the excluded points, we solve for $z$:
  $$-i = e^{-i\pi/2} = e^{i(2n\pi - \pi/2)}$$
  Taking the square root:
  $$z = \pm e^{-i\pi/4} = \pm \left(\cos\left(-\frac{\pi}{4}\right) + i\sin\left(-\frac{\pi}{4}\right)\right) = \pm \left(\frac{\sqrt{2}}{2} - i\frac{\sqrt{2}}{2}\right)$$
  These two points are excluded from the domain, so the domain is not all complex numbers.

---

#### Problem 4
State the proposition: *The domain of the function $f(z) = e^{z^2 - (1+i)z + 2}$ is all complex numbers.*
Determine whether this is true or false and provide a rigorous justification.

**Solution:**
* **Answer:** **TRUE**
* **Rigorous Justification:**
  The function is a composition of the complex exponential function $g(w) = e^w$ and a polynomial $w(z) = z^2 - (1+i)z + 2$.
  * A polynomial of any degree is defined and yields a single finite complex value for all $z \in \mathbb{C}$.
  * The complex exponential function $e^w$ is defined for all $w \in \mathbb{C}$.
  Thus, there are no points where $f(z)$ is undefined. The domain is the entire complex plane $\mathbb{C}$.

---

#### Problem 5
State the proposition: *If $f(z)$ is a complex function with $u(x, y) = 0$, then the range of $f$ lies in the imaginary axis.*
Determine whether this is true or false and provide a rigorous justification.

**Solution:**
* **Answer:** **TRUE**
* **Rigorous Justification:**
  Any complex function can be decomposed into real and imaginary parts:
  $$f(z) = u(x, y) + i v(x, y)$$
  If we are given that $u(x, y) = 0$ for all $(x,y)$ in the domain, then:
  $$f(z) = 0 + i v(x, y) = i v(x, y)$$
  Since $v(x, y)$ is a real-valued function, the values of $f(z)$ are of the form $i$ multiplied by a real number, which are purely imaginary. Geometrically, these points lie on the imaginary axis in the $w$-plane.

---

#### Problem 6
State the proposition: *The entire complex plane is mapped onto the real axis $v = 0$ by $w = z + \bar{z}$.*
Determine whether this is true or false and provide a rigorous justification.

**Solution:**
* **Answer:** **TRUE**
* **Rigorous Justification:**
  Let $z = x+iy$. The complex conjugate is $\bar{z} = x-iy$.
  Evaluate the mapping:
  $$w = z + \bar{z} = (x+iy) + (x-iy) = 2x$$
  Let $w = u + iv$. Comparing the parts:
  $$u = 2x, \quad v = 0$$
  Since $x$ can be any real number in $(-\infty, \infty)$, the real part $u = 2x$ also ranges over the entire real line $(-\infty, \infty)$. The imaginary part is fixed at $v = 0$.
  Thus, the image is the entire real axis.

---

#### Problem 7
State the proposition: *The entire complex plane is mapped onto the unit circle $|w| = 1$ by $w = \frac{z}{|z|}$.*
Determine whether this is true or false and provide a rigorous justification.

**Solution:**
* **Answer:** **FALSE**
* **Rigorous Justification:**
  The function is defined as $w = z/|z|$.
  At the origin $z = 0$, the denominator is $|0| = 0$, which is undefined.
  Since the origin is in the complex plane but must be excluded from the domain of the mapping, the entire complex plane cannot be mapped.

---

#### Problem 8
State the proposition: *The range of the function $f(z) = \operatorname{Arg}(z)$ is all real numbers.*
Determine whether this is true or false and provide a rigorous justification.

**Solution:**
* **Answer:** **FALSE**
* **Rigorous Justification:**
  The principal argument function $\operatorname{Arg}(z)$ is defined to return the unique angle $\theta$ representing the direction of $z$ restricted to the interval:
  $$(-\pi, \pi]$$
  Since it cannot output any values outside this interval, its range is restricted to $(-\pi, \pi]$, not all real numbers.

---

#### Problem 9
State the proposition: *The image of the circle $|z - z_0| = \rho$ under a complex linear mapping is a circle with a (possibly) different center, but the same radius.*
Determine whether this is true or false and provide a rigorous justification.

**Solution:**
* **Answer:** **FALSE**
* **Rigorous Justification:**
  A general linear mapping is of the form $w = az + b$ with $a \ne 0$.
  We can write $a = r_0 e^{i\theta_0}$. The magnification factor is $|a| = r_0$.
  * If we map the circle $|z - z_0| = \rho$:
    $$|w - (az_0 + b)| = |a(z - z_0)| = |a| |z - z_0| = |a| \rho$$
  * Thus, the image is a circle centered at $az_0+b$ with radius $|a|\rho$.
  If $|a| \ne 1$, the radius of the image circle is different from the original radius $\rho$.

---

#### Problem 10
State the proposition: *The linear mapping $w = (1 - \sqrt{3}i)z + 2$ acts by rotating through an angle of $\pi/3$ radians clockwise about the origin, magnifying by a factor of 2, then translating by 2.*
Determine whether this is true or false and provide a rigorous justification.

**Solution:**
* **Answer:** **TRUE**
* **Rigorous Justification:**
  We analyze the mapping $f(z) = az + b$ where $a = 1 - \sqrt{3}i$ and $b = 2$:
  1. **Rotation:** Find the argument of $a$:
     $$\operatorname{Arg}(a) = \operatorname{Arg}(1 - \sqrt{3}i)$$
     Since $a$ lies in the fourth quadrant ($x=1, y=-\sqrt{3}$):
     $$\operatorname{Arg}(a) = \arctan\left(\frac{-\sqrt{3}}{1}\right) = -\frac{\pi}{3}$$
     An argument of $-\pi/3$ represents a rotation by $\pi/3$ radians clockwise.
  2. **Magnification:** Find the modulus of $a$:
     $$|a| = |1 - \sqrt{3}i| = \sqrt{1^2 + (-\sqrt{3})^2} = \sqrt{1+3} = 2$$
     which is a magnification by a factor of 2.
  3. **Translation:** The constant term is $b = 2$, representing a translation by 2 units along the real axis.
  Thus, the description is correct.

---

#### Problem 11
State the proposition: *There is more than one linear mapping that takes the circle $|z - 1| = 1$ to the circle $|z + i| = 1$.*
Determine whether this is true or false and provide a rigorous justification.

**Solution:**
* **Answer:** **TRUE**
* **Rigorous Justification:**
  A linear mapping $w = az + b$ maps the circle $|z - 1| = 1$ to $|w + i| = 1$ if:
  * The center $1$ maps to the center $-i \implies a(1) + b = -i \implies b = -i - a$.
  * The radius is preserved, which requires $|a| = 1$.
  So any mapping of the form:
  $$w = az - i - a = a(z-1) - i \quad \text{with } |a| = 1$$
  will map the circle centered at 1 to the circle centered at $-i$.
  Since there are infinitely many complex numbers $a$ with modulus 1 (i.e. $a = e^{i\phi}$ for any angle $\phi$), there are infinitely many such mappings.

---

#### Problem 12
State the proposition: *The lines $x = 3$ and $x = -3$ are mapped onto the same parabola by $w = z^2$.*
Determine whether this is true or false and provide a rigorous justification.

**Solution:**
* **Answer:** **TRUE**
* **Rigorous Justification:**
  Under the squaring mapping $w = z^2$, a vertical line $x = k$ maps to the parabola:
  $$u = k^2 - \frac{v^2}{4k^2}$$
  * For $x = 3$, $k = 3 \implies k^2 = 9$. The parabola is:
    $$u = 9 - \frac{v^2}{36}$$
  * For $x = -3$, $k = -3 \implies k^2 = 9$. The parabola is:
    $$u = 9 - \frac{v^2}{36}$$
  Both lines map onto the exact same parabola.

---

#### Problem 13
State the proposition: *There are no solutions to the equation $\operatorname{Arg}(z) = \operatorname{Arg}\left(z^3ight)$.*
Determine whether this is true or false and provide a rigorous justification.

**Solution:**
* **Answer:** **FALSE**
* **Rigorous Justification:**
  Let's test $z = x > 0$ (any positive real number).
  * The principal argument is $\operatorname{Arg}(x) = 0$.
  * Since $x > 0$, we have $z^3 = x^3 > 0$, so $\operatorname{Arg}(z^3) = \operatorname{Arg}(x^3) = 0$.
  * Thus, the equation holds for all positive real numbers.
  Also, if $z = i$, $\operatorname{Arg}(i) = \pi/2$. Then $z^3 = -i \implies \operatorname{Arg}(-i) = -\pi/2 \ne \pi/2$.
  But positive real numbers are solutions, so solutions do exist.

---

#### Problem 14
State the proposition: *If $f(z) = z^{1/4}$ is the principal fourth root function, then $f(-1) = -\frac{1}{2\sqrt{2}} + \frac{1}{2\sqrt{2}}i$.*
Determine whether this is true or false and provide a rigorous justification.

**Solution:**
* **Answer:** **FALSE**
* **Rigorous Justification:**
  The principal fourth root function is defined as:
  $$f(z) = |z|^{1/4} e^{i \operatorname{Arg}(z)/4}$$
  For $z = -1$:
  * Modulus: $|-1| = 1 \implies |-1|^{1/4} = 1$.
  * Argument: $\operatorname{Arg}(-1) = \pi$.
  * Substitute:
    $$f(-1) = 1 \cdot e^{i\pi/4} = \cos\left(\frac{\pi}{4}\right) + i\sin\left(\frac{\pi}{4}\right) = \frac{\sqrt{2}}{2} + i\frac{\sqrt{2}}{2} = \frac{1}{\sqrt{2}} + i\frac{1}{\sqrt{2}}$$
  This does not match the given value, so the proposition is false.

---

#### Problem 15
State the proposition: *The complex number $i$ is not in the range of the principal cube root function.*
Determine whether this is true or false and provide a rigorous justification.

**Solution:**
* **Answer:** **TRUE**
* **Rigorous Justification:**
  The principal cube root function $w = z^{1/3}$ has argument range:
  $$\operatorname{Arg}(w) \in \left(-\frac{\pi}{3}, \frac{\pi}{3}\right]$$
  For $w = i$:
  * The principal argument is $\operatorname{Arg}(i) = \frac{\pi}{2}$.
  * Since $\frac{\pi}{2} > \frac{\pi}{3}$, the value $i$ lies outside the argument range of the principal branch, meaning it can never be output by this function.

---

#### Problem 16
State the proposition: *Under the mapping $w = 1/z$ on the extended complex plane, the domain $|z| > 3$ is mapped onto the domain $|w| < 1/3$.*
Determine whether this is true or false and provide a rigorous justification.

**Solution:**
* **Answer:** **TRUE**
* **Rigorous Justification:**
  In the extended complex plane $\mathbb{C}^* = \mathbb{C} \cup \{\infty\}$, the domain $|z| > 3$ is the exterior of the circle of radius 3 centered at the origin, which includes the point at infinity $\infty$.
  * Under $w = 1/z$, the point at infinity maps to $0$: $f(\infty) = 0$.
  * For any complex number $z$ in $|z| > 3$, the image modulus is:
    $$|w| = \frac{1}{|z|} < \frac{1}{3}$$
  * Since $\infty$ maps to $0$, the origin is included.
  Thus, the image is the entire disk $|w| < 1/3$ (including the origin).

---

#### Problem 17
State the proposition: *If $f$ is a complex function for which $\lim_{z \to 2+i} \operatorname{Re}(f(z)) = 4$ and $\lim_{z \to 2+i} \operatorname{Im}(f(z)) = -1$, then $\lim_{z \to 2+i} f(z) = 4 - i$.*
Determine whether this is true or false and provide a rigorous justification.

**Solution:**
* **Answer:** **TRUE**
* **Rigorous Justification:**
  Let $f(z) = u(x,y) + i v(x,y)$.
  By Theorem 2.1 (Component limits), the complex limit $\lim_{z \to z_0} f(z) = L = u_0 + i v_0$ exists if and only if the real limits exist and satisfy:
  $$\lim u(x,y) = u_0 \quad \text{and} \quad \lim v(x,y) = v_0$$
  Here we are given $u_0 = 4$ and $v_0 = -1$, so:
  $$\lim_{z \to 2+i} f(z) = 4 + i(-1) = 4 - i$$
  The proposition is true.

---

#### Problem 18
State the proposition: *If $f$ is a complex function for which $\lim_{x \to 0} f(x + 0i) = 0$ and $\lim_{y \to 0} f(0 + iy) = 0$, then $\lim_{z \to 0} f(z) = 0$.*
Determine whether this is true or false and provide a rigorous justification.

**Solution:**
* **Answer:** **FALSE**
* **Rigorous Justification:**
  For a complex limit $\lim_{z \to 0} f(z) = L$ to exist, the function must approach $L$ along *all* possible paths of approach to the origin, not just along the coordinate axes.
  We construct a counterexample:
  Let $f(z) = \frac{\operatorname{Re}(z)\operatorname{Im}(z)}{|z|^2} = \frac{xy}{x^2+y^2}$ for $z \ne 0$.
  * Approach along the real axis ($y=0$): $f(x,0) = 0 \implies \lim = 0$.
  * Approach along the imaginary axis ($x=0$): $f(0,y) = 0 \implies \lim = 0$.
  * Approach along the line $y = x$: $f(x,x) = \frac{x^2}{2x^2} = \frac{1}{2} \implies \lim = \frac{1}{2}$.
  Since the limit along the diagonal path is different from 0, the complex limit $\lim_{z \to 0} f(z)$ does not exist.

---

#### Problem 19
State the proposition: *If $f$ is a complex function that is continuous at the point $z = 1 + i$, then the function $g(z) = 3 [f(z)]^2 - (2 + i)f(z) + i$ is continuous at $z = 1 + i$.*
Determine whether this is true or false and provide a rigorous justification.

**Solution:**
* **Answer:** **TRUE**
* **Rigorous Justification:**
  The function $g(z)$ is a polynomial in terms of the function $f(z)$.
  * Since $f(z)$ is continuous at $z_0 = 1+i$, its square $[f(z)]^2$ is continuous at $z_0$.
  * Multiplication by constants and addition/subtraction preserve continuity.
  Thus, $g(z)$ is continuous at $z_0 = 1+i$.

---

#### Problem 20
State the proposition: *If $f$ is a complex function that is continuous on the entire complex plane, then the function $g(z) = \overline{f(z)}$ is continuous on the entire complex plane.*
Determine whether this is true or false and provide a rigorous justification.

**Solution:**
* **Answer:** **TRUE**
* **Rigorous Justification:**
  The function $g(z)$ can be viewed as the composition of two functions:
  $$g(z) = (c \circ f)(z)$$
  where $c(w) = \bar{w}$ is the complex conjugation function.
  * The conjugation function is continuous everywhere on $\mathbb{C}$ (since $|\bar{w}_1 - \bar{w}_2| = |w_1 - w_2|$).
  * Since both $f$ and $c$ are continuous everywhere, their composition $g = c \circ f$ is continuous everywhere.

---

## Part 2: Problems 21 – 40 (Fill in the blanks)

#### Problem 21
If $f(z) = z^2 + i\bar{z}$, then the real and imaginary parts of $f$ are $u(x, y) =$ \_\_\_\_\_ and $v(x, y) =$ \_\_\_\_\_ .

**Solution:**
1. Substitute $z = x+iy$ and $\bar{z} = x-iy$:
   $$f(z) = (x+iy)^2 + i(x-iy) = x^2 - y^2 + 2ixy + ix - i^2y$$
   Since $i^2 = -1$:
   $$f(z) = (x^2 - y^2 + y) + i(2xy + x)$$
* **Answer:** $\mathbf{x^2 - y^2 + y}$, $\mathbf{x + 2xy}$

---

#### Problem 22
If $f(z) = \frac{|z - 1|}{z^2 + 2iz + 2}$, then the natural domain of $f$ is \_\_\_\_\_ .

**Solution:**
1. The function is undefined where its denominator is zero:
   $$z^2 + 2iz + 2 = 0$$
2. Use the quadratic formula:
   $$z = \frac{-2i \pm \sqrt{(2i)^2 - 4(1)(2)}}{2} = \frac{-2i \pm \sqrt{-4 - 8}}{2} = \frac{-2i \pm \sqrt{-12}}{2} = \frac{-2i \pm 2i\sqrt{3}}{2} = -i \pm i\sqrt{3}$$
* **Answer:** $\mathbf{\mathbb{C} \setminus \{-i \pm i\sqrt{3}\} }$

---

#### Problem 23
If $f(z) = z - \bar{z}$, then the range of $f$ is contained in the \_\_\_\_\_ axis.

**Solution:**
1. Substitute $z = x+iy$:
   $$f(z) = (x+iy) - (x-iy) = 2iy$$
2. Since $y$ is real, the value $2iy$ is purely imaginary.
* **Answer:** **imaginary**

---

#### Problem 24
The exponential function $e^z$ has real and imaginary parts $u(x, y) =$ \_\_\_\_\_ and $v(x, y) =$ \_\_\_\_\_ .

**Solution:**
By definition, $e^{x+iy} = e^x(\cos y + i\sin y) = e^x\cos y + i e^x\sin y$.
* **Answer:** $\mathbf{e^x \cos y}$, $\mathbf{e^x \sin y}$

---

#### Problem 25
A parametrization of the line segment from $1 + i$ to $2i$ is $z(t) =$ \_\_\_\_\_ .

**Solution:**
Using the linear interpolation formula $z(t) = z_0(1-t) + z_1 t$ for $0 \le t \le 1$:
$$z(t) = (1+i)(1-t) + 2it = 1 - t + i - it + 2it = (1-t) + i(1+t)$$
* **Answer:** $\mathbf{(1+i)(1-t) + 2ti, \quad 0 \le t \le 1}$

---

#### Problem 26
A parametrization of the circle centered at $1-i$ with radius $3$ is $z(t) =$ \_\_\_\_\_ .

**Solution:**
The standard parametrization of a circle centered at $z_0$ with radius $R$ is $z_0 + R e^{it}$ for $0 \le t \le 2\pi$.
* **Answer:** $\mathbf{1 - i + 3e^{it}, \quad 0 \le t \le 2\pi}$

---

#### Problem 27
Every complex linear mapping is a composition of at most one \_\_\_\_\_ , one \_\_\_\_\_ , and one \_\_\_\_\_ .

**Solution:**
A complex linear mapping is $f(z) = az + b$. It decomposes into rotation (by $\operatorname{Arg}(a)$), magnification (by $|a|$), and translation (by $b$).
* **Answer:** **rotation**, **magnification**, **translation**

---

#### Problem 28
The complex mapping $w = iz+2$ rotates and \_\_\_\_\_ , but does not \_\_\_\_\_ .

**Solution:**
1. Here $a = i$ and $b = 2$.
2. Since $|a| = |i| = 1$, the magnification factor is 1, meaning it does not scale (magnify).
3. Since $b = 2$, it translates by 2.
4. Since $\operatorname{Arg}(a) = \pi/2$, it rotates by $\pi/2$.
* **Answer:** **translates**, **magnify**

---

#### Problem 29
The function $z^2$ squares the modulus of $z$ and \_\_\_\_\_ its argument.

**Solution:**
For $z = r e^{i\theta}$, $z^2 = r^2 e^{i 2\theta}$. The modulus is squared ($r^2$), and the argument is multiplied by 2.
* **Answer:** **doubles**

---

#### Problem 30
The image of the sector $0 \le \arg(z) \le \pi/2$ under the mapping $w = z^3$ is \_\_\_\_\_ .

**Solution:**
Under $w = z^3$, the argument is multiplied by 3:
$$3(0) \le \arg(w) \le 3(\pi/2) \implies 0 \le \arg(w) \le 3\pi/2$$
* **Answer:** $\mathbf{0 \le \operatorname{arg}(w) \le 3\pi/2}$

---

#### Problem 31
The image of horizontal and vertical lines under the mapping $w = z^2$ is \_\_\_\_\_ .

**Solution:**
As shown in Section 2.4, vertical lines $x = k \ne 0$ map to parabolas opening left, and horizontal lines $y = k \ne 0$ map to parabolas opening right.
* **Answer:** **parabolas**

---

#### Problem 32
The principal $n$th root function $z^{1/n}$ maps the complex plane onto the region \_\_\_\_\_ .

**Solution:**
By definition, the principal $n$th root function has its argument range restricted to:
$$-\frac{\pi}{n} < \operatorname{Arg}(w) \le \frac{\pi}{n}$$
* **Answer:** $\mathbf{-\pi/n < \operatorname{Arg}(w) \le \pi/n}$

---

#### Problem 33
If $f(z) = z^{1/6}$ is the principal 6th root function, then $f(-1) =$ \_\_\_\_\_ .

**Solution:**
1. For $z = -1$: $|-1| = 1$ and $\operatorname{Arg}(-1) = \pi$.
2. Apply the formula:
   $$f(-1) = 1^{1/6} e^{i\pi/6} = \cos\left(\frac{\pi}{6}\right) + i\sin\left(\frac{\pi}{6}\right) = \frac{\sqrt{3}}{2} + \frac{1}{2}i$$
* **Answer:** $\mathbf{\frac{\sqrt{3}}{2} + \frac{1}{2}i}$

---

#### Problem 34
The complex reciprocal function $1/z$ is a composition of \_\_\_\_\_ in the unit circle followed by reflection across the \_\_\_\_\_-axis.

**Solution:**
1. We write:
   $$\frac{1}{z} = \overline{\left(\frac{1}{\bar{z}}\right)}$$
2. The term $\frac{1}{\bar{z}}$ is the geometric inversion in the unit circle.
3. The outer conjugate represents reflection across the real axis (or x-axis).
* **Answer:** **inversion**, **real** (or $x$)

---

#### Problem 35
According to the formal definition of a complex limit, $\lim_{z \to 2i} (z^2 - i) = -4 - i$ if for every $\epsilon > 0$ there is a $\delta > 0$ such that $|$ \_\_\_\_\_ $| < \epsilon$ whenever $0 < |z- $ \_\_\_\_\_ $| < \delta$.

**Solution:**
1. Under the definition $\lim_{z \to z_0} f(z) = L$, the inequalities are:
   $$0 < |z - z_0| < \delta \implies |f(z) - L| < \epsilon$$
2. Here $z_0 = 2i$, $f(z) = z^2 - i$, and $L = -4-i$.
3. Compute the term $|f(z) - L|$:
   $$|z^2 - i - (-4 - i)| = |z^2 - i + 4 + i| = |z^2 + 4|$$
* **Answer:** $\mathbf{z^2 + 4}$, $\mathbf{2i}$

---

#### Problem 36
If $f(z) = \frac{z + \bar{z}}{z}$, then $\lim_{x \to 0} f(x + 0i) =$ \_\_\_\_\_ and $\lim_{y \to 0} f(0 + iy) =$ \_\_\_\_\_ . Therefore, $\lim_{z \to 0} f(z)$ \_\_\_\_\_ .

**Solution:**
1. Substitute $z = x+iy$:
   $$f(z) = \frac{2x}{x+iy}$$
2. Along the x-axis ($y=0$):
   $$\lim_{x \to 0} f(x, 0) = \lim_{x \to 0} \frac{2x}{x} = 2$$
3. Along the y-axis ($x=0$):
   $$\lim_{y \to 0} f(0, y) = \lim_{y \to 0} \frac{0}{iy} = 0$$
4. Since the limits along the two paths do not match, the complex limit does not exist.
* **Answer:** $\mathbf{2}$, $\mathbf{0}$, **does not exist**

---

#### Problem 37
A complex function $f$ is continuous at $z = z_0$ if $\lim_{z \to z_0} f(z) =$ \_\_\_\_\_ .

**Solution:**
The third condition of continuity requires the limit to equal the function value at that point.
* **Answer:** $\mathbf{f(z_0)}$

---

#### Problem 38
The function $f(z) =$ \_\_\_\_\_ is an example of a function that is continuous on the domain $|z| > 0, \, -\pi < \arg(z) < \pi$.

**Solution:**
The principal argument function $\operatorname{Arg}(z)$ or the principal logarithm function $\operatorname{Ln}(z)$ are defined and continuous on the complex plane sliced along the negative real axis, which is exactly the domain given.
* **Answer:** $\mathbf{\operatorname{Arg}(z)}$ (or $\operatorname{Ln}(z)$)

---

#### Problem 39
The complex function $f(z) = \frac{x}{y} + i \log_e x$ is continuous on the region \_\_\_\_\_ .

**Solution:**
1. For the real part $u(x,y) = x/y$ to be continuous, we require $y \ne 0$.
2. For the imaginary part $v(x,y) = \log_e x$ to be continuous, we require $x > 0$ (so that the logarithm is defined and real).
* **Answer:** $\mathbf{0 < x < \infty, \, y \ne 0}$

---

#### Problem 40
Both \_\_\_\_\_ and \_\_\_\_\_ are examples of multiple-valued functions.

**Solution:**
The argument function $\arg(z)$ and complex power relations like $z^{1/2}$ or $z^{1/3}$ are multi-valued.
* **Answer:** $\mathbf{\arg(z)}$, $\mathbf{z^{1/2}}$ (or any non-integer power)
