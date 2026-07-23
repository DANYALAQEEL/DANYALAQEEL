# Complex Analysis — Dennis G. Zill, 2nd Edition
## Chapter 4 · Section 4.1 — Exponential and Logarithmic Functions
### Problems 1 – 66 · Complete Solutions

---

> **Key Concepts**
>
> **Complex Exponential Function**
> For $z = x + iy$:
> $$e^z = e^x(\cos y + i \sin y)$$
> Properties: $|e^z| = e^x$, $\arg(e^z) = y + 2n\pi$, $n \in \mathbb{Z}$.
> The function $e^z$ is entire (analytic on all of $\mathbb{C}$) with $(e^z)' = e^z$.
> It is periodic with period $2\pi i$: $e^{z + 2\pi i} = e^z$.
>
> **Complex Logarithm (Multi-valued)**
> For $z \neq 0$:
> $$\ln z = \log_e|z| + i(\text{Arg}\, z + 2n\pi), \quad n \in \mathbb{Z}$$
>
> **Principal Value of the Logarithm**
> $$\text{Ln}\, z = \log_e|z| + i\,\text{Arg}\, z, \quad -\pi < \text{Arg}\, z \leq \pi$$
> $\text{Ln}\, z$ is analytic on $\mathbb{C}$ minus the non-positive real axis, with $(\text{Ln}\, z)' = \dfrac{1}{z}$.

---

![Figure 4.1](../../extracted_figures/figure_4_1.png)

**Figure 4.1** The fundamental period strip $-\pi < y \leq \pi$ of $w = e^z$. The map $w = e^z$ sends horizontal lines $y = c$ (constant) to rays $\arg(w) = c$, and vertical lines $x = c$ to circles $|w| = e^c$.

---

## 4.1.1 Complex Exponential Function

### Problems 1–4: Derivatives

---

**Problem 1.** Find the derivative of $f(z) = z^2 e^{z+i}$.

**Solution.**

1. Recognize that $f(z) = z^2 \cdot e^{z+i}$ is a product of two differentiable (entire) functions: $u(z) = z^2$ and $v(z) = e^{z+i}$.

2. Apply the **product rule** $[u \cdot v]' = u'v + uv'$:
$$f'(z) = \frac{d}{dz}(z^2) \cdot e^{z+i} + z^2 \cdot \frac{d}{dz}(e^{z+i})$$

3. Compute each derivative:
$$\frac{d}{dz}(z^2) = 2z, \qquad \frac{d}{dz}(e^{z+i}) = e^{z+i}$$

4. Substitute back:
$$f'(z) = 2z \cdot e^{z+i} + z^2 \cdot e^{z+i}$$

5. Factor out the common factor $e^{z+i}$:
$$f'(z) = (2z + z^2)\,e^{z+i} = z(z+2)\,e^{z+i}$$

