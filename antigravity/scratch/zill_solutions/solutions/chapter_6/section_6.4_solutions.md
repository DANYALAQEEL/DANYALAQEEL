# Complex Analysis — Dennis G. Zill, 2nd Edition
## Chapter 6 · Series and Residues
### Section 6.4: Zeros and Poles
### Complete Solutions

---

### Problems 1–4: Removable Singularities

In these problems, we show that $z=0$ is a removable singularity of the given function by showing that the limit as $z \to 0$ exists and is finite. We then supply a definition of $f(0)$ so that $f$ is analytic at $z=0$.

#### Problem 1
**Function:** $f(z) = \frac{e^{2z} - 1}{z}$.

**Solution:**
We expand $e^{2z}$ in a Maclaurin series:
$$e^{2z} = 1 + 2z + \frac{(2z)^2}{2!} + \frac{(2z)^3}{3!} + \dots = 1 + 2z + 2z^2 + \frac{4z^3}{3} + \dots$$
Subtracting 1:
$$e^{2z} - 1 = 2z + 2z^2 + \frac{4z^3}{3} + \dots$$
Dividing by $z$ for $z \neq 0$:
$$f(z) = 2 + 2z + \frac{4z^2}{3} + \dots$$
Taking the limit as $z \to 0$:
$$\lim_{z \to 0} f(z) = 2$$
Since the limit exists and is finite, $z=0$ is a removable singularity. To make $f$ analytic at $z=0$, we define:
$$f(0) = 2$$

---

#### Problem 2
**Function:** $f(z) = \frac{z^3 - 4z^2}{1 - e^{z^2/2}}$.

**Solution:**
We expand the denominator $1 - e^{z^2/2}$ in a Maclaurin series:
$$e^{z^2/2} = 1 + \left(\frac{z^2}{2}\right) + \frac{1}{2!} \left(\frac{z^2}{2}\right)^2 + \dots = 1 + \frac{z^2}{2} + \frac{z^4}{8} + \dots$$
So:
$$1 - e^{z^2/2} = -\frac{z^2}{2} - \frac{z^4}{8} - \dots = -z^2 \left( \frac{1}{2} + \frac{z^2}{8} + \dots \right)$$
For $z \neq 0$, the function can be written as:
$$f(z) = \frac{z^2(z - 4)}{-z^2 \left( \frac{1}{2} + \frac{z^2}{8} + \dots \right)} = \frac{z - 4}{-\left( \frac{1}{2} + \frac{z^2}{8} + \dots \right)}$$
Taking the limit as $z \to 0$:
$$\lim_{z \to 0} f(z) = \frac{0 - 4}{-1/2} = 8$$
Since the limit exists and is finite, $z=0$ is a removable singularity. To make $f$ analytic at $z=0$, we define:
$$f(0) = 8$$

---

#### Problem 3
**Function:** $f(z) = \frac{\sin 4z - 4z}{z^2}$.

**Solution:**
We expand $\sin 4z$ in a Maclaurin series:
$$\sin 4z = 4z - \frac{(4z)^3}{3!} + \frac{(4z)^5}{5!} - \dots = 4z - \frac{32z^3}{3} + \frac{128z^5}{15} - \dots$$
Subtracting $4z$:
$$\sin 4z - 4z = -\frac{32z^3}{3} + \frac{128z^5}{15} - \dots$$
Dividing by $z^2$ for $z \neq 0$:
$$f(z) = -\frac{32z}{3} + \frac{128z^3}{15} - \dots$$
Taking the limit as $z \to 0$:
$$\lim_{z \to 0} f(z) = 0$$
Since the limit exists and is finite, $z=0$ is a removable singularity. To make $f$ analytic at $z=0$, we define:
$$f(0) = 0$$

---

#### Problem 4
**Function:** $f(z) = \frac{1 - \frac{1}{2} z^{10} - \cos z^5}{\sin z^2}$.

**Solution:**
We expand $\cos z^5$ and $\sin z^2$ in Maclaurin series:
$$\cos z^5 = 1 - \frac{(z^5)^2}{2!} + \dots = 1 - \frac{z^{10}}{2} + \frac{z^{20}}{24} - \dots$$
$$\sin z^2 = z^2 - \frac{(z^2)^3}{3!} + \dots = z^2 - \frac{z^6}{6} + \dots$$
So the numerator is:
$$1 - \frac{1}{2} z^{10} - \left( 1 - \frac{z^{10}}{2} + \frac{z^{20}}{24} - \dots \right) = -\frac{z^{20}}{24} + \dots$$
For $z \neq 0$:
$$f(z) = \frac{-\frac{z^{20}}{24} + \dots}{z^2 - \frac{z^6}{6} + \dots} = \frac{z^{20} \left( -\frac{1}{24} + \dots \right)}{z^2 \left( 1 - \frac{z^4}{6} + \dots \right)} = z^{18} \frac{-\frac{1}{24} + \dots}{1 - \frac{z^4}{6} + \dots}$$
Taking the limit as $z \to 0$:
$$\lim_{z \to 0} f(z) = 0 \cdot \left(-\frac{1}{24}\right) = 0$$
Since the limit exists and is finite, $z=0$ is a removable singularity. To make $f$ analytic at $z=0$, we define:
$$f(0) = 0$$

