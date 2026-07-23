# Complex Analysis — Dennis G. Zill, 2nd Edition
## Chapter 4 · Section 4.2 — Complex Powers
### Problems 1 – 30 · Complete Solutions

---

> **Key Concepts of Complex Powers**
>
> 1. **Definition of Complex Powers:** For any complex number \( \alpha \) and \( z \ne 0 \), the complex power \( z^\alpha \) is defined by:
>    \[
>    z^\alpha = e^{\alpha \ln z}
>    \]
>    where \( \ln z = \log_e |z| + i(\operatorname{Arg} z + 2n\pi) \), \( n \in \mathbb{Z} \). In general, this is a multiple-valued function.
> 2. **Principal Value of Complex Powers:** Using the principal branch of the complex logarithm \( \operatorname{Ln} z \):
>    \[
>    z^\alpha = e^{\alpha \operatorname{Ln} z}
>    \]
>    where \( \operatorname{Ln} z = \log_e |z| + i\operatorname{Arg} z \), \( -\pi < \operatorname{Arg} z \le \pi \).
> 3. **Derivative of a Power Function:** The principal value of \( z^\alpha \) is analytic on the domain \( |z| > 0, \, -\pi < \arg(z) < \pi \), and:
>    \[
>    \frac{d}{dz} (z^\alpha) = \alpha z^{\alpha - 1}
>    \]

---

## Problems 1 – 6: Finding All Values of \( z^\alpha \)

We use \( z^\alpha = e^{\alpha [\log_e |z| + i(\operatorname{Arg} z + 2n\pi)]} \).

### Problem 1: \( (-1)^{3i} \)
* Here \( |z| = 1 \implies \log_e |z| = 0 \), and \( \operatorname{Arg}(-1) = \pi \).
* \( \ln(-1) = i(\pi + 2n\pi) = i(2n+1)\pi \).
* Compute the power:
  \[
  (-1)^{3i} = e^{3i \cdot i(2n+1)\pi} = \boxed{e^{-3(2n+1)\pi}}, \quad n \in \mathbb{Z}
  \]

### Problem 2: \( 3^{2i/\pi} \)
* Here \( |z| = 3 \), \( \operatorname{Arg}(3) = 0 \).
* \( \ln(3) = \log_e 3 + 2n\pi i \).
* Compute the power:
  \[
  3^{2i/\pi} = e^{\frac{2i}{\pi}(\log_e 3 + 2n\pi i)} = e^{\frac{2i\log_e 3}{\pi} - 4n} = \boxed{e^{-4n + i\frac{2\log_e 3}{\pi}}}, \quad n \in \mathbb{Z}
  \]

### Problem 3: \( (1+i)^{1-i} \)
* Here \( |1+i| = \sqrt{2} \implies \log_e |z| = \frac{1}{2}\log_e 2 \), and \( \operatorname{Arg}(1+i) = \pi/4 \).
* \( \ln(1+i) = \frac{1}{2}\log_e 2 + i\frac{8n+1}{4}\pi \).
* Compute the power:
  \[
  (1+i)^{1-i} = e^{(1-i)[\frac{1}{2}\log_e 2 + i\frac{8n+1}{4}\pi]}
  \]
  \[
  = e^{\frac{1}{2}\log_e 2 + \frac{8n+1}{4}\pi + i\left(\frac{8n+1}{4}\pi - \frac{1}{2}\log_e 2\right)}
  \]
  \[
  = \boxed{\sqrt{2} e^{\frac{8n+1}{4}\pi} e^{i\left(\frac{8n+1}{4}\pi - \frac{1}{2}\log_e 2\right)}}, \quad n \in \mathbb{Z}
  \]

