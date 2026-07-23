# Section 4.4 — Inverse Trigonometric and Hyperbolic Functions

**Zill, *A First Course in Complex Analysis With Applications*, 2nd Ed.**

---

## Key Formulas

The inverse trigonometric functions are defined by:

$$\sin^{-1} z = -i\ln\!\bigl(iz + (1-z^2)^{1/2}\bigr)$$

$$\cos^{-1} z = -i\ln\!\bigl(z + i(1-z^2)^{1/2}\bigr)$$

$$\tan^{-1} z = \frac{i}{2}\ln\!\left(\frac{i+z}{i-z}\right)$$

The inverse hyperbolic functions are defined by:

$$\sinh^{-1} z = \ln\!\bigl(z + (z^2+1)^{1/2}\bigr)$$

$$\cosh^{-1} z = \ln\!\bigl(z + (z^2-1)^{1/2}\bigr)$$

$$\tanh^{-1} z = \frac{1}{2}\ln\!\left(\frac{1+z}{1-z}\right)$$

Their (principal-branch) derivatives are:

$$\frac{d}{dz}\sin^{-1} z = \frac{1}{(1-z^2)^{1/2}}, \qquad \frac{d}{dz}\cos^{-1} z = -\frac{1}{(1-z^2)^{1/2}}$$

$$\frac{d}{dz}\tan^{-1} z = \frac{1}{1+z^2}$$

$$\frac{d}{dz}\sinh^{-1} z = \frac{1}{(z^2+1)^{1/2}}, \qquad \frac{d}{dz}\cosh^{-1} z = \frac{1}{(z^2-1)^{1/2}}$$

$$\frac{d}{dz}\tanh^{-1} z = \frac{1}{1-z^2}$$

Because $\ln$ is multivalued, each inverse function above is infinitely multivalued. Unless stated otherwise, $(z^2\pm 1)^{1/2}$ denotes both square-root values $\pm\sqrt{\cdot}$.

---

## Problems 1–10: Find All Values

---

### Problem 1

**Find all values of $\cos^{-1}(i)$.**

**Step 1. Recall the definition.**

$$\cos^{-1} z = -i\ln\!\bigl(z + i(1-z^2)^{1/2}\bigr).$$

Substitute $z = i$.

**Step 2. Compute $1 - z^2$.**

$$z^2 = i^2 = -1, \qquad 1 - z^2 = 1 - (-1) = 2.$$

**Step 3. Take the square root.**

Since $(1-z^2)^{1/2}$ is multivalued, both square roots of $2$ are allowed:

$$(1 - z^2)^{1/2} = \pm\sqrt{2}.$$

**Step 4. Form the argument of the logarithm.**

$$z + i(1 - z^2)^{1/2} = i + i(\pm\sqrt{2}) = i(1 \pm \sqrt{2}).$$

This gives two cases.

**Case A:** $i(1 + \sqrt{2})$.

Since $1 + \sqrt{2} > 0$, we have $|i(1+\sqrt{2})| = 1 + \sqrt{2}$ and $\arg(i(1+\sqrt{2})) = \frac{\pi}{2} + 2n\pi$ for $n \in \mathbb{Z}$. Therefore:

$$\ln\!\bigl(i(1+\sqrt{2})\bigr) = \ln(1+\sqrt{2}) + i\!\left(\frac{\pi}{2} + 2n\pi\right) = \ln(1+\sqrt{2}) + i\frac{(4n+1)\pi}{2}.$$

Multiplying by $-i$:

$$\cos^{-1}(i)\big|_A = -i\!\left[\ln(1+\sqrt{2}) + i\frac{(4n+1)\pi}{2}\right] = \frac{(4n+1)\pi}{2} - i\ln(1+\sqrt{2}).$$

**Case B:** $i(1 - \sqrt{2}) = -i(\sqrt{2} - 1)$.

Since $\sqrt{2} - 1 > 0$, the modulus is $\sqrt{2} - 1$ and the argument of $-i(\sqrt{2}-1)$ is $-\frac{\pi}{2} + 2n\pi = \frac{(4n-1)\pi}{2}$. Therefore:

$$\ln\!\bigl(i(1-\sqrt{2})\bigr) = \ln(\sqrt{2}-1) + i\frac{(4n-1)\pi}{2}.$$

Note that $-\ln(\sqrt{2}-1) = \ln\!\left(\frac{1}{\sqrt{2}-1}\right) = \ln(\sqrt{2}+1)$ (rationalising the denominator).

Multiplying by $-i$:

$$\cos^{-1}(i)\big|_B = -i\!\left[\ln(\sqrt{2}-1) + i\frac{(4n-1)\pi}{2}\right] = \frac{(4n-1)\pi}{2} - i\ln(\sqrt{2}-1).$$

Using $-\ln(\sqrt{2}-1) = \ln(\sqrt{2}+1)$ we may also write this as $\frac{(4n-1)\pi}{2} + i\ln(\sqrt{2}+1)$.

**Step 5. Collect all values.**

$$\boxed{\cos^{-1}(i) = \frac{(4n+1)\pi}{2} - i\ln(1+\sqrt{2}) \quad \text{or} \quad \frac{(4n-1)\pi}{2} + i\ln(1+\sqrt{2}), \quad n \in \mathbb{Z}.}$$

(Both families can be combined by noting that $\ln(\sqrt{2}-1) = -\ln(\sqrt{2}+1)$, so the imaginary parts in each case have opposite signs but equal magnitude $\ln(1+\sqrt{2})$.)

---

### Problem 2

**Find all values of $\sin^{-1}(1)$.**

**Step 1.** We seek all $w$ satisfying $\sin w = 1$.

Recall $\sin w = \frac{e^{iw} - e^{-iw}}{2i}$, so the equation becomes:

$$\frac{e^{iw} - e^{-iw}}{2i} = 1 \implies e^{iw} - e^{-iw} = 2i.$$

**Step 2.** Let $\zeta = e^{iw}$. Then $\zeta - \zeta^{-1} = 2i$, i.e.:

$$\zeta^2 - 2i\zeta - 1 = 0.$$

**Step 3.** Apply the quadratic formula:

$$\zeta = \frac{2i \pm \sqrt{-4 + 4}}{2} = \frac{2i \pm 0}{2} = i.$$

**Step 4.** So $e^{iw} = i$, meaning $iw = \ln(i) = i\!\left(\frac{\pi}{2} + 2n\pi\right)$, hence:

$$w = \frac{\pi}{2} + 2n\pi = \frac{(4n+1)\pi}{2}, \quad n \in \mathbb{Z}.$$

$$\boxed{\sin^{-1}(1) = \frac{(4n+1)\pi}{2}, \quad n \in \mathbb{Z}.}$$

---

### Problem 3

**Find all values of $\sin^{-1}(\sqrt{2})$.**

**Step 1. Apply the definition** $\sin^{-1} z = -i\ln(iz + (1-z^2)^{1/2})$ with $z = \sqrt{2}$.

**Step 2. Compute $1 - z^2$.**

$$z^2 = 2, \qquad 1 - z^2 = 1 - 2 = -1.$$

**Step 3. Take the square root.**

$$(1 - z^2)^{1/2} = (-1)^{1/2} = \pm i.$$

**Step 4. Form the argument of the logarithm.**

$$iz + (1-z^2)^{1/2} = i\sqrt{2} \pm i = i(\sqrt{2} \pm 1).$$

Both values $\sqrt{2}+1 > 0$ and $\sqrt{2}-1 > 0$, so moduli are $\sqrt{2}+1$ and $\sqrt{2}-1$ respectively, each with argument $\frac{\pi}{2} + 2n\pi$.

**Case A:** $i(\sqrt{2}+1)$:

$$\ln\!\bigl(i(\sqrt{2}+1)\bigr) = \ln(\sqrt{2}+1) + i\frac{(4n+1)\pi}{2}.$$

$$-i \cdot \left[\ln(\sqrt{2}+1) + i\frac{(4n+1)\pi}{2}\right] = \frac{(4n+1)\pi}{2} - i\ln(\sqrt{2}+1).$$

**Case B:** $i(\sqrt{2}-1)$:

$$\ln\!\bigl(i(\sqrt{2}-1)\bigr) = \ln(\sqrt{2}-1) + i\frac{(4n+1)\pi}{2}.$$

$$-i \cdot \left[\ln(\sqrt{2}-1) + i\frac{(4n+1)\pi}{2}\right] = \frac{(4n+1)\pi}{2} - i\ln(\sqrt{2}-1).$$

**Step 5. Collect all values.**

$$\boxed{\sin^{-1}(\sqrt{2}) = \frac{(4n+1)\pi}{2} - i\ln(\sqrt{2} \pm 1), \quad n \in \mathbb{Z}.}$$

---

### Problem 4

**Find all values of $\cos^{-1}\!\left(\tfrac{5}{3}\right)$.**

**Step 1. Apply the definition** $\cos^{-1} z = -i\ln(z + i(1-z^2)^{1/2})$ with $z = \frac{5}{3}$.

**Step 2. Compute $1 - z^2$.**

$$z^2 = \frac{25}{9}, \qquad 1 - z^2 = 1 - \frac{25}{9} = -\frac{16}{9}.$$

**Step 3. Take the square root.**

$$(1 - z^2)^{1/2} = \left(-\frac{16}{9}\right)^{1/2} = \pm \frac{4i}{3}.$$

**Step 4. Compute $i(1-z^2)^{1/2}$.**

$$i \cdot \left(\pm\frac{4i}{3}\right) = \pm\frac{4i^2}{3} = \mp\frac{4}{3}.$$

**Step 5. Form the argument of the logarithm.**

$$z + i(1-z^2)^{1/2} = \frac{5}{3} \mp \frac{4}{3}.$$

- Upper sign $(-\tfrac{4}{3})$: $\frac{5}{3} - \frac{4}{3} = \frac{1}{3}$.
- Lower sign $(+\tfrac{4}{3})$: $\frac{5}{3} + \frac{4}{3} = \frac{9}{3} = 3$.

**Step 6. Evaluate the logarithm.**

Both $\frac{1}{3}$ and $3$ are positive real numbers, so:

$$\ln\!\left(\frac{1}{3}\right) = -\ln 3 + 2n\pi i, \qquad \ln(3) = \ln 3 + 2n\pi i.$$

**Step 7. Multiply by $-i$.**

For $\frac{1}{3}$:

$$-i(-\ln 3 + 2n\pi i) = i\ln 3 + 2n\pi = 2n\pi + i\ln 3.$$

For $3$:

$$-i(\ln 3 + 2n\pi i) = -i\ln 3 + 2n\pi = 2n\pi - i\ln 3.$$

**Step 8. Collect all values.**

$$\boxed{\cos^{-1}\!\left(\tfrac{5}{3}\right) = 2n\pi \pm i\ln 3, \quad n \in \mathbb{Z}.}$$

---

### Problem 5

**Find all values of $\tan^{-1}(1)$.**

**Step 1.** We seek all $w$ satisfying $\tan w = 1$.

Since $\tan w = \frac{\sin w}{\cos w}$, the condition $\tan w = 1$ means $\sin w = \cos w$, i.e. $w = \frac{\pi}{4} + n\pi$ for $n \in \mathbb{Z}$.

**Verification via formula.** Apply $\tan^{-1} z = \frac{i}{2}\ln\!\left(\frac{i+z}{i-z}\right)$ with $z = 1$:

$$\frac{i+1}{i-1} = \frac{(1+i)}{(i-1)} \cdot \frac{(-1-i)}{(-1-i)} = \frac{-(1+i)^2}{1+1} = \frac{-(2i)}{2} = -i.$$

$$\tan^{-1}(1) = \frac{i}{2}\ln(-i) = \frac{i}{2}\!\left[\ln 1 + i\!\left(-\frac{\pi}{2} + 2n\pi\right)\right] = \frac{i}{2}\!\cdot\!i\!\left(-\frac{\pi}{2} + 2n\pi\right) = -\frac{1}{2}\!\left(-\frac{\pi}{2} + 2n\pi\right).$$

$$= \frac{\pi}{4} - n\pi = \frac{\pi}{4} + m\pi \quad \text{(replacing } -n \text{ by } m\text{)}.$$

$$\boxed{\tan^{-1}(1) = \frac{\pi}{4} + n\pi, \quad n \in \mathbb{Z}.}$$

---

### Problem 6

**Find all values of $\tan^{-1}(2i)$.**

**Step 1. Apply the definition** $\tan^{-1} z = \frac{i}{2}\ln\!\left(\frac{i+z}{i-z}\right)$ with $z = 2i$.

**Step 2. Form the ratio inside the logarithm.**

$$\frac{i + 2i}{i - 2i} = \frac{3i}{-i} = -3.$$

