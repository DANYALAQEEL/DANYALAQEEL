# Complex Analysis — Dennis G. Zill, 2nd Edition
## Chapter 4 — Chapter 4 Review Quiz
### Problems 1 – 40 · Complete Solutions

---

## Problems 1 – 20: True or False with Justifications

---

**Problem 1.** If $|e^z| = 1$, then $z$ is a pure imaginary number.

**Solution.**

1. Let $z = x + iy$ where $x, y \in \mathbb{R}$.
2. The modulus of the complex exponential is given by:
   $$|e^z| = |e^{x+iy}| = |e^x e^{iy}| = e^x |e^{iy}|$$
3. Since $|e^{iy}| = 1$ for all real $y$, we have:
   $$|e^z| = e^x$$
4. Set $|e^z| = 1$:
   $$e^x = 1 \implies x = 0$$
5. Thus, $z = 0 + iy = iy$, which means $z$ lies on the imaginary axis (it is a pure imaginary number).

**Answer:** **True** $\square$

---

**Problem 2.** $\operatorname{Re}(e^z) = \cos y$.

**Solution.**

1. Let $z = x + iy$ where $x, y \in \mathbb{R}$.
2. By Euler's formula:
   $$e^z = e^x(\cos y + i \sin y) = e^x \cos y + i e^x \sin y$$
3. The real part is:
   $$\operatorname{Re}(e^z) = e^x \cos y$$
4. This is equal to $\cos y$ if and only if $e^x = 1$, which requires $x = 0$. Since $x$ is not necessarily zero for an arbitrary complex number $z$, the statement is false in general.
5. **Counterexample:** Let $z = 1 + 0i = 1$. Then $\operatorname{Re}(e^1) = e \approx 2.718$, but $\cos(0) = 1 \neq e$.

**Answer:** **False** $\square$

---

**Problem 3.** The mapping $w = e^z$ takes vertical lines in the $z$-plane onto horizontal lines in the $w$-plane.

**Solution.**

1. Let $z = x + iy$.
2. A vertical line in the $z$-plane is defined by $x = c_1$ (constant), where $y$ varies. Under the mapping $w = e^z$:
   $$w = e^{c_1 + iy} = e^{c_1} e^{iy}$$
   Since $e^{c_1}$ is a positive constant and $y$ varies, this represents a circle centered at the origin with radius $e^{c_1}$ in the $w$-plane.
3. A horizontal line in the $z$-plane is defined by $y = c_2$ (constant), where $x$ varies. Under the mapping:
   $$w = e^{x + i c_2} = e^x e^{i c_2}$$
   Since $e^x > 0$ and the argument is fixed at $c_2$, this represents a ray emanating from the origin with angle $c_2$ in the $w$-plane.
4. Therefore, vertical lines map to concentric circles and horizontal lines map to rays.

**Answer:** **False** $\square$

---

**Problem 4.** There are infinitely many solutions $z$ to the equation $e^z = w$.

**Solution.**

1. Let $w \in \mathbb{C}$ be a nonzero complex number.
2. The complex exponential function is periodic with a fundamental period of $2\pi i$:
   $$e^{z + 2k\pi i} = e^z \cdot e^{2k\pi i} = e^z \cdot 1 = e^z, \quad k \in \mathbb{Z}$$
3. Therefore, if $z_0$ is a solution to the equation $e^z = w$, then $z_0 + 2k\pi i$ is also a solution for any integer $k$.
4. This generates a countably infinite set of distinct solutions. (If $w = 0$, there are no solutions, but the statement assumes a solvable equation, i.e., $w \neq 0$).

**Answer:** **True** $\square$

---

**Problem 5.** $\ln i = \frac{1}{2}\pi i$.

**Solution.**

1. The complex logarithm $\ln z$ is a multiple-valued relation defined by:
   $$\ln z = \log_e |z| + i (\operatorname{Arg} z + 2n\pi), \quad n \in \mathbb{Z}$$
2. For $z = i$, we have $|i| = 1$ and $\operatorname{Arg} i = \pi/2$. Thus:
   $$\ln i = \log_e(1) + i \left(\frac{\pi}{2} + 2n\pi\right) = i \frac{(4n+1)\pi}{2}, \quad n \in \mathbb{Z}$$
