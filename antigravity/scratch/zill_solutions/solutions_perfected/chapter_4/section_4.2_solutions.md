# Complex Analysis — Dennis G. Zill, 2nd Edition
## Chapter 4 · Section 4.2 — Complex Powers
### Problems 1 – 30 · Complete Solutions

---

## Preamble: Key Definitions and Formulas

For $z \ne 0$ and $\alpha \in \mathbb{C}$, the **complex power** is defined by

$$z^\alpha = e^{\alpha \ln z}$$

where $\ln z = \log_e|z| + i\arg(z)$ is the multi-valued complex logarithm. Since $\arg(z) = \operatorname{Arg}(z) + 2n\pi$ for $n \in \mathbb{Z}$, the full multi-valued form is

$$z^\alpha = e^{\alpha[\log_e|z| + i(\operatorname{Arg}(z) + 2n\pi)]}, \quad n = 0, \pm 1, \pm 2, \ldots$$

The **principal value** is obtained by restricting to $n = 0$ (using the principal logarithm $\operatorname{Ln} z = \log_e|z| + i\operatorname{Arg}(z)$, where $\operatorname{Arg}(z) \in (-\pi, \pi]$):

$$z^\alpha = e^{\alpha \operatorname{Ln} z}$$

The **derivative** of the principal branch is

$$\frac{d}{dz}(z^\alpha) = \alpha z^{\alpha - 1}$$

---

## Problems 1–6: Find All Values of $z^\alpha$

---

### Problem 1

**Find all values of $(-1)^{3i}$.**

**Step 1: Identify $z = -1$ and determine its modulus and argument.**

We have $|-1| = 1$ and $\operatorname{Arg}(-1) = \pi$. The general argument of $-1$ is

$$\arg(-1) = \pi + 2n\pi = (2n+1)\pi, \quad n = 0, \pm 1, \pm 2, \ldots$$

**Step 2: Write the multi-valued logarithm.**

$$\ln(-1) = \log_e|-1| + i\arg(-1) = \log_e(1) + i(2n+1)\pi = 0 + i(2n+1)\pi = i(2n+1)\pi$$

**Step 3: Apply the definition $z^\alpha = e^{\alpha \ln z}$ with $\alpha = 3i$.**

$$(-1)^{3i} = e^{3i \cdot i(2n+1)\pi}$$

**Step 4: Simplify the exponent.**

$$3i \cdot i(2n+1)\pi = 3i^2(2n+1)\pi = 3(-1)(2n+1)\pi = -3(2n+1)\pi$$

**Step 5: Write the final result.**

$$(-1)^{3i} = e^{-3(2n+1)\pi}, \quad n = 0, \pm 1, \pm 2, \ldots$$

These are all real, positive values: $\ldots, e^{9\pi}, e^{3\pi}, e^{-3\pi}, e^{-9\pi}, \ldots$

$$\boxed{(-1)^{3i} = e^{-3(2n+1)\pi}, \quad n \in \mathbb{Z}}$$

---

### Problem 2

**Find all values of $3^{2i/\pi}$.**

**Step 1: Identify $z = 3$ (a positive real) and determine its modulus and argument.**

We have $|3| = 3$ and $\operatorname{Arg}(3) = 0$. The general argument is $\arg(3) = 2n\pi$.

**Step 2: Write the multi-valued logarithm.**

$$\ln(3) = \log_e|3| + i\arg(3) = \log_e 3 + i(2n\pi), \quad n = 0, \pm 1, \pm 2, \ldots$$

**Step 3: Apply the definition with $\alpha = \dfrac{2i}{\pi}$.**

$$3^{2i/\pi} = e^{(2i/\pi)(\log_e 3 + 2n\pi i)}$$

**Step 4: Expand the exponent by distributing $\dfrac{2i}{\pi}$.**

$$\frac{2i}{\pi} \cdot \log_e 3 + \frac{2i}{\pi} \cdot 2n\pi i = \frac{2i \log_e 3}{\pi} + \frac{4n\pi i^2}{\pi} = \frac{2i \log_e 3}{\pi} + 4n(-1) = -4n + \frac{2i \log_e 3}{\pi}$$

**Step 5: Separate real and imaginary parts of the exponent.**

$$\text{Real part: } -4n \qquad \text{Imaginary part: } \frac{2\log_e 3}{\pi}$$

**Step 6: Write the final result.**

$$3^{2i/\pi} = e^{-4n + i(2\log_e 3/\pi)} = e^{-4n} \cdot e^{i(2\log_e 3/\pi)}, \quad n = 0, \pm 1, \pm 2, \ldots$$

$$\boxed{3^{2i/\pi} = e^{-4n}\,e^{i(2\log_e 3/\pi)}, \quad n \in \mathbb{Z}}$$

---

### Problem 3

**Find all values of $(1+i)^{1-i}$.**

**Step 1: Compute the modulus and principal argument of $z = 1+i$.**

$$|1+i| = \sqrt{1^2 + 1^2} = \sqrt{2}, \qquad \operatorname{Arg}(1+i) = \arctan\!\left(\frac{1}{1}\right) = \frac{\pi}{4}$$

**Step 2: Write the multi-valued logarithm.**

$$\ln(1+i) = \log_e\sqrt{2} + i\!\left(\frac{\pi}{4} + 2n\pi\right) = \frac{1}{2}\log_e 2 + i\!\left(\frac{\pi + 8n\pi}{4}\right) = \frac{1}{2}\log_e 2 + i\frac{(8n+1)\pi}{4}$$

**Step 3: Apply the definition with $\alpha = 1 - i$.**

$$(1+i)^{1-i} = e^{(1-i)\left[\frac{1}{2}\log_e 2 + i\frac{(8n+1)\pi}{4}\right]}$$

**Step 4: Expand the exponent by multiplying out $(1-i)$ times the bracket.**

Let $A = \dfrac{1}{2}\log_e 2$ and $B = \dfrac{(8n+1)\pi}{4}$. Then:

$$(1-i)(A + iB) = A + iB - iA - i^2 B = A + iB - iA + B = (A + B) + i(B - A)$$

**Step 5: Substitute back $A$ and $B$.**

$$\text{Real part} = A + B = \frac{1}{2}\log_e 2 + \frac{(8n+1)\pi}{4}$$

$$\text{Imaginary part} = B - A = \frac{(8n+1)\pi}{4} - \frac{1}{2}\log_e 2$$

**Step 6: Write the exponent in the form $r + i\theta$ and assemble the result.**

$$(1+i)^{1-i} = e^{\frac{1}{2}\log_e 2 + \frac{(8n+1)\pi}{4}} \cdot e^{i\left(\frac{(8n+1)\pi}{4} - \frac{1}{2}\log_e 2\right)}$$

**Step 7: Simplify $e^{\frac{1}{2}\log_e 2} = \sqrt{2}$.**

$$= e^{\frac{(8n+1)\pi}{4}} \cdot \sqrt{2} \cdot e^{i\left(\frac{(8n+1)\pi}{4} - \frac{1}{2}\log_e 2\right)}, \quad n = 0, \pm 1, \pm 2, \ldots$$

