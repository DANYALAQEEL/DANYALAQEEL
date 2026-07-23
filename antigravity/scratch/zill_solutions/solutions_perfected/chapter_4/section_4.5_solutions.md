# Complex Analysis — Dennis G. Zill, 2nd Edition
## Chapter 4 · Section 4.5 — Applications
### Problems 1 – 10 · Complete Solutions

---

> **Key Concepts**
>
> **Dirichlet Problem**
> A boundary-value problem in which we seek a function $\phi(x,y)$ that is harmonic in a domain $D$ (meaning it satisfies Laplace's equation $\nabla^2 \phi = \frac{\partial^2 \phi}{\partial x^2} + \frac{\partial^2 \phi}{\partial y^2} = 0$) and satisfies prescribed values (boundary conditions) on the boundary of $D$.
>
> **Conformal Mapping Method**
> Under an analytic mapping $w = f(z) = u(x,y) + iv(x,y)$, if $\Phi(u,v)$ is harmonic in a domain $D'$ of the $w$-plane, then the composition $\phi(x,y) = \Phi(u(x,y), v(x,y))$ is harmonic in the corresponding domain $D$ of the $z$-plane.
>
> **Dirichlet Problem in the Upper Half-Plane ($v > 0$)**
> For boundary conditions $\Phi(u,0) = k_i$ on the real axis segments separated by points $u_1 < u_2 < \dots < u_{n-1}$, the solution is:
> $$\Phi(u,v) = k_n + \frac{1}{\pi} \sum_{i=1}^{n-1} (k_i - k_{i+1}) \operatorname{Arg}(w - u_i)$$
> where $\operatorname{Arg}(w - u_i) \in [0, \pi]$ represents the principal branch of the argument of the complex number $w - u_i$.
>
> **Complex Potential**
> The analytic function $\Omega(z) = \phi(x,y) + i\psi(x,y)$, where $\psi(x,y)$ is the harmonic conjugate of $\phi(x,y)$. The curves $\phi(x,y) = c_1$ are equipotential curves (or isotherms) and the curves $\psi(x,y) = c_2$ are lines of force (or lines of heat flow).

---

## Problems 1 – 4: Electrostatic Potentials in Parallel Strip Domains

For vertical, horizontal, or skewed parallel plates, the potential function $\phi(x,y)$ depends only on the direction perpendicular to the boundary plates. In each case:
1. Set up the differential equation $\nabla^2 \phi = 0$.
2. Solve the corresponding ordinary differential equation $\frac{d^2\phi}{ds^2} = 0$ to get the linear profile $\phi = As + B$.
3. Apply the boundary conditions to determine the constants $A$ and $B$.
4. Find the harmonic conjugate $\psi(x,y)$ using the Cauchy-Riemann equations:
   $$\frac{\partial \phi}{\partial x} = \frac{\partial \psi}{\partial y}, \qquad \frac{\partial \phi}{\partial y} = -\frac{\partial \psi}{\partial x}$$
5. Construct the complex potential $\Omega(z) = \phi + i\psi$.
6. Determine the equations for the equipotential curves and lines of force.

---

**Problem 1.** Find the electrostatic potential $\phi(x,y)$, the complex potential $\Omega(z)$, and the equations of the equipotential curves and lines of force for the domain $D$ bounded by the lines $x=2$ and $x=7$ with boundary conditions $\phi(2,y) = 3$ and $\phi(7,y) = -2$.

**Solution.**

1. **Find the Potential Function $\phi(x,y)$:**
   Since the boundary conditions are constant along the vertical lines $x = 2$ and $x = 7$, the potential $\phi$ depends only on the horizontal coordinate $x$. Laplace's equation simplifies to:
   $$\frac{d^2\phi}{dx^2} = 0 \implies \phi(x) = Ax + B$$
   Apply the boundary conditions:
   - For $x = 2$: $\phi(2) = 2A + B = 3$
   - For $x = 7$: $\phi(7) = 7A + B = -2$
   
   Subtract the first equation from the second:
   $$(7A + B) - (2A + B) = -2 - 3 \implies 5A = -5 \implies A = -1$$
   Substitute $A = -1$ back into the first equation:
   $$2(-1) + B = 3 \implies B = 5$$
   Therefore, the potential function is:
   $$\phi(x,y) = -x + 5$$

2. **Find the Harmonic Conjugate $\psi(x,y)$:**
   Using the Cauchy-Riemann equations:
   - $\dfrac{\partial \psi}{\partial y} = \dfrac{\partial \phi}{\partial x} = -1 \implies \psi(x,y) = -y + h(x)$
   - $\dfrac{\partial \psi}{\partial x} = h'(x) = -\dfrac{\partial \phi}{\partial y} = 0 \implies h'(x) = 0 \implies h(x) = C$
   
   Setting the arbitrary constant of integration $C = 0$, we obtain:
   $$\psi(x,y) = -y$$

3. **Construct the Complex Potential $\Omega(z)$:**
   $$\Omega(z) = \phi + i\psi = (-x + 5) + i(-y) = - (x + iy) + 5 = -z + 5$$

4. **Identify the Curves:**
   - The equipotential curves are the family of curves where the potential $\phi(x,y)$ is constant:
     $$-x + 5 = c_1 \implies x = 5 - c_1 \quad \text{(vertical lines)}$$
   - The lines of force are the family of curves where the harmonic conjugate $\psi(x,y)$ is constant:
     $$-y = c_2 \implies y = -c_2 \quad \text{(horizontal lines)}$$

$$\boxed{\begin{aligned}
\phi(x,y) &= -x + 5 \\
\Omega(z) &= -z + 5 \\
\text{Equipotentials: } &x = \text{constant} \\
\text{Lines of Force: } &y = \text{constant}
\end{aligned}}$$

---

**Problem 2.** Find the electrostatic potential $\phi(x,y)$, the complex potential $\Omega(z)$, and the equations of the equipotential curves and lines of force for the domain $D$ bounded by the lines $y=0$ and $y=3$ with boundary conditions $\phi(x,0) = 1$ and $\phi(x,3) = 2$.

**Solution.**

1. **Find the Potential Function $\phi(x,y)$:**
   Since the boundary conditions are constant along the horizontal lines $y = 0$ and $y = 3$, the potential $\phi$ depends only on the vertical coordinate $y$. Laplace's equation simplifies to:
   $$\frac{d^2\phi}{dy^2} = 0 \implies \phi(y) = Ay + B$$
   Apply the boundary conditions:
   - For $y = 0$: $\phi(0) = B = 1$
   - For $y = 3$: $\phi(3) = 3A + 1 = 2 \implies 3A = 1 \implies A = \frac{1}{3}$
   
   Therefore, the potential function is:
   $$\phi(x,y) = \frac{1}{3}y + 1$$

2. **Find the Harmonic Conjugate $\psi(x,y)$:**
   Using the Cauchy-Riemann equations:
   - $\dfrac{\partial \psi}{\partial x} = -\dfrac{\partial \phi}{\partial y} = -\frac{1}{3} \implies \psi(x,y) = -\frac{1}{3}x + h(y)$
   - $\dfrac{\partial \psi}{\partial y} = h'(y) = \dfrac{\partial \phi}{\partial x} = 0 \implies h'(y) = 0 \implies h(y) = C$
   
   Setting the arbitrary constant of integration $C = 0$, we obtain:
   $$\psi(x,y) = -\frac{1}{3}x$$

3. **Construct the Complex Potential $\Omega(z)$:**
   $$\Omega(z) = \phi + i\psi = \left(\frac{1}{3}y + 1\right) + i\left(-\frac{1}{3}x\right) = -\frac{i}{3}(x + iy) + 1 = -\frac{i}{3}z + 1$$

4. **Identify the Curves:**
   - The equipotential curves are:
     $$\frac{1}{3}y + 1 = c_1 \implies y = 3(c_1 - 1) \quad \text{(horizontal lines)}$$
   - The lines of force are:
     $$-\frac{1}{3}x = c_2 \implies x = -3c_2 \quad \text{(vertical lines)}$$

$$\boxed{\begin{aligned}
\phi(x,y) &= \frac{1}{3}y + 1 \\
\Omega(z) &= -\frac{i}{3}z + 1 \\
\text{Equipotentials: } &y = \text{constant} \\
\text{Lines of Force: } &x = \text{constant}
\end{aligned}}$$

---

**Problem 3.** Find the electrostatic potential $\phi(x,y)$, the complex potential $\Omega(z)$, and the equations of the equipotential curves and lines of force for the domain $D$ bounded by the lines $y=\sqrt{3}x$ and $y=\sqrt{3}x+4$ with boundary conditions $\phi(x,\sqrt{3}x) = 10$ and $\phi(x,\sqrt{3}x+4) = 5$.

**Solution.**

1. **Find the Potential Function $\phi(x,y)$:**
   The boundary lines can be written as:
   $$\sqrt{3}x - y = 0 \qquad \text{and} \qquad \sqrt{3}x - y = -4$$
   The distance and orientation are constant along lines parallel to the boundary. Thus, we define a new coordinate $u = \sqrt{3}x - y$. The potential $\phi$ depends only on $u$, so $\phi(x,y) = Au + B = A(\sqrt{3}x - y) + B$.
   
   Apply the boundary conditions:
   - On $\sqrt{3}x - y = 0$: $\phi = B = 10$
   - On $\sqrt{3}x - y = -4$: $\phi = -4A + 10 = 5 \implies -4A = -5 \implies A = \frac{5}{4}$
   
   Therefore, the potential function is:
   $$\phi(x,y) = \frac{5}{4}(\sqrt{3}x - y) + 10 = \frac{5\sqrt{3}}{4}x - \frac{5}{4}y + 10$$

2. **Find the Harmonic Conjugate $\psi(x,y)$:**
   Using the Cauchy-Riemann equations:
   - $\dfrac{\partial \psi}{\partial x} = -\dfrac{\partial \phi}{\partial y} = \frac{5}{4} \implies \psi(x,y) = \frac{5}{4}x + h(y)$
   - $\dfrac{\partial \psi}{\partial y} = h'(y) = \dfrac{\partial \phi}{\partial x} = \frac{5\sqrt{3}}{4} \implies h(y) = \frac{5\sqrt{3}}{4}y + C$
   
   Setting $C = 0$:
   $$\psi(x,y) = \frac{5}{4}x + \frac{5\sqrt{3}}{4}y$$

3. **Construct the Complex Potential $\Omega(z)$:**
   $$\begin{aligned}
   \Omega(z) &= \phi + i\psi = \left(\frac{5\sqrt{3}}{4}x - \frac{5}{4}y + 10\right) + i\left(\frac{5}{4}x + \frac{5\sqrt{3}}{4}y\right) \\
   &= \frac{5}{4}\left(\sqrt{3}x - y + ix + i\sqrt{3}y\right) + 10 \\
   &= \frac{5}{4}\left(\sqrt{3}(x + iy) + i(x + iy)\right) + 10 \\
   &= \frac{5}{4}(\sqrt{3} + i)z + 10
   \end{aligned}$$

4. **Identify the Curves:**
   - The equipotential curves are the lines parallel to the boundaries:
     $$\sqrt{3}x - y = c_1$$
   - The lines of force are the perpendicular lines (since the slope is $-\frac{1}{\sqrt{3}}$):
     $$x + \sqrt{3}y = c_2$$

$$\boxed{\begin{aligned}
\phi(x,y) &= \frac{5\sqrt{3}}{4}x - \frac{5}{4}y + 10 \\
\Omega(z) &= \frac{5}{4}(\sqrt{3} + i)z + 10 \\
\text{Equipotentials: } &\sqrt{3}x - y = \text{constant} \\
\text{Lines of Force: } &x + \sqrt{3}y = \text{constant}
\end{aligned}}$$

---

**Problem 4.** Find the electrostatic potential $\phi(x,y)$, the complex potential $\Omega(z)$, and the equations of the equipotential curves and lines of force for the domain $D$ bounded by the lines $y=x+2$ and $y=x+4$ with boundary conditions $\phi(x,x+2) = -4$ and $\phi(x,x+4) = 5$.

**Solution.**

1. **Find the Potential Function $\phi(x,y)$:**
   The boundary lines can be written as:
   $$x - y = -2 \qquad \text{and} \qquad x - y = -4$$
   Let $u = x - y$. The potential depends only on $u$, so $\phi(x,y) = Au + B = A(x - y) + B$.
   
   Apply the boundary conditions:
   - On $x - y = -2$: $\phi = -2A + B = -4$
   - On $x - y = -4$: $\phi = -4A + B = 5$
   
   Subtract the second equation from the first:
   $$(-2A + B) - (-4A + B) = -4 - 5 \implies 2A = -9 \implies A = -\frac{9}{2}$$
   Substitute $A = -\frac{9}{2}$ back into the first equation:
   $$-2\left(-\frac{9}{2}\right) + B = -4 \implies 9 + B = -4 \implies B = -13$$
   Therefore, the potential function is:
   $$\phi(x,y) = -\frac{9}{2}(x - y) - 13 = -\frac{9}{2}x + \frac{9}{2}y - 13$$

2. **Find the Harmonic Conjugate $\psi(x,y)$:**
   Using the Cauchy-Riemann equations:
   - $\dfrac{\partial \psi}{\partial x} = -\dfrac{\partial \phi}{\partial y} = -\frac{9}{2} \implies \psi(x,y) = -\frac{9}{2}x + h(y)$
   - $\dfrac{\partial \psi}{\partial y} = h'(y) = \dfrac{\partial \phi}{\partial x} = -\frac{9}{2} \implies h(y) = -\frac{9}{2}y + C$
   
   Setting $C = 0$:
   $$\psi(x,y) = -\frac{9}{2}x - \frac{9}{2}y$$

3. **Construct the Complex Potential $\Omega(z)$:**
   $$\begin{aligned}
   \Omega(z) &= \phi + i\psi = \left(-\frac{9}{2}x + \frac{9}{2}y - 13\right) + i\left(-\frac{9}{2}x - \frac{9}{2}y\right) \\
   &= -\frac{9}{2}\left(x - y + ix + iy\right) - 13 \\
   &= -\frac{9}{2}\left((x + iy) + i(x + iy)\right) - 13 \\
   &= -\frac{9}{2}(1 + i)z - 13
   \end{aligned}$$

4. **Identify the Curves:**
   - The equipotential curves are lines parallel to the boundaries:
     $$x - y = c_1$$
   - The lines of force are perpendicular lines:
     $$x + y = c_2$$

$$\boxed{\begin{aligned}
\phi(x,y) &= -\frac{9}{2}x + \frac{9}{2}y - 13 \\
\Omega(z) &= -\frac{9}{2}(1 + i)z - 13 \\
\text{Equipotentials: } &x - y = \text{constant} \\
\text{Lines of Force: } &x + y = \text{constant}
\end{aligned}}$$

---

## Problems 5 – 8: Steady-State Temperature with Trigonometric Mappings

In these problems, we use conformal mapping to find the steady-state temperature $\phi(x,y)$ in a semi-infinite strip or channel, mapped onto the upper half-plane. The general steps are:
1. Find a conformal mapping $w = f(z) = u(x,y) + iv(x,y)$ that maps the domain $D$ to the upper half-plane $\operatorname{Im}(w) > 0$.
2. Map the boundary conditions onto the real axis ($v = 0$).
3. Use the half-plane formula:
   $$\Phi(u,v) = k_n + \frac{1}{\pi} \sum_{i=1}^{n-1} (k_i - k_{i+1}) \operatorname{Arg}(w - u_i)$$
4. Substitute $w = f(z)$ to get $\phi(x,y) = \Phi(\operatorname{Re} f(z), \operatorname{Im} f(z))$.
5. Find the complex potential $\Omega(z)$ by replacing $\operatorname{Arg}(\cdot)$ with $\operatorname{Ln}(\cdot)$ and multiplying the constant term by $i$ (meaning the temperature $\phi(x,y)$ is the imaginary part of the complex potential $\Omega(z)$).

---

**Problem 5.** Find the steady-state temperature $\phi(x,y)$ and a complex potential function $\Omega(z)$ in the domain $D$ defined by $\pi/2 < x < 3\pi/2$, $y > 0$, subject to the boundary conditions $\phi(\pi/2, y) = 20$, $\phi(x, 0) = -13$, and $\phi(3\pi/2, y) = 12$.

**Solution.**

1. **Define the Mapping:**
   The domain $D$ is a vertical strip of width $\pi$. We first shift the strip to the left by $\pi$ using the translation $z' = z - \pi$. This maps the strip to $-\pi/2 < \operatorname{Re}(z') < \pi/2, \operatorname{Im}(z') > 0$.
   Now we apply the mapping:
   $$w = \sin z' = \sin(z - \pi) = -\sin z$$
   This maps the vertical strip onto the upper half-plane $\operatorname{Im}(w) > 0$.

2. **Map the Boundary Conditions:**
   - **Left Boundary ($x = \pi/2$, $y > 0$):** Here $z' = -\pi/2 + iy$, so:
     $$w = \sin(-\pi/2 + iy) = \sin(-\pi/2)\cosh y + i\cos(-\pi/2)\sinh y = -\cosh y$$
     Since $y > 0$, $-\cosh y$ maps to the interval $(-\infty, -1)$ on the real axis of the $w$-plane. The boundary condition is $k_0 = 20$.
   - **Bottom Boundary ($y = 0$, $\pi/2 < x < 3\pi/2$):** Here $z' = x' \in (-\pi/2, \pi/2)$, so:
     $$w = \sin x'$$
     This maps to the interval $(-1, 1)$ on the real axis of the $w$-plane. The boundary condition is $k_1 = -13$.
   - **Right Boundary ($x = 3\pi/2$, $y > 0$):** Here $z' = \pi/2 + iy$, so:
     $$w = \sin(\pi/2 + iy) = \cosh y$$
     This maps to the interval $(1, \infty)$ on the real axis of the $w$-plane. The boundary condition is $k_2 = 12$.
   
   Thus, the division points on the real axis are $u_1 = -1$ and $u_2 = 1$, separating three intervals with boundary values $k_0 = 20$, $k_1 = -13$, and $k_2 = 12$.

3. **Solve in the $w$-plane:**
   Using the half-plane formula:
   $$\Phi(u,v) = k_2 + \frac{1}{\pi} [ (k_0 - k_1)\operatorname{Arg}(w - u_1) + (k_1 - k_2)\operatorname{Arg}(w - u_2) ]$$
   Substitute the values:
   $$\begin{aligned}
   \Phi(u,v) &= 12 + \frac{1}{\pi} [ (20 - (-13))\operatorname{Arg}(w + 1) + (-13 - 12)\operatorname{Arg}(w - 1) ] \\
   &= 12 + \frac{33}{\pi}\operatorname{Arg}(w + 1) - \frac{25}{\pi}\operatorname{Arg}(w - 1)
   \end{aligned}$$

4. **Transform Back:**
   Substitute $w = \sin(z - \pi)$:
   $$\phi(x,y) = 12 + \frac{33}{\pi}\operatorname{Arg}(\sin(z-\pi) + 1) - \frac{25}{\pi}\operatorname{Arg}(\sin(z-\pi) - 1)$$

5. **Construct the Complex Potential $\Omega(z)$:**
   Since the temperature $\phi(x,y)$ is the imaginary part of $\Omega(z)$, we replace the $\operatorname{Arg}$ terms with $\operatorname{Ln}$ terms and multiply the constant by $i$:
   $$\Omega(z) = 12i + \frac{33}{\pi}\operatorname{Ln}(\sin(z-\pi) + 1) - \frac{25}{\pi}\operatorname{Ln}(\sin(z-\pi) - 1)$$

$$\boxed{\begin{aligned}
\phi(x,y) &= 12 + \frac{33}{\pi}\operatorname{Arg}(\sin(z-\pi) + 1) - \frac{25}{\pi}\operatorname{Arg}(\sin(z-\pi) - 1) \\
\Omega(z) &= 12i + \frac{33}{\pi}\operatorname{Ln}(\sin(z-\pi) + 1) - \frac{25}{\pi}\operatorname{Ln}(\sin(z-\pi) - 1)
\end{aligned}}$$

---

**Problem 6.** Find the steady-state temperature $\phi(x,y)$ and a complex potential function $\Omega(z)$ in the domain $D$ bounded by $-3 < x < 3$, $y > 1$, subject to the boundary conditions $\phi(-3, y) = 1$, $\phi(x, 1) = 3$, and $\phi(3, y) = 5$.

**Solution.**

1. **Define the Mapping:**
   The domain $D$ is a vertical strip of width $6$ shifted vertically by $1$.
   To map this to the standard vertical strip $-\pi/2 < \operatorname{Re}(z') < \pi/2, \operatorname{Im}(z') > 0$, we apply the linear transformation:
   $$z' = \frac{\pi}{6}(z - i) = \frac{\pi}{6}x + i\frac{\pi}{6}(y - 1)$$
   Now we apply the mapping:
   $$w = \sin z' = \sin\left(\frac{\pi}{6}(z - i)\right)$$
   This maps the domain onto the upper half-plane $\operatorname{Im}(w) > 0$.

2. **Map the Boundary Conditions:**
   - **Left Boundary ($x = -3$, $y > 1$):** Here $z' = -\pi/2 + i\frac{\pi}{6}(y - 1)$, so:
     $$w = \sin\left(-\frac{\pi}{2} + i\frac{\pi}{6}(y - 1)\right) = -\cosh\left(\frac{\pi}{6}(y - 1)\right)$$
     Since $y > 1$, this maps to $u < -1$ ($u_1 = -1$). The boundary condition is $k_0 = 1$.
   - **Bottom Boundary ($y = 1$, $-3 < x < 3$):** Here $z' = \frac{\pi}{6}x$, so:
     $$w = \sin\left(\frac{\pi}{6}x\right)$$
     Since $-3 < x < 3$, this maps to the interval $-1 < u < 1$ ($u_2 = 1$). The boundary condition is $k_1 = 3$.
   - **Right Boundary ($x = 3$, $y > 1$):** Here $z' = \pi/2 + i\frac{\pi}{6}(y - 1)$, so:
     $$w = \sin\left(\frac{\pi}{2} + i\frac{\pi}{6}(y - 1)\right) = \cosh\left(\frac{\pi}{6}(y - 1)\right)$$
     This maps to $u > 1$. The boundary condition is $k_2 = 5$.

3. **Solve in the $w$-plane:**
   Using the half-plane formula:
   $$\Phi(u,v) = k_2 + \frac{1}{\pi} [ (k_0 - k_1)\operatorname{Arg}(w + 1) + (k_1 - k_2)\operatorname{Arg}(w - 1) ]$$
   Substitute the values:
   $$\begin{aligned}
   \Phi(u,v) &= 5 + \frac{1}{\pi} [ (1 - 3)\operatorname{Arg}(w + 1) + (3 - 5)\operatorname{Arg}(w - 1) ] \\
   &= 5 - \frac{2}{\pi}\operatorname{Arg}(w + 1) - \frac{2}{\pi}\operatorname{Arg}(w - 1)
   \end{aligned}$$

4. **Transform Back:**
   Substitute $w = \sin\left(\frac{\pi}{6}(z - i)\right)$:
   $$\phi(x,y) = 5 - \frac{2}{\pi}\operatorname{Arg}\left(\sin\left(\frac{\pi}{6}(z - i)\right) + 1\right) - \frac{2}{\pi}\operatorname{Arg}\left(\sin\left(\frac{\pi}{6}(z - i)\right) - 1\right)$$

5. **Construct the Complex Potential $\Omega(z)$:**
   $$\Omega(z) = 5i - \frac{2}{\pi}\operatorname{Ln}\left(\sin\left(\frac{\pi}{6}(z - i)\right) + 1\right) - \frac{2}{\pi}\operatorname{Ln}\left(\sin\left(\frac{\pi}{6}(z - i)\right) - 1\right)$$

$$\boxed{\begin{aligned}
\phi(x,y) &= 5 - \frac{2}{\pi}\operatorname{Arg}\left(\sin\left(\frac{\pi}{6}(z - i)\right) + 1\right) - \frac{2}{\pi}\operatorname{Arg}\left(\sin\left(\frac{\pi}{6}(z - i)\right) - 1\right) \\
\Omega(z) &= 5i - \frac{2}{\pi}\operatorname{Ln}\left(\sin\left(\frac{\pi}{6}(z - i)\right) + 1\right) - \frac{2}{\pi}\operatorname{Ln}\left(\sin\left(\frac{\pi}{6}(z - i)\right) - 1\right)
\end{aligned}}$$

---

**Problem 7.** Find the steady-state temperature $\phi(x,y)$ and a complex potential function $\Omega(z)$ in the domain $D$ bounded by $-\pi/2 < y < \pi/2$, $x > 0$, subject to the boundary conditions $\phi(x, -\pi/2) = 15$, $\phi(0, y) = 32$, and $\phi(x, \pi/2) = 23$.

**Solution.**

1. **Define the Mapping:**
   The domain $D$ is a horizontal semi-infinite strip. We first rotate it to a vertical strip by multiplying by $i$:
   $$z' = iz = -y + ix$$
   Since $-\pi/2 < y < \pi/2$ and $x > 0$, this maps the domain to the vertical strip $-\pi/2 < \operatorname{Re}(z') < \pi/2$, $\operatorname{Im}(z') > 0$.
   Now we apply the sine mapping:
   $$w = \sin z' = \sin(iz)$$
   This maps the vertical strip onto the upper half-plane $\operatorname{Im}(w) > 0$.

2. **Map the Boundary Conditions:**
   - **Bottom Boundary ($y = -\pi/2$, $x > 0$):** Here $z' = \pi/2 + ix$, so:
     $$w = \sin(\pi/2 + ix) = \cosh x$$
     Since $x > 0$, this maps to the interval $(1, \infty)$ on the real axis. The boundary condition is $k_2 = 15$.
   - **Left Boundary ($x = 0$, $-\pi/2 < y < \pi/2$):** Here $z' = -y$, so:
     $$w = \sin(-y) = -\sin y$$
     Since $-\pi/2 < y < \pi/2$, this maps to the interval $(-1, 1)$ on the real axis. The boundary condition is $k_1 = 32$.
   - **Top Boundary ($y = \pi/2$, $x > 0$):** Here $z' = -\pi/2 + ix$, so:
     $$w = \sin(-\pi/2 + ix) = -\cosh x$$
     Since $x > 0$, this maps to the interval $(-\infty, -1)$ on the real axis. The boundary condition is $k_0 = 23$.

3. **Solve in the $w$-plane:**
   Using the half-plane formula:
   $$\Phi(u,v) = k_2 + \frac{1}{\pi} [ (k_0 - k_1)\operatorname{Arg}(w + 1) + (k_1 - k_2)\operatorname{Arg}(w - 1) ]$$
   Substitute the values:
   $$\begin{aligned}
   \Phi(u,v) &= 15 + \frac{1}{\pi} [ (23 - 32)\operatorname{Arg}(w + 1) + (32 - 15)\operatorname{Arg}(w - 1) ] \\
   &= 15 - \frac{9}{\pi}\operatorname{Arg}(w + 1) + \frac{17}{\pi}\operatorname{Arg}(w - 1)
   \end{aligned}$$

4. **Transform Back:**
   Substitute $w = \sin(iz)$:
   $$\phi(x,y) = 15 - \frac{9}{\pi}\operatorname{Arg}(\sin(iz) + 1) + \frac{17}{\pi}\operatorname{Arg}(\sin(iz) - 1)$$

5. **Construct the Complex Potential $\Omega(z)$:**
   $$\Omega(z) = 15i - \frac{9}{\pi}\operatorname{Ln}(\sin(iz) + 1) + \frac{17}{\pi}\operatorname{Ln}(\sin(iz) - 1)$$

$$\boxed{\begin{aligned}
\phi(x,y) &= 15 - \frac{9}{\pi}\operatorname{Arg}(\sin(iz) + 1) + \frac{17}{\pi}\operatorname{Arg}(\sin(iz) - 1) \\
\Omega(z) &= 15i - \frac{9}{\pi}\operatorname{Ln}(\sin(iz) + 1) + \frac{17}{\pi}\operatorname{Ln}(\sin(iz) - 1)
\end{aligned}}$$

---

**Problem 8.** Find the steady-state temperature $\phi(x,y)$ and a complex potential function $\Omega(z)$ in the domain $D$ bounded by the lines $y = x+2$, $y = x-2$, and $y = -x$ (for $y \ge -x$). The boundary conditions are $\phi(x, x+2) = 10$, $\phi(x, -x) = 7$, and $\phi(x, x-2) = 5$.

**Solution.**

1. **Define the Mapping:**
   - The boundaries $y = x+2$ and $y = x-2$ are parallel lines with slope $1$ (distance between them is $2\sqrt{2}$).
   - The boundary $y = -x$ is perpendicular to them (slope $-1$).
   - We rotate the domain by $-\pi/4$ using $z' = e^{-i\pi/4}z = \frac{1-i}{\sqrt{2}}z$.
     This maps the domain to the horizontal strip $x' \ge 0, -\sqrt{2} < y' < \sqrt{2}$.
   - We scale the width to $\pi$ by multiplying by $\frac{\pi}{2\sqrt{2}}$:
     $$z'' = \frac{\pi}{2\sqrt{2}} z' = \frac{\pi}{4}(1 - i)z$$
     This maps the domain to the strip $x'' \ge 0, -\pi/2 < y'' < \pi/2$.
   - We rotate the strip to be vertical by multiplying by $i$:
     $$z''' = i z'' = \frac{\pi}{4}(1 + i)z$$
     This maps the domain to $-\pi/2 < x''' < \pi/2, y''' > 0$.
   - Now we apply the sine mapping:
     $$w = \sin z''' = \sin\left(\frac{\pi}{4}(1 + i)z\right)$$
     This maps the domain onto the upper half-plane $\operatorname{Im}(w) > 0$.

2. **Map the Boundary Conditions:**
   - The boundary $y = x+2$ corresponds to $y'' = \pi/2 \implies x''' = -\pi/2$, which maps to $u < -1$ ($u_1 = -1$). The boundary condition is $k_0 = 10$.
   - The boundary $y = -x$ corresponds to $x'' = 0 \implies y''' = 0$, which maps to $-1 < u < 1$ ($u_2 = 1$). The boundary condition is $k_1 = 7$.
   - The boundary $y = x-2$ corresponds to $y'' = -\pi/2 \implies x''' = \pi/2$, which maps to $u > 1$. The boundary condition is $k_2 = 5$.

3. **Solve in the $w$-plane:**
   Using the half-plane formula:
   $$\Phi(u,v) = k_2 + \frac{1}{\pi} [ (k_0 - k_1)\operatorname{Arg}(w + 1) + (k_1 - k_2)\operatorname{Arg}(w - 1) ]$$
   Substitute the values:
   $$\begin{aligned}
   \Phi(u,v) &= 5 + \frac{1}{\pi} [ (10 - 7)\operatorname{Arg}(w + 1) + (7 - 5)\operatorname{Arg}(w - 1) ] \\
   &= 5 + \frac{3}{\pi}\operatorname{Arg}(w + 1) + \frac{2}{\pi}\operatorname{Arg}(w - 1)
   \end{aligned}$$

4. **Transform Back:**
   Substitute $w = \sin\left(\frac{\pi}{4}(1 + i)z\right)$:
   $$\phi(x,y) = \boxed{5 + \frac{2}{\pi}\operatorname{Arg}\left(\sin\left(\frac{\pi}{4}(1 + i)z\right) - 1\right) + \frac{3}{\pi}\operatorname{Arg}\left(\sin\left(\frac{\pi}{4}(1 + i)z\right) + 1\right)}$$

5. **Construct the Complex Potential $\Omega(z)$:**
   $$\Omega(z) = \boxed{5i + \frac{2}{\pi}\operatorname{Ln}\left(\sin\left(\frac{\pi}{4}(1 + i)z\right) - 1\right) + \frac{3}{\pi}\operatorname{Ln}\left(\sin\left(\frac{\pi}{4}(1 + i)z\right) + 1\right)}$$

---

## Focus on Concepts

---

**Problem 9.** Use the analytic mapping $w = z^{1/4}$ and (10) to solve the Dirichlet problem shown in Figure 4.28. Find a complex potential function $\Omega(z)$ for $\phi(x,y)$.

![Figure 4.28](../../extracted_figures/figure_4_28.png)

**Figure 4.28** Dirichlet problem in a sector of angle $\pi/4$.

**Solution.**

1. **Understand the Domain and Mapping:**
   - The domain of interest is the sector $0 < \arg(w) < \pi/4$ in the $w$-plane.
   - The mapping is given by:
     $$z = w^4 \implies w = z^{1/4}$$
     If $w = \rho e^{i\theta}$, then $z = \rho^4 e^{i 4\theta}$.
     Since $0 < \theta < \pi/4$, the argument of $z$ satisfies $0 < 4\theta < \pi$, which maps the sector to the upper half-plane $\operatorname{Im}(z) > 0$.
     This maps the boundaries of the sector to the real axis of the $z$-plane.

2. **Map the Boundary Conditions:**
   - **Ray $\theta = \pi/4$:** This ray corresponds to the negative real axis of the $z$-plane ($x < 0$).
     - For $|w| > 1$, we have $x < -1$ ($u_1 = -1$). The boundary condition is $\Phi = 7$.
     - For $0 < |w| < 1$, we have $-1 < x < 0$ ($u_2 = 0$). The boundary condition is $\Phi = 4$.
   - **Ray $\theta = 0$ (Positive Real Axis):** This ray corresponds to the positive real axis of the $z$-plane ($x > 0$).
     - For $0 < |w| < 1$, we have $0 < x < 1$ ($u_3 = 1$). The boundary condition is $\Phi = -3$.
     - For $|w| > 1$, we have $x > 1$. The boundary condition is $\Phi = 2$.

   Thus, the division points on the real axis of the $z$-plane are $x_1 = -1$, $x_2 = 0$, and $x_3 = 1$, separating four intervals with boundary values $k_0 = 7$, $k_1 = 4$, $k_2 = -3$, and $k_3 = 2$.

3. **Solve in the $z$-plane:**
   Using the half-plane formula (10):
   $$\Phi(x,y) = k_3 + \frac{1}{\pi} [ (k_0 - k_1)\operatorname{Arg}(z + 1) + (k_1 - k_2)\operatorname{Arg}(z) + (k_2 - k_3)\operatorname{Arg}(z - 1) ]$$
   Substitute the values:
   $$\begin{aligned}
   \Phi(x,y) &= 2 + \frac{1}{\pi} [ (7 - 4)\operatorname{Arg}(z + 1) + (4 - (-3))\operatorname{Arg}(z) + (-3 - 2)\operatorname{Arg}(z - 1) ] \\
   &= 2 + \frac{3}{\pi}\operatorname{Arg}(z + 1) + \frac{7}{\pi}\operatorname{Arg}(z) - \frac{5}{\pi}\operatorname{Arg}(z - 1)
   \end{aligned}$$

4. **Transform Back to the $w$-plane:**
   Substitute $z = w^4$ to find the temperature profile $\phi(u,v)$ in the sector:
   $$\phi(u,v) = \boxed{2 - \frac{5}{\pi}\operatorname{Arg}(w^4 - 1) + \frac{7}{\pi}\operatorname{Arg}(w^4) + \frac{3}{\pi}\operatorname{Arg}(w^4 + 1)}$$

5. **Construct the Complex Potential $\Omega(w)$:**
   $$\Omega(w) = \boxed{2i - \frac{5}{\pi}\operatorname{Ln}(w^4 - 1) + \frac{7}{\pi}\operatorname{Ln}(w^4) + \frac{3}{\pi}\operatorname{Ln}(w^4 + 1)}$$

---

**Problem 10.** Use the analytic mapping $w = \sin^{-1} z$ and (2) to solve the Dirichlet problem shown in Figure 4.29. Find the complex potential function $\Omega(z)$ for $\phi(x,y)$.

![Figure 4.29](../../extracted_figures/figure_4_29.png)

**Figure 4.29** Dirichlet problem in the upper half-plane with piecewise constant boundary conditions.

**Solution.**

1. **Understand the Domain and Mapping:**
   - The domain $D$ is the upper half-plane $\operatorname{Im}(z) > 0$.
   - The boundary conditions on the real axis $y = 0$ are:
     - $\phi(x,0) = 10$ for $-1 < x < 1$
     - $\phi(x,0) = -4$ for $|x| > 1$
   - Although the problem suggests using the mapping $w = \sin^{-1} z$ to relate this to a strip domain (where the solution would be linear between parallel boundaries), we can write the solution in the $z$-plane directly using the half-plane formula (10).

2. **Set up the Direct Solution:**
   - The division points on the real axis are $x_1 = -1$ and $x_2 = 1$.
   - The boundary values are:
     - $k_0 = -4$ for $x < -1$
     - $k_1 = 10$ for $-1 < x < 1$
     - $k_2 = -4$ for $x > 1$
   
   Using formula (10):
   $$\begin{aligned}
   \phi(x,y) &= k_2 + \frac{1}{\pi} [ (k_0 - k_1)\operatorname{Arg}(z + 1) + (k_1 - k_2)\operatorname{Arg}(z - 1) ] \\
   &= -4 + \frac{1}{\pi} [ (-4 - 10)\operatorname{Arg}(z + 1) + (10 - (-4))\operatorname{Arg}(z - 1) ] \\
   &= -4 - \frac{14}{\pi}\operatorname{Arg}(z + 1) + \frac{14}{\pi}\operatorname{Arg}(z - 1) \\
   &= -4 + \frac{14}{\pi}[\operatorname{Arg}(z - 1) - \operatorname{Arg}(z + 1)]
   \end{aligned}$$

3. **Connection to the Conformal Mapping $w = \sin^{-1} z$:**
   The mapping $w = \sin^{-1} z$ (where $w = u + iv$) maps the upper half-plane $\operatorname{Im}(z) > 0$ onto the vertical semi-infinite strip $-\pi/2 < u < \pi/2$, $v > 0$.
   - The boundary interval $[-1, 1]$ (where $\phi = 10$) maps to the bottom boundary $v = 0$ of the strip.
   - The boundary rays $|x| > 1$ (where $\phi = -4$) map to the vertical boundaries $u = \pm \pi/2$ of the strip.
   
   In the $w$-plane, the potential $\Phi(u,v)$ satisfies:
   $$\Phi(u,v) = -4 + \frac{14}{\pi} \operatorname{Im}\left( \operatorname{Ln}\left(\frac{\sin w - 1}{\sin w + 1}\right) \right)$$
   which maps back to the $z$-plane as our direct solution.

4. **Construct the Complex Potential $\Omega(z)$:**
   Replacing $\operatorname{Arg}$ with $\operatorname{Ln}$ and multiplying the constant by $i$:
   $$\Omega(z) = \boxed{-4i + \frac{14}{\pi}[\operatorname{Ln}(z - 1) - \operatorname{Ln}(z + 1)]}$$

$$\boxed{\begin{aligned}
\phi(x,y) &= -4 + \frac{14}{\pi}[\operatorname{Arg}(z - 1) - \operatorname{Arg}(z + 1)] \\
\Omega(z) &= -4i + \frac{14}{\pi}[\operatorname{Ln}(z - 1) - \operatorname{Ln}(z + 1)]
\end{aligned}}$$

---

*End of Section 4.5 — Applications*
