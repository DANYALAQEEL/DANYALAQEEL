# Complex Analysis — Dennis G. Zill, 2nd Edition
## Chapter 6 · Series and Residues
### Section 6.7: Applications
### Complete Solutions

---

### Problems 1–8: Laplace Transforms

![Figure 6.20](../../extracted_figures/figure_6_20.png)
![Figure 6.21](../../extracted_figures/figure_6_21.png)
![Figure 6.22](../../extracted_figures/figure_6_22.png)

In these problems, we find the Laplace transform of the given function and determine a condition on $s$ to guarantee existence.

#### Problem 1
**Function:** $f(t) = e^{5t}$.

**Solution:**
Using the definition of the Laplace transform:
$$F(s) = \mathcal{L}\{e^{5t}\} = \int_{0}^{\infty} e^{-st} e^{5t} dt = \int_{0}^{\infty} e^{-(s-5)t} dt$$
This integral converges if and only if $\operatorname{Re}(s) > 5$:
$$F(s) = \left[ -\frac{e^{-(s-5)t}}{s-5} \right]_{0}^{\infty} = \frac{1}{s-5}$$
So, $F(s) = \frac{1}{s-5}$ for $\operatorname{Re}(s) > 5$.

---

#### Problem 2
**Function:** $f(t) = e^{(-2 + 3i)t}$.

**Solution:**
Using the definition of the Laplace transform:
$$F(s) = \int_{0}^{\infty} e^{-st} e^{(-2+3i)t} dt = \int_{0}^{\infty} e^{-(s + 2 - 3i)t} dt$$
This integral converges if and only if $\operatorname{Re}(s + 2 - 3i) > 0 \implies \operatorname{Re}(s) > -2$:
$$F(s) = \left[ -\frac{e^{-(s+2-3i)t}}{s+2-3i} \right]_{0}^{\infty} = \frac{1}{s + 2 - 3i}$$
So, $F(s) = \frac{1}{s+2-3i}$ for $\operatorname{Re}(s) > -2$.

---

#### Problem 3
**Function:** $f(t) = \sin 3t$.

**Solution:**
Using Euler's formula, $\sin 3t = \frac{e^{3it} - e^{-3it}}{2i}$:
$$\mathcal{L}\{\sin 3t\} = \frac{1}{2i} \left( \mathcal{L}\{e^{3it}\} - \mathcal{L}\{e^{-3it}\} \right)$$
Using the result of Problem 2 (convergent for $\operatorname{Re}(s) > 0$):
$$\mathcal{L}\{\sin 3t\} = \frac{1}{2i} \left( \frac{1}{s - 3i} - \frac{1}{s + 3i} \right) = \frac{1}{2i} \left( \frac{(s+3i) - (s-3i)}{s^2 + 9} \right) = \frac{6i}{2i(s^2+9)} = \frac{3}{s^2+9}$$
So, $F(s) = \frac{3}{s^2+9}$ for $\operatorname{Re}(s) > 0$.

---

#### Problem 4
**Function:** $f(t) = e^t \cos t$.

**Solution:**
We know $\cos t = \frac{e^{it} + e^{-it}}{2}$:
$$f(t) = e^t \left( \frac{e^{it} + e^{-it}}{2} \right) = \frac{e^{(1+i)t} + e^{(1-i)t}}{2}$$
Using linearity:
$$F(s) = \frac{1}{2} \left( \mathcal{L}\{e^{(1+i)t}\} + \mathcal{L}\{e^{(1-i)t}\} \right)$$
These transforms exist for $\operatorname{Re}(s) > 1$:
$$F(s) = \frac{1}{2} \left( \frac{1}{s - (1+i)} + \frac{1}{s - (1-i)} \right) = \frac{1}{2} \left( \frac{(s-1+i) + (s-1-i)}{(s-1)^2 + 1} \right) = \frac{s-1}{s^2 - 2s + 2}$$
So, $F(s) = \frac{s-1}{s^2-2s+2}$ for $\operatorname{Re}(s) > 1$.

---

#### Problem 5
**Problem:** Generalize the result in Problem 1 and state a condition on $s$ that is sufficient to guarantee the existence of $\mathcal{L}\{e^{kt}\}$ when $k$ is a real constant.

**Solution:**
By replacing $5$ with $k$ in Problem 1:
$$\mathcal{L}\{e^{kt}\} = \int_{0}^{\infty} e^{-(s-k)t} dt = \frac{1}{s-k}$$
This integral converges if and only if $s > k$.

---

#### Problem 6
**Problem:** Generalize the result in Problem 2 and state a condition on $s$ that is sufficient to guarantee the existence of $\mathcal{L}\{e^{kt}\}$ when $k$ is a complex constant.

**Solution:**
By replacing $-2+3i$ with $k$ in Problem 2:
$$\mathcal{L}\{e^{kt}\} = \int_{0}^{\infty} e^{-(s-k)t} dt = \frac{1}{s-k}$$
This integral converges if and only if $\operatorname{Re}(s - k) > 0 \implies \operatorname{Re}(s) > \operatorname{Re}(k)$.

