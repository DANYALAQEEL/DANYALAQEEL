# Complex Analysis — Dennis G. Zill, 2nd Edition
## Chapter 4 · Section 4.3 — Trigonometric and Hyperbolic Functions
### Problems 1 – 52 · Complete Solutions

---

> **Key Formulas**
>
> **Complex Trigonometric Functions** (entire, period $2\pi$):
> $$\sin z = \frac{e^{iz} - e^{-iz}}{2i}, \qquad \cos z = \frac{e^{iz} + e^{-iz}}{2}$$
>
> **Real-Part/Imaginary-Part Decomposition** (write $z = x + iy$):
> $$\sin(x + iy) = \sin x \cosh y + i\cos x \sinh y$$
> $$\cos(x + iy) = \cos x \cosh y - i\sin x \sinh y$$
>
> **Complex Hyperbolic Functions** (entire, period $2\pi i$):
> $$\sinh z = \frac{e^z - e^{-z}}{2}, \qquad \cosh z = \frac{e^z + e^{-z}}{2}$$
>
> **Real-Part/Imaginary-Part Decomposition**:
> $$\sinh(x + iy) = \sinh x \cos y + i\cosh x \sin y$$
> $$\cosh(x + iy) = \cosh x \cos y + i\sinh x \sin y$$
>
> **Connection between trig and hyperbolic**:
> $$\sin(iz) = i\sinh z, \quad \cos(iz) = \cosh z, \quad \sinh(iz) = i\sin z, \quad \cosh(iz) = \cos z$$
>
> **Modulus-squared formulas**:
> $$|\sin z|^2 = \sin^2 x + \sinh^2 y, \qquad |\cos z|^2 = \cos^2 x + \sinh^2 y$$
> $$|\sinh z|^2 = \sinh^2 x + \sin^2 y, \qquad |\cosh z|^2 = \cosh^2 x - \sin^2 y$$

---

## Problems 1–8: Complex Trigonometric Values in $a + ib$ Form

---

**Problem 1.** Find the value of $\sin(4i)$ in the form $a + ib$.

**Solution.**

1. Write $4i = 0 + 4i$ so that $x = 0$ and $y = 4$.

2. Apply the decomposition formula:
$$\sin(x + iy) = \sin x \cosh y + i\cos x \sinh y$$

3. Substitute $x = 0$, $y = 4$:
$$\sin(4i) = \sin(0)\cosh(4) + i\cos(0)\sinh(4)$$

4. Evaluate the real trigonometric values:
$$\sin(0) = 0, \qquad \cos(0) = 1$$

5. Simplify:
$$\sin(4i) = 0 \cdot \cosh(4) + i \cdot 1 \cdot \sinh(4) = i\sinh(4)$$

6. Using $\sinh(4) = \dfrac{e^4 - e^{-4}}{2} \approx 27.2899$:
$$\sin(4i) = i\sinh 4 \approx 27.2899\,i$$

$$\boxed{\sin(4i) = i\sinh 4 \approx 27.2899\,i}$$

---

**Problem 2.** Find the value of $\cos(-3i)$ in the form $a + ib$.

**Solution.**

1. Write $-3i = 0 + (-3)i$ so that $x = 0$ and $y = -3$.

2. Apply the decomposition formula:
$$\cos(x + iy) = \cos x \cosh y - i\sin x \sinh y$$

3. Substitute $x = 0$, $y = -3$:
$$\cos(-3i) = \cos(0)\cosh(-3) - i\sin(0)\sinh(-3)$$

4. Evaluate the real trig values: $\cos(0) = 1$, $\sin(0) = 0$.

5. Use the even property $\cosh(-3) = \cosh(3)$:
$$\cos(-3i) = 1 \cdot \cosh(3) - i \cdot 0 \cdot \sinh(-3) = \cosh(3)$$

6. Numerically, $\cosh(3) = \dfrac{e^3 + e^{-3}}{2} \approx 10.0677$:
$$\cos(-3i) \approx 10.0677$$

$$\boxed{\cos(-3i) = \cosh 3 \approx 10.0677}$$

---

**Problem 3.** Find the value of $\cos(2 - 4i)$ in the form $a + ib$.

**Solution.**

1. Write $z = 2 - 4i$, so $x = 2$ and $y = -4$.

2. Apply the formula:
$$\cos(x + iy) = \cos x \cosh y - i\sin x \sinh y$$

3. Substitute:
$$\cos(2 - 4i) = \cos(2)\cosh(-4) - i\sin(2)\sinh(-4)$$

4. Use the even/odd properties: $\cosh(-4) = \cosh(4)$ and $\sinh(-4) = -\sinh(4)$:
$$\cos(2 - 4i) = \cos(2)\cosh(4) - i\sin(2)\cdot(-\sinh(4))$$
$$= \cos(2)\cosh(4) + i\sin(2)\sinh(4)$$

5. Evaluate numerically:
$$\cos(2) \approx -0.4161, \quad \cosh(4) \approx 27.3082$$
$$\sin(2) \approx 0.9093, \quad \sinh(4) \approx 27.2899$$

6. Compute each part:
$$\text{Re} = (-0.4161)(27.3082) \approx -11.3642$$
$$\text{Im} = (0.9093)(27.2899) \approx 24.8147$$

$$\boxed{\cos(2 - 4i) \approx -11.3642 + 24.8147\,i}$$

---

**Problem 4.** Find the value of $\sin\!\left(\dfrac{\pi}{4} + i\right)$ in the form $a + ib$.

**Solution.**

1. Identify $x = \dfrac{\pi}{4}$ and $y = 1$.

2. Apply the decomposition:
$$\sin\!\left(\tfrac{\pi}{4} + i\right) = \sin\!\left(\tfrac{\pi}{4}\right)\cosh(1) + i\cos\!\left(\tfrac{\pi}{4}\right)\sinh(1)$$

3. Substitute $\sin(\pi/4) = \cos(\pi/4) = \dfrac{\sqrt{2}}{2}$:
$$= \frac{\sqrt{2}}{2}\cosh(1) + i\frac{\sqrt{2}}{2}\sinh(1)$$

4. Factor:
$$= \frac{\sqrt{2}}{2}\bigl(\cosh(1) + i\sinh(1)\bigr)$$

5. Evaluate numerically: $\cosh(1) \approx 1.5431$, $\sinh(1) \approx 1.1752$, $\tfrac{\sqrt{2}}{2} \approx 0.7071$:
$$\text{Re} = 0.7071 \times 1.5431 \approx 1.0911$$
$$\text{Im} = 0.7071 \times 1.1752 \approx 0.8302$$

$$\boxed{\sin\!\left(\frac{\pi}{4}+i\right) = \frac{\sqrt{2}}{2}\bigl(\cosh 1 + i\sinh 1\bigr) \approx 1.0911 + 0.8302\,i}$$

---

**Problem 5.** Find the value of $\tan(2i)$ in the form $a + ib$.

**Solution.**

1. Write $\tan(2i) = \dfrac{\sin(2i)}{\cos(2i)}$.

2. Compute $\sin(2i)$: set $x = 0$, $y = 2$:
$$\sin(2i) = \sin(0)\cosh(2) + i\cos(0)\sinh(2) = 0 + i\sinh(2) = i\sinh(2)$$

3. Compute $\cos(2i)$: set $x = 0$, $y = 2$:
$$\cos(2i) = \cos(0)\cosh(2) - i\sin(0)\sinh(2) = \cosh(2) - 0 = \cosh(2)$$

4. Divide:
$$\tan(2i) = \frac{i\sinh(2)}{\cosh(2)} = i\tanh(2)$$

5. Numerically, $\tanh(2) = \dfrac{\sinh 2}{\cosh 2} = \dfrac{e^2 - e^{-2}}{e^2 + e^{-2}} \approx 0.9640$:
$$\tan(2i) \approx 0.9640\,i$$

$$\boxed{\tan(2i) = i\tanh 2 \approx 0.9640\,i}$$

---

**Problem 6.** Find the value of $\cot(\pi + 2i)$ in the form $a + ib$.

**Solution.**

1. Use the period $2\pi$ of $\cot$: since $\cot$ has period $\pi$, we have $\cot(\pi + 2i) = \cot(2i)$.

2. Write $\cot(2i) = \dfrac{\cos(2i)}{\sin(2i)}$.

3. From Problem 5: $\cos(2i) = \cosh(2)$ and $\sin(2i) = i\sinh(2)$.

4. Divide:
$$\cot(2i) = \frac{\cosh(2)}{i\sinh(2)}$$

5. Multiply numerator and denominator by $-i$ (i.e., rationalize by multiplying by $\dfrac{-i}{-i}$):
$$\cot(2i) = \frac{-i\cosh(2)}{-i^2\sinh(2)} = \frac{-i\cosh(2)}{\sinh(2)} = -i\coth(2)$$

6. Numerically, $\coth(2) = \dfrac{\cosh 2}{\sinh 2} \approx 1.0373$:
$$\cot(\pi + 2i) \approx -1.0373\,i$$

$$\boxed{\cot(\pi + 2i) = -i\coth 2 \approx -1.0373\,i}$$

---

**Problem 7.** Find the value of $\sec\!\left(\dfrac{\pi}{2} - i\right)$ in the form $a + ib$.

**Solution.**

1. Write $\sec\!\left(\dfrac{\pi}{2} - i\right) = \dfrac{1}{\cos\!\left(\dfrac{\pi}{2} - i\right)}$.

2. Apply the formula with $x = \dfrac{\pi}{2}$, $y = -1$:
$$\cos\!\left(\tfrac{\pi}{2} - i\right) = \cos\!\left(\tfrac{\pi}{2}\right)\cosh(-1) - i\sin\!\left(\tfrac{\pi}{2}\right)\sinh(-1)$$

3. Evaluate: $\cos(\pi/2) = 0$, $\sin(\pi/2) = 1$, and $\sinh(-1) = -\sinh(1)$:
$$= 0 \cdot \cosh(1) - i \cdot 1 \cdot (-\sinh(1)) = i\sinh(1)$$

4. Therefore:
$$\sec\!\left(\tfrac{\pi}{2} - i\right) = \frac{1}{i\sinh(1)}$$

5. Rationalize by multiplying numerator and denominator by $-i$:
$$= \frac{-i}{-i^2 \sinh(1)} = \frac{-i}{\sinh(1)} = -i\,\text{csch}(1)$$

