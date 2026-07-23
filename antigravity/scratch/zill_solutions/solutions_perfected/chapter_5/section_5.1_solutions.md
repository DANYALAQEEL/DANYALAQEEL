# Complex Analysis — Dennis G. Zill, 2nd Edition
## Chapter 5 · Section 5.1 — Real Integrals
### Problems 1 – 36 · Complete Solutions

---

> **Key Concepts of Real Line Integrals**
>
> 1. **Definite Integrals:** Continuous functions on an interval can be integrated using the Fundamental Theorem of Calculus.
> 2. **Line Integrals in the Plane:** For a curve $C$ parameterized by $x = x(t), \, y = y(t)$ for $a \le t \le b$:
>    $$
>    \int_C G(x,y) \, dx = \int_a^b G(x(t), y(t)) \, x'(t) \, dt
>    $$
>    $$
>    \int_C G(x,y) \, dy = \int_a^b G(x(t), y(t)) \, y'(t) \, dt
>    $$
>    $$
>    \int_C G(x,y) \, ds = \int_a^b G(x(t), y(t)) \, \sqrt{[x'(t)]^2 + [y'(t)]^2} \, dt
>    $$
> 3. **Green's Theorem:** For a simple closed curve $C$ enclosing a region $D$ in the plane, traversed counterclockwise:
>    $$
>    \oint_C P \, dx + Q \, dy = \iint_D \left( \frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y} \right) \, dA
>    $$

---

## Problems 1 – 10: Definite Integrals

Evaluate the given definite integral.

### Problem 1
**Evaluate the definite integral:**
$$ \int_{-1}^3 x(x-1)(x+2) \, dx $$

**Solution:**
We first expand the integrand:
$$
x(x-1)(x+2) = x(x^2 + x - 2) = x^3 + x^2 - 2x
$$
Now, integrate term-by-term:
$$
\int_{-1}^3 (x^3 + x^2 - 2x) \, dx = \left[ \frac{x^4}{4} + \frac{x^3}{3} - x^2 \right]_{-1}^3
$$
Evaluate at the upper limit $x = 3$:
$$
\frac{3^4}{4} + \frac{3^3}{3} - 3^2 = \frac{81}{4} + 9 - 9 = \frac{81}{4}
$$
Evaluate at the lower limit $x = -1$:
$$
\frac{(-1)^4}{4} + \frac{(-1)^3}{3} - (-1)^2 = \frac{1}{4} - \frac{1}{3} - 1 = \frac{3 - 4 - 12}{12} = -\frac{13}{12}
$$
Subtracting the lower limit value from the upper limit value:
$$
\frac{81}{4} - \left( -\frac{13}{12} \right) = \frac{243}{12} + \frac{13}{12} = \frac{256}{12} = \boxed{\frac{64}{3}}
$$

---

### Problem 2
**Evaluate the definite integral:**
$$ \int_{-1}^0 t^2 \, dt + \int_0^2 x^2 \, dx + \int_2^3 u^2 \, du $$

**Solution:**
Since the dummy variables of integration ($t$, $x$, and $u$) do not affect the value of the definite integrals, we can rewrite the integrals using a single variable, say $w$:
$$
\int_{-1}^0 w^2 \, dw + \int_0^2 w^2 \, dw + \int_2^3 w^2 \, dw
$$
By the additive property of integration intervals, since the intervals $[-1,0]$, $[0,2]$, and $[2,3]$ are contiguous, we can combine them into a single integral over $[-1, 3]$:
$$
\int_{-1}^3 w^2 \, dw = \left[ \frac{w^3}{3} \right]_{-1}^3
$$
Evaluate at the limits:
$$
\left( \frac{3^3}{3} \right) - \left( \frac{(-1)^3}{3} \right) = 9 - \left( -\frac{1}{3} \right) = 9 + \frac{1}{3} = \boxed{\frac{28}{3}}
$$

---

### Problem 3
**Evaluate the definite integral:**
$$ \int_{1/2}^1 \sin(2\pi x) \, dx $$

**Solution:**
Using the integration rule $\int \sin(ax) \, dx = -\frac{1}{a}\cos(ax)$, we have:
$$
\int_{1/2}^1 \sin(2\pi x) \, dx = \left[ -\frac{1}{2\pi}\cos(2\pi x) \right]_{1/2}^1
$$
Evaluate at the limits:
$$
-\frac{1}{2\pi}\left( \cos(2\pi) - \cos(\pi) \right)
$$
Since $\cos(2\pi) = 1$ and $\cos(\pi) = -1$:
$$
-\frac{1}{2\pi}(1 - (-1)) = -\frac{1}{2\pi}(2) = \boxed{-\frac{1}{\pi}}
$$

---

### Problem 4
**Evaluate the definite integral:**
$$ \int_0^{\pi/8} \sec^2(2x) \, dx $$

**Solution:**
Using the integration rule $\int \sec^2(ax) \, dx = \frac{1}{a}\tan(ax)$, we have:
$$
\int_0^{\pi/8} \sec^2(2x) \, dx = \left[ \frac{1}{2}\tan(2x) \right]_0^{\pi/8}
$$
Evaluate at the limits:
$$
\frac{1}{2}\left( \tan\left(2 \cdot \frac{\pi}{8}\right) - \tan(0) \right) = \frac{1}{2}\left( \tan\left(\frac{\pi}{4}\right) - \tan(0) \right)
$$
Since $\tan(\pi/4) = 1$ and $\tan(0) = 0$:
$$
\frac{1}{2}(1 - 0) = \boxed{\frac{1}{2}}
$$

---

### Problem 5
**Evaluate the definite integral:**
$$ \int_0^4 \frac{dx}{2x+1} $$

**Solution:**
We use the substitution $u = 2x+1 \implies du = 2\,dx$, or $\frac{1}{2}\,du = dx$:
$$
\int \frac{dx}{2x+1} = \frac{1}{2} \ln|2x+1|
$$
Evaluating from $x = 0$ to $x = 4$:
$$
\int_0^4 \frac{dx}{2x+1} = \left[ \frac{1}{2}\ln|2x+1| \right]_0^4 = \frac{1}{2}\ln(9) - \frac{1}{2}\ln(1)
$$
Since $\ln(1) = 0$:
$$
\frac{1}{2}\ln(9) = \frac{1}{2}\ln(3^2) = \boxed{\ln(3)}
$$

---

### Problem 6
**Evaluate the definite integral:**
$$ \int_{\ln 2}^{\ln 3} e^{-x} \, dx $$

**Solution:**
Integrating the exponential term:
$$
\int_{\ln 2}^{\ln 3} e^{-x} \, dx = \left[ -e^{-x} \right]_{\ln 2}^{\ln 3} = \left( -e^{-\ln 3} \right) - \left( -e^{-\ln 2} \right)
$$
Using the property $e^{-\ln y} = e^{\ln(1/y)} = \frac{1}{y}$:
$$
-\frac{1}{3} - \left( -\frac{1}{2} \right) = -\frac{1}{3} + \frac{1}{2} = \frac{-2 + 3}{6} = \boxed{\frac{1}{6}}
$$

---

### Problem 7
**Evaluate the definite integral:**
$$ \int_2^4 x e^{-x/2} \, dx $$

**Solution:**
We use integration by parts: $\int u \, dv = uv - \int v \, du$.
Let:
$$
u = x \implies du = dx
$$
$$
dv = e^{-x/2}\,dx \implies v = -2e^{-x/2}
$$
Applying the formula:
$$
\int x e^{-x/2} \, dx = -2x e^{-x/2} - \int (-2e^{-x/2}) \, dx = -2x e^{-x/2} - 4e^{-x/2} = -2(x+2)e^{-x/2}
$$
Now, evaluate from $x = 2$ to $x = 4$:
$$
\left[ -2(x+2)e^{-x/2} \right]_2^4 = \left( -2(4+2)e^{-2} \right) - \left( -2(2+2)e^{-1} \right)
$$
$$
= -12e^{-2} + 8e^{-1} = \boxed{8e^{-1} - 12e^{-2}}
$$

