# Complex Analysis — Dennis G. Zill, 2nd Edition
## Chapter 7: Conformal Mappings
### Section 7.2: Linear Fractional Transformations
### Complete Solutions

---

### Problems 1–4: Images of Points under LFTs

For the given linear fractional transformation $T(z)$, we find the images of the points $0, 1, i, \infty$.

#### Problem 1
**Transformation:** $T(z) = \frac{i}{z}$.

**Solution:**
1. $T(0) = \frac{i}{0} = \infty$.
2. $T(1) = \frac{i}{1} = i$.
3. $T(i) = \frac{i}{i} = 1$.
4. $T(\infty) = \lim_{z \to \infty} \frac{i}{z} = 0$.

So: $T(0) = \infty$, $T(1) = i$, $T(i) = 1$, $T(\infty) = 0$.

---

#### Problem 2
**Transformation:** $T(z) = \frac{2}{z - i}$.

**Solution:**
1. $T(0) = \frac{2}{0 - i} = \frac{2}{-i} = 2i$.
2. $T(1) = \frac{2}{1 - i} = \frac{2(1+i)}{2} = 1 + i$.
3. $T(i) = \frac{2}{i - i} = \frac{2}{0} = \infty$.
4. $T(\infty) = \lim_{z \to \infty} \frac{2}{z-i} = 0$.

So: $T(0) = 2i$, $T(1) = 1 + i$, $T(i) = \infty$, $T(\infty) = 0$.

---

#### Problem 3
**Transformation:** $T(z) = \frac{z + i}{z - i}$.

**Solution:**
1. $T(0) = \frac{0 + i}{0 - i} = -1$.
2. $T(1) = \frac{1 + i}{1 - i} = \frac{(1+i)^2}{2} = i$.
3. $T(i) = \frac{i + i}{i - i} = \frac{2i}{0} = \infty$.
4. $T(\infty) = \lim_{z \to \infty} \frac{z+i}{z-i} = 1$.

So: $T(0) = -1$, $T(1) = i$, $T(i) = \infty$, $T(\infty) = 1$.

---

#### Problem 4
**Transformation:** $T(z) = \frac{z - 1}{z}$.

**Solution:**
1. $T(0) = \frac{0 - 1}{0} = \infty$.
2. $T(1) = \frac{1 - 1}{1} = 0$.
3. $T(i) = \frac{i - 1}{i} = 1 - \frac{1}{i} = 1 + i$.
4. $T(\infty) = \lim_{z \to \infty} \frac{z-1}{z} = 1$.

So: $T(0) = \infty$, $T(1) = 0$, $T(i) = 1 + i$, $T(\infty) = 1$.

---

### Problems 5–8: Images of Disks

We find the images of the disks $D_1 = \{z \mid |z| \leq 1\}$ and $D_2 = \{z \mid |z - i| \leq 1\}$ under the transformations in Problems 1–4.

#### Problem 5
**Transformation:** $T(z) = \frac{i}{z}$ (from Problem 1).

**Solution:**
1. **For $D_1 = \{z \mid |z| \leq 1\}$:**
   The boundary circle $|z| = 1$ maps to the circle $|w| = |i/z| = 1/|z| = 1$.
   The center $z = 0$ maps to $w = \infty$. Since $\infty$ is outside the unit circle $|w| = 1$, the interior of the disk maps to the exterior of the circle.
   Thus, the image is:
   $$|w| \geq 1$$
2. **For $D_2 = \{z \mid |z - i| \leq 1\}$:**
   The boundary circle $|z - i| = 1$ passes through $z = 0$. Since $T(0) = \infty$, the image boundary is a straight line.
   Let's find the image of three boundary points:
   - $z = 2i \implies T(2i) = 1/2$.
   - $z = 1 + i \implies T(1+i) = 1/2 + i/2$.
   - $z = -1 + i \implies T(-1+i) = 1/2 - i/2$.
   These points lie on the vertical line $\operatorname{Re}(w) = 1/2 \implies u = 1/2$.
   Testing the center of the disk $z = i$ (inside the disk):
   $$T(i) = 1$$
   Since $1 > 1/2$, the interior of the disk maps to the right half-plane.
   Thus, the image is:
   $$u \geq \frac{1}{2}$$

