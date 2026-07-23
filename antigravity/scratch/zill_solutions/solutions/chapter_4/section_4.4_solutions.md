# Complex Analysis — Dennis G. Zill, 2nd Edition
## Chapter 4 · Section 4.4 — Inverse Trigonometric and Hyperbolic Functions
### Problems 1 – 22 · Complete Solutions

---

> **Key Concepts of Complex Inverse Trigonometric and Hyperbolic Functions**
>
> 1. **Inverse Trigonometric Functions:**
>    \[
>    \sin^{-1} z = -i \ln \left( iz + (1-z^2)^{1/2} \right)
>    \]
>    \[
>    \cos^{-1} z = -i \ln \left( z + i(1-z^2)^{1/2} \right)
>    \]
>    \[
>    \tan^{-1} z = \frac{i}{2} \ln \left( \frac{i+z}{i-z} \right)
>    \]
> 2. **Inverse Hyperbolic Functions:**
>    \[
>    \sinh^{-1} z = \ln \left( z + (z^2+1)^{1/2} \right)
>    \]
>    \[
>    \cosh^{-1} z = \ln \left( z + (z^2-1)^{1/2} \right)
>    \]
>    \[
>    \tanh^{-1} z = \frac{1}{2} \ln \left( \frac{1+z}{1-z} \right)
>    \]

---

## Problems 1 – 10: Finding All Values

### Problem 1: \( \cos^{-1} i \)
* Use the formula: \( \cos^{-1} z = -i \ln \left( z + (z^2-1)^{1/2} \right) \).
* For \( z = i \implies z^2-1 = -2 \implies (z^2-1)^{1/2} = \pm i\sqrt{2} \).
* Thus, \( z + (z^2-1)^{1/2} = i(1 \pm \sqrt{2}) \).
  * **Case 1:** \( i(1+\sqrt{2}) \implies \ln\left(i(1+\sqrt{2})\right) = \log_e(1+\sqrt{2}) + i\frac{4n+1}{2}\pi \).
    Multiplying by \( -i \) gives: \( \frac{4n+1}{2}\pi - i\log_e(1+\sqrt{2}) \).
  * **Case 2:** \( i(1-\sqrt{2}) = -i(\sqrt{2}-1) \implies \ln\left(-i(\sqrt{2}-1)\right) = -\log_e(1+\sqrt{2}) + i\frac{4n-1}{2}\pi \).
    Multiplying by \( -i \) gives: \( \frac{4n-1}{2}\pi + i\log_e(1+\sqrt{2}) = \frac{4n-1}{2}\pi - i\log_e(\sqrt{2}-1) \).
* **Answer:** \( \boxed{\frac{4n+1}{2}\pi - i\log_e(\sqrt{2}+1)} \) and \( \boxed{\frac{4n-1}{2}\pi - i\log_e(\sqrt{2}-1)}, \quad n \in \mathbb{Z} \).

### Problem 2: \( \sin^{-1} 1 \)
* \( \sin z = 1 \implies \boxed{z = \frac{4n+1}{2}\pi}, \quad n \in \mathbb{Z} \).

### Problem 3: \( \sin^{-1} \sqrt{2} \)
* \( \sin^{-1} z = -i \ln \left( iz + (1-z^2)^{1/2} \right) \).
* For \( z = \sqrt{2} \implies (1-z^2)^{1/2} = \pm i \implies iz + (1-z^2)^{1/2} = i(\sqrt{2} \pm 1) \).
* **Answer:** \( \boxed{\frac{4n+1}{2}\pi - i\log_e(\sqrt{2} \pm 1)}, \quad n \in \mathbb{Z} \).

### Problem 4: \( \cos^{-1} (5/3) \)
* \( \cos^{-1} z = -i \ln \left( z + (z^2-1)^{1/2} \right) \).
* For \( z = 5/3 \implies (z^2-1)^{1/2} = \pm 4/3 \implies z + (z^2-1)^{1/2} = 3 \) or \( 1/3 \).
* **Answer:** \( \boxed{2n\pi \pm i\log_e 3}, \quad n \in \mathbb{Z} \).

### Problem 5: \( \tan^{-1} 1 \)
* \( \tan z = 1 \implies \boxed{z = \frac{\pi}{4} + n\pi}, \quad n \in \mathbb{Z} \).

### Problem 6: \( \tan^{-1} 2i \)
* \( \tan^{-1} z = \frac{i}{2} \ln \left( \frac{i+z}{i-z} \right) \implies \frac{i+2i}{i-2i} = -3 \).
* **Answer:** \( \boxed{\frac{2n+1}{2}\pi + i\frac{1}{2}\log_e 3}, \quad n \in \mathbb{Z} \).