---

### Problems 5–10: Zeros and Their Orders

We determine the zeros and their order for the given function. Recall that $z_0$ is a zero of order $n$ of an analytic function $f$ if $f(z_0) = f'(z_0) = \dots = f^{(n-1)}(z_0) = 0$ and $f^{(n)}(z_0) \neq 0$.

#### Problem 5
**Function:** $f(z) = (z + 2 - i)^2$.

**Solution:**
The function can be factored as $f(z) = (z - z_0)^2$ where $z_0 = -2 + i$.
1. $f(-2+i) = 0$.
2. $f'(z) = 2(z + 2 - i) \implies f'(-2+i) = 0$.
3. $f''(z) = 2 \implies f''(-2+i) = 2 \neq 0$.
Thus, $z = -2 + i$ is a zero of order 2.

---

#### Problem 6
**Function:** $f(z) = z^4 - 16$.

**Solution:**
We solve $f(z) = z^4 - 16 = 0$:
$$z^4 = 16 \implies z = 2 e^{ik\pi/2} \quad (k=0,1,2,3)$$
So the zeros are $z = 2, -2, 2i, -2i$.
For any zero $z_0$:
$$f'(z) = 4z^3 \implies f'(z_0) = 4z_0^3 \neq 0 \quad (\text{since } z_0 \neq 0)$$
Since the first derivative is non-zero at each root, all four zeros $z = 2, -2, 2i, -2i$ are simple zeros (order 1).

---

#### Problem 7
**Function:** $f(z) = z^4 + z^2$.

**Solution:**
We factor $f(z)$:
$$f(z) = z^2(z^2 + 1) = z^2(z - i)(z + i)$$
1. For $z = 0$, the factor is $z^2$, so it is a zero of order 2.
2. For $z = i$, $f(i) = 0$ and $f'(z) = 4z^3 + 2z \implies f'(i) = -4i + 2i = -2i \neq 0$, so $z=i$ is a simple zero (order 1).
3. For $z = -i$, $f(-i) = 0$ and $f'(-i) = 4i - 2i = 2i \neq 0$, so $z=-i$ is a simple zero (order 1).

Summary: $z=0$ is a zero of order 2; $z=i$ and $z=-i$ are simple zeros (order 1).

---

#### Problem 8
**Function:** $f(z) = \sin^2 z$.

**Solution:**
We solve $f(z) = (\sin z)^2 = 0 \implies \sin z = 0 \implies z = n\pi$ for $n \in \mathbb{Z}$.
Let $g(z) = \sin z$. At $z_0 = n\pi$:
$$g(n\pi) = 0, \quad g'(n\pi) = \cos(n\pi) = (-1)^n \neq 0$$
So $g(z)$ has a simple zero (order 1) at each $z_0 = n\pi$.
Since $f(z) = [g(z)]^2$, the order of the zero is multiplied by 2.
Thus, $z = n\pi$ ($n \in \mathbb{Z}$) are zeros of order 2.

---

#### Problem 9
**Function:** $f(z) = e^{2z} - e^z$.

**Solution:**
We solve $f(z) = e^z(e^z - 1) = 0$. Since $e^z \neq 0$, we must have:
$$e^z - 1 = 0 \implies e^z = 1 \implies z = 2n\pi i \quad (n \in \mathbb{Z})$$
To find the order, we check the derivative:
$$f'(z) = 2e^{2z} - e^z \implies f'(2n\pi i) = 2e^{4n\pi i} - e^{2n\pi i} = 2(1) - 1 = 1 \neq 0$$
Since the first derivative is non-zero, all zeros $z = 2n\pi i$ ($n \in \mathbb{Z}$) are simple zeros (order 1).

---

#### Problem 10
**Function:** $f(z) = z e^z - z$.

**Solution:**
We solve $f(z) = z(e^z - 1) = 0 \implies z = 0$ or $e^z = 1 \implies z = 2n\pi i$ ($n \in \mathbb{Z}$).
1. For $z = 0$:
   $$f(0) = 0$$
   $$f'(z) = e^z + z e^z - 1 \implies f'(0) = 1 + 0 - 1 = 0$$
   $$f''(z) = 2e^z + z e^z \implies f''(0) = 2 \neq 0$$
   So $z = 0$ is a zero of order 2.
2. For $z = 2n\pi i$ where $n \neq 0$:
   $$f(2n\pi i) = 0$$
   $$f'(2n\pi i) = e^{2n\pi i} + 2n\pi i e^{2n\pi i} - 1 = 1 + 2n\pi i(1) - 1 = 2n\pi i \neq 0$$
   So $z = 2n\pi i$ ($n \neq 0$) are simple zeros (order 1).

