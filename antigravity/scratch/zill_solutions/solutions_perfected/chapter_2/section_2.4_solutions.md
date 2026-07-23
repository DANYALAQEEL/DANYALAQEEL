# Complex Analysis — Dennis G. Zill, 2nd Edition
## Chapter 2 · Section 2.4 — Special Power Functions
### Problems 1 – 57 · Complete Solutions

---

> **Key Concepts of Special Power Functions**
>
> 1. **Power Function $z^n$:** For $n \ge 2$, the mapping $w = z^n$ scales the modulus to $r^n$ and multiplies the argument by $n$:
>    $$w = r^n e^{i n\theta}$$
> 
> ![Figure 2.17](../../extracted_figures/figure_2_17.png)
>
> ![Figure 2.25](../../extracted_figures/figure_2_25.png)
>
> 2. **Squaring Mapping $w = z^2$:**
>    * Horizontal lines $y = k \ne 0$ map to parabolas: $u = \frac{v^2}{4k^2} - k^2$ (opening right).
>    * Vertical lines $x = k \ne 0$ map to parabolas: $u = k^2 - \frac{v^2}{4k^2}$ (opening left).
>    * Rays $\arg(z) = \theta_0$ map to rays $\arg(w) = 2\theta_0$.
> 
> ![Figure 2.19](../../extracted_figures/figure_2_19.png)
>
> 3. **Principal Root Function $z^{1/n}$:** The single-valued branch defined by:
>    $$z^{1/n} = r^{1/n} e^{i \theta / n} \quad \text{where } \theta = \operatorname{Arg}(z) \in (-\pi, \pi]$$
>    The range of this function is the sector $(-\pi/n, \pi/n]$.
> 
> ![Figure 2.29](../../extracted_figures/figure_2_29.png)
>
> 4. **One-to-One and Inverse Functions:**
> 
> ![Figure 2.26](../../extracted_figures/figure_2_26.png)
>
> ![Figure 2.27](../../extracted_figures/figure_2_27.png)
>
> ![Figure 2.28](../../extracted_figures/figure_2_28.png)
>
> 5. **Riemann Surfaces:**
> 
> ![Figure 2.31](../../extracted_figures/figure_2_31.png)
>
> ![Figure 2.32](../../extracted_figures/figure_2_32.png)
>
> ![Figure 2.34](../../extracted_figures/figure_2_34.png)
>
> ![Figure 2.35](../../extracted_figures/figure_2_35.png)

---

## Problems 1 – 14: Image under $w = z^2$

#### Problem 1
Find the image of the ray $\arg(z) = \pi/3$ under the complex mapping $w = z^2$.

**Solution:**
1. Under the squaring mapping $w = z^2$, a point $z = r e^{i\theta}$ is mapped to:
   $$w = r^2 e^{i 2\theta}$$
2. The argument is doubled:
   $$\arg(w) = 2\arg(z) = 2\left(\frac{\pi}{3}\right) = \frac{2\pi}{3}$$
3. Since $r$ ranges over $(0, \infty)$ for a ray, $r^2$ also ranges over $(0, \infty)$.

![Figure 2.23](../../extracted_figures/figure_2_23.png)

Thus, the image is the **ray $\arg(w) = 2\pi/3$**.

---

#### Problem 2
Find the image of the ray $\arg(z) = -3\pi/4$ under the complex mapping $w = z^2$.

**Solution:**
1. Under $w = z^2$, the argument is doubled:
   $$\arg(w) = 2\left(-\frac{3\pi}{4}\right) = -\frac{3\pi}{2}$$
2. Add $2\pi$ to find the principal argument:
   $$-\frac{3\pi}{2} + 2\pi = \frac{\pi}{2}$$
Thus, the image is the **ray $\arg(w) = \pi/2$** (which is the positive imaginary axis).

---

#### Problem 3
Find the image of the line $x = 3$ under the complex mapping $w = z^2$.

**Solution:**
1. This is a vertical line. Using the mapping equations:
   $$u = x^2 - y^2 \quad \text{and} \quad v = 2xy$$
2. Substitute $x = 3$:
   $$u = 9 - y^2 \quad \text{and} \quad v = 6y$$
3. Solve for $y$ from the second equation:
   $$y = \frac{v}{6}$$
4. Substitute $y$ into the first equation:
   $$u = 9 - \left(\frac{v}{6}\right)^2 = 9 - \frac{v^2}{36}$$
5. As $y$ ranges over $(-\infty, \infty)$, the coordinate $v = 6y$ also ranges over $(-\infty, \infty)$.

![Figure 2.20](../../extracted_figures/figure_2_20.png)

Thus, the image is the **parabola $u = 9 - \frac{v^2}{36}$** (opening to the left).

---

#### Problem 4
Find the image of the line $y = -5$ under the complex mapping $w = z^2$.

**Solution:**
1. This is a horizontal line. Using the mapping equations:
   $$u = x^2 - y^2 \quad \text{and} \quad v = 2xy$$
2. Substitute $y = -5$:
   $$u = x^2 - 25 \quad \text{and} \quad v = -10x$$
3. Solve for $x$:
   $$x = -\frac{v}{10}$$
4. Substitute $x$ into the equation for $u$:
   $$u = \left(-\frac{v}{10}\right)^2 - 25 = \frac{v^2}{100} - 25$$
5. As $x$ ranges over $(-\infty, \infty)$, the coordinate $v = -10x$ also ranges over $(-\infty, \infty)$.

![Figure 2.21](../../extracted_figures/figure_2_21.png)

Thus, the image is the **parabola $u = \frac{v^2}{100} - 25$** (opening to the right).

---

#### Problem 5
Find the image of the line $y = -1/4$ under the complex mapping $w = z^2$.

**Solution:**
1. Using the mapping equations with $y = -1/4$:
   $$u = x^2 - \left(-\frac{1}{4}\right)^2 = x^2 - \frac{1}{16} \quad \text{and} \quad v = 2x\left(-\frac{1}{4}\right) = -\frac{x}{2}$$
2. Solve for $x$:
   $$x = -2v$$
3. Substitute $x$ into the equation for $u$:
   $$u = (-2v)^2 - \frac{1}{16} = 4v^2 - \frac{1}{16}$$
Thus, the image is the **parabola $u = 4v^2 - \frac{1}{16}$** (opening to the right).

---

#### Problem 6
Find the image of the line $x = 3/2$ under the complex mapping $w = z^2$.

**Solution:**
1. Using the mapping equations with $x = 3/2$:
   $$u = \left(\frac{3}{2}\right)^2 - y^2 = \frac{9}{4} - y^2 \quad \text{and} \quad v = 2\left(\frac{3}{2}\right)y = 3y$$
2. Solve for $y$:
   $$y = \frac{v}{3}$$
3. Substitute $y$ into the equation for $u$:
   $$u = \frac{9}{4} - \frac{v^2}{9}$$
Thus, the image is the **parabola $u = \frac{9}{4} - \frac{v^2}{9}$** (opening to the left).

---

#### Problem 7
Find the image of the positive imaginary axis under the complex mapping $w = z^2$.

**Solution:**
1. The positive imaginary axis is the ray $\arg(z) = \pi/2$.
2. Under $w = z^2$, the argument is doubled:
   $$\arg(w) = 2\left(\frac{\pi}{2}\right) = \pi$$