### Problem 7: \( \sinh^{-1} i \)
* \( \sinh^{-1} z = \ln \left( z + (z^2+1)^{1/2} \right) \).
* For \( z = i \implies z^2+1 = 0 \implies \sinh^{-1} i = \ln(i) \).
* **Answer:** \( \boxed{i\frac{4n+1}{2}\pi}, \quad n \in \mathbb{Z} \).

### Problem 8: \( \cosh^{-1} (1/2) \)
* \( \cosh^{-1} z = \ln \left( z + (z^2-1)^{1/2} \right) \).
* For \( z = 1/2 \implies (z^2-1)^{1/2} = \pm i\frac{\sqrt{3}}{2} \implies z + (z^2-1)^{1/2} = e^{\pm i\pi/3} \).
* **Answer:** \( \boxed{i\left(2n \pm \frac{1}{3}\right)\pi}, \quad n \in \mathbb{Z} \).

### Problem 9: \( \tanh^{-1}(1+2i) \)
* \( \tanh^{-1} z = \frac{1}{2} \ln \left( \frac{1+z}{1-z} \right) \implies \frac{2+2i}{-2i} = -1+i \).
* Since \( |-1+i| = \sqrt{2} \) and \( \operatorname{Arg}(-1+i) = 3\pi/4 \):
* **Answer:** \( \boxed{\frac{1}{4}\log_e 2 + i\frac{8n+3}{8}\pi}, \quad n \in \mathbb{Z} \).

### Problem 10: \( \tanh^{-1}(\sqrt{2}i) \)
* \( \frac{1+\sqrt{2}i}{1-\sqrt{2}i} = -\frac{1}{3} + i\frac{2\sqrt{2}}{3} = e^{i(\pi - \arctan(2\sqrt{2}))} \).
* **Answer:** \( \boxed{i\frac{2n+1}{2}\pi - \frac{i}{2}\arctan(2\sqrt{2})}, \quad n \in \mathbb{Z} \).

---

## Problems 11 – 16: Branch Calculations and Derivatives