### Problem 4: \( (1+\sqrt{3}i)^i \)
* Here \( |1+\sqrt{3}i| = 2 \), \( \operatorname{Arg}(z) = \pi/3 \).
* \( \ln(1+\sqrt{3}i) = \log_e 2 + i\frac{6n+1}{3}\pi \).
* Compute the power:
  \[
  (1+\sqrt{3}i)^i = e^{i[\log_e 2 + i\frac{6n+1}{3}\pi]} = \boxed{e^{-\frac{6n+1}{3}\pi + i\log_e 2}}, \quad n \in \mathbb{Z}
  \]

### Problem 5: \( (-i)^i \)
* Here \( |-i| = 1 \implies \log_e |z| = 0 \), and \( \operatorname{Arg}(-i) = -\pi/2 \).
* \( \ln(-i) = i\frac{4n-1}{2}\pi \).
* Compute the power:
  \[
  (-i)^i = e^{i \cdot i\frac{4n-1}{2}\pi} = \boxed{e^{\frac{1-4n}{2}\pi}}, \quad n \in \mathbb{Z}
  \]

### Problem 6: \( (e^i)^{\sqrt{2}} \)
* Here \( |e^i| = 1 \implies \log_e |z| = 0 \), and an argument of \( e^i \) is \( 1 \).
* \( \ln(e^i) = i(1 + 2n\pi) \).
* Compute the power:
  \[
  (e^i)^{\sqrt{2}} = e^{\sqrt{2} i(1+2n\pi)} = \boxed{e^{i\sqrt{2}(2n\pi+1)}}, \quad n \in \mathbb{Z}
  \]

---

## Problems 7 – 12: Finding the Principal Value of \( z^\alpha \)

We use \( z^\alpha = e^{\alpha \operatorname{Ln} z} \).

### Problem 7: \( (-1)^{3i} \)
* \( \operatorname{Ln}(-1) = i\pi \).
* Principal Value: \( e^{3i \cdot i\pi} = \boxed{e^{-3\pi}} \).

### Problem 8: \( 3^{2i/\pi} \)
* \( \operatorname{Ln}(3) = \log_e 3 \).
* Principal Value: \( \boxed{e^{i\frac{2\log_e 3}{\pi}}} \).

### Problem 9: \( 2^{4i} \)
* \( \operatorname{Ln}(2) = \log_e 2 \).
* Principal Value: \( \boxed{e^{i4\log_e 2}} \).

### Problem 10: \( i^{i/\pi} \)
* \( \operatorname{Ln}(i) = i\pi/2 \).
* Principal Value: \( e^{\frac{i}{\pi} \cdot i\pi/2} = \boxed{e^{-1/2}} \).

### Problem 11: \( (1+\sqrt{3}i)^{3i} \)
* \( \operatorname{Ln}(1+\sqrt{3}i) = \log_e 2 + i\pi/3 \).
* Principal Value: \( e^{3i(\log_e 2 + i\pi/3)} = \boxed{e^{-\pi + i 3\log_e 2}} \).

### Problem 12: \( (1+i)^{2-i} \)
* \( \operatorname{Ln}(1+i) = \frac{1}{2}\log_e 2 + i\pi/4 \).
* Principal Value:
  \[
  e^{(2-i)(\frac{1}{2}\log_e 2 + i\pi/4)} = e^{\log_e 2 + i\pi/2 - i\frac{1}{2}\log_e 2 + \pi/4} = \boxed{2e^{\pi/4} e^{i(\pi/2 - \frac{1}{2}\log_e 2)}}
  \]

---

## Problems 13 & 14: Verifying Identities

### Problem 13: Verify \( \frac{z^{\alpha_1}}{z^{\alpha_2}} = z^{\alpha_1 - \alpha_2} \)
* By definition, \( z^{\alpha_1} = e^{\alpha_1 \ln z} \) and \( z^{\alpha_2} = e^{\alpha_2 \ln z} \).
* Using the property of the complex exponential function \( \frac{e^{w_1}}{e^{w_2}} = e^{w_1 - w_2} \):
  \[
  \frac{z^{\alpha_1}}{z^{\alpha_2}} = \frac{e^{\alpha_1 \ln z}}{e^{\alpha_2 \ln z}} = e^{\alpha_1 \ln z - \alpha_2 \ln z} = e^{(\alpha_1 - \alpha_2)\ln z} = z^{\alpha_1 - \alpha_2}
  \]

