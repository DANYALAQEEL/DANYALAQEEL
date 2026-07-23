# Complex Analysis — Dennis G. Zill, 2nd Edition
## Chapter 4 · Section 4.3 — Trigonometric and Hyperbolic Functions
### Problems 1 – 52 · Complete Solutions

---

> **Key Concepts of Complex Trigonometric and Hyperbolic Functions**
>
> 1. **Complex Trigonometric Functions:** Defined in terms of the complex exponential:
>    \[
>    \sin z = \frac{e^{iz} - e^{-iz}}{2i}, \quad \cos z = \frac{e^{iz} + e^{-iz}}{2}
>    \]
>    These functions are entire and periodic with real period \( 2\pi \).
> 2. **Complex Hyperbolic Functions:**
>    \[
>    \sinh z = \frac{e^z - e^{-z}}{2}, \quad \cosh z = \frac{e^z + e^{-z}}{2}
>    \]
>    These functions are entire and periodic with imaginary period \( 2\pi i \).
> 3. **Relationship between Trigonometric and Hyperbolic Functions:**
>    \[
>    \sin z = -i \sinh(iz), \quad \cos z = \cosh(iz)
>    \]
>    \[
>    \sinh z = -i \sin(iz), \quad \cosh z = \cos(iz)
>    \]

---

## 4.3.1 Complex Trigonometric Functions

### Problems 1 – 8: Value in \( a + ib \) Form

Using \( \sin(x+iy) = \sin x \cosh y + i\cos x \sinh y \) and \( \cos(x+iy) = \cos x \cosh y - i\sin x \sinh y \):

#### Problem 1: \( \sin(4i) \)
* \( \sin(4i) = \sin(0)\cosh(4) + i\cos(0)\sinh(4) = \boxed{i\sinh 4} \approx \mathbf{27.2899i} \).

#### Problem 2: \( \cos(-3i) \)
* \( \cos(-3i) = \cos(0)\cosh(-3) - i\sin(0)\sinh(-3) = \boxed{\cosh 3} \approx \mathbf{10.0677} \).

#### Problem 3: \( \cos(2-4i) \)
* **Answer:** \( \boxed{\cos 2 \cosh 4 + i \sin 2 \sinh 4} \approx \mathbf{-11.3642 + 24.8147i} \).

#### Problem 4: \( \sin(\pi/4 + i) \)
* **Answer:** \( \boxed{\frac{\sqrt{2}}{2}\cosh 1 + i \frac{\sqrt{2}}{2}\sinh 1} \approx \mathbf{1.0911 + 0.8302i} \).

#### Problem 5: \( \tan(2i) \)
* \( \tan(2i) = \frac{\sin(2i)}{\cos(2i)} = \frac{i\sinh 2}{\cosh 2} = \boxed{i\tanh 2} \approx \mathbf{0.9640i} \).

#### Problem 6: \( \cot(\pi + 2i) \)
* By periodicity: \( \cot(\pi + 2i) = \cot(2i) = \frac{\cosh 2}{i\sinh 2} = \boxed{-i\coth 2} \approx \mathbf{-1.0373i} \).

#### Problem 7: \( \sec(\pi/2 - i) \)
* \( \sec(\pi/2 - i) = \frac{1}{\cos(\pi/2-i)} = \frac{1}{\sin(i)} = \frac{1}{i\sinh 1} = \boxed{-i\operatorname{csch} 1} \approx \mathbf{-0.8509i} \).

#### Problem 8: \( \csc(1+i) \)
* **Answer:** \( \boxed{\frac{\sin 1 \cosh 1 - i \cos 1 \sinh 1}{\sin^2 1 + \sinh^2 1}} \approx \mathbf{0.6215 - 0.3039i} \).

---

### Problems 9 – 12: Solving Trigonometric Equations

