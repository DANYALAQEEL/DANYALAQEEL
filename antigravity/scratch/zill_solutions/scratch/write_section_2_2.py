import os

content = """# Complex Analysis — Dennis G. Zill, 2nd Edition
## Chapter 2 · Section 2.2 — Complex Functions as Mappings
### Problems 1 – 33 · Complete Solutions

---

> **Key Concepts of Complex Mappings**
>
> 1. **Mappings:** A complex function $w = f(z)$ is viewed as a mapping from the $z$-plane to the $w$-plane. A subset $S$ in the $z$-plane maps to its image $S'$ in the $w$-plane.
>
> ![Figure 2.1](../../extracted_figures/figure_2_1.png)
>
> 2. **Parametric Curves:** A curve $C$ in the complex plane is parametrized by a complex-valued function of a real variable $t$: $z(t) = x(t) + i y(t)$ for $a \\le t \\le b$.
>
> ![Figure 2.4](../../extracted_figures/figure_2_4.png)
>
> 3. **Image of a Curve:** The image $C'$ of a curve $C$ under $w = f(z)$ has the parametrization $w(t) = f(z(t))$ for $a \\le t \\le b$.
> 4. **Linear Mapping (Rotations and Scale):** Mappings of the form $w = az$ perform rotation and magnification. If $a = r_0 e^{i\\theta_0}$, then points are magnified by $r_0$ and rotated by $\\theta_0$.
>
> ![Figure 2.7](../../extracted_figures/figure_2_7.png)

---

## Problems 1 – 8

**Find the image $S'$ of the set $S$ under the given complex mapping $w = f(z)$.**

#### Problem 1
Find the image $S'$ of the horizontal line $y = 3$ under the complex mapping $w = f(z) = \\bar{z}$.

**Solution:**
1. Express any point $z$ on the line $y = 3$ in Cartesian form:
   $$z = x + 3i, \\quad \\text{where } x \\in \\mathbb{R}$$
2. Apply the mapping $w = \\bar{z}$:
   $$w = \\overline{x + 3i} = x - 3i$$
3. Let $w = u + iv$. Comparing the real and imaginary parts:
   $$u = x, \\quad v = -3$$
4. Since $x$ can be any real number, $u$ ranges from $-\\infty$ to $\\infty$. The imaginary part is fixed at $v = -3$.
Thus, the image $S'$ is the **horizontal line $v = -3$** in the $w$-plane.

---

#### Problem 2
Find the image $S'$ of the line $y = x$ under the complex mapping $w = f(z) = \\bar{z}$.

**Solution:**
1. Express any point $z$ on the line $y = x$ in Cartesian form:
   $$z = x + ix, \\quad \\text{where } x \\in \\mathbb{R}$$
2. Apply the mapping $w = \\bar{z}$:
   $$w = \\overline{x + ix} = x - ix$$
3. Let $w = u + iv$. Comparing the real and imaginary parts:
   $$u = x, \\quad v = -x$$
4. Since $u = x$, we substitute $x = u$ into the equation for $v$:
   $$v = -u$$
5. As $x$ ranges over all real numbers, $u$ also ranges over all real numbers.
Thus, the image $S'$ is the **line $v = -u$** in the $w$-plane.

---

#### Problem 3
Find the image $S'$ of the half-plane $\\operatorname{Im}(z) > 2$ under the complex mapping $w = f(z) = 3z$.

**Solution:**
1. Let $z = x + iy$. The set $S$ is defined by the inequality $y > 2$.
2. Apply the mapping $w = 3z$:
   $$w = 3(x + iy) = 3x + 3iy$$
3. Let $w = u + iv$. Comparing parts:
   $$u = 3x, \\quad v = 3y$$
4. Since $y > 2$ and $v = 3y$, multiplying both sides of the inequality by 3 (which is positive) yields:
   $$v = 3y > 6$$
5. There are no restrictions on $x$, so $u = 3x$ ranges over all real numbers.
Thus, the image $S'$ is the **half-plane $\\operatorname{Im}(w) > 6$** (or $v > 6$).

---

#### Problem 4
Find the image $S'$ of the vertical strip $2 \\le \\operatorname{Re}(z) < 3$ under the complex mapping $w = f(z) = 3z$.

**Solution:**
1. Let $z = x + iy$. The set $S$ is defined by the inequality $2 \\le x < 3$.
2. Apply the mapping $w = 3z$:
   $$w = 3(x + iy) = 3x + 3iy$$
3. Let $w = u + iv$. Comparing parts:
   $$u = 3x, \\quad v = 3y$$
4. Since $2 \\le x < 3$ and $u = 3x$, multiplying the inequalities by 3 gives:
   $$3(2) \\le 3x < 3(3) \\implies 6 \\le u < 9$$
5. The coordinate $y$ is free to take any real value, so $v = 3y$ also ranges over all real numbers.
Thus, the image $S'$ is the **vertical strip $6 \\le \\operatorname{Re}(w) < 9$** (or $6 \\le u < 9$).

---

#### Problem 5
Find the image $S'$ of the vertical line $x = 2$ under the complex mapping $w = f(z) = (1 + i)z$.

**Solution:**
1. Express any point $z$ on the vertical line $x = 2$ in Cartesian form:
   $$z = 2 + iy, \\quad \\text{where } y \\in \\mathbb{R}$$
2. Apply the mapping $w = (1+i)z$:
   $$w = (1+i)(2+iy) = 2(1) + iy(1) + 2i + i^2y$$
   Since $i^2 = -1$:
   $$w = 2 + iy + 2i - y = (2 - y) + i(2 + y)$$
3. Let $w = u + iv$. Comparing parts:
   $$u = 2 - y \\quad \\text{and} \\quad v = 2 + y$$
4. We eliminate the parameter $y$. Add the two equations:
   $$u + v = (2 - y) + (2 + y) = 4 \\implies v = 4 - u$$
5. As $y$ ranges over all real numbers, $u = 2-y$ also ranges over all real numbers.
Thus, the image $S'$ is the **line $v = 4 - u$** in the $w$-plane.

---

#### Problem 6
Find the image $S'$ of the line $y = 2x + 1$ under the complex mapping $w = f(z) = (1 + i)z$.

**Solution:**
1. Express any point $z$ on the line $y = 2x + 1$ in Cartesian form:
   $$z = x + i(2x + 1), \\quad \\text{where } x \\in \\mathbb{R}$$
2. Apply the mapping $w = (1+i)z$:
   $$w = (1+i)(x + i(2x+1)) = x(1) + i(2x+1)(1) + ix + i^2(2x+1)$$
   $$= x + i(2x+1) + ix - (2x+1)$$
   $$= (x - 2x - 1) + i(2x + 1 + x) = (-x - 1) + i(3x + 1)$$
3. Let $w = u + iv$. Comparing parts:
   $$u = -x - 1 \\quad \\text{and} \\quad v = 3x + 1$$
4. Eliminate the parameter $x$:
   $$u = -x - 1 \\implies x = -u - 1$$
   Substitute this into the equation for $v$:
   $$v = 3(-u - 1) + 1 = -3u - 3 + 1 = -3u - 2$$
5. As $x$ ranges over all real numbers, $u = -x-1$ also ranges over all real numbers.
Thus, the image $S'$ is the **line $v = -3u - 2$** in the $w$-plane.

---

#### Problem 7
Find the image $S'$ of the half-plane $\\operatorname{Im}(z) \\le 1$ under the complex mapping $w = f(z) = iz + 4$.

**Solution:**
1. Let $z = x + iy$. The set $S$ is defined by $y \\le 1$.
2. Apply the mapping $w = iz + 4$:
   $$w = i(x+iy) + 4 = ix + i^2y + 4 = -y + 4 + ix$$
3. Let $w = u + iv$. Comparing parts:
   $$u = 4 - y \\quad \\text{and} \\quad v = x$$
4. Since $y \\le 1$, we multiply by $-1$ (which reverses the inequality):
   $$-y \\ge -1$$
   Add 4 to both sides:
   $$u = 4 - y \\ge 4 - 1 = 3$$
5. Since $x$ has no restrictions, $v = x$ ranges over all real numbers.

![Figure 2.2](../../extracted_figures/figure_2_2.png)

Thus, the image $S'$ is the **half-plane $\\operatorname{Re}(w) \\ge 3$** (or $u \\ge 3$).

---

#### Problem 8
Find the image $S'$ of the horizontal strip $-1 < \\operatorname{Im}(z) < 2$ under the complex mapping $w = f(z) = iz + 4$.

**Solution:**
1. Let $z = x + iy$. The set $S$ is defined by $-1 < y < 2$.
2. Apply the mapping $w = iz + 4$:
   $$w = i(x+iy) + 4 = -y + 4 + ix$$
3. Let $w = u + iv$. Comparing parts:
   $$u = 4 - y \\quad \\text{and} \\quad v = x$$
4. Since $-1 < y < 2$, multiply the inequality by $-1$ (which reverses the inequality signs):
   $$1 > -y > -2 \\implies -2 < -y < 1$$
   Add 4 to all parts of the inequality:
   $$4 - 2 < 4 - y < 4 + 1 \\implies 2 < u < 5$$
5. The variable $x$ has no restrictions, so $v = x$ ranges over all real numbers.
Thus, the image $S'$ is the **vertical strip $2 < \\operatorname{Re}(w) < 5$** (or $2 < u < 5$).

---

## Problems 9 – 14

**Find the image of the given line under the complex mapping $w = z^2$.**

*Recall that $w = z^2 = (x+iy)^2 = x^2 - y^2 + 2ixy$, so $u = x^2 - y^2$ and $v = 2xy$.*

#### Problem 9
Find the image of the horizontal line $y = 1$ under the complex mapping $w = z^2$.

**Solution:**
1. We are given $y = 1$. The mapping equations become:
   $$u = x^2 - 1^2 = x^2 - 1 \\quad \\text{and} \\quad v = 2x(1) = 2x$$
2. Eliminate the parameter $x$:
   $$v = 2x \\implies x = \\frac{v}{2}$$
   Substitute this into the equation for $u$:
   $$u = \\left(\\frac{v}{2}\\right)^2 - 1 = \\frac{v^2}{4} - 1$$
3. As $x$ ranges over all real numbers $\\mathbb{R}$, $v = 2x$ also ranges over all real numbers.

![Figure 2.3](../../extracted_figures/figure_2_3.png)

Thus, the image is the **parabola $u = \\frac{v^2}{4} - 1$** (which opens to the right).

---

#### Problem 10
Find the image of the vertical line $x = -3$ under the complex mapping $w = z^2$.

**Solution:**
1. We are given $x = -3$. The mapping equations become:
   $$u = (-3)^2 - y^2 = 9 - y^2 \\quad \\text{and} \\quad v = 2(-3)y = -6y$$
2. Eliminate the parameter $y$:
   $$v = -6y \\implies y = -\\frac{v}{6}$$
   Substitute this into the equation for $u$:
   $$u = 9 - \\left(-\\frac{v}{6}\\right)^2 = 9 - \\frac{v^2}{36}$$
3. As $y$ ranges over all real numbers, $v = -6y$ also ranges over all real numbers.
Thus, the image is the **parabola $u = 9 - \\frac{v^2}{36}$** (which opens to the left).

---

#### Problem 11
Find the image of the imaginary axis $x = 0$ under the complex mapping $w = z^2$.

**Solution:**
1. We are given $x = 0$. The mapping equations become:
   $$u = 0^2 - y^2 = -y^2 \\quad \\text{and} \\quad v = 2(0)y = 0$$
2. Since $y$ is a real number, $y^2 \\ge 0 \\implies u = -y^2 \\le 0$.
3. The imaginary component $v$ is identically 0.
Thus, the image is the **negative real axis**, i.e., the ray $-\\infty < u \\le 0, v = 0$.

---

#### Problem 12
Find the image of the real axis $y = 0$ under the complex mapping $w = z^2$.

**Solution:**
1. We are given $y = 0$. The mapping equations become:
   $$u = x^2 - 0^2 = x^2 \\quad \\text{and} \\quad v = 2x(0) = 0$$
2. Since $x$ is a real number, $x^2 \\ge 0 \\implies u \\ge 0$.
3. The imaginary component $v$ is identically 0.
Thus, the image is the **positive real axis**, i.e., the ray $0 \\le u < \\infty, v = 0$.

---

#### Problem 13
Find the image of the line $y = x$ under the complex mapping $w = z^2$.

**Solution:**
1. Express any point on the line $y = x$ as $z = x + ix = x(1+i)$.
2. Apply the mapping:
   $$w = z^2 = [x(1+i)]^2 = x^2 (1 + 2i + i^2) = x^2(2i) = 2x^2 i$$
3. Let $w = u + iv$. Comparing parts:
   $$u = 0, \\quad v = 2x^2$$
4. Since $x^2 \\ge 0$, we have $v = 2x^2 \\ge 0$. The real part is fixed at $u = 0$.
Thus, the image is the **positive imaginary axis**, i.e., the ray $u = 0, 0 \\le v < \\infty$.

---

#### Problem 14
Find the image of the line $y = -x$ under the complex mapping $w = z^2$.

**Solution:**
1. Express any point on the line $y = -x$ as $z = x - ix = x(1-i)$.
2. Apply the mapping:
   $$w = z^2 = [x(1-i)]^2 = x^2 (1 - 2i + i^2) = x^2(-2i) = -2x^2 i$$
3. Let $w = u + iv$. Comparing parts:
   $$u = 0, \\quad v = -2x^2$$
4. Since $x^2 \\ge 0$, we have $v = -2x^2 \\le 0$. The real part is fixed at $u = 0$.
Thus, the image is the **negative imaginary axis**, i.e., the ray $u = 0, -\\infty < v \\le 0$.

---

## Problems 15 – 20

**For each problem: (a) plot the parametric curve $C$ given by $z(t)$ and describe the curve in words, (b) find a parametrization of the image, $C'$, of $C$ under the given complex mapping $w = f(z)$, and (c) plot $C'$ and describe this curve in words.**

#### Problem 15
Let the curve $C$ be parametrized by $z(t) = 2(1 - t) + it, 0 \\le t \\le 1$ and the mapping be $f(z) = 3z$.

**Solution:**
**(a) Description of curve $C$:**
1. At $t = 0$: $z(0) = 2$.
2. At $t = 1$: $z(1) = i$.
3. Since $z(t) = (2 - 2t) + it$ is linear in $t$, it represents a straight line.
* **Description:** A straight line segment starting at $z = 2$ on the real axis and ending at $z = i$ on the imaginary axis.

**(b) Parametrization of image $C'$:**
1. Apply the function $f(z) = 3z$ to the parametrization of $C$:
   $$w(t) = f(z(t)) = 3[2(1 - t) + it] = 6(1 - t) + 3it, \\quad 0 \\le t \\le 1$$

**(c) Description of $C'$:**
1. At $t = 0$: $w(0) = 6$.
2. At $t = 1$: $w(1) = 3i$.
3. Since it is a linear scaling of $C$, the path is also a straight line segment.

![Figure 2.5](../../extracted_figures/figure_2_5.png)

* **Description:** A straight line segment starting at $w = 6$ on the real axis and ending at $w = 3i$ on the imaginary axis.

---

#### Problem 16
Let the curve $C$ be parametrized by $z(t) = i(1 - t) + (1 + i)t, 0 \\le t < \\infty$ and the mapping be $f(z) = -z$.

**Solution:**
**(a) Description of curve $C$:**
1. Simplify $z(t)$:
   $$z(t) = i - it + t + it = t + i, \\quad 0 \\le t < \\infty$$
2. Let $z = x + iy$. We have $x = t$ and $y = 1$ for $t \\ge 0$.
* **Description:** A horizontal ray starting at $z = i$ on the imaginary axis and extending infinitely to the right along the line $y = 1$.

**(b) Parametrization of image $C'$:**
1. Apply $f(z) = -z$:
   $$w(t) = -z(t) = -t - i, \\quad 0 \\le t < \\infty$$

**(c) Description of $C'$:**
1. Let $w = u + iv$. We have $u = -t$ and $v = -1$ for $t \\ge 0$.
2. At $t = 0$, $w(0) = -i$. As $t$ increases, $u = -t$ goes from 0 to $-\\infty$.
* **Description:** A horizontal ray starting at $w = -i$ on the imaginary axis and extending infinitely to the left along the line $v = -1$.

---

#### Problem 17
Let the curve $C$ be parametrized by $z(t) = 1 + 2e^{it}, 0 \\le t \\le 2\\pi$ and the mapping be $f(z) = z + 1 - i$.

**Solution:**
**(a) Description of curve $C$:**
1. The term $2e^{it}$ for $0 \\le t \\le 2\\pi$ traces a circle of radius 2 centered at the origin.
2. Adding 1 shifts the center to $z = 1$.
* **Description:** A circle of radius 2 centered at $z = 1$, traversed once counterclockwise.

**(b) Parametrization of image $C'$:**
1. Apply the translation $f(z) = z + 1 - i$:
   $$w(t) = (1 + 2e^{it}) + 1 - i = 2 - i + 2e^{it}, \\quad 0 \\le t \\le 2\\pi$$

**(c) Description of $C'$:**
1. The expression is of the form $w_0 + R e^{it}$ where $w_0 = 2 - i$ and $R = 2$.
* **Description:** A circle of radius 2 centered at $w = 2 - i$ in the $w$-plane, traversed once counterclockwise.

---

#### Problem 18
Let the curve $C$ be parametrized by $z(t) = i + e^{it}, 0 \\le t \\le \\pi$ and the mapping be $f(z) = (z - i)^3$.

**Solution:**
**(a) Description of curve $C$:**
1. The term $e^{it}$ for $0 \\le t \\le \\pi$ traces the upper half of the unit circle.
2. Adding $i$ shifts the center to $z = i$.
* **Description:** The upper semicircle of radius 1 centered at $z = i$, starting at $z = 1+i$ (for $t=0$) and ending at $z = -1+i$ (for $t=\\pi$).

**(b) Parametrization of image $C'$:**
1. Apply the mapping $f(z) = (z-i)^3$:
   $$w(t) = (z(t) - i)^3 = (e^{it})^3 = e^{3it}, \\quad 0 \\le t \\le \\pi$$

**(c) Description of $C'$:**
1. Let $\\theta(t) = 3t$. As $t$ varies from $0$ to $\\pi$, the argument $\\theta$ varies from $0$ to $3\\pi$.
2. The modulus is $|w(t)| = |e^{3it}| = 1$.

![Figure 2.6](../../extracted_figures/figure_2_6.png)

* **Description:** The unit circle $|w| = 1$ traversed counterclockwise starting at $w = 1$, completing $1.5$ full revolutions, and ending at $w = -1$.

---

#### Problem 19
Let the curve $C$ be parametrized by $z(t) = t, 0 \\le t \\le 2$ and the mapping be $f(z) = e^{i\\pi z}$.

**Solution:**
**(a) Description of curve $C$:**
1. The parameter $t$ is real-valued, so $z(t) = t + 0i$.
* **Description:** A line segment on the real axis from $z = 0$ to $z = 2$.

**(b) Parametrization of image $C'$:**
1. Apply the mapping $f(z) = e^{i\\pi z}$:
   $$w(t) = e^{i\\pi t}, \\quad 0 \\le t \\le 2$$

**(c) Description of $C'$:**
1. Let $\\theta(t) = \\pi t$. As $t$ varies from $0$ to $2$, the argument $\\theta$ goes from $0$ to $2\\pi$.
2. The modulus is $|w(t)| = 1$.
* **Description:** The entire unit circle $|w| = 1$ traversed once counterclockwise, starting and ending at $w = 1$.

---

#### Problem 20
Let the curve $C$ be parametrized by $z(t) = 4e^{it}, 0 \\le t \\le \\pi$ and the mapping be $f(z) = \\operatorname{Re}(z)$.

**Solution:**
**(a) Description of curve $C$:**
1. The expression $4e^{it}$ for $0 \\le t \\le \\pi$ represents a semicircle of radius 4.
* **Description:** The upper semicircle of radius 4 centered at the origin, starting at $z = 4$ and ending at $z = -4$.

**(b) Parametrization of image $C'$:**
1. Apply the mapping $f(z) = \\operatorname{Re}(z) = \\operatorname{Re}(4\\cos t + 4i\\sin t)$:
   $$w(t) = 4\\cos t, \\quad 0 \\le t \\le \\pi$$

**(c) Description of $C'$:**
1. The values of $w(t)$ are purely real.
2. At $t = 0$, $w(0) = 4$. At $t = \\pi/2$, $w(\\pi/2) = 0$. At $t = \\pi$, $w(\\pi) = -4$.
3. As $t$ varies continuously, the values trace the real axis.
* **Description:** A line segment on the real axis from $w = 4$ to $w = -4$.

---

## Problems 21 – 26

**Use parametrizations to find the image, $C'$, of the curve $C$ under the given complex mapping $w = f(z)$.**

#### Problem 21
Find the image $C'$ of the positive imaginary axis under the mapping $f(z) = z^3$.

**Solution:**
1. Parametrize the positive imaginary axis $C$:
   $$z(t) = it, \\quad 0 \\le t < \\infty$$
2. Apply the mapping $w = z^3$:
   $$w(t) = (it)^3 = i^3 t^3 = -i t^3, \\quad 0 \\le t < \\infty$$
3. Let $s = t^3$. Since $t \\ge 0$, we have $s \\ge 0$.
4. The parametrization of $C'$ is $w(s) = -is$ for $0 \\le s < \\infty$.
Thus, the image $C'$ is the **negative imaginary axis** (including the origin).

---

#### Problem 22
Find the image $C'$ of the circle $|z - 1| = 2$ under the mapping $f(z) = iz$.

**Solution:**
1. Parametrize the circle $C$ centered at 1 with radius 2:
   $$z(t) = 1 + 2e^{it}, \\quad 0 \\le t \\le 2\\pi$$
2. Apply the mapping $w = iz$:
   $$w(t) = i(1 + 2e^{it}) = i + 2i e^{it}$$
3. Express $i$ in exponential form: $i = e^{i\\pi/2}$:
   $$w(t) = i + 2 e^{i\\pi/2} e^{it} = i + 2e^{i(t + \\pi/2)}, \\quad 0 \\le t \\le 2\\pi$$
4. This is a circle of radius 2 centered at $w = i$.
Thus, the image $C'$ is the **circle $|w - i| = 2$**.

---

#### Problem 23
Find the image $C'$ of the circle $|z| = 2$ under the mapping $f(z) = 1/z$.

**Solution:**
1. Parametrize the circle $C$ centered at the origin with radius 2:
   $$z(t) = 2e^{it}, \\quad 0 \\le t \\le 2\\pi$$
2. Apply the mapping $w = 1/z$:
   $$w(t) = \\frac{1}{2e^{it}} = \\frac{1}{2}e^{-it}, \\quad 0 \\le t \\le 2\\pi$$
3. Let $\\phi = -t$. As $t$ goes from $0$ to $2\\pi$, the parameter $\\phi$ goes from $0$ to $-2\\pi$ (traced clockwise).
4. The modulus is $|w(t)| = 1/2$.
Thus, the image $C'$ is the **circle $|w| = 1/2$** (traced clockwise).

---

#### Problem 24
Find the image $C'$ of the line segment from $1 - i$ to $2 - 2i$ under the mapping $f(z) = 1/z$.

**Solution:**
1. Notice that the endpoints lie on the ray $\\theta = -\\pi/4$ (or $y = -x$).
2. Parametrize the segment $C$ using a real parameter $t$:
   $$z(t) = t(1-i) = t - it, \\quad 1 \\le t \\le 2$$
3. Apply the mapping $w = 1/z$:
   $$w(t) = \\frac{1}{t(1-i)} = \\frac{1}{t} \\cdot \\frac{1+i}{(1-i)(1+i)} = \\frac{1}{t} \\cdot \\frac{1+i}{2} = \\frac{1}{2t} + i\\frac{1}{2t}$$
4. Let $s = \\frac{1}{2t}$. Since $1 \\le t \\le 2$:
   $$t = 1 \\implies s = 1/2$$
   $$t = 2 \\implies s = 1/4$$
   So $\\frac{1}{4} \\le s \\le \\frac{1}{2}$.
5. The image is parametrized by $w(s) = s + is$ for $\\frac{1}{4} \\le s \\le \\frac{1}{2}$.
Thus, the image $C'$ is the **line segment from $\\frac{1}{4} + \\frac{1}{4}i$ to $\\frac{1}{2} + \\frac{1}{2}i$ along the line $v = u$**.

---

#### Problem 25
Find the image $C'$ of the semicircle of the unit circle $|z| = 1$ in the upper half-plane $\\operatorname{Im}(z) \\ge 0$ under the mapping $f(z) = z + \\bar{z}$.

**Solution:**
1. Parametrize the semicircle $C$:
   $$z(t) = e^{it} = \\cos t + i\\sin t, \\quad 0 \\le t \\le \\pi$$
2. The complex conjugate is $\\bar{z}(t) = e^{-it} = \\cos t - i\\sin t$.
3. Apply the mapping:
   $$w(t) = z(t) + \\bar{z}(t) = (\\cos t + i\\sin t) + (\\cos t - i\\sin t) = 2\\cos t$$
4. Since $t$ varies from $0$ to $\\pi$, $\\cos t$ decreases continuously from $1$ to $-1$.
5. Thus, $w(t) = 2\\cos t$ decreases continuously from $2$ to $-2$.
Thus, the image $C'$ is the **real line segment $[-2, 2]$** (from $w = 2$ to $w = -2$).

---

#### Problem 26
Find the image $C'$ of the ray emanating from the origin and containing $2 + \\sqrt{3}i$ under the mapping $f(z) = e^z$.

**Solution:**
1. The direction of the ray is given by the complex number $z_0 = 2 + \\sqrt{3}i$.
2. Parametrize the ray $C$:
   $$z(t) = t(2 + \\sqrt{3}i) = 2t + i\\sqrt{3}t, \\quad 0 \\le t < \\infty$$
3. Apply the mapping $w = e^z$:
   $$w(t) = e^{2t + i\\sqrt{3}t} = e^{2t} e^{i\\sqrt{3}t}, \\quad 0 \\le t < \\infty$$
4. Let $r(t) = e^{2t}$ and $\\theta(t) = \\sqrt{3}t$.
   * As $t \\to \\infty$, $r(t) \\to \\infty$ and $\\theta(t) \\to \\infty$.
   * As $t = 0$, $r(0) = 1$ and $\\theta(0) = 0$.
5. This is the polar equation of a logarithmic spiral.
Thus, the image $C'$ is a **logarithmic spiral** starting at $w = 1$ and winding outwards counterclockwise to infinity.

---

## Focus on Concepts (Problems 27 – 33)

#### Problem 27
Show that the image of the vertical line $x = 1$ under the complex mapping $w = 1/z$ is a circle.
(a) Write the mapping in terms of $u$ and $v$.
(b) Show that the coordinates satisfy $(u - 1/2)^2 + v^2 = 1/4$.
(c) Describe the image.
(d) Is there a point on the line $x = 1$ that maps onto $0$?

**Solution:**
**(a) Mapping in terms of $u$ and $v$:**
Any point on $x = 1$ is $z = 1 + iy$. Under $w = 1/z$:
$$w = \\frac{1}{1+iy} = \\frac{1-iy}{1+y^2} \\implies u = \\frac{1}{1+y^2}, \\quad v = -\\frac{y}{1+y^2}$$

**(b) Verification of circle equation:**
Expand LHS of $(u - 1/2)^2 + v^2 = 1/4$:
$$\\left(\\frac{1}{1+y^2} - \\frac{1}{2}\\right)^2 + \\left(-\\frac{y}{1+y^2}\\right)^2 = \\left(\\frac{2 - (1+y^2)}{2(1+y^2)}\\right)^2 + \\frac{y^2}{(1+y^2)^2}$$
$$= \\frac{(1-y^2)^2}{4(1+y^2)^2} + \\frac{4y^2}{4(1+y^2)^2} = \\frac{1 - 2y^2 + y^4 + 4y^2}{4(1+y^2)^2} = \\frac{(1+y^2)^2}{4(1+y^2)^2} = \\frac{1}{4}$$
This matches RHS, proving the equation holds.

**(c) Description:**
A circle centered at $(1/2, 0)$ with radius $1/2$.

**(d) Mapping onto 0:**
For $w = 0$, we need $u = 0$ and $v = 0$.
But $u = \\frac{1}{1+y^2}$, and since the numerator is 1, $u$ can never be 0 for any real $y$.
Thus, the origin $w = 0$ is excluded. The image is the **circle $|w - 1/2| = 1/2$ except for the point $w = 0$**.

---

#### Problem 28
Consider the parametrization $z(t) = i(1 - t) + 3t, 0 \\le t \\le 1$.
(a) Describe in words the curve traced by $z(t)$.
(b) Compare this with the curve $z(t) = 3(1-t) + it$ for $0 \\le t \\le 1$.
(c) Compare this with the curve $z(t) = 3(\\frac{1}{2}t) + i(1 - \\frac{1}{2}t)$ for $0 \\le t \\le 2$.
(d) Find a parametrization of the line segment from $1 + 2i$ to $2 + i$ where $0 \\le t \\le 3$.

**Solution:**
**(a) Description:**
A straight line segment from $z(0) = i$ to $z(1) = 3$.

**(b) Comparison:**
They trace the same straight line segment, but in opposite directions (the second traces from $3$ to $i$).

**(c) Comparison:**
They trace the exact same segment with the same direction, but the second travels at half the speed (taking $t=2$ to complete instead of $t=1$).

**(d) Parametrization from $1+2i$ to $2+i$ for $0 \\le t \\le 3$:**
Using linear interpolation $z(t) = At + B$:
At $t=0$: $z(0) = B = 1 + 2i$.
At $t=3$: $z(3) = 3A + 1 + 2i = 2 + i \\implies 3A = 1 - i \\implies A = \\frac{1-i}{3}$.
Thus:
$$\\boxed{z(t) = \\left(\\frac{1-i}{3}\\right)t + 1 + 2i, \\quad 0 \\le t \\le 3}$$

---

#### Problem 29
Find the image of the circle $|z - z_0| = R$ under the linear mapping $f(z) = iz - 2$.

**Solution:**
1. Parametrize the circle:
   $$z(t) = z_0 + R e^{it}, \\quad 0 \\le t \\le 2\\pi$$
2. Apply the mapping:
   $$w(t) = i(z_0 + R e^{it}) - 2 = (iz_0 - 2) + i R e^{it}$$
3. Express $i$ as $e^{i\\pi/2}$:
   $$w(t) = (iz_0 - 2) + R e^{i(t + \\pi/2)}$$
4. This is the parametrization of a circle centered at $w_0 = iz_0 - 2$ with radius $R$.
Thus, the image is the **circle $|w - (iz_0 - 2)| = R$**.

---

#### Problem 30
Consider the line $y = mx + b$.
(a) Find a parametrization $z(t)$ of this line.
(b) Find the image of the line under $w = z + 2 - 3i$.
(c) Find the image of the line under $w = 3z$.

**Solution:**
**(a) Parametrization:**
Using $x=t$:
$$\\boxed{z(t) = t + i(mt + b), \\quad -\\infty < t < \\infty}$$

**(b) Image under translation $w = z + 2 - 3i$:**
$$w(t) = t + i(mt + b) + 2 - 3i = (t + 2) + i(mt + b - 3)$$
Let $u = t+2 \\implies t = u-2$. Substitute into the imaginary part:
$$v = m(u-2) + b - 3 = mu - 2m + b - 3$$
Thus, the image is the **line $v = mu + b - 3 - 2m$**.

**(c) Image under magnification $w = 3z$:**
$$w(t) = 3[t + i(mt + b)] = 3t + i(3mt + 3b)$$
Let $u = 3t \\implies t = u/3$. Substitute into the imaginary part:
$$v = 3m(u/3) + 3b = mu + 3b$$
Thus, the image is the **line $v = mu + 3b$**.

---

#### Problem 31
What geometric transformation is represented by the mapping $f(z) = \\bar{z}$?

**Solution:**
For any $z = x+iy$, $f(z) = x-iy$.
The real part remains unchanged, while the imaginary part is negated.
Geometrically, this represents a **reflection across the real axis** (the line $y = 0$).

---

#### Problem 32
Let $f(z) = az$ with $a$ a complex constant satisfying $|a| = 1$.
(a) Prove that $f$ preserves distances, i.e., $|f(z_1) - f(z_2)| = |z_1 - z_2|$.
(b) Give a geometric interpretation of this mapping.
(c) What is the image of a circle under this mapping?

**Solution:**
**(a) Proof of distance preservation:**
$$|f(z_1) - f(z_2)| = |a z_1 - a z_2| = |a(z_1 - z_2)| = |a| |z_1 - z_2|$$
Since we are given $|a| = 1$:
$$|f(z_1) - f(z_2)| = 1 \\cdot |z_1 - z_2| = |z_1 - z_2|$$
This completes the proof.

**(b) Geometric interpretation:**
Since distances between any two points are preserved, this mapping is a rigid motion (an isometry). Writing $a = e^{i\\theta_0}$, the mapping is a **pure rotation by $\\theta_0$ counterclockwise about the origin**.

**(c) Image of a circle:**
A circle centered at $z_0$ with radius $R$ is mapped to a circle centered at $a z_0$ with the same radius $R$ (since distances are preserved).

---

#### Problem 33
Show that the linear mapping $f(z) = az$ with $a \\ne 0$ preserves angles.
(a) Parametrize two rays $C_1, C_2$ from the origin and find their images.
(b) Use the cosine formula for angles to show the angle is preserved.

**Solution:**
**(a) Rays and their images:**
Let two rays be:
$$z_1(t) = t e^{i\\theta_1}, \\quad z_2(t) = t e^{i\\theta_2}, \\quad t \\ge 0$$
The angle between them is $\\theta = \\theta_2 - \\theta_1$.
Under $w = az$, where $a = R_0 e^{i\\alpha}$:
$$w_1(t) = a z_1(t) = t R_0 e^{i(\\theta_1 + \\alpha)}$$
$$w_2(t) = a z_2(t) = t R_0 e^{i(\\theta_2 + \\alpha)}$$
The images are also rays emanating from the origin with angles $\\theta_1 + \\alpha$ and $\\theta_2 + \\alpha$.

**(b) Angle preservation:**
The angle between the image rays is:
$$\\theta' = (\\theta_2 + \\alpha) - (\\theta_1 + \\alpha) = \\theta_2 - \\theta_1 = \\theta$$
Thus, the angle is preserved.
"""

os.makedirs(r"C:\\Users\\Administrator\\.gemini\\antigravity\\scratch\\zill_solutions\\solutions_perfected\\chapter_2", exist_ok=True)
with open(r"C:\\Users\\Administrator\\.gemini\\antigravity\\scratch\\zill_solutions\\solutions_perfected\\chapter_2\\section_2.2_solutions.md", "w", encoding="utf-8") as f:
    f.write(content)

print("Section 2.2 written successfully.")