3. The modulus $|z| > 0$ maps to $|w| > 0$.
Thus, the image is the **negative real axis** (excluding the origin), i.e., the ray $v = 0, u < 0$.

---

#### Problem 8
Find the image of the line $y = x$ under the complex mapping $w = z^2$.

**Solution:**
1. The line $y = x$ consists of two rays: $\arg(z) = \pi/4$ (for $x>0$) and $\arg(z) = -3\pi/4$ (for $x<0$).
2. Under $w = z^2$, the arguments are doubled:
   * For $\theta = \pi/4 \implies \arg(w) = \pi/2$.
   * For $\theta = -3\pi/4 \implies \arg(w) = -3\pi/2 \equiv \pi/2$.
3. The origin $z=0$ maps to $w=0$.
Thus, the image is the **positive imaginary axis** (including the origin), i.e., the ray $u = 0, v \ge 0$.

---

#### Problem 9
Find the image of the circular arc $|z| = 1/2, 0 \le \arg(z) \le \pi$ under the complex mapping $w = z^2$.

**Solution:**
1. For any point on the arc, $|z| = 1/2$ and $0 \le \arg(z) \le \pi$.
2. Under $w = z^2$, the modulus is squared:
   $$|w| = |z|^2 = \left(\frac{1}{2}\right)^2 = \frac{1}{4}$$
3. The argument is doubled:
   $$2(0) \le \arg(w) \le 2(\pi) \implies 0 \le \arg(w) \le 2\pi$$
4. Since the argument range covers a full $2\pi$, the image is a complete circle.

![Figure 2.18](../../extracted_figures/figure_2_18.png)

Thus, the image is the **circle $|w| = 1/4$**.

---

#### Problem 10
Find the image of the circular arc $|z| = 4/3, -\pi/2 \le \arg(z) \le \pi/6$ under the complex mapping $w = z^2$.

**Solution:**
1. Under $w = z^2$, the modulus is squared:
   $$|w| = \left(\frac{4}{3}\right)^2 = \frac{16}{9}$$
2. The argument is doubled:
   $$2\left(-\frac{\pi}{2}\right) \le \arg(w) \le 2\left(\frac{\pi}{6}\right) \implies -\pi \le \arg(w) \le \frac{\pi}{3}$$
Thus, the image is the **circular arc $|w| = 16/9$ for $-\pi \le \arg(w) \le \pi/3$**.

---

#### Problem 11
Find the image of the triangle with vertices $0, 1, 1+i$ under the complex mapping $w = z^2$.

**Solution:**
We map each boundary segment of the triangle:
1. **Segment 1 (from 0 to 1):**
   * Parametrization: $y = 0$ for $0 \le x \le 1$.
   * Image: $v = 0$ and $u = x^2$ for $0 \le x \le 1 \implies 0 \le u \le 1$.
   * This is the real segment $[0, 1]$.
2. **Segment 2 (from 0 to 1+i):**
   * Parametrization: $y = x$ for $0 \le x \le 1$.
   * Image: $u = x^2 - y^2 = 0$ and $v = 2x^2$ for $0 \le x \le 1 \implies 0 \le v \le 2$.
   * This is the imaginary segment $[0, 2i]$.
3. **Segment 3 (from 1 to 1+i):**
   * Parametrization: $x = 1$ for $0 \le y \le 1$.
   * Image: $u = 1 - y^2$ and $v = 2y$.
   * Solve for $y$: $y = v/2$. Substitute into $u$:
     $$u = 1 - \frac{v^2}{4}$$
   * Since $0 \le y \le 1$, the parameter $v = 2y$ ranges over $0 \le v \le 2$.

![Figure 2.22](../../extracted_figures/figure_2_22.png)

Thus, the image is the **region bounded by the real segment $[0, 1]$, the imaginary segment $[0, 2i]$, and the parabolic arc $u = 1 - v^2/4$ for $0 \le v \le 2$**.

---

#### Problem 12
Find the image of the triangle with vertices $0, 1+2i, -1+2i$ under the complex mapping $w = z^2$.

**Solution:**
We map each boundary segment:
1. **Segment 1 (from 0 to 1+2i):**
   * Parametrization: $z(t) = t(1+2i) = t + 2it$ for $0 \le t \le 1$.
   * Image: $w(t) = z(t)^2 = t^2(1+2i)^2 = t^2(1 + 4i - 4) = t^2(-3 + 4i)$.
   * Since $0 \le t^2 \le 1$, this is the straight line segment from $0$ to $-3+4i$.
2. **Segment 2 (from 0 to -1+2i):**
   * Parametrization: $z(t) = t(-1+2i) = -t + 2it$ for $0 \le t \le 1$.
   * Image: $w(t) = t^2(-1+2i)^2 = t^2(1 - 4i - 4) = t^2(-3 - 4i)$.
   * This is the straight line segment from $0$ to $-3-4i$.
3. **Segment 3 (from -1+2i to 1+2i):**
   * Parametrization: $y = 2$ for $-1 \le x \le 1$.
   * Image: $u = x^2 - 4$ and $v = 4x$.
   * Solve for $x$: $x = v/4$. Substitute into $u$:
     $$u = \frac{v^2}{16} - 4$$
   * Since $-1 \le x \le 1$, the parameter $v = 4x$ ranges over $-4 \le v \le 4$.
Thus, the image is the **region bounded by the straight segments from $0$ to $-3 \pm 4i$, and the parabolic arc $u = v^2/16 - 4$ for $-4 \le v \le 4$**.

---

#### Problem 13
Find the image of the square with vertices $0, 1, 1+i, i$ under the complex mapping $w = z^2$.

**Solution:**
We map the four boundary segments:
1. **Segment from 0 to 1:** $y = 0, 0 \le x \le 1 \implies v = 0, 0 \le u \le 1$ (real segment $[0, 1]$).
2. **Segment from 0 to i:** $x = 0, 0 \le y \le 1 \implies v = 0, -1 \le u \le 0$ (real segment $[-1, 0]$).
3. **Segment from 1 to 1+i:** $x = 1, 0 \le y \le 1 \implies u = 1 - v^2/4$ for $0 \le v \le 2$.
4. **Segment from i to 1+i:** $y = 1, 0 \le x \le 1 \implies u = v^2/4 - 1$ for $0 \le v \le 2$.
Combining the boundaries: the real segments form $[-1, 1]$ on the real axis, and the two curves are parabolic arcs in the upper half-plane.
Thus, the image is the **region in the upper half-plane bounded by the real segment $[-1, 1]$ and the two parabolic arcs $u = 1 - v^2/4$ and $u = v^2/4 - 1$ for $0 \le v \le 2$**.

---

#### Problem 14
Find the image of the polygon with vertices $0, 1, 1+i, -1+i$ under the complex mapping $w = z^2$.

**Solution:**
We map the boundary segments:
1. **Segment from 0 to 1:** maps to the real segment $[0, 1]$.
2. **Segment from 0 to -1+i:** This lies on the line $y = -x$ for $-1 \le x \le 0$.
   * Image: $z(t) = t(-1+i) \implies w(t) = t^2(1-2i-1) = -2t^2i$ for $0 \le t \le 1$.
   * This is the segment $[0, -2i]$ on the imaginary axis.