#### Problem 9: \( \sin z = i \)
* \( \frac{e^{iz} - e^{-iz}}{2i} = i \implies e^{iz} - e^{-iz} = -2 \implies e^{2iz} + 2e^{iz} - 1 = 0 \).
* Let \( w = e^{iz} \implies w = -1 \pm \sqrt{2} \).
  * For \( w = \sqrt{2}-1 > 0 \implies iz = \log_e(\sqrt{2}-1) + 2n\pi i \implies z = 2n\pi - i\log_e(\sqrt{2}-1) \).
  * For \( w = -1-\sqrt{2} < 0 \implies iz = \log_e(\sqrt{2}+1) + i(2n+1)\pi \implies z = (2n+1)\pi - i\log_e(\sqrt{2}+1) \).
* **Answer:** \( \boxed{z = 2n\pi - i\log_e(\sqrt{2}-1)} \) or \( \boxed{z = (2n+1)\pi - i\log_e(\sqrt{2}+1)}, \quad n \in \mathbb{Z} \).

#### Problem 10: \( \cos z = 4 \)
* \( \frac{e^{iz} + e^{-iz}}{2} = 4 \implies e^{2iz} - 8e^{iz} + 1 = 0 \implies e^{iz} = 4 \pm \sqrt{15} \).
* **Answer:** \( \boxed{z = 2n\pi \pm i\log_e(4 + \sqrt{15})}, \quad n \in \mathbb{Z} \).

#### Problem 11: \( \sin z = \cos z \)
* \( \tan z = 1 \implies e^{2iz} = \frac{1+i}{1-i} = i \implies 2iz = i\left(\frac{\pi}{2} + 2n\pi\right) \).
* **Answer:** \( \boxed{z = \frac{\pi}{4} + n\pi}, \quad n \in \mathbb{Z} \).

#### Problem 12: \( \cos z = i\sin z \)
* \( \frac{e^{iz}+e^{-iz}}{2} = i\frac{e^{iz}-e^{-iz}}{2i} \implies e^{iz}+e^{-iz} = e^{iz}-e^{-iz} \implies 2e^{-iz} = 0 \).
* **Answer:** **No solutions** (since the complex exponential is never zero).

---

### Problems 13 – 16: Verification of Identities

#### Problem 13: \( \sin(-z) = -\sin z \)
* \( \sin(-z) = \frac{e^{-iz} - e^{iz}}{2i} = -\frac{e^{iz} - e^{-iz}}{2i} = -\sin z \).

#### Problem 14: \( \cos(z_1 + z_2) = \cos z_1 \cos z_2 - \sin z_1 \sin z_2 \)
* Expand the right side:
  \[
  \frac{e^{iz_1}+e^{-iz_1}}{2}\frac{e^{iz_2}+e^{-iz_2}}{2} - \frac{e^{iz_1}-e^{-iz_1}}{2i}\frac{e^{iz_2}-e^{-iz_2}}{2i}
  \]
  \[
  = \frac{1}{4}(e^{i(z_1+z_2)} + e^{i(z_1-z_2)} + e^{-i(z_1-z_2)} + e^{-i(z_1+z_2)}) + \frac{1}{4}(e^{i(z_1+z_2)} - e^{i(z_1-z_2)} - e^{-i(z_1-z_2)} + e^{-i(z_1+z_2)})
  \]
  \[
  = \frac{2e^{i(z_1+z_2)} + 2e^{-i(z_1+z_2)}}{4} = \cos(z_1+z_2).
  \]

#### Problem 15: \( \cos \bar{z} = \overline{\cos z} \)
* \( \cos \bar{z} = \cos(x-iy) = \cos x \cosh y + i\sin x \sinh y \).
* \( \overline{\cos z} = \overline{\cos x \cosh y - i\sin x \sinh y} = \cos x \cosh y + i\sin x \sinh y \).

#### Problem 16: \( \sin(z - \pi/2) = -\cos z \)
* \( \sin(z - \pi/2) = \sin z \cos(\pi/2) - \cos z \sin(\pi/2) = -\cos z \).

---

### Problems 17 – 20: Derivatives

