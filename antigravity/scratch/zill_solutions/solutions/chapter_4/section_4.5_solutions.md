# Complex Analysis — Dennis G. Zill, 2nd Edition
## Chapter 4 · Section 4.5 — Applications
### Problems 1 – 10 · Complete Solutions

---

> **Key Concepts of Conformal Mappings and Dirichlet Problems**
>
> 1. **Dirichlet Problem:** A boundary-value problem where we seek a function \( \phi(x,y) \) that is harmonic in a domain \( D \) (satisfies Laplace's equation \( \nabla^2 \phi = 0 \)) and has prescribed values on the boundary of \( D \).
> 2. **Conformal Mapping Method:** If \( w = f(z) \) is an analytic function mapping a domain \( D \) in the \( z \)-plane to a domain \( D' \) in the \( w \)-plane, and if \( \Phi(u,v) \) is harmonic in \( D' \), then the composition \( \phi(x,y) = \Phi(\operatorname{Re} f(z), \operatorname{Im} f(z)) \) is harmonic in \( D \).
> 3. **Dirichlet Problem in the Half-Plane \( y > 0 \):**
>    For boundary conditions \( \phi(x,0) = k_i \) on segments separated by points \( x_1 < x_2 < \dots < x_n \), the solution is:
>    \[
>    \phi(x,y) = k_n + \frac{1}{\pi} \sum_{i=1}^n (k_{i-1} - k_i) \operatorname{Arg}(z - x_i)
>    \]
>    where \( \operatorname{Arg}(z - x_i) \in [0, \pi] \) represents the angle from the point \( x_i \) to \( z \).

---

## Problems 1 – 4: Electrostatic Potentials in Parallel Strip Domains

### Problem 1: Domain bounded by \( x=2 \) and \( x=7 \); boundaries \( \phi(2,y) = 3 \) and \( \phi(7,y) = -2 \)
* **(a) Potential Function \( \phi(x,y) \):**
  Since the boundary conditions are constant along vertical lines, \( \phi \) depends only on \( x \).
  Let \( \phi(x) = Ax + B \).
  * \( \phi(2) = 2A + B = 3 \)
  * \( \phi(7) = 7A + B = -2 \)
  Subtracting the first from the second: \( 5A = -5 \implies A = -1 \).
  Then \( B = 3 - 2(-1) = 5 \).
  Therefore, \( \phi(x,y) = \boxed{-x + 5} \).
* **(b) Complex Potential \( \Omega(z) \):**
  We find the harmonic conjugate \( \psi(x,y) \):
  * \( \psi_y = \phi_x = -1 \implies \psi = -y + h(x) \).
  * \( \psi_x = h'(x) = -\phi_y = 0 \implies h(x) = 0 \).
  So \( \psi(x,y) = -y \).
  The complex potential is:
  \[
  \Omega(z) = \phi + i\psi = -x + 5 - iy = \boxed{-z + 5}
  \]
* **(c) Equipotential Curves & Lines of Force:**
  * Equipotential curves: \( \phi = c_1 \implies x = 5 - c_1 \) (vertical lines).
  * Lines of force: \( \psi = c_2 \implies y = -c_2 \) (horizontal lines).

### Problem 2: Domain bounded by \( y=0 \) and \( y=3 \); boundaries \( \phi(x,0) = 1 \) and \( \phi(x,3) = 2 \)
* **(a) Potential Function \( \phi(x,y) \):**
  Here \( \phi \) depends only on \( y \). Let \( \phi(y) = Ay + B \).
  * \( \phi(0) = B = 1 \)
  * \( \phi(3) = 3A + 1 = 2 \implies A = 1/3 \).
  Therefore, \( \phi(x,y) = \boxed{\frac{1}{3}y + 1} \).
* **(b) Complex Potential \( \Omega(z) \):**
  Find the harmonic conjugate \( \psi(x,y) \):
  * \( \psi_x = -\phi_y = -1/3 \implies \psi = -\frac{1}{3}x + h(y) \).
  * \( \psi_y = h'(y) = \phi_x = 0 \implies h(y) = 0 \).
  So \( \psi(x,y) = -\frac{1}{3}x \).
  The complex potential is:
  \[
  \Omega(z) = \phi + i\psi = \frac{1}{3}y + 1 - i\frac{1}{3}x = \boxed{-\frac{i}{3}z + 1}
  \]
* **(c) Curves:**
  * Equipotential curves: \( y = 3(c_1 - 1) \) (horizontal lines).
  * Lines of force: \( x = -3c_2 \) (vertical lines).

### Problem 3: Domain bounded by \( y=\sqrt{3}x \) and \( y=\sqrt{3}x+4 \); boundaries \( \phi(x,\sqrt{3}x) = 10 \) and \( \phi(x,\sqrt{3}x+4) = 5 \)
* **(a) Potential Function \( \phi(x,y) \):**
  The boundary lines are \( \sqrt{3}x - y = 0 \) and \( \sqrt{3}x - y = -4 \).
  Let \( \phi(x,y) = A(\sqrt{3}x - y) + B \).
  * On \( \sqrt{3}x - y = 0 \implies B = 10 \).
  * On \( \sqrt{3}x - y = -4 \implies -4A + 10 = 5 \implies A = 5/4 \).
  Therefore, \( \phi(x,y) = \frac{5}{4}(\sqrt{3}x - y) + 10 = \boxed{\frac{5\sqrt{3}}{4}x - \frac{5}{4}y + 10} \).
* **(b) Complex Potential \( \Omega(z) \):**
  Find the harmonic conjugate \( \psi(x,y) \):
  * \( \psi_x = -\phi_y = 5/4 \implies \psi = \frac{5}{4}x + h(y) \).
  * \( \psi_y = h'(y) = \phi_x = \frac{5\sqrt{3}}{4} \implies h(y) = \frac{5\sqrt{3}}{4}y \).
  So \( \psi(x,y) = \frac{5}{4}x + \frac{5\sqrt{3}}{4}y \).
  The complex potential is:
  \[
  \Omega(z) = \left(\frac{5\sqrt{3}}{4}x - \frac{5}{4}y + 10\right) + i\left(\frac{5}{4}x + \frac{5\sqrt{3}}{4}y\right) = \boxed{\frac{5}{4}(\sqrt{3}+i)z + 10}
  \]
* **(c) Curves:**
  * Equipotential curves: \( \sqrt{3}x - y = k_1 \) (parallel lines).
  * Lines of force: \( x + \sqrt{3}y = k_2 \) (perpendicular lines).

### Problem 4: Domain bounded by \( y=x+2 \) and \( y=x+4 \); boundaries \( \phi(x,x+2) = -4 \) and \( \phi(x,x+4) = 5 \)
* **(a) Potential Function \( \phi(x,y) \):**
  The boundary lines are \( x - y = -2 \) and \( x - y = -4 \).
  Let \( \phi(x,y) = A(x - y) + B \).
  * On \( x - y = -2 \implies -2A + B = -4 \).
  * On \( x - y = -4 \implies -4A + B = 5 \).
  Subtracting: \( 2A = -9 \implies A = -9/2 \).
  Then \( B = -4 + 2(-9/2) = -13 \).
  Therefore, \( \phi(x,y) = -\frac{9}{2}(x-y) - 13 = \boxed{-\frac{9}{2}x + \frac{9}{2}y - 13} \).
* **(b) Complex Potential \( \Omega(z) \):**
  Find the harmonic conjugate \( \psi(x,y) \):
  * \( \psi_x = -\phi_y = -9/2 \implies \psi = -\frac{9}{2}x + h(y) \).
  * \( \psi_y = h'(y) = \phi_x = -9/2 \implies h(y) = -\frac{9}{2}y \).
  So \( \psi(x,y) = -\frac{9}{2}x - \frac{9}{2}y \).
  The complex potential is:
  \[
  \Omega(z) = \left(-\frac{9}{2}x + \frac{9}{2}y - 13\right) + i\left(-\frac{9}{2}x - \frac{9}{2}y\right) = \boxed{-\frac{9}{2}(1+i)z - 13}
  \]
* **(c) Curves:**
  * Equipotential curves: \( x - y = k_1 \) (parallel lines).
  * Lines of force: \( x + y = k_2 \) (perpendicular lines).

---

## Problems 5 – 8: Steady-State Temperature with Trigonometric Mappings

### Problem 5: Domain \( \pi/2 < x < 3\pi/2, \, y > 0 \); boundaries \( \phi(\pi/2, y) = 20, \, \phi(x, 0) = -13, \, \phi(3\pi/2, y) = 12 \)
* **(a) Transformation:**
  * Let \( w = \sin(z - \pi) = -\sin z \).
  * This maps the vertical strip to the upper half-plane \( v > 0 \).
  * The boundary values transform as:
    * \( \phi(\pi/2, y) = 20 \implies u < -1 \)
    * \( \phi(x, 0) = -13 \implies -1 < u < 1 \)
    * \( \phi(3\pi/2, y) = 12 \implies u > 1 \)
  * Using formula (10):
    \[
    \phi(x,y) = \boxed{12 + \frac{33}{\pi} \operatorname{Arg}(\sin(z-\pi) + 1) - \frac{25}{\pi} \operatorname{Arg}(\sin(z-\pi) - 1)}
    \]
* **(b) Complex Potential \( \Omega(z) \):**
  \[
  \Omega(z) = \boxed{12i + \frac{33}{\pi} \operatorname{Ln}(\sin(z-\pi) + 1) - \frac{25}{\pi} \operatorname{Ln}(\sin(z-\pi) - 1)}
  \]

### Problem 6: Domain \( -3 < x < 3, \, y > 1 \); boundaries \( \phi(-3, y) = 1, \, \phi(x, 1) = 3, \, \phi(3, y) = 5 \)
* **(a) Transformation:**
  * Translate and scale: \( z' = \frac{\pi}{6}(z - i) \).
  * This maps the domain to the strip \( -\pi/2 < x' < \pi/2, \, y' > 0 \).
  * Now map with \( w = \sin z' = \sin\left(\frac{\pi}{6}(z-i)\right) \).
  * Boundary values:
    * On \( u < -1 \): \( \Phi = 1 \)
    * On \( -1 < u < 1 \): \( \Phi = 3 \)
    * On \( u > 1 \): \( \Phi = 5 \)
  * Using (10):
    \[
    \Phi(u,v) = 5 + \frac{1}{\pi} \left[ (3 - 5)\operatorname{Arg}(w-1) + (1 - 3)\operatorname{Arg}(w+1) \right] = 5 - \frac{2}{\pi}\operatorname{Arg}(w-1) - \frac{2}{\pi}\operatorname{Arg}(w+1)
    \]
  * Therefore:
    \[
    \phi(x,y) = \boxed{5 - \frac{2}{\pi} \operatorname{Arg}\left(\sin\left(\frac{\pi}{6}(z-i)\right) - 1\right) - \frac{2}{\pi} \operatorname{Arg}\left(\sin\left(\frac{\pi}{6}(z-i)\right) + 1\right)}
    \]
* **(b) Complex Potential \( \Omega(z) \):**
  \[
  \Omega(z) = \boxed{5i - \frac{2}{\pi} \operatorname{Ln}\left(\sin\left(\frac{\pi}{6}(z-i)\right) - 1\right) - \frac{2}{\pi} \operatorname{Ln}\left(\sin\left(\frac{\pi}{6}(z-i)\right) + 1\right)}
  \]

### Problem 7: Domain \( -\pi/2 < y < \pi/2, \, x > 0 \); boundaries \( \phi(x, -\pi/2) = 15, \, \phi(0, y) = 32, \, \phi(x, \pi/2) = 23 \)
* **(a) Transformation:**
  * Rotate: \( z' = iz = -y + ix \).
  * This maps the horizontal strip to the vertical strip \( -\pi/2 < x' < \pi/2, \, y' > 0 \).
  * Map with \( w = \sin(iz) \) to the upper half-plane.
  * Boundary values:
    * On \( u < -1 \) (corresponding to \( y = \pi/2 \)): \( \Phi = 23 \)
    * On \( -1 < u < 1 \) (corresponding to \( x = 0 \)): \( \Phi = 32 \)
    * On \( u > 1 \) (corresponding to \( y = -\pi/2 \)): \( \Phi = 15 \)
  * Using (10):
    \[
    \phi(x,y) = \boxed{15 - \frac{9}{\pi} \operatorname{Arg}(\sin(iz) + 1) + \frac{17}{\pi} \operatorname{Arg}(\sin(iz) - 1)}
    \]
* **(b) Complex Potential \( \Omega(z) \):**
  \[
  \Omega(z) = \boxed{15i - \frac{9}{\pi} \operatorname{Ln}(\sin(iz) + 1) + \frac{17}{\pi} \operatorname{Ln}(\sin(iz) - 1)}
  \]

### Problem 8: Domain bounded by \( y=x+2, \, y=x-2, \, y=-x \) for \( y \ge -x \); boundaries \( \phi(x,x+2)=10, \, \phi(x,-x)=7, \, \phi(x,x-2)=5 \)
* **(a) Transformation:**
  * Rotate and scale the domain:
    \[
    z'' = \frac{\pi}{2\sqrt{2}} e^{-i\pi/4} z = \frac{\pi}{4}(1-i)z
    \]
    This maps the domain to the horizontal strip \( x'' > 0, \, -\pi/2 < y'' < \pi/2 \).
  * Map with \( w = \sin(iz'') = \sin\left(\frac{\pi}{4}(1+i)z\right) \).
  * Boundary values:
    * On \( u < -1 \): \( \Phi = 10 \)
    * On \( -1 < u < 1 \): \( \Phi = 7 \)
    * On \( u > 1 \): \( \Phi = 5 \)
  * Using (10):
    \[
    \phi(x,y) = \boxed{5 + \frac{2}{\pi} \operatorname{Arg}\left(\sin\left(\frac{\pi}{4}(1+i)z\right) - 1\right) + \frac{3}{\pi} \operatorname{Arg}\left(\sin\left(\frac{\pi}{4}(1+i)z\right) + 1\right)}
    \]
* **(b) Complex Potential \( \Omega(z) \):**
  \[
  \Omega(z) = \boxed{5i + \frac{2}{\pi} \operatorname{Ln}\left(\sin\left(\frac{\pi}{4}(1+i)z\right) - 1\right) + \frac{3}{\pi} \operatorname{Ln}\left(\sin\left(\frac{\pi}{4}(1+i)z\right) + 1\right)}
  \]

---

## Focus on Concepts

### Problem 9: Solve the Dirichlet Problem in Figure 4.28
* **Mapping:**
  * The domain is a sector of angle \( \pi/4 \) in the \( w \)-plane: \( 0 < \arg(w) < \pi/4 \).
  * The mapping \( z = w^4 \implies w = z^{1/4} \) maps the sector to the upper half-plane \( \operatorname{Im}(z) > 0 \).
  * The boundary values are mapped onto the real axis of the \( z \)-plane:
    * For \( x < -1 \): \( \Phi = 7 \)
    * For \( -1 < x < 0 \): \( \Phi = 4 \)
    * For \( 0 < x < 1 \): \( \Phi = -3 \)
    * For \( x > 1 \): \( \Phi = 2 \)
* **Solution:**
  Using the half-plane formula (10):
  \[
  \Phi(x,y) = 2 - \frac{5}{\pi} \operatorname{Arg}(z-1) + \frac{7}{\pi} \operatorname{Arg}(z) + \frac{3}{\pi} \operatorname{Arg}(z+1)
  \]
  Substituting \( z = w^4 \):
  \[
  \phi(u,v) = \boxed{2 - \frac{5}{\pi} \operatorname{Arg}(w^4-1) + \frac{7}{\pi} \operatorname{Arg}(w^4) + \frac{3}{\pi} \operatorname{Arg}(w^4+1)}
  \]
* **Complex Potential:**
  \[
  \Omega(w) = \boxed{2i - \frac{5}{\pi} \operatorname{Ln}(w^4-1) + \frac{7}{\pi} \operatorname{Ln}(w^4) + \frac{3}{\pi} \operatorname{Ln}(w^4+1)}
  \]

### Problem 10: Solve the Dirichlet Problem in Figure 4.29
* **Mapping:**
  * The domain is the upper half-plane \( \operatorname{Im}(z) > 0 \).
  * The boundary conditions on \( y=0 \) are:
    * \( \phi(x,0) = 10 \) for \( -1 < x < 1 \)
    * \( \phi(x,0) = -4 \) for \( |x| > 1 \)
* **Solution:**
  Using the half-plane formula directly:
  \[
  \phi(x,y) = -4 + \frac{1}{\pi} \left[ (10 - (-4))\operatorname{Arg}(z-1) + (-4 - 10)\operatorname{Arg}(z+1) \right]
  \]
  \[
  \phi(x,y) = \boxed{-4 + \frac{14}{\pi} [ \operatorname{Arg}(z-1) - \operatorname{Arg}(z+1) ]}
  \]
* **Complex Potential:**
  \[
  \Omega(z) = \boxed{-4i + \frac{14}{\pi} [ \operatorname{Ln}(z-1) - \operatorname{Ln}(z+1) ]}
  \]
