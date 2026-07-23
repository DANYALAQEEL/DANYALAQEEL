# Complex Analysis Assignment Solution

## Question 1

**Given Mapping:**
$$h(z) = \frac{3i}{z^2} + 1 + i$$

### a) Write $h$ as a composition of a linear, the reciprocal, and the squaring function.

The function $h(z)$ can be broken down into elementary operations applied sequentially. Let us define the functions as follows:

1.  **Reciprocal Function:** $f(z) = \frac{1}{z}$
2.  **Squaring Function:** $g(z) = z^2$
3.  **Linear Function:** $k(z) = 3iz + (1 + i)$

**Verification of Composition:**
If we apply these in the order $f \to g \to k$:
Let $w_1 = f(z) = \frac{1}{z}$.
Let $w_2 = g(w_1) = \left(\frac{1}{z}\right)^2 = \frac{1}{z^2}$.
Let $w = k(w_2) = 3i\left(\frac{1}{z^2}\right) + (1 + i) = \frac{3i}{z^2} + 1 + i$.

This matches the original function $h(z)$.

**Answer:**
The composition is $h(z) = k(g(f(z)))$, where:
*   $f(z) = 1/z$
*   $g(z) = z^2$
*   $k(z) = 3iz + (1 + i)$

---

### b) Determine the image of the circle $|z + \frac{1}{2}i| = \frac{1}{2}$.

**Step 1: Analyze the input circle**
The equation $|z + \frac{1}{2}i| = \frac{1}{2}$ represents a circle centered at $z_0 = -i/2$ with radius $r = 1/2$.
Geometrically, this circle passes through the origin ($z=0$) because $|0 + i/2| = 1/2$.
Since the circle passes through the origin, its image under the reciprocal map $1/z$ will be a **straight line**.

**Step 2: Apply Reciprocal $w_1 = 1/z$**
Convert the circle equation to Cartesian form ($z = x+iy$):
$$|x + i(y + \frac{1}{2})|^2 = \left(\frac{1}{2}\right)^2$$
$$x^2 + (y + \frac{1}{2})^2 = \frac{1}{4}$$
$$x^2 + y^2 + y + \frac{1}{4} = \frac{1}{4}$$
$$x^2 + y^2 + y = 0$$

Using relationships $x^2 + y^2 = z\bar{z}$ and $y = \frac{z - \bar{z}}{2i}$:
$$z\bar{z} + \frac{z - \bar{z}}{2i} = 0$$

Divide by $z\bar{z}$ (since $z \neq 0$ on the inversion):
$$1 + \frac{1}{2i}\left(\frac{1}{\bar{z}} - \frac{1}{z}\right) = 0$$

Substitute $w_1 = 1/z$ (implies $\bar{w}_1 = 1/\bar{z}$):
$$1 + \frac{1}{2i}(\bar{w}_1 - w_1) = 0$$

Recall that $\bar{w}_1 - w_1 = -2i \text{Im}(w_1)$. Let $w_1 = u_1 + iv_1$.
$$1 + \frac{1}{2i}(-2iv_1) = 0$$
$$1 - v_1 = 0 \implies v_1 = 1$$

**Result after Step 2:** The horizontal line **$\text{Im}(w_1) = 1$**.

**Step 3: Apply Squaring $w_2 = w_1^2$**
We are mapping the line $u_1 + i(1)$ where $u_1 \in \mathbb{R}$.
$$w_2 = (u_1 + i)^2 = u_1^2 - 1 + 2u_1 i$$
Let $w_2 = u_2 + i v_2$.
$$u_2 = u_1^2 - 1$$
$$v_2 = 2u_1 \implies u_1 = \frac{v_2}{2}$$

Substitute $u_1$ into the real part:
$$u_2 = \left(\frac{v_2}{2}\right)^2 - 1 = \frac{v_2^2}{4} - 1$$

**Result after Step 3:** A parabola **$u_2 = \frac{1}{4}v_2^2 - 1$**.