3. **Segment from 1 to 1+i:** maps to the parabolic arc $u = 1 - v^2/4$ for $0 \le v \le 2$.
4. **Segment from -1+i to 1+i:** This is the horizontal line segment $y = 1$ for $-1 \le x \le 1$.
   * Image: $u = x^2 - 1$ and $v = 2x \implies u = v^2/4 - 1$.
   * Since $-1 \le x \le 1$, $v = 2x$ ranges over $-2 \le v \le 2$.
Thus, the image is the **region bounded by the real segment $[0, 1]$, the imaginary segment $[0, -2i]$, the parabolic arc $u = 1 - v^2/4$ (for $0 \le v \le 2$), and the parabolic arc $u = v^2/4 - 1$ (for $-2 \le v \le 2$)**.

---

## Problems 15 – 20: Compositions

#### Problem 15
Find the image of the ray $\arg(z) = \pi/3$ under the complex mapping $f(z) = 2z^2 + 1 - i$.

**Solution:**
1. Let $w_1 = z^2$. The ray $\arg(z) = \pi/3$ maps to the ray $\arg(w_1) = 2\pi/3$.
2. Multiply by 2: $w_2 = 2w_1$. The ray's angle is unchanged ($\arg(w_2) = 2\pi/3$).
3. Translate by $1 - i$: $w = w_2 + 1 - i$. This shifts the endpoint (origin) of the ray to $1 - i$.
Thus, the image is the **ray emanating from $1 - i$ and extending in the direction $2\pi/3$** (excluding the endpoint $1-i$).

---

#### Problem 16
Find the image of the line segment from $0$ to $-1+i$ under the complex mapping $f(z) = \sqrt{2}z^2 + 2 - i$.

**Solution:**
1. Under $w_1 = z^2$, the segment from $0$ to $-1+i$ maps to the imaginary segment from $0$ to $-2i$ (since $(-1+i)^2 = -2i$).
2. Multiply by $\sqrt{2}$: $w_2 = \sqrt{2}w_1$, which maps to the segment from $0$ to $-2\sqrt{2}i$.
3. Translate by $2 - i$:
   * The endpoint $0$ maps to $2 - i$.
   * The endpoint $-2\sqrt{2}i$ maps to $-2\sqrt{2}i + 2 - i = 2 - i(2\sqrt{2} + 1)$.
Thus, the image is the **line segment from $2 - i$ to $2 - i(2\sqrt{2} + 1)$**.

---

#### Problem 17
Find the image of the line $x = 2$ under the complex mapping $f(z) = iz^2 - 3$.

**Solution:**
1. Let $w_1 = z^2$. The vertical line $x = 2$ maps to the parabola:
   $$u_1 = 4 - \frac{v_1^2}{16}$$
2. Multiply by $i$: $w_2 = i w_1$. This rotates the parabola by $90^\circ$ counterclockwise:
   $$u_2 = -v_1 \quad \text{and} \quad v_2 = u_1 \implies v_2 = 4 - \frac{(-u_2)^2}{16} = 4 - \frac{u_2^2}{16}$$
3. Translate by $-3$: $w = w_2 - 3 \implies u = u_2 - 3$ and $v = v_2$.
4. Express in terms of $u$: $u_2 = u + 3$. Substitute into the parabola equation:
   $$v = 4 - \frac{(u+3)^2}{16}$$
Thus, the image is the **parabola $v = 4 - \frac{(u+3)^2}{16}$**.

---

#### Problem 18
Find the image of the line $y = -3$ under the complex mapping $f(z) = -z^2 + i$.

**Solution:**
1. Let $w_1 = z^2$. The horizontal line $y = -3$ maps to the parabola:
   $$u_1 = \frac{v_1^2}{36} - 9$$
2. Negate: $w_2 = -w_1$. This rotates the parabola by $180^\circ$:
   $$u_2 = -u_1 \quad \text{and} \quad v_2 = -v_1 \implies -u_2 = \frac{(-v_2)^2}{36} - 9 \implies u_2 = 9 - \frac{v_2^2}{36}$$
3. Translate by $i$: $w = w_2 + i \implies u = u_2$ and $v = v_2 + 1 \implies v_2 = v - 1$.
4. Substitute:
   $$u = 9 - \frac{(v-1)^2}{36}$$
Thus, the image is the **parabola $u = 9 - \frac{(v-1)^2}{36}$**.

---

#### Problem 19
Find the image of the circular arc $|z| = 2, 0 \le \arg(z) \le \pi/2$ under the complex mapping $f(z) = \frac{1}{4}e^{i\pi/4}z^2$.

**Solution:**
1. Under $w_1 = z^2$, the arc $|z|=2, 0 \le \arg(z) \le \pi/2$ maps to:
   $$|w_1| = 4, \quad 0 \le \arg(w_1) \le \pi$$
2. Under $w = \frac{1}{4}e^{i\pi/4} w_1$:
   * The modulus is scaled by $1/4$: $|w| = \frac{1}{4}(4) = 1$.
   * The argument is rotated by $\pi/4$:
     $$0 + \frac{\pi}{4} \le \arg(w) \le \pi + \frac{\pi}{4} \implies \frac{\pi}{4} \le \arg(w) \le \frac{5\pi}{4}$$
Thus, the image is the **circular arc $|w| = 1$ for $\frac{\pi}{4} \le \arg(w) \le \frac{5\pi}{4}$**.

---

#### Problem 20
Find the image of the triangle with vertices $0, 1, 1+i$ under the complex mapping $f(z) = -\frac{1}{4}iz^2 + 1$.

**Solution:**
1. Let $w_1 = z^2$. The boundaries of the triangle's image in the $w_1$-plane are:
   * Segment 1 (real axis $[0, 1]$): $v_1 = 0, 0 \le u_1 \le 1$.
   * Segment 2 (imaginary axis $[0, 2i]$): $u_1 = 0, 0 \le v_1 \le 2$.
   * Parabolic arc: $u_1 = 1 - v_1^2/4$ for $0 \le v_1 \le 2$.
2. Apply the transformation $w = -\frac{1}{4}i w_1 + 1$:
   $$w = -\frac{1}{4}i (u_1 + i v_1) + 1 = \left(\frac{v_1}{4} + 1\right) - i \frac{u_1}{4}$$
   Wait! Let's check: $-i(u_1 + i v_1) = -i u_1 - i^2 v_1 = v_1 - i u_1$. Yes!
   So:
   $$u = \frac{v_1}{4} + 1 \quad \text{and} \quad v = -\frac{u_1}{4}$$
