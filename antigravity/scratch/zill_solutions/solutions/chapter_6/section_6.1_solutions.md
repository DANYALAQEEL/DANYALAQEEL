# Complex Analysis — Dennis G. Zill, 2nd Edition
## Chapter 6 · Series and Residues
### Section 6.1: Sequences and Series
### Complete Solutions

---


## Problems 1-8

## Problem 1: $\{5i^n\}$

The powers of $i$ follow the cycle $i^1=i,\ i^2=-1,\ i^3=-i,\ i^4=1$, repeating with period 4.

$$a_1 = 5i^1 = 5i$$
$$a_2 = 5i^2 = 5(-1) = -5$$
$$a_3 = 5i^3 = 5(-i) = -5i$$
$$a_4 = 5i^4 = 5(1) = 5$$
$$a_5 = 5i^5 = 5i$$

**First five terms:** $5i,\quad -5,\quad -5i,\quad 5,\quad 5i$

---

## Problem 2: $\{2+(-i)^n\}$

Compute powers of $(-i)$ using $(-i)^n = (-1)^n i^n$:

$$(-i)^1 = -i,\quad (-i)^2 = -1,\quad (-i)^3 = i,\quad (-i)^4 = 1,\quad (-i)^5 = -i$$

$$a_1 = 2+(-i) = 2-i$$
$$a_2 = 2+(-1) = 1$$
$$a_3 = 2+i$$
$$a_4 = 2+1 = 3$$
$$a_5 = 2+(-i) = 2-i$$

**First five terms:** $2-i,\quad 1,\quad 2+i,\quad 3,\quad 2-i$

---

## Problem 3: $\{1+e^{n\pi i}\}$

By Euler's formula:
$$e^{n\pi i} = \cos(n\pi) + i\sin(n\pi) = (-1)^n$$

Therefore $a_n = 1+(-1)^n$, which alternates between $0$ (odd $n$) and $2$ (even $n$):

$$a_1 = 1+(-1)^1 = 0$$
$$a_2 = 1+(-1)^2 = 2$$
$$a_3 = 1+(-1)^3 = 0$$
$$a_4 = 1+(-1)^4 = 2$$
$$a_5 = 1+(-1)^5 = 0$$

**First five terms:** $0,\quad 2,\quad 0,\quad 2,\quad 0$

---

## Problem 4: $\{(1+i)^n\}$

Note $1+i = \sqrt{2}\,e^{i\pi/4}$, so $(1+i)^n = 2^{n/2}e^{in\pi/4}$. Compute directly:

$$a_1 = 1+i$$
$$a_2 = (1+i)^2 = 1+2i+i^2 = 2i$$
$$a_3 = (1+i)^3 = (1+i)(2i) = 2i+2i^2 = -2+2i$$
$$a_4 = (1+i)^4 = (2i)^2 = -4$$
$$a_5 = (1+i)^5 = -4(1+i) = -4-4i$$

**First five terms:** $1+i,\quad 2i,\quad -2+2i,\quad -4,\quad -4-4i$

---

## Problem 5: $\left\{\dfrac{3ni+2}{n+ni}\right\}$

Factor the denominator:
$$a_n = \frac{3ni+2}{n(1+i)}$$

Multiply numerator and denominator by $\overline{(1+i)}=1-i$:
$$= \frac{(3ni+2)(1-i)}{n(1+i)(1-i)} = \frac{(3ni+2)(1-i)}{2n}$$

Expand the numerator:
$$(3ni+2)(1-i) = 3ni - 3ni^2 + 2 - 2i = (3n+2)+(3n-2)i$$

Separate real and imaginary parts:
$$a_n = \frac{3n+2}{2n} + \frac{3n-2}{2n}\,i = \left(\frac{3}{2}+\frac{1}{n}\right)+\left(\frac{3}{2}-\frac{1}{n}\right)i$$

Since $\dfrac{1}{n}\to 0$ as $n\to\infty$:
$$\lim_{n\to\infty} a_n = \frac{3}{2}+\frac{3}{2}\,i$$

**The sequence converges to $\dfrac{3}{2}+\dfrac{3}{2}\,i$.**

---

## Problem 6: $\left\{\dfrac{ni+2n}{3ni+5n}\right\}$

Factor $n$ from numerator and denominator:
$$a_n = \frac{n(i+2)}{n(3i+5)} = \frac{2+i}{5+3i}$$

Every term is the same constant. Rationalize by multiplying by $\dfrac{5-3i}{5-3i}$:

$$\frac{(2+i)(5-3i)}{(5+3i)(5-3i)} = \frac{10-6i+5i-3i^2}{25+9} = \frac{10-i+3}{34} = \frac{13-i}{34}$$

**The sequence converges to $\dfrac{13-i}{34}$.**

---

## Problem 7: $\left\{\dfrac{(ni+2)^2}{n^2 i}\right\}$

Expand the numerator:
$$(ni+2)^2 = n^2i^2+4ni+4 = -n^2+4ni+4$$

Divide each term by $n^2 i$:
$$a_n = \frac{-n^2}{n^2 i}+\frac{4ni}{n^2 i}+\frac{4}{n^2 i} = \frac{-1}{i}+\frac{4}{n}+\frac{4}{n^2 i}$$

Simplify $\dfrac{-1}{i}$ by multiplying by $\dfrac{i}{i}$:
$$\frac{-1}{i}\cdot\frac{i}{i} = \frac{-i}{i^2} = \frac{-i}{-1} = i$$

Therefore:
$$a_n = i + \frac{4}{n} - \frac{4i}{n^2}$$

As $n\to\infty$, both $\dfrac{4}{n}\to 0$ and $\dfrac{4i}{n^2}\to 0$, giving:
$$\lim_{n\to\infty} a_n = i$$

**The sequence converges to $i$.**

---

## Problem 8: $\left\{\dfrac{n(1+i^n)}{n+1}\right\}$

Write:
$$a_n = \frac{n}{n+1}\cdot(1+i^n)$$

Note $\dfrac{n}{n+1} = 1 - \dfrac{1}{n+1}\to 1$. Analyze $1+i^n$ over its four-cycle:

| $n \bmod 4$ | $i^n$ | $1+i^n$ | Subsequential limit of $a_n$ |
|:-----------:|:------:|:-------:|:----------------------------:|
| $1$         | $i$    | $1+i$   | $1+i$                        |
| $2$         | $-1$   | $0$     | $0$                          |
| $3$         | $-i$   | $1-i$   | $1-i$                        |
| $0$         | $1$    | $2$     | $2$                          |

The subsequences along $n\equiv 1\pmod{4}$ and $n\equiv 2\pmod{4}$ converge to $1+i$ and $0$ respectively. These are distinct limits, so no single limit $L$ exists for the full sequence.

**The sequence diverges.**

---

## Problems 9-14

## Problem 9

**Sequence:** $\left\{\dfrac{n + i^n}{\sqrt{n}}\right\}$

Rewrite by separating terms:
$$z_n = \frac{n}{\sqrt{n}} + \frac{i^n}{\sqrt{n}} = \sqrt{n} + \frac{i^n}{\sqrt{n}}$$

