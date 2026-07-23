import os
import re

src_dir = r"C:\Users\Administrator\.gemini\antigravity\scratch\zill_solutions\solutions\chapter_6"
dest_dir = r"C:\Users\Administrator\.gemini\antigravity\scratch\zill_solutions\solutions_perfected\chapter_6"
os.makedirs(dest_dir, exist_ok=True)

# ----------------- 1. Section 6.1 -----------------
print("Processing Section 6.1...")
with open(os.path.join(src_dir, "section_6.1_solutions.md"), "r", encoding="utf-8") as f:
    c_61 = f.read()

# Add Figure 6.1 before Problem 9 (convergence of sequences)
c_61 = c_61.replace("## Problem 9", "### Convergence of Sequences\n\n![Figure 6.1](../../extracted_figures/figure_6_1.png)\n\n## Problem 9")
# Add Figure 6.2 after Problem 12
c_61 = c_61.replace("## Problem 13", "![Figure 6.2](../../extracted_figures/figure_6_2.png)\n\n---\n\n## Problem 13")
# Add Figure 6.3 under Problem 44
c_61 = c_61.replace("## Problem 44", "## Problem 44\n\n![Figure 6.3](../../extracted_figures/figure_6_3.png)")

with open(os.path.join(dest_dir, "section_6.1_solutions.md"), "w", encoding="utf-8") as f:
    f.write(c_61)

# ----------------- 2. Section 6.2 -----------------
print("Processing Section 6.2...")
with open(os.path.join(src_dir, "section_6.2_solutions.md"), "r", encoding="utf-8") as f:
    c_62 = f.read()

# Add Figure 6.4 at the top
c_62 = c_62.replace("### Complete Solutions", "### Complete Solutions\n\n![Figure 6.4](../../extracted_figures/figure_6_4.png)")
# Add Figure 6.5 in Problem 31
c_62 = c_62.replace("### Sketch of Convergence Regions", "### Sketch of Convergence Regions\n\n![Figure 6.5](../../extracted_figures/figure_6_5.png)")

# Replace the "session limit" placeholders at the end
split_idx = c_62.find("## Problems 36-40")
if split_idx != -1:
    c_62 = c_62[:split_idx]

