# Topic 5: Conformal Mapping & LFT

## A. Conceptual Foundation
- **Conformal Mapping:** A mapping $w = f(z)$ is called **conformal** at a point $z_0$ if it preserves both the *angle of intersection* and the *direction* (orientation) of any two curves passing through $z_0$.
- **Theorem:** If $f(z)$ is analytic at $z_0$ and $f'(z_0) \neq 0$, then the mapping $w = f(z)$ is conformal at $z_0$.
- **Critical Points:** A point $z_0$ where $f'(z_0) = 0$ is called a critical point of the mapping. At critical points, conformality is lost (the angle between curves is often multiplied by some integer $k \ge 2$).

## B. Linear Fractional Transformations (LFTs)
Also known as Möbius Transformations. This is the hallmark of complex mapping exams.
- **Definition:** $w = \frac{az + b}{cz + d}$, where $ad - bc \neq 0$.
- **Why $ad - bc \neq 0$?** If $ad - bc = 0$, then the transformation degenerates into a constant mapping (collapsing the whole plane to a single point).
- **Properties of LFTs:**
  - They are the *only* bijective (one-to-one) conformal mappings of the extended complex plane onto itself.
  - The composition of two LFTs is another LFT. The inverse of an LFT is also an LFT (making them a mathematical Group).
  - An LFT uniquely maps any 3 distinct points $z_1, z_2, z_3$ exactly to 3 distinct points $w_1, w_2, w_3$.

> **✨ Exam Favorite:**
> To find the specific LFT mapping three points $z_k$ to three points $w_k$, use the **Cross-Ratio Formula**:
> $\frac{(w - w_1)(w_2 - w_3)}{(w - w_3)(w_2 - w_1)} = \frac{(z - z_1)(z_2 - z_3)}{(z - z_3)(z_2 - z_1)}$

> **🚨 Conceptual Trap:**
> Since LFTs map straight lines/circles to straight lines/circles, simply map the boundary points to boundary points of the image. But beware: check the *direction* of traversal to determine which side (interior/exterior) forms the mapped region.

## C. Fully Solved Examples

### Example 1 (Exam-Level Application)
**Find the linear fractional transformation that maps $z_1 = -1$, $z_2 = 0$, $z_3 = 1$ onto $w_1 = -i$, $w_2 = 1$, $w_3 = i$, respectively.**
**Step 1:** Setup the Cross-Ratio equation.
$\frac{(w - (-i))(1 - i)}{(w - i)(1 - (-i))} = \frac{(z - (-1))(0 - 1)}{(z - 1)(0 - (-1))}$
**Step 2:** Simplify the left side.
Left side: $\frac{(w+i)(1-i)}{(w-i)(1+i)}$
**Step 3:** Simplify the right side.
Right side: $\frac{(z+1)(-1)}{(z-1)(1)} = -\frac{z+1}{z-1}$
**Step 4:** Equate and solve for $w$.
$\frac{(w+i)(1-i)}{(w-i)(1+i)} = \frac{-z-1}{z-1}$
Note that $\frac{1-i}{1+i} = \frac{(1-i)^2}{1^2+1^2} = \frac{-2i}{2} = -i$.
So the left side is $-i \frac{w+i}{w-i}$.
Thus, $i \frac{w+i}{w-i} = \frac{z+1}{z-1} \Rightarrow \frac{w+i}{w-i} = -i \frac{z+1}{z-1}$.
By further fraction manipulation (componendo & dividendo or cross multiplication), solving for $w$ yields:
$w = \frac{i - z}{i + z}$.

## D. Quick Recall Summary
- $ad - bc = 0$ collapses an LFT into a single point.
- Conformality means the angle is strictly preserved.
- Find critical points where $f'(z) = 0$.
- The Cross-Ratio Formula is absolutely vital for 10-mark LFT problems!