Since $i^n$ cycles through $\{1,\, i,\, -1,\, -i\}$ with period 4, examine the real part for all residue classes:

| $n \bmod 4$ | $i^n$ | $\operatorname{Re}(z_n)$ |
|:-----------:|:-----:|:------------------------:|
| $0$ | $1$ | $\sqrt{n} + \tfrac{1}{\sqrt{n}}$ |
| $1$ | $i$ | $\sqrt{n}$ |
| $2$ | $-1$ | $\sqrt{n} - \tfrac{1}{\sqrt{n}}$ |
| $3$ | $-i$ | $\sqrt{n}$ |

In every case, $\operatorname{Re}(z_n) \geq \sqrt{n} - \dfrac{1}{\sqrt{n}} \to \infty$. Since $\lim_{n\to\infty}\operatorname{Re}(z_n) = +\infty$, the sequence **diverges**.

---

## Problem 10

**Sequence:** $\left\{e^{1/n} + 2(\arctan n)\,i\right\}$

Compute the real and imaginary limits separately:

$$\lim_{n\to\infty}\operatorname{Re}(z_n) = \lim_{n\to\infty} e^{1/n} = e^{0} = 1$$

$$\lim_{n\to\infty}\operatorname{Im}(z_n) = \lim_{n\to\infty} 2\arctan n = 2\cdot\frac{\pi}{2} = \pi$$

Both limits exist and are finite, so the sequence **converges**:
$$\lim_{n\to\infty} z_n = 1 + \pi i$$

---

## Problem 11

**Sequence:** $\left\{\dfrac{4n + 3ni}{2n + i}\right\}$

Multiply numerator and denominator by the conjugate $\overline{(2n+i)} = 2n - i$:

$$z_n = \frac{(4n+3ni)(2n-i)}{(2n+i)(2n-i)}$$

**Denominator:**
$$(2n+i)(2n-i) = 4n^2 + 1$$

**Numerator:**
$$(4n+3ni)(2n-i) = 8n^2 - 4ni + 6n^2 i - 3ni^2 = 8n^2 + 3n + (6n^2 - 4n)i$$

Therefore:
$$z_n = \frac{8n^2 + 3n}{4n^2+1} + \frac{6n^2 - 4n}{4n^2+1}\,i$$

**Real part:**
$$\lim_{n\to\infty}\operatorname{Re}(z_n) = \lim_{n\to\infty}\frac{8n^2+3n}{4n^2+1} = \frac{8}{4} = 2$$

**Imaginary part:**
$$\lim_{n\to\infty}\operatorname{Im}(z_n) = \lim_{n\to\infty}\frac{6n^2-4n}{4n^2+1} = \frac{6}{4} = \frac{3}{2}$$

Both limits exist, so the sequence **converges**:
$$\lim_{n\to\infty} z_n = 2 + \frac{3}{2}i$$

---

## Problem 12

**Sequence:** $\left\{\left(\dfrac{1+i}{4}\right)^n\right\}$

Write in polar form. The modulus and argument of $\dfrac{1+i}{4}$ are:
$$r = \left|\frac{1+i}{4}\right| = \frac{|1+i|}{4} = \frac{\sqrt{2}}{4}, \qquad \theta = \arg\!\left(\frac{1+i}{4}\right) = \frac{\pi}{4}$$

So:
$$\left(\frac{1+i}{4}\right)^n = \left(\frac{\sqrt{2}}{4}\right)^{\!n}\!\left(\cos\frac{n\pi}{4} + i\sin\frac{n\pi}{4}\right)$$

**Real part:**
$$\operatorname{Re}(z_n) = \left(\frac{\sqrt{2}}{4}\right)^{\!n}\cos\frac{n\pi}{4}$$

Since $\dfrac{\sqrt{2}}{4} < 1$, we have $\left(\dfrac{\sqrt{2}}{4}\right)^n \to 0$. Because $|\cos(n\pi/4)|\leq 1$:
$$\left|\operatorname{Re}(z_n)\right| \leq \left(\frac{\sqrt{2}}{4}\right)^{\!n} \to 0 \implies \lim_{n\to\infty}\operatorname{Re}(z_n) = 0$$

**Imaginary part:** By the identical bound with $|\sin(n\pi/4)|\leq 1$:
$$\lim_{n\to\infty}\operatorname{Im}(z_n) = 0$$

Both limits are zero, so the sequence **converges**:
$$\lim_{n\to\infty}\left(\frac{1+i}{4}\right)^n = 0$$

---

## Problem 13

**Series:** $\displaystyle\sum_{k=1}^{\infty}\left(\frac{1}{k+2i} - \frac{1}{k+1+2i}\right)$

This is a **telescoping series**. Define $a_k = \dfrac{1}{k+2i}$. The $N$-th partial sum telescopes:

$$S_N = \sum_{k=1}^{N}(a_k - a_{k+1}) = a_1 - a_{N+1} = \frac{1}{1+2i} - \frac{1}{N+1+2i}$$

As $N\to\infty$:
$$\left|\frac{1}{N+1+2i}\right| = \frac{1}{\sqrt{(N+1)^2+4}} \to 0$$

Therefore $\displaystyle\lim_{N\to\infty} S_N = \frac{1}{1+2i}$.

Rationalize by multiplying by $\dfrac{1-2i}{1-2i}$:
$$\frac{1}{1+2i} = \frac{1-2i}{(1)^2+(2)^2} = \frac{1-2i}{5}$$

The series **converges** to:
$$\sum_{k=1}^{\infty}\left(\frac{1}{k+2i}-\frac{1}{k+1+2i}\right) = \frac{1}{5} - \frac{2}{5}i$$

---

## Problem 14

**Series:** $\displaystyle\sum_{k=1}^{\infty}\frac{i}{k(k+1)}$

Apply partial fractions to the real factor:
$$\frac{1}{k(k+1)} = \frac{1}{k} - \frac{1}{k+1}$$

The $N$-th partial sum then telescopes:
$$S_N = \sum_{k=1}^{N}\frac{i}{k(k+1)} = i\sum_{k=1}^{N}\!\left(\frac{1}{k}-\frac{1}{k+1}\right) = i\!\left(1 - \frac{1}{N+1}\right) = \frac{N}{N+1}\,i$$

As $N\to\infty$:
$$\lim_{N\to\infty} S_N = \lim_{N\to\infty}\frac{N}{N+1}\,i = 1\cdot i = i$$

The series **converges** to:
$$\sum_{k=1}^{\infty}\frac{i}{k(k+1)} = i$$

---

## Problems 15-20

## Problem 15

$$\sum_{k=0}^{\infty}(1-i)^k$$

This is a geometric series with ratio $r = 1-i$.

$$|r| = |1-i| = \sqrt{1^2+(-1)^2} = \sqrt{2} \approx 1.414 > 1$$

Since $|r| > 1$, the series **diverges**.

---

## Problem 16

$$\sum_{k=1}^{\infty} 4i\!\left(\frac{1}{3}\right)^{k-1}$$

This is a geometric series with first term $a = 4i$ (at $k=1$) and ratio $r = \dfrac{1}{3}$.

