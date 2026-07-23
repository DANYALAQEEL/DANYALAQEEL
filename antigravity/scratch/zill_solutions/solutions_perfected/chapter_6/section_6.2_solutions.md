# Complex Analysis — Dennis G. Zill, 2nd Edition
## Chapter 6 · Series and Residues
### Section 6.2: Taylor Series
### Complete Solutions

![Figure 6.4](../../extracted_figures/figure_6_4.png)

---


## Problems 1-8

## Problem 1: $f(z) = \dfrac{z}{1+z}$

**Step 1.** Recall the geometric series $\dfrac{1}{1-w} = \displaystyle\sum_{k=0}^\infty w^k$ for $|w|<1$. Substitute $w = -z$:

$$\frac{1}{1+z} = \sum_{k=0}^\infty (-1)^k z^k, \quad |z| < 1$$

**Step 2.** Multiply both sides by $z$:

$$\frac{z}{1+z} = \sum_{k=0}^\infty (-1)^k z^{k+1}$$

**Step 3.** Re-index with $k \mapsto k-1$:

$$\frac{z}{1+z} = \sum_{k=1}^\infty (-1)^{k-1} z^k = z - z^2 + z^3 - z^4 + \cdots$$

The series converges for $|-z|<1$, giving $R=1$.

$$\boxed{f(z) = \sum_{k=1}^\infty (-1)^{k+1} z^k, \quad R = 1}$$

---

## Problem 2: $f(z) = \dfrac{1}{4-2z}$

**Step 1.** Factor 4 from the denominator:

$$\frac{1}{4-2z} = \frac{1}{4}\cdot\frac{1}{1 - z/2}$$

**Step 2.** Apply the geometric series with $w = z/2$:

$$\frac{1}{4-2z} = \frac{1}{4}\sum_{k=0}^\infty \left(\frac{z}{2}\right)^k = \frac{1}{4}\sum_{k=0}^\infty \frac{z^k}{2^k} = \sum_{k=0}^\infty \frac{z^k}{2^{k+2}}$$

Expanded: $= \dfrac{1}{4} + \dfrac{z}{8} + \dfrac{z^2}{16} + \cdots$

The series converges for $|z/2| < 1$, i.e., $|z| < 2$.

$$\boxed{f(z) = \sum_{k=0}^\infty \frac{z^k}{2^{k+2}}, \quad R = 2}$$

---

## Problem 3: $f(z) = \dfrac{1}{(1+2z)^2}$

**Step 1.** Apply the geometric series with $w = -2z$:

$$\frac{1}{1+2z} = \sum_{k=0}^\infty (-2z)^k = \sum_{k=0}^\infty (-1)^k 2^k z^k, \quad |z| < \tfrac{1}{2}$$

**Step 2.** Differentiate both sides with respect to $z$ (term-by-term differentiation is valid inside $R$):

$$\frac{d}{dz}\!\left[\frac{1}{1+2z}\right] = \frac{-2}{(1+2z)^2} = \sum_{k=1}^\infty (-1)^k\, k\, 2^k\, z^{k-1}$$

**Step 3.** Divide both sides by $-2$:

$$\frac{1}{(1+2z)^2} = -\frac{1}{2}\sum_{k=1}^\infty (-1)^k\, k\, 2^k\, z^{k-1} = \sum_{k=1}^\infty (-1)^{k+1}\, k\, 2^{k-1}\, z^{k-1}$$

Since $(-1)^{k+1} = (-1)^{k-1}$ and $2^{k-1}z^{k-1} = (2z)^{k-1}/1$:

$$\frac{1}{(1+2z)^2} = \sum_{k=1}^\infty (-1)^{k-1}\, k\,(2z)^{k-1} = 1 - 4z + 12z^2 - 32z^3 + \cdots$$

Differentiation does not shrink the radius of convergence of a power series.

$$\boxed{f(z) = \sum_{k=1}^\infty (-1)^{k-1}\, k\,(2z)^{k-1}, \quad R = \tfrac{1}{2}}$$

---

## Problem 4: $f(z) = \dfrac{z}{(1-z)^3}$

**Step 1.** From the geometric series:

$$\frac{1}{1-z} = \sum_{k=0}^\infty z^k, \quad |z| < 1$$

**Step 2.** Differentiate once:

$$\frac{1}{(1-z)^2} = \sum_{k=1}^\infty k\, z^{k-1} = \sum_{k=0}^\infty (k+1)\, z^k$$

**Step 3.** Differentiate again:

$$\frac{2}{(1-z)^3} = \sum_{k=1}^\infty k(k+1)\, z^{k-1}$$

**Step 4.** Divide by 2:

$$\frac{1}{(1-z)^3} = \frac{1}{2}\sum_{k=1}^\infty k(k+1)\, z^{k-1}$$

**Step 5.** Multiply by $z$:

$$\frac{z}{(1-z)^3} = \frac{1}{2}\sum_{k=1}^\infty k(k+1)\, z^k = \sum_{k=1}^\infty \frac{k(k+1)}{2}\, z^k = z + 3z^2 + 6z^3 + 10z^4 + \cdots$$

$$\boxed{f(z) = \sum_{k=1}^\infty \frac{k(k+1)}{2}\, z^k, \quad R = 1}$$

---

## Problem 5: $f(z) = e^{-2z}$

**Step 1.** Recall the Maclaurin series $e^z = \displaystyle\sum_{k=0}^\infty \dfrac{z^k}{k!}$, valid for all $z\in\mathbb{C}$.

**Step 2.** Substitute $z \mapsto -2z$:

$$e^{-2z} = \sum_{k=0}^\infty \frac{(-2z)^k}{k!} = \sum_{k=0}^\infty \frac{(-1)^k\,(2z)^k}{k!} = 1 - 2z + \frac{(2z)^2}{2!} - \frac{(2z)^3}{3!} + \cdots$$

The radius of convergence is inherited from $e^z$.

$$\boxed{f(z) = \sum_{k=0}^\infty \frac{(-1)^k}{k!}(2z)^k, \quad R = \infty}$$

---

## Problem 6: $f(z) = ze^{-z^2}$

**Step 1.** Substitute $z \mapsto -z^2$ in the exponential series:

$$e^{-z^2} = \sum_{k=0}^\infty \frac{(-z^2)^k}{k!} = \sum_{k=0}^\infty \frac{(-1)^k\, z^{2k}}{k!}$$

**Step 2.** Multiply by $z$:

$$ze^{-z^2} = \sum_{k=0}^\infty \frac{(-1)^k\, z^{2k+1}}{k!} = z - z^3 + \frac{z^5}{2!} - \frac{z^7}{3!} + \cdots$$

**Step 3.** Confirm $R = \infty$ via the ratio test:

$$\left|\frac{a_{k+1}}{a_k}\right| = \frac{|z|^{2k+3}/(k+1)!}{|z|^{2k+1}/k!} = \frac{|z|^2}{k+1} \;\longrightarrow\; 0 \text{ as } k\to\infty$$

$$\boxed{f(z) = \sum_{k=0}^\infty \frac{(-1)^k}{k!}\, z^{2k+1}, \quad R = \infty}$$

---

## Problem 7: $f(z) = \sinh z$

**Step 1.** Use the definition $\sinh z = \dfrac{e^z - e^{-z}}{2}$ and write:

$$e^z = \sum_{k=0}^\infty \frac{z^k}{k!}, \qquad e^{-z} = \sum_{k=0}^\infty \frac{(-1)^k z^k}{k!}$$

**Step 2.** Subtract:

$$e^z - e^{-z} = \sum_{k=0}^\infty \frac{\bigl[1-(-1)^k\bigr]\, z^k}{k!}$$

**Step 3.** Observe that $1 - (-1)^k = 0$ for even $k$ and $1 - (-1)^k = 2$ for odd $k$, so only odd powers survive:

$$e^z - e^{-z} = 2\sum_{k=0}^\infty \frac{z^{2k+1}}{(2k+1)!}$$

**Step 4.** Divide by 2:

$$\sinh z = \sum_{k=0}^\infty \frac{z^{2k+1}}{(2k+1)!} = z + \frac{z^3}{3!} + \frac{z^5}{5!} + \cdots$$

This series converges for all $z$ since $e^z$ does.

$$\boxed{f(z) = \sum_{k=0}^\infty \frac{z^{2k+1}}{(2k+1)!}, \quad R = \infty}$$

---

## Problem 8: $f(z) = \cosh z$

**Step 1.** Use the definition $\cosh z = \dfrac{e^z + e^{-z}}{2}$:

$$e^z + e^{-z} = \sum_{k=0}^\infty \frac{\bigl[1+(-1)^k\bigr]\, z^k}{k!}$$

**Step 2.** Observe that $1 + (-1)^k = 2$ for even $k$ and $1 + (-1)^k = 0$ for odd $k$, so only even powers survive:

$$e^z + e^{-z} = 2\sum_{k=0}^\infty \frac{z^{2k}}{(2k)!}$$

**Step 3.** Divide by 2:

$$\cosh z = \sum_{k=0}^\infty \frac{z^{2k}}{(2k)!} = 1 + \frac{z^2}{2!} + \frac{z^4}{4!} + \frac{z^6}{6!} + \cdots$$

$$\boxed{f(z) = \sum_{k=0}^\infty \frac{z^{2k}}{(2k)!}, \quad R = \infty}$$

---

## Problems 9-14

## Problem 9: $f(z) = \cos(z/2)$

**Recall** the Maclaurin series for cosine:
$$\cos z = \sum_{k=0}^{\infty} \frac{(-1)^k}{(2k)!}\, z^{2k} = 1 - \frac{z^2}{2!} + \frac{z^4}{4!} - \cdots$$

**Substitute** $z \mapsto z/2$:
$$\cos\!\left(\frac{z}{2}\right) = \sum_{k=0}^{\infty} \frac{(-1)^k}{(2k)!}\left(\frac{z}{2}\right)^{\!2k} = \sum_{k=0}^{\infty} \frac{(-1)^k}{(2k)!\, 4^k}\, z^{2k}$$

Writing out the first several terms:
$$\cos\!\left(\frac{z}{2}\right) = 1 - \frac{z^2}{8} + \frac{z^4}{384} - \frac{z^6}{46080} + \cdots$$

Since $\cos z$ is entire, the substitution $z/2$ preserves entireness.

$$\boxed{\cos\!\left(\frac{z}{2}\right) = \sum_{k=0}^{\infty} \frac{(-1)^k}{(2k)!}\left(\frac{z}{2}\right)^{\!2k}, \qquad R = \infty}$$

---

## Problem 10: $f(z) = \sin(3z)$

**Recall** the Maclaurin series for sine:
$$\sin z = \sum_{k=0}^{\infty} \frac{(-1)^k}{(2k+1)!}\, z^{2k+1} = z - \frac{z^3}{3!} + \frac{z^5}{5!} - \cdots$$

**Substitute** $z \mapsto 3z$:
$$\sin(3z) = \sum_{k=0}^{\infty} \frac{(-1)^k}{(2k+1)!}\,(3z)^{2k+1} = \sum_{k=0}^{\infty} \frac{(-1)^k\, 3^{2k+1}}{(2k+1)!}\, z^{2k+1}$$

Writing out the first several terms:
$$\sin(3z) = 3z - \frac{(3z)^3}{3!} + \frac{(3z)^5}{5!} - \cdots = 3z - \frac{9z^3}{2} + \frac{81z^5}{40} - \cdots$$

Since $\sin z$ is entire, the result is entire.

$$\boxed{\sin(3z) = \sum_{k=0}^{\infty} \frac{(-1)^k\, 3^{2k+1}}{(2k+1)!}\, z^{2k+1}, \qquad R = \infty}$$

---

## Problem 11: $f(z) = \sin(z^2)$

**Recall** the Maclaurin series for sine:
$$\sin z = \sum_{k=0}^{\infty} \frac{(-1)^k}{(2k+1)!}\, z^{2k+1}$$

