# Complex Analysis — Dennis G. Zill, 2nd Edition
## Chapter 2 · Section 2.3 — Linear Mappings
### Problems 1 – 35 · Complete Solutions

---

> **Key Concepts of Linear Mappings**
>
> 1. **Complex Linear Function:** Defined as $f(z) = az + b$ for complex constants $a$ and $b$ with $a \ne 0$.
> 2. **Decomposition:** A linear mapping can be expressed as a composition of simpler mappings:
>    $$f(z) = (T \circ M \circ R)(z)$$
>    where:
>    * **Rotation:** $R(z) = e^{i\theta_0} z$ (where $\theta_0 = \operatorname{Arg}(a)$)
>
> ![Figure 2.10](../../extracted_figures/figure_2_10.png)
>
>    * **Magnification:** $M(z) = |a| z$
>
> ![Figure 2.12](../../extracted_figures/figure_2_12.png)
>
>    * **Translation:** $T(z) = z + b$
>
> ![Figure 2.8](../../extracted_figures/figure_2_8.png)
>
> 3. **Shape Preservation:** Linear mappings can rotate, scale, and translate a geometric figure, but they always preserve its similarity (i.e., they preserve angles and the basic shape of the figure).
> 
> ![Figure 2.16](../../extracted_figures/figure_2_16.png)
>
> 4. **Fixed Point:** A point $z_0$ is a fixed point of a mapping $f$ if $f(z_0) = z_0$. For a nonidentity linear mapping $f(z) = az + b$, there is a unique fixed point $z_0 = \frac{b}{1-a}$ (if $a \ne 1$).

---

## Problems 1 – 6

**For the given linear mapping $w = f(z)$: (a) find the image of the closed disk $|z| \le 1$, and (b) describe the action of the mapping.**

#### Problem 1
Consider the linear mapping $f(z) = z + 3i$.
(a) Find the image of the closed disk $|z| \le 1$.
(b) Describe the action of the mapping.

**Solution:**
**(a) Find the image:**
1. The mapping is of the form $f(z) = z + b$ with $b = 3i$, which is a pure translation.
2. The center of the disk shifts from $z_c = 0$ to $w_c = z_c + 3i = 3i$.
3. The radius of the disk remains unchanged ($R = 1$).
Thus, the image disk is:
$$\boxed{|w - 3i| \le 1}$$

**(b) Action:**
A translation vertically upwards by 3 units in the complex plane.

---

#### Problem 2
Consider the linear mapping $f(z) = z + 2 - i$.
(a) Find the image of the closed disk $|z| \le 1$.
(b) Describe the action of the mapping.

**Solution:**
**(a) Find the image:**
1. The mapping is of the form $f(z) = z + b$ with $b = 2 - i$.
2. The center of the disk shifts to $w_c = 2 - i$.
3. The radius remains $R = 1$.

![Figure 2.9](../../extracted_figures/figure_2_9.png)

Thus, the image disk is:
$$\boxed{|w - (2 - i)| \le 1}$$

**(b) Action:**
A translation to the right by 2 units and downwards by 1 unit.

---

#### Problem 3
Consider the linear mapping $f(z) = 3iz$.
(a) Find the image of the closed disk $|z| \le 1$.
(b) Describe the action of the mapping.

**Solution:**
**(a) Find the image:**
1. The mapping is of the form $f(z) = az$ with $a = 3i$.
2. Find the polar representation of $a$:
   $$|a| = |3i| = 3 \quad \text{and} \quad \theta_0 = \operatorname{Arg}(3i) = \frac{\pi}{2}$$
   So $a = 3e^{i\pi/2}$.
3. The magnification factor is $|a| = 3$, which scales the radius of the unit disk from $1$ to $3$.
4. The rotation is by $\pi/2$, which rotates the disk but leaves its shape unchanged since it is centered at the origin.

![Figure 2.13](../../extracted_figures/figure_2_13.png)

Thus, the image disk is:
$$\boxed{|w| \le 3}$$

**(b) Action:**
A rotation counterclockwise about the origin by $\pi/2$ radians ($90^\circ$), followed by a magnification by a factor of 3.

---

#### Problem 4
Consider the linear mapping $f(z) = (1 + i)z$.
(a) Find the image of the closed disk $|z| \le 1$.
(b) Describe the action of the mapping.

**Solution:**
**(a) Find the image:**
1. The mapping is $f(z) = az$ with $a = 1 + i$.
2. Find the polar representation of $a$:
   $$|a| = |1+i| = \sqrt{1^2+1^2} = \sqrt{2}$$
   $$\theta_0 = \operatorname{Arg}(1+i) = \arctan(1/1) = \frac{\pi}{4}$$
   So $a = \sqrt{2} e^{i\pi/4}$.
3. The magnification scales the radius of the disk from $1$ to $\sqrt{2}$.
Thus, the image disk is:
$$\boxed{|w| \le \sqrt{2}}$$

**(b) Action:**
A rotation counterclockwise about the origin by $\pi/4$ radians ($45^\circ$), followed by a magnification by a factor of $\sqrt{2}$.

---

#### Problem 5
Consider the linear mapping $f(z) = 2z - i$.
(a) Find the image of the closed disk $|z| \le 1$.
(b) Describe the action of the mapping.