$$|r| = \frac{1}{3} < 1 \implies \text{converges}$$

$$S = \frac{a}{1-r} = \frac{4i}{1 - \tfrac{1}{3}} = \frac{4i}{\tfrac{2}{3}} = \boxed{6i}$$

---

## Problem 17

$$\sum_{k=1}^{\infty}\left(\frac{i}{2}\right)^k$$

This is a geometric series with first term $a = \dfrac{i}{2}$ and ratio $r = \dfrac{i}{2}$.

$$|r| = \frac{|i|}{2} = \frac{1}{2} < 1 \implies \text{converges}$$

$$S = \frac{a}{1-r} = \frac{\dfrac{i}{2}}{1 - \dfrac{i}{2}} = \frac{\dfrac{i}{2}}{\dfrac{2-i}{2}} = \frac{i}{2-i}$$

Multiply numerator and denominator by $\overline{(2-i)} = 2+i$:

$$S = \frac{i(2+i)}{(2-i)(2+i)} = \frac{2i + i^2}{4+1} = \frac{-1+2i}{5} = \boxed{-\frac{1}{5}+\frac{2}{5}i}$$

---

## Problem 18

$$\sum_{k=0}^{\infty}\frac{1}{(2i)^k} = \sum_{k=0}^{\infty}\left(\frac{1}{2i}\right)^k$$

Simplify the ratio: $r = \dfrac{1}{2i} = \dfrac{1}{2i}\cdot\dfrac{i}{i} = \dfrac{i}{2i^2} = -\dfrac{i}{2}$.

$$|r| = \frac{1}{2} < 1 \implies \text{converges}$$

$$S = \frac{1}{1-r} = \frac{1}{1+\tfrac{i}{2}} = \frac{1}{\tfrac{2+i}{2}} = \frac{2}{2+i}$$

Multiply numerator and denominator by $\overline{(2+i)} = 2-i$:

$$S = \frac{2(2-i)}{(2+i)(2-i)} = \frac{4-2i}{4+1} = \boxed{\frac{4}{5} - \frac{2}{5}i}$$

---

## Problem 19

$$\sum_{k=0}^{\infty} 3\left(\frac{2}{1+2i}\right)^k$$

This is a geometric series with $a = 3$ and ratio $r = \dfrac{2}{1+2i}$.

$$|r| = \frac{|2|}{|1+2i|} = \frac{2}{\sqrt{1^2+2^2}} = \frac{2}{\sqrt{5}} \approx 0.894 < 1 \implies \text{converges}$$

$$S = \frac{3}{1 - \dfrac{2}{1+2i}} = \frac{3}{\dfrac{1+2i-2}{1+2i}} = \frac{3(1+2i)}{-1+2i}$$

Multiply numerator and denominator by $\overline{(-1+2i)} = -1-2i$:

$$S = \frac{3(1+2i)(-1-2i)}{(-1+2i)(-1-2i)}$$

**Denominator:** $(-1)^2+(2)^2 = 1+4 = 5$

**Numerator:**
$$3(1+2i)(-1-2i) = 3\bigl[-1-2i-2i-4i^2\bigr] = 3\bigl[-1-4i+4\bigr] = 3(3-4i) = 9-12i$$

$$S = \frac{9-12i}{5} = \boxed{\frac{9}{5} - \frac{12}{5}i}$$

---

## Problem 20

$$\sum_{k=2}^{\infty}\frac{i^k}{(1+i)^{k-1}}$$

Factor out $(1+i)$ from the denominator:

$$= (1+i)\sum_{k=2}^{\infty}\frac{i^k}{(1+i)^k} = (1+i)\sum_{k=2}^{\infty}\left(\frac{i}{1+i}\right)^k$$

Let $r = \dfrac{i}{1+i}$. Check convergence:

$$|r| = \frac{|i|}{|1+i|} = \frac{1}{\sqrt{2}} < 1 \implies \text{converges}$$

For a geometric series starting at $k=2$:

$$\sum_{k=2}^{\infty} r^k = \frac{r^2}{1-r}$$

**Compute $r^2$:**
$$r^2 = \frac{i^2}{(1+i)^2} = \frac{-1}{1+2i-1} = \frac{-1}{2i} = \frac{-1}{2i}\cdot\frac{i}{i} = \frac{-i}{2i^2} = \frac{i}{2}$$

**Compute $1-r$:**
$$1 - \frac{i}{1+i} = \frac{1+i-i}{1+i} = \frac{1}{1+i}$$

**Compute the inner sum:**
$$\frac{r^2}{1-r} = \frac{\tfrac{i}{2}}{\tfrac{1}{1+i}} = \frac{i}{2}\cdot(1+i) = \frac{i+i^2}{2} = \frac{i-1}{2}$$

**Full sum:**
$$S = (1+i)\cdot\frac{i-1}{2} = \frac{(1+i)(i-1)}{2} = \frac{i-1+i^2-i}{2} = \frac{-1-1}{2} = \boxed{-1}$$

---

## Problems 21-25

## Problem 21

$$\sum_{k=0}^\infty \frac{1}{(1-2i)^{k+1}}(z-2i)^k$$

**Center:** $z_0 = 2i$

**Identify coefficients:** $a_k = \dfrac{1}{(1-2i)^{k+1}}$

**Apply the Ratio Test** to find $1/R$:

$$\frac{1}{R} = \lim_{k\to\infty}\left|\frac{a_{k+1}}{a_k}\right| = \lim_{k\to\infty}\left|\frac{(1-2i)^{k+1}}{(1-2i)^{k+2}}\right| = \left|\frac{1}{1-2i}\right| = \frac{1}{|1-2i|}$$

**Compute the modulus:**

$$|1-2i| = \sqrt{1^2+(-2)^2} = \sqrt{5}$$

Therefore $\dfrac{1}{R} = \dfrac{1}{\sqrt{5}}$, so:

$$\boxed{R = \sqrt{5}, \quad \text{circle of convergence: } |z - 2i| = \sqrt{5}}$$

---

## Problem 22

$$\sum_{k=1}^\infty \frac{1}{k}\left(\frac{i}{1+i}\right)^k z^k$$

**Center:** $z_0 = 0$

**Identify coefficients:** $a_k = \dfrac{1}{k}\left(\dfrac{i}{1+i}\right)^k$

**Apply the Cauchy–Hadamard formula:**

$$\frac{1}{R} = \limsup_{k\to\infty}|a_k|^{1/k} = \lim_{k\to\infty}\left(\frac{1}{k}\right)^{1/k}\cdot\left|\frac{i}{1+i}\right|$$

Since $\lim_{k\to\infty} k^{1/k} = 1$, we have $\lim_{k\to\infty}(1/k)^{1/k} = 1$.

**Compute the modulus:**

$$\left|\frac{i}{1+i}\right| = \frac{|i|}{|1+i|} = \frac{1}{\sqrt{2}}$$

Therefore $\dfrac{1}{R} = 1\cdot\dfrac{1}{\sqrt{2}} = \dfrac{1}{\sqrt{2}}$, so:

$$\boxed{R = \sqrt{2}, \quad \text{circle of convergence: } |z| = \sqrt{2}}$$

---

## Problem 23

$$\sum_{k=1}^\infty \frac{(-1)^k}{k\,2^k}(z-1-i)^k$$

**Center:** $z_0 = 1+i$

**Identify coefficients:** $a_k = \dfrac{(-1)^k}{k\cdot 2^k}$

**Apply the Cauchy–Hadamard formula:**

$$\frac{1}{R} = \lim_{k\to\infty}|a_k|^{1/k} = \lim_{k\to\infty}\left(\frac{1}{k\cdot 2^k}\right)^{1/k} = \lim_{k\to\infty}\frac{1}{k^{1/k}\cdot 2}$$

Since $\lim_{k\to\infty} k^{1/k} = 1$:

$$\frac{1}{R} = \frac{1}{1\cdot 2} = \frac{1}{2}$$

Therefore:

$$\boxed{R = 2, \quad \text{circle of convergence: } |z - 1 - i| = 2}$$

---

## Problem 24

$$\sum_{k=1}^\infty \frac{1}{k^2(3+4i)^k}(z+3i)^k$$

**Center:** $z_0 = -3i$

**Identify coefficients:** $a_k = \dfrac{1}{k^2(3+4i)^k}$

**Apply the Cauchy–Hadamard formula:**

$$\frac{1}{R} = \lim_{k\to\infty}|a_k|^{1/k} = \lim_{k\to\infty}\frac{1}{(k^2)^{1/k}\cdot|3+4i|}$$

Since $\lim_{k\to\infty}k^{2/k} = 1$, and:

$$|3+4i| = \sqrt{3^2+4^2} = \sqrt{9+16} = \sqrt{25} = 5$$

Therefore $\dfrac{1}{R} = \dfrac{1}{1\cdot 5} = \dfrac{1}{5}$, so:

$$\boxed{R = 5, \quad \text{circle of convergence: } |z + 3i| = 5}$$

---

## Problem 25

$$\sum_{k=0}^\infty (1+3i)^k(z-i)^k$$

**Center:** $z_0 = i$

**Identify coefficients:** $a_k = (1+3i)^k$

**Apply the Cauchy–Hadamard formula:**

$$\frac{1}{R} = \lim_{k\to\infty}|a_k|^{1/k} = \lim_{k\to\infty}\left|(1+3i)^k\right|^{1/k} = |1+3i|$$

**Compute the modulus:**

$$|1+3i| = \sqrt{1^2+3^2} = \sqrt{10}$$

Therefore $\dfrac{1}{R} = \sqrt{10}$, so:

$$\boxed{R = \frac{1}{\sqrt{10}}, \quad \text{circle of convergence: } |z - i| = \frac{1}{\sqrt{10}}}$$

---

## Problems 26-30

## Problem 26

$$\sum_{k=1}^\infty \frac{z^k}{k^k}$$

**Center:** $z_0 = 0$. **Coefficients:** $a_k = \dfrac{1}{k^k}$.

Apply the **Cauchy–Hadamard formula** $R = \dfrac{1}{\limsup_{k\to\infty}|a_k|^{1/k}}$:

$$|a_k|^{1/k} = \left(\frac{1}{k^k}\right)^{1/k} = \frac{1}{k} \;\longrightarrow\; 0 \quad \text{as } k\to\infty$$

$$R = \frac{1}{0} = \infty$$

The series **converges for all $z \in \mathbb{C}$** (the entire complex plane).

---

## Problem 27

$$\sum_{k=0}^\infty \frac{(z-4-3i)^k}{5^{2k}}$$

**Center:** $z_0 = 4+3i$. **Coefficients:** $a_k = \dfrac{1}{5^{2k}} = \dfrac{1}{25^k}$.

Apply Cauchy–Hadamard:

$$|a_k|^{1/k} = \left(\frac{1}{25^k}\right)^{1/k} = \frac{1}{25}$$

$$R = \frac{1}{1/25} = \boxed{25}$$

**Circle of convergence:** $|z - 4 - 3i| = 25$, $\quad R = 25$.

---

## Problem 28

$$\sum_{k=0}^\infty \frac{(-1)^k}{\!\left(\dfrac{1+2i}{2}\right)^{\!k}} (z+2i)^k$$

**Center:** $z_0 = -2i$. Rewrite by absorbing all $k$-dependent factors into a single base:

$$\sum_{k=0}^\infty (-1)^k \cdot \left(\frac{2}{1+2i}\right)^k (z+2i)^k = \sum_{k=0}^\infty \left(\frac{-2}{1+2i}\right)^k (z+2i)^k$$

This is a **geometric series** in $\dfrac{-2(z+2i)}{1+2i}$. It converges when

$$\left|\frac{-2(z+2i)}{1+2i}\right| < 1 \;\implies\; \frac{2|z+2i|}{|1+2i|} < 1 \;\implies\; \frac{2|z+2i|}{\sqrt{5}} < 1$$

$$R = \frac{\sqrt{5}}{2}$$

**Circle of convergence:** $\displaystyle\left|z + 2i\right| = \frac{\sqrt{5}}{2}$, $\quad R = \dfrac{\sqrt{5}}{2}$.

---

## Problem 29

$$\sum_{k=0}^\infty \frac{(2k)!}{(k+2)(k!)^2}(z-i)^{2k}$$

**Center:** $z_0 = i$. The series involves $(z-i)^{2k}$. Substitute $w = (z-i)^2$ to get $\sum_{k=0}^\infty a_k\, w^k$ with $a_k = \dfrac{(2k)!}{(k+2)(k!)^2}$, and find its radius $R_w$ in $w$.

Apply the **ratio test**:

$$\frac{a_{k+1}}{a_k} = \frac{(2k+2)!}{(k+3)\,[(k+1)!]^2} \cdot \frac{(k+2)\,(k!)^2}{(2k)!}$$

Expand using $(2k+2)! = (2k+2)(2k+1)(2k)!$ and $(k+1)!^2 = (k+1)^2(k!)^2$:

$$= \frac{(2k+2)(2k+1)(k+2)}{(k+3)(k+1)^2} = \frac{2(2k+1)(k+2)}{(k+3)(k+1)}$$

Taking the limit as $k \to \infty$:

$$L = \lim_{k\to\infty} \frac{2(2k+1)(k+2)}{(k+3)(k+1)} = \lim_{k\to\infty} \frac{4k^2 + 10k + 4}{k^2 + 4k + 3} = 4$$

So $R_w = \dfrac{1}{L} = \dfrac{1}{4}$.

The series in $z$ converges when $|w| < \tfrac{1}{4}$, i.e., $|(z-i)^2| < \tfrac{1}{4}$, i.e., $|z-i|^2 < \tfrac{1}{4}$:

$$R = \sqrt{R_w} = \sqrt{\frac{1}{4}} = \boxed{\frac{1}{2}}$$

**Circle of convergence:** $|z - i| = \dfrac{1}{2}$, $\quad R = \dfrac{1}{2}$.

---

## Problem 30

$$\sum_{k=0}^\infty \frac{k!}{(2k)^k}\,z^{3k}$$