**Substitute** $z \mapsto z^2$:
$$\sin(z^2) = \sum_{k=0}^{\infty} \frac{(-1)^k}{(2k+1)!}\,(z^2)^{2k+1} = \sum_{k=0}^{\infty} \frac{(-1)^k}{(2k+1)!}\, z^{4k+2}$$

Writing out the first several terms:
$$\sin(z^2) = z^2 - \frac{z^6}{3!} + \frac{z^{10}}{5!} - \frac{z^{14}}{7!} + \cdots$$

Since $\sin z$ is entire, the composition with the entire function $z^2$ is entire.

$$\boxed{\sin(z^2) = \sum_{k=0}^{\infty} \frac{(-1)^k}{(2k+1)!}\, z^{4k+2}, \qquad R = \infty}$$

---

## Problem 12: $f(z) = \cos^2 z$

**Apply the trigonometric identity:**
$$\cos^2 z = \frac{1 + \cos(2z)}{2}$$

**Expand** $\cos(2z)$ by substituting $z \mapsto 2z$ into the cosine series:
$$\cos(2z) = \sum_{k=0}^{\infty} \frac{(-1)^k}{(2k)!}\,(2z)^{2k} = \sum_{k=0}^{\infty} \frac{(-1)^k\, 4^k}{(2k)!}\, z^{2k}$$

**Combine:**
$$\cos^2 z = \frac{1}{2} + \frac{1}{2}\sum_{k=0}^{\infty} \frac{(-1)^k\, 4^k}{(2k)!}\, z^{2k}$$

Isolating the $k=0$ term (which equals $1$) and multiplying through:
$$\cos^2 z = 1 + \sum_{k=1}^{\infty} \frac{(-1)^k\, 2^{2k-1}}{(2k)!}\, z^{2k}$$

**Verification of first terms:**
- $k=1$: $\dfrac{(-1)^1 \cdot 2^1}{2!}\,z^2 = -z^2$
- $k=2$: $\dfrac{(-1)^2 \cdot 2^3}{4!}\,z^4 = \dfrac{z^4}{3}$
- $k=3$: $\dfrac{(-1)^3 \cdot 2^5}{6!}\,z^6 = -\dfrac{2z^6}{45}$

So:
$$\cos^2 z = 1 - z^2 + \frac{z^4}{3} - \frac{2z^6}{45} + \cdots$$

$$\boxed{\cos^2 z = 1 + \sum_{k=1}^{\infty} \frac{(-1)^k\, 2^{2k-1}}{(2k)!}\, z^{2k}, \qquad R = \infty}$$

---

## Problem 13: $f(z) = e^z$, centered at $z_0 = 3i$

The Taylor series centered at $z_0$ is $\displaystyle\sum_{k=0}^{\infty} \frac{f^{(k)}(z_0)}{k!}(z - z_0)^k$.

**Compute the derivatives:** Since $\dfrac{d^k}{dz^k} e^z = e^z$ for all $k \geq 0$,
$$f^{(k)}(3i) = e^{3i} \quad \text{for all } k = 0, 1, 2, \ldots$$

**Substitute** $z_0 = 3i$:
$$e^z = \sum_{k=0}^{\infty} \frac{e^{3i}}{k!}(z - 3i)^k = e^{3i}\sum_{k=0}^{\infty} \frac{(z-3i)^k}{k!}$$

**Note:** By Euler's formula, $e^{3i} = \cos 3 + i\sin 3$.

Writing out the first terms:
$$e^z = e^{3i}\left[1 + (z-3i) + \frac{(z-3i)^2}{2!} + \frac{(z-3i)^3}{3!} + \cdots\right]$$

Since $e^z$ is entire, the series converges for all $z \in \mathbb{C}$.

$$\boxed{e^z = e^{3i}\sum_{k=0}^{\infty} \frac{(z-3i)^k}{k!}, \qquad R = \infty}$$

---

## Problem 14: $f(z) = (z-1)e^{-3z}$, centered at $z_0 = 1$

**Introduce the shift** $w = z - 1$, so $z = w + 1$. The expansion is in powers of $w = (z-1)$.

**Rewrite $f$:**
$$f(z) = w \cdot e^{-3(w+1)} = w \cdot e^{-3}\cdot e^{-3w} = e^{-3}\, w\, e^{-3w}$$

**Expand $e^{-3w}$** using the standard exponential series:
$$e^{-3w} = \sum_{k=0}^{\infty} \frac{(-3w)^k}{k!} = \sum_{k=0}^{\infty} \frac{(-3)^k}{k!}\, w^k$$

**Multiply by $w$:**
$$f(z) = e^{-3}\sum_{k=0}^{\infty} \frac{(-3)^k}{k!}\, w^{k+1} = e^{-3}\sum_{k=0}^{\infty} \frac{(-3)^k}{k!}(z-1)^{k+1}$$

Writing out the first terms explicitly:
$$f(z) = e^{-3}\left[(z-1) - 3(z-1)^2 + \frac{9}{2}(z-1)^3 - \frac{9}{2}(z-1)^4 + \cdots\right]$$

Since $f(z)$ is an entire function (product of a polynomial and an exponential), the series converges everywhere.

$$\boxed{(z-1)e^{-3z} = e^{-3}\sum_{k=0}^{\infty} \frac{(-3)^k}{k!}(z-1)^{k+1}, \qquad R = \infty}$$

---

## Problems 15-22

## Problem 15 — $f(z) = \dfrac{1}{z},\quad z_0 = 1$

Write $z = 1 + (z-1)$:

$$\frac{1}{z} = \frac{1}{1+(z-1)} = \frac{1}{1-[-(z-1)]} = \sum_{k=0}^{\infty}[-(z-1)]^k$$

applying the geometric series $\dfrac{1}{1-w} = \displaystyle\sum_{k=0}^\infty w^k$ with $w = -(z-1)$.

$$\boxed{\frac{1}{z} = \sum_{k=0}^{\infty}(-1)^k(z-1)^k, \qquad R = 1}$$

The series converges when $|w| = |z-1| < 1$.

---

## Problem 16 — $f(z) = \dfrac{1}{z},\quad z_0 = 1+i$

Write $z = (1+i)+(z-(1+i))$ and factor:

$$\frac{1}{z} = \frac{1}{(1+i)\!\left[1+\dfrac{z-(1+i)}{1+i}\right]} = \frac{1}{1+i}\cdot\frac{1}{1-\left[-\dfrac{z-(1+i)}{1+i}\right]}$$

Apply the geometric series with $w = -\dfrac{z-(1+i)}{1+i}$:

$$\frac{1}{z} = \frac{1}{1+i}\sum_{k=0}^{\infty}\left(\frac{-(z-(1+i))}{1+i}\right)^k = \sum_{k=0}^{\infty}\frac{(-1)^k}{(1+i)^{k+1}}\bigl(z-(1+i)\bigr)^k$$

The series converges when $\left|\dfrac{z-(1+i)}{1+i}\right| < 1$, i.e., $|z-(1+i)| < |1+i| = \sqrt{2}$.

$$\boxed{\frac{1}{z} = \sum_{k=0}^{\infty}\frac{(-1)^k}{(1+i)^{k+1}}\bigl(z-(1+i)\bigr)^k, \qquad R = \sqrt{2}}$$

---

## Problem 17 — $f(z) = \dfrac{1}{3-z},\quad z_0 = 2i$

Write $3 - z = (3-2i)-(z-2i)$ and factor:

$$\frac{1}{3-z} = \frac{1}{(3-2i)\!\left[1-\dfrac{z-2i}{3-2i}\right]} = \frac{1}{3-2i}\cdot\frac{1}{1-\dfrac{z-2i}{3-2i}}$$

Apply the geometric series with $w = \dfrac{z-2i}{3-2i}$:

$$\frac{1}{3-z} = \frac{1}{3-2i}\sum_{k=0}^{\infty}\left(\frac{z-2i}{3-2i}\right)^k$$

$$\boxed{\frac{1}{3-z} = \sum_{k=0}^{\infty}\frac{1}{(3-2i)^{k+1}}(z-2i)^k, \qquad R = \sqrt{13}}$$

The series converges when $\left|\dfrac{z-2i}{3-2i}\right| < 1$, i.e., $|z-2i| < |3-2i| = \sqrt{9+4} = \sqrt{13}$.

---

## Problem 18 — $f(z) = \dfrac{1}{1+z},\quad z_0 = -i$

Note $z + i = z - z_0$. Write $1+z = (1-i)+(z+i)$ and factor:

$$\frac{1}{1+z} = \frac{1}{(1-i)\!\left[1+\dfrac{z+i}{1-i}\right]} = \frac{1}{1-i}\cdot\frac{1}{1-\!\left[-\dfrac{z+i}{1-i}\right]}$$

Apply the geometric series with $w = -\dfrac{z+i}{1-i}$:

$$\frac{1}{1+z} = \frac{1}{1-i}\sum_{k=0}^{\infty}\left(\frac{-(z+i)}{1-i}\right)^k = \sum_{k=0}^{\infty}\frac{(-1)^k}{(1-i)^{k+1}}(z+i)^k$$

The series converges when $\left|\dfrac{z+i}{1-i}\right| < 1$, i.e., $|z+i| < |1-i| = \sqrt{2}$.

$$\boxed{\frac{1}{1+z} = \sum_{k=0}^{\infty}\frac{(-1)^k}{(1-i)^{k+1}}(z-(-i))^k, \qquad R = \sqrt{2}}$$

---

## Problem 19 — $f(z) = \dfrac{z-1}{3-z},\quad z_0 = 1$

Let $u = z - 1$, so $z = 1 + u$ and $3 - z = 2 - u = 2\!\left(1 - \dfrac{u}{2}\right)$:

$$\frac{z-1}{3-z} = \frac{u}{2-u} = \frac{u}{2\!\left(1-\dfrac{u}{2}\right)} = \frac{u}{2}\cdot\frac{1}{1-\dfrac{u}{2}}$$

Apply the geometric series with $w = \dfrac{u}{2}$:

$$= \frac{u}{2}\sum_{k=0}^{\infty}\left(\frac{u}{2}\right)^k = \sum_{k=0}^{\infty}\frac{u^{k+1}}{2^{k+1}} = \sum_{k=1}^{\infty}\frac{u^k}{2^k}$$

$$\boxed{\frac{z-1}{3-z} = \sum_{k=1}^{\infty}\frac{1}{2^k}(z-1)^k, \qquad R = 2}$$

The series converges when $\left|\dfrac{z-1}{2}\right| < 1$, i.e., $|z-1| < 2$.

**Verification of first terms:** $\dfrac{1}{2}(z-1) + \dfrac{1}{4}(z-1)^2 + \dfrac{1}{8}(z-1)^3 + \cdots$

---

## Problem 20 — $f(z) = \dfrac{1+z}{1-z},\quad z_0 = i$

Decompose by writing $1+z = 2-(1-z)$:

$$\frac{1+z}{1-z} = \frac{2}{1-z} - 1$$

Now expand $\dfrac{2}{1-z}$ about $z_0 = i$. Write $1-z = (1-i)-(z-i)$ and factor:

$$\frac{2}{1-z} = \frac{2}{(1-i)\!\left[1-\dfrac{z-i}{1-i}\right]} = \frac{2}{1-i}\sum_{k=0}^{\infty}\left(\frac{z-i}{1-i}\right)^k = \sum_{k=0}^{\infty}\frac{2}{(1-i)^{k+1}}(z-i)^k$$

The constant term ($k=0$) is $\dfrac{2}{1-i} = \dfrac{2(1+i)}{|1-i|^2} = 1+i$. Therefore:

$$\frac{1+z}{1-z} = -1 + (1+i) + \sum_{k=1}^{\infty}\frac{2}{(1-i)^{k+1}}(z-i)^k$$

$$\boxed{\frac{1+z}{1-z} = i + \sum_{k=1}^{\infty}\frac{2}{(1-i)^{k+1}}(z-i)^k, \qquad R = \sqrt{2}}$$

Or equivalently as a single sum starting at $k = 0$:

$$\frac{1+z}{1-z} = -1 + \sum_{k=0}^{\infty}\frac{2}{(1-i)^{k+1}}(z-i)^k$$

The series converges when $\left|\dfrac{z-i}{1-i}\right| < 1$, i.e., $|z-i| < |1-i| = \sqrt{2}$.

**Check at $z = i$:** Series gives $i + 0 = i$; direct evaluation gives $\dfrac{1+i}{1-i} = \dfrac{(1+i)^2}{2} = i$. $\checkmark$

---

## Problem 21 — $f(z) = \cos z,\quad z_0 = \pi/4$

Apply the cosine addition formula $\cos(A+B) = \cos A \cos B - \sin A \sin B$ with $A = \pi/4$ and $B = z - \pi/4$:

$$\cos z = \cos\!\left(\frac{\pi}{4}+\left(z-\frac{\pi}{4}\right)\right) = \cos\frac{\pi}{4}\cos\!\left(z-\frac{\pi}{4}\right) - \sin\frac{\pi}{4}\sin\!\left(z-\frac{\pi}{4}\right)$$

Substitute the known Maclaurin series $\cos w = \displaystyle\sum_{k=0}^\infty \dfrac{(-1)^k w^{2k}}{(2k)!}$ and $\sin w = \displaystyle\sum_{k=0}^\infty \dfrac{(-1)^k w^{2k+1}}{(2k+1)!}$:

$$\boxed{\cos z = \frac{\sqrt{2}}{2}\sum_{k=0}^{\infty}\frac{(-1)^k}{\,(2k)!\,}\!\left(z-\frac{\pi}{4}\right)^{2k} - \frac{\sqrt{2}}{2}\sum_{k=0}^{\infty}\frac{(-1)^k}{\,(2k+1)!\,}\!\left(z-\frac{\pi}{4}\right)^{2k+1}, \qquad R = \infty}$$

**First several terms** (collect by power $n$, with coefficients $c_n = f^{(n)}(\pi/4)/n!$):

| $n$ | $f^{(n)}(z)$ | $f^{(n)}(\pi/4)$ | $c_n$ |
|---|---|---|---|
| 0 | $\cos z$ | $\tfrac{\sqrt{2}}{2}$ | $\tfrac{\sqrt{2}}{2}$ |
| 1 | $-\sin z$ | $-\tfrac{\sqrt{2}}{2}$ | $-\tfrac{\sqrt{2}}{2}$ |
| 2 | $-\cos z$ | $-\tfrac{\sqrt{2}}{2}$ | $-\tfrac{\sqrt{2}}{4}$ |
| 3 | $\sin z$ | $\tfrac{\sqrt{2}}{2}$ | $\tfrac{\sqrt{2}}{12}$ |
| 4 | $\cos z$ | $\tfrac{\sqrt{2}}{2}$ | $\tfrac{\sqrt{2}}{48}$ |

$$\cos z = \frac{\sqrt{2}}{2} - \frac{\sqrt{2}}{2}\!\left(z-\frac{\pi}{4}\right) - \frac{\sqrt{2}}{4}\!\left(z-\frac{\pi}{4}\right)^2 + \frac{\sqrt{2}}{12}\!\left(z-\frac{\pi}{4}\right)^3 + \frac{\sqrt{2}}{48}\!\left(z-\frac{\pi}{4}\right)^4 - \cdots$$

Since $\cos z$ is entire, $R = \infty$.

---

## Problem 22 — $f(z) = \sin z,\quad z_0 = \pi/2$

Apply the sine addition formula $\sin(A+B) = \sin A\cos B + \cos A\sin B$ with $A = \pi/2$ and $B = z - \pi/2$:

$$\sin z = \sin\frac{\pi}{2}\cos\!\left(z-\frac{\pi}{2}\right) + \cos\frac{\pi}{2}\sin\!\left(z-\frac{\pi}{2}\right) = 1\cdot\cos\!\left(z-\frac{\pi}{2}\right) + 0\cdot\sin\!\left(z-\frac{\pi}{2}\right)$$

$$= \cos\!\left(z-\frac{\pi}{2}\right) = \sum_{k=0}^{\infty}\frac{(-1)^k}{(2k)!}\!\left(z-\frac{\pi}{2}\right)^{2k}$$

$$\boxed{\sin z = \sum_{k=0}^{\infty}\frac{(-1)^k}{(2k)!}\!\left(z-\frac{\pi}{2}\right)^{2k}, \qquad R = \infty}$$

**Explicitly:**

$$\sin z = 1 - \frac{1}{2!}\!\left(z-\frac{\pi}{2}\right)^2 + \frac{1}{4!}\!\left(z-\frac{\pi}{2}\right)^4 - \frac{1}{6!}\!\left(z-\frac{\pi}{2}\right)^6 + \cdots$$

**Verification via derivatives:**

| $n$ | $f^{(n)}(z)$ | $f^{(n)}(\pi/2)$ | $c_n$ |
|---|---|---|---|
| 0 | $\sin z$ | $1$ | $1$ |
| 1 | $\cos z$ | $0$ | $0$ |
| 2 | $-\sin z$ | $-1$ | $-\tfrac{1}{2}$ |
| 3 | $-\cos z$ | $0$ | $0$ |
| 4 | $\sin z$ | $1$ | $\tfrac{1}{24}$ |

The pattern $\{1,0,-1,0,1,0,\ldots\}$ confirms only even powers survive, yielding the cosine series in $(z-\pi/2)$. Since $\sin z$ is entire, $R = \infty$.

---

## Problems 23-30

## Problem 23 — Maclaurin Series for $f(z) = \tan z$

Since $\tan z = \dfrac{\sin z}{\cos z}$ is an odd function, write

$$\tan z = a_1 z + a_3 z^3 + a_5 z^5 + \cdots$$

Multiplying both sides by $\cos z$ must recover $\sin z$:

$$\Bigl(1 - \tfrac{z^2}{2} + \tfrac{z^4}{24} - \cdots\Bigr)\bigl(a_1 z + a_3 z^3 + a_5 z^5 + \cdots\bigr) = z - \tfrac{z^3}{6} + \tfrac{z^5}{120} - \cdots$$

**Coefficient of $z^1$:**
$$a_1 = 1$$

**Coefficient of $z^3$:**
$$a_3 - \frac{a_1}{2} = -\frac{1}{6} \implies a_3 = -\frac{1}{6}+\frac{1}{2} = \frac{1}{3}$$

**Coefficient of $z^5$:**
$$a_5 - \frac{a_3}{2} + \frac{a_1}{24} = \frac{1}{120} \implies a_5 = \frac{1}{120}+\frac{1}{6}-\frac{1}{24} = \frac{1+20-5}{120} = \frac{2}{15}$$

$$\boxed{\tan z = z + \frac{1}{3}z^3 + \frac{2}{15}z^5 + \cdots}$$

---

## Problem 24 — Maclaurin Series for $f(z) = e^{1/(1+z)}$

Write $\dfrac{1}{1+z} = 1 + u$ where $u = \dfrac{-z}{1+z} = -z+z^2-z^3+\cdots$, so $f(z) = e\cdot e^u$.

Expand $e^u = 1 + u + \dfrac{u^2}{2!} + \dfrac{u^3}{3!} + \cdots$, collecting by powers of $z$:

$$u = -z + z^2 - z^3 + \cdots$$
$$u^2 = z^2 - 2z^3 + \cdots$$
$$u^3 = -z^3 + \cdots$$

**Constant term:** $1$

**Coefficient of $z$:** $-1$

**Coefficient of $z^2$:** $1 + \dfrac{1}{2} = \dfrac{3}{2}$

**Coefficient of $z^3$:** $-1 + \dfrac{1}{2}(-2) + \dfrac{1}{6}(-1) = -\dfrac{13}{6}$

$$\boxed{e^{1/(1+z)} = e - ez + \frac{3e}{2}z^2 - \frac{13e}{6}z^3 + \cdots}$$

---

## Problem 25 — Maclaurin Series for $f(z) = \dfrac{i}{(z-i)(z-2i)}$

**Partial fractions:** Write $\dfrac{i}{(z-i)(z-2i)} = \dfrac{A}{z-i}+\dfrac{B}{z-2i}$.

- Set $z=i$: $i = A(-i) \Rightarrow A = -1$
- Set $z=2i$: $i = B(i) \Rightarrow B = 1$

$$f(z) = \frac{-1}{z-i}+\frac{1}{z-2i} = \frac{1}{i-z}-\frac{1}{2i-z}$$

**Expand each term** as a geometric series valid for $|z|<|i|=1$:

$$\frac{1}{i-z} = \frac{1}{i}\cdot\frac{1}{1-z/i} = \frac{1}{i}\sum_{n=0}^{\infty}\frac{z^n}{i^n} = \sum_{n=0}^{\infty}\frac{z^n}{i^{n+1}}$$

$$\frac{1}{2i-z} = \frac{1}{2i}\cdot\frac{1}{1-z/(2i)} = \sum_{n=0}^{\infty}\frac{z^n}{(2i)^{n+1}}$$

Therefore:

$$f(z) = \sum_{n=0}^{\infty}\left[\frac{1}{i^{n+1}}-\frac{1}{(2i)^{n+1}}\right]z^n = \sum_{n=0}^{\infty}\frac{2^{n+1}-1}{(2i)^{n+1}}\,z^n$$

where the last equality uses $\dfrac{1}{i^{n+1}} = \dfrac{2^{n+1}}{(2i)^{n+1}}$.

$$\boxed{f(z) = \frac{1}{2i} + \frac{3}{(2i)^2}z + \frac{7}{(2i)^3}z^2 + \cdots}$$

**Radius of convergence:** The singularities are $z=i$ (distance $1$) and $z=2i$ (distance $2$) from the origin. Thus $R = 1$.

---

## Problem 26 — Maclaurin Series for $f(z) = \dfrac{z-7}{z^2-2z-3}$

Factor: $z^2-2z-3=(z-3)(z+1)$.

**Partial fractions:** $\dfrac{z-7}{(z-3)(z+1)} = \dfrac{A}{z-3}+\dfrac{B}{z+1}$

- Set $z=3$: $-4=4A \Rightarrow A=-1$
- Set $z=-1$: $-8=-4B \Rightarrow B=2$

$$f(z) = \frac{-1}{z-3}+\frac{2}{z+1} = \frac{1}{3-z}+\frac{2}{1+z}$$

**Expand** as geometric series for $|z|<1$:

$$\frac{1}{3-z} = \frac{1}{3}\sum_{n=0}^{\infty}\frac{z^n}{3^n}, \qquad \frac{2}{1+z} = 2\sum_{n=0}^{\infty}(-1)^n z^n$$

$$\boxed{f(z) = \sum_{n=0}^{\infty}\left[\frac{1}{3^{n+1}}+2(-1)^n\right]z^n = \frac{7}{3} - \frac{17}{9}z + \frac{55}{27}z^2 - \cdots}$$

**Radius of convergence:** Singularities at $z=-1$ (distance $1$) and $z=3$ (distance $3$). Thus $R=1$.

---

## Problem 27 — Radius of Convergence for $f(z) = \dfrac{4+5z}{1+z^2}$, $z_0 = 2+5i$

The singularities of $f$ occur where $1+z^2=0$, i.e., $z = \pm i$.

Compute distances from $z_0 = 2+5i$:

$$|z_0 - i| = |2+5i-i| = |2+4i| = \sqrt{4+16} = \sqrt{20} = 2\sqrt{5}$$

$$|z_0 +i| = |2+5i+i| = |2+6i| = \sqrt{4+36} = \sqrt{40} = 2\sqrt{10}$$

The nearest singularity is $z=i$ at distance $2\sqrt{5}$.

$$\boxed{R = 2\sqrt{5}}$$

---

## Problem 28 — Radius of Convergence for $f(z) = \cot z$, $z_0 = \pi i$

The singularities of $\cot z = \cos z/\sin z$ are where $\sin z = 0$, i.e., $z = n\pi,\ n\in\mathbb{Z}$.

Distances from $z_0 = \pi i$ to each:

$$|z_0 - 0| = |\pi i| = \pi$$

$$|z_0 \pm \pi| = |\pi i \mp \pi| = \pi|i\mp 1| = \pi\sqrt{2}$$

$$|z_0 - 2\pi| = \pi\sqrt{1+4} = \pi\sqrt{5}, \quad \text{etc.}$$

The nearest singularity is $z=0$ at distance $\pi$.

$$\boxed{R = \pi}$$

---

## Problem 29 — Radius of Convergence for Problem 23

The Maclaurin series for $\tan z$ is centered at $z_0=0$. The singularities of $\tan z$ occur where $\cos z = 0$:

$$z = \pm\frac{\pi}{2},\ \pm\frac{3\pi}{2},\ \ldots$$

The nearest singularities to the origin are $z = \pm\dfrac{\pi}{2}$, each at distance $\dfrac{\pi}{2}$.

$$\boxed{R = \frac{\pi}{2}}$$

---

## Problem 30 — Radius of Convergence for Problem 24

The Maclaurin series for $e^{1/(1+z)}$ is centered at $z_0=0$. The only singularity is the essential singularity at $z=-1$ (where $1+z=0$), at distance $|-1-0|=1$ from the origin.

$$\boxed{R = 1}$$

---

## Problems 31-35

## Problem 31

**Expand $f(z) = \dfrac{1}{2+z}$ at $z_0 = -1$ and $z_0 = i$**

The only singularity of $f$ is at $z = -2$.

---

### Expansion at $z_0 = -1$

Write $2 + z = 1 + (z+1)$, so

$$f(z) = \frac{1}{1+(z+1)} = \sum_{k=0}^{\infty}(-1)^k(z+1)^k, \qquad |z+1| < 1.$$

The radius of convergence equals the distance from the center $z_0 = -1$ to the nearest singularity $z = -2$:

$$R = \bigl|(-1)-(-2)\bigr| = 1.$$

> **Textbook Typo (Zill, Answer Key for §6.2 Problem 31):** The back-of-book answer states $R = \sqrt{2}$ for this expansion. This is **incorrect**. The function $f(z)=1/(2+z)$ has its only singularity at $z=-2$. The distance from the center $z_0 = -1$ to the singularity is $|-1-(-2)| = 1$, so the correct radius of convergence is $R = 1$. The value $\sqrt{2}$ would arise only if the center were $z_0 = i$ (not $z_0=-1$), so the answer for the two sub-parts appears to have been swapped or mistyped.

---

### Expansion at $z_0 = i$

Write $2+z = (2+i)+(z-i) = (2+i)\!\left[1 + \dfrac{z-i}{2+i}\right]$, so

$$f(z) = \frac{1}{2+i}\cdot\frac{1}{1+\dfrac{z-i}{2+i}} = \frac{1}{2+i}\sum_{k=0}^{\infty}\left(-\frac{z-i}{2+i}\right)^k = \sum_{k=0}^{\infty}\frac{(-1)^k}{(2+i)^{k+1}}(z-i)^k,$$

valid for $\left|\dfrac{z-i}{2+i}\right| < 1$, i.e., $|z-i| < |2+i| = \sqrt{5}$.

The radius of convergence equals the distance from $z_0 = i$ to the singularity $z = -2$:

$$R = |i-(-2)| = |2+i| = \sqrt{5}.$$

---

### Sketch of Convergence Regions

![Figure 6.5](../../extracted_figures/figure_6_5.png)

The two disks and the singular point $z=-2$ are located as follows:

```
Im
 3│
  │    D₂: |z−i|<√5
 2│   (center i, radius √5≈2.24)
  │
i=1│      ●i (center D₂)
  │
  │
──●──────────────────── Re
 -2  -1   0    1    2    3
  ×   ●
sing  center D₁
      |z+1|<1, R=1
```

- **$D_1$**: open disk $|z+1|<1$, centered at $-1$, radius $1$ (tangent to singularity at $-2$).  
- **$D_2$**: open disk $|z-i|<\sqrt{5}$, centered at $i$, radius $\sqrt{5}\approx 2.236$.  
- The singularity $z=-2$ lies on the boundary of $D_1$ and outside $D_2$ (since $|-2-i|=\sqrt{5}$, which is on the boundary of $D_2$).  
- **Both series converge simultaneously** in the intersection $D_1 \cap D_2$, which is the smaller disk $|z+1|<1$ (since $D_1 \subset D_2$).

---

## Problem 32

**Expand $f(z) = \dfrac{1}{z}$ at $z_0 = 1+i$ and $z_0 = 3$**

The only singularity is at $z = 0$.

---

### Expansion at $z_0 = 1+i$

Write $z = (1+i)+\bigl(z-(1+i)\bigr)$, so

$$f(z) = \frac{1}{(1+i)\!\left[1+\dfrac{z-(1+i)}{1+i}\right]} = \frac{1}{1+i}\sum_{k=0}^{\infty}\left(-\frac{z-(1+i)}{1+i}\right)^k = \sum_{k=0}^{\infty}\frac{(-1)^k}{(1+i)^{k+1}}\bigl(z-(1+i)\bigr)^k,$$

valid for $|z-(1+i)| < |1+i| = \sqrt{2}$.

$$\boxed{R = |1+i-0| = \sqrt{2}}$$

---

### Expansion at $z_0 = 3$

Write $z = 3+(z-3)$, so

$$f(z) = \frac{1}{3\!\left[1+\dfrac{z-3}{3}\right]} = \frac{1}{3}\sum_{k=0}^{\infty}\left(-\frac{z-3}{3}\right)^k = \sum_{k=0}^{\infty}\frac{(-1)^k}{3^{k+1}}(z-3)^k,$$

valid for $|z-3| < 3$.

$$\boxed{R = |3-0| = 3}$$

---

### Sketch of Convergence Regions

![Figure 6.5](../../extracted_figures/figure_6_5.png)

```
Im
  │
  │   ●(1+i)
 1│   D₁:|z−(1+i)|<√2
  │
  │
──×──────────●──────────── Re
  0    1     2    3   4   5
              ←────────→
              D₂:|z−3|<3
```

- **$D_1$**: disk $|z-(1+i)|<\sqrt{2}$, centered at $1+i$, radius $\approx 1.414$.  
- **$D_2$**: disk $|z-3|<3$, centered at $3$, radius $3$ (extends from $0$ to $6$ on the real axis; the singularity $z=0$ is on its boundary).  
- The region of simultaneous convergence is $D_1\cap D_2$ (the smaller disk $D_1$ lies entirely inside $D_2$, so the intersection is $D_1$).

---

## Problem 33

**Find the sum of $\displaystyle\sum_{k=0}^{\infty} 3^k z^k$**

Recognize this as a geometric series with ratio $3z$:

$$\sum_{k=0}^{\infty}(3z)^k = \frac{1}{1-3z}, \qquad |3z|<1 \implies |z|<\frac{1}{3}.$$

$$\boxed{\sum_{k=0}^{\infty}3^k z^k = \frac{1}{1-3z}, \quad |z|<\tfrac{1}{3}}$$

---

## Problem 34

**Find the sum of $\displaystyle\sum_{k=0}^{\infty}\frac{z^{2k}}{k!}$**

Recall the Maclaurin series for the exponential function:

$$e^w = \sum_{k=0}^{\infty}\frac{w^k}{k!}, \qquad |w|<\infty.$$

Substitute $w = z^2$:

$$\sum_{k=0}^{\infty}\frac{(z^2)^k}{k!} = \sum_{k=0}^{\infty}\frac{z^{2k}}{k!} = e^{z^2}.$$

$$\boxed{\sum_{k=0}^{\infty}\frac{z^{2k}}{k!} = e^{z^2}, \quad |z|<\infty}$$

---

## Problem 35

**Find the Maclaurin series for $\dfrac{1}{(1-z)^2}$ by differentiating $\dfrac{1}{1-z}$**

**Step 1.** Begin with the known geometric Maclaurin series:

$$\frac{1}{1-z} = \sum_{k=0}^{\infty} z^k = 1 + z + z^2 + z^3 + \cdots, \qquad |z|<1.$$

**Step 2.** Differentiate both sides with respect to $z$. On the left:

$$\frac{d}{dz}\left[\frac{1}{1-z}\right] = \frac{1}{(1-z)^2}.$$

On the right, differentiate term by term (valid within the radius of convergence):

$$\frac{d}{dz}\sum_{k=0}^{\infty} z^k = \sum_{k=1}^{\infty} k\, z^{k-1}.$$

**Step 3.** Re-index by setting $n = k-1$ (i.e., $k = n+1$):

$$\sum_{k=1}^{\infty} k\, z^{k-1} = \sum_{n=0}^{\infty}(n+1)\,z^{n}.$$

**Step 4.** Therefore:

$$\frac{1}{(1-z)^2} = \sum_{k=0}^{\infty}(k+1)\,z^k = 1 + 2z + 3z^2 + 4z^3 + \cdots, \qquad |z|<1.$$

The radius of convergence $R = 1$ is inherited from the parent series; differentiation does not reduce $R$ for power series.

$$\boxed{\frac{1}{(1-z)^2} = \sum_{k=0}^{\infty}(k+1)\,z^k, \quad |z|<1}$$

---

## Problems 36-51

## Problem 36

**Problem Statement:**  
The error function $\operatorname{erf}(z)$ is defined by the integral:
$$\operatorname{erf}(z) = \frac{2}{\sqrt{\pi}} \int_0^z e^{-t^2} dt$$
Find a Maclaurin series for $\operatorname{erf}(z)$ by integrating the Maclaurin series for $e^{-t^2}$.

**Solution:**  
**Step 1.** We begin with the standard Maclaurin series for the exponential function $e^w$, which converges for all $w \in \mathbb{C}$:
$$e^w = \sum_{k=0}^\infty \frac{w^k}{k!} = 1 + w + \frac{w^2}{2!} + \frac{w^3}{3!} + \dots$$
Substitute $w = -t^2$ into this series:
$$e^{-t^2} = \sum_{k=0}^\infty \frac{(-1)^k t^{2k}}{k!} = 1 - t^2 + \frac{t^4}{2!} - \frac{t^6}{3!} + \dots$$
This series converges uniformly on any compact subset of the complex plane, which allows for term-by-term integration along any contour from $0$ to $z$.

**Step 2.** Integrate term-by-term:
$$\int_0^z e^{-t^2} dt = \int_0^z \left( \sum_{k=0}^\infty \frac{(-1)^k t^{2k}}{k!} \right) dt = \sum_{k=0}^\infty \frac{(-1)^k}{k!} \int_0^z t^{2k} dt$$
Applying the power rule for integration:
$$\int_0^z t^{2k} dt = \left[ \frac{t^{2k+1}}{2k+1} \right]_0^z = \frac{z^{2k+1}}{2k+1}$$
Thus, we obtain:
$$\int_0^z e^{-t^2} dt = \sum_{k=0}^\infty \frac{(-1)^k z^{2k+1}}{k! (2k+1)}$$

**Step 3.** Multiply by the coefficient $\frac{2}{\sqrt{\pi}}$:
$$\operatorname{erf}(z) = \frac{2}{\sqrt{\pi}} \sum_{k=0}^\infty \frac{(-1)^k z^{2k+1}}{k! (2k+1)} = \frac{2}{\sqrt{\pi}} \left( z - \frac{z^3}{3} + \frac{z^5}{5 \cdot 2!} - \frac{z^7}{7 \cdot 3!} + \dots \right)$$
Since $e^{-t^2}$ is entire ($R=\infty$), term-by-term integration preserves the radius of convergence.
$$\boxed{\operatorname{erf}(z) = \frac{2}{\sqrt{\pi}} \sum_{k=0}^\infty \frac{(-1)^k z^{2k+1}}{k! (2k+1)}, \quad R = \infty}$$

---

## Problem 37

**Problem Statement:**  
Approximate the value of $e^{(1+i)/10}$ using three terms of a Maclaurin series.