### Problem 14:
* **(a) Verify \( (z^\alpha)^n = z^{n\alpha} \) for integer \( n \):**
  * By definition, \( (z^\alpha)^n = (e^{\alpha \ln z})^n \).
  * Using the property \( (e^w)^n = e^{nw} \) for integer \( n \):
    \[
    (e^{\alpha \ln z})^n = e^{n\alpha \ln z} = z^{n\alpha}
    \]
* **(b) Counterexample for \( (z^{\alpha_1})^{\alpha_2} \ne z^{\alpha_1\alpha_2} \):**
  * Let \( z = -1 \), \( \alpha_1 = 2 \), and \( \alpha_2 = 1/2 \).
  * Using principal values:
    * \( (z^{\alpha_1})^{\alpha_2} = ((-1)^2)^{1/2} = 1^{1/2} = e^{\frac{1}{2}\operatorname{Ln}(1)} = e^0 = 1 \).
    * \( z^{\alpha_1\alpha_2} = (-1)^{2 \cdot 1/2} = (-1)^1 = e^{1 \cdot \operatorname{Ln}(-1)} = e^{i\pi} = -1 \).
    * Since \( 1 \ne -1 \), the identity does not hold in general.

---

## Problems 15 – 18: Derivatives of Principal Branch at a Point

We use the power rule \( \frac{d}{dz}(z^\alpha) = \alpha z^{\alpha-1} \).