3. The statement gives only the principal value:
   $$\operatorname{Ln} i = \frac{1}{2}\pi i \quad (n=0)$$
   but since $\ln i$ represents the entire infinite set of values, writing it as a single value is false.

**Answer:** **False** $\square$

---

**Problem 6.** $\operatorname{Im}(\ln z) = \arg(z)$.

**Solution.**

1. By definition, the complex logarithm is:
   $$\ln z = \log_e |z| + i \arg(z)$$
   where $\arg(z)$ is the set of all arguments of $z$.
2. Taking the imaginary part of both sides:
   $$\operatorname{Im}(\ln z) = \arg(z)$$
   as sets of values.

**Answer:** **True** $\square$

---

**Problem 7.** For all nonzero complex $z$, $e^{\operatorname{Ln} z} = z$.

**Solution.**

1. The principal logarithm $\operatorname{Ln} z$ is defined by:
   $$\operatorname{Ln} z = \log_e|z| + i\operatorname{Arg} z$$
2. Substitute this into the exponential function:
   $$e^{\operatorname{Ln} z} = e^{\log_e|z| + i\operatorname{Arg} z} = e^{\log_e|z|} \cdot e^{i\operatorname{Arg} z} = |z| e^{i\operatorname{Arg} z}$$
3. By the polar representation of complex numbers, $|z| e^{i\operatorname{Arg} z} = z$. This holds for all $z \neq 0$.

**Answer:** **True** $\square$

---

**Problem 8.** If $w_1$ and $w_2$ are two values of $\ln z$, then $\operatorname{Re}(w_1) = \operatorname{Re}(w_2)$.

**Solution.**

1. Let $w \in \ln z$. Then $w = \log_e|z| + i(\operatorname{Arg} z + 2n\pi)$ for some $n \in \mathbb{Z}$.
2. The real part of $w$ is:
   $$\operatorname{Re}(w) = \log_e|z|$$
3. Since the modulus $|z|$ is uniquely determined for any nonzero complex number $z$, the real part is single-valued and independent of the branch $n$.
4. Thus, $\operatorname{Re}(w_1) = \operatorname{Re}(w_2) = \log_e|z|$.

**Answer:** **True** $\square$

---

**Problem 9.** $\operatorname{Ln}(1/z) = -\operatorname{Ln} z$ for all nonzero $z$.

**Solution.**

1. Let $z = -1$.
2. Compute the left-hand side:
   $$\operatorname{Ln}\left(\frac{1}{-1}\right) = \operatorname{Ln}(-1) = \log_e|-1| + i\operatorname{Arg}(-1) = 0 + i\pi = i\pi$$
3. Compute the right-hand side:
   $$-\operatorname{Ln}(-1) = -i\pi$$
4. Since $i\pi \neq -i\pi$, the identity fails for $z = -1$ (and indeed for all negative real numbers where the argument jumps across the branch cut).

**Answer:** **False** $\square$

---

**Problem 10.** For all nonzero complex numbers, $\operatorname{Ln}(z_1 z_2) = \operatorname{Ln} z_1 + \operatorname{Ln} z_2$.

**Solution.**

1. Let $z_1 = -1$ and $z_2 = -1$.
2. Compute the left-hand side:
   $$\operatorname{Ln}(z_1 z_2) = \operatorname{Ln}((-1)(-1)) = \operatorname{Ln}(1) = 0$$
3. Compute the right-hand side:
   $$\operatorname{Ln} z_1 + \operatorname{Ln} z_2 = \operatorname{Ln}(-1) + \operatorname{Ln}(-1) = i\pi + i\pi = 2\pi i$$
4. Since $0 \neq 2\pi i$, the identity does not hold in general because the sum of the principal arguments can lie outside the range $(-\pi, \pi]$.

**Answer:** **False** $\square$

---

**Problem 11.** $\operatorname{Ln} z$ is an entire function.

**Solution.**

1. By definition, an entire function must be analytic (differentiable) at every point in the complex plane $\mathbb{C}$.
2. The principal logarithm $\operatorname{Ln} z$ is discontinuous along the nonpositive real axis:
   $$\{ z \in \mathbb{C} : \operatorname{Re}(z) \le 0, \ \operatorname{Im}(z) = 0 \}$$
   which serves as its branch cut.