3. Let's map each boundary to the $w$-plane:
   * **Boundary 1 ($v_1 = 0, 0 \le u_1 \le 1$):**
     $$u = 1 \quad \text{and} \quad v = -\frac{u_1}{4} \in [-1/4, 0]$$
     This is the vertical segment from $1$ to $1 - \frac{1}{4}i$.
   * **Boundary 2 ($u_1 = 0, 0 \le v_1 \le 2$):**
     $$v = 0 \quad \text{and} \quad u = \frac{v_1}{4} + 1 \in [1, 3/2]$$
     This is the real segment $[1, 3/2]$.
   * **Boundary 3 ($u_1 = 1 - v_1^2/4$ for $0 \le v_1 \le 2$):**
     Express $u_1$ and $v_1$ in terms of $u$ and $v$:
     $$v_1 = 4(u-1) \quad \text{and} \quad u_1 = -4v$$
     Substitute these into the parabola equation:
     $$-4v = 1 - \frac{16(u-1)^2}{4} = 1 - 4(u-1)^2 \implies v = (u-1)^2 - \frac{1}{4}$$
     Since $0 \le v_1 \le 2 \implies 1 \le u \le 3/2$.
Thus, the image is the **region bounded by the straight segments from $1$ to $1 - \frac{1}{4}i$, from $1$ to $3/2$, and the parabolic arc $v = (u-1)^2 - 1/4$ for $1 \le u \le 3/2$**.

---

## Problems 21 – 24: Higher Powers

#### Problem 21
Find the image of the ray $\arg(z) = \pi/6$ under the following mappings:
(a) $f(z) = z^3$
(b) $f(z) = z^4$
(c) $f(z) = z^5$

**Solution:**
**(a) $f(z) = z^3$:**
1. The argument is multiplied by 3:
   $$\arg(w) = 3\left(\frac{\pi}{6}\right) = \frac{\pi}{2}$$
* **Image:** The ray $\arg(w) = \pi/2$ (positive imaginary axis).

**(b) $f(z) = z^4$:**
1. The argument is multiplied by 4:
   $$\arg(w) = 4\left(\frac{\pi}{6}\right) = \frac{2\pi}{3}$$
* **Image:** The ray $\arg(w) = 2\pi/3$.

**(c) $f(z) = z^5$:**
1. The argument is multiplied by 5:
   $$\arg(w) = 5\left(\frac{\pi}{6}\right) = \frac{5\pi}{6}$$
* **Image:** The ray $\arg(w) = 5\pi/6$.

---

#### Problem 22
Find the image of the first quadrant $0 \le \arg(z) \le \pi/2$ under the following mappings:
(a) $f(z) = z^2$
(b) $f(z) = z^3$
(c) $f(z) = z^4$

**Solution:**
**(a) $f(z) = z^2$:**
1. The argument range is multiplied by 2:
   $$2(0) \le \arg(w) \le 2\left(\frac{\pi}{2}\right) \implies 0 \le \arg(w) \le \pi$$
* **Image:** The upper half-plane $\operatorname{Im}(w) \ge 0$.

**(b) $f(z) = z^3$:**
1. The argument range is multiplied by 3:
   $$0 \le \arg(w) \le \frac{3\pi}{2}$$
* **Image:** The three-quarter plane consisting of quadrants I, II, and III.

**(c) $f(z) = z^4$:**
1. The argument range is multiplied by 4:
   $$0 \le \arg(w) \le 2\pi$$
* **Image:** The entire complex plane $\mathbb{C}$.

---

#### Problem 23
Find the image of the region $S$: $1 \le |z| \le 2, \pi/4 \le \arg(z) \le 3\pi/4$ under the following mappings:
(a) $f(z) = z^2$
(b) $f(z) = z^3$
(c) $f(z) = z^4$

**Solution:**
We use polar coordinate transformations:

**(a) $f(z) = z^2$:**
1. Modulus: $1^2 \le |w| \le 2^2 \implies 1 \le |w| \le 4$.
2. Argument: $2(\pi/4) \le \arg(w) \le 2(3\pi/4) \implies \pi/2 \le \arg(w) \le 3\pi/2$.

![Figure 2.36](../../extracted_figures/figure_2_36.png)

* **Image:** The region defined by $1 \le |w| \le 4, \pi/2 \le \arg(w) \le 3\pi/2$.

**(b) $f(z) = z^3$:**
1. Modulus: $1^3 \le |w| \le 2^3 \implies 1 \le |w| \le 8$.
2. Argument: $3(\pi/4) \le \arg(w) \le 3(3\pi/4) \implies 3\pi/4 \le \arg(w) \le 9\pi/4$.
* **Image:** The region defined by $1 \le |w| \le 8, 3\pi/4 \le \arg(w) \le 9\pi/4$.

**(c) $f(z) = z^4$:**
1. Modulus: $1^4 \le |w| \le 2^4 \implies 1 \le |w| \le 16$.
2. Argument: $4(\pi/4) \le \arg(w) \le 4(3\pi/4) \implies \pi \le \arg(w) \le 3\pi$, which covers a full $2\pi$ interval.
* **Image:** The annulus $1 \le |w| \le 16$.

---

#### Problem 24
Find the image of the region shown in Figure 2.36 (from Problem 23) under:
(a) $f(z) = 3z^2 + i$
(b) $f(z) = (i + 1)z^3 + 1$
(c) $f(z) = \frac{1}{2}z^4 - i$

**Solution:**
We compose the power mapping from Problem 23 with the linear mappings:

**(a) $f(z) = 3z^2 + i$:**
1. Let $S'$ be the image from 23(a): $1 \le |w_1| \le 4, \pi/2 \le \arg(w_1) \le 3\pi/2$.
2. Multiply by 3: $3 \le |w_2| \le 12$ (same argument).
3. Translate by $i$: The region is shifted by $i$.
* **Image:** $\{ w \in \mathbb{C} : 3 \le |w - i| \le 12, \pi/2 \le \arg(w - i) \le 3\pi/2 \}$.

**(b) $f(z) = (i + 1)z^3 + 1$:**
1. Let $S'$ be the image from 23(b): $1 \le |w_1| \le 8, 3\pi/4 \le \arg(w_1) \le 9\pi/4$.
2. Let $a = 1+i = \sqrt{2}e^{i\pi/4}$. Multiply by $a$:
   * Modulus: scaled by $\sqrt{2} \implies \sqrt{2} \le |w_2| \le 8\sqrt{2}$.
   * Argument: shifted by $\pi/4 \implies \pi \le \arg(w_2) \le 5\pi/2$.
3. Translate by 1: The region is shifted by 1.
* **Image:** $\{ w \in \mathbb{C} : \sqrt{2} \le |w - 1| \le 8\sqrt{2}, \pi \le \arg(w - 1) \le 5\pi/2 \}$.

**(c) $f(z) = \frac{1}{2}z^4 - i$:**
1. Let $S'$ be the annulus from 23(c): $1 \le |w_1| \le 16$.
2. Multiply by $1/2$: $1/2 \le |w_2| \le 8$.
3. Translate by $-i$: The annulus is shifted down by 1 unit.
* **Image:** The translated annulus $\{ w \in \mathbb{C} : \frac{1}{2} \le |w + i| \le 8 \}$.

---

## Problems 25 – 30: Principal Roots Evaluations

#### Problem 25
Evaluate the principal square root $z^{1/2}$ at $z = -i$.

**Solution:**
1. Write $z = -i$ in polar form with principal argument:
   $$|-i| = 1 \quad \text{and} \quad \operatorname{Arg}(-i) = -\frac{\pi}{2}$$
   So $-i = e^{-i\pi/2}$.
