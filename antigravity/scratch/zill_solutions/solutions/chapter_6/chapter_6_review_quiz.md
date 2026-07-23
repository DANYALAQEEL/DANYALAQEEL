# Complex Analysis — Dennis G. Zill, 2nd Edition
## Chapter 6 Review Quiz
### Complete Solutions

---

### Problems 1–20: True/False Questions

#### Problem 1
**Statement:** For the sequence $\{z_n\}$, where $z_n = i^n = x_n + i y_n$, $\operatorname{Re}(z_n) = x_n = \cos(n\pi/2)$ and $\operatorname{Im}(z_n) = y_n = \sin(n\pi/2)$.

**Answer:** **True**

**Justification:**
Using Euler's formula:
$$z_n = i^n = \left( e^{i\pi/2} \right)^n = e^{in\pi/2} = \cos\left(\frac{n\pi}{2}\right) + i \sin\left(\frac{n\pi}{2}\right)$$
Comparing real and imaginary parts:
$$\operatorname{Re}(z_n) = x_n = \cos(n\pi/2), \quad \operatorname{Im}(z_n) = y_n = \sin(n\pi/2)$$
Thus, the statement is true.

---

#### Problem 2
**Statement:** The sequence $\{i^n\}$ converges.

**Answer:** **False**

**Justification:**
The terms of the sequence are $\{i, -1, -i, 1, i, -1, -i, 1, \dots\}$. The sequence oscillates among four values and does not approach a single limit. Hence, it diverges.

---

#### Problem 3
**Statement:** $\lim_{n \to \infty} \left( \frac{1+i}{\sqrt{\pi}} \right)^n = 0$.

**Answer:** **True**

**Justification:**
Let $w = \frac{1+i}{\sqrt{\pi}}$. The modulus of $w$ is:
$$|w| = \frac{|1+i|}{\sqrt{\pi}} = \frac{\sqrt{2}}{\sqrt{\pi}} = \sqrt{\frac{2}{\pi}}$$
Since $\pi \approx 3.14159 > 2$, we have $\frac{2}{\pi} < 1 \implies |w| < 1$.
A basic theorem of complex sequences states that if $|w| < 1$, then $\lim_{n \to \infty} w^n = 0$. Thus, the statement is true.

---

#### Problem 4
**Statement:** $\lim_{n \to \infty} z_n = 0$ if and only if $\lim_{n \to \infty} |z_n| = 0$.

**Answer:** **True**

**Justification:**
This is a standard property of limits.
- If $z_n \to 0$, then for any $\epsilon > 0$, there exists $N$ such that $|z_n - 0| < \epsilon$ for all $n > N$, which is equivalent to $||z_n| - 0| < \epsilon$, so $|z_n| \to 0$.
- Conversely, if $|z_n| \to 0$, then $|z_n - 0| = |z_n| \to 0$, so $z_n \to 0$.

---

#### Problem 5
**Statement:** The power series $\sum_{k=1}^{\infty} \frac{z^k}{k^2}$ converges absolutely at every point on its circle of convergence.

**Answer:** **True**

**Justification:**
Using the ratio test, the radius of convergence is $R = 1$. The circle of convergence is $|z| = 1$.
At any point $z$ on the circle of convergence, $|z| = 1$. The absolute value of the terms of the series is:
$$\left| \frac{z^k}{k^2} \right| = \frac{|z|^k}{k^2} = \frac{1}{k^2}$$
Since the series $\sum_{k=1}^{\infty} \frac{1}{k^2}$ is a convergent $p$-series ($p=2 > 1$), the complex series converges absolutely at every point on the circle of convergence.

---

#### Problem 6
**Statement:** There exists a power series centered at $z_0 = 1+i$ that converges at $z = 25-4i$ and diverges at $z = 15+21i$.

**Answer:** **False**

**Justification:**
If a power series centered at $z_0$ converges at a point $z_c$, then it must converge absolutely for all $z$ satisfying $|z - z_0| < |z_c - z_0|$.
Let us compute the distances from the center $z_0 = 1+i$:
1. Distance to the convergence point $z_c = 25 - 4i$:
   $$R_c = |z_c - z_0| = |(25-4i) - (1+i)| = |24 - 5i| = \sqrt{24^2 + (-5)^2} = \sqrt{601} \approx 24.52$$