problems_36_51 = """## Problems 36-51

## Problem 36

**Problem Statement:**  
The error function $\\operatorname{erf}(z)$ is defined by the integral:
$$\\operatorname{erf}(z) = \\frac{2}{\\sqrt{\\pi}} \\int_0^z e^{-t^2} dt$$
Find a Maclaurin series for $\\operatorname{erf}(z)$ by integrating the Maclaurin series for $e^{-t^2}$.

**Solution:**  
**Step 1.** We begin with the standard Maclaurin series for the exponential function $e^w$, which converges for all $w \\in \\mathbb{C}$:
$$e^w = \\sum_{k=0}^\\infty \\frac{w^k}{k!} = 1 + w + \\frac{w^2}{2!} + \\frac{w^3}{3!} + \\dots$$
Substitute $w = -t^2$ into this series:
$$e^{-t^2} = \\sum_{k=0}^\\infty \\frac{(-1)^k t^{2k}}{k!} = 1 - t^2 + \\frac{t^4}{2!} - \\frac{t^6}{3!} + \\dots$$
This series converges uniformly on any compact subset of the complex plane, which allows for term-by-term integration along any contour from $0$ to $z$.

**Step 2.** Integrate term-by-term:
$$\\int_0^z e^{-t^2} dt = \\int_0^z \\left( \\sum_{k=0}^\\infty \\frac{(-1)^k t^{2k}}{k!} \\right) dt = \\sum_{k=0}^\\infty \\frac{(-1)^k}{k!} \\int_0^z t^{2k} dt$$
Applying the power rule for integration:
$$\\int_0^z t^{2k} dt = \\left[ \\frac{t^{2k+1}}{2k+1} \\right]_0^z = \\frac{z^{2k+1}}{2k+1}$$
Thus, we obtain:
$$\\int_0^z e^{-t^2} dt = \\sum_{k=0}^\\infty \\frac{(-1)^k z^{2k+1}}{k! (2k+1)}$$

**Step 3.** Multiply by the coefficient $\\frac{2}{\\sqrt{\\pi}}$:
$$\\operatorname{erf}(z) = \\frac{2}{\\sqrt{\\pi}} \\sum_{k=0}^\\infty \\frac{(-1)^k z^{2k+1}}{k! (2k+1)} = \\frac{2}{\\sqrt{\\pi}} \\left( z - \\frac{z^3}{3} + \\frac{z^5}{5 \\cdot 2!} - \\frac{z^7}{7 \\cdot 3!} + \\dots \\right)$$
Since $e^{-t^2}$ is entire ($R=\\infty$), term-by-term integration preserves the radius of convergence.
$$\\boxed{\\operatorname{erf}(z) = \\frac{2}{\\sqrt{\\pi}} \\sum_{k=0}^\\infty \\frac{(-1)^k z^{2k+1}}{k! (2k+1)}, \\quad R = \\infty}$$

---

## Problem 37

**Problem Statement:**  
Approximate the value of $e^{(1+i)/10}$ using three terms of a Maclaurin series.

**Solution:**  
**Step 1.** The Maclaurin series for $e^z$ is:
$$e^z = \\sum_{k=0}^\\infty \\frac{z^k}{k!} = 1 + z + \\frac{z^2}{2!} + \\frac{z^3}{3!} + \\dots$$
Using the first three terms ($k=0, 1, 2$), the approximation is:
$$e^z \\approx 1 + z + \\frac{z^2}{2}$$
We substitute $z = \\frac{1+i}{10} = 0.1 + 0.1i$.

**Step 2.** Compute the term $z^2$:
$$z^2 = \\left( \\frac{1+i}{10} \\right)^2 = \\frac{(1+i)^2}{100} = \\frac{1 + 2i + i^2}{100} = \\frac{2i}{100} = \\frac{i}{50} = 0.02i$$

**Step 3.** Substitute $z$ and $z^2$ into the three-term approximation:
$$e^{(1+i)/10} \\approx 1 + (0.1 + 0.1i) + \\frac{0.02i}{2} = 1 + 0.1 + 0.1i + 0.01i = 1.1 + 0.11i$$
$$\\boxed{e^{(1+i)/10} \\approx 1.1 + 0.11i}$$

---

## Problem 38

**Problem Statement:**  
Approximate the value of $\\sin\\left(\\frac{1+i}{10}\\right)$ using two terms of a Maclaurin series.

**Solution:**  
**Step 1.** The Maclaurin series for $\\sin z$ is:
$$\\sin z = \\sum_{k=0}^\\infty \\frac{(-1)^k z^{2k+1}}{(2k+1)!} = z - \\frac{z^3}{3!} + \\frac{z^5}{5!} - \\dots$$
Using the first two terms ($k=0, 1$), the approximation is:
$$\\sin z \\approx z - \\frac{z^3}{6}$$
We substitute $z = \\frac{1+i}{10} = 0.1 + 0.1i$.

**Step 2.** Compute the term $z^3$:
$$z^3 = z \\cdot z^2 = \\left( \\frac{1+i}{10} \\right) \\left( \\frac{2i}{100} \\right) = \\frac{2i(1+i)}{1000} = \\frac{2i - 2}{1000} = \\frac{-2 + 2i}{1000} = -0.002 + 0.002i$$

**Step 3.** Substitute $z$ and $z^3$ into the two-term approximation:
$$\\sin\\left(\\frac{1+i}{10}\\right) \\approx (0.1 + 0.1i) - \\frac{-0.002 + 0.002i}{6} = 0.1 + 0.1i + \\frac{0.002 - 0.002i}{6}$$
$$\\approx 0.1 + 0.1i + 0.000333 - 0.000333i = 0.100333 + 0.099667i$$
In exact fractional form:
$$\\sin\\left(\\frac{1+i}{10}\\right) \\approx \\frac{1}{10} + \\frac{i}{10} - \\frac{-2+2i}{6000} = \\frac{1}{10} + \\frac{i}{10} + \\frac{1-i}{3000} = \\frac{301}{3000} + \\frac{299}{3000}i$$
$$\\boxed{\\sin\\left(\\frac{1+i}{10}\\right) \\approx 0.100333 + 0.099667i}$$

---

## Problem 39

**Problem Statement:**  
Every function $f$ has a domain of definition. Describe in words the domain of the function $f$ defined by a power series centered at $z_0$.

**Solution:**  
A power series centered at $z_0$ has the form:
$$f(z) = \\sum_{k=0}^\\infty a_k (z-z_0)^k$$
By the Cauchy-Hadamard theorem and power series convergence theory, the domain of definition of $f(z)$ must be one of three types:
1. **A Single Point:** The series converges only at its center $z = z_0$. This occurs when the radius of convergence $R = 0$. The domain is $\{z_0\}$.
2. **An Open Disk (with possible boundary points):** The series converges absolutely inside the open disk $|z-z_0| < R$ of finite radius $R > 0$, and diverges for $|z-z_0| > R$. On the boundary circle $|z-z_0| = R$, the series may converge at all, some, or none of the points. The domain of definition is the open disk $|z-z_0| < R$ plus any boundary points where the series converges.
3. **The Entire Complex Plane:** The series converges absolutely for all $z \\in \\mathbb{C}$. This occurs when the radius of convergence $R = \\infty$. The domain of definition is the entire complex plane $\\mathbb{C}$.

---

## Problem 40

**Problem Statement:**  
If $f(z) = \\sum_{k=0}^\\infty a_k z^k$ and $g(z) = \\sum_{k=0}^\\infty b_k z^k$, then the Cauchy product of $f$ and $g$ is given by $f(z)g(z) = \\sum_{k=0}^\\infty c_k z^k$ where $c_k = \\sum_{n=0}^k a_n b_{k-n}$. Write out the first five terms of the power series of $f(z)g(z)$.

**Solution:**  
We compute the coefficients $c_k$ for $k = 0, 1, 2, 3, 4$:
- For $k = 0$:  
  $$c_0 = a_0 b_0$$
- For $k = 1$:  
  $$c_1 = a_0 b_1 + a_1 b_0$$
- For $k = 2$:  
  $$c_2 = a_0 b_2 + a_1 b_1 + a_2 b_0$$
- For $k = 3$:  
  $$c_3 = a_0 b_3 + a_1 b_2 + a_2 b_1 + a_3 b_0$$
- For $k = 4$:  
  $$c_4 = a_0 b_4 + a_1 b_3 + a_2 b_2 + a_3 b_1 + a_4 b_0$$

Writing out the first five terms of the series:
$$f(z)g(z) = a_0 b_0 + (a_0 b_1 + a_1 b_0)z + (a_0 b_2 + a_1 b_1 + a_2 b_0)z^2 + (a_0 b_3 + a_1 b_2 + a_2 b_1 + a_3 b_0)z^3 + (a_0 b_4 + a_1 b_3 + a_2 b_2 + a_3 b_1 + a_4 b_0)z^4 + \\dots$$

---

## Problem 41

**Problem Statement:**  
Use Problem 40, (12) of this section, and (6) from Section 6.1 to find the first four nonzero terms of the Maclaurin series of $e^z/(1-z)$. What is the radius of convergence $R$ of the series?

**Solution:**  
**Step 1.** Let $f(z) = e^z = \\sum_{k=0}^\\infty a_k z^k$ with $a_k = \\frac{1}{k!}$. Thus:
$$a_0 = 1, \\quad a_1 = 1, \\quad a_2 = \\frac{1}{2}, \\quad a_3 = \\frac{1}{6}, \\quad a_4 = \\frac{1}{24}, \\quad \\dots$$
Let $g(z) = \\frac{1}{1-z} = \\sum_{k=0}^\\infty b_k z^k$ with $b_k = 1$ for all $k \\ge 0$. Thus:
$$b_0 = 1, \\quad b_1 = 1, \\quad b_2 = 1, \\quad b_3 = 1, \\quad b_4 = 1, \\quad \\dots$$

**Step 2.** Apply the Cauchy product formula to find $c_k$:
- $c_0 = a_0 b_0 = 1 \\cdot 1 = 1$
- $c_1 = a_0 b_1 + a_1 b_0 = 1 \\cdot 1 + 1 \\cdot 1 = 2$
- $c_2 = a_0 b_2 + a_1 b_1 + a_2 b_0 = 1 \\cdot 1 + 1 \\cdot 1 + \\frac{1}{2} \\cdot 1 = \\frac{5}{2}$
- $c_3 = a_0 b_3 + a_1 b_2 + a_2 b_1 + a_3 b_0 = 1 \\cdot 1 + 1 \\cdot 1 + \\frac{1}{2} \\cdot 1 + \\frac{1}{6} \\cdot 1 = 2 + \\frac{1}{2} + \\frac{1}{6} = \\frac{8}{3}$

**Step 3.** Write out the first four terms:
$$\\frac{e^z}{1-z} = 1 + 2z + \\frac{5}{2}z^2 + \\frac{8}{3}z^3 + \\dots$$

**Step 4.** Determine the radius of convergence.
The exponential function $e^z$ is analytic for all $z \\in \\mathbb{C}$ ($R_1 = \\infty$). The geometric series $\\frac{1}{1-z}$ is analytic in the disk $|z| < 1$ ($R_2 = 1$). The product series converges within the intersection of these domains, i.e., for $|z| < 1$. Because $z = 1$ is a simple pole (singularity) of $\\frac{e^z}{1-z}$, the series must diverge at $z=1$. Thus, the radius of convergence is exactly $R = 1$.
$$\\boxed{\\frac{e^z}{1-z} = 1 + 2z + \\frac{5}{2}z^2 + \\frac{8}{3}z^3 + \\dots, \\quad R = 1}$$

---

## Problem 42

**Problem Statement:**  
Use Problem 40, and (13) and (14) of this section to find the first four nonzero terms of the Maclaurin series of $\\sin z \\cos z$. Can you think of another way to obtain this series?

**Solution:**  
**Step 1.** We use the Maclaurin series for $\\sin z$ and $\\cos z$:
$$f(z) = \\sin z = z - \\frac{z^3}{6} + \\frac{z^5}{120} - \\frac{z^7}{5040} + \\dots \\implies a_0=0, \\, a_1=1, \\, a_2=0, \\, a_3=-\\frac{1}{6}, \\, a_4=0, \\, a_5=\\frac{1}{120}, \\, a_6=0, \\, a_7=-\\frac{1}{5040}$$
$$g(z) = \\cos z = 1 - \\frac{z^2}{2} + \\frac{z^4}{24} - \\frac{z^6}{720} + \\dots \\implies b_0=1, \\, b_1=0, \\, b_2=-\\frac{1}{2}, \\, b_3=0, \\, b_4=\\frac{1}{24}, \\, b_6=-\\frac{1}{720}$$

**Step 2.** Compute the Cauchy product coefficients $c_k$:
- $c_0 = a_0 b_0 = 0$
- $c_1 = a_0 b_1 + a_1 b_0 = 0 + 1 \\cdot 1 = 1$
- $c_2 = a_0 b_2 + a_1 b_1 + a_2 b_0 = 0$
- $c_3 = a_0 b_3 + a_1 b_2 + a_2 b_1 + a_3 b_0 = 1 \\cdot \\left( -\\frac{1}{2} \\right) + \\left( -\\frac{1}{6} \\right) \\cdot 1 = -\\frac{1}{2} - \\frac{1}{6} = -\\frac{2}{3}$
- $c_4 = a_0 b_4 + a_1 b_3 + a_2 b_2 + a_3 b_1 + a_4 b_0 = 0$
- $c_5 = a_1 b_4 + a_3 b_2 + a_5 b_0 = 1 \\cdot \\left( \\frac{1}{24} \\right) + \\left( -\\frac{1}{6} \\right)\\left( -\\frac{1}{2} \\right) + \\frac{1}{120} \\cdot 1 = \\frac{1}{24} + \\frac{1}{12} + \\frac{1}{120} = \\frac{5 + 10 + 1}{120} = \\frac{16}{120} = \\frac{2}{15}$
- $c_6 = 0$
- $c_7 = a_1 b_6 + a_3 b_4 + a_5 b_2 + a_7 b_0 = 1 \\cdot \\left( -\\frac{1}{720} \\right) + \\left( -\\frac{1}{6} \\right)\\left( \\frac{1}{24} \\right) + \\frac{1}{120}\\left( -\\frac{1}{2} \\right) + \\left( -\\frac{1}{5040} \\right) \\cdot 1 = -\\frac{1}{720} - \\frac{1}{144} - \\frac{1}{240} - \\frac{1}{5040}$
  $$\\text{Common denominator is } 5040: \\quad c_7 = -\\frac{7 + 35 + 21 + 1}{5040} = -\\frac{64}{5040} = -\\frac{4}{315}$$

So the first four nonzero terms are:
$$\\sin z \\cos z = z - \\frac{2}{3}z^3 + \\frac{2}{15}z^5 - \\frac{4}{315}z^7 + \\dots$$

**Step 3. Alternative Method.**  
We can use the double-angle identity:
$$\\sin z \\cos z = \\frac{1}{2} \\sin(2z)$$
Substitute $2z$ into the Maclaurin series for $\\sin w$:
$$\\sin(2z) = \\sum_{k=0}^\\infty \\frac{(-1)^k (2z)^{2k+1}}{(2k+1)!} = 2z - \\frac{8z^3}{6} + \\frac{32z^5}{120} - \\frac{128z^7}{5040} + \\dots$$
Multiply by $\\frac{1}{2}$:
$$\\frac{1}{2}\\sin(2z) = z - \\frac{4}{3}z^3 + \\frac{16}{120}z^5 - \\frac{64}{5040}z^7 + \\dots = z - \\frac{2}{3}z^3 + \\frac{2}{15}z^5 - \\frac{4}{315}z^7 + \\dots$$
This matches the Cauchy product result. The radius of convergence is $R = \\infty$.
$$\\boxed{\\sin z \\cos z = z - \\frac{2}{3}z^3 + \\frac{2}{15}z^5 - \\frac{4}{315}z^7 + \\dots, \\quad R = \\infty}$$

---

## Problem 43

**Problem Statement:**  
The function $f(z) = \\sec z$ is analytic at $z=0$ and hence possesses a Maclaurin series representation. Find the first three nonzero terms of the Maclaurin series
$$\\sec z = a_0 + a_1 z + a_2 z^2 + a_3 z^3 + a_4 z^4 + \\dots$$
by equating coefficients on both sides of the identity $1 = (\\sec z) \\cos z$. What is the radius of convergence $R$ of the series?

**Solution:**  
**Step 1.** Write the identity:
$$1 = \\left( a_0 + a_1 z + a_2 z^2 + a_3 z^3 + a_4 z^4 + \\dots \\right) \\left( 1 - \\frac{z^2}{2} + \\frac{z^4}{24} - \\frac{z^6}{720} + \\dots \\right)$$

**Step 2.** Expand the right-hand side and collect coefficients for each power of $z$:
- **$z^0$:** $a_0 = 1$
- **$z^1$:** $a_1 = 0$
- **$z^2$:** $-\\frac{1}{2}a_0 + a_2 = 0 \\implies a_2 = \\frac{1}{2}a_0 = \\frac{1}{2}$
- **$z^3$:** $-\\frac{1}{2}a_1 + a_3 = 0 \\implies a_3 = 0$
- **$z^4$:** $\\frac{1}{24}a_0 - \\frac{1}{2}a_2 + a_4 = 0 \\implies a_4 = \\frac{1}{2}a_2 - \\frac{1}{24}a_0 = \\frac{1}{4} - \\frac{1}{24} = \\frac{5}{24}$

**Step 3.** Write out the first three nonzero terms:
$$\\sec z = 1 + \\frac{1}{2}z^2 + \\frac{5}{24}z^4 + \\dots$$

**Step 4.** Determine the radius of convergence.
The function $\\sec z = \\frac{1}{\\cos z}$ is analytic everywhere except at the zeros of $\\cos z$. The zeros of $\\cos z$ are:
$$z = \\frac{\\pi}{2} + n\\pi, \\quad n \\in \\mathbb{Z}$$
The nearest singularities to the center $z_0 = 0$ are at $z = \\pm \\frac{\\pi}{2}$. The distance from $0$ to these poles is $\\frac{\\pi}{2}$. Thus, the radius of convergence is $R = \\frac{\\pi}{2}$.
$$\\boxed{\\sec z = 1 + \\frac{1}{2}z^2 + \\frac{5}{24}z^4 + \\dots, \\quad R = \\frac{\\pi}{2}}$$

---

## Problem 44

**Problem Statement:**  
(a) Use the definition $f(z) = \\sec z = 1/\\cos z$ and long division to obtain the first three nonzero terms of the Maclaurin series in Problem 43.  
(b) Use $f(z) = \\csc z = 1/\\sin z$ and long division to obtain the first three nonzero terms of an infinite series. Is this series a Maclaurin series?

**Solution:**  
**(a) Long Division for $\\sec z$:**  
We divide $1$ by the series for $\\cos z$:
$$1 \\div \\left( 1 - \\frac{z^2}{2} + \\frac{z^4}{24} - \\dots \\right)$$
1. The first term is $1$. Multiply and subtract:
   $$1 - \\left( 1 - \\frac{z^2}{2} + \\frac{z^4}{24} \\right) = \\frac{z^2}{2} - \\frac{z^4}{24}$$
2. Divide the leading term $\\frac{z^2}{2}$ by $1$ to get the second term $\\frac{z^2}{2}$. Multiply and subtract:
   $$\\left( \\frac{z^2}{2} - \\frac{z^4}{24} \\right) - \\frac{z^2}{2}\\left( 1 - \\frac{z^2}{2} \\right) = \\left( \\frac{z^2}{2} - \\frac{z^4}{24} \\right) - \\left( \\frac{z^2}{2} - \\frac{z^4}{4} \\right) = \\left( \\frac{1}{4} - \\frac{1}{24} \\right)z^4 = \\frac{5}{24}z^4$$
3. Divide the leading term $\\frac{5}{24}z^4$ by $1$ to get the third term $\\frac{5}{24}z^4$.
Thus, we obtain:
$$\\sec z = 1 + \\frac{1}{2}z^2 + \\frac{5}{24}z^4 + \\dots$$
This matches the result of Problem 43.

**(b) Long Division for $\\csc z$:**  
Since $\\sin z = z - \\frac{z^3}{6} + \\frac{z^5}{120} - \\dots = z\\left( 1 - \\frac{z^2}{6} + \\frac{z^4}{120} - \\dots \\right)$, we have:
$$\\csc z = \\frac{1}{z} \\left( \\frac{1}{1 - \\frac{z^2}{6} + \\frac{z^4}{120} - \\dots} \\right)$$
Now perform long division for the term inside the parentheses:
$$1 \\div \\left( 1 - \\frac{z^2}{6} + \\frac{z^4}{120} - \\dots \\right)$$
1. The first term is $1$. Multiply and subtract:
   $$1 - \\left( 1 - \\frac{z^2}{6} + \\frac{z^4}{120} \\right) = \\frac{z^2}{6} - \\frac{z^4}{120}$$
2. Divide $\\frac{z^2}{6}$ by $1$ to get the second term $\\frac{z^2}{6}$. Multiply and subtract:
   $$\\left( \\frac{z^2}{6} - \\frac{z^4}{120} \\right) - \\frac{z^2}{6}\\left( 1 - \\frac{z^2}{6} \\right) = \\left( \\frac{z^2}{6} - \\frac{z^4}{120} \\right) - \\left( \\frac{z^2}{6} - \\frac{z^4}{36} \\right) = \\left( \\frac{1}{36} - \\frac{1}{120} \\right)z^4 = \\frac{10 - 3}{360}z^4 = \\frac{7}{360}z^4$$
3. Divide $\\frac{7}{360}z^4$ by $1$ to get the third term $\\frac{7}{360}z^4$.
Therefore, the division gives:
$$\\frac{1}{1 - \\frac{z^2}{6} + \\dots} = 1 + \\frac{1}{6}z^2 + \\frac{7}{360}z^4 + \\dots$$
Multiply by $\\frac{1}{z}$:
$$\\csc z = \\frac{1}{z} + \\frac{1}{6}z + \\frac{7}{360}z^3 + \\dots$$
**Is this series a Maclaurin series?**  
No. A Maclaurin series is a Taylor series centered at $0$, which contains only non-negative integer powers of $z$ ($z^0, z^1, z^2, \\dots$). The expansion of $\\csc z$ has a $\\frac{1}{z} = z^{-1}$ term, meaning it has a pole at $z=0$ and is a Laurent series, not a Maclaurin series.

---

## Problem 45

**Problem Statement:**  
Suppose that a complex function $f$ is analytic in a domain $D$ that contains $z_0 = 0$ and $f$ satisfies $f'(z) = 4z + f^2(z)$. Suppose further that $f(0) = 1$.  
(a) Compute $f'(0), f''(0), f'''(0), f^{(4)}(0)$, and $f^{(5)}(0)$.  
(b) Find the first six terms of the Maclaurin expansion of $f$.

**Solution:**  
**(a) Compute the derivatives at $z=0$:**  
- **$f'(0)$:**  
  $$f'(z) = 4z + [f(z)]^2 \\implies f'(0) = 4(0) + [f(0)]^2 = 1^2 = 1$$
- **$f''(0)$:**  
  Differentiate $f'(z)$:
  $$f''(z) = 4 + 2f(z)f'(z)$$
  At $z=0$:
  $$f''(0) = 4 + 2f(0)f'(0) = 4 + 2(1)(1) = 6$$
- **$f'''(0)$:**  
  Differentiate $f''(z)$:
  $$f'''(z) = 2[f'(z)]^2 + 2f(z)f''(z)$$
  At $z=0$:
  $$f'''(0) = 2(1)^2 + 2(1)(6) = 2 + 12 = 14$$
- **$f^{(4)}(0)$:**  
  Differentiate $f'''(z)$:
  $$f^{(4)}(z) = 4f'(z)f''(z) + 2f'(z)f''(z) + 2f(z)f'''(z) = 6f'(z)f''(z) + 2f(z)f'''(z)$$
  At $z=0$:
  $$f^{(4)}(0) = 6(1)(6) + 2(1)(14) = 36 + 28 = 64$$
- **$f^{(5)}(0)$:**  
  Differentiate $f^{(4)}(z)$:
  $$f^{(5)}(z) = 6[f''(z)]^2 + 6f'(z)f'''(z) + 2f'(z)f'''(z) + 2f(z)f^{(4)}(z) = 6[f''(z)]^2 + 8f'(z)f'''(z) + 2f(z)f^{(4)}(z)$$
  At $z=0$:
  $$f^{(5)}(0) = 6(6)^2 + 8(1)(14) + 2(1)(64) = 6(36) + 112 + 128 = 216 + 112 + 128 = 456$$

**(b) Find the first six terms of the Maclaurin expansion:**  
The Maclaurin expansion is:
$$f(z) = f(0) + f'(0)z + \\frac{f''(0)}{2!}z^2 + \\frac{f'''(0)}{3!}z^3 + \\frac{f^{(4)}(0)}{4!}z^4 + \\frac{f^{(5)}(0)}{5!}z^5 + \\dots$$
Substitute the values from part (a):
$$f(z) = 1 + 1z + \\frac{6}{2}z^2 + \\frac{14}{6}z^3 + \\frac{64}{24}z^4 + \\frac{456}{120}z^5 + \\dots$$
Simplify the fractions:
$$\\boxed{f(z) = 1 + z + 3z^2 + \\frac{7}{3}z^3 + \\frac{8}{3}z^4 + \\frac{19}{5}z^5 + \\dots}$$

---

## Problem 46

**Problem Statement:**  
Find an alternative way of finding the first three nonzero terms of the Maclaurin series for $f(z) = \\tan z$ (see Problem 23):  
(a) based on the identity $\\tan z = \\sin z \\sec z$ and Problems 42 and 43  
(b) based on Problem 44(a)  
(c) based on Problem 45 [Hint: $f'(z) = \\sec^2 z = 1 + \\tan^2 z$.]

**Solution:**  
**(a) Using $\\tan z = \\sin z \\sec z$:**  
From the known expansions:
$$\\sin z = z - \\frac{z^3}{6} + \\frac{z^5}{120} - \\dots$$
$$\\sec z = 1 + \\frac{z^2}{2} + \\frac{5z^4}{24} + \\dots$$
Multiply these two series:
$$\\tan z = \\left( z - \\frac{z^3}{6} + \\frac{z^5}{120} - \\dots \\right) \\left( 1 + \\frac{z^2}{2} + \\frac{5z^4}{24} + \\dots \\right)$$
$$= z\\left( 1 + \\frac{z^2}{2} + \\frac{5z^4}{24} \\right) - \\frac{z^3}{6}\\left( 1 + \\frac{z^2}{2} \\right) + \\frac{z^5}{120}(1) + \\dots$$
$$= z + \\frac{z^3}{2} + \\frac{5z^5}{24} - \\frac{z^3}{6} - \\frac{z^5}{12} + \\frac{z^5}{120} + \\dots$$
Combine the like terms:
- **$z$ term:** $1z$
- **$z^3$ term:** $\\left( \\frac{1}{2} - \\frac{1}{6} \\right)z^3 = \\frac{1}{3}z^3$
- **$z^5$ term:** $\\left( \\frac{5}{24} - \\frac{1}{12} + \\frac{1}{120} \\right)z^5 = \\frac{25 - 10 + 1}{120} z^5 = \\frac{16}{120} z^5 = \\frac{2}{15}z^5$

Thus, we obtain:
$$\\tan z = z + \\frac{1}{3}z^3 + \\frac{2}{15}z^5 + \\dots$$

**(b) Using long division ($\\sin z / \\cos z$):**  
Divide $z - \\frac{z^3}{6} + \\frac{z^5}{120} - \\dots$ by $1 - \\frac{z^2}{2} + \\frac{z^4}{24} - \\dots$:
1. Divide leading term $z$ by $1$ to get the first term $z$. Multiply and subtract:
   $$\\left( z - \\frac{z^3}{6} + \\frac{z^5}{120} \\right) - z\\left( 1 - \\frac{z^2}{2} + \\frac{z^4}{24} \\right) = \\frac{z^3}{3} - \\frac{z^5}{30}$$
2. Divide leading term $\\frac{z^3}{3}$ by $1$ to get the second term $\\frac{z^3}{3}$. Multiply and subtract:
   $$\\left( \\frac{z^3}{3} - \\frac{z^5}{30} \\right) - \\frac{z^3}{3}\\left( 1 - \\frac{z^2}{2} \\right) = \\left( \\frac{z^3}{3} - \\frac{z^5}{30} \\right) - \\left( \\frac{z^3}{3} - \\frac{z^5}{6} \\right) = \\left( \\frac{1}{6} - \\frac{1}{30} \\right)z^5 = \\frac{2}{15}z^5$$
3. Divide leading term $\\frac{2}{15}z^5$ by $1$ to get the third term $\\frac{2}{15}z^5$.
Thus, we obtain:
$$\\tan z = z + \\frac{1}{3}z^3 + \\frac{2}{15}z^5 + \\dots$$

**(c) Using Problem 45 with $f(z) = \\tan z$:**  
Here, $f(z) = \\tan z$, which satisfies $f'(z) = \\sec^2 z = 1 + \\tan^2 z = 1 + [f(z)]^2$. The initial condition is $f(0) = \\tan 0 = 0$.
We compute the derivatives at $z=0$ following the differential equation:
- $f(0) = 0$
- $f'(0) = 1 + [f(0)]^2 = 1 + 0 = 1$
- $f''(z) = 2f(z)f'(z) \\implies f''(0) = 2f(0)f'(0) = 2(0)(1) = 0$
- $f'''(z) = 2[f'(z)]^2 + 2f(z)f''(z) \\implies f'''(0) = 2(1)^2 + 2(0)(0) = 2$
- $f^{(4)}(z) = 6f'(z)f''(z) + 2f(z)f'''(z) \\implies f^{(4)}(0) = 6(1)(0) + 2(0)(2) = 0$
- $f^{(5)}(z) = 6[f''(z)]^2 + 8f'(z)f'''(z) + 2f(z)f^{(4)}(z) \\implies f^{(5)}(0) = 6(0)^2 + 8(1)(2) + 2(0)(0) = 16$

Using the Maclaurin expansion formula:
$$f(z) = f(0) + f'(0)z + \\frac{f''(0)}{2!}z^2 + \\frac{f'''(0)}{3!}z^3 + \\frac{f^{(4)}(0)}{4!}z^4 + \\frac{f^{(5)}(0)}{5!}z^5 + \\dots$$
$$f(z) = 0 + 1z + 0z^2 + \\frac{2}{6}z^3 + 0z^4 + \\frac{16}{120}z^5 + \\dots = z + \\frac{1}{3}z^3 + \\frac{2}{15}z^5 + \\dots$$
All three methods yield the same series expansion.
$$\\boxed{\\tan z = z + \\frac{1}{3}z^3 + \\frac{2}{15}z^5 + \\dots}$$

---

## Problem 47

**Problem Statement:**  
We saw in Problem 34 in Exercises 1.3 that de Moivre's formula can be used to obtain trigonometric identities for $\\cos 3\\theta$ and $\\sin 3\\theta$. Discuss how these identities can be used to obtain Maclaurin series for $\\sin^3 z$ and $\\cos^3 z$.

**Solution:**  
**Step 1.** From de Moivre's formula, the identities for triple angles are:
$$\\cos 3\\theta = 4\\cos^3 \\theta - 3\\cos \\theta \\implies \\cos^3 \\theta = \\frac{\\cos 3\\theta + 3\\cos \\theta}{4}$$
$$\\sin 3\\theta = 3\\sin \\theta - 4\\sin^3 \\theta \\implies \\sin^3 \\theta = \\frac{3\\sin \\theta - \\sin 3\\theta}{4}$$
By the identity principle for analytic functions, these equations hold for all complex numbers $z \\in \\mathbb{C}$:
$$\\cos^3 z = \\frac{1}{4}\\cos 3z + \\frac{3}{4}\\cos z$$
$$\\sin^3 z = \\frac{3}{4}\\sin z - \\frac{1}{4}\\sin 3z$$

**Step 2.** We write the Maclaurin series for $\\cos z$ and $\\cos 3z$:
$$\\cos z = \\sum_{k=0}^\\infty \\frac{(-1)^k z^{2k}}{(2k)!}$$
$$\\cos 3z = \\sum_{k=0}^\\infty \\frac{(-1)^k (3z)^{2k}}{(2k)!} = \\sum_{k=0}^\\infty \\frac{(-1)^k 3^{2k} z^{2k}}{(2k)!}$$
Substitute these series into the identity for $\\cos^3 z$:
$$\\cos^3 z = \\frac{1}{4} \\sum_{k=0}^\\infty \\frac{(-1)^k 3^{2k} z^{2k}}{(2k)!} + \\frac{3}{4} \\sum_{k=0}^\\infty \\frac{(-1)^k z^{2k}}{(2k)!} = \\frac{1}{4} \\sum_{k=0}^\\infty \\frac{(-1)^k \\left( 3^{2k} + 3 \\right)}{(2k)!} z^{2k}$$
Expanding the first few terms:
$$\\cos^3 z = \\frac{1}{4} \\left[ 4 - \\frac{12}{2!}z^2 + \\frac{84}{4!}z^4 - \\frac{732}{6!}z^6 + \\dots \\right] = 1 - \\frac{3}{2}z^2 + \\frac{7}{8}z^4 - \\frac{61}{240}z^6 + \\dots$$

**Step 3.** We write the Maclaurin series for $\\sin z$ and $\\sin 3z$:
$$\\sin z = \\sum_{k=0}^\\infty \\frac{(-1)^k z^{2k+1}}{(2k+1)!}$$
$$\\sin 3z = \\sum_{k=0}^\\infty \\frac{(-1)^k (3z)^{2k+1}}{(2k+1)!} = \\sum_{k=0}^\\infty \\frac{(-1)^k 3^{2k+1} z^{2k+1}}{(2k+1)!}$$
Substitute these series into the identity for $\\sin^3 z$:
$$\\sin^3 z = \\frac{3}{4} \\sum_{k=0}^\\infty \\frac{(-1)^k z^{2k+1}}{(2k+1)!} - \\frac{1}{4} \\sum_{k=0}^\\infty \\frac{(-1)^k 3^{2k+1} z^{2k+1}}{(2k+1)!} = \\frac{1}{4} \\sum_{k=0}^\\infty \\frac{(-1)^k \\left( 3 - 3^{2k+1} \\right)}{(2k+1)!} z^{2k+1}$$
Expanding the first few terms:
$$\\sin^3 z = \\frac{1}{4} \\left[ 0z - \\frac{3 - 27}{3!}z^3 + \\frac{3 - 243}{5!}z^5 - \\dots \\right] = z^3 - \\frac{1}{2}z^5 + \\frac{13}{80}z^7 - \\dots$$

This shows that we can find the Maclaurin series for $\\cos^3 z$ and $\\sin^3 z$ by combining the linear expansions of $\\cos z, \\cos 3z$ and $\\sin z, \\sin 3z$, respectively, which avoids the tedious computation of high-order derivatives of non-linear products.

---

## Problem 48

**Problem Statement:**  
(a) Suppose that the principal value of the logarithm $\\operatorname{Ln} z = \\log_e |z| + i \\operatorname{Arg}(z)$ is expanded in a Taylor series with center $z_0 = -1+i$. Explain why $R=1$ is the radius of the largest circle centered at $z_0 = -1+i$ within which $f$ is analytic.  
(b) Show that within the circle $|z - (-1+i)| = 1$ the Taylor series for $f$ is:
$$\\operatorname{Ln} z = \\frac{1}{2} \\log_e 2 + \\frac{3\\pi}{4}i - \\sum_{k=1}^\\infty \\frac{1}{k}\\left( \\frac{1+i}{2} \\right)^k (z+1-i)^k$$
(c) Show that the radius of convergence for the power series in part (b) is $R = \\sqrt{2}$. Explain why this does not contradict the result in part (a).

**Solution:**  
**(a) Explanation of the Radius of Analyticity:**  
The principal branch of the logarithm $\\operatorname{Ln} z$ is defined and analytic on the complex plane sliced along the nonpositive real axis:
$$\\mathbb{C} \\setminus (-\\infty, 0]$$
The center of our Taylor series is $z_0 = -1+i$. The distance from $z_0$ to any point $z = x + iy$ on the branch cut (where $y = 0$ and $x \\le 0$) is:
$$\\text{dist}(z_0, \\text{cut}) = \\sqrt{(-1 - x)^2 + (1 - 0)^2} = \\sqrt{(x+1)^2 + 1}$$
The minimum distance occurs at $x = -1$, where the distance is exactly $\\sqrt{0^2 + 1} = 1$. The point of singularity/discontinuity closest to $z_0 = -1+i$ is $z = -1$.
Therefore, the largest open circle centered at $z_0$ that lies entirely within the domain of analyticity of $\\operatorname{Ln} z$ has radius $R = 1$.

**(b) Derive the Taylor Series:**  
The derivative of $\\operatorname{Ln} z$ is $\\frac{1}{z}$. We expand $\\frac{1}{z}$ in powers of $z - z_0$ where $z_0 = -1+i$:
$$\\frac{1}{z} = \\frac{1}{z_0 + (z-z_0)} = \\frac{1}{z_0} \\cdot \\frac{1}{1 + \\frac{z-z_0}{z_0}} = \\frac{1}{z_0} \\sum_{n=0}^\\infty (-1)^n \\left( \\frac{z-z_0}{z_0} \\right)^n = \\sum_{n=0}^\\infty \\frac{(-1)^n}{z_0^{n+1}} (z-z_0)^n$$
This expansion is valid for $|z-z_0| < |z_0| = |-1+i| = \\sqrt{2}$.
Since the domain is simply connected inside $|z-z_0| < 1$, we can integrate term-by-term from the center $z_0$ to $z$:
$$\\operatorname{Ln} z - \\operatorname{Ln} z_0 = \\sum_{n=0}^\\infty \\frac{(-1)^n}{(n+1)z_0^{n+1}} (z-z_0)^{n+1}$$
Re-index by setting $k = n+1 \\ge 1$:
$$\\operatorname{Ln} z = \\operatorname{Ln} z_0 + \\sum_{k=1}^\\infty \\frac{(-1)^{k-1}}{k z_0^k} (z-z_0)^k = \\operatorname{Ln} z_0 - \\sum_{k=1}^\\infty \\frac{1}{k} \\left( -\\frac{1}{z_0} \\right)^k (z-z_0)^k$$
Evaluate the constants:
$$\\operatorname{Ln} z_0 = \\ln| -1+i | + i\\operatorname{Arg}(-1+i) = \\ln \\sqrt{2} + i \\frac{3\\pi}{4} = \\frac{1}{2}\\ln 2 + \\frac{3\\pi}{4}i$$
$$-\\frac{1}{z_0} = -\\frac{1}{-1+i} = \\frac{1}{1-i} = \\frac{1+i}{(1-i)(1+i)} = \\frac{1+i}{2}$$
Substitute these back to get the Taylor series:
$$\\operatorname{Ln} z = \\frac{1}{2} \\log_e 2 + \\frac{3\\pi}{4}i - \\sum_{k=1}^\\infty \\frac{1}{k}\\left( \\frac{1+i}{2} \\right)^k (z+1-i)^k$$

**(c) Radius of Convergence and Resolution of the Apparent Contradiction:**  
To find the radius of convergence $R_{series}$ of the Taylor series:
$$a_k = -\\frac{1}{k}\\left( \\frac{1+i}{2} \\right)^k$$
Using the root test:
$$\\lim_{k\\to\\infty} |a_k|^{1/k} = \\lim_{k\\to\\infty} \\left( \\frac{1}{k} \\right)^{1/k} \\left| \\frac{1+i}{2} \\right| = 1 \\cdot \\frac{\\sqrt{2}}{2} = \\frac{1}{\\sqrt{2}}$$
Thus, the radius of convergence is:
$$R_{series} = \\frac{1}{\\lim |a_k|^{1/k}} = \\sqrt{2}$$
**Why this does not contradict part (a):**  
In part (a), the radius of analyticity $R = 1$ is restricted by the branch cut of the principal branch $\\operatorname{Ln} z$. However, the only true singularity of the function $\\log z$ is the branch point at $z=0$. The branch cut is an artificial boundary introduced to define a single-valued branch of a multi-valued function.
The power series defines an analytic function within the disk $|z - z_0| < \\sqrt{2}$. For points in the intersection of the disk and the branch cut (specifically on the negative real axis in $(-1-\\sqrt{2}, -1)$), the series converges to the analytic continuation of $\\operatorname{Ln} z$ across the branch cut, which corresponds to a different branch of the multi-valued logarithm (with argument $\\theta \\in (\\pi, 3\\pi/2)$).
Since the power series has no information about our arbitrary choice of branch cut and is only limited by the nearest actual singularity of the function (which is the branch point $z=0$ at distance $|z_0 - 0| = \\sqrt{2}$), the radius of convergence is $\\sqrt{2}$, which is greater than $1$.

---

## Problem 49

**Problem Statement:**  
(a) Consider the function $\\operatorname{Ln}(1+z)$. What is the radius of the largest circle centered at the origin within which $f$ is analytic?  
(b) Expand $f$ in a Maclaurin series. What is the radius of convergence of this series?  
(c) Use the result in part (b) to find a Maclaurin series for $\\operatorname{Ln}(1-z)$.  
(d) Find a Maclaurin series for $\\operatorname{Ln}\\left(\\frac{1+z}{1-z}\\right)$.

**Solution:**  
**(a) Radius of Analyticity:**  
The branch point of $\\operatorname{Ln}(1+z)$ occurs where the argument is zero: $1+z = 0 \\implies z = -1$.
The branch cut is $(-\\infty, -1]$ along the real axis.
The nearest singularity/discontinuity to the center $z_0 = 0$ is the branch point at $z = -1$. The distance is $|0 - (-1)| = 1$.
So the radius of the largest circle centered at the origin within which $\\operatorname{Ln}(1+z)$ is analytic is $R = 1$.

**(b) Maclaurin Series for $\\operatorname{Ln}(1+z)$:**  
The derivative is:
$$\\frac{d}{dz} \\operatorname{Ln}(1+z) = \\frac{1}{1+z}$$
For $|z| < 1$, we expand $\\frac{1}{1+z}$ as a geometric series:
$$\\frac{1}{1+z} = \\sum_{k=0}^\\infty (-1)^k z^k = 1 - z + z^2 - z^3 + \\dots$$
Integrating term-by-term from $0$ to $z$ (noting that $\\operatorname{Ln}(1+0) = \\operatorname{Ln}(1) = 0$):
$$\\operatorname{Ln}(1+z) = \\sum_{k=0}^\\infty \\frac{(-1)^k z^{k+1}}{k+1} = \\sum_{n=1}^\\infty \\frac{(-1)^{n-1}}{n} z^n = z - \\frac{z^2}{2} + \\frac{z^3}{3} - \\frac{z^4}{4} + \\dots$$
Using the ratio test:
$$\\lim_{n\\to\\infty} \\left| \\frac{a_{n+1}}{a_n} \\right| = \\lim_{n\\to\\infty} \\left| \\frac{(-1)^n z^{n+1}/(n+1)}{(-1)^{n-1} z^n/n} \\right| = |z| \\lim_{n\\to\\infty} \\frac{n}{n+1} = |z|$$
So the series converges for $|z| < 1$. The radius of convergence is $R = 1$.
$$\\boxed{\\operatorname{Ln}(1+z) = \\sum_{n=1}^\\infty \\frac{(-1)^{n-1} z^n}{n}, \\quad R = 1}$$

**(c) Maclaurin Series for $\\operatorname{Ln}(1-z)$:**  
Substitute $z \\mapsto -z$ into the Maclaurin series of $\\operatorname{Ln}(1+z)$:
$$\\operatorname{Ln}(1-z) = \\sum_{n=1}^\\infty \\frac{(-1)^{n-1}(-z)^n}{n} = \\sum_{n=1}^\\infty \\frac{(-1)^{n-1}(-1)^n z^n}{n} = \\sum_{n=1}^\\infty \\frac{(-1)^{2n-1} z^n}{n}$$
Since $2n-1$ is always odd, $(-1)^{2n-1} = -1$:
$$\\boxed{\\operatorname{Ln}(1-z) = -\\sum_{n=1}^\\infty \\frac{z^n}{n} = -z - \\frac{z^2}{2} - \\frac{z^3}{3} - \\frac{z^4}{4} - \\dots, \\quad R = 1}$$

**(d) Maclaurin Series for $\\operatorname{Ln}\\left(\\frac{1+z}{1-z}\\right)$:**  
Using the logarithmic property:
$$\\operatorname{Ln}\\left( \\frac{1+z}{1-z} \\right) = \\operatorname{Ln}(1+z) - \\operatorname{Ln}(1-z)$$
Subtract the two series:
$$\\operatorname{Ln}(1+z) - \\operatorname{Ln}(1-z) = \\left( z - \\frac{z^2}{2} + \\frac{z^3}{3} - \\frac{z^4}{4} + \\dots \\right) - \\left( -z - \\frac{z^2}{2} - \\frac{z^3}{3} - \\frac{z^4}{4} - \\dots \\right)$$
$$= 2z + 2\\frac{z^3}{3} + 2\\frac{z^5}{5} + \\dots = 2\\sum_{k=0}^\\infty \\frac{z^{2k+1}}{2k+1}$$
This series contains only odd powers of $z$. The radius of convergence is $R = 1$.
$$\\boxed{\\operatorname{Ln}\\left(\\frac{1+z}{1-z}\\right) = 2\\sum_{k=0}^\\infty \\frac{z^{2k+1}}{2k+1}, \\quad R = 1}$$

---

## Problem 50

**Problem Statement:**  
In Theorem 3.3 we saw that L'Hôpital's rule carries over to complex analysis. In Problem 33 in Exercises 3.1 you were guided through a proof of the following proposition by using the definition of the derivative:  
*If functions $f$ and $g$ are analytic at a point $z_0$ and $f(z_0) = 0, g(z_0) = 0$, but $g'(z_0) \\neq 0$, then:*
$$\\lim_{z\\to z_0} \\frac{f(z)}{g(z)} = \\frac{f'(z_0)}{g'(z_0)}$$
This time, prove the proposition by replacing $f(z)$ and $g(z)$ by their Taylor series centered at $z_0$.

**Solution:**  
**Step 1.** Since $f(z)$ and $g(z)$ are analytic at $z_0$, they can be expanded in Taylor series centered at $z_0$ with some positive radius of convergence:
$$f(z) = \\sum_{k=0}^\\infty \\frac{f^{(k)}(z_0)}{k!} (z-z_0)^k = f(z_0) + f'(z_0)(z-z_0) + \\frac{f''(z_0)}{2!}(z-z_0)^2 + \\dots$$
$$g(z) = \\sum_{k=0}^\\infty \\frac{g^{(k)}(z_0)}{k!} (z-z_0)^k = g(z_0) + g'(z_0)(z-z_0) + \\frac{g''(z_0)}{2!}(z-z_0)^2 + \\dots$$

**Step 2.** Substitute the initial conditions $f(z_0) = 0$ and $g(z_0) = 0$:
$$f(z) = f'(z_0)(z-z_0) + \\frac{f''(z_0)}{2!}(z-z_0)^2 + \\dots = (z-z_0) \\left[ f'(z_0) + \\frac{f''(z_0)}{2!}(z-z_0) + \\dots \\right]$$
$$g(z) = g'(z_0)(z-z_0) + \\frac{g''(z_0)}{2!}(z-z_0)^2 + \\dots = (z-z_0) \\left[ g'(z_0) + \\frac{g''(z_0)}{2!}(z-z_0) + \\dots \\right]$$

**Step 3.** Form the quotient $\\frac{f(z)}{g(z)}$ for $z \\neq z_0$:
$$\\frac{f(z)}{g(z)} = \\frac{(z-z_0) \\left[ f'(z_0) + \\frac{f''(z_0)}{2!}(z-z_0) + \\dots \\right]}{(z-z_0) \\left[ g'(z_0) + \\frac{g''(z_0)}{2!}(z-z_0) + \\dots \\right]} = \\frac{f'(z_0) + \\frac{f''(z_0)}{2!}(z-z_0) + \\dots}{g'(z_0) + \\frac{g''(z_0)}{2!}(z-z_0) + \\dots}$$

**Step 4.** Take the limit as $z \\to z_0$. Since the Taylor series represents analytic (and hence continuous) functions, we can evaluate the limit by direct substitution of $z = z_0$:
$$\\lim_{z\\to z_0} \\frac{f(z)}{g(z)} = \\frac{f'(z_0) + 0 + 0 + \\dots}{g'(z_0) + 0 + 0 + \\dots} = \\frac{f'(z_0)}{g'(z_0)}$$
Since $g'(z_0) \\neq 0$, the quotient is well-defined. This completes the proof.

---

## Problem 51

**Problem Statement:**  
(a) You will find the following real function in most older calculus texts:
$$f(x) = \\begin{cases} e^{-1/x^2} & x \\neq 0 \\\\ 0 & x = 0 \\end{cases}$$
Do some reading in these calculus texts as an aid in showing that $f$ is infinitely differentiable at every value of $x$. Show that $f$ is not represented by its Maclaurin expansion at any value of $x \\neq 0$.  
(b) Investigate whether the complex analogue of the real function in part (a),
$$f(z) = \\begin{cases} e^{-1/z^2} & z \\neq 0 \\\\ 0 & z = 0 \\end{cases}$$
is infinitely differentiable at $z = 0$.

**Solution:**  
**(a) Analysis of the Real Function:**  
For $x \\neq 0$, $f(x) = e^{-1/x^2}$ is infinitely differentiable by standard calculus rules.
At $x = 0$, we compute the first derivative using the limit definition:
$$f'(0) = \\lim_{h\\to 0} \\frac{f(h) - f(0)}{h} = \\lim_{h\\to 0} \\frac{e^{-1/h^2}}{h}$$
Let $u = 1/h$. As $h \\to 0$, $|u| \\to \\infty$:
$$f'(0) = \\lim_{u\\to\\infty} \\frac{u}{e^{u^2}} = 0 \\quad (\\text{by L'Hôpital's rule})$$
By induction, for $x \\neq 0$, the $n$-th derivative has the form $f^{(n)}(x) = P(1/x) e^{-1/x^2}$, where $P$ is a polynomial.
Taking the limit as $x \\to 0$:
$$f^{(n)}(0) = \\lim_{x\\to 0} \\frac{f^{(n-1)}(x) - 0}{x} = \\lim_{x\\to 0} \\frac{1}{x} P\\left( \\frac{1}{x} \\right) e^{-1/x^2} = 0$$
Thus, $f^{(n)}(0) = 0$ for all $n \\ge 1$.
The Maclaurin series of $f(x)$ is:
$$\\sum_{n=0}^\\infty \\frac{f^{(n)}(0)}{n!} x^n = 0 + 0x + 0x^2 + \\dots = 0$$
This series converges to $0$ for all $x \\in \\mathbb{R}$. However, for any $x \\neq 0$, $f(x) = e^{-1/x^2} > 0$.
Thus, $f(x)$ is infinitely differentiable at $x=0$, but the Maclaurin series does not represent the function at any point other than $x=0$ (meaning the function is infinitely differentiable but not analytic at $0$).

**(b) Analysis of the Complex Analogue:**  
Let us test the differentiability of the complex analogue $f(z)$ at $z = 0$ by evaluating the limit of the difference quotient:
$$f'(0) = \\lim_{z\\to 0} \\frac{f(z) - f(0)}{z} = \\lim_{z\\to 0} \\frac{e^{-1/z^2}}{z}$$
For this limit to exist in $\\mathbb{C}$, it must be the same along all paths approaching $0$.
- **Path 1: Along the real axis ($z = x$, where $x \\in \\mathbb{R}$):**  
  $$f'(0) = \\lim_{x\\to 0} \\frac{e^{-1/x^2}}{x} = 0 \\quad (\\text{as shown in part a})$$
- **Path 2: Along the imaginary axis ($z = iy$, where $y \\in \\mathbb{R}$):**  
  $$f'(0) = \\lim_{y\\to 0} \\frac{e^{-1/(iy)^2}}{iy} = \\lim_{y\\to 0} \\frac{e^{1/y^2}}{iy}$$
  As $y \\to 0$, $e^{1/y^2} \\to \\infty$ exponentially fast, while the denominator $iy \\to 0$.
  Therefore, the magnitude of the quotient approaches infinity:
  $$\\lim_{y\\to 0} \\left| \\frac{e^{1/y^2}}{iy} \\right| = \\lim_{y\\to 0} \\frac{e^{1/y^2}}{|y|} = \\infty$$
  Since the limit along the imaginary axis does not exist (it diverges to infinity), the complex derivative $f'(0)$ does not exist.
  Thus, the complex analogue $f(z)$ is **not differentiable** at $z = 0$. This highlights a key difference: differentiability in the complex sense is much more restrictive than in the real sense because the limit must be path-independent in a two-dimensional domain.
"""
c_62 += problems_36_51