2. Apply the definition of the principal branch:
   $$z^{1/2} = |z|^{1/2} e^{i \operatorname{Arg}(z)/2} = 1^{1/2} e^{i(-\pi/4)} = \cos(-\pi/4) + i\sin(-\pi/4) = \frac{\sqrt{2}}{2} - \frac{\sqrt{2}}{2}i$$
Thus, $(-i)^{1/2} = \boxed{\frac{\sqrt{2}}{2} - \frac{\sqrt{2}}{2}i}$.

---

#### Problem 26
Evaluate the principal square root $z^{1/2}$ at $z = 2 + i$.

**Solution:**
1. Modulus: $|2+i| = \sqrt{2^2+1^2} = \sqrt{5}$.
2. Let $w = u+iv = z^{1/2}$. We know $w^2 = z \implies u^2 - v^2 = 2$ and $2uv = 1$.
3. Since $z$ is in the first quadrant, its principal root lies in the first quadrant, so $u > 0$ and $v > 0$.
4. Use the half-angle formula for square roots:
   $$u = \sqrt{\frac{|z| + x}{2}} = \sqrt{\frac{\sqrt{5} + 2}{2}}$$
   $$v = \sqrt{\frac{|z| - x}{2}} = \sqrt{\frac{\sqrt{5} - 2}{2}}$$
Thus, $(2+i)^{1/2} = \boxed{\sqrt{\frac{\sqrt{5} + 2}{2}} + i\sqrt{\frac{\sqrt{5} - 2}{2}}}$.

---

#### Problem 27
Evaluate the principal cube root $z^{1/3}$ at $z = -1$.

**Solution:**
1. Write $z = -1$ in polar form:
   $$|-1| = 1 \quad \text{and} \quad \operatorname{Arg}(-1) = \pi \implies -1 = e^{i\pi}$$
2. Apply the definition:
   $$z^{1/3} = 1^{1/3} e^{i\pi/3} = \cos(\pi/3) + i\sin(\pi/3) = \frac{1}{2} + \frac{\sqrt{3}}{2}i$$
Thus, $(-1)^{1/3} = \boxed{\frac{1}{2} + \frac{\sqrt{3}}{2}i}$.

---

#### Problem 28
Evaluate the principal cube root $z^{1/3}$ at $z = -3 + 3i$.

**Solution:**
1. Find modulus and argument:
   $$|-3+3i| = \sqrt{(-3)^2+3^2} = \sqrt{18} = 3\sqrt{2}$$
   $$\operatorname{Arg}(-3+3i) = \frac{3\pi}{4}$$
2. Apply the definition:
   $$z^{1/3} = (3\sqrt{2})^{1/3} e^{i (3\pi/4)/3} = 18^{1/6} e^{i\pi/4} = 18^{1/6} \left(\frac{\sqrt{2}}{2} + i\frac{\sqrt{2}}{2}\right)$$
3. Simplify the real coefficient:
   $$18^{1/6} \frac{\sqrt{2}}{2} = (18 \cdot 2^3)^{1/6} / 2 = 144^{1/6}/2$$
   Alternatively:
   $$(3\sqrt{2})^{1/3} = (27 \cdot 2)^{1/6} = 54^{1/6}$$
   Wait! Let's write:
   $$(3\sqrt{2})^{1/3} e^{i\pi/4} = 3^{1/3} 2^{1/6} 2^{-1/2}(1+i) = 3^{1/3} 2^{1/6 - 3/6}(1+i) = 3^{1/3} 2^{-1/3}(1+i) = \left(\frac{3}{2}\right)^{1/3}(1 + i)$$
Thus, $(-3+3i)^{1/3} = \boxed{\left(\frac{3}{2}\right)^{1/3}(1 + i)}$.

---

#### Problem 29
Evaluate the principal fourth root $z^{1/4}$ at $z = -1 + \sqrt{3}i$.

**Solution:**
1. Find modulus and argument:
   $$|-1+\sqrt{3}i| = \sqrt{(-1)^2+3} = 2$$
   $$\operatorname{Arg}(-1+\sqrt{3}i) = \frac{2\pi}{3}$$
2. Apply the definition:
   $$z^{1/4} = 2^{1/4} e^{i (2\pi/3)/4} = 2^{1/4} e^{i\pi/6} = 2^{1/4} \left(\frac{\sqrt{3}}{2} + \frac{1}{2}i\right)$$
3. Distribute:
   $$\text{Real part: } 2^{1/4} \frac{\sqrt{3}}{2} = \frac{3^{1/2} 2^{1/4}}{2} = \frac{(9 \cdot 2)^{1/4}}{2} = \frac{18^{1/4}}{2}$$
   $$\text{Imaginary part: } \frac{2^{1/4}}{2}$$
Thus, $(-1+\sqrt{3}i)^{1/4} = \boxed{\frac{18^{1/4}}{2} + i\frac{2^{1/4}}{2}}$.

---

#### Problem 30
Evaluate the principal fifth root $z^{1/5}$ at $z = -4\sqrt{3} + 4i$.

**Solution:**
1. Find modulus and argument:
   $$|-4\sqrt{3}+4i| = \sqrt{48+16} = \sqrt{64} = 8$$
   $$\operatorname{Arg}(-4\sqrt{3}+4i) = \pi - \arctan\left(\frac{4}{4\sqrt{3}}\right) = \pi - \frac{\pi}{6} = \frac{5\pi}{6}$$
2. Apply the definition:
   $$z^{1/5} = 8^{1/5} e^{i (5\pi/6)/5} = 8^{1/5} e^{i\pi/6} = (2^3)^{1/5} e^{i\pi/6} = 2^{3/5} \left(\frac{\sqrt{3}}{2} + \frac{1}{2}i\right)$$
3. Simplify the denominators:
   $$\frac{2^{3/5}}{2} = 2^{3/5 - 1} = 2^{-2/5} = \frac{1}{2alignment^{2/5}}$$
   So:
   $$z^{1/5} = \frac{\sqrt{3}}{2^{2/5}} + i\frac{1}{2^{2/5}}$$
Thus, $(-4\sqrt{3}+4i)^{1/5} = \boxed{\frac{\sqrt{3}}{2^{2/5}} + i\frac{1}{2^{2/5}}}$.

---

## Problems 31 – 40: Image under $w = z^{1/2}$

#### Problem 31
Find the image of the ray $\arg(z) = \pi/4$ under the principal square root mapping $w = z^{1/2}$.

**Solution:**
1. Under $w = z^{1/2}$, the argument is halved:
   $$\arg(w) = \frac{1}{2}\arg(z) = \frac{1}{2}\left(\frac{\pi}{4}\right) = \frac{\pi}{8}$$
Thus, the image is the **ray $\arg(w) = \pi/8$**.

---

#### Problem 32
Find the image of the ray $\arg(z) = -2\pi/3$ under the principal square root mapping $w = z^{1/2}$.

**Solution:**
1. Under $w = z^{1/2}$, the argument is halved:
   $$\arg(w) = \frac{1}{2}\left(-\frac{2\pi}{3}\right) = -\frac{\pi}{3}$$
Thus, the image is the **ray $\arg(w) = -\pi/3$**.

---

#### Problem 33
Find the image of the positive imaginary axis under the principal square root mapping $w = z^{1/2}$.

