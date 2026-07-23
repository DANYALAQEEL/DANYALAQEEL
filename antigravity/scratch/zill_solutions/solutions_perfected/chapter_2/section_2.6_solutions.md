# Complex Analysis — Dennis G. Zill, 2nd Edition
## Chapter 2 · Section 2.6 — Limits and Continuity
### Problems 1 – 49 · Complete Solutions

---

> **Key Concepts of Limits and Continuity**
>
> 1. **Definition of Limit:** The statement $\lim_{z \to z_0} f(z) = L$ means that for every $\epsilon > 0$, there exists a $\delta > 0$ such that:
>    $$0 < |z - z_0| < \delta \implies |f(z) - L| < \epsilon$$
> 
> ![Figure 2.49](../../extracted_figures/figure_2_49.png)
>
> ![Figure 2.50](../../extracted_figures/figure_2_50.png)
>
> 2. **Real and Imaginary Limits:** If $f(z) = u(x, y) + i v(x, y)$, $z_0 = x_0 + i y_0$, and $L = u_0 + i v_0$, then $\lim_{z \to z_0} f(z) = L$ if and only if:
>    $$\lim_{(x, y) \to (x_0, y_0)} u(x, y) = u_0 \quad \text{and} \quad \lim_{(x, y) \to (x_0, y_0)} v(x, y) = v_0$$
> 3. **Limits Involving Infinity:**
>    * $\lim_{z \to z_0} f(z) = \infty$ if and only if $\lim_{z \to z_0} \frac{1}{f(z)} = 0$.
> 
> ![Figure 2.53](../../extracted_figures/figure_2_53.png)
>
>    * $\lim_{z \to \infty} f(z) = L$ if and only if $\lim_{z \to 0} f(1/z) = L$.
> 
> ![Figure 2.54](../../extracted_figures/figure_2_54.png)
>
>    * $\lim_{z \to \infty} f(z) = \infty$ if and only if $\lim_{z \to 0} \frac{1}{f(1/z)} = 0$.
> 
> ![Figure 2.55](../../extracted_figures/figure_2_55.png)
>
> 4. **Continuity:** A complex function $f$ is continuous at $z_0$ if:
>    * $f(z_0)$ is defined.
>    * $\lim_{z \to z_0} f(z)$ exists.
>    * $\lim_{z \to z_0} f(z) = f(z_0)$.
> 
> ![Figure 2.56](../../extracted_figures/figure_2_56.png)
>
> ![Figure 2.58](../../extracted_figures/figure_2_58.png)

---

## Problems 1 – 20: Limit Evaluations

**Evaluate the given limit if it exists.**

#### Problem 1
Evaluate $\lim_{z \to 1+i} (z^2 - 2z + 6)$.

**Solution:**
Since $f(z) = z^2 - 2z + 6$ is a polynomial, it is continuous everywhere, so we evaluate by direct substitution:
1. Substitute $z = 1+i$:
   $$\lim_{z \to 1+i} (z^2 - 2z + 6) = (1+i)^2 - 2(1+i) + 6$$
2. Compute $(1+i)^2$:
   $$(1+i)^2 = 1 + 2i + i^2 = 2i$$
3. Substitute back:
   $$2i - 2 - 2i + 6 = 4$$
Thus, the limit is $\boxed{4}$.

---

#### Problem 2
Evaluate $\lim_{z \to -2i} \frac{z^3 - 8i}{z + 2i}$.

**Solution:**
Direct substitution gives:
$$\frac{(-2i)^3 - 8i}{-2i + 2i} = \frac{-8i^3 - 8i}{0} = \frac{8i - 8i}{0} = \frac{0}{0}$$
which is an indeterminate form.
1. Factor the numerator using the difference of cubes $A^3 - B^3 = (A - B)(A^2 + AB + B^2)$:
   $$z^3 - 8i = z^3 - (2i)^3$$
   Here $A = z, B = 2i$:
   $$z^3 - (2i)^3 = (z - 2i)(z^2 + 2iz + (2i)^2) = (z - 2i)(z^2 + 2iz - 4)$$
   Wait! Is $(2i)^3 = 8i^3 = -8i$? Yes! But the numerator is $z^3 - 8i$, which is $z^3 + (-2i)^3$?
   Let's check:
   $$z^3 - 8i = z^3 + (-2i)^3 = (z + 2i)(z^2 - 2iz + (2i)^2) = (z + 2i)(z^2 - 2iz - 4)$$
   Let's check if $(z+2i)(z^2-2iz-4) = z^3 - 2iz^2 - 4z + 2iz^2 - 4i^2z - 8i = z^3 + 4z - 4z - 8i = z^3 - 8i$. Yes! That is correct.
2. Cancel the common factor $z + 2i$ for $z \ne -2i$:
   $$\frac{z^3 - 8i}{z + 2i} = z^2 - 2iz - 4$$
3. Now evaluate the limit:
   $$\lim_{z \to -2i} (z^2 - 2iz - 4) = (-2i)^2 - 2i(-2i) - 4 = -4 - 4 - 4 = -12$$
Thus, the limit is $\boxed{-12}$.

---

#### Problem 3
Evaluate $\lim_{z \to i} \frac{z^2 + 1}{z^4 - 1}$.

**Solution:**
Direct substitution gives $0/0$.
1. Factor the denominator:
   $$z^4 - 1 = (z^2 - 1)(z^2 + 1)$$
