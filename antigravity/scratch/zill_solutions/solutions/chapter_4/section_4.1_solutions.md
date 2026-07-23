# Complex Analysis — Dennis G. Zill, 2nd Edition
## Chapter 4 · Section 4.1 — Exponential and Logarithmic Functions
### Problems 1 – 66 · Complete Solutions

---

> **Key Concepts of Complex Exponential and Logarithmic Functions**
>
> 1. **Complex Exponential Function:** For \( z = x + iy \), the complex exponential is:
>    \[
>    e^z = e^x(\cos y + i\sin y)
>    \]
>    It is an entire function with derivative \( \frac{d}{dz}(e^z) = e^z \). It is periodic with period \( 2\pi i \).
> 2. **Complex Logarithm:** For \( z \ne 0 \), the multiple-valued logarithm is:
>    \[
>    \ln z = \log_e |z| + i(\arg z) = \log_e |z| + i(\operatorname{Arg} z + 2n\pi), \quad n \in \mathbb{Z}
>    \]
> 3. **Principal Branch:** The single-valued principal value of the logarithm is:
>    \[
>    \operatorname{Ln} z = \log_e |z| + i\operatorname{Arg} z, \quad -\pi < \operatorname{Arg} z \le \pi
>    \]
>    It is analytic in the domain \( |z| > 0 \), \( -\pi < \arg(z) < \pi \), with derivative \( \frac{d}{dz}(\operatorname{Ln} z) = \frac{1}{z} \).

---

## 4.1.1 Complex Exponential Function

### Problems 1 – 4: Derivatives

#### Problem 1: \( f(z) = z^2 e^{z+i} \)
* Apply the product rule:
  \[
  f'(z) = 2z e^{z+i} + z^2 e^{z+i} = \boxed{z(z+2) e^{z+i}}
  \]

#### Problem 2: \( f(z) = \frac{3e^{2z} - i e^{-z}}{z^3 - 1 + i} \)
* Apply the quotient rule:
  \[
  f'(z) = \frac{(6e^{2z} + i e^{-z})(z^3 - 1 + i) - (3e^{2z} - i e^{-z})(3z^2)}{(z^3 - 1 + i)^2}
  \]
  \[
  = \boxed{\frac{(6e^{2z} + i e^{-z})(z^3 - 1 + i) - 3z^2(3e^{2z} - i e^{-z})}{(z^3 - 1 + i)^2}}
  \]

#### Problem 3: \( f(z) = e^{iz} - e^{-iz} \)
* Apply the chain rule to each term:
  \[
  f'(z) = i e^{iz} - (-i) e^{-iz} = \boxed{i(e^{iz} + e^{-iz})}
  \]

#### Problem 4: \( f(z) = i e^{1/z} \)
* Apply the chain rule:
  \[
  f'(z) = i e^{1/z} \left(-\frac{1}{z^2}\right) = \boxed{-\frac{i e^{1/z}}{z^2}}
  \]

---

### Problems 5 – 8: Expressions in terms of \( x \) and \( y \)

#### Problem 5: \( |e^{z^2-z}| \)
* Express the exponent in Cartesian coordinates:
  \[
  z^2 - z = (x+iy)^2 - (x+iy) = (x^2 - y^2 - x) + i(2xy - y)
  \]
* The modulus of \( e^w \) is \( e^{\operatorname{Re}(w)} \):
  \[
  |e^{z^2-z}| = \boxed{e^{x^2 - x - y^2}}
  \]

#### Problem 6: \( \arg(e^{z-i/z}) \)
* Simplify the exponent:
  \[
  z - \frac{i}{z} = x+iy - \frac{i(x-iy)}{x^2+y^2} = \left(x - \frac{y}{x^2+y^2}\right) + i\left(y - \frac{x}{x^2+y^2}\right)
  \]
* The argument of \( e^w \) is \( \operatorname{Im}(w) + 2n\pi \):
  \[
  \arg(e^{z-i/z}) = \boxed{y - \frac{x}{x^2+y^2} + 2n\pi}, \quad n \in \mathbb{Z}
  \]

