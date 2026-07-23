# Complex Analysis — Dennis G. Zill, 2nd Edition
## Chapter 6 · Series and Residues
### Section 6.3: Laurent Series
### Complete Solutions

![Figure 6.6](../../extracted_figures/figure_6_6.png)
![Figure 6.7](../../extracted_figures/figure_6_7.png)

---

### Problems 1–6: Laurent Expansions in a Punctured Disk

![Figure 6.8](../../extracted_figures/figure_6_8.png)

In these problems, we expand the given function in a Laurent series valid for the punctured disk $0 < |z| < R$ or $0 < |z - z_0| < R$.

#### Problem 1
**Function:** $f(z) = \frac{\cos z}{z}$, valid for $0 < |z| < \infty$.

**Solution:**
We know the Maclaurin series for $\cos z$:
$$\cos z = \sum_{n=0}^{\infty} \frac{(-1)^n z^{2n}}{(2n)!} = 1 - \frac{z^2}{2!} + \frac{z^4}{4!} - \frac{z^6}{6!} + \dots$$
Dividing by $z$ term by term:
$$f(z) = \frac{\cos z}{z} = \frac{1}{z} \left( 1 - \frac{z^2}{2!} + \frac{z^4}{4!} - \frac{z^6}{6!} + \dots \right) = \frac{1}{z} - \frac{z}{2!} + \frac{z^3}{4!} - \frac{z^5}{6!} + \dots$$
Or in summation notation:
$$f(z) = \sum_{n=0}^{\infty} \frac{(-1)^n z^{2n-1}}{(2n)!}$$
This expansion is valid for $0 < |z| < \infty$.

---

#### Problem 2
**Function:** $f(z) = \frac{z - \sin z}{z^5}$, valid for $0 < |z| < \infty$.

**Solution:**
We know the Maclaurin series for $\sin z$:
$$\sin z = \sum_{n=0}^{\infty} \frac{(-1)^n z^{2n+1}}{(2n+1)!} = z - \frac{z^3}{3!} + \frac{z^5}{5!} - \frac{z^7}{7!} + \dots$$
Subtracting sin z from z:
$$z - \sin z = \frac{z^3}{3!} - \frac{z^5}{5!} + \frac{z^7}{7!} - \dots = \sum_{n=1}^{\infty} \frac{(-1)^{n+1} z^{2n+1}}{(2n+1)!}$$
Dividing by $z^5$ term by term:
$$f(z) = \frac{z - \sin z}{z^5} = \frac{1}{z^5} \left( \frac{z^3}{3!} - \frac{z^5}{5!} + \frac{z^7}{7!} - \dots \right) = \frac{1}{3! z^2} - \frac{1}{5!} + \frac{z^2}{7!} - \frac{z^4}{9!} + \dots$$
Or in summation notation:
$$f(z) = \sum_{n=1}^{\infty} \frac{(-1)^{n+1} z^{2n-4}}{(2n+1)!} = \sum_{k=0}^{\infty} \frac{(-1)^{k} z^{2k-2}}{(2k+3)!}$$
This expansion is valid for $0 < |z| < \infty$.

---

#### Problem 3
**Function:** $f(z) = e^{-1/z^2}$, valid for $0 < |z| < \infty$.

**Solution:**
We know the Maclaurin series for $e^w$:
$$e^w = \sum_{n=0}^{\infty} \frac{w^n}{n!} = 1 + \frac{w}{1!} + \frac{w^2}{2!} + \frac{w^3}{3!} + \dots$$
Substituting $w = -1/z^2$ (which is valid for all $z \neq 0$):
$$f(z) = e^{-1/z^2} = \sum_{n=0}^{\infty} \frac{(-1)^n}{n! z^{2n}} = 1 - \frac{1}{1! z^2} + \frac{1}{2! z^4} - \frac{1}{3! z^6} + \dots$$
This expansion is valid for $0 < |z| < \infty$.

---

#### Problem 4
**Function:** $f(z) = \frac{1 - e^z}{z^2}$, valid for $0 < |z| < \infty$.

**Solution:**
We know the Maclaurin series for $e^z$:
$$e^z = 1 + z + \frac{z^2}{2!} + \frac{z^3}{3!} + \frac{z^4}{4!} + \dots$$
So:
$$1 - e^z = -z - \frac{z^2}{2!} - \frac{z^3}{3!} - \frac{z^4}{4!} - \dots$$
Dividing by $z^2$:
$$f(z) = \frac{1 - e^z}{z^2} = -\frac{1}{z} - \frac{1}{2!} - \frac{z}{3!} - \frac{z^2}{4!} - \dots$$
Or in summation notation:
$$f(z) = -\sum_{n=1}^{\infty} \frac{z^{n-2}}{n!} = -\sum_{k=-1}^{\infty} \frac{z^k}{(k+2)!}$$
This expansion is valid for $0 < |z| < \infty$.

---

#### Problem 5
**Function:** $f(z) = \frac{e^z}{z - 1}$, valid for $0 < |z - 1| < \infty$.