2. Cancel the common factor $z^2+1$ for $z \ne \pm i$:
   $$\frac{z^2 + 1}{z^4 - 1} = \frac{z^2 + 1}{(z^2 - 1)(z^2 + 1)} = \frac{1}{z^2 - 1}$$
3. Evaluate the limit:
   $$\lim_{z \to i} \frac{1}{z^2 - 1} = \frac{1}{i^2 - 1} = \frac{1}{-1 - 1} = -\frac{1}{2}$$
Thus, the limit is $\boxed{-\frac{1}{2}}$.

---

#### Problem 4
Evaluate $\lim_{z \to 1+i} \frac{z^2 - 2i}{z^2 - 2z + 2}$.

**Solution:**
Direct substitution gives $0/0$.
1. Factor the denominator:
   $$z^2 - 2z + 2 = (z - (1+i))(z - (1-i))$$
2. Factor the numerator:
   $$z^2 - 2i = z^2 - (1+i)^2 = (z - (1+i))(z + (1+i))$$
3. Cancel the common factor $z - (1+i)$ for $z \ne 1+i$:
   $$\frac{z^2 - 2i}{z^2 - 2z + 2} = \frac{z + 1 + i}{z - 1 + i}$$
4. Evaluate the limit:
   $$\lim_{z \to 1+i} \frac{z + 1 + i}{z - 1 + i} = \frac{(1+i) + 1 + i}{(1+i) - 1 + i} = \frac{2 + 2i}{2i} = \frac{2(1+i)}{2i} = \frac{1+i}{i} = 1 - i$$
Thus, the limit is $\boxed{1 - i}$.

---

#### Problem 5
Evaluate $\lim_{z \to e^{i\pi/4}} \frac{z - e^{i\pi/4}}{z^2 - e^{i\pi/2}}$.

**Solution:**
Direct substitution gives $0/0$ since $(e^{i\pi/4})^2 = e^{i\pi/2}$.
1. Factor the denominator using difference of squares:
   $$z^2 - e^{i\pi/2} = z^2 - (e^{i\pi/4})^2 = (z - e^{i\pi/4})(z + e^{i\pi/4})$$
2. Cancel the common factor:
   $$\frac{z - e^{i\pi/4}}{z^2 - e^{i\pi/2}} = \frac{1}{z + e^{i\pi/4}}$$
3. Evaluate the limit:
   $$\lim_{z \to e^{i\pi/4}} \frac{1}{z + e^{i\pi/4}} = \frac{1}{2e^{i\pi/4}} = \frac{1}{2} e^{-i\pi/4} = \frac{1}{2}\left(\frac{\sqrt{2}}{2} - i\frac{\sqrt{2}}{2}\right) = \frac{\sqrt{2}}{4} - i\frac{\sqrt{2}}{4}$$
Thus, the limit is $\boxed{\frac{\sqrt{2}}{4} - i\frac{\sqrt{2}}{4}}$.

---

#### Problem 6
Evaluate $\lim_{z \to 0} \frac{z^2}{|z|^2}$.

**Solution:**
Let $z = x+iy$. Then $z^2 = x^2 - y^2 + 2ixy$ and $|z|^2 = x^2 + y^2$.
We test different paths of approach to $(0,0)$:
1. **Along the real axis ($y=0$):**
   $$\lim_{x \to 0} \frac{x^2}{x^2} = 1$$
2. **Along the imaginary axis ($x=0$):**
   $$\lim_{y \to 0} \frac{-y^2}{y^2} = -1$$
Since the limits along these two paths are different, the limit **does not exist**.

---

#### Problem 7
Evaluate $\lim_{z \to 0} \frac{z}{\bar{z}}$.

**Solution:**
Let $z = r e^{i\theta}$.
Then $z/\bar{z} = \frac{r e^{i\theta}}{r e^{-i\theta}} = e^{2i\theta}$.
As $z \to 0$, $r \to 0$, but the value of the expression remains $e^{2i\theta}$, which depends entirely on the angle of approach $\theta$.
For example:
* Approach along $\theta = 0 \implies e^0 = 1$.
* Approach along $\theta = \pi/2 \implies e^{i\pi} = -1$.
Since the limit depends on the path of approach, the limit **does not exist**.

---

#### Problem 8
Evaluate $\lim_{z \to 0} \frac{|z|^2}{z}$.

**Solution:**
1. Simplify the expression using the property $|z|^2 = z\bar{z}$:
   $$\frac{|z|^2}{z} = \frac{z\bar{z}}{z} = \bar{z} \quad (\text{for } z \ne 0)$$
2. Evaluate the limit:
   $$\lim_{z \to 0} \bar{z} = \overline{0} = 0$$
Thus, the limit is $\boxed{0}$.

---

#### Problem 9
Evaluate $\lim_{z \to i} \frac{z^2 - (2+i)z + 2i}{z - i}$.

**Solution:**
Direct substitution gives $0/0$.
1. Factor the numerator:
   $$z^2 - (2+i)z + 2i = (z-2)(z-i)$$
2. Cancel $z-i$ for $z \ne i$:
   $$\frac{z^2 - (2+i)z + 2i}{z - i} = z - 2$$
3. Evaluate:
   $$\lim_{z \to i} (z-2) = i - 2$$
Thus, the limit is $\boxed{-2 + i}$.

---

#### Problem 10
Evaluate $\lim_{z \to 1+i} \frac{z^3 - z^2 - z + 1}{z^2 - 2z + 2}$.