---

### Problem 8
**Evaluate the definite integral:**
$$ \int_1^e \ln x \, dx $$

**Solution:**
We use integration by parts: Let $u = \ln x \implies du = \frac{1}{x}dx$, and $dv = dx \implies v = x$.
$$
\int \ln x \, dx = x\ln x - \int x \cdot \frac{1}{x}\,dx = x\ln x - x
$$
Evaluate from $x = 1$ to $x = e$:
$$
\left[ x\ln x - x \right]_1^e = (e\ln e - e) - (1\ln 1 - 1)
$$
Since $\ln e = 1$ and $\ln 1 = 0$:
$$
(e - e) - (0 - 1) = 0 - (-1) = \boxed{1}
$$

---

### Problem 9
**Evaluate the definite integral:**
$$ \int_2^4 \frac{dx}{x^2-6x+5} $$

**Solution:**
First, factor the denominator:
$$
x^2-6x+5 = (x-1)(x-5)
$$
Use partial fraction decomposition:
$$
\frac{1}{(x-1)(x-5)} = \frac{A}{x-1} + \frac{B}{x-5}
$$
Multiply by $(x-1)(x-5)$:
$$
1 = A(x-5) + B(x-1)
$$
- Setting $x = 1 \implies 1 = -4A \implies A = -1/4$
- Setting $x = 5 \implies 1 = 4B \implies B = 1/4$
So:
$$
\frac{1}{x^2-6x+5} = \frac{1}{4}\left( \frac{1}{x-5} - \frac{1}{x-1} \right)
$$
Now, integrate:
$$
\int \frac{dx}{x^2-6x+5} = \frac{1}{4}\left( \ln|x-5| - \ln|x-1| \right) = \frac{1}{4}\ln\left| \frac{x-5}{x-1} \right|
$$
Evaluate from $x = 2$ to $x = 4$:
$$
\left[ \frac{1}{4}\ln\left| \frac{x-5}{x-1} \right| \right]_2^4 = \frac{1}{4}\ln\left| \frac{4-5}{4-1} \right| - \frac{1}{4}\ln\left| \frac{2-5}{2-1} \right| = \frac{1}{4}\ln(1/3) - \frac{1}{4}\ln(3)
$$
Using the properties of logarithms:
$$
\frac{1}{4}\ln(1/3) - \frac{1}{4}\ln(3) = \frac{1}{4}(-\ln 3) - \frac{1}{4}\ln 3 = -\frac{1}{2}\ln(3) = \boxed{-\frac{1}{2}\ln 3}
$$

---

### Problem 10
**Evaluate the definite integral:**
$$ \int_2^4 \frac{2x-1}{(x+3)^2} \, dx $$

**Solution:**
We use the substitution $u = x+3 \implies x = u-3, \, dx = du$.
The limits of integration change from:
- $x = 2 \implies u = 5$
- $x = 4 \implies u = 7$
The integrand becomes:
$$
\frac{2x-1}{(x+3)^2} = \frac{2(u-3)-1}{u^2} = \frac{2u-7}{u^2} = \frac{2}{u} - \frac{7}{u^2}
$$
Now, integrate with respect to $u$:
$$
\int_{5}^{7} \left( \frac{2}{u} - \frac{7}{u^2} \right) \, du = \left[ 2\ln|u| + \frac{7}{u} \right]_5^7
$$
Evaluate at the limits:
$$
\left( 2\ln 7 + \frac{7}{7} \right) - \left( 2\ln 5 + \frac{7}{5} \right) = 2\ln 7 + 1 - 2\ln 5 - \frac{7}{5}
$$
$$
= 2(\ln 7 - \ln 5) + \left(1 - \frac{7}{5}\right) = \boxed{2\ln(7/5) - \frac{2}{5}}
$$

---

## Problems 11 – 14: Line Integrals on Curves

Evaluate the line integrals $\int_C G(x,y) \, dx$, $\int_C G(x,y) \, dy$, and $\int_C G(x,y) \, ds$ on the indicated curve $C$.

### Problem 11
**Evaluate the line integrals for:**
$$ G(x,y) = 2xy; \quad C: x = 5\cos t, \, y = 5\sin t, \, 0 \le t \le \pi/4 $$

**Solution:**
First, we find the differentials:
$$
x = 5\cos t \implies dx = -5\sin t \, dt
$$
$$
y = 5\sin t \implies dy = 5\cos t \, dt
$$
The arc length differential is:
$$
ds = \sqrt{[x'(t)]^2 + [y'(t)]^2} \, dt = \sqrt{(-5\sin t)^2 + (5\cos t)^2} \, dt = \sqrt{25(\sin^2 t + \cos^2 t)} \, dt = 5 \, dt
$$
We express $G(x,y)$ in terms of $t$:
$$
G(x(t), y(t)) = 2(5\cos t)(5\sin t) = 50\sin t\cos t = 25\sin(2t)
$$
Now we compute each line integral:

1. **Integral with respect to $x$:**
   $$
   \int_C G \, dx = \int_0^{\pi/4} (50\sin t\cos t)(-5\sin t) \, dt = -250 \int_0^{\pi/4} \sin^2 t \cos t \, dt
   $$
   Let $u = \sin t \implies du = \cos t \, dt$.
   - $t=0 \implies u=0$
   - $t=\pi/4 \implies u=1/\sqrt{2}$
   $$
   -250 \int_0^{1/\sqrt{2}} u^2 \, du = -250 \left[ \frac{u^3}{3} \right]_0^{1/\sqrt{2}} = -\frac{250}{3} \left( \frac{1}{2\sqrt{2}} - 0 \right) = \boxed{-\frac{125}{3\sqrt{2}}}
   $$

2. **Integral with respect to $y$:**
   $$
   \int_C G \, dy = \int_0^{\pi/4} (50\sin t\cos t)(5\cos t) \, dt = 250 \int_0^{\pi/4} \cos^2 t \sin t \, dt
   $$
   Let $w = \cos t \implies dw = -\sin t \, dt$.
   - $t=0 \implies w=1$
   - $t=\pi/4 \implies w=1/\sqrt{2}$
   $$
   250 \int_1^{1/\sqrt{2}} -w^2 \, dw = 250 \int_{1/\sqrt{2}}^1 w^2 \, dw = 250 \left[ \frac{w^3}{3} \right]_{1/\sqrt{2}}^1 = \frac{250}{3} \left( 1 - \frac{1}{2\sqrt{2}} \right) = \boxed{\frac{250}{3} - \frac{125}{3\sqrt{2}}}
   $$
   *(Note: This simplifies to $\frac{125(2\sqrt{2}-1)}{3\sqrt{2}}$).*

3. **Integral with respect to arc length $ds$:**
   $$
   \int_C G \, ds = \int_0^{\pi/4} (25\sin(2t))(5) \, dt = 125 \int_0^{\pi/4} \sin(2t) \, dt = 125 \left[ -\frac{1}{2}\cos(2t) \right]_0^{\pi/4}
   $$
   $$
   = -\frac{125}{2}\left( \cos(\pi/2) - \cos(0) \right) = -\frac{125}{2}(0 - 1) = \boxed{\frac{125}{2}}
   $$

---

### Problem 12
**Evaluate the line integrals for:**
$$ G(x,y) = x^3 + 2xy^2 + 2x; \quad C: x = 2t, \, y = t^2, \, 0 \le t \le 1 $$

