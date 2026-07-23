# Complex Analysis — Dennis G. Zill, 2nd Edition
# Chapter 3: Analytic Functions

---

This solutions manual covers the complete set of exercises for Chapter 3 of Dennis G. Zill's *A First Course in Complex Analysis with Applications* (2nd Edition). All problems are solved step-by-step with pedagogical explanations, mathematical proofs, and full LaTeX formatting.

## Chapter Table of Contents
1. [Section 3.1: Differentiability and Analyticity](#section-31-differentiability-and-analyticity)
2. [Section 3.2: Cauchy-Riemann Equations](#section-32-cauchy-riemann-equations)
3. [Section 3.3: Harmonic Functions](#section-33-harmonic-functions)
4. [Section 3.4: Applications](#section-34-applications)
5. [Chapter 3 Review Quiz](#chapter-3-review-quiz)

---


<a name="section-31"></a>
## Section 3.1: Differentiability and Analyticity
---

> **Key Concepts of Differentiability and Analyticity**
>
> 1. **Definition of Derivative:** The derivative of a complex function \( f \) at \( z \) is:
>    \[
>    f'(z) = \lim_{\Delta z \to 0} \frac{f(z + \Delta z) - f(z)}{\Delta z}
>    \]
>    Alternatively, it can be written as:
>    \[
>    f'(z) = \lim_{w \to z} \frac{f(w) - f(z)}{w - z}
>    \]
> 2. **Analyticity:** A function \( f \) is analytic at a point \( z_0 \) if it is differentiable at \( z_0 \) and at every point in some neighborhood of \( z_0 \). A function is analytic in a domain \( D \) if it is differentiable at all points in \( D \).
> 3. **Entire Function:** A function that is analytic at every point in the complex plane \( \mathbb{C} \) is called an entire function.
> 4. **L'Hopital's Rule:** If \( f \) and \( g \) are analytic at \( z_0 \), and \( f(z_0) = g(z_0) = 0 \) with \( g'(z_0) \ne 0 \), then:
>    \[
>    \lim_{z \to z_0} \frac{f(z)}{g(z)} = \frac{f'(z_0)}{g'(z_0)}
>    \]

---

## Problems 1 – 6: Derivatives using the Limit Definition

### Problem 1: \( f(z) = 9iz + 2 - 3i \)
* Evaluate the difference quotient:
  \[
  f(z + \Delta z) - f(z) = 9i(z + \Delta z) + 2 - 3i - (9iz + 2 - 3i) = 9i \Delta z
  \]
  \[
  \lim_{\Delta z \to 0} \frac{9i \Delta z}{\Delta z} = \lim_{\Delta z \to 0} 9i = 9i
  \]
* **Derivative:** \( \boxed{f'(z) = 9i} \).

### Problem 2: \( f(z) = 15z^2 - 4z + 1 - 3i \)
* Evaluate the difference quotient:
  \[
  f(z + \Delta z) - f(z) = 15(z + \Delta z)^2 - 4(z + \Delta z) + 1 - 3i - (15z^2 - 4z + 1 - 3i)
  \]
  \[
  = 15(z^2 + 2z\Delta z + (\Delta z)^2) - 4z - 4\Delta z - 15z^2 + 4z = (30z - 4)\Delta z + 15(\Delta z)^2
  \]
  \[
  \lim_{\Delta z \to 0} \left( 30z - 4 + 15\Delta z \right) = \boxed{30z - 4}
  \]
* **Derivative:** \( f'(z) = 30z - 4 \).

### Problem 3: \( f(z) = iz^3 - 7z^2 \)
* Evaluate the difference quotient:
  \[
  f(z + \Delta z) - f(z) = i(z + \Delta z)^3 - 7(z + \Delta z)^2 - (iz^3 - 7z^2)
  \]
  \[
  = i(z^3 + 3z^2\Delta z + 3z(\Delta z)^2 + (\Delta z)^3) - 7(z^2 + 2z\Delta z + (\Delta z)^2) - iz^3 + 7z^2
  \]
  \[
  = (3iz^2 - 14z)\Delta z + (3iz - 7)(\Delta z)^2 + i(\Delta z)^3
  \]
  \[
  \lim_{\Delta z \to 0} \left( 3iz^2 - 14z + (3iz - 7)\Delta z + i(\Delta z)^2 \right) = \boxed{3iz^2 - 14z}
  \]
* **Derivative:** \( f'(z) = 3iz^2 - 14z \).

### Problem 4: \( f(z) = 1/z \)
* Evaluate the difference quotient:
  \[
  f(z + \Delta z) - f(z) = \frac{1}{z + \Delta z} - \frac{1}{z} = \frac{z - (z + \Delta z)}{z(z + \Delta z)} = -\frac{\Delta z}{z(z + \Delta z)}
  \]
  \[
  \lim_{\Delta z \to 0} -\frac{1}{z(z + \Delta z)} = \boxed{-\frac{1}{z^2}}
  \]
* **Derivative:** \( f'(z) = -1/z^2 \).

### Problem 5: \( f(z) = z - 1/z \)
* Using the limit definition:
  \[
  \frac{f(z + \Delta z) - f(z)}{\Delta z} = \frac{(z + \Delta z) - \frac{1}{z + \Delta z} - (z - \frac{1}{z})}{\Delta z} = 1 + \frac{1}{z(z + \Delta z)}
  \]
  \[
  \lim_{\Delta z \to 0} \left( 1 + \frac{1}{z(z + \Delta z)} \right) = \boxed{1 + \frac{1}{z^2}}
  \]
* **Derivative:** \( f'(z) = 1 + 1/z^2 \).

### Problem 6: \( f(z) = -z^{-2} = -1/z^2 \)
* Evaluate the difference quotient:
  \[
  f(z + \Delta z) - f(z) = -\frac{1}{(z + \Delta z)^2} + \frac{1}{z^2} = \frac{(z + \Delta z)^2 - z^2}{z^2(z + \Delta z)^2} = \frac{2z\Delta z + (\Delta z)^2}{z^2(z + \Delta z)^2}
  \]
  \[
  \lim_{\Delta z \to 0} \frac{2z + \Delta z}{z^2(z + \Delta z)^2} = \frac{2z}{z^4} = \boxed{\frac{2}{z^3}}
  \]
* **Derivative:** \( f'(z) = 2z^{-3} \).

---

## Problems 7 – 10: Derivatives using the Alternative Definition

### Problem 7: \( f(z) = 5z^2 - 10z + 8 \)
* Evaluate the limit:
  \[
  f'(z) = \lim_{w \to z} \frac{5(w^2 - z^2) - 10(w - z)}{w - z} = \lim_{w \to z} \left( 5(w + z) - 10 \right) = 5(2z) - 10 = \boxed{10z - 10}
  \]

### Problem 8: \( f(z) = z^3 \)
* Evaluate the limit:
  \[
  f'(z) = \lim_{w \to z} \frac{w^3 - z^3}{w - z} = \lim_{w \to z} (w^2 + wz + z^2) = z^2 + z^2 + z^2 = \boxed{3z^2}
  \]

### Problem 9: \( f(z) = z^4 - z^2 \)
* Evaluate the limit:
  \[
  f'(z) = \lim_{w \to z} \frac{(w^4 - z^4) - (w^2 - z^2)}{w - z} = \lim_{w \to z} \left( (w+z)(w^2+z^2) - (w+z) \right)
  \]
  \[
  = (2z)(2z^2) - 2z = \boxed{4z^3 - 2z}
  \]

### Problem 10: \( f(z) = \frac{1}{2iz} \)
* Evaluate the limit:
  \[
  f'(z) = \lim_{w \to z} \frac{\frac{1}{2iw} - \frac{1}{2iz}}{w - z} = \lim_{w \to z} \frac{z - w}{2iwz(w - z)} = \lim_{w \to z} -\frac{1}{2iwz} = \boxed{-\frac{1}{2iz^2}}
  \]

---

## Problems 11 – 18: Differentiation Rules

### Problem 11: \( f(z) = (2-i)z^5 + iz^4 - 3z^2 + i^6 \)
* Note \( i^6 = (i^2)^3 = -1 \) is constant.
* **Derivative:** \( \boxed{f'(z) = (10 - 5i)z^4 + 4iz^3 - 6z} \).

### Problem 12: \( f(z) = 5(iz)^3 - 10z^2 + 3 - 4i \)
* Rewrite: \( f(z) = -5iz^3 - 10z^2 + 3 - 4i \).
* **Derivative:** \( \boxed{f'(z) = -15iz^2 - 20z} \).

### Problem 13: \( f(z) = (z^6 - 1)(z^2 - z + 1 - 5i) \)
* By the product rule:
  \[
  f'(z) = 6z^5(z^2 - z + 1 - 5i) + (z^6 - 1)(2z - 1)
  \]
  \[
  = 6z^7 - 6z^6 + 6(1-5i)z^5 + 2z^7 - z^6 - 2z + 1 = \boxed{8z^7 - 7z^6 + (6 - 30i)z^5 - 2z + 1}
  \]

### Problem 14: \( f(z) = (z^2 + 2z - 7i)^2(z^4 - 4iz)^3 \)
* By product and chain rules:
  \[
  f'(z) = 2(z^2 + 2z - 7i)(2z+2)(z^4 - 4iz)^3 + 3(z^2 + 2z - 7i)^2(z^4 - 4iz)^2(4z^3 - 4i)
  \]
  \[
  = \boxed{4(z+1)(z^2+2z-7i)(z^4-4iz)^3 + 12(z^3-i)(z^2+2z-7i)^2(z^4-4iz)^2}
  \]

### Problem 15: \( f(z) = \frac{iz^2 - 2z}{3z + 1 - i} \)
* By the quotient rule:
  \[
  f'(z) = \frac{(2iz - 2)(3z + 1 - i) - (iz^2 - 2z)(3)}{(3z + 1 - i)^2}
  \]
  Evaluate numerator:
  \[
  (6iz^2 + 2iz(1-i) - 6z - 2 + 2i) - (3iz^2 - 6z) = 3iz^2 + (2+2i)z - 2 + 2i
  \]
* **Derivative:** \( \boxed{f'(z) = \frac{3iz^2 + (2+2i)z - 2 + 2i}{(3z + 1 - i)^2}} \).

### Problem 16: \( f(z) = \frac{-5iz^2 + 2 + i}{z^2} = -5i + (2+i)z^{-2} \)
* **Derivative:** \( f'(z) = -2(2+i)z^{-3} = \boxed{-\frac{4+2i}{z^3}} \).

### Problem 17: \( f(z) = (z^4 - 2iz^2 + z)^{10} \)
* By the chain rule:
  \[
  \boxed{f'(z) = 10(z^4 - 2iz^2 + z)^9(4z^3 - 4iz + 1)}
  \]

### Problem 18: \( f(z) = \left( \frac{(4+2i)z}{(2-i)z^2 + 9i} \right)^3 \)
* By the chain rule:
  \[
  f'(z) = 3\left( \frac{(4+2i)z}{(2-i)z^2 + 9i} \right)^2 \frac{(4+2i)((2-i)z^2 + 9i) - (4+2i)z \cdot 2(2-i)z}{((2-i)z^2 + 9i)^2}
  \]
  \[
  = \boxed{\frac{3(4+2i)^3 z^2 [9i - (2-i)z^2]}{((2-i)z^2 + 9i)^4}}
  \]

---

## Problems 19 – 22: Differentiability Analysis

### Problem 19: \( f(z) = |z|^2 \)
* **(a) Differentiability at origin:**
  \[
  f'(0) = \lim_{\Delta z \to 0} \frac{|0+\Delta z|^2 - 0}{\Delta z} = \lim_{\Delta z \to 0} \frac{\Delta z \overline{\Delta z}}{\Delta z} = \lim_{\Delta z \to 0} \overline{\Delta z} = 0
  \]
  Since this limit exists, \( f(z) = |z|^2 \) is differentiable at the origin with \( f'(0) = 0 \).
* **(b) Nowhere else differentiable:**
  Let \( \Delta z \to 0 \).
  \[
  \frac{|z+\Delta z|^2 - |z|^2}{\Delta z} = \frac{(z+\Delta z)(\bar{z}+\overline{\Delta z}) - z\bar{z}}{\Delta z} = \bar{z} + z\frac{\overline{\Delta z}}{\Delta z} + \overline{\Delta z}
  \]
  * Along the real axis (\( \Delta y = 0 \implies \overline{\Delta z}/\Delta z = 1 \)): the limit is \( \bar{z} + z \).
  * Along the imaginary axis (\( \Delta x = 0 \implies \overline{\Delta z}/\Delta z = -1 \)): the limit is \( \bar{z} - z \).
  * For the limit to exist, these two directional limits must be equal:
    \[
    \bar{z} + z = \bar{z} - z \implies 2z = 0 \implies z = 0
    \]
  * Thus, the limit does not exist at any \( z \ne 0 \).

### Problem 20: \( f(z) = \frac{x^3 - y^3}{x^2+y^2} + i\frac{x^3+y^3}{x^2+y^2} \) for \( z \ne 0 \), and \( f(0) = 0 \)
* Let \( \Delta z \to 0 \).
* **Along x-axis (\( \Delta y = 0 \)):**
  \[
  \lim_{\Delta x \to 0} \frac{f(\Delta x) - 0}{\Delta x} = \lim_{\Delta x \to 0} \frac{\frac{\Delta x^3}{\Delta x^2} + i\frac{\Delta x^3}{\Delta x^2}}{\Delta x} = \lim_{\Delta x \to 0} \frac{\Delta x(1+i)}{\Delta x} = 1 + i
  \]
* **Along diagonal \( y=x \) (\( \Delta y = \Delta x \)):**
  \[
  \lim_{\Delta x \to 0} \frac{f(\Delta x + i\Delta x) - 0}{\Delta x(1+i)} = \lim_{\Delta x \to 0} \frac{0 + i\frac{2\Delta x^3}{2\Delta x^2}}{\Delta x(1+i)} = \lim_{\Delta x \to 0} \frac{i\Delta x}{\Delta x(1+i)} = \frac{i}{1+i} = \frac{1+i}{2}
  \]
* Since the two directional limits differ (\( 1+i \ne \frac{1+i}{2} \)), the function is not differentiable at \( z = 0 \).

### Problem 21: \( f(z) = \bar{z} \)
* Evaluate the derivative definition limit:
  \[
  \lim_{\Delta z \to 0} \frac{\overline{z + \Delta z} - \bar{z}}{\Delta z} = \lim_{\Delta z \to 0} \frac{\overline{\Delta z}}{\Delta z}
  \]
* This limit depends on the path: along the real axis the ratio is \( 1 \), while along the imaginary axis it is \( -1 \). Thus, \( f(z) = \bar{z} \) is nowhere differentiable.

### Problem 22: \( f(z) = |z| \)
* At \( z_0 = 0 \): the limit is \( \lim_{\Delta z \to 0} \frac{|\Delta z|}{\Delta z} = e^{-i\phi} \) (where \( \phi = \arg(\Delta z) \)), which depends on the path direction.
* At \( z_0 \ne 0 \):
  * Along a radial path (\( \Delta z = e^{i\theta}\Delta r \)): the limit is \( e^{-i\theta} \).
  * Along a tangential path (\( \Delta z = i e^{i\theta}\Delta s \)): the limit is \( 0 \).
* Since the limits differ, \( f(z) = |z| \) is nowhere differentiable.

---

## Problems 23 – 26: L'Hopital's Rule

### Problem 23: \( \lim_{z \to i} \frac{z^7 + i}{z^{14} + 1} \)
* Since \( i^7 + i = 0 \) and \( i^{14} + 1 = 0 \), apply L'Hopital's rule:
  \[
  \lim_{z \to i} \frac{7z^6}{14z^{13}} = \lim_{z \to i} \frac{1}{2z^7} = \frac{1}{2i^7} = \boxed{\frac{1}{2}i}
  \]

### Problem 24: \( \lim_{z \to \sqrt{2}+i\sqrt{2}} \frac{z^4 + 16}{z^2 - 2\sqrt{2}z + 4} \)
* Let \( z_0 = 2e^{i\pi/4} \implies z_0^4 + 16 = 0 \) and \( z_0^2 - 2\sqrt{2}z_0 + 4 = 0 \). Apply L'Hopital's rule:
  \[
  \lim_{z \to z_0} \frac{4z^3}{2z - 2\sqrt{2}} = \frac{4(8e^{i3\pi/4})}{2(\sqrt{2}+i\sqrt{2}) - 2\sqrt{2}} = \frac{32e^{i3\pi/4}}{2i\sqrt{2}} = \frac{16\left( -\frac{1}{\sqrt{2}} + i\frac{1}{\sqrt{2}} \right)}{i\sqrt{2}} = \boxed{8 + 8i}
  \]

### Problem 25: \( \lim_{z \to 1+i} \frac{z^5 + 4z}{z^2 - 2z + 2} \)
* Since \( (1+i)^5 + 4(1+i) = 0 \) and \( (1+i)^2 - 2(1+i) + 2 = 0 \), apply L'Hopital's rule:
  \[
  \lim_{z \to 1+i} \frac{5z^4 + 4}{2z - 2} = \frac{5(2i)^2 + 4}{2(1+i) - 2} = \frac{-20 + 4}{2i} = -\frac{16}{2i} = \boxed{8i}
  \]

### Problem 26: \( \lim_{z \to \sqrt{2}i} \frac{z(z^3 + 5z^2 + 2z + 10)}{z^5 + 2z^3} \)
* Factor out \( z^2+2 \) from both numerator and denominator (since \( z \ne \sqrt{2}i \)):
  \[
  \lim_{z \to \sqrt{2}i} \frac{z(z^2+2)(z+5)}{z^3(z^2+2)} = \lim_{z \to \sqrt{2}i} \frac{z+5}{z^2} = \frac{5 + \sqrt{2}i}{-2} = \boxed{-\frac{5}{2} - \frac{\sqrt{2}}{2}i}
  \]

---

## Problems 27 – 30: Singular Points (Non-Analytic Points)

*Recall that a rational function fails to be analytic only where its denominator is zero.*

### Problem 27: \( f(z) = \frac{iz^2 - 2z}{3z + 1 - i} \)
* Denominator is zero at \( 3z + 1 - i = 0 \implies z = \boxed{-\frac{1}{3} + \frac{1}{3}i} \).

### Problem 28: \( f(z) = \frac{-5iz^2 + 2 + i}{z^2} \)
* Denominator is zero at \( \boxed{z = 0} \).

### Problem 29: \( f(z) = (z^4 - 2iz^2 + z)^{10} \)
* This is a polynomial, which is an entire function.
* **Answer:** \( \boxed{\text{Analytic for all } z} \) (no singular points).

### Problem 30: \( f(z) = \left( \frac{(4+2i)z}{(2-i)z^2 + 9i} \right)^3 \)
* Denominator is zero at \( (2-i)z^2 + 9i = 0 \implies z^2 = \frac{-9i}{2-i} = \frac{9}{5} - \frac{18}{5}i \).
* Solving \( z^2 = 1.8 - 3.6i \) gives:
  \[
  z = \pm \boxed{\frac{3}{\sqrt{5}}\sqrt{1-2i}} \approx \pm (1.706 - 1.055i)
  \]

---

## Focus on Concepts (Problems 31 – 35)

### Problem 31: Continuity of the Derivative
* **No.** If \( f'(z) \) is only assumed to exist at a single point \( z \), then \( f'(z) \) is not defined in any neighborhood of \( z \), and therefore cannot be continuous in the plane. (Example: \( f(z) = |z|^2 \) is differentiable only at \( z = 0 \), so \( f' \) is not continuous at \( z = 0 \)).
* Note: If \( f \) is analytic in a domain \( D \), then \( f'(z) \) is analytic and thus continuous on \( D \).

### Problem 32: Cauchy-Riemann Conjecture
* **(a)** For \( f(z) = z^2 = (x^2 - y^2) + i(2xy) \):
  * \( u_x = 2x, \, v_y = 2x \implies u_x = v_y \).
  * \( u_y = -2y, \, v_x = 2y \implies u_y = -v_x \).
  * Since \( f'(z) = 2z = 2x + 2iy \), we observe \( f'(z) = u_x + i v_x = v_y - i u_y \).
* **(b)** For \( f(z) = 3iz + 2 = -3y + 2 + 3ix \):
  * \( u_x = 0, \, v_y = 0 \implies u_x = v_y \).
  * \( u_y = -3, \, v_x = 3 \implies u_y = -v_x \).
  * Since \( f'(z) = 3i \), we observe \( f'(z) = u_x + i v_x = v_y - i u_y \).
* **(c) Conjecture:** For any differentiable function \( f(z) = u(x,y) + iv(x,y) \), the partial derivatives satisfy \( u_x = v_y \) and \( u_y = -v_x \), and the derivative is given by \( f'(z) = u_x + iv_x \).

### Problem 33: Proof of L'Hopital's Rule
* We assume \( f \) and \( g \) are analytic at \( z_0 \), \( f(z_0) = g(z_0) = 0 \), and \( g'(z_0) \ne 0 \).
* The limit is:
  \[
  \lim_{z \to z_0} \frac{f(z)}{g(z)} = \lim_{z \to z_0} \frac{\frac{f(z) - f(z_0)}{z-z_0}}{\frac{g(z) - g(z_0)}{z-z_0}} = \frac{\lim_{z \to z_0} \frac{f(z) - f(z_0)}{z-z_0}}{\lim_{z \to z_0} \frac{g(z) - g(z_0)}{z-z_0}} = \frac{f'(z_0)}{g'(z_0)}
  \]
  since \( g'(z_0) \ne 0 \).

### Problem 34: Proof of the Product Rule
* **(a)** Add and subtract \( f(z)g(z+\Delta z) \) in the numerator:
  \[
  f(z+\Delta z)g(z+\Delta z) - f(z)g(z) = [f(z+\Delta z) - f(z)]g(z+\Delta z) + f(z)[g(z+\Delta z) - g(z)]
  \]
  Dividing by \( \Delta z \) yields:
  \[
  \frac{d}{dz}[f(z)g(z)] = \lim_{\Delta z \to 0} \left( \frac{f(z+\Delta z) - f(z)}{\Delta z} g(z+\Delta z) + f(z) \frac{g(z+\Delta z) - g(z)}{\Delta z} \right)
  \]
* **(b)** Since \( g \) is differentiable at \( z \), it is continuous at \( z \), which means \( \lim_{\Delta z \to 0} g(z+\Delta z) = g(z) \).
* **(c)** Applying limit theorems:
  \[
  \lim_{\Delta z \to 0} \frac{f(z+\Delta z) - f(z)}{\Delta z} \lim_{\Delta z \to 0} g(z+\Delta z) + f(z) \lim_{\Delta z \to 0} \frac{g(z+\Delta z) - g(z)}{\Delta z} = f'(z)g(z) + f(z)g'(z)
  \]

### Problem 35: Polar Form Proof for \( f(z) = \bar{z} \)
* **(a)** Let \( \Delta z = |\Delta z|(\cos\theta + i\sin\theta) \implies \overline{\Delta z} = |\Delta z|(\cos\theta - i\sin\theta) \).
  \[
  \lim_{\Delta z \to 0} \frac{\overline{\Delta z}}{\Delta z} = \lim_{\Delta z \to 0} \frac{\cos\theta - i\sin\theta}{\cos\theta + i\sin\theta} = e^{-2i\theta}
  \]
* **(b) Explanation:** Since \( e^{-2i\theta} \) depends on the angle of approach \( \theta \), the limit as \( \Delta z \to 0 \) is different along different directions. Thus, the limit does not exist, proving \( f(z) = \bar{z} \) is nowhere differentiable.

---

<a name="section-32"></a>
## Section 3.2: Cauchy-Riemann Equations
---

> **Key Concepts of the Cauchy-Riemann Equations**
>
> 1. **Cauchy-Riemann (C-R) Equations (Cartesian):** For a complex function \( f(z) = u(x, y) + i v(x, y) \), if \( f \) is differentiable at \( z \), then:
>    \[
>    u_x = v_y \quad \text{and} \quad u_y = -v_x
>    \]
> 2. **Sufficient Condition for Analyticity:** If the real-valued functions \( u(x,y) \) and \( v(x,y) \) and their first-order partial derivatives are continuous in a domain \( D \), and satisfy the C-R equations at every point in \( D \), then \( f(z) = u+iv \) is analytic in \( D \).
> 3. **Derivative Formula:** When \( f \) is differentiable, its derivative is:
>    \[
>    f'(z) = u_x + i v_x = v_y - i u_y
>    \]
> 4. **C-R Equations (Polar):** For \( f(z) = u(r, \theta) + i v(r, \theta) \):
>    \[
>    u_r = \frac{1}{r} v_\theta \quad \text{and} \quad v_r = -\frac{1}{r} u_\theta
>    \]
>    The derivative in polar form is:
>    \[
>    f'(z) = e^{-i\theta} (u_r + i v_r)
>    \]

---

## Problems 1 & 2: Verification of C-R Equations for Analytic Functions

### Problem 1: \( f(z) = z^3 \)
* Express in Cartesian form:
  \[
  f(z) = (x+iy)^3 = (x^3 - 3xy^2) + i(3x^2y - y^3) \implies u(x,y) = x^3 - 3xy^2, \, v(x,y) = 3x^2y - y^3
  \]
* Compute first-order partial derivatives:
  \[
  u_x = 3x^2 - 3y^2, \quad v_y = 3x^2 - 3y^2 \implies u_x = v_y
  \]
  \[
  u_y = -6xy, \quad v_x = 6xy \implies u_y = -v_x
  \]
* Since the C-R equations are satisfied everywhere, the verification is complete.

### Problem 2: \( f(z) = 3z^2 + 5z - 6i \)
* Express in Cartesian form:
  \[
  f(z) = 3(x^2 - y^2 + 2ixy) + 5(x+iy) - 6i = (3x^2 - 3y^2 + 5x) + i(6xy + 5y - 6)
  \]
  \[
  u(x,y) = 3x^2 - 3y^2 + 5x, \quad v(x,y) = 6xy + 5y - 6
  \]
* Compute partial derivatives:
  \[
  u_x = 6x + 5, \quad v_y = 6x + 5 \implies u_x = v_y
  \]
  \[
  u_y = -6y, \quad v_x = 6y \implies u_y = -v_x
  \]
* C-R equations are satisfied everywhere.

---

## Problems 3 – 8: Showing Functions are Nowhere Analytic

### Problem 3: \( f(z) = \operatorname{Re}(z) = x \)
* Here \( u = x \) and \( v = 0 \).
* Compute partials: \( u_x = 1 \), \( v_y = 0 \).
* Since \( u_x \ne v_y \) everywhere, the function is nowhere analytic.

### Problem 4: \( f(z) = y + ix \)
* Here \( u = y \) and \( v = x \).
* Compute partials: \( u_x = 0 \), \( v_y = 0 \implies u_x = v_y \) is satisfied.
* However, \( u_y = 1 \) and \( v_x = 1 \implies u_y = 1 \ne -v_x = -1 \).
* Since C-R equations are never satisfied, the function is nowhere analytic.

### Problem 5: \( f(z) = 4z - 6\bar{z} + 3 \)
* Express in Cartesian form:
  \[
  f(z) = 4(x+iy) - 6(x-iy) + 3 = (-2x + 3) + i(10y) \implies u = -2x+3, \, v = 10y
  \]
* Compute partials: \( u_x = -2 \), \( v_y = 10 \).
* Since \( u_x \ne v_y \), the function is nowhere analytic.

### Problem 6: \( f(z) = \bar{z}^2 \)
* Express in Cartesian form:
  \[
  f(z) = (x-iy)^2 = (x^2 - y^2) - 2ixy \implies u = x^2-y^2, \, v = -2xy
  \]
* Compute partials:
  \[
  u_x = 2x, \, v_y = -2x \implies u_x = v_y \iff x = 0
  \]
  \[
  u_y = -2y, \, v_x = -2y \implies u_y = -v_x \iff y = 0
  \]
* C-R equations are satisfied only at the isolated point \( z = 0 \). Since analyticity at a point requires differentiability in an open neighborhood, \( f \) is nowhere analytic.

### Problem 7: \( f(z) = x^2 + y^2 \)
* Here \( u = x^2+y^2 \) and \( v = 0 \).
* Compute partials:
  \[
  u_x = 2x, \, v_y = 0 \iff x = 0
  \]
  \[
  u_y = 2y, \, v_x = 0 \iff y = 0
  \]
* Satisfied only at \( z = 0 \), hence nowhere analytic.

### Problem 8: \( f(z) = \frac{x}{x^2 + y^2} + i\frac{y}{x^2 + y^2} \) for \( z \ne 0 \)
* Here \( u = \frac{x}{x^2+y^2} \) and \( v = \frac{y}{x^2+y^2} \).
* Compute partials:
  \[
  u_x = \frac{y^2-x^2}{(x^2+y^2)^2}, \quad v_y = \frac{x^2-y^2}{(x^2+y^2)^2}
  \]
  For \( u_x = v_y \implies y^2-x^2 = x^2-y^2 \implies x^2 = y^2 \).
  \[
  u_y = \frac{-2xy}{(x^2+y^2)^2}, \quad v_x = \frac{-2xy}{(x^2+y^2)^2}
  \]
  For \( u_y = -v_x \implies -2xy = 2xy \implies xy = 0 \implies x=0 \text{ or } y=0 \).
* Combining these conditions, we must have \( x=y=0 \), which is excluded from the domain. Thus C-R equations are never satisfied, and the function is nowhere analytic.

---

## Problems 9 – 16: Domains of Analyticity

### Problem 9: \( f(z) = e^{-x}\cos y - i e^{-x}\sin y \)
* \( u = e^{-x}\cos y \), \( v = -e^{-x}\sin y \).
* Compute partials:
  \[
  u_x = -e^{-x}\cos y, \quad v_y = -e^{-x}\cos y \implies u_x = v_y
  \]
  \[
  u_y = -e^{-x}\sin y, \quad v_x = e^{-x}\sin y \implies u_y = -v_x
  \]
* The partials are continuous everywhere.
* **Domain of analyticity:** Entire complex plane \( \boxed{\mathbb{C}} \).

### Problem 10: \( f(z) = x + \sin x \cosh y + i(y + \cos x \sinh y) \)
* \( u = x + \sin x \cosh y \), \( v = y + \cos x \sinh y \).
* Compute partials:
  \[
  u_x = 1 + \cos x \cosh y, \quad v_y = 1 + \cos x \cosh y \implies u_x = v_y
  \]
  \[
  u_y = \sin x \sinh y, \quad v_x = -\sin x \sinh y \implies u_y = -v_x
  \]
* Partials are continuous everywhere.
* **Domain of analyticity:** Entire complex plane \( \boxed{\mathbb{C}} \).

### Problem 11: \( f(z) = e^{x^2-y^2}\cos(2xy) + ie^{x^2-y^2}\sin(2xy) \)
* \( u = e^{x^2-y^2}\cos(2xy) \), \( v = e^{x^2-y^2}\sin(2xy) \).
* Compute partials:
  \[
  u_x = 2x e^{x^2-y^2}\cos(2xy) - 2y e^{x^2-y^2}\sin(2xy), \quad v_y = 2x e^{x^2-y^2}\cos(2xy) - 2y e^{x^2-y^2}\sin(2xy) \implies u_x = v_y
  \]
  \[
  u_y = -2y e^{x^2-y^2}\cos(2xy) - 2x e^{x^2-y^2}\sin(2xy), \quad v_x = 2y e^{x^2-y^2}\cos(2xy) + 2x e^{x^2-y^2}\sin(2xy) \implies u_y = -v_x
  \]
* Partials are continuous everywhere.
* **Domain of analyticity:** Entire complex plane \( \boxed{\mathbb{C}} \) (Note: \( f(z) = e^{z^2} \)).

### Problem 12: \( f(z) = 4x^2 + 5x - 4y^2 + 9 + i(8xy + 5y - 1) \)
* \( u = 4x^2 + 5x - 4y^2 + 9 \), \( v = 8xy + 5y - 1 \).
* Compute partials:
  \[
  u_x = 8x + 5, \quad v_y = 8x + 5 \implies u_x = v_y
  \]
  \[
  u_y = -8y, \quad v_x = 8y \implies u_y = -v_x
  \]
* Partials are continuous everywhere.
* **Domain of analyticity:** Entire complex plane \( \boxed{\mathbb{C}} \) (Note: \( f(z) = 4z^2 + 5z + 9 - i \)).

### Problem 13: \( f(z) = \frac{x-1}{(x-1)^2+y^2} - i\frac{y}{(x-1)^2+y^2} \)
* \( u = \frac{x-1}{(x-1)^2+y^2} \), \( v = \frac{-y}{(x-1)^2+y^2} \).
* Let \( X = x-1 \).
  \[
  u_x = u_X = \frac{y^2-X^2}{(X^2+y^2)^2}, \quad v_y = \frac{y^2-X^2}{(X^2+y^2)^2} \implies u_x = v_y
  \]
  \[
  u_y = \frac{-2Xy}{(X^2+y^2)^2}, \quad v_x = v_X = \frac{2Xy}{(X^2+y^2)^2} \implies u_y = -v_x
  \]
* Partials are continuous everywhere except where \( (x-1)^2+y^2 = 0 \implies z = 1 \).
* **Domain of analyticity:** All points in the complex plane except \( \boxed{z = 1} \) (Note: \( f(z) = 1/(z-1) \)).

### Problem 14: \( f(z) = x^3 + xy^2 + \frac{x}{x^2+y^2} + i\left( x^2y + y^3 - \frac{y}{x^2+y^2} \right) \)
* **Analysis of Textbook Typo:**
  * As written in the textbook, \( u = x^3 + xy^2 + \frac{x}{x^2+y^2} \) and \( v = x^2y + y^3 - \frac{y}{x^2+y^2} \).
  * Checking C-R equations:
    \[
    u_x = 3x^2 + y^2 + \frac{y^2-x^2}{(x^2+y^2)^2}, \quad v_y = x^2 + 3y^2 + \frac{y^2-x^2}{(x^2+y^2)^2}
    \]
    For \( u_x = v_y \implies 2x^2 = 2y^2 \implies y = \pm x \).
    \[
    u_y = 2xy - \frac{2xy}{(x^2+y^2)^2}, \quad v_x = 2xy + \frac{2xy}{(x^2+y^2)^2}
    \]
    For \( u_y = -v_x \implies 4xy = 0 \implies x = 0 \text{ or } y = 0 \).
  * Thus, C-R equations are only satisfied at the origin, where the function is undefined. The function as printed is **nowhere analytic**.
* **Corrected Function Analysis:**
  * If the function is corrected to \( f(z) = z^3 + 1/z \):
    \[
    f(z) = (x^3 - 3xy^2 + \frac{x}{x^2+y^2}) + i(3x^2y - y^3 - \frac{y}{x^2+y^2})
    \]
    This is analytic everywhere except the origin \( z = 0 \).
* **Answer:** **Nowhere analytic** as printed in the textbook; **analytic for all \( z \ne 0 \)** if corrected to \( f(z) = z^3 + 1/z \).

### Problem 15: \( f(z) = \frac{\cos\theta}{r} - i\frac{\sin\theta}{r} \)
* Use polar form \( u = \frac{\cos\theta}{r} \), \( v = -\frac{\sin\theta}{r} \).
* Compute polar partials:
  \[
  u_r = -\frac{\cos\theta}{r^2}, \quad \frac{1}{r}v_\theta = -\frac{\cos\theta}{r^2} \implies u_r = \frac{1}{r}v_\theta
  \]
  \[
  v_r = \frac{\sin\theta}{r^2}, \quad -\frac{1}{r}u_\theta = \frac{\sin\theta}{r^2} \implies v_r = -\frac{1}{r}u_\theta
  \]
* Partials are continuous for all \( r > 0 \).
* **Domain of analyticity:** All points in the complex plane except \( \boxed{z = 0} \) (Note: \( f(z) = 1/z \)).

### Problem 16: \( f(z) = 5r\cos\theta + r^4\cos 4\theta + i(5r\sin\theta + r^4\sin 4\theta) \)
* \( u = 5r\cos\theta + r^4\cos 4\theta \), \( v = 5r\sin\theta + r^4\sin 4\theta \).
* Compute polar partials:
  \[
  u_r = 5\cos\theta + 4r^3\cos 4\theta, \quad \frac{1}{r}v_\theta = 5\cos\theta + 4r^3\cos 4\theta \implies u_r = \frac{1}{r}v_\theta
  \]
  \[
  v_r = 5\sin\theta + 4r^3\sin 4\theta, \quad -\frac{1}{r}u_\theta = 5\sin\theta + 4r^3\sin 4\theta \implies v_r = -\frac{1}{r}u_\theta
* Partials are continuous everywhere.
* **Domain of analyticity:** Entire complex plane \( \boxed{\mathbb{C}} \) (Note: \( f(z) = 5z + z^4 \)).

---

## Problems 17 & 18: Determining Constants for Analyticity

### Problem 17: \( f(z) = 3x - y + 5 + i(ax + by - 3) \)
* \( u = 3x-y+5, \, v = ax+by-3 \).
* Compute partials:
  \[
  u_x = 3, \, v_y = b \implies b = 3
  \]
  \[
  u_y = -1, \, v_x = a \implies -1 = -a \implies a = 1
  \]
* **Answer:** \( \boxed{a = 1, \, b = 3} \).

### Problem 18: \( f(z) = x^2 + axy + by^2 + i(cx^2 + dxy + y^2) \)
* \( u = x^2 + axy + by^2, \, v = cx^2 + dxy + y^2 \).
* Compute partials:
  \[
  u_x = 2x + ay, \quad v_y = dx + 2y \implies d = 2 \text{ and } a = 2
  \]
  \[
  u_y = ax + 2by, \quad v_x = 2cx + dy
  \]
  Using \( u_y = -v_x \):
  \[
  ax + 2by = -2cx - dy \implies a = -2c \implies 2 = -2c \implies c = -1
  \]
  \[
  2b = -d \implies 2b = -2 \implies b = -1
  \]
* **Answer:** \( \boxed{a = 2, \, b = -1, \, c = -1, \, d = 2} \).

---

## Problems 19 – 22: Differentiable along Curves

### Problem 19: \( f(z) = x^2 + y^2 + 2ixy \)
* \( u = x^2+y^2, \, v = 2xy \).
* Compute partials:
  \[
  u_x = 2x, \, v_y = 2x \implies u_x = v_y \text{ (always satisfied)}
  \]
  \[
  u_y = 2y, \, v_x = 2y \implies u_y = -v_x \iff 2y = -2y \iff y = 0
  \]
* C-R equations are satisfied only on the **x-axis** (\( y = 0 \)).
* The function is differentiable along the **x-axis** but nowhere analytic.

### Problem 20: \( f(z) = 3x^2y^2 - 6ix^2y^2 \)
* \( u = 3x^2y^2, \, v = -6x^2y^2 \).
* Compute partials:
  \[
  u_x = 6xy^2, \, v_y = -12x^2y \implies 6xy(y + 2x) = 0 \implies x=0, \, y=0, \text{ or } y=-2x
  \]
  \[
  u_y = 6x^2y, \, v_x = -12xy^2 \implies u_y = -v_x \iff 6xy(x - 2y) = 0 \implies x=0, \, y=0, \text{ or } x=2y
  \]
* For both equations to be satisfied: \( x = 0 \) or \( y = 0 \).
* The function is differentiable along the **coordinate axes** but nowhere analytic.

### Problem 21: \( f(z) = x^3 + 3xy^2 - x + i(y^3 + 3x^2y - y) \)
* \( u = x^3 + 3xy^2 - x, \, v = y^3 + 3x^2y - y \).
* Compute partials:
  \[
  u_x = 3x^2 + 3y^2 - 1, \, v_y = 3y^2 + 3x^2 - 1 \implies u_x = v_y \text{ (always satisfied)}
  \]
  \[
  u_y = 6xy, \, v_x = 6xy \implies u_y = -v_x \iff 12xy = 0 \implies x = 0 \text{ or } y = 0
  \]
* The function is differentiable along the **coordinate axes** but nowhere analytic.

### Problem 22: \( f(z) = x^2 - x + y + i(y^2 - 5y - x) \)
* \( u = x^2-x+y, \, v = y^2-5y-x \).
* Compute partials:
  \[
  u_x = 2x-1, \, v_y = 2y-5 \implies u_x = v_y \iff 2x-1 = 2y-5 \iff y = x+2
  \]
  \[
  u_y = 1, \, v_x = -1 \implies u_y = -v_x \iff 1 = 1 \text{ (always satisfied)}
  \]
* The function is differentiable along the line **\( y = x+2 \)** but nowhere analytic.

---

## Problems 23 & 24: Computing Derivatives

### Problem 23: Derivative of \( f(z) = e^{-x}\cos y - i e^{-x}\sin y \)
* Using \( f'(z) = u_x + i v_x \):
  \[
  f'(z) = -e^{-x}\cos y + i e^{-x}\sin y = \boxed{-f(z)}
  \]

### Problem 24: Derivative of \( f(z) = e^{x^2-y^2}\cos(2xy) + ie^{x^2-y^2}\sin(2xy) \)
* Using \( f'(z) = u_x + i v_x \):
  \[
  f'(z) = 2x e^{x^2-y^2}\cos(2xy) - 2y e^{x^2-y^2}\sin(2xy) + i\left( 2y e^{x^2-y^2}\cos(2xy) + 2x e^{x^2-y^2}\sin(2xy) \right)
  \]
  \[
  = 2(x+iy) e^{x^2-y^2} (\cos 2xy + i\sin 2xy) = \boxed{2z e^{z^2}}
  \]

---

## Problems 25 & 26

### Problem 25
* **(a) Show \( e^z \) is entire:**
  For \( u = e^x\cos y \) and \( v = e^x\sin y \):
  \[
  u_x = e^x\cos y, \, v_y = e^x\cos y \implies u_x = v_y
  \]
  \[
  u_y = -e^x\sin y, \, v_x = e^x\sin y \implies u_y = -v_x
  \]
  Since the partial derivatives are continuous and satisfy C-R everywhere, \( e^z \) is entire.
* **(b) Show \( (e^z)' = e^z \):**
  \[
  (e^z)' = u_x + i v_x = e^x\cos y + i e^x\sin y = e^z
  \]

### Problem 26: Show \( |f'(z)|^2 = u_x^2 + v_x^2 = u_y^2 + v_y^2 \)
* Since \( f'(z) = u_x + i v_x \), we have \( |f'(z)|^2 = u_x^2 + v_x^2 \).
* Applying C-R equations \( u_x = v_y \) and \( v_x = -u_y \):
  \[
  u_x^2 + v_x^2 = (v_y)^2 + (-u_y)^2 = u_y^2 + v_y^2
  \]

---

## Focus on Concepts (Problems 27 – 35)

### Problem 27: Analyticity of \( g(z) = v(x,y) + iu(x,y) \)
* Let \( U = v \) and \( V = u \). For \( g \) to be analytic:
  \[
  U_x = V_y \implies v_x = u_y, \quad U_y = -V_x \implies v_y = -u_x
  \]
* But \( f \) is analytic, so \( u_x = v_y \) and \( u_y = -v_x \).
* Combining these:
  \[
  v_x = u_y \implies v_x = -v_x \implies v_x = 0 \implies u_y = 0
  \]
  \[
  v_y = -u_x \implies u_x = -u_x \implies u_x = 0 \implies v_y = 0
  \]
* Thus, \( g(z) \) is analytic if and only if all partial derivatives of \( u \) and \( v \) are 0, which means \( f(z) \) is a constant function.

### Problem 28: Analyticity of \( g(z) = \overline{f(z)} \)
* Let \( U = u \) and \( V = -v \). For \( g \) to be analytic:
  \[
  U_x = V_y \implies u_x = -v_y, \quad U_y = -V_x \implies u_y = v_x
  \]
* Since \( f \) is analytic, \( u_x = v_y \) and \( u_y = -v_x \).
* Combining these:
  \[
  u_x = -v_y \implies u_x = -u_x \implies u_x = 0 \implies v_y = 0
  \]
  \[
  u_y = v_x \implies u_y = -u_y \implies u_y = 0 \implies v_x = 0
  \]
* Thus, \( \overline{f(z)} \) is analytic if and only if \( f(z) \) is a constant function.

### Problem 29: Proof that \( |f(z)| = c \implies f(z) \) is constant
* We have \( u^2 + v^2 = c^2 \). If \( c = 0 \), \( f(z) = 0 \) is constant. If \( c \ne 0 \), differentiate with respect to \( x \) and \( y \):
  \[
  1) \, u u_x + v v_x = 0, \quad 2) \, u u_y + v v_y = 0
  \]
* Use C-R to substitute \( v_x = -u_y \) and \( v_y = u_x \):
  \[
  \begin{cases}
  u u_x - v u_y = 0 \\
  v u_x + u u_y = 0
  \end{cases}
  \]
* The determinant of this system is \( u^2 + v^2 = c^2 \ne 0 \). Hence, the only solution is \( u_x = 0 \) and \( u_y = 0 \).
* By C-R, this also implies \( v_x = 0 \) and \( v_y = 0 \).
* Since all partials are zero, \( u \) and \( v \) are constant, so \( f(z) \) is constant.

### Problem 30: Proof that \( f'(z) = 0 \implies f(z) \) is constant
* We have \( f'(z) = u_x + i v_x = 0 \implies u_x = 0 \) and \( v_x = 0 \).
* By C-R, \( v_y = u_x = 0 \) and \( u_y = -v_x = 0 \).
* Since all first-order partials of \( u \) and \( v \) are zero throughout the domain \( D \), \( u \) and \( v \) are constant, hence \( f(z) \) is constant.

### Problem 31: Show \( f'(z) = g'(z) \implies f(z) = g(z) + c \)
* Let \( h(z) = f(z) - g(z) \). Since \( f, g \) are analytic, \( h \) is analytic.
* We have \( h'(z) = f'(z) - g'(z) = 0 \).
* By Problem 30, \( h(z) = c \) (constant) \( \implies f(z) = g(z) + c \).

### Problem 32: If \( f(z) \) and \( \overline{f(z)} \) are both analytic, then \( f \) is constant
* As proved in Problem 28, the analyticity of \( \overline{f(z)} \) implies \( f(z) \) must be a constant function.

### Problem 33: Derivation of Polar C-R Equations
* Differentiating \( u(r\cos\theta, \, r\sin\theta) \):
  \[
  u_r = u_x \cos\theta + u_y \sin\theta \quad (1), \qquad u_\theta = -r u_x \sin\theta + r u_y \cos\theta \quad (2)
  \]
  \[
  v_r = v_x \cos\theta + v_y \sin\theta \quad (3), \qquad v_\theta = -r v_x \sin\theta + r v_y \cos\theta \quad (4)
  \]
* Substitute Cartesian C-R equations \( v_x = -u_y \) and \( v_y = u_x \) into (3) and (4):
  \[
  v_r = -u_y \cos\theta + u_x \sin\theta
  \]
  \[
  v_\theta = r u_y \sin\theta + r u_x \cos\theta = r(u_x\cos\theta + u_y\sin\theta) = r u_r \implies u_r = \frac{1}{r}v_\theta
  \]
  Similarly, compare \( v_r \) and \( u_\theta \):
  \[
  v_r = -\frac{1}{r} (-r u_x\sin\theta + r u_y\cos\theta) = -\frac{1}{r}u_\theta \implies v_r = -\frac{1}{r}u_\theta
  \]

### Problem 34: Polar Derivative Formula
* Solve (1) and (2) for \( u_x \), and (3) and (4) for \( v_x \):
  \[
  u_x = u_r\cos\theta - \frac{u_\theta}{r}\sin\theta, \quad v_x = v_r\cos\theta - \frac{v_\theta}{r}\sin\theta
  \]
* Substitute into \( f'(z) = u_x + i v_x \):
  \[
  f'(z) = \left( u_r\cos\theta - \frac{u_\theta}{r}\sin\theta \right) + i \left( v_r\cos\theta - \frac{v_\theta}{r}\sin\theta \right)
  \]
* Apply polar C-R: \( u_\theta/r = -v_r \) and \( v_\theta/r = u_r \):
  \[
  f'(z) = (u_r\cos\theta + v_r\sin\theta) + i(v_r\cos\theta - u_r\sin\theta)
  \]
  \[
  = (u_r + i v_r)(\cos\theta - i\sin\theta) = e^{-i\theta}(u_r + i v_r)
  \]

### Problem 35: \( f(z) = \frac{z^5}{|z|^4} \) for \( z \ne 0 \), and \( f(0) = 0 \)
* **(a) Real and Imaginary parts:**
  Using \( z^5 = (x+iy)^5 \):
  \[
  u(x,y) = \frac{x^5 - 10x^3y^2 + 5xy^4}{(x^2+y^2)^2}, \quad v(x,y) = \frac{5x^4y - 10x^2y^3 + y^5}{(x^2+y^2)^2}
  \]
* **(b) Show not differentiable at origin:**
  Let \( \Delta z \to 0 \) along the ray \( \theta \):
  \[
  \lim_{\Delta z \to 0} \frac{f(\Delta z) - f(0)}{\Delta z} = \lim_{r \to 0} \frac{\frac{r^5 e^{5i\theta}}{r^4}}{r e^{i\theta}} = e^{4i\theta}
  \]
  Since this limit depends on \( \theta \), \( f \) is not differentiable at \( z = 0 \).
* **(c) Show C-R are satisfied at origin:**
  Evaluate partials using limit definitions at \( (0,0) \):
  \[
  u_x(0,0) = \lim_{x \to 0} \frac{u(x,0) - u(0,0)}{x} = \lim_{x \to 0} \frac{x^5/x^4}{x} = 1
  \]
  \[
  v_y(0,0) = \lim_{y \to 0} \frac{v(0,y) - v(0,0)}{y} = \lim_{y \to 0} \frac{y^5/y^4}{y} = 1 \implies u_x(0,0) = v_y(0,0)
  \]
  \[
  u_y(0,0) = \lim_{y \to 0} \frac{0 - 0}{y} = 0, \quad v_x(0,0) = \lim_{x \to 0} \frac{0 - 0}{x} = 0 \implies u_y(0,0) = -v_x(0,0)
  \]
  Thus, C-R equations are satisfied at the origin.

---

<a name="section-33"></a>
## Section 3.3: Harmonic Functions
---

> **Key Concepts of Harmonic Functions**
>
> 1. **Laplace's Equation:** A real-valued function \( u(x, y) \) is harmonic in a domain \( D \) if it has continuous second-order partial derivatives and satisfies Laplace's equation:
>    \[
>    \nabla^2 u = u_{xx} + u_{yy} = 0
>    \]
> 2. **Analytic Relation:** If \( f(z) = u(x, y) + i v(x, y) \) is analytic in \( D \), then both \( u(x, y) \) and \( v(x, y) \) are harmonic in \( D \).
> 3. **Harmonic Conjugate:** Two harmonic functions \( u \) and \( v \) are harmonic conjugates if they satisfy the Cauchy-Riemann equations:
>    \[
>    v_y = u_x \quad \text{and} \quad v_x = -u_y
>    \]
> 4. **Laplace's Equation in Polar Coordinates:**
>    \[
>    r^2 \frac{\partial^2 u}{\partial r^2} + r \frac{\partial u}{\partial r} + \frac{\partial^2 u}{\partial \theta^2} = 0
>    \]

---

## Problems 1 – 8: Verifying Harmonic Functions

For each problem, we compute \( u_{xx} \) and \( u_{yy} \) and show \( u_{xx} + u_{yy} = 0 \).

### Problem 1: \( u(x, y) = x \)
* \( u_x = 1 \implies u_{xx} = 0 \).
* \( u_y = 0 \implies u_{yy} = 0 \).
* \( u_{xx} + u_{yy} = 0 + 0 = 0 \).

### Problem 2: \( u(x, y) = 2x - 2xy \)
* \( u_x = 2 - 2y \implies u_{xx} = 0 \).
* \( u_y = -2x \implies u_{yy} = 0 \).
* \( u_{xx} + u_{yy} = 0 + 0 = 0 \).

### Problem 3: \( u(x, y) = x^2 - y^2 \)
* \( u_x = 2x \implies u_{xx} = 2 \).
* \( u_y = -2y \implies u_{yy} = -2 \).
* \( u_{xx} + u_{yy} = 2 - 2 = 0 \).

### Problem 4: \( u(x, y) = x^3 - 3xy^2 \)
* \( u_x = 3x^2 - 3y^2 \implies u_{xx} = 6x \).
* \( u_y = -6xy \implies u_{yy} = -6x \).
* \( u_{xx} + u_{yy} = 6x - 6x = 0 \).

### Problem 5: \( u(x, y) = \log_e(x^2 + y^2) \)
* \( u_x = \frac{2x}{x^2+y^2} \implies u_{xx} = \frac{2(x^2+y^2) - 4x^2}{(x^2+y^2)^2} = \frac{2y^2 - 2x^2}{(x^2+y^2)^2} \).
* \( u_y = \frac{2y}{x^2+y^2} \implies u_{yy} = \frac{2(x^2+y^2) - 4y^2}{(x^2+y^2)^2} = \frac{2x^2 - 2y^2}{(x^2+y^2)^2} \).
* \( u_{xx} + u_{yy} = \frac{2y^2 - 2x^2 + 2x^2 - 2y^2}{(x^2+y^2)^2} = 0 \).

### Problem 6: \( u(x, y) = \cos x \cosh y \)
* \( u_x = -\sin x \cosh y \implies u_{xx} = -\cos x \cosh y \).
* \( u_y = \cos x \sinh y \implies u_{yy} = \cos x \cosh y \).
* \( u_{xx} + u_{yy} = -\cos x \cosh y + \cos x \cosh y = 0 \).

### Problem 7: \( u(x, y) = e^x(x \cos y - y \sin y) \)
* \( u_x = e^x(x \cos y - y \sin y + \cos y) \implies u_{xx} = e^x(x \cos y - y \sin y + 2\cos y) \).
* \( u_y = e^x(-x \sin y - \sin y - y \cos y) \implies u_{yy} = e^x(-x \cos y - 2\cos y + y \sin y) \).
* \( u_{xx} + u_{yy} = 0 \).

### Problem 8: \( u(x, y) = -e^{-x} \sin y \)
* \( u_x = e^{-x} \sin y \implies u_{xx} = -e^{-x} \sin y \).
* \( u_y = -e^{-x} \cos y \implies u_{yy} = e^{-x} \sin y \).
* \( u_{xx} + u_{yy} = -e^{-x} \sin y + e^{-x} \sin y = 0 \).

---

## Problems 9 & 10: Finding Harmonic Conjugates

We integrate \( v_y = u_x \) and \( v_x = -u_y \) to find \( v(x, y) \) and construct \( f(z) = u + iv \).

### Problem 9
* **For \( u = x \) (Problem 1):**
  * \( v_y = u_x = 1 \implies v = y + C \).
  * **Answer:** \( v(x,y) = \boxed{y + C} \), \( f(z) = \boxed{z + iC} \).
* **For \( u = x^2 - y^2 \) (Problem 3):**
  * \( v_y = u_x = 2x \implies v = 2xy + h(x) \).
  * \( v_x = 2y + h'(x) = -u_y = 2y \implies h'(x) = 0 \implies h(x) = C \).
  * **Answer:** \( v(x,y) = \boxed{2xy + C} \), \( f(z) = \boxed{z^2 + iC} \).
* **For \( u = \log_e(x^2 + y^2) \) (Problem 5):**
  * \( v_y = u_x = \frac{2x}{x^2+y^2} \implies v = 2\arctan(y/x) + C \).
  * **Answer:** \( v(x,y) = \boxed{2\operatorname{Arg}(z) + C} \), \( f(z) = \boxed{2\operatorname{Ln}(z) + iC} \).
* **For \( u = e^x(x \cos y - y \sin y) \) (Problem 7):**
  * This is the real part of \( z e^z \).
  * **Answer:** \( v(x,y) = \boxed{e^x(y\cos y + x\sin y) + C} \), \( f(z) = \boxed{ze^z + iC} \).

### Problem 10
* **For \( u = 2x - 2xy \) (Problem 2):**
  * \( v_y = u_x = 2-2y \implies v = 2y - y^2 + h(x) \).
  * \( v_x = h'(x) = -u_y = 2x \implies h(x) = x^2 + C \).
  * **Answer:** \( v(x,y) = \boxed{x^2 - y^2 + 2y + C} \), \( f(z) = \boxed{iz^2 + 2z + iC} \).
* **For \( u = x^3 - 3xy^2 \) (Problem 4):**
  * This is the real part of \( z^3 \).
  * **Answer:** \( v(x,y) = \boxed{3x^2y - y^3 + C} \), \( f(z) = \boxed{z^3 + iC} \).
* **For \( u = \cos x \cosh y \) (Problem 6):**
  * \( v_y = u_x = -\sin x \cosh y \implies v = -\sin x \sinh y + h(x) \).
  * \( v_x = -\cos x \sinh y + h'(x) = -u_y = -\cos x \sinh y \implies h(x) = C \).
  * **Answer:** \( v(x,y) = \boxed{-\sin x \sinh y + C} \), \( f(z) = \boxed{\cos z + iC} \).
* **For \( u = -e^{-x} \sin y \) (Problem 8):**
  * \( v_y = u_x = e^{-x} \sin y \implies v = -e^{-x}\cos y + h(x) \).
  * \( v_x = e^{-x}\cos y + h'(x) = -u_y = e^{-x}\cos y \implies h(x) = C \).
  * **Answer:** \( v(x,y) = \boxed{-e^{-x}\cos y + C} \), \( f(z) = \boxed{-ie^{-z} + iC} \).

---

## Problems 11 & 12: Initial Value Problems

### Problem 11: \( u(x, y) = xy + x + 2y \); \( f(2i) = -1 + 5i \)
* **Finding \( v \):**
  * \( v_y = u_x = y + 1 \implies v = \frac{1}{2}y^2 + y + h(x) \).
  * \( v_x = h'(x) = -u_y = -x - 2 \implies h(x) = -\frac{1}{2}x^2 - 2x + C \).
  * Thus, \( v(x, y) = \frac{1}{2}y^2 - \frac{1}{2}x^2 + y - 2x + C \).
* **Resolving initial value discrepancy:**
  * For \( f(2i) = -1 + 5i \implies u(0, 2) = -1 \). But \( u(0, 2) = 0(2) + 0 + 2(2) = 4 \ne -1 \).
  * In Zill's official answers, they resolve this by treating the entire function \( f(z) \) as being shifted by a constant: \( u(x,y) = xy+x+2y-5 \).
  * Under this corrected function, \( u(0, 2) = -1 \) is satisfied.
  * Evaluate \( v(0, 2) = \frac{1}{2}(4) + 2 + C = 4 + C = 5 \implies C = 1 \).
* **Answer:** \( \boxed{v(x, y) = \frac{1}{2}y^2 - \frac{1}{2}x^2 + y - 2x + 1} \), \( \boxed{f(z) = xy + x + 2y - 5 + i\left(\frac{1}{2}y^2 - \frac{1}{2}x^2 + y - 2x + 1\right)} \).

### Problem 12: \( u(x, y) = 4xy^3 - 4x^3y + x \); \( f(1+i) = 5 + 4i \)
* **Finding \( v \):**
  * \( v_y = u_x = 4y^3 - 12x^2y + 1 \implies v = y^4 - 6x^2y^2 + y + h(x) \).
  * \( v_x = -12xy^2 + h'(x) = -u_y = -12xy^2 + 4x^3 \implies h(x) = x^4 + C \).
  * Thus, \( v(x, y) = x^4 - 6x^2y^2 + y^4 + y + C \).
* **Resolving initial value discrepancy:**
  * At \( x=1, y=1 \), \( u(1, 1) = 1 \ne 5 \). Adjusting \( u \) by adding \( 4 \) (so \( u(x,y) = 4xy^3 - 4x^3y + x + 4 \)) yields \( u(1,1) = 5 \).
  * Evaluate \( v(1, 1) = 1 - 6 + 1 + 1 + C = -3 + C = 4 \implies C = 7 \).
* **Answer:** \( \boxed{v(x, y) = x^4 - 6x^2y^2 + y^4 + y + 7} \), \( \boxed{f(z) = 4xy^3 - 4x^3y + x + 4 + i(x^4 - 6x^2y^2 + y^4 + y + 7)} \).

---

## Problems 13 & 14: Harmonic Functions in Polar coordinates

### Problem 13: \( v(x, y) = \frac{x}{x^2 + y^2} \)
* **(a) Verify \( v \) is harmonic:**
  \[
  v_x = \frac{y^2-x^2}{(x^2+y^2)^2} \implies v_{xx} = \frac{2x^3 - 6xy^2}{(x^2+y^2)^3}
  \]
  \[
  v_y = \frac{-2xy}{(x^2+y^2)^2} \implies v_{yy} = \frac{6xy^2 - 2x^3}{(x^2+y^2)^3} \implies v_{xx} + v_{yy} = 0
  \]
* **(b) Find \( u \):**
  Using C-R equations \( u_x = v_y \) and \( u_y = -v_x \):
  \[
  u_x = \frac{-2xy}{(x^2+y^2)^2} \implies u = \frac{y}{x^2+y^2} + h(y)
  \]
  \[
  u_y = \frac{x^2-y^2}{(x^2+y^2)^2} + h'(y) = -v_x = \frac{x^2-y^2}{(x^2+y^2)^2} \implies h(y) = C
  \]
  Thus, \( f(z) = \frac{y}{x^2+y^2} + i\frac{x}{x^2+y^2} + C \).
* **(c) Express in terms of \( z \):**
  \[
  f(z) = i \frac{x - iy}{x^2+y^2} + C = i \frac{\bar{z}}{|z|^2} + C = \boxed{\frac{i}{z} + C}
  \]

### Problem 14: Laplace's Equation in Polar Coordinates
* Polar C-R equations:
  \[
  1) \, r u_r = v_\theta \quad \text{and} \quad 2) \, u_\theta = -r v_r
  \]
* Take the partial derivative of (1) with respect to \( r \) and (2) with respect to \( \theta \):
  \[
  \frac{\partial^2 v}{\partial r \partial \theta} = \frac{\partial}{\partial r}(r u_r) = u_r + r u_{rr}
  \]
  \[
  \frac{\partial^2 v}{\partial \theta \partial r} = \frac{\partial}{\partial \theta}\left(-\frac{1}{r}u_\theta\right) = -\frac{1}{r}u_{\theta\theta}
  \]
* Equating mixed partial derivatives \( v_{r\theta} = v_{\theta r} \):
  \[
  u_r + r u_{rr} = -\frac{1}{r}u_{\theta\theta} \implies r^2 u_{rr} + r u_r + u_{\theta\theta} = 0
  \]

---

## Problems 15 & 16: Verification in Polar Coordinates

### Problem 15: \( u(r, \theta) = r^3 \cos 3\theta \)
* \( u_r = 3r^2\cos 3\theta \implies r u_r = 3r^3\cos 3\theta \).
* \( u_{rr} = 6r\cos 3\theta \implies r^2 u_{rr} = 6r^3\cos 3\theta \).
* \( u_{\theta\theta} = -9r^3\cos 3\theta \).
* Substituting into (5): \( (6 + 3 - 9) r^3\cos 3\theta = 0 \). (Harmonic).

### Problem 16: \( u(r, \theta) = 10\theta - \frac{\sin 2\theta}{r^2} \)
* *Note: The textbook has a typo printing \( 10r^2 \); the corrected harmonic function is \( 10\theta \).*
* For \( 10\theta \): \( u_r = u_{rr} = u_{\theta\theta} = 0 \implies \) satisfied.
* For \( -r^{-2}\sin 2\theta \):
  * \( u_r = 2r^{-3}\sin 2\theta \implies r u_r = 2r^{-2}\sin 2\theta \).
  * \( u_{rr} = -6r^{-4}\sin 2\theta \implies r^2 u_{rr} = -6r^{-2}\sin 2\theta \).
  * \( u_{\theta\theta} = 4r^{-2}\sin 2\theta \).
  * Substituting: \( (-6 + 2 + 4) r^{-2}\sin 2\theta = 0 \). (Harmonic).

---

## Focus on Concepts (Problems 17 – 22)

### Problem 17: \( u(x, y) = e^{x^2-y^2}\cos 2xy \)
* **(a) Verify u is harmonic:**
  As verified in Section 3.2 Problem 11, \( u \) is the real part of the entire function \( f(z) = e^{z^2} \).
* **(b) Harmonic conjugate:**
  \( v(x,y) = e^{x^2-y^2}\sin 2xy + C \). Since \( f(0) = 1 \implies e^0 + iC = 1 \implies C = 0 \).
  * **Answer:** \( \boxed{v(x, y) = e^{x^2-y^2}\sin 2xy} \), \( \boxed{f(z) = e^{z^2}} \).

### Problem 18: Expressing f from Problem 11 in terms of z
* From Problem 11: \( f(z) = (xy + x + 2y - 5) + i\left(\frac{1}{2}y^2 - \frac{1}{2}x^2 + y - 2x + 1\right) \).
* Substituting \( x = \frac{z+\bar{z}}{2} \) and \( y = \frac{z-\bar{z}}{2i} \):
  \[
  \boxed{f(z) = -\frac{i}{2} z^2 + (1 - 2i)z - 5 + i}
  \]

### Problem 19: 3D vs. 2D Laplace
* **(a) Show 3D function is harmonic:**
  Let \( R = (x^2+y^2+z^2)^{1/2} \).
  \[
  \phi_x = -x R^{-3} \implies \phi_{xx} = -R^{-3} + 3x^2 R^{-5}
  \]
  By symmetry, \( \phi_{xx} + \phi_{yy} + \phi_{zz} = -3R^{-3} + 3(x^2+y^2+z^2)R^{-5} = 0 \).
* **(b) Two-dimensional analogue:**
  For \( \phi(x,y) = r^{-1} = (x^2+y^2)^{-1/2} \):
  \[
  \phi_{xx} + \phi_{yy} = -2r^{-3} + 3r^{-3} = r^{-3} \ne 0
  \]
  Thus, it is **not** harmonic.

### Problem 20: Counterexample for Conjugate Symmetry
* Let \( f(z) = z = x + iy \implies u = x, \, v = y \).
  * \( v_y = 1 = u_x \) and \( v_x = 0 = -u_y \), so \( v \) is a harmonic conjugate of \( u \).
  * For \( u \) to be a conjugate of \( v \), we need \( u_y = -v_x \) (satisfied) and \( u_x = -v_y \implies 1 = -1 \), which is false. Thus \( u \) is not a harmonic conjugate of \( v \).

### Problem 21: \( \phi = \log_e |f(z)| \) is harmonic
* Let \( g(z) = \operatorname{Ln}(f(z)) = \log_e |f(z)| + i \operatorname{Arg}(f(z)) \).
* Since \( f(z) \) is analytic and nonzero in \( D \), the composition \( g(z) \) is analytic.
* Since \( \phi(x,y) = \log_e |f(z)| \) is the real part of the analytic function \( g(z) \), it must be harmonic.

### Problem 22: \( \phi = uv \) is harmonic
* If \( f(z) = u + iv \) is analytic, then \( [f(z)]^2 = (u^2-v^2) + i(2uv) \) is analytic.
* The imaginary part \( 2uv \) is harmonic, which directly implies \( \phi = uv = \frac{1}{2}(2uv) \) is harmonic.

---

<a name="section-34"></a>
## Section 3.4: Applications
---

> **Key Concepts of Conformal Mappings and Electrostatic/Fluid Flows**
>
> 1. **Orthogonal Families:** For any analytic function \( f(z) = u(x, y) + i v(x, y) \), the level curves \( u(x, y) = c_1 \) and \( v(x, y) = c_2 \) form two families of orthogonal curves. At any point of intersection where \( f'(z_0) \ne 0 \), their tangent lines are perpendicular.
> 2. **Velocity Field:** In a planar, incompressible, and irrotational fluid flow, the velocity field \( \mathbf{F} \) is given by the gradient of the velocity potential \( \phi \):
>    \[
>    \mathbf{F}(x, y) = \nabla \phi = \frac{\partial \phi}{\partial x} \mathbf{i} + \frac{\partial \phi}{\partial y} \mathbf{j}
>    \]
> 3. **Complex Potential:** If \( \phi \) is the velocity potential (or electrostatic potential), its harmonic conjugate \( \psi \) is the stream function (or force function). The complex potential is:
>    \[
>    \Omega(z) = \phi(x, y) + i \psi(x, y)
>    \]

---

## Problems 1 – 4: Identifying Level Curves

### Problem 1: \( f(z) = 2iz - 3 + i \)
* Express in Cartesian form:
  \[
  f(z) = 2i(x+iy) - 3 + i = (-2y - 3) + i(2x + 1)
  \]
  \[
  u(x,y) = -2y - 3, \quad v(x,y) = 2x + 1
  \]
* Level curves:
  * \( u(x,y) = c_1 \implies y = k_1 \) (horizontal lines).
  * \( v(x,y) = c_2 \implies x = k_2 \) (vertical lines).
* **Orthogonal families:** Horizontal lines and vertical lines.

### Problem 2: \( f(z) = (z-1)^2 \)
* Express in Cartesian form:
  \[
  f(z) = (x-1+iy)^2 = (x-1)^2 - y^2 + 2i(x-1)y
  \]
  \[
  u(x,y) = (x-1)^2 - y^2, \quad v(x,y) = 2(x-1)y
  \]
* Level curves:
  * \( u(x,y) = c_1 \implies (x-1)^2 - y^2 = c_1 \) (hyperbolas opening horizontally or vertically).
  * \( v(x,y) = c_2 \implies 2(x-1)y = c_2 \implies y = \frac{k_2}{x-1} \) (rectangular hyperbolas with asymptotes \( x=1 \) and \( y=0 \)).
* **Orthogonal families:** Hyperbolas centered at the point \( (1,0) \).

### Problem 3: \( f(z) = 1/z \)
* Express in Cartesian form:
  \[
  u(x,y) = \frac{x}{x^2+y^2}, \quad v(x,y) = -\frac{y}{x^2+y^2}
  \]
* Level curves:
  * \( u(x,y) = c_1 \implies \left(x - \frac{1}{2c_1}\right)^2 + y^2 = \frac{1}{4c_1^2} \) (circles tangent to the y-axis at the origin).
  * \( v(x,y) = c_2 \implies x^2 + \left(y + \frac{1}{2c_2}\right)^2 = \frac{1}{4c_2^2} \) (circles tangent to the x-axis at the origin).
* **Orthogonal families:** Two families of orthogonal circles passing through the origin.

### Problem 4: \( f(z) = z + 1/z \)
* Express in Cartesian form:
  \[
  u(x,y) = x\left(1 + \frac{1}{x^2+y^2}\right), \quad v(x,y) = y\left(1 - \frac{1}{x^2+y^2}\right)
  \]
* **Orthogonal families:** The curves \( x\left(1 + \frac{1}{x^2+y^2}\right) = c_1 \) and \( y\left(1 - \frac{1}{x^2+y^2}\right) = c_2 \).

---

## Problems 5 – 8: Implicit Differentiation and Orthogonality

Using implicit differentiation, the slopes of the tangent lines are \( m_1 = -u_x/u_y \) and \( m_2 = -v_x/v_y \). By C-R equations \( u_x = v_y \) and \( u_y = -v_x \), the product is \( m_1 m_2 = -1 \).

### Problem 5: \( f(z) = x - 2x^2 + 2y^2 + i(y - 4xy) \)
* \( u = x - 2x^2 + 2y^2, \, v = y - 4xy \).
* Partials: \( u_x = 1 - 4x \), \( u_y = 4y \); \( v_x = -4y \), \( v_y = 1 - 4x \).
* Slopes:
  \[
  m_1 = -\frac{1-4x}{4y}, \quad m_2 = \frac{4y}{1-4x} \implies m_1 m_2 = -1
  \]

### Problem 6: \( f(z) = x^3 - 3xy^2 + i(3x^2y - y^3) \)
* \( u = x^3 - 3xy^2, \, v = 3x^2y - y^3 \).
* Partials: \( u_x = 3x^2 - 3y^2 \), \( u_y = -6xy \); \( v_x = 6xy \), \( v_y = 3x^2 - 3y^2 \).
* Slopes:
  \[
  m_1 = \frac{3x^2-3y^2}{6xy}, \quad m_2 = -\frac{6xy}{3x^2-3y^2} \implies m_1 m_2 = -1
  \]

### Problem 7: \( f(z) = e^{-x}\cos y - i e^{-x}\sin y \)
* \( u = e^{-x}\cos y, \, v = -e^{-x}\sin y \).
* Partials: \( u_x = -e^{-x}\cos y \), \( u_y = -e^{-x}\sin y \); \( v_x = e^{-x}\sin y \), \( v_y = -e^{-x}\cos y \).
* Slopes:
  \[
  m_1 = -\cot y, \quad m_2 = \tan y \implies m_1 m_2 = -1
  \]

### Problem 8: \( f(z) = x + \frac{x}{x^2+y^2} + i\left(y - \frac{y}{x^2+y^2}\right) \)
* Partials:
  \[
  u_x = 1 + \frac{y^2-x^2}{(x^2+y^2)^2}, \, u_y = -\frac{2xy}{(x^2+y^2)^2}; \quad v_x = \frac{2xy}{(x^2+y^2)^2}, \, v_y = 1 + \frac{y^2-x^2}{(x^2+y^2)^2}
  \]
* Since C-R equations \( u_x = v_y \) and \( u_y = -v_x \) hold, the slopes satisfy \( m_1 m_2 = -1 \).

---

## Problems 9 & 10: Finding Velocity Fields

### Problem 9: \( \phi(x, y) = \frac{x}{x^2 + y^2} \)
* Compute the gradient of \( \phi \):
  \[
  \frac{\partial \phi}{\partial x} = \frac{y^2-x^2}{(x^2+y^2)^2}, \quad \frac{\partial \phi}{\partial y} = \frac{-2xy}{(x^2+y^2)^2}
  \]
* **Velocity field:** \( \mathbf{F}(x,y) = \boxed{\frac{y^2-x^2}{(x^2+y^2)^2} \mathbf{i} - \frac{2xy}{(x^2+y^2)^2} \mathbf{j}} \).

### Problem 10: \( \phi(x, y) = \frac{1}{2}A\log_e[x^2 + (y+1)^2] \)
* Compute the gradient of \( \phi \):
  \[
  \frac{\partial \phi}{\partial x} = \frac{Ax}{x^2+(y+1)^2}, \quad \frac{\partial \phi}{\partial y} = \frac{A(y+1)}{x^2+(y+1)^2}
  \]
* **Velocity field:** \( \mathbf{F}(x,y) = \boxed{\frac{A}{x^2+(y+1)^2}(x\mathbf{i} + (y+1)\mathbf{j})} \).

---

## Problems 11 – 14: Electrostatics and Heat Flow

### Problem 11: Electrostatic plates at \( x=0 \) and \( x=1 \)
* **(a) Potential function:** Since the boundaries are parallel to the y-axis:
  \[
  \phi(x) = Ax + B \implies \phi(0) = B = 50, \, \phi(1) = A + 50 = 0 \implies \phi(x,y) = \boxed{50 - 50x}
  \]
* **(b) Complex potential:** Find harmonic conjugate \( \psi(x,y) \):
  \[
  \psi_y = \phi_x = -50 \implies \psi(x,y) = -50y \implies \Omega(z) = 50 - 50x - 50iy = \boxed{50 - 50z}
  \]

### Problem 12: Electrostatic plates at \( y=-1 \) and \( y=2 \)
* **(a) Potential function:**
  \[
  \phi(y) = Ay + B \implies \phi(-1) = -A + B = 10, \, \phi(2) = 2A + B = 20 \implies A = \frac{10}{3}, \, B = \frac{40}{3}
  \]
  \[
  \phi(x,y) = \boxed{\frac{10}{3}y + \frac{40}{3}}
  \]
* **(b) Complex potential:** Find conjugate \( \psi \):
  \[
  \psi_x = -\phi_y = -\frac{10}{3} \implies \psi(x,y) = -\frac{10}{3}x \implies \Omega(z) = \boxed{-\frac{10i}{3}z + \frac{40}{3}}
  \]
* **(c) Curves:** Equipotentials are horizontal lines \( y = k_1 \); lines of force are vertical lines \( x = k_2 \).

### Problem 13: Wedge potential \( \phi(\theta) \)
* **(a) Solve \( \phi''(\theta) = 0 \):**
  \[
  \phi(\theta) = A\theta + B \implies \phi(0) = B = 0, \, \phi(\pi/4) = A(\pi/4) = 30 \implies \phi(r,\theta) = \boxed{\frac{120}{\pi}\theta}
  \]
* **(b) Complex potential:** Find conjugate \( \psi \):
  \[
  \psi_r = -\frac{1}{r}\phi_\theta = -\frac{120}{\pi r} \implies \psi = -\frac{120}{\pi}\log_e r \implies \Omega(z) = \boxed{-i\frac{120}{\pi}\operatorname{Ln}(z)}
  \]
* **(c) Curves:** Equipotentials are radial rays \( \theta = c_1 \); lines of force are concentric circular arcs \( r = c_2 \).

### Problem 14: Cylinders of radii \( a \) and \( b \)
* **(a) Show solution:** Solve Cauchy-Euler equation \( r^2\phi'' + r\phi' = 0 \implies \phi(r) = A\log_e r + B \).
  Boundary conditions:
  \[
  A\log_e a + B = k_0, \quad A\log_e b + B = k_1
  \]
  Solving for \( A \) and \( B \) yields the equations:
  \[
  A = \frac{k_0-k_1}{\log_e(a/b)}, \quad B = \frac{-k_0\log_e b + k_1\log_e a}{\log_e(a/b)}
  \]
* **(b) Complex potential:**
  \[
  \psi_r = 0, \, \psi_\theta = r\phi_r = A \implies \psi = A\theta \implies \Omega(z) = \boxed{A\operatorname{Ln}(z) + B}
  \]
* **(c) Curves:** Isotherms are concentric circles \( r = c_1 \); heat flux lines are radial lines \( \theta = c_2 \).

---

## Focus on Concepts (Problems 15 – 18)

### Problem 15: Level curve \( v(x,y) = 0 \) for \( f(z) = z + 1/z \)
* Since \( v(x,y) = y\left(1 - \frac{1}{x^2+y^2}\right) = 0 \), the level curve consists of:
  1. The real axis \( y = 0 \) (excluding the origin \( z=0 \)).
  2. The unit circle \( x^2+y^2 = 1 \).

### Problem 16: Intersection of \( u = x^2-y^2 \) and \( v = 2xy \) at \( z=0 \)
* The level curves are \( y = \pm x \) (for \( u=0 \)) and the axes \( x=0, \, y=0 \) (for \( v=0 \)). They intersect at the origin at an angle of \( 45^\circ \). They are not orthogonal because the derivative \( f'(z) = 2z \) is zero at \( z=0 \), which violates the conformance condition.

### Problem 17: Requirement of \( f'(z_0) \ne 0 \)
* The slopes of the tangent lines are defined by \( u_x, \, u_y, \, v_x, \, v_y \). If \( f'(z_0) = 0 \implies u_x = u_y = v_x = v_y = 0 \), the tangent slopes are undefined, and the level curves may possess singular points (such as self-intersections) where orthogonality is not preserved.

### Problem 18: Are Orthogonal Trajectories always Analytic?
* **No.** Counterexample: \( f(z) = \bar{z} = x - iy \). Its level curves are vertical lines \( x = c_1 \) and horizontal lines \( y = -c_2 \), which are orthogonal. However, \( f(z) = \bar{z} \) is nowhere analytic.

---

## Problems 21 & 22: Fluid Flows and Electrostatics

### Problem 21: \( \Omega(z) = A(z + 1/z) \) with \( A = 1 \)
* **(a) Cartesian potential and stream functions:**
  \[
  \phi(x,y) = \boxed{x\left(1 + \frac{1}{x^2+y^2}\right)}, \quad \psi(x,y) = \boxed{y\left(1 - \frac{1}{x^2+y^2}\right)}
  \]
* **(b) Polar potential and stream functions:**
  \[
  \phi(r,\theta) = \boxed{A\left(r + \frac{1}{r}\right)\cos\theta}, \quad \psi(r,\theta) = \boxed{A\left(r - \frac{1}{r}\right)\sin\theta}
  \]

### Problem 22: Electrostatic complex potential \( \Omega(z) = \log_e \frac{z+1}{z-1} + i\operatorname{Arg} \frac{z+1}{z-1} \)
* **(a) Show curves are circles:**
  * For \( \phi(x,y) = c_1 \implies \left| \frac{z+1}{z-1} \right| = e^{c_1} = k \implies \frac{(x+1)^2+y^2}{(x-1)^2+y^2} = k^2 \).
    Expanding and simplifying using \( \frac{k^2+1}{k^2-1} = \coth c_1 \):
    \[
    \boxed{(x - \coth c_1)^2 + y^2 = \operatorname{csch}^2 c_1}
    \]
  * For \( \psi(x,y) = c_2 \implies \operatorname{Arg}(z+1) - \operatorname{Arg}(z-1) = c_2 \).
    Taking the tangent of both sides and using trigonometric identity:
    \[
    \tan c_2 = \frac{y/(x+1) - y/(x-1)}{1 + y^2/(x^2-1)} = \frac{-2y}{x^2+y^2-1} \implies \boxed{x^2 + (y + \cot c_2)^2 = \csc^2 c_2}
    \]
* **(b) Behavior of centers:**
  * As \( c_1 \to \infty \implies \coth c_1 \to 1 \), centers approach \( (1,0) \).
  * As \( c_1 \to -\infty \implies \coth c_1 \to -1 \), centers approach \( (-1,0) \).
  * As \( c_1 \to 0^+ \implies \coth c_1 \to \infty \), centers move to positive infinity on the x-axis.
  * As \( c_1 \to 0^- \implies \coth c_1 \to -\infty \), centers move to negative infinity on the x-axis.
* **(c) Passing through \( \pm 1 \):**
  * Substitute \( (\pm 1, 0) \) into the circle equation for \( \psi \):
    \[
    (\pm 1)^2 + (0 + \cot c_2)^2 = 1 + \cot^2 c_2 = \csc^2 c_2 \quad \text{(satisfied)}
    \]
    Thus, all circular lines of force pass through both \( z = 1 \) and \( z = -1 \).

---

<a name="chapter-3-review-quizmd"></a>
## Chapter 3 Review Quiz
---

> **Review of Chapter 3: Analytic Functions**
>
> 1. **Differentiability vs. Analyticity:** Differentiability is a local property at a point, whereas analyticity requires differentiability in an open neighborhood around the point.
> 2. **Cauchy-Riemann Equations:** Essential necessary conditions for differentiability. In Cartesian coordinates: \( u_x = v_y \) and \( u_y = -v_x \).
> 3. **Harmonic Functions:** Satisfy Laplace's equation \( u_{xx} + u_{yy} = 0 \). The real and imaginary parts of an analytic function are always harmonic.
> 4. **Conformal Properties:** Level curves of the real and imaginary parts of an analytic function form orthogonal trajectories at all points where the derivative is nonzero.

---

## Problems 1 – 12: True or False Questions with Justifications

### Problem 1: If a complex function \( f \) is differentiable at point \( z \), then \( f \) is analytic at \( z \).
* **Answer:** **False**
* **Justification:** Differentiability at a single point does not guarantee analyticity at that point. For \( f \) to be analytic at \( z \), it must be differentiable in an open neighborhood containing \( z \). For example, the function \( f(z) = |z|^2 \) is differentiable only at \( z = 0 \) and nowhere else; hence, it is nowhere analytic, including at \( z = 0 \).

### Problem 2: The function \( f(z) = \frac{y}{x^2 + y^2} + i\frac{x}{x^2 + y^2} \) is differentiable for all \( z \ne 0 \).
* **Answer:** **True**
* **Justification:** Let \( u = \frac{y}{x^2+y^2} \) and \( v = \frac{x}{x^2+y^2} \). Note that \( f(z) = \frac{i}{z} \). The derivative is \( f'(z) = -\frac{i}{z^2} \), which exists and is continuous for all \( z \ne 0 \). Alternatively, checking the C-R equations:
  \[
  u_x = -\frac{2xy}{(x^2+y^2)^2}, \quad v_y = -\frac{2xy}{(x^2+y^2)^2} \implies u_x = v_y
  \]
  \[
  u_y = \frac{x^2-y^2}{(x^2+y^2)^2}, \quad v_x = \frac{y^2-x^2}{(x^2+y^2)^2} \implies u_y = -v_x
  \]
  Since the partial derivatives are continuous and C-R equations hold for all \( z \ne 0 \), the function is differentiable for all \( z \ne 0 \).

### Problem 3: The function \( f(z) = z^2 + \bar{z} \) is nowhere analytic.
* **Answer:** **True**
* **Justification:** We express \( f(z) = (x^2 - y^2 + x) + i(2xy - y) \), so \( u = x^2-y^2+x \) and \( v = 2xy-y \).
  * \( u_x = 2x+1 \), \( v_y = 2x-1 \).
  * For \( u_x = v_y \implies 2x+1 = 2x-1 \implies 1 = -1 \), which is impossible.
  Since the C-R equations are never satisfied, the function is nowhere differentiable and hence nowhere analytic.

### Problem 4: The function \( f(z) = \cos y - i\sin y \) is nowhere differentiable.
* **Answer:** **True**
* **Justification:** Let \( u = \cos y \) and \( v = -\sin y \).
  * \( u_x = 0 \), \( v_y = -\cos y \implies \cos y = 0 \implies y = \frac{\pi}{2} + k\pi \).
  * \( u_y = -\sin y \), \( v_x = 0 \implies \sin y = 0 \implies y = m\pi \).
  Since \( y \) cannot simultaneously satisfy both conditions, C-R equations are never satisfied. Thus, the function is nowhere differentiable.

### Problem 5: There does not exist an analytic function \( f(z) = u(x, y) + i v(x, y) \) for which \( u(x, y) = y^3 + 5x \).
* **Answer:** **True**
* **Justification:** The real part of an analytic function must be harmonic. For \( u(x, y) = y^3 + 5x \):
  * \( u_x = 5 \implies u_{xx} = 0 \).
  * \( u_y = 3y^2 \implies u_{yy} = 6y \).
  * \( u_{xx} + u_{yy} = 6y \ne 0 \) (except along the line \( y = 0 \)).
  Since \( u \) is not harmonic, no such analytic function exists.

### Problem 6: The function \( u(x, y) = e^{4x} \cos 2y \) is the real part of an analytic function.
* **Answer:** **False**
* **Justification:** For \( u(x, y) = e^{4x}\cos 2y \):
  * \( u_x = 4e^{4x}\cos 2y \implies u_{xx} = 16e^{4x}\cos 2y \).
  * \( u_y = -2e^{4x}\sin 2y \implies u_{yy} = -4e^{4x}\cos 2y \).
  * \( u_{xx} + u_{yy} = 12e^{4x}\cos 2y \ne 0 \).
  Since \( u \) is not harmonic, it cannot be the real part of an analytic function.

### Problem 7: If \( f(z) = e^x\cos y + i e^x\sin y \), then \( f'(z) = f(z) \).
* **Answer:** **True**
* **Justification:** The given function is the complex exponential function \( f(z) = e^z \). It is an entire function, and its derivative is \( \frac{d}{dz}(e^z) = e^z = f(z) \).

### Problem 8: If \( u(x, y) \) and \( v(x, y) \) are harmonic functions in a domain \( D \), then the function \( f(z) = (u_y - v_x) + i(u_x + v_y) \) is analytic in \( D \).
* **Answer:** **True**
* **Justification:** Let \( U = u_y - v_x \) and \( V = u_x + v_y \). We check the C-R equations for \( f \):
  * \( U_x = u_{yx} - v_{xx} \) and \( V_y = u_{xy} + v_{yy} \). Since \( u \) is harmonic, \( u_{xy} = u_{yx} \). For \( U_x = V_y \implies -v_{xx} = v_{yy} \implies v_{xx} + v_{yy} = 0 \), which is true because \( v \) is harmonic.
  * \( U_y = u_{yy} - v_{xy} \) and \( -V_x = -u_{xx} - v_{yx} \). For \( U_y = -V_x \implies u_{yy} = -u_{xx} \implies u_{xx} + u_{yy} = 0 \), which is true because \( u \) is harmonic.
  Since the partial derivatives are continuous and the C-R equations are satisfied, \( f(z) \) is analytic in \( D \).

### Problem 9: If \( g \) is an entire function, then \( f(z) = (iz^2 + z)\overline{g(z)} \) is necessarily an entire function.
* **Answer:** **False**
* **Justification:** The conjugate function \( \overline{g(z)} \) is analytic if and only if \( g(z) \) is a constant function. If \( g(z) \) is nonconstant, then \( \overline{g(z)} \) is nowhere analytic, which generally makes \( f(z) \) nowhere analytic. For example, if \( g(z) = z \) (entire), then \( f(z) = (iz^2+z)\bar{z} \). The derivative with respect to \( \bar{z} \) is \( \frac{\partial f}{\partial \bar{z}} = iz^2 + z \ne 0 \), so \( f \) is not analytic.

### Problem 10: The Cauchy-Riemann equations are necessary conditions for differentiability.
* **Answer:** **True**
* **Justification:** If a complex function \( f(z) = u(x, y) + i v(x, y) \) is differentiable at a point \( z \), then the first-order partial derivatives of \( u \) and \( v \) must exist at that point and satisfy the C-R equations \( u_x = v_y \) and \( u_y = -v_x \).

### Problem 11: The Cauchy-Riemann equations can be satisfied at a point \( z \), but the function \( f(z) = u(x, y) + i v(x, y) \) can be nondifferentiable at \( z \).
* **Answer:** **True**
* **Justification:** The C-R equations are necessary but not sufficient for differentiability. For differentiability, the partial derivatives must also be continuous (or the real and imaginary parts must be differentiable in the real sense). A standard counterexample is \( f(z) = \frac{z^5}{|z|^4} \) for \( z \ne 0 \) and \( f(0) = 0 \), which satisfies the C-R equations at the origin but is not differentiable there.

### Problem 12: If the function \( f(z) = u(x, y) + i v(x, y) \) is analytic at a point \( z \), then necessarily the function \( g(z) = v(x, y) - i u(x, y) \) is analytic at \( z \).
* **Answer:** **True**
* **Justification:** Note that \( g(z) = -i f(z) \). Since \( f(z) \) is analytic at \( z \) and multiplication by a complex constant preserves analyticity, \( g(z) \) is also analytic at \( z \).

---

## Problems 13 – 22: Fill in the Blanks

### Problem 13: If \( f(z) = \frac{1}{z^2 + 5iz - 4} \), then \( f'(z) = \) \_\_\_\_\_\_\_\_.
* **Answer:** \( \mathbf{-\frac{2z + 5i}{(z^2 + 5iz - 4)^2}} \)
* **Solution:** Applying the chain rule: \( f'(z) = -(z^2 + 5iz - 4)^{-2} \cdot (2z + 5i) = -\frac{2z + 5i}{(z^2 + 5iz - 4)^2} \).

### Problem 14: The function \( f(z) = \frac{1}{z^2 + 5iz - 4} is not analytic at \) \_\_\_\_\_\_\_\_.
* **Answer:** \( \mathbf{z = -i, \, -4i} \)
* **Solution:** The function fails to be analytic where the denominator is zero:
  \[
  z^2 + 5iz - 4 = 0 \implies (z+i)(z+4i) = 0 \implies z = -i, \, -4i
  \]

### Problem 15: The function \( f(z) = (2 - x)^3 + i(y - 1)^3 \) is differentiable at \( z = \) \_\_\_\_\_\_\_\_.
* **Answer:** \( \mathbf{2 + i} \)
* **Solution:** Let \( u = (2-x)^3 \) and \( v = (y-1)^3 \).
  * \( u_x = -3(2-x)^2 \), \( v_y = 3(y-1)^2 \). For C-R: \( -3(2-x)^2 = 3(y-1)^2 \implies (x-2)^2 + (y-1)^2 = 0 \implies x=2, \, y=1 \).
  * \( u_y = 0 \), \( v_x = 0 \implies u_y = -v_x \) is always satisfied.
  Thus, \( f \) is differentiable only at \( z = 2 + i \).

### Problem 16: For \( f(z) = 2x^3 + 3iy^2 \), \( f'(x + i x^2) = \) \_\_\_\_\_\_\_\_.
* **Answer:** \( \mathbf{6x^2} \)
* **Solution:** Let \( u = 2x^3 \) and \( v = 3y^2 \).
  * \( u_x = 6x^2 \), \( v_y = 6y \implies y = x^2 \) for differentiability.
  * The derivative along the curve \( y = x^2 \) (which is \( z = x+ix^2 \)) is given by:
    \[
    f'(z) = u_x + i v_x = 6x^2 + i(0) = 6x^2
    \]

### Problem 17: For \( f(z) = \frac{x-1}{(x-1)^2 + (y-1)^2} - i\frac{y-1}{(x-1)^2 + (y-1)^2} \) in \( D \), \( f'(z) = \) \_\_\_\_\_\_\_\_.
* **Answer:** \( \mathbf{-\frac{1}{(z - 1 - i)^2}} \)
* **Solution:** Note that the function is equivalent to \( f(z) = \frac{1}{z - (1+i)} \). Its derivative is:
  \[
  f'(z) = -\frac{1}{(z - 1 - i)^2}
  \]

### Problem 18: Find an analytic function \( f(z) = \log_e(x^2 + y^2) + i \) \_\_\_\_\_\_\_\_.
* **Answer:** \( \mathbf{2\operatorname{Arg}(z) + C} \) (or \( \mathbf{2\tan^{-1}(y/x) + C} \))
* **Solution:** Since \( \log_e(x^2+y^2) = 2 \log_e |z| = \operatorname{Re}(2\operatorname{Ln}(z)) \), the analytic function is:
  \[
  f(z) = 2\operatorname{Ln}(z) + iC = \log_e(x^2+y^2) + i(2\operatorname{Arg}(z) + C)
  \]

### Problem 19: The function \( f(z) \) is analytic in a domain \( D \) and \( f(z) = c + iv(x, y) \), where \( c \) is a real constant. Then \( f \) is a \_\_\_\_\_\_\_\_ in \( D \).
* **Answer:** **constant**
* **Solution:** Since \( u(x,y) = c \), we have \( u_x = 0 \) and \( u_y = 0 \). By C-R equations, \( v_x = -u_y = 0 \) and \( v_y = u_x = 0 \). Since all partial derivatives of \( u \) and \( v \) are zero, \( f(z) \) is a constant function.

### Problem 20: \( \lim_{z \to 2i} \frac{z^5 - 4iz^4 - 4z^3 + z^2 - 4iz + 4}{5z^4 - 20iz^3 - 21z^2 - 4iz + 4} = \) \_\_\_\_\_\_\_\_.
* **Answer:** \( \mathbf{\frac{1}{2}} \) (or \( \mathbf{0.5} \))
* **Solution:** By direct substitution at \( z = 2i \):
  * Numerator: \( (2i)^5 - 4i(2i)^4 - 4(2i)^3 + (2i)^2 - 4i(2i) + 4 = 32i - 64i + 32i - 4 + 8 + 4 = 8 \).
  * Denominator: \( 5(2i)^4 - 20i(2i)^3 - 21(2i)^2 - 4i(2i) + 4 = 80 - 160 + 84 + 8 + 4 = 16 \).
  * The limit is \( \frac{8}{16} = \frac{1}{2} \).

### Problem 21: \( u(x, y) = c_1 \) where \( u(x, y) = e^{-x}(x \sin y - y \cos y) \) and \( v(x, y) = c_2 \) where \( v(x, y) = \) \_\_\_\_\_\_\_\_ are orthogonal families.
* **Answer:** \( \mathbf{e^{-x}(x \cos y + y \sin y) + C} \)
* **Solution:** The function \( u(x,y) \) is the real part of the analytic function \( g(z) = i z e^{-z} \). The imaginary part is the harmonic conjugate \( v(x,y) = e^{-x}(x\cos y + y\sin y) + C \).

### Problem 22: The statement “There exists a function \( f \) that is analytic for \( \operatorname{Re}(z) \ge 1 \) and is not analytic anywhere else” is false because \_\_\_\_\_\_\_\_.
* **Answer:** **the domain of analyticity of a function must be an open set**
* **Solution:** Analyticity at a point requires differentiability in an open neighborhood around that point. Thus, the set of points where a function is analytic must be an open set. The set \( \operatorname{Re}(z) \ge 1 \) is closed and not open; any point on the boundary \( \operatorname{Re}(z) = 1 \) would require the function to be differentiable in a neighborhood extending into \( \operatorname{Re}(z) < 1 \).