**Solution:**
Direct substitution:
* Numerator at $z = 1+i$: $(1+i)^3 - (1+i)^2 - (1+i) + 1 = (-2+2i) - 2i - 1 - i + 1 = -2 - i \ne 0$.
* Denominator at $z = 1+i$: $(1+i)^2 - 2(1+i) + 2 = 2i - 2 - 2i + 2 = 0$.
Since the numerator is non-zero and the denominator is zero, the limit is **infinite**, i.e. $\boxed{\infty}$.

---

#### Problem 11
Evaluate $\lim_{z \to 2i} \left( \frac{z}{2z - 4i} - \frac{z^2}{z^2 + 4} \right)$.

**Solution:**
Evaluate each term:
* Term 1: $\frac{z}{2(z-2i)}$. As $z \to 2i$, this is of the form $2i/0 \implies \infty$.
* Term 2: $\frac{z^2}{z^2 + 4} = \frac{z^2}{(z-2i)(z+2i)}$. As $z \to 2i$, this is also of the form $-4/0 \implies \infty$.
Let's combine them into a single fraction:
$$\frac{z}{2(z-2i)} - \frac{z^2}{(z-2i)(z+2i)} = \frac{z(z+2i) - 2z^2}{2(z-2i)(z+2i)} = \frac{z^2 + 2iz - 2z^2}{2(z-2i)(z+2i)} = \frac{-z^2 + 2iz}{2(z-2i)(z+2i)}$$
Factor the numerator:
$$-z^2 + 2iz = -z(z - 2i)$$
Substitute:
$$\frac{-z(z-2i)}{2(z-2i)(z+2i)} = \frac{-z}{2(z+2i)} \quad (\text{for } z \ne 2i)$$
Now evaluate the limit:
$$\lim_{z \to 2i} \frac{-z}{2(z+2i)} = \frac{-2i}{2(2i + 2i)} = \frac{-2i}{8i} = -\frac{1}{4}$$
Thus, the limit is $\boxed{-\frac{1}{4}}$.

---

#### Problem 12
Evaluate $\lim_{z \to -i} \frac{z^2 + (1 - 2i)z - 2i}{z^2 + 1}$.

**Solution:**
Direct substitution gives $0/0$.
1. Factor the numerator:
   $$z^2 + (1 - 2i)z - 2i = (z+1)(z-2i)$$
   Wait! Let's check: $(z+1)(z-2i) = z^2 - 2iz + z - 2i = z^2 + (1-2i)z - 2i$. Yes!
   But wait: at $z = -i$, the numerator is:
   $$(-i)^2 + (1-2i)(-i) - 2i = -1 - i - 2 - 2i = -3 - 3i \ne 0$.
   Wait! Let's recalculate the roots of $z^2 + (1-2i)z - 2i$:
   Roots are $z = -1$ and $z = 2i$.
   Since $z = -i$ is not a root, the numerator does not equal 0!
   At $z = -i$, numerator is $-3 - 3i \ne 0$.
   Denominator is $(-i)^2 + 1 = -1 + 1 = 0$.
   Thus, the limit is **infinite**, i.e. $\boxed{\infty}$.

---

#### Problem 13
Evaluate $\lim_{z \to \infty} \frac{3z^2 + 2iz}{z^2 - i}$.

**Solution:**
We use the rule for limits at infinity: $\lim_{z \to \infty} f(z) = \lim_{z \to 0} f(1/z)$.
$$f(1/z) = \frac{3(1/z)^2 + 2i(1/z)}{(1/z)^2 - i} = \frac{\frac{3 + 2iz}{z^2}}{\frac{1 - iz^2}{z^2}} = \frac{3 + 2iz}{1 - iz^2}$$
Now evaluate as $z \to 0$:
$$\lim_{z \to 0} \frac{3 + 2iz}{1 - iz^2} = \frac{3 + 0}{1 - 0} = 3$$
Thus, the limit is $\boxed{3}$.

---

#### Problem 14
Evaluate $\lim_{z \to \infty} \frac{z - 2i}{3z^2 + 1}$.

**Solution:**
Apply the limit rule:
$$f(1/z) = \frac{1/z - 2i}{3/z^2 + 1} = \frac{\frac{1 - 2iz}{z}}{\frac{3 + z^2}{z^2}} = \frac{z(1 - 2iz)}{3 + z^2}$$
Evaluate as $z \to 0$:
$$\lim_{z \to 0} \frac{z(1 - 2iz)}{3 + z^2} = \frac{0(1)}{3} = 0$$
Thus, the limit is $\boxed{0}$.

---

#### Problem 15
Evaluate $\lim_{z \to \infty} \frac{z^3 - z + 1}{2z^2 - i}$.

**Solution:**
We test the reciprocal of the function:
$$\lim_{z \to \infty} \frac{2z^2 - i}{z^3 - z + 1} = \lim_{z \to 0} \frac{2/z^2 - i}{1/z^3 - 1/z + 1} = \lim_{z \to 0} \frac{z(2 - iz^2)}{1 - z^2 + z^3} = \frac{0(2)}{1} = 0$$
Since the limit of $1/f(z)$ as $z \to \infty$ is 0, the limit of $f(z)$ is $\boxed{\infty}$.

---

#### Problem 16
Evaluate $\lim_{z \to 1} \frac{z^2 - 1}{z^2 - 2z + 1}$.

**Solution:**
Direct substitution gives $0/0$.
1. Factor:
   $$\frac{z^2 - 1}{z^2 - 2z + 1} = \frac{(z-1)(z+1)}{(z-1)^2} = \frac{z+1}{z-1}$$
