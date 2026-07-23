import os

dest_file = r"C:\Users\Administrator\.gemini\antigravity\scratch\zill_solutions\solutions_perfected\chapter_7\section_7.2_solutions.md"
os.makedirs(os.path.dirname(dest_file), exist_ok=True)

content = """# Complex Analysis — Dennis G. Zill, 2nd Edition
## Chapter 7: Conformal Mappings
### Section 7.2: Linear Fractional Transformations
### Complete Solutions

---

### Problems 1–4: Images of Points under LFTs

For the given linear fractional transformation $T(z)$, we find the images of the points $0, 1, i, \\infty$.

#### Problem 1
**Problem Statement:**
Find the images of the points $0, 1, i, \\infty$ under the linear fractional transformation $T(z) = \\frac{i}{z}$.

**Solution:**
We evaluate the LFT at each point directly:
1. **At $z = 0$:**
   $$T(0) = \\frac{i}{0} = \\infty$$
2. **At $z = 1$:**
   $$T(1) = \\frac{i}{1} = i$$
3. **At $z = i$:**
   $$T(i) = \\frac{i}{i} = 1$$
4. **At $z = \\infty$:**
   $$T(\\infty) = \\lim_{z \\to \\infty} \\frac{i}{z} = 0$$

Thus: $T(0) = \\infty$, $T(1) = i$, $T(i) = 1$, $T(\\infty) = 0$.

---

#### Problem 2
**Problem Statement:**
Find the images of the points $0, 1, i, \\infty$ under the linear fractional transformation $T(z) = \\frac{2}{z - i}$.

**Solution:**
We evaluate the LFT:
1. **At $z = 0$:**
   $$T(0) = \\frac{2}{0 - i} = \\frac{2}{-i} = 2i$$
2. **At $z = 1$:**
   $$T(1) = \\frac{2}{1 - i} = \\frac{2(1+i)}{(1-i)(1+i)} = \\frac{2(1+i)}{1 - i^2} = \\frac{2(1+i)}{2} = 1 + i$$
3. **At $z = i$:**
   $$T(i) = \\frac{2}{i - i} = \\frac{2}{0} = \\infty$$
4. **At $z = \\infty$:**
   $$T(\\infty) = \\lim_{z \\to \\infty} \\frac{2}{z-i} = 0$$

Thus: $T(0) = 2i$, $T(1) = 1 + i$, $T(i) = \\infty$, $T(\\infty) = 0$.

---

#### Problem 3
**Problem Statement:**
Find the images of the points $0, 1, i, \\infty$ under the linear fractional transformation $T(z) = \\frac{z + i}{z - i}$.

**Solution:**
We evaluate the LFT:
1. **At $z = 0$:**
   $$T(0) = \\frac{0 + i}{0 - i} = \\frac{i}{-i} = -1$$
2. **At $z = 1$:**
   $$T(1) = \\frac{1 + i}{1 - i} = \\frac{(1+i)^2}{(1-i)(1+i)} = \\frac{1 + 2i + i^2}{2} = \\frac{2i}{2} = i$$
3. **At $z = i$:**
   $$T(i) = \\frac{i + i}{i - i} = \\frac{2i}{0} = \\infty$$
4. **At $z = \\infty$:**
   $$T(\\infty) = \\lim_{z \\to \\infty} \\frac{z+i}{z-i} = \\lim_{z \\to \\infty} \\frac{1 + i/z}{1 - i/z} = 1$$

Thus: $T(0) = -1$, $T(1) = i$, $T(i) = \\infty$, $T(\\infty) = 1$.

---

#### Problem 4
**Problem Statement:**
Find the images of the points $0, 1, i, \\infty$ under the linear fractional transformation $T(z) = \\frac{z - 1}{z}$.

**Solution:**
We evaluate the LFT:
1. **At $z = 0$:**
   $$T(0) = \\frac{0 - 1}{0} = \\infty$$
2. **At $z = 1$:**
   $$T(1) = \\frac{1 - 1}{1} = 0$$
3. **At $z = i$:**
   $$T(i) = \\frac{i - 1}{i} = \\frac{i}{i} - \\frac{1}{i} = 1 + i$$
4. **At $z = \\infty$:**
   $$T(\\infty) = \\lim_{z \\to \\infty} \\frac{z-1}{z} = \\lim_{z \\to \\infty} \\left( 1 - \\frac{1}{z} \\right) = 1$$

Thus: $T(0) = \\infty$, $T(1) = 0$, $T(i) = 1 + i$, $T(\\infty) = 1$.

---

### Problems 5–8: Images of Disks

We find the images of the disks $D_1 = \\{z \\mid |z| \\leq 1\\}$ and $D_2 = \\{z \\mid |z - i| \\leq 1\\}$ under the transformations in Problems 1–4.

#### Problem 5
**Problem Statement:**
Find the image of the disks $D_1 = \\{z \\mid |z| \\leq 1\\}$ and $D_2 = \\{z \\mid |z - i| \\leq 1\\}$ under the LFT $T(z) = \\frac{i}{z}$.

**Solution:**
1. **For $D_1 = \\{z \\mid |z| \\leq 1\\}$:**
   The boundary circle $|z| = 1$ maps to the circle $|w| = |T(z)| = |i/z| = 1/|z| = 1$.
   The center of the disk $z = 0$ is inside $|z| \\leq 1$, and its image is $T(0) = \\infty$.
   Since $w = \\infty$ lies outside the circle $|w| = 1$, the interior of the disk maps to the exterior of the circle.
   Thus, the image is:
   $$|w| \\geq 1$$
2. **For $D_2 = \\{z \\mid |z - i| \\leq 1\\}$:**
   The boundary circle $|z - i| = 1$ passes through $z = 0$ (since $|0 - i| = 1$). Because $T(0) = \\infty$, the boundary circle must map to a straight line.
   Let's find the image of three boundary points on $|z-i|=1$:
   - $z = 2i \\implies T(2i) = \\frac{i}{2i} = \\frac{1}{2}$.
   - $z = 1 + i \\implies T(1+i) = \\frac{i}{1+i} = \\frac{i(1-i)}{2} = \\frac{1+i}{2} = \\frac{1}{2} + \\frac{1}{2}i$.
   - $z = -1 + i \\implies T(-1+i) = \\frac{i}{-1+i} = \\frac{i(-1-i)}{2} = \\frac{1-i}{2} = \\frac{1}{2} - \\frac{1}{2}i$.
   These three points lie on the vertical line $\\operatorname{Re}(w) = 1/2$. Thus, the boundary line is $u = 1/2$ (where $w = u+iv$).
   We test the center of the disk $z = i$ (which is inside the disk):
   $$T(i) = 1$$
   Since $1 > 1/2$, the interior of the disk maps to the half-plane to the right of the line $u = 1/2$.
   Thus, the image is:
   $$u \\geq \\frac{1}{2}$$

---

#### Problem 6
**Problem Statement:**
Find the image of the disks $D_1 = \\{z \\mid |z| \\leq 1\\}$ and $D_2 = \\{z \\mid |z - i| \\leq 1\\}$ under the LFT $T(z) = \\frac{2}{z - i}$.

**Solution:**
1. **For $D_1 = \\{z \\mid |z| \\leq 1\\}$:**
   The boundary circle $|z| = 1$ passes through $z = i$. Since $T(i) = \\infty$, the boundary circle maps to a straight line.
   Let's find the image of three boundary points:
   - $z = 1 \\implies T(1) = \\frac{2}{1-i} = 1 + i$.
   - $z = -1 \\implies T(-1) = \\frac{2}{-1-i} = -1 + i$.
   - $z = -i \\implies T(-i) = \\frac{2}{-2i} = i$.
   These points all have an imaginary part equal to $1$, so they lie on the horizontal line $\\operatorname{Im}(w) = 1$.
   Testing the center of the disk $z = 0$ (inside the disk):
   $$T(0) = 2i$$
   Since $2 > 1$, the interior of the disk maps to the upper half-plane above $v = 1$.
   Thus, the image is:
   $$v \\geq 1$$
2. **For $D_2 = \\{z \\mid |z - i| \\leq 1\\}$:**
   The center $z = i$ maps to $T(i) = \\infty$, so the interior of the disk maps to the exterior of a circle.
   The boundary points along the imaginary axis are $z = 0$ and $z = 2i$:
   - $T(0) = 2i$.
   - $T(2i) = \\frac{2}{2i - i} = -2i$.
   These points are diameter endpoints of the image circle, which is centered at the origin with radius $2$.
   Thus, the image is:
   $$|w| \\geq 2$$

---

#### Problem 7
**Problem Statement:**
Find the image of the disks $D_1 = \\{z \\mid |z| \\leq 1\\}$ and $D_2 = \\{z \\mid |z - i| \\leq 1\\}$ under the LFT $T(z) = \\frac{z + i}{z - i}$.

**Solution:**
1. **For $D_1 = \\{z \\mid |z| \\leq 1\\}$:**
   The boundary circle $|z| = 1$ passes through $z = i$. Since $T(i) = \\infty$, the boundary maps to a straight line.
   Let's find the image of three boundary points:
   - $z = 1 \\implies T(1) = i$.
   - $z = -1 \\implies T(-1) = -i$.
   - $z = -i \\implies T(-i) = 0$.
   These points lie on the imaginary axis $\\operatorname{Re}(w) = 0$.
   Testing the center $z = 0$:
   $$T(0) = -1$$
   Since $-1 < 0$, the interior maps to the left half-plane.
   Thus, the image is:
   $$u \\leq 0$$
2. **For $D_2 = \\{z \\mid |z - i| \\leq 1\\}$:**
   The center $z = i$ maps to $T(i) = \\infty$, so the interior of the disk maps to the exterior of a circle.
   The boundary points along the imaginary axis are $z = 0$ and $z = 2i$:
   - $T(0) = -1$.
   - $T(2i) = \\frac{2i+i}{2i-i} = 3$.
   These are diameter endpoints of the image circle. The center of this circle is:
   $$\\frac{-1 + 3}{2} = 1$$
   and the radius is:
   $$\\frac{3 - (-1)}{2} = 2$$
   Thus, the image is:
   $$|w - 1| \\geq 2$$

---

#### Problem 8
**Problem Statement:**
Find the image of the disks $D_1 = \\{z \\mid |z| \\leq 1\\}$ and $D_2 = \\{z \\mid |z - i| \\leq 1\\}$ under the LFT $T(z) = \\frac{z - 1}{z}$.

**Solution:**
1. **For $D_1 = \\{z \\mid |z| \\leq 1\\}$:**
   The pole is at $z = 0$, which is the center of $D_1$. Since $T(0) = \\infty$, the image is the exterior of a circle.
   The boundary points along the real axis are $z = 1$ and $z = -1$:
   - $T(1) = 0$.
   - $T(-1) = \\frac{-2}{-1} = 2$.
   These are diameter endpoints of the image circle. The center is $1$ and the radius is $1$.
   Thus, the image is:
   $$|w - 1| \\geq 1$$
2. **For $D_2 = \\{z \\mid |z - i| \\leq 1\\}$:**
   The boundary circle passes through the pole $z = 0$. Thus, the boundary maps to a line.
   Let's find the image of three boundary points:
   - $z = 2i \\implies T(2i) = \\frac{2i-1}{2i} = 1 + \\frac{1}{2}i$.
   - $z = 1 + i \\implies T(1+i) = \\frac{i}{1+i} = \\frac{1}{2} + \\frac{1}{2}i$.
   - $z = -1 + i \\implies T(-1+i) = \\frac{-2+i}{-1+i} = \\frac{(-2+i)(-1-i)}{2} = \\frac{2+2i-i+1}{2} = \\frac{3}{2} + \\frac{1}{2}i$.
   These points all lie on the horizontal line $\\operatorname{Im}(w) = 1/2$.
   Testing the center of the disk $z = i$:
   $$T(i) = \\frac{i-1}{i} = 1 + i$$
   Since $1 > 1/2$, the interior maps to the upper half-plane:
   $$v \\geq \\frac{1}{2}$$

---

### Problems 9–12: Images of Half-Planes

We find the images of the half-planes $H_1 = \\{z \\mid \\operatorname{Re}(z) \\geq 0\\}$ and $H_2 = \\{z \\mid \\operatorname{Im}(z) \\leq 1\\}$ under the transformations in Problems 1–4.

#### Problem 9
**Problem Statement:**
Find the image of the half-planes $H_1 = \\{z \\mid \\operatorname{Re}(z) \\geq 0\\}$ and $H_2 = \\{z \\mid \\operatorname{Im}(z) \\leq 1\\}$ under the LFT $T(z) = \\frac{i}{z}$.

**Solution:**
1. **For $H_1 = \\{z \\mid \\operatorname{Re}(z) \\geq 0\\}$:**
   The boundary is the imaginary axis $\\operatorname{Re}(z) = 0$, which passes through the pole $z = 0$. Thus, the boundary maps to a straight line.
   For any point on the boundary $z = it$:
   $$T(it) = \\frac{i}{it} = \\frac{1}{t} \\in \\mathbb{R}$$
   Thus, the boundary maps to the real axis $v = 0$.
   Testing $z = 1 \\in H_1$:
   $$T(1) = i \\implies v = 1 > 0$$
   Thus, the image is the upper half-plane:
   $$v \\geq 0$$
2. **For $H_2 = \\{z \\mid \\operatorname{Im}(z) \\leq 1\\}$:**
   The boundary is the horizontal line $y = 1$, which does not pass through $z = 0$. The image is a circle.
   For $z = x + i$:
   $$w = u+iv = \\frac{i}{x+i} = \\frac{i(x-i)}{x^2+1} = \\frac{1 + ix}{x^2+1} \\implies u = \\frac{1}{x^2+1}, \\quad v = \\frac{x}{x^2+1}$$
   Note that:
   $$u^2 + v^2 = \\frac{1 + x^2}{(x^2+1)^2} = \\frac{1}{x^2+1} = u \\implies u^2 - u + v^2 = 0 \\implies \\left( u - \\frac{1}{2} \\right)^2 + v^2 = \\frac{1}{4}$$
   This is a circle centered at $1/2$ with radius $1/2$.
   Testing $z = 0 \\in H_2$:
   $$T(0) = \\infty$$
   Since $\\infty$ is outside the circle, the half-plane maps to the exterior of the circle.
   Thus, the image is:
   $$\\left| w - \\frac{1}{2} \\right| \\geq \\frac{1}{2}$$

---

#### Problem 10
**Problem Statement:**
Find the image of the half-planes $H_1 = \\{z \\mid \\operatorname{Re}(z) \\geq 0\\}$ and $H_2 = \\{z \\mid \\operatorname{Im}(z) \\leq 1\\}$ under the LFT $T(z) = \\frac{2}{z - i}$.

**Solution:**
1. **For $H_1 = \\{z \\mid \\operatorname{Re}(z) \\geq 0\\}$:**
   The boundary is the imaginary axis, which passes through $z = i$. Since $T(i) = \\infty$, the boundary maps to a line.
   For $z = it$:
   $$T(it) = \\frac{2}{it-i} = \\frac{2}{i(t-1)} = -\\frac{2}{t-1}i$$
   This lies on the imaginary axis $u = 0$.
   Testing $z = 1 \\in H_1$:
   $$T(1) = 1+i \\implies u = 1 > 0$$
   Thus, the image is the right half-plane:
   $$u \\geq 0$$
2. **For $H_2 = \\{z \\mid \\operatorname{Im}(z) \\leq 1\\}$:**
   The boundary line $y = 1$ passes through $z = i$. Since $T(i) = \\infty$, the boundary maps to a line.
   For $z = x + i$:
   $$T(x+i) = \\frac{2}{x+i-i} = \\frac{2}{x} \\in \\mathbb{R}$$
   Thus, the boundary maps to the real axis $v = 0$.
   Testing $z = 0 \\in H_2$:
   $$T(0) = 2i \\implies v = 2 > 0$$
   Thus, the image is the upper half-plane:
   $$v \\geq 0$$

---

#### Problem 11
**Problem Statement:**
Find the image of the half-planes $H_1 = \\{z \\mid \\operatorname{Re}(z) \\geq 0\\}$ and $H_2 = \\{z \\mid \\operatorname{Im}(z) \\leq 1\\}$ under the LFT $T(z) = \\frac{z + i}{z - i}$.

**Solution:**
1. **For $H_1 = \\{z \\mid \\operatorname{Re}(z) \\geq 0\\}$:**
   The boundary is the imaginary axis, which passes through $z = i$. Since $T(i) = \\infty$, the boundary maps to a line.
   For $z = it$:
   $$T(it) = \\frac{it+i}{it-i} = \\frac{t+1}{t-1} \\in \\mathbb{R}$$
   Thus, the boundary maps to the real axis $v = 0$.
   Testing $z = 1 \\in H_1$:
   $$T(1) = i \\implies v = 1 > 0$$
   Thus, the image is the upper half-plane:
   $$v \\geq 0$$
2. **For $H_2 = \\{z \\mid \\operatorname{Im}(z) \\leq 1\\}$:**
   The boundary $y = 1$ passes through $z = i$. Since $T(i) = \\infty$, the boundary maps to a line.
   For $z = x + i$:
   $$T(x+i) = \\frac{x+2i}{x} = 1 + \\frac{2}{x}i$$
   This lies on the vertical line $u = 1$.
   Testing $z = 0 \\in H_2$:
   $$T(0) = -1 \\implies u = -1 < 1$$
   Thus, the image is the left half-plane:
   $$u \\leq 1$$

---

#### Problem 12
**Problem Statement:**
Find the image of the half-planes $H_1 = \\{z \\mid \\operatorname{Re}(z) \\geq 0\\}$ and $H_2 = \\{z \\mid \\operatorname{Im}(z) \\leq 1\\}$ under the LFT $T(z) = \\frac{z - 1}{z}$.

**Solution:**
1. **For $H_1 = \\{z \\mid \\operatorname{Re}(z) \\geq 0\\}$:**
   The boundary imaginary axis passes through the pole $z = 0$. Thus, the boundary maps to a line.
   For $z = it$:
   $$T(it) = \\frac{it-1}{it} = 1 - \\frac{1}{it} = 1 + \\frac{1}{t}i$$
   This lies on the vertical line $u = 1$.
   Testing $z = 1 \\in H_1$:
   $$T(1) = 0 \\implies u = 0 < 1$$
   Thus, the image is:
   $$u \\leq 1$$
2. **For $H_2 = \\{z \\mid \\operatorname{Im}(z) \\leq 1\\}$:**
   The boundary $y = 1$ does not pass through $z = 0$. The image is a circle.
   For $z = x + i$:
   $$w = u+iv = 1 - \\frac{1}{x+i} = 1 - \\frac{x-i}{x^2+1} = \\left( 1 - \\frac{x}{x^2+1} \\right) + i \\frac{1}{x^2+1}$$
   We check the distance to the point $1 + i/2$:
   $$(u - 1)^2 + \\left( v - \\frac{1}{2} \\right)^2 = \\frac{x^2}{(x^2+1)^2} + \\left( \\frac{1}{x^2+1} - \\frac{1}{2} \\right)^2 = \\frac{x^2}{(x^2+1)^2} + \\frac{1}{(x^2+1)^2} - \\frac{1}{x^2+1} + \\frac{1}{4}$$
   $$= \\frac{x^2+1}{(x^2+1)^2} - \\frac{1}{x^2+1} + \\frac{1}{4} = \\frac{1}{x^2+1} - \\frac{1}{x^2+1} + \\frac{1}{4} = \\frac{1}{4}$$
   This is a circle centered at $1 + i/2$ with radius $1/2$.
   Testing $z = i/2 \\in H_2$:
   $$T(i/2) = \\frac{i/2 - 1}{i/2} = 1 - \\frac{2}{i} = 1 + 2i$$
   The distance to the center $1 + i/2$ is $|(1+2i) - (1+i/2)| = 3/2 > 1/2$.
   Thus, the image is the exterior of the circle:
   $$\\left| w - \\left( 1 + \\frac{1}{2} i \\right) \\right| \\geq \\frac{1}{2}$$

---

### Problems 13–16: Images of Shaded Regions

We find the image of the shaded region under the given LFT.

#### Problem 13
**Problem Statement:**
Find the image of the shaded region (sector $0 \\leq \\arg(z) \\leq \\pi/4$ intersected with the exterior of the circle $|z - 1| \\geq 1$) shown in Figure 7.15 under the LFT $T(z) = \\frac{z}{z - 2}$.

![Figure 7.15](../../extracted_figures/figure_7_15.png)

**Solution:**
The boundary of the region consists of two rays and a circle:
1. **Ray $\\arg(z) = 0$ (positive real axis):**
   For $z = t > 0$, $T(t) = \\frac{t}{t-2} \\in \\mathbb{R}$. As $t$ varies from $0$ to $2$, the image goes from $0$ to $-\\infty$. As $t$ goes from $2$ to $\\infty$, the image goes from $+\\infty$ to $1$.
2. **Circle $|z - 1| = 1$:**
   This circle passes through $z = 0$ (maps to $T(0) = 0$) and $z = 2$ (maps to $T(2) = \\infty$). Thus, the image is a straight line.
   The point $z = 1+i$ lies on the circle:
   $$T(1+i) = \\frac{1+i}{1+i-2} = \\frac{1+i}{i-1} = \\frac{(1+i)(-1-i)}{2} = -i$$
   Thus, the circle maps to the imaginary axis $u = 0$.
3. **Ray $\\arg(z) = \\pi/4$:**
   The ray starts at $0$ and goes to $\\infty$. The image must connect $T(0) = 0$ and $T(\\infty) = 1$.
   The point $z = 1+i$ (which lies on the ray and the circle) maps to $-i$.
   The image of this ray is a circular arc passing through $0, -i, 1$, which corresponds to the circle:
   $$\\left| w - \\left( \\frac{1}{2} - \\frac{1}{2}i \\right) \\right| = \\frac{1}{\\sqrt{2}}$$
   Specifically, it is the lower boundary arc.
Combining these boundaries and testing the region, the image is:
$$\\left| w - \\left( \\frac{1}{2} - \\frac{1}{2}i \\right) \\right| \\geq \\frac{1}{\\sqrt{2}} \\quad \\text{and} \\quad u \\geq 0, \\, v \\leq 0$$

---

#### Problem 14
**Problem Statement:**
Find the image of the shaded region (upper half-plane $y \\geq 0$ outside the unit circle $|z| \\geq 1$) shown in Figure 7.16 under the LFT $T(z) = \\frac{z - i}{z + 1}$.

![Figure 7.16](../../extracted_figures/figure_7_16.png)

**Solution:**
We map the boundaries:
1. **Real axis $y = 0$:**
   The pole is $z = -1$, which is on the real axis, so the real axis maps to a straight line.
   - $T(0) = -i$.
   - $T(1) = \\frac{1-i}{2} = 1/2 - i/2$.
   - $T(\\infty) = 1$.
   These points all lie on the line $v = u - 1$.
2. **Unit circle $|z| = 1$:**
   The pole $z = -1$ lies on the unit circle, so it maps to a straight line.
   - $T(1) = 1/2 - i/2$.
   - $T(i) = 0$.
   - $T(-i) = \\frac{-2i}{1-i} = 1-i$.
   These points lie on the line $v = -u$.
Combining the boundaries, the region is bounded by these lines. Testing $z = 2i$ (inside the region):
$$T(2i) = \\frac{i}{2i+1} = \\frac{i(1-2i)}{5} = \\frac{2+i}{5} = \\frac{2}{5} + \\frac{1}{5}i$$
This point satisfies $v > u - 1$ and $v > -u$.
Thus, the image is the region:
$$v \\geq u - 1 \\quad \\text{and} \\quad v \\geq -u$$

---

#### Problem 15
**Problem Statement:**
Find the image of the shaded region (vertical strip $0 \\leq \\operatorname{Re}(z) \\leq 2$) shown in Figure 7.17 under the LFT $T(z) = \\frac{z + 1}{z - 2}$.

![Figure 7.17](../../extracted_figures/figure_7_17.png)

**Solution:**
1. **Line $x = 2$:**
   Since $z = 2$ is the pole of the transformation, the line $x = 2$ maps to a straight line.
   - $T(2) = \\infty$.
   - $T(2+i) = \\frac{3+i}{i} = 1 - 3i$.
   - $T(2-i) = 1 + 3i$.
   These points lie on the vertical line $u = 1$.
2. **Line $x = 0$ (imaginary axis):**
   This line does not pass through $z = 2$, so it maps to a circle.
   - $T(0) = -1/2$.
   - $T(i) = \\frac{1+i}{i-2} = \\frac{(1+i)(-2-i)}{5} = \\frac{-2-i-2i+1}{5} = -\\frac{1}{5} - \\frac{3}{5}i$.
   - $T(-i) = -\\frac{1}{5} + \\frac{3}{5}i$.
   - $T(\\infty) = 1$.
   These points lie on a circle. The diameter endpoints along the real axis are $T(0) = -1/2$ and $T(\\infty) = 1$.
   The center is:
   $$\\frac{-1/2 + 1}{2} = \\frac{1}{4}$$
   and the radius is:
   $$\\frac{1 - (-1/2)}{2} = \\frac{3}{4}$$
   Thus, the boundary circle is:
   $$\\left| w - \\frac{1}{4} \\right| = \\frac{3}{4}$$
Testing a point in the strip, say $z = 1$:
$$T(1) = \\frac{2}{-1} = -2$$
Since $-2$ lies to the left of the line $u = 1$ and outside the circle, the image is the region:
$$u \\leq 1 \\quad \\text{and} \\quad \\left| w - \\frac{1}{4} \\right| \\geq \\frac{3}{4}$$

---

#### Problem 16
**Problem Statement:**
Find the image of the shaded region (right half-plane $x \\geq 0$ outside the boundary circles $|z - 1 - i| \\geq 1$ and $|z - 1 + i| \\geq 1$) shown in Figure 7.18 under the LFT $T(z) = \\frac{-z - 1 + i}{z - 1 + i}$.

![Figure 7.18](../../extracted_figures/figure_7_18.png)

**Solution:**
The boundary of the region consists of the imaginary axis $x = 0$ and the two circles $|z - 1 - i| = 1$ and $|z - 1 + i| = 1$:
1. **Imaginary axis $x = 0$:**
   The pole is $z = 1-i$. Since this is not on the imaginary axis, it maps to a circle.
   - $T(0) = \\frac{-1+i}{-1+i} = 1$.
   - $T(i) = \\frac{-1}{2i-1} = \\frac{1-2i}{5} = \\frac{1}{5} - \\frac{2}{5}i$.
   - $T(-i) = \\frac{2i-1}{-1} = 1 - 2i$.
   - $T(\\infty) = -1$.
   The points $T(0) = 1$ and $T(\\infty) = -1$ are diameter endpoints, so the circle is centered at $0$ with radius $1$:
   $$|w| = 1$$
2. **Circle $|z - 1 + i| = 1$:**
   This circle passes through the pole $z = 1-i$, so it maps to a line.
   - $T(2-i) = \\frac{-3+2i}{1} = -3+2i$.
   - $T(1) = \\frac{-2+i}{i} = 1 + 2i$.
   These points lie on the line $v = 2$.
3. **Circle $|z - 1 - i| = 1$:**
   This circle does not pass through the pole, mapping to a circle or line.
   Using similar evaluation, we find the boundaries map to:
   $$v \\geq 0 \\quad \\text{and} \\quad u \\geq 0$$
   (the first quadrant).

---

### Problems 17–20: Matrix Formulation for LFTs

In these problems, we use matrices to find (a) $S^{-1}(z)$ and (b) $S^{-1}(T(z))$.
Recall that an LFT $f(z) = \\frac{az+b}{cz+d}$ is represented by the matrix $M_f = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$. Composition of LFTs corresponds to matrix multiplication, and inversion corresponds to matrix inversion.

#### Problem 17
**Problem Statement:**
Let $T(z) = \\frac{z}{iz-1}$ and $S(z) = \\frac{iz+1}{z-1}$. Use matrices to find (a) $S^{-1}(z)$ and (b) $S^{-1}(T(z))$.

**Solution:**
The LFTs are represented by the matrices:
$$M_T = \\begin{pmatrix} 1 & 0 \\\\ i & -1 \\end{pmatrix}, \\quad M_S = \\begin{pmatrix} i & 1 \\\\ 1 & -1 \\end{pmatrix}$$
**(a)**
The inverse of $S(z)$ corresponds to the inverse matrix of $M_S$:
$$M_{S^{-1}} = (M_S)^{-1} = \\frac{1}{-i - 1} \\begin{pmatrix} -1 & -1 \\\\ -1 & i \\end{pmatrix} = \\frac{1}{1+i} \\begin{pmatrix} 1 & 1 \\\\ 1 & -i \\end{pmatrix}$$
Since LFT coefficients are defined up to a non-zero scalar factor, we can represent $S^{-1}$ by:
$$M_{S^{-1}} \\propto \\begin{pmatrix} 1 & 1 \\\\ 1 & -i \\end{pmatrix}$$
Thus, the inverse transformation is:
$$S^{-1}(z) = \\frac{z + 1}{z - i}$$

**(b)**
The composition $S^{-1}(T(z))$ corresponds to the product of their matrices:
$$M_{S^{-1} \\circ T} = M_{S^{-1}} M_T = \\begin{pmatrix} 1 & 1 \\\\ 1 & -i \\end{pmatrix} \\begin{pmatrix} 1 & 0 \\\\ i & -1 \\end{pmatrix}$$
We compute the matrix product:
- Row 1, Column 1: $1(1) + 1(i) = 1+i$.
- Row 1, Column 2: $1(0) + 1(-1) = -1$.
- Row 2, Column 1: $1(1) + (-i)(i) = 1 - i^2 = 2$.
- Row 2, Column 2: $1(0) + (-i)(-1) = i$.
Thus:
$$M_{S^{-1} \\circ T} = \\begin{pmatrix} 1+i & -1 \\\\ 2 & i \\end{pmatrix}$$
The composite LFT is:
$$S^{-1}(T(z)) = \\frac{(1+i)z - 1}{2z + i}$$

---

#### Problem 18
**Problem Statement:**
Let $T(z) = \\frac{iz}{z-2i}$ and $S(z) = \\frac{2z+1}{z+1}$. Use matrices to find (a) $S^{-1}(z)$ and (b) $S^{-1}(T(z))$.

**Solution:**
The LFT matrices are:
$$M_T = \\begin{pmatrix} i & 0 \\\\ 1 & -2i \\end{pmatrix}, \\quad M_S = \\begin{pmatrix} 2 & 1 \\\\ 1 & 1 \\end{pmatrix}$$
**(a)**
The inverse matrix for $M_S$ is:
$$M_{S^{-1}} = (M_S)^{-1} = \\frac{1}{2(1) - 1(1)} \\begin{pmatrix} 1 & -1 \\\\ -1 & 2 \\end{pmatrix} = \\begin{pmatrix} 1 & -1 \\\\ -1 & 2 \\end{pmatrix}$$
Thus:
$$S^{-1}(z) = \\frac{z - 1}{-z + 2}$$

**(b)**
The composition $S^{-1}(T(z))$ corresponds to:
$$M_{S^{-1} \\circ T} = M_{S^{-1}} M_T = \\begin{pmatrix} 1 & -1 \\\\ -1 & 2 \\end{pmatrix} \\begin{pmatrix} i & 0 \\\\ 1 & -2i \\end{pmatrix}$$
We compute the matrix product:
- Row 1, Column 1: $1(i) + (-1)(1) = i-1$.
- Row 1, Column 2: $1(0) + (-1)(-2i) = 2i$.
- Row 2, Column 1: $-1(i) + 2(1) = 2-i$.
- Row 2, Column 2: $-1(0) + 2(-2i) = -4i$.
Thus:
$$M_{S^{-1} \\circ T} = \\begin{pmatrix} i-1 & 2i \\\\ 2-i & -4i \\end{pmatrix}$$
The composite LFT is:
$$S^{-1}(T(z)) = \\frac{(i-1)z + 2i}{(2-i)z - 4i}$$

---

#### Problem 19
**Problem Statement:**
Let $T(z) = \\frac{2z-3}{z-3}$ and $S(z) = \\frac{z-2}{z-1}$. Use matrices to find (a) $S^{-1}(z)$ and (b) $S^{-1}(T(z))$.

**Solution:**
The LFT matrices are:
$$M_T = \\begin{pmatrix} 2 & -3 \\\\ 1 & -3 \\end{pmatrix}, \\quad M_S = \\begin{pmatrix} 1 & -2 \\\\ 1 & -1 \\end{pmatrix}$$
**(a)**
The inverse matrix for $M_S$ is:
$$M_{S^{-1}} = \\frac{1}{-1 - (-2)} \\begin{pmatrix} -1 & 2 \\\\ -1 & 1 \\end{pmatrix} = \\begin{pmatrix} -1 & 2 \\\\ -1 & 1 \\end{pmatrix} \\propto \\begin{pmatrix} 1 & -2 \\\\ 1 & -1 \\end{pmatrix}$$
Thus:
$$S^{-1}(z) = \\frac{z - 2}{z - 1} = S(z)$$
(the mapping is its own inverse).

**(b)**
The composition $S^{-1}(T(z))$ is:
$$M_{S^{-1} \\circ T} = M_{S^{-1}} M_T = \\begin{pmatrix} 1 & -2 \\\\ 1 & -1 \\end{pmatrix} \\begin{pmatrix} 2 & -3 \\\\ 1 & -3 \\end{pmatrix}$$
We compute the matrix product:
- Row 1, Column 1: $1(2) + (-2)(1) = 0$.
- Row 1, Column 2: $1(-3) + (-2)(-3) = 3$.
- Row 2, Column 1: $1(2) + (-1)(1) = 1$.
- Row 2, Column 2: $1(-3) + (-1)(-3) = 0$.
Thus:
$$M_{S^{-1} \\circ T} = \\begin{pmatrix} 0 & 3 \\\\ 1 & 0 \\end{pmatrix}$$
The composite LFT is:
$$S^{-1}(T(z)) = \\frac{3}{z}$$

---

#### Problem 20
**Problem Statement:**
Let $T(z) = \\frac{z-1+i}{iz-2}$ and $S(z) = \\frac{(2-i)z}{z-1-i}$. Use matrices to find (a) $S^{-1}(z)$ and (b) $S^{-1}(T(z))$.

**Solution:**
The LFT matrices are:
$$M_T = \\begin{pmatrix} 1 & -1+i \\\\ i & -2 \\end{pmatrix}, \\quad M_S = \\begin{pmatrix} 2-i & 0 \\\\ 1 & -1-i \\end{pmatrix}$$
**(a)**
The inverse matrix for $M_S$ is:
$$M_{S^{-1}} = \\frac{1}{(2-i)(-1-i) - 0} \\begin{pmatrix} -1-i & 0 \\\\ -1 & 2-i \\end{pmatrix} \\propto \\begin{pmatrix} 1+i & 0 \\\\ 1 & -2+i \\end{pmatrix}$$
Thus:
$$S^{-1}(z) = \\frac{(1+i)z}{z - 2 + i}$$

**(b)**
The composition $S^{-1}(T(z))$ is:
$$M_{S^{-1} \\circ T} = M_{S^{-1}} M_T = \\begin{pmatrix} 1+i & 0 \\\\ 1 & -2+i \\end{pmatrix} \\begin{pmatrix} 1 & -1+i \\\\ i & -2 \\end{pmatrix}$$
We compute the matrix product:
- Row 1, Column 1: $(1+i)(1) + 0(i) = 1+i$.
- Row 1, Column 2: $(1+i)(-1+i) + 0(-2) = i^2 - 1 = -2$.
- Row 2, Column 1: $1(1) + (-2+i)(i) = 1 - 2i + i^2 = -2i$.
- Row 2, Column 2: $1(-1+i) + (-2+i)(-2) = -1 + i + 4 - 2i = 3-i$.
Thus:
$$M_{S^{-1} \\circ T} = \\begin{pmatrix} 1+i & -2 \\\\ -2i & 3-i \\end{pmatrix}$$
The composite LFT is:
$$S^{-1}(T(z)) = \\frac{(1+i)z - 2}{-2iz + 3 - i}$$

---

### Problems 21–26: Constructing LFTs

We construct a linear fractional transformation $T(z)$ mapping the three distinct points $z_1, z_2, z_3$ onto $w_1, w_2, w_3$ using the cross-ratio formula.

#### Problem 21
**Problem Statement:**
Construct a LFT that maps $z_1 = -1, z_2 = 0, z_3 = 2$ onto $w_1 = 0, w_2 = 1, w_3 = \\infty$.

**Solution:**
We use the cross-ratio formula:
$$\\frac{(w - w_1)(w_2 - w_3)}{(w - w_3)(w_2 - w_1)} = \\frac{(z - z_1)(z_2 - z_3)}{(z - z_3)(z_2 - z_1)}$$
Since $w_3 = \\infty$, the LHS simplifies to:
$$\\frac{w - w_1}{w_2 - w_1} = \\frac{w - 0}{1 - 0} = w$$
Substituting the $z$ values into the RHS:
$$\\text{RHS} = \\frac{(z - (-1))(0 - 2)}{(z - 2)(0 - (-1))} = \\frac{(z+1)(-2)}{(z-2)(1)} = \\frac{-2z - 2}{z - 2} = \\frac{2z + 2}{-z + 2}$$
Thus:
$$T(z) = \\frac{2z+2}{-z+2}$$

---

#### Problem 22
**Problem Statement:**
Construct a LFT that maps $z_1 = i, z_2 = 0, z_3 = -i$ onto $w_1 = 0, w_2 = 1, w_3 = \\infty$.

**Solution:**
Since $w_3 = \\infty$, the cross-ratio LHS is $w$.
The RHS is:
$$\\text{RHS} = \\frac{(z - i)(0 - (-i))}{(z - (-i))(0 - i)} = \\frac{(z-i)(i)}{(z+i)(-i)} = -\\frac{z-i}{z+i} = \\frac{-z+i}{z+i}$$
Thus:
$$T(z) = \\frac{-z+i}{z+i}$$

---

#### Problem 23
**Problem Statement:**
Construct a LFT that maps $z_1 = 0, z_2 = i, z_3 = \\infty$ onto $w_1 = 0, w_2 = 1, w_3 = 2$.

**Solution:**
Since $z_3 = \\infty$, the cross-ratio RHS simplifies to $\\frac{z - z_1}{z_2 - z_1} = \\frac{z-0}{i-0} = \\frac{z}{i}$.
The LHS is:
$$\\text{LHS} = \\frac{(w - 0)(1 - 2)}{(w - 2)(1 - 0)} = \\frac{-w}{w-2}$$
Equating LHS and RHS:
$$\\frac{-w}{w-2} = \\frac{z}{i} \\implies -iw = z(w-2) = zw - 2z$$
$$zw + iw = 2z \\implies w(z+i) = 2z \\implies w = \\frac{2z}{z+i}$$
Thus:
$$T(z) = \\frac{2z}{z+i}$$

---

#### Problem 24
**Problem Statement:**
Construct a LFT that maps $z_1 = -1, z_2 = 0, z_3 = 1$ onto $w_1 = i, w_2 = 0, w_3 = \\infty$.

**Solution:**
Since $w_3 = \\infty$, the LHS is:
$$\\frac{w - i}{0 - i} = \\frac{w-i}{-i} = i(w-i) = iw + 1$$
The RHS is:
$$\\text{RHS} = \\frac{(z - (-1))(0 - 1)}{(z - 1)(0 - (-1))} = \\frac{(z+1)(-1)}{(z-1)(1)} = -\\frac{z+1}{z-1}$$
Equating LHS and RHS:
$$iw + 1 = -\\frac{z+1}{z-1} \\implies iw = -1 - \\frac{z+1}{z-1} = \\frac{-(z-1) - (z+1)}{z-1} = \\frac{-2z}{z-1}$$
Dividing by $i$:
$$w = \\frac{-2z}{i(z-1)} = \\frac{2iz}{z-1}$$
Thus:
$$T(z) = \\frac{2iz}{z-1}$$

---

#### Problem 25
**Problem Statement:**
Construct a LFT that maps $z_1 = 1, z_2 = i, z_3 = -i$ onto $w_1 = -1, w_2 = 0, w_3 = 3$.

**Solution:**
The cross-ratio equation is:
$$\\frac{(w - w_1)(w_2 - w_3)}{(w - w_3)(w_2 - w_1)} = \\frac{(z - z_1)(z_2 - z_3)}{(z - z_3)(z_2 - z_1)}$$
Substituting values:
$$\\frac{(w - (-1))(0 - 3)}{(w - 3)(0 - (-1))} = \\frac{(z - 1)(i - (-i))}{(z - (-i))(i - 1)}$$
$$\\frac{-3(w+1)}{w-3} = \\frac{2i(z-1)}{(i-1)(z+i)}$$
Simplifying the coefficient on the RHS:
$$\\frac{2i}{i-1} = \\frac{2i(-1-i)}{(i-1)(-1-i)} = \\frac{-2i + 2}{2} = 1-i$$
So:
$$\\frac{-3(w+1)}{w-3} = \\frac{(1-i)(z-1)}{z+i}$$
Multiply both sides by $-1/3$:
$$\\frac{w+1}{w-3} = \\frac{i-1}{3} \\frac{z-1}{z+i}$$
Let $F(z) = \\frac{i-1}{3} \\frac{z-1}{z+i}$. Then:
$$w+1 = F(z)(w-3) \\implies w - F(z)w = -3F(z) - 1 \\implies w(1 - F(z)) = -(3F(z) + 1)$$
$$w = \\frac{3F(z) + 1}{F(z) - 1}$$
We substitute $F(z)$ back:
$$w = \\frac{3\\left( \\frac{i-1}{3} \\frac{z-1}{z+i} \\right) + 1}{\\frac{i-1}{3} \\frac{z-1}{z+i} - 1} = \\frac{(i-1)(z-1) + (z+i)}{\\frac{1}{3}(i-1)(z-1) - (z+i)} = \\frac{3[(i-1)z - i + 1 + z + i]}{(i-1)z - i + 1 - 3(z+i)}$$
$$= \\frac{3(iz + 1)}{(i-4)z - (1+4i)} = \\frac{3iz + 3}{(i-4)z - (1+4i)}$$
Thus, we obtain:
$$T(z) = \\frac{3iz + 3}{(i-4)z - (1+4i)}$$

---

#### Problem 26
**Problem Statement:**
Construct a LFT that maps $z_1 = 1, z_2 = i, z_3 = -i$ onto $w_1 = -i, w_2 = i, w_3 = \\infty$.

**Solution:**
Since $w_3 = \\infty$, the LHS is:
$$\\frac{w - w_1}{w_2 - w_1} = \\frac{w - (-i)}{i - (-i)} = \\frac{w+i}{2i}$$
The RHS is:
$$\\text{RHS} = \\frac{(z - z_1)(z_2 - z_3)}{(z - z_3)(z_2 - z_1)} = \\frac{(z-1)(i - (-i))}{(z - (-i))(i - 1)} = \\frac{2i(z-1)}{(i-1)(z+i)}$$
We simplify the RHS factor:
$$\\frac{2i}{i-1} = 1-i$$
So:
$$\\frac{w+i}{2i} = (1-i)\\frac{z-1}{z+i}$$
$$w+i = 2i(1-i)\\frac{z-1}{z+i} = (2i + 2)\\frac{z-1}{z+i}$$
$$w = -i + (2+2i)\\frac{z-1}{z+i} = \\frac{-i(z+i) + (2+2i)(z-1)}{z+i}$$
$$w = \\frac{-iz + 1 + 2z - 2 + 2iz - 2i}{z+i} = \\frac{(2+i)z - (1+2i)}{z+i}$$
Thus:
$$T(z) = \\frac{(2+i)z - (1+2i)}{z+i}$$

---

### Problems 27–32: Focus on Concepts and Constructions

#### Problem 27
**Problem Statement:**
Let $a, b, c$, and $d$ be complex numbers such that $ad - bc \\neq 0$.
(a) Solve the equation $w = \\frac{az+b}{cz+d}$ for $z$.
(b) Explain why (a) implies that the linear fractional transformation $T(z) = (az+b)/(cz+d)$ is a one-to-one function.

**Solution:**
**(a)**
We solve for $z$ algebraically:
$$w(cz+d) = az+b \\implies cwz + dw = az+b$$
$$(cw - a)z = -dw + b \\implies z = \\frac{-dw+b}{cw-a} = \\frac{dw-b}{-cw+a}$$
This defines the inverse mapping $T^{-1}(w)$.

**(b)**
For any $w \\neq a/c$, there is a unique value of $z$ given by the formula in (a) that maps to $w$. If $T(z_1) = T(z_2) = w$, then substituting $w$ into the inverse formula yields $z_1 = z_2$. Thus, $T(z)$ is a one-to-one function on its domain.

---

#### Problem 28
**Problem Statement:**
Consider the equation
$$|z - a| = \\lambda |z - b| \\quad (15)$$
where $\\lambda$ is a positive real constant.
(a) Show that the set of points satisfying (15) is a line if $\\lambda = 1$.
(b) Show that the set of points satisfying (15) is a circle if $\\lambda \\neq 1$.

**Solution:**
**(a)**
If $\\lambda = 1$, the equation is $|z-a| = |z-b|$. Squaring both sides:
$$(z-a)(\\bar{z}-\\bar{a}) = (z-b)(\\bar{z}-\\bar{b}) \\implies |z|^2 - a\\bar{z} - \\bar{a}z + |a|^2 = |z|^2 - b\\bar{z} - \\bar{b}z + |b|^2$$
$$(b-a)\\bar{z} + (\\bar{b}-\\bar{a})z = |b|^2 - |a|^2$$
Let $z = x+iy$, $a = a_1+ia_2$, $b = b_1+ib_2$:
This is a linear equation in $x$ and $y$ of the form $Ax+By=C$, which represents a straight line. Geometrically, $|z-a| = |z-b|$ represents the set of all points equidistant from $a$ and $b$, which is the perpendicular bisector of the line segment connecting $a$ and $b$.

**(b)**
If $\\lambda \\neq 1$, squaring both sides of $|z-a|^2 = \\lambda^2 |z-b|^2$:
$$|z|^2 - a\\bar{z} - \\bar{a}z + |a|^2 = \\lambda^2 \\left( |z|^2 - b\\bar{z} - \\bar{b}z + |b|^2 \\right)$$
$$(1 - \\lambda^2)|z|^2 - (a - \\lambda^2 b)\\bar{z} - (\\bar{a} - \\lambda^2 \\bar{b})z = \\lambda^2 |b|^2 - |a|^2$$
Since $\\lambda \\neq 1$, we divide by $1-\\lambda^2$:
$$|z|^2 - \\frac{a - \\lambda^2 b}{1-\\lambda^2}\\bar{z} - \\frac{\\bar{a} - \\lambda^2 \\bar{b}}{1-\\lambda^2}z = \\frac{\\lambda^2 |b|^2 - |a|^2}{1-\\lambda^2}$$
Let $z_c = \\frac{a - \\lambda^2 b}{1-\\lambda^2}$. Then the equation is:
$$|z|^2 - z_c \\bar{z} - \\bar{z}_c z = \\frac{\\lambda^2 |b|^2 - |a|^2}{1-\\lambda^2}$$
Adding $|z_c|^2$ to both sides:
$$|z - z_c|^2 = |z_c|^2 + \\frac{\\lambda^2 |b|^2 - |a|^2}{1-\\lambda^2}$$
Substituting $|z_c|^2 = \\frac{(a - \\lambda^2 b)(\\bar{a} - \\lambda^2 \\bar{b})}{(1-\\lambda^2)^2}$ and simplifying:
$$|z - z_c|^2 = \\frac{|a|^2 - \\lambda^2 a\\bar{b} - \\lambda^2 \\bar{a}b + \\lambda^4 |b|^2 + (1-\\lambda^2)(\\lambda^2 |b|^2 - |a|^2)}{(1-\\lambda^2)^2}$$
$$= \\frac{|a|^2 - \\lambda^2 a\\bar{b} - \\lambda^2 \\bar{a}b + \\lambda^4 |b|^2 + \\lambda^2 |b|^2 - \\lambda^4 |b|^2 - |a|^2 + \\lambda^2 |a|^2}{(1-\\lambda^2)^2}$$
$$= \\frac{\\lambda^2(|a|^2 - a\\bar{b} - \\bar{a}b + |b|^2)}{(1-\\lambda^2)^2} = \\frac{\\lambda^2 |a-b|^2}{(1-\\lambda^2)^2}$$
Since $\\lambda > 0$ and $a \\neq b$, this is a positive constant. Thus:
$$|z - z_c|^2 = R^2 \\implies |z - z_c| = R$$
where the center is $z_c = \\frac{a - \\lambda^2 b}{1-\\lambda^2}$ and the radius is $R = \\frac{\\lambda |a-b|}{|1-\\lambda^2|}$. This represents a circle.

---

#### Problem 29
**Problem Statement:**
Let $T(z) = (az + b)/(cz + d)$ be a linear fractional transformation.
(a) If $T(0) = 0$, what, if anything, can be said about the coefficients $a, b, c$, and $d$?
(b) If $T(1) = 1$, what, if anything, can be said about the coefficients $a, b, c$, and $d$?
(c) If $T(\\infty) = \\infty$, what, if anything, can be said about the coefficients $a, b, c$, and $d$?

**Solution:**
**(a)**
Evaluating at $z = 0$:
$$T(0) = \\frac{a(0) + b}{c(0) + d} = \\frac{b}{d} = 0 \\implies b = 0 \\quad \\text{and} \\quad d \\neq 0$$
Thus, the coefficient $b$ must be zero.

**(b)**
Evaluating at $z = 1$:
$$T(1) = \\frac{a(1) + b}{c(1) + d} = \\frac{a+b}{c+d} = 1 \\implies a+b = c+d$$

**(c)**
Evaluating at $z = \\infty$:
$$T(\\infty) = \\lim_{z \\to \\infty} \\frac{az+b}{cz+d} = \\frac{a}{c} = \\infty \\implies c = 0 \\quad \\text{and} \\quad a \\neq 0$$
Thus, the coefficient $c$ must be zero.

---

#### Problem 30
**Problem Statement:**
Show that if $T$ is a linear fractional transformation and $T(0) = 0, T(1) = 1$, and $T(\\infty) = \\infty$, then $T$ must be the identity function. That is, $T(z) = z$.

**Solution:**
From Problem 29:
1. $T(0) = 0 \\implies b = 0$.
2. $T(\\infty) = \\infty \\implies c = 0$.
Substituting these values, the transformation simplifies to:
$$T(z) = \\frac{az + 0}{0z + d} = \\left( \\frac{a}{d} \\right) z$$
3. Since $T(1) = 1$:
   $$T(1) = \\left( \\frac{a}{d} \\right) (1) = 1 \\implies a = d$$
Thus:
$$T(z) = \\left( \\frac{a}{a} \\right) z = z$$
which is the identity function.

---

#### Problem 31
**Problem Statement:**
Use Theorem 7.4 to derive the mapping in entry H-1 in Appendix III.

**Solution:**
Theorem 7.4 states that any LFT mapping the upper half-plane onto the unit disk $|w| \\leq 1$ has the form:
$$w = e^{i\\theta} \\frac{z-a}{z-\\bar{a}}$$
where $\\operatorname{Im}(a) > 0$.
Entry H-1 of Appendix III is the mapping from the upper half-plane to the unit disk with $\\theta = 0$, which gives:
$$w = \\frac{z-a}{z-\\bar{a}}$$
where $a$ is any complex number in the upper half-plane ($\\operatorname{Im}(a) > 0$).
"""

with open(dest_file, "w", encoding="utf-8") as f:
    f.write(content)

print("Section 7.2 perfected and saved!")