with open(os.path.join(dest_dir, "section_6.2_solutions.md"), "w", encoding="utf-8") as f:
    f.write(c_62)

# ----------------- 3. Section 6.3 -----------------
print("Processing Section 6.3...")
with open(os.path.join(src_dir, "section_6.3_solutions.md"), "r", encoding="utf-8") as f:
    c_63 = f.read()

# Add Figure 6.6 and 6.7 at the top
c_63 = c_63.replace("### Complete Solutions", "### Complete Solutions\n\n![Figure 6.6](../../extracted_figures/figure_6_6.png)\n![Figure 6.7](../../extracted_figures/figure_6_7.png)")
# Add Figure 6.8 before Problems 1-6
c_63 = c_63.replace("### Problems 1–6: Laurent Expansions in a Punctured Disk", "### Problems 1–6: Laurent Expansions in a Punctured Disk\n\n![Figure 6.8](../../extracted_figures/figure_6_8.png)")
# Add Figure 6.9 in Problem 31
c_63 = c_63.replace("#### Problem 31\n**Problem:**", "#### Problem 31\n**Problem:**\n\n![Figure 6.9](../../extracted_figures/figure_6_9.png)")

with open(os.path.join(dest_dir, "section_6.3_solutions.md"), "w", encoding="utf-8") as f:
    f.write(c_63)

