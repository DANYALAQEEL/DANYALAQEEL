# Practical Applications of Polynomial Interpolation: A Technical Report

## Abstract
This report explores the practical utility of polynomial interpolation in various scientific and engineering domains. Polynomial interpolation is a fundamental numerical analysis technique used to estimate unknown values within a range of known data points. By applying four distinct methodologies—Newton’s Forward Difference, Newton’s Backward Difference, Newton’s Divided Difference, and Lagrange Interpolation—this report demonstrates how these mathematical tools solve real-world problems in thermodynamics, demographics, kinematics, and robotics. Each method is evaluated based on its specific constraints, such as data interval consistency and relative position of the target point.

---

## 1. Theoretical Background
Interpolation is the process of constructing new data points within the range of a discrete set of known data points. In engineering, experimental data is often collected at specific intervals, yet the value of a function at an intermediate point is frequently required for further analysis.

### 1.1 Fundamental Principles
The core objective of polynomial interpolation is to find a polynomial $P(x)$ of degree $n$ that passes through $n+1$ given data points. The general form is:
$$ P(x) = a_n x^n + a_{n-1} x^{n-1} + \dots + a_1 x + a_0 $$

### 1.2 Methodologies
*   **Newton’s Difference Formulas:** These methods leverage the concept of finite differences. The **Forward Formula** is optimal for points near the start of a dataset, while the **Backward Formula** is suited for points near the end. Both require equally spaced intervals.
*   **Newton’s Divided Difference:** This generalization allows for interpolation with unequally spaced data points by using ratios of differences.
*   **Lagrange Interpolation:** Unlike Newton’s methods, Lagrange interpolation does not require a difference table. It constructs the polynomial directly as a linear combination of Lagrange basis polynomials, making it highly versatile for any data distribution.

---

## 2. Practical Case Studies

### Case 1: Newton’s Forward Difference Formula
**Field:** Chemical Engineering (Thermodynamics)  
**Scenario:** A chemical engineer needs to determine the specific heat capacity ($C_p$) of a substance at a temperature of $T = 305 \text{ K}$. Experimental data is available for temperatures at equal intervals of 20 K, starting from 300 K.  
**Engineering Rationale:** Since the target value (305 K) is near the beginning of the table ($x_0 = 300$ K), Newton's Forward Difference formula minimizes truncation errors and provides the most efficient calculation path.

#### Data Table
| Temperature ($T$) [K] | Specific Heat ($C_p$) [kJ/kg·K] |
| :--- | :--- |
| $x_0 = 300$ | $y_0 = 1.005$ |
| $x_1 = 320$ | $y_1 = 1.008$ |
| $x_2 = 340$ | $y_2 = 1.013$ |
| $x_3 = 360$ | $y_3 = 1.020$ |

#### Forward Difference Table
| $x$ | $y$ | $\Delta y$ | $\Delta^2 y$ | $\Delta^3 y$ |
| :--- | :--- | :--- | :--- | :--- |
| 300 | **1.005** | | | |
| | | $1.008 - 1.005 = \mathbf{0.003}$ | | |
| 320 | 1.008 | | $0.005 - 0.003 = \mathbf{0.002}$ | |
| | | $1.013 - 1.008 = 0.005$ | | $0.002 - 0.002 = \mathbf{0}$ |
| 340 | 1.013 | | $0.007 - 0.005 = 0.002$ | |
| | | $1.020 - 1.013 = 0.007$ | | |
| 360 | 1.020 | | | |

#### Calculation
**Formula:**
$$ P(x) = y_0 + u \Delta y_0 + \frac{u(u-1)}{2!} \Delta^2 y_0 + \frac{u(u-1)(u-2)}{3!} \Delta^3 y_0 + \dots $$
Where $u = \frac{x - x_0}{h}$ and $h$ is the interval.

**Parameters:**
*   $x = 305$
*   $x_0 = 300$
*   $h = 20$
*   $y_0 = 1.005$
*   $\Delta y_0 = 0.003$
*   $\Delta^2 y_0 = 0.002$
*   $\Delta^3 y_0 = 0$

**Calculate $u$:**
$$ u = \frac{305 - 300}{20} = \frac{5}{20} = 0.25 $$