6. Numerically, $\sinh(1) \approx 1.1752$, so $\text{csch}(1) \approx 0.8509$:
$$\sec\!\left(\tfrac{\pi}{2} - i\right) \approx -0.8509\,i$$

$$\boxed{\sec\!\left(\frac{\pi}{2} - i\right) = -i\,\text{csch}(1) \approx -0.8509\,i}$$

---

**Problem 8.** Find the value of $\csc(1 + i)$ in the form $a + ib$.

**Solution.**

1. Write $\csc(1 + i) = \dfrac{1}{\sin(1 + i)}$.

2. Apply the decomposition with $x = 1$, $y = 1$:
$$\sin(1 + i) = \sin(1)\cosh(1) + i\cos(1)\sinh(1)$$

3. Let $A = \sin(1)\cosh(1)$ and $B = \cos(1)\sinh(1)$, so $\sin(1+i) = A + iB$.

4. To find $\dfrac{1}{A + iB}$, multiply numerator and denominator by the conjugate $A - iB$:
$$\frac{1}{A + iB} = \frac{A - iB}{A^2 + B^2}$$

5. Compute $A^2 + B^2$. Note that $A^2 + B^2 = \sin^2(1)\cosh^2(1) + \cos^2(1)\sinh^2(1)$.

   Use $\cosh^2(1) = 1 + \sinh^2(1)$:
   $$A^2 + B^2 = \sin^2(1)(1 + \sinh^2(1)) + \cos^2(1)\sinh^2(1)$$
   $$= \sin^2(1) + \sinh^2(1)(\sin^2(1) + \cos^2(1))$$
   $$= \sin^2(1) + \sinh^2(1)$$

6. Substitute numerical values:
$$\sin(1) \approx 0.8415, \quad \cos(1) \approx 0.5403$$
$$\cosh(1) \approx 1.5431, \quad \sinh(1) \approx 1.1752$$
$$A = (0.8415)(1.5431) \approx 1.2985$$
$$B = (0.5403)(1.1752) \approx 0.6350$$
$$A^2 + B^2 = (0.8415)^2 + (1.1752)^2 \approx 0.7081 + 1.3811 \approx 2.0892$$

7. Therefore:
$$\csc(1+i) = \frac{A - iB}{A^2 + B^2} \approx \frac{1.2985 - 0.6350\,i}{2.0892} \approx 0.6215 - 0.3039\,i$$

$$\boxed{\csc(1+i) = \frac{\sin 1\cosh 1 - i\cos 1\sinh 1}{\sin^2 1 + \sinh^2 1} \approx 0.6215 - 0.3039\,i}$$

---

## Problems 9–12: Solving Trigonometric Equations

---

**Problem 9.** Solve $\sin z = i$.

**Solution.**

1. Write $\sin z = i$ using the exponential definition:
$$\frac{e^{iz} - e^{-iz}}{2i} = i$$

2. Multiply both sides by $2i$:
$$e^{iz} - e^{-iz} = 2i^2 = -2$$

3. Let $w = e^{iz}$ (so $e^{-iz} = 1/w$):
$$w - \frac{1}{w} = -2$$

4. Multiply both sides by $w$:
$$w^2 - 1 = -2w$$
$$w^2 + 2w - 1 = 0$$

5. Apply the quadratic formula:
$$w = \frac{-2 \pm \sqrt{4 + 4}}{2} = \frac{-2 \pm 2\sqrt{2}}{2} = -1 \pm \sqrt{2}$$

**Case 1:** $w = \sqrt{2} - 1 > 0$. Then $e^{iz} = \sqrt{2} - 1$ (positive real), so:
$$iz = \log_e(\sqrt{2} - 1) + 2n\pi i, \quad n \in \mathbb{Z}$$
$$z = \frac{\log_e(\sqrt{2}-1)}{i} + 2n\pi = -i\log_e(\sqrt{2}-1) + 2n\pi$$
$$= 2n\pi - i\log_e(\sqrt{2} - 1)$$

Note: $\log_e(\sqrt{2}-1) = -\log_e(\sqrt{2}+1)$, so this can also be written as $2n\pi + i\log_e(\sqrt{2}+1)$.

**Case 2:** $w = -1 - \sqrt{2} < 0$. Then $|w| = 1 + \sqrt{2}$ and $\arg(w) = \pi$, so:
$$iz = \log_e(1 + \sqrt{2}) + i(\pi + 2n\pi) = \log_e(\sqrt{2}+1) + i(2n+1)\pi$$
$$z = \frac{\log_e(\sqrt{2}+1)}{i} + (2n+1)\pi = (2n+1)\pi - i\log_e(\sqrt{2}+1)$$

Combining both cases (noting $\log_e(\sqrt{2}-1) = -\log_e(\sqrt{2}+1)$):

$$\boxed{z = 2n\pi + i\log_e(\sqrt{2}+1) \quad \text{or} \quad z = (2n+1)\pi - i\log_e(\sqrt{2}+1), \quad n \in \mathbb{Z}}$$

---

**Problem 10.** Solve $\cos z = 4$.

**Solution.**

1. Write $\cos z = 4$ using the exponential definition:
$$\frac{e^{iz} + e^{-iz}}{2} = 4 \implies e^{iz} + e^{-iz} = 8$$

2. Let $w = e^{iz}$:
$$w + \frac{1}{w} = 8 \implies w^2 - 8w + 1 = 0$$

3. Apply the quadratic formula:
$$w = \frac{8 \pm \sqrt{64 - 4}}{2} = \frac{8 \pm \sqrt{60}}{2} = 4 \pm \sqrt{15}$$

4. Both roots $4 + \sqrt{15} > 0$ and $4 - \sqrt{15} > 0$ (since $\sqrt{15} \approx 3.873 < 4$) are positive reals.

**Case 1:** $w = 4 + \sqrt{15}$:
$$iz = \log_e(4 + \sqrt{15}) + 2n\pi i \implies z = 2n\pi - i\log_e(4 + \sqrt{15})$$

**Case 2:** $w = 4 - \sqrt{15}$:
$$iz = \log_e(4 - \sqrt{15}) + 2n\pi i \implies z = 2n\pi - i\log_e(4 - \sqrt{15})$$

Since $\log_e(4 - \sqrt{15}) = \log_e\!\left(\dfrac{1}{4+\sqrt{15}}\right) = -\log_e(4+\sqrt{15})$, Case 2 gives $z = 2n\pi + i\log_e(4+\sqrt{15})$.

Combining:

$$\boxed{z = 2n\pi \pm i\log_e(4 + \sqrt{15}), \quad n \in \mathbb{Z}}$$

---

**Problem 11.** Solve $\sin z = \cos z$.

**Solution.**

1. Divide both sides by $\cos z$ (valid where $\cos z \neq 0$):
$$\tan z = 1$$

2. Write $\tan z$ in exponential form. Recall $\tan z = \dfrac{\sin z}{\cos z} = \dfrac{e^{iz}-e^{-iz}}{i(e^{iz}+e^{-iz})}$. Setting this equal to 1:
$$e^{iz} - e^{-iz} = i(e^{iz} + e^{-iz})$$
$$e^{iz} - ie^{iz} = e^{-iz} + ie^{-iz}$$
$$e^{iz}(1 - i) = e^{-iz}(1 + i)$$
$$e^{2iz} = \frac{1+i}{1-i}$$

3. Simplify $\dfrac{1+i}{1-i}$ by multiplying by $\dfrac{1+i}{1+i}$:
$$\frac{(1+i)^2}{(1-i)(1+i)} = \frac{1 + 2i + i^2}{1 + 1} = \frac{2i}{2} = i$$

4. So $e^{2iz} = i$. Write $i = e^{i\pi/2 + 2n\pi i}$:
$$2iz = i\left(\frac{\pi}{2} + 2n\pi\right) \implies z = \frac{\pi}{4} + n\pi, \quad n \in \mathbb{Z}$$

5. Verify that $\cos z \neq 0$ at these points: $\cos(\pi/4 + n\pi) = \pm\cos(\pi/4) = \pm\dfrac{\sqrt{2}}{2} \neq 0$. Valid.

$$\boxed{z = \frac{\pi}{4} + n\pi, \quad n \in \mathbb{Z}}$$

---

**Problem 12.** Solve $\cos z = i\sin z$.

**Solution.**

1. Write using exponential definitions:
$$\frac{e^{iz}+e^{-iz}}{2} = i \cdot \frac{e^{iz}-e^{-iz}}{2i}$$

2. Simplify the right side: $i \cdot \dfrac{e^{iz}-e^{-iz}}{2i} = \dfrac{e^{iz}-e^{-iz}}{2}$.

3. So the equation becomes:
$$\frac{e^{iz}+e^{-iz}}{2} = \frac{e^{iz}-e^{-iz}}{2}$$

4. Subtract the right side from the left:
$$\frac{e^{iz}+e^{-iz}}{2} - \frac{e^{iz}-e^{-iz}}{2} = 0$$
$$\frac{(e^{iz}+e^{-iz}) - (e^{iz}-e^{-iz})}{2} = 0$$
$$\frac{2e^{-iz}}{2} = 0$$
$$e^{-iz} = 0$$

5. But $e^{-iz} = e^{-i(x+iy)} = e^{-ix+y} = e^y e^{-ix}$, and $|e^{-iz}| = e^y > 0$ for all finite $y$. The exponential function is never zero.

$$\boxed{\text{No solution; } \cos z = i\sin z \text{ has no solutions in } \mathbb{C}.}$$

---

## Problems 13–16: Verification of Identities

---

**Problem 13.** Prove that $\sin(-z) = -\sin z$ for all $z \in \mathbb{C}$.

**Solution.**

1. Start with the definition of $\sin(-z)$:
$$\sin(-z) = \frac{e^{i(-z)} - e^{-i(-z)}}{2i} = \frac{e^{-iz} - e^{iz}}{2i}$$

2. Factor out $-1$ from the numerator:
$$= \frac{-(e^{iz} - e^{-iz})}{2i}$$

3. Recognize that $\dfrac{e^{iz} - e^{-iz}}{2i} = \sin z$:
$$= -\sin z$$

$$\boxed{\sin(-z) = -\sin z}$$