### Problem 15: \( f(z) = z^{3/2} \); \( z = 1+i \)
* \( f'(z) = \frac{3}{2} z^{1/2} \).
* At \( z = 1+i = \sqrt{2}e^{i\pi/4} \):
  \[
  (1+i)^{1/2} = 2^{1/4}e^{i\pi/8}
  \]
* **Answer:** \( f'(1+i) = \boxed{\frac{3}{2} \sqrt[4]{2} e^{i\pi/8}} \).

### Problem 16: \( f(z) = z^{2i} \); \( z = i \)
* \( f'(z) = 2i z^{2i-1} \).
* At \( z = i \):
  \[
  f'(i) = 2i i^{2i-1} = 2i \frac{i^{2i}}{i} = 2 i^{2i}
  \]
* Since the principal value of \( i^{2i} \) is \( e^{2i\operatorname{Ln}(i)} = e^{2i(i\pi/2)} = e^{-\pi} \):
* **Answer:** \( f'(i) = \boxed{2e^{-\pi}} \).

### Problem 17: \( f(z) = z^{1+i} \); \( z = 1+\sqrt{3}i \)
* \( f'(z) = (1+i) z^i \).
* At \( z = 1+\sqrt{3}i = 2e^{i\pi/3} \):
  \[
  z^i = e^{i(\log_e 2 + i\pi/3)} = e^{-\pi/3 + i\log_e 2}
  \]
* **Answer:** \( f'(1+\sqrt{3}i) = \boxed{\sqrt{2}(1+i) e^{-\pi/3 + i\log_e 2}} = \boxed{\sqrt{2}e^{-\pi/3}e^{i(\pi/4+\log_e 2)}} \).

### Problem 18: \( f(z) = z^{\sqrt{2}} \); \( z = -i \)
* \( f'(z) = \sqrt{2} z^{\sqrt{2}-1} \).
* At \( z = -i = e^{-i\pi/2} \):
  \[
  (-i)^{\sqrt{2}-1} = e^{(\sqrt{2}-1)\operatorname{Ln}(-i)} = e^{(\sqrt{2}-1)(-i\pi/2)} = e^{-i(\sqrt{2}-1)\pi/2}
  \]
* **Answer:** \( f'(-i) = \boxed{\sqrt{2} e^{-i(\sqrt{2}-1)\pi/2}} \).

---

## Focus on Concepts

### Problem 19: Evaluate \( z^0 \) for any \( z \ne 0 \)
* By definition:
  \[
  z^0 = e^{0 \ln z} = e^0 = \boxed{1}
  \]

### Problem 20: If \( \alpha = k \) (integer), what can you say about \( 1^\alpha \)?
* \( 1^k = e^{k \ln 1} = e^{k(2n\pi i)} = e^{2nk\pi i} = 1 \) for all \( n \in \mathbb{Z} \).
* **Answer:** The complex power \( 1^\alpha \) is single-valued and equals **\( 1 \)**.

### Problem 21: Show that the principal value of \( z^{1/n} \) is the principal \( n \)-th root of \( z \)
* The principal value is:
  \[
  e^{\frac{1}{n} \operatorname{Ln} z} = e^{\frac{1}{n} (\log_e |z| + i\operatorname{Arg} z)} = e^{\log_e |z|^{1/n}} e^{i\frac{\operatorname{Arg} z}{n}} = |z|^{1/n} e^{i\frac{\operatorname{Arg} z}{n}}
  \]
* This is exactly the definition of the principal \( n \)-th root of \( z \) given in Section 2.4.

### Problem 22: Rational and Irrational Exponents
* **(a) Rational Exponent:** Let \( \alpha = m/n \) where \( m, n \) are integers with no common factor.
  \[
  z^{m/n} = e^{\frac{m}{n}[\log_e |z| + i(\operatorname{Arg} z + 2k\pi)]} = e^{\frac{m}{n}\log_e |z| + i\frac{m}{n}\operatorname{Arg} z} e^{i\frac{2km\pi}{n}}
  \]
  As \( k \) takes values \( 0, 1, \dots, n-1 \), the term \( e^{i\frac{2km\pi}{n}} \) generates exactly \( n \) distinct values on the unit circle. For any other integer \( k \), the values repeat by periodicity. Thus, \( z^{m/n} \) is finite-valued.
* **(b) Irrational or Complex Exponent:** Let \( \alpha = a + ib \).
  \[
  z^\alpha = C e^{i(a+ib)2k\pi} = C e^{-2k\pi b} e^{i2k\pi a}
  \]
  * If \( b \ne 0 \), the modulus \( |z^\alpha| = |C|e^{-2k\pi b} \) is strictly monotonic with respect to \( k \in \mathbb{Z} \), so there are infinitely many values.
  * If \( b = 0 \) and \( a \) is irrational, suppose two values are equal:
    \[
    e^{i2k_1\pi a} = e^{i2k_2\pi a} \implies 2(k_1-k_2)\pi a = 2m\pi \implies a = \frac{m}{k_1-k_2}
    \]
    which implies \( a \) is rational, a contradiction. Thus, all values are distinct, making the function infinite-valued.

### Problem 23: Which of the identities in (5) hold for the principal value?
* All three identities listed in (5) hold:
  1. \( z^{\alpha_1} z^{\alpha_2} = e^{\alpha_1 \operatorname{Ln} z} e^{\alpha_2 \operatorname{Ln} z} = e^{(\alpha_1+\alpha_2)\operatorname{Ln} z} = z^{\alpha_1+\alpha_2} \) (holds).
  2. \( z^{\alpha_1}/z^{\alpha_2} = e^{\alpha_1 \operatorname{Ln} z}/e^{\alpha_2 \operatorname{Ln} z} = e^{(\alpha_1-\alpha_2)\operatorname{Ln} z} = z^{\alpha_1-\alpha_2} \) (holds).
  3. \( (z^\alpha)^n = (e^{\alpha \operatorname{Ln} z})^n = e^{n\alpha \operatorname{Ln} z} = z^{n\alpha} \) for integer \( n \) (holds).

### Problem 24: Identity \( z^\alpha w^\alpha = (zw)^\alpha \)
* **(a) Multiple-valued complex power:**
  Yes, as sets of values:
  \[
  (zw)^\alpha = e^{\alpha \ln(zw)} = e^{\alpha(\ln z + \ln w)} = e^{\alpha\ln z} e^{\alpha\ln w} = z^\alpha w^\alpha
  \]
* **(b) Principal value:**
  No. Counterexample: Let \( z = -1, \, w = -1, \, \alpha = i \).
  * \( z^i w^i = e^{i\operatorname{Ln}(-1)} e^{i\operatorname{Ln}(-1)} = e^{-\pi} e^{-\pi} = e^{-2\pi} \).
  * \( (zw)^i = (1)^i = e^{i\operatorname{Ln}(1)} = e^0 = 1 \).
  * Since \( e^{-2\pi} \ne 1 \), the identity does not hold for principal values.

---

## Computer Lab Assignments

Using CAS to find the principal values:

* **Problem 25: \( (1-5i)^i \)**
  * \( (1-5i)^i = e^{i\operatorname{Ln}(1-5i)} = e^{i\left(\frac{1}{2}\log_e 26 - i\arctan 5\right)} = e^{\arctan 5} e^{i\frac{1}{2}\log_e 26} \)
  * Numerical Value: \( \boxed{-0.2299 + 3.9421i} \).

* **Problem 26: \( 5^{5-2i} \)**
  * \( 5^{5-2i} = e^{(5-2i)\log_e 5} = 5^5 e^{-i 2\log_e 5} = 3125 e^{-i 2\log_e 5} \)
  * Numerical Value: \( \boxed{-3115.6723 + 241.2696i} \).

* **Problem 27: \( (2-i)^{3+2i} \)**
  * \( (2-i)^{3+2i} = e^{(3+2i)\operatorname{Ln}(2-i)} \)
  * Numerical Value: \( \boxed{27.5882 + 6.1257i} \).

* **Problem 28: \( (1-4i)^{1+3i} \)**
  * \( (1-4i)^{1+3i} = e^{(1+3i)\operatorname{Ln}(1-4i)} \)
  * Numerical Value: \( \boxed{-214.9054 + 47.5135i} \).

* **Problem 29: \( (1+i)^{(1+i)^{1+i}} \)**
  * Depending on the associativity of the towers of exponents:
    * **Right-associative (Standard):** \( (1+i)^{[ (1+i)^{1+i} ]} \)
      Let \( Z_1 = (1+i)^{1+i} = e^{(1+i)(\frac{1}{2}\log_e 2 + i\pi/4)} \approx 0.2740 + 0.5837i \).
      Then \( (1+i)^{Z_1} \approx \boxed{0.6355 + 0.2819i} \).
    * **Left-associative:** \( [ (1+i)^{1+i} ]^{1+i} \)
      Since the base and powers are within the principal domain:
      \( [ (1+i)^{1+i} ]^{1+i} = (1+i)^{(1+i)^2} = (1+i)^{2i} = e^{2i (\frac{1}{2}\log_e 2 + i\pi/4)} = e^{-\pi/2 + i\log_e 2} \approx \boxed{0.1599 + 0.1328i} \).

* **Problem 30: \( (1-3i)^{1/4} \)**
  * Principal 4th root:
    * \( |1-3i| = \sqrt{10} \implies |1-3i|^{1/4} = 10^{1/8} \approx 1.3335 \).
    * \( \operatorname{Arg}(1-3i) = -\arctan 3 \approx -1.2490 \implies \theta/4 \approx -0.3123 \).
  * Numerical Value: \( 10^{1/8} e^{-i\frac{\arctan 3}{4}} \approx \boxed{1.2690 - 0.4097i} \).