2. As $z \to 1$, the numerator is 2 and the denominator is 0.
Thus, the limit is $\boxed{\infty}$.

---

#### Problem 17
Evaluate $\lim_{z \to i} \frac{z^2 + 1}{(z^2 - 1)^2}$.

**Solution:**
Direct substitution:
* Numerator: $i^2 + 1 = 0$.
* Denominator: $(i^2 - 1)^2 = (-2)^2 = 4$.
Thus, the limit is $\boxed{0}$.

---

#### Problem 18
Evaluate $\lim_{z \to -2} \frac{z^2 + 4z + 4}{z^2 + 4}$.

**Solution:**
Direct substitution:
* Numerator: $(-2)^2 + 4(-2) + 4 = 4 - 8 + 4 = 0$.
* Denominator: $(-2)^2 + 4 = 8$.
Thus, the limit is $\boxed{0}$.

---

#### Problem 19
Evaluate $\lim_{z \to i} \frac{z^2 + 1}{z - i}$.

**Solution:**
Direct substitution gives $0/0$.
1. Factor the numerator:
   $$z^2 + 1 = (z-i)(z+i)$$
2. Cancel $z-i$ for $z \ne i$:
   $$\frac{z^2 + 1}{z - i} = z + i$$
3. Evaluate:
   $$\lim_{z \to i} (z+i) = 2i$$
Thus, the limit is $\boxed{2i}$.

---

#### Problem 20
Evaluate $\lim_{z \to i} \frac{z^2 - 1}{z + i}$.

**Solution:**
Direct substitution:
* Numerator: $i^2 - 1 = -2$.
* Denominator: $i + i = 2i$.
Evaluate the ratio:
$$\frac{-2}{2i} = -\frac{1}{i} = i$$
Thus, the limit is $\boxed{i}$.

---

## Problems 21 – 24: Rigorous Limit Proofs ($\epsilon$-$\delta$)

**Prove the given limit using the $\epsilon$-$\delta$ definition.**

#### Problem 21
Prove that $\lim_{z \to 1+2i} (2z - 1) = 1 + 4i$.

**Solution:**
We want to show that for any $\epsilon > 0$, there exists a $\delta > 0$ such that:
$$0 < |z - (1+2i)| < \delta \implies |(2z - 1) - (1 + 4i)| < \epsilon$$
1. Simplify the target inequality:
   $$|2z - 2 - 4i| = |2(z - 1 - 2i)| = 2 |z - (1+2i)|$$
2. We want:
   $$2 |z - (1+2i)| < \epsilon \implies |z - (1+2i)| < \frac{\epsilon}{2}$$
3. Therefore, if we choose $\delta = \frac{\epsilon}{2}$, then:
   $$0 < |z - (1+2i)| < \delta \implies |(2z - 1) - (1 + 4i)| = 2|z - (1+2i)| < 2\delta = \epsilon$$
This completes the proof.

---

#### Problem 22
Prove that $\lim_{z \to i} (z^2 + i) = -1 + i$.

**Solution:**
We want to show that for any $\epsilon > 0$, there exists a $\delta > 0$ such that:
$$0 < |z - i| < \delta \implies |(z^2 + i) - (-1 + i)| < \epsilon$$
1. Simplify the target inequality:
   $$|z^2 + 1| = |(z-i)(z+i)| = |z-i| |z+i|$$
2. We need to bound the factor $|z+i|$.
   Assume a preliminary bound $\delta \le 1$. If $|z-i| < 1$, then:
   $$|z+i| = |z-i + 2i| \le |z-i| + |2i| < 1 + 2 = 3$$
3. Thus, if $|z-i| < \delta \le 1$, we have:
   $$|z^2 + 1| < 3\delta$$
4. We want this to be less than $\epsilon$, which requires $\delta \le \frac{\epsilon}{3}$.
5. Therefore, we choose:
   $$\delta = \min\left(1, \frac{\epsilon}{3}\right)$$
*Verification:*
If $0 < |z - i| < \delta$, then $|z-i| < 1 \implies |z+i| < 3$, and $|z-i| < \frac{\epsilon}{3}$.
Thus:
$$|z^2 + 1| = |z-i| |z+i| < \left(\frac{\epsilon}{3}\right) 3 = \epsilon$$
This completes the proof.

---

#### Problem 23
Prove that $\lim_{z \to z_0} \bar{z} = \bar{z}_0$.

**Solution:**
We want to show that for any $\epsilon > 0$, there exists a $\delta > 0$ such that:
$$0 < |z - z_0| < \delta \implies |\bar{z} - \bar{z}_0| < \epsilon$$
1. Use the properties of complex conjugates:
   $$|\bar{z} - \bar{z}_0| = |\overline{z - z_0}|$$
2. Since the modulus of a complex conjugate is equal to the modulus of the number itself ($|\bar{w}| = |w|$):
   $$|\overline{z - z_0}| = |z - z_0|$$
3. Therefore:
   $$|\bar{z} - \bar{z}_0| = |z - z_0|$$
4. If we choose $\delta = \epsilon$, then:
   $$0 < |z - z_0| < \delta \implies |\bar{z} - \bar{z}_0| = |z - z_0| < \delta = \epsilon$$
This completes the proof.

---

#### Problem 24
Prove that $\lim_{z \to z_0} \operatorname{Re}(z) = \operatorname{Re}(z_0)$.