**Solution:**
We center the expansion about $z_0 = 1$. Let $w = z - 1 \implies z = w + 1$.
We rewrite $f(z)$ in terms of $w$:
$$f(z) = \frac{e^{w+1}}{w} = \frac{e \cdot e^w}{w}$$
Using the Maclaurin series for $e^w$:
$$f(z) = \frac{e}{w} \left( 1 + w + \frac{w^2}{2!} + \frac{w^3}{3!} + \dots \right) = \frac{e}{w} + e + \frac{e w}{2!} + \frac{e w^2}{3!} + \dots$$
Substituting $w = z - 1$ back:
$$f(z) = \frac{e}{z-1} + e + \frac{e(z-1)}{2!} + \frac{e(z-1)^2}{3!} + \dots$$
Or in summation notation:
$$f(z) = \sum_{n=0}^{\infty} \frac{e (z-1)^{n-1}}{n!}$$
This expansion is valid for $0 < |z-1| < \infty$.

---

#### Problem 6
**Function:** $f(z) = z \cos(1/z)$, valid for $0 < |z| < \infty$.

**Solution:**
We use the series expansion for $\cos(1/z)$ by replacing $z$ with $1/z$ in the standard cosine series:
$$\cos\left(\frac{1}{z}\right) = \sum_{n=0}^{\infty} \frac{(-1)^n}{(2n)! z^{2n}} = 1 - \frac{1}{2! z^2} + \frac{1}{4! z^4} - \frac{1}{6! z^6} + \dots$$
Multiplying by $z$:
$$f(z) = z \cos\left(\frac{1}{z}\right) = z \left( 1 - \frac{1}{2! z^2} + \frac{1}{4! z^4} - \frac{1}{6! z^6} + \dots \right) = z - \frac{1}{2! z} + \frac{1}{4! z^3} - \frac{1}{6! z^5} + \dots$$
Or in summation notation:
$$f(z) = z + \sum_{n=1}^{\infty} \frac{(-1)^n}{(2n)! z^{2n-1}}$$
This expansion is valid for $0 < |z| < \infty$.

---

### Problems 7–12: Expansions of $f(z) = \frac{1}{z(z-3)}$

We find the Laurent expansion of $f(z) = \frac{1}{z(z-3)}$ in various domains. First, write the partial fraction decomposition of $f(z)$:
$$f(z) = \frac{1}{z(z-3)} = \frac{A}{z} + \frac{B}{z-3}$$
Multiplying by $z(z-3)$:
$$1 = A(z-3) + Bz$$
- Setting $z=0 \implies 1 = -3A \implies A = -1/3$.
- Setting $z=3 \implies 1 = 3B \implies B = 1/3$.
Thus:
$$f(z) = -\frac{1}{3z} + \frac{1}{3(z-3)}$$

---

#### Problem 7
**Domain:** $0 < |z| < 3$.

**Solution:**
The term $-\frac{1}{3z}$ is already in powers of $z$.
For the second term, since $|z| < 3 \implies |z/3| < 1$, we expand:
$$\frac{1}{3(z-3)} = -\frac{1}{9} \frac{1}{1 - z/3} = -\frac{1}{9} \sum_{n=0}^{\infty} \left( \frac{z}{3} \right)^n = -\sum_{n=0}^{\infty} \frac{z^n}{3^{n+2}}$$
Combining the two terms:
$$f(z) = -\frac{1}{3z} - \frac{1}{9} - \frac{z}{27} - \frac{z^2}{81} - \dots = -\frac{1}{3z} - \sum_{n=0}^{\infty} \frac{z^n}{3^{n+2}}$$
This is valid for $0 < |z| < 3$.

---

#### Problem 8
**Domain:** $|z| > 3$.

**Solution:**
Since $|z| > 3 \implies |3/z| < 1$, we expand the second term:
$$\frac{1}{3(z-3)} = \frac{1}{3z} \frac{1}{1 - 3/z} = \frac{1}{3z} \sum_{n=0}^{\infty} \left( \frac{3}{z} \right)^n = \sum_{n=0}^{\infty} \frac{3^{n-1}}{z^{n+1}} = \frac{1}{3z} + \frac{1}{z^2} + \frac{3}{z^3} + \frac{9}{z^4} + \dots$$
Combining with $-\frac{1}{3z}$:
$$f(z) = -\frac{1}{3z} + \left( \frac{1}{3z} + \frac{1}{z^2} + \frac{3}{z^3} + \frac{9}{z^4} + \dots \right) = \frac{1}{z^2} + \frac{3}{z^3} + \frac{9}{z^4} + \dots = \sum_{n=1}^{\infty} \frac{3^{n-1}}{z^{n+1}}$$
This is valid for $|z| > 3$.

---

#### Problem 9
**Domain:** $0 < |z-3| < 3$.

