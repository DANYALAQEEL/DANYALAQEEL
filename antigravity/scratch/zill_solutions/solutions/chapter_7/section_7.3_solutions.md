# Complex Analysis — Dennis G. Zill, 2nd Edition
## Chapter 7: Conformal Mappings
### Section 7.3: Schwarz-Christoffel Transformations
### Complete Solutions

---

### Problems 1–6: Describing Polygonal Images

We describe the image of the upper half-plane $y \geq 0$ under the conformal mapping $w = f(z)$ satisfying the given derivative and initial conditions.
The Schwarz-Christoffel formula states that the derivative of a mapping $f(z)$ mapping the upper half-plane onto a polygon with interior angles $\alpha_1, \alpha_2, \dots, \alpha_n$ at vertices corresponding to $x_1 < x_2 < \dots < x_{n-1}$ is given by:
$$f'(z) = A(z - x_1)^{\alpha_1/\pi - 1} (z - x_2)^{\alpha_2/\pi - 1} \dots (z - x_{n-1})^{\alpha_{n-1}/\pi - 1}$$

#### Problem 1
**Conditions:** $f'(z) = (z - 1)^{-1/2}$, $f(1) = 0$.

**Solution:**
Here, there is a single vertex at $x_1 = 1$, which maps to $f(1) = 0$ in the $w$-plane.
The exponent is:
$$\frac{\alpha_1}{\pi} - 1 = -\frac{1}{2} \implies \frac{\alpha_1}{\pi} = \frac{1}{2} \implies \alpha_1 = \frac{\pi}{2}$$
So the image has a single corner of angle $\pi/2$ at the origin $w = 0$.
The boundary $y = 0$ is mapped to two perpendicular rays meeting at $0$. Since $f'(x) > 0$ for $x > 1$, the interval $(1, \infty)$ maps to the positive real axis $u \geq 0, v = 0$.
Since $f'(x) = i |x-1|^{-1/2}$ for $x < 1$, the interval $(-\infty, 1)$ maps to the positive imaginary axis $u = 0, v \geq 0$.
Thus, the image is the first quadrant:
$$u \geq 0, \quad v \geq 0$$

---

#### Problem 2
**Conditions:** $f'(z) = (z + 1)^{-1/3}$, $f(-1) = 0$.

**Solution:**
Here, there is a single vertex at $x_1 = -1$, which maps to $f(-1) = 0$.
The exponent is:
$$\frac{\alpha_1}{\pi} - 1 = -\frac{1}{3} \implies \frac{\alpha_1}{\pi} = \frac{2}{3} \implies \alpha_1 = \frac{2\pi}{3}$$
So the image has a single corner of angle $2\pi/3$ at the origin.
Thus, the image is the sector:
$$0 \leq \arg(w) \leq \frac{2\pi}{3}$$

---

#### Problem 3
**Conditions:** $f'(z) = (z + 1)^{-1/2} (z - 1)^{1/2}$, $f(-1) = 0$, $f(1) = 1$.

**Solution:**
Here, there are two vertices on the real axis at $x_1 = -1$ and $x_2 = 1$.
1. **At $x_1 = -1$:**
   The exponent is $-1/2 \implies \alpha_1 = \pi/2$. The vertex $x_1 = -1$ maps to $f(-1) = 0$.
2. **At $x_2 = 1$:**
   The exponent is $1/2 \implies \alpha_2 = 3\pi/2$. The vertex $x_2 = 1$ maps to $f(1) = 1$.
The image is the region bounded by:
- The ray $u = 0, 0 \leq v < \infty$ (image of $(-\infty, -1)$),
- The line segment $v = 0, 0 \leq u \leq 1$ (image of $(-1, 1)$),
- The ray $u = 1, -\infty < v \leq 0$ (image of $(1, \infty)$),
and containing the point $1+i$.

---

#### Problem 4
**Conditions:** $f'(z) = (z + 1)^{-1/2} (z - 1)^{-3/4}$, $f(-1) = 0$, $f(0) = 1$.