$$\boxed{f'(z) = z(z+2)\,e^{z+i}}$$

---

**Problem 2.** Find the derivative of
$$f(z) = \frac{3e^{2z} - ie^{-z}}{z^3 - 1 + i}.$$

**Solution.**

1. Let $p(z) = 3e^{2z} - ie^{-z}$ and $q(z) = z^3 - 1 + i$.

2. Compute $p'(z)$:
$$p'(z) = 3 \cdot \frac{d}{dz}(e^{2z}) - i \cdot \frac{d}{dz}(e^{-z}) = 3 \cdot 2e^{2z} - i \cdot (-e^{-z}) = 6e^{2z} + ie^{-z}$$

3. Compute $q'(z)$:
$$q'(z) = \frac{d}{dz}(z^3 - 1 + i) = 3z^2$$

4. Apply the **quotient rule** $\left[\dfrac{p}{q}\right]' = \dfrac{p'q - pq'}{q^2}$:
$$f'(z) = \frac{(6e^{2z} + ie^{-z})(z^3 - 1 + i) - (3e^{2z} - ie^{-z})(3z^2)}{(z^3 - 1 + i)^2}$$

5. Expand the numerator — first term:
$$(6e^{2z} + ie^{-z})(z^3 - 1 + i) = 6e^{2z}(z^3 - 1 + i) + ie^{-z}(z^3 - 1 + i)$$

6. Expand the numerator — second term:
$$(3e^{2z} - ie^{-z})(3z^2) = 9z^2 e^{2z} - 3iz^2 e^{-z}$$

7. Combine all terms in the numerator:
$$\text{Numerator} = 6z^3 e^{2z} - 6e^{2z} + 6ie^{2z} + iz^3 e^{-z} - ie^{-z} + i^2 e^{-z} - 9z^2 e^{2z} + 3iz^2 e^{-z}$$

8. Since $i^2 = -1$, replace $i^2 e^{-z}$ with $-e^{-z}$:
$$= 6z^3 e^{2z} - 9z^2 e^{2z} - 6e^{2z} + 6ie^{2z} + iz^3 e^{-z} + 3iz^2 e^{-z} - ie^{-z} - e^{-z}$$

9. Group by $e^{2z}$ and $e^{-z}$:
$$= e^{2z}(6z^3 - 9z^2 - 6 + 6i) + e^{-z}(iz^3 + 3iz^2 - i - 1)$$

$$\boxed{f'(z) = \frac{e^{2z}(6z^3 - 9z^2 - 6 + 6i) + e^{-z}(iz^3 + 3iz^2 - i - 1)}{(z^3 - 1 + i)^2}}$$

---

**Problem 3.** Find the derivative of $f(z) = e^{iz} - e^{-iz}$.

**Solution.**

1. Apply the **sum/difference rule** and **chain rule** term by term:
$$f'(z) = \frac{d}{dz}(e^{iz}) - \frac{d}{dz}(e^{-iz})$$

2. For $e^{iz}$: the inner function is $iz$, with derivative $i$. By the chain rule:
$$\frac{d}{dz}(e^{iz}) = i \cdot e^{iz}$$

3. For $e^{-iz}$: the inner function is $-iz$, with derivative $-i$. By the chain rule:
$$\frac{d}{dz}(e^{-iz}) = (-i) \cdot e^{-iz} = -ie^{-iz}$$

4. Substitute:
$$f'(z) = ie^{iz} - (-ie^{-iz}) = ie^{iz} + ie^{-iz}$$

5. Factor out $i$:
$$f'(z) = i(e^{iz} + e^{-iz})$$

$$\boxed{f'(z) = i\!\left(e^{iz} + e^{-iz}\right)}$$

*Remark:* Note that $\dfrac{e^{iz} - e^{-iz}}{2i} = \sin z$ and $\dfrac{e^{iz} + e^{-iz}}{2} = \cos z$, so this is consistent with $\dfrac{d}{dz}(2i\sin z) = 2i\cos z = i(e^{iz}+e^{-iz})$.

---

**Problem 4.** Find the derivative of $f(z) = ie^{1/z}$.

**Solution.**

1. Write $f(z) = i \cdot e^{z^{-1}}$. The outer function is $e^{(\cdot)}$ and the inner function is $g(z) = z^{-1} = \dfrac{1}{z}$.

2. Compute the derivative of the inner function:
$$g'(z) = \frac{d}{dz}\!\left(z^{-1}\right) = -z^{-2} = -\frac{1}{z^2}$$

3. Apply the **chain rule**:
$$\frac{d}{dz}\!\left(e^{1/z}\right) = e^{1/z} \cdot g'(z) = e^{1/z} \cdot \left(-\frac{1}{z^2}\right) = -\frac{e^{1/z}}{z^2}$$

4. Multiply by the constant $i$:
$$f'(z) = i \cdot \left(-\frac{e^{1/z}}{z^2}\right) = -\frac{ie^{1/z}}{z^2}$$

$$\boxed{f'(z) = -\frac{ie^{1/z}}{z^2}}$$

*Note:* This function is analytic everywhere except at $z = 0$, which is an isolated essential singularity.

---

### Problems 5–8: Modulus and Argument of Exponentials

---

**Problem 5.** Find $|e^{z^2 - z}|$, where $z = x + iy$.

**Solution.**

1. Use the fundamental property: for any $w = u + iv$, $|e^w| = e^u = e^{\text{Re}(w)}$.

2. Compute $z^2 - z$ with $z = x + iy$:
$$z^2 = (x+iy)^2 = x^2 + 2ixy + (iy)^2 = x^2 - y^2 + 2ixy$$

3. Subtract $z$:
$$z^2 - z = (x^2 - y^2 + 2ixy) - (x + iy) = (x^2 - y^2 - x) + i(2xy - y)$$

4. Extract the real part:
$$\text{Re}(z^2 - z) = x^2 - y^2 - x$$

5. Apply the modulus formula:
$$|e^{z^2 - z}| = e^{\,\text{Re}(z^2 - z)} = e^{x^2 - y^2 - x}$$

$$\boxed{|e^{z^2 - z}| = e^{x^2 - x - y^2}}$$

---

**Problem 6.** Find $\arg\!\left(e^{z - i/z}\right)$, where $z = x + iy$.

**Solution.**

1. Use the property: $\arg(e^w) = \text{Im}(w) + 2n\pi$, $n \in \mathbb{Z}$.

2. Compute $\dfrac{i}{z}$ by multiplying numerator and denominator by the conjugate $\bar{z} = x - iy$:
$$\frac{i}{z} = \frac{i}{x + iy} \cdot \frac{x - iy}{x - iy} = \frac{ix - i^2 y}{x^2 + y^2} = \frac{y + ix}{x^2 + y^2}$$

3. So $\dfrac{i}{z} = \dfrac{y}{x^2 + y^2} + i\dfrac{x}{x^2 + y^2}$.

4. Form $z - \dfrac{i}{z}$:
$$z - \frac{i}{z} = (x + iy) - \left(\frac{y}{x^2+y^2} + i\frac{x}{x^2+y^2}\right)$$

$$= \left(x - \frac{y}{x^2+y^2}\right) + i\left(y - \frac{x}{x^2+y^2}\right)$$

5. Extract the imaginary part:
$$\text{Im}\!\left(z - \frac{i}{z}\right) = y - \frac{x}{x^2 + y^2}$$

6. Therefore:
$$\arg\!\left(e^{z - i/z}\right) = y - \frac{x}{x^2 + y^2} + 2n\pi, \quad n \in \mathbb{Z}$$

$$\boxed{\arg\!\left(e^{z - i/z}\right) = y - \frac{x}{x^2 + y^2} + 2n\pi, \quad n \in \mathbb{Z}}$$

---

**Problem 7.** Find $\arg\!\left(e^{i(z + \bar{z})}\right)$, where $z = x + iy$.

**Solution.**

1. Recall that $\bar{z} = x - iy$, so:
$$z + \bar{z} = (x + iy) + (x - iy) = 2x$$

2. Therefore:
$$i(z + \bar{z}) = i(2x) = 2xi$$

3. This is a purely imaginary number: $i(z+\bar{z}) = 0 + 2xi$.

4. Use the property $\arg(e^w) = \text{Im}(w) + 2n\pi$:
$$\text{Im}(2xi) = 2x$$

5. Therefore:
$$\arg\!\left(e^{i(z + \bar{z})}\right) = 2x + 2n\pi, \quad n \in \mathbb{Z}$$

$$\boxed{\arg\!\left(e^{i(z + \bar{z})}\right) = 2x + 2n\pi, \quad n \in \mathbb{Z}}$$

---

**Problem 8.** Find $|ie^z + 1|$, where $z = x + iy$.

**Solution.**

1. Write $e^z = e^x(\cos y + i\sin y)$, so:
$$ie^z = i \cdot e^x(\cos y + i\sin y) = e^x(i\cos y + i^2 \sin y) = e^x(-\sin y + i\cos y)$$

2. Add 1:
$$ie^z + 1 = (1 - e^x \sin y) + i(e^x \cos y)$$

3. Compute the modulus:
$$|ie^z + 1|^2 = (1 - e^x \sin y)^2 + (e^x \cos y)^2$$

4. Expand $(1 - e^x \sin y)^2$:
$$= 1 - 2e^x \sin y + e^{2x}\sin^2 y$$

5. Expand $(e^x \cos y)^2$:
$$= e^{2x}\cos^2 y$$

6. Add:
$$|ie^z + 1|^2 = 1 - 2e^x \sin y + e^{2x}\sin^2 y + e^{2x}\cos^2 y$$

7. Use $\sin^2 y + \cos^2 y = 1$:
$$= 1 - 2e^x \sin y + e^{2x}(\sin^2 y + \cos^2 y) = 1 - 2e^x \sin y + e^{2x}$$

8. Take the square root:
$$|ie^z + 1| = \sqrt{1 - 2e^x \sin y + e^{2x}}$$

$$\boxed{|ie^z + 1| = \sqrt{1 - 2e^x \sin y + e^{2x}}}$$

---

### Problems 9–12: Express $f(z)$ in $u(x,y) + iv(x,y)$ Form

---

**Problem 9.** Express $f(z) = e^{-iz}$ in the form $u(x,y) + iv(x,y)$.

**Solution.**

1. Write $z = x + iy$, so $-iz = -i(x + iy) = -ix - i^2 y = y - ix$.

2. The exponent $-iz = y + i(-x)$ has real part $y$ and imaginary part $-x$.

3. Apply $e^{u+iv} = e^u(\cos v + i\sin v)$ with $u = y$ and $v = -x$:
$$e^{-iz} = e^{y}\!\left(\cos(-x) + i\sin(-x)\right)$$

4. Use $\cos(-x) = \cos x$ and $\sin(-x) = -\sin x$:
$$e^{-iz} = e^y(\cos x - i\sin x)$$

5. Identify real and imaginary parts:
$$u(x,y) = e^y \cos x, \qquad v(x,y) = -e^y \sin x$$

$$\boxed{f(z) = e^{-iz} = e^y \cos x - i\,e^y \sin x}$$

---

**Problem 10.** Express $f(z) = e^{2\bar{z} + i}$ in the form $u(x,y) + iv(x,y)$.

**Solution.**

1. Write $\bar{z} = x - iy$, so $2\bar{z} = 2x - 2iy$.

2. Add $i$:
$$2\bar{z} + i = 2x - 2iy + i = 2x + i(1 - 2y)$$

3. The exponent has real part $2x$ and imaginary part $1 - 2y$.

4. Apply $e^{a+ib} = e^a(\cos b + i\sin b)$ with $a = 2x$ and $b = 1 - 2y$:
$$e^{2\bar{z}+i} = e^{2x}\!\left(\cos(1 - 2y) + i\sin(1 - 2y)\right)$$

5. Identify real and imaginary parts:
$$u(x,y) = e^{2x}\cos(1 - 2y), \qquad v(x,y) = e^{2x}\sin(1 - 2y)$$

$$\boxed{f(z) = e^{2\bar{z}+i} = e^{2x}\cos(1-2y) + i\,e^{2x}\sin(1-2y)}$$

---

**Problem 11.** Express $f(z) = e^{z^2}$ in the form $u(x,y) + iv(x,y)$.

**Solution.**

1. Compute $z^2$ with $z = x + iy$:
$$z^2 = (x+iy)^2 = x^2 + 2ixy + i^2 y^2 = (x^2 - y^2) + 2ixy$$

2. The exponent has real part $x^2 - y^2$ and imaginary part $2xy$.

3. Apply $e^{a+ib} = e^a(\cos b + i\sin b)$ with $a = x^2 - y^2$ and $b = 2xy$:
$$e^{z^2} = e^{x^2 - y^2}\!\left(\cos(2xy) + i\sin(2xy)\right)$$

4. Identify real and imaginary parts:
$$u(x,y) = e^{x^2 - y^2}\cos(2xy), \qquad v(x,y) = e^{x^2 - y^2}\sin(2xy)$$

$$\boxed{f(z) = e^{z^2} = e^{x^2-y^2}\cos(2xy) + i\,e^{x^2-y^2}\sin(2xy)}$$

---

**Problem 12.** Express $f(z) = e^{1/z}$ in the form $u(x,y) + iv(x,y)$.

**Solution.**

1. Compute $\dfrac{1}{z}$ with $z = x + iy$ by multiplying by the conjugate:
$$\frac{1}{z} = \frac{1}{x+iy} \cdot \frac{x-iy}{x-iy} = \frac{x - iy}{x^2 + y^2} = \frac{x}{x^2+y^2} - i\frac{y}{x^2+y^2}$$

2. The exponent has real part $\dfrac{x}{x^2+y^2}$ and imaginary part $-\dfrac{y}{x^2+y^2}$.

3. Apply $e^{a+ib} = e^a(\cos b + i\sin b)$ with $a = \dfrac{x}{x^2+y^2}$ and $b = -\dfrac{y}{x^2+y^2}$:
$$e^{1/z} = \exp\!\left(\frac{x}{x^2+y^2}\right)\!\left(\cos\!\left(\frac{-y}{x^2+y^2}\right) + i\sin\!\left(\frac{-y}{x^2+y^2}\right)\right)$$

4. Use $\cos(-\theta) = \cos\theta$ and $\sin(-\theta) = -\sin\theta$:
$$e^{1/z} = \exp\!\left(\frac{x}{x^2+y^2}\right)\!\left(\cos\!\left(\frac{y}{x^2+y^2}\right) - i\sin\!\left(\frac{y}{x^2+y^2}\right)\right)$$

5. Identify real and imaginary parts:
$$u(x,y) = e^{x/(x^2+y^2)}\cos\!\left(\frac{y}{x^2+y^2}\right), \qquad v(x,y) = -e^{x/(x^2+y^2)}\sin\!\left(\frac{y}{x^2+y^2}\right)$$

$$\boxed{f(z) = e^{1/z} = e^{x/(x^2+y^2)}\!\left(\cos\!\frac{y}{x^2+y^2} - i\sin\!\frac{y}{x^2+y^2}\right)}$$

---

### Problems 13–14: Domains of Differentiability

---

**Problem 13.** Show that $f(z) = e^{2\bar{z}+i}$ is nowhere differentiable.

**Solution.**

From Problem 10, we have $f(z) = e^{2\bar{z}+i}$ with:
$$u(x,y) = e^{2x}\cos(1-2y), \qquad v(x,y) = e^{2x}\sin(1-2y)$$

1. Compute the four partial derivatives needed for the Cauchy-Riemann equations:

$$\frac{\partial u}{\partial x} = 2e^{2x}\cos(1-2y)$$

$$\frac{\partial u}{\partial y} = e^{2x} \cdot (-\sin(1-2y)) \cdot (-2) = 2e^{2x}\sin(1-2y)$$

$$\frac{\partial v}{\partial x} = 2e^{2x}\sin(1-2y)$$

$$\frac{\partial v}{\partial y} = e^{2x} \cdot \cos(1-2y) \cdot (-2) = -2e^{2x}\cos(1-2y)$$

2. The **Cauchy-Riemann equations** require:
$$\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y} \quad \text{and} \quad \frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x}$$

3. Check the first equation $u_x = v_y$:
$$2e^{2x}\cos(1-2y) = -2e^{2x}\cos(1-2y)$$
$$4e^{2x}\cos(1-2y) = 0$$

Since $e^{2x} > 0$ for all $x$, this requires $\cos(1-2y) = 0$, i.e., $1-2y = \pm\dfrac{\pi}{2} + n\pi$.

4. Check the second equation $u_y = -v_x$:
$$2e^{2x}\sin(1-2y) = -2e^{2x}\sin(1-2y)$$
$$4e^{2x}\sin(1-2y) = 0$$

Since $e^{2x} > 0$, this requires $\sin(1-2y) = 0$, i.e., $1-2y = n\pi$.

5. For both equations to hold simultaneously, we need $\cos(1-2y) = 0$ **and** $\sin(1-2y) = 0$. But $\cos^2\theta + \sin^2\theta = 1 \neq 0$, so no such $y$ exists.

6. Since the Cauchy-Riemann equations are **never simultaneously satisfied**, $f(z) = e^{2\bar{z}+i}$ is **nowhere differentiable**.

$$\boxed{f(z) = e^{2\bar{z}+i} \text{ is nowhere differentiable on } \mathbb{C}}$$

---

**Problem 14.** Show that $f(z) = e^{z^2}$ is an entire function (differentiable everywhere), and find its derivative.

**Solution.**

From Problem 11, we have:
$$u(x,y) = e^{x^2-y^2}\cos(2xy), \qquad v(x,y) = e^{x^2-y^2}\sin(2xy)$$

1. Compute $\dfrac{\partial u}{\partial x}$. Let $A = e^{x^2-y^2}$ and $\theta = 2xy$. Then:
$$\frac{\partial u}{\partial x} = \frac{\partial A}{\partial x}\cos\theta + A\frac{\partial}{\partial x}(\cos\theta)$$
$$= 2x\,e^{x^2-y^2}\cos(2xy) + e^{x^2-y^2}(-\sin(2xy))(2y)$$
$$= e^{x^2-y^2}(2x\cos(2xy) - 2y\sin(2xy))$$

2. Compute $\dfrac{\partial v}{\partial y}$:
$$\frac{\partial v}{\partial y} = \frac{\partial A}{\partial y}\sin\theta + A\frac{\partial}{\partial y}(\sin\theta)$$
$$= (-2y)\,e^{x^2-y^2}\sin(2xy) + e^{x^2-y^2}\cos(2xy)(2x)$$
$$= e^{x^2-y^2}(2x\cos(2xy) - 2y\sin(2xy))$$

3. Thus $\dfrac{\partial u}{\partial x} = \dfrac{\partial v}{\partial y}$ everywhere. $\checkmark$

4. Compute $\dfrac{\partial u}{\partial y}$:
$$\frac{\partial u}{\partial y} = (-2y)\,e^{x^2-y^2}\cos(2xy) + e^{x^2-y^2}(-\sin(2xy))(2x)$$
$$= e^{x^2-y^2}(-2y\cos(2xy) - 2x\sin(2xy))$$

5. Compute $\dfrac{\partial v}{\partial x}$:
$$\frac{\partial v}{\partial x} = 2x\,e^{x^2-y^2}\sin(2xy) + e^{x^2-y^2}\cos(2xy)(2y)$$
$$= e^{x^2-y^2}(2x\sin(2xy) + 2y\cos(2xy))$$

6. Check $\dfrac{\partial u}{\partial y} = -\dfrac{\partial v}{\partial x}$:
$$e^{x^2-y^2}(-2y\cos(2xy) - 2x\sin(2xy)) = -e^{x^2-y^2}(2x\sin(2xy) + 2y\cos(2xy)) \checkmark$$

7. Both Cauchy-Riemann equations are satisfied for all $(x,y) \in \mathbb{R}^2$, and all partial derivatives are continuous. Therefore $f(z) = e^{z^2}$ is **entire**.

8. The derivative is most easily computed by the chain rule (treating $e^z$ as entire):
$$f'(z) = e^{z^2} \cdot \frac{d}{dz}(z^2) = 2z\,e^{z^2}$$

$$\boxed{f(z) = e^{z^2} \text{ is entire, and } f'(z) = 2z\,e^{z^2}}$$

---

## 4.1.2 Images Under $w = e^z$

### Problems 15–20: Mapping Properties

---

**Problem 15.** Find the image of the line $y = -2$ under $w = e^z$.

![Figure 4.2](../../extracted_figures/figure_4_2.png)

**Solution.**

1. On the line $y = -2$, we have $z = x + i(-2) = x - 2i$ for $-\infty < x < \infty$.

2. Apply $w = e^z = e^{x-2i}$:
$$w = e^x \cdot e^{-2i} = e^x(\cos(-2) + i\sin(-2))$$

3. The modulus is $|w| = e^x$, which ranges over $(0, \infty)$ as $x$ ranges over $(-\infty, \infty)$.

4. The argument is $\arg(w) = -2$ (constant, for all $x$).

5. A point with fixed argument $-2$ and variable positive modulus traces a **ray** emanating from the origin at angle $-2$ radians.

$$\boxed{\text{The image is the ray } \arg(w) = -2 \text{ (i.e., the ray from the origin at angle } {-2}\text{ rad)}}$$

---

**Problem 16.** Find the image of the line $x = 3$ under $w = e^z$.

![Figure 4.3](../../extracted_figures/figure_4_3.png)

**Solution.**

1. On the line $x = 3$, we have $z = 3 + iy$ for $-\infty < y < \infty$.

2. Apply $w = e^z = e^{3+iy}$:
$$w = e^3 \cdot e^{iy} = e^3(\cos y + i\sin y)$$

3. The modulus is $|w| = e^3$ (constant).

4. The argument is $\arg(w) = y$, which ranges over all real values.

5. A point with fixed modulus $e^3$ traces the **circle** $|w| = e^3$.

$$\boxed{\text{The image is the circle } |w| = e^3}$$

---

**Problem 17.** Find the image of the vertical strip $1 < x \leq 2$ under $w = e^z$.

![Figure 4.4](../../extracted_figures/figure_4_4.png)

**Solution.**

1. For $z = x + iy$ with $1 < x \leq 2$ and $-\infty < y < \infty$:
$$|w| = e^x, \quad \arg(w) = y$$

2. As $x$ ranges over $(1, 2]$, $|w| = e^x$ ranges over $(e^1, e^2] = (e, e^2]$.

3. As $y$ ranges over $(-\infty, \infty)$, the argument covers all angles, so each circle of radius $e^x$ is traced completely.

4. The image is the **annulus** $\{w : e < |w| \leq e^2\}$.

$$\boxed{\text{The image is the annulus } e < |w| \leq e^2}$$

---

**Problem 18.** Find the image of the square $0 \leq x \leq 1$, $0 \leq y \leq 1$ under $w = e^z$.

![Figure 4.5](../../extracted_figures/figure_4_5.png)

**Solution.**

1. For $z = x + iy$ with $0 \leq x \leq 1$ and $0 \leq y \leq 1$:
$$|w| = e^x \in [e^0, e^1] = [1, e]$$
$$\arg(w) = y \in [0, 1]$$

2. The modulus ranges in $[1, e]$ and the argument ranges in $[0, 1]$ (radians).

3. The image is the **polar region**:
$$\{w : 1 \leq |w| \leq e, \; 0 \leq \arg(w) \leq 1\}$$

This is a sector-like region (a "wedge of an annulus") bounded by:
- The arc $|w| = 1$, $0 \leq \arg(w) \leq 1$ (image of the left edge $x = 0$)
- The arc $|w| = e$, $0 \leq \arg(w) \leq 1$ (image of the right edge $x = 1$)
- The ray $\arg(w) = 0$ (positive real axis), $1 \leq |w| \leq e$ (image of bottom edge $y = 0$)
- The ray $\arg(w) = 1$, $1 \leq |w| \leq e$ (image of top edge $y = 1$)

$$\boxed{\text{The image is the polar region } 1 \leq |w| \leq e, \; 0 \leq \arg(w) \leq 1 \text{ rad}}$$

---

**Problem 19.** Find the image of the rectangle $0 \leq x \leq \ln 2$, $-\pi/4 \leq y \leq \pi/2$ under $w = e^z$.

![Figure 4.6](../../extracted_figures/figure_4_6.png)

**Solution.**

1. For $z = x + iy$ with $0 \leq x \leq \ln 2$ and $-\pi/4 \leq y \leq \pi/2$:
$$|w| = e^x \in [e^0, e^{\ln 2}] = [1, 2]$$
$$\arg(w) = y \in [-\pi/4, \pi/2]$$

2. The image is the polar region:
$$\{w : 1 \leq |w| \leq 2, \; -\pi/4 \leq \arg(w) \leq \pi/2\}$$

This is a sector of an annulus bounded by:
- Inner arc: $|w| = 1$ from angle $-\pi/4$ to $\pi/2$
- Outer arc: $|w| = 2$ from angle $-\pi/4$ to $\pi/2$
- Lower bounding ray: $\arg(w) = -\pi/4$, $1 \leq |w| \leq 2$
- Upper bounding ray: $\arg(w) = \pi/2$, $1 \leq |w| \leq 2$

$$\boxed{\text{The image is the sector-annulus } 1 \leq |w| \leq 2, \; -\pi/4 \leq \arg(w) \leq \pi/2}$$

---

**Problem 20.** Find the image of the semi-infinite strip $x \leq 0$, $0 \leq y \leq \pi$ under $w = e^z$.

![Figure 4.7](../../extracted_figures/figure_4_7.png)

**Solution.**

1. For $z = x + iy$ with $x \leq 0$ and $0 \leq y \leq \pi$:
$$|w| = e^x \in (0, e^0] = (0, 1] \quad \text{(since } x \leq 0 \Rightarrow e^x \leq 1)$$
$$\arg(w) = y \in [0, \pi]$$

2. As $x \to -\infty$, $|w| = e^x \to 0^+$; at $x = 0$, $|w| = 1$.

3. The argument ranges over $[0, \pi]$, covering the upper half of each circle.

4. The image is:
$$\{w : 0 < |w| \leq 1, \; 0 \leq \arg(w) \leq \pi\}$$

This is the **upper half of the punctured closed unit disk** (the closed upper unit semidisk with the origin removed), i.e., $\{w : 0 < |w| \leq 1, \; \text{Im}(w) \geq 0\}$.

$$\boxed{\text{The image is the upper half of the punctured unit disk: } 0 < |w| \leq 1, \; \text{Im}(w) \geq 0}$$

---

## 4.1.3 Complex Logarithm (Multi-valued)

### Problems 21–26: All Values of $\ln z$

---

**Problem 21.** Find all values of $\ln(-5)$.

**Solution.**

1. Write $-5$ in polar form. Since $-5$ is a negative real number:
$$|-5| = 5, \qquad \text{Arg}(-5) = \pi$$

2. So $-5 = 5e^{i\pi}$.

3. Apply the multi-valued logarithm formula $\ln z = \log_e|z| + i(\text{Arg}\,z + 2n\pi)$:
$$\ln(-5) = \log_e 5 + i(\pi + 2n\pi), \quad n \in \mathbb{Z}$$

4. Factor:
$$\ln(-5) = \log_e 5 + i(2n+1)\pi, \quad n \in \mathbb{Z}$$

$$\boxed{\ln(-5) = \log_e 5 + i(2n+1)\pi, \quad n \in \mathbb{Z}}$$

*The principal value is $\text{Ln}(-5) = \log_e 5 + \pi i$ (taking $n = 0$).*

---

**Problem 22.** Find all values of $\ln(-e^i)$.

**Solution.**

1. Write $-e^i$ in polar form. Note $e^i = \cos 1 + i\sin 1$ has modulus 1 and argument 1. So:
$$-e^i = e^i \cdot (-1) = e^i \cdot e^{i\pi}$$

2. Compute the modulus:
$$|-e^i| = |-1| \cdot |e^i| = 1 \cdot 1 = 1$$

3. Compute the argument:
$$\arg(-e^i) = \arg(e^i) + \arg(-1) = 1 + \pi + 2n\pi = (2n+1)\pi + 1, \quad n \in \mathbb{Z}$$

4. The principal argument (for the purpose of applying $\ln$) is $1 + \pi$ adjusted if needed, but we use the multi-valued formula:
$$\ln(-e^i) = \log_e|-e^i| + i\,\arg(-e^i) = \log_e 1 + i(1 + \pi + 2n\pi)$$

5. Since $\log_e 1 = 0$:
$$\ln(-e^i) = i(1 + (2n+1)\pi) = i\bigl(1 + (2n+1)\pi\bigr), \quad n \in \mathbb{Z}$$

$$\boxed{\ln(-e^i) = i\bigl(1 + (2n+1)\pi\bigr), \quad n \in \mathbb{Z}}$$

---

**Problem 23.** Find all values of $\ln(-2 + 2i)$.

**Solution.**

1. Compute the modulus:
$$|-2 + 2i| = \sqrt{(-2)^2 + 2^2} = \sqrt{4 + 4} = \sqrt{8} = 2\sqrt{2}$$

2. Compute $\log_e|z|$:
$$\log_e(2\sqrt{2}) = \log_e(2 \cdot 2^{1/2}) = \log_e(2^{3/2}) = \frac{3}{2}\log_e 2$$

3. Determine the principal argument. Since $-2 + 2i$ is in the **second quadrant**:
$$\text{Arg}(-2+2i) = \pi - \arctan\!\left(\frac{2}{2}\right) = \pi - \arctan(1) = \pi - \frac{\pi}{4} = \frac{3\pi}{4}$$

4. Apply $\ln z = \log_e|z| + i(\text{Arg}\,z + 2n\pi)$:
$$\ln(-2+2i) = \frac{3}{2}\log_e 2 + i\!\left(\frac{3\pi}{4} + 2n\pi\right), \quad n \in \mathbb{Z}$$

5. Write with a common denominator:
$$= \frac{3}{2}\log_e 2 + i\frac{(8n+3)\pi}{4}, \quad n \in \mathbb{Z}$$

$$\boxed{\ln(-2+2i) = \frac{3}{2}\log_e 2 + i\,\frac{(8n+3)\pi}{4}, \quad n \in \mathbb{Z}}$$

---

**Problem 24.** Find all values of $\ln(1 + i)$.

**Solution.**

1. Compute the modulus:
$$|1+i| = \sqrt{1^2 + 1^2} = \sqrt{2}$$

2. Compute $\log_e|z|$:
$$\log_e\sqrt{2} = \log_e(2^{1/2}) = \frac{1}{2}\log_e 2$$

3. Determine the principal argument. Since $1 + i$ is in the **first quadrant**:
$$\text{Arg}(1+i) = \arctan\!\left(\frac{1}{1}\right) = \arctan(1) = \frac{\pi}{4}$$

4. Apply $\ln z = \log_e|z| + i(\text{Arg}\,z + 2n\pi)$:
$$\ln(1+i) = \frac{1}{2}\log_e 2 + i\!\left(\frac{\pi}{4} + 2n\pi\right), \quad n \in \mathbb{Z}$$

5. Write with a common denominator:
$$= \frac{1}{2}\log_e 2 + i\,\frac{(8n+1)\pi}{4}, \quad n \in \mathbb{Z}$$

$$\boxed{\ln(1+i) = \frac{1}{2}\log_e 2 + i\,\frac{(8n+1)\pi}{4}, \quad n \in \mathbb{Z}}$$

---

**Problem 25.** Find all values of $\ln(\sqrt{2} + \sqrt{6}\,i)$.

**Solution.**

1. Compute the modulus:
$$|\sqrt{2} + \sqrt{6}\,i| = \sqrt{(\sqrt{2})^2 + (\sqrt{6})^2} = \sqrt{2 + 6} = \sqrt{8} = 2\sqrt{2}$$

2. Compute $\log_e|z|$:
$$\log_e(2\sqrt{2}) = \log_e(2^{3/2}) = \frac{3}{2}\log_e 2$$

3. Determine the principal argument:
$$\tan\theta = \frac{\sqrt{6}}{\sqrt{2}} = \sqrt{3} \implies \theta = \frac{\pi}{3}$$

Since $\sqrt{2} > 0$ and $\sqrt{6} > 0$, the point is in the first quadrant: $\text{Arg}(\sqrt{2}+\sqrt{6}\,i) = \dfrac{\pi}{3}$.

4. Apply $\ln z = \log_e|z| + i(\text{Arg}\,z + 2n\pi)$:
$$\ln(\sqrt{2}+\sqrt{6}\,i) = \frac{3}{2}\log_e 2 + i\!\left(\frac{\pi}{3} + 2n\pi\right), \quad n \in \mathbb{Z}$$

5. Write with a common denominator:
$$= \frac{3}{2}\log_e 2 + i\,\frac{(6n+1)\pi}{3}, \quad n \in \mathbb{Z}$$

$$\boxed{\ln(\sqrt{2}+\sqrt{6}\,i) = \frac{3}{2}\log_e 2 + i\,\frac{(6n+1)\pi}{3}, \quad n \in \mathbb{Z}}$$

---

**Problem 26.** Find all values of $\ln(-\sqrt{3} + i)$.

**Solution.**

1. Compute the modulus:
$$|-\sqrt{3}+i| = \sqrt{(-\sqrt{3})^2 + 1^2} = \sqrt{3+1} = \sqrt{4} = 2$$

2. Compute $\log_e|z| = \log_e 2$.

3. Determine the principal argument. Since $-\sqrt{3}+i$ is in the **second quadrant**:
$$\text{Arg}(-\sqrt{3}+i) = \pi - \arctan\!\left(\frac{1}{\sqrt{3}}\right) = \pi - \frac{\pi}{6} = \frac{5\pi}{6}$$

4. Apply $\ln z = \log_e|z| + i(\text{Arg}\,z + 2n\pi)$:
$$\ln(-\sqrt{3}+i) = \log_e 2 + i\!\left(\frac{5\pi}{6} + 2n\pi\right), \quad n \in \mathbb{Z}$$

5. Write with a common denominator:
$$= \log_e 2 + i\,\frac{(12n+5)\pi}{6}, \quad n \in \mathbb{Z}$$

$$\boxed{\ln(-\sqrt{3}+i) = \log_e 2 + i\,\frac{(12n+5)\pi}{6}, \quad n \in \mathbb{Z}}$$

---

### Problems 27–32: Principal Value $\text{Ln}\, z$

---

**Problem 27.** Find $\text{Ln}(6 - 6i)$.

**Solution.**

1. Compute the modulus:
$$|6-6i| = \sqrt{6^2 + (-6)^2} = \sqrt{36+36} = \sqrt{72} = 6\sqrt{2}$$

2. Compute $\log_e|z|$:
$$\log_e(6\sqrt{2}) = \log_e 6 + \log_e\sqrt{2} = \log_e 6 + \frac{1}{2}\log_e 2$$

Alternatively, $\log_e(6\sqrt{2}) = \frac{1}{2}\log_e(72)$, since $(6\sqrt{2})^2 = 72$.

3. Determine the principal argument. Since $6 - 6i$ is in the **fourth quadrant**:
$$\text{Arg}(6-6i) = -\arctan\!\left(\frac{6}{6}\right) = -\arctan(1) = -\frac{\pi}{4}$$

4. Apply $\text{Ln}\, z = \log_e|z| + i\,\text{Arg}\,z$:
$$\text{Ln}(6-6i) = \log_e(6\sqrt{2}) - \frac{\pi}{4}i = \frac{1}{2}\log_e 72 - \frac{\pi}{4}i$$

$$\boxed{\text{Ln}(6-6i) = \tfrac{1}{2}\log_e 72 - \tfrac{\pi}{4}\,i}$$

---

**Problem 28.** Find $\text{Ln}(-e^2)$.

**Solution.**

1. Write $-e^2 = e^2 \cdot (-1)$. This is a **negative real number**.

2. Modulus: $|-e^2| = e^2$.

3. $\log_e|z| = \log_e(e^2) = 2$.

4. Principal argument of a negative real number: $\text{Arg}(-e^2) = \pi$.

5. Apply $\text{Ln}\, z = \log_e|z| + i\,\text{Arg}\,z$:
$$\text{Ln}(-e^2) = 2 + \pi i$$

$$\boxed{\text{Ln}(-e^2) = 2 + \pi i}$$

---

**Problem 29.** Find $\text{Ln}(-12 + 5i)$.

**Solution.**

1. Compute the modulus:
$$|-12+5i| = \sqrt{(-12)^2 + 5^2} = \sqrt{144 + 25} = \sqrt{169} = 13$$

2. $\log_e|z| = \log_e 13$.

3. Determine the principal argument. Since $-12 + 5i$ is in the **second quadrant**:
$$\text{Arg}(-12+5i) = \pi - \arctan\!\left(\frac{5}{12}\right)$$

4. Apply $\text{Ln}\, z = \log_e|z| + i\,\text{Arg}\,z$:
$$\text{Ln}(-12+5i) = \log_e 13 + i\!\left(\pi - \arctan\frac{5}{12}\right)$$

$$\boxed{\text{Ln}(-12+5i) = \log_e 13 + i\!\left(\pi - \arctan\tfrac{5}{12}\right)}$$

---

**Problem 30.** Find $\text{Ln}(3 - 4i)$.

**Solution.**

1. Compute the modulus:
$$|3-4i| = \sqrt{3^2 + (-4)^2} = \sqrt{9+16} = \sqrt{25} = 5$$

2. $\log_e|z| = \log_e 5$.

3. Since $3 - 4i$ is in the **fourth quadrant**:
$$\text{Arg}(3-4i) = -\arctan\!\left(\frac{4}{3}\right)$$

4. Apply $\text{Ln}\, z = \log_e|z| + i\,\text{Arg}\,z$:
$$\text{Ln}(3-4i) = \log_e 5 - i\arctan\!\left(\frac{4}{3}\right)$$

$$\boxed{\text{Ln}(3-4i) = \log_e 5 - i\arctan\!\left(\tfrac{4}{3}\right)}$$

---

**Problem 31.** Find $\text{Ln}\!\left((1+\sqrt{3}\,i)^5\right)$.

**Solution.**

1. First find the polar form of $1 + \sqrt{3}\,i$:
$$|1+\sqrt{3}\,i| = \sqrt{1+3} = 2, \qquad \text{Arg}(1+\sqrt{3}\,i) = \arctan\!\left(\frac{\sqrt{3}}{1}\right) = \frac{\pi}{3}$$

2. So $1 + \sqrt{3}\,i = 2e^{i\pi/3}$.

3. Raise to the 5th power using De Moivre:
$$(1+\sqrt{3}\,i)^5 = 2^5 e^{i \cdot 5\pi/3} = 32\,e^{i5\pi/3}$$

4. Determine $\text{Arg}(32\,e^{i5\pi/3})$. The argument $5\pi/3$ exceeds $\pi$, so we reduce it:
$$\frac{5\pi}{3} - 2\pi = \frac{5\pi - 6\pi}{3} = -\frac{\pi}{3}$$

So $\text{Arg}\!\left((1+\sqrt{3}\,i)^5\right) = -\dfrac{\pi}{3}$, and $|(1+\sqrt{3}\,i)^5| = 32$.

5. Verify: $32\,e^{i5\pi/3} = 32\,e^{-i\pi/3}$, since $e^{i5\pi/3} = e^{i(5\pi/3 - 2\pi)} = e^{-i\pi/3}$.

6. Apply $\text{Ln}$:
$$\text{Ln}\!\left((1+\sqrt{3}\,i)^5\right) = \log_e 32 - \frac{\pi}{3}i = \log_e(2^5) - \frac{\pi}{3}i = 5\log_e 2 - \frac{\pi}{3}i$$

$$\boxed{\text{Ln}\!\left((1+\sqrt{3}\,i)^5\right) = 5\log_e 2 - \frac{\pi}{3}\,i}$$

---

**Problem 32.** Find $\text{Ln}\!\left((1+i)^4\right)$.

**Solution.**

1. First find the polar form of $1+i$:
$$|1+i| = \sqrt{2}, \qquad \text{Arg}(1+i) = \frac{\pi}{4}$$

2. So $1+i = \sqrt{2}\,e^{i\pi/4}$.

3. Raise to the 4th power:
$$(1+i)^4 = (\sqrt{2})^4 e^{i \cdot 4\pi/4} = 4\,e^{i\pi}$$

4. Now $e^{i\pi} = \cos\pi + i\sin\pi = -1$, so $(1+i)^4 = -4$.

5. Determine $\text{Arg}(-4) = \pi$ (negative real number).

6. Apply $\text{Ln}$:
$$\text{Ln}((1+i)^4) = \text{Ln}(-4) = \log_e 4 + \pi i = \log_e(2^2) + \pi i = 2\log_e 2 + \pi i$$

$$\boxed{\text{Ln}\!\left((1+i)^4\right) = 2\log_e 2 + \pi i}$$

---

### Problems 33–36: Solving Equations

---

**Problem 33.** Solve $e^z = 4i$.

**Solution.**

1. Write $4i$ in polar form:
$$|4i| = 4, \qquad \text{Arg}(4i) = \frac{\pi}{2}$$

2. So $4i = 4e^{i\pi/2}$.

3. Set $e^z = 4i$. Taking the complex logarithm (multi-valued):
$$z = \ln(4i) = \log_e 4 + i\!\left(\frac{\pi}{2} + 2n\pi\right), \quad n \in \mathbb{Z}$$

4. Simplify $\log_e 4 = \log_e(2^2) = 2\log_e 2$:
$$z = 2\log_e 2 + i\frac{(4n+1)\pi}{2}, \quad n \in \mathbb{Z}$$

$$\boxed{z = 2\log_e 2 + i\,\frac{(4n+1)\pi}{2}, \quad n \in \mathbb{Z}}$$

---

**Problem 34.** Solve $e^{1/z} = -1$.

**Solution.**

1. Write $-1$ in polar form:
$$|-1| = 1, \qquad \text{Arg}(-1) = \pi$$

2. So $-1 = e^{i\pi}$, and multi-valued: $\ln(-1) = i(2n+1)\pi$, $n \in \mathbb{Z}$.

3. Setting $e^{1/z} = -1$ and taking $\ln$:
$$\frac{1}{z} = i(2n+1)\pi, \quad n \in \mathbb{Z}$$

4. Solve for $z$:
$$z = \frac{1}{i(2n+1)\pi}$$

5. Rationalize by multiplying numerator and denominator by $-i$:
$$z = \frac{1}{i(2n+1)\pi} \cdot \frac{-i}{-i} = \frac{-i}{(2n+1)\pi}$$

$$\boxed{z = \frac{-i}{(2n+1)\pi}, \quad n \in \mathbb{Z}}$$

*Note: $n \neq 0$ is included in the family; $n = 0$ gives $z = -i/\pi$, $n = 1$ gives $z = -i/(3\pi)$, etc.*

---

**Problem 35.** Solve $e^{z-1} = -ie^3$.

**Solution.**

1. Write $-ie^3$ in polar form:
$$|-ie^3| = e^3, \qquad \text{Arg}(-i) = -\frac{\pi}{2}$$

So $-ie^3 = e^3 e^{-i\pi/2}$, which means $\text{Arg}(-ie^3) = -\dfrac{\pi}{2}$.

2. Take $\ln$ of both sides (multi-valued):
$$z - 1 = \ln(-ie^3) = \log_e(e^3) + i\!\left(-\frac{\pi}{2} + 2n\pi\right), \quad n \in \mathbb{Z}$$

3. Simplify $\log_e(e^3) = 3$:
$$z - 1 = 3 + i\!\left(2n - \frac{1}{2}\right)\pi, \quad n \in \mathbb{Z}$$

4. Solve for $z$:
$$z = 4 + i\!\left(2n - \frac{1}{2}\right)\pi = 4 + i\frac{(4n-1)\pi}{2}, \quad n \in \mathbb{Z}$$

$$\boxed{z = 4 + i\,\frac{(4n-1)\pi}{2}, \quad n \in \mathbb{Z}}$$

---

**Problem 36.** Solve $e^{2z} + e^z + 1 = 0$.

**Solution.**

1. Let $w = e^z$. The equation becomes:
$$w^2 + w + 1 = 0$$

2. Apply the **quadratic formula**:
$$w = \frac{-1 \pm \sqrt{1 - 4}}{2} = \frac{-1 \pm \sqrt{-3}}{2} = \frac{-1 \pm i\sqrt{3}}{2}$$

3. The two values are:
$$w_1 = \frac{-1 + i\sqrt{3}}{2}, \qquad w_2 = \frac{-1 - i\sqrt{3}}{2}$$

4. Identify each in polar form. Compute modulus:
$$|w_1| = \sqrt{\left(\frac{-1}{2}\right)^2 + \left(\frac{\sqrt{3}}{2}\right)^2} = \sqrt{\frac{1}{4} + \frac{3}{4}} = \sqrt{1} = 1$$

Similarly $|w_2| = 1$.

5. For $w_1 = \dfrac{-1+i\sqrt{3}}{2}$ (second quadrant):
$$\text{Arg}(w_1) = \pi - \arctan\!\left(\frac{\sqrt{3}/2}{1/2}\right) = \pi - \arctan(\sqrt{3}) = \pi - \frac{\pi}{3} = \frac{2\pi}{3}$$

6. For $w_2 = \dfrac{-1-i\sqrt{3}}{2}$ (third quadrant):
$$\text{Arg}(w_2) = -\pi + \arctan\!\left(\frac{\sqrt{3}/2}{1/2}\right) = -\pi + \frac{\pi}{3} = -\frac{2\pi}{3}$$

7. Now solve $e^z = w_1$ and $e^z = w_2$:

For $e^z = w_1 = e^{i2\pi/3}$:
$$z = \ln(w_1) = \log_e 1 + i\!\left(\frac{2\pi}{3} + 2n\pi\right) = i\,\frac{(6n+2)\pi}{3}, \quad n \in \mathbb{Z}$$

For $e^z = w_2 = e^{-i2\pi/3}$:
$$z = \ln(w_2) = \log_e 1 + i\!\left(-\frac{2\pi}{3} + 2n\pi\right) = i\,\frac{(6n-2)\pi}{3}, \quad n \in \mathbb{Z}$$

8. Combine using $\pm$:
$$z = i\,\frac{(6n \pm 2)\pi}{3}, \quad n \in \mathbb{Z}$$

$$\boxed{z = i\,\frac{(6n \pm 2)\pi}{3}, \quad n \in \mathbb{Z}}$$

---

## 4.1.4 Principal Logarithm — Analyticity

### Problems 37–40: Domains of Analyticity and Derivatives

---

**Problem 37.** Find the domain of analyticity and the derivative of
$$f(z) = 3z^2 - e^{2iz} + i\,\text{Ln}\, z.$$

**Solution.**

1. Identify the analyticity conditions for each term:
   - $3z^2$: entire (analytic on all of $\mathbb{C}$).
   - $e^{2iz}$: entire (analytic on all of $\mathbb{C}$).
   - $i\,\text{Ln}\, z$: analytic on $\mathbb{C}$ minus the **non-positive real axis** (i.e., $z \notin (-\infty, 0]$), equivalently where $|z| > 0$ and $\text{Arg}\, z \in (-\pi, \pi)$.

2. The domain of analyticity of $f$ is the intersection:
$$D = \{z \in \mathbb{C} : z \notin (-\infty, 0]\} = \{z : |z| > 0,\; -\pi < \text{Arg}\, z < \pi\}$$

3. Compute $f'(z)$ on $D$ using the sum rule:
$$f'(z) = \frac{d}{dz}(3z^2) - \frac{d}{dz}(e^{2iz}) + i\,\frac{d}{dz}(\text{Ln}\, z)$$

4. Compute each piece:
$$\frac{d}{dz}(3z^2) = 6z$$
$$\frac{d}{dz}(e^{2iz}) = 2i\,e^{2iz}$$
$$\frac{d}{dz}(\text{Ln}\, z) = \frac{1}{z}$$

5. Combine:
$$f'(z) = 6z - 2ie^{2iz} + \frac{i}{z}$$

$$\boxed{f'(z) = 6z - 2ie^{2iz} + \frac{i}{z}, \quad z \notin (-\infty, 0]}$$

---

**Problem 38.** Find the domain of analyticity and the derivative of
$$f(z) = (z+1)\,\text{Ln}\, z.$$

**Solution.**

1. $z + 1$ is entire; $\text{Ln}\, z$ is analytic on $\mathbb{C} \setminus (-\infty, 0]$.

2. Domain of analyticity:
$$D = \mathbb{C} \setminus (-\infty, 0] = \{z : z \notin (-\infty, 0]\}$$

3. Apply the **product rule**:
$$f'(z) = \frac{d}{dz}(z+1) \cdot \text{Ln}\, z + (z+1) \cdot \frac{d}{dz}(\text{Ln}\, z)$$

4. Compute:
$$= 1 \cdot \text{Ln}\, z + (z+1) \cdot \frac{1}{z}$$

5. Simplify:
$$f'(z) = \text{Ln}\, z + \frac{z+1}{z} = \text{Ln}\, z + 1 + \frac{1}{z}$$

$$\boxed{f'(z) = \text{Ln}\, z + 1 + \frac{1}{z}, \quad z \notin (-\infty, 0]}$$

---

**Problem 39.** Find the domain of analyticity and the derivative of
$$f(z) = \frac{\text{Ln}(2z - i)}{z^2 + 1}.$$

**Solution.**

1. **Denominator restriction:** $z^2 + 1 \neq 0 \Rightarrow z \neq \pm i$.

2. **$\text{Ln}$ restriction:** $\text{Ln}(2z - i)$ is analytic when $2z - i$ is not on the non-positive real axis, i.e., when $2z - i \notin (-\infty, 0]$.

   Write $w = 2z - i$. If $z = x + iy$, then $w = 2x + i(2y - 1)$.
   - $w$ is real when $2y - 1 = 0$, i.e., $y = 1/2$.
   - $w$ is non-positive real when $y = 1/2$ and $2x \leq 0$, i.e., $x \leq 0$.

   So we exclude: $\{z = x + iy : x \leq 0, y = 1/2\}$ (the ray $\{x \leq 0, y = 1/2\}$).

3. Also exclude $z = i$ (where $z^2 + 1 = 0$, i.e., the pole). Note $z = -i$ also excluded.

4. The domain $D$ is $\mathbb{C}$ minus $\{z = \pm i\}$ and minus the half-line $\{x \leq 0, y = 1/2\}$.

5. Apply the **quotient rule**. Let $p = \text{Ln}(2z-i)$ and $q = z^2 + 1$:
$$p'(z) = \frac{1}{2z-i} \cdot 2 = \frac{2}{2z-i}, \qquad q'(z) = 2z$$

$$f'(z) = \frac{p'q - pq'}{q^2} = \frac{\dfrac{2}{2z-i}(z^2+1) - \text{Ln}(2z-i) \cdot 2z}{(z^2+1)^2}$$

6. Multiply numerator and denominator by $(2z-i)$:

$$f'(z) = \frac{2(z^2+1) - 2z(2z-i)\,\text{Ln}(2z-i)}{(2z-i)(z^2+1)^2}$$

$$\boxed{f'(z) = \frac{2(z^2+1) - 2z(2z-i)\,\text{Ln}(2z-i)}{(2z-i)(z^2+1)^2}}$$

on $D = \mathbb{C} \setminus \bigl(\{x \leq 0, y = 1/2\} \cup \{\pm i\}\bigr)$.

---

**Problem 40.** Find the domain of analyticity and the derivative of
$$f(z) = \text{Ln}(z^2 + 1).$$

**Solution.**

1. $\text{Ln}(w)$ is analytic when $w \notin (-\infty, 0]$. Here $w = z^2 + 1$.

2. We need to exclude all $z$ where $z^2 + 1 \leq 0$ (real) or $z^2 + 1 = 0$.

   Write $z = x + iy$:
   $$z^2 + 1 = x^2 - y^2 + 1 + 2ixy$$

   This is real when $2xy = 0$, i.e., $x = 0$ or $y = 0$.

   - If $x = 0$: $z^2 + 1 = -y^2 + 1 = 1 - y^2$. This is $\leq 0$ when $|y| \geq 1$.
   - If $y = 0$: $z^2 + 1 = x^2 + 1 > 0$ for all real $x$. (No exclusions here.)

3. Therefore, exclude the **imaginary axis segments** $\{z = iy : |y| \geq 1\}$, i.e., the rays $y \leq -1$ and $y \geq 1$ on the imaginary axis.

4. Domain: $D = \mathbb{C} \setminus \{iy : |y| \geq 1\}$.

5. Apply the **chain rule**:
$$f'(z) = \frac{1}{z^2+1} \cdot \frac{d}{dz}(z^2+1) = \frac{2z}{z^2+1}$$

$$\boxed{f'(z) = \frac{2z}{z^2+1}, \quad z \notin \{iy : |y| \geq 1\}}$$

---

## 4.1.5 Images Under $w = \text{Ln}\, z$

### Problems 41–46: Mapping Properties of $w = \text{Ln}\, z$

Recall: $\text{Ln}\, z = \log_e|z| + i\,\text{Arg}\,z$, so if $w = u + iv$, then $u = \log_e|z|$ and $v = \text{Arg}\,z$.

---

**Problem 41.** Find the image of the ray $\arg(z) = \pi/6$ under $w = \text{Ln}\, z$.

![Figure 4.8](../../extracted_figures/figure_4_8.png)

**Solution.**

1. On the ray $\arg(z) = \pi/6$, every point has $\text{Arg}\, z = \pi/6$ (assuming we restrict to the part of the ray in the principal branch domain, i.e., $z \neq 0$).

2. As $|z|$ ranges over $(0, \infty)$, $u = \log_e|z|$ ranges over $(-\infty, \infty)$.

3. The imaginary part is fixed: $v = \text{Arg}\, z = \pi/6$.

4. The image is the **horizontal line** $v = \pi/6$ in the $w$-plane, i.e., $\text{Im}(w) = \pi/6$, for all $u \in (-\infty, \infty)$.

$$\boxed{\text{The image is the horizontal line } v = \frac{\pi}{6} \text{ (i.e., Im}(w) = \pi/6\text{)}}$$

---

**Problem 42.** Find the image of the positive imaginary axis ($\arg(z) = \pi/2$, $\text{Im}(z) > 0$, $\text{Re}(z) = 0$) under $w = \text{Ln}\, z$.

![Figure 4.9](../../extracted_figures/figure_4_9.png)

**Solution.**

1. On the positive imaginary axis, $z = iy$ with $y > 0$, so $|z| = y$ and $\text{Arg}\, z = \pi/2$.

2. As $y$ ranges over $(0, \infty)$: $u = \log_e y$ ranges over $(-\infty, \infty)$.

3. The imaginary part is fixed: $v = \pi/2$.

4. The image is the **horizontal line** $v = \pi/2$, i.e., $\text{Im}(w) = \pi/2$.

$$\boxed{\text{The image is the horizontal line } v = \frac{\pi}{2}}$$

---

**Problem 43.** Find the image of the circle $|z| = 4$ under $w = \text{Ln}\, z$.

![Figure 4.10](../../extracted_figures/figure_4_10.png)

**Solution.**

1. On the circle $|z| = 4$, $z = 4e^{i\theta}$ for $-\pi < \theta \leq \pi$.

2. $u = \log_e|z| = \log_e 4 = 2\log_e 2$ (constant).

3. $v = \text{Arg}\, z = \theta$ ranges over $(-\pi, \pi]$.

4. The image is the **vertical line segment** $u = \log_e 4 = 2\log_e 2$, $-\pi < v \leq \pi$.

$$\boxed{\text{The image is the vertical segment } u = 2\log_e 2, \; -\pi < v \leq \pi}$$

---

**Problem 44.** Find the image of the region in the first quadrant bounded by $1 \leq |z| \leq e$ under $w = \text{Ln}\, z$.

![Figure 4.11](../../extracted_figures/figure_4_11.png)

**Solution.**

1. The region is $\{z : 1 \leq |z| \leq e, \; 0 \leq \text{Arg}\, z \leq \pi/2\}$ (first quadrant).

2. As $|z|$ ranges over $[1, e]$: $u = \log_e|z|$ ranges over $[0, 1]$.

3. As $\text{Arg}\, z$ ranges over $[0, \pi/2]$: $v$ ranges over $[0, \pi/2]$.

4. The image is the **rectangle** $0 \leq u \leq 1$, $0 \leq v \leq \pi/2$ in the $w$-plane.

$$\boxed{\text{The image is the rectangle } 0 \leq u \leq 1, \; 0 \leq v \leq \frac{\pi}{2}}$$

---

**Problem 45.** Find the image of the annulus $3 \leq |z| \leq 5$ under $w = \text{Ln}\, z$.

![Figure 4.12](../../extracted_figures/figure_4_12.png)

**Solution.**

1. In the annulus, $3 \leq |z| \leq 5$ and $\text{Arg}\, z \in (-\pi, \pi]$.

2. As $|z|$ ranges over $[3, 5]$: $u = \log_e|z|$ ranges over $[\log_e 3, \log_e 5]$.

3. As $\text{Arg}\, z$ ranges over $(-\pi, \pi]$: $v$ ranges over $(-\pi, \pi]$.

4. The image is the **rectangle** $\log_e 3 \leq u \leq \log_e 5$, $-\pi < v \leq \pi$.

$$\boxed{\text{The image is the rectangle } \log_e 3 \leq u \leq \log_e 5, \; -\pi < v \leq \pi}$$

---

**Problem 46.** Find the image of the region $|z| > 1$, $\pi/4 \leq \arg(z) \leq 3\pi/4$, under $w = \text{Ln}\, z$.

![Figure 4.13](../../extracted_figures/figure_4_13.png)

**Solution.**

1. The region is $\{z : |z| > 1, \; \pi/4 \leq \text{Arg}\, z \leq 3\pi/4\}$.

2. As $|z|$ ranges over $(1, \infty)$: $u = \log_e|z|$ ranges over $(0, \infty)$.

3. As $\text{Arg}\, z$ ranges over $[\pi/4, 3\pi/4]$: $v$ ranges over $[\pi/4, 3\pi/4]$.

4. The image is the **semi-infinite strip** $u > 0$, $\pi/4 \leq v \leq 3\pi/4$ in the $w$-plane.

$$\boxed{\text{The image is the semi-infinite strip } u > 0, \; \frac{\pi}{4} \leq v \leq \frac{3\pi}{4}}$$

---

## 4.1.6 Focus on Concepts

### Problems 47–56: Proofs and Conceptual Problems

---

**Problem 47.** Prove that $\dfrac{e^{z_1}}{e^{z_2}} = e^{z_1 - z_2}$ for all $z_1, z_2 \in \mathbb{C}$.

**Solution.**

1. Write $z_1 = x_1 + iy_1$ and $z_2 = x_2 + iy_2$.

2. Compute $e^{z_1}$ and $e^{z_2}$:
$$e^{z_1} = e^{x_1}(\cos y_1 + i\sin y_1), \qquad e^{z_2} = e^{x_2}(\cos y_2 + i\sin y_2)$$

3. Compute the quotient:
$$\frac{e^{z_1}}{e^{z_2}} = \frac{e^{x_1}(\cos y_1 + i\sin y_1)}{e^{x_2}(\cos y_2 + i\sin y_2)}$$

4. Separate the modulus and argument:
$$= \frac{e^{x_1}}{e^{x_2}} \cdot \frac{e^{iy_1}}{e^{iy_2}} = e^{x_1 - x_2} \cdot \frac{e^{iy_1}}{e^{iy_2}}$$

5. Use the real-valued division $\dfrac{e^{i\alpha}}{e^{i\beta}} = e^{i(\alpha - \beta)}$ (from Euler's formula and the angle subtraction formulas for real angles):
$$= e^{x_1-x_2} \cdot e^{i(y_1 - y_2)}$$

6. Combine:
$$= e^{(x_1-x_2) + i(y_1-y_2)} = e^{z_1 - z_2}$$

$$\boxed{\frac{e^{z_1}}{e^{z_2}} = e^{z_1-z_2} \quad \text{(proved)}}$$

---

**Problem 48.** Prove that $(e^{z_1})^n = e^{nz_1}$ for any positive integer $n$.

**Solution.**

We use induction on $n$.

**Base case** ($n = 1$): $(e^{z_1})^1 = e^{z_1} = e^{1 \cdot z_1}$. $\checkmark$

**Inductive step:** Assume $(e^{z_1})^k = e^{kz_1}$ for some $k \geq 1$. Then:
$$(e^{z_1})^{k+1} = (e^{z_1})^k \cdot e^{z_1} = e^{kz_1} \cdot e^{z_1}$$

Using the addition property $e^{w_1} \cdot e^{w_2} = e^{w_1+w_2}$ (proved via direct computation with the definition):
$$= e^{kz_1 + z_1} = e^{(k+1)z_1}$$

By induction, $(e^{z_1})^n = e^{nz_1}$ for all positive integers $n$. $\square$

*Alternatively, via direct computation:*
$$e^{z_1} \cdot e^{z_1} = [e^{x_1}(\cos y_1 + i\sin y_1)] \cdot [e^{x_1}(\cos y_1 + i\sin y_1)]$$
$$= e^{2x_1}(\cos y_1 + i\sin y_1)^2 = e^{2x_1}(\cos 2y_1 + i\sin 2y_1) = e^{2x_1 + 2iy_1} = e^{2z_1}$$

The general case follows by induction.

$$\boxed{(e^{z_1})^n = e^{nz_1} \quad \text{for all } n \in \mathbb{Z}^+}$$

---

**Problem 49.** Determine where $f(z) = e^{\bar{z}}$ is analytic.

**Solution.**

1. Write $\bar{z} = x - iy$, so $e^{\bar{z}} = e^{x-iy} = e^x(\cos y - i\sin y)$.

2. Identify: $u(x,y) = e^x \cos y$ and $v(x,y) = -e^x \sin y$.

3. Compute the partial derivatives:
$$u_x = e^x \cos y, \quad u_y = -e^x \sin y$$
$$v_x = -e^x \sin y, \quad v_y = -e^x \cos y$$

4. Check the Cauchy-Riemann equation $u_x = v_y$:
$$e^x \cos y = -e^x \cos y$$
$$2e^x \cos y = 0$$

Since $e^x > 0$ always, this requires $\cos y = 0$, i.e., $y = \dfrac{\pi}{2} + n\pi$.

5. Check the Cauchy-Riemann equation $u_y = -v_x$:
$$-e^x \sin y = -(-e^x \sin y) = e^x \sin y$$
$$-2e^x \sin y = 0$$

Since $e^x > 0$, this requires $\sin y = 0$, i.e., $y = n\pi$.

6. For both to hold simultaneously, we need $\cos y = 0$ and $\sin y = 0$, which is impossible since $\cos^2 y + \sin^2 y = 1$.

7. Therefore, $f(z) = e^{\bar{z}}$ is **nowhere analytic** (the Cauchy-Riemann equations are never simultaneously satisfied).

$$\boxed{f(z) = e^{\bar{z}} \text{ is analytic nowhere}}$$

---

**Problem 50.** Suppose $f(z)$ is an analytic function satisfying:
(i) $f(z_1 + z_2) = f(z_1)\,f(z_2)$ for all $z_1, z_2 \in \mathbb{C}$,
(ii) $f(x) = e^x$ for all real $x$.
Show that $f(z) = e^z$.

**Solution.**

1. From property (i) with $z_1 = x$ and $z_2 = iy$:
$$f(x + iy) = f(x)\,f(iy)$$

2. By property (ii), $f(x) = e^x$ for real $x$.

3. It remains to determine $f(iy)$ for real $y$. Set $z_1 = z_2 = iy$ in (i):
$$f(2iy) = [f(iy)]^2$$

4. More generally, using induction: $f(niy) = [f(iy)]^n$ for positive integers $n$.

5. Since $f$ is analytic and equals $e^z$ on the real axis, by the **identity theorem** for analytic functions (a non-constant analytic function agrees with another analytic function on a set with a limit point in a domain only if they agree throughout the domain), and since $e^z$ is analytic everywhere with $e^x$ real, we need to extend.

6. Write $f(iy) = e^{iy}$ using the following argument: the function $g(y) = f(iy)$ satisfies $g(y_1 + y_2) = g(y_1)g(y_2)$ (from the addition property) and $|g(y)| = |f(iy)|$. Since $f(iy)\cdot f(-iy) = f(0) = f(x)|_{x=0} = e^0 = 1$, we get $|f(iy)|^2 = 1$ if $f(-iy) = \overline{f(iy)}$. Since $f$ is analytic and real on the real axis, by the Schwarz reflection principle $f(-iy) = \overline{f(iy)}$, so $|f(iy)| = 1$.

7. Thus $f(iy) = e^{i\phi(y)}$ for some real $\phi(y)$. The functional equation $f(iy_1 + iy_2) = f(iy_1)f(iy_2)$ gives $e^{i\phi(y_1+y_2)} = e^{i(\phi(y_1)+\phi(y_2))}$, so $\phi(y_1+y_2) = \phi(y_1)+\phi(y_2)$ (Cauchy functional equation). Since $f$ is analytic (hence $\phi$ is continuous), the only solution is $\phi(y) = cy$ for some constant $c$.

8. From property (ii) and the known derivative: $f'(0) = \lim_{h\to 0}\frac{e^h - 1}{h} = 1$ (real), while $f'(0)$ computed via the imaginary axis gives $f'(0) = \lim_{y\to 0}\frac{e^{icy}-1}{iy} = c$. So $c = 1$.

9. Therefore $f(iy) = e^{iy}$ and:
$$f(x + iy) = f(x)\,f(iy) = e^x \cdot e^{iy} = e^{x+iy} = e^z$$

$$\boxed{f(z) = e^z}$$

---

**Problem 51.** Show that the image of the line $y = x$ ($-\infty < x < \infty$) under $w = e^z$ is the logarithmic spiral $r = e^\theta$ (where $w = re^{i\theta}$).

**Solution.**

1. On the line $y = x$, we have $z = x + ix = x(1+i)$ for $x \in \mathbb{R}$.

2. Apply $w = e^z$:
$$w = e^{x+ix} = e^x \cdot e^{ix} = e^x(\cos x + i\sin x)$$

3. In polar form $w = re^{i\theta}$:
$$r = |w| = e^x, \qquad \theta = \arg(w) = x$$

4. Since $r = e^x$ and $\theta = x$, eliminating $x$:
$$r = e^\theta$$

5. This is the equation of a **logarithmic spiral** (also called the equiangular spiral). As $x$ increases from $-\infty$ to $\infty$, $r$ increases from $0^+$ to $\infty$ and the angle $\theta$ winds around.

$$\boxed{\text{The image is the logarithmic spiral } r = e^\theta}$$

---

**Problem 52.** Prove that $w = e^z$ is one-to-one on the horizontal strip $-\pi < y \leq \pi$.

**Solution.**

Suppose $e^{z_1} = e^{z_2}$ with $z_1 = x_1 + iy_1$ and $z_2 = x_2 + iy_2$, where $-\pi < y_1 \leq \pi$ and $-\pi < y_2 \leq \pi$.

1. From $e^{z_1} = e^{z_2}$:
$$e^{x_1}(\cos y_1 + i\sin y_1) = e^{x_2}(\cos y_2 + i\sin y_2)$$

2. Taking moduli:
$$e^{x_1} = e^{x_2} \implies x_1 = x_2$$

3. After canceling $e^{x_1} = e^{x_2}$:
$$\cos y_1 + i\sin y_1 = \cos y_2 + i\sin y_2$$
$$e^{iy_1} = e^{iy_2}$$

4. This holds if and only if $y_1 - y_2 = 2k\pi$ for some integer $k$.

5. Since both $y_1, y_2 \in (-\pi, \pi]$, we have $|y_1 - y_2| < 2\pi$, so the only possibility is $k = 0$, giving $y_1 = y_2$.

6. Therefore $z_1 = x_1 + iy_1 = x_2 + iy_2 = z_2$, proving **injectivity**.

$$\boxed{w = e^z \text{ is one-to-one on the strip } -\pi < \text{Im}(z) \leq \pi}$$

---

**Problem 53.** Prove that $\ln(z_1/z_2) = \ln z_1 - \ln z_2$ (as a set equality of multi-valued functions).

**Solution.**

1. Let $z_1 = r_1 e^{i\theta_1}$ and $z_2 = r_2 e^{i\theta_2}$ (with $r_1, r_2 > 0$ and $\theta_1, \theta_2$ arbitrary real arguments).

2. Then:
$$\frac{z_1}{z_2} = \frac{r_1}{r_2}\,e^{i(\theta_1 - \theta_2)}$$

3. By definition of the multi-valued logarithm:
$$\ln\!\left(\frac{z_1}{z_2}\right) = \log_e\!\left(\frac{r_1}{r_2}\right) + i(\theta_1 - \theta_2 + 2n\pi), \quad n \in \mathbb{Z}$$

4. Also:
$$\ln z_1 = \log_e r_1 + i(\theta_1 + 2k\pi), \quad k \in \mathbb{Z}$$
$$\ln z_2 = \log_e r_2 + i(\theta_2 + 2m\pi), \quad m \in \mathbb{Z}$$

5. So:
$$\ln z_1 - \ln z_2 = (\log_e r_1 - \log_e r_2) + i(\theta_1 - \theta_2 + 2(k-m)\pi)$$
$$= \log_e\!\left(\frac{r_1}{r_2}\right) + i(\theta_1 - \theta_2 + 2n\pi), \quad n = k - m \in \mathbb{Z}$$

6. As $k, m$ range independently over $\mathbb{Z}$, $n = k - m$ also ranges over all of $\mathbb{Z}$.

7. The two sets are equal: $\ln(z_1/z_2) = \ln z_1 - \ln z_2$.

$$\boxed{\ln(z_1/z_2) = \ln z_1 - \ln z_2 \quad \text{(proved)}}$$

---

**Problem 54.** Prove that $\ln(z^n) = n\ln z$ (as a set equality) for any nonzero $z$ and integer $n \geq 1$.

**Solution.**

1. Write $z = re^{i\theta}$ (with $r > 0$ and $\theta$ any argument of $z$).

2. Then $z^n = r^n e^{in\theta}$, so:
$$\ln(z^n) = \log_e(r^n) + i(n\theta + 2k\pi), \quad k \in \mathbb{Z}$$
$$= n\log_e r + i\,n\theta + 2\pi ki, \quad k \in \mathbb{Z}$$

3. Also:
$$n\ln z = n\bigl[\log_e r + i(\theta + 2m\pi)\bigr] = n\log_e r + i(n\theta + 2mn\pi), \quad m \in \mathbb{Z}$$

4. The set $\{2\pi k : k \in \mathbb{Z}\}$ (from $\ln(z^n)$) and the set $\{2\pi mn : m \in \mathbb{Z}\}$ (from $n\ln z$) are both equal to $\{2\pi k : k \in \mathbb{Z}\}$ when considered as subsets of the imaginary parts (since as $m$ ranges over $\mathbb{Z}$, $mn$ takes multiples of $n$, but $\ln(z^n)$ takes all integer multiples of $2\pi$).

*Note:* As sets, the values of $\ln(z^n)$ are $\{n\log_e r + i(n\theta + 2k\pi) : k\in\mathbb{Z}\}$ and of $n\ln z$ are $\{n\log_e r + i(n\theta + 2mn\pi) : m\in\mathbb{Z}\}$.

These sets are generally **not equal** for $n \geq 2$; however, $n\ln z \subseteq \ln(z^n)$. The full equality $\ln(z^n) = n\ln z$ holds as a multi-valued statement since we allow any value of $\ln z$.

More precisely, for every value $w_1 \in \ln(z^n)$ there exists a value $w_2 \in \ln z$ with $n w_2 = w_1$: If $w_1 = n\log_e r + i(n\theta + 2k\pi)$, take $w_2 = \log_e r + i(\theta + 2k\pi/n)$, which is a valid logarithm of $z$ (choosing branch appropriately).

$$\boxed{\ln(z^n) = n\ln z \quad \text{as multi-valued functions}}$$

---

**Problem 55.** Discuss when $\text{Ln}(z_1 z_2) = \text{Ln}\, z_1 + \text{Ln}\, z_2$.

**Solution.**

In general, $\text{Ln}(z_1 z_2) \neq \text{Ln}\, z_1 + \text{Ln}\, z_2$ because the principal argument satisfies:
$$\text{Arg}(z_1 z_2) = \text{Arg}(z_1) + \text{Arg}(z_2) + 2\pi k$$
for some $k \in \{-1, 0, 1\}$ (needed to bring the sum into $(-\pi, \pi]$).

1. We have:
$$\text{Ln}\, z_1 + \text{Ln}\, z_2 = \log_e|z_1| + i\,\text{Arg}(z_1) + \log_e|z_2| + i\,\text{Arg}(z_2)$$
$$= \log_e|z_1 z_2| + i(\text{Arg}(z_1) + \text{Arg}(z_2))$$

2. But $\text{Ln}(z_1 z_2) = \log_e|z_1 z_2| + i\,\text{Arg}(z_1 z_2)$.

3. These are equal if and only if $\text{Arg}(z_1) + \text{Arg}(z_2) = \text{Arg}(z_1 z_2)$, which happens when the sum $\text{Arg}(z_1) + \text{Arg}(z_2)$ already lies in $(-\pi, \pi]$, i.e., when **no argument "wrap-around" occurs**.

**Condition:** $\text{Ln}(z_1 z_2) = \text{Ln}\, z_1 + \text{Ln}\, z_2$ if and only if:
$$-\pi < \text{Arg}(z_1) + \text{Arg}(z_2) \leq \pi$$

**Counterexample:** Let $z_1 = z_2 = -1 + 0.1i \approx e^{i(0.99\pi)}$. Then $\text{Arg}(z_1) + \text{Arg}(z_2) \approx 1.98\pi > \pi$, so $\text{Arg}(z_1 z_2) \approx 1.98\pi - 2\pi \approx -0.02\pi$, and $\text{Ln}(z_1 z_2) \neq \text{Ln}\,z_1 + \text{Ln}\,z_2$.

$$\boxed{\text{Ln}(z_1 z_2) = \text{Ln}\,z_1 + \text{Ln}\,z_2 \iff -\pi < \text{Arg}(z_1) + \text{Arg}(z_2) \leq \pi}$$

---

**Problem 56.** Is $\text{Ln}(z^n) = n\,\text{Ln}\, z$? Provide a counterexample and state when equality holds.

**Solution.**

**Claim:** In general, $\text{Ln}(z^n) \neq n\,\text{Ln}\, z$.

**Counterexample:** Let $z = -1$ and $n = 2$.
- $\text{Ln}(-1) = i\pi$, so $n\,\text{Ln}(-1) = 2 \cdot i\pi = 2\pi i$.
- $z^2 = (-1)^2 = 1$, so $\text{Ln}(1) = 0$.
- Thus $\text{Ln}(z^n) = 0 \neq 2\pi i = n\,\text{Ln}\, z$. $\square$

**When does equality hold?**

$\text{Ln}(z^n) = n\,\text{Ln}\, z$ holds when no "argument wrap-around" occurs in the computation of $z^n$, i.e., when:
$$-\pi < n\,\text{Arg}(z) \leq \pi$$

For example, if $z > 0$ (positive real), then $\text{Arg}(z) = 0$ and $n \cdot 0 = 0 \in (-\pi, \pi]$, so equality holds: $\text{Ln}(x^n) = n\log_e x$ for $x > 0$. This is consistent with real analysis.

$$\boxed{\text{Ln}(z^n) = n\,\text{Ln}\, z \iff -\pi < n\,\text{Arg}(z) \leq \pi}$$

---

## 4.1.7 Computer Lab Assignments

### Problems 63–66

*These problems typically require a CAS (computer algebra system) to verify solutions numerically. Full analytical solutions are given below.*

---

**Problem 63.** Solve $e^{5z-i} = 12i$.

**Solution.**

1. Write $12i$ in polar form:
$$|12i| = 12, \qquad \text{Arg}(12i) = \frac{\pi}{2}$$

2. Take the multi-valued logarithm:
$$5z - i = \ln(12i) = \log_e 12 + i\!\left(\frac{\pi}{2} + 2n\pi\right), \quad n \in \mathbb{Z}$$

3. Add $i$ to both sides:
$$5z = i + \log_e 12 + i\!\left(\frac{\pi}{2} + 2n\pi\right) = \log_e 12 + i\!\left(1 + \frac{\pi}{2} + 2n\pi\right)$$

4. Divide by 5:
$$z = \frac{\log_e 12}{5} + i\,\frac{1 + \frac{\pi}{2} + 2n\pi}{5} = \frac{\log_e 12}{5} + i\,\frac{2 + \pi + 4n\pi}{10}$$

5. Write $\log_e 12 = \log_e(4 \cdot 3) = 2\log_e 2 + \log_e 3$, or more compactly $\log_e 12$:

$$z = \frac{\log_e 12}{5} + i\,\frac{(4n+1)\pi + 2}{10}, \quad n \in \mathbb{Z}$$

$$\boxed{z = \frac{\log_e 12}{5} + i\,\frac{(4n+1)\pi + 2}{10}, \quad n \in \mathbb{Z}}$$

---

**Problem 64.** Solve $e^{iz} = 2 - 5i$.

**Solution.**

1. Write $2 - 5i$ in polar form:
$$|2-5i| = \sqrt{4+25} = \sqrt{29}$$
$$\text{Arg}(2-5i) = -\arctan\!\left(\frac{5}{2}\right) \quad \text{(fourth quadrant)}$$

2. Take the multi-valued logarithm:
$$iz = \ln(2-5i) = \log_e\sqrt{29} + i\!\left(-\arctan\frac{5}{2} + 2n\pi\right), \quad n \in \mathbb{Z}$$
$$= \frac{1}{2}\log_e 29 + i\!\left(-\arctan\frac{5}{2} + 2n\pi\right)$$

3. Divide both sides by $i$ (i.e., multiply by $-i$):
$$z = \frac{1}{i}\left[\frac{1}{2}\log_e 29 + i\!\left(-\arctan\frac{5}{2} + 2n\pi\right)\right]$$
$$= \frac{-i}{1}\left[\frac{\log_e 29}{2}\right] + \left(-\arctan\frac{5}{2} + 2n\pi\right) \cdot \frac{i \cdot (-i)}{1}$$

4. Since $\dfrac{1}{i} = \dfrac{-i}{i \cdot (-i)} = \dfrac{-i}{1} = -i$:

$$z = -i \cdot \frac{\log_e 29}{2} + (-i) \cdot i\!\left(-\arctan\frac{5}{2} + 2n\pi\right)$$
$$= -\frac{i\log_e 29}{2} + \left(-\arctan\frac{5}{2} + 2n\pi\right)$$

(using $(-i)(i) = -i^2 = 1$)

5. Collect real and imaginary parts:
$$z = \left(2n\pi - \arctan\frac{5}{2}\right) - i\,\frac{\log_e 29}{2}, \quad n \in \mathbb{Z}$$

$$\boxed{z = \left(2n\pi - \arctan\frac{5}{2}\right) - \frac{i}{2}\log_e 29, \quad n \in \mathbb{Z}}$$

---

**Problem 65.** Solve $3e^{(2+i)z} = 5 - i$.

**Solution.**

1. Isolate the exponential:
$$e^{(2+i)z} = \frac{5-i}{3}$$

2. Compute $\left|\dfrac{5-i}{3}\right|$ and $\text{Arg}\!\left(\dfrac{5-i}{3}\right)$:
$$\left|\frac{5-i}{3}\right| = \frac{|5-i|}{3} = \frac{\sqrt{25+1}}{3} = \frac{\sqrt{26}}{3}$$
$$\text{Arg}\!\left(\frac{5-i}{3}\right) = \text{Arg}(5-i) = -\arctan\!\left(\frac{1}{5}\right) \quad \text{(fourth quadrant)}$$

3. Take the multi-valued logarithm:
$$(2+i)z = \ln\!\left(\frac{5-i}{3}\right) = \log_e\!\left(\frac{\sqrt{26}}{3}\right) + i\!\left(-\arctan\frac{1}{5} + 2n\pi\right), \quad n \in \mathbb{Z}$$

$$= \frac{1}{2}\log_e\!\left(\frac{26}{9}\right) + i\!\left(2n\pi - \arctan\frac{1}{5}\right)$$

4. Solve for $z$ by dividing by $(2+i)$. Multiply numerator and denominator by the conjugate $(2-i)$:
$$z = \frac{1}{2+i} \cdot \left[\frac{1}{2}\log_e\!\frac{26}{9} + i\!\left(2n\pi - \arctan\frac{1}{5}\right)\right]$$

$$\frac{1}{2+i} = \frac{2-i}{(2+i)(2-i)} = \frac{2-i}{5}$$

5. Let $A = \dfrac{1}{2}\log_e\!\dfrac{26}{9}$ and $B = 2n\pi - \arctan\dfrac{1}{5}$. Then:
$$z = \frac{(2-i)(A + iB)}{5} = \frac{(2A + B) + i(2B - A)}{5}$$

$$= \frac{2A+B}{5} + i\,\frac{2B-A}{5}$$

6. Substitute back:
$$z = \frac{\log_e(26/9) + 2(2n\pi - \arctan\frac{1}{5})}{5} + i\,\frac{2(2n\pi - \arctan\frac{1}{5}) - \frac{1}{2}\log_e(26/9)}{5}$$

$$\boxed{z = \frac{\log_e(26/9) + 2\!\left(2n\pi - \arctan\frac{1}{5}\right)}{5} + i\,\frac{4n\pi - 2\arctan\frac{1}{5} - \frac{1}{2}\log_e(26/9)}{5}, \quad n \in \mathbb{Z}}$$

---

**Problem 66.** Solve $ie^{z-2} = \pi$.

**Solution.**

1. Isolate the exponential:
$$e^{z-2} = \frac{\pi}{i}$$

2. Compute $\dfrac{\pi}{i}$: multiply by $\dfrac{-i}{-i}$:
$$\frac{\pi}{i} = \frac{\pi(-i)}{i(-i)} = \frac{-\pi i}{1} = -\pi i$$

3. Write $-\pi i$ in polar form:
$$|-\pi i| = \pi, \qquad \text{Arg}(-\pi i) = -\frac{\pi}{2} \quad \text{(negative imaginary axis)}$$

4. Take the multi-valued logarithm:
$$z - 2 = \ln(-\pi i) = \log_e \pi + i\!\left(-\frac{\pi}{2} + 2n\pi\right), \quad n \in \mathbb{Z}$$
$$= \log_e \pi + i\,\frac{(4n-1)\pi}{2}$$

5. Solve for $z$:
$$z = 2 + \log_e \pi + i\,\frac{(4n-1)\pi}{2}, \quad n \in \mathbb{Z}$$

$$\boxed{z = 2 + \log_e \pi + i\,\frac{(4n-1)\pi}{2}, \quad n \in \mathbb{Z}}$$

---

*End of Section 4.1 Solutions*