**Solution:**
Let $w = z-3 \implies z = w+3$. The partial fraction form is:
$$f(z) = -\frac{1}{3(w+3)} + \frac{1}{3w}$$
The term $\frac{1}{3w}$ is already in powers of $w = z-3$.
For the first term, since $|w| < 3 \implies |w/3| < 1$:
$$-\frac{1}{3(w+3)} = -\frac{1}{9} \frac{1}{1 + w/3} = -\frac{1}{9} \sum_{n=0}^{\infty} (-1)^n \left( \frac{w}{3} \right)^n = \sum_{n=0}^{\infty} \frac{(-1)^{n+1} w^n}{3^{n+2}}$$
Combining:
$$f(z) = \frac{1}{3(z-3)} - \frac{1}{9} + \frac{z-3}{27} - \frac{(z-3)^2}{81} + \dots = \frac{1}{3(z-3)} + \sum_{n=0}^{\infty} \frac{(-1)^{n+1} (z-3)^n}{3^{n+2}}$$
This is valid for $0 < |z-3| < 3$.

---

#### Problem 10
**Domain:** $|z-3| > 3$.

**Solution:**
Let $w = z-3 \implies z = w+3$. Since $|w| > 3 \implies |3/w| < 1$:
$$-\frac{1}{3(w+3)} = -\frac{1}{3w} \frac{1}{1 + 3/w} = -\frac{1}{3w} \sum_{n=0}^{\infty} (-1)^n \left( \frac{3}{w} \right)^n = \sum_{n=0}^{\infty} \frac{(-1)^{n+1} 3^{n-1}}{w^{n+1}}$$
Combining with $\frac{1}{3w}$:
$$f(z) = \frac{1}{3w} + \left( -\frac{1}{3w} + \frac{1}{w^2} - \frac{3}{w^3} + \frac{9}{w^4} - \dots \right) = \frac{1}{w^2} - \frac{3}{w^3} + \frac{9}{w^4} - \dots = \sum_{n=1}^{\infty} \frac{(-1)^{n-1} 3^{n-1}}{(z-3)^{n+1}}$$
This is valid for $|z-3| > 3$.

---

#### Problem 11
**Domain:** $1 < |z-4| < 4$.

**Solution:**
Let $w = z-4 \implies z = w+4$.
Then $f(z) = \frac{1}{(w+4)(w+1)}$.
Partial fractions in terms of $w$:
$$\frac{1}{(w+1)(w+4)} = \frac{A}{w+1} + \frac{B}{w+4} \implies 1 = A(w+4) + B(w+1)$$
- $w = -1 \implies A = 1/3$.
- $w = -4 \implies B = -1/3$.
So:
$$f(z) = \frac{1}{3(w+1)} - \frac{1}{3(w+4)}$$
We are given $1 < |w| < 4$:
1. For $\frac{1}{3(w+1)}$, since $|w| > 1 \implies |1/w| < 1$:
   $$\frac{1}{3(w+1)} = \frac{1}{3w} \frac{1}{1 + 1/w} = \frac{1}{3w} \sum_{n=0}^{\infty} \frac{(-1)^n}{w^n} = \sum_{n=0}^{\infty} \frac{(-1)^n}{3w^{n+1}} = \dots - \frac{1}{3w^2} + \frac{1}{3w}$$
2. For $-\frac{1}{3(w+4)}$, since $|w| < 4 \implies |w/4| < 1$:
   $$-\frac{1}{3(w+4)} = -\frac{1}{12} \frac{1}{1 + w/4} = -\frac{1}{12} \sum_{n=0}^{\infty} \frac{(-1)^n w^n}{4^n} = \sum_{n=0}^{\infty} \frac{(-1)^{n+1} w^n}{3 \cdot 4^{n+1}} = -\frac{1}{12} + \frac{w}{3 \cdot 4^2} - \frac{w^2}{3 \cdot 4^3} + \dots$$
Combining:
$$f(z) = \dots - \frac{1}{3(z-4)^2} + \frac{1}{3(z-4)} - \frac{1}{12} + \frac{z-4}{48} - \frac{(z-4)^2}{192} + \dots$$
This is valid for $1 < |z-4| < 4$.

---

#### Problem 12
**Domain:** $1 < |z+1| < 4$.

**Solution:**
Let $w = z+1 \implies z = w-1$.
Then $f(z) = \frac{1}{(w-1)(w-4)}$.
Partial fractions in terms of $w$:
$$\frac{1}{(w-1)(w-4)} = \frac{A}{w-1} + \frac{B}{w-4} \implies 1 = A(w-4) + B(w-1)$$
- $w = 1 \implies A = -1/3$.
- $w = 4 \implies B = 1/3$.
So:
$$f(z) = -\frac{1}{3(w-1)} + \frac{1}{3(w-4)}$$
We are given $1 < |w| < 4$:
1. For $-\frac{1}{3(w-1)}$, since $|w| > 1 \implies |1/w| < 1$:
   $$-\frac{1}{3(w-1)} = -\frac{1}{3w} \frac{1}{1 - 1/w} = -\frac{1}{3w} \sum_{n=0}^{\infty} \frac{1}{w^n} = -\sum_{n=0}^{\infty} \frac{1}{3w^{n+1}} = \dots - \frac{1}{3(z+1)^2} - \frac{1}{3(z+1)}$$