**Solution:**
1. The positive imaginary axis is the ray $\arg(z) = \pi/2$.
2. Under $w = z^{1/2}$, the argument is halved:
   $$\arg(w) = \frac{1}{2}\left(\frac{\pi}{2}\right) = \frac{\pi}{4}$$
Thus, the image is the **ray $\arg(w) = \pi/4$**.

---

#### Problem 34
Find the image of the negative real axis under the principal square root mapping $w = z^{1/2}$.

**Solution:**
1. The negative real axis is represented by $\operatorname{Arg}(z) = \pi$.
2. Under $w = z^{1/2}$, the argument is halved:
   $$\arg(w) = \frac{\pi}{2}$$
Thus, the image is the **ray $\arg(w) = \pi/2$** (positive imaginary axis).

---

#### Problem 35
Find the image of the circular arc $|z| = 9, -\pi/2 \le \arg(z) \le \pi$ under the principal square root mapping $w = z^{1/2}$.

**Solution:**
1. The modulus is square-rooted:
   $$|w| = \sqrt{|z|} = \sqrt{9} = 3$$
2. The argument range is halved:
   $$\frac{1}{2}\left(-\frac{\pi}{2}\right) \le \arg(w) \le \frac{1}{2}(\pi) \implies -\frac{\pi}{4} \le \arg(w) \le \frac{\pi}{2}$$
Thus, the image is the **circular arc $|w| = 3$ for $-\pi/4 \le \arg(w) \le \pi/2$**.

---

#### Problem 36
Find the image of the circular arc $|z| = 4/7, -\pi/2 \le \arg(z) \le \pi/4$ under the principal square root mapping $w = z^{1/2}$.

**Solution:**
1. The modulus is square-rooted:
   $$|w| = \sqrt{4/7} = \frac{2}{\sqrt{7}}$$
2. The argument range is halved:
   $$\frac{1}{2}\left(-\frac{\pi}{2}\right) \le \arg(w) \le \frac{1}{2}\left(\frac{\pi}{4}\right) \implies -\frac{\pi}{4} \le \arg(w) \le \frac{\pi}{8}$$
Thus, the image is the **circular arc $|w| = \frac{2}{\sqrt{7}}$ for $-\pi/4 \le \arg(w) \le \pi/8$**.

---

#### Problem 37
Find the image of the parabola $x = 9/4 - y^2/9$ under the principal square root mapping $w = z^{1/2}$.

**Solution:**
1. The equation of the parabola is of the form:
   $$x = k^2 - \frac{y^2}{4k^2}$$
2. Match coefficients:
   $$k^2 = 9/4 \implies k = 3/2 \quad (\text{since } u = k > 0 \text{ for the principal branch})$$
   $$4k^2 = 4(9/4) = 9 \implies \frac{1}{4k^2} = \frac{1}{9}$$
3. This is consistent. As shown in the key concepts, the parabola $x = k^2 - y^2/(4k^2)$ maps to the vertical line $u = k$ under $w = z^{1/2}$.

![Figure 2.37](../../extracted_figures/figure_2_37.png)

Thus, the image is the **vertical line $u = 3/2$** (or $\operatorname{Re}(w) = 3/2$).

---

#### Problem 38
Find the image of the parabola $x = y^2/10 - 5/2$ under the principal square root mapping $w = z^{1/2}$.

**Solution:**
1. The equation of the parabola is of the form:
   $$x = \frac{y^2}{4k^2} - k^2$$
2. Match coefficients:
   $$k^2 = 5/2 \implies k = \sqrt{5/2} = \frac{\sqrt{10}}{2}$$
   $$4k^2 = 4(5/2) = 10 \implies \frac{1}{4k^2} = \frac{1}{10}$$
3. This is consistent. The parabola $x = y^2/(4k^2) - k^2$ maps to the horizontal lines $v = \pm k$ (excluding $u < 0$).
Thus, the image is the **union of the two horizontal half-lines $v = \frac{\sqrt{10}}{2}$ (for $u \ge 0$) and $v = -\frac{\sqrt{10}}{2}$ (for $u > 0$)**.

---

#### Problem 39
Find the image of the region $S$: $x \ge 4 - y^2/16$ under the principal square root mapping $w = z^{1/2}$.

**Solution:**
1. The boundary is the parabola $x = 4 - y^2/16$.
2. Match with $x = k^2 - y^2/(4k^2)$:
   $$k^2 = 4 \implies k = 2$$
3. This boundary maps to the vertical line $u = 2$.
4. The region lies to the right of the parabola (containing $z = 4 \implies w = 2$). Since $z=4$ maps to $w=2$ which is on the line $u=2$, points to the right map to $u \ge 2$.
Thus, the image is the **half-plane $u \ge 2$** (or $\operatorname{Re}(w) \ge 2$).

---

#### Problem 40
Find the image of the sector $0 \le |z| \le R, 0 \le \arg(z) \le 3\pi/4$ under the principal square root mapping $w = z^{1/2}$.

**Solution:**
1. Modulus: $0 \le |w| \le \sqrt{R}$.
2. Argument: $0 \le \arg(w) \le \frac{3\pi}{8}$.

![Figure 2.30](../../extracted_figures/figure_2_30.png)

![Figure 2.38](../../extracted_figures/figure_2_38.png)

Thus, the image is the **sector $0 \le |w| \le \sqrt{R}, 0 \le \arg(w) \le 3\pi/8$**.

---

## Focus on Concepts (Problems 41 – 57)

#### Problem 41
Show that the image of the hyperbola $xy = k$ under $w = z^2$ is a horizontal line.

**Solution:**
1. Under $w = z^2$, the imaginary part is $v = 2xy$.
2. For the hyperbola $xy = k$, substitute this relation:
   $$v = 2k$$
3. The real part $u = x^2 - y^2$ takes all real values.
Thus, the image is the **horizontal line $v = 2k$**.

---

#### Problem 42
Show that the image of the hyperbola $x^2 - y^2 = k$ under $w = z^2$ is a vertical line.

**Solution:**
1. Under $w = z^2$, the real part is $u = x^2 - y^2$.
2. For the hyperbola $x^2 - y^2 = k$, substitute this relation:
   $$u = k$$
3. The imaginary part $v = 2xy$ takes all real values.
Thus, the image is the **vertical line $u = k$**.

---

#### Problem 43
Find all points $z$ in the complex plane that map to the positive imaginary axis under $w = z^2$.

**Solution:**
1. The positive imaginary axis is represented by $\arg(w) = \pi/2 + 2n\pi$.
2. Under $w = z^2$, we have $\arg(w) = 2\arg(z)$.
3. Set up the equation:
   $$2\arg(z) = \frac{\pi}{2} + 2n\pi \implies \arg(z) = \frac{\pi}{4} + n\pi$$
4. For $n=0$: $\arg(z) = \pi/4$.
5. For $n=1$: $\arg(z) = 5\pi/4 \equiv -3\pi/4$.
Thus, the preimage consists of the **two rays $\arg(z) = \pi/4$ and $\arg(z) = -3\pi/4$**.

---

#### Problem 44
Find two different regions in the $z$-plane that map onto the region $S'$ bounded by $v = 0, u = -v,$ and $u = 1 - v^2/4$ under $w = z^2$.

