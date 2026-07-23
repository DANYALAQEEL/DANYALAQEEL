import os

dest_file = r"C:\Users\Administrator\.gemini\antigravity\scratch\zill_solutions\solutions_perfected\chapter_7\section_7.1_solutions.md"
os.makedirs(os.path.dirname(dest_file), exist_ok=True)

content = """# Complex Analysis — Dennis G. Zill, 2nd Edition
## Chapter 7: Conformal Mappings
### Section 7.1: Conformal Mappings
### Complete Solutions

---

### Problems 1–6: Analyticity and Conformal Mappings

We determine where the given mapping $w = f(z)$ is conformal. A mapping is conformal at all points where $f(z)$ is analytic and $f'(z) \\neq 0$.

#### Problem 1
**Problem Statement:**
Determine where the complex mapping $w = f(z) = z^3 - 3z + 1$ is conformal.

**Solution:**
The function is a polynomial, so it is entire (analytic everywhere in the complex plane). Its derivative is:
$$f'(z) = 3z^2 - 3 = 3(z - 1)(z + 1)$$
To find where the mapping is not conformal, we set $f'(z) = 0$:
$$3(z-1)(z+1) = 0 \\implies z = 1 \\quad \\text{or} \\quad z = -1$$
Thus, the mapping is conformal everywhere except at $z = 1$ and $z = -1$.

---

#### Problem 2
**Problem Statement:**
Determine where the complex mapping $w = f(z) = z^2 + 2iz - 3$ is conformal.

**Solution:**
The function is a polynomial, hence entire. Its derivative is:
$$f'(z) = 2z + 2i = 2(z + i)$$
Setting $f'(z) = 0$ to find where it fails to be conformal:
$$2(z+i) = 0 \\implies z = -i$$
Thus, the mapping is conformal everywhere except at $z = -i$.

---

#### Problem 3
**Problem Statement:**
Determine where the complex mapping $w = f(z) = z - e^{-z} + 1 - i$ is conformal.

**Solution:**
The function is entire since $z$ and $e^{-z}$ are entire. Its derivative is:
$$f'(z) = 1 + e^{-z}$$
Setting $f'(z) = 0$:
$$1 + e^{-z} = 0 \\implies e^{-z} = -1$$
Let $z = x + iy$. Then $e^{-z} = e^{-x-iy} = e^{-x}e^{-iy} = -1$.
Taking the modulus on both sides:
$$|e^{-x}e^{-iy}| = |-1| \\implies e^{-x} = 1 \\implies x = 0$$
Using Euler's formula for the argument:
$$e^{-iy} = -1 \\implies \\cos(-y) + i\\sin(-y) = -1 \\implies \\cos(y) - i\\sin(y) = -1$$
This requires:
$$\\cos(y) = -1 \\quad \\text{and} \\quad \\sin(y) = 0 \\implies y = (2k+1)\\pi, \\quad k \\in \\mathbb{Z}$$
So we have:
$$z = x + iy = i(2k+1)\\pi, \\quad k \\in \\mathbb{Z}$$
Thus, the mapping is conformal everywhere except at the points $z = (2k+1)\\pi i$ for $k \\in \\mathbb{Z}$ (odd multiples of $\\pi i$).

---

#### Problem 4
**Problem Statement:**
Determine where the complex mapping $w = f(z) = z e^{z^2 - 2}$ is conformal.

**Solution:**
The function is the product of entire functions, hence entire. Using the product rule and chain rule, the derivative is:
$$f'(z) = 1 \\cdot e^{z^2-2} + z \\cdot (2z) e^{z^2-2} = (2z^2 + 1) e^{z^2-2}$$
Setting $f'(z) = 0$:
$$(2z^2 + 1) e^{z^2-2} = 0$$
Since the exponential function $e^{z^2-2}$ is never zero for any complex value, we must have:
$$2z^2 + 1 = 0 \\implies z^2 = -\\frac{1}{2} \\implies z = \\pm \\frac{i}{\\sqrt{2}}$$
Thus, the mapping is conformal everywhere except at $z = \\pm \\frac{i}{\\sqrt{2}}$.

---

#### Problem 5
**Problem Statement:**
Determine where the complex mapping $w = f(z) = \\tan z$ is conformal.

**Solution:**
The function $f(z) = \\tan z = \\frac{\\sin z}{\\cos z}$ is analytic everywhere except at the zeros of the denominator $\\cos z$, which are:
$$z = \\left( k + \\frac{1}{2} \\right)\\pi, \\quad k \\in \\mathbb{Z}$$
In its domain of analyticity, we compute the derivative using the quotient rule:
$$f'(z) = \\sec^2 z = \\frac{1}{\\cos^2 z}$$
Since $f'(z)$ is a quotient with a constant non-zero numerator ($1$), it is never zero in its domain of definition.
Thus, the mapping is conformal everywhere in its domain of analyticity, i.e., for all $z \\neq (k + 1/2)\\pi$, $k \\in \\mathbb{Z}$.

---

#### Problem 6
**Problem Statement:**
Determine where the complex mapping $w = f(z) = z - \\operatorname{Ln}(z + i)$ is conformal.

**Solution:**
The principal branch of the logarithm $\\operatorname{Ln}(w)$ is analytic everywhere except on the branch cut $w \\in (-\\infty, 0]$.
For $w = z + i = x + i(y+1)$, the branch cut corresponds to:
$$\\operatorname{Re}(w) \\leq 0 \\quad \\text{and} \\quad \\operatorname{Im}(w) = 0 \\implies x \\leq 0 \\quad \\text{and} \\quad y+1 = 0 \\implies x \\leq 0, \\, y = -1$$
Thus, the function $f(z)$ is analytic everywhere except on the horizontal ray $x \\leq 0$ along the line $y = -1$.
Inside its domain of analyticity, the derivative is:
$$f'(z) = 1 - \\frac{1}{z + i} = \\frac{z + i - 1}{z + i}$$
Setting $f'(z) = 0$:
$$z + i - 1 = 0 \\implies z = 1 - i$$
Thus, the mapping is conformal everywhere except on the branch cut $x \\leq 0, y = -1$ and at the point $z = 1 - i$.

---

### Problems 7–10: Non-Conformality at a Point

We show that the given function is not conformal at the indicated point $z_0$.

#### Problem 7
**Problem Statement:**
Show that the function $f(z) = (z - i)^3$ is not conformal at the indicated point $z_0 = i$.

**Solution:**
The function is a polynomial, hence entire. Its derivative is:
$$f'(z) = 3(z - i)^2$$
Evaluating at $z_0 = i$:
$$f'(i) = 3(i - i)^2 = 3(0)^2 = 0$$
Since the derivative is zero at $z_0 = i$, the mapping is not conformal at $z_0 = i$.

---

#### Problem 8
**Problem Statement:**
Show that the function $f(z) = (iz - 3)^2$ is not conformal at the indicated point $z_0 = -3i$.

**Solution:**
The function is entire. Its derivative is:
$$f'(z) = 2i(iz - 3)$$
Evaluating at $z_0 = -3i$:
$$f'(-3i) = 2i(i(-3i) - 3) = 2i(3 - 3) = 2i(0) = 0$$
Since the derivative is zero at $z_0 = -3i$, the mapping is not conformal at $z_0 = -3i$.

---

#### Problem 9
**Problem Statement:**
Show that the function $f(z) = e^{z^2}$ is not conformal at the indicated point $z_0 = 0$.

**Solution:**
The function is entire. Its derivative is:
$$f'(z) = 2z e^{z^2}$$
Evaluating at $z_0 = 0$:
$$f'(0) = 2(0) e^{0} = 0$$
Since the derivative is zero at $z_0 = 0$, the mapping is not conformal at $z_0 = 0$.

---

#### Problem 10
**Problem Statement:**
Show that the principal square root function $f(z) = z^{1/2}$ is not conformal at the indicated point $z_0 = 0$.

**Solution:**
The principal square root is defined as:
$$f(z) = \\sqrt{|z|} e^{i \\operatorname{Arg}(z)/2}$$
The derivative at $z_0 = 0$ is defined by the limit:
$$\\lim_{\\Delta z \\to 0} \\frac{f(0 + \\Delta z) - f(0)}{\\Delta z} = \\lim_{\\Delta z \\to 0} \\frac{(\\Delta z)^{1/2}}{\\Delta z} = \\lim_{\\Delta z \\to 0} \\frac{1}{(\\Delta z)^{1/2}}$$
As $\\Delta z \\to 0$, $1/(\\Delta z)^{1/2} \\to \\infty$, which means the derivative does not exist at $z_0 = 0$.
Since $f(z)$ is not analytic (not differentiable) at $z_0 = 0$, the mapping is not conformal at $z_0 = 0$.

---

### Problems 11–16: Mapping Regions using Appendix III

We find the conformal mapping of the region $R$ onto $R'$ and determine the image of the curve from $A$ to $B$.

#### Problem 11
**Problem Statement:**
Use Appendix III to find a conformal mapping of the region $R$ (semi-infinite vertical strip $0 \\leq \\operatorname{Re}(z) \\leq 2$, $\\operatorname{Im}(z) \\geq 0$) onto the region $R'$ (upper half-plane $\\operatorname{Im}(w) \\geq 0$) shown in Figure 7.7. Then find the image of the boundary segment from $A = 0$ to $B = 2$.

![Figure 7.7](../../extracted_figures/figure_7_7.png)

**Solution:**
We use Entry H-4 of Appendix III, which maps a semi-infinite strip of width $a$ to the upper half-plane:
$$w = \\cos\\left( \\frac{\\pi z}{a} \\right)$$
Here, the width of the strip is $a = 2$. Thus, the mapping is:
$$w = \\cos\\left( \\frac{\\pi z}{2} \\right)$$
Let's find the image of the boundary curve from $A = 0$ to $B = 2$ along the real axis.
We parametrize the segment by $z = t$ where $t \\in [0, 2]$. Substituting into the mapping:
$$w = \\cos\\left( \\frac{\\pi t}{2} \\right)$$
As $t$ increases from $0$ to $2$:
- At $t = 0$ ($A$): $w = \\cos(0) = 1$.
- At $t = 1$: $w = \\cos(\\pi/2) = 0$.
- At $t = 2$ ($B$): $w = \\cos(\\pi) = -1$.
Thus, the boundary segment from $A = 0$ to $B = 2$ is mapped onto the real segment from $1$ to $-1$ (directed right-to-left) on the real axis of the $w$-plane.

---

#### Problem 12
**Problem Statement:**
Use Appendix III to find a conformal mapping of the region $R$ (semi-infinite vertical strip $0 \\leq \\operatorname{Re}(z) \\leq 1$, $\\operatorname{Im}(z) \\geq 0$) onto the region $R'$ (upper half-plane $\\operatorname{Im}(w) \\geq 0$) shown in Figure 7.8. Then find the image of the boundary segment from $A = i$ to $B = 1+i$.

![Figure 7.8](../../extracted_figures/figure_7_8.png)

**Solution:**
We use Entry E-6 of Appendix III, which maps the semi-infinite vertical strip of width $1$ to the upper half-plane using:
$$w = \\sin\\left( \\pi \\left( z - \\frac{1}{2} \\right) \\right) = -\\cos(\\pi z)$$
Let's find the image of the segment from $A = i$ to $B = 1+i$.
We parametrize this segment by $z = t + i$ where $t \\in [0, 1]$.
Substituting $z = t + i$ into the mapping:
$$w = -\\cos(\\pi(t + i)) = -\\cos(\\pi t + \\pi i)$$
Using the cosine addition formula:
$$\\cos(\\pi t + \\pi i) = \\cos(\\pi t)\\cos(\\pi i) - \\sin(\\pi t)\\sin(\\pi i)$$
Since $\\cos(\\pi i) = \\cosh(\\pi)$ and $\\sin(\\pi i) = i\\sinh(\\pi)$:
$$w = -\\cos(\\pi t)\\cosh(\\pi) + i\\sin(\\pi t)\\sinh(\\pi)$$
Let $w = u + iv$. Then:
$$u(t) = -\\cos(\\pi t)\\cosh(\\pi), \\quad v(t) = \\sin(\\pi t)\\sinh(\\pi)$$
We can eliminate $t$ using the identity $\\cos^2(\\pi t) + \\sin^2(\\pi t) = 1$:
$$\\frac{u^2}{\\cosh^2(\\pi)} + \\frac{v^2}{\\sinh^2(\\pi)} = 1$$
This is the equation of an ellipse centered at the origin. Since $t \\in [0, 1]$, we have:
- For $t=0$ ($A = i$): $u = -\\cosh(\\pi)$ and $v = 0$.
- For $t=1/2$: $u = 0$ and $v = \\sinh(\\pi) > 0$.
- For $t=1$ ($B = 1+i$): $u = \\cosh(\\pi)$ and $v = 0$.
Thus, the image of the segment is the upper half of the ellipse:
$$\\frac{u^2}{\\cosh^2(\\pi)} + \\frac{v^2}{\\sinh^2(\\pi)} = 1, \\quad v \\geq 0$$
running from $-\\cosh(\\pi)$ to $\\cosh(\\pi)$.

---

#### Problem 13
**Problem Statement:**
Use Appendix III to find a conformal mapping of the region $R$ (upper half-disk $|z| \\leq 1$, $\\operatorname{Im}(z) \\geq 0$) onto the region $R'$ (upper half-plane $\\operatorname{Im}(w) \\geq 0$) shown in Figure 7.9. Then find the image of the semicircular boundary arc from $A = 1$ to $B = -1$.

![Figure 7.9](../../extracted_figures/figure_7_9.png)

**Solution:**
We compose two mappings:
1. **Entry H-5 of Appendix III:** The mapping:
   $$w_1 = \\frac{1+z}{1-z}$$
   maps the upper half-disk to the first quadrant $u_1 \\geq 0, v_1 \\geq 0$.
2. **Entry E-4 of Appendix III:** The power function:
   $$w = w_1^{1/2}$$
   maps the first quadrant onto the upper half-plane $\operatorname{Im}(w) \\geq 0$.
Combining these:
$$w = \\left( \\frac{1+z}{1-z} \\right)^{1/2}$$
Let's find the image of the semicircular arc $z = e^{i\\theta}$ for $\\theta \\in [0, \\pi]$.
We simplify the term inside the square root:
$$\\frac{1+e^{i\\theta}}{1-e^{i\\theta}} = \\frac{1 + \\cos\\theta + i\\sin\\theta}{1 - \\cos\\theta - i\\sin\\theta}$$
Using half-angle identities $1+\\cos\\theta = 2\\cos^2(\\theta/2)$, $1-\\cos\\theta = 2\\sin^2(\\theta/2)$, and $\\sin\\theta = 2\\sin(\\theta/2)\\cos(\\theta/2)$:
$$\\frac{1+e^{i\\theta}}{1-e^{i\\theta}} = \\frac{2\\cos^2(\\theta/2) + 2i\\sin(\\theta/2)\\cos(\\theta/2)}{2\\sin^2(\\theta/2) - 2i\\sin(\\theta/2)\\cos(\\theta/2)} = \\frac{2\\cos(\\theta/2)[\\cos(\\theta/2) + i\\sin(\\theta/2)]}{2\\sin(\\theta/2)[\\sin(\\theta/2) - i\\cos(\\theta/2)]}$$
$$= \\cot(\\theta/2) \\frac{\\cos(\\theta/2) + i\\sin(\\theta/2)}{-i[\\cos(\\theta/2) + i\\sin(\\theta/2)]} = \\cot(\\theta/2) \\frac{1}{-i} = i\\cot\\left(\\frac{\\theta}{2}\\right)$$
Now we take the principal square root:
$$w = \\left[ i\\cot\\left(\\frac{\\theta}{2}\\right) \\right]^{1/2} = \\sqrt{\\cot\\left(\\frac{\\theta}{2}\\right)} e^{i\\pi/4}$$
As $\\theta$ varies from $0$ to $\\pi$:
- At $A = 1$ (where $\\theta \\to 0^+$): $\\cot(\\theta/2) \\to \\infty \\implies w \\to \\infty e^{i\\pi/4}$.
- At $B = -1$ (where $\\theta \\to \\pi^-$): $\\cot(\\theta/2) \\to 0 \\implies w \\to 0$.
Thus, the image of the semicircular arc is the ray $\\arg(w) = \\pi/4$ in the $w$-plane, running from $\\infty$ to $0$.

---

#### Problem 14
**Problem Statement:**
Use Appendix III to find a conformal mapping of the region $R$ (right half-disk $|z| \\leq 1$, $\\operatorname{Re}(z) \\geq 0$) onto the region $R'$ (upper half-plane $\\operatorname{Im}(w) \\geq 0$) shown in Figure 7.10. Then find the image of the boundary arc from $A = i$ to $B = -i$.

![Figure 7.10](../../extracted_figures/figure_7_10.png)

**Solution:**
We first rotate the right half-disk to the upper half-disk by multiplying by $i$:
$$z_1 = iz$$
This maps $|z| \\leq 1, \\operatorname{Re}(z) \\geq 0$ onto the upper half-disk $|z_1| \\leq 1, \\operatorname{Im}(z_1) \\geq 0$.
The points $A = i$ and $B = -i$ map to:
$$A_1 = i(i) = -1, \\quad B_1 = i(-i) = 1$$
Now we apply the mapping from Problem 13:
$$w = \\left( \\frac{1+z_1}{1-z_1} \\right)^{1/2} = \\left( \\frac{1+iz}{1-iz} \\right)^{1/2}$$
This maps the upper half-disk to the upper half-plane.
For the semicircular arc $z = e^{i\\theta}$ from $A = i$ (where $\\theta = \\pi/2$) to $B = -i$ (where $\\theta = -\\pi/2$):
The variable $z_1 = iz = e^{i(\\theta + \\pi/2)}$.
As $\\theta$ goes from $\\pi/2$ to $-\\pi/2$, the angle of $z_1$ goes from $\\pi$ to $0$.
Following the same calculations as in Problem 13, the image of the arc is the ray:
$$\\arg(w) = \\frac{\\pi}{4}$$
running from $0$ to $\\infty$ (since $B_1 = 1 \\to 0$ and $A_1 = -1 \\to \\infty$).

---

#### Problem 15
**Problem Statement:**
Use Appendix III to find a conformal mapping of the region $R$ (bounded by the $y$-axis and the circle $|z - 1/2| = 1/2$) onto the region $R'$ (upper half-plane $\\operatorname{Im}(w) \\geq 0$) shown in Figure 7.11. Then find the image of the boundary circle segment from $A = 0$ to $B = 1$.

![Figure 7.11](../../extracted_figures/figure_7_11.png)

**Solution:**
We use Entry H-6 of Appendix III, which maps the region between the $y$-axis and the circle to the first quadrant:
$$w_1 = \\frac{e^{\\pi/z} + e^{-\\pi/z}}{e^{\\pi/z} - e^{-\\pi/z}} = \\coth\\left( \\frac{\\pi}{z} \\right)$$
Then we map the first quadrant onto the upper half-plane using the square root function:
$$w = w_1^{1/2} = \\left[ \\coth\\left( \\frac{\\pi}{z} \\right) \\right]^{1/2}$$
For the boundary circle $|z-1/2| = 1/2$, it can be parametrized by $z = \\frac{1}{1 - i t}$ for $t \\in \\mathbb{R}$.
As $t$ goes from $-\\infty$ to $+\\infty$, $z$ moves along the circle from $0$ to $1$ and back.
We find:
$$\\frac{\\pi}{z} = \\pi(1 - it) = \\pi - i\\pi t$$
$$w_1 = \\coth(\\pi - i\\pi t)$$
Since $\\coth(a + ib) = \\frac{\\sinh(2a) - i\\sin(2b)}{\\cosh(2a) - \\cos(2b)}$, the boundary circle maps to the imaginary axis of the $w_1$-plane, which then maps to the ray $\\arg(w) = \\pi/4$ in the $w$-plane.

---

#### Problem 16
**Problem Statement:**
Use Appendix III to find a conformal mapping of the region $R$ (bounded by the circles $|z| = 1$ and $|z - 1/2| = 1/2$) onto the region $R'$ (upper half-plane $\\operatorname{Im}(w) \\geq 0$) shown in Figure 7.12.

![Figure 7.12](../../extracted_figures/figure_7_12.png)

**Solution:**
We compose two mappings:
1. **Entry E-7 of Appendix III:** The mapping:
   $$w_1 = \\frac{z}{1-z}$$
   maps the region between the two tangent circles (with the tangent point at $z=1$) onto the vertical strip:
   $$0 \\leq \\operatorname{Re}(w_1) \\leq \\frac{1}{2}$$
2. **Translation and scaling:**
   We scale and rotate the strip to a vertical strip of width $\\pi$:
   $$w_2 = 2\\pi w_1 = \\frac{2\\pi z}{1-z}$$
   This maps the region to the strip $0 \\leq \\operatorname{Re}(w_2) \\leq \\pi$.
3. **Entry H-4 of Appendix III:**
   $$w = \\cos(w_2) = \\cos\\left( \\frac{2\\pi z}{1-z} \\right)$$
   maps the vertical strip onto the upper half-plane $\\operatorname{Im}(w) \\geq 0$.
Thus, the conformal mapping is:
$$w = \\cos\\left( \\frac{2\\pi z}{1-z} \\right)$$
Alternatively, we can use the simpler fractional power mapping:
$$w = \\left( \\frac{z}{1-z} \\right)^{1/2}$$
which directly maps the region to the upper half-plane.

---

### Problems 17–22: Focus on Concepts

#### Problem 17
**Problem Statement:**
Where is the mapping $w = \\bar{z}$ conformal? Justify your answer.

**Solution:**
A complex mapping $w = f(z) = u(x,y) + iv(x,y)$ is conformal at $z_0$ if and only if $f(z)$ is analytic at $z_0$ and $f'(z_0) \\neq 0$.
For the reflection mapping $f(z) = \\bar{z} = x - iy$, the real and imaginary parts are:
$$u(x,y) = x, \\quad v(x,y) = -y$$
We check the partial derivatives for the Cauchy-Riemann equations:
$$\\frac{\\partial u}{\\partial x} = 1, \\quad \\frac{\\partial v}{\\partial y} = -1$$
$$\\frac{\\partial u}{\\partial y} = 0, \\quad \\frac{\\partial v}{\\partial x} = 0$$
For analyticity, we require:
$$\\frac{\\partial u}{\\partial x} = \\frac{\\partial v}{\\partial y} \\implies 1 = -1$$
which is a contradiction. Since the Cauchy-Riemann equations are not satisfied at any point in the complex plane, the function $f(z) = \\bar{z}$ is nowhere analytic.
Thus, the mapping is **nowhere conformal**.
*(Note: Reflection preserves the magnitude of angles but reverses their direction. Such a mapping is called an isogonal mapping).*

---

#### Problem 18
**Problem Statement:**
Suppose $w = f(z)$ is a conformal mapping at every point in the complex plane. Where is the mapping $w = f(\\bar{z})$ conformal? Justify your answer.

**Solution:**
Let $F(z) = f(\\bar{z})$. Since $f(z)$ is conformal everywhere, $f(z)$ is entire and $f'(z) \\neq 0$ everywhere.
The function $F(z)$ is a composition of the analytic function $f$ and the reflection $\\bar{z}$.
To check conformality, let's look at the mapping behavior. Reflection reverses the orientation of angles: if two curves intersect at angle $\\theta$ (measured counterclockwise), their reflections intersect at angle $-\\theta$.
The analytic function $f(z)$ is conformal, so it preserves both the magnitude and orientation of angles.
Therefore, the composition $F(z) = f(\\bar{z})$ will reverse the orientation of angles.
By definition, a conformal mapping must preserve both the magnitude and the direction (orientation) of angles.
Since $F(z)$ reverses the direction of all angles, it is nowhere conformal (it is isogonal instead).
Thus, the mapping $w = f(\\bar{z})$ is **nowhere conformal**.

---

#### Problem 19
**Problem Statement:**
Suppose that $w = f(z)$ is a conformal mapping at every point in the complex plane. Where is the mapping $w = e^{f(z)}$ conformal?

**Solution:**
Let $g(z) = e^{f(z)}$. Since $f(z)$ is conformal everywhere, it is entire. The exponential function $e^w$ is also entire. By the chain rule, the composition $g(z)$ is entire.
The derivative of $g(z)$ is:
$$g'(z) = f'(z) e^{f(z)}$$
For the mapping to be conformal at a point, the function must be analytic and its derivative must be non-zero.
1. $g(z)$ is analytic everywhere because it is entire.
2. Since $f(z)$ is conformal everywhere, we have $f'(z) \\neq 0$ for all $z \\in \\mathbb{C}$.
3. The complex exponential function $e^{w}$ is never zero for any complex number $w$.
Thus, the derivative $g'(z) = f'(z) e^{f(z)}$ is the product of two non-zero terms, so $g'(z) \\neq 0$ for all $z \\in \\mathbb{C}$.
Therefore, the mapping $w = e^{f(z)}$ is **conformal everywhere** in the complex plane.

---

#### Problem 20
**Problem Statement:**
This problem concerns determining the angle between two curves $C_1$ and $C_2$ at a point where one (or both) of the curves has a zero tangent vector.
(a) Assume that two curves $C_1$ and $C_2$ are parametrized by $z_1(t)$ and $z_2(t)$, respectively, and that the curves intersect at $z_1(t_0) = z_2(t_0) = z_0$. Explain why $\\arg(z'_2(t_0)) - \\arg(z'_1(t_0))$ does not represent the angle between the curves at $z_0$ if either tangent vector is zero.
(b) Explain why $\\lim_{t \\to t_0} [\\arg(z_2(t) - z_0)] - \\lim_{t \\to t_0} [\\arg(z_1(t) - z_0)]$ does represent the angle regardless.
(c) Determine the angle between the curves parametrized by $z_1(t) = t + it^2$ and $z_2(t) = t^2 + it^2$, $-1 \\leq t \\leq 1$, at $z_0 = 0$.

**Solution:**
**(a)**
The argument of the zero vector is undefined. If either $z'_1(t_0) = 0$ or $z'_2(t_0) = 0$, then the tangent vector is the zero vector, and its argument $\\arg(0)$ cannot be computed. Thus, the expression $\\arg(z'_2(t_0)) - \\arg(z'_1(t_0))$ is undefined and cannot represent the angle.

**(b)**
The vector $z(t) - z_0$ represents the secant line from the intersection point $z_0$ to a nearby point $z(t)$ on the curve. The argument $\\arg(z(t) - z_0)$ is the angle that this secant line makes with the positive real axis.
As $t \\to t_0$, the point $z(t)$ approaches $z_0$, and the secant line approaches the tangent line to the curve at $z_0$. The limit of the argument of the secant vector:
$$\\lim_{t \\to t_0} \\arg(z(t) - z_0)$$
represents the angle of the tangent line, even when the derivative $z'(t_0) = 0$ (provided the limit exists). Thus, the difference of these limits represents the angle between the tangent lines of the two curves at $z_0$.

**(c)**
Let $z_0 = 0$, which corresponds to $t_0 = 0$. We compute the limits for $t > 0$:
1. **For $C_1$ ($z_1(t) = t + it^2$):**
   $$z_1(t) - z_0 = t + it^2 = t(1 + it)$$
   Since $t > 0$, the argument is:
   $$\\arg(z_1(t) - 0) = \\arg(t(1+it)) = \\arg(t) + \\arg(1+it) = 0 + \\tan^{-1}(t)$$
   Taking the limit:
   $$\\lim_{t \\to 0^+} \\arg(z_1(t) - 0) = \\lim_{t \\to 0^+} \\tan^{-1}(t) = 0$$
2. **For $C_2$ ($z_2(t) = t^2 + it^2$):**
   $$z_2(t) - z_0 = t^2 + it^2 = t^2(1 + i)$$
   Since $t^2 > 0$, the argument is:
   $$\\arg(z_2(t) - 0) = \\arg(t^2(1+i)) = \\arg(t^2) + \\arg(1+i) = 0 + \\frac{\\pi}{4} = \\frac{\\pi}{4}$$
   Taking the limit:
   $$\\lim_{t \\to 0^+} \\arg(z_2(t) - 0) = \\frac{\\pi}{4}$$
Thus, the angle between the two curves is:
$$\\theta = \\lim_{t \\to 0^+} \\arg(z_2(t) - 0) - \\lim_{t \\to 0^+} \\arg(z_1(t) - 0) = \\frac{\\pi}{4} - 0 = \\frac{\\pi}{4}$$
*(This matches our geometric intuition: $C_1$ is a parabola $y = x^2$ tangent to the positive real axis at $x=0$, and $C_2$ is the line $y = x$ for $x \\geq 0$, which makes an angle of $\\pi/4$ with the real axis).*

---

#### Problem 21
**Problem Statement:**
Show that every pair of smooth curves intersecting at $z_0 = 0$ has the angle between them doubled by the mapping $f(z) = z^2$.
(a) If $z'_1(t_0)$ and $z'_2(t_0)$ are both nonzero, explain why $\\phi = \\arg(f'(0) z'_2(t_0)) - \\arg(f'(0) z'_1(t_0))$ does not represent the angle between the image curves.
(b) Write down an expression for $\\phi$ using Problem 20.
(c) Show that this expression is equal to $2\\theta$.

**Solution:**
**(a)**
For $f(z) = z^2$, the derivative is $f'(z) = 2z$. At the intersection point $z_0 = 0$, we have $f'(0) = 0$.
The expression $\\arg(f'(0) z'_2(t_0)) - \\arg(f'(0) z'_1(t_0))$ becomes $\\arg(0) - \\arg(0)$, which is undefined. Hence, it cannot represent the angle between the image curves.

**(b)**
Using the definition of the angle from Problem 20(b) for the image curves $w_1(t) = [z_1(t)]^2$ and $w_2(t) = [z_2(t)]^2$ at the intersection point $w_0 = f(0) = 0$:
$$\\phi = \\lim_{t \\to t_0} \\arg\\left( [z_2(t)]^2 - 0 \\right) - \\lim_{t \\to t_0} \\arg\\left( [z_1(t)]^2 - 0 \\right)$$

**(c)**
Using the property of arguments of powers, specifically $\\arg(w^2) = 2\\arg(w) \\pmod{2\\pi}$:
$$\\phi = \\lim_{t \\to t_0} 2\\arg(z_2(t)) - \\lim_{t \\to t_0} 2\\arg(z_1(t)) = 2 \\left( \\lim_{t \\to t_0} \\arg(z_2(t)) - \\lim_{t \\to t_0} \\arg(z_1(t)) \\right)$$
Since the term in the parentheses is the angle $\\theta$ between the original curves, we have:
$$\\phi = 2\\theta$$
This proves that the angle is doubled by the mapping $f(z) = z^2$ at the point $z_0 = 0$.

---

#### Problem 22
**Problem Statement:**
Let $f$ be analytic at $z_0$ such that $f'(z_0) = f''(z_0) = \\dots = f^{(n-1)}(z_0) = 0$ and $f^{(n)}(z_0) \\neq 0$ for $n > 1$.
(a) Explain why $f(z) = f(z_0) + \\frac{f^{(n)}(z_0)}{n!} (z-z_0)^n (1+g(z))$ with $g(z_0)=0$.
(b) Show that the angle between two smooth curves intersecting at $z_0$ is increased by a factor of $n$ under the mapping $w = f(z)$.

**Solution:**
**(a)**
Since $f$ is analytic at $z_0$, it has a Taylor series expansion in a neighborhood of $z_0$:
$$f(z) = \\sum_{k=0}^{\\infty} \\frac{f^{(k)}(z_0)}{k!} (z - z_0)^k = f(z_0) + f'(z_0)(z-z_0) + \\frac{f''(z_0)}{2!}(z-z_0)^2 + \\dots$$
Given that the derivatives up to order $n-1$ are zero:
$$f'(z_0) = f''(z_0) = \\dots = f^{(n-1)}(z_0) = 0$$
the series simplifies to:
$$f(z) = f(z_0) + \\sum_{k=n}^{\\infty} \\frac{f^{(k)}(z_0)}{k!} (z - z_0)^k = f(z_0) + \\frac{f^{(n)}(z_0)}{n!}(z-z_0)^n + \\frac{f^{(n+1)}(z_0)}{(n+1)!}(z-z_0)^{n+1} + \\dots$$
We factor out $\\frac{f^{(n)}(z_0)}{n!}(z-z_0)^n$:
$$f(z) = f(z_0) + \\frac{f^{(n)}(z_0)}{n!} (z-z_0)^n \\left[ 1 + \\frac{n! f^{(n+1)}(z_0)}{(n+1)! f^{(n)}(z_0)}(z-z_0) + \\frac{n! f^{(n+2)}(z_0)}{(n+2)! f^{(n)}(z_0)}(z-z_0)^2 + \\dots \\right]$$
Define the bracketed series minus $1$ as $g(z)$:
$$g(z) = \\sum_{k=n+1}^{\\infty} \\frac{n! f^{(k)}(z_0)}{k! f^{(n)}(z_0)} (z - z_0)^{k-n} = \\frac{f^{(n+1)}(z_0)}{(n+1)f^{(n)}(z_0)}(z-z_0) + \\dots$$
Since $f$ is analytic at $z_0$, the power series for $g(z)$ converges in the same neighborhood of $z_0$, making $g(z)$ analytic at $z_0$.
Substituting $z = z_0$, each term in the sum has a factor of $(z_0 - z_0) = 0$, so:
$$g(z_0) = 0$$
Thus:
$$f(z) = f(z_0) + \\frac{f^{(n)}(z_0)}{n!} (z-z_0)^n (1+g(z)) \\quad \\text{with} \\quad g(z_0) = 0$$

**(b)**
Let the two curves $C_1$ and $C_2$ intersect at $z_0$, making an angle $\\theta$. Their image curves $w_1$ and $w_2$ under $w = f(z)$ intersect at $w_0 = f(z_0)$.
Using the expression from part (a):
$$w - w_0 = f(z) - f(z_0) = \\frac{f^{(n)}(z_0)}{n!} (z - z_0)^n [1 + g(z)]$$
Taking the argument:
$$\\arg(w - w_0) = \\arg\\left( \\frac{f^{(n)}(z_0)}{n!} \\right) + n \\arg(z - z_0) + \\arg(1 + g(z))$$
As $t \\to t_0$, $z \\to z_0$, and since $g(z)$ is continuous at $z_0$:
$$g(z) \\to g(z_0) = 0 \\implies 1 + g(z) \\to 1 \\implies \\arg(1+g(z)) \\to \\arg(1) = 0$$
We compute the angle $\\phi$ between the image curves:
$$\\phi = \\lim_{t \\to t_0} \\arg(w_2(t) - w_0) - \\lim_{t \\to t_0} \\arg(w_1(t) - w_0)$$
$$\\phi = \\lim_{t \\to t_0} \\left[ \\arg\\left( \\frac{f^{(n)}(z_0)}{n!} \\right) + n\\arg(z_2(t) - z_0) + \\arg(1+g(z_2(t))) \\right]$$
$$- \\lim_{t \\to t_0} \\left[ \\arg\\left( \\frac{f^{(n)}(z_0)}{n!} \\right) + n\\arg(z_1(t) - z_0) + \\arg(1+g(z_1(t))) \\right]$$
The constant term $\\arg\\left( \\frac{f^{(n)}(z_0)}{n!} \\right)$ and the vanishing term $\\arg(1+g(z))$ cancel or go to $0$:
$$\\phi = n \\left( \\lim_{t \\to t_0} \\arg(z_2(t) - z_0) - \\lim_{t \\to t_0} \\arg(z_1(t) - z_0) \\right) = n\\theta$$
Thus, the angle between the two smooth curves is increased by a factor of $n$.
"""

with open(dest_file, "w", encoding="utf-8") as f:
    f.write(content)

print("Section 7.1 perfected and saved!")