3. Since it is not continuous on this ray, it cannot be differentiable there, and thus is not entire.

**Answer:** **False** $\square$

---

**Problem 12.** The principal value of $i^{i+1}$ is $e^{-\pi/2+i}$.

**Solution.**

1. The principal value of $z^\alpha$ is defined as:
   $$\text{P.V.}[z^\alpha] = e^{\alpha \operatorname{Ln} z}$$
2. For $z = i$ and $\alpha = i+1$:
   $$\operatorname{Ln} i = i\frac{\pi}{2}$$
3. Multiply the exponent:
   $$\alpha \operatorname{Ln} z = (i+1)\left(i\frac{\pi}{2}\right) = i^2\frac{\pi}{2} + i\frac{\pi}{2} = -\frac{\pi}{2} + i\frac{\pi}{2}$$
4. Thus, the principal value is:
   $$\text{P.V.}[i^{i+1}] = e^{-\pi/2 + i\pi/2}$$
5. The exponent has imaginary part $\pi/2$, which is not equal to $1$.

**Answer:** **False** $\square$

---

**Problem 13.** The complex power $z^\alpha$ is always multiple-valued.

**Solution.**

1. The complex power is defined as:
   $$z^\alpha = e^{\alpha \ln z} = e^{\alpha [ \log_e|z| + i(\operatorname{Arg} z + 2k\pi) ]}, \quad k \in \mathbb{Z}$$
2. If the exponent $\alpha = n$ is an integer ($n \in \mathbb{Z}$), then:
   $$e^{in(2k\pi)} = e^{i2nk\pi} = 1$$
   so the expression simplifies to:
   $$z^n = e^{n \log_e|z|} e^{in\operatorname{Arg} z} = |z|^n e^{in\operatorname{Arg} z}$$
   which has exactly one value.
3. Therefore, complex powers with integer exponents are single-valued.

**Answer:** **False** $\square$

---

**Problem 14.** $\cos z$ is a periodic function with a period of $2\pi$.

**Solution.**

1. Use the complex exponential definition of cosine:
   $$\cos(z + 2\pi) = \frac{e^{i(z + 2\pi)} + e^{-i(z + 2\pi)}}{2}$$
2. Expand the exponents:
   $$\cos(z + 2\pi) = \frac{e^{iz}e^{2\pi i} + e^{-iz}e^{-2\pi i}}{2}$$
3. Since $e^{2\pi i} = e^{-2\pi i} = 1$:
   $$\cos(z + 2\pi) = \frac{e^{iz}\cdot 1 + e^{-iz}\cdot 1}{2} = \frac{e^{iz} + e^{-iz}}{2} = \cos z$$
4. Thus, $\cos z$ has a period of $2\pi$.

**Answer:** **True** $\square$

---

**Problem 15.** There are complex $z$ such that |sin z| > 1.

**Solution.**

1. Let $z = iy$ where $y \in \mathbb{R}$.
2. Evaluate the complex sine function:
   $$\sin(iy) = \frac{e^{i(iy)} - e^{-i(iy)}}{2i} = \frac{e^{-y} - e^y}{2i} = i\left(\frac{e^y - e^{-y}}{2}\right) = i\sinh y$$
3. Take the modulus:
   $$|\sin(iy)| = |i\sinh y| = |\sinh y|$$
4. Since the real hyperbolic sine function $\sinh y$ is unbounded as $y \to \infty$, we can choose $y$ such that $|\sinh y| > 1$.
5. For example, let $z = i$:
   $$|\sin i| = \sinh 1 = \frac{e - e^{-1}}{2} \approx 1.1752 > 1$$

**Answer:** **True** $\square$

---

**Problem 16.** $\tan z$ has singularities at $z = (2n + 1) \pi/2$, for $n = 0, \pm 1, \pm 2, \dots$.

**Solution.**

1. The tangent function is defined as:
   $$\tan z = \frac{\sin z}{\cos z}$$
2. Singularities occur at the zeros of the denominator:
   $$\cos z = 0 \implies \frac{e^{iz} + e^{-iz}}{2} = 0 \implies e^{2iz} = -1$$
