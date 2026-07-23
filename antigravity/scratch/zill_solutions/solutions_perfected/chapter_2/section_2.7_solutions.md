# Complex Analysis — Dennis G. Zill, 2nd Edition
## Chapter 2 · Section 2.7 — Derivatives
### Problems 1 – 30 · Complete Solutions

---

> **Key Concepts of Complex Derivatives**
>
> 1. **Definition of Derivative:** Let $f$ be a complex function defined in a neighborhood of $z_0$. The derivative of $f$ at $z_0$, denoted by $f'(z_0)$, is:
>    $$f'(z_0) = \lim_{\Delta z \to 0} \frac{f(z_0 + \Delta z) - f(z_0)}{\Delta z}$$
>    provided this limit exists.
> 
> ![Figure 2.59](../../extracted_figures/figure_2_59.png)
>
> 2. **Analyticity:** A function $f$ is analytic at a point $z_0$ if it is differentiable at $z_0$ and at every point in some neighborhood of $z_0$. A function is entire if it is analytic at every point in the complex plane $\mathbb{C}$.
> 
> ![Figure 2.60](../../extracted_figures/figure_2_60.png)
>
> ![Figure 2.61](../../extracted_figures/figure_2_61.png)
>
> ![Figure 2.62](../../extracted_figures/figure_2_62.png)
>
> 3. **Rules of Differentiation:** The standard rules of real calculus carry over to complex differentiation:
>    * Constant Rule: $\frac{d}{dz}[c] = 0$
>    * Power Rule: $\frac{d}{dz}[z^n] = n z^{n-1}$ (for integer $n$)
>    * Sum Rule: $\frac{d}{dz}[f(z) + g(z)] = f'(z) + g'(z)$
>    * Product Rule: $\frac{d}{dz}[f(z)g(z)] = f(z)g'(z) + f'(z)g(z)$
>    * Quotient Rule: $\frac{d}{dz}\left[\frac{f(z)}{g(z)}\right] = \frac{g(z)f'(z) - f(z)g'(z)}{[g(z)]^2}$
>    * Chain Rule: $\frac{d}{dz}[f(g(z))] = f'(g(z)) g'(z)$

---

## Problems 1 – 8: Differentiation using the Limit Definition

**Use the limit definition to find the derivative of the given function $f$.**

#### Problem 1
Find the derivative of $f(z) = z^2 - 5z$.

**Solution:**
We use the limit definition:
$$f'(z) = \lim_{\Delta z \to 0} \frac{f(z + \Delta z) - f(z)}{\Delta z}$$
1. Expand $f(z + \Delta z)$:
   $$f(z + \Delta z) = (z + \Delta z)^2 - 5(z + \Delta z) = z^2 + 2z\Delta z + (\Delta z)^2 - 5z - 5\Delta z$$
2. Compute the numerator:
   $$f(z + \Delta z) - f(z) = [z^2 + 2z\Delta z + (\Delta z)^2 - 5z - 5\Delta z] - [z^2 - 5z]$$
   $$= 2z\Delta z + (\Delta z)^2 - 5\Delta z = \Delta z(2z + \Delta z - 5)$$
3. Divide by $\Delta z$ (for $\Delta z \ne 0$):
   $$\frac{f(z + \Delta z) - f(z)}{\Delta z} = 2z + \Delta z - 5$$
4. Evaluate the limit:
   $$f'(z) = \lim_{\Delta z \to 0} (2z + \Delta z - 5) = 2z - 5$$
Thus, $f'(z) = \boxed{2z - 5}$.

---

#### Problem 2
Find the derivative of $f(z) = 1/z$.

**Solution:**
1. Using the limit definition:
   $$f'(z) = \lim_{\Delta z \to 0} \frac{\frac{1}{z + \Delta z} - \frac{1}{z}}{\Delta z}$$
2. Simplify the numerator:
   $$\frac{1}{z + \Delta z} - \frac{1}{z} = \frac{z - (z + \Delta z)}{z(z + \Delta z)} = \frac{-\Delta z}{z(z + \Delta z)}$$
3. Divide by $\Delta z$:
   $$\frac{f(z + \Delta z) - f(z)}{\Delta z} = \frac{-1}{z(z + \Delta z)}$$
