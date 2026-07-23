import os

content = """# Complex Analysis — Dennis G. Zill, 2nd Edition
## Chapter 2 · Section 2.5 — Reciprocal Function and Inversion
### Problems 1 – 29 · Complete Solutions

---

> **Key Concepts of the Reciprocal Function and Inversion**
>
> 1. **Reciprocal Function:** $w = 1/z$. In polar coordinates, if $z = r e^{i\\theta}$, then:
>    $$w = \\frac{1}{r} e^{-i\\theta}$$
>    This scales the modulus by $1/r$ and negates the argument.
> 
> ![Figure 2.40](../../extracted_figures/figure_2_40.png)
>
> 2. **Inversion:** The mapping $w = 1/\\bar{z} = \\frac{1}{r} e^{i\\theta}$ is called reflection in the unit circle or inversion.
> 
> ![Figure 2.42](../../extracted_figures/figure_2_42.png)
>
> ![Figure 2.43](../../extracted_figures/figure_2_43.png)
>
> 3. **Mappings of Circles and Lines:** Under the reciprocal mapping $w = 1/z$:
>    * Circles passing through the origin map to lines not passing through the origin.
> 
> ![Figure 2.44](../../extracted_figures/figure_2_44.png)
>
>    * Circles not passing through the origin map to circles not passing through the origin.
> 
> ![Figure 2.45](../../extracted_figures/figure_2_45.png)
>
>    * Lines passing through the origin map to lines passing through the origin.
> 
> ![Figure 2.46](../../extracted_figures/figure_2_46.png)
>
>    * Lines not passing through the origin map to circles passing through the origin.
> 
> ![Figure 2.48](../../extracted_figures/figure_2_48.png)
>
> 4. **Equation form:** The general equation of a circle or line in the Cartesian plane is:
>    $$A(x^2 + y^2) + Bx + Cy + D = 0$$
>    Under $w = 1/z$, this transforms to:
>    $$D(u^2 + v^2) + Bu - Cv + A = 0$$

---

## Problems 1 – 10: Mapping of Points and Lines

#### Problem 1
Find the image of the line $y = 3/2$ under the reciprocal mapping $w = 1/z$.

**Solution:**
1. The line is $y = 3/2$. Here $A = 0, B = 0, C = 1, D = -3/2$.
2. Write the line equation:
   $$0(x^2 + y^2) + 0x + y - \\frac{3}{2} = 0$$
3. Apply the reciprocal transformation equation $D(u^2 + v^2) + Bu - Cv + A = 0$:
   $$-\\frac{3}{2}(u^2 + v^2) + 0u - v + 0 = 0 \\implies -\\frac{3}{2}(u^2 + v^2) - v = 0$$
4. Multiply by $-2/3$:
   $$u^2 + v^2 + \\frac{2}{3}v = 0$$
5. Complete the square for $v$:
   $$u^2 + \\left(v + \\frac{1}{3}\\right)^2 = \\frac{1}{9}$$
6. This is a circle centered at $(0, -1/3)$ with radius $1/3$.

![Figure 2.41](../../extracted_figures/figure_2_41.png)

Thus, the image is the **circle $u^2 + (v + 1/3)^2 = 1/9$ except the point $(0,0)$**.

---

#### Problem 2
Find the image of the line $x = -4$ under the reciprocal mapping $w = 1/z$.

**Solution:**
1. The line is $x + 4 = 0$. Here $A = 0, B = 1, C = 0, D = 4$.
2. Apply the reciprocal transformation:
   $$4(u^2 + v^2) + u = 0$$
3. Divide by 4:
   $$u^2 + v^2 + \\frac{1}{4}u = 0$$
4. Complete the square for $u$:
   $$\\left(u + \\frac{1}{8}\\right)^2 + v^2 = \\frac{1}{64}$$
Thus, the image is the **circle $(u + 1/8)^2 + v^2 = 1/64$ except the origin**.

---

#### Problem 3
Find the image of the line $y = -x$ under the reciprocal mapping $w = 1/z$.

**Solution:**
1. The line is $x + y = 0$. Here $A = 0, B = 1, C = 1, D = 0$.
2. Since $D = 0$, the line passes through the origin, so it must map to another line passing through the origin.
3. Apply the reciprocal transformation:
   $$0(u^2+v^2) + u - v + 0 = 0 \\implies v = u$$
Thus, the image is the **line $v = u$** (or the line $y = x$ in the $w$-plane).

---

#### Problem 4
Find the image of the line $y = x - 2$ under the reciprocal mapping $w = 1/z$.

**Solution:**
1. Rewrite the line equation: $x - y - 2 = 0$. Here $A = 0, B = 1, C = -1, D = -2$.
2. Apply the reciprocal transformation:
   $$-2(u^2 + v^2) + u - (-1)v = 0 \\implies -2(u^2 + v^2) + u + v = 0$$
3. Divide by $-2$:
   $$u^2 + v^2 - \\frac{1}{2}u - \\frac{1}{2}v = 0$$
4. Complete the square for both variables:
   $$\\left(u - \\frac{1}{4}\\right)^2 + \\left(v - \\frac{1}{4}\\right)^2 = \\frac{1}{16} + \\frac{1}{16} = \\frac{1}{8}$$
Thus, the image is the **circle $(u - 1/4)^2 + (v - 1/4)^2 = 1/8$ except the origin**.

---

#### Problem 5
Find the image of the circle $|z| = 3$ under the reciprocal mapping $w = 1/z$.

**Solution:**
1. The circle is $x^2 + y^2 = 9$. Here $A = 1, B = 0, C = 0, D = -9$.
2. Apply the reciprocal transformation:
   $$-9(u^2 + v^2) + 1 = 0 \\implies u^2 + v^2 = \\frac{1}{9}$$
Thus, the image is the **circle $|w| = 1/3$**.

---

#### Problem 6
Find the image of the circle $|z - 2| = 2$ under the reciprocal mapping $w = 1/z$.

**Solution:**
1. Expand the circle equation:
   $$(x-2)^2 + y^2 = 4 \\implies x^2 - 4x + 4 + y^2 = 4 \\implies x^2 + y^2 - 4x = 0$$
   Here $A = 1, B = -4, C = 0, D = 0$.
2. Since $D = 0$, the circle passes through the origin, so it must map to a line.
3. Apply the reciprocal transformation:
   $$0(u^2+v^2) - 4u + 1 = 0 \\implies -4u + 1 = 0 \\implies u = \\frac{1}{4}$$
Thus, the image is the **vertical line $u = 1/4$**.

---

#### Problem 7
Find the image of the circle $|z + i| = 1$ under the reciprocal mapping $w = 1/z$.

**Solution:**
1. Expand the circle equation:
   $$x^2 + (y+1)^2 = 1 \\implies x^2 + y^2 + 2y + 1 = 1 \\implies x^2 + y^2 + 2y = 0$$
   Here $A = 1, B = 0, C = 2, D = 0$.
2. Since $D = 0$, the circle passes through the origin, so it maps to a line.
3. Apply the reciprocal transformation:
   $$0(u^2+v^2) - 2v + 1 = 0 \\implies 2v = 1 \\implies v = \\frac{1}{2}$$
Thus, the image is the **horizontal line $v = 1/2$**.

---

#### Problem 8
Find the image of the circle $|z - 1 - i| = 2$ under the reciprocal mapping $w = 1/z$.

**Solution:**
1. Expand the circle equation:
   $$(x-1)^2 + (y-1)^2 = 4 \\implies x^2 - 2x + 1 + y^2 - 2y + 1 = 4 \\implies x^2 + y^2 - 2x - 2y - 2 = 0$$
   Here $A = 1, B = -2, C = -2, D = -2$.
2. Since $D \\ne 0$, the circle does not pass through the origin, so it maps to a circle.
3. Apply the reciprocal transformation:
   $$-2(u^2 + v^2) - 2u - (-2)v + 1 = 0 \\implies -2(u^2 + v^2) - 2u + 2v + 1 = 0$$
4. Divide by $-2$:
   $$u^2 + v^2 + u - v - \\frac{1}{2} = 0$$
5. Complete the square for both:
   $$\\left(u + \\frac{1}{2}\\right)^2 + \\left(v - \\frac{1}{2}\\right)^2 = \\frac{1}{2} + \\frac{1}{4} + \\frac{1}{4} = 1$$
Thus, the image is the **circle $(u + 1/2)^2 + (v - 1/2)^2 = 1$**.

---

#### Problem 9
Find the image of the circle $|z - 2| = 1$ under the reciprocal mapping $w = 1/z$.

**Solution:**
1. Expand the circle equation:
   $$(x-2)^2 + y^2 = 1 \\implies x^2 - 4x + 4 + y^2 = 1 \\implies x^2 + y^2 - 4x + 3 = 0$$
   Here $A = 1, B = -4, C = 0, D = 3$.
2. Apply the reciprocal transformation:
   $$3(u^2 + v^2) - 4u + 1 = 0$$
3. Divide by 3:
   $$u^2 + v^2 - \\frac{4}{3}u + \\frac{1}{3} = 0$$
4. Complete the square:
   $$\\left(u - \\frac{2}{3}\\right)^2 + v^2 = -\\frac{1}{3} + \\frac{4}{9} = \\frac{1}{9}$$
Thus, the image is the **circle $(u - 2/3)^2 + v^2 = 1/9$**.

---

#### Problem 10
Find the image of the circle $|z - 3i| = 2$ under the reciprocal mapping $w = 1/z$.

**Solution:**
1. Expand the circle equation:
   $$x^2 + (y-3)^2 = 4 \\implies x^2 + y^2 - 6y + 9 = 4 \\implies x^2 + y^2 - 6y + 5 = 0$$
   Here $A = 1, B = 0, C = -6, D = 5$.
2. Apply the reciprocal transformation:
   $$5(u^2 + v^2) - (-6)v + 1 = 0 \\implies 5(u^2 + v^2) + 6v + 1 = 0$$
3. Divide by 5:
   $$u^2 + v^2 + \\frac{6}{5}v + \\frac{1}{5} = 0$$
4. Complete the square:
   $$u^2 + \\left(v + \\frac{3}{5}\\right)^2 = -\\frac{1}{5} + \\frac{9}{25} = \\frac{4}{25}$$
Thus, the image is the **circle $u^2 + (v + 3/5)^2 = 4/25$**.

---

## Problems 11 – 20: Compositions

#### Problem 11
Find the image of the line $y = 1$ under the mapping $f(z) = \\frac{1}{z - i}$.

**Solution:**
1. The mapping is $f(z) = g(z-i)$ where $g(z) = 1/z$.
2. First, the translation $z_1 = z - i$ shifts the line $y=1$ downwards by 1 unit to the line $y_1 = 0$ (the real axis).
3. Now apply the reciprocal mapping $w = 1/z_1$ to the real axis.
4. The real axis $y_1 = 0$ maps to the real axis $v = 0$ in the $w$-plane (excluding the origin).
Thus, the image is the **real axis** (excluding the origin), i.e., $v = 0, u \\ne 0$.

---

#### Problem 12
Find the image of the line $y = 3/2$ under the mapping $f(z) = \\frac{2}{z + 1}$.

**Solution:**
1. The mapping is $f(z) = 2 g(z+1)$ where $g(z) = 1/z$.
2. Translate $z_1 = z + 1$. The horizontal line $y=3/2$ is shifted horizontally, which remains the horizontal line $y_1 = 3/2$.
3. Apply reciprocal $w_1 = 1/z_1$. From Problem 1, the line $y_1 = 3/2$ maps to the circle:
   $$u_1^2 + \\left(v_1 + \\frac{1}{3}\\right)^2 = \\frac{1}{9}$$
4. Multiply by 2: $w = 2w_1$. This magnifies the circle by a factor of 2.
   * The center is scaled from $(0, -1/3)$ to $(0, -2/3)$.
   * The radius is scaled from $1/3$ to $2/3$.
Thus, the image is the **circle $u^2 + (v + 2/3)^2 = 4/9$ except the origin**.

---

#### Problem 13
Find the image of the line $x = 1/2$ under the mapping $f(z) = \\frac{i}{z + i}$.

**Solution:**
1. Translate $z_1 = z + i$. The vertical line $x = 1/2$ remains the vertical line $x_1 = 1/2$.
2. Apply reciprocal $w_1 = 1/z_1$:
   * Under $w_1 = 1/z_1$, the line $x_1 = 1/2$ maps to:
     $$\\left(u_1 - 1\\right)^2 + v_1^2 = 1 \\implies u_1^2 + v_1^2 - 2u_1 = 0$$
3. Multiply by $i$: $w = i w_1$. This rotates the circle by $90^\\circ$ counterclockwise:
   $$u = -v_1 \\quad \\text{and} \\quad v = u_1 \\implies (-v)^2 + u^2 - 2v = 0 \\implies u^2 + v^2 - 2v = 0$$
4. Complete the square:
   $$u^2 + (v - 1)^2 = 1$$
Thus, the image is the **circle $u^2 + (v - 1)^2 = 1$ except the origin**.

---

#### Problem 14
Find the image of the line $y = x - 1$ under the mapping $f(z) = \\frac{1}{2z - 1}$.

**Solution:**
1. Rewrite the mapping:
   $$f(z) = \\frac{1}{2\\left(z - 1/2\\right)} = \\frac{1}{2} g(z - 1/2) \\quad \\text{where } g(z) = 1/z$$
2. Translate $z_1 = z - 1/2$. The line $y = x - 1$ becomes:
   $$y_1 = (x_1 + 1/2) - 1 \\implies y_1 = x_1 - 1/2 \\implies x_1 - y_1 - 1/2 = 0$$
   Here $A = 0, B = 1, C = -1, D = -1/2$.
3. Apply reciprocal $w_1 = 1/z_1$:
   $$-\\frac{1}{2}(u_1^2 + v_1^2) + u_1 + v_1 = 0 \\implies u_1^2 + v_1^2 - 2u_1 - 2v_1 = 0$$
   Complete the square:
   $$(u_1 - 1)^2 + (v_1 - 1)^2 = 2$$
4. Multiply by $1/2$: $w = \\frac{1}{2}w_1$.
   * Center scales to $(1/2, 1/2)$.
   * Radius scales to $\\sqrt{2}/2 \\implies$ squared radius is $1/2$.
Thus, the image is the **circle $(u - 1/2)^2 + (v - 1/2)^2 = 1/2$ except the origin**.

---

#### Problem 15
Find the image of the circle $|z| = 2$ under the mapping $f(z) = \\frac{1}{z - 3}$.

**Solution:**
1. The circle $|z|=2$ is centered at 0 with radius 2.
2. Translate by $-3$: $z_1 = z - 3$. The circle is shifted to $|z_1 + 3| = 2$ (centered at $-3$, radius 2).
   Expand:
   $$(x_1+3)^2 + y_1^2 = 4 \\implies x_1^2 + y_1^2 + 6x_1 + 5 = 0$$
   Here $A = 1, B = 6, C = 0, D = 5$.
3. Apply reciprocal $w = 1/z_1$:
   $$5(u^2 + v^2) + 6u + 1 = 0 \\implies u^2 + v^2 + \\frac{6}{5}u + \\frac{1}{5} = 0$$
   Complete the square:
   $$\\left(u + \\frac{3}{5}\\right)^2 + v^2 = \\frac{4}{25}$$
Thus, the image is the **circle $(u + 3/5)^2 + v^2 = 4/25$**.

---

#### Problem 16
Find the image of the circle $|z - i| = 2$ under the mapping $f(z) = \\frac{1}{z + i}$.

**Solution:**
1. The circle $|z-i|=2$ is centered at $i$.
2. Translate $z_1 = z + i$. The center shifts to $i + i = 2i$, radius is 2.
   Circle equation: $|z_1 - 2i| = 2$. Expand:
   $$x_1^2 + (y_1-2)^2 = 4 \\implies x_1^2 + y_1^2 - 4y_1 = 0$$
   Here $A = 1, B = 0, C = -4, D = 0$. Since $D = 0$, it maps to a line.
3. Apply reciprocal $w = 1/z_1$:
   $$0(u^2+v^2) - (-4)v + 1 = 0 \\implies 4v + 1 = 0 \\implies v = -\\frac{1}{4}$$
Thus, the image is the **horizontal line $v = -1/4$**.

---

#### Problem 17
Find the image of the circle $|z| = 1$ under the mapping $f(z) = \\frac{1}{z - 2}$.

**Solution:**
1. The circle $|z|=1$ is shifted to $|z_1 + 2| = 1$ under $z_1 = z - 2$.
   Expand:
   $$(x_1+2)^2 + y_1^2 = 1 \\implies x_1^2 + y_1^2 + 4x_1 + 3 = 0$$
   Here $A = 1, B = 4, C = 0, D = 3$.
2. Apply reciprocal $w = 1/z_1$:
   $$3(u^2+v^2) + 4u + 1 = 0 \\implies u^2 + v^2 + \\frac{4}{3}u + \\frac{1}{3} = 0$$
   Complete the square:
   $$\\left(u + \\frac{2}{3}\\right)^2 + v^2 = \\frac{1}{9}$$
Thus, the image is the **circle $(u + 2/3)^2 + v^2 = 1/9$**.

---

#### Problem 18
Find the image of the circle $|z - 1| = 1$ under the mapping $f(z) = \\frac{i}{z - 2}$.

**Solution:**
1. Translate $z_1 = z - 2$. The circle $|z-1|=1$ is shifted to $|z_1 + 1| = 1$.
   Expand:
   $$(x_1+1)^2 + y_1^2 = 1 \\implies x_1^2 + y_1^2 + 2x_1 = 0$$
   Here $A = 1, B = 2, C = 0, D = 0$. Maps to a line.
2. Apply reciprocal $w_1 = 1/z_1$:
   $$2u_1 + 1 = 0 \\implies u_1 = -\\frac{1}{2}$$
   So $w_1$ lies on the line $u_1 = -1/2$.
3. Multiply by $i$: $w = i w_1$. This rotates the vertical line $u_1 = -1/2$ by $90^\\circ$ counterclockwise:
   $$v = -\\frac{1}{2}$$
Thus, the image is the **horizontal line $v = -1/2$**.

---

#### Problem 19
Find the image of the circle $|z| = 1$ under the mapping $f(z) = 2 + \\frac{1}{z}$.

**Solution:**
1. Under $w_1 = 1/z$, the unit circle $|z|=1$ maps to the unit circle $|w_1| = 1$.
2. Translate by 2: $w = w_1 + 2$. The center shifts to 2.
Thus, the image is the **circle $|w - 2| = 1$**.

---

#### Problem 20
Find the image of the circle $|z| = 1$ under the mapping $f(z) = 1 + i + \\frac{2}{z}$.

**Solution:**
1. Under $w_1 = 1/z$, the unit circle $|z|=1$ maps to the unit circle $|w_1| = 1$.
2. Multiply by 2: $w_2 = 2w_1$, which is the circle $|w_2| = 2$.
3. Translate by $1 + i$: The center shifts to $1 + i$.
Thus, the image is the **circle $|w - (1 + i)| = 2$**.

---

## Focus on Concepts (Problems 21 – 29)

#### Problem 21
Prove that the reciprocal mapping $f(z) = 1/z$ is one-to-one on the set of non-zero complex numbers $\\mathbb{C} \\setminus \\{0\\}$, and find its inverse.

**Solution:**
**(a) Proof of one-to-one:**
Suppose $f(z_1) = f(z_2)$ for $z_1, z_2 \\ne 0$:
$$\\frac{1}{z_1} = \\frac{1}{z_2}$$
Multiply both sides by $z_1 z_2$:
$$z_2 = z_1$$
Thus, $f(z)$ is one-to-one.

**(b) Find the inverse:**
Set $w = 1/z \\implies z = 1/w$.
Thus, the inverse function is:
$$\\boxed{f^{-1}(w) = \\frac{1}{w}}$$

---

#### Problem 22
Geometric inversion:
(a) Show that the mapping $f(z) = 1/\\bar{z}$ represents inversion in the unit circle.
(b) Show that points inside the unit circle map to points outside, and vice versa.
(c) What are the fixed points of this mapping?

**Solution:**
**(a) Inversion formula:**
Let $z = r e^{i\\theta}$. Then:
$$f(z) = \\frac{1}{\\overline{r e^{i\\theta}}} = \\frac{1}{r e^{-i\\theta}} = \\frac{1}{r} e^{i\\theta}$$
Notice that the argument $\\theta$ is preserved, while the modulus is replaced by its reciprocal $1/r$. This is the definition of geometric inversion (reflection in the unit circle).

**(b) Inner-outer mapping:**
* If $z$ is inside the unit circle, then $r = |z| < 1$.
  The image modulus is $|f(z)| = 1/r > 1$, which is outside the unit circle.
* If $z$ is outside the unit circle, then $r = |z| > 1$.
  The image modulus is $|f(z)| = 1/r < 1$, which is inside the unit circle.

**(c) Fixed points:**
A fixed point satisfies $f(z_0) = z_0$:
$$\\frac{1}{r_0} e^{i\\theta_0} = r_0 e^{i\\theta_0} \\implies \\frac{1}{r_0} = r_0 \\implies r_0^2 = 1 \\implies r_0 = 1 \\quad (\\text{since } r_0 > 0)$$
There are no constraints on $\\theta_0$.
Thus, the fixed points are **all points on the unit circle $|z| = 1$**.

---

#### Problem 23
Find the image of the sector $0 < |z| \\le 1, 0 \\le \\arg(z) \\le \\pi/4$ under $w = 1/z$.

**Solution:**
We use the polar form of the reciprocal mapping $w = \\frac{1}{r} e^{-i\\theta}$:
1. Since $0 < r \\le 1$, the image modulus is:
   $$|w| = \\frac{1}{r} \\ge 1$$
2. Since $0 \\le \\theta \\le \\pi/4$, the image argument is:
   $$-\\frac{\\pi}{4} \\le \\arg(w) \\le 0$$
Thus, the image is the **infinite sector $|w| \\ge 1, -\\pi/4 \\le \\arg(w) \\le 0$**.

---

#### Problem 24
Find the image of the region $S$: $|z| \\ge 2, \\pi/2 \\le \\arg(z) \\le \\pi$ under $w = 1/z$.

**Solution:**
We use polar form:
1. Since $r \\ge 2$, the image modulus is:
   $$|w| = \\frac{1}{r} \\le \\frac{1}{2} \\quad (\\text{and } |w| > 0)$$
2. Since $\\pi/2 \\le \\theta \\le \\pi$, the image argument is:
   $$-\\pi \\le \\arg(w) \\le -\\frac{\\pi}{2}$$
Thus, the image is the **sector $0 < |w| \\le 1/2, -\\pi \\le \\arg(w) \\le -\\pi/2$** (located in the third quadrant).

---

#### Problem 25
Show that the image of the line $y = mx$ under $w = 1/z$ is a line.

**Solution:**
1. The line is $y - mx = 0$, which passes through the origin.
2. Here $A = 0, B = -m, C = 1, D = 0$.
3. Since $D = 0$, apply the reciprocal mapping formula:
   $$0(u^2+v^2) - mu - v + 0 = 0 \\implies v = -mu$$

![Figure 2.39](../../extracted_figures/figure_2_39.png)

Thus, the image is the **line $v = -mu$** (which also passes through the origin, reflected across the real axis).

---

#### Problem 26
Show that the image of the line $y = mx + b$ ($b \\ne 0$) under $w = 1/z$ is a circle.

**Solution:**
1. Rewrite the line equation: $mx - y + b = 0$. Here $A = 0, B = m, C = -1, D = b$.
2. Apply the reciprocal transformation:
   $$b(u^2 + v^2) + mu - (-1)v = 0 \\implies b(u^2 + v^2) + mu + v = 0$$
3. Since $b \\ne 0$, divide by $b$:
   $$u^2 + v^2 + \\frac{m}{b}u + \\frac{1}{b}v = 0$$
4. Complete the square:
   $$\\left(u + \\frac{m}{2b}\\right)^2 + \\left(v + \\frac{1}{2b}\\right)^2 = \\frac{m^2 + 1}{4b^2}$$

![Figure 2.47](../../extracted_figures/figure_2_47.png)

This is a circle centered at $\\left(-\\frac{m}{2b}, -\\frac{1}{2b}\\right)$ with radius $\\frac{\\sqrt{m^2+1}}{2|b|}$, passing through the origin (since substituting $(0,0)$ satisfies the equation), except that the origin itself is excluded from the image.

---

#### Problem 27
Show that the image of the circle $(x - x_0)^2 + (y - y_0)^2 = R^2$ not passing through the origin ($x_0^2 + y_0^2 \\ne R^2$) under $w = 1/z$ is a circle.

**Solution:**
1. Expand the circle equation:
   $$x^2 - 2x_0 x + x_0^2 + y^2 - 2y_0 y + y_0^2 = R^2 \\implies (x^2 + y^2) - 2x_0 x - 2y_0 y + (x_0^2 + y_0^2 - R^2) = 0$$
2. Identify coefficients:
   $$A = 1, \\quad B = -2x_0, \\quad C = -2y_0, \\quad D = x_0^2 + y_0^2 - R^2$$
3. Since the circle does not pass through the origin, we have $D \\ne 0$.
4. Apply the reciprocal mapping formula:
   $$D(u^2 + v^2) - 2x_0 u + 2y_0 v + 1 = 0$$
5. Since $D \\ne 0$, divide by $D$:
   $$u^2 + v^2 - \\frac{2x_0}{D}u + \\frac{2y_0}{D}v + \\frac{1}{D} = 0$$
6. Complete the square:
   $$\\left(u - \\frac{x_0}{D}\\right)^2 + \\left(v + \\frac{y_0}{D}\\right)^2 = \\frac{x_0^2 + y_0^2 - D}{D^2}$$
7. Substitute $D = x_0^2 + y_0^2 - R^2$:
   $$\\text{RHS} = \\frac{x_0^2 + y_0^2 - (x_0^2 + y_0^2 - R^2)}{D^2} = \\frac{R^2}{D^2}$$
8. Since $R > 0$ and $D \\ne 0$, $\\frac{R^2}{D^2} > 0$, meaning the equation represents a circle with center $\\left(\\frac{x_0}{D}, -\\frac{y_0}{D}\\right)$ and radius $\\frac{R}{|D|}$.
This completes the proof.

---

#### Problem 28
Find the image of the strip $0 < x < 1$ under the reciprocal mapping $w = 1/z$.

**Solution:**
1. The strip is bounded by the vertical lines $x = 0$ and $x = 1$.
2. We map these boundaries:
   * The line $x = 0$ is the imaginary axis, which maps onto the imaginary axis $u = 0$ in the $w$-plane (excluding the origin).
   * The line $x = 1$ (written as $x - 1 = 0$, so $A=0, B=1, C=0, D=-1$) maps to:
     $$-(u^2 + v^2) + u = 0 \\implies u^2 + v^2 - u = 0 \\implies \\left(u - \\frac{1}{2}\\right)^2 + v^2 = \\frac{1}{4}$$
     which is a circle of radius $1/2$ centered at $(1/2, 0)$.
3. For points inside the strip, $0 < x < 1$.
   * Since $x = \\frac{u}{u^2+v^2}$:
     $$0 < \\frac{u}{u^2+v^2} < 1 \\implies u > 0 \\quad \\text{and} \\quad u^2 + v^2 - u > 0 \\implies \\left(u - \\frac{1}{2}\\right)^2 + v^2 > \\frac{1}{4}$$
4. This means the points must lie in the right half-plane ($u > 0$) but outside the circle of radius $1/2$ centered at $(1/2, 0)$.
Thus, the image is the **right half-plane $u > 0$ excluding the closed disk $(u - 1/2)^2 + v^2 \\le 1/4$**.

---

#### Problem 29
If we define the extended complex plane $\\mathbb{C}^* = \\mathbb{C} \\cup \\{\\infty\\}$, show that the reciprocal function $f(z) = 1/z$ becomes a bijection from $\\mathbb{C}^*$ to $\\mathbb{C}^*$ under the definitions:
$$f(0) = \\infty \\quad \\text{and} \\quad f(\\infty) = 0$$

**Solution:**
To show that $f(z)$ is a bijection (both one-to-one and onto) on $\\mathbb{C}^*$:
1. **One-to-one (Injectivity):**
   * For $z_1, z_2 \\in \\mathbb{C} \\setminus \\{0\\}$, if $f(z_1) = f(z_2) \\implies 1/z_1 = 1/z_2 \\implies z_1 = z_2$.
   * If $f(z_1) = f(0) = \\infty \\implies z_1 = 0$ (since no other point maps to $\\infty$).
   * If $f(z_1) = f(\\infty) = 0 \\implies z_1 = \\infty$ (since $1/z \\ne 0$ for any $z \\in \\mathbb{C}$).
   * Thus, $f(z_1) = f(z_2) \\implies z_1 = z_2$ for all $z_1, z_2 \\in \\mathbb{C}^*$.
2. **Onto (Surjectivity):**
   * For any $w \\in \\mathbb{C} \\setminus \\{0\\}$, we can find $z = 1/w \\in \\mathbb{C} \\setminus \\{0\\}$ such that $f(z) = w$.
   * For $w = 0$, $z = \\infty$ maps to it.
   * For $w = \\infty$, $z = 0$ maps to it.
   * Thus, every element in $\\mathbb{C}^*$ has a preimage.
3. Therefore, $f(z) = 1/z$ is a bijection from $\\mathbb{C}^*$ to itself.
"""

os.makedirs(r"C:\\Users\\Administrator\\.gemini\\antigravity\\scratch\\zill_solutions\\solutions_perfected\\chapter_2", exist_ok=True)
with open(r"C:\\Users\\Administrator\\.gemini\\antigravity\\scratch\\zill_solutions\\solutions_perfected\\chapter_2\\section_2.5_solutions.md", "w", encoding="utf-8") as f:
    f.write(content)

print("Section 2.5 written successfully.")