---

#### Problem 7
**Problem:** Use Heaviside definitions of $\sinh kt$ and $\cosh kt$ along with linearity to find their Laplace transforms.

**Solution:**
By definition:
$$\sinh kt = \frac{e^{kt} - e^{-kt}}{2}, \quad \cosh kt = \frac{e^{kt} + e^{-kt}}{2}$$
1. **For $\sinh kt$:**
   $$\mathcal{L}\{\sinh kt\} = \frac{1}{2} \left( \mathcal{L}\{e^{kt}\} - \mathcal{L}\{e^{-kt}\} \right) = \frac{1}{2} \left( \frac{1}{s-k} - \frac{1}{s+k} \right) = \frac{1}{2} \left( \frac{(s+k) - (s-k)}{s^2 - k^2} \right) = \frac{k}{s^2 - k^2}$$
2. **For $\cosh kt$:**
   $$\mathcal{L}\{\cosh kt\} = \frac{1}{2} \left( \mathcal{L}\{e^{kt}\} + \mathcal{L}\{e^{-kt}\} \right) = \frac{1}{2} \left( \frac{1}{s-k} + \frac{1}{s+k} \right) = \frac{1}{2} \left( \frac{(s+k) + (s-k)}{s^2 - k^2} \right) = \frac{s}{s^2 - k^2}$$

---

#### Problem 8
**Problem:** State a condition on $s$ that is sufficient to guarantee the existence of the Laplace transforms in Problem 7.

**Solution:**
The transforms $\mathcal{L}\{e^{kt}\}$ and $\mathcal{L}\{e^{-kt}\}$ require $s > k$ and $s > -k$ respectively.
Thus, the sufficient condition for both to exist simultaneously is:
$$s > |k| \quad (\text{or } \operatorname{Re}(s) > |k|)$$

---

### Problems 9–18: Inverse Laplace Transforms using Residues

![Figure 6.23](../../extracted_figures/figure_6_23.png)

We compute the inverse Laplace transform $f(t) = \mathcal{L}^{-1}\{F(s)\} = \sum \operatorname{Res}(F(s) e^{st}, s_k)$, where $s_k$ are the poles of $F(s)$.

#### Problem 9

![Figure 6.24](../../extracted_figures/figure_6_24.png)
**Function:** $F(s) = \frac{1}{s^6}$.

**Solution:**
The function has a pole of order 6 at $s = 0$.
The residue of $F(s)e^{st}$ at $s=0$ is:
$$\operatorname{Res}\left( \frac{e^{st}}{s^6}, 0 \right) = \frac{1}{5!} \lim_{s \to 0} \frac{d^5}{ds^5} (e^{st}) = \frac{1}{120} \lim_{s \to 0} (t^5 e^{st}) = \frac{t^5}{120}$$
Thus:
$$f(t) = \frac{t^5}{120}$$

---

#### Problem 10
**Function:** $F(s) = \frac{1}{(s-5)^3}$.

**Solution:**
The function has a pole of order 3 at $s = 5$.
The residue of $F(s)e^{st}$ at $s=5$ is:
$$\operatorname{Res}\left( \frac{e^{st}}{(s-5)^3}, 5 \right) = \frac{1}{2!} \lim_{s \to 5} \frac{d^2}{ds^2} (e^{st}) = \frac{1}{2} \lim_{s \to 5} (t^2 e^{st}) = \frac{1}{2} t^2 e^{5t}$$
Thus:
$$f(t) = \frac{1}{2} t^2 e^{5t}$$

---

#### Problem 11
**Function:** $F(s) = \frac{1}{s^2 + 4}$.

**Solution:**
Poles are simple poles at $s = 2i$ and $s = -2i$.
1. **Residue at $s = 2i$:**
   $$\operatorname{Res}\left( \frac{e^{st}}{s^2+4}, 2i \right) = \frac{e^{st}}{2s} \Big|_{2i} = \frac{e^{2it}}{4i}$$
2. **Residue at $s = -2i$:**
   $$\operatorname{Res}\left( \frac{e^{st}}{s^2+4}, -2i \right) = \frac{e^{st}}{2s} \Big|_{-2i} = \frac{e^{-2it}}{-4i}$$
Summing the residues:
$$f(t) = \frac{e^{2it} - e^{-2it}}{4i} = \frac{1}{2} \left( \frac{e^{2it} - e^{-2it}}{2i} \right) = \frac{1}{2} \sin 2t$$
Thus:
$$f(t) = \frac{1}{2} \sin 2t$$

---

#### Problem 12
**Function:** $F(s) = \frac{s}{(s^2 + 1)^2}$.

