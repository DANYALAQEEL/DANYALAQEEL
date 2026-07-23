# Complex Analysis — Dennis G. Zill, 2nd Edition
## Chapter 2 · Section 2.7 — Applications
### Problems 1 – 22 · Complete Solutions

---

> **Key Concepts of Complex Vector Fields and Planar Flows**
>
> 1. **Associated Vector Field:** For a complex function \( f(z) = u(x, y) + i v(x, y) \), the associated vector field is:
>    \[
>    \mathbf{F}(x, y) = u(x, y) \mathbf{i} + v(x, y) \mathbf{j}
>    \]
>    This means that at each point \( z = (x, y) \), we plot a vector with horizontal component \( u(x, y) \) and vertical component \( v(x, y) \).
> 2. **Streamlines:** The streamlines (paths of particles in the flow) satisfy the system:
>    \[
>    \frac{dx}{dt} = u(x, y), \quad \frac{dy}{dt} = v(x, y)
>    \]
>    Or in terms of a single first-order differential equation:
>    \[
>    \frac{dy}{dx} = \frac{v(x, y)}{u(x, y)}
>    \]

---

## Problems 1 – 8: Values in the Vector Field

For each problem, we evaluate the function at \( z = 1, \, 1+i, \, 1-i, \, i \).
* **Part (a):** These values are plotted as position vectors (starting at the origin).
* **Part (b):** These values are plotted with initial point \( z \) (as vectors in the field).

### Problem 1: \( f(z) = 2z - i \)
* **At \( z = 1 \):** \( f(1) = 2 - i \implies \) vector \( (2, -1) \) with initial point \( (1, 0) \).
* **At \( z = 1+i \):** \( f(1+i) = 2 + i \implies \) vector \( (2, 1) \) with initial point \( (1, 1) \).
* **At \( z = 1-i \):** \( f(1-i) = 2 - 3i \implies \) vector \( (2, -3) \) with initial point \( (1, -1) \).
* **At \( z = i \):** \( f(i) = i \implies \) vector \( (0, 1) \) with initial point \( (0, 1) \).

### Problem 2: \( f(z) = z^3 \)
* **At \( z = 1 \):** \( f(1) = 1 \implies \) vector \( (1, 0) \) with initial point \( (1, 0) \).
* **At \( z = 1+i \):** \( f(1+i) = -2 + 2i \implies \) vector \( (-2, 2) \) with initial point \( (1, 1) \).
* **At \( z = 1-i \):** \( f(1-i) = -2 - 2i \implies \) vector \( (-2, -2) \) with initial point \( (1, -1) \).
* **At \( z = i \):** \( f(i) = -i \implies \) vector \( (0, -1) \) with initial point \( (0, 1) \).

### Problem 3: \( f(z) = 1 - z^2 \)
* **At \( z = 1 \):** \( f(1) = 0 \implies \) vector \( (0, 0) \) with initial point \( (1, 0) \).
* **At \( z = 1+i \):** \( f(1+i) = 1 - 2i \implies \) vector \( (1, -2) \) with initial point \( (1, 1) \).
* **At \( z = 1-i \):** \( f(1-i) = 1 + 2i \implies \) vector \( (1, 2) \) with initial point \( (1, -1) \).
* **At \( z = i \):** \( f(i) = 2 \implies \) vector \( (2, 0) \) with initial point \( (0, 1) \).

### Problem 4: \( f(z) = 1/z \)
* **At \( z = 1 \):** \( f(1) = 1 \implies \) vector \( (1, 0) \) with initial point \( (1, 0) \).
* **At \( z = 1+i \):** \( f(1+i) = 1/2 - 1/2 i \implies \) vector \( (1/2, -1/2) \) with initial point \( (1, 1) \).
* **At \( z = 1-i \):** \( f(1-i) = 1/2 + 1/2 i \implies \) vector \( (1/2, 1/2) \) with initial point \( (1, -1) \).
* **At \( z = i \):** \( f(i) = -i \implies \) vector \( (0, -1) \) with initial point \( (0, 1) \).

### Problem 5: \( f(z) = z - 1/z \)
* **At \( z = 1 \):** \( f(1) = 0 \implies \) vector \( (0, 0) \) with initial point \( (1, 0) \).
* **At \( z = 1+i \):** \( f(1+i) = 1/2 + 3/2 i \implies \) vector \( (1/2, 3/2) \) with initial point \( (1, 1) \).
* **At \( z = 1-i \):** \( f(1-i) = 1/2 - 3/2 i \implies \) vector \( (1/2, -3/2) \) with initial point \( (1, -1) \).
* **At \( z = i \):** \( f(i) = 2i \implies \) vector \( (0, 2) \) with initial point \( (0, 1) \).