#### Problem 11: \( f(z) = \sin^{-1} z \), \( z = 1/2 i \); principal branch of \( z^{1/2} \)
* **(a) Value:** \( \sin^{-1}(i/2) = -i\ln\left(-1/2 + \sqrt{5}/2\right) = \boxed{-i\log_e\left(\frac{\sqrt{5}-1}{2}ight)} \).
* **(b) Derivative:** \( f'(z) = \frac{1}{(1-z^2)^{1/2}} \implies \frac{1}{\sqrt{5}/2} = \boxed{\frac{2\sqrt{5}}{5}} \).

#### Problem 12: \( f(z) = \cos^{-1} z \), \( z = 5/3 \); branch \( \sqrt{r}e^{i\theta/2}, \, 0 < \theta < 2\pi \), of \( z^{1/2} \)
* **(a) Value:** For \( z^2-1 = 16/9 \), since \( \theta = 2\pi \implies (z^2-1)^{1/2} = -4/3 \).
  \( \cos^{-1}(5/3) = -i\ln(5/3 - 4/3) = -i\ln(1/3) = \boxed{i\log_e 3} \).
* **(b) Derivative:** \( f'(z) = \frac{1}{(z^2-1)^{1/2}} = \boxed{-\frac{3}{4}} \).

#### Problem 13: \( f(z) = \tan^{-1} z \), \( z = 1+i \)
* **(a) Value:** \( \frac{i+(1+i)}{i-(1+i)} = -1-2i \implies \operatorname{Ln}(-1-2i) = \frac{1}{2}\log_e 5 + i(-\pi + \arctan 2) \).
  Multiplying by \( i/2 \): \( \boxed{\frac{1}{2}(\pi - \arctan 2) + i\frac{1}{4}\log_e 5} \).
* **(b) Derivative:** \( f'(z) = \frac{1}{1+z^2} = \frac{1}{1+2i} = \boxed{\frac{1}{5} - \frac{2}{5}i} \).

#### Problem 14: \( f(z) = \sinh^{-1} z \), \( z = 0 \); principal branch of \( z^{1/2} \)
* **(a) Value:** \( \sinh^{-1}(0) = \ln(0 + 1) = \boxed{0} \).
* **(b) Derivative:** \( f'(z) = \frac{1}{(z^2+1)^{1/2}} \implies \boxed{1} \).

#### Problem 15: \( f(z) = \cosh^{-1} z \), \( z = -i \); branch \( \sqrt{r}e^{i\theta/2}, \, -2\pi < \theta < 0 \), of \( z^{1/2} \)
* **(a) Value:** For \( z^2-1 = -2 = 2e^{-i\pi} \implies (z^2-1)^{1/2} = -i\sqrt{2} \).
  \( \cosh^{-1}(-i) = \ln(-i - i\sqrt{2}) = \boxed{\log_e(\sqrt{2}+1) - \frac{\pi}{2}i} \).
* **(b) Derivative:** \( f'(z) = \frac{1}{(z^2-1)^{1/2}} = \frac{1}{-i\sqrt{2}} = \boxed{\frac{\sqrt{2}}{2}i} \).

#### Problem 16: \( f(z) = \tanh^{-1} z \), \( z = 3i \)
* **(a) Value:** \( \frac{1+3i}{1-3i} = -0.8 + 0.6i \implies \tanh^{-1}(3i) = \boxed{\frac{i}{2}(\pi - \arctan(3/4))} \).
* **(b) Derivative:** \( f'(z) = \frac{1}{1-z^2} = \frac{1}{1 - (3i)^2} = \boxed{\frac{1}{10}} \).

---

## Focus on Concepts

### Problem 17: Derivation of \( \cos^{-1} z = -i \ln \left( z + i(1-z^2)^{1/2} \right) \)
* Let \( w = \cos^{-1} z \implies z = \cos w = \frac{e^{iw} + e^{-iw}}{2} \).
* Multiply by \( 2e^{iw} \implies e^{2iw} - 2ze^{iw} + 1 = 0 \).
* Solve the quadratic equation in \( e^{iw} \):
  \[
  e^{iw} = z + (z^2-1)^{1/2} = z + i(1-z^2)^{1/2}
  \]
* Taking the logarithm: \( w = -i \ln \left( z + i(1-z^2)^{1/2} \right) \).

### Problem 18: Derivation of \( \sinh^{-1} z = \ln \left( z + (z^2+1)^{1/2} \right) \)
* Let \( w = \sinh^{-1} z \implies z = \sinh w = \frac{e^w - e^{-w}}{2} \).
* Multiply by \( 2e^w \implies e^{2w} - 2ze^w - 1 = 0 \).
* Solve for \( e^w \):
  \[
  e^w = z + (z^2+1)^{1/2}
  \]
* Taking the logarithm: \( w = \ln \left( z + (z^2+1)^{1/2} \right) \).

### Problem 19: Derivative of \( \cos^{-1} z \)
* Let \( w = \cos^{-1} z \implies z = \cos w \).
* Differentiating implicitly with respect to \( z \):
  \[
  1 = -\sin w \frac{dw}{dz} \implies \frac{dw}{dz} = -\frac{1}{\sin w} = -\frac{1}{(1-\cos^2 w)^{1/2}} = -\frac{1}{(1-z^2)^{1/2}}
  \]

### Problem 20: Derivative of \( \tanh^{-1} z \)
* Let \( w = \tanh^{-1} z \implies z = \tanh w \).
* Differentiating implicitly with respect to \( z \):
  \[
  1 = \operatorname{sech}^2 w \frac{dw}{dz} \implies \frac{dw}{dz} = \frac{1}{\operatorname{sech}^2 w} = \frac{1}{1-\tanh^2 w} = \frac{1}{1-z^2}
  \]

### Problem 21: One-to-One Properties and branch
* **(a)** Done in Section 4.3.
* **(b)** Choosing the principal branches of both the square root and the logarithm ensures the mapping \( w = \sin^{-1} z \) behaves as the proper inverse mapping on this domain.

### Problem 22: Proof of Identities
* **(a)** Let \( w = \sin^{-1}(1-z^2)^{1/2} \implies \sin w = (1-z^2)^{1/2} \implies \sin^2 w = 1-z^2 \implies \cos^2 w = z^2 \implies \cos w = \pm z \implies w = \cos^{-1}(\pm z) \).
* **(b)** Let \( w_1 = \sin^{-1} z \implies \sin w_1 = z \), and \( w_2 = \cos^{-1} z \implies \cos w_2 = z \).
  Then \( \sin w_1 = \cos w_2 = \sin(\pi/2 - w_2) \implies w_1 = \pi/2 - w_2 + 2n\pi \implies w_1+w_2 = \frac{4n+1}{2}\pi \).