**Solution:**
We compute the differentials:
$$
x = 2t \implies dx = 2 \, dt
$$
$$
y = t^2 \implies dy = 2t \, dt
$$
The arc length differential:
$$
ds = \sqrt{[x'(t)]^2 + [y'(t)]^2} \, dt = \sqrt{2^2 + (2t)^2} \, dt = 2\sqrt{1+t^2} \, dt
$$
Substitute $x$ and $y$ into $G(x,y)$:
$$
G(t) = (2t)^3 + 2(2t)(t^2)^2 + 2(2t) = 8t^3 + 4t^5 + 4t = 4t^5 + 8t^3 + 4t = 4t(t^2 + 1)^2
$$
Now we compute each line integral:

1. **Integral with respect to $x$:**
   $$
   \int_C G \, dx = \int_0^1 (4t^5 + 8t^3 + 4t)(2) \, dt = 2 \left[ \frac{4t^6}{6} + \frac{8t^4}{4} + \frac{4t^2}{2} \right]_0^1
   $$
   $$
   = 2 \left( \frac{2}{3} + 2 + 2 \right) = 2 \left( \frac{14}{3} \right) = \boxed{\frac{28}{3}}
   $$

2. **Integral with respect to $y$:**
   $$
   \int_C G \, dy = \int_0^1 (4t^5 + 8t^3 + 4t)(2t) \, dt = \int_0^1 (8t^6 + 16t^4 + 8t^2) \, dt
   $$
   $$
   = \left[ \frac{8t^7}{7} + \frac{16t^5}{5} + \frac{8t^3}{3} \right]_0^1 = \frac{8}{7} + \frac{16}{5} + \frac{8}{3}
   $$
   Finding a common denominator of 105:
   $$
   \frac{8 \times 15 + 16 \times 21 + 8 \times 35}{105} = \frac{120 + 336 + 280}{105} = \boxed{\frac{736}{105}}
   $$

3. **Integral with respect to arc length $ds$:**
   $$
   \int_C G \, ds = \int_0^1 [4t(t^2 + 1)^2] [2\sqrt{1+t^2}] \, dt = 8 \int_0^1 t(t^2+1)^{5/2} \, dt
   $$
   Let $u = t^2 + 1 \implies du = 2t \, dt$, or $t \, dt = \frac{1}{2}\,du$.
   - $t=0 \implies u=1$
   - $t=1 \implies u=2$
   $$
   8 \int_1^2 u^{5/2} \left(\frac{1}{2}\,du\right) = 4 \int_1^2 u^{5/2} \, du = 4 \left[ \frac{2}{7} u^{7/2} \right]_1^2
   $$
   $$
   = \frac{8}{7} \left( 2^{7/2} - 1^{7/2} \right) = \frac{8}{7} (8\sqrt{2} - 1) = \boxed{\frac{64\sqrt{2}-8}{7}}
   $$

---

### Problem 13
**Evaluate the line integrals for:**
$$ G(x,y) = 3x^2 + 6y^2; \quad C: y = 2x+1, \, -1 \le x \le 0 $$

**Solution:**
We use $x = t$ as the parameter:
$$
x = t \implies dx = dt
$$
$$
y = 2t+1 \implies dy = 2 \, dt
$$
The arc length differential:
$$
ds = \sqrt{1^2 + 2^2} \, dt = \sqrt{5} \, dt
$$
Express $G(x,y)$ in terms of $t$:
$$
G(t) = 3t^2 + 6(2t+1)^2 = 3t^2 + 6(4t^2 + 4t + 1) = 3t^2 + 24t^2 + 24t + 6 = 27t^2 + 24t + 6
$$
The parameter limits are from $t = -1$ to $t = 0$.

1. **Integral with respect to $x$:**
   $$
   \int_C G \, dx = \int_{-1}^0 (27t^2 + 24t + 6) \, dt = \left[ 9t^3 + 12t^2 + 6t \right]_{-1}^0
   $$
   $$
   = 0 - \left( 9(-1)^3 + 12(-1)^2 + 6(-1) \right) = -(-9 + 12 - 6) = -(-3) = \boxed{3}
   $$

2. **Integral with respect to $y$:**
   $$
   \int_C G \, dy = \int_{-1}^0 (27t^2 + 24t + 6)(2) \, dt = 2(3) = \boxed{6}
   $$

3. **Integral with respect to arc length $ds$:**
   $$
   \int_C G \, ds = \int_{-1}^0 (27t^2 + 24t + 6)(\sqrt{5}) \, dt = \sqrt{5}(3) = \boxed{3\sqrt{5}}
   $$

---

### Problem 14
**Evaluate the line integrals for:**
$$ G(x,y) = x^2/y^3; \quad C: 2y = 3x^{3/2}, \, 1 \le x \le 8 $$

**Solution:**
We write $y$ in terms of $x$:
$$
y = \frac{3}{2}x^{3/2}
$$
So:
$$
dy = \frac{9}{4}x^{1/2} \, dx
$$
The arc length differential:
$$
ds = \sqrt{1 + (dy/dx)^2} \, dx = \sqrt{1 + \left(\frac{9}{4}x^{1/2}\right)^2} \, dx = \sqrt{1 + \frac{81}{16}x} \, dx
$$
We express $G(x,y)$ in terms of $x$:
$$
G(x) = \frac{x^2}{y^3} = \frac{x^2}{\left(\frac{3}{2}x^{3/2}\right)^3} = \frac{x^2}{\frac{27}{8}x^{9/2}} = \frac{8}{27} x^{2 - 9/2} = \frac{8}{27} x^{-5/2}
$$
Now compute the integrals from $x = 1$ to $x = 8$:

1. **Integral with respect to $x$:**
   $$
   \int_C G \, dx = \int_1^8 \frac{8}{27}x^{-5/2} \, dx = \frac{8}{27} \left[ -\frac{2}{3} x^{-3/2} \right]_1^8 = -\frac{16}{81} \left[ \frac{1}{x\sqrt{x}} \right]_1^8
   $$
   $$
   = -\frac{16}{81} \left( \frac{1}{8\sqrt{8}} - 1 \right) = -\frac{16}{81} \left( \frac{1}{16\sqrt{2}} - 1 \right) = \boxed{\frac{16}{81} - \frac{1}{81\sqrt{2}}}
   $$

2. **Integral with respect to $y$:**
   $$
   \int_C G \, dy = \int_1^8 \left( \frac{8}{27} x^{-5/2} \right) \left( \frac{9}{4} x^{1/2} \right) \, dx = \int_1^8 \frac{2}{3} x^{-2} \, dx
   $$
   $$
   = \frac{2}{3} \left[ -\frac{1}{x} \right]_1^8 = -\frac{2}{3} \left( \frac{1}{8} - 1 \right) = -\frac{2}{3} \left( -\frac{7}{8} \right) = \boxed{\frac{7}{12}}
   $$

3. **Integral with respect to arc length $ds$:**
   $$
   \int_C G \, ds = \int_1^8 \frac{8}{27} x^{-5/2} \sqrt{1 + \frac{81}{16}x} \, dx
   $$
   This integral can be written as:
   $$
   \boxed{\int_1^8 \frac{8}{27} x^{-5/2} \sqrt{1 + \frac{81}{16}x} \, dx}
   $$

---

## Problems 15 – 18: Evaluating $\int_C (2x+y)\,dx + xy\,dy$ from $(-1,2)$ to $(2,5)$

Evaluate $\int_C (2x+y)\,dx + xy\,dy$ on the given curve from $(-1,2)$ to $(2,5)$.

### Problem 15
**Evaluate the line integral along the line:**
$$ y = x+3 $$