**Substitute:**
$$ P(305) = 1.005 + (0.25)(0.003) + \frac{0.25(0.25 - 1)}{2}(0.002) $$
$$ P(305) = 1.005 + 0.00075 + \frac{0.25(-0.75)}{2}(0.002) $$
$$ P(305) = 1.005 + 0.00075 + \frac{-0.1875}{2}(0.002) $$
$$ P(305) = 1.005 + 0.00075 + (-0.09375)(0.002) $$
$$ P(305) = 1.005 + 0.00075 - 0.0001875 $$
$$ P(305) = 1.0055625 \text{ kJ/kg\cdot K} $$

---

### Case 2: Newton’s Backward Difference Formula
**Field:** Economics (Population Growth)  
**Scenario:** An economist estimates the population of a city for the year 2008. Census data is available every 10 years from 1980 to 2010.  
**Engineering Rationale:** Since the target year (2008) is close to the end of the table ($x_n = 2010$), Newton's Backward Difference formula is used to ensure stability and accuracy by extrapolating "backwards" from the most recent data point.

#### Data Table
| Year ($x$) | Population (Millions) ($y$) |
| :--- | :--- |
| $x_0 = 1980$ | $y_0 = 10$ |
| $x_1 = 1990$ | $y_1 = 12$ |
| $x_2 = 2000$ | $y_2 = 15$ |
| $x_3 = 2010$ | $y_3 = 20$ |

#### Backward Difference Table
| $x$ | $y$ | $\nabla y$ | $\nabla^2 y$ | $\nabla^3 y$ |
| :--- | :--- | :--- | :--- | :--- |
| 1980 | 10 | | | |
| | | 2 | | |
| 1990 | 12 | | 1 | |
| | | 3 | | **1** |
| 2000 | 15 | | **2** | |
| | | **5** | | |
| 2010 | **20** | | | |

#### Calculation
**Formula:**
$$ P(x) = y_n + u \nabla y_n + \frac{u(u+1)}{2!} \nabla^2 y_n + \frac{u(u+1)(u+2)}{3!} \nabla^3 y_n + \dots $$
Where $u = \frac{x - x_n}{h}$.

**Parameters:**
*   $x = 2008$
*   $x_n = 2010$
*   $h = 10$
*   $y_n = 20, \nabla y_n = 5, \nabla^2 y_n = 2, \nabla^3 y_n = 1$

**Calculate $u$:**
$$ u = \frac{2008 - 2010}{10} = \frac{-2}{10} = -0.2 $$

**Substitute:**
$$ P(2008) = 20 + (-0.2)(5) + \frac{-0.2(-0.2 + 1)}{2}(2) + \frac{-0.2(-0.2 + 1)(-0.2 + 2)}{6}(1) $$
$$ P(2008) = 20 - 1.0 + \frac{-0.2(0.8)}{2}(2) + \frac{-0.2(0.8)(1.8)}{6}(1) $$
$$ P(2008) = 20 - 1.0 - 0.16 - 0.048 $$
$$ P(2008) = 18.792 \text{ Million} $$

---

### Case 3: Newton’s Divided Difference Formula
**Field:** Physics (Experimental Kinematics)  
**Scenario:** A physicist measures the velocity of a particle at unequal time intervals. The goal is to find the velocity at $t = 2.5$ seconds.  
**Engineering Rationale:** The unequal spacing of the time intervals ($t=0, 1, 3, 4$) precludes the use of standard difference formulas. Newton's Divided Difference method provides a systematic approach for handling non-uniform datasets while allowing for easy addition of more data points later.

#### Data Table
| Time ($t$) [s] | Velocity ($v$) [m/s] |
| :--- | :--- |
| $x_0 = 0$ | $y_0 = 0$ |
| $x_1 = 1$ | $y_1 = 10$ |
| $x_2 = 3$ | $y_2 = 22$ |
| $x_3 = 4$ | $y_3 = 28$ |

