# Complex Analysis — Dennis G. Zill, 2nd Edition
## Chapter 3 · Section 3.1 — Differentiability and Analyticity
### Problems 1 – 35 · Complete Solutions

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