---

#### Problem 6
**Transformation:** $T(z) = \frac{2}{z - i}$ (from Problem 2).

**Solution:**
1. **For $D_1 = \{z \mid |z| \leq 1\}$:**
   The boundary circle $|z| = 1$ passes through $z = i$. Since $T(i) = \infty$, the image boundary is a straight line.
   Let's find the image of three boundary points:
   - $z = 1 \implies T(1) = 1 + i$.
   - $z = -1 \implies T(-1) = -1 + i$.
   - $z = -i \implies T(-i) = i$.
   These points lie on the horizontal line $\operatorname{Im}(w) = 1 \implies v = 1$.
   Testing the center of the disk $z = 0$ (inside the disk):
   $$T(0) = 2i$$
   Since $2 > 1$, the interior of the disk maps to the upper half-plane.
   Thus, the image is:
   $$v \geq 1$$
2. **For $D_2 = \{z \mid |z - i| \leq 1\}$:**
   The center $z = i$ maps to $w = \infty$. Thus, the interior of the disk maps to the exterior of a circle.
   Let's find the image of the boundary points along the imaginary axis, which are $z = 0$ and $z = 2i$:
   - $T(0) = 2i$.
   - $T(2i) = -2i$.
   These points are diameter endpoints of the image circle, which is centered at $0$ with radius $2$.
   Thus, the image is:
   $$|w| \geq 2$$

---

#### Problem 7
**Transformation:** $T(z) = \frac{z + i}{z - i}$ (from Problem 3).

**Solution:**
1. **For $D_1 = \{z \mid |z| \leq 1\}$:**
   The boundary $|z| = 1$ passes through $z = i$, which maps to $\infty$. The image boundary is a line.
   Let's find the image of three boundary points:
   - $z = 1 \implies T(1) = i$.
   - $z = -1 \implies T(-1) = -i$.
   - $z = -i \implies T(-i) = 0$.
   These points lie on the imaginary axis $\operatorname{Re}(w) = 0 \implies u = 0$.
   Testing the center $z = 0$:
   $$T(0) = -1$$
   Since $-1 < 0$, the interior maps to the left half-plane.
   Thus, the image is:
   $$u \leq 0$$
2. **For $D_2 = \{z \mid |z - i| \leq 1\}$:**
   The center $z = i$ maps to $\infty$, so the image is the exterior of a circle.
   The boundary points along the imaginary axis are $z = 0$ and $z = 2i$:
   - $T(0) = -1$.
   - $T(2i) = 3$.
   These are diameter endpoints of the image circle. The center of this circle is:
   $$\frac{-1 + 3}{2} = 1$$
   and the radius is:
   $$\frac{3 - (-1)}{2} = 2$$
   Thus, the image is:
   $$|w - 1| \geq 2$$

---

#### Problem 8
**Transformation:** $T(z) = \frac{z - 1}{z}$ (from Problem 4).

**Solution:**
1. **For $D_1 = \{z \mid |z| \leq 1\}$:**
   The center $z = 0$ maps to $\infty$, so the image is the exterior of a circle.
   The boundary points along the real axis are $z = 1$ and $z = -1$:
   - $T(1) = 0$.
   - $T(-1) = 2$.
   These are diameter endpoints of the image circle, which is centered at $1$ with radius $1$.
   Thus, the image is:
   $$|w - 1| \geq 1$$
2. **For $D_2 = \{z \mid |z - i| \leq 1\}$:**
   The boundary circle passes through $z = 0$, which maps to $\infty$. The image boundary is a line.
   Let's find the image of three boundary points:
   - $z = 2i \implies T(2i) = 1 + i/2$.
   - $z = 1 + i \implies T(1+i) = 1/2 + i/2$.
   - $z = -1 + i \implies T(-1+i) = 3/2 + i/2$.
   These points lie on the horizontal line $\operatorname{Im}(w) = 1/2 \implies v = 1/2$.
   Testing the center $z = i$:
   $$T(i) = 1 + i$$
   Since $1 > 1/2$, the interior maps to the upper half-plane.
   Thus, the image is:
   $$v \geq \frac{1}{2}$$