**Solution:**
If $y = x+3$, then $dy = dx$. The path starts at $x = -1$ and ends at $x = 2$.
We substitute $y$ and $dy$ into the integral:
$$
\int_C (2x+y)\,dx + xy\,dy = \int_{-1}^2 (2x + (x+3))\,dx + x(x+3)\,dx
$$
$$
= \int_{-1}^2 (3x + 3 + x^2 + 3x)\,dx = \int_{-1}^2 (x^2 + 6x + 3)\,dx
$$
Now, integrate with respect to $x$:
$$
\left[ \frac{x^3}{3} + 3x^2 + 3x \right]_{-1}^2
$$
Evaluate at the limits:
- At $x = 2$:
  $$
  \frac{8}{3} + 12 + 6 = 18 + \frac{8}{3} = \frac{62}{3}
  $$
- At $x = -1$:
  $$
  -\frac{1}{3} + 3 - 3 = -\frac{1}{3}
  $$
Subtract:
$$
\frac{62}{3} - \left( -\frac{1}{3} \right) = \frac{63}{3} = \boxed{21}
$$

---

### Problem 16
**Evaluate the line integral along the parabola:**
$$ y = x^2+1 $$

**Solution:**
If $y = x^2+1$, then $dy = 2x\,dx$. The path goes from $x = -1$ to $x = 2$.
Substitute:
$$
\int_C (2x+y)\,dx + xy\,dy = \int_{-1}^2 (2x + x^2 + 1)\,dx + x(x^2+1)(2x\,dx)
$$
$$
= \int_{-1}^2 (x^2 + 2x + 1 + 2x^4 + 2x^2)\,dx = \int_{-1}^2 (2x^4 + 3x^2 + 2x + 1)\,dx
$$
Integrate:
$$
\left[ \frac{2x^5}{5} + x^3 + x^2 + x \right]_{-1}^2
$$
Evaluate at $x=2$:
$$
\frac{64}{5} + 8 + 4 + 2 = \frac{64}{5} + 14 = \frac{134}{5} = 26.8
$$
Evaluate at $x=-1$:
$$
-\frac{2}{5} - 1 + 1 - 1 = -\frac{2}{5} - 1 = -\frac{7}{5} = -1.4
$$
Subtract:
$$
\frac{134}{5} - \left( -\frac{7}{5} \right) = \frac{141}{5} = \boxed{28.2}
$$

---

### Problem 17
**Evaluate the line integral along the path consists of segments from $(-1,2)$ to $(2,2)$ and $(2,2)$ to $(2,5)$:**

![Figure 5.9](../../extracted_figures/figure_5_9.png)

**Solution:**
Let $C = C_1 \cup C_2$.
1. **On $C_1$ (horizontal segment from $(-1,2)$ to $(2,2)$):**
   $y = 2 \implies dy = 0$, while $x$ ranges from $-1$ to $2$.
   $$
   \int_{C_1} (2x+y)\,dx + xy\,dy = \int_{-1}^2 (2x+2)\,dx = \left[ x^2 + 2x \right]_{-1}^2
   $$
   $$
   = (4+4) - (1-2) = 8 - (-1) = 9
   $$

2. **On $C_2$ (vertical segment from $(2,2)$ to $(2,5)$):**
   $x = 2 \implies dx = 0$, while $y$ ranges from $2$ to $5$.
   $$
   \int_{C_2} (2x+y)\,dx + xy\,dy = \int_2^5 (2y)\,dy = \left[ y^2 \right]_2^5 = 25 - 4 = 21
   $$

Summing both parts:
$$
\int_C = \int_{C_1} + \int_{C_2} = 9 + 21 = \boxed{30}
$$

---

### Problem 18
**Evaluate the line integral along the path consists of segments from $(-1,2)$ to $(-1,0)$, then to $(2,0)$, then to $(2,5)$:**

![Figure 5.10](../../extracted_figures/figure_5_10.png)

**Solution:**
Let $C = C_1 \cup C_2 \cup C_3$.
1. **On $C_1$ (vertical from $(-1,2)$ to $(-1,0)$):**
   $x = -1 \implies dx = 0$, $y$ goes from $2$ to $0$.
   $$
   \int_{C_1} (2x+y)\,dx + xy\,dy = \int_2^0 (-1)y\,dy = \left[ -\frac{y^2}{2} \right]_2^0 = 0 - (-2) = 2
   $$

2. **On $C_2$ (horizontal from $(-1,0)$ to $(2,0)$):**
   $y = 0 \implies dy = 0$, $x$ goes from $-1$ to $2$.
   $$
   \int_{C_2} (2x+y)\,dx + xy\,dy = \int_{-1}^2 2x\,dx = \left[ x^2 \right]_{-1}^2 = 4 - 1 = 3
   $$

3. **On $C_3$ (vertical from $(2,0)$ to $(2,5)$):**
   $x = 2 \implies dx = 0$, $y$ goes from $0$ to $5$.
   $$
   \int_{C_3} (2x+y)\,dx + xy\,dy = \int_0^5 2y\,dy = \left[ y^2 \right]_0^5 = 25 - 0 = 25
   $$

Summing all parts:
$$
\int_C = 2 + 3 + 25 = \boxed{30}
$$

---

## Problems 19 – 22: Evaluating $\int_C y\,dx + x\,dy$ from $(0,0)$ to $(1,1)$

Evaluate $\int_C y\,dx + x\,dy$ on the given curve from $(0,0)$ to $(1,1)$. Note that $y\,dx + x\,dy = d(xy)$ is an exact differential of the potential function $\Phi(x,y) = xy$. Thus, by the Fundamental Theorem for Line Integrals, the integral is path independent and equals:
$$
\int_C y\,dx + x\,dy = xy \Big|_{(0,0)}^{(1,1)} = 1(1) - 0(0) = 1
$$
We verify this directly for each path.

### Problem 19
**Evaluate along the curve:**
$$ y = x^2 $$

**Solution:**
If $y = x^2$, then $dy = 2x\,dx$. The limits are from $x = 0$ to $x = 1$.
$$
\int_C y\,dx + x\,dy = \int_0^1 (x^2)\,dx + x(2x\,dx) = \int_0^1 3x^2\,dx = \left[ x^3 \right]_0^1 = \boxed{1}
$$

---

### Problem 20
**Evaluate along the curve:**
$$ y = x $$

**Solution:**
If $y = x$, then $dy = dx$. The limits are from $x = 0$ to $x = 1$.
$$
\int_C y\,dx + x\,dy = \int_0^1 x\,dx + x\,dx = \int_0^1 2x\,dx = \left[ x^2 \right]_0^1 = \boxed{1}
$$

---

### Problem 21
**Evaluate along the path $C$ consists of the line segments from $(0,0)$ to $(0,1)$ and from $(0,1)$ to $(1,1)$:**

**Solution:**
Let $C = C_1 \cup C_2$.
1. **On $C_1$ (vertical from $(0,0)$ to $(0,1)$):**
   $x = 0 \implies dx = 0$, $y$ goes from $0$ to $1$.
   $$
   \int_{C_1} y\,dx + x\,dy = \int_0^1 0 \, dy = 0
   $$
2. **On $C_2$ (horizontal from $(0,1)$ to $(1,1)$):**
   $y = 1 \implies dy = 0$, $x$ goes from $0$ to $1$.
   $$
   \int_{C_2} y\,dx + x\,dy = \int_0^1 1 \, dx = \left[ x \right]_0^1 = 1
   $$
Total: $0 + 1 = \boxed{1}$.

---

### Problem 22
**Evaluate along the path $C$ consists of the line segments from $(0,0)$ to $(1,0)$ and from $(1,0)$ to $(1,1)$:**

**Solution:**
Let $C = C_1 \cup C_2$.
1. **On $C_1$ (horizontal from $(0,0)$ to $(1,0)$):**
   $y = 0 \implies dy = 0$, $x$ goes from $0$ to $1$.
   $$
   \int_{C_1} y\,dx + x\,dy = \int_0^1 0 \, dx = 0
   $$
