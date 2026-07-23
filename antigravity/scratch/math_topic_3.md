# Topic 3: Limits, Continuity, and Analyticity

## A. Conceptual Foundation
- **Limits in $\mathbb{C}$:** Unlike calculus on the real line where $x$ can only approach $x_0$ from the left or right, a complex limit $z \to z_0$ means $z$ can approach $z_0$ from *any* direction in the 2D plane (infinite paths). For a limit to exist, the result must be identical regardless of the path chosen.
- **Continuity:** A function $f(z)$ is continuous at $z_0$ if the limit as $z \to z_0$ exists, $f(z_0)$ exists, and they are exactly equal.
- **Differentiability:** Derived exactly like real calculus: $f'(z_0) = \lim_{\Delta z \to 0} \frac{f(z_0 + \Delta z) - f(z_0)}{\Delta z}$. However, because $\Delta z$ is complex, it can approach 0 from any direction.
- **Analyticity:** A function $f(z)$ is **analytic** at a point $z_0$ if it is differentiable at $z_0$ *and* at every point in some neighborhood of $z_0$. (This is much stronger than mere differentiability at a single point!). An *Entire* function is analytic everywhere in $\mathbb{C}$.

## B. Theorems Section

### 1. Cauchy-Riemann (CR) Equations
> **✨ Exam Favorite:**
> Proving analyticity using CR equations is guaranteed to appear on the exam.

**Theorem:** Suppose $f(z) = u(x,y) + iv(x,y)$.
For $f(z)$ to be differentiable at $z_0$, the first-order partial derivatives must satisfy the Cauchy-Riemann equations:
$u_x = v_y$
$u_y = -v_x$

*Sufficient Condition for Analyticity:* If the partial derivatives $u_x, u_y, v_x, v_y$ are continuous and satisfy the CR equations in a domain $D$, then $f(z)$ is analytic in $D$.
*If CR holds*, the derivative is simply: $f'(z) = u_x + iv_x$.

### 2. Harmonic Functions
**Definition:** A real-valued function $H(x,y)$ is harmonic if it has continuous second partial derivatives and satisfies Laplace's equation: $H_{xx} + H_{yy} = 0$.
**Theorem:** If $f(z) = u + iv$ is analytic on a domain $D$, then both $u$ and $v$ are automatically harmonic on $D$. Furthermore, $v$ is called the **harmonic conjugate** of $u$.

## C. Problem-Solving Framework

### Technique 1: Proving a Limit does NOT exist.
1. Approach along the $x$-axis: Set $y=0$, compute the real limit.
2. Approach along the $y$-axis: Set $x=0$, compute the imaginary limit.
3. If the limits are different, the overall limit DNE. (Sometimes you must use $y=mx$ if axes limits match).

### Technique 2: Finding a Harmonic Conjugate
If given a harmonic function $u(x,y)$ and asked to find its conjugate $v(x,y)$:
1. Verify $u$ is harmonic: Check $u_{xx} + u_{yy} = 0$.
2. Use $u_x = v_y$. Integrate $u_x$ with respect to $y$ to find $v$. This will introduce a "constant" of integration that is a function of $x$, say $h(x)$.
3. Differentiate your new $v$ with respect to $x$ and set it equal to $-u_y$ (per the second CR equation).
4. Solve for $h'(x)$, integrate to find $h(x)$, and combine to form $v(x,y)$.

> **🚨 Conceptual Trap:**
> Do NOT forget to add the constant function $h(x)$ when integrating with respect to $y$ in Step 2. This is the most common algebra mistake in harmonic conjugate problems.

## D. Fully Solved Examples

### Example 1 (Exam-Level)
**Given $u(x,y) = x^3 - 3xy^2$. Show it is harmonic and find its harmonic conjugate $v(x,y)$.**
**Step 1:** Verify Laplace's Equation.
$u_x = 3x^2 - 3y^2 \Rightarrow u_{xx} = 6x$.
$u_y = -6xy \Rightarrow u_{yy} = -6x$.
$u_{xx} + u_{yy} = 6x - 6x = 0$. So $u$ is harmonic!
**Step 2:** Use CR: $v_y = u_x = 3x^2 - 3y^2$.
Integrate w.r.t $y$: $v(x,y) = 3x^2y - y^3 + h(x)$.
**Step 3:** Use CR: $v_x = -u_y \Rightarrow 6xy + h'(x) = -(-6xy) = 6xy$.
Therefore, $h'(x) = 0 \Rightarrow h(x) = C$.
**Step 4:** State Final Answer.
$v(x,y) = 3x^2y - y^3 + C$.
*(Bonus: The full analytic function is $f(z) = z^3 + iC$).*

## E. Quick Recall Summary
- **Limit DNE Path test:** Choose $y=0$, $x=0$, or $y=mx$. If different answers, Limit Does Not Exist.
- **CR Equations:** $u_x = v_y$ and $u_y = -v_x$.
- **Derivative Formula:** $f'(z) = u_x + iv_x$.
- **Laplace's Equation:** $\nabla^2 u = u_{xx} + u_{yy} = 0$. 