**Solution:**  
**Step 1.** The Maclaurin series for $e^z$ is:
$$e^z = \sum_{k=0}^\infty \frac{z^k}{k!} = 1 + z + \frac{z^2}{2!} + \frac{z^3}{3!} + \dots$$
Using the first three terms ($k=0, 1, 2$), the approximation is:
$$e^z \approx 1 + z + \frac{z^2}{2}$$
We substitute $z = \frac{1+i}{10} = 0.1 + 0.1i$.

**Step 2.** Compute the term $z^2$:
$$z^2 = \left( \frac{1+i}{10} \right)^2 = \frac{(1+i)^2}{100} = \frac{1 + 2i + i^2}{100} = \frac{2i}{100} = \frac{i}{50} = 0.02i$$

**Step 3.** Substitute $z$ and $z^2$ into the three-term approximation:
$$e^{(1+i)/10} \approx 1 + (0.1 + 0.1i) + \frac{0.02i}{2} = 1 + 0.1 + 0.1i + 0.01i = 1.1 + 0.11i$$
$$\boxed{e^{(1+i)/10} \approx 1.1 + 0.11i}$$

---

## Problem 38

**Problem Statement:**  
Approximate the value of $\sin\left(\frac{1+i}{10}\right)$ using two terms of a Maclaurin series.

**Solution:**  
**Step 1.** The Maclaurin series for $\sin z$ is:
$$\sin z = \sum_{k=0}^\infty \frac{(-1)^k z^{2k+1}}{(2k+1)!} = z - \frac{z^3}{3!} + \frac{z^5}{5!} - \dots$$
Using the first two terms ($k=0, 1$), the approximation is:
$$\sin z \approx z - \frac{z^3}{6}$$
We substitute $z = \frac{1+i}{10} = 0.1 + 0.1i$.

**Step 2.** Compute the term $z^3$:
$$z^3 = z \cdot z^2 = \left( \frac{1+i}{10} \right) \left( \frac{2i}{100} \right) = \frac{2i(1+i)}{1000} = \frac{2i - 2}{1000} = \frac{-2 + 2i}{1000} = -0.002 + 0.002i$$

**Step 3.** Substitute $z$ and $z^3$ into the two-term approximation:
$$\sin\left(\frac{1+i}{10}\right) \approx (0.1 + 0.1i) - \frac{-0.002 + 0.002i}{6} = 0.1 + 0.1i + \frac{0.002 - 0.002i}{6}$$
$$\approx 0.1 + 0.1i + 0.000333 - 0.000333i = 0.100333 + 0.099667i$$
In exact fractional form:
$$\sin\left(\frac{1+i}{10}\right) \approx \frac{1}{10} + \frac{i}{10} - \frac{-2+2i}{6000} = \frac{1}{10} + \frac{i}{10} + \frac{1-i}{3000} = \frac{301}{3000} + \frac{299}{3000}i$$
$$\boxed{\sin\left(\frac{1+i}{10}\right) \approx 0.100333 + 0.099667i}$$

---

## Problem 39

**Problem Statement:**  
Every function $f$ has a domain of definition. Describe in words the domain of the function $f$ defined by a power series centered at $z_0$.

**Solution:**  
A power series centered at $z_0$ has the form:
$$f(z) = \sum_{k=0}^\infty a_k (z-z_0)^k$$
By the Cauchy-Hadamard theorem and power series convergence theory, the domain of definition of $f(z)$ must be one of three types:
1. **A Single Point:** The series converges only at its center $z = z_0$. This occurs when the radius of convergence $R = 0$. The domain is $\{z_0\}$.
2. **An Open Disk (with possible boundary points):** The series converges absolutely inside the open disk $|z-z_0| < R$ of finite radius $R > 0$, and diverges for $|z-z_0| > R$. On the boundary circle $|z-z_0| = R$, the series may converge at all, some, or none of the points. The domain of definition is the open disk $|z-z_0| < R$ plus any boundary points where the series converges.
3. **The Entire Complex Plane:** The series converges absolutely for all $z \in \mathbb{C}$. This occurs when the radius of convergence $R = \infty$. The domain of definition is the entire complex plane $\mathbb{C}$.

---

## Problem 40

**Problem Statement:**  
If $f(z) = \sum_{k=0}^\infty a_k z^k$ and $g(z) = \sum_{k=0}^\infty b_k z^k$, then the Cauchy product of $f$ and $g$ is given by $f(z)g(z) = \sum_{k=0}^\infty c_k z^k$ where $c_k = \sum_{n=0}^k a_n b_{k-n}$. Write out the first five terms of the power series of $f(z)g(z)$.

**Solution:**  
We compute the coefficients $c_k$ for $k = 0, 1, 2, 3, 4$:
- For $k = 0$:  
  $$c_0 = a_0 b_0$$
- For $k = 1$:  
  $$c_1 = a_0 b_1 + a_1 b_0$$
- For $k = 2$:  
  $$c_2 = a_0 b_2 + a_1 b_1 + a_2 b_0$$
- For $k = 3$:  
  $$c_3 = a_0 b_3 + a_1 b_2 + a_2 b_1 + a_3 b_0$$
- For $k = 4$:  
  $$c_4 = a_0 b_4 + a_1 b_3 + a_2 b_2 + a_3 b_1 + a_4 b_0$$

Writing out the first five terms of the series:
$$f(z)g(z) = a_0 b_0 + (a_0 b_1 + a_1 b_0)z + (a_0 b_2 + a_1 b_1 + a_2 b_0)z^2 + (a_0 b_3 + a_1 b_2 + a_2 b_1 + a_3 b_0)z^3 + (a_0 b_4 + a_1 b_3 + a_2 b_2 + a_3 b_1 + a_4 b_0)z^4 + \dots$$

---

## Problem 41

**Problem Statement:**  
Use Problem 40, (12) of this section, and (6) from Section 6.1 to find the first four nonzero terms of the Maclaurin series of $e^z/(1-z)$. What is the radius of convergence $R$ of the series?

**Solution:**  
**Step 1.** Let $f(z) = e^z = \sum_{k=0}^\infty a_k z^k$ with $a_k = \frac{1}{k!}$. Thus:
$$a_0 = 1, \quad a_1 = 1, \quad a_2 = \frac{1}{2}, \quad a_3 = \frac{1}{6}, \quad a_4 = \frac{1}{24}, \quad \dots$$
Let $g(z) = \frac{1}{1-z} = \sum_{k=0}^\infty b_k z^k$ with $b_k = 1$ for all $k \ge 0$. Thus:
$$b_0 = 1, \quad b_1 = 1, \quad b_2 = 1, \quad b_3 = 1, \quad b_4 = 1, \quad \dots$$

**Step 2.** Apply the Cauchy product formula to find $c_k$:
- $c_0 = a_0 b_0 = 1 \cdot 1 = 1$
- $c_1 = a_0 b_1 + a_1 b_0 = 1 \cdot 1 + 1 \cdot 1 = 2$
- $c_2 = a_0 b_2 + a_1 b_1 + a_2 b_0 = 1 \cdot 1 + 1 \cdot 1 + \frac{1}{2} \cdot 1 = \frac{5}{2}$
- $c_3 = a_0 b_3 + a_1 b_2 + a_2 b_1 + a_3 b_0 = 1 \cdot 1 + 1 \cdot 1 + \frac{1}{2} \cdot 1 + \frac{1}{6} \cdot 1 = 2 + \frac{1}{2} + \frac{1}{6} = \frac{8}{3}$

**Step 3.** Write out the first four terms:
$$\frac{e^z}{1-z} = 1 + 2z + \frac{5}{2}z^2 + \frac{8}{3}z^3 + \dots$$

**Step 4.** Determine the radius of convergence.
The exponential function $e^z$ is analytic for all $z \in \mathbb{C}$ ($R_1 = \infty$). The geometric series $\frac{1}{1-z}$ is analytic in the disk $|z| < 1$ ($R_2 = 1$). The product series converges within the intersection of these domains, i.e., for $|z| < 1$. Because $z = 1$ is a simple pole (singularity) of $\frac{e^z}{1-z}$, the series must diverge at $z=1$. Thus, the radius of convergence is exactly $R = 1$.
$$\boxed{\frac{e^z}{1-z} = 1 + 2z + \frac{5}{2}z^2 + \frac{8}{3}z^3 + \dots, \quad R = 1}$$

---

## Problem 42

**Problem Statement:**  
Use Problem 40, and (13) and (14) of this section to find the first four nonzero terms of the Maclaurin series of $\sin z \cos z$. Can you think of another way to obtain this series?

**Solution:**  
**Step 1.** We use the Maclaurin series for $\sin z$ and $\cos z$:
$$f(z) = \sin z = z - \frac{z^3}{6} + \frac{z^5}{120} - \frac{z^7}{5040} + \dots \implies a_0=0, \, a_1=1, \, a_2=0, \, a_3=-\frac{1}{6}, \, a_4=0, \, a_5=\frac{1}{120}, \, a_6=0, \, a_7=-\frac{1}{5040}$$
$$g(z) = \cos z = 1 - \frac{z^2}{2} + \frac{z^4}{24} - \frac{z^6}{720} + \dots \implies b_0=1, \, b_1=0, \, b_2=-\frac{1}{2}, \, b_3=0, \, b_4=\frac{1}{24}, \, b_6=-\frac{1}{720}$$

**Step 2.** Compute the Cauchy product coefficients $c_k$:
- $c_0 = a_0 b_0 = 0$
- $c_1 = a_0 b_1 + a_1 b_0 = 0 + 1 \cdot 1 = 1$
- $c_2 = a_0 b_2 + a_1 b_1 + a_2 b_0 = 0$
- $c_3 = a_0 b_3 + a_1 b_2 + a_2 b_1 + a_3 b_0 = 1 \cdot \left( -\frac{1}{2} \right) + \left( -\frac{1}{6} \right) \cdot 1 = -\frac{1}{2} - \frac{1}{6} = -\frac{2}{3}$
- $c_4 = a_0 b_4 + a_1 b_3 + a_2 b_2 + a_3 b_1 + a_4 b_0 = 0$
- $c_5 = a_1 b_4 + a_3 b_2 + a_5 b_0 = 1 \cdot \left( \frac{1}{24} \right) + \left( -\frac{1}{6} \right)\left( -\frac{1}{2} \right) + \frac{1}{120} \cdot 1 = \frac{1}{24} + \frac{1}{12} + \frac{1}{120} = \frac{5 + 10 + 1}{120} = \frac{16}{120} = \frac{2}{15}$
- $c_6 = 0$
- $c_7 = a_1 b_6 + a_3 b_4 + a_5 b_2 + a_7 b_0 = 1 \cdot \left( -\frac{1}{720} \right) + \left( -\frac{1}{6} \right)\left( \frac{1}{24} \right) + \frac{1}{120}\left( -\frac{1}{2} \right) + \left( -\frac{1}{5040} \right) \cdot 1 = -\frac{1}{720} - \frac{1}{144} - \frac{1}{240} - \frac{1}{5040}$
  $$\text{Common denominator is } 5040: \quad c_7 = -\frac{7 + 35 + 21 + 1}{5040} = -\frac{64}{5040} = -\frac{4}{315}$$

So the first four nonzero terms are:
$$\sin z \cos z = z - \frac{2}{3}z^3 + \frac{2}{15}z^5 - \frac{4}{315}z^7 + \dots$$

**Step 3. Alternative Method.**  
We can use the double-angle identity:
$$\sin z \cos z = \frac{1}{2} \sin(2z)$$
Substitute $2z$ into the Maclaurin series for $\sin w$:
$$\sin(2z) = \sum_{k=0}^\infty \frac{(-1)^k (2z)^{2k+1}}{(2k+1)!} = 2z - \frac{8z^3}{6} + \frac{32z^5}{120} - \frac{128z^7}{5040} + \dots$$
Multiply by $\frac{1}{2}$:
$$\frac{1}{2}\sin(2z) = z - \frac{4}{3}z^3 + \frac{16}{120}z^5 - \frac{64}{5040}z^7 + \dots = z - \frac{2}{3}z^3 + \frac{2}{15}z^5 - \frac{4}{315}z^7 + \dots$$
This matches the Cauchy product result. The radius of convergence is $R = \infty$.
$$\boxed{\sin z \cos z = z - \frac{2}{3}z^3 + \frac{2}{15}z^5 - \frac{4}{315}z^7 + \dots, \quad R = \infty}$$

