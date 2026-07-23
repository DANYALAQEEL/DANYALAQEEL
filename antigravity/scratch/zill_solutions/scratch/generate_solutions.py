import os

def create_section_4_1():
    content = """# Complex Analysis — Dennis G. Zill, 2nd Edition
## Chapter 4 · Section 4.1 — Exponential and Logarithmic Functions
### Problems 1 – 66 · Complete Solutions

---

> **Key Concepts of Complex Exponential and Logarithmic Functions**
>
> 1. **Complex Exponential Function:** For $z = x + iy$, the complex exponential is:
>    $$
>    e^z = e^x(\\cos y + i\\sin y)
>    $$
>    It is an entire function with derivative $\\frac{d}{dz}(e^z) = e^z$. It is periodic with period $2\\pi i$.
>
>    ![Figure 4.1](../../extracted_figures/figure_4_1.png)
>
> 2. **Complex Logarithm:** For $z \\ne 0$, the multiple-valued logarithm is:
>    $$
>    \\ln z = \\log_e |z| + i(\\arg z) = \\log_e |z| + i(\\operatorname{Arg} z + 2n\\pi), \\quad n \\in \\mathbb{Z}
>    $$
>
>    ![Figure 4.5](../../extracted_figures/figure_4_5.png)
>
> 3. **Principal Branch:** The single-valued principal value of the logarithm is:
>    $$
>    \\operatorname{Ln} z = \\log_e |z| + i\\operatorname{Arg} z, \\quad -\\pi < \\operatorname{Arg} z \\le \\pi
>    $$
>    It is analytic in the domain $|z| > 0$, $-\\pi < \\arg(z) < \\pi$, with derivative $\\frac{d}{dz}(\\operatorname{Ln} z) = \\frac{1}{z}$.

---

## 4.1.1 Complex Exponential Function

### Problems 1 – 4: Derivatives

#### Problem 1
**Find the derivative $f'(z)$ of the function $f(z) = z^2 e^{z+i}$.**

**Solution:**
We use the product rule of differentiation:
$$
f'(z) = \\frac{d}{dz}(z^2) e^{z+i} + z^2 \\frac{d}{dz}(e^{z+i})
$$
Applying the derivative of $z^2$ and the chain rule for $e^{z+i}$ (since $\\frac{d}{dz}(z+i) = 1$):
$$
f'(z) = 2z e^{z+i} + z^2 e^{z+i}
$$
Factoring out the common exponential term $e^{z+i}$:
$$
f'(z) = \\boxed{z(z+2) e^{z+i}}
$$

#### Problem 2
**Find the derivative $f'(z)$ of the function $f(z) = \\frac{3e^{2z} - i e^{-z}}{z^3 - 1 + i}$.**

**Solution:**
We apply the quotient rule:
$$
\\left(\\frac{u}{v}\\right)' = \\frac{u'v - uv'}{v^2}
$$
Let $u = 3e^{2z} - i e^{-z}$ and $v = z^3 - 1 + i$. Their derivatives are:
$$
u' = 6e^{2z} + i e^{-z}
$$
$$
v' = 3z^2
$$
Substituting these into the quotient rule:
$$
f'(z) = \\boxed{\\frac{(6e^{2z} + i e^{-z})(z^3 - 1 + i) - 3z^2(3e^{2z} - i e^{-z})}{(z^3 - 1 + i)^2}}
$$

#### Problem 3
**Find the derivative $f'(z)$ of the function $f(z) = e^{iz} - e^{-iz}$.**

**Solution:**
Applying the chain rule to each exponential term:
$$
\\frac{d}{dz}(e^{iz}) = i e^{iz} \\quad \\text{and} \\quad \\frac{d}{dz}(e^{-iz}) = -i e^{-iz}
$$
Therefore:
$$
f'(z) = i e^{iz} - (-i e^{-iz}) = \\boxed{i(e^{iz} + e^{-iz})}
$$

#### Problem 4
**Find the derivative $f'(z)$ of the function $f(z) = i e^{1/z}$.**

**Solution:**
Applying the chain rule, where the derivative of the exponent $1/z = z^{-1}$ is $-z^{-2} = -\\frac{1}{z^2}$:
$$
f'(z) = i e^{1/z} \\cdot \\left(-\\frac{1}{z^2}\\right) = \\boxed{-\\frac{i e^{1/z}}{z^2}}
$$

---

### Problems 5 – 8: Expressions in terms of $x$ and $y$

#### Problem 5
**Write the expression $|e^{z^2-z}|$ in terms of $x$ and $y$.**

**Solution:**
Let $z = x + iy$. We first expand the exponent $z^2 - z$:
$$
z^2 - z = (x+iy)^2 - (x+iy) = x^2 - y^2 + 2ixy - x - iy = (x^2 - y^2 - x) + i(2xy - y)
$$
Using the property of the complex exponential function $|e^{u+iv}| = e^u$:
$$
|e^{z^2-z}| = e^{\\operatorname{Re}(z^2-z)} = \\boxed{e^{x^2 - x - y^2}}
$$

#### Problem 6
**Write the expression $\\arg(e^{z-i/z})$ in terms of $x$ and $y$.**

**Solution:**
Let $z = x + iy$. We expand the exponent $z - \\frac{i}{z}$:
$$
\\frac{i}{z} = \\frac{i(x-iy)}{x^2+y^2} = \\frac{y + ix}{x^2+y^2}
$$
Subtracting this from $z$:
$$
z - \\frac{i}{z} = x + iy - \\left(\\frac{y + ix}{x^2+y^2}\\right) = \\left(x - \\frac{y}{x^2+y^2}\\right) + i\\left(y - \\frac{x}{x^2+y^2}\\right)
$$
The argument of $e^w$ is $\\operatorname{Im}(w) + 2n\\pi$:
$$
\\arg(e^{z-i/z}) = \\boxed{y - \\frac{x}{x^2+y^2} + 2n\\pi}, \\quad n \\in \\mathbb{Z}
$$

#### Problem 7
**Write the expression $\\arg(e^{i(z+\\bar{z})})$ in terms of $x$ and $y$.**

**Solution:**
Recall that $z + \\bar{z} = 2x$. Substituting this into the exponent:
$$
i(z+\\bar{z}) = 2ix
$$
Since the exponent $2ix$ is purely imaginary, the modulus is $1$, and the argument is the coefficient of $i$ modulo $2\\pi$:
$$
\\arg(e^{2ix}) = \\boxed{2x + 2n\\pi}, \\quad n \\in \\mathbb{Z}
$$

#### Problem 8
**Write the expression $|i e^z + 1|$ in terms of $x$ and $y$.**

**Solution:**
Let $z = x + iy$. Then:
$$
i e^z + 1 = i e^x(\\cos y + i\\sin y) + 1 = i e^x\\cos y - e^x\\sin y + 1 = (1 - e^x\\sin y) + i e^x\\cos y
$$
Compute the modulus:
$$
|i e^z + 1| = \\sqrt{(1 - e^x\\sin y)^2 + (e^x\\cos y)^2} = \\sqrt{1 - 2e^x\\sin y + e^{2x}\\sin^2 y + e^{2x}\\cos^2 y}
$$
Since $\\sin^2 y + \\cos^2 y = 1$:
$$
|i e^z + 1| = \\boxed{\\sqrt{1 - 2e^x\\sin y + e^{2x}}}
$$

---

### Problems 9 – 12: Expressing in $u(x,y) + i v(x,y)$ Form

#### Problem 9
**Express the function $f(z) = e^{-iz}$ in standard form $u(x, y) + i v(x, y)$.**

**Solution:**
Substitute $z = x + iy$ into the exponent:
$$
-iz = -i(x+iy) = y - ix
$$
Now, expand using Euler's formula:
$$
e^{-iz} = e^{y - ix} = e^y(\\cos(-x) + i\\sin(-x)) = e^y\\cos x - i e^y\\sin x
$$
Thus:
$$
u(x,y) = e^y\\cos x, \\quad v(x,y) = -e^y\\sin x
$$
The standard form is:
$$
\\boxed{e^y\\cos x - i e^y\\sin x}
$$

#### Problem 10
**Express the function $f(z) = e^{2\\bar{z}+i}$ in standard form $u(x, y) + i v(x, y)$.**

**Solution:**
Substitute $\\bar{z} = x - iy$ into the exponent:
$$
2\\bar{z}+i = 2(x-iy)+i = 2x + i(1-2y)
$$
Apply Euler's formula:
$$
e^{2\\bar{z}+i} = e^{2x}(\\cos(1-2y) + i\\sin(1-2y)) = e^{2x}\\cos(1-2y) + i e^{2x}\\sin(1-2y)
$$
Thus:
$$
u(x,y) = e^{2x}\\cos(1-2y), \\quad v(x,y) = e^{2x}\\sin(1-2y)
$$
The standard form is:
$$
\\boxed{e^{2x}\\cos(1-2y) + i e^{2x}\\sin(1-2y)}
$$

#### Problem 11
**Express the function $f(z) = e^{z^2}$ in standard form $u(x, y) + i v(x, y)$.**

**Solution:**
Substitute $z^2 = x^2 - y^2 + 2ixy$:
$$
e^{z^2} = e^{x^2-y^2 + 2ixy} = e^{x^2-y^2}(\\cos(2xy) + i\\sin(2xy))
$$
Thus:
$$
u(x,y) = e^{x^2-y^2}\\cos(2xy), \\quad v(x,y) = e^{x^2-y^2}\\sin(2xy)
$$
The standard form is:
$$
\\boxed{e^{x^2-y^2}\\cos(2xy) + i e^{x^2-y^2}\\sin(2xy)}
$$

#### Problem 12
**Express the function $f(z) = e^{1/z}$ in standard form $u(x, y) + i v(x, y)$.**

**Solution:**
Substitute $1/z = \\frac{x-iy}{x^2+y^2}$:
$$
e^{1/z} = e^{\\frac{x}{x^2+y^2} - i\\frac{y}{x^2+y^2}} = e^{\\frac{x}{x^2+y^2}}\\left(\\cos\\left(\\frac{y}{x^2+y^2}\\right) - i\\sin\\left(\\frac{y}{x^2+y^2}\\right)\\right)
$$
Thus:
$$
u(x,y) = e^{\\frac{x}{x^2+y^2}}\\cos\\left(\\frac{y}{x^2+y^2}\\right), \\quad v(x,y) = -e^{\\frac{x}{x^2+y^2}}\\sin\\left(\\frac{y}{x^2+y^2}\\right)
$$
The standard form is:
$$
\\boxed{e^{\\frac{x}{x^2+y^2}}\\cos\\left(\\frac{y}{x^2+y^2}\\right) - i e^{\\frac{x}{x^2+y^2}}\\sin\\left(\\frac{y}{x^2+y^2}\\right)}
$$

---

### Problems 13 & 14: Domains of Differentiability

#### Problem 13
**Determine where the function $f(z) = e^{2\\bar{z}+i}$ is differentiable.**

**Solution:**
From Problem 10, the real and imaginary parts of $f(z)$ are:
$$
u = e^{2x}\\cos(1-2y), \\quad v = e^{2x}\\sin(1-2y)
$$
Let's calculate the partial derivatives:
$$
u_x = 2e^{2x}\\cos(1-2y), \\quad v_y = -2e^{2x}\\cos(1-2y)
$$
$$
u_y = 2e^{2x}\\sin(1-2y), \\quad v_x = 2e^{2x}\\sin(1-2y)
$$
The Cauchy-Riemann equations require:
1. $u_x = v_y \\implies 2e^{2x}\\cos(1-2y) = -2e^{2x}\\cos(1-2y) \\implies \\cos(1-2y) = 0$
2. $u_y = -v_x \\implies 2e^{2x}\\sin(1-2y) = -2e^{2x}\\sin(1-2y) \\implies \\sin(1-2y) = 0$

For the Cauchy-Riemann equations to hold, we would need both $\\cos(1-2y) = 0$ and $\\sin(1-2y) = 0$, which is impossible because $\\sin^2 \\theta + \\cos^2 \\theta = 1$.
Therefore, the function is **nowhere differentiable**.

#### Problem 14
**Determine where the function $f(z) = e^{z^2}$ is differentiable.**

**Solution:**
The function $f(z) = e^{z^2}$ is the composition of the entire functions $g(z) = z^2$ and $h(z) = e^z$.
Since both functions are differentiable everywhere, their composition is differentiable **everywhere** in the complex plane $\\mathbb{C}$.

---

### Problems 15 – 20: Images under Exponential Mapping $w = e^z$

#### Problem 15
**Find the image of the line $y = -2$ under the exponential mapping $w = e^z$.**

**Solution:**
For $z = x - 2i$, the exponential mapping gives:
$$
w = e^{x-2i} = e^x e^{-2i}
$$
Thus, the modulus of $w$ is $|w| = e^x > 0$ (since $x \\in \\mathbb{R}$) and the argument is $\\arg(w) = -2$.
This represents a ray.
The image is the ray $\\boxed{\\arg(w) = -2}$ emanating from the origin (with the origin $w=0$ excluded).

![Figure 4.2](../../extracted_figures/figure_4_2.png)
![Figure 4.3](../../extracted_figures/figure_4_3.png)

#### Problem 16
**Find the image of the line $x = 3$ under the exponential mapping $w = e^z$.**

**Solution:**
For $z = 3 + iy$, the exponential mapping gives:
$$
w = e^{3+iy} = e^3 e^{iy}
$$
Thus, the modulus is $|w| = e^3$ (constant) and the argument is $\\arg(w) = y$. As $y$ ranges over $(-\\infty, \\infty)$, the point traces the circle infinitely many times.
The image is the circle $\\boxed{|w| = e^3}$.

#### Problem 17
**Find the image of the infinite strip $1 < x \\le 2$ under the exponential mapping $w = e^z$.**

**Solution:**
Here, $x \\in (1, 2]$ and $y$ is unrestricted.
$$
|w| = e^x \\implies e^1 < |w| \\le e^2
$$
Since there is no restriction on $y$, the argument $\\arg(w)$ takes all values.
The image is the annulus $\\boxed{e < |w| \\le e^2}$.

#### Problem 18
**Find the image of the square with vertices at $0$, $1$, $1 + i$, and $i$ under the exponential mapping $w = e^z$.**

**Solution:**
The square is defined by $0 \\le x \\le 1$ and $0 \\le y \\le 1$.
Applying $w = e^z = e^x e^{iy}$:
- The modulus is $|w| = e^x \\implies 1 \\le |w| \\le e$.
- The argument is $\\arg(w) = y \\implies 0 \\le \\arg(w) \\le 1$ (radians).
The image is the polar region $\\boxed{1 \\le |w| \\le e, \\quad 0 \\le \\arg(w) \\le 1}$.

![Figure 4.4](../../extracted_figures/figure_4_4.png)

#### Problem 19
**Find the image of the rectangle $0 \\le x \\le \\log_e 2$, $-\\pi/4 \\le y \\le \\pi/2$ under the exponential mapping $w = e^z$.**

**Solution:**
- The modulus is $|w| = e^x \\implies e^0 \\le |w| \\le e^{\\log_e 2} \\implies 1 \\le |w| \\le 2$.
- The argument is $\\arg(w) = y \\implies -\\pi/4 \\le \\arg(w) \\le \\pi/2$.
The image is the annular sector $\\boxed{1 \\le |w| \\le 2, \\quad -\\pi/4 \\le \\arg(w) \\le \\pi/2}$.

#### Problem 20
**Find the image of the semi-infinite strip $-\\infty < x \\le 0$, $0 \\le y \\le \\pi$ under the exponential mapping $w = e^z$.**

**Solution:**
- The modulus is $|w| = e^x \\implies 0 < |w| \\le 1$ (since $e^x \\to 0$ as $x \\to -\\infty$).
- The argument is $\\arg(w) = y \\implies 0 \\le \\arg(w) \\le \\pi$.
The image is the upper half of the punctured unit disk $\\boxed{0 < |w| \\le 1, \\quad 0 \\le \\arg(w) \\le \\pi}$.

---

## 4.1.2 Complex Logarithmic Function

### Problems 21 – 26: All Values of $\\ln z$

We use the formula:
$$
\\ln z = \\log_e |z| + i(\\operatorname{Arg} z + 2n\\pi), \\quad n \\in \\mathbb{Z}
$$

#### Problem 21
**Find all complex values of $\\ln (-5)$.**

**Solution:**
The complex number is $z = -5$.
- Modulus $|z| = 5$.
- Principal argument $\\operatorname{Arg}(z) = \\pi$.
Substitute into the formula:
$$
\\ln (-5) = \\boxed{\\log_e 5 + i(2n+1)\\pi}, \\quad n \\in \\mathbb{Z}
$$

#### Problem 22
**Find all complex values of $\\ln (-e^i)$.**

**Solution:**
The complex number is $z = -e^i$. We can write this in polar form:
$$
z = -e^i = e^{i\\pi} e^i = e^{i(1+\pi)}
$$
- Modulus $|z| = 1 \\implies \\log_e |z| = 0$.
- An argument is $1 + \\pi$.
Substitute:
$$
\\ln (-e^i) = 0 + i(1 + \\pi + 2n\\pi) = \\boxed{i(1 + (2n+1)\\pi)}, \\quad n \\in \\mathbb{Z}
$$

#### Problem 23
**Find all complex values of $\\ln (-2 + 2i)$.**

**Solution:**
The complex number is $z = -2 + 2i$.
- Modulus $|z| = \\sqrt{(-2)^2 + 2^2} = \\sqrt{8} = 2^{3/2} \\implies \\log_e |z| = \\frac{3}{2}\\log_e 2$.
- The point is in the second quadrant, so $\\operatorname{Arg}(z) = \\pi - \\arctan(1) = 3\\pi/4$.
Substitute:
$$
\\ln (-2 + 2i) = \\frac{3}{2}\\log_e 2 + i\\left(\\frac{3\\pi}{4} + 2n\\pi\\right) = \\boxed{\\frac{3}{2}\\log_e 2 + i\\frac{8n+3}{4}\\pi}, \\quad n \\in \\mathbb{Z}
$$

#### Problem 24
**Find all complex values of $\\ln (1 + i)$.**

**Solution:**
The complex number is $z = 1 + i$.
- Modulus $|z| = \\sqrt{1^2 + 1^2} = \\sqrt{2} = 2^{1/2} \\implies \\log_e |z| = \\frac{1}{2}\\log_e 2$.
- The point is in the first quadrant, so $\\operatorname{Arg}(z) = \\pi/4$.
Substitute:
$$
\\ln (1 + i) = \\frac{1}{2}\\log_e 2 + i\\left(\\frac{\\pi}{4} + 2n\\pi\\right) = \\boxed{\\frac{1}{2}\\log_e 2 + i\\frac{8n+1}{4}\\pi}, \\quad n \\in \\mathbb{Z}
$$

#### Problem 25
**Find all complex values of $\\ln (\\sqrt{2} + \\sqrt{6}i)$.**

**Solution:**
The complex number is $z = \\sqrt{2} + \\sqrt{6}i$.
- Modulus $|z| = \\sqrt{2 + 6} = \\sqrt{8} = 2^{3/2} \\implies \\log_e |z| = \\frac{3}{2}\\log_e 2$.
- The point is in the first quadrant, so $\\operatorname{Arg}(z) = \\arctan(\\sqrt{6}/\\sqrt{2}) = \\arctan(\\sqrt{3}) = \\pi/3$.
Substitute:
$$
\\ln (\\sqrt{2} + \\sqrt{6}i) = \\frac{3}{2}\\log_e 2 + i\\left(\\frac{\\pi}{3} + 2n\\pi\\right) = \\boxed{\\frac{3}{2}\\log_e 2 + i\\frac{6n+1}{3}\\pi}, \\quad n \\in \\mathbb{Z}
$$

#### Problem 26
**Find all complex values of $\\ln (-\\sqrt{3} + i)$.**

**Solution:**
The complex number is $z = -\\sqrt{3} + i$.
- Modulus $|z| = \\sqrt{3 + 1} = 2 \\implies \\log_e |z| = \\log_e 2$.
- The point is in the second quadrant, so $\\operatorname{Arg}(z) = \\pi - \\arctan(1/\\sqrt{3}) = 5\\pi/6$.
Substitute:
$$
\\ln (-\\sqrt{3} + i) = \\log_e 2 + i\\left(\\frac{5\\pi}{6} + 2n\\pi\\right) = \\boxed{\\log_e 2 + i\\frac{12n+5}{6}\\pi}, \\quad n \\in \\mathbb{Z}
$$

---

### Problems 27 – 32: Principal Values $\\operatorname{Ln} z$

We use the formula:
$$
\\operatorname{Ln} z = \\log_e |z| + i\\operatorname{Arg} z, \\quad -\\pi < \\operatorname{Arg} z \\le \\pi
$$

#### Problem 27
**Write the principal value of $\\operatorname{Ln}(6 - 6i)$ in the form $a+ib$.**

**Solution:**
- Modulus $|z| = \\sqrt{36 + 36} = \\sqrt{72}$.
- The point is in the fourth quadrant, so $\\operatorname{Arg}(z) = -\\pi/4$.
Therefore:
$$
\\operatorname{Ln}(6 - 6i) = \\boxed{\\frac{1}{2}\\log_e 72 - \\frac{\\pi}{4}i}
$$

#### Problem 28
**Write the principal value of $\\operatorname{Ln}(-e^2)$ in the form $a+ib$.**

**Solution:**
- Modulus $|-e^2| = e^2 \\implies \\log_e|z| = 2$.
- The point lies on the negative real axis, so $\\operatorname{Arg}(z) = \\pi$.
Therefore:
$$
\\operatorname{Ln}(-e^2) = \\boxed{2 + \\pi i}
$$

#### Problem 29
**Write the principal value of $\\operatorname{Ln}(-12 + 5i)$ in the form $a+ib$.**

**Solution:**
- Modulus $|z| = \\sqrt{(-12)^2 + 5^2} = 13 \\implies \\log_e |z| = \\log_e 13 \\approx 2.5649$.
- The point is in the second quadrant, so $\\operatorname{Arg}(z) = \\pi - \\arctan(5/12) \\approx 2.7468$ rad.
Therefore:
$$
\\operatorname{Ln}(-12 + 5i) = \\log_e 13 + i(\\pi - \\arctan(5/12)) \\approx \\boxed{2.5650 + 2.7468i}
$$

#### Problem 30
**Write the principal value of $\\operatorname{Ln}(3 - 4i)$ in the form $a+ib$.**

**Solution:**
- Modulus $|z| = \\sqrt{3^2 + (-4)^2} = 5 \\implies \\log_e |z| = \\log_e 5 \\approx 1.6094$.
- The point is in the fourth quadrant, so $\\operatorname{Arg}(z) = -\\arctan(4/3) \\approx -0.9273$ rad.
Therefore:
$$
\\operatorname{Ln}(3 - 4i) = \\log_e 5 - i\\arctan(4/3) \\approx \\boxed{1.6094 - 0.9273i}
$$

#### Problem 31
**Write the principal value of $\\operatorname{Ln}((1 + \\sqrt{3}i)^5)$ in the form $a+ib$.**

**Solution:**
We first express $1+\\sqrt{3}i$ in polar form:
$$
1+\\sqrt{3}i = 2e^{i\\pi/3}
$$
Then raise to the 5th power:
$$
(1+\\sqrt{3}i)^5 = (2e^{i\\pi/3})^5 = 32e^{5i\\pi/3}
$$
The argument $5\\pi/3$ lies outside the principal range $(-\\pi, \\pi]$. We subtract $2\\pi$ to find the principal argument:
$$
\\frac{5\\pi}{3} - 2\\pi = -\\frac{\\pi}{3}
$$
Thus, the principal representation is $32e^{-i\\pi/3}$.
- Modulus $|z| = 32 \\implies \\log_e |z| = 5\\log_e 2$.
- Principal argument is $-\\pi/3$.
Therefore:
$$
\\operatorname{Ln}((1+\\sqrt{3}i)^5) = \\boxed{5\\log_e 2 - \\frac{\\pi}{3}i}
$$

#### Problem 32
**Write the principal value of $\\operatorname{Ln}((1 + i)^4)$ in the form $a+ib$.**

**Solution:**
Express $1+i$ in polar form:
$$
1+i = \\sqrt{2}e^{i\\pi/4}
$$
Raise to the 4th power:
$$
(1+i)^4 = (2^{1/2}e^{i\\pi/4})^4 = 4e^{i\\pi} = -4
$$
- Modulus $|-4| = 4 \\implies \\log_e |z| = \\log_e 4 = 2\\log_e 2$.
- Principal argument is $\\pi$.
Therefore:
$$
\\operatorname{Ln}((1+i)^4) = \\boxed{2\\log_e 2 + \\pi i}
$$

---

### Problems 33 – 36: Solving Equations

#### Problem 33
**Find all complex values of $z$ satisfying $e^z = 4i$.**

**Solution:**
We solve by taking the complex logarithm:
$$
z = \\ln(4i) = \\log_e |4i| + i(\\operatorname{Arg}(4i) + 2n\\pi)
$$
Since $|4i| = 4$ and $\\operatorname{Arg}(4i) = \\pi/2$:
$$
z = \\log_e 4 + i\\left(\\frac{\\pi}{2} + 2n\\pi\\right) = \\boxed{2\\log_e 2 + i\\frac{4n+1}{2}\\pi}, \\quad n \\in \\mathbb{Z}
$$

#### Problem 34
**Find all complex values of $z$ satisfying $e^{1/z} = -1$.**

**Solution:**
Take the logarithm of both sides:
$$
\\frac{1}{z} = \\ln(-1) = \\log_e |-1| + i(\\operatorname{Arg}(-1) + 2n\\pi) = 0 + i(\\pi + 2n\\pi) = i(2n+1)\\pi
$$
Now, take the reciprocal to solve for $z$:
$$
z = \\frac{1}{i(2n+1)\\pi} = \\boxed{-\\frac{i}{(2n+1)\\pi}}, \\quad n \\in \\mathbb{Z}
$$

#### Problem 35
**Find all complex values of $z$ satisfying $e^{z-1} = -ie^3$.**

**Solution:**
Write $-ie^3$ in exponential form:
$$
-ie^3 = e^3 e^{-i\\pi/2} = e^{3 - i\\pi/2}
$$
Equating the exponents modulo $2\\pi i$:
$$
z - 1 = 3 - i\\frac{\\pi}{2} + 2n\\pi i
$$
Solve for $z$:
$$
z = 4 + i\\left(2n\\pi - \\frac{\\pi}{2}\\right) = \\boxed{4 + i\\frac{4n-1}{2}\\pi}, \\quad n \\in \\mathbb{Z}
$$

#### Problem 36
**Find all complex values of $z$ satisfying $e^{2z} + e^z + 1 = 0$.**

**Solution:**
Let $w = e^z$. The equation becomes a quadratic:
$$
w^2 + w + 1 = 0
$$
Solve using the quadratic formula:
$$
w = \\frac{-1 \\pm i\\sqrt{3}}{2}
$$
These two roots correspond to the complex numbers:
$$
w_1 = e^{i2\\pi/3} \\quad \\text{and} \\quad w_2 = e^{-i2\\pi/3}
$$
Thus, we solve two equations:
1. $e^z = e^{i2\\pi/3} \\implies z = i\\left(\\frac{2\\pi}{3} + 2n\\pi\\right) = i\\frac{6n+2}{3}\\pi$
2. $e^z = e^{-i2\\pi/3} \\implies z = i\\left(-\\frac{2\\pi}{3} + 2n\\pi\\right) = i\\frac{6n-2}{3}\\pi$

Combining these, the solutions are:
$$
z = \\boxed{i\\frac{6n \\pm 2}{3}\\pi}, \\quad n \\in \\mathbb{Z}
$$

---

### Problems 37 – 40: Domains of Analyticity & Derivatives

#### Problem 37
**Find a domain in which the function $f(z) = 3z^2 - e^{2iz} + i\\operatorname{Ln} z$ is differentiable; then find the derivative $f'(z)$.**

**Solution:**
- The terms $3z^2$ and $e^{2iz}$ are entire functions, analytic in the entire complex plane $\\mathbb{C}$.
- The term $i\\operatorname{Ln} z$ is analytic in the cut complex plane $|z| > 0$, $-\\pi < \\arg(z) < \\pi$.
Therefore, $f(z)$ is analytic in the domain:
$$
\\boxed{|z| > 0, \\quad -\\pi < \\arg(z) < \\pi}
$$
The derivative is:
$$
f'(z) = \\boxed{6z - 2ie^{2iz} + \\frac{i}{z}}
$$

#### Problem 38
**Find a domain in which the function $f(z) = (z+1)\\operatorname{Ln} z$ is differentiable; then find the derivative $f'(z)$.**

**Solution:**
The polynomial $z+1$ is entire, and $\\operatorname{Ln} z$ is analytic in $|z| > 0$, $-\\pi < \\arg(z) < \\pi$.
The domain of differentiability is:
$$
\\boxed{|z| > 0, \\quad -\\pi < \\arg(z) < \\pi}
$$
Apply the product rule:
$$
f'(z) = 1 \\cdot \\operatorname{Ln} z + (z+1) \\cdot \\frac{1}{z} = \\boxed{\\operatorname{Ln} z + 1 + \\frac{1}{z}}
$$

#### Problem 39
**Find a domain in which the function $f(z) = \\frac{\\operatorname{Ln}(2z-i)}{z^2+1}$ is differentiable; then find the derivative $f'(z)$.**

**Solution:**
- The numerator $\\operatorname{Ln}(2z-i)$ is differentiable except where the argument of the logarithm is zero or lies on the negative real axis:
  $$
  2z - i = u \\le 0 \\implies 2(x+iy) - i = 2x + i(2y-1) \\le 0
  $$
  This requires the imaginary part to be zero and the real part to be nonpositive:
  $$
  2y - 1 = 0 \\implies y = 1/2 \\quad \\text{and} \\quad 2x \\le 0 \\implies x \\le 0
  $$
  So the branch cut is the ray $y = 1/2, x \\le 0$.
- The denominator $z^2 + 1$ is zero at $z = \\pm i$.
Therefore, the function is differentiable in the domain:
$$
\\boxed{\\text{All } z \\in \\mathbb{C} \\text{ excluding the ray } \\{z = x + iy \\mid x \\le 0, y = 1/2\\} \\text{ and the points } z = \\pm i}
$$
Applying the quotient rule:
$$
f'(z) = \\frac{\\frac{2}{2z-i}(z^2+1) - 2z\\operatorname{Ln}(2z-i)}{(z^2+1)^2} = \\boxed{\\frac{2(z^2+1) - 2z(2z-i)\\operatorname{Ln}(2z-i)}{(2z-i)(z^2+1)^2}}
$$

![Figure 4.7](../../extracted_figures/figure_4_7.png)

#### Problem 40
**Find a domain in which the function $f(z) = \\operatorname{Ln}(z^2+1)$ is differentiable; then find the derivative $f'(z)$.**

**Solution:**
The function $\\operatorname{Ln}(w)$ is analytic except on the branch cut $w = u \\le 0$. Here, $w = z^2 + 1$.
So, differentiability fails where:
$$
z^2 + 1 = u \\le 0 \\implies z^2 \\le -1
$$
This occurs when $z = iy$ is purely imaginary and:
$$
(iy)^2 \\le -1 \\implies -y^2 \\le -1 \\implies y^2 \\ge 1 \\implies |y| \\ge 1
$$
So the branch cuts are the rays on the imaginary axis $y \\ge 1$ and $y \\le -1$.
The domain of differentiability is:
$$
\\boxed{\\text{The complex plane excluding the rays } y \\ge 1 \\text{ and } y \\le -1 \\text{ on the imaginary axis}}
$$
Applying the chain rule:
$$
f'(z) = \\boxed{\\frac{2z}{z^2+1}}
$$

---

### Problems 41 – 46: Images under $w = \\operatorname{Ln} z$

We use $w = u+iv = \\log_e |z| + i\\operatorname{Arg} z$.

#### Problem 41
**Find the image of the ray $\\arg(z) = \\pi/6$ under the mapping $w = \\operatorname{Ln} z$.**

**Solution:**
For any point on the ray, $|z| > 0$ and $\\operatorname{Arg}(z) = \\pi/6$.
- $u = \\log_e |z| \\in (-\\infty, \\infty)$
- $v = \\pi/6$ (constant)
The image is the horizontal line $\\boxed{v = \\pi/6}$.

![Figure 4.8](../../extracted_figures/figure_4_8.png)

#### Problem 42
**Find the image of the positive y-axis under the mapping $w = \\operatorname{Ln} z$.**

**Solution:**
The positive y-axis is the ray $\\arg(z) = \\pi/2$.
- $u = \\log_e |z| \\in (-\\infty, \\infty)$
- $v = \\pi/2$
The image is the horizontal line $\\boxed{v = \\pi/2}$.

#### Problem 43
**Find the image of the circle $|z| = 4$ under the mapping $w = \\operatorname{Ln} z$.**

**Solution:**
For any point on the circle:
- $u = \\log_e 4 = 2\\log_e 2$ (constant)
- $v = \\operatorname{Arg}(z) \\in (-\\pi, \\pi]$
The image is the vertical line segment $\\boxed{u = 2\\log_e 2, \\quad -\\pi < v \\le \\pi}$.

#### Problem 44
**Find the image of the first quadrant region bounded by $|z|=1$ and $|z|=e$ under the mapping $w = \\operatorname{Ln} z$.**

**Solution:**
The region is defined by $1 \\le |z| \\le e$ and $0 \\le \\arg(z) \\le \\pi/2$.
- $u = \\log_e |z| \\implies 0 \\le u \\le 1$
- $v = \\operatorname{Arg}(z) \\implies 0 \\le v \\le \\pi/2$
The image is the rectangular region $\\boxed{0 \\le u \\le 1, \\quad 0 \\le v \\le \\pi/2}$.

#### Problem 45
**Find the image of the annulus $3 \\le |z| \\le 5$ under the mapping $w = \\operatorname{Ln} z$.**

**Solution:**
The annulus is defined by $3 \\le |z| \\le 5$ and $-\\pi < \\arg(z) \\le \\pi$.
- $u = \\log_e |z| \\implies \\log_e 3 \\le u \\le \\log_e 5$
- $v = \\operatorname{Arg}(z) \\implies -\\pi < v \\le \\pi$
The image is the rectangular region $\\boxed{\\log_e 3 \\le u \\le \\log_e 5, \\quad -\\pi < v \\le \\pi}$.

#### Problem 46
**Find the image of the region outside the unit circle $|z|=1$ and between the rays $\\arg(z)=\\pi/4$ and $\\arg(z)=3\\pi/4$ under the mapping $w = \\operatorname{Ln} z$.**

**Solution:**
The region is defined by $|z| > 1$ and $\\pi/4 \\le \\arg(z) \\le 3\\pi/4$.
- $u = \\log_e |z| > 0$
- $v = \\operatorname{Arg}(z) \\implies \\pi/4 \\le v \\le 3\\pi/4$
The image is the semi-infinite strip $\\boxed{u > 0, \\quad \\pi/4 \\le v \\le 3\\pi/4}$.

---

## Focus on Concepts

### Problem 47
**Use the definition of the complex exponential function to prove that $e^{z_1}/e^{z_2} = e^{z_1-z_2}$ for all complex numbers $z_1$ and $z_2$.**

**Solution:**
Let $z_1 = x_1 + i y_1$ and $z_2 = x_2 + i y_2$. By definition:
$$
e^{z_1} = e^{x_1}(\\cos y_1 + i\\sin y_1) \\quad \\text{and} \\quad e^{z_2} = e^{x_2}(\\cos y_2 + i\\sin y_2)
$$
Then:
$$
\\frac{e^{z_1}}{e^{z_2}} = \\frac{e^{x_1}(\\cos y_1 + i\\sin y_1)}{e^{x_2}(\\cos y_2 + i\\sin y_2)} = e^{x_1 - x_2} \\frac{\\cos y_1 + i\\sin y_1}{\\cos y_2 + i\\sin y_2}
$$
Multiply the numerator and denominator by the conjugate of the denominator, $\\cos y_2 - i\\sin y_2$:
$$
\\frac{\\cos y_1 + i\\sin y_1}{\\cos y_2 + i\\sin y_2} = \\frac{(\\cos y_1 + i\\sin y_1)(\\cos y_2 - i\\sin y_2)}{\\cos^2 y_2 + \\sin^2 y_2}
$$
$$
= (\\cos y_1\\cos y_2 + \\sin y_1\\sin y_2) + i(\\sin y_1\\cos y_2 - \\cos y_1\\sin y_2)
$$
Using trigonometric identities for cosine and sine differences:
$$
= \\cos(y_1 - y_2) + i\\sin(y_1 - y_2)
$$
Therefore:
$$
\\frac{e^{z_1}}{e^{z_2}} = e^{x_1 - x_2} [\\cos(y_1 - y_2) + i\\sin(y_1 - y_2)] = e^{(x_1-x_2) + i(y_1-y_2)} = e^{z_1-z_2}
$$

#### Problem 48
**Use the definition of the complex exponential function and de Moivre's formula to prove that $(e^{z_1})^n = e^{n z_1}$, where $n$ is an integer.**

**Solution:**
Let $z_1 = x_1 + i y_1$. Then:
$$
e^{z_1} = e^{x_1} e^{i y_1}
$$
Raising to the power $n$:
$$
(e^{z_1})^n = (e^{x_1} e^{i y_1})^n = (e^{x_1})^n (e^{i y_1})^n
$$
Using the properties of real exponentiation and de Moivre's theorem:
$$
(e^{x_1})^n = e^{n x_1} \\quad \\text{and} \\quad (e^{i y_1})^n = e^{i n y_1}
$$
Thus:
$$
(e^{z_1})^n = e^{n x_1} e^{i n y_1} = e^{n(x_1 + i y_1)} = e^{n z_1}
$$

#### Problem 49
**Determine where the complex function $e^{\\bar{z}}$ is analytic.**

**Solution:**
Let $f(z) = e^{\\bar{z}} = e^{x-iy} = e^x(\\cos(-y) + i\\sin(-y)) = e^x\\cos y - i e^x\\sin y$.
The real and imaginary parts are:
$$
u = e^x\\cos y, \\quad v = -e^x\\sin y
$$
Partial derivatives:
$$
u_x = e^x\\cos y, \\quad v_y = -e^x\\cos y
$$
$$
u_y = -e^x\\sin y, \\quad v_x = -e^x\\sin y
$$
Checking Cauchy-Riemann equations:
1. $u_x = v_y \\implies e^x\\cos y = -e^x\\cos y \\implies \\cos y = 0$
2. $u_y = -v_x \\implies -e^x\\sin y = e^x\\sin y \\implies \\sin y = 0$

Since $\\cos y$ and $\\sin y$ cannot be zero at the same time, the Cauchy-Riemann equations are never satisfied. Thus, the function is **nowhere analytic**.

#### Problem 50
**Prove that $e^z$ is the unique entire function satisfying the following conditions:**
- **(a) Show that if $f(z) = u(x,y) + iv(x,y)$ is an entire function with $f'(z) = f(z)$, then $u_x = u$ and $v_x = v$.**
- **(b) Show that $u(x,y) = a(y)e^x$ and $v(x,y) = b(y)e^x$ are solutions to these equations.**
- **(c) Explain why the assumption that $f(z)$ agrees with the real exponential function for $z$ real implies $a(0) = 1$ and $b(0) = 0$.**
- **(d) Explain why $a(y)$ and $b(y)$ satisfy the system $a(y) - b'(y) = 0, a'(y) + b(y) = 0$.**
- **(e) Solve this system subject to $a(0)=1, b(0)=0$.**
- **(f) Conclude that $f(z) = e^z$ is unique.**

**Solution:**
- **(a)** Since $f$ is entire, $f'(z) = u_x + i v_x$. The condition $f'(z) = f(z)$ gives $u_x + i v_x = u + i v$, which immediately yields the system $u_x = u$ and $v_x = v$.
- **(b)** Solving the differential equation $\\frac{\\partial u}{\\partial x} = u$ with respect to $x$ gives $u(x,y) = a(y) e^x$, where $a(y)$ is an arbitrary function of $y$. Similarly, $\\frac{\\partial v}{\\partial x} = v \\implies v(x,y) = b(y) e^x$.
- **(c)** When $z$ is real, $y = 0$. We are given $f(x) = e^x$, which means $u(x,0) + iv(x,0) = e^x \\implies u(x,0) = e^x$ and $v(x,0) = 0$. Substituting $y=0$ into the formulas from (b):
  $$
  a(0) e^x = e^x \\implies a(0) = 1 \\quad \\text{and} \\quad b(0) e^x = 0 \\implies b(0) = 0
  $$
- **(d)** Since $f(z)$ is analytic, it satisfies the Cauchy-Riemann equations:
  - $u_x = v_y \\implies a(y)e^x = b'(y)e^x \\implies a(y) - b'(y) = 0$
  - $u_y = -v_x \\implies a'(y)e^x = -b(y)e^x \\implies a'(y) + b(y) = 0$
- **(e)** From the second equation, $b(y) = -a'(y)$. Substituting this into the first equation:
  $$
  a(y) - (-a''(y)) = 0 \\implies a''(y) + a(y) = 0
  $$
  The general solution is $a(y) = C_1 \\cos y + C_2 \\sin y$.
  - $a(0) = 1 \\implies C_1 = 1$.
  - $a'(y) = -C_1 \\sin y + C_2 \\cos y \\implies a'(0) = C_2$.
  Since $b(y) = -a'(y)$, $b(0) = -a'(0) = -C_2 = 0 \\implies C_2 = 0$.
  Thus, $a(y) = \\cos y$ and $b(y) = -a'(y) = \\sin y$.
- **(f)** Substituting these back:
  $$
  f(z) = u + iv = e^x \\cos y + i e^x \\sin y = e^x(\\cos y + i\\sin y) = e^z
  $$
  This proves the uniqueness of $e^z$.

#### Problem 51
**Describe the image of the line $y = x$ under the exponential function.**

**Solution:**
For any point on the line $y = x$, we have $z = t + it$.
Using the exponential mapping:
$$
w = e^{t+it} = e^t e^{it}
$$
In polar coordinates $w = r e^{i\\theta}$:
$$
r = e^t \\quad \\text{and} \\quad \\theta = t
$$
Since $\\theta = t$, we can substitute $t = \\theta$ into the radius expression:
$$
r(\\theta) = e^\\theta
$$
This is the equation of a **logarithmic spiral**.

#### Problem 52
**Prove that $e^z$ is a one-to-one function on the fundamental region $-\\infty < x < \\infty$, $-\\pi < y \\le \\pi$.**

**Solution:**
Suppose $e^{z_1} = e^{z_2}$. This implies:
$$
e^{z_1 - z_2} = 1 \\implies z_1 - z_2 = 2k\\pi i, \\quad k \\in \\mathbb{Z}
$$
Let $z_1 = x_1 + i y_1$ and $z_2 = x_2 + i y_2$. Then:
$$
(x_1 - x_2) + i(y_1 - y_2) = 2k\\pi i \\implies x_1 = x_2 \\quad \\text{and} \\quad y_1 - y_2 = 2k\\pi
$$
Since $y_1, y_2 \\in (-\\pi, \\pi]$:
$$
-\\pi < y_1 \\le \\pi \\quad \\text{and} \\quad -\\pi < y_2 \\le \\pi \\implies -2\\pi < y_1 - y_2 < 2\\pi
$$
Within this range, the only multiple of $2\\pi$ is $0$.
Therefore, we must have $y_1 - y_2 = 0 \\implies y_1 = y_2$.
Combined with $x_1 = x_2$, we conclude that $z_1 = z_2$, proving that $e^z$ is one-to-one on the fundamental region.

#### Problem 53
**Prove that $\\ln(z_1/z_2) = \\ln z_1 - \\ln z_2$ for all nonzero complex numbers $z_1$ and $z_2$ (as sets of values).**

**Solution:**
By definition of the multiple-valued logarithm:
$$
\\ln(z_1/z_2) = \\log_e |z_1/z_2| + i \\arg(z_1/z_2)
$$
Using real logarithm and complex argument properties:
$$
\\log_e |z_1/z_2| = \\log_e(|z_1|/|z_2|) = \\log_e |z_1| - \\log_e |z_2|
$$
$$
\\arg(z_1/z_2) = \\arg z_1 - \\arg z_2 \\pmod{2\\pi}
$$
Thus:
$$
\\ln(z_1/z_2) = (\\log_e |z_1| - \\log_e |z_2|) + i(\\arg z_1 - \\arg z_2 + 2k\\pi)
$$
$$
= (\\log_e |z_1| + i\\arg z_1) - (\\log_e |z_2| + i\\arg z_2) = \\ln z_1 - \\ln z_2
$$
Since the arguments are multiple-valued sets, the equality holds as sets.

#### Problem 54
**Prove that $\\ln z^n = n\\ln z$ for all nonzero complex numbers $z$ and all integers $n$ (as sets of values).**

**Solution:**
By definition:
$$
\\ln z^n = \\log_e |z^n| + i\\arg(z^n)
$$
Using properties of real logarithms and complex arguments:
$$
\\log_e |z^n| = \\log_e |z|^n = n\\log_e |z|
$$
$$
\\arg(z^n) = n\\arg z \\pmod{2\\pi}
$$
Thus:
$$
\\ln z^n = n\\log_e |z| + i(n\\arg z + 2k\\pi) = n(\\log_e |z| + i\\arg z) = n\\ln z
$$
The equality holds as sets of values.

#### Problem 55
**Analyze the relation $\\operatorname{Ln}(z_1 z_2) = \\operatorname{Ln} z_1 + \\operatorname{Ln} z_2$:**
- **(a) Find two complex numbers $z_1, z_2$ such that $\\operatorname{Ln}(z_1 z_2) \\ne \\operatorname{Ln} z_1 + \\operatorname{Ln} z_2$.**
- **(b) Find two complex numbers $z_1, z_2$ such that $\\operatorname{Ln}(z_1 z_2) = \\operatorname{Ln} z_1 + \\operatorname{Ln} z_2$.**
- **(c) What must be true about $z_1, z_2$ for the identity to hold?**

**Solution:**
- **(a)** Let $z_1 = -1$ and $z_2 = -1$.
  - $\\operatorname{Ln}(z_1 z_2) = \\operatorname{Ln}(1) = 0$
  - $\\operatorname{Ln} z_1 + \\operatorname{Ln} z_2 = i\\pi + i\\pi = 2\\pi i \\ne 0$
- **(b)** Let $z_1 = 1$ and $z_2 = 1$.
  - $\\operatorname{Ln}(z_1 z_2) = \\operatorname{Ln}(1) = 0$
  - $\\operatorname{Ln} z_1 + \\operatorname{Ln} z_2 = 0 + 0 = 0$
- **(c)** The identity holds if and only if the sum of the principal arguments lies within the principal range:
  $$
  -\\pi < \\operatorname{Arg} z_1 + \\operatorname{Arg} z_2 \\le \\pi
  $$

#### Problem 56
**Is $\\operatorname{Ln} z^n = n\\operatorname{Ln} z$ for all integers $n$ and complex numbers $z$? Defend your position.**

**Solution:**
**No.** The identity does not hold universally.
Counterexample: Let $z = -1$ and $n = 2$.
- Left side: $\\operatorname{Ln}((-1)^2) = \\operatorname{Ln}(1) = 0$.
- Right side: $2\\operatorname{Ln}(-1) = 2(i\\pi) = 2\\pi i$.
Since $0 \\ne 2\\pi i$, the identity is false in general.

---

## Computer Lab Assignments

### Problems 57 – 62: CAS Principal Logarithms

#### Problem 57
**Compute the principal logarithm of $z = -1 - i$.**

**Solution:**
- Modulus $|z| = \\sqrt{(-1)^2 + (-1)^2} = \\sqrt{2}$.
- Since the point is in the third quadrant:
  $$
  \\operatorname{Arg}(z) = -\\pi + \\arctan(1) = -\\frac{3\\pi}{4}
  $$
- Substitute into the principal value formula:
  $$
  \\operatorname{Ln}(z) = \\log_e \\sqrt{2} - i\\frac{3\\pi}{4} = \\frac{1}{2}\\log_e 2 - \\frac{3\\pi}{4}i \\approx \\boxed{0.3466 - 2.3562i}
  $$

#### Problem 58
**Compute the principal logarithm of $z = 2 - 3i$.**

**Solution:**
- Modulus $|z| = \\sqrt{2^2 + (-3)^2} = \\sqrt{13}$.
- The point is in the fourth quadrant:
  $$
  \\operatorname{Arg}(z) = -\\arctan(3/2) \\approx -0.9828 \\text{ rad}
  $$
- Substitute:
  $$
  \\operatorname{Ln}(z) = \\frac{1}{2}\\log_e 13 - i\\arctan(3/2) \\approx \\boxed{1.2825 - 0.9828i}
  $$

#### Problem 59
**Compute the principal logarithm of $z = 3 + \\pi i$.**

**Solution:**
- Modulus $|z| = \\sqrt{3^2 + \\pi^2} = \\sqrt{9+\\pi^2}$.
- The point is in the first quadrant:
  $$
  \\operatorname{Arg}(z) = \\arctan(\\pi/3) \\approx 0.8084 \\text{ rad}
  $$
- Substitute:
  $$
  \\operatorname{Ln}(z) = \\frac{1}{2}\\log_e(9+\\pi^2) + i\\arctan(\\pi/3) \\approx \\boxed{1.4725 + 0.8084i}
  $$

#### Problem 60
**Compute the principal logarithm of $z = \\frac{1}{3} + \\sqrt{2}i$.**

**Solution:**
- Modulus:
  $$
  |z| = \\sqrt{\\left(\\frac{1}{3}\\right)^2 + (\\sqrt{2})^2} = \\sqrt{\\frac{1}{9} + 2} = \\sqrt{\\frac{19}{9}} = \\frac{\\sqrt{19}}{3}
  $$
- The point is in the first quadrant:
  $$
  \\operatorname{Arg}(z) = \\arctan\\left(\\frac{\\sqrt{2}}{1/3}\\right) = \\arctan(3\\sqrt{2}) \\approx 1.3402 \\text{ rad}
  $$
- Substitute:
  $$
  \\operatorname{Ln}(z) = \\frac{1}{2}\\log_e\\left(\\frac{19}{9}\\right) + i\\arctan(3\\sqrt{2}) \\approx \\boxed{0.3736 + 1.3402i}
  $$

#### Problem 61
**Compute the principal logarithm of $z = 4 + 10i$.**

**Solution:**
- Modulus $|z| = \\sqrt{4^2 + 10^2} = \\sqrt{116} = 2\\sqrt{29}$.
- The point is in the first quadrant:
  $$
  \\operatorname{Arg}(z) = \\arctan(10/4) = \\arctan(5/2) \\approx 1.1903 \\text{ rad}
  $$
- Substitute:
  $$
  \\operatorname{Ln}(z) = \\frac{1}{2}\\log_e 116 + i\\arctan(5/2) \\approx \\boxed{2.3768 + 1.1903i}
  $$

#### Problem 62
**Compute the principal logarithm of $z = \\frac{1/2 - i}{2 + 3i}$.**

**Solution:**
First, simplify $z$:
$$
z = \\frac{1 - 2i}{2(2+3i)} = \\frac{1-2i}{4+6i} = \\frac{(1-2i)(4-6i)}{4^2+6^2} = \\frac{4 - 6i - 8i - 12}{52} = \\frac{-8 - 14i}{52} = -\\frac{2}{13} - \\frac{7}{26}i
$$
- Modulus:
  $$
  |z| = \\sqrt{\\left(-\\frac{2}{13}\\right)^2 + \\left(-\\frac{7}{26}\\right)^2} = \\sqrt{\\frac{16}{676} + \\frac{49}{676}} = \\frac{\\sqrt{113}}{26} \\approx 0.4088
  $$
- The point is in the third quadrant:
  $$
  \\operatorname{Arg}(z) = -\\pi + \\arctan\\left(\\frac{7/26}{2/13}\\right) = -\\pi + \\arctan(7/4) \\approx -2.0899 \\text{ rad}
  $$
- Substitute:
  $$
  \\operatorname{Ln}(z) = \\log_e\\left(\\frac{\\sqrt{113}}{26}\\right) + i\\left(-\\pi + \\arctan(7/4)\\right) \\approx \\boxed{-0.8945 - 2.0899i}
  $$

---

### Problems 63 – 66: CAS Equation Solving

#### Problem 63
**Solve the equation $e^{5z-i} = 12i$.**

**Solution:**
Take the complex logarithm:
$$
5z - i = \\ln(12i) = \\log_e 12 + i\\left(\\frac{\\pi}{2} + 2n\\pi\\right)
$$
Solve for $z$:
$$
5z = \\log_e 12 + i\\left(\\frac{\\pi}{2} + 1 + 2n\\pi\\right)
$$
$$
z = \\boxed{\\frac{1}{5}\\log_e 12 + i\\frac{(4n+1)\\pi + 2}{10}}, \\quad n \\in \\mathbb{Z}
$$

#### Problem 64
**Solve the equation $e^{iz} = 2 - 5i$.**

**Solution:**
Take the complex logarithm:
$$
iz = \\ln(2 - 5i) = \\log_e \\sqrt{29} + i\\left(-\\arctan(5/2) + 2n\\pi\\right)
$$
Divide by $i$ (which is multiplying by $-i$):
$$
z = -i \\left[\\frac{1}{2}\\log_e 29 + i\\left(2n\\pi - \\arctan(5/2)\\right)\\right]
$$
$$
z = \\boxed{2n\\pi - \\arctan(5/2) - i\\frac{1}{2}\\log_e 29}, \\quad n \\in \\mathbb{Z}
$$

#### Problem 65
**Solve the equation $3e^{(2+i)z} = 5 - i$.**

**Solution:**
Isolate the exponential term:
$$
e^{(2+i)z} = \\frac{5-i}{3}
$$
Take the complex logarithm:
$$
(2+i)z = \\ln\\left(\\frac{5-i}{3}\\right)
$$
Let's find $|\\frac{5-i}{3}| = \\frac{\\sqrt{26}}{3}$ and $\\operatorname{Arg}(\\frac{5-i}{3}) = -\\arctan(1/5)$.
$$
(2+i)z = \\log_e\\left(\\frac{\\sqrt{26}}{3}\\right) + i(2n\\pi - \\arctan(1/5))
$$
Multiply by $\\frac{2-i}{5}$:
$$
z = \\boxed{\\frac{2-i}{5} \\left[ \\log_e\\left(\\frac{\\sqrt{26}}{3}\\right) + i(2n\\pi - \\arctan(1/5)) \\right]}, \\quad n \\in \\mathbb{Z}
$$

#### Problem 66
**Solve the equation $ie^{z-2} = \\pi$.**

**Solution:**
Isolate the exponential term:
$$
e^{z-2} = -i\\pi
$$
Take the complex logarithm:
$$
z - 2 = \\ln(-i\\pi) = \\log_e \\pi + i\\left(-\\frac{\\pi}{2} + 2n\\pi\\right)
$$
Solve for $z$:
$$
z = \\boxed{2 + \\log_e \\pi + i\\frac{4n-1}{2}\\pi}, \\quad n \\in \\mathbb{Z}
$$
"""
    write_file(r"C:\Users\Administrator\.gemini\antigravity\scratch\zill_solutions\solutions_perfected\chapter_4\section_4.1_solutions.md", content)

def write_file(path, content):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Created: {path}")

if __name__ == "__main__":
    create_section_4_1()