---

### Problems 11–14: Determining Zero Orders using Series

We determine the order of the zero at the indicated point using a Maclaurin or Taylor series.

#### Problem 11
**Function:** $f(z) = z(1 - \cos(z^2))$, at $z_0 = 0$.
*(Note: Zill's text has a printing rendering typo in some copies writing $1-\cos^2 z$ or $1-\cos2 z$; comparing with the book's answer key, it is $z(1-\cos(z^2))$).*

**Solution:**
Using the Maclaurin series for $\cos w$ with $w = z^2$:
$$\cos(z^2) = 1 - \frac{(z^2)^2}{2!} + \frac{(z^2)^4}{4!} - \dots = 1 - \frac{z^4}{2} + \frac{z^8}{24} - \dots$$
So:
$$1 - \cos(z^2) = \frac{z^4}{2} - \frac{z^8}{24} + \dots$$
Multiplying by $z$:
$$f(z) = z(1 - \cos(z^2)) = \frac{z^5}{2} - \frac{z^9}{24} + \dots$$
Since the lowest power of $z$ in the series expansion is $z^5$, $z=0$ is a zero of order 5.

---

#### Problem 12
**Function:** $f(z) = z - \sin z$, at $z_0 = 0$.

**Solution:**
Using the Maclaurin series for $\sin z$:
$$\sin z = z - \frac{z^3}{6} + \frac{z^5}{120} - \dots$$
So:
$$f(z) = z - \left( z - \frac{z^3}{6} + \frac{z^5}{120} - \dots \right) = \frac{z^3}{6} - \frac{z^5}{120} + \dots$$
Since the lowest power of $z$ in the series expansion is $z^3$, $z=0$ is a zero of order 3.

---

#### Problem 13
**Function:** $f(z) = 1 - e^{z-1}$, at $z_0 = 1$.

**Solution:**
Let $u = z - 1$. We expand about $u=0$:
$$f(z) = 1 - e^u = 1 - \left( 1 + u + \frac{u^2}{2!} + \dots \right) = -u - \frac{u^2}{2} - \dots = -(z-1) - \frac{(z-1)^2}{2} - \dots$$
Since the lowest power of $z-1$ in the series expansion is $(z-1)^1$, $z = 1$ is a zero of order 1 (simple zero).

---

#### Problem 14
**Function:** $f(z) = 1 - \pi i + z + e^z$, at $z_0 = \pi i$.

**Solution:**
We use Taylor series to expand $e^z$ about $z_0 = \pi i$. Let $w = z - \pi i \implies z = w + \pi i$:
$$e^z = e^{w + \pi i} = e^{\pi i} e^w = -e^w = -\left( 1 + w + \frac{w^2}{2!} + \frac{w^3}{3!} + \dots \right) = -1 - w - \frac{w^2}{2} - \dots$$
Now substitute this into $f(z)$:
$$f(z) = 1 - \pi i + (w + \pi i) + \left( -1 - w - \frac{w^2}{2} - \dots \right)$$
$$= (1 - \pi i + \pi i - 1) + (w - w) - \frac{w^2}{2} - \frac{w^3}{6} - \dots = -\frac{w^2}{2} - \frac{w^3}{6} - \dots$$
Substituting $w = z - \pi i$ back:
$$f(z) = -\frac{(z-\pi i)^2}{2} - \frac{(z-\pi i)^3}{6} - \dots$$
Since the lowest power of $z - \pi i$ in the series expansion is $(z-\pi i)^2$, $z = \pi i$ is a zero of order 2.

---

### Problems 15–26: Order of Poles

We determine the order of the poles for the given function. Recall that if $f(z) = \frac{g(z)}{h(z)}$ where $g$ and $h$ are analytic at $z_0$, $g(z_0) \neq 0$, and $h$ has a zero of order $n$ at $z_0$, then $f$ has a pole of order $n$ at $z_0$.

#### Problem 15
**Function:** $f(z) = \frac{3z - 1}{z^2 + 2z + 5}$.

**Solution:**
We find the zeros of the denominator:
$$z^2 + 2z + 5 = 0 \implies z = \frac{-2 \pm \sqrt{4 - 20}}{2} = -1 \pm 2i$$
So the poles are at $z = -1 + 2i$ and $z = -1 - 2i$.
1. The denominator $h(z) = z^2 + 2z + 5$ has simple zeros at $z = -1 \pm 2i$ because $h'(z) = 2z + 2 \implies h'(-1 \pm 2i) = \pm 4i \neq 0$.
2. The numerator $g(z) = 3z - 1$ is non-zero at these points: $g(-1 \pm 2i) = -4 \pm 6i \neq 0$.
Thus, $z = -1 + 2i$ and $z = -1 - 2i$ are simple poles (order 1).