**Solution:**
**(a) Find the image:**
1. The mapping is $f(z) = az + b$ with $a = 2$ and $b = -i$.
2. The magnification factor is $|a| = 2$. First, the disk $|z| \le 1$ is magnified to $|z| \le 2$.
3. The translation by $b = -i$ shifts the center of this expanded disk from $0$ to $-i$.
Thus, the image disk is:
$$\boxed{|w + i| \le 2}$$

**(b) Action:**
A magnification by a factor of 2 (doubling the size), followed by a translation downwards by 1 unit.

---

#### Problem 6
Consider the linear mapping $f(z) = (6 - 5i)z + 1 - 3i$.
(a) Find the image of the closed disk $|z| \le 1$.
(b) Describe the action of the mapping.

**Solution:**
**(a) Find the image:**
1. The mapping is $f(z) = az + b$ with $a = 6 - 5i$ and $b = 1 - 3i$.
2. The magnification factor is:
   $$|a| = |6 - 5i| = \sqrt{6^2 + (-5)^2} = \sqrt{36 + 25} = \sqrt{61}$$
3. The translation by $b = 1 - 3i$ shifts the center from $0$ to $1 - 3i$.
Thus, the image disk is:
$$\boxed{|w - (1 - 3i)| \le \sqrt{61}}$$

**(b) Action:**
A rotation clockwise about the origin by $\operatorname{Arg}(6-5i) = \arctan(-5/6) \approx -0.695$ radians (or $-39.8^\circ$), a magnification by a factor of $\sqrt{61} \approx 7.81$, and then a translation by $1 - 3i$.

---

## Problems 7 – 12

**Find the image of the triangle with vertices $0, 1,$ and $i$ under the given linear mapping $w = f(z)$.**

*Since linear mappings map straight lines to straight lines and preserve angles, the boundary lines of the triangle are mapped to straight line segments. Therefore, we only need to compute the images of the three vertices.*

#### Problem 7
Find the image of the triangle under $f(z) = z + 2i$.

**Solution:**
1. Map the vertices:
   $$f(0) = 0 + 2i = 2i$$
   $$f(1) = 1 + 2i$$
   $$f(i) = i + 2i = 3i$$
Thus, the image is the triangle with vertices:
$$\boxed{2i, \quad 1 + 2i, \quad 3i}$$

---

#### Problem 8
Find the image of the triangle under $f(z) = 3z$.

**Solution:**
1. Map the vertices:
   $$f(0) = 3(0) = 0$$
   $$f(1) = 3(1) = 3$$
   $$f(i) = 3(i) = 3i$$
Thus, the image is the triangle with vertices:
$$\boxed{0, \quad 3, \quad 3i}$$

---

#### Problem 9
Find the image of the triangle under $f(z) = e^{i\pi/4}z$.

**Solution:**
1. Map the vertices:
   $$f(0) = 0$$
   $$f(1) = e^{i\pi/4}(1) = \cos(\pi/4) + i\sin(\pi/4) = \frac{\sqrt{2}}{2} + i\frac{\sqrt{2}}{2}$$
   $$f(i) = e^{i\pi/4}(i) = e^{i\pi/4} e^{i\pi/2} = e^{i3\pi/4} = \cos(3\pi/4) + i\sin(3\pi/4) = -\frac{\sqrt{2}}{2} + i\frac{\sqrt{2}}{2}$$

![Figure 2.11](../../extracted_figures/figure_2_11.png)

Thus, the image is the triangle with vertices:
$$\boxed{0, \quad \frac{\sqrt{2}}{2} + i\frac{\sqrt{2}}{2}, \quad -\frac{\sqrt{2}}{2} + i\frac{\sqrt{2}}{2}}$$

---

#### Problem 10
Find the image of the triangle under $f(z) = \frac{1}{2i}z$.

**Solution:**
1. Simplify the coefficient:
   $$a = \frac{1}{2i} = -\frac{i}{2}$$
2. Map the vertices:
   $$f(0) = 0$$
   $$f(1) = -\frac{i}{2}(1) = -\frac{1}{2}i$$
   $$f(i) = -\frac{i}{2}(i) = -\frac{i^2}{2} = \frac{1}{2}$$
Thus, the image is the triangle with vertices:
$$\boxed{0, \quad \frac{1}{2}, \quad -\frac{1}{2}i}$$

---

#### Problem 11
Find the image of the triangle under $f(z) = -3z + i$.

**Solution:**
1. Map the vertices:
   $$f(0) = -3(0) + i = i$$
   $$f(1) = -3(1) + i = -3 + i$$
   $$f(i) = -3(i) + i = -2i$$
Thus, the image is the triangle with vertices:
$$\boxed{i, \quad -3 + i, \quad -2i}$$

---

#### Problem 12
Find the image of the triangle under $f(z) = (1 - i)z - 2$.

**Solution:**
1. Map the vertices:
   $$f(0) = (1-i)(0) - 2 = -2$$
   $$f(1) = (1-i)(1) - 2 = 1 - i - 2 = -1 - i$$
   $$f(i) = (1-i)(i) - 2 = i - i^2 - 2 = i + 1 - 2 = -1 + i$$
Thus, the image is the triangle with vertices:
$$\boxed{-2, \quad -1 - i, \quad -1 + i}$$

---

## Problems 13 – 16

**Express the given linear mapping $w = f(z)$ as a composition of a rotation, magnification, and a translation. Then describe the action in words.**

