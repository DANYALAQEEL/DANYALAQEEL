# Topic 4: Elementary Complex Functions

## A. Conceptual Foundation
Complex elementary functions generalize real-valued functions to the complex plane. However, they frequently exhibit highly unusual behaviors, such as multiple-valued outputs (periodicity stretching into the imaginary axis) and profound connections between trigonometry and exponentials.

## B. Core Functions Breakdown

### 1. The Complex Exponential Function $e^z$
- **Definition:** $e^z = e^{x+iy} = e^x(\cos y + i\sin y)$.
- **Key Property:** $e^{z+2\pi i} = e^z$. The complex exponential is **periodic** with a purely imaginary period of $2\pi i$. (Real exponentials are never periodic!).
- **Magnitude:** $|e^z| = e^x$. (The modulus is independent of $y$).
- **Analyticity:** $e^z$ is an Entire function (analytic everywhere). Its derivative is trivially $e^z$.

### 2. The Complex Logarithm $\log(z)$
Because $e^z$ is periodic, its inverse $\log(z)$ must be **multiple-valued**.
- **Definition:** $\log(z) = \ln|z| + i\arg(z)$.
- Because $\arg(z) = \text{Arg}(z) + 2n\pi$, there are infinitely many values for a single complex log.
- **Principal Value $\text{Log}(z)$:** Formed by using the principal argument: $\text{Log}(z) = \ln|z| + i\text{Arg}(z)$. (Remember: $\text{Arg}(z) \in (-\pi, \pi]$).
- **Branch Cuts:** To make $\log(z)$ analytic, we must restrict it. The principal branch cuts the negative real axis (including 0). $\text{Log}(z)$ is NOT continuous or analytic on the negative real axis!

> **🚨 Common Algebra Mistake:**
> In the real plane, $\ln(e^x) = x$ always. In the complex plane, $\text{Log}(e^z) = z$ is **FALSE** unless $y \in (-\pi, \pi]$. Ensure you add $+2n\pi i$ if outside the principal branch!

### 3. Complex Powers $z^c$
Raising a complex number to a complex power is defined via the exponential and logarithmic functions:
$z^c = e^{c \log z}$
Because $\log z$ is multiple-valued, $z^c$ is also generally multiple-valued. The principal value of $z^c$ is defined as $e^{c \text{Log } z}$.

### 4. Trigonometric and Hyperbolic Functions
Euler's formula famously links exponents to trig functions: $e^{i\theta} = \cos \theta + i\sin \theta$.
This allows defining complex trig functions purely in terms of exponentials!
- **Cosine:** $\cos z = \frac{e^{iz} + e^{-iz}}{2}$
- **Sine:** $\sin z = \frac{e^{iz} - e^{-iz}}{2i}$
- **Hyperbolic Cosine:** $\cosh z = \frac{e^z + e^{-z}}{2}$ (Notice no $i$'s up top)
- **Hyperbolic Sine:** $\sinh z = \frac{e^z - e^{-z}}{2}$

> **✨ Exam Favorite:**
> In real calculus, $|\sin x| \le 1$ and $|\cos x| \le 1$. In complex calculus, THIS IS FALSE. Complex sine and cosine are **unbounded**!
> Ex: evaluate $\cos(iy) = \frac{e^{-y} + e^y}{2} = \cosh(y)$, which grows exponentially!

## C. Problem-Solving Framework

### Technique: Evaluating a Complex Expression (e.g. $i^i$)
1. **Convert to base $e$ using Log definition:** Use $a^b = e^{b \log a}$.
2. **Evaluate the Log:** $\log a = \ln|a| + i\arg(a) = \ln|a| + i(\text{Arg}(a) + 2n\pi)$.
3. **Multiply the exponent terms.**
4. **Convert back to Cartesian form (if necessary)** using Euler's formula.

## D. Fully Solved Examples

### Example 1 (Intermediate Level)
**Find all values of $i^i$.**
**Step 1:** Definition of powers: $i^i = e^{i \log i}$.
**Step 2:** Find $\log i$: By definition, $\ln|i| + i\arg(i)$.
$|i| = 1 \Rightarrow \ln(1) = 0$. $\arg(i) = \pi/2 + 2n\pi$.
So $\log(i) = i(\pi/2 + 2n\pi)$.
**Step 3:** Substitute back: $i^i = e^{i * [i(\pi/2 + 2n\pi)]} = e^{-(\pi/2 + 2n\pi)}$.
**Conclusion:** $i^i$ is remarkably 100% REAL! It yields an infinitely real number array depending on $n$. The principal value (where $n=0$) is $e^{-\pi/2} \approx 0.2078$.

### Example 2 (Exam Difficulty)
**Solve for $z$ if $e^z = -2$.**
**Step 1:** The real exponential $e^x$ is never negative, but the complex exponential can be negative because of the rotation from Euler's formula. Write as $e^z = -2 \Rightarrow z = \log(-2)$.
**Step 2:** Calculate $\log(-2) = \ln|-2| + i\arg(-2)$.
$|-2| = 2$.
The argument of the negative real number $-2$ is $\pi$. Thus $\arg(-2) = \pi + 2n\pi$.
**Step 3:** $z = \ln(2) + i(\pi + 2n\pi)$, for $n = 0, \pm 1, \pm 2, ...$

## E. Quick Recall Summary
- $e^z$ is periodic over $2\pi i$.
- $\log(z) = \ln|z| + i \arg(z)$ is infinitely multi-valued.
- $\text{Log}(z)$ restricts to $(-\pi, \pi]$ and is discontinuous on the negative real axis.
- $z^c = e^{c \log z}$.
- $\cos(z)$ and $\sin(z)$ are UNBOUNDED over the complex plane.