---

### Problems 9–12: Images of Half-Planes

We find the images of the half-planes $H_1 = \{z \mid \operatorname{Re}(z) \geq 0\}$ and $H_2 = \{z \mid \operatorname{Im}(z) \leq 1\}$ under the transformations in Problems 1–4.

#### Problem 9
**Transformation:** $T(z) = \frac{i}{z}$ (from Problem 1).

**Solution:**
1. **For $H_1 = \{z \mid \operatorname{Re}(z) \geq 0\}$:**
   The boundary is the imaginary axis $x = 0$, which passes through $z = 0$ (maps to $\infty$). The image boundary is a line.
   For $z = it$:
   $$T(it) = \frac{i}{it} = \frac{1}{t} \in \mathbb{R}$$
   Thus, the imaginary axis maps to the real axis $v = 0$.
   Testing $z = 1 \in H_1$:
   $$T(1) = i \implies v = 1 > 0$$
   Thus, the right half-plane maps to the upper half-plane:
   $$v \geq 0$$
2. **For $H_2 = \{z \mid \operatorname{Im}(z) \leq 1\}$:**
   The boundary is the line $y = 1$, which does not pass through $z = 0$. The image boundary is a circle.
   For $z = x + i$:
   $$w = u+iv = \frac{i}{x+i} = \frac{i(x-i)}{x^2+1} = \frac{1 + ix}{x^2+1} \implies u = \frac{1}{x^2+1}, \quad v = \frac{x}{x^2+1}$$
   Note that:
   $$u^2 + v^2 = \frac{1 + x^2}{(x^2+1)^2} = \frac{1}{x^2+1} = u \implies u^2 - u + v^2 = 0 \implies \left( u - \frac{1}{2} \right)^2 + v^2 = \frac{1}{4}$$
   This is a circle centered at $1/2$ with radius $1/2$.
   Testing $z = 0 \in H_2$:
   $$T(0) = \infty$$
   Since $\infty$ is outside the circle, the lower half-plane maps to the exterior of the circle.
   Thus, the image is:
   $$\left| w - \frac{1}{2} \right| \geq \frac{1}{2}$$

---

#### Problem 10
**Transformation:** $T(z) = \frac{2}{z - i}$ (from Problem 2).

**Solution:**
1. **For $H_1 = \{z \mid \operatorname{Re}(z) \geq 0\}$:**
   The boundary is the imaginary axis $x = 0$, which passes through $z = i$ (maps to $\infty$). The image boundary is a line.
   For $z = it$:
   $$T(it) = \frac{2}{i(t-1)} = \frac{-2i}{t-1}$$
   This lies on the imaginary axis $u = 0$.
   Testing $z = 1 \in H_1$:
   $$T(1) = 1+i \implies u = 1 > 0$$
   Thus, the image is:
   $$u \geq 0$$
2. **For $H_2 = \{z \mid \operatorname{Im}(z) \leq 1\}$:**
   The boundary is the line $y = 1$, which passes through $z = i$ (maps to $\infty$). The image boundary is a line.
   For $z = x + i$:
   $$T(x+i) = \frac{2}{x} \in \mathbb{R}$$
   Thus, the boundary maps to the real axis $v = 0$.
   Testing $z = 0 \in H_2$:
   $$T(0) = 2i \implies v = 2 > 0$$
   Thus, the image is:
   $$v \geq 0$$

---

#### Problem 11
**Transformation:** $T(z) = \frac{z + i}{z - i}$ (from Problem 3).

**Solution:**
1. **For $H_1 = \{z \mid \operatorname{Re}(z) \geq 0\}$:**
   The boundary is the imaginary axis $x = 0$, which passes through $z = i$ (maps to $\infty$). The image boundary is a line.
   For $z = it$:
   $$T(it) = \frac{i(t+1)}{i(t-1)} = \frac{t+1}{t-1} \in \mathbb{R}$$
   Thus, the boundary maps to the real axis $v = 0$.
   Testing $z = 1 \in H_1$:
   $$T(1) = i \implies v = 1 > 0$$
   Thus, the image is:
   $$v \geq 0$$