#### Problem 13
Express $f(z) = 3iz + 4$ as a composition.

**Solution:**
1. Here $a = 3i$ and $b = 4$.
2. Express $a$ in polar coordinates:
   $$|a| = 3, \quad \operatorname{Arg}(a) = \frac{\pi}{2} \implies a = 3e^{i\pi/2}$$
3. The composition is $f(z) = T(M(R(z)))$ where:
   * **Rotation:** $R(z) = e^{i\pi/2} z$ (rotation by $\pi/2$ radians counterclockwise)
   * **Magnification:** $M(z) = 3z$ (scaling by 3)
   * **Translation:** $T(z) = z + 4$ (shift right by 4)
* **Action:** The mapping rotates the point counterclockwise by $90^\circ$ about the origin, magnifies its distance from the origin by a factor of 3, and then translates it 4 units to the right.

---

#### Problem 14
Express $f(z) = 5 \left( \cos \frac{\pi}{5} + i \sin \frac{\pi}{5} \right) z + 7i$ as a composition.

**Solution:**
1. Here $a = 5e^{i\pi/5}$ and $b = 7i$.
2. We identify:
   * $|a| = 5$, and $\operatorname{Arg}(a) = \frac{\pi}{5}$.
3. The composition is $f(z) = T(M(R(z)))$ where:
   * **Rotation:** $R(z) = e^{i\pi/5}z$ (rotation by $\pi/5$ radians counterclockwise)
   * **Magnification:** $M(z) = 5z$ (scaling by 5)
   * **Translation:** $T(z) = z + 7i$ (shift upwards by 7)
* **Action:** The mapping rotates the point counterclockwise by $36^\circ$ about the origin, magnifies its distance from the origin by a factor of 5, and then translates it 7 units upwards.

---

#### Problem 15
Express $f(z) = -\frac{1}{2}z + 1 - \sqrt{3}i$ as a composition.

**Solution:**
1. Here $a = -\frac{1}{2}$ and $b = 1 - \sqrt{3}i$.
2. Express $a$ in polar coordinates:
   $$|a| = \frac{1}{2}, \quad \operatorname{Arg}(a) = \pi \implies a = \frac{1}{2}e^{i\pi}$$
3. The composition is $f(z) = T(M(R(z)))$ where:
   * **Rotation:** $R(z) = e^{i\pi}z = -z$ (rotation by $\pi$ radians)
   * **Magnification:** $M(z) = \frac{1}{2}z$ (scaling by $1/2$)
   * **Translation:** $T(z) = z + 1 - \sqrt{3}i$ (shift by $1 - \sqrt{3}i$)
* **Action:** The mapping rotates the point by $180^\circ$ about the origin (or reflects it through the origin), contracts its distance from the origin by a factor of $1/2$, and then translates it by $1 - \sqrt{3}i$ (1 unit right, $\sqrt{3}$ units down).

---

#### Problem 16
Express $f(z) = (3 - 2i)z + 12$ as a composition.

**Solution:**
1. Here $a = 3 - 2i$ and $b = 12$.
2. Find polar form of $a$:
   * Modulus: $|a| = \sqrt{3^2 + (-2)^2} = \sqrt{9 + 4} = \sqrt{13}$
   * Argument: $\theta_0 = \operatorname{Arg}(3-2i) = \arctan(-2/3) \approx -0.588$ radians (or $-33.69^\circ$).
3. The composition is $f(z) = T(M(R(z)))$ where:
   * **Rotation:** $R(z) = e^{-i\arctan(2/3)}z$ (rotation by $\approx 33.69^\circ$ clockwise)
   * **Magnification:** $M(z) = \sqrt{13}z$ (scaling by $\sqrt{13} \approx 3.61$)
   * **Translation:** $T(z) = z + 12$ (shift right by 12)
* **Action:** The mapping rotates the point clockwise by $\approx 33.69^\circ$ about the origin, magnifies its distance from the origin by a factor of $\sqrt{13}$, and then translates it 12 units to the right.

---

## Problems 17 – 22

**Find a linear mapping $f(z) = az + b$ that maps the set $S$ onto the set $S'$.**

#### Problem 17
Find a linear mapping that maps the triangle $S$ with vertices $0, 1, 1+i$ onto the triangle $S'$ with vertices $2i, 3i, -1+3i$.

**Solution:**
Let $f(z) = az + b$. We map the vertices:
1. Map the origin $0 \in S$ to $2i \in S'$:
   $$f(0) = a(0) + b = 2i \implies b = 2i$$
2. Map the vertex $1 \in S$ to $3i \in S'$:
   $$f(1) = a(1) + 2i = 3i \implies a = 3i - 2i = i$$
3. Let's check the third vertex $1+i$:
   $$f(1+i) = i(1+i) + 2i = i + i^2 + 2i = -1 + 3i$$
   This matches the third vertex of $S'$ exactly!

![Figure 2.15](../../extracted_figures/figure_2_15.png)

Thus, the linear mapping is:
$$\boxed{f(z) = iz + 2i}$$

---

#### Problem 18
Find a linear mapping that maps the circle $S$: $|z - 1| = 3$ onto the circle $S'$: $|z + i| = 5$.