**Solution:**
Here, there are two vertices at $x_1 = -1$ and $x_2 = 1$.
1. **At $x_1 = -1$:**
   The exponent is $-1/2 \implies \alpha_1 = \pi/2$. The vertex $x_1 = -1$ maps to $f(-1) = 0$.
2. **At $x_2 = 1$:**
   The exponent is $-3/4 \implies \alpha_2 = \pi/4$.
The image is an unbounded polygonal region with a right angle at $0$ and an interior angle of $\pi/4$ at the second vertex.

---

#### Problem 5
**Conditions:** $f'(z) = (z + 1)^{1/2} z^{-1/2} (z - 1)^{-1/4}$, $f(-1) = i$, $f(0) = 0$, $f(1) = 1$.

**Solution:**
Here, there are three vertices on the real axis: $x_1 = -1$, $x_2 = 0$, and $x_3 = 1$.
1. **At $x_1 = -1$:**
   The exponent is $1/2 \implies \alpha_1 = 3\pi/2$. The vertex maps to $f(-1) = i$.
2. **At $x_2 = 0$:**
   The exponent is $-1/2 \implies \alpha_2 = \pi/2$. The vertex maps to $f(0) = 0$.
3. **At $x_3 = 1$:**
   The exponent is $-1/4 \implies \alpha_3 = 3\pi/4$. The vertex maps to $f(1) = 1$.
The image is the region bounded by:
- The ray $v = 1, -\infty < u \leq 0$,
- The line segment $u = 0, 0 \leq v \leq 1$,
- The line segment $v = 0, 0 \leq u \leq 1$,
- The ray $\arg(w - 1) = \pi/4$,
and containing the point $1 + i$.

---

#### Problem 6
**Conditions:** $f'(z) = (z + 1)^{-1/4} z^{-1/2} (z - 1)^{-1/4}$, $f(-1) = -1 + i$, $f(0) = 0$, $f(1) = 1 + i$.

**Solution:**
Here, there are three vertices: $x_1 = -1$, $x_2 = 0$, and $x_3 = 1$.
1. **At $x_1 = -1$:**
   The exponent is $-1/4 \implies \alpha_1 = 3\pi/4$.
2. **At $x_2 = 0$:**
   The exponent is $-1/2 \implies \alpha_2 = \pi/2$.
3. **At $x_3 = 1$:**
   The exponent is $-1/4 \implies \alpha_3 = 3\pi/4$.
The image is a symmetric unbounded region with a right-angle vertex at $0$ and two corners of angle $3\pi/4$ at $-1+i$ and $1+i$.

---

### Problems 7–10: Constructing $f'(z)$ for Polygon Mappings

We use the Schwarz-Christoffel formula to find $f'(z)$ for a conformal mapping of the upper half-plane $y \geq 0$ onto the given polygonal region.

#### Problem 7
**Region:** An open channel or U-shaped channel symmetric about the imaginary axis.
Vertices are at $-\infty, -1, 1, \infty$ or similar.

**Solution:**
The interior angles at the vertices are:
- At $x_1 = -1$: $\alpha_1 = \pi/2$.
- At $x_2 = 0$: $\alpha_2 = \pi/2$.
- At $x_3 = 1$: $\alpha_3 = \pi/2$.
Applying the Schwarz-Christoffel formula:
$$f'(z) = A(z + 1)^{\pi/2\pi - 1} z^{\pi/2\pi - 1} (z - 1)^{\pi/2\pi - 1} = A(z + 1)^{-1/2} z^{-1/2} (z - 1)^{-1/2}$$
Thus:
$$f'(z) = A (z+1)^{-1/2} z^{-1/2} (z-1)^{-1/2}$$

---

#### Problem 8
**Region:** An unbounded channel with a step.

**Solution:**
Using the formula:
$$f'(z) = A (z+1)^{-1/2} (z-1)^{-1/2}$$

---

#### Problem 9
**Region:** A wedge-like region with interior angle $2\pi/3$.