2. For $\frac{1}{3(w-4)}$, since $|w| < 4 \implies |w/4| < 1$:
   $$\frac{1}{3(w-4)} = -\frac{1}{12} \frac{1}{1 - w/4} = -\frac{1}{12} \sum_{n=0}^{\infty} \frac{w^n}{4^n} = -\sum_{n=0}^{\infty} \frac{w^n}{3 \cdot 4^{n+1}} = -\frac{1}{12} - \frac{w}{48} - \frac{w^2}{192} - \dots$$
Combining:
$$f(z) = \dots - \frac{1}{3(z+1)^2} - \frac{1}{3(z+1)} - \frac{1}{12} - \frac{z+1}{48} - \frac{(z+1)^2}{192} - \dots$$
This is valid for $1 < |z+1| < 4$.

---

### Problems 13–16: Expansions of $f(z) = \frac{1}{(z-1)(z-2)}$

First, write the partial fraction decomposition of $f(z)$:
$$f(z) = \frac{1}{(z-1)(z-2)} = \frac{A}{z-1} + \frac{B}{z-2} \implies 1 = A(z-2) + B(z-1)$$
- $z = 1 \implies A = -1$.
- $z = 2 \implies B = 1$.
Thus:
$$f(z) = -\frac{1}{z-1} + \frac{1}{z-2}$$

---

#### Problem 13
**Domain:** $1 < |z| < 2$.

**Solution:**
We are given $1 < |z| < 2$:
1. For $-\frac{1}{z-1}$, since $|z| > 1 \implies |1/z| < 1$:
   $$-\frac{1}{z-1} = -\frac{1}{z} \frac{1}{1 - 1/z} = -\frac{1}{z} \sum_{n=0}^{\infty} \frac{1}{z^n} = -\sum_{n=0}^{\infty} \frac{1}{z^{n+1}} = \dots - \frac{1}{z^2} - \frac{1}{z}$$
2. For $\frac{1}{z-2}$, since $|z| < 2 \implies |z/2| < 1$:
   $$\frac{1}{z-2} = -\frac{1}{2} \frac{1}{1 - z/2} = -\frac{1}{2} \sum_{n=0}^{\infty} \frac{z^n}{2^n} = -\sum_{n=0}^{\infty} \frac{z^n}{2^{n+1}} = -\frac{1}{2} - \frac{z}{4} - \frac{z^2}{8} - \dots$$
Combining:
$$f(z) = \dots - \frac{1}{z^2} - \frac{1}{z} - \frac{1}{2} - \frac{z}{4} - \frac{z^2}{8} - \dots$$
This is valid for $1 < |z| < 2$.

---

#### Problem 14
**Domain:** $|z| > 2$.

**Solution:**
Since $|z| > 2$, both $|1/z| < 1$ and $|2/z| < 1$ hold:
1. $-\frac{1}{z-1} = -\frac{1}{z} \frac{1}{1 - 1/z} = -\sum_{n=0}^{\infty} \frac{1}{z^{n+1}}$.
2. $\frac{1}{z-2} = \frac{1}{z} \frac{1}{1 - 2/z} = \sum_{n=0}^{\infty} \frac{2^n}{z^{n+1}}$.
Combining:
$$f(z) = \sum_{n=0}^{\infty} \frac{2^n - 1}{z^{n+1}} = \frac{1}{z^2} + \frac{3}{z^3} + \frac{7}{z^4} + \dots$$
This is valid for $|z| > 2$.

---

#### Problem 15
**Domain:** $0 < |z-1| < 1$.

**Solution:**
The term $-\frac{1}{z-1}$ is already in powers of $z-1$.
For the second term, since $|z-1| < 1$:
$$\frac{1}{z-2} = \frac{1}{(z-1) - 1} = -\frac{1}{1 - (z-1)} = -\sum_{n=0}^{\infty} (z-1)^n = -1 - (z-1) - (z-1)^2 - \dots$$
Combining:
$$f(z) = -\frac{1}{z-1} - 1 - (z-1) - (z-1)^2 - \dots$$
This is valid for $0 < |z-1| < 1$.

---

#### Problem 16
**Domain:** $0 < |z-2| < 1$.

**Solution:**
The term $\frac{1}{z-2}$ is already in powers of $z-2$.
For the first term, since $|z-2| < 1$:
$$-\frac{1}{z-1} = -\frac{1}{(z-2) + 1} = -\sum_{n=0}^{\infty} (-1)^n (z-2)^n = -1 + (z-2) - (z-2)^2 + \dots$$
Combining:
$$f(z) = \frac{1}{z-2} - 1 + (z-2) - (z-2)^2 + \dots$$
This is valid for $0 < |z-2| < 1$.

---

### Problems 17–20: Expansions of $f(z) = \frac{z}{(z+1)(z-2)}$

First, write the partial fraction decomposition of $f(z)$:
$$f(z) = \frac{z}{(z+1)(z-2)} = \frac{A}{z+1} + \frac{B}{z-2} \implies z = A(z-2) + B(z+1)$$
- $z = -1 \implies -1 = -3A \implies A = 1/3$.
- $z = 2 \implies 2 = 3B \implies B = 2/3$.
Thus:
$$f(z) = \frac{1}{3(z+1)} + \frac{2}{3(z-2)}$$