**Center:** $z_0 = 0$. The series involves $z^{3k}$. Substitute $w = z^3$ to get $\sum_{k=0}^\infty a_k\, w^k$ with $a_k = \dfrac{k!}{(2k)^k}$, and find $R_w$.

Apply the **ratio test**:

$$\frac{a_{k+1}}{a_k} = \frac{(k+1)!}{(2k+2)^{k+1}} \cdot \frac{(2k)^k}{k!} = \frac{(k+1)\,(2k)^k}{(2k+2)^{k+1}}$$

Factor the denominator as $(2k+2)^{k+1} = 2(k+1)\cdot(2k+2)^k$:

$$= \frac{(k+1)}{2(k+1)} \cdot \left(\frac{2k}{2k+2}\right)^k = \frac{1}{2}\left(\frac{k}{k+1}\right)^k$$

Evaluate the limit using $\left(1-\tfrac{1}{k+1}\right)^k \to e^{-1}$:

$$L = \lim_{k\to\infty} \frac{1}{2}\left(\frac{k}{k+1}\right)^k = \frac{1}{2}\cdot e^{-1} = \frac{1}{2e}$$

So $R_w = \dfrac{1}{L} = 2e$.

The series in $z$ converges when $|w| < 2e$, i.e., $|z^3| < 2e$, i.e., $|z|^3 < 2e$:

$$R = R_w^{1/3} = (2e)^{1/3}$$

**Circle of convergence:** $|z| = (2e)^{1/3}$, $\quad R = (2e)^{1/3}$.

---

## Problems 31-35

## Problem 31

**Series:** $\displaystyle\sum_{k=1}^{\infty} \frac{(z-i)^k}{k\cdot 2^k}$, centered at $z_0 = i$.

### Step 1: Find the Radius of Convergence

Apply the Cauchy–Hadamard formula with $a_k = \dfrac{1}{k\cdot 2^k}$:

$$\frac{1}{R} = \limsup_{k\to\infty}|a_k|^{1/k} = \lim_{k\to\infty}\left(\frac{1}{k\cdot 2^k}\right)^{1/k} = \lim_{k\to\infty}\frac{1}{k^{1/k}\cdot 2} = \frac{1}{1\cdot 2} = \frac{1}{2}$$

since $k^{1/k}\to 1$. Thus $R = 2$ and the **circle of convergence** is $|z-i|=2$.

### Step 2: Show the Series Is Not Absolutely Convergent on the Circle

For any $z$ with $|z-i|=2$:

$$\left|\frac{(z-i)^k}{k\cdot 2^k}\right| = \frac{|z-i|^k}{k\cdot 2^k} = \frac{2^k}{k\cdot 2^k} = \frac{1}{k}$$

Therefore:

$$\sum_{k=1}^{\infty}\left|\frac{(z-i)^k}{k\cdot 2^k}\right| = \sum_{k=1}^{\infty}\frac{1}{k} \quad \longrightarrow \quad \text{diverges (harmonic series)}$$

The series is **not absolutely convergent** at any point on $|z-i|=2$.

### Step 3: Find a Point of Convergence

Choose $z = -2+i$, so that $z - i = -2$ lies on the circle (since $|-2|=2$). Substituting:

$$\sum_{k=1}^{\infty}\frac{(-2)^k}{k\cdot 2^k} = \sum_{k=1}^{\infty}\frac{(-1)^k}{k} = -1 + \frac{1}{2} - \frac{1}{3} + \frac{1}{4} - \cdots$$

This is the **alternating harmonic series**. By the Alternating Series Test, the terms $\tfrac{1}{k}$ are positive, decreasing, and $\tfrac{1}{k}\to 0$, so the series **converges** (conditionally) at $\boxed{z = -2+i}$.

---

## Problem 32

**Series:** $\displaystyle\sum_{k=1}^{\infty}\frac{z^k}{k^2}$, centered at the origin.

### Step 1: Find the Radius of Convergence

With $a_k = 1/k^2$:

$$\frac{1}{R} = \lim_{k\to\infty}\left(\frac{1}{k^2}\right)^{1/k} = \lim_{k\to\infty} k^{-2/k} = 1$$

since $k^{1/k}\to 1$ implies $k^{2/k}\to 1$. Thus $R = 1$ and the circle of convergence is $|z|=1$.

### Step 2: Absolute Convergence on the Entire Circle

For every $z$ with $|z|=1$:

$$\left|\frac{z^k}{k^2}\right| = \frac{|z|^k}{k^2} = \frac{1^k}{k^2} = \frac{1}{k^2}$$

The majorant series $\displaystyle\sum_{k=1}^{\infty}\frac{1}{k^2}$ is a convergent $p$-series ($p=2>1$). By the **Comparison Test**:

$$\sum_{k=1}^{\infty}\left|\frac{z^k}{k^2}\right| \le \sum_{k=1}^{\infty}\frac{1}{k^2} < \infty \quad \text{for every } z \text{ with } |z|=1$$

Since the bound is independent of $z$, the series converges **absolutely** (and hence converges) at every point on $|z|=1$. $\blacksquare$

---

## Problem 33

**Theorem (Divergence Test / $n$th-Term Test):** If $\displaystyle\sum_{k=0}^{\infty} c_k$ converges, then $\lim_{k\to\infty} c_k = 0$. Equivalently:

$$\lim_{k\to\infty}|c_k| \neq 0 \implies \sum_{k=0}^{\infty}c_k \text{ diverges.}$$

### Proof

Let $S_n = \displaystyle\sum_{k=0}^{n}c_k$ denote the $n$th partial sum, and suppose $S_n \to S$ as $n\to\infty$. Then:

$$c_n = S_n - S_{n-1} \xrightarrow{n\to\infty} S - S = 0$$

Taking the contrapositive: if $\lim_{n\to\infty} c_n \neq 0$ (or the limit fails to exist), then $S_n$ cannot converge, so **the series diverges**. $\blacksquare$

### Remark

The converse is **false**: $c_k\to 0$ does not guarantee convergence (e.g., the harmonic series). The test is only useful for establishing divergence. On a circle of convergence $|z-z_0|=R$, if the general term satisfies $|a_k(z-z_0)^k| \not\to 0$, the series diverges at that point by this test.

---

## Problem 34

**Series:** $\displaystyle\sum_{k=1}^{\infty} k\,z^k$, centered at the origin.

### Step 1: Find the Radius of Convergence

Apply the ratio test with $a_k = k$:

$$\lim_{k\to\infty}\left|\frac{(k+1)z^{k+1}}{k\,z^k}\right| = |z|\lim_{k\to\infty}\frac{k+1}{k} = |z|$$

The series converges for $|z|<1$ and diverges for $|z|>1$, so $R=1$ and the circle of convergence is $|z|=1$.

### Step 2: Divergence Everywhere on the Circle

For any $z$ with $|z|=1$:

$$|k\,z^k| = k\,|z|^k = k\cdot 1 = k$$

Therefore:

$$\lim_{k\to\infty}|k\,z^k| = \lim_{k\to\infty} k = \infty \neq 0$$