**Solution:**
1. A circle is mapped to a circle of similar geometry. We can map the center of $S$, which is $z_c = 1$, to the center of $S'$, which is $w_c = -i$.
2. This defines the translation component: $f(z_c) = w_c$.
3. The radius of the circle must be scaled from 3 to 5. This requires a magnification factor of $|a| = 5/3$.
4. Assuming no rotation, we choose $a = 5/3$.
5. We set up the equation:
   $$f(z) = a(z - z_c) + w_c = \frac{5}{3}(z - 1) - i = \frac{5}{3}z - \frac{5}{3} - i$$
6. Let's check the mapping of points:
   $$|z - 1| = 3 \implies \left| \frac{3}{5}(f(z) + i) \right| = 3 \implies \frac{3}{5}|f(z) + i| = 3 \implies |f(z) + i| = 5$$
   This matches the equation of circle $S'$.
Thus, the linear mapping is:
$$\boxed{f(z) = \frac{5}{3}z - \frac{5}{3} - i}$$

---

#### Problem 19
Find a linear mapping that maps the imaginary axis $S$ onto the line $S'$ passing through $i$ and $1 + 2i$.

**Solution:**
1. Let $f(z) = az + b$.
2. The imaginary axis passes through $0$ and $i$. Let's map these points:
   * Map $0 \to i$:
     $$f(0) = a(0) + b = i \implies b = i$$
   * Map $i \to 1+2i$:
     $$f(i) = a(i) + i = 1+2i \implies a(i) = 1+i$$
     Divide by $i$ (which is multiplying by $-i$):
     $$a = \frac{1+i}{i} = \frac{i(1+i)}{i^2} = \frac{i - 1}{-1} = 1 - i$$
3. Let's verify the mapping for any point $z = iy$ on the imaginary axis:
   $$f(iy) = (1-i)(iy) + i = iy - i^2 y + i = y + i(y+1)$$
   The real and imaginary parts of the image are $u = y$ and $v = y+1 \implies v = u+1$.
   The line $v = u+1$ passes through $(0, 1) \implies i$ and $(1, 2) \implies 1+2i$.
Thus, the linear mapping is:
$$\boxed{f(z) = (1-i)z + i}$$

---

#### Problem 20
Find a linear mapping that maps the square $S$ with vertices $1 + i, -1 + i, -1 - i, 1 - i$ onto the square $S'$ with vertices $1, 2 + i, 1 + 2i, i$.

**Solution:**
1. Find the center of square $S$:
   $$z_c = \frac{(1+i) + (-1-i)}{2} = 0$$
2. Find the center of square $S'$:
   $$w_c = \frac{1 + (1+2i)}{2} = 1+i$$
   So the translation of centers is $b = 1+i$.