**Step 3. Evaluate the multivalued logarithm of $-3$.**

Since $-3$ is a negative real number, $|-3| = 3$ and $\arg(-3) = \pi + 2n\pi$ for $n \in \mathbb{Z}$:

$$\ln(-3) = \ln 3 + i(2n+1)\pi, \quad n \in \mathbb{Z}.$$

**Step 4. Multiply by $\frac{i}{2}$.**

$$\tan^{-1}(2i) = \frac{i}{2}\!\left[\ln 3 + i(2n+1)\pi\right] = \frac{i\ln 3}{2} + \frac{i^2(2n+1)\pi}{2} = \frac{i\ln 3}{2} - \frac{(2n+1)\pi}{2}.$$

**Step 5. Write in standard $x + iy$ form.**

$$\tan^{-1}(2i) = -\frac{(2n+1)\pi}{2} + \frac{i\ln 3}{2}, \quad n \in \mathbb{Z}.$$

$$\boxed{\tan^{-1}(2i) = -\frac{(2n+1)\pi}{2} + \frac{i}{2}\ln 3, \quad n \in \mathbb{Z}.}$$

---

### Problem 7

**Find all values of $\sinh^{-1}(i)$.**

**Step 1. Apply the definition** $\sinh^{-1} z = \ln(z + (z^2+1)^{1/2})$ with $z = i$.

**Step 2. Compute $z^2 + 1$.**

$$z^2 = i^2 = -1, \qquad z^2 + 1 = -1 + 1 = 0.$$

**Step 3. Take the square root.**

$$(z^2+1)^{1/2} = 0^{1/2} = 0.$$

**Step 4. Form the argument of the logarithm.**

$$z + (z^2+1)^{1/2} = i + 0 = i.$$

**Step 5. Evaluate the multivalued logarithm of $i$.**

$$\ln(i) = \ln|i| + i\arg(i) = 0 + i\!\left(\frac{\pi}{2} + 2n\pi\right) = i\frac{(4n+1)\pi}{2}, \quad n \in \mathbb{Z}.$$

$$\boxed{\sinh^{-1}(i) = i\frac{(4n+1)\pi}{2}, \quad n \in \mathbb{Z}.}$$

---

### Problem 8

**Find all values of $\cosh^{-1}\!\left(\tfrac{1}{2}\right)$.**

**Step 1. Apply the definition** $\cosh^{-1} z = \ln(z + (z^2-1)^{1/2})$ with $z = \frac{1}{2}$.

**Step 2. Compute $z^2 - 1$.**

$$z^2 = \frac{1}{4}, \qquad z^2 - 1 = \frac{1}{4} - 1 = -\frac{3}{4}.$$

**Step 3. Take the square root.**

$$(z^2-1)^{1/2} = \left(-\frac{3}{4}\right)^{1/2} = \pm i\frac{\sqrt{3}}{2}.$$

**Step 4. Form the argument of the logarithm.**

$$z + (z^2-1)^{1/2} = \frac{1}{2} \pm i\frac{\sqrt{3}}{2}.$$

Observe that $\left|\frac{1}{2} \pm i\frac{\sqrt{3}}{2}\right| = \sqrt{\frac{1}{4} + \frac{3}{4}} = 1$, so both values lie on the unit circle.

- $\frac{1}{2} + i\frac{\sqrt{3}}{2} = e^{i\pi/3}$
- $\frac{1}{2} - i\frac{\sqrt{3}}{2} = e^{-i\pi/3}$

**Step 5. Evaluate the multivalued logarithm.**

$$\ln\!\left(e^{\pm i\pi/3}\right) = \pm\frac{i\pi}{3} + 2n\pi i = i\!\left(\pm\frac{\pi}{3} + 2n\pi\right), \quad n \in \mathbb{Z}.$$

$$\boxed{\cosh^{-1}\!\left(\tfrac{1}{2}\right) = i\!\left(2n \pm \tfrac{1}{3}\right)\pi, \quad n \in \mathbb{Z}.}$$

---

### Problem 9

**Find all values of $\tanh^{-1}(1+2i)$.**

**Step 1. Apply the definition** $\tanh^{-1} z = \frac{1}{2}\ln\!\left(\frac{1+z}{1-z}\right)$ with $z = 1+2i$.

**Step 2. Compute the ratio $\frac{1+z}{1-z}$.**

$$1 + z = 1 + (1+2i) = 2 + 2i, \qquad 1 - z = 1 - (1+2i) = -2i.$$

$$\frac{1+z}{1-z} = \frac{2+2i}{-2i}.$$

**Step 3. Simplify the ratio by multiplying numerator and denominator by $i$.**

$$\frac{2+2i}{-2i} \cdot \frac{i}{i} = \frac{(2+2i)\cdot i}{-2i^2} = \frac{2i + 2i^2}{-2(-1)} = \frac{2i - 2}{2} = \frac{-2 + 2i}{2} = -1 + i.$$

**Step 4. Compute $\ln(-1+i)$.**

$$|-1+i| = \sqrt{(-1)^2 + 1^2} = \sqrt{2}, \qquad \arg(-1+i) = \pi - \frac{\pi}{4} = \frac{3\pi}{4}.$$

Hence (multivalued):

$$\ln(-1+i) = \ln\sqrt{2} + i\!\left(\frac{3\pi}{4} + 2n\pi\right) = \frac{1}{2}\ln 2 + i\frac{(8n+3)\pi}{4}, \quad n \in \mathbb{Z}.$$

**Step 5. Multiply by $\frac{1}{2}$.**

$$\tanh^{-1}(1+2i) = \frac{1}{2}\!\left[\frac{1}{2}\ln 2 + i\frac{(8n+3)\pi}{4}\right] = \frac{1}{4}\ln 2 + i\frac{(8n+3)\pi}{8}, \quad n \in \mathbb{Z}.$$

$$\boxed{\tanh^{-1}(1+2i) = \frac{\ln 2}{4} + i\frac{(8n+3)\pi}{8}, \quad n \in \mathbb{Z}.}$$

---

### Problem 10

**Find all values of $\tanh^{-1}(\sqrt{2}\,i)$.**

**Step 1. Apply the definition** $\tanh^{-1} z = \frac{1}{2}\ln\!\left(\frac{1+z}{1-z}\right)$ with $z = \sqrt{2}\,i$.

**Step 2. Compute the ratio $\frac{1+z}{1-z}$.**