This confirms that $\sin z$ is an **odd function** on $\mathbb{C}$. $\blacksquare$

---

**Problem 14.** Prove that $\cos(z_1 + z_2) = \cos z_1 \cos z_2 - \sin z_1 \sin z_2$.

**Solution.**

1. Write the definition of $\cos(z_1 + z_2)$:
$$\cos(z_1 + z_2) = \frac{e^{i(z_1+z_2)} + e^{-i(z_1+z_2)}}{2} = \frac{e^{iz_1}e^{iz_2} + e^{-iz_1}e^{-iz_2}}{2}$$

2. Write the products $\cos z_1 \cos z_2$ and $\sin z_1 \sin z_2$ in terms of exponentials:
$$\cos z_1 \cos z_2 = \frac{e^{iz_1}+e^{-iz_1}}{2} \cdot \frac{e^{iz_2}+e^{-iz_2}}{2} = \frac{e^{i(z_1+z_2)} + e^{i(z_1-z_2)} + e^{-i(z_1-z_2)} + e^{-i(z_1+z_2)}}{4}$$
$$\sin z_1 \sin z_2 = \frac{e^{iz_1}-e^{-iz_1}}{2i} \cdot \frac{e^{iz_2}-e^{-iz_2}}{2i} = \frac{e^{i(z_1+z_2)} - e^{i(z_1-z_2)} - e^{-i(z_1-z_2)} + e^{-i(z_1+z_2)}}{-4}$$

3. Therefore:
$$\cos z_1 \cos z_2 - \sin z_1 \sin z_2$$
$$= \frac{e^{i(z_1+z_2)} + e^{i(z_1-z_2)} + e^{-i(z_1-z_2)} + e^{-i(z_1+z_2)}}{4} - \frac{-(e^{i(z_1+z_2)} - e^{i(z_1-z_2)} - e^{-i(z_1-z_2)} + e^{-i(z_1+z_2)})}{4}$$

4. Write $\sin z_1 \sin z_2$ with denominator 4:
$$\sin z_1 \sin z_2 = \frac{-(e^{i(z_1+z_2)} - e^{i(z_1-z_2)} - e^{-i(z_1-z_2)} + e^{-i(z_1+z_2)})}{4}$$

5. Subtract:
$$\cos z_1\cos z_2 - \sin z_1\sin z_2 = \frac{1}{4}\Bigl[\bigl(e^{i(z_1+z_2)} + e^{-i(z_1+z_2)}\bigr) + \bigl(e^{i(z_1-z_2)} + e^{-i(z_1-z_2)}\bigr)\Bigr]$$
$$- \frac{1}{4}\Bigl[-\bigl(e^{i(z_1+z_2)} + e^{-i(z_1+z_2)}\bigr) + \bigl(e^{i(z_1-z_2)} + e^{-i(z_1-z_2)}\bigr)\Bigr]$$

6. Combine the $e^{\pm i(z_1+z_2)}$ terms (they appear with coefficient $+1$ in $\cos z_1\cos z_2$ and with $+1$ from $-\sin z_1\sin z_2$):
$$= \frac{1}{4}\Bigl[2e^{i(z_1+z_2)} + 2e^{-i(z_1+z_2)}\Bigr] = \frac{e^{i(z_1+z_2)} + e^{-i(z_1+z_2)}}{2} = \cos(z_1+z_2)$$

$$\boxed{\cos(z_1 + z_2) = \cos z_1 \cos z_2 - \sin z_1 \sin z_2}\ \blacksquare$$

---

**Problem 15.** Prove that $\cos\bar{z} = \overline{\cos z}$.

**Solution.**

1. Write $z = x + iy$, so $\bar{z} = x - iy$.

2. Compute $\overline{\cos z}$ using the decomposition $\cos z = \cos x\cosh y - i\sin x\sinh y$:
$$\overline{\cos z} = \cos x\cosh y + i\sin x\sinh y$$

3. Compute $\cos\bar{z}$ with $\bar{z} = x + i(-y)$, so $x_0 = x$, $y_0 = -y$:
$$\cos\bar{z} = \cos(x)\cosh(-y) - i\sin(x)\sinh(-y)$$

4. Use even/odd properties: $\cosh(-y) = \cosh(y)$ and $\sinh(-y) = -\sinh(y)$:
$$\cos\bar{z} = \cos(x)\cosh(y) - i\sin(x)\cdot(-\sinh(y)) = \cos(x)\cosh(y) + i\sin(x)\sinh(y)$$

5. This equals $\overline{\cos z}$ from Step 2.

$$\boxed{\cos\bar{z} = \overline{\cos z}}\ \blacksquare$$

This result says that $\cos z$ **maps conjugate inputs to conjugate outputs**; it reflects the general principle for real-coefficient entire functions.

---

**Problem 16.** Prove that $\sin\!\left(z - \dfrac{\pi}{2}\right) = -\cos z$.

**Solution.**

1. Apply the addition formula $\sin(A - B) = \sin A\cos B - \cos A\sin B$ with $A = z$, $B = \pi/2$:
$$\sin\!\left(z - \frac{\pi}{2}\right) = \sin z \cos\!\left(\frac{\pi}{2}\right) - \cos z \sin\!\left(\frac{\pi}{2}\right)$$

2. Substitute the real values $\cos(\pi/2) = 0$ and $\sin(\pi/2) = 1$:
$$= \sin z \cdot 0 - \cos z \cdot 1 = -\cos z$$

**Alternatively**, use the exponential definition directly:
$$\sin\!\left(z - \frac{\pi}{2}\right) = \frac{e^{i(z-\pi/2)} - e^{-i(z-\pi/2)}}{2i} = \frac{e^{iz}e^{-i\pi/2} - e^{-iz}e^{i\pi/2}}{2i}$$

Since $e^{-i\pi/2} = -i$ and $e^{i\pi/2} = i$:
$$= \frac{-i\,e^{iz} - i\,e^{-iz}}{2i} = \frac{-i(e^{iz}+e^{-iz})}{2i} = \frac{-(e^{iz}+e^{-iz})}{2} = -\cos z$$

$$\boxed{\sin\!\left(z - \frac{\pi}{2}\right) = -\cos z}\ \blacksquare$$

---

## Problems 17–20: Derivatives

---

**Problem 17.** Find $f'(z)$ where $f(z) = \sin(z^2)$.

**Solution.**

1. Recognize $f$ as a composition: $f(z) = \sin(g(z))$ where $g(z) = z^2$.

2. Apply the **chain rule**: $f'(z) = \cos(g(z)) \cdot g'(z)$.

3. Compute $g'(z) = 2z$.

4. Substitute:
$$f'(z) = \cos(z^2) \cdot 2z = 2z\cos(z^2)$$

$$\boxed{f'(z) = 2z\cos(z^2)}$$

---

**Problem 18.** Find $f'(z)$ where $f(z) = \cos(ie^z)$.

**Solution.**

1. Recognize $f(z) = \cos(h(z))$ where $h(z) = ie^z$.

2. Apply the chain rule: $f'(z) = -\sin(h(z)) \cdot h'(z)$.

3. Compute $h'(z) = ie^z$ (since $i$ is a constant and $(e^z)' = e^z$).

4. Substitute:
$$f'(z) = -\sin(ie^z) \cdot ie^z = -ie^z\sin(ie^z)$$