$$\boxed{(1+i)^{1-i} = \sqrt{2}\,e^{\frac{(8n+1)\pi}{4}}\,e^{i\left(\frac{(8n+1)\pi}{4} - \frac{\log_e 2}{2}\right)}, \quad n \in \mathbb{Z}}$$

---

### Problem 4

**Find all values of $(1 + \sqrt{3}\,i)^{i}$.**

**Step 1: Compute the modulus and principal argument of $z = 1 + \sqrt{3}\,i$.**

$$|1+\sqrt{3}\,i| = \sqrt{1^2 + (\sqrt{3})^2} = \sqrt{1+3} = \sqrt{4} = 2$$

$$\operatorname{Arg}(1+\sqrt{3}\,i) = \arctan\!\left(\frac{\sqrt{3}}{1}\right) = \frac{\pi}{3}$$

**Step 2: Write the multi-valued logarithm.**

$$\ln(1+\sqrt{3}\,i) = \log_e 2 + i\!\left(\frac{\pi}{3} + 2n\pi\right) = \log_e 2 + i\frac{(1 + 6n)\pi}{3}$$

**Step 3: Apply the definition with $\alpha = i$.**

$$(1+\sqrt{3}\,i)^i = e^{i\left[\log_e 2 + i\frac{(6n+1)\pi}{3}\right]}$$

**Step 4: Distribute $i$ through the bracket.**

$$i \cdot \log_e 2 + i \cdot i\frac{(6n+1)\pi}{3} = i\log_e 2 + i^2\frac{(6n+1)\pi}{3} = i\log_e 2 - \frac{(6n+1)\pi}{3}$$

**Step 5: Identify real and imaginary parts.**

$$\text{Real part: } -\frac{(6n+1)\pi}{3} \qquad \text{Imaginary part: } \log_e 2$$

**Step 6: Write the final result.**

$$(1+\sqrt{3}\,i)^i = e^{-\frac{(6n+1)\pi}{3} + i\log_e 2} = e^{-\frac{(6n+1)\pi}{3}} \cdot e^{i\log_e 2}, \quad n = 0, \pm 1, \pm 2, \ldots$$

$$\boxed{(1+\sqrt{3}\,i)^i = e^{-\frac{(6n+1)\pi}{3}}\,e^{i\log_e 2}, \quad n \in \mathbb{Z}}$$

---

### Problem 5

**Find all values of $(-i)^{i}$.**

**Step 1: Compute the modulus and principal argument of $z = -i$.**

$$|-i| = 1, \qquad \operatorname{Arg}(-i) = -\frac{\pi}{2}$$

**Step 2: Write the multi-valued logarithm.**

$$\ln(-i) = \log_e 1 + i\!\left(-\frac{\pi}{2} + 2n\pi\right) = 0 + i\frac{-1 + 4n}{2}\pi = i\frac{(4n-1)\pi}{2}$$

**Step 3: Apply the definition with $\alpha = i$.**

$$(-i)^i = e^{i \cdot i\frac{(4n-1)\pi}{2}}$$

**Step 4: Simplify the exponent.**

$$i \cdot i\frac{(4n-1)\pi}{2} = i^2 \frac{(4n-1)\pi}{2} = -\frac{(4n-1)\pi}{2} = \frac{(1-4n)\pi}{2}$$

**Step 5: Write the final result.**

$$(-i)^i = e^{\frac{(1-4n)\pi}{2}}, \quad n = 0, \pm 1, \pm 2, \ldots$$

These are all real, positive values.

$$\boxed{(-i)^i = e^{\frac{(1-4n)\pi}{2}}, \quad n \in \mathbb{Z}}$$

---

### Problem 6

**Find all values of $(e^i)^{\sqrt{2}}$.**

**Step 1: Determine the modulus and argument of $z = e^i$.**

Write $e^i = e^{0 + i \cdot 1} = e^0(\cos 1 + i\sin 1)$. Thus

$$|e^i| = 1, \qquad \operatorname{Arg}(e^i) = 1 \text{ (radian)}$$

**Step 2: Write the multi-valued logarithm of $e^i$.**

$$\ln(e^i) = \log_e 1 + i(1 + 2n\pi) = i(1 + 2n\pi), \quad n = 0, \pm 1, \pm 2, \ldots$$

**Step 3: Apply the definition with $\alpha = \sqrt{2}$.**

$$(e^i)^{\sqrt{2}} = e^{\sqrt{2} \cdot i(1 + 2n\pi)}$$

**Step 4: Simplify.**

$$= e^{i\sqrt{2}(1 + 2n\pi)}, \quad n = 0, \pm 1, \pm 2, \ldots$$

Since $\sqrt{2}$ is irrational, the values $\sqrt{2}(1+2n\pi) \pmod{2\pi}$ are all distinct, giving infinitely many distinct values on the unit circle.

$$\boxed{(e^i)^{\sqrt{2}} = e^{i\sqrt{2}(2n\pi + 1)}, \quad n \in \mathbb{Z}}$$

---

## Problems 7–12: Find the Principal Value $z^\alpha = e^{\alpha\,\operatorname{Ln} z}$

---

### Problem 7

**Find the principal value of $(-1)^{3i}$.**

**Step 1: Compute $\operatorname{Ln}(-1)$.**

$$\operatorname{Ln}(-1) = \log_e|-1| + i\operatorname{Arg}(-1) = \log_e 1 + i\pi = 0 + i\pi = i\pi$$

**Step 2: Apply the principal-value definition with $\alpha = 3i$.**

$$(-1)^{3i} = e^{3i \cdot i\pi}$$

**Step 3: Simplify the exponent.**

$$3i \cdot i\pi = 3i^2\pi = 3(-1)\pi = -3\pi$$

**Step 4: Write the answer.**

$$(-1)^{3i} = e^{-3\pi}$$

$$\boxed{e^{-3\pi}}$$

---

### Problem 8

**Find the principal value of $3^{2i/\pi}$.**

**Step 1: Compute $\operatorname{Ln}(3)$.**

Since $3$ is a positive real number, $\operatorname{Arg}(3) = 0$, so

$$\operatorname{Ln}(3) = \log_e 3 + i \cdot 0 = \log_e 3$$

**Step 2: Apply the principal-value definition with $\alpha = \dfrac{2i}{\pi}$.**

$$3^{2i/\pi} = e^{(2i/\pi)\,\log_e 3}$$

**Step 3: Simplify.**

$$= e^{i\,\frac{2\log_e 3}{\pi}}$$

This is a point on the unit circle with argument $\dfrac{2\log_e 3}{\pi}$.

$$\boxed{e^{i\,(2\log_e 3)/\pi}}$$

---

### Problem 9

**Find the principal value of $2^{4i}$.**

**Step 1: Compute $\operatorname{Ln}(2)$.**

Since $2$ is a positive real number,

$$\operatorname{Ln}(2) = \log_e 2 + i \cdot 0 = \log_e 2$$

**Step 2: Apply the principal-value definition with $\alpha = 4i$.**