2. **On $C_2$ (vertical from $(1,0)$ to $(1,1)$):**
   $x = 1 \implies dx = 0$, $y$ goes from $0$ to $1$.
   $$
   \int_{C_2} y\,dx + x\,dy = \int_0^1 1 \, dy = \left[ y \right]_0^1 = 1
   $$
Total: $0 + 1 = \boxed{1}$.

---

## Problems 23 – 26: General Line Integrals

### Problem 23
**Evaluate:**
$$ \int_C (6x^2 + 2y^2)\,dx + 4xy\,dy $$
**where $C$ is given by $x = \sqrt{t}, \, y = t, \, 4 \le t \le 9$.**

**Solution:**
We write all terms in parameter $t$:
$$
x = t^{1/2} \implies dx = \frac{1}{2}t^{-1/2}\,dt
$$
$$
y = t \implies dy = dt
$$
Substitute into the integral:
$$
\int_4^9 \left( 6(\sqrt{t})^2 + 2(t)^2 \right) \left( \frac{1}{2}t^{-1/2}\,dt \right) + 4(\sqrt{t})(t) \, dt
$$
$$
= \int_4^9 (6t + 2t^2) \left( \frac{1}{2}t^{-1/2} \right) \, dt + 4t^{3/2} \, dt
$$
$$
= \int_4^9 (3t^{1/2} + t^{3/2} + 4t^{3/2}) \, dt = \int_4^9 (3t^{1/2} + 5t^{3/2}) \, dt
$$
Integrate with respect to $t$:
$$
\left[ 2t^{3/2} + 2t^{5/2} \right]_4^9
$$
Evaluate at $t=9$:
$$
2(9^{3/2}) + 2(9^{5/2}) = 2(27) + 2(243) = 54 + 486 = 540
$$
Evaluate at $t=4$:
$$
2(4^{3/2}) + 2(4^{5/2}) = 2(8) + 2(32) = 16 + 64 = 80
$$
Subtract:
$$
540 - 80 = \boxed{460}
$$

---

### Problem 24
**Evaluate:**
$$ \int_C -y^2\,dx + xy\,dy $$
**where $C$ is given by $x = 2t, \, y = t^3, \, 0 \le t \le 2$.**

**Solution:**
Find differentials in terms of $t$:
$$
x = 2t \implies dx = 2 \, dt
$$
$$
y = t^3 \implies dy = 3t^2 \, dt
$$
Substitute:
$$
\int_0^2 -(t^3)^2(2 \, dt) + (2t)(t^3)(3t^2 \, dt) = \int_0^2 (-2t^6 + 6t^6) \, dt = \int_0^2 4t^6 \, dt
$$
Integrate:
$$
\left[ \frac{4t^7}{7} \right]_0^2 = \frac{4(2^7)}{7} = \frac{4(128)}{7} = \boxed{\frac{512}{7}}
$$

---

### Problem 25
**Evaluate:**
$$ \int_C 2x^3y\,dx + (3x+y)\,dy $$
**where $C$ is given by $x = y^2$ from $(1,-1)$ to $(1,1)$.**

**Solution:**
We use $y = t$ as the parameter, so $t$ ranges from $-1$ to $1$:
$$
y = t \implies dy = dt
$$
$$
x = t^2 \implies dx = 2t \, dt
$$
Substitute:
$$
\int_{-1}^1 2(t^2)^3(t)(2t \, dt) + (3(t^2)+t)\,dt = \int_{-1}^1 (4t^8 + 3t^2 + t)\,dt
$$
Integrate:
$$
\left[ \frac{4t^9}{9} + t^3 + \frac{t^2}{2} \right]_{-1}^1
$$
Evaluate at $t=1$:
$$
\frac{4}{9} + 1 + \frac{1}{2} = \frac{8 + 18 + 9}{18} = \frac{35}{18}
$$
Evaluate at $t=-1$:
$$
-\frac{4}{9} - 1 + \frac{1}{2} = \frac{-8 - 18 + 9}{18} = -\frac{17}{18}
$$
Subtract:
$$
\frac{35}{18} - \left( -\frac{17}{18} \right) = \frac{52}{18} = \boxed{\frac{26}{9}}
$$

---

### Problem 26
**Evaluate:**
$$ \int_C 4x\,dx + 2y\,dy $$
**where $C$ is given by $x = y^3+1$ from $(0,-1)$ to $(9,2)$.**

**Solution:**
Observe that the differential form $4x\,dx + 2y\,dy$ is exact since:
$$
\frac{\partial}{\partial y}(4x) = 0 = \frac{\partial}{\partial x}(2y)
$$
The potential function is:
$$
\Phi(x,y) = 2x^2 + y^2
$$
Since the integral is path independent, we can evaluate it by simply taking the difference in potential values between the final and initial points:
$$
\int_{(0,-1)}^{(9,2)} 4x\,dx + 2y\,dy = \left[ 2x^2 + y^2 \right]_{(0,-1)}^{(9,2)}
$$
$$
= \left( 2(9^2) + 2^2 \right) - \left( 2(0^2) + (-1)^2 \right)
$$
$$
= (162 + 4) - (0 + 1) = 166 - 1 = \boxed{165}
$$

---

## Problems 27 – 30: Line Integrals on Closed Curves

Evaluate the given line integral on the indicated closed curve $C$.
**(a) By integrating along $C$**
**(b) By using Green's Theorem**

### Problem 27
**Evaluate the closed line integral:**
$$ \oint_C (x^2+y^2)\,dx - 2xy\,dy $$
**where $C$ is the boundary of the upper half-disk of radius 2.**

![Figure 5.11](../../extracted_figures/figure_5_11.png)

**Solution:**

**(a) Direct Integration Method:**
The boundary $C$ consists of two segments: $C_1$, the line segment on the real axis from $x = -2$ to $x = 2$, and $C_2$, the upper semicircular arc of radius 2 from $x = 2$ to $x = -2$.

1. **Along $C_1$ (from $(-2,0)$ to $(2,0)$):**
   $y = 0 \implies dy = 0$. The variable $x$ goes from $-2$ to $2$.
   $$
   \int_{C_1} (x^2+y^2)\,dx - 2xy\,dy = \int_{-2}^2 x^2 \, dx = \left[ \frac{x^3}{3} \right]_{-2}^2 = \frac{8}{3} - \left(-\frac{8}{3}\right) = \frac{16}{3}
   $$

2. **Along $C_2$ (semicircular arc in upper half-plane from $(2,0)$ to $(-2,0)$):**
   We parameterize the arc as $x = 2\cos\theta$, $y = 2\sin\theta$, where $\theta$ ranges from $0$ to $\pi$.
   The differentials are:
   $$
   dx = -2\sin\theta \, d\theta, \quad dy = 2\cos\theta \, d\theta
   $$
   Also, $x^2+y^2 = 4$ and $-2xy = -2(2\cos\theta)(2\sin\theta) = -8\sin\theta\cos\theta$.
   Substitute into the integral:
   $$
   \int_{C_2} = \int_0^\pi \left[ 4(-2\sin\theta) - 8\sin\theta\cos\theta (2\cos\theta) \right] \, d\theta
   $$
   $$
   = \int_0^\pi \left( -8\sin\theta - 16\sin\theta\cos^2\theta \right) \, d\theta
   $$
   Using standard antiderivatives:
   $$
   = \left[ 8\cos\theta + \frac{16}{3}\cos^3\theta \right]_0^pi
   $$
   Evaluate at the limits:
   $$
   \text{At } \theta = \pi: \quad 8\cos\pi + \frac{16}{3}\cos^3\pi = -8 - \frac{16}{3} = -\frac{40}{3}
   $$
   $$
   \text{At } \theta = 0: \quad 8\cos 0 + \frac{16}{3}\cos^3 0 = 8 + \frac{16}{3} = \frac{40}{3}
   $$
   Subtract:
   $$
   -\frac{40}{3} - \frac{40}{3} = -\frac{80}{3}
   $$