By the **Divergence Test** (Problem 33), the series $\displaystyle\sum_{k=1}^{\infty} k\,z^k$ **diverges at every point** on $|z|=1$. $\blacksquare$

---

## Problem 35

**Geometric series:** $\displaystyle\sum_{k=0}^{\infty} r^k e^{ik\theta}$, where $0\le r < 1$, $\theta\in\mathbb{R}$.

### Step 1: Sum the Geometric Series

Since $|re^{i\theta}| = r < 1$, the geometric series converges:

$$\sum_{k=0}^{\infty}\bigl(re^{i\theta}\bigr)^k = \frac{1}{1-re^{i\theta}}$$

### Step 2: Simplify the Right-Hand Side

Multiply numerator and denominator by the conjugate $\overline{1-re^{i\theta}} = 1 - re^{-i\theta}$:

$$\frac{1}{1-re^{i\theta}} = \frac{1-re^{-i\theta}}{\bigl|1-re^{i\theta}\bigr|^2}$$

Compute the denominator:

$$\bigl|1-re^{i\theta}\bigr|^2 = (1-r\cos\theta)^2 + (r\sin\theta)^2 = 1 - 2r\cos\theta + r^2$$

Expand the numerator using $e^{-i\theta} = \cos\theta - i\sin\theta$:

$$1 - re^{-i\theta} = (1-r\cos\theta) + ir\sin\theta$$

Therefore:

$$\frac{1}{1-re^{i\theta}} = \frac{(1-r\cos\theta) + ir\sin\theta}{1 - 2r\cos\theta + r^2}$$

### Step 3: Separate Real and Imaginary Parts

Expand the left-hand side using $e^{ik\theta} = \cos(k\theta)+i\sin(k\theta)$:

$$\sum_{k=0}^{\infty}r^k e^{ik\theta} = \sum_{k=0}^{\infty}r^k\cos(k\theta) + i\sum_{k=0}^{\infty}r^k\sin(k\theta)$$

Equating **real parts** on both sides:

$$\boxed{\sum_{k=0}^{\infty}r^k\cos(k\theta) = \frac{1 - r\cos\theta}{1 - 2r\cos\theta + r^2}}$$

Equating **imaginary parts** on both sides:

$$\boxed{\sum_{k=0}^{\infty}r^k\sin(k\theta) = \frac{r\sin\theta}{1 - 2r\cos\theta + r^2}}$$

Both identities hold for $0\le r < 1$ and all real $\theta$. $\blacksquare$

---

## Problems 36-40

## Problem 36

**Claim:** If $\{z_n\}$ and $\{w_n\}$ are convergent sequences with $z_n \to z$ and $w_n \to w$, then $\{z_n + w_n\}$ is bounded and converges to $z + w$.

### Boundedness of $\{z_n + w_n\}$

Since $z_n \to z$, the sequence $\{z_n\}$ is convergent, hence bounded: $\exists\, M_1 > 0$ such that $|z_n| \leq M_1$ for all $n$.

Since $w_n \to w$, similarly $\exists\, M_2 > 0$ such that $|w_n| \leq M_2$ for all $n$.

By the triangle inequality:
$$|z_n + w_n| \leq |z_n| + |w_n| \leq M_1 + M_2 =: M$$

So $\{z_n + w_n\}$ is bounded by $M$.

### Convergence of $\{z_n + w_n\}$

**Claim:** $z_n + w_n \to z + w$.

Let $\varepsilon > 0$ be given. Since $z_n \to z$:
$$\exists\, N_1 \in \mathbb{N} \text{ such that } n > N_1 \implies |z_n - z| < \frac{\varepsilon}{2}$$

Since $w_n \to w$:
$$\exists\, N_2 \in \mathbb{N} \text{ such that } n > N_2 \implies |w_n - w| < \frac{\varepsilon}{2}$$

Set $N = \max(N_1, N_2)$. For all $n > N$, the triangle inequality gives:
$$|(z_n + w_n) - (z + w)| = |(z_n - z) + (w_n - w)| \leq |z_n - z| + |w_n - w| < \frac{\varepsilon}{2} + \frac{\varepsilon}{2} = \varepsilon$$

Therefore $\displaystyle\lim_{n\to\infty}(z_n + w_n) = z + w$. $\blacksquare$

---

## Problem 37

**Theorem:** Every convergent sequence $\{z_n\}$ is bounded.

**Proof:** Suppose $z_n \to L$. Taking $\varepsilon = 1$, there exists $N$ such that for all $n > N$:
$$|z_n - L| < 1 \implies |z_n| = |(z_n - L) + L| \leq |z_n - L| + |L| < 1 + |L|$$

For $n \leq N$, the values $|z_1|, |z_2|, \ldots, |z_N|$ form a finite set. Define:
$$M = \max\bigl(|z_1|,\, |z_2|,\, \ldots,\, |z_N|,\, 1 + |L|\bigr)$$

Then $|z_n| \leq M$ for **all** $n \in \mathbb{N}$, so $\{z_n\}$ is bounded. $\blacksquare$

### Examples

**Bounded sequence:**

$$z_n = i^n = e^{i\pi n/2}$$

Since $|z_n| = |i|^n = 1$ for all $n$, the sequence is bounded by $M = 1$.

The terms cycle: $i,\; -1,\; -i,\; 1,\; i,\; -1,\; \ldots$ — bounded but (as shown below) not convergent.

**Unbounded sequence:**

$$z_n = n(1+i)$$

Then $|z_n| = n\sqrt{2} \to \infty$, so $\{z_n\}$ is unbounded.

---

## Problem 38

### Is every convergent sequence bounded?

**Yes.** This is exactly the theorem proved in Problem 37: if $z_n \to L$, the tail of the sequence is trapped within a disk of radius $1$ about $L$, and finitely many initial terms are bounded by their maximum modulus.

### Is every bounded sequence convergent?

**No.** A bounded sequence need not converge.

**Counterexample:** Let $z_n = i^n$. Then $|i^n| = 1$ for all $n$, so the sequence is bounded. The terms are:
$$z_1 = i,\quad z_2 = -1,\quad z_3 = -i,\quad z_4 = 1,\quad z_5 = i,\quad \ldots$$

This sequence cycles with period 4 and takes four distinct values. For any candidate limit $L \in \mathbb{C}$, at least two of the four values $\{i, -1, -i, 1\}$ satisfy $|z - L| \geq \frac{\sqrt{2}}{2}$, so no single limit can be approached by all terms. Therefore $\{i^n\}$ **diverges**.

**Conclusion:** Convergent $\Rightarrow$ Bounded, but Bounded $\not\Rightarrow$ Convergent.

---

## Problem 39

**Find $\displaystyle\lim_{n\to\infty} i^{1/n}$**, where $i^{1/n}$ denotes the principal $n$th root.

**Step 1: Express $i$ in polar form.**

$$i = e^{i\pi/2}$$

since $|i|=1$ and $\operatorname{Arg}(i) = \dfrac{\pi}{2}$.

**Step 2: Compute the principal $n$th root.**

The principal $n$th root takes the principal argument divided by $n$:

$$i^{1/n} = |i|^{1/n} e^{i\operatorname{Arg}(i)/n} = 1 \cdot e^{i\pi/(2n)} = e^{i\pi/(2n)}$$

So explicitly:
$$i^{1/n} = \cos\!\left(\frac{\pi}{2n}\right) + i\sin\!\left(\frac{\pi}{2n}\right)$$

**Step 3: Take the limit.**

As $n \to \infty$, $\dfrac{\pi}{2n} \to 0$, so:

$$\lim_{n\to\infty}\cos\!\left(\frac{\pi}{2n}\right) = \cos(0) = 1, \qquad \lim_{n\to\infty}\sin\!\left(\frac{\pi}{2n}\right) = \sin(0) = 0$$

Therefore:
$$\boxed{\lim_{n\to\infty} i^{1/n} = 1}$$

This is consistent with the general result $\lim_{n\to\infty} z^{1/n} = 1$ for any fixed $z \neq 0$.

---

## Problem 40

**Show that**
$$\frac{1}{1-z} = -\sum_{k=1}^{\infty} z^{-k}$$
**and determine the region of convergence.**

### Derivation

Recall the geometric series identity, valid for $|w| < 1$:
$$\frac{1}{1-w} = \sum_{k=0}^{\infty} w^k$$

**Step 1: Substitute $w = z^{-1} = 1/z$.**

For $\left|\dfrac{1}{z}\right| < 1$, i.e., $|z| > 1$:

$$\frac{1}{1 - z^{-1}} = \sum_{k=0}^{\infty} z^{-k} = 1 + z^{-1} + z^{-2} + \cdots$$

**Step 2: Simplify the left side.**

$$\frac{1}{1 - z^{-1}} = \frac{1}{\dfrac{z - 1}{z}} = \frac{z}{z-1} = \frac{-z}{1-z}$$

So:
$$\frac{-z}{1-z} = \sum_{k=0}^{\infty} z^{-k} = 1 + z^{-1} + z^{-2} + \cdots$$

**Step 3: Divide both sides by $z$** (valid since $|z| > 1$ implies $z \neq 0$):

$$\frac{-1}{1-z} = \sum_{k=0}^{\infty} z^{-(k+1)} = z^{-1} + z^{-2} + z^{-3} + \cdots = \sum_{k=1}^{\infty} z^{-k}$$

**Step 4: Multiply both sides by $-1$:**

$$\boxed{\frac{1}{1-z} = -\sum_{k=1}^{\infty} z^{-k}}$$

### Region of Convergence

The substitution $w = 1/z$ requires $|w| < 1$, that is:

$$\left|\frac{1}{z}\right| < 1 \iff |z| > 1$$

The series converges in the region $|z| > 1$, the **exterior of the unit disk** in the complex plane.

**Verification of divergence on the boundary:** For $|z|=1$, $|z^{-k}| = 1$ for all $k$, so the terms do not tend to zero and the series diverges on $|z|=1$.

---

## Problems 41-47

## Problem 41

**Find the convergence region for $\dfrac{1}{1-e^{iz}}$ expressed as a power series.**

Recognize $\dfrac{1}{1-w} = \displaystyle\sum_{k=0}^{\infty} w^k$ for $|w|<1$. Set $w = e^{iz}$:

$$\frac{1}{1-e^{iz}} = \sum_{k=0}^{\infty} e^{ikz}$$

**Determine where the ratio satisfies $|e^{iz}|<1$.**

Write $z = x+iy$. Then

$$e^{iz} = e^{i(x+iy)} = e^{ix-y} = e^{-y}\,e^{ix}$$

so

$$|e^{iz}| = e^{-y}.$$

The condition $|e^{iz}|<1$ becomes

$$e^{-y} < 1 \iff -y < 0 \iff y > 0.$$

**Conclusion.** The geometric series converges if and only if $\operatorname{Im}(z)>0$. The convergence region is the **open upper half-plane**

$$\{z\in\mathbb{C} : \operatorname{Im}(z)>0\}.$$

---

## Problem 42

**Sketch the convergence region for $\displaystyle\sum_{k=0}^{\infty}\!\left(\dfrac{z-1}{z+2}\right)^{\!k}$.**

This is a geometric series with ratio $w = \dfrac{z-1}{z+2}$. It converges if and only if $|w|<1$:

$$\left|\frac{z-1}{z+2}\right| < 1 \iff |z-1| < |z+2|.$$

**Identify the region geometrically.** The inequality $|z-1|<|z+2|$ means $z$ is strictly closer to the point $1$ than to the point $-2$ in the complex plane. The locus of points equidistant from $1$ and $-2$ is the perpendicular bisector of the segment joining them.

Algebraically, let $z=x+iy$:

$$|z-1|^2 < |z+2|^2$$
$$(x-1)^2 + y^2 < (x+2)^2 + y^2$$
$$x^2 - 2x + 1 < x^2 + 4x + 4$$
$$-6x < 3$$
$$x > -\tfrac{1}{2}.$$

**Conclusion.** The series converges in the open half-plane $\operatorname{Re}(z) > -\tfrac{1}{2}$, whose boundary is the vertical line $x=-\tfrac{1}{2}$ (the perpendicular bisector of the segment from $-2$ to $1$).

**Sketch description:**

```
Im
 |       convergence region
 |       (shaded right half)
 |
-----+---+----------- Re
    -2  -1/2   1
         |
    diverges | converges
```

The boundary $\operatorname{Re}(z)=-\tfrac{1}{2}$ is excluded (the series diverges there since $|w|=1$).

---

## Problem 43

**Can $\displaystyle\sum_{k=0}^{\infty} a_k(z-1+2i)^k$ converge at $z_1=-3+i$ and diverge at $z_2=5-3i$?**

The series is centered at $z_0 = 1-2i$. Compute the distances from each given point to the center.

**Distance to $z_1 = -3+i$:**

$$|z_1 - z_0| = |(-3+i)-(1-2i)| = |-4+3i| = \sqrt{16+9} = 5.$$

**Distance to $z_2 = 5-3i$:**

$$|z_2 - z_0| = |(5-3i)-(1-2i)| = |4-i| = \sqrt{16+1} = \sqrt{17} \approx 4.12.$$

**Apply the fundamental theorem on power series.** If a power series $\displaystyle\sum a_k(z-z_0)^k$ converges at a point $z_1$, then it converges absolutely for **every** $z$ satisfying $|z-z_0| < |z_1-z_0|$.

Here $|z_1-z_0|=5$, so convergence at $z_1$ implies absolute convergence for all $z$ with $|z-z_0|<5$. Since

$$|z_2-z_0| = \sqrt{17} < 5,$$

the point $z_2=5-3i$ lies strictly inside this disk, and so the series **must converge absolutely** at $z_2$.

**Conclusion.** No. It is **impossible** for the series to converge at $-3+i$ and diverge at $5-3i$. If it converges at the farther point $-3+i$ (distance $5$ from center), it is forced to converge at the nearer point $5-3i$ (distance $\sqrt{17}<5$ from center).

---

## Problem 44

**Illustrate the convergence/divergence theorems for power series.**