4. Evaluate the limit:
   $$f'(z) = \lim_{\Delta z \to 0} \frac{-1}{z(z + \Delta z)} = -\frac{1}{z^2}$$
Thus, $f'(z) = \boxed{-\frac{1}{z^2}}$ (for $z \ne 0$).

---

#### Problem 3
Find the derivative of $f(z) = z^3 - z^2 + z$.

**Solution:**
1. Expand $f(z + \Delta z)$:
   $$f(z + \Delta z) = (z + \Delta z)^3 - (z + \Delta z)^2 + (z + \Delta z)$$
   $$= z^3 + 3z^2\Delta z + 3z(\Delta z)^2 + (\Delta z)^3 - (z^2 + 2z\Delta z + (\Delta z)^2) + z + \Delta z$$
2. Compute the numerator:
   $$f(z + \Delta z) - f(z) = 3z^2\Delta z + 3z(\Delta z)^2 + (\Delta z)^3 - 2z\Delta z - (\Delta z)^2 + \Delta z$$
   $$= \Delta z(3z^2 + 3z\Delta z + (\Delta z)^2 - 2z - \Delta z + 1)$$
3. Divide by $\Delta z$:
   $$\frac{f(z + \Delta z) - f(z)}{\Delta z} = 3z^2 + 3z\Delta z + (\Delta z)^2 - 2z - \Delta z + 1$$
4. Evaluate the limit:
   $$f'(z) = \lim_{\Delta z \to 0} (3z^2 + 3z\Delta z + (\Delta z)^2 - 2z - \Delta z + 1) = 3z^2 - 2z + 1$$
Thus, $f'(z) = \boxed{3z^2 - 2z + 1}$.

---

#### Problem 4
Find the derivative of $f(z) = \frac{z}{z + 1}$.

**Solution:**
1. Using the limit definition:
   $$f'(z) = \lim_{\Delta z \to 0} \frac{\frac{z + \Delta z}{z + \Delta z + 1} - \frac{z}{z + 1}}{\Delta z}$$
2. Simplify the numerator:
   $$\frac{(z + \Delta z)(z + 1) - z(z + \Delta z + 1)}{(z + \Delta z + 1)(z + 1)} = \frac{z^2 + z + z\Delta z + \Delta z - z^2 - z\Delta z - z}{(z + \Delta z + 1)(z + 1)} = \frac{\Delta z}{(z + \Delta z + 1)(z + 1)}$$
3. Divide by $\Delta z$:
   $$\frac{f(z + \Delta z) - f(z)}{\Delta z} = \frac{1}{(z + \Delta z + 1)(z + 1)}$$
4. Evaluate the limit:
   $$f'(z) = \lim_{\Delta z \to 0} \frac{1}{(z + \Delta z + 1)(z + 1)} = \frac{1}{(z + 1)^2}$$
Thus, $f'(z) = \boxed{\frac{1}{(z + 1)^2}}$ (for $z \ne -1$).

---

#### Problem 5
Find the derivative of $f(z) = z^4$.

**Solution:**
1. Expand $f(z + \Delta z)$ using binomial theorem:
   $$(z + \Delta z)^4 = z^4 + 4z^3\Delta z + 6z^2(\Delta z)^2 + 4z(\Delta z)^3 + (\Delta z)^4$$
2. Compute the numerator:
   $$f(z + \Delta z) - f(z) = 4z^3\Delta z + 6z^2(\Delta z)^2 + 4z(\Delta z)^3 + (\Delta z)^4 = \Delta z(4z^3 + 6z^2\Delta z + 4z(\Delta z)^2 + (\Delta z)^3)$$
3. Divide by $\Delta z$:
   $$\frac{f(z + \Delta z) - f(z)}{\Delta z} = 4z^3 + 6z^2\Delta z + 4z(\Delta z)^2 + (\Delta z)^3$$
4. Evaluate the limit:
   $$f'(z) = \lim_{\Delta z \to 0} (4z^3 + 6z^2\Delta z + 4z(\Delta z)^2 + (\Delta z)^3) = 4z^3$$
Thus, $f'(z) = \boxed{4z^3}$.

---

#### Problem 6
Find the derivative of $f(z) = 1/z^2$.

**Solution:**
1. Using the limit definition:
   $$f'(z) = \lim_{\Delta z \to 0} \frac{\frac{1}{(z + \Delta z)^2} - \frac{1}{z^2}}{\Delta z}$$