---

#### Problem 17
**Domain:** $0 < |z+1| < 3$.

**Solution:**
The term $\frac{1}{3(z+1)}$ is already in powers of $z+1$.
For the second term, since $|z+1| < 3 \implies |(z+1)/3| < 1$:
$$\frac{2}{3(z-2)} = \frac{2}{3((z+1)-3)} = -\frac{2}{9} \frac{1}{1 - (z+1)/3} = -\frac{2}{9} \sum_{n=0}^{\infty} \left( \frac{z+1}{3} \right)^n = -\sum_{n=0}^{\infty} \frac{2(z+1)^n}{3^{n+2}}$$
Combining:
$$f(z) = \frac{1}{3(z+1)} - \frac{2}{9} - \frac{2(z+1)}{27} - \frac{2(z+1)^2}{81} - \dots$$
This is valid for $0 < |z+1| < 3$.

---

#### Problem 18
**Domain:** $|z+1| > 3$.

**Solution:**
Since $|z+1| > 3 \implies |3/(z+1)| < 1$:
$$\frac{2}{3(z-2)} = \frac{2}{3((z+1)-3)} = \frac{2}{3(z+1)} \frac{1}{1 - 3/(z+1)} = \frac{2}{3(z+1)} \sum_{n=0}^{\infty} \left( \frac{3}{z+1} \right)^n = \sum_{n=0}^{\infty} \frac{2 \cdot 3^{n-1}}{(z+1)^{n+1}}$$
Combining with $\frac{1}{3(z+1)}$:
$$f(z) = \frac{1}{3(z+1)} + \frac{2}{3(z+1)} + \frac{2}{(z+1)^2} + \frac{6}{(z+1)^3} + \dots = \frac{1}{z+1} + \frac{2}{(z+1)^2} + \frac{6}{(z+1)^3} + \dots$$
This is valid for $|z+1| > 3$.

---

#### Problem 19
**Domain:** $1 < |z| < 2$.

**Solution:**
We use the partial fraction form:
$$f(z) = \frac{1}{3(z+1)} + \frac{2}{3(z-2)}$$
We are given $1 < |z| < 2$:
1. For $\frac{1}{3(z+1)}$, since $|z| > 1 \implies |1/z| < 1$:
   $$\frac{1}{3(z+1)} = \frac{1}{3z} \frac{1}{1 + 1/z} = \sum_{n=0}^{\infty} \frac{(-1)^n}{3 z^{n+1}} = \dots - \frac{1}{3z^2} + \frac{1}{3z}$$
2. For $\frac{2}{3(z-2)}$, since $|z| < 2 \implies |z/2| < 1$:
   $$\frac{2}{3(z-2)} = -\frac{1}{3} \frac{1}{1 - z/2} = -\sum_{n=0}^{\infty} \frac{z^n}{3 \cdot 2^n} = -\frac{1}{3} - \frac{z}{6} - \frac{z^2}{12} - \dots$$
Combining:
$$f(z) = \dots - \frac{1}{3z^2} + \frac{1}{3z} - \frac{1}{3} - \frac{z}{6} - \frac{z^2}{12} - \dots$$
This is valid for $1 < |z| < 2$.

---

#### Problem 20
**Domain:** $0 < |z-2| < 3$.

**Solution:**
The term $\frac{2}{3(z-2)}$ is already in powers of $z-2$.
For the first term, since $|z-2| < 3 \implies |(z-2)/3| < 1$:
$$\frac{1}{3(z+1)} = \frac{1}{3((z-2)+3)} = \frac{1}{9} \frac{1}{1 + (z-2)/3} = \sum_{n=0}^{\infty} \frac{(-1)^n (z-2)^n}{3^{n+2}} = \frac{1}{9} - \frac{z-2}{27} + \frac{(z-2)^2}{81} - \dots$$
Combining:
$$f(z) = \frac{2}{3(z-2)} + \frac{1}{9} - \frac{z-2}{27} + \frac{(z-2)^2}{81} - \dots$$
This is valid for $0 < |z-2| < 3$.

---

### Problems 21–22: Expansions of $f(z) = \frac{1}{z(1-z)^2}$

---

#### Problem 21
**Domain:** $0 < |z| < 1$.

**Solution:**
The term $1/z$ is already in powers of $z$.
For the term $\frac{1}{(1-z)^2}$, since $|z| < 1$, we can use the binomial series or differentiate the geometric series:
$$\frac{1}{1-z} = \sum_{n=0}^{\infty} z^n \implies \frac{d}{dz} \left( \frac{1}{1-z} \right) = \frac{1}{(1-z)^2} = \sum_{n=1}^{\infty} n z^{n-1} = 1 + 2z + 3z^2 + 4z^3 + \dots$$
Multiplying by $1/z$:
$$f(z) = \frac{1}{z} \left( 1 + 2z + 3z^2 + 4z^3 + \dots \right) = \frac{1}{z} + 2 + 3z + 4z^2 + \dots = \frac{1}{z} + \sum_{n=1}^{\infty} (n+1) z^{n-1}$$
This is valid for $0 < |z| < 1$.