The two key theorems illustrated are:

> **Theorem A.** If $\sum a_k(z-z_0)^k$ converges at $z_1\neq z_0$, it converges absolutely for all $z$ with $|z-z_0| < |z_1-z_0|$.

> **Theorem B.** If $\sum a_k(z-z_0)^k$ diverges at $z_2$, it diverges for all $z$ with $|z-z_0| > |z_2-z_0|$.

**Diagram A — Convergence implies a disk of absolute convergence:**

```
          Im
           |
           |     •z₁  (series converges here)
           |    /
           |   /  r₁ = |z₁−z₀|
           |  /
    -------z₀------------ Re
           |   ___
           |  /   \   ← open disk |z−z₀| < r₁
           | | z₀  |     absolute convergence guaranteed here
           |  \___/
           |
```

**Diagram B — Divergence implies an exterior region of divergence:**

```
          Im
           |
           |            •z₂  (series diverges here)
           |           /
           |          / r₂ = |z₂−z₀|
           |    ___  /
           |   /   \/  boundary circle
    -------z₀------------ Re
           |  \       outside circle |z−z₀| > r₂:
           |   \___/  divergence guaranteed
           |
```

**Combined picture — the radius of convergence $R$:**

```
    |z−z₀| < R         |z−z₀| > R
   ┌─────────────┐
   │  Absolutely │ ← R → │ Diverges
   │  Convergent │       │ everywhere
   └─────────────┘
         z₀    boundary circle: behavior undetermined
```

The radius of convergence $R$ satisfies: series converges absolutely inside $|z-z_0|<R$, diverges outside $|z-z_0|>R$, and behavior on $|z-z_0|=R$ must be examined individually.

---

## Problem 45

**Find the radius of convergence of $f(z)=\displaystyle\sum_{k=0}^{\infty} a_k z^k$ where coefficients alternate between $2^k$ (even $k$) and $7^{-k}$ (odd $k$):**

$$a_k = \begin{cases} 2^k & k \text{ even} \\ 7^{-k} & k \text{ odd.}\end{cases}$$

Apply the **Cauchy–Hadamard formula**:

$$\frac{1}{R} = \limsup_{k\to\infty}|a_k|^{1/k}.$$

Evaluate along each subsequence:

- **Even indices** $k=2m$: $\quad|a_k|^{1/k} = (2^k)^{1/k} = 2 \;\to\; 2.$

- **Odd indices** $k=2m+1$: $\quad|a_k|^{1/k} = (7^{-k})^{1/k} = 7^{-1} = \tfrac{1}{7} \;\to\; \tfrac{1}{7}.$

The $\limsup$ is the largest cluster point:

$$\limsup_{k\to\infty}|a_k|^{1/k} = \max\!\left\{2,\,\tfrac{1}{7}\right\} = 2.$$

Therefore

$$\frac{1}{R} = 2 \implies \boxed{R = \frac{1}{2}}.$$

---

## Problem 46

**Find the radius of convergence of $1 + 3z + z^2 + 27z^3 + z^4 + 243z^5 + \cdots$**

**Identify the coefficients.** List the first several terms:

$$a_0=1,\quad a_1=3,\quad a_2=1,\quad a_3=27,\quad a_4=1,\quad a_5=243,\ldots$$

Observe: $3=3^1,\;27=3^3,\;243=3^5$. The pattern is

$$a_k = \begin{cases} 1 & k \text{ even} \\ 3^k & k \text{ odd.}\end{cases}$$

**Apply Cauchy–Hadamard:**

$$\frac{1}{R} = \limsup_{k\to\infty}|a_k|^{1/k}.$$

- **Even indices** $k=2m$: $\quad|a_k|^{1/k} = 1^{1/k} = 1 \;\to\; 1.$

- **Odd indices** $k=2m+1$: $\quad|a_k|^{1/k} = (3^k)^{1/k} = 3 \;\to\; 3.$

$$\limsup_{k\to\infty}|a_k|^{1/k} = \max\{1,\,3\} = 3.$$

Therefore

$$\frac{1}{R} = 3 \implies \boxed{R = \frac{1}{3}}.$$

---

## Problem 47

**Prove: Absolute convergence implies convergence for complex series.**

**Theorem.** If $\displaystyle\sum_{k=0}^{\infty} c_k$ converges absolutely (i.e., $\displaystyle\sum_{k=0}^{\infty}|c_k|$ converges), then $\displaystyle\sum_{k=0}^{\infty} c_k$ converges.

**Proof.**

**Step 1 — Set up real and imaginary parts.**

Write each term as $c_k = a_k + ib_k$ where $a_k = \operatorname{Re}(c_k)$ and $b_k = \operatorname{Im}(c_k)$ are real.

**Step 2 — Bound real and imaginary parts by the modulus.**

For any complex number, $|\operatorname{Re}(w)|\leq|w|$ and $|\operatorname{Im}(w)|\leq|w|$. Therefore

$$|a_k| \leq |c_k| \quad\text{and}\quad |b_k| \leq |c_k| \quad \text{for all }k.$$

**Step 3 — Conclude $\sum a_k$ converges by comparison.**

Since $\displaystyle\sum_{k=0}^{\infty}|c_k|$ converges and $0\leq|a_k|\leq|c_k|$, the real series $\displaystyle\sum_{k=0}^{\infty}|a_k|$ converges by the (real) comparison test. A real series that converges absolutely converges, so $\displaystyle\sum_{k=0}^{\infty} a_k$ **converges**.

**Step 4 — Conclude $\sum b_k$ converges by the same argument.**

By an identical comparison using $|b_k|\leq|c_k|$, the series $\displaystyle\sum_{k=0}^{\infty}|b_k|$ converges, and therefore $\displaystyle\sum_{k=0}^{\infty} b_k$ **converges**.

**Step 5 — Combine to conclude $\sum c_k$ converges.**

Let $S_n = \displaystyle\sum_{k=0}^{n} c_k$, $\;A_n = \displaystyle\sum_{k=0}^{n}a_k$, $\;B_n=\displaystyle\sum_{k=0}^{n}b_k$. Then

$$S_n = A_n + i\,B_n.$$

Since $A_n\to A$ and $B_n\to B$ for finite real numbers $A,B$,

$$S_n = A_n + iB_n \;\longrightarrow\; A + iB \quad\text{as }n\to\infty.$$

**Step 6 — State the conclusion.**

Therefore $\displaystyle\sum_{k=0}^{\infty} c_k$ converges (to $A+iB$). $\blacksquare$

**Remark (alternative via Cauchy criterion).** Since $\displaystyle\sum|c_k|$ converges, for every $\varepsilon>0$ there exists $N$ such that $m>n>N$ implies $\displaystyle\sum_{k=n+1}^{m}|c_k|<\varepsilon$. By the triangle inequality,

$$\left|\sum_{k=n+1}^{m}c_k\right|\leq\sum_{k=n+1}^{m}|c_k|<\varepsilon,$$

so the partial sums of $\sum c_k$ satisfy the Cauchy criterion in $\mathbb{C}$, hence $\sum c_k$ converges. $\blacksquare$

---