### Problem 6: \( f(z) = z^{1/2} \) (Principal branch: \( f(z) = \sqrt{r}e^{i\theta/2} \) for \( -\pi < \theta \le \pi \))
* **At \( z = 1 = e^{0} \):** \( f(1) = 1 \implies \) vector \( (1, 0) \) with initial point \( (1, 0) \).
* **At \( z = 1+i = \sqrt{2}e^{i\pi/4} \):** \( f(1+i) = 2^{1/4}e^{i\pi/8} \approx \boxed{1.0987 + 0.4551i} \) with initial point \( (1, 1) \).
* **At \( z = 1-i = \sqrt{2}e^{-i\pi/4} \):** \( f(1-i) = 2^{1/4}e^{-i\pi/8} \approx \boxed{1.0987 - 0.4551i} \) with initial point \( (1, -1) \).
* **At \( z = i = e^{i\pi/2} \):** \( f(i) = e^{i\pi/4} = \frac{\sqrt{2}}{2} + i\frac{\sqrt{2}}{2} \approx \boxed{0.7071 + 0.7071i} \) with initial point \( (0, 1) \).

### Problem 7: \( f(z) = 1/\bar{z} = z/|z|^2 \)
* **At \( z = 1 \):** \( f(1) = 1 \implies \) vector \( (1, 0) \) with initial point \( (1, 0) \).
* **At \( z = 1+i \):** \( f(1+i) = 1/2 + 1/2 i \implies \) vector \( (1/2, 1/2) \) with initial point \( (1, 1) \).
* **At \( z = 1-i \):** \( f(1-i) = 1/2 - 1/2 i \implies \) vector \( (1/2, -1/2) \) with initial point \( (1, -1) \).
* **At \( z = i \):** \( f(i) = i \implies \) vector \( (0, 1) \) with initial point \( (0, 1) \).

### Problem 8: \( f(z) = \log_e |z| + i \operatorname{Arg}(z) \)
* **At \( z = 1 \):** \( f(1) = 0 \implies \) vector \( (0, 0) \) with initial point \( (1, 0) \).
* **At \( z = 1+i \):** \( f(1+i) = \frac{1}{2}\log_e 2 + i\frac{\pi}{4} \approx \boxed{0.3466 + 0.7854i} \) with initial point \( (1, 1) \).
* **At \( z = 1-i \):** \( f(1-i) = \frac{1}{2}\log_e 2 - i\frac{\pi}{4} \approx \boxed{0.3466 - 0.7854i} \) with initial point \( (1, -1) \).
* **At \( z = i \):** \( f(i) = i\frac{\pi}{2} \approx \boxed{1.5708i} \) with initial point \( (0, 1) \).

---

## Problems 9 – 12: Streamlines of Planar Flows

### Problem 9: \( f(z) = 1 - 2i \)
* **(a) Find Streamlines:**
  * \( u(x,y) = 1 \), \( v(x,y) = -2 \).
  * System: \( \frac{dx}{dt} = 1, \, \frac{dy}{dt} = -2 \implies \frac{dy}{dx} = -2 \).
  * Integrating: \( \boxed{y = -2x + c} \).
* **(b) Sketch:** A family of parallel lines with slope \( -2 \).

### Problem 10: \( f(z) = 1/\bar{z} \)
* **(a) Find Streamlines:**
  * \( f(z) = \frac{x+iy}{x^2+y^2} \implies u(x,y) = \frac{x}{x^2+y^2}, \, v(x,y) = \frac{y}{x^2+y^2} \).
  * System: \( \frac{dy}{dx} = \frac{y}{x} \).
  * Integrating: \( \ln|y| = \ln|x| + C \implies \boxed{y = cx} \) (excluding the origin).
* **(b) Sketch:** A family of straight lines passing through the origin.

### Problem 11: \( f(z) = iz \)
* **(a) Find Streamlines:**
  * \( f(z) = i(x+iy) = -y + ix \implies u(x,y) = -y, \, v(x,y) = x \).
  * System: \( \frac{dy}{dx} = -\frac{x}{y} \implies x\,dx + y\,dy = 0 \).
  * Integrating: \( \boxed{x^2 + y^2 = c} \) (with \( c > 0 \)).