---

#### Problem 16
**Function:** $f(z) = 5 - \frac{6}{z^2} = \frac{5z^2 - 6}{z^2}$.

**Solution:**
The denominator $h(z) = z^2$ has a zero of order 2 at $z = 0$.
The numerator $g(z) = 5z^2 - 6$ at $z=0$ is $g(0) = -6 \neq 0$.
Thus, $z=0$ is a pole of order 2.

---

#### Problem 17
**Function:** $f(z) = \frac{1 + 4i}{(z + 2)(z + i)^4}$.

**Solution:**
The singularities are at $z = -2$ and $z = -i$.
1. At $z = -2$, the factor $(z+2)^1$ in the denominator has a simple zero, and the numerator is a constant $1+4i \neq 0$. Thus, $z = -2$ is a simple pole (order 1).
2. At $z = -i$, the factor $(z+i)^4$ in the denominator has a zero of order 4, and the numerator is $1+4i \neq 0$. Thus, $z = -i$ is a pole of order 4.

---

#### Problem 18
**Function:** $f(z) = \frac{z - 1}{(z + 1)(z^3 + 1)}$.

**Solution:**
We factor the denominator:
$$h(z) = (z + 1)(z^3 + 1) = (z + 1)(z + 1)(z^2 - z + 1) = (z + 1)^2 (z^2 - z + 1)$$
The roots of $z^2 - z + 1 = 0$ are $z = \frac{1 \pm i\sqrt{3}}{2} = e^{\pm i\pi/3}$.
So:
$$h(z) = (z + 1)^2 (z - e^{i\pi/3})(z - e^{-i\pi/3})$$
1. At $z = -1$, the denominator has a zero of order 2, and the numerator $g(-1) = -2 \neq 0$. Thus, $z = -1$ is a pole of order 2.
2. At $z = e^{i\pi/3}$ and $z = e^{-i\pi/3}$, the denominator has simple zeros, and the numerator is non-zero. Thus, $z = e^{\pm i\pi/3}$ are simple poles (order 1).

---

#### Problem 19
**Function:** $f(z) = \tan z = \frac{\sin z}{\cos z}$.

**Solution:**
The poles occur at the zeros of the denominator $h(z) = \cos z$:
$$z = (2n + 1)\frac{\pi}{2} \quad (n \in \mathbb{Z})$$
At these points:
1. $h'(z) = -\sin z \implies h'((2n+1)\pi/2) = -\sin((2n+1)\pi/2) = \pm 1 \neq 0$. So the denominator has simple zeros.
2. The numerator is $g(z) = \sin z \implies g((2n+1)\pi/2) = \pm 1 \neq 0$.
Thus, $z = (2n+1)\frac{\pi}{2}$ ($n \in \mathbb{Z}$) are simple poles (order 1).

---

#### Problem 20
**Function:** $f(z) = \frac{\cot \pi z}{z^2} = \frac{\cos \pi z}{z^2 \sin \pi z}$.

**Solution:**
The poles occur at the zeros of the denominator $h(z) = z^2 \sin \pi z$:
$$z = 0 \quad \text{and} \quad z = n \quad (n \in \mathbb{Z}, n \neq 0)$$
1. At $z = 0$: $z^2$ has a zero of order 2, and $\sin \pi z$ has a simple zero (order 1). So the denominator $h(z)$ has a zero of order $2+1 = 3$. The numerator is $\cos(0) = 1 \neq 0$. Thus, $z=0$ is a pole of order 3.
2. At $z = n$ ($n \neq 0$): $z^2 \neq 0$, and $\sin \pi z$ has a simple zero. So $h(z)$ has a simple zero. The numerator is $\cos(n\pi) = (-1)^n \neq 0$. Thus, $z = n$ ($n \neq 0$, $n \in \mathbb{Z}$) are simple poles (order 1).

---

#### Problem 21
**Function:** $f(z) = \frac{1 - \cosh z}{z^4}$.

**Solution:**
We use the Maclaurin series for $\cosh z$:
$$\cosh z = 1 + \frac{z^2}{2!} + \frac{z^4}{4!} + \dots$$
So the numerator is:
$$1 - \cosh z = -\frac{z^2}{2} - \frac{z^4}{24} - \dots = -z^2 \left( \frac{1}{2} + \frac{z^2}{24} + \dots \right)$$
For $z \neq 0$:
$$f(z) = \frac{-z^2 \left( \frac{1}{2} + \frac{z^2}{24} + \dots \right)}{z^4} = \frac{-\left(\frac{1}{2} + \frac{z^2}{24} + \dots\right)}{z^2}$$
As $z \to 0$, the numerator approaches $-1/2 \neq 0$, and the denominator has a zero of order 2.
Thus, $z=0$ is a pole of order 2.

---

#### Problem 22
**Function:** $f(z) = \frac{e^z}{z^2}$.