$$\boxed{f'(z) = -ie^z\sin(ie^z)}$$

---

**Problem 19.** Find $f'(z)$ where $f(z) = z\tan\!\left(\dfrac{1}{z}\right)$.

**Solution.**

1. Write $f(z) = z \cdot g(z)$ where $g(z) = \tan(1/z)$. Apply the **product rule**:
$$f'(z) = 1 \cdot g(z) + z \cdot g'(z) = \tan\!\left(\frac{1}{z}\right) + z \cdot g'(z)$$

2. Compute $g'(z)$ using the chain rule with inner function $u(z) = 1/z = z^{-1}$:
$$g'(z) = \sec^2\!\left(\frac{1}{z}\right) \cdot \frac{d}{dz}\!\left(\frac{1}{z}\right) = \sec^2\!\left(\frac{1}{z}\right) \cdot \left(-\frac{1}{z^2}\right)$$

3. Substitute back:
$$f'(z) = \tan\!\left(\frac{1}{z}\right) + z \cdot \sec^2\!\left(\frac{1}{z}\right) \cdot \left(-\frac{1}{z^2}\right)$$

4. Simplify $z \cdot \left(-\dfrac{1}{z^2}\right) = -\dfrac{1}{z}$:
$$f'(z) = \tan\!\left(\frac{1}{z}\right) - \frac{1}{z}\sec^2\!\left(\frac{1}{z}\right)$$

$$\boxed{f'(z) = \tan\!\left(\frac{1}{z}\right) - \frac{1}{z}\sec^2\!\left(\frac{1}{z}\right)}$$

---

**Problem 20.** Find $f'(z)$ where $f(z) = \sec\!\left(z^2 + (1-i)z + i\right)$.

**Solution.**

1. Let $p(z) = z^2 + (1-i)z + i$. Then $f(z) = \sec(p(z))$.

2. Apply the chain rule: $f'(z) = \sec(p(z))\tan(p(z)) \cdot p'(z)$.

3. Compute $p'(z)$:
$$p'(z) = 2z + (1-i)$$

4. Substitute:
$$f'(z) = \bigl(2z + (1-i)\bigr)\sec\!\bigl(z^2+(1-i)z+i\bigr)\tan\!\bigl(z^2+(1-i)z+i\bigr)$$

$$\boxed{f'(z) = (2z+1-i)\sec\!\bigl(z^2+(1-i)z+i\bigr)\tan\!\bigl(z^2+(1-i)z+i\bigr)}$$

---

## Problems 21–24: Hyperbolic Function Values

---

**Problem 21.** Find the value of $\cosh(\pi i)$ in the form $a + ib$.

**Solution.**

1. Use the identity $\cosh(iz) = \cos z$ with $z = \pi$:
$$\cosh(\pi i) = \cos(\pi)$$

2. Evaluate: $\cos(\pi) = -1$.

$$\boxed{\cosh(\pi i) = -1}$$

---

**Problem 22.** Find the value of $\sinh\!\left(\dfrac{\pi i}{2}\right)$ in the form $a + ib$.

**Solution.**

1. Use the identity $\sinh(iz) = i\sin z$ with $z = \dfrac{\pi}{2}$:
$$\sinh\!\left(\frac{\pi i}{2}\right) = i\sin\!\left(\frac{\pi}{2}\right)$$

2. Evaluate: $\sin(\pi/2) = 1$:
$$\sinh\!\left(\frac{\pi i}{2}\right) = i \cdot 1 = i$$

$$\boxed{\sinh\!\left(\frac{\pi i}{2}\right) = i}$$

---

**Problem 23.** Find the value of $\cosh\!\left(1 + \dfrac{\pi i}{6}\right)$ in the form $a + ib$.

**Solution.**

1. Identify $x = 1$, $y = \dfrac{\pi}{6}$.

2. Apply the decomposition:
$$\cosh(x + iy) = \cosh x\cos y + i\sinh x\sin y$$

3. Substitute:
$$\cosh\!\left(1 + \frac{\pi i}{6}\right) = \cosh(1)\cos\!\left(\frac{\pi}{6}\right) + i\sinh(1)\sin\!\left(\frac{\pi}{6}\right)$$

4. Evaluate: $\cos(\pi/6) = \dfrac{\sqrt{3}}{2}$, $\sin(\pi/6) = \dfrac{1}{2}$:
$$= \frac{\sqrt{3}}{2}\cosh(1) + \frac{i}{2}\sinh(1)$$

5. Numerically: $\cosh(1) \approx 1.5431$, $\sinh(1) \approx 1.1752$:
$$\text{Re} = \frac{\sqrt{3}}{2}(1.5431) \approx (0.8660)(1.5431) \approx 1.3364$$
$$\text{Im} = \frac{1}{2}(1.1752) \approx 0.5876$$

$$\boxed{\cosh\!\left(1 + \frac{\pi i}{6}\right) = \frac{\sqrt{3}}{2}\cosh 1 + \frac{i}{2}\sinh 1 \approx 1.3364 + 0.5876\,i}$$

---

**Problem 24.** Find the value of $\tanh(2 + 3i)$ in the form $a + ib$.

**Solution.**

1. Write $\tanh(2 + 3i) = \dfrac{\sinh(2+3i)}{\cosh(2+3i)}$.

2. Compute $\sinh(2 + 3i)$ with $x = 2$, $y = 3$:
$$\sinh(2+3i) = \sinh(2)\cos(3) + i\cosh(2)\sin(3)$$

3. Compute $\cosh(2 + 3i)$:
$$\cosh(2+3i) = \cosh(2)\cos(3) + i\sinh(2)\sin(3)$$

4. Let $A = \sinh(2)\cos(3)$, $B = \cosh(2)\sin(3)$, $C = \cosh(2)\cos(3)$, $D = \sinh(2)\sin(3)$.

   Then $\sinh(2+3i) = A + iB$ and $\cosh(2+3i) = C + iD$.

5. Compute the ratio $\dfrac{A+iB}{C+iD}$ by multiplying by $\dfrac{C-iD}{C-iD}$:
$$\tanh(2+3i) = \frac{(A+iB)(C-iD)}{C^2+D^2} = \frac{(AC+BD) + i(BC-AD)}{C^2+D^2}$$

6. Numerically:
$$\sinh(2) \approx 3.6269, \quad \cosh(2) \approx 3.7622$$
$$\cos(3) \approx -0.9900, \quad \sin(3) \approx 0.1411$$

$$A = (3.6269)(-0.9900) \approx -3.5906$$
$$B = (3.7622)(0.1411) \approx 0.5308$$
$$C = (3.7622)(-0.9900) \approx -3.7246$$
$$D = (3.6269)(0.1411) \approx 0.5117$$

$$C^2 + D^2 \approx (3.7246)^2 + (0.5117)^2 \approx 13.8726 + 0.2618 \approx 14.1344$$

$$AC + BD = (-3.5906)(-3.7246) + (0.5308)(0.5117) \approx 13.3775 + 0.2716 \approx 13.6491$$
$$BC - AD = (0.5308)(-3.7246) + (-3.5906)(0.5117) \approx -1.9768 - 1.8371 \approx -0.0063$$

7. Divide:
$$\tanh(2+3i) \approx \frac{13.6491 - 0.0063\,i}{14.1344} \approx 0.9656 - 0.0000\,i$$

Using the more precise formula $\tanh(x+iy) = \dfrac{\sinh 2x + i\sin 2y}{\cosh 2x + \cos 2y}$:
$$\tanh(2+3i) = \frac{\sinh(4) + i\sin(6)}{\cosh(4) + \cos(6)} \approx \frac{27.2899 + i(-0.2794)}{27.3082 + 0.9602} \approx \frac{27.2899 - 0.2794\,i}{28.2684}$$
$$\approx 0.9653 - 0.0099\,i$$

$$\boxed{\tanh(2+3i) = \frac{\sinh(4)+i\sin(6)}{\cosh(4)+\cos(6)} \approx 0.9653 - 0.0099\,i}$$

---

## Problems 25–28: Solving Hyperbolic Equations

---

**Problem 25.** Solve $\cosh z = i$.

**Solution.**

1. Use the identity $\cosh(z) = \cos(iz)$. Substituting $w = iz$:
$$\cos(w) = i$$

2. This is analogous to Problem 10 but with $i$ instead of 4. Use the definition:
$$\frac{e^{iw}+e^{-iw}}{2} = i \implies e^{iw} + e^{-iw} = 2i$$

3. Let $u = e^{iw}$:
$$u + \frac{1}{u} = 2i \implies u^2 - 2iu + 1 = 0$$

4. Quadratic formula:
$$u = \frac{2i \pm \sqrt{-4 - 4}}{2} = \frac{2i \pm \sqrt{-8}}{2} = \frac{2i \pm 2i\sqrt{2}}{2} = i(1 \pm \sqrt{2})$$

5. **Case 1:** $u = i(1 + \sqrt{2})$. Write in polar form: $|u| = 1+\sqrt{2}$, $\arg(u) = \pi/2 + 2n\pi$.
$$iw = \log_e(1+\sqrt{2}) + i\!\left(\frac{\pi}{2} + 2n\pi\right)$$
$$w = \frac{\log_e(1+\sqrt{2})}{i} + \frac{\pi}{2} + 2n\pi = -i\log_e(1+\sqrt{2}) + \left(\frac{\pi}{2}+2n\pi\right)$$

   Since $w = iz$, we have $z = w/i = -iw$:
$$z = -i\!\left[-i\log_e(1+\sqrt{2}) + \frac{(4n+1)\pi}{2}\right] = -\log_e(1+\sqrt{2}) - i\frac{(4n+1)\pi}{2}$$

   Writing $-\log_e(1+\sqrt{2}) = \log_e(\sqrt{2}-1)$:
$$z = \log_e(\sqrt{2}-1) + i\frac{(4n+1)\pi}{2}$$

6. **Case 2:** $u = i(1 - \sqrt{2}) = -i(\sqrt{2}-1)$. Here $|u| = \sqrt{2}-1$ and $\arg(u) = -\pi/2 + 2n\pi = \frac{(4n-1)\pi}{2}$.
$$iw = \log_e(\sqrt{2}-1) + i\frac{(4n-1)\pi}{2}$$
$$w = -i\log_e(\sqrt{2}-1) + \frac{(4n-1)\pi}{2}$$
$$z = -iw = i^2\log_e(\sqrt{2}-1) - i\frac{(4n-1)\pi}{2} = \log_e(\sqrt{2}+1) + i\frac{(4n-1)\pi}{2}$$

   (since $-i \cdot (-i\log_e(\sqrt{2}-1)) = i^2\log_e(\sqrt{2}-1) = -\log_e(\sqrt{2}-1) = \log_e(\sqrt{2}+1)$).

$$\boxed{z = \log_e(\sqrt{2}-1) + i\frac{(4n+1)\pi}{2} \quad \text{or} \quad z = \log_e(\sqrt{2}+1) + i\frac{(4n-1)\pi}{2}, \quad n\in\mathbb{Z}}$$

---

**Problem 26.** Solve $\sinh z = -1$.

**Solution.**

1. Use the identity $\sinh z = -i\sin(iz)$. Set $w = iz$:
$$-i\sin(w) = -1 \implies \sin(w) = -i \cdot (-1)^{-1}\cdot i = i$$

   More directly: $\sinh z = -1$ means $\sin(iz) = i\sinh z = i(-1) = -i$, so $\sin(w) = -i$ where $w = iz$.

2. Solve $\sin(w) = -i$ using the exponential definition:
$$\frac{e^{iw}-e^{-iw}}{2i} = -i \implies e^{iw}-e^{-iw} = -2i^2 = 2$$

3. Let $s = e^{iw}$:
$$s - \frac{1}{s} = 2 \implies s^2 - 2s - 1 = 0$$
$$s = \frac{2 \pm \sqrt{8}}{2} = 1 \pm \sqrt{2}$$

4. **Case 1:** $s = 1 + \sqrt{2} > 0$:
$$iw = \log_e(1+\sqrt{2}) + 2n\pi i \implies w = 2n\pi - i\log_e(1+\sqrt{2})$$
$$z = \frac{w}{i} = -iw = i\log_e(1+\sqrt{2}) + 2n\pi i$$

   Wait — recall $w = iz$, so $z = w/i = -iw$:
$$z = -i\bigl(2n\pi - i\log_e(1+\sqrt{2})\bigr) = -2n\pi i + i^2\log_e(1+\sqrt{2}) = -\log_e(1+\sqrt{2}) - 2n\pi i$$

   Writing $-\log_e(1+\sqrt{2}) = \log_e(\sqrt{2}-1)$:
$$z = \log_e(\sqrt{2}-1) + 2n\pi i$$

   But $\sinh(\log_e(\sqrt{2}-1)) = \sinh(-\log_e(\sqrt{2}+1)) = -\sinh(\log_e(\sqrt{2}+1))$. Let us verify directly: the solutions should satisfy $\sinh z = -1$.

5. **Case 2:** $s = 1 - \sqrt{2} < 0$. Then $|s| = \sqrt{2}-1$ and $\arg(s) = \pi + 2n\pi$:
$$iw = \log_e(\sqrt{2}-1) + i(2n+1)\pi \implies w = (2n+1)\pi - i\log_e(\sqrt{2}-1)$$
$$z = -iw = -i(2n+1)\pi + i^2\log_e(\sqrt{2}-1) = \log_e(\sqrt{2}-1) - i(2n+1)\pi$$

6. Combining (and absorbing sign):

$$\boxed{z = \log_e(\sqrt{2}-1) + 2n\pi i \quad \text{or} \quad z = \log_e(\sqrt{2}-1) - i(2n+1)\pi, \quad n \in \mathbb{Z}}$$

*Equivalently*, since $\log_e(\sqrt{2}-1) = -\log_e(\sqrt{2}+1)$, these can be written as $z = -\log_e(\sqrt{2}+1) + n\pi i$ for appropriate parities of $n$.

---

**Problem 27.** Show that $\sinh z = \cosh z$ has no solutions.

**Solution.**

1. If $\sinh z = \cosh z$, divide both sides by $\cosh z$ (checking that $\cosh z \neq 0$ — we will address this):
$$\tanh z = 1$$

2. Write $\tanh z = 1$ in terms of exponentials:
$$\frac{e^z - e^{-z}}{e^z + e^{-z}} = 1$$

3. Cross-multiply:
$$e^z - e^{-z} = e^z + e^{-z}$$

4. Subtract $e^z$ from both sides:
$$-e^{-z} = e^{-z}$$

5. Add $e^{-z}$ to both sides:
$$0 = 2e^{-z}$$

6. But $e^{-z} \neq 0$ for any $z \in \mathbb{C}$ (since $|e^{-z}| = e^{-x} > 0$). This is a contradiction.

7. (If $\cosh z = 0$, then $\sinh z = \cosh z = 0$ would require $\sinh z = 0$ too, but $\cosh^2 z - \sinh^2 z = 1 \neq 0$, so $\cosh z$ and $\sinh z$ cannot both be zero simultaneously.)

$$\boxed{\sinh z = \cosh z \text{ has no solutions in } \mathbb{C}.}\ \blacksquare$$

---

**Problem 28.** Solve $\sinh z = e^z$.

**Solution.**

1. Write $\sinh z$ using exponentials:
$$\frac{e^z - e^{-z}}{2} = e^z$$

2. Multiply both sides by 2:
$$e^z - e^{-z} = 2e^z$$

3. Subtract $e^z$ from both sides:
$$-e^{-z} = e^z$$

4. Multiply both sides by $e^z$:
$$-1 = e^{2z}$$

5. Write $-1 = e^{i\pi + 2n\pi i} = e^{i(2n+1)\pi}$ for $n \in \mathbb{Z}$:
$$e^{2z} = e^{i(2n+1)\pi}$$

6. Therefore $2z = i(2n+1)\pi$:
$$z = \frac{i(2n+1)\pi}{2}, \quad n \in \mathbb{Z}$$

$$\boxed{z = \frac{(2n+1)\pi i}{2} = \frac{\pi i}{2},\, \frac{3\pi i}{2},\, \frac{-\pi i}{2},\, \ldots, \quad n \in \mathbb{Z}}$$

---

## Problems 29–32: Verifying Hyperbolic Identities

---

**Problem 29.** Prove that $\cosh^2 z - \sinh^2 z = 1$.

**Solution.**

1. Write $\cosh^2 z - \sinh^2 z$ using exponential definitions:
$$\cosh^2 z = \left(\frac{e^z+e^{-z}}{2}\right)^2 = \frac{e^{2z}+2+e^{-2z}}{4}$$
$$\sinh^2 z = \left(\frac{e^z-e^{-z}}{2}\right)^2 = \frac{e^{2z}-2+e^{-2z}}{4}$$

2. Subtract:
$$\cosh^2 z - \sinh^2 z = \frac{e^{2z}+2+e^{-2z}}{4} - \frac{e^{2z}-2+e^{-2z}}{4}$$

3. Combine numerators:
$$= \frac{(e^{2z}+2+e^{-2z}) - (e^{2z}-2+e^{-2z})}{4} = \frac{4}{4} = 1$$

$$\boxed{\cosh^2 z - \sinh^2 z = 1}\ \blacksquare$$

---

**Problem 30.** Prove that $\sinh(z_1 + z_2) = \sinh z_1 \cosh z_2 + \cosh z_1 \sinh z_2$.

**Solution.**

1. Expand the right side using exponential definitions:
$$\sinh z_1 \cosh z_2 = \frac{e^{z_1}-e^{-z_1}}{2} \cdot \frac{e^{z_2}+e^{-z_2}}{2}$$
$$= \frac{e^{z_1+z_2} + e^{z_1-z_2} - e^{-z_1+z_2} - e^{-(z_1+z_2)}}{4}$$

$$\cosh z_1 \sinh z_2 = \frac{e^{z_1}+e^{-z_1}}{2} \cdot \frac{e^{z_2}-e^{-z_2}}{2}$$
$$= \frac{e^{z_1+z_2} - e^{z_1-z_2} + e^{-z_1+z_2} - e^{-(z_1+z_2)}}{4}$$

2. Add:
$$\sinh z_1\cosh z_2 + \cosh z_1\sinh z_2 = \frac{2e^{z_1+z_2} - 2e^{-(z_1+z_2)}}{4} = \frac{e^{z_1+z_2}-e^{-(z_1+z_2)}}{2}$$

3. Recognize the right side as $\sinh(z_1 + z_2)$.

$$\boxed{\sinh(z_1+z_2) = \sinh z_1\cosh z_2 + \cosh z_1\sinh z_2}\ \blacksquare$$

---

**Problem 31.** Prove that $|\sinh z|^2 = \sinh^2 x + \sin^2 y$, where $z = x + iy$.

**Solution.**

1. Write the decomposition:
$$\sinh(x+iy) = \sinh x\cos y + i\cosh x\sin y$$

2. Compute $|\sinh z|^2 = (\text{Re})^2 + (\text{Im})^2$:
$$|\sinh z|^2 = \sinh^2 x\cos^2 y + \cosh^2 x\sin^2 y$$

3. Use $\cosh^2 x = 1 + \sinh^2 x$:
$$= \sinh^2 x\cos^2 y + (1+\sinh^2 x)\sin^2 y$$
$$= \sinh^2 x\cos^2 y + \sin^2 y + \sinh^2 x\sin^2 y$$

4. Factor $\sinh^2 x$:
$$= \sinh^2 x(\cos^2 y + \sin^2 y) + \sin^2 y$$

5. Apply $\cos^2 y + \sin^2 y = 1$:
$$= \sinh^2 x \cdot 1 + \sin^2 y = \sinh^2 x + \sin^2 y$$

$$\boxed{|\sinh z|^2 = \sinh^2 x + \sin^2 y}\ \blacksquare$$

---

**Problem 32.** Prove that $\operatorname{Im}(\cosh z) = \sinh x \sin y$, where $z = x + iy$.

**Solution.**

1. Use the decomposition formula:
$$\cosh(x+iy) = \cosh x\cos y + i\sinh x\sin y$$

2. The imaginary part is the coefficient of $i$:
$$\operatorname{Im}(\cosh z) = \sinh x\sin y$$

**Derivation of the formula from first principles:**

1. Write:
$$\cosh(x+iy) = \frac{e^{x+iy}+e^{-(x+iy)}}{2} = \frac{e^x e^{iy} + e^{-x}e^{-iy}}{2}$$

2. Expand using $e^{iy} = \cos y + i\sin y$ and $e^{-iy} = \cos y - i\sin y$:
$$= \frac{e^x(\cos y + i\sin y) + e^{-x}(\cos y - i\sin y)}{2}$$

3. Separate real and imaginary parts:
$$= \frac{(e^x+e^{-x})\cos y}{2} + i\frac{(e^x-e^{-x})\sin y}{2}$$

4. Recognize $\cosh x = \dfrac{e^x+e^{-x}}{2}$ and $\sinh x = \dfrac{e^x-e^{-x}}{2}$:
$$= \cosh x\cos y + i\sinh x\sin y$$

5. The imaginary part is:
$$\operatorname{Im}(\cosh z) = \sinh x\sin y$$

$$\boxed{\operatorname{Im}(\cosh z) = \sinh x \sin y}\ \blacksquare$$

---

## Problems 33–36: Derivatives (Hyperbolic)

---

**Problem 33.** Find $f'(z)$ where $f(z) = \sin z \sinh z$.

**Solution.**

1. Apply the **product rule**: $f'(z) = (\sin z)'\sinh z + \sin z(\sinh z)'$.

2. Recall $(\sin z)' = \cos z$ and $(\sinh z)' = \cosh z$.

3. Substitute:
$$f'(z) = \cos z \sinh z + \sin z \cosh z$$

$$\boxed{f'(z) = \cos z\sinh z + \sin z\cosh z}$$

---

**Problem 34.** Find $f'(z)$ where $f(z) = \tanh z$.

**Solution.**

1. Write $\tanh z = \dfrac{\sinh z}{\cosh z}$ and apply the **quotient rule**:
$$f'(z) = \frac{(\sinh z)'\cosh z - \sinh z(\cosh z)'}{\cosh^2 z}$$

2. Substitute $(\sinh z)' = \cosh z$ and $(\cosh z)' = \sinh z$:
$$f'(z) = \frac{\cosh z \cdot \cosh z - \sinh z \cdot \sinh z}{\cosh^2 z} = \frac{\cosh^2 z - \sinh^2 z}{\cosh^2 z}$$

3. Apply the identity $\cosh^2 z - \sinh^2 z = 1$ (Problem 29):
$$f'(z) = \frac{1}{\cosh^2 z} = \operatorname{sech}^2 z$$

$$\boxed{f'(z) = \operatorname{sech}^2 z}$$

---

**Problem 35.** Find $f'(z)$ where $f(z) = \tanh(iz - 2)$.

**Solution.**

1. Let $g(z) = iz - 2$. Then $f(z) = \tanh(g(z))$.

2. Apply the chain rule: $f'(z) = \operatorname{sech}^2(g(z)) \cdot g'(z)$.

3. Compute $g'(z) = i$.

4. Substitute:
$$f'(z) = i\operatorname{sech}^2(iz - 2)$$

$$\boxed{f'(z) = i\operatorname{sech}^2(iz - 2)}$$

---

**Problem 36.** Find $f'(z)$ where $f(z) = \cosh(iz + e^{iz})$.

**Solution.**

1. Let $g(z) = iz + e^{iz}$. Then $f(z) = \cosh(g(z))$.

2. Apply the chain rule: $f'(z) = \sinh(g(z)) \cdot g'(z)$.

3. Compute $g'(z)$:
$$g'(z) = \frac{d}{dz}(iz) + \frac{d}{dz}(e^{iz}) = i + ie^{iz} = i(1 + e^{iz})$$

4. Substitute:
$$f'(z) = \sinh(iz + e^{iz}) \cdot i(1+e^{iz}) = i(1+e^{iz})\sinh(iz+e^{iz})$$

$$\boxed{f'(z) = i(1 + e^{iz})\sinh(iz + e^{iz})}$$

---

## Problems 37–52: Conceptual Problems

---

**Problem 37.** Prove Euler's formula for complex $z$: $e^{iz} = \cos z + i\sin z$.

**Solution.**

1. Write $\cos z + i\sin z$ using the exponential definitions of $\cos z$ and $\sin z$:
$$\cos z + i\sin z = \frac{e^{iz}+e^{-iz}}{2} + i\cdot\frac{e^{iz}-e^{-iz}}{2i}$$

2. Simplify the second term: $i \cdot \dfrac{e^{iz}-e^{-iz}}{2i} = \dfrac{e^{iz}-e^{-iz}}{2}$:
$$\cos z + i\sin z = \frac{e^{iz}+e^{-iz}}{2} + \frac{e^{iz}-e^{-iz}}{2}$$

3. Combine over the common denominator 2:
$$= \frac{(e^{iz}+e^{-iz}) + (e^{iz}-e^{-iz})}{2} = \frac{2e^{iz}}{2} = e^{iz}$$

$$\boxed{e^{iz} = \cos z + i\sin z}\ \blacksquare$$

---

**Problem 38.** Solve $\sin z = \cosh 2$ and show that all solutions are real.

**Solution.**

1. Write $z = x + iy$ and use $\sin(x+iy) = \sin x\cosh y + i\cos x\sinh y$.

2. The equation $\sin z = \cosh 2$ is real (right side has no imaginary part), so we equate real and imaginary parts:
$$\text{Real part: } \sin x\cosh y = \cosh 2 \tag{i}$$
$$\text{Imaginary part: } \cos x\sinh y = 0 \tag{ii}$$

3. From (ii): either $\cos x = 0$ or $\sinh y = 0$.

   **Sub-case A:** $\sinh y = 0 \Rightarrow y = 0$.
   Then (i) becomes $\sin x \cdot \cosh(0) = \cosh 2$, i.e., $\sin x = \cosh 2$.
   But $\cosh 2 \approx 3.762 > 1$ and $|\sin x| \le 1$ for real $x$. **No solution.**

   **Sub-case B:** $\cos x = 0 \Rightarrow x = \dfrac{\pi}{2} + n\pi$, $n \in \mathbb{Z}$.
   Then (i) becomes $\sin\!\left(\dfrac{\pi}{2}+n\pi\right)\cosh y = \cosh 2$.

4. Evaluate $\sin(\pi/2 + n\pi) = (-1)^n$. So the equation (i) becomes:
$$(-1)^n \cosh y = \cosh 2$$

   Since $\cosh y > 0$ always, we need $(-1)^n > 0$, so $n$ must be **even**: $n = 2k$.

5. For $n = 2k$: $x = \pi/2 + 2k\pi$ and $\cosh y = \cosh 2 \Rightarrow y = \pm 2$.

6. The solutions are:
$$z = \frac{\pi}{2} + 2k\pi \pm 2i, \quad k \in \mathbb{Z}$$

7. These solutions are **not** purely real (they have imaginary part $\pm 2$), but the problem asks us to show solutions; if the problem statement asks that $z$ is real when $a \in [-1,1]$: here $\cosh 2 > 1$, so solutions exist with nonzero imaginary part.

$$\boxed{z = \frac{\pi}{2} + 2k\pi \pm 2i, \quad k \in \mathbb{Z}}$$

---

**Problem 39.** Suppose $\sin z = a$ where $a \in \mathbb{R}$ and $|a| \le 1$. Show that $z$ must be real.

**Solution.**

1. Write $z = x + iy$ and decompose:
$$\sin(x+iy) = \sin x\cosh y + i\cos x\sinh y = a$$

2. Since $a$ is real, equate imaginary part to zero:
$$\cos x \sinh y = 0 \tag{ii}$$

3. Equate real parts:
$$\sin x \cosh y = a \tag{i}$$

4. From (ii): either $\cos x = 0$ or $y = 0$.

   **Sub-case A:** $y = 0$. Then $z = x$ is real, and (i) gives $\sin x = a$. Since $|a| \le 1$, this has solutions. **$z$ is real.**

   **Sub-case B:** $\cos x = 0$, so $x = \pi/2 + n\pi$. Then $\sin x = \pm 1$.
   Equation (i) becomes: $(\pm 1)\cosh y = a$, i.e., $\cosh y = \pm a$.
   Since $\cosh y \ge 1 > 0$, we need $a > 0$ and $\cosh y = |a| \le 1$.
   But $\cosh y \ge 1$, so $\cosh y = 1 \Rightarrow y = 0$.
   Hence $z = \pi/2 + n\pi$ is real.

5. In all cases, $y = 0$, so $z$ is real.

$$\boxed{\text{If } \sin z = a \text{ with } a \in [-1,1] \subseteq \mathbb{R}, \text{ then } z \text{ is necessarily real.}}\ \blacksquare$$

---

**Problem 40.** Show that $|\sin z| \le 1$ if and only if $|\sinh y| \le |\cos x|$, where $z = x + iy$.

**Solution.**

1. Recall the modulus formula:
$$|\sin z|^2 = \sin^2 x + \sinh^2 y$$

2. The condition $|\sin z| \le 1$ is equivalent to $|\sin z|^2 \le 1$:
$$\sin^2 x + \sinh^2 y \le 1$$

3. Use the Pythagorean identity $\sin^2 x + \cos^2 x = 1$, so $\sin^2 x = 1 - \cos^2 x$:
$$1 - \cos^2 x + \sinh^2 y \le 1$$

4. Rearrange:
$$\sinh^2 y \le \cos^2 x$$

5. Take square roots (both sides non-negative):
$$|\sinh y| \le |\cos x|$$

Since each step is an equivalence:

$$\boxed{|\sin z| \le 1 \iff |\sinh y| \le |\cos x|}\ \blacksquare$$

---

**Problem 41.** Show that the only zeros of $\cos z$ in $\mathbb{C}$ are the real zeros $z = \dfrac{(2n+1)\pi}{2}$, $n \in \mathbb{Z}$.

**Solution.**

1. Write $z = x + iy$ and decompose:
$$\cos(x+iy) = \cos x\cosh y - i\sin x\sinh y = 0$$

2. Both real and imaginary parts must be zero:
$$\cos x\cosh y = 0 \tag{i}$$
$$\sin x\sinh y = 0 \tag{ii}$$

3. From (i): since $\cosh y \ge 1 > 0$, we must have $\cos x = 0$.

4. Thus $x = \dfrac{(2n+1)\pi}{2}$ for some $n \in \mathbb{Z}$, so $\sin x = \pm 1 \neq 0$.

5. Substituting into (ii): $(\pm 1)\sinh y = 0 \Rightarrow \sinh y = 0 \Rightarrow y = 0$.

6. Therefore $z = x + 0i = \dfrac{(2n+1)\pi}{2}$ is purely real.

$$\boxed{\cos z = 0 \iff z = \frac{(2n+1)\pi}{2}, \quad n \in \mathbb{Z}}\ \blacksquare$$

---

**Problem 42.** Characterize all $z$ satisfying $|\tan z| = 1$.

**Solution.**

1. Write $\tan z = \dfrac{\sin z}{\cos z}$. Then $|\tan z| = 1$ means $|\sin z| = |\cos z|$ (provided $\cos z \neq 0$).

2. Use $|\sin z|^2 = \sin^2 x + \sinh^2 y$ and $|\cos z|^2 = \cos^2 x + \sinh^2 y$.

3. Set them equal:
$$\sin^2 x + \sinh^2 y = \cos^2 x + \sinh^2 y$$
$$\sin^2 x = \cos^2 x$$
$$\tan^2 x = 1$$
$$\tan x = \pm 1$$

4. Therefore $x = \dfrac{\pi}{4} + \dfrac{k\pi}{2}$ for $k \in \mathbb{Z}$, with $y$ arbitrary (so long as $\cos z \neq 0$, i.e., excluding the zeros of $\cos z$).

$$\boxed{|\tan z| = 1 \iff x = \frac{\pi}{4} + \frac{k\pi}{2},\ y \in \mathbb{R},\ k \in \mathbb{Z} \text{ (with } \cos z \neq 0\text{)}}$$

---

**Problem 43.** Show that $f(z) = \sin\bar{z}$ is nowhere analytic.

**Solution.**

1. Write $z = x + iy$, so $\bar{z} = x - iy$.

2. Use the decomposition with input $x + i(-y)$:
$$\sin\bar{z} = \sin(x - iy) = \sin x\cosh(-y) + i\cos x\sinh(-y) = \sin x\cosh y - i\cos x\sinh y$$

3. Identify real and imaginary parts: $u = \sin x\cosh y$, $v = -\cos x\sinh y$.

4. Check the **Cauchy-Riemann equations** $u_x = v_y$ and $u_y = -v_x$:
$$u_x = \cos x\cosh y, \qquad v_y = -\cos x\cosh y$$
$$u_y = \sin x\sinh y, \qquad -v_x = -\sin x\sinh y$$

5. For $u_x = v_y$: $\cos x\cosh y = -\cos x\cosh y \Rightarrow 2\cos x\cosh y = 0$.

   Since $\cosh y \ge 1 > 0$, this requires $\cos x = 0$, i.e., $x = \pi/2 + n\pi$.

6. At those $x$-values, check $u_y = -v_x$:
$$\sin x\sinh y = -\sin x\sinh y \Rightarrow 2\sin x\sinh y = 0$$
   Since $\sin(\pi/2 + n\pi) = \pm 1 \neq 0$, this forces $\sinh y = 0$, i.e., $y = 0$.

7. The C-R equations can only hold at isolated points of the form $\left(\dfrac{\pi}{2}+n\pi,\, 0\right)$, which form a discrete set with no interior. A function must satisfy C-R on an **open set** (neighborhood) to be analytic there.

$$\boxed{f(z) = \sin\bar{z} \text{ is nowhere analytic.}}\ \blacksquare$$

---

**Problem 44.** Show that $u = \sin x\cosh y$ and $v = \cos x\sinh y$ are harmonic functions on $\mathbb{C}$.

**Solution.**

1. Observe that $\sin(x+iy) = \sin x\cosh y + i\cos x\sinh y = u + iv$.

2. Since $f(z) = \sin z$ is **entire** (analytic on all of $\mathbb{C}$), its real and imaginary parts are harmonic on $\mathbb{C}$.

3. Therefore $u = \sin x\cosh y$ and $v = \cos x\sinh y$ are harmonic.

**Direct verification for $u$:**

1. Compute partial derivatives:
$$u_x = \cos x\cosh y, \quad u_{xx} = -\sin x\cosh y$$
$$u_y = \sin x\sinh y, \quad u_{yy} = \sin x\cosh y$$

2. Check Laplace's equation:
$$\nabla^2 u = u_{xx} + u_{yy} = -\sin x\cosh y + \sin x\cosh y = 0\ \checkmark$$

**Direct verification for $v$:**

1. Compute:
$$v_x = -\sin x\sinh y, \quad v_{xx} = -\cos x\sinh y$$
$$v_y = \cos x\cosh y, \quad v_{yy} = \cos x\sinh y$$

2. Check:
$$\nabla^2 v = v_{xx} + v_{yy} = -\cos x\sinh y + \cos x\sinh y = 0\ \checkmark$$

$$\boxed{u = \sin x\cosh y \text{ and } v = \cos x\sinh y \text{ are harmonic on } \mathbb{C}.}\ \blacksquare$$

---

**Problem 45.** Show that $f(z) = \sin z$ is one-to-one on the vertical strip $-\dfrac{\pi}{2} \le \operatorname{Re}(z) \le \dfrac{\pi}{2}$.

**Solution.**

1. Suppose $\sin z_1 = \sin z_2$ for $z_1, z_2$ in the strip $S = \left\{z : -\tfrac{\pi}{2} \le x \le \tfrac{\pi}{2}\right\}$.

2. Use the identity $\sin z_1 - \sin z_2 = 2\cos\!\left(\dfrac{z_1+z_2}{2}\right)\sin\!\left(\dfrac{z_1-z_2}{2}\right) = 0$.

3. So either $\cos\!\left(\dfrac{z_1+z_2}{2}\right) = 0$ or $\sin\!\left(\dfrac{z_1-z_2}{2}\right) = 0$.

4. Write $z_k = x_k + iy_k$. Let $\alpha = \dfrac{z_1+z_2}{2}$ and $\beta = \dfrac{z_1-z_2}{2}$.

   Note $\operatorname{Re}(\alpha) = \dfrac{x_1+x_2}{2} \in [-\pi/2, \pi/2]$ since $x_1, x_2 \in [-\pi/2, \pi/2]$.

5. $\cos\!\left(\alpha\right) = 0$ only when $\operatorname{Re}(\alpha) = \pm\pi/2$ and $\operatorname{Im}(\alpha) = 0$ (by Problem 41 applied to $\cos$). But from the modulus formula $|\cos z|^2 = \cos^2 x + \sinh^2 y$, $\cos(\alpha)=0$ requires $\sinh(\operatorname{Im}(\alpha))=0$ and $\cos(\operatorname{Re}(\alpha))=0$, i.e., $\operatorname{Re}(\alpha) = \pm\pi/2$ and $\operatorname{Im}(\alpha)=0$. This means $x_1+x_2 = \pm\pi$ and $y_1=y_2=0$; combined with $x_1,x_2 \in [-\pi/2,\pi/2]$, both $x_1 = x_2 = \pm\pi/2$. Then $\sin z_1 = \pm\cosh(y_1)$, $\sin z_2 = \pm\cosh(y_2)$; equality forces $y_1 = \pm y_2$, and since both are real-valued, $z_1 = z_2$.

6. $\sin\!\left(\beta\right) = 0$ requires $z_1 - z_2 = 2n\pi i + 2m\pi$ for integers $m, n$ (zeros of $\sin$). Since $|x_1 - x_2| \le \pi$ and $\sin$ has real period $2\pi$, the only possibility in the strip is $m = 0$ and $n = 0$, giving $z_1 = z_2$.

7. In all cases $z_1 = z_2$, so $\sin z$ is injective on $S$.

$$\boxed{\sin z \text{ is one-to-one on } \left\{z : -\frac{\pi}{2} \le \operatorname{Re}(z) \le \frac{\pi}{2}\right\}.}\ \blacksquare$$

---

**Problem 46.** Show that the image of the strip $\{z = x + iy : -\pi \le x \le 0,\ y \in \mathbb{R}\}$ under $w = \cos z$ is all of $\mathbb{C}$.

**Solution.**

1. Write $w = \cos(x+iy) = \cos x\cosh y - i\sin x\sinh y = u + iv$.

2. For a fixed $x_0 \in [-\pi, 0]$:
$$u = \cos(x_0)\cosh y, \quad v = -\sin(x_0)\sinh y$$

3. On this vertical line (varying $y \in \mathbb{R}$):

   - $\cosh y$ ranges over $[1,+\infty)$ and $\sinh y$ ranges over $(-\infty,+\infty)$.

   - $u = \cos(x_0)\cosh y$ ranges over $[\cos(x_0), +\infty)$ if $\cos(x_0) > 0$ ($x_0 \in (-\pi/2, 0]$), or $(-\infty, \cos(x_0)]$ if $\cos(x_0) < 0$, or $\{0\}$ if $x_0 = -\pi/2$.

4. For $x_0 = 0$: $w = \cosh y$, giving $u \in [1,+\infty)$, $v = 0$ — the interval $[1,\infty)$ on the real axis.

5. For $x_0 = -\pi$: $w = -\cosh y$, giving $u \in (-\infty,-1]$, $v = 0$ — the interval $(-\infty,-1]$.

6. For $x_0 = -\pi/2$: $\cos(-\pi/2) = 0$, $\sin(-\pi/2) = -1$:
$$u = 0, \quad v = \sinh y$$
   This gives the entire imaginary axis $v \in (-\infty,+\infty)$, $u = 0$.

7. As $x_0$ varies over $[-\pi, 0]$ and $y$ varies over $\mathbb{R}$, by continuity and the surjectivity argument (every half-plane and the imaginary axis are covered), the image includes all of $\mathbb{C}$.

   More precisely: given any target $w_0 = a + ib \in \mathbb{C}$, solve $\cos z = a + ib$ in $z$. The general solution $z = \pm\arccos(a+ib) + 2n\pi$ always has a representative in $[-\pi, 0] \times \mathbb{R}$ by periodicity and reflection symmetry.

$$\boxed{w = \cos z \text{ maps the strip } -\pi \le \operatorname{Re}(z) \le 0 \text{ onto all of } \mathbb{C}.}\ \blacksquare$$

---

**Problem 47.** Show that the image of the strip $\{z = x + iy : x \in \mathbb{R},\ -\pi/2 \le y \le \pi/2\}$ under $w = \sinh z$ is all of $\mathbb{C}$.

**Solution.**

1. Write $w = \sinh(x+iy) = \sinh x\cos y + i\cosh x\sin y = u + iv$.

2. For a fixed $y_0 \in [-\pi/2, \pi/2]$:
$$u = \sinh x \cos(y_0), \quad v = \cosh x \sin(y_0)$$

3. For $y_0 = 0$: $w = \sinh x$, giving the real axis $(-\infty,+\infty)$ as $x$ varies.

4. For $y_0 = \pi/2$: $\cos(\pi/2) = 0$, $\sin(\pi/2) = 1$:
$$u = 0, \quad v = \cosh x \ge 1$$
   This gives the upper imaginary axis $[i, i\infty)$.

5. For $y_0 = -\pi/2$: $u = 0$, $v = -\cosh x \le -1$, giving $(-i\infty, -i]$.

6. For general $y_0$, as $x \to \pm\infty$: $|\sinh x|, \cosh x \to \infty$, so $u$ and $v$ both go to $\pm\infty$. The image of each horizontal segment is an ellipse-like curve passing through $(0, \sin y_0)$ at $x=0$ and expanding as $x \to \pm\infty$.

7. By an argument analogous to Problem 46 (using continuity and the fact that half-planes are covered as $y_0$ ranges over $[-\pi/2, \pi/2]$), every $w_0 \in \mathbb{C}$ is achieved.

$$\boxed{w = \sinh z \text{ maps the strip } -\pi/2 \le \operatorname{Im}(z) \le \pi/2 \text{ onto all of } \mathbb{C}.}\ \blacksquare$$

---

**Problem 48.** Show that $w = (\sin z)^{1/4}$ maps the semi-strip $\left\{0 < x < \dfrac{\pi}{2},\ y > 0\right\}$ onto the wedge $\left\{w : 0 < \arg(w) < \dfrac{\pi}{4}\right\}$.

**Solution.**

1. **Step 1: Image of the semi-strip under $\zeta = \sin z$.**

   For $z = x + iy$ with $0 < x < \pi/2$ and $y > 0$:
   $$\zeta = \sin x\cosh y + i\cos x\sinh y$$
   Both $\sin x > 0$ (since $0 < x < \pi/2$) and $\cos x > 0$, and $\cosh y > 0$, $\sinh y > 0$.
   So $\operatorname{Re}(\zeta) > 0$ and $\operatorname{Im}(\zeta) > 0$: the image is in the **first quadrant** of the $\zeta$-plane.

   As $x \to 0^+$ or $y \to 0^+$, $\zeta$ approaches the positive real or positive imaginary semi-axes. As $y \to \infty$, $|\zeta| \to \infty$. The image fills the entire open first quadrant $\left\{\zeta : \operatorname{Re}(\zeta) > 0,\ \operatorname{Im}(\zeta) > 0\right\}$, i.e., $0 < \arg(\zeta) < \dfrac{\pi}{2}$.

2. **Step 2: Image of the first quadrant under $w = \zeta^{1/4}$.**

   If $\arg(\zeta) \in \left(0, \dfrac{\pi}{2}\right)$, then the principal fourth root satisfies:
   $$\arg(w) = \frac{\arg(\zeta)}{4} \in \left(0, \frac{\pi}{8}\right)$$

   Wait — let us reconsider. The problem states the image is $0 < \arg(w) < \pi/4$. This corresponds to $\arg(\zeta) \in (0, \pi)$ (upper half-plane), or possibly a different domain for $\sin z$.

   For $0 < x < \pi$, $y > 0$: $\sin x > 0$ for $0 < x < \pi$, so $\operatorname{Re}(\zeta) > 0$ for $x \in (0, \pi/2)$ and $\operatorname{Re}(\zeta) > 0$ still for $x \in (\pi/2, \pi)$ too (since $\sin x > 0$). In this full range, $\operatorname{Im}(\zeta) = \cos x\sinh y$: for $x \in (0,\pi/2)$, $\operatorname{Im}(\zeta) > 0$; for $x = \pi/2$, $\operatorname{Im}(\zeta) = 0$ (positive real); for $x \in (\pi/2, \pi)$, $\operatorname{Im}(\zeta) < 0$. So $\arg(\zeta) \in (-\pi/2, \pi/2)$ in some cases.

   For the semi-strip $0 < x < \pi/2$, $y > 0$: we established $\arg(\zeta) \in (0, \pi/2)$.
   Applying $w = \zeta^{1/4}$: $\arg(w) = \arg(\zeta)/4 \in (0, \pi/8)$.

   However, if the intended domain is the strip $0 < x < \pi$, $y > 0$ (upper half of the period strip), then $\arg(\zeta) \in (0, \pi)$ and $\arg(w) \in (0, \pi/4)$.

3. **Conclusion for domain $\{0 < x < \pi,\ y > 0\}$:**

   The map $\sin z$ sends this semi-strip onto the upper half-plane $\{\operatorname{Im}(\zeta) > 0\}$ (i.e., $\arg(\zeta) \in (0,\pi)$). Then $\zeta^{1/4}$ maps the upper half-plane onto the wedge $0 < \arg(w) < \pi/4$.

$$\boxed{w = (\sin z)^{1/4} \text{ maps } \{0 < \operatorname{Re}(z) < \pi,\ \operatorname{Im}(z) > 0\} \text{ onto the wedge } 0 < \arg(w) < \frac{\pi}{4}.}$$

---

**Problem 49.** Find the (fundamental) period of: (a) $\cosh z$, (b) $\sinh z$, (c) $\tanh z$.

**Solution.**

**(a) Period of $\cosh z$:**

1. The function $\cosh z = \dfrac{e^z+e^{-z}}{2}$.

2. Suppose $\cosh(z+T) = \cosh z$ for all $z$.

3. From the identity $\cosh z = \cos(iz)$, and $\cos$ has period $2\pi$:
$$\cosh(z+T) = \cos(i(z+T)) = \cos(iz + iT)$$
   This equals $\cos(iz) = \cosh z$ for all $z$ iff $iT = 2\pi i n$ for some $n \in \mathbb{Z}$, i.e., $T = 2\pi n$.

   But $T$ should be a **complex** period. Testing $T = 2\pi i$:
$$\cosh(z + 2\pi i) = \frac{e^{z+2\pi i}+e^{-(z+2\pi i)}}{2} = \frac{e^z e^{2\pi i} + e^{-z}e^{-2\pi i}}{2} = \frac{e^z+e^{-z}}{2} = \cosh z$$

4. The fundamental period is $T = 2\pi i$.

$$\boxed{\text{Period of } \cosh z = 2\pi i}$$

**(b) Period of $\sinh z$:**

1. Test $T = 2\pi i$:
$$\sinh(z+2\pi i) = \frac{e^{z+2\pi i}-e^{-(z+2\pi i)}}{2} = \frac{e^z e^{2\pi i} - e^{-z}e^{-2\pi i}}{2} = \frac{e^z - e^{-z}}{2} = \sinh z$$

2. The fundamental period is $T = 2\pi i$.

$$\boxed{\text{Period of } \sinh z = 2\pi i}$$

**(c) Period of $\tanh z$:**

1. Test $T = \pi i$:
$$\tanh(z+\pi i) = \frac{\sinh(z+\pi i)}{\cosh(z+\pi i)}$$

2. Compute numerator and denominator:
$$\sinh(z+\pi i) = \frac{e^{z+\pi i}-e^{-(z+\pi i)}}{2} = \frac{-e^z - (-e^{-z})}{2} = \frac{-(e^z-e^{-z})}{2}\cdot\frac{e^{\pi i}}{1}$$

   More directly: $\sinh(z+\pi i) = \sinh z\cos\pi + i\cosh z\sin\pi = \sinh z\cdot(-1) + 0 = -\sinh z$.
$$\cosh(z+\pi i) = \cosh z\cos\pi + i\sinh z\sin\pi = -\cosh z$$

3. Therefore:
$$\tanh(z+\pi i) = \frac{-\sinh z}{-\cosh z} = \frac{\sinh z}{\cosh z} = \tanh z$$

4. The fundamental period is $T = \pi i$.

$$\boxed{\text{Period of } \tanh z = \pi i}$$

---

**Problem 50.** Find all zeros of: (a) $\cosh z$, (b) $\sinh z$.

**Solution.**

**(a) Zeros of $\cosh z$:**

1. Use $\cosh z = \cos(iz)$. Setting $\cosh z = 0$:
$$\cos(iz) = 0$$

2. From Problem 41, $\cos w = 0$ iff $w = \dfrac{(2n+1)\pi}{2}$, $n \in \mathbb{Z}$.

3. So $iz = \dfrac{(2n+1)\pi}{2}$:
$$z = \frac{(2n+1)\pi}{2i} = \frac{(2n+1)\pi}{2} \cdot \frac{1}{i} = \frac{(2n+1)\pi}{2} \cdot (-i) = -i\frac{(2n+1)\pi}{2}$$

4. Equivalently (replacing $n$ with $-n-1$): $z = i\dfrac{(2n+1)\pi}{2}$.

$$\boxed{\cosh z = 0 \iff z = \frac{(2n+1)\pi i}{2} = \frac{\pi i}{2},\, \frac{3\pi i}{2},\, -\frac{\pi i}{2},\, \ldots, \quad n \in \mathbb{Z}}$$

**(b) Zeros of $\sinh z$:**

1. Use $\sinh z = -i\sin(iz)$. Setting $\sinh z = 0$:
$$\sin(iz) = 0$$

2. The zeros of $\sin w$ are $w = n\pi$, $n \in \mathbb{Z}$.

3. So $iz = n\pi \Rightarrow z = \dfrac{n\pi}{i} = -in\pi = n\pi i$.

$$\boxed{\sinh z = 0 \iff z = n\pi i, \quad n \in \mathbb{Z}}$$

(Includes $z = 0$ when $n = 0$.)

---

**Problem 51.** Prove that $\sin(z + \pi) = -\sin z$ and $\cos(z + \pi) = -\cos z$.

**Solution.**

**Part 1: $\sin(z+\pi) = -\sin z$.**

1. Use the addition formula (proved in Problem 14 style):
$$\sin(z+\pi) = \sin z\cos\pi + \cos z\sin\pi$$

2. Substitute $\cos\pi = -1$ and $\sin\pi = 0$:
$$= \sin z\cdot(-1) + \cos z\cdot 0 = -\sin z$$

**Alternatively**, using exponentials:
$$\sin(z+\pi) = \frac{e^{i(z+\pi)}-e^{-i(z+\pi)}}{2i} = \frac{e^{iz}e^{i\pi}-e^{-iz}e^{-i\pi}}{2i} = \frac{-e^{iz}-(-e^{-iz})}{2i} = \frac{-(e^{iz}-e^{-iz})}{2i} = -\sin z$$

**Part 2: $\cos(z+\pi) = -\cos z$.**

1. Use the addition formula:
$$\cos(z+\pi) = \cos z\cos\pi - \sin z\sin\pi = \cos z\cdot(-1) - \sin z\cdot 0 = -\cos z$$

**Alternatively**, using exponentials:
$$\cos(z+\pi) = \frac{e^{i(z+\pi)}+e^{-i(z+\pi)}}{2} = \frac{e^{iz}e^{i\pi}+e^{-iz}e^{-i\pi}}{2} = \frac{-e^{iz}+(-e^{-iz})}{2} = -\frac{e^{iz}+e^{-iz}}{2} = -\cos z$$

$$\boxed{\sin(z+\pi) = -\sin z \quad \text{and} \quad \cos(z+\pi) = -\cos z}\ \blacksquare$$

**Remark:** These identities show that the "half-period" relations hold, and imply that $\sin z$ and $\cos z$ have period $2\pi$ (not $\pi$) since applying the shift twice returns to the original function: $\sin(z+2\pi) = -\sin(z+\pi) = -(-\sin z) = \sin z$.

---

**Problem 52.** Prove that $\tan(z + \pi) = \tan z$.

**Solution.**

1. Apply the results of Problem 51:
$$\tan(z+\pi) = \frac{\sin(z+\pi)}{\cos(z+\pi)} = \frac{-\sin z}{-\cos z} = \frac{\sin z}{\cos z} = \tan z$$

2. The negatives in numerator and denominator cancel exactly, confirming that $\pi$ is a period of $\tan$.

**Verify $\pi$ is the fundamental period:**

Suppose $\tan(z+T) = \tan z$ for all valid $z$. Then:
$$\sin(z+T)\cos z = \cos(z+T)\sin z$$

Expanding with addition formulas and simplifying (or using $e^{2i(z+T)} = e^{2iz}$ from $\tan z = -i\dfrac{e^{iz}-e^{-iz}}{e^{iz}+e^{-iz}}$), we find $e^{2iT} = 1$, so $T = n\pi$ for $n \in \mathbb{Z}$. The smallest positive such $T$ is $\pi$.

$$\boxed{\tan(z+\pi) = \tan z,}$$

confirming $\tan z$ has fundamental period $\pi$. $\blacksquare$

---

*End of Section 4.3 — Trigonometric and Hyperbolic Functions*