---

#### Problem 22
**Domain:** $|z| > 1$.

**Solution:**
Since $|z| > 1 \implies |1/z| < 1$:
$$\frac{1}{z(1-z)^2} = \frac{1}{z^3 (1 - 1/z)^2}$$
Since $|1/z| < 1$, we expand $\frac{1}{(1-1/z)^2}$ by substituting $1/z$ into the series for $\frac{1}{(1-w)^2}$:
$$\frac{1}{(1 - 1/z)^2} = 1 + \frac{2}{z} + \frac{3}{z^2} + \frac{4}{z^3} + \dots$$
Multiplying by $1/z^3$:
$$f(z) = \frac{1}{z^3} + \frac{2}{z^4} + \frac{3}{z^5} + \frac{4}{z^6} + \dots = \sum_{n=1}^{\infty} \frac{n}{z^{n+2}}$$
This is valid for $|z| > 1$.

---

### Problems 23–24: Expansions of $f(z) = \frac{1}{(z-2)(z-1)^3}$

---

#### Problem 23
**Domain:** $0 < |z-2| < 1$.

**Solution:**
Let $w = z-2 \implies z = w+2$. The function becomes:
$$f(z) = \frac{1}{w(w+1)^3}$$
The term $1/w$ is already in powers of $w$.
For the term $\frac{1}{(1+w)^3}$, since $|w| < 1$, we expand using the binomial series:
$$\frac{1}{(1+w)^3} = (1+w)^{-3} = 1 - 3w + \frac{(-3)(-4)}{2!} w^2 + \frac{(-3)(-4)(-5)}{3!} w^3 + \dots = 1 - 3w + 6w^2 - 10w^3 + \dots$$
Multiplying by $1/w$:
$$f(z) = \frac{1}{w} - 3 + 6w - 10w^2 + \dots = \frac{1}{z-2} - 3 + 6(z-2) - 10(z-2)^2 + \dots$$
This is valid for $0 < |z-2| < 1$.

---

#### Problem 24
**Domain:** $0 < |z-1| < 1$.

**Solution:**
Let $u = z-1 \implies z = u+1$. The function becomes:
$$f(z) = \frac{1}{(u-1)u^3}$$
The term $1/u^3$ is already in powers of $u$.
For the term $\frac{1}{u-1}$, since $|u| < 1$:
$$\frac{1}{u-1} = -\frac{1}{1-u} = -\sum_{n=0}^{\infty} u^n = -1 - u - u^2 - u^3 - \dots$$
Multiplying by $1/u^3$:
$$f(z) = -\frac{1}{u^3} - \frac{1}{u^2} - \frac{1}{u} - 1 - u - u^2 - \dots = -\sum_{n=-3}^{\infty} (z-1)^n$$
This is valid for $0 < |z-1| < 1$.

---

### Problems 25–26: Expansions of $f(z) = \frac{7z-3}{z(z-1)}$

First, rewrite using partial fractions:
$$f(z) = \frac{7z-3}{z(z-1)} = \frac{A}{z} + \frac{B}{z-1} \implies 7z-3 = A(z-1) + Bz$$
- $z = 0 \implies -3 = -A \implies A = 3$.
- $z = 1 \implies 4 = B \implies B = 4$.
Thus:
$$f(z) = \frac{3}{z} + \frac{4}{z-1}$$

---

#### Problem 25
**Domain:** $0 < |z| < 1$.

**Solution:**
The term $3/z$ is already in powers of $z$.
For the second term, since $|z| < 1$:
$$\frac{4}{z-1} = -\frac{4}{1-z} = -4\sum_{n=0}^{\infty} z^n = -4 - 4z - 4z^2 - \dots$$
Combining:
$$f(z) = \frac{3}{z} - 4 - 4z - 4z^2 - \dots = \frac{3}{z} - \sum_{n=0}^{\infty} 4 z^n$$
This is valid for $0 < |z| < 1$.

---

#### Problem 26
**Domain:** $0 < |z-1| < 1$.

**Solution:**
Let $u = z-1 \implies z = u+1$. The partial fraction form is:
$$f(z) = \frac{3}{u+1} + \frac{4}{u}$$
The term $4/u$ is already in powers of $u = z-1$.
For the first term, since $|u| < 1$:
$$\frac{3}{u+1} = 3 \sum_{n=0}^{\infty} (-1)^n u^n = 3 - 3u + 3u^2 - 3u^3 + \dots$$
Combining:
$$f(z) = \frac{4}{z-1} + 3 - 3(z-1) + 3(z-1)^2 - 3(z-1)^3 + \dots = \frac{4}{z-1} + \sum_{n=0}^{\infty} 3(-1)^n (z-1)^n$$
This is valid for $0 < |z-1| < 1$.

---

### Problems 27–28: Expansions of $f(z) = \frac{z^2-2z+2}{z-2}$

---

#### Problem 27
**Domain:** $1 < |z-1|$.

