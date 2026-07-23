# End-of-Document Final Review Strategy

## A. 3-Hour Exam Attempt Strategy (NUST Relative Grading)
- **First 30 Minutes:** Scan the entire paper. Immediately solve the 2-mark and 3-mark definition/short conceptual questions. Knocking these out builds momentum and secures passing marks instantly. Look for CR equations checks, Limit DNE proofs, or simple $i^i$ evaluations.
- **Next 1.5 Hours:** Tackle the 10-mark structural questions. Prioritize LFT mappings (using Cross-Ratio) and finding the Harmonic Conjugate. These are highly structured problems where steps generate partial credit. Avoid making algebraic sign errors.
- **Last 60 Minutes:** Attack the "Curve-ball" boundary mapping questions. If asked to map a region using $w=1/z$ or $w=z^2$, systematically map the boundaries. Do not rush; paramaterize $x$ and $y$ carefully. Check test points to verify interior/exterior orientation.

## B. Most Important Topics Ranking
1. **Analyticity and CR Equations:** (Guaranteed 10-15 marks). Find harmonic conjugates, prove/disprove analyticity.
2. **Linear Fractional Transformations:** (Guaranteed 10 marks). Finding the LFT that maps 3 points to 3 points.
3. **Complex Roots and De Moivre's Theorem:** Finding all $n$-th roots of a complex number and drawing them in the Argand plane.
4. **Complex Elementary Functions:** Evaluating principal values like $\text{Log}(-i)$, $i^{2i}$, or solving $e^z = 1+i$.
5. **Topology of Complex Numbers:** Identifying Open/Closed/Bounded domains from inequalities.

## C. The "If You Have 24 Hours Left" Strategy
Skip re-reading the lengthy textbook. Instead:
1. Memorize the Cauchy-Riemann equations: $u_x = v_y$ and $u_y = -v_x$.
2. Memorize the Cross-Ratio formula exactly.
3. Master the procedural steps for finding a Harmonic Conjugate.
4. Review the properties of the Principal Logarithm $\text{Log}(z)$ and its branch cut along the negative real axis.
5. Solve past assignment/quiz questions twice.

## D. Condensed Formula Sheet
---
**1. Polar and Euler's Forms:**
$z = x + iy = r(\cos\theta + i\sin\theta) = re^{i\theta}$
$r = |z| = \sqrt{x^2+y^2}$

**2. Cauchy-Riemann Equations:**
$u_x = v_y$
$u_y = -v_x$
If satisfied continuously, $f'(z) = u_x + iv_x$.

**3. Laplace's Equation (Harmonic):**
$H_{xx} + H_{yy} = 0$

**4. Complex Exponentials and Logarithms:**
$e^z = e^x(\cos y + i\sin y)$
$\log z = \ln|z| + i(\text{Arg}(z) + 2n\pi)$
Principal: $\text{Log } z = \ln|z| + i\text{Arg}(z)$  *(where $-\pi < \text{Arg}(z) \le \pi$)*

**5. Complex Powers:**
$z^c = e^{c \log z}$

**6. De Moivre's $n$-th Roots:**
$w_k = r^{1/n} \left[ \cos\left(\frac{\theta+2k\pi}{n}\right) + i\sin\left(\frac{\theta+2k\pi}{n}\right) \right]$

**7. Cross-Ratio (LFTs):**
$\frac{(w - w_1)(w_2 - w_3)}{(w - w_3)(w_2 - w_1)} = \frac{(z - z_1)(z_2 - z_3)}{(z - z_3)(z_2 - z_1)}$

**8. Hyperbolic and Trigonometric Identites:**
$\cos z = \frac{e^{iz} + e^{-iz}}{2}, \quad \sin z = \frac{e^{iz} - e^{-iz}}{2i}$
$\cosh z = \frac{e^z + e^{-z}}{2}, \quad \sinh z = \frac{e^z - e^{-z}}{2}$
---

## E. Mixed Practice Questions Bank

**Short Conceptual (3 Marks Each):**
1. Distinguish between a domain, a closed region, and a bounded set.
2. Given $f(z) = |z|^2$, prove using CR equations that it is nowhere analytic except potentially at the origin.
3. Why is $\text{Log}(z_1 z_2) = \text{Log}(z_1) + \text{Log}(z_2)$ false in general? Provide a counterexample.
4. Calculate the principal value of $(-i)^i$.
5. Determine the critical points of the mapping $w = z^2 + 2z$. What is geometrically significant about these points?

**Long Structured (10 Marks Each):**
1. Determine whether $u(x,y) = e^x \cos y$ is harmonic. If yes, construct its harmonic conjugate $v(x,y)$ and express the final function $f(z) = u+iv$ purely in terms of $z$.
2. Map the semi-infinite strip $x > 0, 0 < y < \pi$ under the exponential mapping $w = e^z$. Identify the boundary curves precisely and sketch the outcome.
3. A function $f(z) = u+iv$ is analytic in domain D. Show that if $|f(z)|$ is constant throughout D, then $f(z)$ must be a constant function.
4. Construct the Linear Fractional Transformation that maps $z_1=0, z_2=1, z_3=\infty$ onto $w_1=-1, w_2=-i, w_3=1$. Identify the image of the real axis under this mapping.

*End of Document*