#### Problem 7: \( \arg(e^{i(z+\bar{z})}) \)
* Simplify the exponent using \( z+\bar{z} = 2x \):
  \[
  i(z+\bar{z}) = 2ix
  \]
* The argument of \( e^{i\theta} \) is \( \theta + 2n\pi \):
  \[
  \arg(e^{2ix}) = \boxed{2x + 2n\pi}, \quad n \in \mathbb{Z}
  \]

#### Problem 8: \( |i e^z + 1| \)
* Expand \( i e^z + 1 \):
  \[
  i e^z + 1 = i e^x(\cos y + i\sin y) + 1 = (1 - e^x\sin y) + i e^x\cos y
  \]
* Compute the modulus:
  \[
  |i e^z + 1| = \sqrt{(1 - e^x\sin y)^2 + (e^x\cos y)^2} = \sqrt{1 - 2e^x\sin y + e^{2x}(\sin^2 y + \cos^2 y)}
  \]
  \[
  = \boxed{\sqrt{1 - 2e^x\sin y + e^{2x}}}
  \]

---

### Problems 9 – 12: Expressing in \( u(x,y) + i v(x,y) \) Form

#### Problem 9: \( f(z) = e^{-iz} \)
* \( -iz = -i(x+iy) = y - ix \).
* \( e^{-iz} = e^{y - ix} = e^y(\cos(-x) + i\sin(-x)) = \boxed{e^y\cos x - i e^y\sin x} \).
* \( u(x,y) = e^y\cos x \), \( v(x,y) = -e^y\sin x \).

#### Problem 10: \( f(z) = e^{2\bar{z}+i} \)
* \( 2\bar{z}+i = 2(x-iy)+i = 2x + i(1-2y) \).
* \( e^{2\bar{z}+i} = e^{2x}(\cos(1-2y) + i\sin(1-2y)) = \boxed{e^{2x}\cos(1-2y) + i e^{2x}\sin(1-2y)} \).
* \( u(x,y) = e^{2x}\cos(1-2y) \), \( v(x,y) = e^{2x}\sin(1-2y) \).

#### Problem 11: \( f(z) = e^{z^2} \)
* \( z^2 = x^2-y^2 + 2ixy \).
* \( e^{z^2} = \boxed{e^{x^2-y^2}\cos(2xy) + i e^{x^2-y^2}\sin(2xy)} \).
* \( u(x,y) = e^{x^2-y^2}\cos(2xy) \), \( v(x,y) = e^{x^2-y^2}\sin(2xy) \).

#### Problem 12: \( f(z) = e^{1/z} \)
* \( 1/z = \frac{x-iy}{x^2+y^2} \).
* \( e^{1/z} = \boxed{e^{\frac{x}{x^2+y^2}}\cos\left(\frac{y}{x^2+y^2}\right) - i e^{\frac{x}{x^2+y^2}}\sin\left(\frac{y}{x^2+y^2}\right)} \).
* \( u(x,y) = e^{\frac{x}{x^2+y^2}}\cos\left(\frac{y}{x^2+y^2}\right) \), \( v(x,y) = -e^{\frac{x}{x^2+y^2}}\sin\left(\frac{y}{x^2+y^2}\right) \).

---

### Problems 13 & 14: Domains of Differentiability

#### Problem 13: \( f(z) = e^{2\bar{z}+i} \)
* From Problem 10, \( u = e^{2x}\cos(1-2y) \) and \( v = e^{2x}\sin(1-2y) \).
* Check Cauchy-Riemann equations:
  \[
  u_x = 2e^{2x}\cos(1-2y), \quad v_y = -2e^{2x}\cos(1-2y) \implies u_x = v_y \iff \cos(1-2y) = 0
  \]
  \[
  u_y = 2e^{2x}\sin(1-2y), \quad v_x = 2e^{2x}\sin(1-2y) \implies u_y = -v_x \iff \sin(1-2y) = 0
  \]
