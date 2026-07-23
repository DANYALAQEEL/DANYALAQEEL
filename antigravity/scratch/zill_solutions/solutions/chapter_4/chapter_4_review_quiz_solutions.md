# Complex Analysis — Dennis G. Zill, 2nd Edition
## Chapter 4 · Chapter 4 Review Quiz
### Problems 1 – 40 · Complete Solutions

---

## Problems 1 – 20: True or False with Justifications

#### 1. If \( |e^z| = 1 \), then \( z \) is a pure imaginary number.
* **Answer:** **True**
* **Justification:** For \( z = x+iy \), we have \( |e^z| = e^x \). Thus, \( e^x = 1 \implies x = 0 \). This means \( z = iy \) is a pure imaginary number.

#### 2. \( \operatorname{Re}(e^z) = \cos y \).
* **Answer:** **False**
* **Justification:** The real part is \( \operatorname{Re}(e^z) = e^x \cos y \). It equals \( \cos y \) if and only if \( e^x = 1 \implies x = 0 \).

#### 3. The mapping \( w = e^z \) takes vertical lines in the \( z \)-plane onto horizontal lines in the \( w \)-plane.
* **Answer:** **False**
* **Justification:** The mapping \( w = e^z \) maps vertical lines \( x = c \) onto concentric circles \( |w| = e^c \). It maps horizontal lines \( y = d \) onto rays \( \arg(w) = d \).

#### 4. There are infinitely many solutions \( z \) to the equation \( e^z = w \) for \( w \ne 0 \).
* **Answer:** **True**
* **Justification:** Since \( e^z \) is periodic with period \( 2\pi i \), if \( z_0 \) is a solution, then \( z_0 + 2n\pi i \) is also a solution for any integer \( n \).

#### 5. \( \ln i = \frac{1}{2}\pi i \).
* **Answer:** **False**
* **Justification:** The complex logarithm \( \ln i \) is multiple-valued: \( \ln i = i\left(\frac{\pi}{2} + 2n\pi\right) \), \( n \in \mathbb{Z} \). The principal value is \( \operatorname{Ln} i = \frac{1}{2}\pi i \).

#### 6. \( \operatorname{Im}(\ln z) = \arg(z) \).
* **Answer:** **True**
* **Justification:** By definition, \( \ln z = \log_e |z| + i\arg(z) \), which makes \( \operatorname{Im}(\ln z) = \arg(z) \) (as sets of values).

#### 7. For all nonzero complex \( z \), \( e^{\operatorname{Ln} z} = z \).
* **Answer:** **True**
* **Justification:** This property is the definition of the complex logarithm as the inverse of the exponential function, which holds for all branches including the principal branch.

#### 8. If \( w_1 \) and \( w_2 \) are two values of \( \ln z \), then \( \operatorname{Re}(w_1) = \operatorname{Re}(w_2) \).
* **Answer:** **True**
* **Justification:** The real part of \( \ln z \) is uniquely determined by \( \log_e |z| \), which is single-valued and independent of the choice of argument branch.

#### 9. \( \operatorname{Ln}(1/z) = -\operatorname{Ln} z \) for all nonzero \( z \).
* **Answer:** **False**
* **Justification:** Let \( z = -1 \).
  * \( \operatorname{Ln}(-1) = i\pi \implies -\operatorname{Ln}(-1) = -i\pi \).
  * \( \operatorname{Ln}(1/(-1)) = \operatorname{Ln}(-1) = i\pi \).
  * Since \( i\pi \ne -i\pi \), this identity does not hold universally.

#### 10. For all nonzero complex numbers, \( \operatorname{Ln}(z_1 z_2) = \operatorname{Ln} z_1 + \operatorname{Ln} z_2 \).
* **Answer:** **False**
* **Justification:** Let \( z_1 = -1 \) and \( z_2 = -1 \).
  * \( \operatorname{Ln}((-1)(-1)) = \operatorname{Ln}(1) = 0 \).
  * \( \operatorname{Ln}(-1) + \operatorname{Ln}(-1) = i\pi + i\pi = 2\pi i \ne 0 \).

#### 11. \( \operatorname{Ln} z \) is an entire function.
* **Answer:** **False**
* **Justification:** \( \operatorname{Ln} z \) is not continuous (and therefore not analytic) on the nonpositive real axis, which serves as its branch cut.

#### 12. The principal value of \( i^{i+1} \) is \( e^{-\pi/2+i} \).
* **Answer:** **False**
* **Justification:** By definition:
  \[
  i^{i+1} = e^{(i+1)\operatorname{Ln}(i)} = e^{(i+1)(i\pi/2)} = e^{-\pi/2 + i\pi/2}
  \]
  The imaginary part is \( \pi/2 \), not \( 1 \).

#### 13. The complex power \( z^\alpha \) is always multiple-valued.
* **Answer:** **False**
* **Justification:** If \( \alpha \) is an integer, \( z^\alpha \) is single-valued (agreeing with standard algebra).