2. Distance to the divergence point $z_d = 15 + 21i$:
   $$R_d = |z_d - z_0| = |(15+21i) - (1+i)| = |14 + 20i| = \sqrt{14^2 + 20^2} = \sqrt{596} \approx 24.41$$
Since $R_d < R_c$, the point of divergence $z_d$ lies closer to the center than the point of convergence $z_c$. This is impossible, because if the series converges at $z_c$, it must converge at all points closer to the center than $z_c$, including $z_d$. Thus, no such power series exists.

---

#### Problem 7
**Statement:** A function $f$ is analytic at a point $z_0$ if $f$ can be expanded in a convergent power series centered at $z_0$.

**Answer:** **True**

**Justification:**
This is the definition of analyticity (complex differentiability in a neighborhood of a point). A function is analytic at $z_0$ if and only if it can be represented by a Taylor series with a positive radius of convergence centered at $z_0$.

---

#### Problem 8
**Statement:** Suppose a function $f$ has a Taylor series representation with circle of convergence $|z - z_0| = R$, $R > 0$. Then $f$ is analytic everywhere on the circle of convergence.

**Answer:** **False**

**Justification:**
The function $f(z) = \frac{1}{1-z}$ is analytic everywhere except at the singularity $z = 1$. Its Maclaurin series (centered at $z_0 = 0$) has circle of convergence $|z| = 1$. The singularity $z = 1$ lies on the circle of convergence, and $f$ is not analytic at $z = 1$.

---

#### Problem 9
**Statement:** Suppose a function $f$ has a Taylor series representation centered at $z_0$. Then $f$ is analytic everywhere inside the circle of convergence $|z - z_0| = R$, $R > 0$, and is not analytic everywhere outside |z - z0| = R.

**Answer:** **False**

**Justification:**
Consider $f(z) = \frac{1}{z - 2}$ centered at $z_0 = 0$. Its Taylor series has radius of convergence $R = 2$.
Inside $|z| < 2$, the series converges and $f$ is analytic. Outside $|z| = 2$, the series diverges. However, the function $f(z) = \frac{1}{z-2}$ is analytic everywhere in the complex plane except at the single point $z = 2$. Thus, it is analytic at points outside the circle of convergence (such as $z = 3$).

---

#### Problem 10
**Statement:** If the function $f$ is entire, then the radius of convergence of a Taylor series expansion of $f$ centered at $z_0 = 1 - i$ is necessarily $R = \infty$.

**Answer:** **True**

**Justification:**
By definition, an entire function is analytic everywhere in the complex plane. The radius of convergence of a Taylor series is the distance from the center to the nearest singularity. Since an entire function has no singularities, the radius of convergence is infinite.

---

#### Problem 11
**Statement:** Both power series $\frac{1}{1+z} = 1 - z + z^2 - \dots$ and $\frac{1}{1+z} = \frac{1}{2} - \frac{z-1}{2^2} + \frac{(z-1)^2}{2^3} - \dots$ converge at $z = 0.86 - 0.52i$.

**Answer:** **False**

**Justification:**
- The first series is centered at $0$ and converges for $|z| < 1$.
- The second series is centered at $1$ and converges for $|z-1| < 2$.
Let $z_1 = 0.86 - 0.52i$. Its modulus is:
$$|z_1| = \sqrt{0.86^2 + (-0.52)^2} = \sqrt{0.7396 + 0.2704} = \sqrt{1.01} \approx 1.005 > 1$$
Since $|z_1| > 1$, the first series diverges at $z_1$. Thus, both series cannot converge at this point.

---

#### Problem 12
**Statement:** If the power series $\sum_{k=0}^{\infty} a_k z^k$ has radius of convergence $R$, then the power series $\sum_{k=0}^{\infty} a_k z^{2k}$ has radius of convergence $\sqrt{R}$.