2. Simplify the numerator:
   $$\frac{z^2 - (z + \Delta z)^2}{z^2(z + \Delta z)^2} = \frac{z^2 - z^2 - 2z\Delta z - (\Delta z)^2}{z^2(z + \Delta z)^2} = \frac{-\Delta z(2z + \Delta z)}{z^2(z + \Delta z)^2}$$
3. Divide by $\Delta z$:
   $$\frac{f(z + \Delta z) - f(z)}{\Delta z} = \frac{-(2z + \Delta z)}{z^2(z + \Delta z)^2}$$
4. Evaluate the limit:
   $$f'(z) = \lim_{\Delta z \to 0} \frac{-(2z + \Delta z)}{z^2(z + \Delta z)^2} = \frac{-2z}{z^4} = -\frac{2}{z^3}$$
Thus, $f'(z) = \boxed{-\frac{2}{z^3}}$ (for $z \ne 0$).

---

#### Problem 7
Find the derivative of $f(z) = iz^2 - 2z$.

**Solution:**
1. Expand $f(z + \Delta z)$:
   $$f(z + \Delta z) = i(z + \Delta z)^2 - 2(z + \Delta z) = iz^2 + 2iz\Delta z + i(\Delta z)^2 - 2z - 2\Delta z$$
2. Compute the numerator:
   $$f(z + \Delta z) - f(z) = 2iz\Delta z + i(\Delta z)^2 - 2\Delta z = \Delta z(2iz + i\Delta z - 2)$$
3. Divide by $\Delta z$:
   $$\frac{f(z + \Delta z) - f(z)}{\Delta z} = 2iz + i\Delta z - 2$$
4. Evaluate the limit:
   $$f'(z) = \lim_{\Delta z \to 0} (2iz + i\Delta z - 2) = 2iz - 2$$
Thus, $f'(z) = \boxed{2iz - 2}$.

---

#### Problem 8
Find the derivative of $f(z) = \frac{1}{z + i}$.

**Solution:**
1. Using the limit definition:
   $$f'(z) = \lim_{\Delta z \to 0} \frac{\frac{1}{z + \Delta z + i} - \frac{1}{z + i}}{\Delta z}$$
2. Simplify the numerator:
   $$\frac{(z + i) - (z + \Delta z + i)}{(z + \Delta z + i)(z + i)} = \frac{-\Delta z}{(z + \Delta z + i)(z + i)}$$
3. Divide by $\Delta z$:
   $$\frac{f(z + \Delta z) - f(z)}{\Delta z} = \frac{-1}{(z + \Delta z + i)(z + i)}$$
4. Evaluate the limit:
   $$f'(z) = \lim_{\Delta z \to 0} \frac{-1}{(z + \Delta z + i)(z + i)} = -\frac{1}{(z + i)^2}$$
Thus, $f'(z) = \boxed{-\frac{1}{(z + i)^2}}$ (for $z \ne -i$).

---

## Problems 9 – 20: Applying Rules of Differentiation

**Find the derivative of the given function using the rules of differentiation.**

#### Problem 9
Find the derivative of $f(z) = (z^2 - 1)^3 (z^2 + 2z)^2$.

**Solution:**
Use the Product Rule and the Chain Rule:
$$f'(z) = (z^2 - 1)^3 \frac{d}{dz}[(z^2 + 2z)^2] + \frac{d}{dz}[(z^2 - 1)^3] (z^2 + 2z)^2$$
1. Evaluate the derivative of the second term:
   $$\frac{d}{dz}[(z^2 + 2z)^2] = 2(z^2 + 2z)(2z + 2) = 4(z^2 + 2z)(z + 1)$$
2. Evaluate the derivative of the first term:
   $$\frac{d}{dz}[(z^2 - 1)^3] = 3(z^2 - 1)^2(2z) = 6z(z^2 - 1)^2$$
3. Substitute these back:
   $$f'(z) = (z^2 - 1)^3 [4(z^2 + 2z)(z + 1)] + [6z(z^2 - 1)^2] (z^2 + 2z)^2$$
4. Factor out the common terms $(z^2 - 1)^2 (z^2 + 2z)$:
   $$f'(z) = (z^2 - 1)^2 (z^2 + 2z) \left[ 4(z^2 - 1)(z + 1) + 6z(z^2 + 2z) \right]$$