**Solution:**
We want to show that for any $\epsilon > 0$, there exists a $\delta > 0$ such that:
$$0 < |z - z_0| < \delta \implies |\operatorname{Re}(z) - \operatorname{Re}(z_0)| < \epsilon$$
1. Let $z = x+iy$ and $z_0 = x_0+iy_0$.
   $$|\operatorname{Re}(z) - \operatorname{Re}(z_0)| = |x - x_0|$$
2. We know that for any complex number, the real part is bounded by the modulus:
   $$|x - x_0| \le \sqrt{(x-x_0)^2 + (y-y_0)^2} = |z - z_0|$$
3. Therefore:
   $$|\operatorname{Re}(z) - \operatorname{Re}(z_0)| \le |z - z_0|$$
4. If we choose $\delta = \epsilon$, then:
   $$0 < |z - z_0| < \delta \implies |\operatorname{Re}(z) - \operatorname{Re}(z_0)| \le |z - z_0| < \delta = \epsilon$$
This completes the proof.

---

## Problems 25 – 36: Continuity Verifications

#### Problem 25
Show that the function $f(z) = z^2 - 2\bar{z} + 1$ is continuous on $\mathbb{C}$.

**Solution:**
Let $f(z) = u(x,y) + iv(x,y)$.
1. Substitute $z = x+iy$ and $\bar{z} = x-iy$:
   $$f(z) = (x+iy)^2 - 2(x-iy) + 1 = x^2 - y^2 + 2ixy - 2x + 2iy + 1$$
   $$= (x^2 - y^2 - 2x + 1) + i(2xy + 2y)$$
2. Thus:
   $$u(x, y) = x^2 - y^2 - 2x + 1 \quad \text{and} \quad v(x, y) = 2xy + 2y$$
3. Both $u(x,y)$ and $v(x,y)$ are real polynomial functions of two variables, which are continuous everywhere on $\mathbb{R}^2$.
4. By the real-imaginary limit/continuity theorem, since $u$ and $v$ are continuous on $\mathbb{R}^2$, the complex function $f(z)$ is continuous on $\mathbb{C}$.

---

#### Problem 26
Show that the function $f(z) = \operatorname{Re}(z) - i\operatorname{Im}(z)$ is continuous on $\mathbb{C}$.

**Solution:**
1. Let $z = x+iy$. Then:
   $$f(z) = x - iy = \bar{z}$$
2. Here $u(x,y) = x$ and $v(x,y) = -y$.
3. Since $u(x,y) = x$ and $v(x,y) = -y$ are linear real polynomial functions, they are continuous everywhere.
Thus, $f(z) = \bar{z}$ is continuous on $\mathbb{C}$.

---

#### Problem 27
Determine all points where the function $f(z) = \frac{z^2 + 4}{z^2 + 9}$ is continuous.

**Solution:**
1. The function is a rational function, which is continuous at all points where its denominator is non-zero.
2. Find the roots of the denominator:
   $$z^2 + 9 = 0 \implies z^2 = -9 \implies z = \pm 3i$$
Thus, $f(z)$ is continuous for **all complex numbers $z \ne \pm 3i$**.

---

#### Problem 28
Determine all points where the function $f(z) = \frac{z - 1}{z^3 + 2z^2 + 2z}$ is continuous.

**Solution:**
1. Find where the denominator is zero:
   $$z^3 + 2z^2 + 2z = 0 \implies z(z^2 + 2z + 2) = 0$$
2. This yields:
   $$z = 0 \quad \text{or} \quad z^2 + 2z + 2 = 0$$
3. Solve the quadratic equation:
   $$z = \frac{-2 \pm \sqrt{4 - 8}}{2} = -1 \pm i$$
Thus, the function is continuous for **all complex numbers $z \ne 0, -1 \pm i$**.

---

#### Problem 29
Determine all points where the function $f(z) = \frac{z}{e^z - 1}$ is continuous.

**Solution:**
1. The denominator is zero when:
   $$e^z - 1 = 0 \implies e^z = 1$$
2. This holds when:
   $$z = 2n\pi i, \quad \text{where } n \in \mathbb{Z}$$
Thus, the function is continuous for **all complex numbers $z \ne 2n\pi i$ ($n \in \mathbb{Z}$)**.

---

#### Problem 30
Determine all points where the function $f(z) = \frac{1}{z} - e^{-z^2}$ is continuous.

**Solution:**
1. The term $e^{-z^2}$ is continuous everywhere.
2. The term $1/z$ is continuous for all $z \ne 0$.
Thus, the function is continuous for **all complex numbers $z \ne 0$**.

---

#### Problem 31
Show that if $f(z) = z^2$ for $z \ne i$, and $f(i) = 0$, then $f$ is discontinuous at $z = i$.

**Solution:**
We check the three conditions for continuity at $z = i$:
1. $f(i) = 0$ is defined.
2. Evaluate the limit:
   $$\lim_{z \to i} f(z) = \lim_{z \to i} z^2 = i^2 = -1$$
3. Compare the limit and the function value:
   $$\lim_{z \to i} f(z) = -1 \ne f(i) = 0$$
Since they are not equal, $f$ is discontinuous at $z = i$.

---

#### Problem 32
Determine if the function $f(z) = \frac{z^2 + 1}{z - i}$ can be made continuous at $z = i$ by defining $f(i)$ appropriately.

**Solution:**
1. Find the limit as $z \to i$:
   $$\lim_{z \to i} \frac{z^2 + 1}{z - i} = \lim_{z \to i} \frac{(z-i)(z+i)}{z - i} = \lim_{z \to i} (z+i) = 2i$$