The total line integral is:
$$
\oint_C = \int_{C_1} + \int_{C_2} = \frac{16}{3} - \frac{80}{3} = \boxed{-\frac{64}{3}}
$$

**(b) Green's Theorem Method:**
Here, $P(x,y) = x^2+y^2$ and $Q(x,y) = -2xy$.
The partial derivatives are:
$$
\frac{\partial Q}{\partial x} = \frac{\partial}{\partial x}(-2xy) = -2y
$$
$$
\frac{\partial P}{\partial y} = \frac{\partial}{\partial y}(x^2+y^2) = 2y
$$
By Green's Theorem:
$$
\oint_C P\,dx + Q\,dy = \iint_D \left( \frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y} \right) \, dA = \iint_D (-2y - 2y)\,dA = \iint_D -4y\,dA
$$
We evaluate the double integral using polar coordinates, where the upper half-disk $D$ is described by $0 \le r \le 2$ and $0 \le \theta \le \pi$:
$$
\iint_D -4y\,dA = \int_0^\pi \int_0^2 -4(r\sin\theta)r\,dr\,d\theta = \int_0^\pi -4\sin\theta \, d\theta \int_0^2 r^2 \, dr
$$
$$
= \left[ 4\cos\theta \right]_0^\pi \cdot \left[ \frac{r^3}{3} \right]_0^2 = (4\cos\pi - 4\cos 0) \left( \frac{8}{3} \right) = (-4 - 4) \left( \frac{8}{3} \right) = -8 \left( \frac{8}{3} \right) = \boxed{-\frac{64}{3}}
$$
Both methods yield the identical result.

---

### Problem 28
**Evaluate the closed line integral:**
$$ \oint_C (x^2+y^2)\,dx - 2xy\,dy $$
**where $C$ is the boundary of the region between $y=x^2$ and $y=\sqrt{x}$.**

![Figure 5.12](../../extracted_figures/figure_5_12.png)

**Solution:**

**(a) Direct Integration Method:**
The boundary $C$ consists of two curves: $C_1$, the parabolic arc $y = x^2$ from $(0,0)$ to $(1,1)$, and $C_2$, the arc $y = \sqrt{x}$ from $(1,1)$ to $(0,0)$.

1. **Along $C_1$ ($y=x^2$ from $x=0$ to $x=1$):**
   $y=x^2 \implies dy = 2x\,dx$.
   $$
   \int_{C_1} (x^2+y^2)\,dx - 2xy\,dy = \int_0^1 \left( x^2 + (x^2)^2 \right)\,dx - 2x(x^2)(2x)\,dx
   $$
   $$
   = \int_0^1 (x^2 + x^4 - 4x^4)\,dx = \int_0^1 (x^2 - 3x^4)\,dx = \left[ \frac{x^3}{3} - \frac{3x^5}{5} \right]_0^1
   $$
   $$
   = \frac{1}{3} - \frac{3}{5} = \frac{5 - 9}{15} = -\frac{4}{15}
   $$

2. **Along $C_2$ ($y=\sqrt{x}$ from $x=1$ to $x=0$):**
   We parameterize with $x=t, \, y=\sqrt{t}$ for $t$ from $1$ to $0$.
   $dx = dt, \, dy = \frac{1}{2\sqrt{t}}\,dt$.
   $$
   \int_{C_2} = \int_1^0 (t^2+t)\,dt - 2t(\sqrt{t})\left(\frac{1}{2\sqrt{t}}\,dt\right) = \int_1^0 (t^2+t - t)\,dt = \int_1^0 t^2\,dt
   $$
   $$
   = \left[ \frac{t^3}{3} \right]_1^0 = 0 - \frac{1}{3} = -\frac{1}{3}
   $$

The total line integral is:
$$
\oint_C = \int_{C_1} + \int_{C_2} = -\frac{4}{15} - \frac{1}{3} = -\frac{4}{15} - \frac{5}{15} = \boxed{-\frac{3}{5}}
$$

**(b) Green's Theorem Method:**
Using $P = x^2+y^2$ and $Q = -2xy$:
$$
\frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y} = -2y - 2y = -4y
$$
By Green's Theorem:
$$
\oint_C P\,dx + Q\,dy = \iint_D -4y\,dA
$$
The region $D$ is bounded by $x^2 \le y \le \sqrt{x}$ for $0 \le x \le 1$:
$$
\iint_D -4y\,dA = \int_0^1 \int_{x^2}^{\sqrt{x}} -4y \, dy \, dx = \int_0^1 \left[ -2y^2 \right]_{x^2}^{\sqrt{x}} \, dx
$$
$$
= \int_0^1 \left( -2(\sqrt{x})^2 - (-2(x^2)^2) \right) \, dx = \int_0^1 (-2x + 2x^4) \, dx
$$
$$
= \left[ -x^2 + \frac{2x^5}{5} \right]_0^1 = -1 + \frac{2}{5} = \boxed{-\frac{3}{5}}
$$
Both methods yield the identical result.

---

### Problem 29
**Evaluate the closed line integral:**
$$ \oint_C x^2y^3\,dx - xy^2\,dy $$
**where $C$ is the rectangle with vertices $(\pm 1, \pm 1)$.**

![Figure 5.13](../../extracted_figures/figure_5_13.png)

**Solution:**

**(a) Direct Integration Method:**
The boundary $C$ consists of 4 straight segments:
1. $C_1$: bottom side, $y = -1, \, dy = 0$ for $x$ from $-1$ to $1$.
   $$
   \int_{C_1} = \int_{-1}^1 x^2(-1)^3 \, dx = -\int_{-1}^1 x^2 \, dx = -\left[ \frac{x^3}{3} \right]_{-1}^1 = -\frac{2}{3}
   $$
2. $C_2$: right side, $x = 1, \, dx = 0$ for $y$ from $-1$ to $1$.
   $$
   \int_{C_2} = \int_{-1}^1 -1(y^2)\,dy = -\left[ \frac{y^3}{3} \right]_{-1}^1 = -\frac{2}{3}
   $$
3. $C_3$: top side, $y = 1, \, dy = 0$ for $x$ from $1$ to $-1$.
   $$
   \int_{C_3} = \int_1^{-1} x^2(1)^3\,dx = -\int_{-1}^1 x^2\,dx = -\frac{2}{3}
   $$
4. $C_4$: left side, $x = -1, \, dx = 0$ for $y$ from $1$ to $-1$.
   $$
   \int_{C_4} = \int_1^{-1} -(-1)y^2\,dy = \int_1^{-1} y^2\,dy = -\int_{-1}^1 y^2\,dy = -\frac{2}{3}
   $$

Summing the 4 segments:
$$
\oint_C = -\frac{2}{3} - \frac{2}{3} - \frac{2}{3} - \frac{2}{3} = \boxed{-\frac{8}{3}}
$$

**(b) Green's Theorem Method:**
Here, $P(x,y) = x^2y^3$ and $Q(x,y) = -xy^2$.
$$
\frac{\partial Q}{\partial x} = \frac{\partial}{\partial x}(-xy^2) = -y^2
$$
$$
\frac{\partial P}{\partial y} = \frac{\partial}{\partial y}(x^2y^3) = 3x^2y^2
$$
By Green's Theorem:
$$
\oint_C P\,dx + Q\,dy = \iint_D \left( -y^2 - 3x^2y^2 \right) \, dA
$$
The region $D$ is $[-1, 1] \times [-1, 1]$:
$$
\int_{-1}^1 \int_{-1}^1 -y^2(1 + 3x^2) \, dx \, dy = \int_{-1}^1 -y^2 \, dy \cdot \int_{-1}^1 (1 + 3x^2) \, dx
$$
$$
= \left[ -\frac{y^3}{3} \right]_{-1}^1 \cdot \left[ x + x^3 \right]_{-1}^1 = \left( -\frac{2}{3} \right) \cdot \left( 2 - (-2) \right) = \left( -\frac{2}{3} \right)(4) = \boxed{-\frac{8}{3}}
$$
Both methods yield the identical result.