**Solution:**
The denominator $h(z) = z^2$ has a zero of order 2 at $z=0$.
The numerator $g(z) = e^z$ is $g(0) = 1 \neq 0$.
Thus, $z=0$ is a pole of order 2.

---

#### Problem 23
**Function:** $f(z) = \frac{1}{1 + e^z}$.

**Solution:**
The poles occur at the zeros of the denominator $h(z) = 1 + e^z = 0$:
$$e^z = -1 \implies z = (2n + 1)\pi i \quad (n \in \mathbb{Z})$$
At these points:
1. $h'(z) = e^z \implies h'((2n+1)\pi i) = e^{(2n+1)\pi i} = -1 \neq 0$. So the denominator has simple zeros.
2. The numerator is $g(z) = 1 \neq 0$.
Thus, $z = (2n + 1)\pi i$ ($n \in \mathbb{Z}$) are simple poles (order 1).

---

#### Problem 24
**Function:** $f(z) = \frac{e^z - 1}{z^2}$.

**Solution:**
The denominator $h(z) = z^2$ has a zero of order 2 at $z=0$.
We expand the numerator in a Maclaurin series:
$$e^z - 1 = z + \frac{z^2}{2} + \dots = z\left( 1 + \frac{z}{2} + \dots \right)$$
So for $z \neq 0$:
$$f(z) = \frac{z\left( 1 + \frac{z}{2} + \dots \right)}{z^2} = \frac{1 + \frac{z}{2} + \dots}{z}$$
The numerator approaches $1 \neq 0$ as $z \to 0$, and the denominator has a simple zero.
Thus, $z=0$ is a simple pole (order 1).

---

#### Problem 25
**Function:** $f(z) = \frac{\sin z}{z^2 - z} = \frac{\sin z}{z(z-1)}$.

**Solution:**
The singularities are at $z = 0$ and $z = 1$.
1. At $z = 0$:
   $$\lim_{z \to 0} f(z) = \lim_{z \to 0} \left( \frac{\sin z}{z} \right) \frac{1}{z-1} = 1 \cdot (-1) = -1$$
   Since the limit exists and is finite, $z=0$ is a removable singularity.
2. At $z = 1$: the denominator has a simple zero, and the numerator is $\sin 1 \neq 0$. Thus, $z=1$ is a simple pole (order 1).

---

#### Problem 26
**Function:** $f(z) = \frac{\cos z - \cos 2z}{z^6}$.

**Solution:**
We use Maclaurin series for $\cos z$ and $\cos 2z$:
$$\cos z = 1 - \frac{z^2}{2} + \frac{z^4}{24} - \dots$$
$$\cos 2z = 1 - \frac{(2z)^2}{2} + \frac{(2z)^4}{24} - \dots = 1 - 2z^2 + \frac{2z^4}{3} - \dots$$
So the numerator is:
$$\cos z - \cos 2z = \left( 1 - \frac{z^2}{2} + \frac{z^4}{24} - \dots \right) - \left( 1 - 2z^2 + \frac{2z^4}{3} - \dots \right)$$
$$= \frac{3z^2}{2} - \frac{5z^4}{8} + \dots = z^2 \left( \frac{3}{2} - \frac{5z^2}{8} + \dots \right)$$
For $z \neq 0$:
$$f(z) = \frac{z^2 \left( \frac{3}{2} - \frac{5z^2}{8} + \dots \right)}{z^6} = \frac{\frac{3}{2} - \frac{5z^2}{8} + \dots}{z^4}$$
The numerator approaches $3/2 \neq 0$ as $z \to 0$, and the denominator has a zero of order 4.
Thus, $z=0$ is a pole of order 4.

---

### Problems 27–30: Essential and Non-Isolated Singularities

We determine the nature of the singularity at the indicated point.

#### Problem 27
**Function:** $f(z) = z^3 \sin\left(\frac{1}{z}\right)$, at $z_0 = 0$.

**Solution:**
We expand $\sin(1/z)$ in a Laurent series centered at $z=0$:
$$\sin\left(\frac{1}{z}\right) = \frac{1}{z} - \frac{1}{3! z^3} + \frac{1}{5! z^5} - \dots$$
Multiplying by $z^3$:
$$f(z) = z^3 \left( \frac{1}{z} - \frac{1}{6z^3} + \frac{1}{120z^5} - \dots \right) = z^2 - \frac{1}{6} + \frac{1}{120z^2} - \frac{1}{5040z^4} + \dots$$
The Laurent series contains an infinite number of terms with negative integer powers of $z$.
Thus, $z=0$ is an essential singularity.

---

#### Problem 28
**Function:** $f(z) = (z - 1) \cos\left(\frac{1}{z + 2}\right)$, at $z_0 = -2$.