3. Solve for $z$:
   $$2iz = \ln(-1) = i(\pi + 2n\pi) \implies z = \frac{(2n+1)\pi}{2}, \quad n \in \mathbb{Z}$$
4. At these points, the function is undefined and has simple poles.

**Answer:** **True** $\square$

---

**Problem 17.** $\cosh z = \cos(iz)$.

**Solution.**

1. Expand the right-hand side using the exponential definition of cosine:
   $$\cos(iz) = \frac{e^{i(iz)} + e^{-i(iz)}}{2} = \frac{e^{-z} + e^z}{2} = \frac{e^z + e^{-z}}{2}$$
2. By definition:
   $$\cosh z = \frac{e^z + e^{-z}}{2}$$
3. Therefore, $\cosh z = \cos(iz)$ holds for all $z \in \mathbb{C}$.

**Answer:** **True** $\square$

---

**Problem 18.** $z = \frac{1}{2}\pi i$ is a zero of $\cosh z$.

**Solution.**

1. Substitute $z = \frac{1}{2}\pi i$ into the hyperbolic cosine:
   $$\cosh\left(i\frac{\pi}{2}\right) = \frac{e^{i\pi/2} + e^{-i\pi/2}}{2}$$
2. Since $e^{i\pi/2} = i$ and $e^{-i\pi/2} = -i$:
   $$\cosh\left(i\frac{\pi}{2}\right) = \frac{i - i}{2} = 0$$
3. Thus, $z = \frac{1}{2}\pi i$ is indeed a zero of $\cosh z$.

**Answer:** **True** $\square$

---

**Problem 19.** The function $\sin \bar{z}$ is nowhere analytic.

**Solution.**

1. Let $f(z) = \sin \bar{z} = \sin(x - iy) = \sin x \cosh y - i\cos x \sinh y$.
2. The real and imaginary parts are:
   $$u(x,y) = \sin x \cosh y, \qquad v(x,y) = -\cos x \sinh y$$
3. Compute the partial derivatives:
   $$\frac{\partial u}{\partial x} = \cos x \cosh y, \qquad \frac{\partial v}{\partial y} = -\cos x \cosh y$$
   $$\frac{\partial u}{\partial y} = \sin x \sinh y, \qquad \frac{\partial v}{\partial x} = \sin x \sinh y$$
4. Check the Cauchy-Riemann equations:
   - First CR equation:
     $$\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y} \implies \cos x \cosh y = -\cos x \cosh y \implies 2\cos x \cosh y = 0$$
     Since $\cosh y \ge 1$ for all real $y$, this requires $\cos x = 0 \implies x = \frac{(2k+1)\pi}{2}$ for $k \in \mathbb{Z}$.
   - Second CR equation:
     $$\frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x} \implies \sin x \sinh y = -\sin x \sinh y \implies 2\sin x \sinh y = 0$$
     Since $x = \frac{(2k+1)\pi}{2}$, we have $\sin x = \pm 1 \neq 0$. Thus, this requires $\sinh y = 0 \implies y = 0$.
5. The Cauchy-Riemann equations hold only at the isolated points $z = \frac{(2k+1)\pi}{2}$ on the real axis.
6. Since there is no open neighborhood where the Cauchy-Riemann equations hold, the function is nowhere analytic.

**Answer:** **True** $\square$

---

**Problem 20.** Every branch of $\tan^{-1} z$ is entire.

**Solution.**

1. The inverse tangent is defined by:
   $$\tan^{-1} z = \frac{i}{2} \ln \left( \frac{i+z}{i-z} \right)$$
2. Singularities and branch points occur where the argument of the logarithm is zero or undefined:
   $$i+z = 0 \implies z = -i \qquad \text{and} \qquad i-z = 0 \implies z = i$$
3. Thus, $z = \pm i$ are branch points.
4. Any branch of $\tan^{-1} z$ must contain a branch cut connecting these two points.
5. Because of the branch cut, the function cannot be differentiable everywhere in the complex plane, so it is not entire.

**Answer:** **False** $\square$

---

## Problems 21 – 40: Fill in the Blanks

---

