# Complex Analysis — Dennis G. Zill, 2nd Edition
## Chapter 7: Conformal Mappings
### Section 7.1: Conformal Mappings
### Complete Solutions

---

### Problems 1–6: Analyticity and Conformal Mappings

We determine where the given mapping $w = f(z)$ is conformal. A mapping is conformal at all points where $f(z)$ is analytic and $f'(z) \neq 0$.

#### Problem 1
**Function:** $f(z) = z^3 - 3z + 1$.

**Solution:**
The function is a polynomial, so it is entire (analytic everywhere in the complex plane). Its derivative is:
$$f'(z) = 3z^2 - 3 = 3(z - 1)(z + 1)$$
To find where the mapping is not conformal, we set $f'(z) = 0$:
$$3(z-1)(z+1) = 0 \implies z = \pm 1$$
Thus, the mapping is conformal everywhere except at $z = 1$ and $z = -1$.

---

#### Problem 2
**Function:** $f(z) = z^2 + 2iz - 3$.

**Solution:**
The function is entire. Its derivative is:
$$f'(z) = 2z + 2i = 2(z + i)$$
Setting $f'(z) = 0$:
$$2(z+i) = 0 \implies z = -i$$
Thus, the mapping is conformal everywhere except at $z = -i$.

---

#### Problem 3
**Function:** $f(z) = z - e^{-z} + 1 - i$.

**Solution:**
The function is entire since $z$ and $e^{-z}$ are entire. Its derivative is:
$$f'(z) = 1 + e^{-z}$$
Setting $f'(z) = 0$:
$$1 + e^{-z} = 0 \implies e^{-z} = -1$$
Since $-1 = e^{i(2k+1)\pi}$ for $k \in \mathbb{Z}$, we have:
$$-z = i(2k+1)\pi \implies z = (2k+1)\pi i, \quad k \in \mathbb{Z}$$
Thus, the mapping is conformal everywhere except at the points $z = (2k+1)\pi i$ for $k \in \mathbb{Z}$ (odd multiples of $\pi i$).

---

#### Problem 4
**Function:** $f(z) = z e^{z^2 - 2}$.

**Solution:**
The function is entire. Using the product rule and chain rule, the derivative is:
$$f'(z) = 1 \cdot e^{z^2-2} + z \cdot (2z) e^{z^2-2} = (2z^2 + 1) e^{z^2-2}$$
Setting $f'(z) = 0$:
$$(2z^2 + 1) e^{z^2-2} = 0$$
Since $e^{z^2-2}$ is never zero, we must have:
$$2z^2 + 1 = 0 \implies z^2 = -\frac{1}{2} \implies z = \pm \frac{i}{\sqrt{2}}$$
Thus, the mapping is conformal everywhere except at $z = \pm \frac{i}{\sqrt{2}}$.

---

#### Problem 5
**Function:** $f(z) = \tan z$.

**Solution:**
The function $f(z) = \tan z = \frac{\sin z}{\cos z}$ is analytic everywhere except at the zeros of $\cos z$, which are:
$$z = \left( k + \frac{1}{2} \right)\pi, \quad k \in \mathbb{Z}$$
In its domain of analyticity, the derivative is:
$$f'(z) = \sec^2 z = \frac{1}{\cos^2 z}$$
Since $f'(z)$ is a quotient with $1$ in the numerator, it is never zero.
Thus, the mapping is conformal everywhere in its domain of analyticity, i.e., for all $z \neq (k + 1/2)\pi$, $k \in \mathbb{Z}$.

---

#### Problem 6
**Function:** $f(z) = z - \operatorname{Ln}(z + i)$.