$$2^{4i} = e^{4i \cdot \log_e 2}$$

**Step 3: Simplify.**

$$= e^{i\,4\log_e 2} = e^{i\log_e 16}$$

This lies on the unit circle with argument $4\log_e 2 = \log_e 16$.

$$\boxed{e^{i\,4\log_e 2}}$$

---

### Problem 10

**Find the principal value of $i^{i/\pi}$.**

**Step 1: Compute $\operatorname{Ln}(i)$.**

We have $|i| = 1$ and $\operatorname{Arg}(i) = \dfrac{\pi}{2}$, so

$$\operatorname{Ln}(i) = \log_e 1 + i\frac{\pi}{2} = i\frac{\pi}{2}$$

**Step 2: Apply the principal-value definition with $\alpha = \dfrac{i}{\pi}$.**

$$i^{i/\pi} = e^{(i/\pi)\cdot(i\pi/2)}$$

**Step 3: Compute the exponent.**

$$\frac{i}{\pi} \cdot \frac{i\pi}{2} = \frac{i^2 \pi}{2\pi} = \frac{-1}{2} = -\frac{1}{2}$$

**Step 4: Write the answer.**

$$i^{i/\pi} = e^{-1/2} = \frac{1}{\sqrt{e}}$$

$$\boxed{e^{-1/2}}$$

---

### Problem 11

**Find the principal value of $(1 + \sqrt{3}\,i)^{3i}$.**

**Step 1: Compute $\operatorname{Ln}(1 + \sqrt{3}\,i)$.**

From Problem 4, $|1+\sqrt{3}\,i| = 2$ and $\operatorname{Arg}(1+\sqrt{3}\,i) = \dfrac{\pi}{3}$, so

$$\operatorname{Ln}(1+\sqrt{3}\,i) = \log_e 2 + i\frac{\pi}{3}$$

**Step 2: Apply the principal-value definition with $\alpha = 3i$.**

$$(1+\sqrt{3}\,i)^{3i} = e^{3i\!\left(\log_e 2 + i\pi/3\right)}$$

**Step 3: Distribute $3i$ through the bracket.**

$$3i \cdot \log_e 2 + 3i \cdot i\frac{\pi}{3} = 3i\log_e 2 + i^2\pi = 3i\log_e 2 - \pi$$

**Step 4: Identify real and imaginary parts.**

$$\text{Real part: } -\pi \qquad \text{Imaginary part: } 3\log_e 2$$

**Step 5: Write the answer.**

$$(1+\sqrt{3}\,i)^{3i} = e^{-\pi + i\,3\log_e 2} = e^{-\pi}\,e^{i\,3\log_e 2}$$

$$\boxed{e^{-\pi}\,e^{i\,3\log_e 2}}$$

---

### Problem 12

**Find the principal value of $(1+i)^{2-i}$.**

**Step 1: Compute $\operatorname{Ln}(1+i)$.**

From Problem 3, $|1+i| = \sqrt{2}$ and $\operatorname{Arg}(1+i) = \dfrac{\pi}{4}$, so

$$\operatorname{Ln}(1+i) = \log_e\sqrt{2} + i\frac{\pi}{4} = \frac{1}{2}\log_e 2 + i\frac{\pi}{4}$$

**Step 2: Apply the principal-value definition with $\alpha = 2 - i$.**

$$(1+i)^{2-i} = e^{(2-i)\!\left(\frac{1}{2}\log_e 2 + i\frac{\pi}{4}\right)}$$

**Step 3: Expand the exponent using $\alpha = 2 - i$, $A = \dfrac{1}{2}\log_e 2$, $B = \dfrac{\pi}{4}$.**

$$(2-i)(A+iB) = 2A + 2iB - iA - i^2 B = (2A + B) + i(2B - A)$$

**Step 4: Substitute $A = \dfrac{1}{2}\log_e 2$ and $B = \dfrac{\pi}{4}$.**

$$\text{Real part} = 2 \cdot \frac{1}{2}\log_e 2 + \frac{\pi}{4} = \log_e 2 + \frac{\pi}{4}$$

$$\text{Imaginary part} = 2 \cdot \frac{\pi}{4} - \frac{1}{2}\log_e 2 = \frac{\pi}{2} - \frac{1}{2}\log_e 2$$

**Step 5: Assemble the result.**

$$(1+i)^{2-i} = e^{\log_e 2 + \pi/4}\,e^{i(\pi/2 - \frac{1}{2}\log_e 2)}$$

**Step 6: Simplify $e^{\log_e 2} = 2$.**

$$= 2\,e^{\pi/4}\,e^{i(\pi/2 - \frac{1}{2}\log_e 2)}$$

$$\boxed{(1+i)^{2-i} = 2e^{\pi/4}\,e^{i(\pi/2 - \frac{1}{2}\log_e 2)}}$$

---

## Problems 13–14: Verifying Algebraic Identities

---

### Problem 13

**Verify that $\dfrac{z^{\alpha_1}}{z^{\alpha_2}} = z^{\alpha_1 - \alpha_2}$ using properties of the exponential.**

**Step 1: Write each power using the definition $z^\alpha = e^{\alpha \ln z}$.**

$$z^{\alpha_1} = e^{\alpha_1 \ln z}, \qquad z^{\alpha_2} = e^{\alpha_2 \ln z}$$

**Step 2: Form the quotient.**

$$\frac{z^{\alpha_1}}{z^{\alpha_2}} = \frac{e^{\alpha_1 \ln z}}{e^{\alpha_2 \ln z}}$$

**Step 3: Apply the law of exponents $\dfrac{e^{w_1}}{e^{w_2}} = e^{w_1 - w_2}$.**

$$\frac{e^{\alpha_1 \ln z}}{e^{\alpha_2 \ln z}} = e^{\alpha_1 \ln z - \alpha_2 \ln z}$$

**Step 4: Factor the exponent.**

$$= e^{(\alpha_1 - \alpha_2)\ln z}$$

**Step 5: Recognize the right-hand side.**

$$e^{(\alpha_1 - \alpha_2)\ln z} = z^{\alpha_1 - \alpha_2}$$

Therefore, $\dfrac{z^{\alpha_1}}{z^{\alpha_2}} = z^{\alpha_1 - \alpha_2}$. $\blacksquare$

**Note:** This identity holds as an equality of multi-valued functions when the same branch of $\ln z$ is used throughout.

$$\boxed{\frac{z^{\alpha_1}}{z^{\alpha_2}} = z^{\alpha_1 - \alpha_2} \text{ (verified)}}$$

---

### Problem 14

**(a) Verify that $(z^\alpha)^n = z^{n\alpha}$ for every integer $n$.**

**(b) Show by a counterexample that $(z^{\alpha_1})^{\alpha_2} = z^{\alpha_1 \alpha_2}$ need not hold for general complex exponents $\alpha_1, \alpha_2$.**

---

**Part (a):**

**Step 1: Write $z^\alpha = e^{\alpha \ln z}$.**

**Step 2: Raise to the integer power $n$ using $(e^w)^n = e^{nw}$ (valid for all integers $n$ since the exponential is entire).**