**Answer:** **True**

**Justification:**
The first series converges for $|z| < R$. Let $w = z^2$. The second series is $\sum a_k w^k$, which converges for $|w| < R$.
Substituting $w = z^2$:
$$|z^2| < R \implies |z|^2 < R \implies |z| < \sqrt{R}$$
Thus, the radius of convergence of the second series is $\sqrt{R}$.

---

#### Problem 13
**Statement:** The power series $\sum_{k=0}^{\infty} a_k z^k$ and $\sum_{k=1}^{\infty} k a_k z^{k-1}$ have the same radius of convergence $R$.

**Answer:** **True**

**Justification:**
The second series is the term-by-term derivative of the first. Differentiation of a power series does not alter its radius of convergence.

---

#### Problem 14
**Statement:** The principal branch $f_1(z)$ of the complex logarithm does not possess a Maclaurin expansion.

**Answer:** **True**

**Justification:**
The principal branch of the logarithm is not defined at $z=0$ (since $\ln 0$ is undefined) and is not analytic at $z=0$. Therefore, it cannot be expanded in a Maclaurin series (which requires analyticity at the center $z=0$).

---

#### Problem 15
**Statement:** If $f$ is analytic throughout some deleted neighborhood of $z_0$ and $z_0$ is a pole of order $n$, then $\dots$ the limit is non-zero.

**Answer:** **True**

**Justification:**
By definition, if $z_0$ is a pole of order $n$, then $f(z)$ can be written as:
$$f(z) = \frac{\phi(z)}{(z - z_0)^n}$$
where $\phi(z)$ is analytic at $z_0$ and $\phi(z_0) \neq 0$.
Thus:
$$\lim_{z \to z_0} (z - z_0)^n f(z) = \lim_{z \to z_0} \phi(z) = \phi(z_0) \neq 0$$

---

#### Problem 16
**Statement:** A singularity of a rational function is either removable or is a pole.

**Answer:** **True**

**Justification:**
A rational function $f(z) = p(z)/q(z)$ has singularities only at the zeros of the polynomial $q(z)$. Since the zeros of a polynomial are of finite order, the Laurent series centered at any singularity has a finite number of negative power terms. Thus, rational functions cannot have essential singularities, and their singularities must be either removable or poles.

---

#### Problem 17
**Statement:** The function $f(z) = \frac{1}{z^2 + 2iaz - 1}$, $a > 1$, has two simple poles within the unit circle $|z| = 1$.