**Solution:**
Let w = z-1 \implies z = w+1. Rewrite f(z) in terms of w:
$$f(z) = \frac{(w+1)^2 - 2(w+1) + 2}{(w+1)-2} = \frac{w^2 + 2w + 1 - 2w - 2 + 2}{w-1} = \frac{w^2 + 1}{w-1}$$
Since we are given $|w| > 1 \implies |1/w| < 1$:
$$\frac{w^2 + 1}{w-1} = \frac{w^2 + 1}{w(1 - 1/w)} = \left( w + \frac{1}{w} \right) \sum_{n=0}^{\infty} \left( \frac{1}{w} \right)^n$$
Let's expand this product:
$$\left( w + \frac{1}{w} \right) \left( 1 + \frac{1}{w} + \frac{1}{w^2} + \frac{1}{w^3} + \dots \right)$$
$$= \left( w + 1 + \frac{1}{w} + \frac{1}{w^2} + \dots \right) + \left( \frac{1}{w} + \frac{1}{w^2} + \frac{1}{w^3} + \dots \right)$$
$$= w + 1 + \frac{2}{w} + \frac{2}{w^2} + \frac{2}{w^3} + \dots$$
Substituting $w = z-1$ back:
$$f(z) = (z-1) + 1 + \frac{2}{z-1} + \frac{2}{(z-1)^2} + \frac{2}{(z-1)^3} + \dots$$
This is valid for $|z-1| > 1$.

---

#### Problem 28
**Domain:** $0 < |z-2| < \infty$.

**Solution:**
Let $u = z-2 \implies z = u+2$. Rewrite $f(z)$ in terms of $u$:
$$f(z) = \frac{(u+2)^2 - 2(u+2) + 2}{u} = \frac{u^2 + 4u + 4 - 2u - 4 + 2}{u} = \frac{u^2 + 2u + 2}{u} = u + 2 + \frac{2}{u}$$
Substituting $u = z-2$ back:
$$f(z) = (z-2) + 2 + \frac{2}{z-2}$$
This is the complete, exact Laurent expansion, and it contains only three terms. It is valid for all $0 < |z-2| < \infty$.

---

### Problems 29–30: Long Division Expansions

In these problems, we use series for $\sin z$ and $\cos z$ along with Laurent long division to find the first three nonzero terms valid for $0 < |z| < \pi$.

#### Problem 29
**Function:** $f(z) = \csc z = \frac{1}{\sin z}$.

**Solution:**
We know the Maclaurin series for $\sin z$:
$$\sin z = z - \frac{z^3}{6} + \frac{z^5}{120} - \dots$$
We write:
$$\csc z = \frac{1}{z \left( 1 - \frac{z^2}{6} + \frac{z^4}{120} - \dots \right)}$$
Using the algebraic expansion of $\frac{1}{1-x} = 1 + x + x^2 + \dots$ where $x = \frac{z^2}{6} - \frac{z^4}{120} + \dots$:
$$\frac{1}{1 - \left( \frac{z^2}{6} - \frac{z^4}{120} + \dots \right)} = 1 + \left( \frac{z^2}{6} - \frac{z^4}{120} \right) + \left( \frac{z^2}{6} - \frac{z^4}{120} \right)^2 + \dots$$
$$= 1 + \frac{z^2}{6} - \frac{z^4}{120} + \frac{z^4}{36} + \dots = 1 + \frac{z^2}{6} + \left( \frac{1}{36} - \frac{1}{120} \right) z^4 + \dots$$
Finding the common denominator: $\frac{1}{36} - \frac{1}{120} = \frac{10}{360} - \frac{3}{360} = \frac{7}{360}$.
So:
$$\frac{1}{1 - \left( \frac{z^2}{6} - \dots \right)} = 1 + \frac{z^2}{6} + \frac{7z^4}{360} + \dots$$
Multiplying by $1/z$:
$$f(z) = \csc z = \frac{1}{z} + \frac{z}{6} + \frac{7z^3}{360} + \dots$$
These are the first three nonzero terms of the Laurent series, valid for $0 < |z| < \pi$.

---

#### Problem 30
**Function:** $f(z) = \cot z = \frac{\cos z}{\sin z}$.

**Solution:**
We know the expansions:
$$\cos z = 1 - \frac{z^2}{2} + \frac{z^4}{24} - \dots$$
$$\sin z = z - \frac{z^3}{6} + \frac{z^5}{120} - \dots$$
We write:
$$\cot z = \frac{1 - \frac{z^2}{2} + \frac{z^4}{24} - \dots}{z \left( 1 - \frac{z^3}{6z} + \dots \right)} = \frac{1}{z} \frac{1 - \frac{z^2}{2} + \frac{z^4}{24} - \dots}{1 - \frac{z^2}{6} + \frac{z^4}{120} - \dots}$$
Let's divide $1 - \frac{z^2}{2} + \frac{z^4}{24} - \dots$ by $1 - \frac{z^2}{6} + \frac{z^4}{120} - \dots$:
1. The first term of the quotient is $1$.
2. Multiply: $1 \cdot \left(1 - \frac{z^2}{6} + \frac{z^4}{120}\right) = 1 - \frac{z^2}{6} + \frac{z^4}{120}$.
3. Subtract from the numerator:
   $$\left(1 - \frac{z^2}{2} + \frac{z^4}{24}\right) - \left(1 - \frac{z^2}{6} + \frac{z^4}{120}\right) = -\frac{z^2}{3} + \left( \frac{1}{24} - \frac{1}{120} \right) z^4 = -\frac{z^2}{3} + \frac{4}{120} z^4 = -\frac{z^2}{3} + \frac{z^4}{30}$$