# ----------------- 4. Section 6.4 -----------------
print("Processing Section 6.4...")
with open(os.path.join(src_dir, "section_6.4_solutions.md"), "r", encoding="utf-8") as f:
    c_64 = f.read()
with open(os.path.join(dest_dir, "section_6.4_solutions.md"), "w", encoding="utf-8") as f:
    f.write(c_64)

# ----------------- 5. Section 6.5 -----------------
print("Processing Section 6.5...")
with open(os.path.join(src_dir, "section_6.5_solutions.md"), "r", encoding="utf-8") as f:
    c_65 = f.read()
# Add Figure 6.10 at the top
c_65 = c_65.replace("### Complete Solutions", "### Complete Solutions\n\n![Figure 6.10](../../extracted_figures/figure_6_10.png)")

with open(os.path.join(dest_dir, "section_6.5_solutions.md"), "w", encoding="utf-8") as f:
    f.write(c_65)

# ----------------- 6. Section 6.6 -----------------
print("Processing Section 6.6...")
with open(os.path.join(src_dir, "section_6.6_solutions.md"), "r", encoding="utf-8") as f:
    c_66 = f.read()

# Add Figure 6.11 before Problem 15
c_66 = c_66.replace("#### Problem 15", "![Figure 6.11](../../extracted_figures/figure_6_11.png)\n\n#### Problem 15")
# Add Figure 6.12 under Problem 17
c_66 = c_66.replace("#### Problem 17", "#### Problem 17\n\n![Figure 6.12](../../extracted_figures/figure_6_12.png)")