---

### Problem 30
**Evaluate the closed line integral:**
$$ \oint_C x^2y^3\,dx - xy^2\,dy $$
**where $C$ is the boundary of the region bounded by $y=x^2, \, x=0, \, y=4$ in the first quadrant.**

![Figure 5.14](../../extracted_figures/figure_5_14.png)

**Solution:**

**(a) Direct Integration Method:**
The boundary $C$ consists of:
1. $C_1$: along the parabola $y = x^2$ from $(0,0)$ to $(2,4)$.
   $y = x^2 \implies dy = 2x\,dx$ for $x$ from $0$ to $2$.
   $$
   \int_{C_1} x^2(x^2)^3 \, dx - x(x^2)^2 (2x\,dx) = \int_0^2 (x^8 - 2x^6)\,dx = \left[ \frac{x^9}{9} - \frac{2x^7}{7} \right]_0^2
   $$
   $$
   = \frac{512}{9} - \frac{256}{7} = \frac{3584 - 2304}{63} = \frac{1280}{63}
   $$
2. $C_2$: horizontal segment $y = 4, \, dy = 0$ from $x=2$ to $x=0$.
   $$
   \int_{C_2} x^2 (4^3)\,dx - 0 = 64 \int_2^0 x^2\,dx = 64 \left[ \frac{x^3}{3} \right]_2^0 = 64\left(0 - \frac{8}{3}\right) = -\frac{512}{3} = -\frac{10752}{63}
   $$
3. $C_3$: vertical segment $x=0, \, dx = 0$ from $y=4$ to $y=0$.
   $$
   \int_{C_3} 0\,dx - 0\,dy = 0
   $$

Summing the segments:
$$
\oint_C = \frac{1280}{63} - \frac{10752}{63} = \boxed{-\frac{9472}{63}}
$$

**(b) Green's Theorem Method:**
Here, $P(x,y) = x^2y^3$ and $Q(x,y) = -xy^2$.
$$
\frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y} = -y^2(1+3x^2)
$$
By Green's Theorem:
$$
\oint_C P\,dx + Q\,dy = \iint_D -y^2(1+3x^2)\,dA
$$
The region $D$ is bounded by $x^2 \le y \le 4$ for $0 \le x \le 2$:
$$
\iint_D -y^2(1+3x^2)\,dA = \int_0^2 \int_{x^2}^4 -y^2(1+3x^2) \, dy \, dx
$$
$$
= \int_0^2 (1+3x^2) \left[ -\frac{y^3}{3} \right]_{x^2}^4 \, dx = \int_0^2 (1+3x^2) \left( -\frac{64}{3} + \frac{x^6}{3} \right) \, dx
$$
$$
= \frac{1}{3} \int_0^2 (1+3x^2)(x^6 - 64) \, dx = \frac{1}{3} \int_0^2 (3x^8 + x^6 - 192x^2 - 64) \, dx
$$
$$
= \frac{1}{3} \left[ \frac{3x^9}{9} + \frac{x^7}{7} - 64x^3 - 64x \right]_0^2 = \frac{1}{3} \left[ \frac{x^9}{3} + \frac{x^7}{7} - 64x^3 - 64x \right]_0^2
$$
Substitute $x=2$:
$$
= \frac{1}{3} \left( \frac{512}{3} + \frac{128}{7} - 512 - 128 \right) = \frac{1}{3} \left( \frac{512}{3} + \frac{128}{7} - 640 \right)
$$
Finding a common denominator of 21:
$$
\frac{512 \times 7 + 128 \times 3 - 640 \times 21}{21} = \frac{3584 + 384 - 13440}{21} = \frac{-9472}{21}
$$
So the final integral is:
$$
\frac{1}{3} \left( \frac{-9472}{21} \right) = \boxed{-\frac{9472}{63}}
$$
Both methods yield the identical result.

---

## Focus on Concepts

### Problem 31
**Evaluate the line integral with respect to arc length:**
$$ \oint_C (x^2 - y^2) \, ds $$
**where $C$ is the circle $x^2 + y^2 = 25$.**

**Solution:**
We parameterize the circle $C$ of radius 5:
$$
x = 5\cos t, \quad y = 5\sin t, \quad 0 \le t \le 2\pi
$$
The arc length differential:
$$
ds = \sqrt{(-5\sin t)^2 + (5\cos t)^2}\,dt = 5\,dt
$$
Substitute into the integrand:
$$
x^2 - y^2 = 25\cos^2 t - 25\sin^2 t = 25\cos(2t)
$$
The line integral becomes:
$$
\oint_C (x^2-y^2)\,ds = \int_0^{2\pi} 25\cos(2t) (5\,dt) = 125 \int_0^{2\pi} \cos(2t)\,dt = 125 \left[ \frac{1}{2}\sin(2t) \right]_0^{2\pi}
$$
$$
= \frac{125}{2}(\sin 4\pi - \sin 0) = \boxed{0}
$$

---

### Problem 32
**Evaluate the line integral:**
$$ \int_{-C} y\,dx - x\,dy $$
**where $C$ is the ellipse $x = 2\cos t, \, y = 3\sin t, \, 0 \le t \le \pi$.**

**Solution:**
First, evaluate the integral along $C$:
$$
x = 2\cos t \implies dx = -2\sin t \, dt
$$
$$
y = 3\sin t \implies dy = 3\cos t \, dt
$$
Substitute:
$$
\int_C y\,dx - x\,dy = \int_0^\pi (3\sin t)(-2\sin t \, dt) - (2\cos t)(3\cos t \, dt)
$$
$$
= \int_0^\pi (-6\sin^2 t - 6\cos^2 t)\,dt = \int_0^\pi -6(\sin^2 t + \cos^2 t)\,dt = \int_0^\pi -6\,dt = \boxed{-6\pi}
$$
Since $-C$ is the opposite orientation of $C$:
$$
\int_{-C} y\,dx - x\,dy = -\int_C y\,dx - x\,dy = -(-6\pi) = \boxed{6\pi}
$$

---

### Problem 33
**Verify that the line integral $\int_C y^2 \, dx + xy \, dy$ has the same value on all three given parameterizations of the path $C$ from $(1,2)$ to $(3,6)$:**
1. **$C_1$: $x = 2t+1, \, y = 4t+2, \, 0 \le t \le 1$**
2. **$C_2$: $x = t^2, \, y = 2t^2, \, 1 \le t \le \sqrt{3}$**
3. **$C_3$: $x = \ln t, \, y = 2\ln t, \, e \le t \le e^3$**

**Solution:**

1. **Along $C_1$:**
   $x = 2t+1 \implies dx = 2\,dt$ and $y = 4t+2 \implies dy = 4\,dt$.
   $$
   \int_{C_1} y^2 \, dx + xy \, dy = \int_0^1 (4t+2)^2 (2\,dt) + (2t+1)(4t+2)(4\,dt)
   $$
   $$
   = \int_0^1 2(16t^2 + 16t + 4)\,dt + 4(8t^2 + 8t + 2)\,dt
   $$
   $$
   = \int_0^1 (32t^2 + 32t + 8 + 32t^2 + 32t + 8)\,dt = \int_0^1 (64t^2 + 64t + 16)\,dt
   $$
   $$
   = \left[ \frac{64t^3}{3} + 32t^2 + 16t \right]_0^1 = \frac{64}{3} + 32 + 16 = \frac{64}{3} + 48 = \frac{64 + 144}{3} = \boxed{\frac{208}{3}}
   $$