5. Simplify the expression inside the brackets:
   $$4(z^3 + z^2 - z - 1) + 6z^3 + 12z^2 = 4z^3 + 4z^2 - 4z - 4 + 6z^3 + 12z^2 = 10z^3 + 16z^2 - 4z - 4$$
Thus:
$$\boxed{f'(z) = 2(z^2 - 1)^2 z(z+2) (5z^3 + 8z^2 - 2z - 2)}$$

---

#### Problem 10
Find the derivative of $f(z) = \frac{z^3 - 2z + 1}{z^2 + i}$.

**Solution:**
Use the Quotient Rule:
$$f'(z) = \frac{(z^2 + i)\frac{d}{dz}[z^3 - 2z + 1] - (z^3 - 2z + 1)\frac{d}{dz}[z^2 + i]}{(z^2 + i)^2}$$
1. Find the derivatives:
   $$\frac{d}{dz}[z^3 - 2z + 1] = 3z^2 - 2 \quad \text{and} \quad \frac{d}{dz}[z^2 + i] = 2z$$
2. Substitute:
   $$f'(z) = \frac{(z^2 + i)(3z^2 - 2) - 2z(z^3 - 2z + 1)}{(z^2 + i)^2}$$
3. Expand the numerator:
   $$(3z^4 - 2z^2 + 3iz^2 - 2i) - (2z^4 - 4z^2 + 2z) = z^4 + (2 + 3i)z^2 - 2z - 2i$$
Thus:
$$\boxed{f'(z) = \frac{z^4 + (2 + 3i)z^2 - 2z - 2i}{(z^2 + i)^2}}$$

---

#### Problem 11
Find the derivative of $f(z) = \frac{i}{(z^2 - 2z)^4}$.

**Solution:**
We can write the function as:
$$f(z) = i (z^2 - 2z)^{-4}$$
Use the Chain Rule:
$$f'(z) = -4i (z^2 - 2z)^{-5} \frac{d}{dz}[z^2 - 2z] = -4i (z^2 - 2z)^{-5} (2z - 2)$$
Simplify the numerator:
$$-4i(2z - 2) = -8i(z - 1)$$
Thus:
$$\boxed{f'(z) = \frac{-8i(z - 1)}{(z^2 - 2z)^5}}$$

---

#### Problem 12
Find the derivative of $f(z) = (z^2 - 3iz)^3$.

**Solution:**
Use the Chain Rule:
$$f'(z) = 3(z^2 - 3iz)^2 \frac{d}{dz}[z^2 - 3iz] = 3(z^2 - 3iz)^2 (2z - 3i)$$
Thus:
$$\boxed{f'(z) = 3(2z - 3i)(z^2 - 3iz)^2}$$

---

#### Problem 13
Find the derivative of $f(z) = \frac{2z - i}{z^2 + 1}$.

**Solution:**
Use the Quotient Rule:
$$f'(z) = \frac{(z^2 + 1)(2) - (2z - i)(2z)}{(z^2 + 1)^2}$$
Expand the numerator:
$$2z^2 + 2 - (4z^2 - 2iz) = -2z^2 + 2iz + 2$$
Thus:
$$\boxed{f'(z) = \frac{-2z^2 + 2iz + 2}{(z^2 + 1)^2}}$$

---

#### Problem 14
Find the derivative of $f(z) = z^4 - 2iz^3 + (1+i)z^2 - 6i$.

**Solution:**
Differentiate term-by-term:
$$f'(z) = 4z^3 - 6iz^2 + 2(1+i)z$$
Thus:
$$\boxed{f'(z) = 4z^3 - 6iz^2 + 2(1+i)z}$$

---

#### Problem 15
Find the derivative of $f(z) = \frac{z^2 - 9}{z^2 + 9}$.

**Solution:**
Use the Quotient Rule:
$$f'(z) = \frac{(z^2 + 9)(2z) - (z^2 - 9)(2z)}{(z^2 + 9)^2}$$
Simplify the numerator:
$$2z(z^2 + 9 - z^2 + 9) = 2z(18) = 36z$$
Thus:
$$\boxed{f'(z) = \frac{36z}{(z^2 + 9)^2}}$$

---

#### Problem 16
Find the derivative of $f(z) = z^3 (iz - 1)^5$.

**Solution:**
Use the Product Rule and the Chain Rule:
$$f'(z) = 3z^2 (iz - 1)^5 + z^3 \left[ 5(iz - 1)^4 (i) \right]$$
$$= 3z^2 (iz - 1)^5 + 5iz^3 (iz - 1)^4$$
Factor out $z^2 (iz - 1)^4$:
$$f'(z) = z^2 (iz - 1)^4 \left[ 3(iz - 1) + 5iz \right] = z^2 (iz - 1)^4 (3iz - 3 + 5iz) = z^2 (iz - 1)^4 (8iz - 3)$$
Thus:
$$\boxed{f'(z) = z^2 (8iz - 3)(iz - 1)^4}$$

---

#### Problem 17
Find the derivative of $f(z) = \frac{(2z - i)^2}{(z + 2)^3}$.

**Solution:**
Use the Quotient Rule:
$$f'(z) = \frac{(z + 2)^3 \frac{d}{dz}[(2z - i)^2] - (2z - i)^2 \frac{d}{dz}[(z + 2)^3]}{(z + 2)^6}$$
1. Find the derivatives:
   $$\frac{d}{dz}[(2z - i)^2] = 2(2z - i)(2) = 4(2z - i)$$
   $$\frac{d}{dz}[(z + 2)^3] = 3(z + 2)^2$$
2. Substitute:
   $$f'(z) = \frac{4(z + 2)^3 (2z - i) - 3(z + 2)^2 (2z - i)^2}{(z + 2)^6}$$
3. Factor out $(z+2)^2 (2z-i)$:
   $$f'(z) = \frac{(z+2)^2 (2z-i) \left[ 4(z+2) - 3(2z-i) \right]}{(z+2)^6}$$
4. Cancel $(z+2)^2$:
   $$f'(z) = \frac{(2z-i)(4z + 8 - 6z + 3i)}{(z+2)^4} = \frac{(2z-i)(-2z + 8 + 3i)}{(z+2)^4}$$
Thus:
$$\boxed{f'(z) = \frac{(2z-i)(8 + 3i - 2z)}{(z+2)^4}}$$

---

#### Problem 18
Find the derivative of $f(z) = (z^2 - 1/z)^2$.

**Solution:**
Use the Chain Rule:
$$f'(z) = 2\left(z^2 - \frac{1}{z}\right) \frac{d}{dz}\left[z^2 - \frac{1}{z}\right] = 2\left(z^2 - \frac{1}{z}\right) \left(2z + \frac{1}{z^2}\right)$$
Thus:
$$\boxed{f'(z) = 2\left(z^2 - \frac{1}{z}\right) \left(2z + \frac{1}{z^2}\right)}$$

---

#### Problem 19
Find the derivative of $f(z) = \frac{1}{z} - \frac{2}{z^2} + \frac{3}{z^3}$.

**Solution:**
Write the function as:
$$f(z) = z^{-1} - 2z^{-2} + 3z^{-3}$$
Differentiate term-by-term:
$$f'(z) = -z^{-2} + 4z^{-3} - 9z^{-4} = -\frac{1}{z^2} + \frac{4}{z^3} - \frac{9}{z^4}$$
Thus:
$$\boxed{f'(z) = -\frac{1}{z^2} + \frac{4}{z^3} - \frac{9}{z^4}}$$

---

#### Problem 20
Find the derivative of $f(z) = iz^3 - 3z^2 + (4-i)z + i$.

**Solution:**
Differentiate term-by-term:
$$f'(z) = 3iz^2 - 6z + 4 - i$$
Thus:
$$\boxed{f'(z) = 3iz^2 - 6z + 4 - i}$$

---

## Problems 21 – 24: Preimages and Differentiability Checks

#### Problem 21
Determine all points at which the function $f(z) = |z|^2$ is differentiable.

**Solution:**
Let $f(z) = x^2 + y^2$.
1. Using the limit definition of the derivative at a general point $z$:
   $$f'(z) = \lim_{\Delta z \to 0} \frac{|z + \Delta z|^2 - |z|^2}{\Delta z}$$
2. Expand the numerator using $|w|^2 = w\bar{w}$:
   $$|z + \Delta z|^2 - |z|^2 = (z + \Delta z)(\bar{z} + \overline{\Delta z}) - z\bar{z}$$
   $$= z\bar{z} + z\overline{\Delta z} + \bar{z}\Delta z + \Delta z \overline{\Delta z} - z\bar{z} = z\overline{\Delta z} + \bar{z}\Delta z + \Delta z \overline{\Delta z}$$
3. Substitute this back:
   $$\frac{|z + \Delta z|^2 - |z|^2}{\Delta z} = z \frac{\overline{\Delta z}}{\Delta z} + \bar{z} + \overline{\Delta z}$$
4. Take the limit as $\Delta z \to 0$:
   * The term $\overline{\Delta z} \to 0$.
   * The term $\bar{z}$ is constant.
   * The term $\frac{\overline{\Delta z}}{\Delta z}$ has no limit as $\Delta z \to 0$ (its value depends on the path: $1$ along the real axis, $-1$ along the imaginary axis).
   * Therefore, the term $z \frac{\overline{\Delta z}}{\Delta z}$ has a limit if and only if $z = 0$.
5. If $z = 0$:
   $$f'(0) = \lim_{\Delta z \to 0} (0 + 0 + \overline{\Delta z}) = 0$$
6. If $z \ne 0$, the limit does not exist.
Thus, the function is differentiable **only at the origin $z = 0$**. It is not analytic anywhere.

---

#### Problem 22
Determine all points at which the function $f(z) = \bar{z}$ is differentiable.

**Solution:**
We use the limit definition:
$$f'(z) = \lim_{\Delta z \to 0} \frac{\overline{z + \Delta z} - \bar{z}}{\Delta z} = \lim_{\Delta z \to 0} \frac{\bar{z} + \overline{\Delta z} - \bar{z}}{\Delta z} = \lim_{\Delta z \to 0} \frac{\overline{\Delta z}}{\Delta z}$$
As shown in Problem 21, the limit of $\frac{\overline{\Delta z}}{\Delta z}$ as $\Delta z \to 0$ does not exist.
Thus, the function is **differentiable nowhere** in the complex plane.

---

#### Problem 23
Determine all points at which the function $f(z) = \operatorname{Re}(z)$ is differentiable.

**Solution:**
Let $z = x+iy$ and $\Delta z = \Delta x + i\Delta y$.
$$f'(z) = \lim_{\Delta z \to 0} \frac{\operatorname{Re}(z + \Delta z) - \operatorname{Re}(z)}{\Delta z} = \lim_{\Delta z \to 0} \frac{(x + \Delta x) - x}{\Delta z} = \lim_{\Delta z \to 0} \frac{\Delta x}{\Delta z}$$
Let's evaluate this limit along two different paths:
* **Path 1 (along the real axis, $\Delta y = 0$):**
  $$\Delta z = \Delta x \implies \lim_{\Delta x \to 0} \frac{\Delta x}{\Delta x} = 1$$
* **Path 2 (along the imaginary axis, $\Delta x = 0$):**
  $$\Delta z = i\Delta y \implies \lim_{\Delta y \to 0} \frac{0}{i\Delta y} = 0$$
Since the limits along the two paths are different, the limit does not exist.
Thus, the function is **differentiable nowhere**.

---

#### Problem 24
Determine all points at which the function $f(z) = \operatorname{Im}(z)$ is differentiable.

**Solution:**
Let $\Delta z = \Delta x + i\Delta y$.
$$f'(z) = \lim_{\Delta z \to 0} \frac{\operatorname{Im}(z + \Delta z) - \operatorname{Im}(z)}{\Delta z} = \lim_{\Delta z \to 0} \frac{\Delta y}{\Delta z}$$
Evaluate along two paths:
* **Path 1 (along the real axis, $\Delta y = 0$):**
  $$\lim_{\Delta x \to 0} \frac{0}{\Delta x} = 0$$
* **Path 2 (along the imaginary axis, $\Delta x = 0$):**
  $$\Delta z = i\Delta y \implies \lim_{\Delta y \to 0} \frac{\Delta y}{i\Delta y} = \frac{1}{i} = -i$$
Since the limits along the two paths are different, the limit does not exist.
Thus, the function is **differentiable nowhere**.

---

## Focus on Concepts (Problems 25 – 30)

#### Problem 25
Prove that if a complex function $f(z)$ is differentiable at $z_0$, then $f(z)$ is continuous at $z_0$.

**Solution:**
To show that $f(z)$ is continuous at $z_0$, we must prove that $\lim_{z \to z_0} f(z) = f(z_0)$, which is equivalent to:
$$\lim_{z \to z_0} (f(z) - f(z_0)) = 0$$
1. Let $z \ne z_0$. We can write:
   $$f(z) - f(z_0) = \frac{f(z) - f(z_0)}{z - z_0} (z - z_0)$$
2. Take the limit of both sides as $z \to z_0$:
   $$\lim_{z \to z_0} (f(z) - f(z_0)) = \lim_{z \to z_0} \left[ \frac{f(z) - f(z_0)}{z - z_0} (z - z_0) \right]$$
3. Use the limit product law:
   $$\lim_{z \to z_0} (f(z) - f(z_0)) = \left( \lim_{z \to z_0} \frac{f(z) - f(z_0)}{z - z_0} \right) \left( \lim_{z \to z_0} (z - z_0) \right)$$
4. Since $f$ is differentiable at $z_0$, the first limit is $f'(z_0)$ (a finite complex number):
   $$\lim_{z \to z_0} (f(z) - f(z_0)) = f'(z_0) \cdot 0 = 0$$
This completes the proof.

---

#### Problem 26
Give an example of a complex function that is:
(a) Continuous everywhere but differentiable nowhere.
(b) Continuous everywhere but differentiable at exactly one point.

**Solution:**
**(a) Continuous everywhere, differentiable nowhere:**
* **Example:** $f(z) = \bar{z}$.
  * As shown in Problem 26 of Section 2.6, $f(z) = \bar{z}$ is continuous everywhere on $\mathbb{C}$ because its real and imaginary parts $u(x,y)=x$ and $v(x,y)=-y$ are continuous everywhere.
  * However, as shown in Problem 22 of this section, it is differentiable nowhere.

**(b) Continuous everywhere, differentiable at exactly one point:**
* **Example:** $f(z) = |z|^2$.
  * The function $f(z) = x^2 + y^2$ is a real-valued polynomial, which is continuous everywhere.
  * As shown in Problem 21, it is differentiable only at $z = 0$.

---

#### Problem 27
L'Hopital's Rule for complex functions:
(a) State L'Hopital's Rule for a limit of the form $\lim_{z \to z_0} \frac{f(z)}{g(z)}$ yielding $0/0$.
(b) Use L'Hopital's Rule to evaluate $\lim_{z \to i} \frac{z^5 + i}{z^2 + 1}$.

**Solution:**
**(a) Statement:**
If $f(z)$ and $g(z)$ are analytic in a neighborhood of $z_0$, $f(z_0) = 0$, $g(z_0) = 0$, and $g'(z_0) \ne 0$, then:
$$\lim_{z \to z_0} \frac{f(z)}{g(z)} = \frac{f'(z_0)}{g'(z_0)}$$

**(b) Evaluation:**
1. Check the indeterminate form:
   * Numerator at $z = i$: $i^5 + i = i + i = 2i \ne 0$.
     Wait! Let's check: $i^5 = i^4 \cdot i = 1 \cdot i = i$. So $i^5 + i = 2i$.
     Denominator at $z = i$: $i^2 + 1 = -1 + 1 = 0$.
     Since the numerator is not 0, this is NOT a $0/0$ form, so L'Hopital's Rule does not apply.
     Wait! The limit is actually:
     $$\lim_{z \to i} \frac{z^5 + i}{z^2 + 1} = \infty$$
     Wait, is there a typo in the question? If it were $\lim_{z \to i} \frac{z^5 - i}{z^2 + 1}$?
     Let's check $i^5 - i = i - i = 0$. Yes! If the numerator is $z^5 - i$, then it is $0/0$.
     Let's evaluate $\lim_{z \to i} \frac{z^5 - i}{z^2 + 1}$ using L'Hopital's Rule:
     * Differentiate numerator: $\frac{d}{dz}[z^5 - i] = 5z^4$.
     * Differentiate denominator: $\frac{d}{dz}[z^2 + 1] = 2z$.
     * Apply L'Hopital's Rule:
       $$\lim_{z \to i} \frac{z^5 - i}{z^2 + 1} = \frac{5i^4}{2i} = \frac{5}{2i} = -\frac{5}{2}i$$
* **Answer:** For the indeterminate form $\lim_{z \to i} \frac{z^5 - i}{z^2 + 1}$, the limit is $-2.5i$.

---

#### Problem 28
Let $f(z) = z^2 \bar{z}$. Determine where $f$ is differentiable.

**Solution:**
1. Let's use the limit definition or write $f(z)$ in terms of $z$ and $\bar{z}$.
   We can check differentiability using the limit definition:
   $$f(z+\Delta z) = (z+\Delta z)^2 (\bar{z} + \overline{\Delta z}) = (z^2 + 2z\Delta z + (\Delta z)^2)(\bar{z} + \overline{\Delta z})$$
   $$= z^2\bar{z} + z^2\overline{\Delta z} + 2z\bar{z}\Delta z + 2z\Delta z\overline{\Delta z} + (\Delta z)^2\bar{z} + (\Delta z)^2\overline{\Delta z}$$
2. The difference quotient is:
   $$\frac{f(z+\Delta z) - f(z)}{\Delta z} = z^2 \frac{\overline{\Delta z}}{\Delta z} + 2z\bar{z} + 2z\overline{\Delta z} + \Delta z\bar{z} + \Delta z\overline{\Delta z}$$
3. Take the limit as $\Delta z \to 0$:
   * All terms with $\Delta z$ or $\overline{\Delta z}$ in the numerator go to 0.
   * The term $2z\bar{z}$ is constant.
   * The term $z^2 \frac{\overline{\Delta z}}{\Delta z}$ has a limit if and only if $z^2 = 0 \implies z = 0$.
4. If $z = 0$, the limit is $0$.
Thus, $f(z)$ is differentiable **only at the origin $z = 0$**.

---

#### Problem 29
If $f(z) = u(x,y) + iv(x,y)$ is differentiable at $z_0$, show that the derivative can be written as:
$$f'(z_0) = \frac{\partial u}{\partial x}(x_0, y_0) + i\frac{\partial v}{\partial x}(x_0, y_0)$$

**Solution:**
Since $f$ is differentiable at $z_0$, the limit definition yields the same value along any path of approach.
* **Path 1 (Horizontal approach, $\Delta z = \Delta x$):**
  $$f'(z_0) = \lim_{\Delta x \to 0} \frac{u(x_0+\Delta x, y_0) + iv(x_0+\Delta x, y_0) - (u(x_0, y_0) + iv(x_0, y_0))}{\Delta x}$$
  $$= \lim_{\Delta x \to 0} \frac{u(x_0+\Delta x, y_0) - u(x_0, y_0)}{\Delta x} + i \lim_{\Delta x \to 0} \frac{v(x_0+\Delta x, y_0) - v(x_0, y_0)}{\Delta x}$$
  By definition of partial derivatives:
  $$f'(z_0) = \frac{\partial u}{\partial x}(x_0, y_0) + i\frac{\partial v}{\partial x}(x_0, y_0)$$
This completes the proof.

---

#### Problem 30
If $f(z) = u(x,y) + iv(x,y)$ is differentiable at $z_0$, show that the derivative can also be written as:
$$f'(z_0) = \frac{\partial v}{\partial y}(x_0, y_0) - i\frac{\partial u}{\partial y}(x_0, y_0)$$

**Solution:**
We evaluate the limit definition along a vertical path of approach:
* **Path 2 (Vertical approach, $\Delta z = i\Delta y$):**
  $$f'(z_0) = \lim_{\Delta y \to 0} \frac{u(x_0, y_0+\Delta y) + iv(x_0, y_0+\Delta y) - (u(x_0, y_0) + iv(x_0, y_0))}{i\Delta y}$$
  $$= \frac{1}{i} \lim_{\Delta y \to 0} \frac{u(x_0, y_0+\Delta y) - u(x_0, y_0)}{\Delta y} + \lim_{\Delta y \to 0} \frac{v(x_0, y_0+\Delta y) - v(x_0, y_0)}{\Delta y}$$
  Since $1/i = -i$:
  $$f'(z_0) = -i \frac{\partial u}{\partial y}(x_0, y_0) + \frac{\partial v}{\partial y}(x_0, y_0) = \frac{\partial v}{\partial y}(x_0, y_0) - i\frac{\partial u}{\partial y}(x_0, y_0)$$
This completes the proof.