# Append the theoretical reference section for figures 6.13 to 6.19
reference_figures = """

## Section 6.6 Contour Integration Reference Figures

This section contains figures illustrating the various contours used in improper real integrals, Fourier integrals, and branch cut integration in Dennis G. Zill's Complex Analysis.

### Indented Contour (Figure 6.13)

When evaluating integrals where the integrand has a simple pole on the real axis (e.g. at $z = c$), we indent the contour using a small semicircle of radius $r$ around $c$, as shown in Figure 6.13:
![Figure 6.13](../../extracted_figures/figure_6_13.png)

### Indented Contour for Example 5 (Figure 6.14)

For integrators with a pole at the origin and in the upper half-plane (like $z_1 = 1+i$), we use the indented contour shown in Figure 6.14:
![Figure 6.14](../../extracted_figures/figure_6_14.png)

### Contour for Example 6 (Figure 6.15)

For integration of fractional powers involving a branch cut along the positive real axis, we use the "keyhole" contour shown in Figure 6.15:
![Figure 6.15](../../extracted_figures/figure_6_15.png)

### Rouché's Theorem and Argument Principle (Figure 6.16)

For Rouché's Theorem, the image of $C$ lies within the disk $|w-1|<1$, as shown in Figure 6.16:
![Figure 6.16](../../extracted_figures/figure_6_16.png)

### Rectangular Contour for Infinite Series (Figure 6.17)

For summing infinite series, we integrate over a rectangular contour enclosing the poles on the imaginary axis, as shown in Figure 6.17:
![Figure 6.17](../../extracted_figures/figure_6_17.png)

### Rectangular Contour for Problem 49 (Figure 6.18)

For evaluating improper integrals of exponentials using rectangular contours, we use the rectangular contour shown in Figure 6.18:
![Figure 6.18](../../extracted_figures/figure_6_18.png)

### Rectangular Contour for Problem 50 (Figure 6.19)

For Fourier-type improper integrals evaluated using rectangular contours, we use the rectangular contour shown in Figure 6.19:
![Figure 6.19](../../extracted_figures/figure_6_19.png)
"""
c_66 += reference_figures