2. If we define $f(i) = 2i$, then:
   $$\lim_{z \to i} f(z) = f(i)$$
   which satisfies the continuity condition.
Thus, the function **can be made continuous** by defining $\boxed{f(i) = 2i}$.

---

#### Problem 33
Show that the principal branch of $z^{1/2}$ is discontinuous at $z = -1$.

**Solution:**
Let $f(z) = z^{1/2}$ be the principal branch.
1. The principal value at $z = -1$ is:
   $$f(-1) = |-1|^{1/2} e^{i \operatorname{Arg}(-1)/2} = 1 \cdot e^{i\pi/2} = i$$
2. Let's evaluate the limit along two different paths:
   * **Path 1 (from quadrant II, $y > 0$):**
     Let $z = e^{i(\pi - \theta)}$ as $\theta \to 0^+$.
     $$f(z) = e^{i(\pi - \theta)/2} \to e^{i\pi/2} = i$$
   * **Path 2 (from quadrant III, $y < 0$):**
     Let $z = e^{i(-\pi + \theta)}$ as $\theta \to 0^+$.
     $$f(z) = e^{i(-\pi + \theta)/2} \to e^{-i\pi/2} = -i$$
3. Since the limit is different from the two sides, the limit as $z \to -1$ **does not exist**, making the function discontinuous at $z = -1$.

---

#### Problem 34
Show that the principal argument function $\operatorname{Arg}(z)$ is discontinuous on the negative real axis.

**Solution:**
1. Let $x_0 < 0$ be a point on the negative real axis.
2. The value is $\operatorname{Arg}(x_0) = \pi$.
3. Evaluate the limits:
   * Approach from the upper half-plane ($y \to 0^+$):
     $$\lim_{y \to 0^+} \operatorname{Arg}(x_0 + iy) = \pi$$
   * Approach from the lower half-plane ($y \to 0^-$):
     $$\lim_{y \to 0^-} \operatorname{Arg}(x_0 + iy) = -\pi$$
4. Since the limits from the two sides do not match, the limit does not exist, so $\operatorname{Arg}(z)$ is discontinuous at all points on the negative real axis.

---

#### Problem 35
Show that the function $f(z) = \frac{\bar{z}}{z}$ is discontinuous at $z = 0$.

**Solution:**
1. The value $f(0)$ is undefined (division by zero).
2. Furthermore, as shown in Problem 7, the limit as $z \to 0$ does not exist.
Thus, the function is discontinuous at $z = 0$.

---

#### Problem 36
Find the value of $C$ that makes the function $f(z) = \frac{z^3 - 1}{z - 1}$ for $z \ne 1$, and $f(1) = C$, continuous at $z = 1$.

**Solution:**
We require:
$$C = \lim_{z \to 1} \frac{z^3 - 1}{z - 1}$$
1. Factor the numerator:
   $$z^3 - 1 = (z-1)(z^2 + z + 1)$$
2. Cancel the factor $z-1$ for $z \ne 1$:
   $$\frac{z^3 - 1}{z - 1} = z^2 + z + 1$$
3. Evaluate the limit:
   $$\lim_{z \to 1} (z^2 + z + 1) = 1^2 + 1 + 1 = 3$$
Thus, we must choose $\boxed{C = 3}$.

---

## Focus on Concepts (Problems 37 – 49)

#### Problem 37
Let $f(z)$ be a complex function.
(a) Show that if $\lim_{z \to z_0} f(z) = L$, then $\lim_{z \to z_0} |f(z)| = |L|$.
(b) Show that the converse is not true in general.

**Solution:**
**(a) Proof:**
1. By the triangle inequality:
   $$||f(z)| - |L|| \le |f(z) - L|$$
2. Let $\epsilon > 0$. Since $\lim_{z \to z_0} f(z) = L$, there exists a $\delta > 0$ such that:
   $$0 < |z - z_0| < \delta \implies |f(z) - L| < \epsilon$$
3. Substitute the inequality:
   $$||f(z)| - |L|| \le |f(z) - L| < \epsilon$$
   which proves that $\lim_{z \to z_0} |f(z)| = |L|$.

**(b) Converse counterexample:**
Consider $f(z) = \frac{z}{\bar{z}}$ as $z \to 0$.
* Modulus: $|f(z)| = \left|\frac{z}{\bar{z}}\right| = \frac{|z|}{|\bar{z}|} = 1$ for all $z \ne 0$.
  So $\lim_{z \to 0} |f(z)| = 1$.
* However, as shown in Problem 7, $\lim_{z \to 0} f(z)$ does not exist.
Thus, the converse is not true.

---

#### Problem 38
Prove the limit properties:
(a) $\lim_{z \to z_0} (f(z) + g(z)) = L + M$
(b) $\lim_{z \to z_0} f(z)g(z) = LM$
(c) $\lim_{z \to z_0} \frac{f(z)}{g(z)} = \frac{L}{M}$ (where $M \ne 0$)
assuming $\lim_{z \to z_0} f(z) = L$ and $\lim_{z \to z_0} g(z) = M$.

**Solution:**
These can be proven using the real-imaginary limit theorem:
Let $f = u_f + i v_f$, $g = u_g + i v_g$, $L = u_L + i v_L$, and $M = u_M + i v_M$.
1. We are given:
   $$\lim u_f = u_L, \quad \lim v_f = v_L \quad \text{and} \quad \lim u_g = u_M, \quad \lim v_g = v_M$$