4. The second term of the quotient is $-\frac{z^2}{3}$.
5. Multiply: $-\frac{z^2}{3} \cdot \left(1 - \frac{z^2}{6}\right) = -\frac{z^2}{3} + \frac{z^4}{18}$.
6. Subtract:
   $$\left( -\frac{z^2}{3} + \frac{z^4}{30} \right) - \left( -\frac{z^2}{3} + \frac{z^4}{18} \right) = \left( \frac{1}{30} - \frac{1}{18} \right) z^4 = \left( \frac{3}{90} - \frac{5}{90} \right) z^4 = -\frac{z^4}{45}$$
7. The third term of the quotient is $-\frac{z^4}{45}$.

So the quotient is $1 - \frac{z^2}{3} - \frac{z^4}{45} - \dots$.
Multiplying by $1/z$:
$$f(z) = \cot z = \frac{1}{z} - \frac{z}{3} - \frac{z^3}{45} - \dots$$
These are the first three nonzero terms of the Laurent series, valid for $0 < |z| < \pi$.

---

### Focus on Concepts

---

#### Problem 31
**Problem:**

![Figure 6.9](../../extracted_figures/figure_6_9.png) The function $f(z) = \frac{1}{(z+2)(z-4i)}$ possesses a Laurent series centered at $z_0 = -2$ valid in the annulus $r < |z+2| < R$. Find $r$ and $R$.

**Solution:**
The center of the Laurent series expansion is $z_0 = -2$.
1. The function has singularities at $z = -2$ and $z = 4i$.
2. The inner radius $r$ is the distance from the center $z_0 = -2$ to the nearest singularity. Since the center $z_0 = -2$ is itself a singularity, the expansion is valid in a punctured neighborhood, meaning $r = 0$.
3. The outer radius $R$ is the distance from the center $z_0 = -2$ to the next singularity at $z_1 = 4i$:
   $$R = |z_1 - z_0| = |4i - (-2)| = |2 + 4i| = \sqrt{2^2 + 4^2} = \sqrt{20} = 2\sqrt{5}$$
Thus, the annulus of convergence is:
$$0 < |z+2| < 2\sqrt{5}$$
So, $r = 0$ and $R = 2\sqrt{5}$.

---

#### Problem 32
**Problem:** Consider the function $f(z) = \frac{e^{-2z}}{(z+1)^2}$. Find the principal part of the Laurent series expansion of $f$ about $z_0 = -1$ that is valid on the annulus $0 < |z+1| < \infty$.

**Solution:**
Let $w = z+1 \implies z = w - 1$.
We rewrite $f(z)$ in terms of $w$:
$$f(z) = \frac{e^{-2(w-1)}}{w^2} = \frac{e^2 e^{-2w}}{w^2}$$
Expanding $e^{-2w}$ using its Maclaurin series:
$$e^{-2w} = 1 - 2w + \frac{(-2w)^2}{2!} + \frac{(-2w)^3}{3!} + \dots = 1 - 2w + 2w^2 - \frac{4w^3}{3} + \dots$$
Multiplying by $\frac{e^2}{w^2}$:
$$f(z) = \frac{e^2}{w^2} \left( 1 - 2w + 2w^2 - \frac{4w^3}{3} + \dots \right) = \frac{e^2}{w^2} - \frac{2e^2}{w} + 2e^2 - \frac{4e^2 w}{3} + \dots$$
Substituting $w = z+1$:
$$f(z) = \frac{e^2}{(z+1)^2} - \frac{2e^2}{z+1} + 2e^2 - \frac{4e^2 (z+1)}{3} + \dots$$
The principal part of a Laurent series consists of all terms containing negative integer powers of $z - z_0$. Thus, the principal part of $f$ is:
$$\frac{e^2}{(z+1)^2} - \frac{2e^2}{z+1}$$

---

#### Problem 33
**Problem:** Consider the function $f(z) = \frac{1}{(z-5)^3}$. What is the Laurent series expansion of $f$ about $z_0 = 5$ that is valid on the annulus $0 < |z-5| < \infty$?

**Solution:**
The function $f(z) = \frac{1}{(z-5)^3}$ is already in the form of a single term involving a power of $z-5$. Since it is analytic everywhere except at $z = 5$, its Laurent series expansion centered at $z_0 = 5$ consists of only this single term:
$$f(z) = \frac{1}{(z-5)^3}$$
This expansion is trivially valid for all $0 < |z-5| < \infty$, and its principal part is the function itself, while the analytic part is $0$.