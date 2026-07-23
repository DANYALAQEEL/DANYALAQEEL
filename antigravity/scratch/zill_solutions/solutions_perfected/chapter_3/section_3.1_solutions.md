# Complex Analysis — Dennis G. Zill, 2nd Edition
## Chapter 3 · Section 3.1 — Differentiability and Analyticity
### Problems 1 – 35 · Complete Solutions

---

> **Key Concepts of Differentiability and Analyticity**
>
> 1. **Definition of Derivative:** The derivative of a complex function $f$ at $z$ is:
>    $$f'(z) = \lim_{\Delta z \to 0} \frac{f(z + \Delta z) - f(z)}{\Delta z}$$
>    Alternatively, it can be written as:
>    $$f'(z) = \lim_{w \to z} \frac{f(w) - f(z)}{w - z}$$
> 2. **Analyticity:** A function $f$ is analytic at a point $z_0$ if it is differentiable at $z_0$ and at every point in some neighborhood of $z_0$. A function is analytic in a domain $D$ if it is differentiable at all points in $D$.
> 3. **Entire Function:** A function that is analytic at every point in the complex plane $\mathbb{C}$ is called an entire function.
> 4. **L'Hopital's Rule:** If $f$ and $g$ are analytic at $z_0$, and $f(z_0) = g(z_0) = 0$ with $g'(z_0) \ne 0$, then:
>    $$\lim_{z \to z_0} \frac{f(z)}{g(z)} = \frac{f'(z_0)}{g'(z_0)}$$
> 5. **Approaching a Limit in the Complex Plane:** For a limit to exist as $\Delta z \to 0$, the limit must be the same along any path of approach. As illustrated in the figure below, we often analyze approach along paths parallel to the real axis ($\Delta y = 0$, $\Delta z = \Delta x$) and parallel to the imaginary axis ($\Delta x = 0$, $\Delta z = i\Delta y$).
>
> ![Figure 3.1](../../extracted_figures/figure_3_1.png)

---

## Problems 1 – 6: Derivatives using the Limit Definition

**In Problems 1–6, use Definition 3.1 to find $f'(z)$ for the given function. Show all intermediate algebraic expansions.**

#### Problem 1
Find the derivative of the function $f(z) = 9iz + 2 - 3i$ using the limit definition.

**Solution:**
We use the limit definition of the derivative:
$$f'(z) = \lim_{\Delta z \to 0} \frac{f(z + \Delta z) - f(z)}{\Delta z}$$
1. Evaluate the function at $z + \Delta z$:
   $$f(z + \Delta z) = 9i(z + \Delta z) + 2 - 3i = 9iz + 9i\Delta z + 2 - 3i$$
2. Compute the difference $f(z + \Delta z) - f(z)$:
   $$f(z + \Delta z) - f(z) = (9iz + 9i\Delta z + 2 - 3i) - (9iz + 2 - 3i) = 9i\Delta z$$
3. Form the difference quotient:
   $$\frac{f(z + \Delta z) - f(z)}{\Delta z} = \frac{9i\Delta z}{\Delta z} = 9i$$
4. Take the limit as $\Delta z \to 0$:
   $$f'(z) = \lim_{\Delta z \to 0} 9i = 9i$$