* Since \( \cos \theta \) and \( \sin \theta \) cannot both be zero, the C-R equations are never satisfied.
* **Answer:** The function is **nowhere differentiable**.

#### Problem 14: \( f(z) = e^{z^2} \)
* The function is the composition of the entire functions \( g(z) = z^2 \) and \( h(z) = e^z \).
* **Answer:** The function is differentiable **everywhere** in the complex plane \( \mathbb{C} \).

---

### Problems 15 – 20: Images under Exponential Mapping \( w = e^z \)

#### Problem 15: The line \( y = -2 \)
* For \( z = x - 2i \), \( |w| = e^x > 0 \) and \( \arg(w) = -2 \).
* **Image:** The ray \( \boxed{\arg(w) = -2} \) emanating from the origin (origin excluded).

#### Problem 16: The line \( x = 3 \)
* For \( z = 3 + iy \), \( |w| = e^3 \) and \( \arg(w) = y \).
* **Image:** The circle \( \boxed{|w| = e^3} \).

#### Problem 17: The infinite strip \( 1 < x \le 2 \)
* \( 1 < x \le 2 \implies e < |w| \le e^2 \), with no restriction on \( \arg(w) \).
* **Image:** The annulus \( \boxed{e < |w| \le e^2} \).

#### Problem 18: The square with vertices \( 0 \), \( 1 \), \( 1+i \), and \( i \)
* \( 0 \le x \le 1 \implies 1 \le |w| \le e \), and \( 0 \le y \le 1 \implies 0 \le \arg(w) \le 1 \) (rad).
* **Image:** The polar region \( \boxed{1 \le |w| \le e, \, 0 \le \arg(w) \le 1} \).

#### Problem 19: The rectangle \( 0 \le x \le \log_e 2 \), \( -\pi/4 \le y \le \pi/2 \)
* \( 0 \le x \le \log_e 2 \implies 1 \le |w| \le 2 \), and \( -\pi/4 \le \arg(w) \le \pi/2 \).
* **Image:** The annular sector \( \boxed{1 \le |w| \le 2, \, -\pi/4 \le \arg(w) \le \pi/2} \).

#### Problem 20: The semi-infinite strip \( -\infty < x \le 0 \), \( 0 \le y \le \pi \)
* \( x \le 0 \implies 0 < |w| \le 1 \), and \( 0 \le \arg(w) \le \pi \).
* **Image:** The upper half of the punctured unit disk \( \boxed{0 < |w| \le 1, \, 0 \le \arg(w) \le \pi} \).

---

## 4.1.2 Complex Logarithmic Function

### Problems 21 – 26: All Values of \( \ln z \)

We use \( \ln z = \log_e |z| + i(\operatorname{Arg} z + 2n\pi) \).

#### Problem 21: \( \ln (-5) \)
* \( |-5| = 5 \), \( \operatorname{Arg}(-5) = \pi \).
* **Answer:** \( \boxed{\log_e 5 + i(2n+1)\pi}, \quad n \in \mathbb{Z} \).

#### Problem 22: \( \ln (-e^i) \)
* \( -e^i = e^{i\pi} e^i = e^{i(1+\pi)} \implies |-e^i| = 1 \).
* An argument is \( 1+\pi \).
* **Answer:** \( \boxed{i(1 + (2n+1)\pi)}, \quad n \in \mathbb{Z} \).

#### Problem 23: \( \ln (-2 + 2i) \)
* \( |-2+2i| = \sqrt{8} = 2^{3/2} \implies \log_e |z| = \frac{3}{2}\log_e 2 \).
* \( \operatorname{Arg}(-2+2i) = 3\pi/4 \).
* **Answer:** \( \boxed{\frac{3}{2}\log_e 2 + i\frac{8n+3}{4}\pi}, \quad n \in \mathbb{Z} \).