3. Compute the distances from the centers to the vertices:
   * For $S$: distance from $0$ to $1+i$ is $|1+i| = \sqrt{2}$.
   * For $S'$: distance from $1+i$ to $2+i$ is $|(2+i) - (1+i)| = 1$.
   * The magnification factor is $|a| = \frac{\text{radius of } S'}{\text{radius of } S} = \frac{1}{\sqrt{2}}$.
4. Determine the rotation:
   * The vertex $1+i$ of $S$ has argument $\pi/4$.
   * Its image $2+i$ has a vector from the center $w_c = 1+i$ of:
     $$(2+i) - (1+i) = 1$$
     which has argument $0$.
   * The rotation must turn $\pi/4$ to $0$, which is a rotation by $-\pi/4$.
5. Construct $a$:
   $$a = |a|e^{i\theta_0} = \frac{1}{\sqrt{2}} e^{-i\pi/4} = \frac{1}{\sqrt{2}}\left(\frac{1}{\sqrt{2}} - i\frac{1}{\sqrt{2}}\right) = \frac{1-i}{2}$$
6. Write the mapping:
   $$f(z) = az + b = \frac{1-i}{2}z + 1 + i$$
7. Let's verify for another vertex, say $-1+i$:
   $$f(-1+i) = \frac{1-i}{2}(-1+i) + 1 + i = \frac{-(1-i)^2}{2} + 1 + i$$
   Since $(1-i)^2 = 1 - 2i - 1 = -2i$:
   $$f(-1+i) = -(-2i)/2 + 1 + i = i + 1 + i = 1 + 2i$$
   This matches the vertex $1+2i$ of $S'$!
Thus, the linear mapping is:
$$\boxed{f(z) = \frac{1-i}{2}z + 1 + i}$$

---

#### Problem 21
Find two different linear mappings that map the square $S_1$ with vertices $0, 1, 1+i, i$ onto the square $S_2$ with vertices $-1, 0, i, -1+i$.

**Solution:**
Both squares have side length 1, so the magnification factor is $|a| = 1$.
* **Mapping 1 (Pure translation):**
  We shift the square to the left by 1 unit.
  $$f_1(z) = z - 1$$
  *Verify vertices:* $0 \to -1$, $1 \to 0$, $1+i \to i$, $i \to -1+i$. This matches $S_2$ exactly.
  * **Answer 1:** $\boxed{f_1(z) = z - 1}$
* **Mapping 2 (Pure rotation):**
  We rotate the square counterclockwise by $\pi/2$ about the origin.
  $$f_2(z) = iz$$
  *Verify vertices:* $0 \to 0$, $1 \to i$, $1+i \to -1+i$, $i \to -1$. This matches $S_2$ exactly.
  * **Answer 2:** $\boxed{f_2(z) = iz}$

---

#### Problem 22
Find two different linear mappings that map the half-plane $\operatorname{Re}(z) \ge 2$ onto the half-plane $\operatorname{Re}(z) \ge 5$.

**Solution:**
Let $S = \{z : x \ge 2\}$ and $S' = \{w : u \ge 5\}$.
* **Mapping 1 (Pure translation):**
  We shift the boundary $x=2$ right by 3 units:
  $$f_1(z) = z + 3$$
  *Verify:* $\operatorname{Re}(f_1(z)) = x + 3 \ge 2 + 3 = 5$.
  * **Answer 1:** $\boxed{f_1(z) = z + 3}$
* **Mapping 2 (Magnification and translation):**
  Let $f_2(z) = 2z + b$. The boundary $x=2$ must map to $u=5$.
  $$\operatorname{Re}(f_2(2+iy)) = \operatorname{Re}(4 + 2iy + b) = 4 + \operatorname{Re}(b) = 5 \implies \operatorname{Re}(b) = 1$$
  Choosing $b = 1$, we get:
  $$f_2(z) = 2z + 1$$
  *Verify:* $\operatorname{Re}(f_2(z)) = 2x + 1 \ge 2(2) + 1 = 5$.
  * **Answer 2:** $\boxed{f_2(z) = 2z + 1}$

---

## Problems 23 – 24

#### Problem 23
Let the line segment $C$ be parametrized by $z(t) = z_0(1-t) + z_1 t, 0 \le t \le 1$. Describe in words the image, $C'$, of this segment under:
(a) A translation $T(z) = z + b$
(b) A rotation $R(z) = az, |a| = 1$
(c) A magnification $M(z) = az, a > 0$

**Solution:**
**(a) Translation $T(z) = z + b$:**
1. Substitute the parametrization into $T$:
   $$w(t) = [z_0(1-t) + z_1 t] + b = (z_0 + b)(1-t) + (z_1 + b)t, \quad 0 \le t \le 1$$
2. This is the parametrization of a straight line segment with endpoints $z_0+b$ and $z_1+b$.
* **Description:** The line segment connecting the points $z_0 + b$ and $z_1 + b$.

**(b) Rotation $R(z) = az, |a| = 1$:**
1. Substitute the parametrization:
   $$w(t) = a[z_0(1-t) + z_1 t] = (a z_0)(1-t) + (a z_1)t, \quad 0 \le t \le 1$$
2. This is a straight line segment with endpoints $az_0$ and $az_1$.
* **Description:** The line segment connecting the points $a z_0$ and $a z_1$.

**(c) Magnification $M(z) = az, a > 0$:**
1. Substitute the parametrization:
   $$w(t) = a[z_0(1-t) + z_1 t] = (a z_0)(1-t) + (a z_1)t, \quad 0 \le t \le 1$$
2. This is a straight line segment with endpoints $az_0$ and $az_1$.
* **Description:** The line segment connecting the points $a z_0$ and $a z_1$.

---

#### Problem 24
Let the circle $C$ be parametrized by $z(t) = z_0 + re^{it}, 0 \le t \le 2\pi$. Describe in words the image, $C'$, of this circle under:
(a) A translation $T(z) = z + b$
(b) A rotation $R(z) = az, |a| = 1$ (with $a = e^{i\theta_a}$)
(c) A magnification $M(z) = az, a > 0$

**Solution:**
**(a) Translation $T(z) = z + b$:**
1. Substitute the parametrization:
   $$w(t) = (z_0 + b) + r e^{it}, \quad 0 \le t \le 2\pi$$
2. This represents a circle with radius $r$ centered at $z_0 + b$.
* **Description:** A circle of radius $r$ centered at $z_0 + b$.

**(b) Rotation $R(z) = az, |a| = 1$:**
1. Substitute the parametrization:
   $$w(t) = a(z_0 + r e^{it}) = az_0 + a r e^{it}$$
2. Since $a = e^{i\theta_a}$:
   $$w(t) = az_0 + r e^{i(t + \theta_a)}, \quad 0 \le t \le 2\pi$$
3. This is a circle of radius $r$ centered at $az_0$.
* **Description:** A circle of radius $r$ centered at $a z_0$.

**(c) Magnification $M(z) = az, a > 0$:**
1. Substitute the parametrization:
   $$w(t) = a(z_0 + r e^{it}) = az_0 + (ar) e^{it}, \quad 0 \le t \le 2\pi$$
2. Since $a > 0$, the radius becomes $ar$ and the center becomes $az_0$.
* **Description:** A circle of radius $a r$ centered at $a z_0$.

---

## Problems 25 – 26

#### Problem 25
Show that the following three sequences of linear transformations produce the same final mapping:
(a) Rotation by $\pi/4$, magnification by 2, and translation by $1+i$.
(b) Magnification by 2, translation by $\sqrt{2}$, and rotation by $\pi/4$.
(c) Translation by $\frac{1}{2}\sqrt{2}$, rotation by $\pi/4$, then magnification by 2.
(d) State your observation.

**Solution:**
**(a) Sequence A:**
1. Rotation: $w_1 = e^{i\pi/4}z$.
2. Magnification: $w_2 = 2 w_1 = 2e^{i\pi/4}z$.
3. Translation: $f_a(z) = w_2 + 1 + i = 2e^{i\pi/4}z + 1 + i$.
   Since $2e^{i\pi/4} = 2\left(\frac{\sqrt{2}}{2} + i\frac{\sqrt{2}}{2}\right) = \sqrt{2} + i\sqrt{2}$:
   $$f_a(z) = (\sqrt{2} + i\sqrt{2})z + 1 + i$$

**(b) Sequence B:**
1. Magnification: $w_1 = 2z$.
2. Translation: $w_2 = w_1 + \sqrt{2} = 2z + \sqrt{2}$.
3. Rotation: $f_b(z) = e^{i\pi/4}w_2 = e^{i\pi/4}(2z + \sqrt{2}) = 2e^{i\pi/4}z + \sqrt{2}e^{i\pi/4}$.
   Since $\sqrt{2}e^{i\pi/4} = \sqrt{2}\left(\frac{\sqrt{2}}{2} + i\frac{\sqrt{2}}{2}\right) = 1 + i$:
   $$f_b(z) = (\sqrt{2} + i\sqrt{2})z + 1 + i$$

**(c) Sequence C:**
1. Translation: $w_1 = z + \frac{1}{2}\sqrt{2}$.
2. Rotation: $w_2 = e^{i\pi/4}w_1 = e^{i\pi/4}\left(z + \frac{1}{2}\sqrt{2}\right) = e^{i\pi/4}z + \frac{1}{2}\sqrt{2}e^{i\pi/4}$.
3. Magnification: $f_c(z) = 2w_2 = 2e^{i\pi/4}z + \sqrt{2}e^{i\pi/4}$.
   $$f_c(z) = (\sqrt{2} + i\sqrt{2})z + 1 + i$$

**(d) Observation:**

![Figure 2.14](../../extracted_figures/figure_2_14.png)

All three sequences produce the exact same linear mapping, showing that the order of operations in linear compositions can be rearranged as long as the translation and magnification constants are adjusted accordingly.

---

#### Problem 26
Decompose the linear mapping $f(z) = (1 + \sqrt{3}i)z + i$ into the following orders:
(a) $f(z) = T \circ M \circ R(z)$
(b) $f(z) = M \circ T \circ R(z)$
(c) $f(z) = R \circ M \circ T(z)$
Describe the actions in words.

**Solution:**
First, write the coefficient $a = 1 + \sqrt{3}i$ in polar form:
$$|a| = \sqrt{1^2 + 3} = 2 \quad \text{and} \quad \theta_0 = \operatorname{Arg}(1+\sqrt{3}i) = \arctan(\sqrt{3}) = \frac{\pi}{3}$$
So $a = 2e^{i\pi/3}$.

**(a) $f(z) = T(M(R(z)))$:**
1. Rotation: $R(z) = e^{i\pi/3}z$ (rotate by $\pi/3$ counterclockwise).
2. Magnification: $M(z) = 2z$ (scale by 2).
3. Translation: $T(z) = z + i$ (translate upwards by 1).
* **Action:** Rotate counterclockwise by $60^\circ$, magnify by a factor of 2, then translate vertically upwards by 1 unit.

**(b) $f(z) = M(T(R(z)))$:**
1. Let $M(T(R(z))) = 2(e^{i\pi/3}z + b_0) = 2e^{i\pi/3}z + 2b_0$.
2. For this to equal $f(z) = 2e^{i\pi/3}z + i$, we require:
   $$2b_0 = i \implies b_0 = \frac{i}{2}$$
3. Thus, the components are:
   * Rotation: $R(z) = e^{i\pi/3}z$
   * Translation: $T(z) = z + i/2$
   * Magnification: $M(z) = 2z$
* **Action:** Rotate counterclockwise by $60^\circ$, translate vertically upwards by $1/2$ unit, then magnify by a factor of 2.

**(c) $f(z) = R(M(T(z)))$:**
1. Let $R(M(T(z))) = e^{i\pi/3}(2(z + b_1)) = 2e^{i\pi/3}z + 2e^{i\pi/3}b_1$.
2. For this to equal $f(z) = 2e^{i\pi/3}z + i$, we require:
   $$2e^{i\pi/3}b_1 = i \implies b_1 = \frac{i}{2e^{i\pi/3}} = \frac{1}{2} e^{i(\pi/2 - \pi/3)} = \frac{1}{2}e^{i\pi/6}$$
   $$b_1 = \frac{1}{2}\left(\cos\frac{\pi}{6} + i\sin\frac{\pi}{6}\right) = \frac{\sqrt{3}}{4} + \frac{1}{4}i$$
3. Thus, the components are:
   * Translation: $T(z) = z + \frac{\sqrt{3}}{4} + \frac{1}{4}i$
   * Magnification: $M(z) = 2z$
   * Rotation: $R(z) = e^{i\pi/3}z$
* **Action:** Translate by $\frac{\sqrt{3}}{4} + \frac{1}{4}i$, magnify by a factor of 2, then rotate counterclockwise by $60^\circ$.

---

## Focus on Concepts (Problems 27 – 35)

#### Problem 27
Prove that the composition of:
(a) Two translations is a translation. Is the order important?
(b) Two rotations is a rotation. Is the order important?
(c) Two magnifications is a magnification. Is the order important?

**Solution:**
**(a) Two translations:**
Let $T_1(z) = z + b_1$ and $T_2(z) = z + b_2$.
$$T_2(T_1(z)) = T_2(z + b_1) = (z + b_1) + b_2 = z + (b_1 + b_2)$$
Since $b_1 + b_2$ is a complex constant, this is a translation by $b_1 + b_2$.
Since complex addition is commutative ($b_1 + b_2 = b_2 + b_1$), the order of composition does not matter.

**(b) Two rotations:**
Let $R_1(z) = a_1 z$ and $R_2(z) = a_2 z$ where $|a_1| = |a_2| = 1$.
$$R_2(R_1(z)) = R_2(a_1 z) = a_2(a_1 z) = (a_2 a_1)z$$
Since $|a_2 a_1| = |a_2||a_1| = 1 \cdot 1 = 1$, the product $a_2 a_1$ represents a rotation.
Since complex multiplication is commutative, $a_2 a_1 = a_1 a_2$, so the order of composition does not matter.

**(c) Two magnifications:**
Let $M_1(z) = a_1 z$ and $M_2(z) = a_2 z$ where $a_1, a_2 > 0$ are real numbers.
$$M_2(M_1(z)) = a_2(a_1 z) = (a_2 a_1)z$$
Since $a_1 > 0$ and $a_2 > 0$, the product $a_2 a_1 > 0$ is also a positive real number, representing a magnification.
Since real multiplication is commutative, the order of composition does not matter.

---

#### Problem 28
Determine if the following pairs of transformations commute:
(a) A translation $T(z) = z + b$ (with $b \ne 0$) and a nonidentity rotation $R(z) = az$ (with $a \ne 1$, $|a|=1$).
(b) A translation $T(z) = z + b$ (with $b \ne 0$) and a nonidentity magnification $M(z) = az$ (with $a > 0, a \ne 1$).
(c) A nonidentity rotation and a nonidentity magnification.

**Solution:**
**(a) Translation and Rotation:**
Evaluate both orders:
$$T(R(z)) = az + b$$
$$R(T(z)) = a(z + b) = az + ab$$
For them to commute, we require:
$$az + b = az + ab \implies b = ab \implies b(1-a) = 0$$
Since $b \ne 0$ and $a \ne 1$, this equation has no solutions.
Thus, they **never commute**.

**(b) Translation and Magnification:**
Evaluate both orders:
$$T(M(z)) = az + b$$
$$M(T(z)) = a(z+b) = az + ab$$
As in part (a), for them to commute, we require $b(1-a) = 0$. Since $b \ne 0$ and $a \ne 1$, they **never commute**.

**(c) Rotation and Magnification:**
Let $R(z) = a_1 z$ (with $|a_1|=1$) and $M(z) = a_2 z$ (with $a_2 > 0$).
$$R(M(z)) = a_1(a_2 z) = (a_1 a_2)z$$
$$M(R(z)) = a_2(a_1 z) = (a_2 a_1)z$$
Since complex multiplication is commutative, $a_1 a_2 = a_2 a_1$ for all complex numbers.
Thus, they **always commute**.

---

#### Problem 29
Find a mapping $g(z)$ that represents a reflection across the imaginary axis.

**Solution:**
1. Let $z = x+iy$. Reflection across the imaginary axis maps $(x, y) \to (-x, y)$.
2. Therefore, the image is $w = -x + iy$.
3. We know that the complex conjugate is $\bar{z} = x - iy$.
4. If we negate the conjugate:
   $$-\bar{z} = -(x-iy) = -x + iy$$
   This matches the desired reflection.
Thus, the mapping is:
$$\boxed{g(z) = -\bar{z}}$$

---

#### Problem 30
Describe the geometric steps needed to perform the mapping $w = a\bar{z} + b$ where $a = r e^{i\theta}$ and $b$ is a complex constant.

**Solution:**
We write the mapping as a composition:
$$f(z) = T(M(R(C(z))))$$
where $C(z) = \bar{z}$.
1. **Reflection:** Reflect $z$ across the real axis to obtain $\bar{z}$.
2. **Rotation:** Rotate the result by $\theta$ counterclockwise about the origin to get $e^{i\theta}\bar{z}$.
3. **Magnification:** Magnify the result by a factor of $r$ to get $r e^{i\theta}\bar{z}$.
4. **Translation:** Translate the result by $b$ to get $r e^{i\theta}\bar{z} + b$.

---

#### Problem 31
What can be said about the linear mapping $f(z) = az + b$ if it satisfies $|f(z)| = |z|$ for all $z \in \mathbb{C}$?

**Solution:**
1. Evaluate at $z = 0$:
   $$|f(0)| = |0| = 0$$
   Since $f(0) = a(0) + b = b$, we have:
   $$|b| = 0 \implies b = 0$$
2. Substitute $b = 0$ back into the condition:
   $$|az| = |z| \implies |a||z| = |z| \quad \text{for all } z \in \mathbb{C}$$
3. For $z \ne 0$, divide by $|z|$:
   $$|a| = 1$$
Thus, $f(z)$ must be a **pure rotation centered at the origin** ($f(z) = az$ with $|a| = 1$).

---

#### Problem 32
What can be said about the linear mapping $f(z) = az + b$ if it preserves the distance between any two points, i.e., $|f(z_2) - f(z_1)| = |z_2 - z_1|$ for all $z_1, z_2 \in \mathbb{C}$?

**Solution:**
1. Substitute the formula for $f(z)$ into the distance expression:
   $$|f(z_2) - f(z_1)| = |(a z_2 + b) - (a z_1 + b)| = |a(z_2 - z_1)| = |a| |z_2 - z_1|$$
2. For this to equal $|z_2 - z_1|$ for all pairs of points:
   $$|a| |z_2 - z_1| = |z_2 - z_1| \implies |a| = 1 \quad (\text{assuming } z_1 \ne z_2)$$
3. There are no restrictions on $b$.
Thus, $f(z)$ is a **rigid motion (isometry)**, consisting of a rotation followed by a translation ($f(z) = az + b$ with $|a| = 1$).

---

#### Problem 33
Find the fixed points of the linear mapping $f(z) = az + b$:
(a) Prove that if $a \ne 1$, there is a unique fixed point $z_0 = \frac{b}{1-a}$.
(b) Give an example of a linear mapping with no fixed points.
(c) Give an example of a linear mapping with more than one fixed point.
(d) Prove that if $f(z_0) = z_0$ and $f \circ g = g \circ f$, then $g(z_0)$ is a fixed point of $f$.

**Solution:**
**(a) Proof of unique fixed point:**
A fixed point satisfies $f(z_0) = z_0$:
$$a z_0 + b = z_0 \implies z_0 - a z_0 = b \implies z_0(1-a) = b$$
Since $a \ne 1$, we can divide by $1-a$:
$$z_0 = \frac{b}{1-a}$$
Since $a$ and $b$ are constants, this value is unique.

**(b) Example with no fixed point:**
If $a = 1$ and $b \ne 0$, the equation becomes $z_0(0) = b \implies 0 = b$, which is impossible.
* **Example:** $f(z) = z + 1$ (a pure translation has no fixed points).

**(c) Example with more than one fixed point:**
If $a = 1$ and $b = 0$, the equation is $0 = 0$, which is satisfied for all $z$.
* **Example:** $f(z) = z$ (the identity mapping has infinitely many fixed points).

**(d) Commutativity and fixed points:**
We evaluate $f(g(z_0))$ using the fact that $f \circ g = g \circ f$:
$$f(g(z_0)) = (f \circ g)(z_0) = (g \circ f)(z_0) = g(f(z_0))$$
Since $z_0$ is a fixed point of $f$, we have $f(z_0) = z_0$:
$$f(g(z_0)) = g(z_0)$$
This equation is of the form $f(w) = w$ with $w = g(z_0)$, which proves that $g(z_0)$ is a fixed point of $f$.

---

#### Problem 34
Identify the invariant sets (sets that map onto themselves) under:
(a) A pure rotation $R(z) = az, |a| = 1$ about the origin.
(b) A translation $T(z) = z + b, b \ne 0$.
(c) A magnification $M(z) = az, a > 0, a \ne 1$.

**Solution:**
**(a) Pure rotation $R(z) = az, |a| = 1$:**
Any concentric circle centered at the origin $|z| = R$ is invariant, since rotating a circle about its center maps the circle onto itself. Also, any disk $|z| \le R$ is invariant.

**(b) Translation $T(z) = z + b, b \ne 0$:**
Any straight line parallel to the direction of the translation vector $b$ is invariant. For example, the line $z(t) = z_0 + tb$ (for $t \in \mathbb{R}$) maps to $w(t) = z_0 + (t+1)b$, which represents the same set of points.

**(c) Magnification $M(z) = az, a > 0, a \ne 1$:**
Any straight line passing through the origin is invariant. The line can be written as $z(t) = t e^{i\theta_0}$ (for $t \in \mathbb{R}$). Under magnification, the image points are $w(t) = a t e^{i\theta_0}$. Since $a > 0$, this merely rescales the parameter $t$ and traces the exact same set of points.

---

#### Problem 35
Linear mappings and two-point determination:
(a) Prove that a linear mapping is uniquely determined by the images of two distinct points.
(b) Show that it is not uniquely determined by the image of a single point.

**Solution:**
**(a) Unique determination:**
Let two distinct points be $z_1, z_2$ with $z_1 \ne z_2$. Let their images be $w_1, w_2$:
$$a z_1 + b = w_1$$
$$a z_2 + b = w_2$$
Subtract the two equations:
$$a(z_1 - z_2) = w_1 - w_2$$
Since $z_1 \ne z_2$, we divide by $z_1 - z_2$ to find a unique value for $a$:
$$a = \frac{w_1 - w_2}{z_1 - z_2}$$
Substitute $a$ back into the first equation to find a unique value for $b$:
$$b = w_1 - a z_1 = w_1 - \left(\frac{w_1 - w_2}{z_1 - z_2}\right)z_1 = \frac{w_1 z_1 - w_2 z_1 - w_1 z_1 + w_1 z_2}{z_1 - z_2} = \frac{w_1 z_2 - w_2 z_1}{z_2 - z_1}$$
Since both coefficients $a$ and $b$ are uniquely determined, the linear mapping is unique.

**(b) Single point counterexample:**
Consider two linear mappings $f_1(z) = z$ and $f_2(z) = 2z$.
Both mappings map the point $0$ to $0$:
$$f_1(0) = 0 \quad \text{and} \quad f_2(0) = 0$$
Yet, $f_1 \ne f_2$. Thus, a single point does not uniquely determine a linear mapping.