#### Problem 17: \( f(z) = \sin(z^2) \)
* **Derivative:** \( f'(z) = \boxed{2z \cos(z^2)} \).

#### Problem 18: \( f(z) = \cos(ie^z) \)
* **Derivative:** \( f'(z) = \boxed{-i e^z \sin(ie^z)} \).

#### Problem 19: \( f(z) = z \tan(1/z) \)
* **Derivative:** \( f'(z) = \tan(1/z) + z \sec^2(1/z) \left(-\frac{1}{z^2}\right) = \boxed{\tan(1/z) - \frac{1}{z} \sec^2(1/z)} \).

#### Problem 20: \( f(z) = \sec(z^2 + (1-i)z + i) \)
* **Derivative:** \( f'(z) = \boxed{(2z + 1 - i) \sec(z^2 + (1-i)z + i) \tan(z^2 + (1-i)z + i)} \).

---

## 4.3.2 Complex Hyperbolic Functions

### Problems 21 – 24: Value in \( a + ib \) Form

Using \( \sinh(x+iy) = \sinh x \cos y + i\cosh x \sin y \) and \( \cosh(x+iy) = \cosh x \cos y + i\sinh x \sin y \):

#### Problem 21: \( \cosh(\pi i) \)
* \( \cosh(\pi i) = \cos(\pi) = \boxed{-1} \).

#### Problem 22: \( \sinh(\pi i / 2) \)
* \( \sinh(\pi i / 2) = i\sin(\pi/2) = \boxed{i} \).

#### Problem 23: \( \cosh(1 + \pi i / 6) \)
* **Answer:** \( \boxed{\frac{\sqrt{3}}{2}\cosh 1 + i \frac{1}{2}\sinh 1} \approx \mathbf{1.3364 + 0.5876i} \).

#### Problem 24: \( \tanh(2+3i) \)
* **Answer:** \( \boxed{\frac{\tanh 2(1 + \tan^2 3) + i\tan 3(1 - \tanh^2 2)}{1 + \tanh^2 2 \tan^2 3}} \approx \mathbf{0.9654 - 0.0099i} \).

---

### Problems 25 – 28: Solving Hyperbolic Equations

#### Problem 25: \( \cosh z = i \)
* \( \cos(iz) = i \implies iz = \pi/2 + 2n\pi - i\log_e(\sqrt{2}+1) \) or \( iz = -\pi/2 + 2n\pi - i\log_e(\sqrt{2}-1) \).
* **Answer:** \( \boxed{z = \log_e(\sqrt{2}-1) + i\frac{4n+1}{2}\pi} \) or \( \boxed{z = \log_e(\sqrt{2}+1) + i\frac{4n-1}{2}\pi}, \quad n \in \mathbb{Z} \).

#### Problem 26: \( \sinh z = -1 \)
* \( -i\sin(iz) = -1 \implies \sin(iz) = -i \implies e^{2iz} - 2e^{iz} - 1 = 0 \).
* **Answer:** \( \boxed{z = \log_e(\sqrt{2}-1) + 2n\pi i} \) or \( \boxed{z = \log_e(\sqrt{2}+1) + (2n+1)\pi i}, \quad n \in \mathbb{Z} \).

#### Problem 27: \( \sinh z = \cosh z \)
* **Answer:** **No solutions** (reduces to \( e^{-z} = 0 \)).

#### Problem 28: \( \sinh z = e^z \)
* \( \frac{e^z - e^{-z}}{2} = e^z \implies e^{2z} = -1 \).
* **Answer:** \( \boxed{z = i\frac{2n+1}{2}\pi}, \quad n \in \mathbb{Z} \).

---

### Problems 29 – 32: Verification of Hyperbolic Identities

#### Problem 29: \( \cosh^2 z - \sinh^2 z = 1 \)
* \( \left(\frac{e^z+e^{-z}}{2}ight)^2 - \left(\frac{e^z-e^{-z}}{2}ight)^2 = \frac{e^{2z}+2+e^{-2z} - (e^{2z}-2+e^{-2z})}{4} = 1 \).

#### Problem 30: \( \sinh(z_1+z_2) = \sinh z_1 \cosh z_2 + \cosh z_1 \sinh z_2 \)
* \( \sinh(z_1+z_2) = -i\sin(i(z_1+z_2)) = -i[\sin(iz_1)\cos(iz_2) + \cos(iz_1)\sin(iz_2)] = \sinh z_1\cosh z_2 + \cosh z_1\sinh z_2 \).

#### Problem 31: \( |\sinh z|^2 = \sinh^2 x + \sin^2 y \)
* \( |\sinh z|^2 = \sinh^2 x \cos^2 y + \cosh^2 x \sin^2 y = \sinh^2 x (1-\sin^2 y) + (1+\sinh^2 x)\sin^2 y = \sinh^2 x + \sin^2 y \).

#### Problem 32: \( \operatorname{Im}(\cosh z) = \sinh x \sin y \)
* \( \cosh(x+iy) = \cosh x \cos y + i\sinh x \sin y \implies \operatorname{Im}(\cosh z) = \sinh x \sin y \).

---

### Problems 33 – 36: Derivatives

#### Problem 33: \( f(z) = \sin z \sinh z \)
* **Derivative:** \( f'(z) = \boxed{\cos z \sinh z + \sin z \cosh z} \).

#### Problem 34: \( f(z) = \tanh z \)
* Apply the quotient rule:
  \[
  f'(z) = \frac{d}{dz}\left(\frac{\sinh z}{\cosh z}\right) = \frac{\cosh^2 z - \sinh^2 z}{\cosh^2 z} = \frac{1}{\cosh^2 z} = \boxed{\operatorname{sech}^2 z}
  \]

#### Problem 35: \( f(z) = \tanh(iz-2) \)
* **Derivative:** \( f'(z) = \boxed{i\operatorname{sech}^2(iz-2)} \).

#### Problem 36: \( f(z) = \cosh(iz + e^{iz}) \)
* **Derivative:** \( f'(z) = \boxed{i(1+e^{iz})\sinh(iz+e^{iz})} \).

---

## Focus on Concepts

### Problem 37: Prove \( e^{i z} = \cos z + i \sin z \)
* \( \cos z + i \sin z = \frac{e^{iz} + e^{-iz}}{2} + i\left(\frac{e^{iz} - e^{-iz}}{2i}\right) = \frac{e^{iz} + e^{-iz}}{2} + \frac{e^{iz} - e^{-iz}}{2} = e^{iz} \).

### Problem 38: Solve \( \sin z = \cosh 2 \)
* Equate real and imaginary parts: \( \sin x \cosh y = \cosh 2 \) and \( \cos x \sinh y = 0 \).
* Since \( \cosh y \ge 1 \), \( \sinh y = 0 \implies y=0 \implies \sin x = \cosh 2 > 1 \) (no solution).
* Thus \( \cos x = 0 \implies x = \pi/2 + 2n\pi \implies \cosh y = \cosh 2 \implies y = \pm 2 \).
* **Answer:** \( \boxed{z = \frac{\pi}{2} + 2n\pi \pm 2i}, \quad n \in \mathbb{Z} \).

### Problem 39: If \( \sin z = a \) with \( -1 \le a \le 1 \)
* Imaginary part \( \cos x \sinh y = 0 \implies y=0 \) or \( x = \pi/2 + k\pi \).
* If \( x = \pi/2 + k\pi \implies (-1)^k \cosh y = a \implies |a| \ge 1 \implies |a| = 1 \implies y = 0 \).
* **Answer:** \( z \) must be a **real number** \( \boxed{x = \arcsin(a) + 2n\pi} \) or \( \boxed{x = \pi - \arcsin(a) + 2n\pi} \).

### Problem 40: If \( |\sin z| \le 1 \)
* \( |\sin z|^2 = \sin^2 x + \sinh^2 y \le 1 \implies \sinh^2 y \le 1 - \sin^2 x = \cos^2 x \).
* **Answer:** The region \( \boxed{|\sinh y| \le |\cos x|} \).

### Problem 41: Zeros of \( \cos z \)
* \( \cos x \cosh y = 0 \implies \cos x = 0 \implies x = (2n+1)\pi/2 \).
* \( \sin x \sinh y = 0 \implies \sinh y = 0 \implies y=0 \).
* **Answer:** \( \boxed{z = (2n+1)\pi/2}, \quad n \in \mathbb{Z} \).

### Problem 42: Zeros of \( |\tan z| = 1 \)
* \( |\sin z|^2 = |\cos z|^2 \implies \sin^2 x + \sinh^2 y = \cos^2 x + \sinh^2 y \implies \sin^2 x = \cos^2 x \implies \tan^2 x = 1 \).
* **Answer:** \( \boxed{z = \frac{\pi}{4} + \frac{k\pi}{2} + iy}, \quad k \in \mathbb{Z}, \, y \in \mathbb{R} \).

### Problem 43: Show \( \sin \bar{z} \) is nowhere analytic
* Let \( u = \sin x \cosh y, \, v = -\cos x \sinh y \).
* C-R equations:
  * \( u_x = v_y \implies \cos x \cosh y = -\cos x \cosh y \implies \cos x = 0 \implies x = (2k+1)\pi/2 \).
  * \( u_y = -v_x \implies \sin x \sinh y = -\sin x \sinh y \implies \sinh y = 0 \implies y = 0 \).
* The C-R equations hold only at isolated points, containing no open neighborhood of differentiability. Thus, \( f(z) = \sin \bar{z} \) is nowhere analytic.

### Problem 44: Why are \( \sin x \cosh y \) and \( \cos x \sinh y \) harmonic?
* They are the real and imaginary parts of the complex sine function \( f(z) = \sin z \), which is an entire function. Thus they are harmonic everywhere.

### Problem 45: Show \( \sin z \) is one-to-one on the given domain
* \( \sin z_1 - \sin z_2 = 2 \cos(\frac{z_1+z_2}{2}) \sin(\frac{z_1-z_2}{2}) = 0 \).
* \( \sin(\frac{z_1-z_2}{2}) = 0 \implies \frac{z_1-z_2}{2} = k\pi \implies z_1 - z_2 = 2k\pi \). Since \( |x_1-x_2| < \pi \), we have \( k = 0 \implies z_1 = z_2 \).
* \( \cos(\frac{z_1+z_2}{2}) = 0 \implies \frac{z_1+z_2}{2} = (2k+1)\pi/2 \implies x_1+x_2 = (2k+1)\pi \). But \( x_1+x_2 \in (-\pi, \pi) \), which contains no odd multiples of \( \pi \). Hence, no other solutions exist.

### Problem 46: Image of \( -\pi \le x \le 0 \) under \( w = \cos z \)
* The translation \( z \mapsto z + \pi/2 \) maps the region to \( -\pi/2 \le X \le \pi/2 \), which is the fundamental strip of the sine mapping.
* **Image:** The entire complex plane \( \mathbb{C} \).

### Problem 47: Image of \( -\pi/2 \le y \le \pi/2 \) under \( w = \sinh z \)
* The composition of \( Z_1 = iz \), \( Z_2 = \sin Z_1 \), and \( w = -i Z_2 \).
* **Image:** The entire complex plane \( \mathbb{C} \).

### Problem 48: Image under \( w = (\sin z)^{1/4} \)
* \( Z_1 = \sin z \) maps the region to the upper half-plane \( \operatorname{Im}(Z_1) \ge 0 \).
* The principal fourth root \( w = Z_1^{1/4} \) maps the upper half-plane to the wedge:
* **Image:** \( \boxed{0 \le \arg(w) \le \pi/4} \).

### Problem 49: Periodicity
* **(a)** \( \cosh z \): \( \boxed{2\pi i} \)
* **(b)** \( \sinh z \): \( \boxed{2\pi i} \)
* **(c)** \( \tanh z \): \( \boxed{\pi i} \)

### Problem 50: Zeros
* **(a)** \( \cosh z = 0 \implies \boxed{z = i\frac{2n+1}{2}\pi}, \quad n \in \mathbb{Z} \).
* **(b)** \( \sinh z = 0 \implies \boxed{z = n\pi i}, \quad n \in \mathbb{Z} \).

### Problem 51: Verify
* **(a)** \( \sin(z+\pi) = \sin z \cos\pi + \cos z\sin\pi = -\sin z \).
* **(b)** \( \cos(z+\pi) = \cos z \cos\pi - \sin z\sin\pi = -\cos z \).

### Problem 52: Periodicity of \( \tan z \)
* \( \tan(z+\pi) = \frac{\sin(z+\pi)}{\cos(z+\pi)} = \frac{-\sin z}{-\cos z} = \tan z \).