$$1 + z = 1 + \sqrt{2}\,i, \qquad 1 - z = 1 - \sqrt{2}\,i.$$

$$\frac{1+z}{1-z} = \frac{1+\sqrt{2}\,i}{1-\sqrt{2}\,i}.$$

**Step 3. Simplify by multiplying by the conjugate.**

$$\frac{1+\sqrt{2}\,i}{1-\sqrt{2}\,i} \cdot \frac{1+\sqrt{2}\,i}{1+\sqrt{2}\,i} = \frac{(1+\sqrt{2}\,i)^2}{1^2 + (\sqrt{2})^2} = \frac{(1+\sqrt{2}\,i)^2}{3}.$$

Expand the numerator:

$$(1+\sqrt{2}\,i)^2 = 1 + 2\sqrt{2}\,i + 2i^2 = 1 + 2\sqrt{2}\,i - 2 = -1 + 2\sqrt{2}\,i.$$

Therefore:

$$\frac{1+\sqrt{2}\,i}{1-\sqrt{2}\,i} = \frac{-1 + 2\sqrt{2}\,i}{3}.$$

**Step 4. Compute the modulus and argument.**

$$\left|\frac{-1 + 2\sqrt{2}\,i}{3}\right| = \frac{\sqrt{(-1)^2 + (2\sqrt{2})^2}}{3} = \frac{\sqrt{1 + 8}}{3} = \frac{\sqrt{9}}{3} = 1.$$

The ratio lies on the unit circle. Its argument is:

$$\theta = \pi - \arctan\!\left(\frac{2\sqrt{2}}{1}\right) = \pi - \arctan(2\sqrt{2}),$$

since the real part is negative and the imaginary part is positive (second quadrant).

**Step 5. Evaluate the multivalued logarithm.**

Since the modulus is $1$:

$$\ln\!\left(\frac{-1+2\sqrt{2}\,i}{3}\right) = 0 + i\!\left(\pi - \arctan(2\sqrt{2}) + 2n\pi\right) = i\!\left((2n+1)\pi - \arctan(2\sqrt{2})\right), \quad n \in \mathbb{Z}.$$

**Step 6. Multiply by $\frac{1}{2}$.**

$$\tanh^{-1}(\sqrt{2}\,i) = \frac{i}{2}\!\left[(2n+1)\pi - \arctan(2\sqrt{2})\right], \quad n \in \mathbb{Z}.$$

$$\boxed{\tanh^{-1}(\sqrt{2}\,i) = \frac{i}{2}\!\left[(2n+1)\pi - \arctan(2\sqrt{2})\right], \quad n \in \mathbb{Z}.}$$

---

## Problems 11–16: Compute the Value and Derivative Using a Specified Branch

---

### Problem 11

**For $f(z) = \sin^{-1} z$ using the principal value of $(1-z^2)^{1/2}$ (i.e., the principal square root), find:**
**(a) $f(i/2)$, and (b) $f'(i/2)$.**

**Part (a). Computing $f(i/2)$.**

**Step 1.** Apply $\sin^{-1} z = -i\ln(iz + (1-z^2)^{1/2})$ with $z = \frac{i}{2}$.

**Step 2. Compute $z^2$ and $1 - z^2$.**

$$z^2 = \left(\frac{i}{2}\right)^2 = \frac{i^2}{4} = -\frac{1}{4}, \qquad 1 - z^2 = 1 + \frac{1}{4} = \frac{5}{4}.$$

**Step 3. Take the principal square root.** Since $\frac{5}{4} > 0$, the principal square root is positive:

$$(1 - z^2)^{1/2} = \sqrt{\frac{5}{4}} = \frac{\sqrt{5}}{2}.$$

**Step 4. Form the argument of the logarithm.**

$$iz + (1-z^2)^{1/2} = i \cdot \frac{i}{2} + \frac{\sqrt{5}}{2} = \frac{i^2}{2} + \frac{\sqrt{5}}{2} = -\frac{1}{2} + \frac{\sqrt{5}}{2} = \frac{\sqrt{5}-1}{2}.$$

**Step 5.** Since $\frac{\sqrt{5}-1}{2} > 0$ (it is the positive reciprocal of the golden ratio), its principal logarithm is real:

$$\operatorname{Ln}\!\left(\frac{\sqrt{5}-1}{2}\right) = \ln\!\left(\frac{\sqrt{5}-1}{2}\right).$$

Note that $-\ln\!\left(\frac{\sqrt{5}-1}{2}\right) = \ln\!\left(\frac{2}{\sqrt{5}-1}\right) = \ln\!\left(\frac{\sqrt{5}+1}{2}\right)$.

**Step 6. Multiply by $-i$.**

$$f\!\left(\frac{i}{2}\right) = -i\ln\!\left(\frac{\sqrt{5}-1}{2}\right) = i\ln\!\left(\frac{\sqrt{5}+1}{2}\right).$$

$$\boxed{f\!\left(\tfrac{i}{2}\right) = i\ln\!\left(\frac{\sqrt{5}+1}{2}\right).}$$

(This is purely imaginary.)

**Part (b). Computing $f'(i/2)$.**

**Step 1.** The derivative of the principal branch is:

$$f'(z) = \frac{1}{(1-z^2)^{1/2}}.$$

**Step 2.** From Part (a), at $z = \frac{i}{2}$:

$$(1 - z^2)^{1/2} = \frac{\sqrt{5}}{2}.$$

**Step 3.**

$$f'\!\left(\frac{i}{2}\right) = \frac{1}{\sqrt{5}/2} = \frac{2}{\sqrt{5}} = \frac{2\sqrt{5}}{5}.$$