**Problem 21.** The real and imaginary parts of $e^z$ are $u(x, y) =$ _______ and $v(x, y) =$ _______.

**Solution.**

1. Write $z = x + iy$. Using Euler's formula:
   $$e^z = e^x(\cos y + i\sin y) = e^x\cos y + i e^x\sin y$$
2. Identify the real part $u(x,y)$ and the imaginary part $v(x,y)$:
   $$u(x,y) = e^x\cos y, \qquad v(x,y) = e^x\sin y$$

**Answer:** **$e^x\cos y$** and **$e^x\sin y$**

---

**Problem 22.** The domain of $\operatorname{Ln} z$ is _______, and its range is _______.

**Solution.**

1. The principal value of the complex logarithm $\operatorname{Ln} z = \log_e |z| + i \operatorname{Arg} z$ requires $z \neq 0$, so $|z| > 0$.
2. The domain is the set of all nonzero complex numbers: $\mathbb{C} \setminus \{0\}$.
3. Since $\operatorname{Arg} z \in (-\pi, \pi]$ and $\log_e |z| \in (-\infty, \infty)$ for all $|z| > 0$, the range of the function in the $w$-plane is the horizontal strip:
   $$-\infty < \operatorname{Re}(w) < \infty, \qquad -\pi < \operatorname{Im}(w) \le \pi$$

**Answer:** **$|z| > 0$** and **$-\infty < \operatorname{Re}(w) < \infty, \ -\pi < \operatorname{Im}(w) \le \pi$**

---

**Problem 23.** $\operatorname{Ln}(\sqrt{3} + i) =$ _______.

**Solution.**

1. Let $z = \sqrt{3} + i$.
2. Compute the modulus $|z|$:
   $$|z| = \sqrt{(\sqrt{3})^2 + 1^2} = \sqrt{3 + 1} = 2$$
3. Since $z$ is in the first quadrant, the principal argument is:
   $$\operatorname{Arg} z = \arctan\left(\frac{1}{\sqrt{3}}\right) = \frac{\pi}{6}$$
4. Thus:
   $$\operatorname{Ln}(\sqrt{3} + i) = \log_e 2 + i\frac{\pi}{6}$$

**Answer:** **$\log_e 2 + \frac{\pi}{6}i$**

---

**Problem 24.** The complex exponential function $e^z$ is periodic with a period of _______.

**Solution.**

1. We find a complex constant $T$ such that $e^{z+T} = e^z$ for all $z$.
2. This requires $e^T = 1$:
   $$e^T = e^{\operatorname{Re}(T)}(\cos(\operatorname{Im}(T)) + i\sin(\operatorname{Im}(T))) = 1 \implies \operatorname{Re}(T) = 0 \text{ and } \operatorname{Im}(T) = 2n\pi$$
3. The fundamental period is for $n = 1$, which gives $T = 2\pi i$.

**Answer:** **$2\pi i$**

---

**Problem 25.** If $e^{iz} = 2$, then $z =$ _______.

**Solution.**

1. Take the complex logarithm of both sides:
   $$iz = \ln 2 = \log_e 2 + 2n\pi i, \quad n \in \mathbb{Z}$$
2. Divide by $i$ (or multiply by $-i$):
   $$z = \frac{\log_e 2 + 2n\pi i}{i} = 2n\pi - i\log_e 2, \quad n \in \mathbb{Z}$$

**Answer:** **$2n\pi - i\log_e 2, \ n \in \mathbb{Z}$**

---

**Problem 26.** $\operatorname{Ln}(e^{1-\pi i}) =$ _______.

**Solution.**

1. Evaluate the term inside:
   $$e^{1-\pi i} = e^1 \cdot e^{-\pi i} = e \cdot (-1) = -e$$
2. Take the principal logarithm of $-e$:
   $$\operatorname{Ln}(-e) = \log_e|-e| + i\operatorname{Arg}(-e)$$
3. Since $|-e| = e$ and $\operatorname{Arg}(-e) = \pi$:
   $$\operatorname{Ln}(-e) = \log_e(e) + i\pi = 1 + \pi i$$

**Answer:** **$1 + \pi i$**

---