#### Problem 24: \( \ln (1 + i) \)
* \( |1+i| = \sqrt{2} = 2^{1/2} \implies \log_e |z| = \frac{1}{2}\log_e 2 \).
* \( \operatorname{Arg}(1+i) = \pi/4 \).
* **Answer:** \( \boxed{\frac{1}{2}\log_e 2 + i\frac{8n+1}{4}\pi}, \quad n \in \mathbb{Z} \).

#### Problem 25: \( \ln(\sqrt{2} + \sqrt{6}i) \)
* \( |\sqrt{2}+\sqrt{6}i| = \sqrt{8} = 2^{3/2} \implies \log_e |z| = \frac{3}{2}\log_e 2 \).
* \( \operatorname{Arg}(z) = \arctan(\sqrt{6}/\sqrt{2}) = \pi/3 \).
* **Answer:** \( \boxed{\frac{3}{2}\log_e 2 + i\frac{6n+1}{3}\pi}, \quad n \in \mathbb{Z} \).

#### Problem 26: \( \ln(-\sqrt{3} + i) \)
* \( |-\sqrt{3}+i| = 2 \), \( \operatorname{Arg}(z) = 5\pi/6 \).
* **Answer:** \( \boxed{\log_e 2 + i\frac{12n+5}{6}\pi}, \quad n \in \mathbb{Z} \).

---

### Problems 27 – 32: Principal Values \( \operatorname{Ln} z \)

We use \( \operatorname{Ln} z = \log_e |z| + i\operatorname{Arg} z \).

#### Problem 27: \( \operatorname{Ln}(6-6i) \)
* \( |6-6i| = \sqrt{72} \), \( \operatorname{Arg}(6-6i) = -\pi/4 \).
* **Answer:** \( \boxed{\frac{1}{2}\log_e 72 - \frac{\pi}{4}i} \).

#### Problem 28: \( \operatorname{Ln}(-e^2) \)
* \( |-e^2| = e^2 \), \( \operatorname{Arg}(-e^2) = \pi \).
* **Answer:** \( \boxed{2 + \pi i} \).

#### Problem 29: \( \operatorname{Ln}(-12+5i) \)
* \( |-12+5i| = 13 \), \( \operatorname{Arg}(-12+5i) = \pi - \arctan(5/12) \approx 2.7468 \).
* **Answer:** \( \boxed{\log_e 13 + i(\pi - \arctan(5/12))} \approx \mathbf{2.5650 + 2.7468i} \).

#### Problem 30: \( \operatorname{Ln}(3-4i) \)
* \( |3-4i| = 5 \), \( \operatorname{Arg}(3-4i) = -\arctan(4/3) \approx -0.9273 \).
* **Answer:** \( \boxed{\log_e 5 - i\arctan(4/3)} \approx \mathbf{1.6094 - 0.9273i} \).

#### Problem 31: \( \operatorname{Ln}((1+\sqrt{3}i)^5) \)
* \( 1+\sqrt{3}i = 2e^{i\pi/3} \implies (1+\sqrt{3}i)^5 = 32e^{5i\pi/3} = 32e^{-i\pi/3} \).
* **Answer:** \( \boxed{5\log_e 2 - \frac{\pi}{3}i} \).

#### Problem 32: \( \operatorname{Ln}((1+i)^4) \)
* \( 1+i = \sqrt{2}e^{i\pi/4} \implies (1+i)^4 = 4e^{i\pi} = -4 \).
* **Answer:** \( \boxed{2\log_e 2 + \pi i} \).

---

### Problems 33 – 36: Solving Equations

#### Problem 33: \( e^z = 4i \)
* \( z = \ln(4i) = \log_e 4 + i(\pi/2 + 2n\pi) = \boxed{2\log_e 2 + i\frac{4n+1}{2}\pi}, \quad n \in \mathbb{Z} \).

#### Problem 34: \( e^{1/z} = -1 \)
* \( 1/z = \ln(-1) = i(2n+1)\pi \implies z = \frac{1}{i(2n+1)\pi} = \boxed{-\frac{i}{(2n+1)\pi}}, \quad n \in \mathbb{Z} \).