with open(os.path.join(dest_dir, "section_6.6_solutions.md"), "w", encoding="utf-8") as f:
    f.write(c_66)

# ----------------- 7. Section 6.7 -----------------
print("Processing Section 6.7...")
with open(os.path.join(src_dir, "section_6.7_solutions.md"), "r", encoding="utf-8") as f:
    c_67 = f.read()

# Add Figure 6.20, 6.21, 6.22 at the top
c_67 = c_67.replace("### Problems 1–8: Laplace Transforms", "### Problems 1–8: Laplace Transforms\n\n![Figure 6.20](../../extracted_figures/figure_6_20.png)\n![Figure 6.21](../../extracted_figures/figure_6_21.png)\n![Figure 6.22](../../extracted_figures/figure_6_22.png)")
# Add Figure 6.23 before Problem 9
c_67 = c_67.replace("### Problems 9–18: Inverse Laplace Transforms using Residues", "### Problems 9–18: Inverse Laplace Transforms using Residues\n\n![Figure 6.23](../../extracted_figures/figure_6_23.png)")
# Add Figure 6.24 under Problem 9
c_67 = c_67.replace("#### Problem 9", "#### Problem 9\n\n![Figure 6.24](../../extracted_figures/figure_6_24.png)")

# Append reference section for Fourier figures
fourier_figures = """

## Section 6.7 Fourier Transforms Reference Figures

This section contains figures illustrating Fourier transforms and their integration contours.

### Graph of $f(x) = e^{-|x|}$ (Figure 6.25)

The graph of $f(x) = e^{-|x|}$ is shown in Figure 6.25:
![Figure 6.25](../../extracted_figures/figure_6_25.png)

### Fourier Integral Contours (Figure 6.26 and 6.27)

When finding the inverse Fourier transform, we close the contour in the upper half-plane for $x > 0$ (Figure 6.26) and in the lower half-plane for $x < 0$ (Figure 6.27):
![Figure 6.26](../../extracted_figures/figure_6_26.png)
![Figure 6.27](../../extracted_figures/figure_6_27.png)
"""
c_67 += fourier_figures

with open(os.path.join(dest_dir, "section_6.7_solutions.md"), "w", encoding="utf-8") as f:
    f.write(c_67)

# ----------------- 8. Review Quiz -----------------
print("Processing Review Quiz...")
with open(os.path.join(src_dir, "chapter_6_review_quiz.md"), "r", encoding="utf-8") as f:
    c_rq = f.read()
with open(os.path.join(dest_dir, "chapter_6_review_quiz.md"), "w", encoding="utf-8") as f:
    f.write(c_rq)

print("All 8 files perfected and written successfully to solutions_perfected/chapter_6!")