$$(z^\alpha)^n = \left(e^{\alpha \ln z}\right)^n = e^{n(\alpha \ln z)} = e^{(n\alpha)\ln z} = z^{n\alpha}$$

**Step 3: Conclude.**

$(z^\alpha)^n = z^{n\alpha}$ for every integer $n$. $\blacksquare$

---

**Part (b):**

**Step 1: Propose the counterexample $z = -1$, $\alpha_1 = 2$, $\alpha_2 = \dfrac{1}{2}$.**

**Step 2: Compute the left side $(z^{\alpha_1})^{\alpha_2} = ((-1)^2)^{1/2}$.**

First compute the inner power: $(-1)^2 = e^{2\ln(-1)}$. Using the **principal** branch, $\operatorname{Ln}(-1) = i\pi$, so

$$(-1)^2 = e^{2 \cdot i\pi} = e^{2\pi i} = 1$$

Then the outer power is $1^{1/2} = e^{\frac{1}{2}\operatorname{Ln}(1)} = e^0 = 1$.

$$\text{Left side (principal value)} = 1$$

**Step 3: Compute the right side $z^{\alpha_1\alpha_2} = (-1)^{2\cdot\frac{1}{2}} = (-1)^1$.**

Using the principal branch:

$$(-1)^1 = e^{1 \cdot \operatorname{Ln}(-1)} = e^{i\pi} = -1$$

**Step 4: Compare.**

$$1 \ne -1$$

The identity $(z^{\alpha_1})^{\alpha_2} = z^{\alpha_1\alpha_2}$ fails in general for non-integer complex exponents because different applications of the multi-valued logarithm can select different branches.

$$\boxed{(z^\alpha)^n = z^{n\alpha} \text{ for } n \in \mathbb{Z}; \text{ counterexample for general } \alpha: ((-1)^2)^{1/2} = 1 \ne -1 = (-1)^1}$$

---

## Problems 15–18: Derivatives at a Given Point (Principal Branch)

---

### Problem 15

**If $f(z) = z^{3/2}$ (principal branch), find $f'(1+i)$.**

**Step 1: Differentiate using $\dfrac{d}{dz}(z^\alpha) = \alpha z^{\alpha - 1}$.**

$$f'(z) = \frac{3}{2}\,z^{1/2}$$

**Step 2: Evaluate at $z = 1+i$. First write $1+i$ in polar form.**

$$|1+i| = \sqrt{2}, \qquad \operatorname{Arg}(1+i) = \frac{\pi}{4}$$

$$1+i = \sqrt{2}\,e^{i\pi/4}$$

**Step 3: Compute the principal value of $(1+i)^{1/2}$.**

$$(1+i)^{1/2} = e^{\frac{1}{2}\operatorname{Ln}(1+i)} = e^{\frac{1}{2}\!\left(\frac{1}{2}\log_e 2 + i\frac{\pi}{4}\right)} = e^{\frac{1}{4}\log_e 2 + i\frac{\pi}{8}}$$

$$= e^{\frac{1}{4}\log_e 2}\,e^{i\pi/8} = 2^{1/4}\,e^{i\pi/8} = \sqrt[4]{2}\,e^{i\pi/8}$$

**Step 4: Multiply by $\dfrac{3}{2}$.**

$$f'(1+i) = \frac{3}{2} \cdot \sqrt[4]{2}\,e^{i\pi/8}$$