2. For (a):
   $$f(z) + g(z) = (u_f + u_g) + i(v_f + v_g)$$
   By the limit properties of real functions:
   $$\lim(u_f + u_g) = u_L + u_M \quad \text{and} \quad \lim(v_f + v_g) = v_L + v_M$$
   Thus, the limit is $(u_L + u_M) + i(v_L + v_M) = L + M$.
3. Part (b) and (c) follow similarly by expanding the products and quotients and using the real limit laws.

---

#### Problem 39
Show that the function $f(z) = \arg(z)$ is discontinuous at all points on the negative real axis.

**Solution:**
As shown in Problem 34 for $\operatorname{Arg}(z)$, any branch of the argument must have a jump discontinuity of $2\pi$ across its branch cut.
For the principal branch, the cut is along the negative real axis where the argument jumps from $\pi$ (approaching from above) to $-\pi$ (approaching from below).

---

#### Problem 40
Show that if $f(z)$ is continuous at $z_0$, then $|f(z)|$ is also continuous at $z_0$.

**Solution:**
1. Since $f(z)$ is continuous at $z_0$, we have:
   $$\lim_{z \to z_0} f(z) = f(z_0)$$
2. From Problem 37(a), taking the limit of the modulus:
   $$\lim_{z \to z_0} |f(z)| = |f(z_0)|$$
3. This is exactly the definition of continuity for the real-valued function $|f(z)|$ at $z_0$.
This completes the proof.

---

#### Problem 41
Show that if $f(z)$ and $g(z)$ are continuous at $z_0$, then their composition $f(g(z))$ is continuous at $z_0$ if $f$ is continuous at $g(z_0)$.

**Solution:**
Let $\epsilon > 0$.
1. Since $f$ is continuous at $w_0 = g(z_0)$, there exists a $\gamma > 0$ such that:
   $$|w - w_0| < \gamma \implies |f(w) - f(w_0)| < \epsilon$$
2. Since $g$ is continuous at $z_0$, for the value $\gamma > 0$, there exists a $\delta > 0$ such that:
   $$|z - z_0| < \delta \implies |g(z) - g(z_0)| < \gamma$$
3. Let $w = g(z)$. Substitute this into the first step:
   $$|z - z_0| < \delta \implies |g(z) - g(z_0)| < \gamma \implies |f(g(z)) - f(g(z_0))| < \epsilon$$
Thus, $f(g(z))$ is continuous at $z_0$.

---

#### Problem 42
Determine the limits at infinity:
(a) $\lim_{z \to \infty} \frac{z^2 + 1}{z^3 + i}$
(b) $\lim_{z \to \infty} \frac{z^3 + i}{z^2 + 1}$
(c) $\lim_{z \to \infty} \frac{z^2 + 1}{3z^2 + i}$

**Solution:**
**(a) $\lim_{z \to \infty} \frac{z^2 + 1}{z^3 + i}$:**
Apply $z \to 1/z$:
$$\lim_{z \to 0} \frac{1/z^2 + 1}{1/z^3 + i} = \lim_{z \to 0} \frac{z(1+z^2)}{1+iz^3} = 0$$
Thus, the limit is $\boxed{0}$.

**(b) $\lim_{z \to \infty} \frac{z^3 + i}{z^2 + 1}$:**
Apply $z \to 1/z$ to the reciprocal:
$$\lim_{z \to 0} \frac{1/z^2 + 1}{1/z^3 + i} = 0$$
Thus, the limit of the original function is $\boxed{\infty}$.

**(c) $\lim_{z \to \infty} \frac{z^2 + 1}{3z^2 + i}$:**
Apply $z \to 1/z$:
$$\lim_{z \to 0} \frac{1/z^2 + 1}{3/z^2 + i} = \lim_{z \to 0} \frac{1+z^2}{3+iz^2} = \frac{1}{3}$$
Thus, the limit is $\boxed{\frac{1}{3}}$.

---

#### Problem 43
Let $P(z) = a_n z^n + \dots + a_0$ and $Q(z) = b_m z^m + \dots + b_0$ with $a_n, b_m \ne 0$.
Show that $\lim_{z \to \infty} \frac{P(z)}{Q(z)}$ is:
(a) $0$ if $n < m$.
(b) $a_n/b_m$ if $n = m$.
(c) $\infty$ if $n > m$.

**Solution:**
We rewrite the ratio by factoring out the highest powers:
$$\frac{P(z)}{Q(z)} = \frac{a_n z^n (1 + a_{n-1}/(a_n z) + \dots)}{b_m z^m (1 + b_{m-1}/(b_m z) + \dots)} = z^{n-m} \frac{a_n (1 + O(1/z))}{b_m (1 + O(1/z))}$$
As $z \to \infty$, the term $\frac{a_n (1 + O(1/z))}{b_m (1 + O(1/z))} \to \frac{a_n}{b_m}$.
We evaluate the limit of $z^{n-m}$:
* **(a) If $n < m$:** $n - m < 0$, so $z^{n-m} = 1/z^{m-n} \to 0$. The limit is $0 \cdot (a_n/b_m) = 0$.
* **(b) If $n = m$:** $n - m = 0$, so $z^{n-m} = 1$. The limit is $1 \cdot (a_n/b_m) = a_n/b_m$.
* **(c) If $n > m$:** $n - m > 0$, so $z^{n-m} \to \infty$. The limit is $\infty$.

---