* **(b) Sketch:** A family of concentric circles centered at the origin.

### Problem 12: \( f(z) = (1 + i)\bar{z} \)
* **(a) Find Streamlines:**
  * \( f(z) = (1+i)(x-iy) = (x+y) + i(x-y) \implies u(x,y) = x+y, \, v(x,y) = x-y \).
  * System: \( \frac{dy}{dx} = \frac{x-y}{x+y} \).
  * Let \( y = vx \implies v + x v' = \frac{1-v}{1+v} \implies x v' = \frac{1 - 2v - v^2}{1+v} \).
  * Separating variables:
    \[
    \frac{1+v}{1-2v-v^2}\,dv = \frac{1}{x}\,dx \implies -\frac{1}{2}\ln|1-2v-v^2| = \ln|x| + C \implies x^2(1 - 2v - v^2) = c
    \]
  * Substituting \( v = y/x \):
    \[
    x^2\left(1 - \frac{2y}{x} - \frac{y^2}{x^2}\right) = c \implies \boxed{x^2 - 2xy - y^2 = c}
    \]
* **(b) Sketch:** A family of hyperbolas.

---

## Focus on Concepts (Problems 13 – 16)

### Problem 13: Translation of Vector Fields
* **Relationship:** The vector field associated with \( g(z) = f(z-1) \) is identical to the vector field of \( f(z) \) but translated 1 unit to the right. At any point \( z \), the vector \( g(z) \) is simply the vector \( f(z') \) where \( z' = z-1 \).

### Problem 14: Rotation of Vector Fields
* **Relationship:** Multiplying a complex function by \( i \) rotates every vector by \( \pi/2 \) counterclockwise. Thus, the vector field associated with \( g(z) = if(z) \) is obtained by rotating every vector in the field of \( f(z) \) by \( \pi/2 \) counterclockwise.

### Problem 15: Uniform Flow
* **(a) Streamlines of \( f(z) = c = c_1 + i c_2 \):**
  * System: \( \frac{dx}{dt} = c_1 \, \frac{dy}{dt} = c_2 \).
  * If \( c_1 \ne 0 \), then \( \frac{dy}{dx} = \frac{c_2}{c_1} \implies y = \frac{c_2}{c_1}x + k \).
  * If \( c_1 = 0 \), then \( x = k \) (vertical lines).
  * **Streamlines:** The family of parallel straight lines in the direction of the complex constant \( c \).
* **(b) Explanation:** The velocity vector at every point in the flow is identical in magnitude and direction. Since there is no variation in the velocity from point to point, the flow is uniform.

### Problem 16: Flow Around the Unit Circle
* **(b) Verify that the unit circle \( x^2+y^2 = 1 \) is a streamline:**
  * Let \( z = e^{i\theta} \) be on the unit circle. The velocity vector is:
    \[
    f(e^{i\theta}) = 1 - e^{-2i\theta} = 1 - \cos(2\theta) + i\sin(2\theta) = 2\sin^2\theta + 2i\sin\theta\cos\theta
    \]
  * The unit normal vector to the circle at \( \theta \) is \( \mathbf{n} = (\cos\theta, \, \sin\theta) \).
  * Evaluate the dot product of the velocity field \( \mathbf{F} = (2\sin^2\theta, \, 2\sin\theta\cos\theta) \) and the normal vector \( \mathbf{n} \):
    \[
    \mathbf{F} \cdot \mathbf{n} = (2\sin^2\theta)\cos\theta + (2\sin\theta\cos\theta)\sin\theta = 2\sin^2\theta\cos\theta - 2\sin^2\theta\cos\theta = 0
    \]
  * Since the velocity vector is perpendicular to the normal vector at every point on the circle, the flow is tangent to the circle. Thus, the unit circle is a streamline.
* **(c) Explanation:** As shown in (b), the unit circle boundary acts as a streamline, meaning fluid cannot cross it. For large \( |z| \), \( \lim_{z \to \infty} f(z) = 1 \), which is a uniform horizontal flow. Thus, the function \( f(z) = 1 - 1/z^2 \) represents a uniform flow that is deflected around a cylindrical barrier of radius 1.

---

## Computer Lab Assignments (Problems 17 – 22)
*CAS vector field plots can be generated using standard CAS tools like Mathematica (using `VectorPlot`) or Python's `matplotlib.pyplot.streamplot`.*