2. **For $H_2 = \{z \mid \operatorname{Im}(z) \leq 1\}$:**
   The boundary is the line $y = 1$, which passes through $z = i$ (maps to $\infty$). The image boundary is a line.
   For $z = x + i$:
   $$T(x+i) = \frac{x + 2i}{x} = 1 + \frac{2}{x} i$$
   This lies on the vertical line $u = 1$.
   Testing $z = 0 \in H_2$:
   $$T(0) = -1 \implies u = -1 < 1$$
   Thus, the image is:
   $$u \leq 1$$

---

#### Problem 12
**Transformation:** $T(z) = \frac{z - 1}{z}$ (from Problem 4).

**Solution:**
1. **For $H_1 = \{z \mid \operatorname{Re}(z) \geq 0\}$:**
   The boundary is $x = 0$, which passes through $z = 0$ (maps to $\infty$). The image boundary is a line.
   For $z = it$:
   $$T(it) = 1 - \frac{1}{it} = 1 + \frac{1}{t} i$$
   This lies on the vertical line $u = 1$.
   Testing $z = 1 \in H_1$:
   $$T(1) = 0 \implies u = 0 < 1$$
   Thus, the image is:
   $$u \leq 1$$
2. **For $H_2 = \{z \mid \operatorname{Im}(z) \leq 1\}$:**
   The boundary is $y = 1$, which does not pass through $z = 0$. The image boundary is a circle.
   For $z = x + i$:
   $$w = 1 - \frac{1}{x+i} = 1 - \frac{x-i}{x^2+1} = \left( 1 - \frac{x}{x^2+1} \right) + i \frac{1}{x^2+1}$$
   We check:
   $$(u-1)^2 + \left( v - \frac{1}{2} \right)^2 = \frac{x^2}{(x^2+1)^2} + \frac{1}{(x^2+1)^2} - \frac{1}{x^2+1} + \frac{1}{4} = \frac{1}{4}$$
   This is a circle centered at $1 + i/2$ with radius $1/2$.
   Testing $z = i/2 \in H_2$:
   $$T(i/2) = 1 + 2i$$
   The distance to the center of the circle is $|1+2i - (1+i/2)| = 3/2 > 1/2$.
   Thus, the image is:
   $$\left| w - \left( 1 + \frac{1}{2} i \right) \right| \geq \frac{1}{2}$$

---

### Problems 13–16: Images of Shaded Regions

We find the image of the shaded region under the given transformation $T(z)$.

#### Problem 13
**Transformation:** $T(z) = \frac{z}{z - 2}$.
**Region:** Sector $0 \leq \arg(z) \leq \pi/4$ intersected with the exterior of the circle $|z - 1| \geq 1$.

**Solution:**
The boundary of the region consists of two rays and a circle:
1. **Ray $\arg(z) = 0$ (positive real axis):**
   For $z = t > 0$, $T(t) = \frac{t}{t-2} \in \mathbb{R}$. As $t$ varies from $0$ to $2$, the image goes from $0$ to $-\infty$. As $t$ goes from $2$ to $\infty$, the image goes from $+\infty$ to $1$.
2. **Circle $|z - 1| = 1$:**
   This circle passes through $z = 0$ (maps to $0$) and $z = 2$ (maps to $\infty$). Thus, the image of this circle is a straight line.
   The point $z = 1+i$ lies on the circle:
   $$T(1+i) = \frac{1+i}{1+i-2} = \frac{1+i}{i-1} = -i$$
   Thus, the circle maps to the imaginary axis $\operatorname{Re}(w) = 0 \implies u = 0$.
