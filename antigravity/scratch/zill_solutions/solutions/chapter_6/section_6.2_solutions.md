# Complex Analysis — Dennis G. Zill, 2nd Edition
## Chapter 6 · Series and Residues
### Section 6.2: Taylor Series
### Complete Solutions

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

## Problems 36-40

You've hit your session limit · resets 1:20am (Asia/Karachi)

---

## Problems 41-46

You've hit your session limit · resets 1:20am (Asia/Karachi)

---

## Problems 47-51

You've hit your session limit · resets 1:20am (Asia/Karachi)

---