---

## Problem 43

**Problem Statement:**  
The function $f(z) = \sec z$ is analytic at $z=0$ and hence possesses a Maclaurin series representation. Find the first three nonzero terms of the Maclaurin series
$$\sec z = a_0 + a_1 z + a_2 z^2 + a_3 z^3 + a_4 z^4 + \dots$$
by equating coefficients on both sides of the identity $1 = (\sec z) \cos z$. What is the radius of convergence $R$ of the series?

**Solution:**  
**Step 1.** Write the identity:
$$1 = \left( a_0 + a_1 z + a_2 z^2 + a_3 z^3 + a_4 z^4 + \dots \right) \left( 1 - \frac{z^2}{2} + \frac{z^4}{24} - \frac{z^6}{720} + \dots \right)$$

**Step 2.** Expand the right-hand side and collect coefficients for each power of $z$:
- **$z^0$:** $a_0 = 1$
- **$z^1$:** $a_1 = 0$
- **$z^2$:** $-\frac{1}{2}a_0 + a_2 = 0 \implies a_2 = \frac{1}{2}a_0 = \frac{1}{2}$
- **$z^3$:** $-\frac{1}{2}a_1 + a_3 = 0 \implies a_3 = 0$
- **$z^4$:** $\frac{1}{24}a_0 - \frac{1}{2}a_2 + a_4 = 0 \implies a_4 = \frac{1}{2}a_2 - \frac{1}{24}a_0 = \frac{1}{4} - \frac{1}{24} = \frac{5}{24}$

**Step 3.** Write out the first three nonzero terms:
$$\sec z = 1 + \frac{1}{2}z^2 + \frac{5}{24}z^4 + \dots$$

**Step 4.** Determine the radius of convergence.
The function $\sec z = \frac{1}{\cos z}$ is analytic everywhere except at the zeros of $\cos z$. The zeros of $\cos z$ are:
$$z = \frac{\pi}{2} + n\pi, \quad n \in \mathbb{Z}$$
The nearest singularities to the center $z_0 = 0$ are at $z = \pm \frac{\pi}{2}$. The distance from $0$ to these poles is $\frac{\pi}{2}$. Thus, the radius of convergence is $R = \frac{\pi}{2}$.
$$\boxed{\sec z = 1 + \frac{1}{2}z^2 + \frac{5}{24}z^4 + \dots, \quad R = \frac{\pi}{2}}$$

---

## Problem 44

**Problem Statement:**  
(a) Use the definition $f(z) = \sec z = 1/\cos z$ and long division to obtain the first three nonzero terms of the Maclaurin series in Problem 43.  
(b) Use $f(z) = \csc z = 1/\sin z$ and long division to obtain the first three nonzero terms of an infinite series. Is this series a Maclaurin series?

**Solution:**  
**(a) Long Division for $\sec z$:**  
We divide $1$ by the series for $\cos z$:
$$1 \div \left( 1 - \frac{z^2}{2} + \frac{z^4}{24} - \dots \right)$$
1. The first term is $1$. Multiply and subtract:
   $$1 - \left( 1 - \frac{z^2}{2} + \frac{z^4}{24} \right) = \frac{z^2}{2} - \frac{z^4}{24}$$
2. Divide the leading term $\frac{z^2}{2}$ by $1$ to get the second term $\frac{z^2}{2}$. Multiply and subtract:
   $$\left( \frac{z^2}{2} - \frac{z^4}{24} \right) - \frac{z^2}{2}\left( 1 - \frac{z^2}{2} \right) = \left( \frac{z^2}{2} - \frac{z^4}{24} \right) - \left( \frac{z^2}{2} - \frac{z^4}{4} \right) = \left( \frac{1}{4} - \frac{1}{24} \right)z^4 = \frac{5}{24}z^4$$
3. Divide the leading term $\frac{5}{24}z^4$ by $1$ to get the third term $\frac{5}{24}z^4$.
Thus, we obtain:
$$\sec z = 1 + \frac{1}{2}z^2 + \frac{5}{24}z^4 + \dots$$
This matches the result of Problem 43.

**(b) Long Division for $\csc z$:**  
Since $\sin z = z - \frac{z^3}{6} + \frac{z^5}{120} - \dots = z\left( 1 - \frac{z^2}{6} + \frac{z^4}{120} - \dots \right)$, we have:
$$\csc z = \frac{1}{z} \left( \frac{1}{1 - \frac{z^2}{6} + \frac{z^4}{120} - \dots} \right)$$
Now perform long division for the term inside the parentheses:
$$1 \div \left( 1 - \frac{z^2}{6} + \frac{z^4}{120} - \dots \right)$$
1. The first term is $1$. Multiply and subtract:
   $$1 - \left( 1 - \frac{z^2}{6} + \frac{z^4}{120} \right) = \frac{z^2}{6} - \frac{z^4}{120}$$
2. Divide $\frac{z^2}{6}$ by $1$ to get the second term $\frac{z^2}{6}$. Multiply and subtract:
   $$\left( \frac{z^2}{6} - \frac{z^4}{120} \right) - \frac{z^2}{6}\left( 1 - \frac{z^2}{6} \right) = \left( \frac{z^2}{6} - \frac{z^4}{120} \right) - \left( \frac{z^2}{6} - \frac{z^4}{36} \right) = \left( \frac{1}{36} - \frac{1}{120} \right)z^4 = \frac{10 - 3}{360}z^4 = \frac{7}{360}z^4$$
3. Divide $\frac{7}{360}z^4$ by $1$ to get the third term $\frac{7}{360}z^4$.
Therefore, the division gives:
$$\frac{1}{1 - \frac{z^2}{6} + \dots} = 1 + \frac{1}{6}z^2 + \frac{7}{360}z^4 + \dots$$
Multiply by $\frac{1}{z}$:
$$\csc z = \frac{1}{z} + \frac{1}{6}z + \frac{7}{360}z^3 + \dots$$
**Is this series a Maclaurin series?**  
No. A Maclaurin series is a Taylor series centered at $0$, which contains only non-negative integer powers of $z$ ($z^0, z^1, z^2, \dots$). The expansion of $\csc z$ has a $\frac{1}{z} = z^{-1}$ term, meaning it has a pole at $z=0$ and is a Laurent series, not a Maclaurin series.

---

## Problem 45

**Problem Statement:**  
Suppose that a complex function $f$ is analytic in a domain $D$ that contains $z_0 = 0$ and $f$ satisfies $f'(z) = 4z + f^2(z)$. Suppose further that $f(0) = 1$.  
(a) Compute $f'(0), f''(0), f'''(0), f^{(4)}(0)$, and $f^{(5)}(0)$.  
(b) Find the first six terms of the Maclaurin expansion of $f$.

**Solution:**  
**(a) Compute the derivatives at $z=0$:**  
- **$f'(0)$:**  
  $$f'(z) = 4z + [f(z)]^2 \implies f'(0) = 4(0) + [f(0)]^2 = 1^2 = 1$$
- **$f''(0)$:**  
  Differentiate $f'(z)$:
  $$f''(z) = 4 + 2f(z)f'(z)$$
  At $z=0$:
  $$f''(0) = 4 + 2f(0)f'(0) = 4 + 2(1)(1) = 6$$
- **$f'''(0)$:**  
  Differentiate $f''(z)$:
  $$f'''(z) = 2[f'(z)]^2 + 2f(z)f''(z)$$
  At $z=0$:
  $$f'''(0) = 2(1)^2 + 2(1)(6) = 2 + 12 = 14$$
- **$f^{(4)}(0)$:**  
  Differentiate $f'''(z)$:
  $$f^{(4)}(z) = 4f'(z)f''(z) + 2f'(z)f''(z) + 2f(z)f'''(z) = 6f'(z)f''(z) + 2f(z)f'''(z)$$
  At $z=0$:
  $$f^{(4)}(0) = 6(1)(6) + 2(1)(14) = 36 + 28 = 64$$
- **$f^{(5)}(0)$:**  
  Differentiate $f^{(4)}(z)$:
  $$f^{(5)}(z) = 6[f''(z)]^2 + 6f'(z)f'''(z) + 2f'(z)f'''(z) + 2f(z)f^{(4)}(z) = 6[f''(z)]^2 + 8f'(z)f'''(z) + 2f(z)f^{(4)}(z)$$
  At $z=0$:
  $$f^{(5)}(0) = 6(6)^2 + 8(1)(14) + 2(1)(64) = 6(36) + 112 + 128 = 216 + 112 + 128 = 456$$

**(b) Find the first six terms of the Maclaurin expansion:**  
The Maclaurin expansion is:
$$f(z) = f(0) + f'(0)z + \frac{f''(0)}{2!}z^2 + \frac{f'''(0)}{3!}z^3 + \frac{f^{(4)}(0)}{4!}z^4 + \frac{f^{(5)}(0)}{5!}z^5 + \dots$$
Substitute the values from part (a):
$$f(z) = 1 + 1z + \frac{6}{2}z^2 + \frac{14}{6}z^3 + \frac{64}{24}z^4 + \frac{456}{120}z^5 + \dots$$
Simplify the fractions:
$$\boxed{f(z) = 1 + z + 3z^2 + \frac{7}{3}z^3 + \frac{8}{3}z^4 + \frac{19}{5}z^5 + \dots}$$

---

## Problem 46