**Step 4: Apply Linear Transformation $w = 3iw_2 + (1+i)$**
Let the final image be $w = u + iv$.
$$u + iv = 3i(u_2 + iv_2) + 1 + i$$
$$u + iv = 3iu_2 - 3v_2 + 1 + i$$
$$u + iv = (1 - 3v_2) + i(3u_2 + 1)$$

Equating real and imaginary parts:
1.  $u = 1 - 3v_2 \implies v_2 = \frac{1 - u}{3}$
2.  $v = 3u_2 + 1 \implies u_2 = \frac{v - 1}{3}$

Substitute these into the parabola equation $u_2 = \frac{1}{4}v_2^2 - 1$:
$$\frac{v - 1}{3} = \frac{1}{4}\left(\frac{1 - u}{3}\right)^2 - 1$$
$$\frac{v - 1}{3} = \frac{1}{4} \cdot \frac{(1 - u)^2}{9} - 1$$

Multiply entire equation by 3:
$$v - 1 = \frac{3}{36}(1 - u)^2 - 3$$
$$v = \frac{1}{12}(u - 1)^2 - 2$$

**Final Answer:**
The image is the parabola **$v = \frac{1}{12}(u - 1)^2 - 2$** (or $y = \frac{1}{12}(x - 1)^2 - 2$ in xy-coordinates).

---

### c) Determine the image of the circle $|z - 1| = 1$.

**Step 1: Analyze the input circle**
Center $z_0 = 1$, radius $r = 1$. Passes through origin implies image under $1/z$ is a line.

**Step 2: Apply Reciprocal $w_1 = 1/z$**
Circle equation: $|z-1|^2 = 1 \implies (x-1)^2 + y^2 = 1 \implies x^2 + y^2 - 2x = 0$.
In complex forms ($x = \frac{z+\bar{z}}{2}$):
$$z\bar{z} - 2\left(\frac{z+\bar{z}}{2}\right) = 0 \implies z\bar{z} - (z+\bar{z}) = 0$$

Divide by $z\bar{z}$:
$$1 - \left(\frac{1}{\bar{z}} + \frac{1}{z}\right) = 0$$
Substitute $w_1 = 1/z$:
$$1 - (\bar{w}_1 + w_1) = 0$$
$$1 - 2\text{Re}(w_1) = 0 \implies \text{Re}(w_1) = \frac{1}{2}$$

**Result after Step 2:** The vertical line **$u_1 = \frac{1}{2}$**.

**Step 3: Apply Squaring $w_2 = w_1^2$**
Mapping line $\frac{1}{2} + iv_1$.
$$w_2 = (\frac{1}{2} + iv_1)^2 = \frac{1}{4} - v_1^2 + i v_1$$
Let $w_2 = u_2 + i v_2$.
$$u_2 = \frac{1}{4} - v_1^2$$
$$v_2 = v_1$$

Substitute $v_1$:
$$u_2 = \frac{1}{4} - v_2^2$$

**Result after Step 3:** A parabola opening left **$u_2 = \frac{1}{4} - v_2^2$**.

**Step 4: Apply Linear Transformation $w = 3iw_2 + (1+i)$**
Using the same coordinate transformation valid from part (b):
*   $u_2 = \frac{v - 1}{3}$
*   $v_2 = \frac{1 - u}{3}$

Substitute into $u_2 = \frac{1}{4} - v_2^2$:
$$\frac{v - 1}{3} = \frac{1}{4} - \left(\frac{1 - u}{3}\right)^2$$

Multiply by 3:
$$v - 1 = \frac{3}{4} - 3\frac{(1 - u)^2}{9}$$
$$v = \frac{3}{4} + 1 - \frac{(u - 1)^2}{3}$$
$$v = -\frac{1}{3}(u - 1)^2 + \frac{7}{4}$$

**Final Answer:**
The image is the parabola **$v = -\frac{1}{3}(u - 1)^2 + \frac{7}{4}$**.