**Solution:**
The principal branch of the logarithm $\operatorname{Ln}(w)$ is analytic everywhere except on the branch cut $w \in (-\infty, 0]$, which corresponds to:
$$\operatorname{Re}(z+i) \leq 0 \text{ and } \operatorname{Im}(z+i) = 0 \implies x \leq 0 \text{ and } y+1 = 0 \implies x \leq 0, y = -1$$
Wait, for $w = z+i$:
$\operatorname{Ln}(w)$ has a branch cut on the negative real axis and zero: $\operatorname{Re}(w) \leq 0$ and $\operatorname{Im}(w) = 0$.
Since $w = x + i(y+1)$, this cut is the ray $x \leq 0, y = -1$.
Inside its domain of analyticity, the derivative is:
$$f'(z) = 1 - \frac{1}{z + i} = \frac{z + i - 1}{z + i}$$
Setting $f'(z) = 0$:
$$z + i - 1 = 0 \implies z = 1 - i$$
Thus, the mapping is conformal everywhere except on the branch cut $x \leq 0, y = -1$ and at the point $z = 1 - i$.

---

### Problems 7–10: Non-Conformality at a Point

We show that the given function is not conformal at the indicated point $z_0$.

#### Problem 7
**Function:** $f(z) = (z - i)^3$; $z_0 = i$.

**Solution:**
The function is entire. Its derivative is:
$$f'(z) = 3(z - i)^2$$
Evaluating at $z_0 = i$:
$$f'(i) = 3(i - i)^2 = 0$$
Since the derivative is zero at $z_0 = i$, the mapping is not conformal at $z_0 = i$.

---

#### Problem 8
**Function:** $f(z) = (iz - 3)^2$; $z_0 = -3i$.

**Solution:**
The function is entire. Its derivative is:
$$f'(z) = 2i(iz - 3)$$
Evaluating at $z_0 = -3i$:
$$f'(-3i) = 2i(i(-3i) - 3) = 2i(3 - 3) = 0$$
Since the derivative is zero at $z_0 = -3i$, the mapping is not conformal at $z_0 = -3i$.

---

#### Problem 9
**Function:** $f(z) = e^{z^2}$; $z_0 = 0$.

**Solution:**
The function is entire. Its derivative is:
$$f'(z) = 2z e^{z^2}$$
Evaluating at $z_0 = 0$:
$$f'(0) = 2(0) e^{0} = 0$$
Since the derivative is zero at $z_0 = 0$, the mapping is not conformal at $z_0 = 0$.

---

#### Problem 10
**Function:** $f(z) = z^{1/2}$ (principal square root); $z_0 = 0$.

**Solution:**
The principal square root is defined as:
$$f(z) = \sqrt{|z|} e^{i \operatorname{Arg}(z)/2}$$
The function is not differentiable at $z_0 = 0$ because:
$$\lim_{\Delta z \to 0} \frac{f(\Delta z) - f(0)}{\Delta z} = \lim_{\Delta z \to 0} \frac{(\Delta z)^{1/2}}{\Delta z} = \lim_{\Delta z \to 0} \frac{1}{(\Delta z)^{1/2}} = \infty$$
Since $f(z)$ is not analytic at $z_0 = 0$, the mapping is not conformal at $z_0 = 0$.

---

### Problems 11–16: Mapping Regions using Appendix III

We find the conformal mapping of the region $R$ onto $R'$ and determine the image of the curve from $A$ to $B$.

#### Problem 11
**Region $R$:** Semi-infinite vertical strip $0 \leq \operatorname{Re}(z) \leq 2$, $\operatorname{Im}(z) \geq 0$.
**Region $R'$:** Upper half-plane $\operatorname{Im}(w) \geq 0$.
**Curve:** Segment $A$ to $B$ on the boundary, where $A = 0$ and $B = 2$.

**Solution:**
We use Entry H-4 of Appendix III, which maps a semi-infinite strip of width $a$ to the upper half-plane:
$$w = \cos\left( \frac{\pi z}{a} \right)$$
Here, the width of the strip is $a = 2$. Thus, the mapping is:
$$w = \cos\left( \frac{\pi z}{2} \right)$$
Let's find the image of the curve $A-B$ (the line segment from $z = 0$ to $z = 2$ along the real axis):
- For $z = t$ where $t \in [0, 2]$:
  $$w = \cos\left( \frac{\pi t}{2} \right)$$
- As $t$ varies from $0$ to $2$:
  - At $t = 0$: $w = \cos(0) = 1$.
  - At $t = 1$: $w = \cos(\pi/2) = 0$.
  - At $t = 2$: $w = \cos(\pi) = -1$.