2. **Along $C_2$:**
   $x = t^2 \implies dx = 2t\,dt$ and $y = 2t^2 \implies dy = 4t\,dt$.
   $$
   \int_{C_2} y^2 \, dx + xy \, dy = \int_1^{\sqrt{3}} (2t^2)^2 (2t\,dt) + (t^2)(2t^2)(4t\,dt)
   $$
   $$
   = \int_1^{\sqrt{3}} (4t^4)(2t)\,dt + (2t^4)(4t)\,dt = \int_1^{\sqrt{3}} (8t^5 + 8t^5)\,dt = \int_1^{\sqrt{3}} 16t^5 \, dt
   $$
   $$
   = \left[ \frac{16t^6}{6} \right]_1^{\sqrt{3}} = \left[ \frac{8t^6}{3} \right]_1^{\sqrt{3}} = \frac{8}{3}\left( (\sqrt{3})^6 - 1^6 \right) = \frac{8}{3}(27 - 1) = \frac{8(26)}{3} = \boxed{\frac{208}{3}}
   $$

3. **Along $C_3$:**
   $x = \ln t \implies dx = \frac{1}{t}\,dt$ and $y = 2\ln t \implies dy = \frac{2}{t}\,dt$.
   $$
   \int_{C_3} y^2 \, dx + xy \, dy = \int_e^{e^3} (2\ln t)^2 \left(\frac{1}{t}\,dt\right) + (\ln t)(2\ln t)\left(\frac{2}{t}\,dt\right)
   $$
   $$
   = \int_e^{e^3} \frac{4\ln^2 t}{t}\,dt + \frac{4\ln^2 t}{t}\,dt = \int_e^{e^3} \frac{8\ln^2 t}{t}\,dt
   $$
   Let $u = \ln t \implies du = \frac{1}{t}\,dt$.
   - $t=e \implies u=1$
   - $t=e^3 \implies u=3$
   $$
   8 \int_1^3 u^2 \, du = 8 \left[ \frac{u^3}{3} \right]_1^3 = 8\left( 9 - \frac{1}{3} \right) = 8\left( \frac{26}{3} \right) = \boxed{\frac{208}{3}}
   $$
   All three parameterizations yield the identical value of $208/3$, verifying parameterization independence.

---

### Problem 34
**Compare the line integrals of $G(x,y)=x^2+y^2$ on the following paths with respect to arc length:**
1. **$C_1$: $y = 2x$ from $(0,0)$ to $(1,2)$**
2. **$C_2$: $y = x^2$ from $(0,0)$ to $(1,1)$**
3. **$C_3$: $x = t, \, y = 2t$ for $0 \le t \le 1$**

**Solution:**

* **Comparison between $C_1$ and $C_3$:**
  Note that $C_1$ and $C_3$ represent the exact same line segment $y = 2x$ from $x=0$ to $x=1$ (or $t=0$ to $1$). Thus, they describe the same geometric path in the same direction. By parameterization independence, the line integrals with respect to arc length are equal:
  $$
  \int_{C_1} G \, ds = \int_{C_3} G \, ds = \int_0^1 (t^2 + 4t^2) \sqrt{1 + 4} \, dt = \sqrt{5} \int_0^1 5t^2 \, dt = \sqrt{5} \left[ \frac{5t^3}{3} \right]_0^1 = \frac{5\sqrt{5}}{3} \approx 3.73
  $$

* **Comparison with $C_2$:**
  The curve $C_2$ is a different geometric path (parabolic curve $y=x^2$ instead of straight line segment $y=2x$). The line integral with respect to arc length is path-dependent, so we expect a different value. Indeed, let's compute it:
  $$
  x = t, \, y = t^2 \implies ds = \sqrt{1 + 4t^2}\,dt \quad \text{for } 0 \le t \le 1
  $$
  $$
  \int_{C_2} (x^2+y^2)\,ds = \int_0^1 (t^2+t^4)\sqrt{1+4t^2}\,dt \approx 0.96
  $$
  Since the path is different, the values are different.

---

### Problem 35
**If $\rho(x,y)$ is the density of a wire (mass per unit length), then the mass of the wire is $m = \int_C \rho(x, y) \, ds$. Find the mass of a wire having the shape of a semicircle $x = 1 + \cos t, \, y = \sin t, \, 0 \le t \le \pi$, if the density at a point $P$ is directly proportional to the distance from the $y$-axis.**

**Solution:**
The shape of the wire is:
$$
x = 1 + \cos t, \quad y = \sin t, \quad 0 \le t \le \pi
$$
The differential:
$$
ds = \sqrt{(-\sin t)^2 + (\cos t)^2}\,dt = 1\,dt
$$
The distance from a point $P(x,y)$ to the y-axis is $|x|$. Since $x = 1+\cos t \ge 0$ for $t \in [0, \pi]$, the density is:
$$
\rho(x,y) = k x = k(1+\cos t)
$$
where $k > 0$ is the constant of proportionality.
Now, compute the mass $m$:
$$
m = \int_C \rho \, ds = \int_0^\pi k(1+\cos t) (1 \, dt) = k \left[ t + \sin t \right]_0^\pi = k(\pi + 0 - 0) = \boxed{k\pi}
$$

---

### Problem 36
**The coordinates of the center of mass of a wire with variable density are given by $\bar{x} = M_y/m$ and $\bar{y} = M_x/m$ where $M_x = \int_C y\rho\,ds$ and $M_y = \int_C x\rho\,ds$. Find the center of mass of the wire in Problem 35.**

**Solution:**

We compute the first moments:
1. **Moment with respect to the y-axis $M_y$:**
   $$
   M_y = \int_C x\rho\,ds = \int_0^\pi (1+\cos t) [k(1+\cos t)] (1\,dt) = k \int_0^\pi (1 + 2\cos t + \cos^2 t)\,dt
   $$
   Since $\int_0^\pi \cos t\,dt = 0$ and $\int_0^\pi \cos^2 t\,dt = \frac{\pi}{2}$:
   $$
   M_y = k \left( \pi + 2(0) + \frac{\pi}{2} \right) = \frac{3}{2}k\pi
   $$
   The x-coordinate of the center of mass:
   $$
   \bar{x} = \frac{M_y}{m} = \frac{\frac{3}{2}k\pi}{k\pi} = \boxed{\frac{3}{2}}
   $$

2. **Moment with respect to the x-axis $M_x$:**
   $$
   M_x = \int_C y\rho\,ds = \int_0^\pi (\sin t) [k(1+\cos t)] (1\,dt) = k \int_0^\pi (\sin t + \sin t \cos t)\,dt
   $$
   $$
   = k \left[ -\cos t - \frac{\cos^2 t}{2} \right]_0^\pi = k \left[ \left( -\cos\pi - \frac{\cos^2\pi}{2} \right) - \left( -\cos 0 - \frac{\cos^2 0}{2} \right) \right]
   $$
   $$
   = k \left[ \left( 1 - \frac{1}{2} \right) - \left( -1 - \frac{1}{2} \right) \right] = k \left[ \frac{1}{2} - \left( -\frac{3}{2} \right) \right] = k \left( \frac{1}{2} + \frac{3}{2} \right) = 2k
   $$
   The y-coordinate of the center of mass:
   $$
   \bar{y} = \frac{M_x}{m} = \frac{2k}{k\pi} = \boxed{\frac{2}{\pi}}
   $$

The center of mass of the wire is:
$$
(\bar{x}, \bar{y}) = \boxed{\left( \frac{3}{2}, \frac{2}{\pi} \right)}
$$