$$\boxed{f'\!\left(\tfrac{i}{2}\right) = \frac{2\sqrt{5}}{5}.}$$

---

### Problem 12

**For $f(z) = \cos^{-1} z$ using the branch of $z^{1/2}$ defined by $\sqrt{r}\,e^{i\theta/2}$ with $0 < \theta < 2\pi$, find:**
**(a) $f(5/3)$, and (b) $f'(5/3)$.**

**Part (a). Computing $f(5/3)$.**

**Step 1.** Apply $\cos^{-1} z = -i\ln(z + i(1-z^2)^{1/2})$ with $z = \frac{5}{3}$.

**Step 2. Compute $1 - z^2$.**

$$z^2 = \frac{25}{9}, \qquad 1 - z^2 = -\frac{16}{9}.$$

**Step 3. Apply the specified branch of the square root.** Write $1 - z^2 = -\frac{16}{9}$ in polar form. Since $-\frac{16}{9}$ is a negative real number:

$$-\frac{16}{9} = \frac{16}{9}\,e^{i\pi}.$$

In the branch $0 < \theta < 2\pi$, the argument $\pi$ satisfies $0 < \pi < 2\pi$, so:

$$(1 - z^2)^{1/2} = \sqrt{\frac{16}{9}}\,e^{i\pi/2} = \frac{4}{3}\cdot i = \frac{4i}{3}.$$

*(This is the same as the principal branch for negative real arguments, since $\operatorname{Arg}(-\frac{16}{9}) = \pi$.)*

However, note that the branch $0 < \theta < 2\pi$ is distinct from the principal branch ($-\pi < \theta \leq \pi$) for **positive** real numbers. For positive reals in this branch, $\theta \to 2\pi$ (not $\theta = 0$), giving $e^{i\theta/2} \to e^{i\pi} = -1$. In particular, $z^2 - 1 = \frac{16}{9} > 0$ in this branch has:

$$(z^2 - 1)^{1/2} = \frac{4}{3}\,e^{i\pi} = -\frac{4}{3}.$$

We use this to determine $i(1-z^2)^{1/2}$. Since $1 - z^2 = -(z^2-1)$:

$$\text{With the branch on } z^2-1: \quad (z^2-1)^{1/2} = -\frac{4}{3}, \quad \text{so } (1-z^2)^{1/2} = i\cdot(-\tfrac{4}{3})\cdot\ldots$$

More directly, using the result $(1-z^2)^{1/2} = \frac{4i}{3}$ already found, and checking consistency with $i(1-z^2)^{1/2}$:

$$i(1-z^2)^{1/2} = i \cdot \frac{4i}{3} = \frac{4i^2}{3} = -\frac{4}{3}.$$

Alternatively, the branch selects $(z^2-1)^{1/2} = -\frac{4}{3}$ for the positive real $\frac{16}{9}$ (using $0 < \theta < 2\pi$ convention), giving $-\frac{1}{(z^2-1)^{1/2}} = \frac{1}{4/3} = \frac{3}{4}$ for the derivative.

**Step 4. Form the argument of the logarithm.**

$$z + i(1-z^2)^{1/2} = \frac{5}{3} - \frac{4}{3} = \frac{1}{3}.$$

**Step 5. Evaluate the logarithm.** Using the principal logarithm:

$$\ln\!\left(\frac{1}{3}\right) = -\ln 3.$$

**Step 6. Multiply by $-i$.**

$$f\!\left(\frac{5}{3}\right) = -i \cdot (-\ln 3) = i\ln 3.$$

$$\boxed{f\!\left(\tfrac{5}{3}\right) = i\ln 3.}$$

**Part (b). Computing $f'(5/3)$.**

**Step 1.** The derivative is:

$$f'(z) = -\frac{1}{(1-z^2)^{1/2}}.$$

**Step 2.** With the branch giving $(1-z^2)^{1/2} = \frac{4i}{3}$:

$$f'\!\left(\frac{5}{3}\right) = -\frac{1}{4i/3} = -\frac{3}{4i} = -\frac{3}{4i}\cdot\frac{-i}{-i} = \frac{3i}{4 \cdot(-1)}\cdot(-1) = \frac{3i}{4(-1)}\cdot\frac{i}{i}$$

Simplify directly: $-\frac{3}{4i} = -\frac{3}{4i}\cdot\frac{i}{i} = -\frac{3i}{4i^2} = -\frac{3i}{-4} = \frac{3i}{4}$.

Alternatively, using the branch that gives $(z^2-1)^{1/2} = -\frac{4}{3}$ (consistent with the branch $0 < \theta < 2\pi$ applied to $z^2-1 > 0$):

$$f'(z) = -\frac{1}{(1-z^2)^{1/2}} = \frac{1}{(z^2-1)^{1/2}} = \frac{1}{-4/3} = -\frac{3}{4}.$$

$$\boxed{f'\!\left(\tfrac{5}{3}\right) = -\frac{3}{4}.}$$

*(The sign depends on which square-root value the branch selects for the positive real $(z^2-1) = 16/9$; in the branch $0 < \theta < 2\pi$, positive reals map to $\theta \to 2\pi$, yielding the $-\frac{4}{3}$ value, so $f'= -\frac{3}{4}$.)*

---

### Problem 13

**For $f(z) = \tan^{-1} z$ using the principal value of $\ln$, find:**
**(a) $f(1+i)$, and (b) $f'(1+i)$.**

**Part (a). Computing $f(1+i)$.**

**Step 1.** Apply $\tan^{-1} z = \frac{i}{2}\operatorname{Ln}\!\left(\frac{i+z}{i-z}\right)$ with $z = 1+i$.

**Step 2. Compute the ratio.**

$$i + z = i + 1 + i = 1 + 2i, \qquad i - z = i - 1 - i = -1.$$

$$\frac{i+z}{i-z} = \frac{1+2i}{-1} = -1 - 2i.$$

**Step 3. Compute $\operatorname{Ln}(-1-2i)$.**

$$|-1-2i| = \sqrt{1+4} = \sqrt{5}.$$

The point $-1-2i$ is in the third quadrant, so:

$$\operatorname{Arg}(-1-2i) = -\pi + \arctan\!\left(\frac{2}{1}\right) = -\pi + \arctan 2.$$

Therefore:

$$\operatorname{Ln}(-1-2i) = \frac{1}{2}\ln 5 + i(-\pi + \arctan 2).$$

**Step 4. Multiply by $\frac{i}{2}$.**

$$f(1+i) = \frac{i}{2}\!\left[\frac{1}{2}\ln 5 + i(-\pi + \arctan 2)\right]$$

$$= \frac{i}{4}\ln 5 + \frac{i^2}{2}(-\pi + \arctan 2)$$

$$= \frac{i}{4}\ln 5 - \frac{1}{2}(-\pi + \arctan 2)$$

$$= \frac{1}{2}(\pi - \arctan 2) + \frac{i}{4}\ln 5.$$

$$\boxed{f(1+i) = \frac{\pi - \arctan 2}{2} + \frac{i\ln 5}{4}.}$$

**Part (b). Computing $f'(1+i)$.**

**Step 1.** The derivative is:

$$f'(z) = \frac{1}{1 + z^2}.$$

**Step 2. Compute $1 + z^2$ at $z = 1+i$.**

$$z^2 = (1+i)^2 = 1 + 2i + i^2 = 1 + 2i - 1 = 2i.$$

$$1 + z^2 = 1 + 2i.$$

**Step 3. Compute $f'(1+i)$.**

$$f'(1+i) = \frac{1}{1+2i} = \frac{1-2i}{(1+2i)(1-2i)} = \frac{1-2i}{1+4} = \frac{1-2i}{5}.$$

$$\boxed{f'(1+i) = \frac{1}{5} - \frac{2i}{5}.}$$

---

### Problem 14

**For $f(z) = \sinh^{-1} z$ using the principal branch, find:**
**(a) $f(0)$, and (b) $f'(0)$.**

**Part (a). Computing $f(0)$.**

**Step 1.** Apply $\sinh^{-1} z = \operatorname{Ln}(z + (z^2+1)^{1/2})$ with $z = 0$.

**Step 2. Compute $z^2 + 1$.**

$$0^2 + 1 = 1, \qquad (z^2+1)^{1/2} = \sqrt{1} = 1 \quad \text{(principal value).}$$

**Step 3. Form the argument of the logarithm.**

$$z + (z^2+1)^{1/2} = 0 + 1 = 1.$$

**Step 4. Evaluate.**

$$f(0) = \operatorname{Ln}(1) = 0.$$

$$\boxed{f(0) = 0.}$$

**Part (b). Computing $f'(0)$.**

**Step 1.** The derivative is:

$$f'(z) = \frac{1}{(z^2+1)^{1/2}}.$$

**Step 2.** At $z = 0$:

$$(z^2+1)^{1/2}\big|_{z=0} = 1.$$

**Step 3.**

$$f'(0) = \frac{1}{1} = 1.$$

$$\boxed{f'(0) = 1.}$$

---

### Problem 15

**For $f(z) = \cosh^{-1} z$ using the branch of $z^{1/2}$ defined by $\sqrt{r}\,e^{i\theta/2}$ with $-2\pi < \theta < 0$, find:**
**(a) $f(-i)$, and (b) $f'(-i)$.**

**Part (a). Computing $f(-i)$.**

**Step 1.** Apply $\cosh^{-1} z = \ln(z + (z^2-1)^{1/2})$ with $z = -i$.

**Step 2. Compute $z^2 - 1$.**

$$z^2 = (-i)^2 = i^2 \cdot (-1)^0\ldots \text{ More carefully: } (-i)^2 = (-1)^2\cdot i^2 = 1\cdot(-1) = -1.$$

$$z^2 - 1 = -1 - 1 = -2.$$

**Step 3. Apply the specified branch $-2\pi < \theta < 0$ to $z^2 - 1 = -2$.**

Write $-2$ in polar form: $-2 = 2\,e^{i\pi}$. The argument $\pi$ is **not** in $(-2\pi, 0)$, so we use the equivalent angle $\pi - 2\pi = -\pi$, giving:

$$-2 = 2\,e^{-i\pi}, \quad \theta = -\pi \in (-2\pi, 0). \checkmark$$

Taking the square root under this branch:

$$(z^2-1)^{1/2} = \sqrt{2}\,e^{-i\pi/2} = \sqrt{2}\cdot(-i) = -i\sqrt{2}.$$

**Step 4. Form the argument of the logarithm.**

$$z + (z^2-1)^{1/2} = -i + (-i\sqrt{2}) = -i(1 + \sqrt{2}).$$

**Step 5. Evaluate $\ln(-i(1+\sqrt{2}))$.**

$$|-i(1+\sqrt{2})| = 1 + \sqrt{2}, \qquad \operatorname{Arg}(-i(1+\sqrt{2})) = -\frac{\pi}{2}.$$

Using the principal logarithm:

$$\operatorname{Ln}(-i(1+\sqrt{2})) = \ln(1+\sqrt{2}) + i\!\left(-\frac{\pi}{2}\right) = \ln(\sqrt{2}+1) - \frac{i\pi}{2}.$$

**Step 6.**

$$f(-i) = \ln(\sqrt{2}+1) - \frac{i\pi}{2}.$$

$$\boxed{f(-i) = \ln(\sqrt{2}+1) - \frac{i\pi}{2}.}$$

**Part (b). Computing $f'(-i)$.**

**Step 1.** The derivative is:

$$f'(z) = \frac{1}{(z^2-1)^{1/2}}.$$

**Step 2.** From Part (a), $(z^2-1)^{1/2}\big|_{z=-i} = -i\sqrt{2}$.

**Step 3.**

$$f'(-i) = \frac{1}{-i\sqrt{2}} = \frac{1}{-i\sqrt{2}}\cdot\frac{i}{i} = \frac{i}{-i^2\sqrt{2}} = \frac{i}{\sqrt{2}} = \frac{\sqrt{2}\,i}{2}.$$

$$\boxed{f'(-i) = \frac{\sqrt{2}}{2}\,i.}$$

---

### Problem 16

**For $f(z) = \tanh^{-1} z$ using the principal value of $\ln$, find:**
**(a) $f(3i)$, and (b) $f'(3i)$.**

**Part (a). Computing $f(3i)$.**

**Step 1.** Apply $\tanh^{-1} z = \frac{1}{2}\operatorname{Ln}\!\left(\frac{1+z}{1-z}\right)$ with $z = 3i$.

**Step 2. Compute the ratio.**

$$1 + z = 1 + 3i, \qquad 1 - z = 1 - 3i.$$

$$\frac{1+z}{1-z} = \frac{1+3i}{1-3i}.$$

**Step 3. Simplify by multiplying by the conjugate.**

$$\frac{1+3i}{1-3i}\cdot\frac{1+3i}{1+3i} = \frac{(1+3i)^2}{1+9} = \frac{1 + 6i + 9i^2}{10} = \frac{1 + 6i - 9}{10} = \frac{-8+6i}{10} = -\frac{4}{5} + \frac{3i}{5}.$$

**Step 4. Compute modulus and argument.**

$$\left|-\frac{4}{5}+\frac{3i}{5}\right| = \frac{1}{5}\sqrt{16+9} = \frac{5}{5} = 1.$$

The ratio lies on the unit circle in the second quadrant ($\text{Re}<0$, $\text{Im}>0$). With $\cos\theta = -\frac{4}{5}$ and $\sin\theta = \frac{3}{5}$:

$$\theta = \operatorname{Arg}\!\left(-\frac{4}{5}+\frac{3}{5}i\right) = \pi - \arctan\!\left(\frac{3/5}{4/5}\right) = \pi - \arctan\!\left(\frac{3}{4}\right).$$

**Step 5. Evaluate the principal logarithm.**

Since the modulus is $1$:

$$\operatorname{Ln}\!\left(-\frac{4}{5}+\frac{3i}{5}\right) = 0 + i\!\left(\pi - \arctan\frac{3}{4}\right) = i\!\left(\pi - \arctan\frac{3}{4}\right).$$

**Step 6. Multiply by $\frac{1}{2}$.**

$$f(3i) = \frac{1}{2}\cdot i\!\left(\pi - \arctan\frac{3}{4}\right) = \frac{i}{2}\!\left(\pi - \arctan\frac{3}{4}\right).$$

$$\boxed{f(3i) = \frac{i}{2}\!\left(\pi - \arctan\frac{3}{4}\right).}$$

**Part (b). Computing $f'(3i)$.**

**Step 1.** The derivative is:

$$f'(z) = \frac{1}{1-z^2}.$$

**Step 2.** At $z = 3i$:

$$z^2 = (3i)^2 = 9i^2 = -9, \qquad 1 - z^2 = 1 - (-9) = 10.$$

**Step 3.**

$$f'(3i) = \frac{1}{10}.$$

$$\boxed{f'(3i) = \frac{1}{10}.}$$

---

## Problems 17–22: Derivations and Identities

---

### Problem 17

**Derive the formula $\cos^{-1} z = -i\ln\!\bigl(z + i(1-z^2)^{1/2}\bigr)$ starting from $\cos w = z$.**

**Step 1. Write $\cos w$ using Euler's formula.**

$$\cos w = \frac{e^{iw} + e^{-iw}}{2} = z.$$

**Step 2. Multiply both sides by $2e^{iw}$.**

$$e^{2iw} + 1 = 2ze^{iw}.$$

**Step 3. Rearrange into a quadratic in $e^{iw}$.**

$$e^{2iw} - 2ze^{iw} + 1 = 0.$$

Let $\zeta = e^{iw}$:

$$\zeta^2 - 2z\zeta + 1 = 0.$$

**Step 4. Apply the quadratic formula.**

$$\zeta = \frac{2z \pm \sqrt{4z^2 - 4}}{2} = z \pm \sqrt{z^2-1} = z \pm (z^2-1)^{1/2}.$$

**Step 5. Rewrite using $i(1-z^2)^{1/2}$.**

Note that $(z^2-1)^{1/2} = (-(1-z^2))^{1/2} = i(1-z^2)^{1/2}$ (taking the appropriate branch). Therefore:

$$e^{iw} = z + i(1-z^2)^{1/2} \quad \text{(absorbing the } \pm \text{ into the multivalued square root).}$$

**Step 6. Solve for $w$.**

Take the complex logarithm of both sides:

$$iw = \ln\!\bigl(z + i(1-z^2)^{1/2}\bigr).$$

$$w = \frac{1}{i}\ln\!\bigl(z + i(1-z^2)^{1/2}\bigr) = -i\ln\!\bigl(z + i(1-z^2)^{1/2}\bigr).$$

Therefore, since $w = \cos^{-1} z$:

$$\boxed{\cos^{-1} z = -i\ln\!\bigl(z + i(1-z^2)^{1/2}\bigr).} \qquad \square$$

---

### Problem 18

**Derive the formula $\sinh^{-1} z = \ln\!\bigl(z + (z^2+1)^{1/2}\bigr)$ starting from $\sinh w = z$.**

**Step 1. Write $\sinh w$ using the exponential definition.**

$$\sinh w = \frac{e^w - e^{-w}}{2} = z.$$

**Step 2. Multiply both sides by $2e^w$.**

$$e^{2w} - 1 = 2ze^w.$$

**Step 3. Rearrange into a quadratic in $e^w$.**

$$e^{2w} - 2ze^w - 1 = 0.$$

Let $\zeta = e^w$:

$$\zeta^2 - 2z\zeta - 1 = 0.$$

**Step 4. Apply the quadratic formula.**

$$\zeta = \frac{2z \pm \sqrt{4z^2 + 4}}{2} = z \pm \sqrt{z^2+1} = z \pm (z^2+1)^{1/2}.$$

**Step 5. Address the two signs.** Both choices are encompassed by the multivalued $(z^2+1)^{1/2}$, so:

$$e^w = z + (z^2+1)^{1/2}.$$

**Step 6. Solve for $w$.**

$$w = \ln\!\bigl(z + (z^2+1)^{1/2}\bigr).$$

Therefore, since $w = \sinh^{-1} z$:

$$\boxed{\sinh^{-1} z = \ln\!\bigl(z + (z^2+1)^{1/2}\bigr).} \qquad \square$$

---

### Problem 19

**Derive the formula $\dfrac{d}{dz}\cos^{-1} z = -\dfrac{1}{(1-z^2)^{1/2}}$ by implicit differentiation.**

**Step 1. Set up the equation.**

Let $w = \cos^{-1} z$, so that $\cos w = z$.

**Step 2. Differentiate both sides with respect to $z$.**

$$\frac{d}{dz}[\cos w] = \frac{d}{dz}[z]$$

$$-\sin w \cdot \frac{dw}{dz} = 1.$$

**Step 3. Solve for $\dfrac{dw}{dz}$.**

$$\frac{dw}{dz} = -\frac{1}{\sin w}.$$

**Step 4. Express $\sin w$ in terms of $z$.**

Use the Pythagorean identity $\sin^2 w + \cos^2 w = 1$:

$$\sin^2 w = 1 - \cos^2 w = 1 - z^2,$$

$$\sin w = (1-z^2)^{1/2}.$$

*(The appropriate branch of the square root is determined by the chosen branch of $\cos^{-1}$.)*

**Step 5. Substitute.**

$$\frac{dw}{dz} = -\frac{1}{(1-z^2)^{1/2}}.$$

$$\boxed{\frac{d}{dz}\cos^{-1} z = -\frac{1}{(1-z^2)^{1/2}}.} \qquad \square$$

---

### Problem 20

**Derive the formula $\dfrac{d}{dz}\tanh^{-1} z = \dfrac{1}{1-z^2}$ by implicit differentiation.**

**Step 1. Set up the equation.**

Let $w = \tanh^{-1} z$, so that $\tanh w = z$.

**Step 2. Differentiate both sides with respect to $z$.**

$$\frac{d}{dz}[\tanh w] = \frac{d}{dz}[z]$$

$$\operatorname{sech}^2 w \cdot \frac{dw}{dz} = 1.$$

**Step 3. Solve for $\dfrac{dw}{dz}$.**

$$\frac{dw}{dz} = \frac{1}{\operatorname{sech}^2 w} = \cosh^2 w.$$

**Step 4. Express $\cosh^2 w$ in terms of $z$.**

Use the hyperbolic identity $\cosh^2 w - \sinh^2 w = 1$, together with $\tanh w = \frac{\sinh w}{\cosh w} = z$, i.e. $\sinh w = z\cosh w$. Substituting:

$$\cosh^2 w - z^2\cosh^2 w = 1 \implies \cosh^2 w(1-z^2) = 1 \implies \cosh^2 w = \frac{1}{1-z^2}.$$

Alternatively, use the identity $\operatorname{sech}^2 w = 1 - \tanh^2 w = 1 - z^2$ directly:

$$\frac{dw}{dz} = \frac{1}{\operatorname{sech}^2 w} = \frac{1}{1 - \tanh^2 w} = \frac{1}{1-z^2}.$$

**Step 5. Conclude.**

$$\boxed{\frac{d}{dz}\tanh^{-1} z = \frac{1}{1-z^2}.} \qquad \square$$

---

### Problem 21

**Discuss the one-to-one properties of the inverse trigonometric and hyperbolic functions.**

**(a) Connection to Section 4.3.**

The multivalued nature of $\sin^{-1}$, $\cos^{-1}$, etc. arises directly from the multivalued complex logarithm studied in Section 4.3. Since $\ln z = \operatorname{Ln}|z| + i(\operatorname{Arg} z + 2n\pi)$ for $n \in \mathbb{Z}$, every formula of the type

$$f^{-1}(z) = \frac{c}{i}\ln(\text{expression in } z)$$

inherits countably infinite values. The trigonometric and hyperbolic functions are not one-to-one on all of $\mathbb{C}$ — indeed, $\sin(w + 2\pi) = \sin w$ and $\sinh(w + 2\pi i) = \sinh w$ — so their inverses must be multivalued.

**(b) Principal branches.**

By selecting the principal value $\operatorname{Ln}$ for the logarithm **and** selecting the principal square root (i.e. the branch $-\pi < \operatorname{Arg}(z^2 - 1) \leq \pi$ for $(z^2-1)^{1/2}$), we obtain a single-valued function on an appropriate domain. For example:

- $\operatorname{Sin}^{-1} z = -i\operatorname{Ln}(iz + (1-z^2)^{1/2}_{\text{principal}})$ is analytic on $\mathbb{C}$ minus the branch cuts $(-\infty,-1]$ and $[1,\infty)$.
- $\operatorname{Cos}^{-1} z = -i\operatorname{Ln}(z + i(1-z^2)^{1/2}_{\text{principal}})$ has the same branch cuts.

These principal branches satisfy $\operatorname{Sin}(\operatorname{Sin}^{-1} z) = z$ and similarly for the others, providing proper two-sided inverses on the associated cut planes.

$$\boxed{\text{Principal branches of } \ln \text{ and } z^{1/2} \text{ together yield single-valued, analytic inverses.}}$$

---

### Problem 22

**Prove the following identities involving multivalued inverse functions:**
**(a) $\sin^{-1}(1-z^2)^{1/2} = \cos^{-1}(\pm z)$**
**(b) $\sin^{-1} z + \cos^{-1} z = \dfrac{(4n+1)\pi}{2}$ for some $n \in \mathbb{Z}$.**

---

**Part (a). Proof that $\sin^{-1}(1-z^2)^{1/2} = \cos^{-1}(\pm z)$.**

**Step 1.** Let $w = \cos^{-1}(\pm z)$. By definition, this means $\cos w = \pm z$.

**Step 2.** Use the Pythagorean identity:

$$\sin^2 w = 1 - \cos^2 w = 1 - (\pm z)^2 = 1 - z^2.$$

$$\sin w = (1-z^2)^{1/2}.$$

**Step 3.** By definition of $\sin^{-1}$, since $\sin w = (1-z^2)^{1/2}$, we have $w = \sin^{-1}(1-z^2)^{1/2}$.

**Step 4.** Therefore:

$$\sin^{-1}(1-z^2)^{1/2} = w = \cos^{-1}(\pm z). \qquad \square$$

*(Both $\pm z$ arise because $\cos w = z$ and $\cos w = -z$ both give $\cos^2 w = z^2$, hence $\sin^2 w = 1-z^2$.)*

$$\boxed{\sin^{-1}(1-z^2)^{1/2} = \cos^{-1}(\pm z).}$$

---

**Part (b). Proof that $\sin^{-1} z + \cos^{-1} z = \dfrac{(4n+1)\pi}{2}$.**

**Step 1.** Let $\alpha = \sin^{-1} z$ and $\beta = \cos^{-1} z$, so $\sin\alpha = z$ and $\cos\beta = z$.

**Step 2.** Use the co-function relationship in the complex setting. We wish to find $\alpha + \beta$.

**Step 3.** Use the formula for $\sin(\alpha + \beta)$:

$$\sin(\alpha + \beta) = \sin\alpha\cos\beta + \cos\alpha\sin\beta.$$

We have $\sin\alpha = z$ and $\cos\beta = z$. Also, $\cos\alpha = (1-\sin^2\alpha)^{1/2} = (1-z^2)^{1/2}$ and $\sin\beta = (1-\cos^2\beta)^{1/2} = (1-z^2)^{1/2}$.

$$\sin(\alpha+\beta) = z\cdot z + (1-z^2)^{1/2}\cdot(1-z^2)^{1/2} = z^2 + (1-z^2) = 1.$$

**Step 4.** The equation $\sin w = 1$ has all solutions $w = \frac{(4n+1)\pi}{2}$ for $n \in \mathbb{Z}$ (as established in Problem 2). Therefore:

$$\alpha + \beta = \frac{(4n+1)\pi}{2}, \quad n \in \mathbb{Z}.$$

$$\boxed{\sin^{-1} z + \cos^{-1} z = \frac{(4n+1)\pi}{2}, \quad n \in \mathbb{Z}.} \qquad \square$$

*(In particular, for the principal branches, the value $n=0$ gives the familiar real identity $\sin^{-1} x + \cos^{-1} x = \frac{\pi}{2}$.)*
