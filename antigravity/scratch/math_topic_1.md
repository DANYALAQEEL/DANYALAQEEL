# Topic 1: Algebra and Topology of Complex Numbers

## A. Conceptual Foundation
- **Intuitive Explanation:** A complex number $z = x + iy$ extends the real number line into a 2D plane (the Argand plane), where the $x$-axis holds real numbers and the $y$-axis holds imaginary numbers ($i^2 = -1$).
- **Formal Definition:** The set of complex numbers $\mathbb{C}$ is the set of ordered pairs $(x, y)$ of real numbers with specific addition and multiplication rules.
- **Geometric Interpretation:** Every complex number is a vector from the origin $(0,0)$ to the point $(x,y)$. The distance from the origin is the **modulus** $|z|$, and the angle with the positive real axis is the **argument** $\arg(z)$.

> **🚨 Conceptual Trap:**
> The Principal Argument $\text{Arg}(z)$ is strictly restricted to $(-\pi, \pi]$. Be extremely careful when using calculators for $\tan^{-1}(y/x)$, as standard arc-tangent only returns values in $(-\pi/2, \pi/2)$. Always adjust according to the quadrant of $z$.

## B. Theorems Section

### 1. The Triangle Inequality
**Statement:** For any $z_1, z_2 \in \mathbb{C}$, $|z_1 + z_2| \le |z_1| + |z_2|$
*Application:* Crucial for establishing upper bounds on complex integrals and limits. 

### 2. De Moivre's Theorem
**Statement:** For any real number $\theta$ and integer $n$: 
$(\cos \theta + i\sin \theta)^n = \cos(n\theta) + i\sin(n\theta)$
*Application:* Used to calculate arbitrarily large powers of complex numbers and importantly, to extract the $n$-th roots of a complex number.

## C. Problem-Solving Framework

### Technique: Finding the $n$-th roots of a complex number $z$
1. **Convert to Polar Form:** Write the number as $z = r(\cos \theta + i\sin \theta)$.
2. **Apply General De Moivre's for Roots:**
   $z_k = r^{1/n} \left( \cos\left(\frac{\theta + 2k\pi}{n}\right) + i\sin\left(\frac{\theta + 2k\pi}{n}\right) \right)$
3. **Iterate:** Evaluate for $k = 0, 1, 2, ..., n-1$. 
4. **Geometric Check:** Ensure all $n$ roots form a regular $n$-gon centered at the origin inscribed in a circle of radius $r^{1/n}$.

## D. Fully Solved Examples

### Example 1 (Intermediate Level)
**Compute the three cube roots of $z = -8i$.**
- **Step 1:** Modulus $r = |-8i| = 8$. Angle is on the negative imaginary axis, so $\theta = -\pi/2$.
- **Step 2:** Apply root formula for $n=3$:
  $w_k = 8^{1/3} \left[ \cos\left(\frac{-\pi/2 + 2k\pi}{3}\right) + i\sin\left(\frac{-\pi/2 + 2k\pi}{3}\right) \right]$
- **Step 3:** Evaluate.
  - $k=0: w_0 = 2 [\cos(-\pi/6) + i\sin(-\pi/6)] = 2 \left(\frac{\sqrt{3}}{2} - i\frac{1}{2}\right) = \sqrt{3} - i$
  - $k=1: w_1 = 2 [\cos(\pi/2) + i\sin(\pi/2)] = 2[0 + i] = 2i$
  - $k=2: w_2 = 2 [\cos(7\pi/6) + i\sin(7\pi/6)] = 2 \left(-\frac{\sqrt{3}}{2} - i\frac{1}{2}\right) = -\sqrt{3} - i$

## E. Topology of Complex Numbers

> **✨ Exam Favorite:**
> Identifying open, closed, or bounded sets from an inequality.

**Definitions to Memorize:**
- **Neighborhood:** An open disk of radius $\epsilon$ centered at $z_0$: $|z - z_0| < \epsilon$.
- **Interior Point:** A point $z_0$ in set $S$ is an interior point if there exists a neighborhood of $z_0$ completely contained within $S$.
- **Boundary Point:** Every neighborhood of $z_0$ contains at least one point in $S$ and at least one point not in $S$.
- **Open Set:** A set where *every* point is an interior point. (e.g., $|z| < 1$)
- **Closed Set:** A set that contains *all* of its boundary points. (e.g., $|z| \le 1$)
- **Domain:** An open, connected set. (A region is a domain together with some, none, or all of its boundary points).

## F. Quick Recall Summary
- $z \cdot \bar{z} = |z|^2 = x^2 + y^2$. This is incredibly useful for clearing complex numbers from the denominator!
- $\text{Arg}(z)$ is strictly in $(-\pi, \pi]$.
- Euler's Formula: $e^{i\theta} = \cos \theta + i\sin \theta$.