**Solution:**
Let $w = z + 2 \implies z - 1 = w - 3$. We expand in powers of $w$:
$$\cos\left(\frac{1}{w}\right) = 1 - \frac{1}{2! w^2} + \frac{1}{4! w^4} - \dots$$
So:
$$f(z) = (w - 3) \left( 1 - \frac{1}{2w^2} + \frac{1}{24w^4} - \dots \right) = w - 3 - \frac{1}{2w} + \frac{3}{2w^2} + \frac{1}{24w^3} - \frac{1}{8w^4} + \dots$$
Substituting $w = z + 2$:
$$f(z) = (z+2) - 3 - \frac{1}{2(z+2)} + \frac{3}{2(z+2)^2} + \dots$$
The Laurent series contains an infinite number of terms with negative integer powers of $z+2$.
Thus, $z=-2$ is an essential singularity.

---

#### Problem 29
**Function:** $f(z) = e^{z + 1/z}$, at $z_0 = 0$.

**Solution:**
We write $f(z) = e^z \cdot e^{1/z}$.
Both $e^z$ and $e^{1/z}$ are analytic for $z \neq 0$:
$$e^z = 1 + z + \frac{z^2}{2} + \dots$$
$$e^{1/z} = 1 + \frac{1}{z} + \frac{1}{2z^2} + \dots$$
The product of these series will contain infinitely many terms of negative integer powers (for instance, the coefficient of $1/z^k$ will contain contributions from multiplying $z^m$ by $1/z^{m+k}$ for all $m \geq 0$).
Thus, $z=0$ is an essential singularity.

---

#### Problem 30
**Function:** $f(z) = \tan\left(\frac{1}{z}\right)$, at $z_0 = 0$.

**Solution:**
The poles of $\tan w$ occur at $w = (2n + 1)\pi/2$ for $n \in \mathbb{Z}$.
Substituting $w = 1/z$, the poles of $\tan(1/z)$ occur at:
$$\frac{1}{z} = (2n + 1)\frac{\pi}{2} \implies z_n = \frac{2}{(2n + 1)\pi} \quad (n \in \mathbb{Z})$$
As $n \to \infty$, the sequence of poles $z_n$ accumulates at $0$:
$$\lim_{n \to \infty} z_n = 0$$
Since every neighborhood of $z=0$ contains infinitely many other singularities (poles), the singularity at $z=0$ is not isolated.
Thus, $z=0$ is a non-isolated singularity.

---

### Focus on Concepts

---

#### Problem 31
**Problem:** In part (b) of Example 2 in Section 6.3, we showed that the Laurent series representation of $f(z) = \frac{1}{z(z - 1)}$ valid for $|z| > 1$ is
$$f(z) = \frac{1}{z^2} + \frac{1}{z^3} + \frac{1}{z^4} + \frac{1}{z^5} + \dots$$
The point $z = 0$ is an isolated singularity of $f$, and the Laurent series contains an infinite number of terms involving negative integer powers of $z$. Discuss: Does this mean that $z = 0$ is an essential singularity of $f$? Defend your answer with sound mathematics.

**Solution:**
No, this does not mean that $z=0$ is an essential singularity of $f(z)$.

The classification of isolated singularities (removable, pole, essential) of a function $f$ at a point $z_0$ is defined **strictly** by the Laurent series expansion valid in a **punctured open disk** centered at $z_0$:
$$0 < |z - z_0| < R$$
The series given in the problem:
$$f(z) = \frac{1}{z^2} + \frac{1}{z^3} + \dots$$
is valid in the region $|z| > 1$, which is an exterior domain (neighborhood of infinity) and is not a punctured neighborhood of $z=0$.

To determine the nature of the singularity at $z=0$, we must find the Laurent series valid in the punctured disk centered at $z=0$, which is $0 < |z| < 1$:
$$f(z) = -\frac{1}{z(1-z)} = -\frac{1}{z} \sum_{n=0}^{\infty} z^n = -\frac{1}{z} - 1 - z - z^2 - z^3 - \dots$$
In this expansion, which is valid for $0 < |z| < 1$, the principal part contains exactly one term: $-\frac{1}{z}$. Since the number of negative power terms in this valid punctured disk expansion is finite (exactly 1), $z=0$ is a simple pole (pole of order 1), not an essential singularity.

---

#### Problem 32
**Problem:** Suppose $f$ and $g$ are analytic functions and $f$ has a zero of order $m$ and $g$ has a zero of order $n$ at $z = z_0$. Discuss: What is the order of the zero of $fg$ at $z_0$? of $f + g$ at $z_0$?

**Solution:**
Since $f$ and $g$ have zeros of order $m$ and $n$ respectively at $z_0$, we can write:
$$f(z) = (z-z_0)^m \phi(z) \quad \text{with} \quad \phi(z_0) \neq 0$$
$$g(z) = (z-z_0)^n \psi(z) \quad \text{with} \quad \psi(z_0) \neq 0$$
where $\phi$ and $\psi$ are analytic at $z_0$.