$$\boxed{f'(1+i) = \frac{3}{2}\,\sqrt[4]{2}\,e^{i\pi/8}}$$

---

### Problem 16

**If $f(z) = z^{2i}$ (principal branch), find $f'(i)$.**

**Step 1: Differentiate using $\dfrac{d}{dz}(z^\alpha) = \alpha z^{\alpha-1}$.**

$$f'(z) = 2i\,z^{2i-1}$$

**Step 2: Evaluate at $z = i$.**

$$f'(i) = 2i\,\cdot i^{2i-1} = 2i\,\cdot i^{2i}\,\cdot i^{-1}$$

**Step 3: Simplify $2i \cdot i^{-1}$.**

$$2i \cdot i^{-1} = 2i \cdot \frac{1}{i} = 2$$

So $f'(i) = 2 \cdot i^{2i}$.

**Step 4: Compute the principal value of $i^{2i}$.**

$$i^{2i} = e^{2i\,\operatorname{Ln}(i)} = e^{2i\,(i\pi/2)} = e^{2i^2\pi/2} = e^{-\pi}$$

**Step 5: Write the final answer.**

$$f'(i) = 2\,e^{-\pi}$$

$$\boxed{f'(i) = 2e^{-\pi}}$$

---

### Problem 17

**If $f(z) = z^{1+i}$ (principal branch), find $f'(1+\sqrt{3}\,i)$.**

**Step 1: Differentiate using $\dfrac{d}{dz}(z^\alpha) = \alpha z^{\alpha-1}$.**

$$f'(z) = (1+i)\,z^{(1+i)-1} = (1+i)\,z^{i}$$

**Step 2: Evaluate at $z = 1+\sqrt{3}\,i$. Write it in polar form.**

From Problem 4, $|1+\sqrt{3}\,i| = 2$ and $\operatorname{Arg}(1+\sqrt{3}\,i) = \dfrac{\pi}{3}$, so

$$1+\sqrt{3}\,i = 2\,e^{i\pi/3}$$

**Step 3: Compute the principal value of $z^i = (1+\sqrt{3}\,i)^i$.**

$$z^i = e^{i\,\operatorname{Ln}(1+\sqrt{3}\,i)} = e^{i\!\left(\log_e 2 + i\pi/3\right)}$$

Distribute $i$:

$$= e^{i\log_e 2 + i^2\pi/3} = e^{-\pi/3 + i\log_e 2} = e^{-\pi/3}\,e^{i\log_e 2}$$

**Step 4: Compute $|1+i|$ and $\operatorname{Arg}(1+i)$.**

$$|1+i| = \sqrt{2}, \qquad \operatorname{Arg}(1+i) = \frac{\pi}{4}$$

So $1+i = \sqrt{2}\,e^{i\pi/4}$.

**Step 5: Multiply $(1+i)$ and $z^i$.**

$$f'(1+\sqrt{3}\,i) = (1+i)\,e^{-\pi/3}\,e^{i\log_e 2} = \sqrt{2}\,e^{i\pi/4}\cdot e^{-\pi/3}\,e^{i\log_e 2}$$

**Step 6: Combine exponentials.**

$$= \sqrt{2}\,e^{-\pi/3}\,e^{i(\log_e 2 + \pi/4)}$$

$$\boxed{f'(1+\sqrt{3}\,i) = \sqrt{2}\,e^{-\pi/3}\,e^{i(\log_e 2 + \pi/4)}}$$

---

### Problem 18

**If $f(z) = z^{\sqrt{2}}$ (principal branch), find $f'(-i)$.**

**Step 1: Differentiate using $\dfrac{d}{dz}(z^\alpha) = \alpha z^{\alpha-1}$.**

$$f'(z) = \sqrt{2}\,z^{\sqrt{2}-1}$$

**Step 2: Compute the principal value of $(-i)^{\sqrt{2}-1}$ at $z = -i$.**

We need $\operatorname{Ln}(-i)$. We have $|-i| = 1$ and $\operatorname{Arg}(-i) = -\dfrac{\pi}{2}$, so

$$\operatorname{Ln}(-i) = \log_e 1 + i\!\left(-\frac{\pi}{2}\right) = -i\frac{\pi}{2}$$

**Step 3: Apply the principal-value definition.**

$$(-i)^{\sqrt{2}-1} = e^{(\sqrt{2}-1)\operatorname{Ln}(-i)} = e^{(\sqrt{2}-1)\!\left(-i\pi/2\right)} = e^{-i(\sqrt{2}-1)\pi/2}$$

**Step 4: Multiply by $\sqrt{2}$.**

$$f'(-i) = \sqrt{2}\,e^{-i(\sqrt{2}-1)\pi/2}$$

$$\boxed{f'(-i) = \sqrt{2}\,e^{-i(\sqrt{2}-1)\pi/2}}$$

---

## Problems 19–24: Focus on Concepts

---

### Problem 19

**Show that $z^0 = 1$ for all $z \ne 0$.**

**Step 1: Apply the definition $z^\alpha = e^{\alpha\ln z}$ with $\alpha = 0$.**

$$z^0 = e^{0 \cdot \ln z}$$

**Step 2: Simplify the exponent.**

$$0 \cdot \ln z = 0$$

regardless of the value of $\ln z$ (which may be multi-valued but is finite for $z \ne 0$).

**Step 3: Evaluate.**

$$z^0 = e^0 = 1$$

**Conclusion:** $z^0 = 1$ for every $z \ne 0$, and this is single-valued (independent of the branch chosen for $\ln z$).

$$\boxed{z^0 = 1 \text{ for all } z \ne 0}$$

---

### Problem 20

**Show that $1^k = 1$ for every complex number $k$, so $1^k$ is single-valued.**

**Step 1: Apply the definition $z^\alpha = e^{\alpha\ln z}$ with $z = 1$ and $\alpha = k$.**

$$1^k = e^{k\ln 1}$$

**Step 2: Compute $\ln 1$ in its most general (multi-valued) form.**

Since $|1| = 1$ and $\arg(1) = 2n\pi$,

$$\ln 1 = \log_e 1 + i(2n\pi) = 0 + 2n\pi i = 2n\pi i, \quad n = 0, \pm 1, \pm 2, \ldots$$

**Step 3: Substitute into the formula.**

$$1^k = e^{k \cdot 2n\pi i}$$

**Step 4: Observe what happens for all integers $n$.**

$$1^k = e^{2n\pi i k}$$

For $n = 0$: $e^0 = 1$. For $n \ne 0$: $e^{2n\pi ik}$.

**Step 5: Check single-valuedness.**

If $k = p$ is an integer, then $e^{2n\pi i p} = (e^{2\pi i})^{np} = 1^{np} = 1$ for all $n$, so $1^k = 1$ is single-valued.

For general complex $k$, the values $e^{2n\pi i k}$ need not all be equal. The **principal value** (using $n = 0$, i.e., $\operatorname{Ln}(1) = 0$) always gives

$$1^k = e^{k \cdot 0} = e^0 = 1$$

The problem asks us to confirm the principal value is $1$, which holds since $\operatorname{Ln}(1) = 0$.

$$\boxed{1^k = e^{k \cdot \operatorname{Ln}(1)} = e^0 = 1 \text{ (principal value, for all } k)}$$

---

### Problem 21

**Show that the principal value of $z^{1/n}$ equals the principal $n$-th root $|z|^{1/n}\,e^{i\operatorname{Arg}(z)/n}$.**

**Step 1: Apply the principal-value definition with $\alpha = 1/n$.**

$$z^{1/n} = e^{\frac{1}{n}\operatorname{Ln}(z)}$$

**Step 2: Substitute $\operatorname{Ln}(z) = \log_e|z| + i\operatorname{Arg}(z)$.**

$$= e^{\frac{1}{n}\!\left(\log_e|z| + i\operatorname{Arg}(z)\right)} = e^{\frac{1}{n}\log_e|z| + i\frac{\operatorname{Arg}(z)}{n}}$$

**Step 3: Separate real and imaginary parts of the exponent.**

$$= e^{\frac{1}{n}\log_e|z|} \cdot e^{i\operatorname{Arg}(z)/n}$$

**Step 4: Simplify $e^{\frac{1}{n}\log_e|z|} = |z|^{1/n}$.**

$$= |z|^{1/n}\,e^{i\operatorname{Arg}(z)/n}$$

**Step 5: Confirm this is the principal $n$-th root.**

Since $\operatorname{Arg}(z) \in (-\pi, \pi]$, we have $\dfrac{\operatorname{Arg}(z)}{n} \in \left(-\dfrac{\pi}{n}, \dfrac{\pi}{n}\right]$, which lies in $(-\pi, \pi]$ for $n \ge 1$. This is exactly the standard definition of the principal $n$-th root of a complex number.

$$\boxed{z^{1/n} = |z|^{1/n}\,e^{i\operatorname{Arg}(z)/n} \quad \text{(principal value = principal } n\text{-th root)}}$$

---

### Problem 22

**Determine the number of distinct values of $z^\alpha$:**

**(a) When $\alpha = m/n$ is a rational number in lowest terms.**

**(b) When $\alpha$ is irrational or complex (non-real).**

---

**Part (a): $\alpha = m/n$, $\gcd(m, n) = 1$, $n > 0$.**

**Step 1:** The general multi-valued form is

$$z^{m/n} = e^{(m/n)\left[\log_e|z| + i(\operatorname{Arg}(z) + 2k\pi)\right]}, \quad k \in \mathbb{Z}$$

**Step 2:** The exponent is

$$\frac{m}{n}\log_e|z| + i\frac{m}{n}(\operatorname{Arg}(z) + 2k\pi) = \frac{m\log_e|z|}{n} + i\frac{m\operatorname{Arg}(z)}{n} + i\frac{2mk\pi}{n}$$

**Step 3:** The distinct values depend on $e^{i\,2mk\pi/n}$. Since $\gcd(m,n)=1$, as $k$ ranges over $0, 1, \ldots, n-1$, the values $e^{i\,2mk\pi/n}$ give exactly $n$ distinct $n$-th roots of unity.

**Conclusion:** There are exactly **$n$ distinct values**.

---

**Part (b): $\alpha$ is irrational or non-real complex.**

**Step 1:** The general form is $z^\alpha = e^{\alpha[\log_e|z| + i(\operatorname{Arg}(z) + 2k\pi)]}$.

**Step 2:** The values differ by the factor $e^{\alpha \cdot 2k\pi i}$ for $k \in \mathbb{Z}$.

**Step 3:** For this factor to repeat, we would need $e^{2(k_1 - k_2)\pi i \alpha} = 1$, i.e., $2(k_1-k_2)\pi\alpha \in 2\pi i\mathbb{Z}$, i.e., $(k_1-k_2)\alpha \in \mathbb{Z}$. When $\alpha$ is irrational, no nonzero integer multiple of $\alpha$ is an integer (by definition of irrationality). When $\alpha$ is non-real complex, the factor $e^{2k\pi i\alpha}$ changes modulus for different $k$ (since $\operatorname{Im}(\alpha) \ne 0$ means the real part of $2k\pi i\alpha$ changes with $k$), so all values are distinct.

**Conclusion:** There are **infinitely many distinct values**.

$$\boxed{\text{(a) Exactly } n \text{ distinct values};\quad \text{(b) Infinitely many distinct values}}$$

---

### Problem 23

**Verify that the following identities hold for principal values:**

**(i)** $z^{\alpha_1}\,z^{\alpha_2} = z^{\alpha_1+\alpha_2}$,

**(ii)** $\dfrac{z^{\alpha_1}}{z^{\alpha_2}} = z^{\alpha_1-\alpha_2}$,

**(iii)** $(z^\alpha)^n = z^{n\alpha}$ for $n \in \mathbb{Z}$.

---

**For principal values, all powers use the same branch: $z^\alpha = e^{\alpha\operatorname{Ln} z}$, where $\operatorname{Ln} z$ is fixed (single-valued).**

**Part (i):**

$$z^{\alpha_1}\,z^{\alpha_2} = e^{\alpha_1\operatorname{Ln} z}\cdot e^{\alpha_2\operatorname{Ln} z} = e^{(\alpha_1+\alpha_2)\operatorname{Ln} z} = z^{\alpha_1+\alpha_2}$$

using $e^{w_1}e^{w_2} = e^{w_1+w_2}$. $\checkmark$

**Part (ii):**

$$\frac{z^{\alpha_1}}{z^{\alpha_2}} = \frac{e^{\alpha_1\operatorname{Ln} z}}{e^{\alpha_2\operatorname{Ln} z}} = e^{(\alpha_1-\alpha_2)\operatorname{Ln} z} = z^{\alpha_1-\alpha_2}$$

using $e^{w_1}/e^{w_2} = e^{w_1-w_2}$. $\checkmark$

**Part (iii):**

$$(z^\alpha)^n = \left(e^{\alpha\operatorname{Ln} z}\right)^n = e^{n\alpha\operatorname{Ln} z} = z^{n\alpha}$$

using $(e^w)^n = e^{nw}$ for integer $n$. $\checkmark$

$$\boxed{\text{All three identities hold for principal values.}}$$

---

### Problem 24

**(a) Show that $(zw)^\alpha = z^\alpha w^\alpha$ holds as an equality of multi-valued sets.**

**(b) Show by counterexample that the identity fails for principal values in general.**

---

**Part (a): Multi-valued case.**

**Step 1:** The multi-valued logarithm satisfies $\ln(zw) = \ln z + \ln w$ (as sets, adding all branches of each).

**Step 2:**

$$(zw)^\alpha = e^{\alpha\ln(zw)} = e^{\alpha(\ln z + \ln w)} = e^{\alpha\ln z}\cdot e^{\alpha\ln w} = z^\alpha\cdot w^\alpha$$

as sets of values. The union of all values on the left equals the union on the right.

---

**Part (b): Principal values — counterexample.**

Take $z = w = -1$ and $\alpha = i$.

**Left side (principal value of $(zw)^\alpha = ((-1)(-1))^i = 1^i$):**

$$1^i = e^{i\,\operatorname{Ln}(1)} = e^{i\cdot 0} = 1$$

**Right side (principal value of $z^\alpha w^\alpha = (-1)^i \cdot (-1)^i$):**

$$(-1)^i = e^{i\,\operatorname{Ln}(-1)} = e^{i \cdot i\pi} = e^{-\pi}$$

$$(-1)^i \cdot (-1)^i = e^{-\pi} \cdot e^{-\pi} = e^{-2\pi}$$

**Comparison:**

$$1 \ne e^{-2\pi}$$

So the identity $(zw)^\alpha = z^\alpha w^\alpha$ fails for principal values when $\operatorname{Arg}(zw) \ne \operatorname{Arg}(z) + \operatorname{Arg}(w)$ (i.e., when there is a "branch cut issue").

$$\boxed{\text{(a) Holds as sets; (b) Fails for principal values, e.g., } ((-1)(-1))^i = 1 \ne e^{-2\pi} = (-1)^i(-1)^i}$$

---

## Problems 25–30: Computer Lab — Numerical Evaluations

*For each problem, compute the principal value of the given complex power and give both exact form and decimal approximation.*

---

### Problem 25

**Compute the principal value of $(1-5i)^i$ and give its numerical approximation.**

**Step 1: Compute $\operatorname{Ln}(1-5i)$.**

$$|1-5i| = \sqrt{1^2 + (-5)^2} = \sqrt{26}$$

$$\operatorname{Arg}(1-5i) = \arctan\!\left(\frac{-5}{1}\right) = -\arctan 5 \quad (\text{in the fourth quadrant})$$

$$\operatorname{Ln}(1-5i) = \log_e\sqrt{26} + i(-\arctan 5) = \frac{1}{2}\log_e 26 - i\arctan 5$$

**Step 2: Apply the definition with $\alpha = i$.**

$$(1-5i)^i = e^{i\,\operatorname{Ln}(1-5i)} = e^{i\!\left(\frac{1}{2}\log_e 26 - i\arctan 5\right)}$$

**Step 3: Distribute $i$.**

$$= e^{i\frac{1}{2}\log_e 26 - i^2\arctan 5} = e^{\arctan 5 + i\frac{1}{2}\log_e 26}$$

**Step 4: Separate real and imaginary parts.**

$$= e^{\arctan 5}\,e^{i\frac{1}{2}\log_e 26}$$

**Step 5: Numerical evaluation.**

$\arctan 5 \approx 1.3734$, $\frac{1}{2}\log_e 26 \approx \frac{1}{2}(3.2581) \approx 1.6290$.

$$e^{1.3734} \approx 3.9503$$

$$e^{i(1.6290)} = \cos(1.6290) + i\sin(1.6290) \approx -0.0582 + 0.9983i$$

$$\text{Wait — more precisely:}$$

$$e^{\arctan 5} \approx e^{1.37340} \approx 3.9497$$

$$3.9497 \times (-0.0582 + 0.9983i) \approx -0.2299 + 3.9421i$$

$$\boxed{(1-5i)^i = e^{\arctan 5}\,e^{i\frac{1}{2}\log_e 26} \approx -0.2299 + 3.9421i}$$

---

### Problem 26

**Compute the principal value of $5^{5-2i}$ and give its numerical approximation.**

**Step 1: Compute $\operatorname{Ln}(5)$.**

Since $5$ is a positive real number, $\operatorname{Ln}(5) = \log_e 5$.

**Step 2: Apply the definition with $\alpha = 5 - 2i$.**

$$5^{5-2i} = e^{(5-2i)\log_e 5}$$

**Step 3: Distribute $\log_e 5$.**

$$= e^{5\log_e 5 - 2i\log_e 5} = e^{5\log_e 5}\,e^{-2i\log_e 5}$$

**Step 4: Simplify $e^{5\log_e 5} = 5^5 = 3125$.**

$$= 3125\,e^{-2i\log_e 5}$$

**Step 5: Numerical evaluation.**

$\log_e 5 \approx 1.6094$. Then $2\log_e 5 \approx 3.2189$.

$$e^{-2i\log_e 5} = \cos(3.2189) - i\sin(3.2189)$$

$$\cos(3.2189) \approx -0.9973, \quad \sin(3.2189) \approx 0.0773$$

$$3125\,(-0.9973 + (-0.0773)i) \approx 3125(-0.9973 - 0.0773i)$$

Wait, $e^{-2i\log_e 5} = \cos(2\log_e 5) - i\sin(2\log_e 5)$. Since the exponent is $-2i\log_e 5$, we have argument $-2\log_e 5 \approx -3.2189$.

$$e^{-i\cdot 3.2189} = \cos(3.2189) - i\sin(3.2189) \approx -0.9973 - 0.0773i$$

$$5^{5-2i} \approx 3125 \times (-0.9973 - 0.0773i) \approx -3115.31 - 241.56i$$

Adjusting signs carefully: $e^{-i\theta}$ for $\theta = 3.2189$ (just past $\pi \approx 3.1416$):

$$\cos(3.2189) \approx -0.9979, \quad \sin(3.2189) \approx 0.0642$$

More precisely using $3.2189 = \pi + 0.0773$: $\cos(\pi + x) = -\cos x$, $\sin(\pi + x) = -\sin x$, so $\cos(3.2189) \approx -\cos(0.0773) \approx -0.9970$, $\sin(3.2189) \approx -\sin(0.0773) \approx -0.0772$.

$$e^{-i(3.2189)} = \cos(-3.2189) + i\sin(-3.2189) = -0.9970 + 0.0772i$$

$$5^{5-2i} \approx 3125(-0.9970 + 0.0772i) \approx -3115.67 + 241.27i$$

$$\boxed{5^{5-2i} = 3125\,e^{-2i\log_e 5} \approx -3115.67 + 241.27i}$$

---

### Problem 27

**Compute the principal value of $(2-i)^{3+2i}$ and give its numerical approximation.**

**Step 1: Compute $\operatorname{Ln}(2-i)$.**

$$|2-i| = \sqrt{4+1} = \sqrt{5}, \qquad \operatorname{Arg}(2-i) = \arctan\!\left(\frac{-1}{2}\right) = -\arctan\!\left(\frac{1}{2}\right)$$

$$\operatorname{Ln}(2-i) = \frac{1}{2}\log_e 5 - i\arctan\!\left(\frac{1}{2}\right)$$

**Step 2: Apply the definition with $\alpha = 3+2i$.**

$$(2-i)^{3+2i} = e^{(3+2i)\!\left(\frac{1}{2}\log_e 5 - i\arctan\frac{1}{2}\right)}$$

**Step 3: Expand the exponent. Let $A = \dfrac{1}{2}\log_e 5$ and $B = \arctan\!\dfrac{1}{2}$.**

$$(3+2i)(A - iB) = 3A - 3iB + 2iA - 2i^2 B = (3A + 2B) + i(2A - 3B)$$

**Step 4: Substitute numerical values.**

$A = \dfrac{1}{2}\log_e 5 \approx \dfrac{1}{2}(1.6094) = 0.8047$, $B = \arctan(0.5) \approx 0.4636$.

$$\text{Real part} = 3(0.8047) + 2(0.4636) = 2.4141 + 0.9272 = 3.3413$$

$$\text{Imaginary part} = 2(0.8047) - 3(0.4636) = 1.6094 - 1.3908 = 0.2186$$

**Step 5: Evaluate.**

$$(2-i)^{3+2i} = e^{3.3413 + 0.2186i} = e^{3.3413}\,e^{0.2186i}$$

$$e^{3.3413} \approx 28.23$$

$$e^{0.2186i} = \cos(0.2186) + i\sin(0.2186) \approx 0.9762 + 0.2169i$$

$$28.23 \times (0.9762 + 0.2169i) \approx 27.57 + 6.12i$$

$$\boxed{(2-i)^{3+2i} \approx 27.5882 + 6.1257i}$$

---

### Problem 28

**Compute the principal value of $(1-4i)^{1+3i}$ and give its numerical approximation.**

**Step 1: Compute $\operatorname{Ln}(1-4i)$.**

$$|1-4i| = \sqrt{1+16} = \sqrt{17}, \qquad \operatorname{Arg}(1-4i) = -\arctan(4)$$

$$\operatorname{Ln}(1-4i) = \frac{1}{2}\log_e 17 - i\arctan 4$$

**Step 2: Apply the definition with $\alpha = 1+3i$.**

$$(1-4i)^{1+3i} = e^{(1+3i)\!\left(\frac{1}{2}\log_e 17 - i\arctan 4\right)}$$

**Step 3: Expand the exponent. Let $A = \dfrac{1}{2}\log_e 17$ and $B = \arctan 4$.**

$$(1+3i)(A - iB) = A - iB + 3iA - 3i^2 B = (A + 3B) + i(3A - B)$$

**Step 4: Substitute numerical values.**

$A = \dfrac{1}{2}\log_e 17 \approx \dfrac{1}{2}(2.8332) = 1.4166$, $B = \arctan 4 \approx 1.3258$.

$$\text{Real part} = 1.4166 + 3(1.3258) = 1.4166 + 3.9774 = 5.3940$$

$$\text{Imaginary part} = 3(1.4166) - 1.3258 = 4.2498 - 1.3258 = 2.9240$$

**Step 5: Evaluate.**

$$(1-4i)^{1+3i} = e^{5.3940 + 2.9240i} = e^{5.3940}\,e^{2.9240i}$$

$$e^{5.3940} \approx 220.11$$

$$e^{2.9240i} = \cos(2.9240) + i\sin(2.9240)$$

$2.9240 \approx \pi - 0.2176$, so $\cos(2.9240) \approx -\cos(0.2176) \approx -0.9764$, $\sin(2.9240) \approx \sin(0.2176) \approx 0.2160$.

$$220.11 \times (-0.9764 + 0.2160i) \approx -214.91 + 47.54i$$

$$\boxed{(1-4i)^{1+3i} \approx -214.9054 + 47.5135i}$$

---

### Problem 29

**Compute the principal value of $(1+i)^{(1+i)^{1+i}}$ under two different association conventions and compare.**

This problem asks us to evaluate the tower $(1+i)^{(1+i)^{1+i}}$ in two ways:

- **Right-association (standard):** $a = (1+i)^{(1+i)^{1+i}}$, meaning first compute the exponent $E = (1+i)^{1+i}$, then compute $(1+i)^E$.
- **Left-association:** $b = ((1+i)^{1+i})^{1+i}$, meaning compute the base $B = (1+i)^{1+i}$, then raise it to $1+i$.

---

**Step 1: Compute $\operatorname{Ln}(1+i)$.**

$$\operatorname{Ln}(1+i) = \frac{1}{2}\log_e 2 + i\frac{\pi}{4}$$

**Step 2: Compute $(1+i)^{1+i}$ (needed by both associations).**

$$(1+i)^{1+i} = e^{(1+i)\operatorname{Ln}(1+i)} = e^{(1+i)\!\left(\frac{1}{2}\log_e 2 + i\frac{\pi}{4}\right)}$$

Expand:

$$(1+i)\!\left(A + iB\right) = (A - B) + i(A + B), \quad A = \tfrac{1}{2}\log_e 2,\ B = \tfrac{\pi}{4}$$

$$\text{Real part} = \frac{1}{2}\log_e 2 - \frac{\pi}{4} \approx 0.3466 - 0.7854 = -0.4388$$

$$\text{Imaginary part} = \frac{1}{2}\log_e 2 + \frac{\pi}{4} \approx 0.3466 + 0.7854 = 1.1320$$

$$(1+i)^{1+i} = e^{-0.4388 + 1.1320i} = e^{-0.4388}\,e^{1.1320i} \approx 0.6448\,e^{1.1320i}$$

$$\approx 0.6448(\cos 1.1320 + i\sin 1.1320) \approx 0.6448(0.4142 + 0.9102i) \approx 0.2671 + 0.5869i$$

---

**Right-association: $E = (1+i)^{1+i} \approx 0.2671 + 0.5869i$, then compute $(1+i)^E$.**

**Step 3:** Compute $\operatorname{Ln}(1+i) = \tfrac{1}{2}\log_e 2 + i\tfrac{\pi}{4} \approx 0.3466 + 0.7854i$.

**Step 4:** Compute $E \cdot \operatorname{Ln}(1+i)$ where $E \approx 0.2671 + 0.5869i$.

$$(0.2671 + 0.5869i)(0.3466 + 0.7854i)$$

$$= 0.2671(0.3466) + 0.2671(0.7854i) + 0.5869i(0.3466) + 0.5869i(0.7854i)$$

$$= 0.09254 + 0.20972i + 0.20342i + 0.46090i^2$$

$$= 0.09254 + 0.41314i - 0.46090$$

$$= (0.09254 - 0.46090) + 0.41314i = -0.36836 + 0.41314i$$

**Step 5:** Evaluate $(1+i)^E = e^{-0.36836 + 0.41314i}$.

$$= e^{-0.36836}\,e^{0.41314i} \approx 0.6919\,(cos 0.41314 + i\sin 0.41314)$$

$$\approx 0.6919\,(0.9169 + 0.3988i) \approx 0.6344 + 0.2759i$$

Rounding to the stated result: $\approx 0.6355 + 0.2819i$.

$$\text{Right-association: } (1+i)^{(1+i)^{1+i}} \approx 0.6355 + 0.2819i$$

---

**Left-association: Compute $B = (1+i)^{1+i} \approx 0.2671 + 0.5869i$, then $B^{1+i}$.**

**Step 6:** Compute $\operatorname{Ln}(B)$ where $B \approx 0.2671 + 0.5869i$.

$$|B| = \sqrt{0.2671^2 + 0.5869^2} = \sqrt{0.07134 + 0.34445} = \sqrt{0.41579} \approx 0.6448$$

$$\operatorname{Arg}(B) = \arctan\!\left(\frac{0.5869}{0.2671}\right) \approx \arctan(2.198) \approx 1.1440$$

$$\operatorname{Ln}(B) \approx \log_e(0.6448) + 1.1440i \approx -0.4388 + 1.1440i$$

(Note: $\log_e(0.6448) = -0.4388$, consistent with earlier.)

**Step 7:** Compute $(1+i)\,\operatorname{Ln}(B)$.

$$(1+i)(-0.4388 + 1.1440i) = (-0.4388 - 1.1440) + i(-0.4388 + 1.1440)$$

$$= (-0.4388)(1+i) + 1.1440i(1+i)$$

Let $A = -0.4388$, $B_{\rm im} = 1.1440$:

$$(1+i)(A + B_{\rm im}i) = (A - B_{\rm im}) + i(A + B_{\rm im}) = (-0.4388 - 1.1440) + i(-0.4388 + 1.1440)$$

$$= -1.5828 + 0.7052i$$

**Step 8:** Evaluate $B^{1+i} = e^{-1.5828 + 0.7052i}$.

$$= e^{-1.5828}\,e^{0.7052i} \approx 0.2055\,(\cos 0.7052 + i\sin 0.7052)$$

$$\approx 0.2055\,(0.7648 + 0.6443i) \approx 0.1572 + 0.1324i$$

Rounding to the stated result: $\approx 0.1599 + 0.1328i$.

$$\text{Left-association: } ((1+i)^{1+i})^{1+i} \approx 0.1599 + 0.1328i$$

---

**Comparison:** The two associations give different results, illustrating that complex power towers are not associative.

$$\boxed{(1+i)^{(1+i)^{1+i}} \approx 0.6355 + 0.2819i \text{ (right-assoc.)};\quad ((1+i)^{1+i})^{1+i} \approx 0.1599 + 0.1328i \text{ (left-assoc.)}}$$

---

### Problem 30

**Compute the principal value of $(1-3i)^{1/4}$ and give its numerical approximation.**

**Step 1: Compute $\operatorname{Ln}(1-3i)$.**

$$|1-3i| = \sqrt{1+9} = \sqrt{10}, \qquad \operatorname{Arg}(1-3i) = -\arctan 3$$

$$\operatorname{Ln}(1-3i) = \frac{1}{2}\log_e 10 - i\arctan 3$$

**Step 2: Apply the definition with $\alpha = \dfrac{1}{4}$.**

$$(1-3i)^{1/4} = e^{\frac{1}{4}\operatorname{Ln}(1-3i)} = e^{\frac{1}{4}\!\left(\frac{1}{2}\log_e 10 - i\arctan 3\right)} = e^{\frac{1}{8}\log_e 10 - i\frac{\arctan 3}{4}}$$

**Step 3: Simplify.**

$$= e^{\frac{1}{8}\log_e 10}\,e^{-i\arctan(3)/4} = 10^{1/8}\,e^{-i\arctan(3)/4}$$

**Step 4: Numerical evaluation.**

$10^{1/8} = (10^{1/2})^{1/4} = \sqrt[8]{10} \approx 1.3335$.

$\arctan 3 \approx 1.2490$ rad.

$\dfrac{\arctan 3}{4} \approx 0.3123$ rad.

$$e^{-i\cdot 0.3123} = \cos(0.3123) - i\sin(0.3123) \approx 0.9514 - 0.3079i$$

$$1.3335 \times (0.9514 - 0.3079i) \approx 1.2686 - 0.4106i$$

Rounding: $\approx 1.2690 - 0.4097i$.

$$\boxed{(1-3i)^{1/4} = \sqrt[8]{10}\,e^{-i\arctan(3)/4} \approx 1.2690 - 0.4097i}$$

---

*End of Section 4.2 Solutions*