Thus, the segment from $A = 0$ to $B = 2$ is mapped onto the line segment from $1$ to $-1$ on the real axis of the $w$-plane.

---

#### Problem 12
**Region $R$:** Semi-infinite vertical strip $0 \leq \operatorname{Re}(z) \leq 1$, $\operatorname{Im}(z) \geq 0$.
**Region $R'$:** Upper half-plane $\operatorname{Im}(w) \geq 0$.
**Curve:** Segment from $A = i$ to $B = 1+i$.

**Solution:**
Using the translation and scaling to map the strip of width $1$:
$$w = \sin\left( \pi \left( z - \frac{1}{2} \right) \right) = -\cos(\pi z)$$
Alternatively, we can use Entry E-6 of Appendix III:
$$w_1 = \sin\left( \pi z - \frac{\pi}{2} \right) = -\cos(\pi z)$$
Let's check the boundary points and the segment from $A = i$ to $B = 1+i$:
- For $z = t + i$ with $t \in [0, 1]$:
  $$w = -\cos(\pi t + \pi i) = -\cos(\pi t) \cosh(\pi) + i \sin(\pi t) \sinh(\pi)$$
This represents the upper half of the ellipse in the $w$-plane centered at the origin, with semi-axes $\cosh(\pi)$ and $\sinh(\pi)$.
- At $A = i$ ($t=0$): $w = -\cosh(\pi)$.
- At $B = 1+i$ ($t=1$): $w = \cosh(\pi)$.
The image is the upper elliptical arc from $-\cosh(\pi)$ to $\cosh(\pi)$.

---

#### Problem 13
**Region $R$:** Upper half-disk $|z| \leq 1$, $\operatorname{Im}(z) \geq 0$.
**Region $R'$:** Upper half-plane $\operatorname{Im}(w) \geq 0$.
**Curve:** Semicircular boundary arc from $A = 1$ to $B = -1$.

**Solution:**
We compose two mappings:
1. **Entry H-5 of Appendix III:** The mapping $w_1 = \frac{1+z}{1-z}$ maps the upper half-disk to the first quadrant $u_1 \geq 0, v_1 \geq 0$.
2. **Entry E-4 of Appendix III:** The power function $w = w_1^{1/2}$ maps the first quadrant onto the upper half-plane $\operatorname{Im}(w) \geq 0$.
Combining these:
$$w = \left( \frac{1+z}{1-z} \right)^{1/2}$$
Let's find the image of the semicircular arc $z = e^{i\theta}$ for $\theta \in [0, \pi]$:
- We compute:
  $$\frac{1+e^{i\theta}}{1-e^{i\theta}} = \frac{e^{-i\theta/2} + e^{i\theta/2}}{e^{-i\theta/2} - e^{i\theta/2}} = \frac{2\cos(\theta/2)}{-2i\sin(\theta/2)} = i \cot\left(\frac{\theta}{2}\right)$$
- Taking the principal square root:
  $$w = \left[ i \cot\left(\frac{\theta}{2}\right) \right]^{1/2} = \sqrt{\cot\left(\frac{\theta}{2}\right)} e^{i\pi/4}$$
- As $\theta$ goes from $0$ to $pi$:
  - At $A = 1$ ($\theta \to 0$): $w \to \infty e^{i\pi/4}$ (infinity).
  - At $B = -1$ ($\theta \to \pi$): $w \to 0$.
Thus, the image of the semicircular arc is the ray $\arg(w) = \pi/4$ in the $w$-plane, running from $\infty$ to $0$.

---

#### Problem 14
**Region $R$:** Right half-disk $|z| \leq 1$, $\operatorname{Re}(z) \geq 0$.
**Region $R'$:** Upper half-plane $\operatorname{Im}(w) \geq 0$.
**Curve:** Semicircular arc from $A = i$ to $B = -i$.