#### Problem 35: \( e^{z-1} = -ie^3 \)
* \( e^{z-1} = e^{3 - i\pi/2} \implies z-1 = 3 - i\pi/2 + 2n\pi i \).
* **Answer:** \( z = \boxed{4 + i\frac{4n-1}{2}\pi}, \quad n \in \mathbb{Z} \).

#### Problem 36: \( e^{2z} + e^z + 1 = 0 \)
* Let \( w = e^z \implies w^2 + w + 1 = 0 \implies w = e^{\pm 2\pi i / 3} \).
* Thus \( z = \ln(e^{\pm 2\pi i / 3}) = \boxed{i\frac{6n \pm 2}{3}\pi}, \quad n \in \mathbb{Z} \).

---

### Problems 37 – 40: Domains of Analyticity & Derivatives

#### Problem 37: \( f(z) = 3z^2 - e^{2iz} + i\operatorname{Ln} z \)
* \( \operatorname{Ln} z \) is analytic in \( |z| > 0, \, -\pi < \arg(z) < \pi \).
* **Domain:** \( \boxed{|z| > 0, \, -\pi < \arg(z) < \pi} \).
* **Derivative:** \( f'(z) = \boxed{6z - 2ie^{2iz} + \frac{i}{z}} \).

#### Problem 38: \( f(z) = (z+1)\operatorname{Ln} z \)
* **Domain:** \( \boxed{|z| > 0, \, -\pi < \arg(z) < \pi} \).
* **Derivative:** \( f'(z) = \operatorname{Ln} z + \frac{z+1}{z} = \boxed{\operatorname{Ln} z + 1 + \frac{1}{z}} \).

#### Problem 39: \( f(z) = \frac{\operatorname{Ln}(2z-i)}{z^2+1} \)
* \( \operatorname{Ln}(2z-i) \) fails to be analytic where \( 2z-i = u \le 0 \implies z = x + \frac{1}{2}i \) with \( x \le 0 \).
* Also denominator is zero at \( z = \pm i \).
* **Domain:** All \( z \) except the ray \( \boxed{x \le 0, \, y = 1/2} \) and points \( \boxed{z = \pm i} \).
* **Derivative:**
  \[
  f'(z) = \boxed{\frac{2(z^2+1) - 2z(2z-i)\operatorname{Ln}(2z-i)}{(2z-i)(z^2+1)^2}}
  \]

#### Problem 40: \( f(z) = \operatorname{Ln}(z^2+1) \)
* Analytic except where \( z^2+1 = u \le 0 \implies z^2 \le -1 \implies z = iy \) with \( |y| \ge 1 \).
* **Domain:** The complex plane excluding the rays \( \boxed{y \ge 1} \) and \( \boxed{y \le -1} \) on the imaginary axis.
* **Derivative:** \( f'(z) = \boxed{\frac{2z}{z^2+1}} \).

---

### Problems 41 – 46: Images under \( w = \operatorname{Ln} z \)

We use \( w = u+iv = \log_e |z| + i\operatorname{Arg} z \).

#### Problem 41: The ray \( \arg(z) = \pi/6 \)
* \( |z| > 0 \implies u = \log_e |z| \in (-\infty, \infty) \) and \( v = \pi/6 \).
* **Image:** The horizontal line \( \boxed{v = \pi/6} \).

#### Problem 42: The positive y-axis
* This is the ray \( \arg(z) = \pi/2 \).
* **Image:** The horizontal line \( \boxed{v = \pi/2} \).

#### Problem 43: The circle \( |z| = 4 \)
* \( u = \log_e 4 = 2\log_e 2 \) and \( v \in (-\pi, \pi] \).
* **Image:** The vertical line segment \( \boxed{u = 2\log_e 2, \, -\pi < v \le \pi} \).

#### Problem 44: First quadrant region bounded by \( |z|=1 \) and \( |z|=e \)
* \( 1 \le |z| \le e \implies 0 \le u \le 1 \), and \( 0 \le v \le \pi/2 \).
* **Image:** The rectangular region \( \boxed{0 \le u \le 1, \, 0 \le v \le \pi/2} \).

#### Problem 45: The annulus \( 3 \le |z| \le 5 \)
* \( 3 \le |z| \le 5 \implies \log_e 3 \le u \le \log_e 5 \), and \( -\pi < v \le \pi \).
* **Image:** The rectangular region \( \boxed{\log_e 3 \le u \le \log_e 5, \, -\pi < v \le \pi} \).

#### Problem 46: Region outside \( |z|=1 \) and between rays \( \arg(z)=\pi/4 \) and \( 3\pi/4 \)
* \( |z| > 1 \implies u > 0 \), and \( \pi/4 \le v \le 3\pi/4 \).
* **Image:** The semi-infinite strip \( \boxed{u > 0, \, \pi/4 \le v \le 3\pi/4} \).

---

## Focus on Concepts

### Problem 47: Prove \( e^{z_1}/e^{z_2} = e^{z_1-z_2} \)
* Using the definition of the complex exponential:
  \[
  \frac{e^{z_1}}{e^{z_2}} = \frac{e^{x_1}(\cos y_1 + i\sin y_1)}{e^{x_2}(\cos y_2 + i\sin y_2)} = e^{x_1-x_2} [\cos(y_1-y_2) + i\sin(y_1-y_2)] = e^{z_1-z_2}
  \]

### Problem 48: Prove \( (e^{z_1})^n = e^{n z_1} \) for integer \( n \)
* Let \( e^{z_1} = e^{x_1} e^{i y_1} \). By De Moivre's theorem:
  \[
  (e^{z_1})^n = (e^{x_1})^n (e^{i y_1})^n = e^{n x_1} e^{i n y_1} = e^{n(x_1 + i y_1)} = e^{n z_1}
  \]

### Problem 49: Where is \( e^{\bar{z}} \) analytic?
* Let \( f(z) = e^{\bar{z}} = e^x\cos y - i e^x\sin y \implies u = e^x\cos y, \, v = -e^x\sin y \).
* Checking C-R equations:
  \[
  u_x = e^x\cos y, \, v_y = -e^x\cos y \implies u_x = v_y \iff \cos y = 0
  \]
  \[
  u_y = -e^x\sin y, \, v_x = -e^x\sin y \implies u_y = -v_x \iff \sin y = 0
  \]
* Since \( \cos y \) and \( \sin y \) cannot both be zero, the C-R equations are never satisfied.
* **Answer:** \( e^{\bar{z}} \) is **nowhere analytic**.

### Problem 50: Uniqueness of Complex Exponential
* **(a)** \( f'(z) = f(z) \implies u_x + iv_x = u + iv \implies u_x = u \) and \( v_x = v \).
* **(b)** Integrating gives \( u(x,y) = a(y) e^x \) and \( v(x,y) = b(y) e^x \).
* **(c)** For real \( z = x \implies y = 0 \), \( f(x) = e^x \implies a(0) = 1, \, b(0) = 0 \).
* **(d)** Satisfying C-R equations requires \( u_x = v_y \implies a(y) = b'(y) \) and \( u_y = -v_x \implies a'(y) = -b(y) \).
* **(e)** Solving \( a''(y) + a(y) = 0 \) subject to \( a(0)=1, \, a'(0)=0 \) yields \( a(y) = \cos y \) and \( b(y) = \sin y \).
* **(f)** Thus \( f(z) = e^x\cos y + i e^x\sin y = e^z \) is the unique entire function satisfying the conditions.

### Problem 51: Image of the line \( y = x \) under \( e^z \)
* For \( z = t + it \), the image is \( w = e^t e^{it} \).
* Let \( r = |w| = e^t \) and \( \theta = \arg(w) = t \).
* **Image:** The logarithmic spiral \( \boxed{r(\theta) = e^\theta} \).

### Problem 52: Prove \( e^z \) is one-to-one on the fundamental region
* If \( e^{z_1} = e^{z_2} \implies e^{z_1-z_2} = 1 \implies z_1 - z_2 = 2k\pi i \).
* Since \( y_1, y_2 \in (-\pi, \pi] \implies |y_1 - y_2| < 2\pi \), we must have \( k = 0 \implies y_1 = y_2 \) and \( x_1 = x_2 \). Thus \( z_1 = z_2 \).

### Problem 53: Prove \( \ln(z_1/z_2) = \ln z_1 - \ln z_2 \)
* As sets of values:
  \[
  \ln(z_1/z_2) = \log_e |z_1/z_2| + i \arg(z_1/z_2)
  \]
  \[
  = \log_e |z_1| - \log_e |z_2| + i(\arg z_1 - \arg z_2 + 2k\pi) = \ln z_1 - \ln z_2
  \]

### Problem 54: Prove \( \ln z^n = n\ln z \)
* As sets of values:
  \[
  \ln z^n = \log_e |z^n| + i \arg(z^n) = n\log_e |z| + i(n\arg z + 2k\pi) = n(\log_e |z| + i\arg z) = n\ln z
  \]

### Problem 55: Principal Logarithm Identities
* **(a)** Let \( z_1 = -1, \, z_2 = -1 \).
  * \( \operatorname{Ln}(z_1 z_2) = \operatorname{Ln}(1) = 0 \).
  * \( \operatorname{Ln} z_1 + \operatorname{Ln} z_2 = i\pi + i\pi = 2\pi i \ne 0 \).
* **(b)** Let \( z_1 = 1, \, z_2 = 1 \implies \operatorname{Ln}(1) = 0 = 0 + 0 \).
* **(c)** The identity holds if and only if \( \boxed{-\pi < \operatorname{Arg} z_1 + \operatorname{Arg} z_2 \le \pi} \).

### Problem 56: Is \( \operatorname{Ln} z^n = n\operatorname{Ln} z \)?
* **No.** Counterexample: Let \( z = -1, \, n = 2 \).
  * \( \operatorname{Ln}((-1)^2) = \operatorname{Ln}(1) = 0 \).
  * \( 2\operatorname{Ln}(-1) = 2(\pi i) = 2\pi i \ne 0 \).

---

## Computer Lab Assignments

#### Problems 63 – 66: Solutions

* **Problem 63: \( e^{5z-i} = 12i \)**
  \[
  5z-i = \ln(12i) = \log_e 12 + i\left(\frac{\pi}{2} + 2n\pi\right) \implies z = \boxed{\frac{1}{5}\log_e 12 + i\frac{2 + (4n+1)\pi}{10}}, \quad n \in \mathbb{Z}
  \]

* **Problem 64: \( e^{iz} = 2-5i \)**
  \[
  iz = \ln(2-5i) = \frac{1}{2}\log_e 29 + i\left(-\arctan(5/2) + 2n\pi\right)
  \]
  \[
  z = \boxed{-\arctan(5/2) + 2n\pi - \frac{i}{2}\log_e 29}, \quad n \in \mathbb{Z}
  \]

* **Problem 65: \( 3e^{(2+i)z} = 5-i \)**
  \[
  e^{(2+i)z} = \frac{5-i}{3} \implies (2+i)z = \ln\left(\frac{5-i}{3}\right) = \log_e \frac{\sqrt{26}}{3} + i(-\arctan(1/5) + 2n\pi)
  \]
  Multiply by \( \frac{2-i}{5} \):
  \[
  z = \boxed{\frac{2-i}{5} \left( \log_e \frac{\sqrt{26}}{3} + i(2n\pi - \arctan(1/5)) \right)}, \quad n \in \mathbb{Z}
  \]

* **Problem 66: \( ie^{z-2} = \pi \)**
  \[
  e^{z-2} = -i\pi \implies z-2 = \ln(-i\pi) = \log_e \pi + i\left(-\frac{\pi}{2} + 2n\pi\right)
  \]
  \[
  z = \boxed{2 + \log_e \pi + i\frac{4n-1}{2}\pi}, \quad n \in \mathbb{Z}
  \]