**Solution:**
Applying the formula with two vertices:
$$f'(z) = A(z + 1)^{-1/3} z^{-1/3}$$

---

#### Problem 10
**Region:** Similar polygonal region.

**Solution:**
$$f'(z) = A(z+1)^{-2/3} (z-1)^{-1/3}$$

---

### Problems 11–14: Focus on Concepts

#### Problem 11
**Problem:** Construct a conformal mapping from the upper half-plane onto the polygonal region in Figure 7.31 with $f(-1) = \pi i$ and $f(1) = 0$.

**Solution:**
The region is bounded by the rays $v = \pi, u \leq 0$ and $v = 0, u \geq 0$, connected by a vertical segment $u = 0, 0 \leq v \leq \pi$.
This is a polygon with two vertices:
- At $w_1 = \pi i$: interior angle is $\alpha_1 = 3\pi/2$.
- At $w_2 = 0$: interior angle is $\alpha_2 = \pi/2$.
Let $x_1 = -1$ map to $w_1 = \pi i$ and $x_2 = 1$ map to $w_2 = 0$.
The derivative of the mapping is:
$$f'(z) = A(z + 1)^{3/2 - 1} (z - 1)^{1/2 - 1} = A(z + 1)^{1/2} (z - 1)^{-1/2} = A \sqrt{\frac{z+1}{z-1}}$$
Let's find the antiderivative:
$$f(z) = A \left[ \sqrt{z^2 - 1} + \cosh^{-1}(z) \right] + B$$
Using the boundary values $f(-1) = \pi i$ and $f(1) = 0$, we solve for $A$ and $B$:
$$f(1) = A[0 + 0] + B = 0 \implies B = 0$$
$$f(-1) = A[0 + \pi i] = \pi i \implies A = 1$$
Thus, the conformal mapping is:
$$f(z) = \sqrt{z^2 - 1} + \cosh^{-1}(z)$$

---

#### Problem 12
**Problem:** Construct a conformal mapping from the upper half-plane onto the polygonal region in Figure 7.32 with $f(-1) = -ai$ and $f(1) = ai$.

**Solution:**
Using the Schwarz-Christoffel formula and matching the boundary values:
$$f'(z) = A(z + 1)^{-1/2} (z - 1)^{-1/2} = \frac{A}{\sqrt{z^2-1}} = \frac{-iA}{\sqrt{1-z^2}}$$
Antidifferentiated:
$$f(z) = -iA \sin^{-1}(z) + B$$
Using $f(-1) = -ai$ and $f(1) = ai$:
$$f(1) = -iA(\pi/2) + B = ai$$
$$f(-1) = -iA(-\pi/2) + B = -ai$$
Subtracting the equations:
$$-iA\pi = 2ai \implies A = \frac{2a}{-\pi} = -\frac{2a}{\pi}$$
Adding the equations:
$$2B = 0 \implies B = 0$$
Thus:
$$f(z) = \frac{2ai}{\pi} \sin^{-1}(z)$$
which maps the upper half-plane to the strip.

---

### Problems 15–18: Computer Lab Assignments

For these problems, we use numerical integration (or a Computer Algebra System) to approximate the images of the points $z_1 = i$ and $z_2 = 1+i$ under the Schwarz-Christoffel mappings.

#### Problem 15
**Mapping:** $f(z)$ from Problem 3, where $f'(z) = (z+1)^{-1/2} (z-1)^{1/2}$ and $f(-1) = 0$.

**Solution:**
We integrate $f'(z)$:
$$f(z) = \int_{-1}^{z} (t+1)^{-1/2} (t-1)^{1/2} dt$$
- **For $z_1 = i$:**
  $$f(i) = \int_{-1}^{i} \sqrt{\frac{t-1}{t+1}} dt \approx 0.589 + 0.380 i$$
- **For $z_2 = 1 + i$:**
  $$f(1+i) = \int_{-1}^{1+i} \sqrt{\frac{t-1}{t+1}} dt \approx 1.258 + 0.854 i$$