**Problem 27.** $\operatorname{Ln} z$ is discontinuous on _______.

**Solution.**

1. The principal logarithm $\operatorname{Ln} z = \log_e |z| + i \operatorname{Arg} z$ uses the principal branch of argument $\operatorname{Arg} z \in (-\pi, \pi]$.
2. The discontinuity occurs as the argument jumps from $\pi$ to $-\pi$ across the nonpositive real axis (excluding the origin where the logarithm is undefined).

**Answer:** **the nonpositive real axis ($y = 0, \ x \le 0$)**

---

**Problem 28.** The line segment $x = a$, $-\pi < y \le \pi$, is mapped onto _______ by the mapping $w = e^z$.

**Solution.**

1. Let $z = a + iy$ with $y \in (-\pi, \pi]$.
2. Under the mapping:
   $$w = e^z = e^{a + iy} = e^a e^{iy}$$
3. This represents a circle centered at the origin of radius $R = e^a$. Since the interval for $y$ has length $2\pi$, the image covers the entire circle.

**Answer:** **the circle $|w| = e^a$**

---

**Problem 29.** $\ln (1 + i) =$ _______.

**Solution.**

1. Let $z = 1 + i$.
2. Compute the modulus $|z|$:
   $$|z| = \sqrt{1^2 + 1^2} = \sqrt{2}$$
3. Compute the principal argument:
   $$\operatorname{Arg} z = \arctan\left(\frac{1}{1}\right) = \frac{\pi}{4}$$
4. Apply the definition of the multiple-valued logarithm:
   $$\ln(1+i) = \log_e \sqrt{2} + i\left(\frac{\pi}{4} + 2n\pi\right) = \frac{1}{2}\log_e 2 + i\frac{(8n+1)\pi}{4}, \quad n \in \mathbb{Z}$$

**Answer:** **$\frac{1}{2}\log_e 2 + i\frac{(8n+1)\pi}{4}, \ n \in \mathbb{Z}$**

---

**Problem 30.** If $\ln z$ is pure imaginary, then $|z| =$ _______.

**Solution.**

1. Write the logarithm in real/imaginary parts:
   $$\ln z = \log_e |z| + i \arg(z)$$
2. For $\ln z$ to be pure imaginary, the real part must be zero:
   $$\operatorname{Re}(\ln z) = \log_e |z| = 0 \implies |z| = e^0 = 1$$

**Answer:** **$1$**

---

**Problem 31.** $z_1 = 1$ and $z_2 =$ _______ are two real numbers for which the principal value $z^i = 1$.

**Solution.**

1. The principal value of $z^i$ is defined as:
   $$z^i = e^{i\operatorname{Ln} z}$$
2. For a positive real number $x > 0$, $\operatorname{Ln} x = \log_e x$.
3. Setting $x^i = 1$:
   $$e^{i\log_e x} = 1 \implies i\log_e x = 2k\pi i \implies \log_e x = 2k\pi \implies x = e^{2k\pi}, \quad k \in \mathbb{Z}$$
4. For $k=0$, we get $z_1 = e^0 = 1$.
5. For $k=1$, we get $z_2 = e^{2\pi}$ (or any other $k \in \mathbb{Z} \setminus \{0\}$).

**Answer:** **$e^{2\pi}$**

---

**Problem 32.** The principal value of $i^i$ is _______.

**Solution.**

1. Apply the definition of the principal value:
   $$\text{P.V.}[i^i] = e^{i\operatorname{Ln} i}$$
2. Since $\operatorname{Ln} i = i\frac{\pi}{2}$:
   $$\text{P.V.}[i^i] = e^{i\left(i\frac{\pi}{2}\right)} = e^{-\pi/2}$$

**Answer:** **$e^{-\pi/2}$**

---

**Problem 33.** On the domain $|z| > 0$, $-\pi < \arg(z) < \pi$, the derivative of the principal value of $z^\alpha$ is _______.

**Solution.**

1. The power function $f(z) = z^\alpha = e^{{\alpha}\operatorname{Ln}z}$ is analytic on the domain $|z| > 0, \ -\pi < \arg(z) < \pi$ with derivative:
   $$f'(z) = e^{{\alpha}\operatorname{Ln}z} \cdot \frac{d}{dz}({\alpha}\operatorname{Ln}z) = z^\alpha \cdot \frac{\alpha}{z} = \alpha z^{\alpha-1}$$