**Problem Statement:**  
Find an alternative way of finding the first three nonzero terms of the Maclaurin series for $f(z) = \tan z$ (see Problem 23):  
(a) based on the identity $\tan z = \sin z \sec z$ and Problems 42 and 43  
(b) based on Problem 44(a)  
(c) based on Problem 45 [Hint: $f'(z) = \sec^2 z = 1 + \tan^2 z$.]

**Solution:**  
**(a) Using $\tan z = \sin z \sec z$:**  
From the known expansions:
$$\sin z = z - \frac{z^3}{6} + \frac{z^5}{120} - \dots$$
$$\sec z = 1 + \frac{z^2}{2} + \frac{5z^4}{24} + \dots$$
Multiply these two series:
$$\tan z = \left( z - \frac{z^3}{6} + \frac{z^5}{120} - \dots \right) \left( 1 + \frac{z^2}{2} + \frac{5z^4}{24} + \dots \right)$$
$$= z\left( 1 + \frac{z^2}{2} + \frac{5z^4}{24} \right) - \frac{z^3}{6}\left( 1 + \frac{z^2}{2} \right) + \frac{z^5}{120}(1) + \dots$$
$$= z + \frac{z^3}{2} + \frac{5z^5}{24} - \frac{z^3}{6} - \frac{z^5}{12} + \frac{z^5}{120} + \dots$$
Combine the like terms:
- **$z$ term:** $1z$
- **$z^3$ term:** $\left( \frac{1}{2} - \frac{1}{6} \right)z^3 = \frac{1}{3}z^3$
- **$z^5$ term:** $\left( \frac{5}{24} - \frac{1}{12} + \frac{1}{120} \right)z^5 = \frac{25 - 10 + 1}{120} z^5 = \frac{16}{120} z^5 = \frac{2}{15}z^5$

Thus, we obtain:
$$\tan z = z + \frac{1}{3}z^3 + \frac{2}{15}z^5 + \dots$$

**(b) Using long division ($\sin z / \cos z$):**  
Divide $z - \frac{z^3}{6} + \frac{z^5}{120} - \dots$ by $1 - \frac{z^2}{2} + \frac{z^4}{24} - \dots$:
1. Divide leading term $z$ by $1$ to get the first term $z$. Multiply and subtract:
   $$\left( z - \frac{z^3}{6} + \frac{z^5}{120} \right) - z\left( 1 - \frac{z^2}{2} + \frac{z^4}{24} \right) = \frac{z^3}{3} - \frac{z^5}{30}$$
2. Divide leading term $\frac{z^3}{3}$ by $1$ to get the second term $\frac{z^3}{3}$. Multiply and subtract:
   $$\left( \frac{z^3}{3} - \frac{z^5}{30} \right) - \frac{z^3}{3}\left( 1 - \frac{z^2}{2} \right) = \left( \frac{z^3}{3} - \frac{z^5}{30} \right) - \left( \frac{z^3}{3} - \frac{z^5}{6} \right) = \left( \frac{1}{6} - \frac{1}{30} \right)z^5 = \frac{2}{15}z^5$$
3. Divide leading term $\frac{2}{15}z^5$ by $1$ to get the third term $\frac{2}{15}z^5$.
Thus, we obtain:
$$\tan z = z + \frac{1}{3}z^3 + \frac{2}{15}z^5 + \dots$$

**(c) Using Problem 45 with $f(z) = \tan z$:**  
Here, $f(z) = \tan z$, which satisfies $f'(z) = \sec^2 z = 1 + \tan^2 z = 1 + [f(z)]^2$. The initial condition is $f(0) = \tan 0 = 0$.
We compute the derivatives at $z=0$ following the differential equation:
- $f(0) = 0$
- $f'(0) = 1 + [f(0)]^2 = 1 + 0 = 1$
- $f''(z) = 2f(z)f'(z) \implies f''(0) = 2f(0)f'(0) = 2(0)(1) = 0$
- $f'''(z) = 2[f'(z)]^2 + 2f(z)f''(z) \implies f'''(0) = 2(1)^2 + 2(0)(0) = 2$
- $f^{(4)}(z) = 6f'(z)f''(z) + 2f(z)f'''(z) \implies f^{(4)}(0) = 6(1)(0) + 2(0)(2) = 0$
- $f^{(5)}(z) = 6[f''(z)]^2 + 8f'(z)f'''(z) + 2f(z)f^{(4)}(z) \implies f^{(5)}(0) = 6(0)^2 + 8(1)(2) + 2(0)(0) = 16$

Using the Maclaurin expansion formula:
$$f(z) = f(0) + f'(0)z + \frac{f''(0)}{2!}z^2 + \frac{f'''(0)}{3!}z^3 + \frac{f^{(4)}(0)}{4!}z^4 + \frac{f^{(5)}(0)}{5!}z^5 + \dots$$
$$f(z) = 0 + 1z + 0z^2 + \frac{2}{6}z^3 + 0z^4 + \frac{16}{120}z^5 + \dots = z + \frac{1}{3}z^3 + \frac{2}{15}z^5 + \dots$$
All three methods yield the same series expansion.
$$\boxed{\tan z = z + \frac{1}{3}z^3 + \frac{2}{15}z^5 + \dots}$$

---

## Problem 47

**Problem Statement:**  
We saw in Problem 34 in Exercises 1.3 that de Moivre's formula can be used to obtain trigonometric identities for $\cos 3\theta$ and $\sin 3\theta$. Discuss how these identities can be used to obtain Maclaurin series for $\sin^3 z$ and $\cos^3 z$.

**Solution:**  
**Step 1.** From de Moivre's formula, the identities for triple angles are:
$$\cos 3\theta = 4\cos^3 \theta - 3\cos \theta \implies \cos^3 \theta = \frac{\cos 3\theta + 3\cos \theta}{4}$$
$$\sin 3\theta = 3\sin \theta - 4\sin^3 \theta \implies \sin^3 \theta = \frac{3\sin \theta - \sin 3\theta}{4}$$
By the identity principle for analytic functions, these equations hold for all complex numbers $z \in \mathbb{C}$:
$$\cos^3 z = \frac{1}{4}\cos 3z + \frac{3}{4}\cos z$$
$$\sin^3 z = \frac{3}{4}\sin z - \frac{1}{4}\sin 3z$$

**Step 2.** We write the Maclaurin series for $\cos z$ and $\cos 3z$:
$$\cos z = \sum_{k=0}^\infty \frac{(-1)^k z^{2k}}{(2k)!}$$
$$\cos 3z = \sum_{k=0}^\infty \frac{(-1)^k (3z)^{2k}}{(2k)!} = \sum_{k=0}^\infty \frac{(-1)^k 3^{2k} z^{2k}}{(2k)!}$$
Substitute these series into the identity for $\cos^3 z$:
$$\cos^3 z = \frac{1}{4} \sum_{k=0}^\infty \frac{(-1)^k 3^{2k} z^{2k}}{(2k)!} + \frac{3}{4} \sum_{k=0}^\infty \frac{(-1)^k z^{2k}}{(2k)!} = \frac{1}{4} \sum_{k=0}^\infty \frac{(-1)^k \left( 3^{2k} + 3 \right)}{(2k)!} z^{2k}$$
Expanding the first few terms:
$$\cos^3 z = \frac{1}{4} \left[ 4 - \frac{12}{2!}z^2 + \frac{84}{4!}z^4 - \frac{732}{6!}z^6 + \dots \right] = 1 - \frac{3}{2}z^2 + \frac{7}{8}z^4 - \frac{61}{240}z^6 + \dots$$

**Step 3.** We write the Maclaurin series for $\sin z$ and $\sin 3z$:
$$\sin z = \sum_{k=0}^\infty \frac{(-1)^k z^{2k+1}}{(2k+1)!}$$
$$\sin 3z = \sum_{k=0}^\infty \frac{(-1)^k (3z)^{2k+1}}{(2k+1)!} = \sum_{k=0}^\infty \frac{(-1)^k 3^{2k+1} z^{2k+1}}{(2k+1)!}$$
Substitute these series into the identity for $\sin^3 z$:
$$\sin^3 z = \frac{3}{4} \sum_{k=0}^\infty \frac{(-1)^k z^{2k+1}}{(2k+1)!} - \frac{1}{4} \sum_{k=0}^\infty \frac{(-1)^k 3^{2k+1} z^{2k+1}}{(2k+1)!} = \frac{1}{4} \sum_{k=0}^\infty \frac{(-1)^k \left( 3 - 3^{2k+1} \right)}{(2k+1)!} z^{2k+1}$$
Expanding the first few terms:
$$\sin^3 z = \frac{1}{4} \left[ 0z - \frac{3 - 27}{3!}z^3 + \frac{3 - 243}{5!}z^5 - \dots \right] = z^3 - \frac{1}{2}z^5 + \frac{13}{80}z^7 - \dots$$

This shows that we can find the Maclaurin series for $\cos^3 z$ and $\sin^3 z$ by combining the linear expansions of $\cos z, \cos 3z$ and $\sin z, \sin 3z$, respectively, which avoids the tedious computation of high-order derivatives of non-linear products.

---

## Problem 48

**Problem Statement:**  
(a) Suppose that the principal value of the logarithm $\operatorname{Ln} z = \log_e |z| + i \operatorname{Arg}(z)$ is expanded in a Taylor series with center $z_0 = -1+i$. Explain why $R=1$ is the radius of the largest circle centered at $z_0 = -1+i$ within which $f$ is analytic.  
(b) Show that within the circle $|z - (-1+i)| = 1$ the Taylor series for $f$ is:
$$\operatorname{Ln} z = \frac{1}{2} \log_e 2 + \frac{3\pi}{4}i - \sum_{k=1}^\infty \frac{1}{k}\left( \frac{1+i}{2} \right)^k (z+1-i)^k$$
(c) Show that the radius of convergence for the power series in part (b) is $R = \sqrt{2}$. Explain why this does not contradict the result in part (a).

**Solution:**  
**(a) Explanation of the Radius of Analyticity:**  
The principal branch of the logarithm $\operatorname{Ln} z$ is defined and analytic on the complex plane sliced along the nonpositive real axis:
$$\mathbb{C} \setminus (-\infty, 0]$$
The center of our Taylor series is $z_0 = -1+i$. The distance from $z_0$ to any point $z = x + iy$ on the branch cut (where $y = 0$ and $x \le 0$) is:
$$\text{dist}(z_0, \text{cut}) = \sqrt{(-1 - x)^2 + (1 - 0)^2} = \sqrt{(x+1)^2 + 1}$$
The minimum distance occurs at $x = -1$, where the distance is exactly $\sqrt{0^2 + 1} = 1$. The point of singularity/discontinuity closest to $z_0 = -1+i$ is $z = -1$.
Therefore, the largest open circle centered at $z_0$ that lies entirely within the domain of analyticity of $\operatorname{Ln} z$ has radius $R = 1$.

**(b) Derive the Taylor Series:**  
The derivative of $\operatorname{Ln} z$ is $\frac{1}{z}$. We expand $\frac{1}{z}$ in powers of $z - z_0$ where $z_0 = -1+i$:
$$\frac{1}{z} = \frac{1}{z_0 + (z-z_0)} = \frac{1}{z_0} \cdot \frac{1}{1 + \frac{z-z_0}{z_0}} = \frac{1}{z_0} \sum_{n=0}^\infty (-1)^n \left( \frac{z-z_0}{z_0} \right)^n = \sum_{n=0}^\infty \frac{(-1)^n}{z_0^{n+1}} (z-z_0)^n$$
This expansion is valid for $|z-z_0| < |z_0| = |-1+i| = \sqrt{2}$.
Since the domain is simply connected inside $|z-z_0| < 1$, we can integrate term-by-term from the center $z_0$ to $z$:
$$\operatorname{Ln} z - \operatorname{Ln} z_0 = \sum_{n=0}^\infty \frac{(-1)^n}{(n+1)z_0^{n+1}} (z-z_0)^{n+1}$$
Re-index by setting $k = n+1 \ge 1$:
$$\operatorname{Ln} z = \operatorname{Ln} z_0 + \sum_{k=1}^\infty \frac{(-1)^{k-1}}{k z_0^k} (z-z_0)^k = \operatorname{Ln} z_0 - \sum_{k=1}^\infty \frac{1}{k} \left( -\frac{1}{z_0} \right)^k (z-z_0)^k$$
Evaluate the constants:
$$\operatorname{Ln} z_0 = \ln| -1+i | + i\operatorname{Arg}(-1+i) = \ln \sqrt{2} + i \frac{3\pi}{4} = \frac{1}{2}\ln 2 + \frac{3\pi}{4}i$$
$$-\frac{1}{z_0} = -\frac{1}{-1+i} = \frac{1}{1-i} = \frac{1+i}{(1-i)(1+i)} = \frac{1+i}{2}$$
Substitute these back to get the Taylor series:
$$\operatorname{Ln} z = \frac{1}{2} \log_e 2 + \frac{3\pi}{4}i - \sum_{k=1}^\infty \frac{1}{k}\left( \frac{1+i}{2} \right)^k (z+1-i)^k$$

**(c) Radius of Convergence and Resolution of the Apparent Contradiction:**  
To find the radius of convergence $R_{series}$ of the Taylor series:
$$a_k = -\frac{1}{k}\left( \frac{1+i}{2} \right)^k$$
Using the root test:
$$\lim_{k\to\infty} |a_k|^{1/k} = \lim_{k\to\infty} \left( \frac{1}{k} \right)^{1/k} \left| \frac{1+i}{2} \right| = 1 \cdot \frac{\sqrt{2}}{2} = \frac{1}{\sqrt{2}}$$
Thus, the radius of convergence is:
$$R_{series} = \frac{1}{\lim |a_k|^{1/k}} = \sqrt{2}$$
**Why this does not contradict part (a):**  
In part (a), the radius of analyticity $R = 1$ is restricted by the branch cut of the principal branch $\operatorname{Ln} z$. However, the only true singularity of the function $\log z$ is the branch point at $z=0$. The branch cut is an artificial boundary introduced to define a single-valued branch of a multi-valued function.
The power series defines an analytic function within the disk $|z - z_0| < \sqrt{2}$. For points in the intersection of the disk and the branch cut (specifically on the negative real axis in $(-1-\sqrt{2}, -1)$), the series converges to the analytic continuation of $\operatorname{Ln} z$ across the branch cut, which corresponds to a different branch of the multi-valued logarithm (with argument $\theta \in (\pi, 3\pi/2)$).
Since the power series has no information about our arbitrary choice of branch cut and is only limited by the nearest actual singularity of the function (which is the branch point $z=0$ at distance $|z_0 - 0| = \sqrt{2}$), the radius of convergence is $\sqrt{2}$, which is greater than $1$.