**Solution:**
We first rotate the right half-disk to the upper half-disk by multiplying by $i$:
$$z_1 = iz$$
This maps $R$ onto the upper half-disk $|z_1| \leq 1, \operatorname{Im}(z_1) \geq 0$. The points $A = i$ and $B = -i$ map to:
$$A_1 = i(i) = -1, \quad B_1 = i(-i) = 1$$
Now we apply the mapping from Problem 13:
$$w = \left( \frac{1+z_1}{1-z_1} \right)^{1/2} = \left( \frac{1+iz}{1-iz} \right)^{1/2}$$
The semicircular boundary arc from $A = i$ to $B = -i$ maps to the ray in the $w$-plane.

---

#### Problem 15
**Region $R$:** Region bounded by the $y$-axis and the circle $|z - 1/2| = 1/2$.
**Region $R'$:** Upper half-plane $\operatorname{Im}(w) \geq 0$.
**Curve:** Boundary circle segment from $A = 0$ to $B = 1$.

**Solution:**
We use Entry H-6 of Appendix III, which maps the region between the $y$-axis and the circle to the first quadrant:
$$w_1 = \frac{e^{\pi/z} + e^{-\pi/z}}{e^{\pi/z} - e^{-\pi/z}}$$
Then we map the first quadrant onto the upper half-plane using the square root:
$$w = w_1^{1/2} = \left( \frac{e^{\pi/z} + e^{-\pi/z}}{e^{\pi/z} - e^{-\pi/z}} \right)^{1/2}$$

---

#### Problem 16
**Region $R$:** Region bounded by the circles $|z| = 1$ and $|z - 1/2| = 1/2$.
**Region $R'$:** Upper half-plane $\operatorname{Im}(w) \geq 0$.

**Solution:**
We use Entry E-7 of Appendix III followed by suitable translation and power mapping to map the region between the two tangent circles onto the upper half-plane. Let the mapping be:
$$w = \left( \frac{z}{1-z} \right)^{1/2}$$

---

### Problems 17–22: Focus on Concepts

#### Problem 17
**Problem:** Where is the mapping $w = \bar{z}$ conformal? Justify your answer.

**Solution:**
A complex mapping $w = f(z) = u(x,y) + iv(x,y)$ is conformal at $z_0$ if and only if $f(z)$ is analytic at $z_0$ and $f'(z_0) \neq 0$.
For the reflection mapping $f(z) = \bar{z} = x - iy$, the real and imaginary parts are:
$$u(x,y) = x, \quad v(x,y) = -y$$
We check the Cauchy-Riemann equations:
$$\frac{\partial u}{\partial x} = 1, \quad \frac{\partial v}{\partial y} = -1 \implies \frac{\partial u}{\partial x} \neq \frac{\partial v}{\partial y}$$
Since the Cauchy-Riemann equations are not satisfied anywhere, the function $f(z) = \bar{z}$ is nowhere analytic.
Thus, the mapping is **nowhere conformal**.
*(Note: Reflection preserves the magnitude of angles but reverses their direction, which is called an isogonal mapping rather than a conformal mapping).*

---

#### Problem 18
**Problem:** Suppose $w = f(z)$ is a conformal mapping at every point in the complex plane. Where is the mapping $w = f(\bar{z})$ conformal? Justify your answer.

**Solution:**
Let $F(z) = f(\bar{z})$. Since $f(z)$ is conformal everywhere, $f(z)$ is entire and $f'(z) \neq 0$ everywhere.
However, the variable is $\bar{z}$. Under the chain rule for complex variables:
$$\frac{\partial F}{\partial \bar{z}} = f'(\bar{z}) \neq 0, \quad \frac{\partial F}{\partial z} = 0$$
Since $\frac{\partial F}{\partial z} = 0$, the function $F(z)$ is conjugate-analytic (or anti-analytic). It is not analytic unless it is constant, which it is not.
Alternatively, reflection reverses the orientation of angles. Since $f(z)$ preserves the orientation of angles, the composition $f(\bar{z})$ must reverse the orientation of angles. By definition, a conformal mapping must preserve both the magnitude and the direction of angles.
Thus, the mapping $w = f(\bar{z})$ is **nowhere conformal**.

---

#### Problem 19
**Problem:** Suppose that $w = f(z)$ is a conformal mapping at every point in the complex plane. Where is the mapping $w = e^{f(z)}$ conformal?