#### Problem 44
Define the limit statement $\lim_{z \to z_0} f(z) = \infty$ using $\epsilon$-$\delta$ style inequalities.

**Solution:**
The statement means that as $z$ gets close to $z_0$, the modulus $|f(z)|$ grows without bound.
* **Definition:** $\lim_{z \to z_0} f(z) = \infty$ if for every real number $M > 0$, there exists a $\delta > 0$ such that:
  $$0 < |z - z_0| < \delta \implies |f(z)| > M$$

---

#### Problem 45
Prove that if $\lim_{z \to z_0} f(z) = \infty$ and $\lim_{z \to z_0} g(z) = L$, then $\lim_{z \to z_0} (f(z) + g(z)) = \infty$.

**Solution:**
1. Let $M > 0$. We want to show there exists $\delta > 0$ such that $|f(z) + g(z)| > M$ when $0 < |z-z_0| < \delta$.
2. Since $\lim g(z) = L$, there exists $\delta_1 > 0$ such that $|g(z) - L| < 1 \implies |g(z)| \ge |L| - 1$ (by reverse triangle inequality).
3. Since $\lim f(z) = \infty$, for the value $M + |L| + 1$, there exists $\delta_2 > 0$ such that:
   $$|f(z)| > M + |L| + 1 \quad \text{when } 0 < |z-z_0| < \delta_2$$
4. Choose $\delta = \min(\delta_1, \delta_2)$. If $0 < |z-z_0| < \delta$, then:
   $$|f(z) + g(z)| \le |f(z)| - |g(z)| \quad \text{is not helpful. Use:}$$
   $$|f(z) + g(z)| \ge |f(z)| - |g(z)|$$
   Since $|g(z)| \le |L| + 1$ (from $|g(z)-L| < 1 \implies |g(z)| \le |L| + 1$):
   $$|f(z) + g(z)| \ge |f(z)| - (|L| + 1) > (M + |L| + 1) - (|L| + 1) = M$$
This completes the proof.

---

#### Problem 46
Show that the function $f(z) = \frac{1}{1 - |z|^2}$ is continuous on its domain, and describe its domain.

**Solution:**
1. The domain of $f(z)$ excludes points where the denominator is zero:
   $$1 - |z|^2 = 0 \implies |z| = 1$$
   * **Domain:** All complex numbers except those on the unit circle $|z| = 1$.
2. The function is a composition of continuous functions (modulus, subtraction, division).
Thus, it is continuous on its domain.

---

#### Problem 47
Let $f(z) = \frac{z}{\bar{z}}$ for $z \ne 0$. Can we define $f(0)$ such that $f$ is continuous at $0$?

**Solution:**
**No**. As shown in Problem 7, $\lim_{z \to 0} \frac{z}{\bar{z}}$ does not exist because the limit depends on the path of approach.
For a function to be continuous at a point, the limit as $z$ approaches that point must exist. Since the limit does not exist, no definition of $f(0)$ can make the function continuous at 0.

---

#### Problem 48
Uniform continuity:
(a) Write the definition of uniform continuity for a complex function $f$ on a set $S$.
(b) Show that $f(z) = 2z$ is uniformly continuous on the entire complex plane.

**Solution:**
**(a) Definition:**
A function $f(z)$ is uniformly continuous on a set $S$ if for every $\epsilon > 0$, there exists a $\delta > 0$ (depending only on $\epsilon$, not on any specific point in $S$) such that for all $z_1, z_2 \in S$:
$$|z_1 - z_2| < \delta \implies |f(z_1) - f(z_2)| < \epsilon$$

**(b) Proof for $f(z) = 2z$:**
1. Let $\epsilon > 0$. We evaluate the difference:
   $$|f(z_1) - f(z_2)| = |2z_1 - 2z_2| = 2 |z_1 - z_2|$$
2. We want this to be less than $\epsilon$:
   $$2 |z_1 - z_2| < \epsilon \implies |z_1 - z_2| < \frac{\epsilon}{2}$$
3. Choose $\delta = \frac{\epsilon}{2}$.
4. Then for any $z_1, z_2 \in \mathbb{C}$, if $|z_1 - z_2| < \delta$, we have:
   $$|f(z_1) - f(z_2)| = 2 |z_1 - z_2| < 2\delta = \epsilon$$
Since $\delta$ depends only on $\epsilon$, the function is uniformly continuous on $\mathbb{C}$.

---

#### Problem 49
Is the function $f(z) = 1/z$ uniformly continuous on the punctured disk $0 < |z| < 1$?

**Solution:**
**No**. Let's show this by contradiction.
Suppose $f(z) = 1/z$ is uniformly continuous on $0 < |z| < 1$.
1. Let $\epsilon = 1$. Then there exists a $\delta > 0$ such that $|z_1 - z_2| < \delta \implies |1/z_1 - 1/z_2| < 1$.
2. Let's choose two points very close to 0:
   $$z_1 = \frac{1}{n} \quad \text{and} \quad z_2 = \frac{1}{n+1}$$
3. The distance between them is:
   $$|z_1 - z_2| = \frac{1}{n(n+1)}$$
   For sufficiently large $n$, we can make this distance less than $\delta$ (since $\lim_{n\to\infty} \frac{1}{n(n+1)} = 0$).
4. However, the difference of their function values is:
   $$|f(z_1) - f(z_2)| = |n - (n+1)| = 1$$
   This is not strictly less than $\epsilon = 1$, which is a contradiction.
Thus, the function is not uniformly continuous on the punctured disk.