**Solution:**
Poles are of order 2 at $s = i$ and $s = -i$.
Let $G(s) = s e^{st}$.
1. **Residue at $s = i$:**
   $$\operatorname{Res}\left( \frac{s e^{st}}{(s-i)^2(s+i)^2}, i \right) = \lim_{s \to i} \frac{d}{ds} \left[ \frac{s e^{st}}{(s+i)^2} \right]$$
   $$\frac{d}{ds} \left[ s e^{st} (s+i)^{-2} \right] = (e^{st} + s t e^{st})(s+i)^{-2} - 2s e^{st}(s+i)^{-3}$$
   Evaluating at $s = i$:
   $$= (e^{it} + i t e^{it})(2i)^{-2} - 2i e^{it}(2i)^{-3} = \frac{e^{it}(1+it)}{-4} - \frac{2i e^{it}}{-8i} = -\frac{e^{it}(1+it)}{4} + \frac{e^{it}}{4} = -\frac{i t e^{it}}{4}$$
2. **Residue at $s = -i$:**
   By conjugation:
   $$\operatorname{Res}\left( F(s)e^{st}, -i \right) = \frac{i t e^{-it}}{4}$$
Summing the residues:
$$f(t) = -\frac{i t e^{it}}{4} + \frac{i t e^{-it}}{4} = \frac{t}{2} \left( \frac{e^{it} - e^{-it}}{2i} \right) = \frac{t \sin t}{2}$$
Thus:
$$f(t) = \frac{t \sin t}{2}$$

---

#### Problem 13
**Function:** $F(s) = \frac{1}{s^2 - 3}$.

**Solution:**
Poles are simple poles at $s = \sqrt{3}$ and $s = -\sqrt{3}$.
1. **Residue at $s = \sqrt{3}$:**
   $$\operatorname{Res}\left( \frac{e^{st}}{s^2-3}, \sqrt{3} \right) = \frac{e^{\sqrt{3}t}}{2\sqrt{3}}$$
2. **Residue at $s = -\sqrt{3}$:**
   $$\operatorname{Res}\left( \frac{e^{st}}{s^2-3}, -\sqrt{3} \right) = \frac{e^{-\sqrt{3}t}}{-2\sqrt{3}}$$
Summing the residues:
$$f(t) = \frac{e^{\sqrt{3}t} - e^{-\sqrt{3}t}}{2\sqrt{3}} = \frac{1}{\sqrt{3}} \sinh(\sqrt{3}t)$$

---

#### Problem 14
**Function:** $F(s) = \frac{1}{(s - a)^2 + b^2}$.

**Solution:**
Poles are simple poles at $s = a + ib$ and $s = a - ib$.
1. **Residue at $s = a+ib$:**
   $$\operatorname{Res}\left( \frac{e^{st}}{(s-a)^2+b^2}, a+ib \right) = \frac{e^{(a+ib)t}}{2(s-a)} \Big|_{a+ib} = \frac{e^{(a+ib)t}}{2ib}$$
2. **Residue at $s = a-ib$:**
   $$\operatorname{Res}\left( \frac{e^{st}}{(s-a)^2+b^2}, a-ib \right) = \frac{e^{(a-ib)t}}{-2ib}$$
Summing the residues:
$$f(t) = e^{at} \left( \frac{e^{ibt} - e^{-ibt}}{2ib} \right) = \frac{e^{at} \sin bt}{b}$$

---

#### Problem 15
**Function:** $F(s) = \frac{e^{-as}}{s^2 - 5s + 6}$, $a > 0$.

**Solution:**
The exponential term $e^{-as}$ represents a time shift by $a$ units, corresponding to Heaviside step function $U(t-a)$.
Poles of the rational part are simple poles at $s = 2$ and $s = 3$.
Let $G(s) = \frac{1}{s^2-5s+6} = \frac{1}{s-3} - \frac{1}{s-2}$.
We find $g(t) = \mathcal{L}^{-1}\{G(s)\}$:
1. $\operatorname{Res}(G(s)e^{st}, 3) = e^{3t}$.
2. $\operatorname{Res}(G(s)e^{st}, 2) = -e^{2t}$.
So $g(t) = e^{3t} - e^{2t}$.
Using the second shifting theorem:
$$f(t) = \mathcal{L}^{-1}\{e^{-as} G(s)\} = g(t-a) U(t-a) = \left( e^{3(t-a)} - e^{2(t-a)} \right) U(t-a)$$

## Section 6.7 Fourier Transforms Reference Figures

This section contains figures illustrating Fourier transforms and their integration contours.

### Graph of $f(x) = e^{-|x|}$ (Figure 6.25)

The graph of $f(x) = e^{-|x|}$ is shown in Figure 6.25:
![Figure 6.25](../../extracted_figures/figure_6_25.png)

### Fourier Integral Contours (Figure 6.26 and 6.27)

When finding the inverse Fourier transform, we close the contour in the upper half-plane for $x > 0$ (Figure 6.26) and in the lower half-plane for $x < 0$ (Figure 6.27):
![Figure 6.26](../../extracted_figures/figure_6_26.png)
![Figure 6.27](../../extracted_figures/figure_6_27.png)