**Solution:**
Let $g(z) = e^{f(z)}$. Since $f(z)$ is entire, $g(z)$ is entire. The derivative of $g(z)$ is:
$$g'(z) = f'(z) e^{f(z)}$$
For $g(z)$ to be conformal at a point, we must have $g'(z) \neq 0$.
Since $f(z)$ is conformal everywhere, we have $f'(z) \neq 0$ for all $z \in \mathbb{C}$. In addition, the exponential function $e^{w}$ is never zero for any complex $w$.
Therefore, $g'(z) = f'(z) e^{f(z)} \neq 0$ for all $z \in \mathbb{C}$.
Thus, the mapping $w = e^{f(z)}$ is **conformal everywhere** in the complex plane.

---

#### Problem 20
**Problem:** Determining the angle between two curves $C_1$ and $C_2$ at a point where one (or both) of the curves has a zero tangent vector.
(a) Assume that $C_1$ and $C_2$ are parametrized by $z_1(t)$ and $z_2(t)$, respectively, intersecting at $z_1(t_0) = z_2(t_0) = z_0$. Explain why $\arg(z'_2) - \arg(z'_1)$ does not represent the angle if either is zero.
(b) Explain why $\lim_{t \to t_0} [\arg(z_2(t) - z_0)] - \lim_{t \to t_0} [\arg(z_1(t) - z_0)]$ does represent the angle regardless.
(c) Determine the angle between the curves parametrized by $z_1(t) = t + it^2$ and $z_2(t) = t^2 + it^2$, $-1 \leq t \leq 1$, at $z_0 = 0$.

**Solution:**
**(a)**
The argument of the zero vector is undefined. If either $z'_1(t_0) = 0$ or $z'_2(t_0) = 0$, then the tangent vector is the zero vector, and its argument $\arg(0)$ cannot be computed. Thus, the difference $\arg(z'_2) - \arg(z'_1)$ is undefined.

**(b)**
The vector $z(t) - z_0$ represents the secant line from the intersection point $z_0$ to a nearby point $z(t)$ on the curve. The limit of the argument of the secant vector as $t \to t_0$ represents the angle of the tangent line, even when the derivative $z'(t_0) = 0$ (provided the limit exists). Thus, the difference of these limits represents the angle between the tangent lines of the two curves at $z_0$.

**(c)**
Let $z_0 = 0$, which corresponds to $t_0 = 0$.
1. **For $C_1$:** $z_1(t) = t + it^2$.
   $$z_1(t) - z_0 = t + it^2 = t(1 + it)$$
   For $t > 0$:
   $$\arg(z_1(t) - 0) = \arg(t(1+it)) = \arg(t) + \arg(1+it) = 0 + \arg(1+it)$$
   $$\lim_{t \to 0^+} \arg(z_1(t) - 0) = \lim_{t \to 0^+} \arg(1+it) = \arg(1) = 0$$
2. **For $C_2$:** $z_2(t) = t^2 + it^2$.
   $$z_2(t) - z_0 = t^2(1+i)$$
   For $t > 0$:
   $$\arg(z_2(t) - 0) = \arg(t^2(1+i)) = \arg(t^2) + \arg(1+i) = 0 + \frac{\pi}{4} = \frac{\pi}{4}$$
   $$\lim_{t \to 0^+} \arg(z_2(t) - 0) = \frac{\pi}{4}$$