1. **For the product $fg$:**
   $$fg(z) = f(z)g(z) = (z-z_0)^{m+n} \phi(z)\psi(z)$$
   Since $\phi$ and $\psi$ are analytic and $\phi(z_0)\psi(z_0) \neq 0$, the function $\phi\psi$ is analytic and non-zero at $z_0$.
   Therefore, the product $fg$ has a zero of order $m+n$ at $z_0$.

2. **For the sum $f+g$:**
   Without loss of generality, assume $m \leq n$. We can write:
   $$f(z) + g(z) = (z-z_0)^m \phi(z) + (z-z_0)^n \psi(z) = (z-z_0)^m \left[ \phi(z) + (z-z_0)^{n-m} \psi(z) \right]$$
   Let $\eta(z) = \phi(z) + (z-z_0)^{n-m} \psi(z)$. $\eta$ is analytic at $z_0$.
   - **Case 1: $m < n$:**
     $$\eta(z_0) = \phi(z_0) + 0 = \phi(z_0) \neq 0$$
     Thus, the order of the zero of $f+g$ is exactly $m = \min(m, n)$.
   - **Case 2: $m = n$:**
     $$\eta(z_0) = \phi(z_0) + \psi(z_0)$$
     - If $\phi(z_0) + \psi(z_0) \neq 0$, the order of the zero is exactly $m$.
     - If $\phi(z_0) + \psi(z_0) = 0$, then $\eta(z_0) = 0$. Since $\eta$ is analytic, it has some zero of order $k \geq 1$ at $z_0$, which means $\eta(z) = (z-z_0)^k \tilde{\eta}(z)$ with $\tilde{\eta}(z_0) \neq 0$. Then:
       $$f(z) + g(z) = (z-z_0)^{m+k} \tilde{\eta}(z)$$
       Thus, the order of the zero of $f+g$ is $m+k > m$.
   
   Summary: The order of the zero of $fg$ is $m+n$. The order of the zero of $f+g$ is $\min(m,n)$ if $m \neq n$, and is $\geq m$ if $m = n$.

---

#### Problem 33
**Problem:** Picard's theorem states that in any arbitrarily small neighborhood of an isolated essential singularity $z_0$, an analytic function $f$ assumes every finite complex value, with one exception, an infinite number of times. Since $z = 0$ is an isolated essential singularity of $f(z) = e^{1/z}$, find an infinite number of $z$ in any neighborhood of $z = 0$ for which $f(z) = i$. What is the one exception?

**Solution:**
We solve the equation $f(z) = e^{1/z} = i$.
Using the complex logarithm:
$$i = e^{i(\pi/2 + 2k\pi)} \quad (k \in \mathbb{Z})$$
Thus:
$$\frac{1}{z} = i\left( \frac{\pi}{2} + 2k\pi \right) \implies z_k = \frac{-i}{\frac{\pi}{2} + 2k\pi} = \frac{-2i}{\pi(4k+1)} \quad (k \in \mathbb{Z})$$
For any $\epsilon > 0$, we can choose $|k|$ sufficiently large such that:
$$|z_k| = \frac{2}{\pi|4k+1|} < \epsilon$$
Thus, there are infinitely many such values of $z_k$ in any arbitrarily small neighborhood of $z=0$ for which $e^{1/z} = i$.

The one exception value is $0$. The function $e^{1/z}$ can never equal $0$ because the range of the exponential function $e^w$ is $\mathbb{C} \setminus \{0\}$.

---

#### Problem 34
**Problem:** Suppose $|f(z)|$ is bounded in a deleted neighborhood of an isolated singularity $z_0$. Classify $z_0$ as one of the three kinds of isolated singularities. Justify your answer.

**Solution:**
The singularity $z_0$ is a **removable singularity**.