---

## Problem 49

**Problem Statement:**  
(a) Consider the function $\operatorname{Ln}(1+z)$. What is the radius of the largest circle centered at the origin within which $f$ is analytic?  
(b) Expand $f$ in a Maclaurin series. What is the radius of convergence of this series?  
(c) Use the result in part (b) to find a Maclaurin series for $\operatorname{Ln}(1-z)$.  
(d) Find a Maclaurin series for $\operatorname{Ln}\left(\frac{1+z}{1-z}\right)$.

**Solution:**  
**(a) Radius of Analyticity:**  
The branch point of $\operatorname{Ln}(1+z)$ occurs where the argument is zero: $1+z = 0 \implies z = -1$.
The branch cut is $(-\infty, -1]$ along the real axis.
The nearest singularity/discontinuity to the center $z_0 = 0$ is the branch point at $z = -1$. The distance is $|0 - (-1)| = 1$.
So the radius of the largest circle centered at the origin within which $\operatorname{Ln}(1+z)$ is analytic is $R = 1$.

**(b) Maclaurin Series for $\operatorname{Ln}(1+z)$:**  
The derivative is:
$$\frac{d}{dz} \operatorname{Ln}(1+z) = \frac{1}{1+z}$$
For $|z| < 1$, we expand $\frac{1}{1+z}$ as a geometric series:
$$\frac{1}{1+z} = \sum_{k=0}^\infty (-1)^k z^k = 1 - z + z^2 - z^3 + \dots$$
Integrating term-by-term from $0$ to $z$ (noting that $\operatorname{Ln}(1+0) = \operatorname{Ln}(1) = 0$):
$$\operatorname{Ln}(1+z) = \sum_{k=0}^\infty \frac{(-1)^k z^{k+1}}{k+1} = \sum_{n=1}^\infty \frac{(-1)^{n-1}}{n} z^n = z - \frac{z^2}{2} + \frac{z^3}{3} - \frac{z^4}{4} + \dots$$
Using the ratio test:
$$\lim_{n\to\infty} \left| \frac{a_{n+1}}{a_n} \right| = \lim_{n\to\infty} \left| \frac{(-1)^n z^{n+1}/(n+1)}{(-1)^{n-1} z^n/n} \right| = |z| \lim_{n\to\infty} \frac{n}{n+1} = |z|$$
So the series converges for $|z| < 1$. The radius of convergence is $R = 1$.
$$\boxed{\operatorname{Ln}(1+z) = \sum_{n=1}^\infty \frac{(-1)^{n-1} z^n}{n}, \quad R = 1}$$

**(c) Maclaurin Series for $\operatorname{Ln}(1-z)$:**  
Substitute $z \mapsto -z$ into the Maclaurin series of $\operatorname{Ln}(1+z)$:
$$\operatorname{Ln}(1-z) = \sum_{n=1}^\infty \frac{(-1)^{n-1}(-z)^n}{n} = \sum_{n=1}^\infty \frac{(-1)^{n-1}(-1)^n z^n}{n} = \sum_{n=1}^\infty \frac{(-1)^{2n-1} z^n}{n}$$
Since $2n-1$ is always odd, $(-1)^{2n-1} = -1$:
$$\boxed{\operatorname{Ln}(1-z) = -\sum_{n=1}^\infty \frac{z^n}{n} = -z - \frac{z^2}{2} - \frac{z^3}{3} - \frac{z^4}{4} - \dots, \quad R = 1}$$

**(d) Maclaurin Series for $\operatorname{Ln}\left(\frac{1+z}{1-z}\right)$:**  
Using the logarithmic property:
$$\operatorname{Ln}\left( \frac{1+z}{1-z} \right) = \operatorname{Ln}(1+z) - \operatorname{Ln}(1-z)$$
Subtract the two series:
$$\operatorname{Ln}(1+z) - \operatorname{Ln}(1-z) = \left( z - \frac{z^2}{2} + \frac{z^3}{3} - \frac{z^4}{4} + \dots \right) - \left( -z - \frac{z^2}{2} - \frac{z^3}{3} - \frac{z^4}{4} - \dots \right)$$
$$= 2z + 2\frac{z^3}{3} + 2\frac{z^5}{5} + \dots = 2\sum_{k=0}^\infty \frac{z^{2k+1}}{2k+1}$$
This series contains only odd powers of $z$. The radius of convergence is $R = 1$.
$$\boxed{\operatorname{Ln}\left(\frac{1+z}{1-z}\right) = 2\sum_{k=0}^\infty \frac{z^{2k+1}}{2k+1}, \quad R = 1}$$

---

## Problem 50

**Problem Statement:**  
In Theorem 3.3 we saw that L'Hôpital's rule carries over to complex analysis. In Problem 33 in Exercises 3.1 you were guided through a proof of the following proposition by using the definition of the derivative:  
*If functions $f$ and $g$ are analytic at a point $z_0$ and $f(z_0) = 0, g(z_0) = 0$, but $g'(z_0) \neq 0$, then:*
$$\lim_{z\to z_0} \frac{f(z)}{g(z)} = \frac{f'(z_0)}{g'(z_0)}$$
This time, prove the proposition by replacing $f(z)$ and $g(z)$ by their Taylor series centered at $z_0$.

**Solution:**  
**Step 1.** Since $f(z)$ and $g(z)$ are analytic at $z_0$, they can be expanded in Taylor series centered at $z_0$ with some positive radius of convergence:
$$f(z) = \sum_{k=0}^\infty \frac{f^{(k)}(z_0)}{k!} (z-z_0)^k = f(z_0) + f'(z_0)(z-z_0) + \frac{f''(z_0)}{2!}(z-z_0)^2 + \dots$$
$$g(z) = \sum_{k=0}^\infty \frac{g^{(k)}(z_0)}{k!} (z-z_0)^k = g(z_0) + g'(z_0)(z-z_0) + \frac{g''(z_0)}{2!}(z-z_0)^2 + \dots$$

**Step 2.** Substitute the initial conditions $f(z_0) = 0$ and $g(z_0) = 0$:
$$f(z) = f'(z_0)(z-z_0) + \frac{f''(z_0)}{2!}(z-z_0)^2 + \dots = (z-z_0) \left[ f'(z_0) + \frac{f''(z_0)}{2!}(z-z_0) + \dots \right]$$
$$g(z) = g'(z_0)(z-z_0) + \frac{g''(z_0)}{2!}(z-z_0)^2 + \dots = (z-z_0) \left[ g'(z_0) + \frac{g''(z_0)}{2!}(z-z_0) + \dots \right]$$

**Step 3.** Form the quotient $\frac{f(z)}{g(z)}$ for $z \neq z_0$:
$$\frac{f(z)}{g(z)} = \frac{(z-z_0) \left[ f'(z_0) + \frac{f''(z_0)}{2!}(z-z_0) + \dots \right]}{(z-z_0) \left[ g'(z_0) + \frac{g''(z_0)}{2!}(z-z_0) + \dots \right]} = \frac{f'(z_0) + \frac{f''(z_0)}{2!}(z-z_0) + \dots}{g'(z_0) + \frac{g''(z_0)}{2!}(z-z_0) + \dots}$$

**Step 4.** Take the limit as $z \to z_0$. Since the Taylor series represents analytic (and hence continuous) functions, we can evaluate the limit by direct substitution of $z = z_0$:
$$\lim_{z\to z_0} \frac{f(z)}{g(z)} = \frac{f'(z_0) + 0 + 0 + \dots}{g'(z_0) + 0 + 0 + \dots} = \frac{f'(z_0)}{g'(z_0)}$$
Since $g'(z_0) \neq 0$, the quotient is well-defined. This completes the proof.

---

## Problem 51

**Problem Statement:**  
(a) You will find the following real function in most older calculus texts:
$$f(x) = \begin{cases} e^{-1/x^2} & x \neq 0 \\ 0 & x = 0 \end{cases}$$
Do some reading in these calculus texts as an aid in showing that $f$ is infinitely differentiable at every value of $x$. Show that $f$ is not represented by its Maclaurin expansion at any value of $x \neq 0$.  
(b) Investigate whether the complex analogue of the real function in part (a),
$$f(z) = \begin{cases} e^{-1/z^2} & z \neq 0 \\ 0 & z = 0 \end{cases}$$
is infinitely differentiable at $z = 0$.

**Solution:**  
**(a) Analysis of the Real Function:**  
For $x \neq 0$, $f(x) = e^{-1/x^2}$ is infinitely differentiable by standard calculus rules.
At $x = 0$, we compute the first derivative using the limit definition:
$$f'(0) = \lim_{h\to 0} \frac{f(h) - f(0)}{h} = \lim_{h\to 0} \frac{e^{-1/h^2}}{h}$$
Let $u = 1/h$. As $h \to 0$, $|u| \to \infty$:
$$f'(0) = \lim_{u\to\infty} \frac{u}{e^{u^2}} = 0 \quad (\text{by L'Hôpital's rule})$$
By induction, for $x \neq 0$, the $n$-th derivative has the form $f^{(n)}(x) = P(1/x) e^{-1/x^2}$, where $P$ is a polynomial.
Taking the limit as $x \to 0$:
$$f^{(n)}(0) = \lim_{x\to 0} \frac{f^{(n-1)}(x) - 0}{x} = \lim_{x\to 0} \frac{1}{x} P\left( \frac{1}{x} \right) e^{-1/x^2} = 0$$
Thus, $f^{(n)}(0) = 0$ for all $n \ge 1$.
The Maclaurin series of $f(x)$ is:
$$\sum_{n=0}^\infty \frac{f^{(n)}(0)}{n!} x^n = 0 + 0x + 0x^2 + \dots = 0$$
This series converges to $0$ for all $x \in \mathbb{R}$. However, for any $x \neq 0$, $f(x) = e^{-1/x^2} > 0$.
Thus, $f(x)$ is infinitely differentiable at $x=0$, but the Maclaurin series does not represent the function at any point other than $x=0$ (meaning the function is infinitely differentiable but not analytic at $0$).

**(b) Analysis of the Complex Analogue:**  
Let us test the differentiability of the complex analogue $f(z)$ at $z = 0$ by evaluating the limit of the difference quotient:
$$f'(0) = \lim_{z\to 0} \frac{f(z) - f(0)}{z} = \lim_{z\to 0} \frac{e^{-1/z^2}}{z}$$
For this limit to exist in $\mathbb{C}$, it must be the same along all paths approaching $0$.
- **Path 1: Along the real axis ($z = x$, where $x \in \mathbb{R}$):**  
  $$f'(0) = \lim_{x\to 0} \frac{e^{-1/x^2}}{x} = 0 \quad (\text{as shown in part a})$$
- **Path 2: Along the imaginary axis ($z = iy$, where $y \in \mathbb{R}$):**  
  $$f'(0) = \lim_{y\to 0} \frac{e^{-1/(iy)^2}}{iy} = \lim_{y\to 0} \frac{e^{1/y^2}}{iy}$$
  As $y \to 0$, $e^{1/y^2} \to \infty$ exponentially fast, while the denominator $iy \to 0$.
  Therefore, the magnitude of the quotient approaches infinity:
  $$\lim_{y\to 0} \left| \frac{e^{1/y^2}}{iy} \right| = \lim_{y\to 0} \frac{e^{1/y^2}}{|y|} = \infty$$
  Since the limit along the imaginary axis does not exist (it diverges to infinity), the complex derivative $f'(0)$ does not exist.
  Thus, the complex analogue $f(z)$ is **not differentiable** at $z = 0$. This highlights a key difference: differentiability in the complex sense is much more restrictive than in the real sense because the limit must be path-independent in a two-dimensional domain.