**Answer:** **False** (Textbook Error Note: Zill's answer key lists this as True, but it is mathematically False).

**Justification:**
We find the poles by solving the denominator quadratic:
$$z^2 + 2iaz - 1 = 0 \implies z = \frac{-2ia \pm \sqrt{-4a^2 + 4}}{2} = -ia \pm i\sqrt{a^2 - 1} = i\left( -a \pm \sqrt{a^2 - 1} \right)$$
Let the poles be $z_1 = i\left( -a + \sqrt{a^2 - 1} \right)$ and $z_2 = i\left( -a - \sqrt{a^2 - 1} \right)$.
1. Modulus of $z_2$:
   $$|z_2| = a + \sqrt{a^2 - 1}$$
   Since $a > 1$, we have $|z_2| > 1$, so $z_2$ lies outside the unit circle.
2. Modulus of $z_1$:
   $$|z_1| = a - \sqrt{a^2 - 1}$$
   Since $(a - \sqrt{a^2-1})(a + \sqrt{a^2-1}) = a^2 - (a^2-1) = 1$, and $a + \sqrt{a^2-1} > 1$, it follows that $|z_1| = a - \sqrt{a^2-1} < 1$. So $z_1$ lies inside the unit circle.

Thus, there is only **one** simple pole ($z_1$) inside the unit circle $|z|=1$, not two.

---

#### Problem 18
**Statement:** $z = 0$ is a simple pole of $f(z) = -\frac{1}{z} + \cot z$.

**Answer:** **False**

**Justification:**
We expand $f(z)$ using the Laurent series for $\dots$:
$$\cot z = \frac{1}{z} - \frac{z}{3} - \frac{z^3}{45} - \dots$$
So:
$$f(z) = -\frac{1}{z} + \left( \frac{1}{z} - \frac{z}{3} - \frac{z^3}{45} - \dots \right) = -\frac{z}{3} - \frac{z^3}{45} - \dots$$
As $z \to 0$, $f(z) \to 0$. The singularity at $z = 0$ is removable, not a simple pole.

---

#### Problem 19
**Statement:** If $z_0$ is a simple pole of a function $f$, then it is possible that $\operatorname{Res}(f(z), z_0) = 0$.

**Answer:** **False**

**Justification:**
If $z_0$ is a simple pole of $f$, then the Laurent expansion is:
$$f(z) = \frac{a_{-1}}{z-z_0} + a_0 + a_1(z-z_0) + \dots \quad \text{with} \quad a_{-1} \neq 0$$
Since $\operatorname{Res}(f(z), z_0) = a_{-1}$, it must be non-zero by definition.

---

#### Problem 20
**Statement:** The principal part of the Laurent series of $f(z) = \frac{1}{1 - \cos z}$ valid for $0 < |z| < 2\pi$ contains precisely two nonzero terms.

**Answer:** **False**

**Justification:**
We find the Laurent expansion of $f(z)$:
$$1 - \cos z = \frac{z^2}{2} - \frac{z^4}{24} + \dots = \frac{z^2}{2} \left( 1 - \frac{z^2}{12} + \dots \right)$$
$$f(z) = \frac{2}{z^2} \left( 1 - \frac{z^2}{12} + \dots \right)^{-1} = \frac{2}{z^2} \left( 1 + \frac{z^2}{12} + \dots \right) = \frac{2}{z^2} + \frac{1}{6} + \dots$$
The principal part contains only one term: $\frac{2}{z^2}$. Thus, the statement is false.

---

### Problems 21–40: Fill in the Blanks

#### Problem 21
The sequence $\left\{ \frac{2in}{n+i} - \frac{(9-12i)n+2}{3n+1+7i} \right\}$ converges to **$-3 + 6i$**.

**Derivation:**
As $n \to \infty$:
1. The first term:
   $$\lim_{n \to \infty} \frac{2in}{n+i} = \lim_{n \to \infty} \frac{2i}{1 + i/n} = 2i$$
2. The second term:
   $$\lim_{n \to \infty} \frac{(9-12i)n+2}{3n+1+7i} = \lim_{n \to \infty} \frac{9-12i + 2/n}{3 + (1+7i)/n} = \frac{9-12i}{3} = 3 - 4i$$
Combining the limits:
$$\text{Limit} = 2i - (3 - 4i) = -3 + 6i$$

---

#### Problem 22
The series $i + 2i + 3i + 4i + \dots$ diverges because **the general term $a_n = ni$ does not approach 0 as $n \to \infty$** (Divergence Test).

---

#### Problem 23
$5 - i - \frac{1}{5} + \frac{i}{25} + \frac{1}{125} - \dots$ = **$\frac{125}{26} - \frac{25}{26}i$**.

**Derivation:**
We split the series into real and imaginary parts:
- **Real part:** $5 - \frac{1}{5} + \frac{1}{125} - \dots$, which is a geometric series with $a = 5$ and $r = -1/25$:
  $$\text{Real Sum} = \frac{5}{1 - (-1/25)} = \frac{5}{26/25} = \frac{125}{26}$$
- **Imaginary part:** $i\left( -1 + \frac{1}{25} - \dots \right)$, which is a geometric series with $a = -1$ and $r = -1/25$:
  $$\text{Imag Sum} = i \frac{-1}{1 - (-1/25)} = i \frac{-1}{26/25} = -\frac{25}{26}i$$
Combining them:
$$\text{Sum} = \frac{125}{26} - \frac{25}{26}i$$

---

#### Problem 24
The equality $\sum_{k=0}^{\infty} \left( \frac{z-1}{z+1} \right)^k = \frac{1}{2}(z+1)$ comes from **the sum formula for a geometric series $S = \frac{a}{1-r}$** and is valid in the region **$\operatorname{Re}(z) > 0$**.

**Derivation:**
The geometric series has $a = 1$ and $r = \frac{z-1}{z+1}$:
$$S = \frac{1}{1 - \frac{z-1}{z+1}} = \frac{z+1}{(z+1) - (z-1)} = \frac{z+1}{2}$$
This is valid for $|r| < 1$:
$$\left| \frac{z-1}{z+1} \right| < 1 \implies |z-1| < |z+1|$$
The set of points closer to $1$ than to $-1$ is the right half-plane $\operatorname{Re}(z) > 0$.

---

#### Problem 25
The power series $\sum_{k=0}^{\infty} (5+12i)^k (z - 2 - i)^k$ converges absolutely within the circle **$|z - 2 - i| = \frac{1}{13}$**.

**Derivation:**
The center is $z_0 = 2+i$. The radius of convergence is:
$$R = \frac{1}{\lim_{k \to \infty} |a_k|^{1/k}} = \frac{1}{|5+12i|} = \frac{1}{\sqrt{5^2 + 12^2}} = \frac{1}{13}$$
Thus, it converges absolutely inside $|z - 2 - i| < 1/13$.

---

#### Problem 26
The power series $\sum_{k=0}^{\infty} \frac{4^k}{2k+5} (z - 2 + 3i)^{2k}$ diverges for $|z - 2 + 3i| >$ **$1/2$**.

**Derivation:**
Let $w = (z - 2 + 3i)^2$. The series is $\sum_{k=0}^{\infty} \frac{4^k}{2k+5} w^k$.
The radius of convergence in terms of $w$ is:
$$R_w = \lim_{k \to \infty} \frac{a_k}{a_{k+1}} = \lim_{k \to \infty} \frac{4^k(2k+7)}{4^{k+1}(2k+5)} = \frac{1}{4}$$
So the series converges for $|w| < 1/4$ and diverges for $|w| > 1/4$:
$$|z - 2 + 3i|^2 > 1/4 \implies |z - 2 + 3i| > 1/2$$

---

#### Problem 27
If the power series $\sum_{k=0}^{\infty} a_k z^k$ has radius of convergence $R > 0$, then $\sum_{k=0}^{\infty} \frac{z^k}{a_k}$ has radius of convergence **$1/R$**.

---

#### Problem 28
Without finding the actual expansion, the Taylor series of $f(z) = \csc z$ centered at $z_0 = 3+2i$ has radius of convergence $R =$ **$2$** (using the book's integer approximation $\pi \approx 3$).

**Derivation:**
Singularities of $\csc z$ are at $z = n\pi$ ($n \in \mathbb{Z}$). The nearest singularity to $z_0 = 3+2i$ is at $z = \pi$.
Using the approximation $\pi \approx 3$, the distance is:
$$R = |\pi - (3+2i)| \approx |3 - (3+2i)| = |-2i| = 2$$

---

#### Problem 29
The Taylor series of $f(z) = \frac{z+1}{6+z}$ centered at $z_0 = -1$ is **$\frac{z+1}{5} - \frac{(z+1)^2}{25} + \frac{(z+1)^3}{125} - \dots$** and its radius of convergence is $R =$ **$5$**.

**Derivation:**
Let $w = z+1 \implies z = w-1$:
$$f(z) = \frac{w}{5+w} = \frac{w}{5} \frac{1}{1 + w/5} = \frac{w}{5} \sum_{n=0}^{\infty} (-1)^n \left( \frac{w}{5} \right)^n = \sum_{n=1}^{\infty} \frac{(-1)^{n-1} w^n}{5^n}$$
Substituting $w = z+1$:
$$f(z) = \frac{z+1}{5} - \frac{(z+1)^2}{25} + \frac{(z+1)^3}{125} - \dots$$
The singularity is at $z = -6$. The distance from $z_0 = -1$ to $-6$ is $|-1 - (-6)| = 5$.

---

#### Problem 30
A power series centered at $-5i$ for $f(z) = e^z$ is given by $e^z =$ **$\sum_{k=0}^{\infty} \frac{e^{-5i}}{k!} (z+5i)^k$**.

---

#### Problem 31
The Laurent series for $f(z) = \frac{(z+1)^3 - 2(z+1)^2 + 4(z+1) + 7}{(z+1)^2}$ valid for $0 < |z+1| < \infty$ is **$(z+1) - 2 + \frac{4}{z+1} + \frac{7}{(z+1)^2}$**.

---

#### Problem 32
The analytic function $f(z) = \frac{1}{6} z^9 - z^3 + \sin z^3$ has a zero of order **$15$** at $z=0$.

**Derivation:**
$$\sin(z^3) = z^3 - \frac{z^9}{6} + \frac{z^{15}}{120} - \dots$$
$$f(z) = \frac{1}{6} z^9 - z^3 + \left( z^3 - \frac{z^9}{6} + \frac{z^{15}}{120} - \dots \right) = \frac{z^{15}}{120} - \dots$$
The first non-zero term is of degree 15.

---

#### Problem 33
The zeros of the function $f(z) = \sin\left(\frac{\pi}{z-1}\right)$ are **$1 + \frac{1}{n}$ ($n = \pm 1, \pm 2, \dots$)** and are of order **$1$**.

---

#### Problem 34
If $f(z)$ has a zero of order 5 at $z_0$, then the derivative of lowest order that is not zero is $f^{(5)}(z_0)$.

---

#### Problem 35
The function $f(z) = (z - \sin z)/z^3$ has a removable singularity at $z = 0$. The value $f(0)$ is defined to be **$1/6$**.

---

#### Problem 36
If $f(z) = z^3 e^{-1/z^2}$, then $\operatorname{Res}(f(z), 0) = $ **$1/2$**.

---

#### Problem 37
Suppose $z = \pi$ is a simple pole of $f(z) = \cot z$.
- $\operatorname{Res}(f(z), \pi) = $ **$1$**.
- The principal part of the Laurent series is **$\frac{1}{z-\pi}$**.
- The Laurent series is valid for $0 < |z-\pi| < $ **$\pi$**.

---

#### Problem 38
On $|z|=1$, the contour integral $\oint_C \frac{\cos z}{z^2 - (2+\pi)z + 2\pi} dz$ equals **$0$**.
On $|z|=3$, it equals **$\frac{2\pi i \cos 2}{2-\pi}$**.
On $|z|=4$, it equals **$\frac{2\pi i (\cos 2 + 1)}{2-\pi}$**.

**Derivation:**
The denominator factors as $(z-2)(z-\pi)$. Poles are at $z = 2$ and $z = \pi$.
- $\operatorname{Res}(f, 2) = \frac{\cos 2}{2-\pi}$.
- $\operatorname{Res}(f, \pi) = \frac{\cos \pi}{\pi-2} = \frac{1}{2-\pi}$.
1. $|z|=1$ encloses no poles: Integral $= 0$.
2. $|z|=3$ encloses $z=2$: Integral $= 2\pi i \operatorname{Res}(f, 2) = \frac{2\pi i \cos 2}{2-\pi}$.
3. $|z|=4$ encloses both poles: Integral $= 2\pi i \left[ \operatorname{Res}(f, 2) + \operatorname{Res}(f, \pi) \right] = \frac{2\pi i (\cos 2 + 1)}{2-\pi}$.

---

#### Problem 39
On $|z|=1$:
- (a) $\oint_{C} \frac{z^2 + 2iz + 1 - i}{e^{2z} - 1} dz = $ **$\pi + \pi i$**.
- (b) $\oint_C \frac{\sin z}{z^n} dz = $ **$0$ for odd $n$ (and $n=0$); $\frac{2\pi i (-1)^{(n-2)/2}}{(n-1)!}$ for even $n \geq 2$**.

---

#### Problem 40
$\int_{0}^{2\pi} \frac{1}{4\cos^2\theta + \sin^2\theta} d\theta =$ **$\pi$**.
*(This is equivalent to Problem 4 of Section 6.6).*