Thus, we obtain:
$$\boxed{f'(z) = 9i}$$

---

#### Problem 2
Find the derivative of the function $f(z) = 15z^2 - 4z + 1 - 3i$ using the limit definition.

**Solution:**
We use the limit definition of the derivative:
$$f'(z) = \lim_{\Delta z \to 0} \frac{f(z + \Delta z) - f(z)}{\Delta z}$$
1. Evaluate $f(z + \Delta z)$ by expanding $(z + \Delta z)^2$:
   $$f(z + \Delta z) = 15(z + \Delta z)^2 - 4(z + \Delta z) + 1 - 3i$$
   $$= 15(z^2 + 2z\Delta z + (\Delta z)^2) - 4z - 4\Delta z + 1 - 3i$$
   $$= 15z^2 + 30z\Delta z + 15(\Delta z)^2 - 4z - 4\Delta z + 1 - 3i$$
2. Compute the difference $f(z + \Delta z) - f(z)$:
   $$f(z + \Delta z) - f(z) = (15z^2 + 30z\Delta z + 15(\Delta z)^2 - 4z - 4\Delta z + 1 - 3i) - (15z^2 - 4z + 1 - 3i)$$
   $$= 30z\Delta z + 15(\Delta z)^2 - 4\Delta z$$
3. Form the difference quotient:
   $$\frac{f(z + \Delta z) - f(z)}{\Delta z} = \frac{(30z - 4)\Delta z + 15(\Delta z)^2}{\Delta z} = 30z - 4 + 15\Delta z$$
4. Take the limit as $\Delta z \to 0$:
   $$f'(z) = \lim_{\Delta z \to 0} (30z - 4 + 15\Delta z) = 30z - 4$$
Thus, we obtain:
$$\boxed{f'(z) = 30z - 4}$$

---

#### Problem 3
Find the derivative of the function $f(z) = iz^3 - 7z^2$ using the limit definition.

**Solution:**
We use the limit definition of the derivative.
1. Evaluate $f(z + \Delta z)$ by expanding $(z + \Delta z)^3$ and $(z + \Delta z)^2$:
   $$f(z + \Delta z) = i(z + \Delta z)^3 - 7(z + \Delta z)^2$$
   $$= i(z^3 + 3z^2\Delta z + 3z(\Delta z)^2 + (\Delta z)^3) - 7(z^2 + 2z\Delta z + (\Delta z)^2)$$
   $$= iz^3 + 3iz^2\Delta z + 3iz(\Delta z)^2 + i(\Delta z)^3 - 7z^2 - 14z\Delta z - 7(\Delta z)^2$$
2. Compute the difference $f(z + \Delta z) - f(z)$:
   $$f(z + \Delta z) - f(z) = (iz^3 + 3iz^2\Delta z + 3iz(\Delta z)^2 + i(\Delta z)^3 - 7z^2 - 14z\Delta z - 7(\Delta z)^2) - (iz^3 - 7z^2)$$
   $$= (3iz^2 - 14z)\Delta z + (3iz - 7)(\Delta z)^2 + i(\Delta z)^3$$
3. Form the difference quotient:
   $$\frac{f(z + \Delta z) - f(z)}{\Delta z} = 3iz^2 - 14z + (3iz - 7)\Delta z + i(\Delta z)^2$$
4. Take the limit as $\Delta z \to 0$:
   $$f'(z) = \lim_{\Delta z \to 0} \left[ 3iz^2 - 14z + (3iz - 7)\Delta z + i(\Delta z)^2 \right] = 3iz^2 - 14z$$
Thus, we obtain:
$$\boxed{f'(z) = 3iz^2 - 14z}$$

---

#### Problem 4
Find the derivative of the function $f(z) = \frac{1}{z}$ using the limit definition.

**Solution:**
We use the limit definition of the derivative for $z \ne 0$:
1. Form the difference:
   $$f(z + \Delta z) - f(z) = \frac{1}{z + \Delta z} - \frac{1}{z}$$
   Find a common denominator:
   $$= \frac{z - (z + \Delta z)}{z(z + \Delta z)} = -\frac{\Delta z}{z(z + \Delta z)}$$
2. Form the difference quotient:
   $$\frac{f(z + \Delta z) - f(z)}{\Delta z} = \frac{-\frac{\Delta z}{z(z + \Delta z)}}{\Delta z} = -\frac{1}{z(z + \Delta z)}$$
3. Take the limit as $\Delta z \to 0$:
   $$f'(z) = \lim_{\Delta z \to 0} -\frac{1}{z(z + \Delta z)} = -\frac{1}{z(z)} = -\frac{1}{z^2}$$
Thus, we obtain:
$$\boxed{f'(z) = -\frac{1}{z^2}}$$

---

#### Problem 5
Find the derivative of the function $f(z) = z - \frac{1}{z}$ using the limit definition.

**Solution:**
We use the limit definition of the derivative for $z \ne 0$:
1. Form the difference:
   $$f(z + \Delta z) - f(z) = \left( (z + \Delta z) - \frac{1}{z + \Delta z} \right) - \left( z - \frac{1}{z} \right)$$
   $$= \Delta z - \left( \frac{1}{z + \Delta z} - \frac{1}{z} \right)$$
   Using the result from Problem 4 for the rational term:
   $$= \Delta z - \left( -\frac{\Delta z}{z(z + \Delta z)} \right) = \Delta z \left( 1 + \frac{1}{z(z + \Delta z)} \right)$$
2. Form the difference quotient:
   $$\frac{f(z + \Delta z) - f(z)}{\Delta z} = 1 + \frac{1}{z(z + \Delta z)}$$
3. Take the limit as $\Delta z \to 0$:
   $$f'(z) = \lim_{\Delta z \to 0} \left( 1 + \frac{1}{z(z + \Delta z)} \right) = 1 + \frac{1}{z^2}$$
Thus, we obtain:
$$\boxed{f'(z) = 1 + \frac{1}{z^2}}$$

---

#### Problem 6
Find the derivative of the function $f(z) = -z^{-2} = -\frac{1}{z^2}$ using the limit definition.

**Solution:**
We use the limit definition of the derivative for $z \ne 0$:
1. Form the difference:
   $$f(z + \Delta z) - f(z) = -\frac{1}{(z + \Delta z)^2} - \left( -\frac{1}{z^2} \right) = \frac{1}{z^2} - \frac{1}{(z + \Delta z)^2}$$
   Find a common denominator:
   $$= \frac{(z + \Delta z)^2 - z^2}{z^2(z + \Delta z)^2} = \frac{z^2 + 2z\Delta z + (\Delta z)^2 - z^2}{z^2(z + \Delta z)^2} = \frac{2z\Delta z + (\Delta z)^2}{z^2(z + \Delta z)^2}$$
2. Form the difference quotient:
   $$\frac{f(z + \Delta z) - f(z)}{\Delta z} = \frac{\Delta z (2z + \Delta z)}{\Delta z \cdot z^2(z + \Delta z)^2} = \frac{2z + \Delta z}{z^2(z + \Delta z)^2}$$
3. Take the limit as $\Delta z \to 0$:
   $$f'(z) = \lim_{\Delta z \to 0} \frac{2z + \Delta z}{z^2(z + \Delta z)^2} = \frac{2z}{z^2(z^2)} = \frac{2z}{z^4} = \frac{2}{z^3}$$
Thus, we obtain:
$$\boxed{f'(z) = \frac{2}{z^3}}$$

---

## Problems 7 – 10: Derivatives using the Alternative Definition

**In Problems 7–10, use the alternative definition of derivative:**
$$f'(z) = \lim_{w \to z} \frac{f(w) - f(z)}{w - z}$$
**to find $f'(z)$ for the given function. Show all algebraic simplifications.**

#### Problem 7
Find the derivative of $f(z) = 5z^2 - 10z + 8$ using the alternative definition.

**Solution:**
1. Form the difference quotient:
   $$\frac{f(w) - f(z)}{w - z} = \frac{(5w^2 - 10w + 8) - (5z^2 - 10z + 8)}{w - z}$$
   $$= \frac{5(w^2 - z^2) - 10(w - z)}{w - z}$$
2. Factor the numerator:
   $$5(w^2 - z^2) - 10(w - z) = 5(w - z)(w + z) - 10(w - z) = (w - z)[5(w + z) - 10]$$
3. Simplify the quotient (for $w \ne z$):
   $$\frac{(w - z)[5(w + z) - 10]}{w - z} = 5(w + z) - 10$$
4. Take the limit as $w \to z$:
   $$f'(z) = \lim_{w \to z} \left[ 5(w + z) - 10 \right] = 5(z + z) - 10 = 10z - 10$$
Thus, we obtain:
$$\boxed{f'(z) = 10z - 10}$$

---

#### Problem 8
Find the derivative of $f(z) = z^3$ using the alternative definition.

**Solution:**
1. Form the difference quotient:
   $$\frac{f(w) - f(z)}{w - z} = \frac{w^3 - z^3}{w - z}$$
2. Factor the difference of cubes:
   $$w^3 - z^3 = (w - z)(w^2 + wz + z^2)$$
3. Simplify the quotient (for $w \ne z$):
   $$\frac{(w - z)(w^2 + wz + z^2)}{w - z} = w^2 + wz + z^2$$
4. Take the limit as $w \to z$:
   $$f'(z) = \lim_{w \to z} (w^2 + wz + z^2) = z^2 + z(z) + z^2 = 3z^2$$
Thus, we obtain:
$$\boxed{f'(z) = 3z^2}$$

---

#### Problem 9
Find the derivative of $f(z) = z^4 - z^2$ using the alternative definition.

**Solution:**
1. Form the difference quotient:
   $$\frac{f(w) - f(z)}{w - z} = \frac{(w^4 - w^2) - (z^4 - z^2)}{w - z} = \frac{(w^4 - z^4) - (w^2 - z^2)}{w - z}$$
2. Factor the difference of squares:
   $$w^4 - z^4 = (w^2 - z^2)(w^2 + z^2) = (w - z)(w + z)(w^2 + z^2)$$
   $$w^2 - z^2 = (w - z)(w + z)$$
3. Combine factors in the numerator:
   $$(w^4 - z^4) - (w^2 - z^2) = (w - z)(w + z)(w^2 + z^2) - (w - z)(w + z) = (w - z)(w + z)[w^2 + z^2 - 1]$$
4. Simplify the quotient (for $w \ne z$):
   $$\frac{(w - z)(w + z)[w^2 + z^2 - 1]}{w - z} = (w + z)(w^2 + z^2 - 1)$$
5. Take the limit as $w \to z$:
   $$f'(z) = \lim_{w \to z} (w + z)(w^2 + z^2 - 1) = (z + z)(z^2 + z^2 - 1) = (2z)(2z^2 - 1) = 4z^3 - 2z$$
Thus, we obtain:
$$\boxed{f'(z) = 4z^3 - 2z}$$

---

#### Problem 10
Find the derivative of $f(z) = \frac{1}{2iz}$ using the alternative definition.

**Solution:**
1. Form the difference quotient:
   $$\frac{f(w) - f(z)}{w - z} = \frac{\frac{1}{2iw} - \frac{1}{2iz}}{w - z}$$
2. Simplify the numerator:
   $$\frac{1}{2iw} - \frac{1}{2iz} = \frac{z - w}{2iwz} = -\frac{w - z}{2iwz}$$
3. Simplify the quotient (for $w \ne z$):
   $$\frac{-\frac{w - z}{2iwz}}{w - z} = -\frac{1}{2iwz}$$
4. Take the limit as $w \to z$:
   $$f'(z) = \lim_{w \to z} -\frac{1}{2iwz} = -\frac{1}{2iz(z)} = -\frac{1}{2iz^2}$$
Thus, we obtain:
$$\boxed{f'(z) = -\frac{1}{2iz^2}}$$

---

## Problems 11 – 18: Differentiation Rules

**In Problems 11–18, use the rules of differentiation (product rule, quotient rule, power rule, chain rule) to find $f'(z)$ for the given function. Expand and simplify all algebraic expressions.**

#### Problem 11
Find the derivative of the function:
$$f(z) = (2-i)z^5 + iz^4 - 3z^2 + i^6$$

**Solution:**
1. Identify constant coefficients and terms:
   * Coefficient of $z^5$ is $2-i$.
   * Coefficient of $z^4$ is $i$.
   * Coefficient of $z^2$ is $-3$.
   * The term $i^6$ is a constant. We can evaluate it: $i^6 = (i^2)^3 = (-1)^3 = -1$.
2. Apply the power rule $\frac{d}{dz}(z^n) = n z^{n-1}$ term-by-term:
   $$f'(z) = (2-i)\frac{d}{dz}(z^5) + i\frac{d}{dz}(z^4) - 3\frac{d}{dz}(z^2) + \frac{d}{dz}(-1)$$
   $$= (2-i)(5z^4) + i(4z^3) - 3(2z) + 0$$
3. Distribute and simplify coefficients:
   $$f'(z) = (10 - 5i)z^4 + 4iz^3 - 6z$$
Thus, we obtain:
$$\boxed{f'(z) = (10 - 5i)z^4 + 4iz^3 - 6z}$$

---

#### Problem 12
Find the derivative of the function:
$$f(z) = 5(iz)^3 - 10z^2 + 3 - 4i$$

**Solution:**
1. Simplify the first term:
   $$5(iz)^3 = 5 i^3 z^3 = 5 (-i) z^3 = -5iz^3$$
   So the function can be rewritten as:
   $$f(z) = -5iz^3 - 10z^2 + 3 - 4i$$
2. Differentiate term-by-term using the power rule:
   $$f'(z) = \frac{d}{dz}(-5iz^3) + \frac{d}{dz}(-10z^2) + \frac{d}{dz}(3-4i)$$
   $$= -5i(3z^2) - 10(2z) + 0 = -15iz^2 - 20z$$
Thus, we obtain:
$$\boxed{f'(z) = -15iz^2 - 20z}$$

---

#### Problem 13
Find the derivative of the function:
$$f(z) = (z^6 - 1)(z^2 - z + 1 - 5i)$$

**Solution:**
We apply the product rule $\frac{d}{dz}[g(z)h(z)] = g'(z)h(z) + g(z)h'(z)$:
1. Set $g(z) = z^6 - 1$ and $h(z) = z^2 - z + 1 - 5i$.
2. Compute the derivatives:
   $$g'(z) = 6z^5, \quad h'(z) = 2z - 1$$
3. Substitute into the product rule:
   $$f'(z) = 6z^5(z^2 - z + 1 - 5i) + (z^6 - 1)(2z - 1)$$
4. Expand both products:
   * First part:
     $$6z^5(z^2 - z + 1 - 5i) = 6z^7 - 6z^6 + (6 - 30i)z^5$$
   * Second part:
     $$(z^6 - 1)(2z - 1) = 2z^7 - z^6 - 2z + 1$$
5. Combine like terms:
   $$f'(z) = [6z^7 + 2z^7] + [-6z^6 - z^6] + (6 - 30i)z^5 - 2z + 1$$
   $$= 8z^7 - 7z^6 + (6 - 30i)z^5 - 2z + 1$$
Thus, we obtain:
$$\boxed{f'(z) = 8z^7 - 7z^6 + (6 - 30i)z^5 - 2z + 1}$$

---

#### Problem 14
Find the derivative of the function:
$$f(z) = (z^2 + 2z - 7i)^2(z^4 - 4iz)^3$$

**Solution:**
We use the product rule along with the chain rule:
1. Let $g(z) = (z^2 + 2z - 7i)^2$ and $h(z) = (z^4 - 4iz)^3$.
2. Compute the derivative of $g(z)$ using the chain rule:
   $$g'(z) = 2(z^2 + 2z - 7i) \cdot \frac{d}{dz}(z^2 + 2z - 7i) = 2(z^2 + 2z - 7i)(2z + 2) = 4(z+1)(z^2 + 2z - 7i)$$
3. Compute the derivative of $h(z)$ using the chain rule:
   $$h'(z) = 3(z^4 - 4iz)^2 \cdot \frac{d}{dz}(z^4 - 4iz) = 3(z^4 - 4iz)^2(4z^3 - 4i) = 12(z^3 - i)(z^4 - 4iz)^2$$
4. Substitute into the product rule:
   $$f'(z) = g'(z)h(z) + g(z)h'(z)$$
   $$= 4(z+1)(z^2 + 2z - 7i)(z^4 - 4iz)^3 + (z^2 + 2z - 7i)^2 \cdot 12(z^3 - i)(z^4 - 4iz)^2$$
   $$= 4(z+1)(z^2+2z-7i)(z^4-4iz)^3 + 12(z^3-i)(z^2+2z-7i)^2(z^4-4iz)^2$$
Thus, we obtain:
$$\boxed{f'(z) = 4(z+1)(z^2+2z-7i)(z^4-4iz)^3 + 12(z^3-i)(z^2+2z-7i)^2(z^4-4iz)^2}$$

---

#### Problem 15
Find the derivative of the function:
$$f(z) = \frac{iz^2 - 2z}{3z + 1 - i}$$

**Solution:**
We use the quotient rule $\frac{d}{dz}\left[\frac{g(z)}{h(z)}\right] = \frac{g'(z)h(z) - g(z)h'(z)}{[h(z)]^2}$ for $3z + 1 - i \ne 0$:
1. Let $g(z) = iz^2 - 2z$ and $h(z) = 3z + 1 - i$.
2. Compute the derivatives:
   $$g'(z) = 2iz - 2, \quad h'(z) = 3$$
3. Substitute into the quotient rule:
   $$f'(z) = \frac{(2iz - 2)(3z + 1 - i) - (iz^2 - 2z)(3)}{(3z + 1 - i)^2}$$
4. Expand the numerator:
   * First part:
     $$(2iz - 2)(3z + 1 - i) = (2iz)(3z) + (2iz)(1-i) - 2(3z) - 2(1-i)$$
     $$= 6iz^2 + 2iz - 2i^2z - 6z - 2 + 2i$$
     Since $i^2 = -1$:
     $$= 6iz^2 + 2iz + 2z - 6z - 2 + 2i = 6iz^2 + (2i-4)z - 2 + 2i$$
   * Second part:
     $$3(iz^2 - 2z) = 3iz^2 - 6z$$
   * Subtracting them:
     $$\text{Numerator} = 6iz^2 + (2i-4)z - 2 + 2i - (3iz^2 - 6z)$$
     $$= 3iz^2 + (2i - 4 + 6)z - 2 + 2i = 3iz^2 + (2 + 2i)z - 2 + 2i$$
5. Form the final fraction:
   $$f'(z) = \frac{3iz^2 + (2+2i)z - 2 + 2i}{(3z + 1 - i)^2}$$
Thus, we obtain:
$$\boxed{f'(z) = \frac{3iz^2 + (2+2i)z - 2 + 2i}{(3z + 1 - i)^2}}$$

---

#### Problem 16
Find the derivative of the function:
$$f(z) = \frac{-5iz^2 + 2 + i}{z^2}$$

**Solution:**
We can simplify the function by dividing each term in the numerator by the denominator:
$$f(z) = \frac{-5iz^2}{z^2} + \frac{2+i}{z^2} = -5i + (2+i)z^{-2}$$
Now, differentiate term-by-term using the power rule:
$$f'(z) = \frac{d}{dz}(-5i) + (2+i)\frac{d}{dz}(z^{-2})$$
$$= 0 + (2+i)(-2z^{-3}) = -2(2+i)z^{-3} = -\frac{4+2i}{z^3}$$
Thus, we obtain:
$$\boxed{f'(z) = -\frac{4+2i}{z^3}}$$

---

#### Problem 17
Find the derivative of the function:
$$f(z) = (z^4 - 2iz^2 + z)^{10}$$

**Solution:**
We use the chain rule:
$$\frac{d}{dz}[g(z)^n] = n g(z)^{n-1} \cdot g'(z)$$
1. Let $g(z) = z^4 - 2iz^2 + z$ and $n = 10$.
2. Compute the derivative of $g(z)$:
   $$g'(z) = \frac{d}{dz}(z^4 - 2iz^2 + z) = 4z^3 - 4iz + 1$$
3. Apply the chain rule:
   $$f'(z) = 10(z^4 - 2iz^2 + z)^9 \cdot (4z^3 - 4iz + 1)$$
Thus, we obtain:
$$\boxed{f'(z) = 10(z^4 - 2iz^2 + z)^9(4z^3 - 4iz + 1)}$$

---

#### Problem 18
Find the derivative of the function:
$$f(z) = \left( \frac{(4+2i)z}{(2-i)z^2 + 9i} \right)^3$$

**Solution:**
We use the chain rule and the quotient rule:
1. Let $w(z) = \frac{(4+2i)z}{(2-i)z^2 + 9i}$, so that $f(z) = [w(z)]^3$.
2. By the chain rule, the derivative is:
   $$f'(z) = 3[w(z)]^2 \cdot w'(z)$$
3. Compute $w'(z)$ using the quotient rule:
   * Let $g(z) = (4+2i)z \implies g'(z) = 4+2i$.
   * Let $h(z) = (2-i)z^2 + 9i \implies h'(z) = 2(2-i)z$.
   * Applying the quotient rule:
     $$w'(z) = \frac{g'(z)h(z) - g(z)h'(z)}{[h(z)]^2} = \frac{(4+2i)[(2-i)z^2 + 9i] - (4+2i)z [2(2-i)z]}{((2-i)z^2 + 9i)^2}$$
     Factor out $(4+2i)$ in the numerator:
     $$= (4+2i) \frac{[(2-i)z^2 + 9i] - 2(2-i)z^2}{((2-i)z^2 + 9i)^2} = (4+2i) \frac{9i - (2-i)z^2}{((2-i)z^2 + 9i)^2}$$
4. Combine the results:
   $$f'(z) = 3 \left( \frac{(4+2i)z}{(2-i)z^2 + 9i} \right)^2 \cdot (4+2i) \frac{9i - (2-i)z^2}{((2-i)z^2 + 9i)^2}$$
   $$= 3 \frac{(4+2i)^2 z^2}{((2-i)z^2 + 9i)^2} \cdot \frac{(4+2i)[9i - (2-i)z^2]}{((2-i)z^2 + 9i)^2} = \frac{3(4+2i)^3 z^2 [9i - (2-i)z^2]}{((2-i)z^2 + 9i)^4}$$
Thus, we obtain:
$$\boxed{f'(z) = \frac{3(4+2i)^3 z^2 [9i - (2-i)z^2]}{((2-i)z^2 + 9i)^4}}$$

---

## Problems 19 – 22: Differentiability Analysis

**In Problems 19–22, analyze the differentiability of the given function. Determine at which points (if any) the derivative exists, and explain why the function is not differentiable elsewhere.**

#### Problem 19
Let $f(z) = |z|^2$.
(a) Show that $f$ is differentiable at the origin $z = 0$, and find its derivative.
(b) Show that $f$ is not differentiable at any point $z \ne 0$.

**Solution:**
**(a) Differentiability at the origin:**
By the limit definition of the derivative at $z = 0$:
$$f'(0) = \lim_{\Delta z \to 0} \frac{f(0 + \Delta z) - f(0)}{\Delta z}$$
1. Evaluate $f(0 + \Delta z)$ and $f(0)$:
   $$f(\Delta z) = |\Delta z|^2 = \Delta z \overline{\Delta z}$$
   $$f(0) = |0|^2 = 0$$
2. Substitute into the limit:
   $$f'(0) = \lim_{\Delta z \to 0} \frac{\Delta z \overline{\Delta z} - 0}{\Delta z} = \lim_{\Delta z \to 0} \overline{\Delta z} = 0$$
Since the limit exists and equals $0$, $f(z) = |z|^2$ is differentiable at $z=0$ with:
$$\boxed{f'(0) = 0}$$

**(b) Nowhere else differentiable:**
Now let's compute the limit at an arbitrary point $z \ne 0$:
$$\lim_{\Delta z \to 0} \frac{f(z + \Delta z) - f(z)}{\Delta z} = \lim_{\Delta z \to 0} \frac{|z + \Delta z|^2 - |z|^2}{\Delta z}$$
1. Expand $|z+\Delta z|^2$:
   $$|z+\Delta z|^2 = (z + \Delta z)(\bar{z} + \overline{\Delta z}) = z\bar{z} + \bar{z}\Delta z + z\overline{\Delta z} + \Delta z \overline{\Delta z}$$
2. The difference quotient is:
   $$\frac{|z + \Delta z|^2 - |z|^2}{\Delta z} = \frac{\bar{z}\Delta z + z\overline{\Delta z} + \Delta z \overline{\Delta z}}{\Delta z} = \bar{z} + z \frac{\overline{\Delta z}}{\Delta z} + \overline{\Delta z}$$
3. Take the limit as $\Delta z \to 0$:
   * Since $\overline{\Delta z} \to 0$, the limit depends entirely on the term $z \frac{\overline{\Delta z}}{\Delta z}$.
   * Let's analyze the limit along two different paths of approach:
     * **Along the real axis (horizontal approach):** Here, $\Delta z = \Delta x + i(0) = \Delta x$. Thus, $\overline{\Delta z} = \Delta x$. The ratio is:
       $$\frac{\overline{\Delta z}}{\Delta z} = \frac{\Delta x}{\Delta x} = 1$$
       The directional limit is:
       $$L_1 = \bar{z} + z(1) = \bar{z} + z = 2\operatorname{Re}(z)$$
     * **Along the imaginary axis (vertical approach):** Here, $\Delta z = 0 + i\Delta y = i\Delta y$. Thus, $\overline{\Delta z} = -i\Delta y$. The ratio is:
       $$\frac{\overline{\Delta z}}{\Delta z} = \frac{-i\Delta y}{i\Delta y} = -1$$
       The directional limit is:
       $$L_2 = \bar{z} + z(-1) = \bar{z} - z = -2i\operatorname{Im}(z)$$
4. For the limit to exist, these two directional limits must be equal:
   $$2\operatorname{Re}(z) = -2i\operatorname{Im}(z)$$
   Since the LHS is real and the RHS is imaginary, this equation holds if and only if both parts are zero:
   $$\operatorname{Re}(z) = 0 \quad \text{and} \quad \operatorname{Im}(z) = 0 \implies z = 0$$
Since this is never satisfied for $z \ne 0$, $f(z) = |z|^2$ is **nowhere else differentiable**.

---

#### Problem 20
Show that the function defined by:
$$f(z) = \begin{cases} \frac{x^3 - y^3}{x^2+y^2} + i\frac{x^3+y^3}{x^2+y^2}, & z \ne 0 \\ 0, & z = 0 \end{cases}$$
is not differentiable at the origin $z = 0$.

**Solution:**
We check the limit for the derivative at $z=0$:
$$f'(0) = \lim_{\Delta z \to 0} \frac{f(\Delta z) - f(0)}{\Delta z} = \lim_{\Delta z \to 0} \frac{f(\Delta z)}{\Delta z}$$
Let $\Delta z = \Delta x + i\Delta y$.
1. **Approach along the x-axis ($\Delta y = 0$):**
   Here, $\Delta z = \Delta x$. Since $y = 0$:
   $$f(\Delta x) = \frac{\Delta x^3 - 0}{\Delta x^2 + 0} + i\frac{\Delta x^3 + 0}{\Delta x^2 + 0} = \Delta x + i\Delta x = \Delta x(1+i)$$
   The derivative limit along this path is:
   $$\lim_{\Delta x \to 0} \frac{f(\Delta x)}{\Delta x} = \lim_{\Delta x \to 0} \frac{\Delta x(1+i)}{\Delta x} = 1 + i$$
2. **Approach along the diagonal line $y = x$ ($\Delta y = \Delta x$):**
   Here, $\Delta z = \Delta x + i\Delta x = \Delta x(1+i)$. Substitute $y = x$ into $f$:
   $$u(\Delta x, \Delta x) = \frac{\Delta x^3 - \Delta x^3}{\Delta x^2 + \Delta x^2} = 0$$
   $$v(\Delta x, \Delta x) = \frac{\Delta x^3 + \Delta x^3}{\Delta x^2 + \Delta x^2} = \frac{2\Delta x^3}{2\Delta x^2} = \Delta x$$
   So, $f(\Delta z) = 0 + i\Delta x = i\Delta x$.
   The derivative limit along this path is:
   $$\lim_{\Delta x \to 0} \frac{f(\Delta z)}{\Delta z} = \lim_{\Delta x \to 0} \frac{i\Delta x}{\Delta x(1+i)} = \frac{i}{1+i} = \frac{i(1-i)}{(1+i)(1-i)} = \frac{i - i^2}{1 - i^2} = \frac{1+i}{2}$$
3. **Conclusion:**
   The limits along these two paths are:
   $$L_1 = 1+i \quad \text{and} \quad L_2 = \frac{1+i}{2}$$
   Since the limit depends on the path of approach ($L_1 \ne L_2$), the limit does not exist. Thus, $f$ is not differentiable at $z = 0$.

---

#### Problem 21
Show that the function $f(z) = \bar{z}$ is nowhere differentiable.

**Solution:**
We evaluate the limit of the difference quotient at an arbitrary point $z$:
$$f'(z) = \lim_{\Delta z \to 0} \frac{\overline{z + \Delta z} - \bar{z}}{\Delta z} = \lim_{\Delta z \to 0} \frac{\bar{z} + \overline{\Delta z} - \bar{z}}{\Delta z} = \lim_{\Delta z \to 0} \frac{\overline{\Delta z}}{\Delta z}$$
Let $\Delta z = \Delta x + i\Delta y$, so $\overline{\Delta z} = \Delta x - i\Delta y$.
1. **Approach along the real axis ($\Delta y = 0$):**
   Here, $\Delta z = \Delta x$, so $\overline{\Delta z} = \Delta x$. The ratio is:
   $$\lim_{\Delta x \to 0} \frac{\Delta x}{\Delta x} = 1$$
2. **Approach along the imaginary axis ($\Delta x = 0$):**
   Here, $\Delta z = i\Delta y$, so $\overline{\Delta z} = -i\Delta y$. The ratio is:
   $$\lim_{\Delta y \to 0} \frac{-i\Delta y}{i\Delta y} = -1$$
Since the limits along these two paths are different ($1 \ne -1$), the limit does not exist. Thus, $f(z) = \bar{z}$ is nowhere differentiable.

---

#### Problem 22
Show that the function $f(z) = |z|$ is nowhere differentiable.

**Solution:**
We evaluate the limit of the difference quotient.
1. **At the origin $z = 0$:**
   $$f'(0) = \lim_{\Delta z \to 0} \frac{|\Delta z| - |0|}{\Delta z} = \lim_{\Delta z \to 0} \frac{|\Delta z|}{\Delta z}$$
   If we express $\Delta z$ in polar form as $\Delta z = \rho e^{i\phi}$, then:
   $$\lim_{\Delta z \to 0} \frac{|\Delta z|}{\Delta z} = \lim_{\rho \to 0} \frac{\rho}{\rho e^{i\phi}} = e^{-i\phi}$$
   Since this value depends on the angle of approach $\phi$, the limit does not exist. Thus, $f$ is not differentiable at $z = 0$.
2. **At any point $z \ne 0$:**
   We can express the limit by approaching along two paths:
   * **Radial approach:** Approach $z$ along the line passing through the origin and $z$. Here, $\Delta z = e^{i\theta}\Delta r$, where $\theta = \arg(z)$.
     $$|z + \Delta z| - |z| = |z + e^{i\theta}\Delta r| - |z| = |e^{i\theta}(r + \Delta r)| - r = (r + \Delta r) - r = \Delta r$$
     So the difference quotient along this path is:
     $$\frac{|z + \Delta z| - |z|}{\Delta z} = \frac{\Delta r}{e^{i\theta}\Delta r} = e^{-i\theta}$$
   * **Tangential approach:** Approach $z$ along the circular arc of radius $r$. Here, $\Delta z = i e^{i\theta}\Delta s$.
     Since the approach is along the circle of radius $r$, the modulus is constant: $|z + \Delta z| = |z| = r$.
     $$|z + \Delta z| - |z| = r - r = 0$$
     So the difference quotient along this path is:
     $$\frac{|z + \Delta z| - |z|}{\Delta z} = \frac{0}{i e^{i\theta}\Delta s} = 0$$
Since $e^{-i\theta} \ne 0$ for all $z \ne 0$, the limits along these paths differ. Thus, $f(z) = |z|$ is nowhere differentiable.

---

## Problems 23 – 26: L'Hopital's Rule

**In Problems 23–26, use L'Hopital's rule to compute the given limit. Explain why the conditions for L'Hopital's rule are met.**

#### Problem 23
Evaluate the limit:
$$\lim_{z \to i} \frac{z^7 + i}{z^{14} + 1}$$

**Solution:**
1. **Check for indeterminacy:**
   * Let $f(z) = z^7 + i$. Evaluating at $z = i$:
     $$f(i) = i^7 + i = (i^2)^3 i + i = (-1)^3 i + i = -i + i = 0$$
   * Let $g(z) = z^{14} + 1$. Evaluating at $z = i$:
     $$g(i) = i^{14} + 1 = (i^2)^7 + 1 = (-1)^7 + 1 = -1 + 1 = 0$$
   This yields a $0/0$ indeterminate form.
2. **Check for analyticity:**
   Since $f(z)$ and $g(z)$ are polynomials, they are entire (analytic everywhere). Thus, they are analytic in a neighborhood of $z_0 = i$.
3. **Check the derivative of the denominator:**
   $$g'(z) = 14z^{13} \implies g'(i) = 14 i^{13} = 14(i^2)^6 i = 14(-1)^6 i = 14i \ne 0$$
4. **Apply L'Hopital's rule:**
   $$\lim_{z \to i} \frac{f(z)}{g(z)} = \lim_{z \to i} \frac{f'(z)}{g'(z)} = \lim_{z \to i} \frac{7z^6}{14z^{13}} = \lim_{z \to i} \frac{1}{2z^7}$$
5. **Evaluate the limit:**
   $$\lim_{z \to i} \frac{1}{2z^7} = \frac{1}{2i^7} = \frac{1}{2(-i)} = -\frac{1}{2i} = \frac{i}{2}$$
Thus, we obtain:
$$\boxed{\lim_{z \to i} \frac{z^7 + i}{z^{14} + 1} = \frac{1}{2}i}$$

---

#### Problem 24
Evaluate the limit:
$$\lim_{z \to \sqrt{2}+i\sqrt{2}} \frac{z^4 + 16}{z^2 - 2\sqrt{2}z + 4}$$

**Solution:**
1. **Check for indeterminacy:**
   Let $z_0 = \sqrt{2}+i\sqrt{2} = 2 e^{i\pi/4}$.
   * Numerator: $f(z) = z^4 + 16 \implies f(z_0) = (2 e^{i\pi/4})^4 + 16 = 16 e^{i\pi} + 16 = -16 + 16 = 0$.
   * Denominator: $g(z) = z^2 - 2\sqrt{2}z + 4$.
     $$g(z_0) = (\sqrt{2}+i\sqrt{2})^2 - 2\sqrt{2}(\sqrt{2}+i\sqrt{2}) + 4$$
     $$= (2 + 4i - 2) - (4 + 4i) + 4 = 4i - 4 - 4i + 4 = 0$$
   This yields a $0/0$ indeterminate form.
2. **Apply L'Hopital's rule:**
   Since both functions are polynomials, they are entire.
   $$f'(z) = 4z^3, \quad g'(z) = 2z - 2\sqrt{2}$$
   Evaluate the derivative of the denominator at $z_0$:
   $$g'(z_0) = 2(\sqrt{2}+i\sqrt{2}) - 2\sqrt{2} = 2i\sqrt{2} \ne 0$$
   Thus, we can apply the rule:
   $$\lim_{z \to z_0} \frac{f(z)}{g(z)} = \frac{f'(z_0)}{g'(z_0)} = \frac{4z_0^3}{2z_0 - 2\sqrt{2}} = \frac{4(2e^{i\pi/4})^3}{2i\sqrt{2}} = \frac{32e^{i3\pi/4}}{2i\sqrt{2}}$$
3. **Evaluate the expression:**
   $$e^{i3\pi/4} = \cos\left(\frac{3\pi}{4}\right) + i\sin\left(\frac{3\pi}{4}\right) = -\frac{1}{\sqrt{2}} + i\frac{1}{\sqrt{2}}$$
   Substitute this back:
   $$\text{Limit} = \frac{32 \left( -\frac{1}{\sqrt{2}} + i\frac{1}{\sqrt{2}} \right)}{2i\sqrt{2}} = \frac{16 \left( -1 + i \right)}{2i} = \frac{8(-1+i)}{i} = \frac{-8+8i}{i} = 8 + 8i$$
Thus, we obtain:
$$\boxed{\lim_{z \to \sqrt{2}+i\sqrt{2}} \frac{z^4 + 16}{z^2 - 2\sqrt{2}z + 4} = 8 + 8i}$$

---

#### Problem 25
Evaluate the limit:
$$\lim_{z \to 1+i} \frac{z^5 + 4z}{z^2 - 2z + 2}$$

**Solution:**
1. **Check for indeterminacy:**
   Let $z_0 = 1+i$.
   * Numerator: $f(z) = z^5 + 4z$. Note that $(1+i)^2 = 2i$, so $(1+i)^4 = (2i)^2 = -4$.
     $$f(1+i) = (1+i)^5 + 4(1+i) = -4(1+i) + 4(1+i) = 0$$
   * Denominator: $g(z) = z^2 - 2z + 2$.
     $$g(1+i) = (1+i)^2 - 2(1+i) + 2 = 2i - 2 - 2i + 2 = 0$$
   This yields a $0/0$ indeterminate form.
2. **Apply L'Hopital's rule:**
   $$f'(z) = 5z^4 + 4, \quad g'(z) = 2z - 2$$
   Evaluate the derivative of the denominator at $z_0$:
   $$g'(1+i) = 2(1+i) - 2 = 2i \ne 0$$
   Applying L'Hopital's rule:
   $$\lim_{z \to 1+i} \frac{z^5 + 4z}{z^2 - 2z + 2} = \frac{5z_0^4 + 4}{2z_0 - 2} = \frac{5(-4) + 4}{2i} = \frac{-16}{2i} = -\frac{8}{i} = 8i$$
Thus, we obtain:
$$\boxed{\lim_{z \to 1+i} \frac{z^5 + 4z}{z^2 - 2z + 2} = 8i}$$

---

#### Problem 26
Evaluate the limit:
$$\lim_{z \to \sqrt{2}i} \frac{z(z^3 + 5z^2 + 2z + 10)}{z^5 + 2z^3}$$

**Solution:**
We can evaluate this limit by factoring and simplifying the expression algebraically first.
1. Factor the numerator:
   $$z^3 + 5z^2 + 2z + 10 = z^2(z+5) + 2(z+5) = (z^2+2)(z+5)$$
   So the numerator is:
   $$z(z^2+2)(z+5)$$
2. Factor the denominator:
   $$z^5 + 2z^3 = z^3(z^2+2)$$
3. Write the simplified fraction for $z \ne \sqrt{2}i$ (which means $z^2+2 \ne 0$):
   $$\frac{z(z^2+2)(z+5)}{z^3(z^2+2)} = \frac{z+5}{z^2}$$
4. Take the limit by direct substitution:
   $$\lim_{z \to \sqrt{2}i} \frac{z+5}{z^2} = \frac{\sqrt{2}i + 5}{(\sqrt{2}i)^2} = \frac{5 + \sqrt{2}i}{-2} = -\frac{5}{2} - \frac{\sqrt{2}}{2}i$$
Thus, we obtain:
$$\boxed{\lim_{z \to \sqrt{2}i} \frac{z(z^3 + 5z^2 + 2z + 10)}{z^5 + 2z^3} = -\frac{5}{2} - \frac{\sqrt{2}}{2}i}$$

---

## Problems 27 – 30: Singular Points (Non-Analytic Points)

**In Problems 27–30, determine the points at which the given function is not analytic (singular points). Explain your reasoning.**

*Recall that a rational function $f(z) = P(z)/Q(z)$ is analytic everywhere except at the points where the denominator $Q(z) = 0$.*

#### Problem 27
Find the singular points of the function:
$$f(z) = \frac{iz^2 - 2z}{3z + 1 - i}$$

**Solution:**
The function is a rational function. It fails to be analytic only where the denominator is equal to zero:
$$3z + 1 - i = 0$$
Solve for $z$:
$$3z = -1 + i \implies z = -\frac{1}{3} + \frac{1}{3}i$$
Thus, the singular point is:
$$\boxed{z = -\frac{1}{3} + \frac{1}{3}i}$$

---

#### Problem 28
Find the singular points of the function:
$$f(z) = \frac{-5iz^2 + 2 + i}{z^2}$$

**Solution:**
The function is rational. It fails to be analytic where the denominator is zero:
$$z^2 = 0 \implies z = 0$$
Thus, the singular point is:
$$\boxed{z = 0}$$

---

#### Problem 29
Find the singular points of the function:
$$f(z) = (z^4 - 2iz^2 + z)^{10}$$

**Solution:**
This function is a polynomial of degree 40. Polynomials are entire functions, meaning they are differentiable (and therefore analytic) at every point in the complex plane $\mathbb{C}$.
Thus, there are no singular points:
$$\boxed{\text{No singular points (analytic for all } z \in \mathbb{C})}$$

---

#### Problem 30
Find the singular points of the function:
$$f(z) = \left( \frac{(4+2i)z}{(2-i)z^2 + 9i} \right)^3$$

**Solution:**
The function fails to be analytic where the denominator of the inner expression is zero:
$$(2-i)z^2 + 9i = 0$$
1. Solve for $z^2$:
   $$(2-i)z^2 = -9i \implies z^2 = \frac{-9i}{2-i}$$
2. Rationalize the denominator by multiplying the numerator and denominator by the conjugate $2+i$:
   $$z^2 = \frac{-9i(2+i)}{(2-i)(2+i)} = \frac{-18i - 9i^2}{2^2 - i^2} = \frac{9 - 18i}{4 + 1} = \frac{9 - 18i}{5} = \frac{9}{5} - \frac{18}{5}i$$
3. So $z^2 = 1.8 - 3.6i$.
   We can express this in polar form $z^2 = r e^{i\theta}$:
   * $r = \sqrt{(1.8)^2 + (-3.6)^2} = \sqrt{3.24 + 12.96} = \sqrt{16.2} \approx 4.025$
   * $\theta = \arctan\left(\frac{-3.6}{1.8}\right) = \arctan(-2) \approx -1.107 \text{ rad}$
   The square roots are given by:
   $$z = \pm \sqrt{r} e^{i\theta/2} \approx \pm \sqrt{4.025} e^{-i 0.5536} \approx \pm 2.006 (0.8507 - 0.5257i) \approx \pm (1.706 - 1.055i)$$
4. Alternatively, we can write the exact expression as:
   $$z = \pm \sqrt{\frac{9}{5} - \frac{18}{5}i} = \pm \frac{3}{\sqrt{5}}\sqrt{1-2i}$$
Thus, the singular points are:
$$\boxed{z = \pm \frac{3}{\sqrt{5}}\sqrt{1-2i}}$$

---

## Focus on Concepts (Problems 31 – 35)

#### Problem 31
If a complex function $f$ is differentiable at a single point $z_0$ in the complex plane, is its derivative $f'(z)$ continuous at $z_0$? Explain.

**Solution:**
**No.** For a function to have a continuous derivative at $z_0$, the derivative $f'(z)$ must be defined in a neighborhood around $z_0$ so that the limit $\lim_{z \to z_0} f'(z) = f'(z_0)$ can be analyzed.
If $f$ is only assumed to be differentiable at a single point $z_0$, then $f'(z)$ is not defined at any other point in the neighborhood of $z_0$. Since the derivative function $f'$ does not exist at points arbitrarily close to $z_0$, it cannot be continuous at $z_0$.
*Example:* The function $f(z) = |z|^2$ is differentiable only at $z = 0$, where $f'(0) = 0$. Since $f'(z)$ does not exist for any $z \ne 0$, $f'$ is not continuous at $z=0$.

---

#### Problem 32
Let $f(z) = u(x, y) + i v(x, y)$ be a complex function.
(a) Verify that for $f(z) = z^2$, the partial derivatives of $u$ and $v$ satisfy $u_x = v_y$ and $u_y = -v_x$. Verify that $f'(z) = u_x + i v_x$.
(b) Repeat part (a) for the function $f(z) = 3iz + 2$.
(c) State a conjecture based on these results.

**Solution:**
**(a) For $f(z) = z^2$:**
1. Express in Cartesian coordinates:
   $$f(z) = (x+iy)^2 = x^2 - y^2 + 2ixy \implies u(x,y) = x^2 - y^2, \quad v(x,y) = 2xy$$
2. Compute the first-order partial derivatives:
   * $u_x = 2x$
   * $u_y = -2y$
   * $v_x = 2y$
   * $v_y = 2x$
3. Verify C-R equations:
   * $u_x = 2x = v_y \implies u_x = v_y$ (Verified).
   * $u_y = -2y = -v_x \implies u_y = -v_x$ (Verified).
4. Verify derivative formula:
   * $f'(z) = 2z = 2(x+iy) = 2x + 2iy$.
   * $u_x + i v_x = 2x + i(2y) = 2x + 2iy$.
   Thus, $f'(z) = u_x + i v_x$ holds.

**(b) For $f(z) = 3iz + 2$:**
1. Express in Cartesian coordinates:
   $$f(z) = 3i(x+iy) + 2 = 3ix - 3y + 2 = (2 - 3y) + i(3x) \implies u(x,y) = 2 - 3y, \quad v(x,y) = 3x$$
2. Compute the partial derivatives:
   * $u_x = 0$
   * $u_y = -3$
   * $v_x = 3$
   * $v_y = 0$
3. Verify C-R equations:
   * $u_x = 0 = v_y \implies u_x = v_y$ (Verified).
   * $u_y = -3 = -v_x \implies u_y = -v_x$ (Verified).
4. Verify derivative formula:
   * $f'(z) = 3i$.
   * $u_x + i v_x = 0 + i(3) = 3i$.
   Thus, $f'(z) = u_x + i v_x$ holds.

**(c) Conjecture:**
For any complex function $f(z) = u(x,y) + iv(x,y)$ that is differentiable at a point $z$, the real and imaginary parts satisfy the Cauchy-Riemann equations:
$$u_x = v_y \quad \text{and} \quad u_y = -v_x$$
Furthermore, the derivative of $f(z)$ can be computed directly using the partial derivatives:
$$f'(z) = u_x + i v_x$$

---

#### Problem 33
Provide a guide to prove L'Hopital's rule:
If $f$ and $g$ are analytic at $z_0$, and $f(z_0) = g(z_0) = 0$ with $g'(z_0) \ne 0$, then $\lim_{z \to z_0} \frac{f(z)}{g(z)} = \frac{f'(z_0)}{g'(z_0)}$.

**Solution:**
Since $f$ and $g$ are analytic at $z_0$, they are differentiable in a neighborhood of $z_0$, which implies they are continuous at $z_0$.
We are given $f(z_0) = 0$ and $g(z_0) = 0$.
1. We can write the quotient $\frac{f(z)}{g(z)}$ for $z \ne z_0$ by subtracting the zero values $f(z_0)$ and $g(z_0)$:
   $$\frac{f(z)}{g(z)} = \frac{f(z) - f(z_0)}{g(z) - g(z_0)}$$
2. Divide the numerator and denominator by $z - z_0$ (which is nonzero since $z \ne z_0$):
   $$\frac{f(z)}{g(z)} = \frac{\frac{f(z) - f(z_0)}{z - z_0}}{\frac{g(z) - g(z_0)}{z - z_0}}$$
3. Take the limit as $z \to z_0$ of both sides. Using the limit quotient rule:
   $$\lim_{z \to z_0} \frac{f(z)}{g(z)} = \frac{\lim_{z \to z_0} \frac{f(z) - f(z_0)}{z - z_0}}{\lim_{z \to z_0} \frac{g(z) - g(z_0)}{z - z_0}}$$
4. By definition of the derivative, since $f$ and $g$ are differentiable at $z_0$:
   $$\lim_{z \to z_0} \frac{f(z) - f(z_0)}{z - z_0} = f'(z_0) \quad \text{and} \quad \lim_{z \to z_0} \frac{g(z) - g(z_0)}{z - z_0} = g'(z_0)$$
5. Since $g'(z_0) \ne 0$, the quotient of the limits exists, and we get:
   $$\lim_{z \to z_0} \frac{f(z)}{g(z)} = \frac{f'(z_0)}{g'(z_0)}$$
This completes the proof.

---

#### Problem 34
Prove the Product Rule for complex differentiation:
(a) Show that $f(z+\Delta z)g(z+\Delta z) - f(z)g(z) = [f(z+\Delta z) - f(z)]g(z+\Delta z) + f(z)[g(z+\Delta z) - g(z)]$.
(b) Explain why $\lim_{\Delta z \to 0} g(z+\Delta z) = g(z)$.
(c) Complete the proof.

**Solution:**
**(a) Algebraic Identity Verification:**
We start with the RHS and expand it:
$$\text{RHS} = [f(z+\Delta z) - f(z)]g(z+\Delta z) + f(z)[g(z+\Delta z) - g(z)]$$
$$= f(z+\Delta z)g(z+\Delta z) - f(z)g(z+\Delta z) + f(z)g(z+\Delta z) - f(z)g(z)$$
Notice that the terms $-f(z)g(z+\Delta z)$ and $+f(z)g(z+\Delta z)$ cancel out:
$$= f(z+\Delta z)g(z+\Delta z) - f(z)g(z) = \text{LHS}$$
This proves the identity.

**(b) Continuity of $g(z)$:**
We are given that $g$ is differentiable at $z$. Since differentiability at a point implies continuity at that point, the function $g$ must be continuous at $z$.
By definition of continuity:
$$\lim_{\Delta z \to 0} g(z + \Delta z) = g(z)$$

**(c) Completion of the Proof:**
1. Form the difference quotient for the product function $F(z) = f(z)g(z)$:
   $$\frac{F(z+\Delta z) - F(z)}{\Delta z} = \frac{f(z+\Delta z)g(z+\Delta z) - f(z)g(z)}{\Delta z}$$
2. Substitute the algebraic identity from part (a):
   $$\frac{F(z+\Delta z) - F(z)}{\Delta z} = \frac{[f(z+\Delta z) - f(z)]g(z+\Delta z) + f(z)[g(z+\Delta z) - g(z)]}{\Delta z}$$
   $$= \left( \frac{f(z+\Delta z) - f(z)}{\Delta z} \right) g(z+\Delta z) + f(z) \left( \frac{g(z+\Delta z) - g(z)}{\Delta z} \right)$$
3. Take the limit of the expression as $\Delta z \to 0$:
   $$F'(z) = \lim_{\Delta z \to 0} \left[ \left( \frac{f(z+\Delta z) - f(z)}{\Delta z} \right) g(z+\Delta z) + f(z) \left( \frac{g(z+\Delta z) - g(z)}{\Delta z} \right) \right]$$
4. Apply limit theorems (sum and product of limits):
   $$= \left( \lim_{\Delta z \to 0} \frac{f(z+\Delta z) - f(z)}{\Delta z} \right) \left( \lim_{\Delta z \to 0} g(z+\Delta z) \right) + f(z) \left( \lim_{\Delta z \to 0} \frac{g(z+\Delta z) - g(z)}{\Delta z} \right)$$
5. Using the definitions of $f'(z)$ and $g'(z)$, and the continuity result from (b):
   $$F'(z) = f'(z)g(z) + f(z)g'(z)$$
This completes the proof.

---

#### Problem 35
Polar form proof for the non-differentiability of $f(z) = \bar{z}$:
(a) Let $\Delta z = |\Delta z|(\cos\theta + i\sin\theta)$ and express $\frac{\overline{\Delta z}}{\Delta z}$ in polar form.
(b) Use this to explain why $f(z) = \bar{z}$ is nowhere differentiable.

**Solution:**
**(a) Polar Form Expression:**
1. Let $\Delta z = |\Delta z|e^{i\theta} = |\Delta z|(\cos\theta + i\sin\theta)$.
2. Then the conjugate is $\overline{\Delta z} = |\Delta z|e^{-i\theta} = |\Delta z|(\cos\theta - i\sin\theta)$.
3. Form the ratio:
   $$\frac{\overline{\Delta z}}{\Delta z} = \frac{|\Delta z|e^{-i\theta}}{|\Delta z|e^{i\theta}} = e^{-2i\theta} = \cos 2\theta - i\sin 2\theta$$

**(b) Explanation of Nowhere Differentiability:**
The derivative of $f(z) = \bar{z}$ at any point requires the existence of the limit:
$$\lim_{\Delta z \to 0} \frac{\overline{\Delta z}}{\Delta z}$$
Using the result from part (a), this limit is:
$$\lim_{\Delta z \to 0} e^{-2i\theta}$$
This expression depends entirely on the angle of approach $\theta$:
* If we approach along the real axis ($\theta = 0$), the limit is $e^0 = 1$.
* If we approach along the line $y = x$ ($\theta = \pi/4$), the limit is $e^{-i\pi/2} = -i$.
* If we approach along the imaginary axis ($\theta = \pi/2$), the limit is $e^{-i\pi} = -1$.
Since the limit yields different values depending on the direction of approach, the limit does not exist. Thus, $f(z) = \bar{z}$ is not differentiable at any point.