#### 14. \( \cos z \) is a periodic function with a period of \( 2\pi \).
* **Answer:** **True**
* **Justification:** Since \( e^{i(z+2\pi)} = e^{iz} \), it follows that \( \cos(z+2\pi) = \cos z \).

#### 15. There are complex \( z \) such that \( |\sin z| > 1 \).
* **Answer:** **True**
* **Justification:** Let \( z = i \implies |\sin i| = |i \sinh 1| = \sinh 1 = \frac{e - e^{-1}}{2} \approx 1.175 > 1 \).

#### 16. \( \tan z \) has singularities at \( z = (2n + 1) \pi/2 \) for \( n \in \mathbb{Z} \).
* **Answer:** **True**
* **Justification:** \( \tan z = \frac{\sin z}{\cos z} \), which has poles (singularities) at the zeros of \( \cos z \), located at \( z = (2n+1)\pi/2 \).

#### 17. \( \cosh z = \cos(iz) \).
* **Answer:** **True**
* **Justification:** By definition, \( \cos(iz) = \frac{e^{-z} + e^z}{2} = \cosh z \).

#### 18. \( z = \frac{1}{2}\pi i \) is a zero of \( \cosh z \).
* **Answer:** **True**
* **Justification:** \( \cosh(i\pi/2) = \cos(\pi/2) = 0 \).

#### 19. The function \( \sin \bar{z} \) is nowhere analytic.
* **Answer:** **True**
* **Justification:** The real and imaginary parts of \( \sin \bar{z} \) only satisfy the Cauchy-Riemann equations at isolated points \( x = (2k+1)\pi/2, \, y = 0 \), meaning there is no neighborhood where it is differentiable.

#### 20. Every branch of \( \tan^{-1} z \) is entire.
* **Answer:** **False**
* **Justification:** \( \tan^{-1} z = \frac{i}{2} \ln\left(\frac{i+z}{i-z}\right) \) has branch points at \( z = \pm i \), which prevents any branch from being entire.

---

## Problems 21 – 40: Fill in the Blanks

#### 21. The real and imaginary parts of \( e^z \) are \( u(x, y) = \) **\( e^x\cos y \)** and \( v(x, y) = \) **\( e^x\sin y \)**.

#### 22. The domain of \( \operatorname{Ln} z \) is **\( \mathbb{C} \setminus \{0\} \)**, and its range is **\( -\infty < u < \infty, \, -\pi < v \le \pi \)**.

#### 23. \( \operatorname{Ln}(\sqrt{3} + i) = \) **\( \log_e 2 + \frac{\pi}{6}i \)**.

#### 24. The complex exponential function \( e^z \) is periodic with a period of **\( 2\pi i \)**.

#### 25. If \( e^{i z} = 2 \), then \( z = \) **\( 2n\pi - i\log_e 2 \), \( n \in \mathbb{Z} \)**.

#### 26. \( \operatorname{Ln}(e^{1-\pi i}) = \) **\( 1 + \pi i \)**.

#### 27. \( \operatorname{Ln} z \) is discontinuous on **the nonpositive real axis (\( x \le 0, \, y = 0 \))**.

#### 28. The line segment \( x = a, \, -\pi < y \le \pi \), is mapped onto **the circle \( |w| = e^a \)** by the mapping \( w = e^z \).

#### 29. \( \ln(1 + i) = \) **\( \frac{1}{2}\log_e 2 + i\frac{8n+1}{4}\pi \), \( n \in \mathbb{Z} \)**.

#### 30. If \( \ln z \) is pure imaginary, then \( |z| = \) **\( 1 \)**.

#### 31. \( z_1 = 1 \) and \( z_2 = \) **\( e^{2\pi} \)** (or any \( e^{2k\pi} \)) are two real numbers for which the principal value \( z^i = 1 \).

#### 32. The principal value of \( i^i \) is **\( e^{-\pi/2} \)**.

#### 33. On the domain \( |z| > 0, \, -\pi < \arg(z) < \pi \), the derivative of the principal value of \( z^\alpha \) is **\( \alpha z^{\alpha-1} \)**.

#### 34. The complex sine function is defined by \( \sin z = \) **\( \frac{e^{iz} - e^{-iz}}{2i} \)**.

#### 35. \( \cos(4i) = \) **\( \cosh 4 \)**.

#### 36. The semi-infinite vertical strip \( -\pi/2 \le x \le \pi/2, \, y \ge 0 \), is mapped onto **the upper half-plane \( \operatorname{Im}(w) \ge 0 \)** by \( w = \sin z \).

#### 37. The real and imaginary parts of \( \sin z \) are **\( \sin x \cosh y \)** and **\( \cos x \sinh y \)**, respectively.

#### 38. The complex sine and hyperbolic sine functions are related by the formulas \( \sin(iz) = \) **\( i\sinh z \)** and \( \sinh(iz) = \) **\( i\sin z \)**.

#### 39. \( \tanh^{-1} z \) is not defined for \( z = \) **\( \pm 1 \)**.

#### 40. In order to compute a specific value of \( \sin^{-1} z \) you need to choose a branch of **the square root \( (1-z^2)^{1/2} \)** and a branch of **the complex logarithm \( \ln \)**.