Thus, the angle between the two curves is:
$$\theta = \lim_{t \to 0^+} \arg(z_2(t) - 0) - \lim_{t \to 0^+} \arg(z_1(t) - 0) = \frac{\pi}{4} - 0 = \frac{\pi}{4}$$
This matches our intuition because $C_1$ is tangent to the positive real axis at $0$ (since $y = x^2$, tangent at $x=0$ is $y'=0$), and $C_2$ is the line segment along the ray $y = x$ ($x \geq 0$), which has angle $\pi/4$ with the real axis.

---

#### Problem 21
**Problem:** Every pair of smooth curves intersecting at $z_0 = 0$ has the angle between them doubled by $f(z) = z^2$.
(a) If $z'_1(t_0)$ and $z'_2(t_0)$ are both nonzero, explain why $\phi = \arg(f'(0) z'_2) - \arg(f'(0) z'_1)$ does not represent the angle between the images.
(b) Write down an expression for $\phi$ using Problem 20.
(c) Show that this expression is equal to $2\theta$.

**Solution:**
**(a)**
For $f(z) = z^2$, the derivative is $f'(z) = 2z$. At the intersection point $z_0 = 0$, we have $f'(0) = 0$.
The expression $\arg(f'(0) z'_2) - \arg(f'(0) z'_1)$ becomes $\arg(0) - \arg(0)$, which is undefined. Hence, it cannot represent the angle between the image curves.

**(b)**
Using the definition of the angle from Problem 20(b) for the image curves $w_1(t) = [z_1(t)]^2$ and $w_2(t) = [z_2(t)]^2$ at the intersection point $w_0 = f(0) = 0$:
$$\phi = \lim_{t \to t_0} \arg\left( [z_2(t)]^2 - 0 \right) - \lim_{t \to t_0} \arg\left( [z_1(t)]^2 - 0 \right)$$

**(c)**
Using the property of arguments of powers (specifically, $\arg(z^2) = 2\arg(z)$):
$$\phi = \lim_{t \to t_0} 2\arg(z_2(t)) - \lim_{t \to t_0} 2\arg(z_1(t)) = 2 \left( \lim_{t \to t_0} \arg(z_2(t)) - \lim_{t \to t_0} \arg(z_1(t)) \right)$$
Since $\theta = \lim_{t \to t_0} \arg(z_2(t)) - \lim_{t \to t_0} \arg(z_1(t))$ is the angle between the original curves, we have:
$$\phi = 2\theta$$
This proves that the angle is doubled by the mapping $f(z) = z^2$ at the point $z_0 = 0$.

---

#### Problem 22
**Problem:** Let $f$ be analytic at $z_0$ such that $f'(z_0) = f''(z_0) = \dots = f^{(n-1)}(z_0) = 0$ and $f^{(n)}(z_0) \neq 0$ for $n > 1$.
(a) Explain why $f(z) = f(z_0) + \frac{f^{(n)}(z_0)}{n!} (z-z_0)^n (1+g(z))$ with $g(z_0)=0$.
(b) Show that the angle between two smooth curves is increased by a factor of $n$.

**Solution:**
**(b)**
Let the two curves $C_1$ and $C_2$ intersect at $z_0$, making an angle $\theta$. Their image curves $w_1$ and $w_2$ under $w = f(z)$ intersect at $w_0 = f(z_0)$.
Using the expression from part (a):
$$w - w_0 = f(z) - f(z_0) = \frac{f^{(n)}(z_0)}{n!} (z - z_0)^n [1 + g(z)]$$
Taking the argument:
$$\arg(w - w_0) = \arg\left( \frac{f^{(n)}(z_0)}{n!} \right) + n \arg(z - z_0) + \arg(1 + g(z))$$
As $t \to t_0$, $z \to z_0$, so $g(z) \to g(z_0) = 0$, meaning $\arg(1+g(z)) \to \arg(1) = 0$.
Taking the limit of the difference of arguments for $C_1$ and $C_2$:
$$\phi = \lim_{t \to t_0} \arg(w_2(t) - w_0) - \lim_{t \to t_0} \arg(w_1(t) - w_0)$$
$$= \lim_{t \to t_0} \left[ \arg\left( \frac{f^{(n)}(z_0)}{n!} \right) + n\arg(z_2(t) - z_0) \right] - \lim_{t \to t_0} \left[ \arg\left( \frac{f^{(n)}(z_0)}{n!} \right) + n\arg(z_1(t) - z_0) \right]$$
The constant argument term cancels out:
$$\phi = n \left( \lim_{t \to t_0} \arg(z_2(t) - z_0) - \lim_{t \to t_0} \arg(z_1(t) - z_0) \right) = n\theta$$
Thus, the angle is increased by a factor of $n$.
