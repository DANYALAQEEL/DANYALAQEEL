# Topic 2: Complex Functions and Mappings

## A. Conceptual Foundation
- **Intuitive Explanation:** A complex function $w = f(z)$ maps a point $z (x+iy)$ in the $z$-plane to a point $w (u+iv)$ in the $w$-plane. Because visualizing 4 dimensions (2 for input, 2 for output) is impossible, we study complex functions using mapping figures (showing the $z$-plane and the $w$-plane side-by-side).
- **Formal Definition:** $f(z) = u(x,y) + iv(x,y)$. The real part $u$ and imaginary part $v$ are both real-valued functions of two real variables.

## B. Elementary Mappings

### 1. Linear Mapping: $w = az + b$
This operation consists of a sequence of three geometric transformations:
1. **Rotation:** by the angle $\text{Arg}(a)$.
2. **Magnification (Scaling):** by the factor $|a|$.
3. **Translation (Shift):** by the vector $b$.
*Note:* Linear mappings always map straight lines to straight lines and circles to circles.

### 2. The Reciprocal Mapping: $w = 1/z$
This mapping performs an inversion with respect to the unit circle, followed by a reflection across the real axis.
*Statement:* It has the extraordinary property of mapping circles and lines to circles and lines based strictly on whether they pass through the origin!
- Circle *through* origin $\rightarrow$ Line *not* through origin.
- Line *through* origin $\rightarrow$ Line *through* origin.
- Circle *not* through origin $\rightarrow$ Circle *not* through origin.
- Line *not* through origin $\rightarrow$ Circle *through* origin.

> **🚨 Common Algebra Mistake:**
> When applying $w = 1/z$, to map a region, express $x$ and $y$ in terms of $u$ and $v$ using $z = 1/w \Rightarrow x+iy = \frac{u-iv}{u^2+v^2}$. Plug these back into the original $z$-plane equation!

### 3. Complex Power Mapping: $w = z^n$
For an integer $n \ge 2$, it maps a wedge (sector) of angle $\alpha$ rooted at the origin into a wedge of angle $n\alpha$.
*Geometric effect in Polar Form:* If $z = re^{i\theta}$, then $w = r^n e^{in\theta}$. 
- The radius is raised to the mathematical power of $n$.
- The angle is multiplied by $n$.

## C. Problem-Solving Framework

### Technique: Mapping a Region through $w = f(z)$
1. Identify the boundary lines/curves of the domain in the $z$-plane (e.g., $x=0$, $y=0$, $y=1-x$).
2. Take boundary equations and paramaterize them. (e.g., For $x=0$, $z = iy$).
3. Plug the parameterized boundary into $w = f(z)$ to find $u$ and $v$.
4. Eliminate the parameter to find a relationship between $u$ and $v$ (this is the new boundary curve in the $w$-plane).
5. Use test points to determine which side of the boundary forms the mapped region.

## D. Fully Solved Examples

### Example 1 (Exam-Level)
**Map the vertical strip $0 < x < 1$ under the reciprocal mapping $w = 1/z$.**
**Step 1:** The boundaries are the line $L_1$: $x=0$ (imaginary axis) and the line $L_2$: $x=1$.
**Step 2:** Setup coordinate substitution:
$z = \frac{1}{w} \Rightarrow x + iy = \frac{u}{u^2+v^2} - i\frac{v}{u^2+v^2}$
Thus $x = \frac{u}{u^2+v^2}$ and $y = \frac{-v}{u^2+v^2}$.
**Step 3:** Map boundary $L_1$ ($x=0$):
$0 = \frac{u}{u^2+v^2} \Rightarrow u=0$. (This is the $v$-axis).
**Step 4:** Map boundary $L_2$ ($x=1$):
$1 = \frac{u}{u^2+v^2} \Rightarrow u^2 - u + v^2 = 0$.
Complete the square: $(u - 1/2)^2 + v^2 = (1/2)^2$.
This is a circle centered at $(1/2, 0)$ with radius $1/2$.
**Step 5:** Determine the mapped region. 
Test a point strictly inside the strip: $z = 0.5$. 
Map it: $w = 1/0.5 = 2$.
In the $w$ plane, $w=2$ corresponds to $u=2, v=0$.
Wait, $(2 - 0.5)^2 + 0 = 2.25 > 0.25$. So $w=2$ lies OUTSIDE the circle $(u-1/2)^2 + v^2 = (1/2)^2$ and to the right of $u=0$.
Therefore, the mapped image is the region $u>0$ excluding the interior of the circle $(u-1/2)^2 + v^2 \le (1/2)^2$.

## E. Quick Recall Summary
- To find mapping of boundaries smoothly, convert $w = f(z)$ backwards to $z = f^{-1}(w)$ whenever possible, mapping $(u,v)$ cleanly back to the origin constraints $(x,y)$.
- Any linear map $az+b$ is just stretch/rotate/shift. It doesn't radically bend the plane.
- Mappings that rely on angles ($z^n$) must be incredibly careful not to exceed $2\pi$ unless representing multiple sheets (Riemann surfaces, generally out of scope for basic courses).