**Answer:** **$\alpha z^{\alpha-1}$**

---

**Problem 34.** The complex sine function is defined by $\sin z =$ _______.

**Solution.**

1. By definition, using the complex exponential:
   $$\sin z = \frac{e^{iz} - e^{-iz}}{2i}$$

**Answer:** **$\frac{e^{iz} - e^{-iz}}{2i}$**

---

**Problem 35.** $\cos(4i) =$ _______.

**Solution.**

1. Using the identity $\cos(iy) = \cosh y$:
   $$\cos(4i) = \cosh 4$$

**Answer:** **$\cosh 4$**

---

**Problem 36.** The semi-infinite vertical strip $-\pi/2 \le x \le \pi/2$, $y \ge 0$, is mapped onto _______ by $w = \sin z$.

**Solution.**

1. The mapping $w = \sin z$ maps:
   - The vertical line $x = \pi/2, y \ge 0$ onto the real interval $u \ge 1$.
   - The vertical line $x = -\pi/2, y \ge 0$ onto the real interval $u \le -1$.
   - The horizontal segment $y = 0, -\pi/2 \le x \le \pi/2$ onto the real segment $[-1, 1]$.
2. The interior of the strip maps to the upper half-plane $\operatorname{Im}(w) \ge 0$.

**Answer:** **the upper half-plane $\operatorname{Im}(w) \ge 0$**

---

**Problem 37.** The real and imaginary parts of $\sin z$ are _______ and _______, respectively.

**Solution.**

1. Using the sum formula for complex sine:
   $$\sin(x+iy) = \sin x\cos(iy) + \cos x\sin(iy)$$
2. Since $\cos(iy) = \cosh y$ and $\sin(iy) = i\sinh y$:
   $$\sin z = \sin x\cosh y + i\cos x\sinh y$$
3. Real part $u(x,y) = \sin x\cosh y$ and imaginary part $v(x,y) = \cos x\sinh y$.

**Answer:** **$\sin x\cosh y$** and **$\cos x\sinh y$**

---

**Problem 38.** The complex sine and hyperbolic sine functions are related by the formulas $\sin(iz) =$ _______ and $\sinh(iz) =$ _______.

**Solution.**

1. For $\sin(iz)$:
   $$\sin(iz) = \frac{e^{i(iz)} - e^{-i(iz)}}{2i} = \frac{e^{-z} - e^z}{2i} = -\frac{e^z - e^{-z}}{2i} = i\frac{e^z - e^{-z}}{2} = i\sinh z$$
2. For $\sinh(iz)$:
   $$\sinh(iz) = \frac{e^{iz} - e^{-iz}}{2} = i\frac{e^{iz} - e^{-iz}}{2i} = i\sin z$$

**Answer:** **$i\sinh z$** and **$i\sin z$**

---

**Problem 39.** $\tanh^{-1} z$ is not defined for $z =$ _______.

**Solution.**

1. The inverse hyperbolic tangent function is defined by:
   $$\tanh^{-1} z = \frac{1}{2} \ln \left( \frac{1+z}{1-z} \right)$$
2. The function is undefined when:
   - The denominator of the argument is zero: $1-z = 0 \implies z = 1$
   - The numerator of the argument is zero (which causes the logarithm of zero to be undefined): $1+z = 0 \implies z = -i^2 = -1$
3. Thus, it is not defined for $z = \pm 1$.

**Answer:** **$\pm 1$**

---

**Problem 40.** In order to compute a specific value of $\sin^{-1} z$ you need to choose a branch of _______ and a branch of _______.

**Solution.**

1. The inverse sine function is given by:
   $$\sin^{-1} z = -i \ln \left( iz + (1-z^2)^{1/2} \right)$$
2. To compute a specific, single-valued branch, one must select a branch of the square root $(1-z^2)^{1/2}$ and a branch of the complex logarithm $\ln$.

**Answer:** **the square root $(1-z^2)^{1/2}$** and **the complex logarithm $\ln$**

---

*End of Chapter 4 Review Quiz*