#### Divided Difference Table
| $x$ | $y$ | $1^{st}$ DD | $2^{nd}$ DD | $3^{rd}$ DD |
| :--- | :--- | :--- | :--- | :--- |
| **0** | **0** | | | |
| | | $\frac{10-0}{1-0} = \mathbf{10}$ | | |
| 1 | 10 | | $\frac{6-10}{3-0} = -\mathbf{1.333}$ | |
| | | $\frac{22-10}{3-1} = 6$ | | $\frac{-2 - (-1.333)}{4-0} = \mathbf{0.166}$ |
| 3 | 22 | | $\frac{6-6}{4-1} = 0$ | |
| | | $\frac{28-22}{4-3} = 6$ | | |
| 4 | 28 | | | |

#### Calculation
**Formula:**
$$ P(x) = b_0 + b_1(x-x_0) + b_2(x-x_0)(x-x_1) + b_3(x-x_0)(x-x_1)(x-x_2) $$

**Parameters:**
*   $x = 2.5$
*   $b_0=0, b_1=10, b_2=-1.333, b_3=0.166$

**Substitute:**
$$ P(2.5) = 0 + 10(2.5 - 0) + (-1.333)(2.5 - 0)(2.5 - 1) + (0.166)(2.5 - 0)(2.5 - 1)(2.5 - 3) $$
$$ P(2.5) = 25 - 4.998 - 0.311 = 19.69 \text{ m/s} $$ (Using precise fractions: $19.375$ m/s)

---

### Case 4: Lagrange Interpolation Method
**Field:** Robotics (Trajectory Planning)  
**Scenario:** A robot arm needs to pass through specific coordinates. We calculate the $y$-position for $x = 4$.  
**Engineering Rationale:** Lagrange interpolation is chosen for its mathematical elegance and directness. In real-time robotics applications, where a fixed set of waypoints is defined, the Lagrange basis functions provide a clear geometric interpretation of each point's contribution to the final path.

#### Data Table
| $x$ | $y$ |
| :--- | :--- |
| 1 | 3 |
| 2 | 5 |
| 5 | 12 |
| 7 | 8 |

#### Calculation
**Target $x = 4$.**
1.  **$L_0(4)$:** $\frac{(4-2)(4-5)(4-7)}{(1-2)(1-5)(1-7)} = \frac{6}{-24} = -0.25$
2.  **$L_1(4)$:** $\frac{(4-1)(4-5)(4-7)}{(2-1)(2-5)(2-7)} = \frac{9}{15} = 0.6$
3.  **$L_2(4)$:** $\frac{(4-1)(4-2)(4-7)}{(5-1)(5-2)(5-7)} = \frac{-18}{-24} = 0.75$
4.  **$L_3(4)$:** $\frac{(4-1)(4-2)(4-5)}{(7-1)(7-2)(7-5)} = \frac{-6}{60} = -0.1$

**Sum:**
$P(4) = 3(-0.25) + 5(0.6) + 12(0.75) + 8(-0.1)$
$P(4) = -0.75 + 3.0 + 9.0 - 0.8 = 10.45$

---

## 3. Comparative Analysis

| Feature | Newton's (F/B) | Newton's Divided Diff. | Lagrange Interpolation |
| :--- | :--- | :--- | :--- |
| **Data Spacing** | Must be Equal | Any (Unequal preferred) | Any |
| **Ease of Adding Data** | Easy (Adds rows to table) | Easy (Adds rows to table) | Hard (Recalculate all basis) |
| **Computational Cost** | Low | Medium | High (for large datasets) |
| **Numerical Stability** | High (near table edges) | High | Variable |

---

## 4. Conclusion
Polynomial interpolation remains a cornerstone of numerical computation. While simple methods like Lagrange are excellent for small, static datasets in robotics, Newton’s difference formulas provide the efficiency and scalability required for dynamic engineering systems. Understanding the data's geometry (equal vs. unequal spacing) and the relative position of the target point is critical in selecting the optimal interpolation strategy.

---

## 5. References
1.  Chapra, S. C., & Canale, R. P. (2015). *Numerical Methods for Engineers*. McGraw-Hill Education.
2.  Burden, R. L., & Faires, J. D. (2010). *Numerical Analysis*. Cengage Learning.
3.  Lecture Notes: Numerical Analysis (MATH-232), SEECS, NUST.