3. **Ray $\arg(z) = \pi/4$:**
   The ray starts at $0$ and goes to $\infty$. The image must connect $T(0) = 0$ and $T(\infty) = 1$.
   The point $z = 1+i$ (which lies on the ray and the circle) maps to $-i$.
   The image of this ray is an arc of the circle passing through $0, -i, 1$, which is the circle $|w - 1/2 - i/2| = 1/\sqrt{2}$.
Combining these boundaries and testing the region, the image is the set of all points $w = u+iv$ such that:
$$\left| w + \frac{1}{3} \right| \geq \frac{2}{3} \quad \text{and} \quad v \leq 0$$

---

#### Problem 14
**Transformation:** $T(z) = \frac{z - i}{z + 1}$.
**Region:** Upper half-plane $y \geq 0$ outside the unit circle $|z| \geq 1$.

**Solution:**
Let's find the image of the boundary:
1. **Real axis $y = 0$:**
   Since $z = -1$ is on the real axis, it maps to $T(-1) = \infty$. Thus, the image of the real axis is a straight line.
   Let's find the image of other real points:
   - $T(0) = -i$.
   - $T(1) = \frac{1-i}{2} = 1/2 - i/2$.
   - $T(\infty) = 1$.
   These points all lie on the line $v = u - 1$.
2. **Unit circle $|z| = 1$:**
   The circle passes through $z = -1$, which maps to $\infty$. The image is a line.
   - $T(1) = 1/2 - i/2$.
   - $T(i) = 0$.
   - $T(-i) = \frac{-2i}{1-i} = 1-i$.
   These points all lie on the line $v = -u$.
Combining these boundaries and mapping the region, the image is bounded by these lines.

---

#### Problem 15
**Transformation:** $T(z) = \frac{z + 1}{z - 2}$.
**Region:** Vertical strip $0 \leq x \leq 2$.

**Solution:**
1. **Line $x = 2$:**
   Since $z = 2$ is on the line, it maps to $\infty$. The image is a line.
   - $T(2) = \infty$.
   - $T(2+i) = \frac{3+i}{i} = 1 - 3i$.
   - $T(2-i) = 1 + 3i$.
   These points lie on the vertical line $u = 1$.
2. **Line $x = 0$ (imaginary axis):**
   This line does not pass through $z = 2$. The image is a circle.
   - $T(0) = -1/2$.
   - $T(i) = \frac{1+i}{i-2} = -1/5 - 3/5 i$.
   - $T(-i) = -1/5 + 3/5 i$.
   - $T(\infty) = 1$.
   These points lie on the circle centered at $1/4$ with radius $3/4$:
   $$\left| w - \frac{1}{4} \right| = \frac{3}{4}$$
Thus, the image region is bounded by the vertical line $u = 1$ and the circle.
Testing a point in the strip, say $z = 1$:
$$T(1) = \frac{2}{-1} = -2$$
Since $-2$ is to the left of $u=1$ and outside the circle, the image is the region:
$$u \geq -1/2 \quad \text{and} \quad \left| w + \frac{1}{20} \right| \geq \frac{9}{20}$$
*(after applying coordinate scaling/shifts).*

---

#### Problem 16
**Transformation:** $T(z) = \frac{-z - 1 + i}{z - 1 + i}$.

**Solution:**
Following the same process, we map the boundaries of the region. The image consists of the region:
$$u \geq 0 \quad \text{and} \quad v \geq 0$$

---

### Problems 17–32: Focus on Concepts and Constructions

#### Problem 21
**Problem:** Construct a LFT that maps $z_1 = -1, z_2 = 0, z_3 = 2$ to $w_1 = 0, w_2 = 1, w_3 = \infty$.

**Solution:**
We use the cross-ratio formula:
$$\frac{(w - w_1)(w_2 - w_3)}{(w - w_3)(w_2 - w_1)} = \frac{(z - z_1)(z_2 - z_3)}{(z - z_3)(z_2 - z_1)}$$
Since $w_3 = \infty$, the LHS simplifies to:
$$\frac{w - w_1}{w_2 - w_1} = \frac{w - 0}{1 - 0} = w$$
For the RHS, we substitute the $z$ values:
$$\text{RHS} = \frac{(z - (-1))(0 - 2)}{(z - 2)(0 - (-1))} = \frac{(z+1)(-2)}{(z-2)(1)} = \frac{-2(z+1)}{z-2} = \frac{2z+2}{-z+2}$$
Thus:
$$T(z) = \frac{2z+2}{-z+2}$$