**Proof (Riemann's Theorem on Removable Singularities):**
Let $f(z) = \sum_{k=-\infty}^{\infty} a_k (z - z_0)^k$ be the Laurent series representation of $f$ valid in the punctured disk $0 < |z - z_0| < R$. The coefficients $a_k$ are given by the integral formula:
$$a_k = \frac{1}{2\pi i} \oint_{C_r} \frac{f(z)}{(z - z_0)^{k+1}} dz$$
where $C_r$ is a circle of radius $r$ ($0 < r < R$) centered at $z_0$ parameterized by $z = z_0 + r e^{i\theta}$.
Since $|f(z)|$ is bounded in the deleted neighborhood, there exists a constant $M > 0$ such that $|f(z)| \leq M$ for all $0 < |z - z_0| < R$.
Applying the ML-inequality to the contour integral for $a_k$:
$$|a_k| \leq \frac{1}{2\pi} \max_{z \in C_r} \left| \frac{f(z)}{(z - z_0)^{k+1}} \right| \cdot 2\pi r \leq \frac{1}{2\pi} \frac{M}{r^{k+1}} 2\pi r = M r^{-k}$$
This inequality holds for any $r \in (0, R)$.
If $k$ is a negative integer, let $k = -n$ where $n \geq 1$. Then:
$$|a_{-n}| \leq M r^n$$
Since this holds for all $r$ arbitrarily close to $0$, we take the limit as $r \to 0^+$:
$$|a_{-n}| \leq \lim_{r \to 0^+} M r^n = 0 \implies a_{-n} = 0 \quad (\text{for all } n \geq 1)$$
Thus, all coefficients of negative powers in the Laurent expansion are zero. The principal part of $f$ is zero, which means $z_0$ is a removable singularity.

---

#### Problem 35
**Problem:** Suppose the analytic function $f(z)$ has a zero of order $n$ at $z = z_0$. Prove that the function $[f(z)]^m$, $m$ a positive integer, has a zero of order $mn$ at $z = z_0$.

**Solution:**
Since $f(z)$ has a zero of order $n$ at $z = z_0$, we can express $f(z)$ as:
$$f(z) = (z - z_0)^n \phi(z)$$
where $\phi(z)$ is analytic at $z_0$ and $\phi(z_0) \neq 0$.
Taking the $m$-th power:
$$[f(z)]^m = \left[ (z - z_0)^n \phi(z) \right]^m = (z - z_0)^{mn} [\phi(z)]^m$$
Let $\psi(z) = [\phi(z)]^m$. Since $\phi(z)$ is analytic at $z_0$, its power $\psi(z)$ is also analytic at $z_0$.
Furthermore:
$$\psi(z_0) = [\phi(z_0)]^m \neq 0 \quad (\text{since } \phi(z_0) \neq 0)$$
By definition, since $[f(z)]^m = (z-z_0)^{mn} \psi(z)$ with $\psi$ analytic at $z_0$ and $\psi(z_0) \neq 0$, the function $[f(z)]^m$ has a zero of order $mn$ at $z = z_0$.

---

#### Problem 36
**Problem:** Prove that the only isolated singularities of a rational function $f$ are poles or removable singularities.

**Solution:**
Let $f(z) = \frac{p(z)}{q(z)}$ be a rational function, where $p(z)$ and $q(z)$ are polynomials with no common factors (or any common factors can be canceled, leaving a reduced rational form).
The singularities of $f$ occur at the zeros of the denominator polynomial $q(z)$. Since $q(z)$ is a polynomial, it has a finite number of roots, and each root is isolated.
Let $z_0$ be a singularity of $f$, which means $q(z_0) = 0$. Since $q$ is a polynomial, the zero $z_0$ has a finite order $n \geq 1$. Thus, we can write:
$$q(z) = (z - z_0)^n Q(z)$$
where $Q(z)$ is a polynomial and $Q(z_0) \neq 0$.
Now we examine two cases:
1. **Case 1: $p(z_0) \neq 0$:**
   We can write:
   $$f(z) = \frac{p(z)}{(z - z_0)^n Q(z)} = \frac{p(z)/Q(z)}{(z - z_0)^n}$$
   Let $\phi(z) = p(z)/Q(z)$. Since $p$ and $Q$ are polynomials and $Q(z_0) \neq 0$, $\phi(z)$ is analytic at $z_0$, and $\phi(z_0) = p(z_0)/Q(z_0) \neq 0$.
   Therefore, by Theorem 6.12, $f$ has a pole of order $n$ at $z_0$.

2. **Case 2: $p(z_0) = 0$:**
   Since $p(z)$ is a polynomial, the zero $z_0$ has a finite order $m \geq 1$. Thus, we can write:
   $$p(z) = (z - z_0)^m P(z)$$
   where $P(z)$ is a polynomial and $P(z_0) \neq 0$.
   Then:
   $$f(z) = \frac{(z - z_0)^m P(z)}{(z - z_0)^n Q(z)} = (z - z_0)^{m - n} \frac{P(z)}{Q(z)}$$
   Let $\psi(z) = P(z)/Q(z)$. $\psi(z)$ is analytic at $z_0$ and $\psi(z_0) \neq 0$.
   - **Subcase 2a: $m \geq n$:**
     We have $f(z) = (z - z_0)^{m - n} \psi(z)$. Since $m - n \geq 0$, $f$ is analytic at $z_0$ (or can be made analytic by defining its value at $z_0$ to be $\psi(z_0)$ if $m=n$, or $0$ if $m>n$). Thus, $z_0$ is a removable singularity.
   - **Subcase 2b: $m < n$:**
     We have $f(z) = \frac{\psi(z)}{(z - z_0)^{n - m}}$. Since $n - m \geq 1$, $f$ has a pole of order $n - m$ at $z_0$.

In all cases, the singularity $z_0$ is either a pole or a removable singularity. Essential singularities (which require an infinite number of negative power terms in the Laurent expansion) are impossible for rational functions.