**Solution:**
The boundary curves of $S'$ map back under $z = w^{1/2}$ as follows:
* $v = 0 \implies y = 0$ (the real axis).
* $u = -v \implies \arg(w) = 3\pi/4 \implies \arg(z) = 3\pi/8$ or $-5\pi/8$.
* $u = 1 - v^2/4 \implies x = 1$ or $x = -1$.
Thus, the two preimages are:
1. The region in quadrant I bounded by the real axis, the ray $\arg(z) = 3\pi/8$, and the vertical line $x = 1$.
2. The region in quadrant III bounded by the imaginary axis, the ray $\arg(z) = -5\pi/8$, and the vertical line $x = -1$.

---

#### Problem 45
Prove that the horizontal line $y = k$ ($k \ne 0$) maps to the parabola $u = \frac{v^2}{4k^2} - k^2$ under $w = z^2$ by using the rotation $z' = iz$.

**Solution:**
1. Let $z' = iz = -y + ix = x' + iy'$.
2. If $z$ is on $y=k$, then $x' = -k$ and $y' = x$. This is a vertical line.
3. Under $w' = z'^2$, a vertical line $x' = -k$ maps to the parabola:
   $$u' = (-k)^2 - \frac{v'^2}{4(-k)^2} = k^2 - \frac{v'^2}{4k^2}$$
4. Since $w = z^2 = (-iz')^2 = -z'^2 = -w'$:
   $$u + iv = -(u' + iv') = -u' - iv' \implies u = -u' \quad \text{and} \quad v = -v'$$
5. Substitute these into the parabola equation:
   $$-u = k^2 - \frac{(-v)^2}{4k^2} \implies u = \frac{v^2}{4k^2} - k^2$$
This completes the proof.

---

#### Problem 46
Find all points $z$ in the complex plane that map to the negative real axis under $w = z^3$.

**Solution:**
1. The negative real axis is represented by $\arg(w) = \pi + 2n\pi$.
2. Under $w = z^3$, we have $\arg(w) = 3\arg(z)$.
3. Set up the equation:
   $$3\arg(z) = \pi + 2n\pi \implies \arg(z) = \frac{\pi}{3} + \frac{2n\pi}{3}$$
4. For $n=0$: $\arg(z) = \pi/3$.
5. For $n=1$: $\arg(z) = \pi$.
6. For $n=2$: $\arg(z) = 5\pi/3 \equiv -\pi/3$.
Thus, the preimage consists of the **three rays $\arg(z) = \pi/3, \pi,$ and $-\pi/3$**.

---

#### Problem 47
Find the preimage of the circle $|w| = 2$ under $w = z^4$ in each quadrant.

**Solution:**
1. Under $w = z^4$, the modulus is $|w| = |z|^4$.
2. Set $|z|^4 = 2 \implies |z| = 2^{1/4}$.
3. In each quadrant, the argument range is restricted to a $90^\circ$ interval.
Thus, the preimages in each quadrant are the four quarter-circle arcs of radius $2^{1/4}$:
1. Quadrant I: $|z| = 2^{1/4}, 0 \le \arg(z) < \pi/2$.
2. Quadrant II: $|z| = 2^{1/4}, \pi/2 \le \arg(z) < \pi$.
3. Quadrant III: $|z| = 2^{1/4}, -\pi \le \arg(z) < -\pi/2$.
4. Quadrant IV: $|z| = 2^{1/4}, -\pi/2 \le \arg(z) < 0$.

---

#### Problem 48
Determine if lines through the origin map to lines under $w = z^n$ for $n \ge 2$.

**Solution:**
1. A line through the origin consists of two rays: $\arg(z) = \theta_0$ and $\arg(z) = \theta_0 + \pi$.
2. Under $w = z^n$, these map to rays:
   $$\arg(w) = n\theta_0 \quad \text{and} \quad \arg(w) = n\theta_0 + n\pi$$
3. For the two image rays to form a single straight line, their arguments must differ by an odd multiple of $\pi$:
   $$(n\theta_0 + n\pi) - n\theta_0 = n\pi$$
   This is an odd multiple of $\pi$ if and only if $n$ is an **odd integer**.
4. If $n$ is even, $n\pi$ is a multiple of $2\pi$, so both rays map to the same ray, not a full line.
Thus, lines through the origin map to lines **only for odd $n \ge 3$**. For even $n$, they map onto rays.

---

#### Problem 49
Can a parabola map to a straight line under the principal square root function?

**Solution:**
**Yes**. As demonstrated in Problem 37, a parabola of the form $x = k^2 - \frac{y^2}{4k^2}$ (which opens to the left and has its vertex on the x-axis at $x=k^2$) maps to the vertical line $u = k$ in the $w$-plane under the principal square root mapping.

---

#### Problem 50
Prove that the linear function $f(z) = az + b$ with $a \ne 0$ is one-to-one on $\mathbb{C}$, and find its inverse.

**Solution:**
**(a) Proof of one-to-one:**
Suppose $f(z_1) = f(z_2)$ for some $z_1, z_2 \in \mathbb{C}$:
$$a z_1 + b = a z_2 + b \implies a z_1 = a z_2$$
Since $a \ne 0$, we can divide by $a$:
$$z_1 = z_2$$
Thus, $f(z)$ is one-to-one.

**(b) Find the inverse:**
Set $w = az + b$:
$$w - b = az \implies z = \frac{w - b}{a}$$
Thus, the inverse function is:
$$\boxed{f^{-1}(w) = \frac{w - b}{a}}$$

---

#### Problem 51
Prove that the function $f(z) = a/z + b$ with $a \ne 0$ is one-to-one on its domain, and find its inverse.

**Solution:**
**(a) Proof of one-to-one:**
The domain of $f(z)$ is $z \ne 0$. Suppose $f(z_1) = f(z_2)$:
$$\frac{a}{z_1} + b = \frac{a}{z_2} + b \implies \frac{a}{z_1} = \frac{a}{z_2}$$
Since $a \ne 0$:
$$\frac{1}{z_1} = \frac{1}{z_2} \implies z_1 = z_2$$
Thus, the function is one-to-one.

**(b) Find the inverse:**
Set $w = \frac{a}{z} + b$:
$$w - b = \frac{a}{z} \implies z = \frac{a}{w - b}$$
Thus, the inverse function is:
$$\boxed{f^{-1}(w) = \frac{a}{w - b}}$$

---

#### Problem 52
Find the image of the upper half-plane $\operatorname{Im}(z) \ge 0$ under:
(a) $f(z) = z^{1/2}$
(b) $f(z) = z^{1/3}$
(c) $f(z) = z^{1/4}$

**Solution:**
The upper half-plane corresponds to the argument range $[0, \pi]$.

**(a) $f(z) = z^{1/2}$:**
1. Argument range: $[0/2, \pi/2] = [0, \pi/2]$.
* **Image:** The first quadrant $u \ge 0, v \ge 0$.

**(b) $f(z) = z^{1/3}$:**
1. Argument range: $[0, \pi/3]$.
* **Image:** The sector $0 \le \arg(w) \le \pi/3$.

**(c) $f(z) = z^{1/4}$:**
1. Argument range: $[0, \pi/4]$.
* **Image:** The sector $0 \le \arg(w) \le \pi/4$.

---

#### Problem 53
Find the image of the region $S$: $|z| \le 8, \pi/2 \le \arg(z) \le 3\pi/4$ under:
(a) $f(z) = z^{1/2}$
(b) $f(z) = z^{1/3}$
(c) $f(z) = z^{1/4}$

**Solution:**
**(a) $f(z) = z^{1/2}$:**
* Modulus: $0 \le |w| \le \sqrt{8} = 2\sqrt{2}$.
* Argument: $\frac{1}{2}(\pi/2) \le \arg(w) \le \frac{1}{2}(3\pi/4) \implies \pi/4 \le \arg(w) \le 3\pi/8$.
* **Image:** The sector $0 \le |w| \le 2\sqrt{2}, \pi/4 \le \arg(w) \le 3\pi/8$.

**(b) $f(z) = z^{1/3}$:**
* Modulus: $0 \le |w| \le 8^{1/3} = 2$.
* Argument: $\pi/6 \le \arg(w) \le \pi/4$.
* **Image:** The sector $0 \le |w| \le 2, \pi/6 \le \arg(w) \le \pi/4$.

**(c) $f(z) = z^{1/4}$:**
* Modulus: $0 \le |w| \le 8^{1/4}$.
* Argument: $\pi/8 \le \arg(w) \le 3\pi/16$.
* **Image:** The sector $0 \le |w| \le 8^{1/4}, \pi/8 \le \arg(w) \le 3\pi/16$.

---

#### Problem 54
Find a principal branch function that maps the complex plane onto a sector of angle $2\pi/3$.

**Solution:**
1. The principal branch of $z^{1/3}$ has argument range $(-\pi/3, \pi/3]$, which is a sector of angle $2\pi/3$.
2. To shift this sector, we can multiply by a phase factor. If we multiply by $-1 = e^{i\pi}$:
   $$f(z) = -z^{1/3}$$
3. The argument range becomes:
   $$\left(-\frac{\pi}{3} + \pi, \frac{\pi}{3} + \pi\right] = \left(\frac{2\pi}{3}, \frac{4\pi}{3}\right]$$
   which is also a sector of angle $2\pi/3$.
Thus, one such function is:
$$\boxed{f(z) = -z^{1/3}}$$

---

#### Problem 55
Describe the construction of the Riemann surface for the mapping $w = z^3$.

**Solution:**
1. The mapping $w = z^3$ is a 3-to-1 mapping for all $z \ne 0$.
2. We take three copies of the complex plane, each cut along the negative real axis. Let these sheets be $S_1, S_2, S_3$.

![Figure 2.33](../../extracted_figures/figure_2_33.png)

3. We join the lower edge of the cut on $S_1$ to the upper edge of the cut on $S_2$.
4. We join the lower edge of the cut on $S_2$ to the upper edge of the cut on $S_3$.
5. We join the lower edge of the cut on $S_3$ back to the upper edge of the cut on $S_1$ (passing through a higher dimension to avoid self-intersection).
This forms a three-sheeted Riemann surface where the origin is a branch point of order 2.

---

#### Problem 56
Find the bounds for the modulus of $f(z) = 2iz^2 - i$ on the region $S$: $|z| \le 2, 0 \le \arg(z) \le \pi/2$, and find the points that achieve these bounds.

**Solution:**
**(a) Find the bounds:**
1. Under $w_1 = z^2$, the region $S$ maps to:
   $$0 \le |w_1| \le 4, \quad 0 \le \arg(w_1) \le \pi$$
2. Let $w_2 = 2i w_1$.
   * The modulus ranges from $0$ to $2(4) = 8$.
   * The argument is rotated by $\pi/2 \implies \pi/2 \le \arg(w_2) \le 3\pi/2$. This is a half-disk in the left half-plane.
3. Let $w = w_2 - i$. This translates the half-disk down by 1 unit.
   * **Maximum modulus:** Farthest point from $0$ in the shifted region.
     The point $w_2 = -8i$ (which is in the boundary since $\arg(w_2) = 3\pi/2$) is translated to:
     $$w = -8i - i = -9i \implies |w| = 9$$
   * **Minimum modulus:** The point in the shifted region closest to the origin.
     Since the region contains the point $w_2 = i$ (at $\arg(w_2) = \pi/2, |w_2|=1$), the translation maps this to:
     $$w = i - i = 0 \implies |w| = 0$$
Thus, the bounds are:
$$\boxed{0 \le |2iz^2 - i| \le 9}$$

**(b) Achieving points:**
* For the minimum $L = 0$:
  $$2iz^2 = i \implies z^2 = \frac{1}{2}$$
  Since $z$ must be in the first quadrant:
  $$z_0 = \boxed{\frac{\sqrt{2}}{2}}$$
* For the maximum $M = 9$:
  $$2iz^2 = -8i \implies z^2 = -4$$
  Since $z$ is in the first quadrant:
  $$z_1 = \boxed{2i}$$

---

#### Problem 57
Find the bounds for the modulus of $f(z) = \frac{1}{3}z^2 + 1 - i$ on the region $S$: $2 \le |z| \le 3, 0 \le \arg(z) \le \pi$, and find the points that achieve these bounds.

**Solution:**
**(a) Find the bounds:**
1. Let $w_1 = z^2 \implies 4 \le |w_1| \le 9, 0 \le \arg(w_1) \le 2\pi$ (annulus).
2. Let $w_2 = \frac{1}{3}w_1 \implies \frac{4}{3} \le |w_2| \le 3$.
3. Let $w = w_2 + 1 - i$. The translation shifts the center by $1-i$.
   * The shift vector is $c = -1 + i$, which has modulus $|c| = \sqrt{2} \approx 1.414$.
   * Since $\frac{4}{3} \approx 1.33 < \sqrt{2} \le 3$, the translation offset lies inside the annulus of $w_2$.
   * Therefore, we can choose $w_2$ in the opposite direction of the shift vector to achieve:
     $$w = 0 \implies |w| = 0$$
   * **Minimum modulus:** $L = 0$.
   * **Maximum modulus:** The point on the outer circle $|w_2| = 3$ that is farthest from the center offset. This lies in the exact same direction as the shift vector:
     $$M = 3 + |c| = 3 + \sqrt{2}$$
Thus, the bounds are:
$$\boxed{0 \le |f(z)| \le 3 + \sqrt{2}}$$

**(b) Achieving points:**
* For the minimum $L = 0$:
  $$\frac{1}{3}z^2 = -1 + i \implies z^2 = -3 + 3i = 3\sqrt{2} e^{i3\pi/4}$$
  Taking the square root in the upper half-plane:
  $$z_0 = \boxed{\sqrt{3\sqrt{2}} e^{i3\pi/8}}$$
* For the maximum $M = 3 + \sqrt{2}$:
  $$\frac{1}{3}z^2 = 3 e^{i\theta_c} \quad \text{where } e^{i\theta_c} = \frac{1-i}{\sqrt{2}} = e^{-i\pi/4}$$
  $$z^2 = 9 e^{-i\pi/4} = 9 e^{i7\pi/4}$$
  Taking the square root in the upper half-plane:
  $$z_1 = \boxed{3 e^{i7\pi/8}}$$