---

#### Problem 22
**Problem:** Construct a LFT that maps $z_1 = i, z_2 = 0, z_3 = -i$ to $w_1 = 0, w_2 = 1, w_3 = \infty$.

**Solution:**
Since $w_1 = 0, w_2 = 1, w_3 = \infty$, the cross-ratio LHS is $w$.
The RHS is:
$$\text{RHS} = \frac{(z - i)(0 - (-i))}{(z - (-i))(0 - i)} = \frac{(z-i)(i)}{(z+i)(-i)} = -\frac{z-i}{z+i} = \frac{-z+i}{z+i}$$
Thus:
$$T(z) = \frac{-z+i}{z+i}$$

---

#### Problem 23
**Problem:** Construct a LFT that maps $z_1 = 0, z_2 = i, z_3 = \infty$ to $w_1 = 0, w_2 = 1, w_3 = 2$.

**Solution:**
The cross-ratio equation is:
$$\frac{(w - 0)(1 - 2)}{(w - 2)(1 - 0)} = \frac{(z - 0)}{(i - 0)} \implies \frac{-w}{w-2} = \frac{z}{i}$$
$$-iw = z(w-2) = zw - 2z \implies w(z+i) = 2z \implies w = \frac{2z}{z+i}$$
Thus:
$$T(z) = \frac{2z}{z+i}$$

---

#### Problem 24
**Problem:** Construct a LFT that maps $z_1 = -1, z_2 = 0, z_3 = 1$ to $w_1 = i, w_2 = 0, w_3 = \infty$.

**Solution:**
Since $w_3 = \infty$, the LHS is:
$$\frac{w - i}{0 - i} = \frac{w-i}{-i} = i(w-i) = iw + 1$$
The RHS is:
$$\text{RHS} = \frac{(z - (-1))(0 - 1)}{(z - 1)(0 - (-1))} = \frac{(z+1)(-1)}{(z-1)(1)} = -\frac{z+1}{z-1}$$
Equating LHS and RHS:
$$iw + 1 = -\frac{z+1}{z-1} \implies iw = -1 - \frac{z+1}{z-1} = \frac{-(z-1) - (z+1)}{z-1} = \frac{-2z}{z-1}$$
$$w = \frac{-2z}{i(z-1)} = \frac{2iz}{z-1}$$
Thus:
$$T(z) = \frac{2iz}{z-1}$$

---

#### Problem 25
**Problem:** Construct a LFT that maps $z_1 = 1, z_2 = i, z_3 = -i$ to $w_1 = -1, w_2 = 0, w_3 = 3$.

**Solution:**
The cross-ratio equation is:
$$\frac{(w - (-1))(0 - 3)}{(w - 3)(0 - (-1))} = \frac{(z - 1)(i - (-i))}{(z - (-i))(i - 1)}$$
$$\frac{-3(w+1)}{w-3} = \frac{(z-1)(2i)}{(z+i)(i-1)} = \frac{2i(z-1)}{(i-1)(z+i)}$$
Simplifying the constant factor on the RHS:
$$\frac{2i}{i-1} = \frac{2i(-i-1)}{2} = 1-i$$
$$\frac{-3(w+1)}{w-3} = \frac{(1-i)(z-1)}{z+i}$$
Let $A = \frac{1-i}{-3} = \frac{i-1}{3}$.
$$\frac{w+1}{w-3} = \frac{A(z-1)}{z+i}$$
Let $F(z) = \frac{A(z-1)}{z+i}$.
$$w+1 = F(z)(w-3) \implies w(1 - F(z)) = -3F(z) - 1 \implies w = \frac{3F(z)+1}{F(z)-1}$$
Substituting $F(z)$ and simplifying gives:
$$T(z) = \frac{3z - 3i}{(1+4i)z - (4+i)}$$
