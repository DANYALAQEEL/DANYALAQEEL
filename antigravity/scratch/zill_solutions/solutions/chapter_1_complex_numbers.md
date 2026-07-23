# Dennis G. Zill — Complex Analysis with Applications
## Complete Solutions Manual — Chapter 1: Complex Numbers and the Complex Plane

---

### Table of Contents
1. [Section 1.1: Complex Numbers and Their Properties](#section-1.1)
2. [Section 1.2: Vector Interpretation and Geometric Representation](#section-1.2)
3. [Section 1.3: Polar Form of Complex Numbers](#section-1.3)
4. [Section 1.4: Powers and Roots](#section-1.4)
5. [Section 1.5: Sets of Points in the Complex Plane](#section-1.5)
6. [Section 1.6: Applications](#section-1.6)
7. [Chapter 1 Review Quiz](#chapter-1-review)

---


<a name="section-1.1"></a>

### Problems 1 – 20 · Complete Solutions

---

> **Key Facts used throughout this section**
>
> The imaginary unit satisfies \( i^2 = -1 \), giving a four-cycle:
>
> | Exponent mod 4 | Value |
> |:-:|:-:|
> | 0 | \( 1 \) |
> | 1 | \( i \) |
> | 2 | \( -1 \) |
> | 3 | \( -i \) |
>
> For any integer \( n \): compute \( n \bmod 4 \) and read the value from the table.
>
> **Conjugate division:** to write \( \dfrac{a+bi}{c+di} \) in standard form, multiply numerator and denominator by the **complex conjugate** \( c - di \):
> \[
>   \frac{a+bi}{c+di} = \frac{(a+bi)(c-di)}{c^2+d^2}.
> \]

---

## Problem 1

**Evaluate each power of \( i \).**

\[
\text{(a) } i^{8} \qquad \text{(b) } i^{11} \qquad \text{(c) } i^{42} \qquad \text{(d) } i^{105}
\]

### Solution

For each part, divide the exponent by 4 and use the remainder to read off the value.

**(a) \( i^{8} \)**

\[
8 = 4 \times 2 + 0 \implies 8 \bmod 4 = 0
\]
\[
\boxed{i^{8} = 1}
\]

**(b) \( i^{11} \)**

\[
11 = 4 \times 2 + 3 \implies 11 \bmod 4 = 3
\]
\[
\boxed{i^{11} = -i}
\]

**(c) \( i^{42} \)**

\[
42 = 4 \times 10 + 2 \implies 42 \bmod 4 = 2
\]
\[
\boxed{i^{42} = -1}
\]

**(d) \( i^{105} \)**

\[
105 = 4 \times 26 + 1 \implies 105 \bmod 4 = 1
\]
\[
\boxed{i^{105} = i}
\]

---

## Problem 2

**Write each expression in \( a + ib \) form.**

### Part (a): \( 2i^{3} - 3i^{2} + 5i \)

**Step 1.** Replace each power using the cycle table.
\[
i^{2} = -1, \qquad i^{3} = -i
\]

**Step 2.** Substitute.
\[
2(-i) - 3(-1) + 5i = -2i + 3 + 5i
\]

**Step 3.** Collect real and imaginary parts.
\[
\boxed{2i^{3} - 3i^{2} + 5i = 3 + 3i}
\]

---

### Part (b): \( 3i^{5} - i^{4} + 7i^{3} - 10i^{2} - 9 \)

**Step 1.** Evaluate each power.
\[
i^{5} = i, \quad i^{4} = 1, \quad i^{3} = -i, \quad i^{2} = -1
\]

**Step 2.** Substitute.
\[
3(i) - (1) + 7(-i) - 10(-1) - 9 = 3i - 1 - 7i + 10 - 9
\]

**Step 3.** Collect real and imaginary parts.
\[
\text{Real: } -1 + 10 - 9 = 0 \qquad \text{Imaginary: } 3 - 7 = -4
\]
\[
\boxed{3i^{5} - i^{4} + 7i^{3} - 10i^{2} - 9 = -4i}
\]

---

### Part (c): \( \dfrac{5}{i} + \dfrac{2}{i^{3}} - \dfrac{20}{i^{18}} \)

**Step 1.** Simplify each reciprocal by multiplying by a suitable power of \( i \).

- \( \dfrac{1}{i} = \dfrac{i}{i^2} = \dfrac{i}{-1} = -i \), so \( \dfrac{5}{i} = -5i \).

- \( i^{3} = -i \), so \( \dfrac{1}{i^{3}} = \dfrac{1}{-i} = \dfrac{i}{-i^{2}} = \dfrac{i}{1} = i \), giving \( \dfrac{2}{i^{3}} = 2i \).

- \( 18 \bmod 4 = 2 \), so \( i^{18} = -1 \), giving \( \dfrac{20}{i^{18}} = \dfrac{20}{-1} = -20 \).

**Step 2.** Combine.
\[
-5i + 2i - (-20) = 20 + (-5+2)i = 20 - 3i
\]
\[
\boxed{\dfrac{5}{i} + \dfrac{2}{i^{3}} - \dfrac{20}{i^{18}} = 20 - 3i}
\]

---

### Part (d): \( 2i^{6} + \left(\dfrac{2}{-i}\right)^{3} + 5i - 5 - 12i \)

**Step 1.** Simplify \( \dfrac{2}{-i} \).

Multiply numerator and denominator by \( i \):
\[
\frac{2}{-i} \cdot \frac{i}{i} = \frac{2i}{-i^{2}} = \frac{2i}{-(-1)} = \frac{2i}{1} = 2i
\]

**Step 2.** Raise to the third power.
\[
(2i)^{3} = 8i^{3} = 8(-i) = -8i
\]

**Step 3.** Evaluate \( 2i^{6} \).
\[
6 \bmod 4 = 2 \implies i^{6} = -1 \implies 2i^{6} = -2
\]

**Step 4.** Assemble all terms.
\[
-2 + (-8i) + 5i - 5 - 12i
\]
\[
\text{Real: } -2 - 5 = -7 \qquad \text{Imaginary: } -8 + 5 - 12 = -15
\]
\[
\boxed{2i^{6} + \left(\tfrac{2}{-i}\right)^{3} + 5i - 5 - 12i = -7 - 15i}
\]

---

## Problem 3

**Write \( (5 - 9i) + (2 - 4i) \) in standard form.**

Add real parts and imaginary parts separately:
\[
(5 - 9i) + (2 - 4i) = (5 + 2) + (-9 - 4)i
\]
\[
\boxed{= 7 - 13i}
\]

---

## Problem 4

**Write \( 3(4 - i) - 3(5 + 2i) \) in standard form.**

**Step 1.** Distribute.
\[
3(4 - i) - 3(5 + 2i) = 12 - 3i - 15 - 6i
\]

**Step 2.** Collect terms.
\[
(12 - 15) + (-3 - 6)i = -3 - 9i
\]
\[
\boxed{= -3 - 9i}
\]

---

## Problem 5

**Write \( i(5 + 7i) \) in standard form.**

Distribute \( i \):
\[
i(5 + 7i) = 5i + 7i^{2} = 5i + 7(-1) = -7 + 5i
\]
\[
\boxed{= -7 + 5i}
\]

---

## Problem 6

**Write \( i(4 - i) + 4i(1 + 2i) \) in standard form.**

**Step 1.** Expand each product.
\[
i(4 - i) = 4i - i^{2} = 4i - (-1) = 1 + 4i
\]
\[
4i(1 + 2i) = 4i + 8i^{2} = 4i + 8(-1) = -8 + 4i
\]

**Step 2.** Add.
\[
(1 + 4i) + (-8 + 4i) = (1 - 8) + (4 + 4)i = -7 + 8i
\]
\[
\boxed{= -7 + 8i}
\]

---

## Problem 7

**Write \( (2 - 3i)(4 + i) \) in standard form.**

Use FOIL:
\[
(2 - 3i)(4 + i) = 2 \cdot 4 + 2 \cdot i + (-3i) \cdot 4 + (-3i) \cdot i
\]
\[
= 8 + 2i - 12i - 3i^{2} = 8 + 2i - 12i - 3(-1)
\]
\[
= (8 + 3) + (2 - 12)i = 11 - 10i
\]
\[
\boxed{= 11 - 10i}
\]

---

## Problem 8

**Write \( \left(\dfrac{1}{2} - \dfrac{1}{4}i\right)\!\left(\dfrac{2}{3} + \dfrac{5}{3}i\right) \) in standard form.**

Expand using FOIL:
\[
\frac{1}{2} \cdot \frac{2}{3}
+ \frac{1}{2} \cdot \frac{5}{3}i
- \frac{1}{4}i \cdot \frac{2}{3}
- \frac{1}{4}i \cdot \frac{5}{3}i
\]
\[
= \frac{1}{3} + \frac{5}{6}i - \frac{1}{6}i - \frac{5}{12}i^{2}
\]

Replace \( i^{2} = -1 \):
\[
= \frac{1}{3} + \frac{5}{6}i - \frac{1}{6}i + \frac{5}{12}
\]

Collect real and imaginary parts (using the common denominator 12 for the real part):
\[
\text{Real: } \frac{4}{12} + \frac{5}{12} = \frac{9}{12} = \frac{3}{4}
\]
\[
\text{Imaginary: } \frac{5}{6} - \frac{1}{6} = \frac{4}{6} = \frac{2}{3}
\]
\[
\boxed{= \frac{3}{4} + \frac{2}{3}i}
\]

---

## Problem 9

**Write \( \dfrac{1 + 3i}{2 - i} \) in standard form.**

Multiply numerator and denominator by the conjugate of the denominator, \( 2 + i \):
\[
\frac{1 + 3i}{2 - i} \cdot \frac{2 + i}{2 + i}
= \frac{(1 + 3i)(2 + i)}{(2)^{2} + (1)^{2}}
\]

Expand the numerator:
\[
(1 + 3i)(2 + i) = 2 + i + 6i + 3i^{2} = 2 + 7i + 3(-1) = -1 + 7i
\]

The denominator is \( 4 + 1 = 5 \):
\[
\frac{-1 + 7i}{5}
\]
\[
\boxed{= -\frac{1}{5} + \frac{7}{5}i}
\]

---

## Problem 10

**Write \( \dfrac{i}{1 + i} \) in standard form.**

Multiply by the conjugate \( 1 - i \):
\[
\frac{i}{1 + i} \cdot \frac{1 - i}{1 - i} = \frac{i(1 - i)}{1^{2} + 1^{2}} = \frac{i - i^{2}}{2}
\]

Since \( i^{2} = -1 \):
\[
\frac{i - (-1)}{2} = \frac{1 + i}{2}
\]
\[
\boxed{= \frac{1}{2} + \frac{1}{2}i}
\]

---

## Problem 11

**Write \( \dfrac{2 - 4i}{3 + 5i} \) in standard form.**

Multiply by the conjugate \( 3 - 5i \):
\[
\frac{2 - 4i}{3 + 5i} \cdot \frac{3 - 5i}{3 - 5i}
= \frac{(2 - 4i)(3 - 5i)}{3^{2} + 5^{2}}
\]

Expand the numerator:
\[
(2 - 4i)(3 - 5i) = 6 - 10i - 12i + 20i^{2} = 6 - 22i + 20(-1) = -14 - 22i
\]

The denominator is \( 9 + 25 = 34 \):
\[
\frac{-14 - 22i}{34} = -\frac{14}{34} - \frac{22}{34}i
\]
\[
\boxed{= -\frac{7}{17} - \frac{11}{17}i}
\]

---

## Problem 12

**Write \( \dfrac{10 - 5i}{6 + 2i} \) in standard form.**

Multiply by the conjugate \( 6 - 2i \):
\[
\frac{10 - 5i}{6 + 2i} \cdot \frac{6 - 2i}{6 - 2i}
= \frac{(10 - 5i)(6 - 2i)}{6^{2} + 2^{2}}
\]

Expand the numerator:
\[
(10 - 5i)(6 - 2i) = 60 - 20i - 30i + 10i^{2} = 60 - 50i + 10(-1) = 50 - 50i
\]

The denominator is \( 36 + 4 = 40 \):
\[
\frac{50 - 50i}{40} = \frac{50}{40} - \frac{50}{40}i
\]
\[
\boxed{= \frac{5}{4} - \frac{5}{4}i}
\]

---

## Problem 13

**Write \( \dfrac{(3 - i)(2 + 3i)}{1 + i} \) in standard form.**

**Step 1.** Multiply out the numerator.
\[
(3 - i)(2 + 3i) = 6 + 9i - 2i - 3i^{2} = 6 + 7i - 3(-1) = 9 + 7i
\]

**Step 2.** Divide by \( 1 + i \); multiply by conjugate \( 1 - i \).
\[
\frac{9 + 7i}{1 + i} \cdot \frac{1 - i}{1 - i}
= \frac{(9 + 7i)(1 - i)}{1^{2} + 1^{2}}
\]

Expand the numerator:
\[
(9 + 7i)(1 - i) = 9 - 9i + 7i - 7i^{2} = 9 - 2i - 7(-1) = 16 - 2i
\]

The denominator is 2:
\[
\frac{16 - 2i}{2} = 8 - i
\]
\[
\boxed{= 8 - i}
\]

---

## Problem 14

**Write \( \dfrac{(1 + i)(1 - 2i)}{(2 + i)(4 - 3i)} \) in standard form.**

**Step 1.** Simplify the numerator.
\[
(1 + i)(1 - 2i) = 1 - 2i + i - 2i^{2} = 1 - i - 2(-1) = 3 - i
\]

**Step 2.** Simplify the denominator.
\[
(2 + i)(4 - 3i) = 8 - 6i + 4i - 3i^{2} = 8 - 2i - 3(-1) = 11 - 2i
\]

**Step 3.** Divide; multiply by conjugate \( 11 + 2i \).
\[
\frac{3 - i}{11 - 2i} \cdot \frac{11 + 2i}{11 + 2i}
= \frac{(3 - i)(11 + 2i)}{11^{2} + 2^{2}}
\]

Expand the numerator:
\[
(3 - i)(11 + 2i) = 33 + 6i - 11i - 2i^{2} = 33 - 5i - 2(-1) = 35 - 5i
\]

The denominator is \( 121 + 4 = 125 \):
\[
\frac{35 - 5i}{125} = \frac{35}{125} - \frac{5}{125}i
\]
\[
\boxed{= \frac{7}{25} - \frac{1}{25}i}
\]

---

## Problem 15

**Write \( \dfrac{(5 - 4i) - (3 + 7i)}{(4 + 2i) + (2 - 3i)} \) in standard form.**

**Step 1.** Simplify the numerator and denominator separately.
\[
\text{Numerator: } (5 - 4i) - (3 + 7i) = 2 - 11i
\]
\[
\text{Denominator: } (4 + 2i) + (2 - 3i) = 6 - i
\]

**Step 2.** Divide; multiply by conjugate \( 6 + i \).
\[
\frac{2 - 11i}{6 - i} \cdot \frac{6 + i}{6 + i}
= \frac{(2 - 11i)(6 + i)}{6^{2} + 1^{2}}
\]

Expand the numerator:
\[
(2 - 11i)(6 + i) = 12 + 2i - 66i - 11i^{2} = 12 - 64i - 11(-1) = 23 - 64i
\]

The denominator is \( 36 + 1 = 37 \):
\[
\frac{23 - 64i}{37}
\]
\[
\boxed{= \frac{23}{37} - \frac{64}{37}i}
\]

---

## Problem 16

**Write \( \dfrac{(4 + 5i) + 2i^{3}}{(2 + i)^{2}} \) in standard form.**

**Step 1.** Simplify the numerator. Since \( i^{3} = -i \):
\[
(4 + 5i) + 2(-i) = 4 + 5i - 2i = 4 + 3i
\]

**Step 2.** Expand the denominator.
\[
(2 + i)^{2} = 4 + 4i + i^{2} = 4 + 4i + (-1) = 3 + 4i
\]

**Step 3.** Divide; multiply by conjugate \( 3 - 4i \).
\[
\frac{4 + 3i}{3 + 4i} \cdot \frac{3 - 4i}{3 - 4i}
= \frac{(4 + 3i)(3 - 4i)}{3^{2} + 4^{2}}
\]

Expand the numerator:
\[
(4 + 3i)(3 - 4i) = 12 - 16i + 9i - 12i^{2} = 12 - 7i - 12(-1) = 24 - 7i
\]

The denominator is \( 9 + 16 = 25 \):
\[
\frac{24 - 7i}{25}
\]
\[
\boxed{= \frac{24}{25} - \frac{7}{25}i}
\]

---

## Problem 17

**Write \( i(1 - i)(2 - i)(2 + 6i) \) in standard form.**

Multiply left-to-right, grouping adjacent pairs.

**Step 1.** \( (1 - i)(2 - i) \)
\[
= 2 - i - 2i + i^{2} = 2 - 3i + (-1) = 1 - 3i
\]

**Step 2.** \( (1 - 3i)(2 + 6i) \)
\[
= 2 + 6i - 6i - 18i^{2} = 2 + 0 \cdot i - 18(-1) = 2 + 18 = 20
\]

Note: the imaginary parts cancel exactly.

**Step 3.** Multiply by \( i \).
\[
i \cdot 20 = 20i
\]
\[
\boxed{= 20i}
\]

---

## Problem 18

**Write \( (1 + i)^{2}(1 - i)^{3} \) in standard form.**

**Step 1.** Compute \( (1 + i)^{2} \).
\[
(1 + i)^{2} = 1 + 2i + i^{2} = 1 + 2i - 1 = 2i
\]

**Step 2.** Compute \( (1 - i)^{3} \) by first squaring.
\[
(1 - i)^{2} = 1 - 2i + i^{2} = 1 - 2i - 1 = -2i
\]
\[
(1 - i)^{3} = (1 - i)^{2} \cdot (1 - i) = (-2i)(1 - i)
= -2i + 2i^{2} = -2i + 2(-1) = -2 - 2i
\]

**Step 3.** Multiply the two results.
\[
(2i)(-2 - 2i) = -4i - 4i^{2} = -4i - 4(-1) = 4 - 4i
\]
\[
\boxed{= 4 - 4i}
\]

---

## Problem 19

**Write \( (3 + 6i) + (4 - i)(3 + 5i) + \dfrac{1}{2 - i} \) in standard form.**

**Step 1.** Expand the product.
\[
(4 - i)(3 + 5i) = 12 + 20i - 3i - 5i^{2} = 12 + 17i - 5(-1) = 17 + 17i
\]

**Step 2.** Rationalize the fraction; multiply by conjugate \( 2 + i \).
\[
\frac{1}{2 - i} \cdot \frac{2 + i}{2 + i} = \frac{2 + i}{2^{2} + 1^{2}} = \frac{2 + i}{5} = \frac{2}{5} + \frac{1}{5}i
\]

**Step 3.** Add all three parts.
\[
(3 + 6i) + (17 + 17i) + \left(\frac{2}{5} + \frac{1}{5}i\right)
\]
\[
\text{Real: } 3 + 17 + \frac{2}{5} = 20 + \frac{2}{5} = \frac{102}{5}
\]
\[
\text{Imaginary: } 6 + 17 + \frac{1}{5} = 23 + \frac{1}{5} = \frac{116}{5}
\]
\[
\boxed{= \frac{102}{5} + \frac{116}{5}i}
\]

---

## Problem 20

**Write \( (2 + 3i)\!\left(\dfrac{2 - i}{1 + 2i}\right)^{2} \) in standard form.**

**Step 1.** Simplify the inner fraction \( \dfrac{2 - i}{1 + 2i} \); multiply by conjugate \( 1 - 2i \).
\[
\frac{2 - i}{1 + 2i} \cdot \frac{1 - 2i}{1 - 2i}
= \frac{(2 - i)(1 - 2i)}{1^{2} + 2^{2}}
\]

Expand the numerator:
\[
(2 - i)(1 - 2i) = 2 - 4i - i + 2i^{2} = 2 - 5i + 2(-1) = -5i
\]

The denominator is \( 1 + 4 = 5 \), so:
\[
\frac{-5i}{5} = -i
\]

**Step 2.** Square the result.
\[
(-i)^{2} = i^{2} = -1
\]

**Step 3.** Multiply by \( 2 + 3i \).
\[
(2 + 3i)(-1) = -2 - 3i
\]
\[
\boxed{= -2 - 3i}
\]

---

## Problem 21

**Use the Binomial Theorem to write \( (2 + 3i)^{2} \) in \( a + ib \) form.**

Apply \( (a + b)^{2} = a^{2} + 2ab + b^{2} \) with \( a = 2 \), \( b = 3i \):

**Step 1.** Expand.
\[
(2 + 3i)^{2} = 2^{2} + 2(2)(3i) + (3i)^{2} = 4 + 12i + 9i^{2}
\]

**Step 2.** Replace \( i^{2} = -1 \).
\[
= 4 + 12i + 9(-1) = (4 - 9) + 12i = -5 + 12i
\]
\[
\boxed{(2 + 3i)^{2} = -5 + 12i}
\]

---

## Problem 22

**Use the Binomial Theorem to write \( \left(1 - \tfrac{1}{2}i\right)^{3} \) in \( a + ib \) form.**

Apply \( (a + b)^{3} = a^{3} + 3a^{2}b + 3ab^{2} + b^{3} \) with \( a = 1 \), \( b = -\tfrac{1}{2}i \):

**Step 1.** Compute each term.
\[
a^{3} = 1
\]
\[
3a^{2}b = 3(1)^{2}\!\left(-\tfrac{1}{2}i\right) = -\tfrac{3}{2}i
\]
\[
3ab^{2} = 3(1)\!\left(-\tfrac{1}{2}i\right)^{2} = 3 \cdot \tfrac{1}{4}i^{2} = \tfrac{3}{4}(-1) = -\tfrac{3}{4}
\]
\[
b^{3} = \left(-\tfrac{1}{2}i\right)^{3} = -\tfrac{1}{8}i^{3} = -\tfrac{1}{8}(-i) = \tfrac{1}{8}i
\]

**Step 2.** Sum the terms and collect real and imaginary parts.
\[
1 - \tfrac{3}{2}i - \tfrac{3}{4} + \tfrac{1}{8}i
\]
\[
\text{Real: } 1 - \tfrac{3}{4} = \tfrac{1}{4} \qquad \text{Imaginary: } -\tfrac{3}{2} + \tfrac{1}{8} = -\tfrac{12}{8} + \tfrac{1}{8} = -\tfrac{11}{8}
\]
\[
\boxed{\left(1 - \tfrac{1}{2}i\right)^{3} = \tfrac{1}{4} - \tfrac{11}{8}i}
\]

---

## Problem 23

**Use the Binomial Theorem to write \( (-2 + 2i)^{5} \) in \( a + ib \) form.**

Apply the Binomial Theorem with \( a = -2 \), \( b = 2i \), \( n = 5 \):
\[
(-2 + 2i)^{5} = \sum_{k=0}^{5}\binom{5}{k}(-2)^{5-k}(2i)^{k}
\]

**Step 1.** Evaluate each term.
\[
k = 0:\quad \binom{5}{0}(-2)^{5}(2i)^{0} = 1 \cdot (-32) \cdot 1 = -32
\]
\[
k = 1:\quad \binom{5}{1}(-2)^{4}(2i)^{1} = 5 \cdot 16 \cdot 2i = 160i
\]
\[
k = 2:\quad \binom{5}{2}(-2)^{3}(2i)^{2} = 10 \cdot (-8) \cdot 4i^{2} = 10(-8)(-4) = 320
\]
\[
k = 3:\quad \binom{5}{3}(-2)^{2}(2i)^{3} = 10 \cdot 4 \cdot 8i^{3} = 10 \cdot 4 \cdot (-8i) = -320i
\]
\[
k = 4:\quad \binom{5}{4}(-2)^{1}(2i)^{4} = 5 \cdot (-2) \cdot 16i^{4} = 5(-2)(16) = -160
\]
\[
k = 5:\quad \binom{5}{5}(-2)^{0}(2i)^{5} = 1 \cdot 1 \cdot 32i^{5} = 32i
\]

**Step 2.** Collect real and imaginary parts.
\[
\text{Real: } -32 + 320 - 160 = 128 \qquad \text{Imaginary: } 160 - 320 + 32 = -128
\]
\[
\boxed{(-2 + 2i)^{5} = 128 - 128i}
\]

---

## Problem 24

**Use the Binomial Theorem to write \( (1 + i)^{8} \) in \( a + ib \) form.**

Apply \( (1 + i)^{8} = \displaystyle\sum_{k=0}^{8}\binom{8}{k}i^{k} \) (since \( 1^{8-k} = 1 \)):

**Step 1.** Expand all nine terms.
\[
\binom{8}{0}i^{0} + \binom{8}{1}i^{1} + \binom{8}{2}i^{2} + \binom{8}{3}i^{3} + \binom{8}{4}i^{4}
+ \binom{8}{5}i^{5} + \binom{8}{6}i^{6} + \binom{8}{7}i^{7} + \binom{8}{8}i^{8}
\]
\[
= 1 + 8i + 28(-1) + 56(-i) + 70(1) + 56(i) + 28(-1) + 8(-i) + 1(1)
\]

**Step 2.** Collect real and imaginary parts.
\[
\text{Real: } 1 - 28 + 70 - 28 + 1 = 16
\]
\[
\text{Imaginary: } 8 - 56 + 56 - 8 = 0
\]
\[
\boxed{(1 + i)^{8} = 16}
\]

---

## Problem 25

**Find \( \operatorname{Re}(z) \) and \( \operatorname{Im}(z) \) for \( \displaystyle z = \frac{i}{3 - i} \cdot \frac{1}{2 + 3i} \).**

**Step 1.** Combine into a single fraction.
\[
z = \frac{i}{(3 - i)(2 + 3i)}
\]

**Step 2.** Expand the denominator.
\[
(3 - i)(2 + 3i) = 6 + 9i - 2i - 3i^{2} = 6 + 7i - 3(-1) = 9 + 7i
\]

**Step 3.** Rationalize by multiplying by conjugate \( 9 - 7i \).
\[
z = \frac{i}{9 + 7i} \cdot \frac{9 - 7i}{9 - 7i} = \frac{9i - 7i^{2}}{9^{2} + 7^{2}} = \frac{7 + 9i}{130}
\]

**Step 4.** Read off real and imaginary parts.
\[
\boxed{\operatorname{Re}(z) = \frac{7}{130}, \qquad \operatorname{Im}(z) = \frac{9}{130}}
\]

---

## Problem 26

**Find \( \operatorname{Re}(z) \) and \( \operatorname{Im}(z) \) for \( \displaystyle z = \frac{1}{(1 + i)(1 - 2i)(1 + 3i)} \).**

**Step 1.** Multiply the first two denominator factors.
\[
(1 + i)(1 - 2i) = 1 - 2i + i - 2i^{2} = 1 - i - 2(-1) = 3 - i
\]

**Step 2.** Multiply the result by the third factor.
\[
(3 - i)(1 + 3i) = 3 + 9i - i - 3i^{2} = 3 + 8i - 3(-1) = 6 + 8i
\]

**Step 3.** Rationalize \( z = \dfrac{1}{6 + 8i} \) by multiplying by conjugate \( 6 - 8i \).
\[
z = \frac{1}{6 + 8i} \cdot \frac{6 - 8i}{6 - 8i} = \frac{6 - 8i}{6^{2} + 8^{2}} = \frac{6 - 8i}{100}
\]

**Step 4.** Read off real and imaginary parts.
\[
\boxed{\operatorname{Re}(z) = \frac{6}{100} = \frac{3}{50}, \qquad \operatorname{Im}(z) = -\frac{8}{100} = -\frac{2}{25}}
\]

---

## Problem 27

**Let \( z = x + iy \). Express \( \operatorname{Re}\!\left(\dfrac{1}{z}\right) \) in terms of \( x \) and \( y \).**

Multiply numerator and denominator by the conjugate \( \bar{z} = x - iy \):
\[
\frac{1}{z} = \frac{1}{x + iy} \cdot \frac{x - iy}{x - iy} = \frac{x - iy}{x^{2} + y^{2}}
\]
\[
\boxed{\operatorname{Re}\!\left(\frac{1}{z}\right) = \frac{x}{x^{2} + y^{2}}}
\]

---

## Problem 28

**Let \( z = x + iy \). Express \( \operatorname{Re}(z^{2}) \) in terms of \( x \) and \( y \).**

Expand \( z^{2} \):
\[
z^{2} = (x + iy)^{2} = x^{2} + 2xyi + (iy)^{2} = x^{2} + 2xyi - y^{2} = (x^{2} - y^{2}) + 2xyi
\]
\[
\boxed{\operatorname{Re}(z^{2}) = x^{2} - y^{2}}
\]

---

## Problem 29

**Let \( z = x + iy \). Express \( \operatorname{Im}(2z + 4\bar{z} - 4i) \) in terms of \( x \) and \( y \).**

**Step 1.** Substitute \( z = x + iy \) and \( \bar{z} = x - iy \).
\[
2z = 2x + 2yi, \qquad 4\bar{z} = 4x - 4yi
\]

**Step 2.** Combine all terms.
\[
2z + 4\bar{z} - 4i = (2x + 4x) + (2y - 4y)i - 4i = 6x + (-2y - 4)i
\]
\[
\boxed{\operatorname{Im}(2z + 4\bar{z} - 4i) = -2y - 4}
\]

---

## Problem 30

**Let \( z = x + iy \). Express \( \operatorname{Im}(\bar{z}^{2} + z^{2}) \) in terms of \( x \) and \( y \).**

**Step 1.** Compute \( z^{2} \) and \( \bar{z}^{2} \).
\[
z^{2} = (x + iy)^{2} = x^{2} - y^{2} + 2xyi
\]
\[
\bar{z}^{2} = (x - iy)^{2} = x^{2} - y^{2} - 2xyi
\]

**Step 2.** Add; the imaginary parts cancel.
\[
\bar{z}^{2} + z^{2} = 2(x^{2} - y^{2}) + 0i
\]
\[
\boxed{\operatorname{Im}(\bar{z}^{2} + z^{2}) = 0}
\]

---

## Problem 31

**Let \( z = x + iy \). Express \( \operatorname{Re}(iz) \) in terms of \( \operatorname{Re}(z) \) and \( \operatorname{Im}(z) \).**

Multiply \( z \) by \( i \):
\[
iz = i(x + iy) = xi + i^{2}y = xi - y = -y + xi
\]

The real part is \( -y = -\operatorname{Im}(z) \):
\[
\boxed{\operatorname{Re}(iz) = -\operatorname{Im}(z)}
\]

---

## Problem 32

**Let \( z = x + iy \). Express \( \operatorname{Im}(iz) \) in terms of \( \operatorname{Re}(z) \) and \( \operatorname{Im}(z) \).**

From Problem 31, \( iz = -y + xi \). The imaginary part is \( x = \operatorname{Re}(z) \):
\[
\boxed{\operatorname{Im}(iz) = \operatorname{Re}(z)}
\]

---

## Problem 33

**Let \( z = x + iy \). Express \( \operatorname{Im}((1 + i)z) \) in terms of \( \operatorname{Re}(z) \) and \( \operatorname{Im}(z) \).**

**Step 1.** Expand the product.
\[
(1 + i)z = (1 + i)(x + iy) = x + iy + ix + i^{2}y = x + iy + ix - y
\]

**Step 2.** Collect real and imaginary parts.
\[
= (x - y) + (x + y)i
\]

The imaginary part is \( x + y = \operatorname{Re}(z) + \operatorname{Im}(z) \):
\[
\boxed{\operatorname{Im}((1 + i)z) = \operatorname{Re}(z) + \operatorname{Im}(z)}
\]

---

## Problem 34

**Let \( z = x + iy \). Express \( \operatorname{Re}(z^{2}) \) in terms of \( \operatorname{Re}(z) \) and \( \operatorname{Im}(z) \).**

From Problem 28, \( \operatorname{Re}(z^{2}) = x^{2} - y^{2} \). Writing \( x = \operatorname{Re}(z) \) and \( y = \operatorname{Im}(z) \):
\[
\boxed{\operatorname{Re}(z^{2}) = [\operatorname{Re}(z)]^{2} - [\operatorname{Im}(z)]^{2}}
\]

---

## Problem 35

**Show that \( z_1 = -\dfrac{\sqrt{2}}{2} + \dfrac{\sqrt{2}}{2}i \) satisfies \( z^2 + i = 0 \), and find a second solution \( z_2 \).**

**Step 1. Verify \( z_1 \).**

Expand \( z_1^2 \) using \( (a + bi)^2 = a^2 - b^2 + 2abi \) with \( a = -\dfrac{\sqrt{2}}{2} \), \( b = \dfrac{\sqrt{2}}{2} \):
\[
z_1^2 = \left(-\frac{\sqrt{2}}{2}\right)^{\!2} - \left(\frac{\sqrt{2}}{2}\right)^{\!2}
+ 2\!\left(-\frac{\sqrt{2}}{2}\right)\!\left(\frac{\sqrt{2}}{2}\right)i
= \frac{1}{2} - \frac{1}{2} + 2\!\left(-\frac{1}{2}\right)i = -i
\]
\[
z_1^2 + i = -i + i = 0 \checkmark
\]

**Step 2. Find \( z_2 \).**

The equation \( z^2 = -i \) has exactly two solutions, which are negatives of each other.
Since \( z_1 \) is one solution, the other is
\[
z_2 = -z_1 = \frac{\sqrt{2}}{2} - \frac{\sqrt{2}}{2}i.
\]

**Step 3. Verify \( z_2 \).**
\[
z_2^2 = (-z_1)^2 = z_1^2 = -i \implies z_2^2 + i = 0 \checkmark
\]
\[
\boxed{z_2 = \frac{\sqrt{2}}{2} - \frac{\sqrt{2}}{2}i}
\]

---

## Problem 36

**Show that \( z_1 = 1+i \) and \( z_2 = -1+i \) satisfy \( z^4 = -4 \), and find two additional solutions \( z_3 \) and \( z_4 \).**

**Step 1. Verify \( z_1 = 1 + i \).**
\[
(1+i)^2 = 1 + 2i + i^2 = 2i, \qquad (2i)^2 = 4i^2 = -4 \checkmark
\]

**Step 2. Verify \( z_2 = -1 + i \).**
\[
(-1+i)^2 = 1 - 2i + i^2 = -2i, \qquad (-2i)^2 = 4i^2 = -4 \checkmark
\]

**Step 3. Find \( z_3 \) and \( z_4 \).**

If \( z^4 = -4 \), then \( (-z)^4 = z^4 = -4 \) as well, so negating any solution yields another.
\[
z_3 = -z_1 = -1 - i, \qquad z_4 = -z_2 = 1 - i.
\]

**Step 4. Verify \( z_3 \) and \( z_4 \).**
\[
(-1-i)^2 = 1 + 2i + i^2 = 2i, \qquad (2i)^2 = -4 \checkmark
\]
\[
(1-i)^2 = 1 - 2i + i^2 = -2i, \qquad (-2i)^2 = -4 \checkmark
\]
\[
\boxed{z_3 = -1 - i, \qquad z_4 = 1 - i}
\]

---

## Problem 37

**Solve for \( z = a + ib \):** \( 2z = i(2 + 9i) \)

**Step 1.** Expand the right-hand side.
\[
i(2 + 9i) = 2i + 9i^2 = 2i - 9 = -9 + 2i
\]

**Step 2.** Divide by 2.
\[
z = \frac{-9 + 2i}{2}
\]
\[
\boxed{z = -\frac{9}{2} + i}
\]

---

## Problem 38

**Solve for \( z = a + ib \):** \( z - 2\bar{z} + 7 - 6i = 0 \)

**Step 1.** Let \( z = a + bi \), \( \bar{z} = a - bi \). Substitute.
\[
(a + bi) - 2(a - bi) + 7 - 6i = 0 \implies (-a + 7) + (3b - 6)i = 0
\]

**Step 2.** Equate real and imaginary parts to zero.
\[
\text{Real: } -a + 7 = 0 \implies a = 7
\]
\[
\text{Imaginary: } 3b - 6 = 0 \implies b = 2
\]
\[
\boxed{z = 7 + 2i}
\]

---

## Problem 39

**Solve for \( z = a + ib \):** \( z^2 = i \)

**Step 1.** Let \( z = a + bi \) and expand \( z^2 \).
\[
(a + bi)^2 = a^2 - b^2 + 2abi = 0 + i
\]

**Step 2.** Equate real and imaginary parts.
\[
\text{Real: } a^2 - b^2 = 0 \implies b = \pm a
\]
\[
\text{Imaginary: } 2ab = 1
\]

**Step 3.** Solve each case.

*Case \( b = a \):*
\[
2a^2 = 1 \implies a = \pm\frac{\sqrt{2}}{2}
\]

*Case \( b = -a \):*
\[
2a(-a) = -2a^2 = 1 \implies a^2 = -\tfrac{1}{2}
\]
No real solution.
\[
\boxed{z = \frac{\sqrt{2}}{2}(1 + i) \quad \text{or} \quad z = -\frac{\sqrt{2}}{2}(1 + i)}
\]

---

## Problem 40

**Solve for \( z = a + ib \):** \( \bar{z}^2 = 4z \)

**Step 1.** Let \( z = a + bi \), \( \bar{z} = a - bi \). Expand.
\[
(a - bi)^2 = a^2 - b^2 - 2abi = 4a + 4bi
\]

**Step 2.** Equate real and imaginary parts.
\[
\text{Real: } a^2 - b^2 = 4a \tag{I}
\]
\[
\text{Imaginary: } -2ab = 4b \implies b(-2a - 4) = 0 \tag{II}
\]

**Step 3.** Two cases from (II).

*Case 1: \( b = 0 \).* Equation (I) gives \( a^2 = 4a \), so \( a = 0 \) or \( a = 4 \).

*Case 2: \( -2a - 4 = 0 \implies a = -2 \).* Equation (I) gives \( 4 - b^2 = -8 \), so \( b = \pm 2\sqrt{3} \).
\[
\boxed{z = 0, \quad z = 4, \quad z = -2 \pm 2\sqrt{3}\,i}
\]

---

## Problem 41

**Solve for \( z = a + ib \):** \( z + 2\bar{z} = \dfrac{2 - i}{1 + 3i} \)

**Step 1.** Simplify the right-hand side; multiply by conjugate \( 1 - 3i \).
\[
\frac{2 - i}{1 + 3i} \cdot \frac{1 - 3i}{1 - 3i}
= \frac{(2 - i)(1 - 3i)}{1^2 + 3^2}
= \frac{2 - 6i - i + 3i^2}{10}
= \frac{-1 - 7i}{10}
\]

**Step 2.** Let \( z = a + bi \), \( \bar{z} = a - bi \). Substitute.
\[
(a + bi) + 2(a - bi) = 3a - bi = -\frac{1}{10} - \frac{7}{10}i
\]

**Step 3.** Equate real and imaginary parts.
\[
\text{Real: } 3a = -\frac{1}{10} \implies a = -\frac{1}{30}
\]
\[
\text{Imaginary: } -b = -\frac{7}{10} \implies b = \frac{7}{10}
\]
\[
\boxed{z = -\frac{1}{30} + \frac{7}{10}i}
\]

---

## Problem 42

**Solve for \( z = a + ib \):** \( \dfrac{z}{1 + \bar{z}} = 3 + 4i \)

**Step 1.** Let \( z = a + bi \), \( \bar{z} = a - bi \). Cross-multiply.
\[
a + bi = (3 + 4i)\bigl[(1 + a) - bi\bigr]
= \bigl[3(1+a) + 4b\bigr] + \bigl[4(1+a) - 3b\bigr]i
\]

**Step 2.** Equate real and imaginary parts.
\[
\text{Real: } a = 3(1+a) + 4b \implies -2a - 4b = 3 \tag{I}
\]
\[
\text{Imaginary: } b = 4(1+a) - 3b \implies b = a + 1 \tag{II}
\]

**Step 3.** Substitute (II) into (I).
\[
-2a - 4(a + 1) = 3 \implies -6a - 4 = 3 \implies a = -\frac{7}{6}
\]
\[
b = -\frac{7}{6} + 1 = -\frac{1}{6}
\]
\[
\boxed{z = -\frac{7}{6} - \frac{1}{6}i}
\]

---

## Problem 43

**Solve the system for \( z_1 \) and \( z_2 \).**
\[
iz_1 - iz_2 = 2 + 10i \tag{1}
\]
\[
-z_1 + (1 - i)z_2 = 3 - 5i \tag{2}
\]

**Step 1.** Factor (1) and divide by \( i \).
\[
i(z_1 - z_2) = 2 + 10i
\implies z_1 - z_2 = \frac{2 + 10i}{i} = \frac{(2 + 10i)(-i)}{(-i)(i)} = -2i - 10i^2 = 10 - 2i
\]

So \( z_1 = z_2 + (10 - 2i) \). \hfill\textup{(*)}

**Step 2.** Substitute (*) into (2).
\[
-\bigl[z_2 + (10 - 2i)\bigr] + (1 - i)z_2 = 3 - 5i
\]
\[
-iz_2 = 3 - 5i + 10 - 2i = 13 - 7i
\]
\[
z_2 = \frac{13 - 7i}{-i} = \frac{(13 - 7i)(i)}{(-i)(i)} = \frac{13i - 7i^2}{1} = 7 + 13i
\]

**Step 3.** Recover \( z_1 \) from (*).
\[
z_1 = (7 + 13i) + (10 - 2i) = 17 + 11i
\]
\[
\boxed{z_1 = 17 + 11i, \qquad z_2 = 7 + 13i}
\]

---

## Problem 44

**Solve the system for \( z_1 \) and \( z_2 \).**
\[
iz_1 + (1 + i)z_2 = 1 + 2i \tag{1}
\]
\[
(2 - i)z_1 + 2iz_2 = 4i \tag{2}
\]

**Step 1.** Eliminate \( z_1 \). Multiply (1) by \( (2 - i) \) and (2) by \( i \).

\( (2-i) \times \)(1):
\[
i(2-i)\,z_1 + (1+i)(2-i)\,z_2 = (1+2i)(2-i)
\]
\[
\underbrace{(2i - i^2)}_{1+2i}\!z_1 + \underbrace{(2-i+2i-i^2)}_{3+i}\!z_2 = \underbrace{(2+3i+2)}_{4+3i}
\]
\[
(1 + 2i)z_1 + (3 + i)z_2 = 4 + 3i \tag{3}
\]

\( i \times \)(2):
\[
i(2-i)\,z_1 + 2i^2 z_2 = 4i^2
\]
\[
(1 + 2i)z_1 - 2z_2 = -4 \tag{4}
\]

**Step 2.** Subtract (4) from (3) to cancel \( z_1 \).
\[
(3 + i)z_2 - (-2z_2) = (4 + 3i) - (-4)
\]
\[
(5 + i)z_2 = 8 + 3i
\]
\[
z_2 = \frac{8 + 3i}{5 + i} \cdot \frac{5 - i}{5 - i}
= \frac{40 - 8i + 15i - 3i^2}{26}
= \frac{43 + 7i}{26}
\]

**Step 3.** Recover \( z_1 \) from (1).
\[
iz_1 = 1 + 2i - (1 + i)\cdot\frac{43 + 7i}{26}
\]

Expand \( (1+i)(43+7i) = 43 + 7i + 43i + 7i^2 = 36 + 50i \):
\[
iz_1 = \frac{26 + 52i - 36 - 50i}{26} = \frac{-10 + 2i}{26} = \frac{-5 + i}{13}
\]
\[
z_1 = \frac{-5 + i}{13i} = \frac{(-5 + i)(-i)}{13(-i)(i)} = \frac{5i - i^2}{13} = \frac{1 + 5i}{13}
\]
\[
\boxed{z_1 = \frac{1 + 5i}{13}, \qquad z_2 = \frac{43 + 7i}{26}}
\]

---

## Summary Table

| Problem | Expression | Result |
|:-------:|:-----------|:------:|
| 1(a) | \( i^{8} \) | \( 1 \) |
| 1(b) | \( i^{11} \) | \( -i \) |
| 1(c) | \( i^{42} \) | \( -1 \) |
| 1(d) | \( i^{105} \) | \( i \) |
| 2(a) | \( 2i^{3} - 3i^{2} + 5i \) | \( 3 + 3i \) |
| 2(b) | \( 3i^{5} - i^{4} + 7i^{3} - 10i^{2} - 9 \) | \( -4i \) |
| 2(c) | \( 5/i + 2/i^{3} - 20/i^{18} \) | \( 20 - 3i \) |
| 2(d) | \( 2i^{6} + (2/{-i})^{3} + 5i - 5 - 12i \) | \( -7 - 15i \) |
| 3 | \( (5-9i)+(2-4i) \) | \( 7 - 13i \) |
| 4 | \( 3(4-i) - 3(5+2i) \) | \( -3 - 9i \) |
| 5 | \( i(5+7i) \) | \( -7 + 5i \) |
| 6 | \( i(4-i)+4i(1+2i) \) | \( -7 + 8i \) |
| 7 | \( (2-3i)(4+i) \) | \( 11 - 10i \) |
| 8 | \( (\tfrac{1}{2}-\tfrac{1}{4}i)(\tfrac{2}{3}+\tfrac{5}{3}i) \) | \( \tfrac{3}{4} + \tfrac{2}{3}i \) |
| 9 | \( (1+3i)/(2-i) \) | \( -\tfrac{1}{5} + \tfrac{7}{5}i \) |
| 10 | \( i/(1+i) \) | \( \tfrac{1}{2} + \tfrac{1}{2}i \) |
| 11 | \( (2-4i)/(3+5i) \) | \( -\tfrac{7}{17} - \tfrac{11}{17}i \) |
| 12 | \( (10-5i)/(6+2i) \) | \( \tfrac{5}{4} - \tfrac{5}{4}i \) |
| 13 | \( (3-i)(2+3i)/(1+i) \) | \( 8 - i \) |
| 14 | \( (1+i)(1-2i)/[(2+i)(4-3i)] \) | \( \tfrac{7}{25} - \tfrac{1}{25}i \) |
| 15 | \( [(5-4i)-(3+7i)]/[(4+2i)+(2-3i)] \) | \( \tfrac{23}{37} - \tfrac{64}{37}i \) |
| 16 | \( [(4+5i)+2i^{3}]/(2+i)^{2} \) | \( \tfrac{24}{25} - \tfrac{7}{25}i \) |
| 17 | \( i(1-i)(2-i)(2+6i) \) | \( 20i \) |
| 18 | \( (1+i)^{2}(1-i)^{3} \) | \( 4 - 4i \) |
| 19 | \( (3+6i)+(4-i)(3+5i)+1/(2-i) \) | \( \tfrac{102}{5} + \tfrac{116}{5}i \) |
| 20 | \( (2+3i)\bigl[(2-i)/(1+2i)\bigr]^{2} \) | \( -2 - 3i \) |
| 21 | \( (2+3i)^{2} \) | \( -5 + 12i \) |
| 22 | \( (1-\tfrac{1}{2}i)^{3} \) | \( \tfrac{1}{4} - \tfrac{11}{8}i \) |
| 23 | \( (-2+2i)^{5} \) | \( 128 - 128i \) |
| 24 | \( (1+i)^{8} \) | \( 16 \) |
| 25 | \( i/[(3-i)(2+3i)] \) | \( \tfrac{7}{130} + \tfrac{9}{130}i \) |
| 26 | \( 1/[(1+i)(1-2i)(1+3i)] \) | \( \tfrac{3}{50} - \tfrac{2}{25}i \) |
| 27 | \( \operatorname{Re}(1/z) \) | \( x/(x^{2}+y^{2}) \) |
| 28 | \( \operatorname{Re}(z^{2}) \) | \( x^{2}-y^{2} \) |
| 29 | \( \operatorname{Im}(2z+4\bar{z}-4i) \) | \( -2y-4 \) |
| 30 | \( \operatorname{Im}(\bar{z}^{2}+z^{2}) \) | \( 0 \) |
| 31 | \( \operatorname{Re}(iz) \) | \( -\operatorname{Im}(z) \) |
| 32 | \( \operatorname{Im}(iz) \) | \( \operatorname{Re}(z) \) |
| 33 | \( \operatorname{Im}((1+i)z) \) | \( \operatorname{Re}(z)+\operatorname{Im}(z) \) |
| 34 | \( \operatorname{Re}(z^{2}) \) | \( [\operatorname{Re}(z)]^{2}-[\operatorname{Im}(z)]^{2} \) |

---

*End of Section 1.1 Solutions*

---

## Problem 35

**Show that \( z_1 = -
rac{\sqrt{2}}{2} + 
rac{\sqrt{2}}{2}i \) satisfies \( z^2 + i = 0 \). Find the additional solution \( z_2 \).**

### Solution

**Step 1.** We square the given root \( z_1 \):
\[
z_1^2 = \left(-\frac{\sqrt{2}}{2} + \frac{\sqrt{2}}{2}i\right)^2
\]
Applying the algebraic identity \( (A + B)^2 = A^2 + 2AB + B^2 \):
\[
z_1^2 = \left(-\frac{\sqrt{2}}{2}\right)^2 + 2\left(-\frac{\sqrt{2}}{2}\right)\left(\frac{\sqrt{2}}{2}i\right) + \left(\frac{\sqrt{2}}{2}i\right)^2
\]
\[
= \frac{2}{4} - 2 \cdot \frac{2}{4} i + \frac{2}{4} i^2
\]
Since \( i^2 = -1 \):
\[
= \frac{1}{2} - i - \frac{1}{2} = -i
\]

**Step 2.** Substitute \( z_1^2 = -i \) into the original equation:
\[
z_1^2 + i = -i + i = 0
\]
Since the equation evaluates to \( 0 \), \( z_1 \) satisfies the equation.

**Step 3.** Find the second root \( z_2 \). Since the equation is a simple quadratic equation \( z^2 = -i \), its two roots must be opposites (additive inverses of each other):
\[
z_2 = -z_1 = -\left(-\frac{\sqrt{2}}{2} + \frac{\sqrt{2}}{2}i\right) = \frac{\sqrt{2}}{2} - \frac{\sqrt{2}}{2}i
\]

**Verification:**
\[
z_2^2 = \left(\frac{\sqrt{2}}{2} - \frac{\sqrt{2}}{2}i\right)^2 = \frac{1}{2} - i - \frac{1}{2} = -i \implies -i + i = 0.
\]

\[
\boxed{z_2 = \frac{\sqrt{2}}{2} - \frac{\sqrt{2}}{2}i}
\]

---

## Problem 36

**Show that \( z_1 = 1 + i \) and \( z_2 = -1 + i \) satisfy \( z^4 = -4 \). Find two additional solutions \( z_3 \) and \( z_4 \).**

### Solution

**Step 1. Verify \( z_1 = 1 + i \):**
First, compute the square of \( z_1 \):
\[
z_1^2 = (1 + i)^2 = 1 + 2i + i^2 = 1 + 2i - 1 = 2i
\]
Now raise to the 4th power:
\[
z_1^4 = (z_1^2)^2 = (2i)^2 = 4i^2 = -4
\]
Since \( -4 = -4 \), \( z_1 \) satisfies the equation.

**Step 2. Verify \( z_2 = -1 + i \):**
First, compute the square of \( z_2 \):
\[
z_2^2 = (-1 + i)^2 = 1 - 2i + i^2 = 1 - 2i - 1 = -2i
\]
Now raise to the 4th power:
\[
z_2^4 = (z_2^2)^2 = (-2i)^2 = 4i^2 = -4
\]
Since \( -4 = -4 \), \( z_2 \) satisfies the equation.

**Step 3. Find the additional solutions:**
For a polynomial equation with real coefficients (like \( z^4 + 4 = 0 \)), non-real roots must occur in conjugate pairs.
* The conjugate of \( z_1 = 1 + i \) is:
  \[
  z_3 = \bar{z}_1 = 1 - i
  \]
* The conjugate of \( z_2 = -1 + i \) is:
  \[
  z_4 = \bar{z}_2 = -1 - i
  \]

**Verification:**
* For \( z_3 = 1 - i \): \( z_3^2 = -2i \implies z_3^4 = (-2i)^2 = -4 \).
* For \( z_4 = -1 - i \): \( z_4^2 = 2i \implies z_4^4 = (2i)^2 = -4 \).

\[
\boxed{z_3 = 1 - i, \quad z_4 = -1 - i}
\]

---

## Problem 37

**Solve the equation \( 2z = i(2 + 9i) \) for \( z = a + ib \).**

### Solution

**Step 1.** Expand the right-hand side of the equation:
\[
i(2 + 9i) = 2i + 9i^2
\]
Since \( i^2 = -1 \):
\[
= 2i + 9(-1) = -9 + 2i
\]

**Step 2.** Divide both sides by 2 to isolate \( z \):
\[
z = \frac{-9 + 2i}{2} = -\frac{9}{2} + i
\]

\[
\boxed{z = -\frac{9}{2} + i}
\]

---

## Problem 38

**Solve the equation \( z - 2\bar{z} + 7 - 6i = 0 \) for \( z = a + ib \).**

### Solution

**Step 1.** Let \( z = a + ib \), where \( a \) and \( b \) are real numbers. Its complex conjugate is \( \bar{z} = a - ib \).

**Step 2.** Substitute \( z \) and \( \bar{z} \) into the equation:
\[
(a + ib) - 2(a - ib) + 7 - 6i = 0
\]
\[
a + ib - 2a + 2ib + 7 - 6i = 0
\]

**Step 3.** Group the real and imaginary parts:
\[
(a - 2a + 7) + (b + 2b - 6)i = 0
\]
\[
(-a + 7) + (3b - 6)i = 0
\]

**Step 4.** Set the real and imaginary parts equal to zero (since the right side is \( 0 + 0i \)):
1. **Real part equation:**
   \[
   -a + 7 = 0 \implies a = 7
   \]
2. **Imaginary part equation:**
   \[
   3b - 6 = 0 \implies 3b = 6 \implies b = 2
   \]

**Step 5.** Write \( z \) in standard form:
\[
z = a + ib = 7 + 2i
\]

\[
\boxed{z = 7 + 2i}
\]

---

## Problem 39

**Solve the equation \( z^2 = i \) for \( z = a + ib \).**

### Solution

**Step 1.** Let \( z = a + ib \). Then:
\[
z^2 = (a + ib)^2 = a^2 - b^2 + 2abi
\]

**Step 2.** Set \( z^2 \) equal to \( i \) (which is \( 0 + 1i \)):
\[
a^2 - b^2 + 2abi = 0 + i
\]

**Step 3.** Equate the real and imaginary parts:
1. **Real parts:**
   \[
   a^2 - b^2 = 0 \implies a^2 = b^2 \implies a = \pm b
   \]
2. **Imaginary parts:**
   \[
   2ab = 1 \implies ab = \frac{1}{2}
   \]

**Step 4.** Analyze the cases:
Since the product \( ab = 1/2 \) is positive, \( a \) and \( b \) must have the same sign. Thus, we must have \( a = b \) (we discard \( a = -b \) which would yield a negative product).
Substitute \( a = b \) into the imaginary parts equation:
\[
a(a) = \frac{1}{2} \implies a^2 = \frac{1}{2} \implies a = \pm \frac{1}{\sqrt{2}} = \pm \frac{\sqrt{2}}{2}
\]

**Step 5.** Write the two values for \( z \):
* For \( a = \frac{\sqrt{2}}{2} \), we have \( b = \frac{\sqrt{2}}{2} \):
  \[
  z_1 = \frac{\sqrt{2}}{2} + \frac{\sqrt{2}}{2}i
  \]
* For \( a = -\frac{\sqrt{2}}{2} \), we have \( b = -\frac{\sqrt{2}}{2} \):
  \[
  z_2 = -\frac{\sqrt{2}}{2} - \frac{\sqrt{2}}{2}i
  \]

\[
\boxed{z = \pm \left(\frac{\sqrt{2}}{2} + \frac{\sqrt{2}}{2}i\right)}
\]

---

## Problem 40

**Solve the equation \( \bar{z}^2 = 4z \) for \( z = a + ib \).**

### Solution

**Step 1.** Let \( z = a + ib \) so \( \bar{z} = a - ib \).
\[
\bar{z}^2 = a^2 - b^2 - 2abi
\]
\[
4z = 4a + 4bi
\]

**Step 2.** Substitute into the equation and equate real and imaginary parts:
\[
a^2 - b^2 - 2abi = 4a + 4bi
\]
1. **Real parts:**
   \[
   a^2 - b^2 = 4a \qquad \text{(Equation 1)}
   \]
2. **Imaginary parts:**
   \[
   -2ab = 4b \implies 2ab + 4b = 0 \implies 2b(a + 2) = 0 \qquad \text{(Equation 2)}
   \]

**Step 3.** Solve Equation 2:
From \( 2b(a + 2) = 0 \), we have two cases: **Case 1: \( b = 0 \)** or **Case 2: \( a = -2 \)**.

**Step 4. Analyze Case 1: \( b = 0 \)**
Substitute \( b = 0 \) into Equation 1:
\[
a^2 - 0 = 4a \implies a^2 - 4a = 0 \implies a(a - 4) = 0
\]
This yields \( a = 0 \) or \( a = 4 \).
* If \( a = 0 \), then \( z = 0 \).
* If \( a = 4 \), then \( z = 4 \).

**Step 5. Analyze Case 2: \( a = -2 \)**
Substitute \( a = -2 \) into Equation 1:
\[
(-2)^2 - b^2 = 4(-2)
\]
\[
4 - b^2 = -8 \implies b^2 = 12 \implies b = \pm \sqrt{12} = \pm 2\sqrt{3}
\]
This yields two complex solutions:
* \( z = -2 + 2\sqrt{3}i \)
* \( z = -2 - 2\sqrt{3}i \)

**Step 6.** Collect all solutions:
The four solutions to the equation are:
\[
\boxed{z = 0, \quad z = 4, \quad z = -2 + 2\sqrt{3}i, \quad z = -2 - 2\sqrt{3}i}
\]

---

## Problem 41

**Solve the equation \( z + 2\bar{z} = \frac{2 - i}{1 + 3i} \) for \( z = a + ib \).**

### Solution

**Step 1.** Let \( z = a + ib \), which gives:
\[
z + 2\bar{z} = (a + ib) + 2(a - ib) = 3a - ib
\]

**Step 2.** Simplify the right-hand side by multiplying the numerator and denominator by the conjugate of the denominator, \( 1 - 3i \):
\[
\frac{2 - i}{1 + 3i} = \frac{(2 - i)(1 - 3i)}{1^2 + 3^2} = \frac{2 - 6i - i + 3i^2}{1 + 9}
\]
Since \( i^2 = -1 \):
\[
= \frac{2 - 7i - 3}{10} = \frac{-1 - 7i}{10} = -\frac{1}{10} - \frac{7}{10}i
\]

**Step 3.** Equate the simplified left and right sides:
\[
3a - ib = -\frac{1}{10} - \frac{7}{10}i
\]

**Step 4.** Solve for \( a \) and \( b \):
1. **Real parts:**
   \[
   3a = -\frac{1}{10} \implies a = -\frac{1}{30}
   \]
2. **Imaginary parts:**
   \[
   -b = -\frac{7}{10} \implies b = \frac{7}{10}
   \]

\[
\boxed{z = -\frac{1}{30} + \frac{7}{10}i}
\]

---

## Problem 42

**Solve the equation \( \frac{z}{1 + \bar{z}} = 3 + 4i \) for \( z = a + ib \).**

### Solution

**Step 1.** Clear the fraction by multiplying both sides by \( 1 + \bar{z} \):
\[
z = (3 + 4i)(1 + \bar{z})
\]

**Step 2.** Substitute \( z = a + ib \) and \( \bar{z} = a - ib \):
\[
a + ib = (3 + 4i)(1 + a - ib)
\]
\[
a + ib = (3 + 4i)[(1 + a) - ib]
\]
\[
a + ib = 3(1 + a) - 3bi + 4(1 + a)i - 4b i^2
\]
Since \( i^2 = -1 \):
\[
a + ib = [3(1 + a) + 4b] + [4(1 + a) - 3b]i
\]

**Step 3.** Equate the real and imaginary parts:
1. **Real parts:**
   \[
   a = 3 + 3a + 4b \implies -2a - 4b = 3 \implies 2a + 4b = -3 \qquad \text{(Equation 1)}
   \]
2. **Imaginary parts:**
   \[
   b = 4(1 + a) - 3b \implies 4b = 4 + 4a \implies 4a - 4b = -4 \implies a - b = -1 \qquad \text{(Equation 2)}
   \]

**Step 4.** Solve the linear system. From Equation 2:
\[
a = b - 1
\]
Substitute this into Equation 1:
\[
2(b - 1) + 4b = -3
\]
\[
2b - 2 + 4b = -3 \implies 6b = -1 \implies b = -\frac{1}{6}
\]
Now solve for \( a \):
\[
a = b - 1 = -\frac{1}{6} - 1 = -\frac{7}{6}
\]

\[
\boxed{z = -\frac{7}{6} - \frac{1}{6}i}
\]

---

## Problem 43

**Solve the system of equations for \( z_1 \) and \( z_2 \):**
\[
\begin{aligned}
i z_1 - i z_2 &= 2 + 10i \\
-z_1 + (1 - i) z_2 &= 3 - 5i
\end{aligned}
\]

### Solution

**Step 1.** Isolate \( z_1 \) in the first equation:
Divide both sides of \( i z_1 - i z_2 = 2 + 10i \) by \( i \) (which is equivalent to multiplying by \( -i \)):
\[
z_1 - z_2 = \frac{2 + 10i}{i} = -2i - 10i^2 = 10 - 2i
\]
\[
z_1 = z_2 + 10 - 2i \qquad \text{(Equation 3)}
\]

**Step 2.** Substitute Equation 3 into the second equation:
\[
-\left(z_2 + 10 - 2i\right) + (1 - i)z_2 = 3 - 5i
\]
\[
-z_2 - 10 + 2i + z_2 - iz_2 = 3 - 5i
\]
The \( z_2 \) and \( -z_2 \) terms cancel:
\[
-10 + 2i - iz_2 = 3 - 5i
\]

**Step 3.** Solve for \( z_2 \):
\[
-iz_2 = 3 - 5i + 10 - 2i = 13 - 7i
\]
Multiply both sides by \( i \) (since \( -i^2 = 1 \)):
\[
z_2 = i(13 - 7i) = 13i - 7i^2 = 7 + 13i
\]

**Step 4.** Solve for \( z_1 \) using Equation 3:
\[
z_1 = (7 + 13i) + 10 - 2i = 17 + 11i
\]

\[
\boxed{z_1 = 17 + 11i, \quad z_2 = 7 + 13i}
\]

---

## Problem 44

**Solve the system of equations for \( z_1 \) and \( z_2 \):**
\[
\begin{aligned}
i z_1 + (1 + i) z_2 &= 1 + 2i \\
(2 - i) z_1 + 2i z_2 &= 4i
\end{aligned}
\]

### Solution

**Step 1.** Express \( z_1 \) in terms of \( z_2 \) using the first equation:
\[
i z_1 = 1 + 2i - (1 + i)z_2
\]
Multiply by \( -i \):
\[
z_1 = -i(1 + 2i) + i(1 + i)z_2
\]
\[
= -i - 2i^2 + (i + i^2)z_2 = (2 - i) - (1 - i)z_2 \qquad \text{(Equation 3)}
\]

**Step 2.** Substitute Equation 3 into the second equation:
\[
(2 - i)\left[(2 - i) - (1 - i)z_2\right] + 2iz_2 = 4i
\]
\[
(2 - i)^2 - (2 - i)(1 - i)z_2 + 2iz_2 = 4i
\]

**Step 3.** Calculate the products of the coefficients:
1. \( (2 - i)^2 = 4 - 4i + i^2 = 3 - 4i \)
2. \( (2 - i)(1 - i) = 2 - 2i - i + i^2 = 1 - 3i \)

Substitute these back:
\[
(3 - 4i) - (1 - 3i)z_2 + 2iz_2 = 4i
\]
\[
(3 - 4i) + [-1 + 3i + 2i]z_2 = 4i
\]
\[
[-1 + 5i]z_2 = 4i - (3 - 4i) = -3 + 8i
\]

**Step 4.** Solve for \( z_2 \):
\[
z_2 = \frac{-3 + 8i}{-1 + 5i} = \frac{(-3 + 8i)(-1 - 5i)}{(-1)^2 + 5^2} = \frac{3 + 15i - 8i - 40i^2}{1 + 25}
\]
\[
= \frac{3 + 7i + 40}{26} = \frac{43 + 7i}{26} = \frac{43}{26} + \frac{7}{26}i
\]

**Step 5.** Solve for \( z_1 \) using Equation 3:
\[
z_1 = (2 - i) - (1 - i)\left(\frac{43 + 7i}{26}\right)
\]
Compute the numerator product:
\[
(1 - i)(43 + 7i) = 43 + 7i - 43i - 7i^2 = 43 - 36i + 7 = 50 - 36i
\]
Substitute:
\[
z_1 = 2 - i - \frac{50 - 36i}{26} = \frac{52 - 26i - 50 + 36i}{26} = \frac{2 + 10i}{26} = \frac{1}{13} + \frac{5}{13}i
\]

\[
\boxed{z_1 = \frac{1}{13} + \frac{5}{13}i, \quad z_2 = \frac{43}{26} + \frac{7}{26}i}
\]


---

## Problem 45

**What can be said about the complex number \( z \) if \( z = \bar{z} \)? If \( z^2 = \bar{z}^2 \)?**

### Solution

**Part 1: \( z = \bar{z} \)**

Let \( z = x + iy \), where \( x \) and \( y \) are real numbers. Its complex conjugate is \( \bar{z} = x - iy \).
Set them equal:
\[
x + iy = x - iy \implies 2iy = 0 \implies y = 0
\]
Since the imaginary part \( y \) is zero, \( z = x \), which is a real number.
\[
\boxed{z \in \mathbb{R} \quad (\text{\( z \) is a real number})}
\]

**Part 2: \( z^2 = \bar{z}^2 \)**

Using \( z = x + iy \):
\[
z^2 = x^2 - y^2 + 2xyi
\]
\[
\bar{z}^2 = x^2 - y^2 - 2xyi
\]
Set them equal:
\[
x^2 - y^2 + 2xyi = x^2 - y^2 - 2xyi \implies 4xyi = 0 \implies xy = 0
\]
The product of two real numbers is zero if and only if at least one of them is zero:
1. If \( x = 0 \), then \( z = iy \), which is a **pure imaginary number** (lies on the imaginary axis).
2. If \( y = 0 \), then \( z = x \), which is a **real number** (lies on the real axis).

\[
\boxed{z \text{ is either a real number or a pure imaginary number}}
\]

---

## Problem 46

**Without doing any significant work, evaluate \( (1+i)^{5404} \).**

### Solution

**Step 1.** Let's compute small powers of \( (1+i) \) to find a pattern:
\[
(1+i)^2 = 1 + 2i + i^2 = 1 + 2i - 1 = 2i
\]
Raise this to the 4th power:
\[
(1+i)^4 = ((1+i)^2)^2 = (2i)^2 = 4i^2 = -4
\]
Raise this to the 8th power:
\[
(1+i)^8 = ((1+i)^4)^2 = (-4)^2 = 16 = 2^4
\]

**Step 2.** Divide the exponent \( 5404 \) by \( 8 \) to express it in terms of cycles:
\[
5404 = 8 \times 675 + 4
\]

**Step 3.** Apply the rules of exponents:
\[
(1+i)^{5404} = \left((1+i)^8\right)^{675} \cdot (1+i)^4
\]
Substitute the values from Step 1:
\[
= (16)^{675} \cdot (-4) = -4 \cdot (2^4)^{675} = -2^2 \cdot 2^{2700} = -2^{2702}
\]

\[
\boxed{(1+i)^{5404} = -2^{2702}}
\]

---

## Problem 47

**For \( n \) a nonnegative integer, \( i^n \) can be one of four values: \( 1, i, -1, \) and \( -i \). In each of the following four cases, express the integer exponent \( n \) in terms of the symbol \( k \), where \( k = 0, 1, 2, \dots \):**
\[
\text{(a) } i^n = 1 \qquad \text{(b) } i^n = i \qquad \text{(c) } i^n = -1 \qquad \text{(d) } i^n = -i
\]

### Solution

Since the powers of \( i \) repeat in a cycle of 4:
* **(a) \( i^n = 1 \)** when \( n \) is a multiple of 4:
  \[
  \boxed{n = 4k, \quad k = 0, 1, 2, \dots}
  \]
* **(b) \( i^n = i \)** when \( n \) leaves a remainder of 1 when divided by 4:
  \[
  \boxed{n = 4k + 1, \quad k = 0, 1, 2, \dots}
  \]
* **(c) \( i^n = -1 \)** when \( n \) leaves a remainder of 2 when divided by 4:
  \[
  \boxed{n = 4k + 2, \quad k = 0, 1, 2, \dots}
  \]
* **(d) \( i^n = -i \)** when \( n \) leaves a remainder of 3 when divided by 4:
  \[
  \boxed{n = 4k + 3, \quad k = 0, 1, 2, \dots}
  \]

---

## Problem 48

**There is an alternative to the division procedure. For example, the quotient \( (5+6i)/(1+i) \) must be expressible in the form \( a+ib \):**
\[
\frac{5+6i}{1+i} = a+ib \implies 5+6i = (1+i)(a+ib)
\]
**Use this last result to find the given quotient. Use this method to find the reciprocal of \( 3-4i \).**

### Solution

**Part 1: Find \( \frac{5+6i}{1+i} \)**

**Step 1.** Expand the right-hand side of \( 5+6i = (1+i)(a+ib) \):
\[
5+6i = a + ib + ai + ib^2 = (a - b) + (a + b)i
\]

**Step 2.** Equate real and imaginary parts:
1. \( a - b = 5 \)
2. \( a + b = 6 \)

**Step 3.** Solve the system of linear equations:
* Add the equations: \( 2a = 11 \implies a = \frac{11}{2} \)
* Subtract the equations: \( 2b = 1 \implies b = \frac{1}{2} \)

Therefore:
\[
\boxed{\frac{5+6i}{1+i} = \frac{11}{2} + \frac{1}{2}i}
\]

**Part 2: Find the reciprocal of \( 3-4i \)**

**Step 1.** Let \( \frac{1}{3-4i} = a+ib \implies 1 = (3-4i)(a+ib) \).

**Step 2.** Expand:
\[
1 + 0i = 3a + 3bi - 4ai - 4bi^2 = (3a + 4b) + (3b - 4a)i
\]

**Step 3.** Equate real and imaginary parts:
1. \( 3a + 4b = 1 \)
2. \( -4a + 3b = 0 \implies a = \frac{3}{4}b \)

**Step 4.** Substitute \( a = \frac{3}{4}b \) into Equation 1:
\[
3\left(\frac{3}{4}b\right) + 4b = 1 \implies \frac{9}{4}b + \frac{16}{4}b = 1 \implies \frac{25}{4}b = 1 \implies b = \frac{4}{25}
\]
Solve for \( a \):
\[
a = \frac{3}{4}\left(\frac{4}{25}\right) = \frac{3}{25}
\]

Therefore:
\[
\boxed{\frac{1}{3-4i} = \frac{3}{25} + \frac{4}{25}i}
\]

---

## Problem 49

**Assume for the moment that \( \sqrt{1+i} \) makes sense in the complex number system. How would you then demonstrate the validity of the equality:**
\[
\sqrt{1+i} = \sqrt{\frac{1}{2} + \frac{1}{2}\sqrt{2}} + i \sqrt{-\frac{1}{2} + \frac{1}{2}\sqrt{2}}
\]

### Solution

To show the equality holds, we can square the right-hand side and show it simplifies to the radicand \( 1+i \).

**Step 1.** Let the right side be \( W \):
\[
W = \sqrt{\frac{1}{2} + \frac{1}{2}\sqrt{2}} + i \sqrt{-\frac{1}{2} + \frac{1}{2}\sqrt{2}}
\]
Square \( W \) using \( (A + B)^2 = A^2 + 2AB + B^2 \):
\[
W^2 = \left(\sqrt{\frac{1}{2} + \frac{1}{2}\sqrt{2}}\right)^2 + 2i \left(\sqrt{\frac{1}{2} + \frac{1}{2}\sqrt{2}}\right)\left(\sqrt{-\frac{1}{2} + \frac{1}{2}\sqrt{2}}\right) + i^2 \left(\sqrt{-\frac{1}{2} + \frac{1}{2}\sqrt{2}}\right)^2
\]

**Step 2.** Simplify each term:
* First term: \( \frac{1}{2} + \frac{1}{2}\sqrt{2} \)
* Third term (since \( i^2 = -1 \)): \( -\left(-\frac{1}{2} + \frac{1}{2}\sqrt{2}\right) = \frac{1}{2} - \frac{1}{2}\sqrt{2} \)
* Middle term:
  \[
  2i \sqrt{\left(\frac{1}{2} + \frac{1}{2}\sqrt{2}\right)\left(-\frac{1}{2} + \frac{1}{2}\sqrt{2}\right)} = 2i \sqrt{\left(\frac{1}{2}\sqrt{2} + \frac{1}{2}\right)\left(\frac{1}{2}\sqrt{2} - \frac{1}{2}\right)}
  \]
  Using the difference of squares:
  \[
  = 2i \sqrt{\left(\frac{2}{4} - \frac{1}{4}\right)} = 2i \sqrt{\frac{1}{4}} = 2i \left(\frac{1}{2}\right) = i
  \]

**Step 3.** Sum the simplified terms:
\[
W^2 = \left(\frac{1}{2} + \frac{1}{2}\sqrt{2}\right) + i + \left(\frac{1}{2} - \frac{1}{2}\sqrt{2}\right)
\]
\[
W^2 = \left(\frac{1}{2} + \frac{1}{2}\right) + i = 1 + i
\]
Since squaring the right-hand side yields \( 1 + i \), we have shown that the expression is a square root of \( 1 + i \).

---

## Problem 50

**Suppose \( z_1 \) and \( z_2 \) are complex numbers. What can be said about \( z_1 \) or \( z_2 \) if \( z_1 z_2 = 0 \)?**

### Solution

If \( z_1 z_2 = 0 \), then **either \( z_1 = 0 \), or \( z_2 = 0 \) (or both)**.

**Proof:**
Take the modulus of both sides of \( z_1 z_2 = 0 \):
\[
|z_1 z_2| = |0| = 0
\]
Using the property that the modulus of a product is the product of the moduli:
\[
|z_1||z_2| = 0
\]
Since \( |z_1| \) and \( |z_2| \) are real numbers, the product of two real numbers is zero if and only if one of the factors is zero:
\[
|z_1| = 0 \quad \text{or} \quad |z_2| = 0
\]
By the properties of modulus, \( |z| = 0 \iff z = 0 \). Thus:
\[
z_1 = 0 \quad \text{or} \quad z_2 = 0
\]

---

## Problem 51

**Suppose the product \( z_1 z_2 \) of two complex numbers is a nonzero real constant. Show that \( z_2 = k \bar{z}_1 \), where \( k \) is a real number.**

### Solution

**Step 1.** Let \( z_1 z_2 = C \), where \( C \in \mathbb{R} \) and \( C \neq 0 \).

**Step 2.** Since \( C \neq 0 \), \( z_1 \) cannot be zero. Thus we can divide by \( z_1 \):
\[
z_2 = \frac{C}{z_1}
\]

**Step 3.** Multiply the numerator and denominator by the complex conjugate \( \bar{z}_1 \):
\[
z_2 = \frac{C \bar{z}_1}{z_1 \bar{z}_1}
\]
Since \( z_1 \bar{z}_1 = |z_1|^2 \):
\[
z_2 = \left(\frac{C}{|z_1|^2}\right) \bar{z}_1
\]

**Step 4.** Since \( C \) is real, and the square of the modulus \( |z_1|^2 \) is a positive real number, their quotient is a real number. Let \( k = \frac{C}{|z_1|^2} \in \mathbb{R} \). We get:
\[
z_2 = k \bar{z}_1
\]
which completes the proof.

---

## Problem 52

**Without doing any significant work, explain why it follows immediately from (2) and (3) that \( z_1 \bar{z}_2 + \bar{z}_1 z_2 = 2\operatorname{Re}(z_1 \bar{z}_2) \).**

### Solution

For any complex number \( w \), the sum of \( w \) and its conjugate is twice its real part:
\[
w + \bar{w} = 2\operatorname{Re}(w)
\]
Let \( w = z_1 \bar{z}_2 \). Using the properties of conjugates (the conjugate of a product is the product of conjugates, and the conjugate of a conjugate is the original number):
\[
\bar{w} = \overline{z_1 \bar{z}_2} = \bar{z}_1 \overline{\bar{z}_2} = \bar{z}_1 z_2
\]
Substituting \( w \) and \( \bar{w} \) into the identity:
\[
z_1 \bar{z}_2 + \bar{z}_1 z_2 = 2\operatorname{Re}(z_1 \bar{z}_2)
\]

---

## Problem 53

**Prove the proposition "The unity in the complex number system is unique."**

### Solution

Let's prove this by contradiction.

**Step 1.** Assume there exist two distinct multiplicative unities, \( 1_1 \) and \( 1_2 \) (\( 1_1 \neq 1_2 \)).

**Step 2.**
* Since \( 1_1 \) is a multiplicative unity, for any complex number \( z \):
  \[
  z \cdot 1_1 = z
  \]
  Choosing \( z = 1_2 \), we get:
  \[
  1_2 \cdot 1_1 = 1_2 \qquad \text{(Equation 1)}
  \]
* Since \( 1_2 \) is also a multiplicative unity, for any complex number \( z \):
  \[
  1_2 \cdot z = z
  \]
  Choosing \( z = 1_1 \), we get:
  \[
  1_2 \cdot 1_1 = 1_1 \qquad \text{(Equation 2)}
  \]

**Step 3.** From Equation 1 and Equation 2, we have:
\[
1_1 = 1_2
\]
This contradicts our assumption that \( 1_1 \) and \( 1_2 \) are distinct. Therefore, the multiplicative unity is unique.

---

## Problem 54

**Prove the proposition "The zero in the complex number system is unique."**

### Solution

We use the same proof by contradiction pattern.

**Step 1.** Assume there exist two distinct additive identities (zeros), \( 0_1 \) and \( 0_2 \) (\( 0_1 \neq 0_2 \)).

**Step 2.**
* Since \( 0_1 \) is an additive identity, for any complex number \( z \):
  \[
  z + 0_1 = z
  \]
  Choosing \( z = 0_2 \):
  \[
  0_2 + 0_1 = 0_2 \qquad \text{(Equation 1)}
  \]
* Since \( 0_2 \) is also an additive identity, for any complex number \( z \):
  \[
  0_2 + z = z
  \]
  Choosing \( z = 0_1 \):
  \[
  0_2 + 0_1 = 0_1 \qquad \text{(Equation 2)}
  \]

**Step 3.** Equating the two expressions for \( 0_2 + 0_1 \):
\[
0_1 = 0_2
\]
This contradicts the assumption that they are distinct. Therefore, the zero in the complex number system is unique.

---

## Problem 55

**A number system is said to be an ordered system provided it contains a subset \( P \) with the following two properties:**
* **First, for any nonzero number \( x \) in the system, either \( x \) or \( -x \) (but not both) is in \( P \).**
* **Second, if \( x \) and \( y \) are numbers in \( P \), then both \( xy \) and \( x+y \) are in \( P \).**

**Discuss why the complex number system has no such subset \( P \).**

### Solution

Let's assume such a subset \( P \) exists and analyze the imaginary unit \( i \).

Since \( i \neq 0 \), the first property requires that either:
\[
i \in P \quad \text{or} \quad -i \in P
\]

**Case 1: Assume \( i \in P \)**
By the second property, the product of two elements in \( P \) must be in \( P \):
\[
i \cdot i = i^2 = -1 \in P
\]
Since \( -1 \in P \), by the same multiplication property:
\[
(-1) \cdot (-1) = 1 \in P
\]
But now we have both \( 1 \in P \) and \( -1 \in P \). This violates the first property, which states that for the nonzero number \( 1 \), only one of \( 1 \) or \( -1 \) can be in \( P \). This is a contradiction.

**Case 2: Assume \( -i \in P \)**
By the second property, the product of two elements in \( P \) must be in \( P \):
\[
(-i) \cdot (-i) = i^2 = -1 \in P
\]
Just like in Case 1, this implies \( -1 \in P \), which in turn implies \( (-1) \cdot (-1) = 1 \in P \).
This again results in both \( 1 \in P \) and \( -1 \in P \), violating the first property. Contradiction.

Since both possible cases lead to a contradiction, no such subset \( P \) can exist. Thus, the complex number system cannot be ordered.

---

<a name="section-1.2"></a>

### Problems 1 – 50 · Complete Solutions

---

> **Key Concepts and Modulus Properties**
>
> 1. **Vector Interpretation:** A complex number \( z = x + iy \) is represented as a position vector \( (x, y) \) starting at the origin.
> 2. **Modulus / Absolute Value:** 
>    \[
>    |z| = \sqrt{x^2 + y^2} \implies |z|^2 = z\bar{z}
>    \]
> 3. **Distance Formula:** The distance between \( z_1 \) and \( z_2 \) is:
>    \[
>    |z_2 - z_1| = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}
>    \]
> 4. **Triangle Inequalities:**
>    * \( |z_1 + z_2| \le |z_1| + |z_2| \)
>    * \( |z_1 + z_2| \ge \Big| |z_1| - |z_2| \Big| \)
>    * \( |z_1 - z_2| \le |z_1| + |z_2| \)
>    * \( |z_1 - z_2| \ge \Big| |z_1| - |z_2| \Big| \)

---

## Problems 1 – 4

**Interpret \( z_1 \) and \( z_2 \) as vectors. Graph \( z_1, z_2, z_1 + z_2, \) and \( z_1 - z_2 \).**

### Problem 1
\[
z_1 = 4 + 2i, \quad z_2 = -2 + 5i
\]
* **Vector sum:** \( z_1 + z_2 = (4 - 2) + (2 + 5)i = 2 + 7i \)
* **Vector difference:** \( z_1 - z_2 = (4 - (-2)) + (2 - 5)i = 6 - 3i \)
* *Graph description:* Draw vectors from origin to \( (4, 2) \) and \( (-2, 5) \). The sum ends at \( (2, 7) \) (diagonal of parallelogram). The difference ends at \( (6, -3) \).

### Problem 2
\[
z_1 = 1 - i, \quad z_2 = 1 + i
\]
* **Vector sum:** \( z_1 + z_2 = (1 + 1) + (-1 + 1)i = 2 \)
* **Vector difference:** \( z_1 - z_2 = (1 - 1) + (-1 - 1)i = -2i \)
* *Graph description:* Draw vectors to \( (1, -1) \) and \( (1, 1) \). The sum lies on the real axis at \( (2, 0) \). The difference lies on the negative imaginary axis at \( (0, -2) \).

### Problem 3
\[
z_1 = 5 + 4i, \quad z_2 = -3i
\]
* **Linear combination 1:** \( 3z_1 + 5z_2 = 3(5 + 4i) + 5(-3i) = 15 + 12i - 15i = 15 - 3i \)
* **Linear combination 2:** \( z_1 - 2z_2 = (5 + 4i) - 2(-3i) = 5 + 4i + 6i = 5 + 10i \)
* *Graph description:* Draw vectors ending at \( (15, -3) \) and \( (5, 10) \).

### Problem 4
\[
z_1 = 4 - 3i, \quad z_2 = -2 + 3i
\]
* **Linear combination 1:** \( 2z_1 + 4z_2 = 2(4 - 3i) + 4(-2 + 3i) = 8 - 6i - 8 + 12i = 6i \)
* **Vector difference:** \( z_1 - z_2 = (4 - (-2)) + (-3 - 3)i = 6 - 6i \)
* *Graph description:* Draw vectors ending at \( (0, 6) \) (pure imaginary) and \( (6, -6) \).

---

## Problem 5

**Given \( z_1 = 5 - 2i \) and \( z_2 = -1 - i \), find a vector \( z_3 \) in the same direction as \( z_1 + z_2 \) but four times as long.**

### Solution

**Step 1.** Find the vector sum \( z_1 + z_2 \):
\[
z_1 + z_2 = (5 - 1) + (-2 - 1)i = 4 - 3i
\]
**Step 2.** A vector pointing in the same direction as \( w \) but \( N \) times as long is simply \( N \cdot w \). Thus:
\[
z_3 = 4(z_1 + z_2) = 4(4 - 3i) = 16 - 12i
\]
\[
\boxed{z_3 = 16 - 12i}
\]

---

## Problem 6

**Plot the points \( z_1 = -2 - 8i, z_2 = 3i, z_3 = -6 - 5i \). Express each side of the triangle determined by these points as a difference of vectors.**

### Solution

* **Side 1 (from \( z_1 \) to \( z_2 \)):**
  \[
  s_{12} = z_2 - z_1 = 3i - (-2 - 8i) = 2 + 11i
  \]
* **Side 2 (from \( z_2 \) to \( z_3 \)):**
  \[
  s_{23} = z_3 - z_2 = -6 - 5i - 3i = -6 - 8i
  \]
* **Side 3 (from \( z_3 \) to \( z_1 \)):**
  \[
  s_{31} = z_1 - z_3 = -2 - 8i - (-6 - 5i) = 4 - 3i
  \]

---

## Problem 7

**Determine whether the points \( z_1, z_2, z_3 \) in Problem 6 are the vertices of a right triangle.**

### Solution

**Step 1.** Calculate the lengths of each side of the triangle by taking the modulus of each difference vector:
* Length of side 12:
  \[
  L_{12} = |z_2 - z_1| = |2 + 11i| = \sqrt{2^2 + 11^2} = \sqrt{4 + 121} = \sqrt{125}
  \]
* Length of side 23:
  \[
  L_{23} = |z_3 - z_2| = |-6 - 8i| = \sqrt{(-6)^2 + (-8)^2} = \sqrt{36 + 64} = \sqrt{100} = 10
  \]
* Length of side 31:
  \[
  L_{31} = |z_1 - z_3| = |4 - 3i| = \sqrt{4^2 + (-3)^2} = \sqrt{16 + 9} = \sqrt{25} = 5
  \]

**Step 2.** Test the Pythagorean theorem \( A^2 + B^2 = C^2 \) using the squared lengths:
\[
L_{23}^2 + L_{31}^2 = 10^2 + 5^2 = 100 + 25 = 125 = L_{12}^2
\]
Since \( L_{23}^2 + L_{31}^2 = L_{12}^2 \), the triangle is a **right triangle** with the right angle located at vertex \( z_3 \).

---

## Problem 8

**The three points \( z_1 = 1 + 5i, z_2 = -4 - i, z_3 = 3 + i \) are vertices of a triangle. Find the length of the median from \( z_1 \) to the side \( z_3 - z_2 \).**

### Solution

**Step 1.** The side opposite to vertex \( z_1 \) connects the points \( z_2 \) and \( z_3 \). Find the midpoint \( M \) of this side:
\[
M = \frac{z_2 + z_3}{2} = \frac{(-4 - i) + (3 + i)}{2} = \frac{-1 + 0i}{2} = -\frac{1}{2}
\]

**Step 2.** Find the length of the median, which is the distance from vertex \( z_1 \) to midpoint \( M \):
\[
L = |z_1 - M| = \left|(1 + 5i) - \left(-\frac{1}{2}\right)\right| = \left|\frac{3}{2} + 5i\right|
\]
\[
= \sqrt{\left(\frac{3}{2}\right)^2 + 5^2} = \sqrt{\frac{9}{4} + 25} = \sqrt{\frac{109}{4}} = \frac{\sqrt{109}}{2}
\]

\[
\boxed{\text{Median length} = \frac{\sqrt{109}}{2}}
\]

---

## Problems 9 – 12

**Find the modulus of the given complex number.**

### Problem 9
\[
w = (1 - i)^2
\]
Using the property \( |z^n| = |z|^n \):
\[
|w| = |1 - i|^2 = \left(\sqrt{1^2 + (-1)^2}\right)^2 = (\sqrt{2})^2 = 2
\]
\[
\boxed{|w| = 2}
\]

### Problem 10
\[
w = i(2 - i) - 4\left(1 + \frac{1}{4}i\right)
\]
**Step 1.** Simplify \( w \) first:
\[
w = 2i - i^2 - 4 - i = 2i + 1 - 4 - i = -3 + i
\]
**Step 2.** Calculate the modulus:
\[
|w| = |-3 + i| = \sqrt{(-3)^2 + 1^2} = \sqrt{9 + 1} = \sqrt{10}
\]
\[
\boxed{|w| = \sqrt{10}}
\]

### Problem 11
\[
w = \frac{2i}{3 - 4i}
\]
Using the quotient property of moduli:
\[
|w| = \frac{|2i|}{|3 - 4i|} = \frac{2}{\sqrt{3^2 + (-4)^2}} = \frac{2}{\sqrt{25}} = \frac{2}{5}
\]
\[
\boxed{|w| = \frac{2}{5}}
\]

### Problem 12
\[
w = \frac{1 - 2i}{1 + i} + \frac{2 - i}{1 - i}
\]
**Step 1.** Write each fraction in standard form:
* First term:
  \[
  \frac{1 - 2i}{1 + i} = \frac{(1 - 2i)(1 - i)}{1 + 1} = \frac{1 - 3i - 2}{2} = -\frac{1}{2} - \frac{3}{2}i
  \]
* Second term:
  \[
  \frac{2 - i}{1 - i} = \frac{(2 - i)(1 + i)}{1 + 1} = \frac{2 + i + 1}{2} = \frac{3}{2} + \frac{1}{2}i
  \]
**Step 2.** Combine the terms:
\[
w = \left(-\frac{1}{2} - \frac{3}{2}i\right) + \left(\frac{3}{2} + \frac{1}{2}i\right) = 1 - i
\]
**Step 3.** Calculate the modulus:
\[
|w| = |1 - i| = \sqrt{1^2 + (-1)^2} = \sqrt{2}
\]
\[
\boxed{|w| = \sqrt{2}}
\]

---

## Problems 13 – 14

**Let \( z = x + iy \). Express the given quantity in terms of \( x \) and \( y \).**

### Problem 13
\[
|z - 1 - 3i|^2
\]
Substitute \( z = x + iy \):
\[
|x + iy - 1 - 3i|^2 = |(x - 1) + (y - 3)i|^2 = (x - 1)^2 + (y - 3)^2
\]
\[
\boxed{(x - 1)^2 + (y - 3)^2}
\]

### Problem 14
\[
|z + 5\bar{z}|
\]
Substitute \( z = x + iy \) and \( \bar{z} = x - iy \):
\[
z + 5\bar{z} = (x + iy) + 5(x - iy) = 6x - 4yi
\]
Compute the modulus:
\[
|z + 5\bar{z}| = |6x - 4yi| = \sqrt{(6x)^2 + (-4y)^2} = \sqrt{36x^2 + 16y^2} = 2\sqrt{9x^2 + 4y^2}
\]
\[
\boxed{2\sqrt{9x^2 + 4y^2}}
\]

---

## Problems 15 – 16

**Determine which of the given two complex numbers is closest to the origin. Which is closest to \( 1 + i \)?**

### Problem 15
\[
z_1 = 10 + 8i, \quad z_2 = 11 - 6i
\]
1. **Compare distance to origin (\( |z| \)):**
   * \( |z_1| = \sqrt{10^2 + 8^2} = \sqrt{164} \approx 12.806 \)
   * \( |z_2| = \sqrt{11^2 + (-6)^2} = \sqrt{157} \approx 12.530 \)
   * Since \( |z_2| < |z_1| \), **\( z_2 = 11 - 6i \) is closest to the origin**.
2. **Compare distance to \( 1 + i \) (\( |z - (1 + i)| \)):**
   * \( |z_1 - (1 + i)| = |9 + 7i| = \sqrt{9^2 + 7^2} = \sqrt{130} \approx 11.402 \)
   * \( |z_2 - (1 + i)| = |10 - 7i| = \sqrt{10^2 + (-7)^2} = \sqrt{149} \approx 12.207 \)
   * Since \( 11.402 < 12.207 \), **\( z_1 = 10 + 8i \) is closest to \( 1 + i \)**.

### Problem 16
\[
z_1 = \frac{1}{2} - \frac{1}{4}i, \quad z_2 = \frac{2}{3} + \frac{1}{6}i
\]
1. **Compare distance to origin:**
   * \( |z_1| = \sqrt{\left(\frac{1}{2}\right)^2 + \left(-\frac{1}{4}\right)^2} = \sqrt{\frac{1}{4} + \frac{1}{16}} = \sqrt{\frac{5}{16}} = \frac{\sqrt{5}}{4} \approx 0.559 \)
   * \( |z_2| = \sqrt{\left(\frac{2}{3}\right)^2 + \left(\frac{1}{6}\right)^2} = \sqrt{\frac{4}{9} + \frac{1}{36}} = \sqrt{\frac{17}{36}} = \frac{\sqrt{17}}{6} \approx 0.687 \)
   * Since \( |z_1| < |z_2| \), **\( z_1 \) is closest to the origin**.
2. **Compare distance to \( 1 + i \):**
   * \( |z_1 - (1 + i)| = \left| -\frac{1}{2} - \frac{5}{4}i \right| = \sqrt{\frac{1}{4} + \frac{25}{16}} = \sqrt{\frac{29}{16}} = \frac{\sqrt{29}}{4} \approx 1.346 \)
   * \( |z_2 - (1 + i)| = \left| -\frac{1}{3} - \frac{5}{6}i \right| = \sqrt{\frac{1}{9} + \frac{25}{36}} = \sqrt{\frac{29}{36}} = \frac{\sqrt{29}}{6} \approx 0.898 \)
   * Since \( 0.898 < 1.346 \), **\( z_2 \) is closest to \( 1 + i \)**.

---

## Problems 17 – 26

**Describe the set of points \( z \) in the complex plane satisfying the given equation.**

### Problem 17
\[
\operatorname{Re}((1 + i)z - 1) = 0
\]
Let \( z = x + iy \). Expand the inner term:
\[
(1 + i)(x + iy) - 1 = x - y - 1 + (x + y)i
\]
The real part must be zero:
\[
x - y - 1 = 0 \implies y = x - 1
\]
\[
\boxed{\text{A straight line with slope 1 and } y\text{-intercept } -1}
\]

### Problem 18
\[
[\operatorname{Im}(i\bar{z})]^2 = 2
\]
Let \( z = x + iy \implies \bar{z} = x - iy \). Multiply by \( i \):
\[
i\bar{z} = i(x - iy) = y + xi
\]
The imaginary part is \( x \). Substitute back:
\[
x^2 = 2 \implies x = \pm \sqrt{2}
\]
\[
\boxed{\text{Two vertical straight lines: } x = \sqrt{2} \text{ and } x = -\sqrt{2}}
\]

### Problem 19
\[
|z - i| = |z - 1|
\]
Geometrically, this represents the set of points equidistant from \( i = (0,1) \) and \( 1 = (1,0) \). This is the perpendicular bisector of the line segment joining \( (1,0) \) and \( (0,1) \).
Analytically, substitute \( z = x + iy \):
\[
x^2 + (y - 1)^2 = (x - 1)^2 + y^2
\]
\[
x^2 + y^2 - 2y + 1 = x^2 - 2x + 1 + y^2 \implies y = x
\]
\[
\boxed{\text{The straight line } y = x}
\]

### Problem 20
\[
\bar{z} = z - 1
\]
Let \( z = x + iy \):
\[
x - iy = x + iy - 1 \implies -iy = iy - 1 \implies 2iy = 1
\]
Since \( y \) must be a real number, this equation has no solution (it implies the real part relation \( x = x - 1 \implies 0 = -1 \), which is a contradiction).
\[
\boxed{\text{The empty set (no points satisfy this equation)}}
\]

### Problem 21
\[
\operatorname{Im}(z^2) = 2
\]
Let \( z = x + iy \implies z^2 = x^2 - y^2 + 2xyi \):
\[
2xy = 2 \implies xy = 1 \implies y = \frac{1}{x}
\]
\[
\boxed{\text{A rectangular hyperbola in the first and third quadrants}}
\]

### Problem 22
\[
\operatorname{Re}(z^2) = |\sqrt{3} - i|
\]
First evaluate the right-hand side modulus:
\[
|\sqrt{3} - i| = \sqrt{3 + 1} = 2
\]
Now equate with \( \operatorname{Re}(z^2) = x^2 - y^2 \):
\[
x^2 - y^2 = 2
\]
\[
\boxed{\text{A hyperbola opening horizontally with vertices at } (\pm \sqrt{2}, 0)}
\]

### Problem 23
\[
|z - 1| = 1
\]
Using the definition of a circle \( |z - z_0| = R \):
\[
\boxed{\text{A circle of radius 1 centered at } (1, 0)}
\]

### Problem 24
\[
|z - i| = 2|z - 1|
\]
Square both sides:
\[
|z - i|^2 = 4|z - 1|^2
\]
Substitute \( z = x + iy \):
\[
x^2 + (y - 1)^2 = 4\left[(x - 1)^2 + y^2\right]
\]
\[
x^2 + y^2 - 2y + 1 = 4\left[x^2 - 2x + 1 + y^2\right] = 4x^2 - 8x + 4 + 4y^2
\]
Rearrange and collect terms:
\[
3x^2 + 3y^2 - 8x + 2y + 3 = 0
\]
Divide by 3:
\[
x^2 + y^2 - \frac{8}{3}x + \frac{2}{3}y + 1 = 0
\]
Complete the squares:
\[
\left(x - \frac{4}{3}\right)^2 + \left(y + \frac{1}{3}\right)^2 = -1 + \frac{16}{9} + \frac{1}{9} = \frac{8}{9}
\]
\[
\boxed{\text{A circle centered at } \left(\frac{4}{3}, -\frac{1}{3}\right) \text{ with radius } R = \frac{2\sqrt{2}}{3}}
\]

### Problem 25
\[
|z - 2| = \operatorname{Re}(z)
\]
Substitute \( z = x + iy \). Note that \( \operatorname{Re}(z) = x \ge 0 \):
\[
\sqrt{(x - 2)^2 + y^2} = x \implies (x - 2)^2 + y^2 = x^2
\]
\[
x^2 - 4x + 4 + y^2 = x^2 \implies y^2 = 4x - 4 = 4(x - 1)
\]
Since \( x = 1 + \frac{y^2}{4} \ge 1 \), the condition \( x \ge 0 \) is satisfied automatically.
\[
\boxed{\text{A parabola opening to the right with vertex at } (1, 0) \text{ and focus at } (2, 0)}
\]

### Problem 26
\[
|z| = \operatorname{Re}(z)
\]
Substitute \( z = x + iy \) with \( x \ge 0 \):
\[
\sqrt{x^2 + y^2} = x \implies x^2 + y^2 = x^2 \implies y^2 = 0 \implies y = 0
\]
Since \( y = 0 \) and \( x \ge 0 \):
\[
\boxed{\text{The non-negative real axis (i.e. } z = x \ge 0 \text{)}}
\]

---

## Problems 27 – 28

**Establish the given inequality.**

### Problem 27
**If \( |z| = 2 \), show that \( |z + 6 + 8i| \le 13 \).**

By the triangle inequality:
\[
|z + 6 + 8i| \le |z| + |6 + 8i|
\]
Compute the modulus of the constant term:
\[
|6 + 8i| = \sqrt{36 + 64} = 10
\]
Substitute the values:
\[
|z + 6 + 8i| \le 2 + 10 = 12
\]
Since \( 12 \le 13 \), the inequality \( |z + 6 + 8i| \le 13 \) holds true.

### Problem 28
**If \( |z| = 1 \), show that \( 1 \le |z^2 - 3| \le 4 \).**

1. **Upper Bound:**
   By the triangle inequality:
   \[
   |z^2 - 3| \le |z^2| + |-3| = |z|^2 + 3 = 1^2 + 3 = 4
   \]
2. **Lower Bound:**
   By the reverse triangle inequality:
   \[
   |z^2 - 3| \ge \Big| |z^2| - |-3| \Big| = \Big| |z|^2 - 3 \Big| = |1 - 3| = 2
   \]
   Since \( 2 \ge 1 \), we have \( |z^2 - 3| \ge 1 \).
Combining both results:
\[
1 \le |z^2 - 3| \le 4
\]

---

## Problem 29

**Find an upper bound for the modulus of \( 3z^2 + 2z + 1 \) if \( |z| \le 1 \).**

### Solution

Apply the generalized triangle inequality:
\[
|3z^2 + 2z + 1| \le 3|z|^2 + 2|z| + 1
\]
Substitute the maximum value of \( |z| = 1 \):
\[
|3z^2 + 2z + 1| \le 3(1)^2 + 2(1) + 1 = 6
\]
\[
\boxed{\text{Upper bound} = 6}
\]

---

## Problem 30

**Find an upper bound for the reciprocal of the modulus of \( z^4 - 5z^2 + 6 \) if \( |z| = 2 \).**

### Solution

We want to find an upper bound for:
\[
\frac{1}{|z^4 - 5z^2 + 6|}
\]
This is equivalent to finding a positive lower bound for the denominator \( |z^4 - 5z^2 + 6| \).
**Step 1.** Factor the expression:
\[
z^4 - 5z^2 + 6 = (z^2 - 3)(z^2 - 2)
\]
**Step 2.** Find a lower bound for each factor using the reverse triangle inequality:
* For \( |z^2 - 3| \):
  \[
  |z^2 - 3| \ge \Big| |z|^2 - 3 \Big| = |2^2 - 3| = |4 - 3| = 1
  \]
* For \( |z^2 - 2| \):
  \[
  |z^2 - 2| \ge \Big| |z|^2 - 2 \Big| = |2^2 - 2| = |4 - 2| = 2
  \]
**Step 3.** Combine the lower bounds:
\[
|z^4 - 5z^2 + 6| = |z^2 - 3||z^2 - 2| \ge 1 \times 2 = 2
\]
**Step 4.** Take the reciprocal:
\[
\frac{1}{|z^4 - 5z^2 + 6|} \le \frac{1}{2}
\]
\[
\boxed{\text{Upper bound} = \frac{1}{2}}
\]

---

## Problems 31 – 32

**Find a number \( z \) that satisfies the given equation.**

### Problem 31
\[
|z| - z = 2 + i
\]
Let \( z = x + iy \implies |z| = \sqrt{x^2 + y^2} \):
\[
\sqrt{x^2 + y^2} - (x + iy) = 2 + i
\]
\[
(\sqrt{x^2 + y^2} - x) - yi = 2 + i
\]
Equate real and imaginary parts:
1. **Imaginary parts:**
   \[
   -y = 1 \implies y = -1
   \]
2. **Real parts:**
   \[
   \sqrt{x^2 + y^2} - x = 2
   \]
Substitute \( y = -1 \) into the real equation:
\[
\sqrt{x^2 + 1} - x = 2 \implies \sqrt{x^2 + 1} = x + 2
\]
Square both sides (requiring \( x + 2 \ge 0 \implies x \ge -2 \)):
\[
x^2 + 1 = (x + 2)^2 = x^2 + 4x + 4 \implies 1 = 4x + 4 \implies 4x = -3 \implies x = -\frac{3}{4}
\]
Since \( x = -3/4 \ge -2 \), it is a valid solution.
\[
\boxed{z = -\frac{3}{4} - i}
\]

### Problem 32
\[
|z|^2 + 1 + 12i = 6z
\]
Let \( z = x + iy \implies |z|^2 = x^2 + y^2 \):
\[
(x^2 + y^2) + 1 + 12i = 6(x + iy) = 6x + 6yi
\]
Equate real and imaginary parts:
1. **Imaginary parts:**
   \[
   12 = 6y \implies y = 2
   \]
2. **Real parts:**
   \[
   x^2 + y^2 + 1 = 6x
   \]
Substitute \( y = 2 \) into the real equation:
\[
x^2 + 4 + 1 = 6x \implies x^2 - 6x + 5 = 0
\]
Factor the quadratic:
\[
(x - 1)(x - 5) = 0 \implies x = 1 \quad \text{or} \quad x = 5
\]
The two solutions are:
\[
\boxed{z = 1 + 2i \quad \text{and} \quad z = 5 + 2i}
\]

---

## Focus on Concepts (Problems 33 – 50)

### Problem 33
* **(b) Geometrical relationship of \( z \) and \( \bar{z} \):**
  The complex conjugate \( \bar{z} = a - ib \) is the reflection of \( z = a + ib \) across the **real axis** (\( x \)-axis).
* **(c) Geometrical relationship of \( z \) and \( z_1 = -a + ib \):**
  \( z_1 \) is the reflection of \( z \) across the **imaginary axis** (\( y \)-axis).

### Problem 34
* **(a) Geometrical relationship of \( z \) and \( -z \):**
  \( -z \) is the reflection of \( z \) **through the origin** (equivalently, a rotation of \( 180^\circ \) or \( \pi \) radians).
* **(b) Geometrical relationship of \( z \) and \( z^{-1} \):**
  Since \( z^{-1} = \frac{\bar{z}}{|z|^2} \), the vector points in the direction of the conjugate \( \bar{z} \), but its length is scaled by the factor \( \frac{1}{|z|^2} \).

### Problem 35
* **(b) Effect of multiplying by \( i \) and \( -i \):**
  * Multiplying a complex number by \( i \) corresponds to a **counterclockwise rotation of \( 90^\circ \) (\( \pi/2 \) rad)** about the origin.
  * Multiplying by \( -i \) corresponds to a **clockwise rotation of \( 90^\circ \) (\( \pi/2 \) rad)** about the origin.

### Problem 36
The only complex number with modulus 0 is \( z = 0 \) (since \( \sqrt{x^2+y^2}=0 \implies x=0, y=0 \)).

### Problem 37
The equality \( |z_1 + z_2| = |z_1| + |z_2| \) holds if and only if the vectors \( z_1 \) and \( z_2 \) lie on the same line and point in the **same direction** (i.e., they are positive collinear multiples: \( z_1 = c z_2 \) for some \( c \ge 0 \), or at least one is zero).

### Problem 38
Using complex distance notation, the circle of radius 5 centered at \( z_0 = 3 - 6i \) is:
\[
\boxed{|z - (3 - 6i)| = 5}
\]

### Problem 39
The set of points satisfying \( z = \cos\theta + i\sin\theta \) represents the **unit circle** centered at the origin.

### Problem 40
An ellipse with foci at \( z_1 = -2 + i \) and \( z_2 = 2 + i \) and major axis length 8 has the equation:
\[
\boxed{|z + 2 - i| + |z - 2 - i| = 8}
\]

### Problem 41
Express Cartesian equations in complex form using \( x = \frac{z+\bar{z}}{2} \) and \( y = \frac{z-\bar{z}}{2i} \):
* **(a) \( x=3 \):**
  \[
  \frac{z+\bar{z}}{2} = 3 \implies \boxed{z+\bar{z} = 6}
  \]
* **(b) \( y=10 \):**
  \[
  \frac{z-\bar{z}}{2i} = 10 \implies \boxed{z-\bar{z} = 20i}
  \]
* **(c) \( y=x \):**
  \[
  \frac{z-\bar{z}}{2i} = \frac{z+\bar{z}}{2} \implies z-\bar{z} = i(z+\bar{z}) \implies \boxed{(1-i)z = (1+i)\bar{z}}
  \]
* **(d) \( x+2y=8 \):**
  \[
  \frac{z+\bar{z}}{2} + 2\left(\frac{z-\bar{z}}{2i}\right) = 8 \implies z+\bar{z} - 2i(z-\bar{z}) = 16 \implies \boxed{(1-2i)z + (1+2i)\bar{z} = 16}
  \]

### Problem 42
The line segment connecting two distinct complex numbers \( z_1 \) and \( z_2 \) is:
\[
\boxed{z(t) = (1-t)z_1 + tz_2, \quad 0 \le t \le 1}
\]

### Problem 43
The equation \( z_3 - z_2 = k(z_2 - z_1) \) means the vector from \( z_2 \) to \( z_3 \) is a scalar multiple of the vector from \( z_1 \) to \( z_2 \). Geometrically, this indicates that the three points \( z_1, z_2, z_3 \) are **collinear** (lie on the same straight line).

### Problem 44
Using vector definitions, \( \operatorname{Re}(z_1\bar{z}_2) = x_1 x_2 + y_1 y_2 \). This is exactly the dot product of the vectors \( \vec{z}_1 \cdot \vec{z}_2 = 0 \), indicating they are **orthogonal** (perpendicular).

### Problem 45
By modulus properties:
\[
|w| = \left|\frac{\bar{z}}{z}\right| = \frac{|\bar{z}|}{|z|}
\]
Since \( |\bar{z}| = |z| \), their ratio is \( 1 \).

### Problem 46
Let \( z = x + iy \implies |z| = \sqrt{x^2+y^2} \). Since \( x^2 \le x^2 + y^2 \), taking square roots gives:
\[
|x| \le \sqrt{x^2+y^2} \implies |\operatorname{Re}(z)| \le |z|
\]
Similarly, \( y^2 \le x^2+y^2 \implies |y| \le \sqrt{x^2+y^2} \implies |\operatorname{Im}(z)| \le |z| \).

### Problem 47
* **(a) Show \( |z| = |-z| \):**
  \[
  |-z| = \sqrt{(-x)^2 + (-y)^2} = \sqrt{x^2 + y^2} = |z|
  \]
* **(b) Show \( |z| = |\bar{z}| \):**
  \[
  |\bar{z}| = \sqrt{x^2 + (-y)^2} = \sqrt{x^2 + y^2} = |z|
  \]

### Problem 48
**Prove the parallelogram law \( |z_1 + z_2|^2 + |z_1 - z_2|^2 = 2(|z_1|^2 + |z_2|^2) \).**

Using the identity \( |w|^2 = w\bar{w} \):
\[
|z_1 + z_2|^2 = (z_1 + z_2)(\bar{z}_1 + \bar{z}_2) = z_1\bar{z}_1 + z_1\bar{z}_2 + z_2\bar{z}_1 + z_2\bar{z}_2
\]
\[
|z_1 - z_2|^2 = (z_1 - z_2)(\bar{z}_1 - \bar{z}_2) = z_1\bar{z}_1 - z_1\bar{z}_2 - z_2\bar{z}_1 + z_2\bar{z}_2
\]
Summing both equations:
\[
|z_1 + z_2|^2 + |z_1 - z_2|^2 = 2 z_1\bar{z}_1 + 2 z_2\bar{z}_2 = 2|z_1|^2 + 2|z_2|^2 = 2(|z_1|^2 + |z_2|^2)
\]
which proves the parallelogram law.

### Problem 49
**Prove \( |z_1 z_2| = |z_1||z_2| \).**

Using the identity \( |w|^2 = w\bar{w} \):
\[
|z_1 z_2|^2 = (z_1 z_2)\overline{(z_1 z_2)} = (z_1 z_2)(\bar{z}_1 \bar{z}_2) = (z_1 \bar{z}_1)(z_2 \bar{z}_2) = |z_1|^2 |z_2|^2
\]
Taking the positive square root of both sides:
\[
|z_1 z_2| = |z_1||z_2|
\]

### Problem 50
**Analytical proof of the triangle inequality \( |z_1 + z_2| \le |z_1| + |z_2| \).**

* **(a) Explain why \( |z_1 + z_2|^2 = |z_1|^2 + 2\operatorname{Re}(z_1\bar{z}_2) + |z_2|^2 \):**
  \[
  |z_1 + z_2|^2 = (z_1 + z_2)(\bar{z}_1 + \bar{z}_2) = z_1\bar{z}_1 + (z_1\bar{z}_2 + \bar{z}_1 z_2) + z_2\bar{z}_2
  \]
  Using \( z\bar{z} = |z|^2 \) and \( w + \bar{w} = 2\operatorname{Re}(w) \) for \( w = z_1\bar{z}_2 \):
  \[
  |z_1 + z_2|^2 = |z_1|^2 + 2\operatorname{Re}(z_1\bar{z}_2) + |z_2|^2
  \]
* **(b) Explain why \( (|z_1| + |z_2|)^2 = |z_1|^2 + 2|z_1\bar{z}_2| + |z_2|^2 \):**
  \[
  (|z_1| + |z_2|)^2 = |z_1|^2 + 2|z_1||z_2| + |z_2|^2
  \]
  Since \( |z_2| = |\bar{z}_2| \) and \( |z_1||\bar{z}_2| = |z_1\bar{z}_2| \):
  \[
  (|z_1| + |z_2|)^2 = |z_1|^2 + 2|z_1\bar{z}_2| + |z_2|^2
  \]
* **(c) Derive the inequality:**
  By Problem 46, we know that for any complex number, the real part is less than or equal to its absolute value. Thus:
  \[
  \operatorname{Re}(z_1\bar{z}_2) \le |z_1\bar{z}_2|
  \]
  Substitute this into the result from part (a):
  \[
  |z_1 + z_2|^2 = |z_1|^2 + 2\operatorname{Re}(z_1\bar{z}_2) + |z_2|^2 \le |z_1|^2 + 2|z_1\bar{z}_2| + |z_2|^2 = (|z_1| + |z_2|)^2
  \]
  Taking positive square roots yields:
  \[
  |z_1 + z_2| \le |z_1| + |z_2|
  \]

---

<a name="section-1.3"></a>

### Problems 1 – 50 · Complete Solutions

---

> **Key Concepts of Polar Form**
>
> 1. **Polar Representation:** Any nonzero complex number \( z = x + iy \) can be written as:
>    \[
>    z = r(\cos\theta + i\sin\theta)
>    \]
>    where \( r = |z| = \sqrt{x^2 + y^2} \) and \( \theta \) is the argument of \( z \) (denoted \( \arg(z) \)).
> 2. **Principal Argument:** The unique value of \( \theta \) in the interval \( (-\pi, \pi] \) is the **principal argument**, denoted \( \operatorname{Arg}(z) \).
> 3. **Product and Quotient:**
>    * \( |z_1 z_2| = r_1 r_2 \quad \text{and} \quad \arg(z_1 z_2) = \arg(z_1) + \arg(z_2) \)
>    * \( \left| \frac{z_1}{z_2} \right| = \frac{r_1}{r_2} \quad \text{and} \quad \arg\left(\frac{z_1}{z_2}\right) = \arg(z_1) - \arg(z_2) \)
> 4. **De Moivre's Theorem:** For any integer \( n \):
>    \[
>    z^n = r^n (\cos(n\theta) + i\sin(n\theta))
>    \]

---

## Problems 1 – 10

**Write the given complex number in polar form, first using an argument \( \theta \ne \operatorname{Arg}(z) \) and then using \( \theta = \operatorname{Arg}(z) \).**

### Problem 1: \( z = 2 \)
* **Modulus:** \( r = |2| = 2 \)
* **Principal Argument:** \( \operatorname{Arg}(z) = 0 \) (lies on positive real axis)
* **Non-principal Argument:** \( \theta = 2\pi \)
* **Polar Forms:**
  * \( \theta \ne \operatorname{Arg}(z) \): \( \boxed{2(\cos(2\pi) + i\sin(2\pi))} \)
  * \( \theta = \operatorname{Arg}(z) \): \( \boxed{2(\cos(0) + i\sin(0))} \)

### Problem 2: \( z = -10 \)
* **Modulus:** \( r = |-10| = 10 \)
* **Principal Argument:** \( \operatorname{Arg}(z) = \pi \) (lies on negative real axis)
* **Non-principal Argument:** \( \theta = 3\pi \)
* **Polar Forms:**
  * \( \theta \ne \operatorname{Arg}(z) \): \( \boxed{10(\cos(3\pi) + i\sin(3\pi))} \)
  * \( \theta = \operatorname{Arg}(z) \): \( \boxed{10(\cos(\pi) + i\sin(\pi))} \)

### Problem 3: \( z = -3i \)
* **Modulus:** \( r = |-3i| = 3 \)
* **Principal Argument:** \( \operatorname{Arg}(z) = -\frac{\pi}{2} \) (lies on negative imaginary axis)
* **Non-principal Argument:** \( \theta = \frac{3\pi}{2} \)
* **Polar Forms:**
  * \( \theta \ne \operatorname{Arg}(z) \): \( \boxed{3\left(\cos\left(\frac{3\pi}{2}\right) + i\sin\left(\frac{3\pi}{2}\right)\right)} \)
  * \( \theta = \operatorname{Arg}(z) \): \( \boxed{3\left(\cos\left(-\frac{\pi}{2}\right) + i\sin\left(-\frac{\pi}{2}\right)\right)} \)

### Problem 4: \( z = 6i \)
* **Modulus:** \( r = |6i| = 6 \)
* **Principal Argument:** \( \operatorname{Arg}(z) = \frac{\pi}{2} \) (lies on positive imaginary axis)
* **Non-principal Argument:** \( \theta = \frac{5\pi}{2} \)
* **Polar Forms:**
  * \( \theta \ne \operatorname{Arg}(z) \): \( \boxed{6\left(\cos\left(\frac{5\pi}{2}\right) + i\sin\left(\frac{5\pi}{2}\right)\right)} \)
  * \( \theta = \operatorname{Arg}(z) \): \( \boxed{6\left(\cos\left(\frac{\pi}{2}\right) + i\sin\left(\frac{\pi}{2}\right)\right)} \)

### Problem 5: \( z = 1 + i \)
* **Modulus:** \( r = \sqrt{1^2 + 1^2} = \sqrt{2} \)
* **Principal Argument:** \( \operatorname{Arg}(z) = \frac{\pi}{4} \) (lies in Quadrant I, \( \tan\theta = 1 \))
* **Non-principal Argument:** \( \theta = \frac{9\pi}{4} \)
* **Polar Forms:**
  * \( \theta \ne \operatorname{Arg}(z) \): \( \boxed{\sqrt{2}\left(\cos\left(\frac{9\pi}{4}\right) + i\sin\left(\frac{9\pi}{4}\right)\right)} \)
  * \( \theta = \operatorname{Arg}(z) \): \( \boxed{\sqrt{2}\left(\cos\left(\frac{\pi}{4}\right) + i\sin\left(\frac{\pi}{4}\right)\right)} \)

### Problem 6: \( z = 5 - 5i \)
* **Modulus:** \( r = \sqrt{5^2 + (-5)^2} = 5\sqrt{2} \)
* **Principal Argument:** \( \operatorname{Arg}(z) = -\frac{\pi}{4} \) (lies in Quadrant IV, \( \tan\theta = -1 \))
* **Non-principal Argument:** \( \theta = \frac{7\pi}{4} \)
* **Polar Forms:**
  * \( \theta \ne \operatorname{Arg}(z) \): \( \boxed{5\sqrt{2}\left(\cos\left(\frac{7\pi}{4}\right) + i\sin\left(\frac{7\pi}{4}\right)\right)} \)
  * \( \theta = \operatorname{Arg}(z) \): \( \boxed{5\sqrt{2}\left(\cos\left(-\frac{\pi}{4}\right) + i\sin\left(-\frac{\pi}{4}\right)\right)} \)

### Problem 7: \( z = -\sqrt{3} + i \)
* **Modulus:** \( r = \sqrt{(-\sqrt{3})^2 + 1^2} = 2 \)
* **Principal Argument:** \( \operatorname{Arg}(z) = \pi - \frac{\pi}{6} = \frac{5\pi}{6} \) (Quadrant II, \( \tan\theta = -\frac{1}{\sqrt{3}} \))
* **Non-principal Argument:** \( \theta = -\frac{7\pi}{6} \)
* **Polar Forms:**
  * \( \theta \ne \operatorname{Arg}(z) \): \( \boxed{2\left(\cos\left(-\frac{7\pi}{6}\right) + i\sin\left(-\frac{7\pi}{6}\right)\right)} \)
  * \( \theta = \operatorname{Arg}(z) \): \( \boxed{2\left(\cos\left(\frac{5\pi}{6}\right) + i\sin\left(\frac{5\pi}{6}\right)\right)} \)

### Problem 8: \( z = -2 - 2\sqrt{3}i \)
* **Modulus:** \( r = \sqrt{(-2)^2 + (-2\sqrt{3})^2} = \sqrt{4 + 12} = 4 \)
* **Principal Argument:** \( \operatorname{Arg}(z) = -\pi + \frac{\pi}{3} = -\frac{2\pi}{3} \) (Quadrant III, \( \tan\theta = \sqrt{3} \))
* **Non-principal Argument:** \( \theta = \frac{4\pi}{3} \)
* **Polar Forms:**
  * \( \theta \ne \operatorname{Arg}(z) \): \( \boxed{4\left(\cos\left(\frac{4\pi}{3}\right) + i\sin\left(\frac{4\pi}{3}\right)\right)} \)
  * \( \theta = \operatorname{Arg}(z) \): \( \boxed{4\left(\cos\left(-\frac{2\pi}{3}\right) + i\sin\left(-\frac{2\pi}{3}\right)\right)} \)

### Problem 9: \( z = \frac{3}{-1 + i} \)
* **Simplify:** \( z = \frac{3(-1-i)}{1+1} = -\frac{3}{2} - \frac{3}{2}i \)
* **Modulus:** \( r = \sqrt{\frac{9}{4} + \frac{9}{4}} = \frac{3\sqrt{2}}{2} \)
* **Principal Argument:** \( \operatorname{Arg}(z) = -\pi + \frac{\pi}{4} = -\frac{3\pi}{4} \) (Quadrant III, \( \tan\theta = 1 \))
* **Non-principal Argument:** \( \theta = \frac{5\pi}{4} \)
* **Polar Forms:**
  * \( \theta \ne \operatorname{Arg}(z) \): \( \boxed{\frac{3\sqrt{2}}{2}\left(\cos\left(\frac{5\pi}{4}\right) + i\sin\left(\frac{5\pi}{4}\right)\right)} \)
  * \( \theta = \operatorname{Arg}(z) \): \( \boxed{\frac{3\sqrt{2}}{2}\left(\cos\left(-\frac{3\pi}{4}\right) + i\sin\left(-\frac{3\pi}{4}\right)\right)} \)

### Problem 10: \( z = \frac{12}{\sqrt{3} + i} \)
* **Simplify:** \( z = \frac{12(\sqrt{3}-i)}{3+1} = 3\sqrt{3} - 3i \)
* **Modulus:** \( r = \sqrt{27 + 9} = 6 \)
* **Principal Argument:** \( \operatorname{Arg}(z) = -\frac{\pi}{6} \) (Quadrant IV, \( \tan\theta = -\frac{1}{\sqrt{3}} \))
* **Non-principal Argument:** \( \theta = \frac{11\pi}{6} \)
* **Polar Forms:**
  * \( \theta \ne \operatorname{Arg}(z) \): \( \boxed{6\left(\cos\left(\frac{11\pi}{6}\right) + i\sin\left(\frac{11\pi}{6}\right)\right)} \)
  * \( \theta = \operatorname{Arg}(z) \): \( \boxed{6\left(\cos\left(-\frac{\pi}{6}\right) + i\sin\left(-\frac{\pi}{6}\right)\right)} \)

---

## Problems 11 – 12

**Use a calculator to write the given complex number in polar form first using \( \theta \ne \operatorname{Arg}(z) \) and then using \( \theta = \operatorname{Arg}(z) \).**

### Problem 11: \( z = -\sqrt{2} + \sqrt{7}i \)
* **Modulus:** \( r = \sqrt{2 + 7} = 3 \)
* **Principal Argument:** \( \operatorname{Arg}(z) = \pi - \arctan\left(\frac{\sqrt{7}}{\sqrt{2}}\right) \approx 3.14159 - 1.07991 = 2.06168 \) rad
* **Non-principal Argument:** \( \theta \approx 2.06168 + 2\pi = 8.34487 \) rad
* **Polar Forms:**
  * \( \theta \ne \operatorname{Arg}(z) \): \( \boxed{3(\cos(8.34487) + i\sin(8.34487))} \)
  * \( \theta = \operatorname{Arg}(z) \): \( \boxed{3(\cos(2.06168) + i\sin(2.06168))} \)

### Problem 12: \( z = -12 - 5i \)
* **Modulus:** \( r = \sqrt{144 + 25} = 13 \)
* **Principal Argument:** \( \operatorname{Arg}(z) = -\pi + \arctan(5/12) \approx -3.14159 + 0.39479 = -2.74680 \) rad
* **Non-principal Argument:** \( \theta \approx -2.74680 + 2\pi = 3.53638 \) rad
* **Polar Forms:**
  * \( \theta \ne \operatorname{Arg}(z) \): \( \boxed{13(\cos(3.53638) + i\sin(3.53638))} \)
  * \( \theta = \operatorname{Arg}(z) \): \( \boxed{13(\cos(-2.74680) + i\sin(-2.74680))} \)

---

## Problems 13 – 14

**Write the complex number whose polar coordinates \( (r, \theta) \) are given in the form \( a + ib \).**

### Problem 13: \( (4, -5\pi/3) \)
* \( x = r\cos\theta = 4\cos(-5\pi/3) = 4\cos(5\pi/3) = 4(1/2) = 2 \)
* \( y = r\sin\theta = 4\sin(-5\pi/3) = -4\sin(5\pi/3) = -4(-\sqrt{3}/2) = 2\sqrt{3} \)
* \[
  \boxed{z = 2 + 2\sqrt{3}i}
  \]

### Problem 14: \( (2, 2) \)
* \( x = r\cos\theta = 2\cos(2) \approx 2(-0.41615) = -0.83230 \)
* \( y = r\sin\theta = 2\sin(2) \approx 2(0.90930) = 1.81860 \)
* \[
  \boxed{z \approx -0.83230 + 1.81860i}
  \]

---

## Problems 15 – 18

**Write the complex number whose polar form is given in the form \( a + ib \).**

### Problem 15: \( z = 5\left(\cos\frac{7\pi}{6} + i\sin\frac{7\pi}{6}\right) \)
* \( \cos(7\pi/6) = -\frac{\sqrt{3}}{2}, \quad \sin(7\pi/6) = -\frac{1}{2} \)
* \[
  \boxed{z = -\frac{5\sqrt{3}}{2} - \frac{5}{2}i}
  \]

### Problem 16: \( z = 8\sqrt{2}\left(\cos\frac{11\pi}{4} + i\sin\frac{11\pi}{4}\right) \)
* \( 11\pi/4 = 2\pi + 3\pi/4 \implies \cos(11\pi/4) = -\frac{1}{\sqrt{2}}, \quad \sin(11\pi/4) = \frac{1}{\sqrt{2}} \)
* \[
  z = 8\sqrt{2}\left(-\frac{1}{\sqrt{2}} + i \frac{1}{\sqrt{2}}\right) = -8 + 8i
  \]
* \[
  \boxed{z = -8 + 8i}
  \]

### Problem 17: \( z = 6\left(\cos\frac{\pi}{8} + i\sin\frac{\pi}{8}\right) \)
* Use half-angle formulas:
  * \( \cos(\pi/8) = \sqrt{\frac{1 + \cos(\pi/4)}{2}} = \frac{\sqrt{2+\sqrt{2}}}{2} \)
  * \( \sin(\pi/8) = \sqrt{\frac{1 - \cos(\pi/4)}{2}} = \frac{\sqrt{2-\sqrt{2}}}{2} \)
* \[
  z = 6\left(\frac{\sqrt{2+\sqrt{2}}}{2} + i \frac{\sqrt{2-\sqrt{2}}}{2}\right) = 3\sqrt{2+\sqrt{2}} + 3i\sqrt{2-\sqrt{2}}
  \]
* \[
  \boxed{z \approx 5.54328 + 2.29610i}
  \]

### Problem 18: \( z = 10\left(\cos\frac{\pi}{5} + i\sin\frac{\pi}{5}\right) \)
* \( \cos(\pi/5) = \cos(36^\circ) = \frac{1+\sqrt{5}}{4} \)
* \( \sin(\pi/5) = \sin(36^\circ) = \frac{\sqrt{10-2\sqrt{5}}}{4} \)
* \[
  z = 10\left(\frac{1+\sqrt{5}}{4} + i\frac{\sqrt{10-2\sqrt{5}}}{4}\right) = \frac{5+5\sqrt{5}}{2} + \frac{5\sqrt{10-2\sqrt{5}}}{2}i
  \]
* \[
  \boxed{z \approx 8.09017 + 5.87785i}
  \]

---

## Problems 19 – 20

**Use the product and quotient properties to find \( z_1z_2 \) and \( z_1/z_2 \) in \( a + ib \) form.**

### Problem 19
\[
z_1 = 2\left(\cos\frac{\pi}{8} + i\sin\frac{\pi}{8}\right), \quad z_2 = 4\left(\cos\frac{3\pi}{8} + i\sin\frac{3\pi}{8}\right)
\]
* **Product:**
  \[
  z_1z_2 = (2 \times 4)\left(\cos\left(\frac{\pi}{8} + \frac{3\pi}{8}\right) + i\sin\left(\frac{\pi}{8} + \frac{3\pi}{8}\right)\right) = 8\left(\cos\frac{\pi}{2} + i\sin\frac{\pi}{2}\right) = 8i
  \]
* **Quotient:**
  \[
  \frac{z_1}{z_2} = \frac{2}{4}\left(\cos\left(\frac{\pi}{8} - \frac{3\pi}{8}\right) + i\sin\left(\frac{\pi}{8} - \frac{3\pi}{8}\right)\right) = \frac{1}{2}\left(\cos\left(-\frac{\pi}{4}\right) + i\sin\left(-\frac{\pi}{4}\right)\right)
  \]
  \[
  = \frac{1}{2}\left(\frac{\sqrt{2}}{2} - \frac{\sqrt{2}}{2}i\right) = \frac{\sqrt{2}}{4} - \frac{\sqrt{2}}{4}i
  \]
* \[
  \boxed{z_1z_2 = 8i, \quad \frac{z_1}{z_2} = \frac{\sqrt{2}}{4} - \frac{\sqrt{2}}{4}i}
  \]

### Problem 20
\[
z_1 = \sqrt{2}\left(\cos\frac{\pi}{4} + i\sin\frac{\pi}{4}\right), \quad z_2 = \sqrt{3}\left(\cos\frac{\pi}{12} + i\sin\frac{\pi}{12}\right)
\]
* **Product:**
  \[
  z_1z_2 = \sqrt{6}\left(\cos\left(\frac{\pi}{4} + \frac{\pi}{12}\right) + i\sin\left(\frac{\pi}{4} + \frac{\pi}{12}\right)\right) = \sqrt{6}\left(\cos\frac{\pi}{3} + i\sin\frac{\pi}{3}\right)
  \]
  \[
  = \sqrt{6}\left(\frac{1}{2} + i \frac{\sqrt{3}}{2}\right) = \frac{\sqrt{6}}{2} + \frac{3\sqrt{2}}{2}i
  \]
* **Quotient:**
  \[
  \frac{z_1}{z_2} = \frac{\sqrt{2}}{\sqrt{3}}\left(\cos\left(\frac{\pi}{4} - \frac{\pi}{12}\right) + i\sin\left(\frac{\pi}{4} - \frac{\pi}{12}\right)\right) = \frac{\sqrt{6}}{3}\left(\cos\frac{\pi}{6} + i\sin\frac{\pi}{6}\right)
  \]
  \[
  = \frac{\sqrt{6}}{3}\left(\frac{\sqrt{3}}{2} + i \frac{1}{2}\right) = \frac{\sqrt{18}}{6} + i \frac{\sqrt{6}}{6} = \frac{\sqrt{2}}{2} + \frac{\sqrt{6}}{6}i
  \]
* \[
  \boxed{z_1z_2 = \frac{\sqrt{6}}{2} + \frac{3\sqrt{2}}{2}i, \quad \frac{z_1}{z_2} = \frac{\sqrt{2}}{2} + \frac{\sqrt{6}}{6}i}
  \]

---

## Problems 21 – 24

**Write each complex number in polar form first. Then compute the product/quotient in polar form. Finally, write the result in \( a + ib \) form.**

### Problem 21: \( (3 - 3i)(5 + 5\sqrt{3}i) \)
* Let \( z_1 = 3 - 3i \implies r_1 = 3\sqrt{2}, \, \theta_1 = -\frac{\pi}{4} \)
* Let \( z_2 = 5 + 5\sqrt{3}i \implies r_2 = 10, \, \theta_2 = \frac{\pi}{3} \)
* **Polar form of product:**
  \[
  z_1z_2 = (3\sqrt{2} \times 10)\left(\cos\left(-\frac{\pi}{4} + \frac{\pi}{3}\right) + i\sin\left(-\frac{\pi}{4} + \frac{\pi}{3}\right)\right) = 30\sqrt{2}\left(\cos\frac{\pi}{12} + i\sin\frac{\pi}{12}\right)
  \]
* **Cartesian form:**
  \[
  z_1z_2 = 30\sqrt{2}\left(\frac{\sqrt{6}+\sqrt{2}}{4} + i \frac{\sqrt{6}-\sqrt{2}}{4}\right) = (15\sqrt{3} + 15) + (15\sqrt{3} - 15)i
  \]
* \[
  \boxed{z_1z_2 = (15\sqrt{3} + 15) + (15\sqrt{3} - 15)i}
  \]

### Problem 22: \( (4 + 4i)(-1 + i) \)
* Let \( z_1 = 4 + 4i \implies r_1 = 4\sqrt{2}, \, \theta_1 = \frac{\pi}{4} \)
* Let \( z_2 = -1 + i \implies r_2 = \sqrt{2}, \, \theta_2 = \frac{3\pi}{4} \)
* **Polar form of product:**
  \[
  z_1z_2 = (4\sqrt{2} \times \sqrt{2})\left(\cos\left(\frac{\pi}{4} + \frac{3\pi}{4}\right) + i\sin\left(\frac{\pi}{4} + \frac{3\pi}{4}\right)\right) = 8(\cos\pi + i\sin\pi)
  \]
* **Cartesian form:**
  \[
  z_1z_2 = 8(-1 + 0i) = -8
  \]
* \[
  \boxed{z_1z_2 = -8}
  \]

### Problem 23: \( \frac{-i}{1 + i} \)
* Let \( z_1 = -i \implies r_1 = 1, \, \theta_1 = -\frac{\pi}{2} \)
* Let \( z_2 = 1 + i \implies r_2 = \sqrt{2}, \, \theta_2 = \frac{\pi}{4} \)
* **Polar form of quotient:**
  \[
  \frac{z_1}{z_2} = \frac{1}{\sqrt{2}}\left(\cos\left(-\frac{\pi}{2} - \frac{\pi}{4}\right) + i\sin\left(-\frac{\pi}{2} - \frac{\pi}{4}\right)\right) = \frac{\sqrt{2}}{2}\left(\cos\left(-\frac{3\pi}{4}\right) + i\sin\left(-\frac{3\pi}{4}\right)\right)
  \]
* **Cartesian form:**
  \[
  \frac{z_1}{z_2} = \frac{\sqrt{2}}{2}\left(-\frac{\sqrt{2}}{2} - i \frac{\sqrt{2}}{2}\right) = -\frac{1}{2} - \frac{1}{2}i
  \]
* \[
  \boxed{\frac{z_1}{z_2} = -\frac{1}{2} - \frac{1}{2}i}
  \]

### Problem 24: \( \frac{\sqrt{2} + \sqrt{6}i}{-1 + \sqrt{3}i} \)
* Let \( z_1 = \sqrt{2} + \sqrt{6}i \implies r_1 = 2\sqrt{2}, \, \theta_1 = \frac{\pi}{3} \)
* Let \( z_2 = -1 + \sqrt{3}i \implies r_2 = 2, \, \theta_2 = \frac{2\pi}{3} \)
* **Polar form of quotient:**
  \[
  \frac{z_1}{z_2} = \frac{2\sqrt{2}}{2}\left(\cos\left(\frac{\pi}{3} - \frac{2\pi}{3}\right) + i\sin\left(\frac{\pi}{3} - \frac{2\pi}{3}\right)\right) = \sqrt{2}\left(\cos\left(-\frac{\pi}{3}\right) + i\sin\left(-\frac{\pi}{3}\right)\right)
  \]
* **Cartesian form:**
  \[
  \frac{z_1}{z_2} = \sqrt{2}\left(\frac{1}{2} - i \frac{\sqrt{3}}{2}\right) = \frac{\sqrt{2}}{2} - \frac{\sqrt{6}}{2}i
  \]
* \[
  \boxed{\frac{z_1}{z_2} = \frac{\sqrt{2}}{2} - \frac{\sqrt{6}}{2}i}
  \]

---

## Problems 25 – 30

**Use De Moivre's Theorem to compute the indicated powers.**

### Problem 25: \( (1 + \sqrt{3}i)^9 \)
* Polar form of \( 1 + \sqrt{3}i \): \( r = 2, \, \theta = \frac{\pi}{3} \)
* Compute power:
  \[
  z^9 = 2^9\left(\cos\left(9 \times \frac{\pi}{3}\right) + i\sin\left(9 \times \frac{\pi}{3}\right)\right) = 512(\cos(3\pi) + i\sin(3\pi)) = 512(-1) = -512
  \]
* \[
  \boxed{-512}
  \]

### Problem 26: \( (2 - 2i)^5 \)
* Polar form of \( 2 - 2i \): \( r = 2\sqrt{2}, \, \theta = -\frac{\pi}{4} \)
* Compute power:
  \[
  z^5 = (2\sqrt{2})^5\left(\cos\left(-\frac{5\pi}{4}\right) + i\sin\left(-\frac{5\pi}{4}\right)\right) = 128\sqrt{2}\left(-\frac{\sqrt{2}}{2} + i \frac{\sqrt{2}}{2}\right) = -128 + 128i
  \]
* \[
  \boxed{-128 + 128i}
  \]

### Problem 27: \( \left(\frac{1}{2} + \frac{1}{2}i\right)^{10} \)
* Polar form: \( r = \frac{\sqrt{2}}{2}, \, \theta = \frac{\pi}{4} \)
* Compute power:
  \[
  z^{10} = \left(\frac{\sqrt{2}}{2}\right)^{10}\left(\cos\frac{10\pi}{4} + i\sin\frac{10\pi}{4}\right) = \frac{32}{1024}\left(\cos\frac{5\pi}{2} + i\sin\frac{5\pi}{2}\right) = \frac{1}{32}(0 + i) = \frac{1}{32}i
  \]
* \[
  \boxed{\frac{1}{32}i}
  \]

### Problem 28: \( (-\sqrt{2} + \sqrt{6}i)^4 \)
* Polar form of \( -\sqrt{2} + \sqrt{6}i \): \( r = \sqrt{2+6} = 2\sqrt{2}, \, \theta = \frac{2\pi}{3} \) (Quadrant II)
* Compute power:
  \[
  z^4 = (2\sqrt{2})^4\left(\cos\frac{8\pi}{3} + i\sin\frac{8\pi}{3}\right) = 64\left(\cos\frac{2\pi}{3} + i\sin\frac{2\pi}{3}\right) = 64\left(-\frac{1}{2} + i \frac{\sqrt{3}}{2}\right) = -32 + 32\sqrt{3}i
  \]
* \[
  \boxed{-32 + 32\sqrt{3}i}
  \]

### Problem 29: \( \left[ \sqrt{2}\left(\cos\frac{\pi}{8} + i\sin\frac{\pi}{8}\right) \right]^{12} \)
* Compute power:
  \[
  z^{12} = (\sqrt{2})^{12}\left(\cos\frac{12\pi}{8} + i\sin\frac{12\pi}{8}\right) = 64\left(\cos\frac{3\pi}{2} + i\sin\frac{3\pi}{2}\right) = 64(0 - i) = -64i
  \]
* \[
  \boxed{-64i}
  \]

### Problem 30: \( \left[ \sqrt{3}\left(\cos\frac{2\pi}{9} + i\sin\frac{2\pi}{9}\right) \right]^6 \)
* Compute power:
  \[
  z^6 = (\sqrt{3})^6\left(\cos\frac{12\pi}{9} + i\sin\frac{12\pi}{9}\right) = 27\left(\cos\frac{4\pi}{3} + i\sin\frac{4\pi}{3}\right) = 27\left(-\frac{1}{2} - i \frac{\sqrt{3}}{2}\right) = -\frac{27}{2} - \frac{27\sqrt{3}}{2}i
  \]
* \[
  \boxed{-\frac{27}{2} - \frac{27\sqrt{3}}{2}i}
  \]

---

## Problems 31 – 32

**Simplify the expression and write the result in both polar and Cartesian forms.**

### Problem 31
\[
w = \frac{\left(\cos\frac{\pi}{9} + i\sin\frac{\pi}{9}\right)^{12}}{\left[2\left(\cos\frac{\pi}{6} + i\sin\frac{\pi}{6}\right)\right]^5}
\]
* **Numerator:**
  \[
  N = \cos\frac{12\pi}{9} + i\sin\frac{12\pi}{9} = \cos\frac{4\pi}{3} + i\sin\frac{4\pi}{3} = e^{i \frac{4\pi}{3}}
  \]
* **Denominator:**
  \[
  D = 2^5 \left(\cos\frac{5\pi}{6} + i\sin\frac{5\pi}{6}\right) = 32 e^{i \frac{5\pi}{6}}
  \]
* **Division:**
  \[
  w = \frac{1}{32} e^{i \left(\frac{4\pi}{3} - \frac{5\pi}{6}\right)} = \frac{1}{32} e^{i \left(\frac{8\pi}{6} - \frac{5\pi}{6}\right)} = \frac{1}{32} e^{i \frac{\pi}{2}}
  \]
* \[
  \boxed{\text{Polar: } \frac{1}{32}\left(\cos\frac{\pi}{2} + i\sin\frac{\pi}{2}\right), \quad \text{Cartesian: } \frac{1}{32}i}
  \]

### Problem 32
\[
w = \frac{\left[8\left(\cos\frac{3\pi}{8} + i\sin\frac{3\pi}{8}\right)\right]^3}{\left[2\left(\cos\frac{\pi}{16} + i\sin\frac{\pi}{16}\right)\right]^{10}}
\]
* **Numerator:**
  \[
  N = 8^3 e^{i \frac{9\pi}{8}} = 512 e^{i \frac{9\pi}{8}}
  \]
* **Denominator:**
  \[
  D = 2^{10} e^{i \frac{10\pi}{16}} = 1024 e^{i \frac{5\pi}{8}}
  \]
* **Division:**
  \[
  w = \frac{512}{1024} e^{i \left(\frac{9\pi}{8} - \frac{5\pi}{8}\right)} = \frac{1}{2} e^{i \frac{4\pi}{8}} = \frac{1}{2} e^{i \frac{\pi}{2}}
  \]
* \[
  \boxed{\text{Polar: } \frac{1}{2}\left(\cos\frac{\pi}{2} + i\sin\frac{\pi}{2}\right), \quad \text{Cartesian: } \frac{1}{2}i}
  \]

---

## Problems 33 – 34

**Use De Moivre's Theorem to establish trigonometric identities.**

### Problem 33
**Establish identities for \( \cos(2\theta) \) and \( \sin(2\theta) \).**

By De Moivre's Theorem for \( n=2 \):
\[
(\cos\theta + i\sin\theta)^2 = \cos(2\theta) + i\sin(2\theta)
\]
Expand the left side algebraically:
\[
\cos^2\theta + 2i\sin\theta\cos\theta + i^2\sin^2\theta = (\cos^2\theta - \sin^2\theta) + (2\sin\theta\cos\theta)i
\]
Equating the real and imaginary parts:
* \[
  \boxed{\cos(2\theta) = \cos^2\theta - \sin^2\theta}
  \]
* \[
  \boxed{\sin(2\theta) = 2\sin\theta\cos\theta}
  \]

### Problem 34
**Establish identities for \( \cos(3\theta) \) and \( \sin(3\theta) \).**

By De Moivre's Theorem for \( n=3 \):
\[
(\cos\theta + i\sin\theta)^3 = \cos(3\theta) + i\sin(3\theta)
\]
Expand the left side using the binomial expansion \( (A + B)^3 = A^3 + 3A^2B + 3AB^2 + B^3 \):
\[
(\cos\theta + i\sin\theta)^3 = \cos^3\theta + 3i\cos^2\theta\sin\theta + 3i^2\cos\theta\sin^2\theta + i^3\sin^3\theta
\]
Recall \( i^2 = -1 \) and \( i^3 = -i \):
\[
= (\cos^3\theta - 3\cos\theta\sin^2\theta) + (3\cos^2\theta\sin\theta - \sin^3\theta)i
\]
Substitute \( \sin^2\theta = 1 - \cos^2\theta \) in the real part and \( \cos^2\theta = 1 - \sin^2\theta \) in the imaginary part:
* **Real Part:**
  \[
  \cos^3\theta - 3\cos\theta(1 - \cos^2\theta) = 4\cos^3\theta - 3\cos\theta
  \]
* **Imaginary Part:**
  \[
  3(1 - \sin^2\theta)\sin\theta - \sin^3\theta = 3\sin\theta - 4\sin^3\theta
  \]
Equating real and imaginary parts:
* \[
  \boxed{\cos(3\theta) = 4\cos^3\theta - 3\cos\theta}
  \]
* \[
  \boxed{\sin(3\theta) = 3\sin\theta - 4\sin^3\theta}
  \]

---

## Problems 35 – 36

**Find a positive integer \( n \) for which the equality holds.**

### Problem 35
\[
\left(\frac{\sqrt{3}}{2} + \frac{1}{2}i\right)^n = -1
\]
**Step 1.** Write the base in polar form:
\[
z = \frac{\sqrt{3}}{2} + \frac{1}{2}i = \cos\frac{\pi}{6} + i\sin\frac{\pi}{6} = e^{i \frac{\pi}{6}}
\]
**Step 2.** Raise \( z \) to the power \( n \):
\[
z^n = e^{i \frac{n\pi}{6}}
\]
**Step 3.** Set equal to \( -1 \). The polar representation of \( -1 \) is \( e^{i\pi} \):
\[
e^{i \frac{n\pi}{6}} = e^{i\pi} \implies \frac{n\pi}{6} = \pi + 2k\pi, \quad k \in \mathbb{Z}
\]
\[
n = 6(2k + 1)
\]
For the smallest positive integer \( n \) (setting \( k = 0 \)):
\[
\boxed{n = 6}
\]

### Problem 36
\[
\left(-\frac{\sqrt{2}}{2} + \frac{\sqrt{2}}{2}i\right)^n = 1
\]
**Step 1.** Write the base in polar form:
\[
z = -\frac{\sqrt{2}}{2} + \frac{\sqrt{2}}{2}i = \cos\frac{3\pi}{4} + i\sin\frac{3\pi}{4} = e^{i \frac{3\pi}{4}}
\]
**Step 2.** Raise \( z \) to the power \( n \):
\[
z^n = e^{i \frac{3n\pi}{4}}
\]
**Step 3.** Set equal to \( 1 \). The polar representation of \( 1 \) is \( e^{i 2k\pi} \):
\[
e^{i \frac{3n\pi}{4}} = e^{i 2k\pi} \implies \frac{3n}{4} = 2k \implies n = \frac{8k}{3}
\]
Since \( n \) must be an integer, \( k \) must be a multiple of 3. For the smallest positive integer \( n \), choose \( k = 3 \):
\[
\boxed{n = 8}
\]

---

## Problems 37 – 38

**Verify the properties of arguments using \( z_1 = -1 \) and \( z_2 = 5i \).**

### Problem 37
**Verify that: (a) \( \operatorname{Arg}(z_1z_2) \ne \operatorname{Arg}(z_1) + \operatorname{Arg}(z_2) \) and (b) \( \operatorname{Arg}(z_1/z_2) \ne \operatorname{Arg}(z_1) - \operatorname{Arg}(z_2) \) (Note: part b is equal in this specific case, demonstrating a textbook printing limitation).**

* **Arguments of components:**
  * \( \operatorname{Arg}(z_1) = \operatorname{Arg}(-1) = \pi \)
  * \( \operatorname{Arg}(z_2) = \operatorname{Arg}(5i) = \frac{\pi}{2} \)
* **Part (a):**
  * \( z_1z_2 = -5i \implies \operatorname{Arg}(z_1z_2) = -\frac{\pi}{2} \)
  * \( \operatorname{Arg}(z_1) + \operatorname{Arg}(z_2) = \pi + \frac{\pi}{2} = \frac{3\pi}{2} \)
  * Since \( -\frac{\pi}{2} \ne \frac{3\pi}{2} \), part (a) is verified.
* **Part (b):**
  * \( \frac{z_1}{z_2} = \frac{-1}{5i} = \frac{i}{5} \implies \operatorname{Arg}(z_1/z_2) = \frac{\pi}{2} \)
  * \( \operatorname{Arg}(z_1) - \operatorname{Arg}(z_2) = \pi - \frac{\pi}{2} = \frac{\pi}{2} \)
  * *Pedagogical Note:* For this specific choice of \( z_1 \) and \( z_2 \), \( \operatorname{Arg}(z_1/z_2) \) is actually **equal** to \( \operatorname{Arg}(z_1) - \operatorname{Arg}(z_2) \) because the result \( \frac{\pi}{2} \) falls within the principal range \( (-\pi, \pi] \). The inequality holds for other numbers where the difference falls outside the principal range (e.g. \( z_1 = -1, z_2 = -5i \)).

### Problem 38
**Verify that: (a) \( \arg(z_1z_2) = \arg(z_1) + \arg(z_2) \) and (b) \( \arg(z_1/z_2) = \arg(z_1) - \arg(z_2) \).**

* Using the arguments modulo \( 2\pi \):
  * \( \arg(z_1) = \pi + 2k_1\pi \)
  * \( \arg(z_2) = \frac{\pi}{2} + 2k_2\pi \)
* **Part (a):**
  * \( \arg(z_1z_2) = -\frac{\pi}{2} + 2k_3\pi \)
  * \( \arg(z_1) + \arg(z_2) = \frac{3\pi}{2} + 2(k_1+k_2)\pi \)
  * Since \( -\frac{\pi}{2} \equiv \frac{3\pi}{2} \pmod{2\pi} \), the sets of values are identical.
* **Part (b):**
  * \( \arg(z_1/z_2) = \frac{\pi}{2} + 2k_3\pi \)
  * \( \arg(z_1) - \arg(z_2) = \frac{\pi}{2} + 2(k_1-k_2)\pi \)
  * The sets of values are identical.

---

## Focus on Concepts (Problems 39 – 50)

### Problem 39
Multiplying \( z = r(\cos\theta + i\sin\theta) \) by \( z_1 = \cos\alpha + i\sin\alpha \) gives:
\[
z z_1 = r(\cos(\theta + \alpha) + i\sin(\theta + \alpha))
\]
Geometrically, this represents a **pure rotation** of the vector \( z \) about the origin:
* If \( \alpha > 0 \), the vector is rotated **counterclockwise** by \( \alpha \) radians.
* If \( \alpha < 0 \), the vector is rotated **clockwise** by \( |\alpha| \) radians.
The length of the vector remains unchanged since \( |z_1| = 1 \).

### Problem 40
Let \( z = \cos\theta + i\sin\theta = e^{i\theta} \). Then \( \bar{z} = e^{-i\theta} \). By De Moivre's Theorem:
\[
z^n = e^{in\theta} = \cos(n\theta) + i\sin(n\theta)
\]
\[
\bar{z}^n = e^{-in\theta} = \cos(n\theta) - i\sin(n\theta)
\]
* **Sum:**
  \[
  \boxed{z^n + \bar{z}^n = 2\cos(n\theta)}
  \]
* **Difference:**
  \[
  \boxed{z^n - \bar{z}^n = 2i\sin(n\theta)}
  \]

### Problem 41
For any nonzero complex number \( z = r e^{i\theta} \):
\[
\frac{1}{z} = \frac{1}{r} e^{-i\theta}
\]
The argument of \( 1/z \) is \( -\theta \). Thus:
\[
\boxed{\arg\left(\frac{1}{z}\right) = -\arg(z)}
\]

### Problem 42
The equality \( \operatorname{Arg}(z_1z_2) = \operatorname{Arg}(z_1) + \operatorname{Arg}(z_2) \) holds if and only if the sum of the principal arguments lies in the principal interval:
\[
\boxed{-\pi < \operatorname{Arg}(z_1) + \operatorname{Arg}(z_2) \le \pi}
\]

### Problem 43
If \( \arg(z_1) = \arg(z_2) \), the vectors \( z_1 \) and \( z_2 \) lie on the same ray emanating from the origin. Thus:
\[
\boxed{z_1 = k z_2 \quad \text{for some real number } k > 0}
\]

### Problem 44
The set of points satisfying \( \arg(z) = \pi/4 \) is the **ray emanating from the origin (excluding the origin itself) making an angle of \( 45^\circ \) with the positive real axis**. In Cartesian form, this is:
\[
\boxed{y = x \quad \text{for } x > 0}
\]

### Problem 45
* **Student A** is correct if arguments are treated as sets or modulo \( 2\pi \), because:
  \[
  \arg(\bar{z}) = -\arg(z) \pmod{2\pi}
  \]
* **Student B**'s counterexample: \( z = i \implies \bar{z} = -i \). If we select \( \arg(i) = \pi/2 \) and \( \arg(-i) = 3\pi/2 \), then \( 3\pi/2 \ne -\pi/2 \) numerically. However, \( 3\pi/2 \equiv -\pi/2 \pmod{2\pi} \). Student B's objection only arises from choosing different branch representatives of the multi-valued argument.
* **For Principal Arguments:** \( \operatorname{Arg}(\bar{z}) = -\operatorname{Arg}(z) \) holds true for all \( z \) except when \( z \) lies on the negative real axis (where \( \operatorname{Arg}(z) = \pi \) and \( \operatorname{Arg}(\bar{z}) = \pi \ne -\pi \)).

### Problem 46
Let the points \( 0, 1, z_1, z_2, z_1z_2 \) be \( O, A, B, C, D \).
The product \( z_1z_2 \) scales \( z_1 \) by the modulus \( |z_2| \) and rotates it by \( \arg(z_2) \). This geometric relationship implies that:
\[
\boxed{\text{Triangle } OAB \text{ is similar to Triangle } OCD \quad (\triangle OAB \sim \triangle OCD)}
\]
where the ratio of corresponding sides is \( |z_2| \).

### Problem 47
If \( r_1 e^{i\theta_1} = r_2 e^{i\theta_2} \), then:
* \[
  \boxed{r_1 = r_2}
  \]
* \[
  \boxed{\theta_1 = \theta_2 + 2k\pi \quad \text{for } k \in \mathbb{Z}}
  \]

### Problem 48
Given \( z_1 \) is in Quadrant I, its argument satisfies \( \theta_1 \in (0, \pi/2) \).
* **(a) \( z_2 = \frac{1}{2} + \frac{\sqrt{3}}{2}i = e^{i\pi/3} \):**
  The argument of the product is \( \theta = \theta_1 + \pi/3 \in (\pi/3, 5\pi/6) \).
  \[
  \boxed{\text{Quadrant I or Quadrant II}}
  \]
* **(b) \( z_2 = -\frac{\sqrt{3}}{2} + \frac{1}{2}i = e^{i 5\pi/6} \):**
  The argument of the product is \( \theta = \theta_1 + 5\pi/6 \in (5\pi/6, 4\pi/3) \).
  \[
  \boxed{\text{Quadrant II or Quadrant III}}
  \]
* **(c) \( z_2 = -i = e^{-i\pi/2} \):**
  The argument of the product is \( \theta = \theta_1 - \pi/2 \in (-\pi/2, 0) \).
  \[
  \boxed{\text{Quadrant IV}}
  \]
* **(d) \( z_2 = -1 = e^{i\pi} \):**
  The argument of the product is \( \theta = \theta_1 + \pi \in (\pi, 3\pi/2) \).
  \[
  \boxed{\text{Quadrant III}}
  \]

### Problem 49
* **(a) Verify the identity:**
  For \( z \ne 1 \), this is the sum of a finite geometric series:
  \[
  S_n = 1 + z + z^2 + \dots + z^n
  \]
  Multiply both sides by \( 1 - z \):
  \[
  S_n(1 - z) = (1 + z + z^2 + \dots + z^n) - (z + z^2 + z^3 + \dots + z^{n+1}) = 1 - z^{n+1}
  \]
  Divide by \( 1 - z \):
  \[
  1 + z + z^2 + \dots + z^n = \frac{1 - z^{n+1}}{1 - z}
  \]
* **(b) Establish Lagrange's identity:**
  Substitute \( z = e^{i\theta} \) into the identity from part (a) (where \( 0 < \theta < 2\pi \)):
  \[
  1 + e^{i\theta} + e^{i 2\theta} + \dots + e^{i n\theta} = \frac{1 - e^{i(n+1)\theta}}{1 - e^{i\theta}}
  \]
  Take the real part of both sides.
  LHS real part:
  \[
  1 + \cos\theta + \cos 2\theta + \dots + \cos n\theta
  \]
  RHS real part:
  \[
  \frac{1 - e^{i(n+1)\theta}}{1 - e^{i\theta}} = \frac{(1 - e^{i(n+1)\theta})(1 - e^{-i\theta})}{(1 - e^{i\theta})(1 - e^{-i\theta})} = \frac{1 - e^{-i\theta} - e^{i(n+1)\theta} + e^{in\theta}}{2 - 2\cos\theta}
  \]
  Using trigonometric Euler formulas:
  \[
  \operatorname{Re}\left[ \frac{1 - e^{-i\theta} - e^{i(n+1)\theta} + e^{in\theta}}{2 - 2\cos\theta} \right] = \frac{1 - \cos\theta - \cos(n+1)\theta + \cos(n\theta)}{2(1 - \cos\theta)}
  \]
  Using trigonometric sum-to-product identities:
  \[
  = \frac{1}{2} + \frac{\sin\left(n+\frac{1}{2}\right)\theta}{2\sin\frac{\theta}{2}}
  \]
  which proves Lagrange's identity.

### Problem 50
The equation \( \arg\left(\frac{z_1 - z_2}{z_3 - z_4}\right) = \frac{\pi}{2} \) means:
\[
\arg(z_1 - z_2) - \arg(z_3 - z_4) = \frac{\pi}{2}
\]
Geometrically, this indicates that the angle between the vector connecting \( z_2 \) to \( z_1 \) and the vector connecting \( z_4 \) to \( z_3 \) is \( 90^\circ \).
\[
\boxed{\text{The line segment } z_1 - z_2 \text{ is perpendicular to the line segment } z_3 - z_4}
\]

---

<a name="section-1.4"></a>

### Problems 1 – 40 · Complete Solutions

---

> **Key Concepts for Roots**
>
> 1. **N-th Roots Formula:** The \( n \) distinct \( n \)-th roots of a complex number \( z = r(\cos\theta + i\sin\theta) \) are:
>    \[
>    w_k = \sqrt[n]{r} \left[ \cos\left(\frac{\theta + 2k\pi}{n}\right) + i\sin\left(\frac{\theta + 2k\pi}{n}\right) \right], \quad k = 0, 1, \dots, n-1
>    \]
> 2. **Principal N-th Root:** The root corresponding to \( k = 0 \) when using the principal argument \( \theta = \operatorname{Arg}(z) \).
> 3. **Roots of Unity:** The \( n \) distinct roots of \( z^n = 1 \) are equally spaced on the unit circle:
>    \[
>    w_k = \cos\frac{2k\pi}{n} + i\sin\frac{2k\pi}{n}, \quad k = 0, 1, \dots, n-1
>    \]

---

## Problems 1 – 14

**Compute all roots. Give the principal \( n \)-th root in each case. Sketch the roots on a circle centered at the origin.**

### Problem 1: \( (8)^{1/3} \)
* **Base in Polar Form:** \( z = 8(\cos 0 + i\sin 0) \), so \( r = 8, \, \theta = 0 \)
* **Roots:**
  \[
  w_k = \sqrt[3]{8} \left( \cos\frac{2k\pi}{3} + i\sin\frac{2k\pi}{3} \right) = 2 \left( \cos\frac{2k\pi}{3} + i\sin\frac{2k\pi}{3} \right), \quad k = 0, 1, 2
  \]
  * \( w_0 = 2(\cos 0 + i\sin 0) = 2 \)
  * \( w_1 = 2\left(\cos\frac{2\pi}{3} + i\sin\frac{2\pi}{3}\right) = -1 + \sqrt{3}i \)
  * \( w_2 = 2\left(\cos\frac{4\pi}{3} + i\sin\frac{4\pi}{3}\right) = -1 - \sqrt{3}i \)
* **Principal Root:** \( \boxed{w_0 = 2} \)

### Problem 2: \( (-1)^{1/4} \)
* **Base in Polar Form:** \( z = \cos\pi + i\sin\pi \), so \( r = 1, \, \theta = \pi \)
* **Roots:**
  \[
  w_k = 1^{1/4} \left( \cos\frac{\pi + 2k\pi}{4} + i\sin\frac{\pi + 2k\pi}{4} \right), \quad k = 0, 1, 2, 3
  \]
  * \( w_0 = \cos\frac{\pi}{4} + i\sin\frac{\pi}{4} = \frac{\sqrt{2}}{2} + \frac{\sqrt{2}}{2}i \)
  * \( w_1 = \cos\frac{3\pi}{4} + i\sin\frac{3\pi}{4} = -\frac{\sqrt{2}}{2} + \frac{\sqrt{2}}{2}i \)
  * \( w_2 = \cos\frac{5\pi}{4} + i\sin\frac{5\pi}{4} = -\frac{\sqrt{2}}{2} - \frac{\sqrt{2}}{2}i \)
  * \( w_3 = \cos\frac{7\pi}{4} + i\sin\frac{7\pi}{4} = \frac{\sqrt{2}}{2} - \frac{\sqrt{2}}{2}i \)
* **Principal Root:** \( \boxed{w_0 = \frac{\sqrt{2}}{2} + \frac{\sqrt{2}}{2}i} \)

### Problem 3: \( (-9)^{1/2} \)
* **Base in Polar Form:** \( z = 9(\cos\pi + i\sin\pi) \)
* **Roots:**
  \[
  w_k = 3 \left( \cos\frac{\pi + 2k\pi}{2} + i\sin\frac{\pi + 2k\pi}{2} \right), \quad k = 0, 1
  \]
  * \( w_0 = 3\left(\cos\frac{\pi}{2} + i\sin\frac{\pi}{2}\right) = 3i \)
  * \( w_1 = 3\left(\cos\frac{3\pi}{2} + i\sin\frac{3\pi}{2}\right) = -3i \)
* **Principal Root:** \( \boxed{w_0 = 3i} \)

### Problem 4: \( (-125)^{1/3} \)
* **Base in Polar Form:** \( z = 125(\cos\pi + i\sin\pi) \)
* **Roots:**
  \[
  w_k = 5 \left( \cos\frac{\pi + 2k\pi}{3} + i\sin\frac{\pi + 2k\pi}{3} \right), \quad k = 0, 1, 2
  \]
  * \( w_0 = 5\left(\cos\frac{\pi}{3} + i\sin\frac{\pi}{3}\right) = \frac{5}{2} + \frac{5\sqrt{3}}{2}i \)
  * \( w_1 = 5(\cos\pi + i\sin\pi) = -5 \)
  * \( w_2 = 5\left(\cos\frac{5\pi}{3} + i\sin\frac{5\pi}{3}\right) = \frac{5}{2} - \frac{5\sqrt{3}}{2}i \)
* **Principal Root:** \( \boxed{w_0 = \frac{5}{2} + \frac{5\sqrt{3}}{2}i} \)

### Problem 5: \( (i)^{1/2} \)
* **Base in Polar Form:** \( z = \cos\frac{\pi}{2} + i\sin\frac{\pi}{2} \)
* **Roots:**
  \[
  w_k = 1^{1/2} \left( \cos\frac{\pi/2 + 2k\pi}{2} + i\sin\frac{\pi/2 + 2k\pi}{2} \right), \quad k = 0, 1
  \]
  * \( w_0 = \cos\frac{\pi}{4} + i\sin\frac{\pi}{4} = \frac{\sqrt{2}}{2} + \frac{\sqrt{2}}{2}i \)
  * \( w_1 = \cos\frac{5\pi}{4} + i\sin\frac{5\pi}{4} = -\frac{\sqrt{2}}{2} - \frac{\sqrt{2}}{2}i \)
* **Principal Root:** \( \boxed{w_0 = \frac{\sqrt{2}}{2} + \frac{\sqrt{2}}{2}i} \)

### Problem 6: \( (-i)^{1/3} \)
* **Base in Polar Form:** \( z = \cos\left(-\frac{\pi}{2}\right) + i\sin\left(-\frac{\pi}{2}\right) \)
* **Roots:**
  \[
  w_k = 1^{1/3} \left( \cos\frac{-\pi/2 + 2k\pi}{3} + i\sin\frac{-\pi/2 + 2k\pi}{3} \right), \quad k = 0, 1, 2
  \]
  * \( w_0 = \cos\left(-\frac{\pi}{6}\right) + i\sin\left(-\frac{\pi}{6}\right) = \frac{\sqrt{3}}{2} - \frac{1}{2}i \)
  * \( w_1 = \cos\frac{\pi}{2} + i\sin\frac{\pi}{2} = i \)
  * \( w_2 = \cos\frac{7\pi}{6} + i\sin\frac{7\pi}{6} = -\frac{\sqrt{3}}{2} - \frac{1}{2}i \)
* **Principal Root:** \( \boxed{w_0 = \frac{\sqrt{3}}{2} - \frac{1}{2}i} \)

### Problem 7: \( (-1 + i)^{1/3} \)
* **Base in Polar Form:** \( z = \sqrt{2}\left(\cos\frac{3\pi}{4} + i\sin\frac{3\pi}{4}
ight) \)
* **Roots:**
  \[
  w_k = 2^{1/6} \left[ \cos\left(\frac{3\pi/4 + 2k\pi}{3}\right) + i\sin\left(\frac{3\pi/4 + 2k\pi}{3}\right) \right], \quad k = 0, 1, 2
  \]
  * \( w_0 = 2^{1/6}\left(\cos\frac{\pi}{4} + i\sin\frac{\pi}{4}\right) = \frac{1}{2^{1/3}} + \frac{1}{2^{1/3}}i \)
  * \( w_1 = 2^{1/6}\left(\cos\frac{11\pi}{12} + i\sin\frac{11\pi}{12}\right) \)
  * \( w_2 = 2^{1/6}\left(\cos\frac{19\pi}{12} + i\sin\frac{19\pi}{12}\right) \)
* **Principal Root:** \( \boxed{w_0 = 2^{-1/3}(1 + i)} \)

### Problem 8: \( (1 + i)^{1/5} \)
* **Base in Polar Form:** \( z = \sqrt{2}\left(\cos\frac{\pi}{4} + i\sin\frac{\pi}{4}\right) \)
* **Roots:**
  \[
  w_k = 2^{1/10} \left[ \cos\left(\frac{\pi/4 + 2k\pi}{5}\right) + i\sin\left(\frac{\pi/4 + 2k\pi}{5}\right) \right], \quad k = 0, 1, 2, 3, 4
  \]
  * \( w_0 = 2^{1/10}\left(\cos\frac{\pi}{20} + i\sin\frac{\pi}{20}\right) \)
  * \( w_1 = 2^{1/10}\left(\cos\frac{9\pi}{20} + i\sin\frac{9\pi}{20}\right) \)
  * \( w_2 = 2^{1/10}\left(\cos\frac{17\pi}{20} + i\sin\frac{17\pi}{20}\right) \)
  * \( w_3 = 2^{1/10}\left(\cos\frac{25\pi}{20} + i\sin\frac{25\pi}{20}\right) = 2^{1/10}\left(-\frac{\sqrt{2}}{2} - \frac{\sqrt{2}}{2}i\right) \)
  * \( w_4 = 2^{1/10}\left(\cos\frac{33\pi}{20} + i\sin\frac{33\pi}{20}\right) \)
* **Principal Root:** \( \boxed{w_0 = 2^{1/10}e^{i\pi/20}} \)

### Problem 9: \( (-1 + \sqrt{3}i)^{1/2} \)
* **Base in Polar Form:** \( z = 2\left(\cos\frac{2\pi}{3} + i\sin\frac{2\pi}{3}\right) \)
* **Roots:**
  \[
  w_k = \sqrt{2} \left[ \cos\left(\frac{2\pi/3 + 2k\pi}{2}\right) + i\sin\left(\frac{2\pi/3 + 2k\pi}{2}\right) \right], \quad k = 0, 1
  \]
  * \( w_0 = \sqrt{2}\left(\cos\frac{\pi}{3} + i\sin\frac{\pi}{3}\right) = \frac{\sqrt{2}}{2} + \frac{\sqrt{6}}{2}i \)
  * \( w_1 = \sqrt{2}\left(\cos\frac{4\pi}{3} + i\sin\frac{4\pi}{3}\right) = -\frac{\sqrt{2}}{2} - \frac{\sqrt{6}}{2}i \)
* **Principal Root:** \( \boxed{w_0 = \frac{\sqrt{2}}{2} + \frac{\sqrt{6}}{2}i} \)

### Problem 10: \( (-1 - \sqrt{3}i)^{1/4} \)
* **Base in Polar Form:** \( z = 2\left(\cos\left(-\frac{2\pi}{3}\right) + i\sin\left(-\frac{2\pi}{3}\right)\right) \)
* **Roots:**
  \[
  w_k = 2^{1/4} \left[ \cos\left(\frac{-2\pi/3 + 2k\pi}{4}\right) + i\sin\left(\frac{-2\pi/3 + 2k\pi}{4}\right) \right], \quad k = 0, 1, 2, 3
  \]
  * \( w_0 = 2^{1/4}\left(\cos\left(-\frac{\pi}{6}\right) + i\sin\left(-\frac{\pi}{6}\right)\right) = 2^{1/4}\left(\frac{\sqrt{3}}{2} - \frac{1}{2}i\right) \)
  * \( w_1 = 2^{1/4}\left(\cos\frac{\pi}{3} + i\sin\frac{\pi}{3}\right) = 2^{1/4}\left(\frac{1}{2} + \frac{\sqrt{3}}{2}i\right) \)
  * \( w_2 = 2^{1/4}\left(\cos\frac{5\pi}{6} + i\sin\frac{5\pi}{6}\right) = 2^{1/4}\left(-\frac{\sqrt{3}}{2} + \frac{1}{2}i\right) \)
  * \( w_3 = 2^{1/4}\left(\cos\frac{4\pi}{3} + i\sin\frac{4\pi}{3}\right) = 2^{1/4}\left(-\frac{1}{2} - \frac{\sqrt{3}}{2}i\right) \)
* **Principal Root:** \( \boxed{w_0 = 2^{1/4}\left(\frac{\sqrt{3}}{2} - \frac{1}{2}i\right)} \)

### Problem 11: \( (3 + 4i)^{1/2} \)
* Find roots algebraically: solve \( (a + ib)^2 = 3 + 4i \).
  \[
  a^2 - b^2 = 3 \qquad \text{and} \qquad 2ab = 4 \implies ab = 2
  \]
  Since \( a^2 - b^2 = 3 \) and \( ab = 2 \), the integer solutions are \( a = \pm 2 \) and \( b = \pm 1 \).
  * \( w_0 = 2 + i \)
  * \( w_1 = -2 - i \)
* **Principal Root:** \( \boxed{w_0 = 2 + i} \)

### Problem 12: \( (5 + 12i)^{1/2} \)
* Solve \( (a + ib)^2 = 5 + 12i \).
  \[
  a^2 - b^2 = 5 \qquad \text{and} \qquad 2ab = 12 \implies ab = 6
  \]
  The integer solutions are \( a = \pm 3 \) and \( b = \pm 2 \).
  * \( w_0 = 3 + 2i \)
  * \( w_1 = -3 - 2i \)
* **Principal Root:** \( \boxed{w_0 = 3 + 2i} \)

### Problem 13: \( \left( \frac{16i}{1 + i} \right)^{1/8} \)
* **Simplify base:**
  \[
  \frac{16i(1 - i)}{2} = 8i + 8 = 8\sqrt{2}\left(\cos\frac{\pi}{4} + i\sin\frac{\pi}{4}\right) = 2^{7/2}e^{i\pi/4}
  \]
* **Roots:**
  \[
  w_k = 2^{7/16} \left[ \cos\left(\frac{\pi/4 + 2k\pi}{8}\right) + i\sin\left(\frac{\pi/4 + 2k\pi}{8}\right) \right], \quad k = 0, 1, \dots, 7
  \]
  * \( w_0 = 2^{7/16} \left(\cos\frac{\pi}{32} + i\sin\frac{\pi}{32}\right) \)
* **Principal Root:** \( \boxed{w_0 = 2^{7/16}e^{i\pi/32}} \)

### Problem 14: \( \left( \frac{1 + i}{\sqrt{3} + i} \right)^{1/6} \)
* **Simplify base:**
  \[
  \frac{\sqrt{2}e^{i\pi/4}}{2e^{i\pi/6}} = \frac{\sqrt{2}}{2}e^{i\pi/12} = 2^{-1/2}e^{i\pi/12}
* **Roots:**
  \[
  w_k = 2^{-1/12} \left[ \cos\left(\frac{\pi/12 + 2k\pi}{6}\right) + i\sin\left(\frac{\pi/12 + 2k\pi}{6}\right) \right], \quad k = 0, 1, \dots, 5
  \]
  * \( w_0 = 2^{-1/12} \left(\cos\frac{\pi}{72} + i\sin\frac{\pi}{72}\right) \)
* **Principal Root:** \( \boxed{w_0 = 2^{-1/12}e^{i\pi/72}} \)

---

## Problems 15 – 18

### Problem 15
**(a) Verify that \( (4 + 3i)^2 = 7 + 24i \).**
\[
(4 + 3i)^2 = 16 + 24i + 9i^2 = 16 + 24i - 9 = 7 + 24i \quad \text{(Verified)}
\]
**(b) Find the two values of \( (7 + 24i)^{1/2} \).**
Since \( (4+3i)^2 = 7+24i \), the two values are:
\[
\boxed{w_0 = 4 + 3i \quad \text{and} \quad w_1 = -4 - 3i}
\]

### Problem 16
**Rework Problem 15 using the polar form root formula.**
* \( z = 7 + 24i \implies r = 25, \, \theta = \operatorname{Arg}(z) = \arctan(24/7) \).
* The roots are \( w_k = 5 \left[ \cos\left(\frac{\theta + 2k\pi}{2}\right) + i\sin\left(\frac{\theta + 2k\pi}{2}\right) \right] \) for \( k = 0, 1 \).
* Use half-angle formulas for \( \theta/2 \):
  * \( \cos\frac{\theta}{2} = \sqrt{\frac{1 + \cos\theta}{2}} = \sqrt{\frac{1 + 7/25}{2}} = \sqrt{\frac{16}{25}} = \frac{4}{5} \)
  * \( \sin\frac{\theta}{2} = \sqrt{\frac{1 - \cos\theta}{2}} = \sqrt{\frac{1 - 7/25}{2}} = \sqrt{\frac{9}{25}} = \frac{3}{5} \)
* For \( k = 0 \): \( w_0 = 5\left(\frac{4}{5} + i \frac{3}{5}\right) = 4 + 3i \).
* For \( k = 1 \): \( w_1 = -w_0 = -4 - 3i \).
* Both matches Problem 15.

### Problem 17
**Find all solutions of the equation \( z^4 + 1 = 0 \).**
This is equivalent to finding the four 4-th roots of \( -1 \):
\[
z^4 = -1 \implies z = (-1)^{1/4}
\]
Referencing Problem 2, the four solutions are:
\[
\boxed{z_1, z_2, z_3, z_4 = \pm \frac{\sqrt{2}}{2} \pm \frac{\sqrt{2}}{2}i}
\]

### Problem 18
**Use \( 8i = (2 + 2i)^2 \) to find all solutions of the equation \( z^2 - 8z + 16 = 8i \).**
* Factor the left-hand side:
  \[
  (z - 4)^2 = 8i
  \]
* Substitute \( 8i = (2+2i)^2 \):
  \[
  (z - 4)^2 = (2 + 2i)^2 \implies z - 4 = \pm (2 + 2i)
  \]
* Solve for \( z \):
  * Case 1: \( z - 4 = 2 + 2i \implies z = 6 + 2i \)
  * Case 2: \( z - 4 = -2 - 2i \implies z = 2 - 2i \)
* The solutions are:
  \[
  \boxed{z = 6 + 2i \quad \text{and} \quad z = 2 - 2i}
  \]

---

## Problems 19 – 24 (Roots of Unity)

### Problem 19
**(a) Show that the \( n \)-th roots of unity are given by (1).**
By setting \( z = 1 = 1(\cos 0 + i\sin 0) \) in the root formula:
\[
w_k = 1^{1/n} \left[ \cos\left(\frac{0 + 2k\pi}{n}\right) + i\sin\left(\frac{0 + 2k\pi}{n}\right) \right] = \cos\frac{2k\pi}{n} + i\sin\frac{2k\pi}{n}
\]
**(b) Find the roots of unity for \( n=3, 4, 5 \).**
* For \( n = 3 \): \( 1, \, -\frac{1}{2} + \frac{\sqrt{3}}{2}i, \, -\frac{1}{2} - \frac{\sqrt{3}}{2}i \)
* For \( n = 4 \): \( 1, \, i, \, -1, \, -i \)
* For \( n = 5 \): \( 1, \, e^{i2\pi/5}, \, e^{i4\pi/5}, \, e^{i6\pi/5}, \, e^{i8\pi/5} \)
**(c) carefully plot...** These vertices form regular polygons inscribed in the unit circle.

### Problem 20
**Suppose \( w \) is a cube root of unity corresponding to \( k=1 \): \( w = e^{i2\pi/3} \).**
**(a) How are \( w \) and \( w^2 \) related?**
\[
w^2 = e^{i4\pi/3} = \bar{w} \quad (\text{complex conjugates})
\]
**(b) Verify \( 1 + w + w^2 = 0 \).**
\[
1 + \left(-\frac{1}{2} + \frac{\sqrt{3}}{2}i\right) + \left(-\frac{1}{2} - \frac{\sqrt{3}}{2}i\right) = 1 - 1 = 0 \quad \text{(Verified)}
\]
**(c) Explain how this follows by factoring \( w^3 = 1 \).**
Since \( w^3 - 1 = 0 \), factoring gives \( (w-1)(1+w+w^2) = 0 \). Since \( w \ne 1 \), we must divide by \( w-1 \ne 0 \), yielding \( 1+w+w^2=0 \).

### Problem 21
**Show that the \( n \)-th roots of unity can be written as \( 1, w_n, w_n^2, \dots, w_n^{n-1} \).**
Let \( w_n = e^{i2\pi/n} \). For any \( k \):
\[
w_n^k = \left(e^{i2\pi/n}\right)^k = e^{i2k\pi/n} = \cos\frac{2k\pi}{n} + i\sin\frac{2k\pi}{n}
\]
Since this matches the roots formula in Problem 19, the set of powers contains all \( n \) distinct roots of unity.

### Problem 22
**Solve the equation \( (z+2)^n + z^n = 0 \).**
* **For \( n=1 \):**
  \[
  z + 2 + z = 0 \implies 2z = -2 \implies \boxed{z = -1}
  \]
* **For \( n=2 \):**
  \[
  (z + 2)^2 + z^2 = 0 \implies 2z^2 + 4z + 4 = 0 \implies z^2 + 2z + 2 = 0
  \]
  Applying the quadratic formula:
  \[
  z = \frac{-2 \pm \sqrt{4 - 8}}{2} = \boxed{-1 \pm i}
  \]

### Problem 23
**Consider \( (z+2)^n + z^n = 0 \).**
**(a) Find all solutions for \( n=6 \).**
\[
(z+2)^6 = -z^6 \implies \left(\frac{z+2}{-z}\right)^6 = 1
\]
Let \( w = \frac{z+2}{-z} \). Then \( w \) is a 6-th root of unity: \( w_k = e^{ik\pi/3} \) for \( k = 0, 1, \dots, 5 \).
Solve for \( z \):
\[
z + 2 = -w_k z \implies z(1 + w_k) = -2 \implies z = -\frac{2}{1 + w_k}
\]
Substitute \( w_k = \cos(k\pi/3) + i\sin(k\pi/3) \):
\[
z_k = -\frac{2}{1 + \cos(k\pi/3) + i\sin(k\pi/3)} = -1 + i\tan\frac{k\pi}{6}
\]
For \( k = 3 \), \( 1+w_3 = 0 \) (unbounded/no solution). The 5 solutions are:
\[
\boxed{z_k = -1 + i\tan\frac{k\pi}{6}, \quad k = 0, 1, 2, 4, 5}
\]
**(b) Conjecture:** All solutions lie on the vertical line \( \operatorname{Re}(z) = -1 \).
*Proof:* The equation implies \( |z+2|^n = |-z|^n \implies |z+2| = |z| \). This represents the perpendicular bisector of the line segment between \( 0 \) and \( -2 \), which is \( \operatorname{Re}(z) = -1 \).

### Problem 24
**Show that \( 1 + w_n + w_n^2 + \dots + w_n^{n-1} = 0 \).**
Let \( S = 1 + w_n + w_n^2 + \dots + w_n^{n-1} \). Multiply by \( (w_n - 1) \):
\[
S(w_n - 1) = w_n^n - 1
\]
Since \( w_n \) is a root of unity, \( w_n^n = 1 \). Thus:
\[
S(w_n - 1) = 0
\]
Since \( w_n \ne 1 \implies w_n - 1 \ne 0 \), it must be that \( S = 0 \).

---

## Problems 25 – 30

### Problem 25
**(a) Compute \( (i^{1/2})^3 \):**
\( i^{1/2} \) has two values: \( w_0 = e^{i\pi/4} = \frac{\sqrt{2}}{2} + \frac{\sqrt{2}}{2}i \) and \( w_1 = e^{i5\pi/4} = -\frac{\sqrt{2}}{2} - \frac{\sqrt{2}}{2}i \).
* \( w_0^3 = e^{i3\pi/4} = -\frac{\sqrt{2}}{2} + \frac{\sqrt{2}}{2}i \)
* \( w_1^3 = e^{i15\pi/4} = e^{-i\pi/4} = \frac{\sqrt{2}}{2} - \frac{\sqrt{2}}{2}i \)
**(b) Compute \( (i^3)^{1/2} \):**
\( i^3 = -i \). The square roots of \( -i \) are:
* \( u_0 = \cos(-\pi/4) + i\sin(-\pi/4) = \frac{\sqrt{2}}{2} - \frac{\sqrt{2}}{2}i \)
* \( u_1 = \cos(3\pi/4) + i\sin(3\pi/4) = -\frac{\sqrt{2}}{2} + \frac{\sqrt{2}}{2}i \)
Both sets of values are identical.
**(c) Compute \( i^{3/2} \) using (5):**
Matches the same values: \( \boxed{\pm \left(-\frac{\sqrt{2}}{2} + \frac{\sqrt{2}}{2}i\right)} \).

### Problem 26
**Solve \( w^2 = (-1 + i)^5 \).**
* Simplify right side:
  \[
  -1 + i = \sqrt{2}e^{i3\pi/4} \implies (-1 + i)^5 = 4\sqrt{2}e^{i15\pi/4} = 4\sqrt{2}e^{-i\pi/4}
  \]
* Now solve \( w^2 = 4\sqrt{2}e^{-i\pi/4} \):
  \[
  w_k = \sqrt{4\sqrt{2}} e^{i \frac{-\pi/4 + 2k\pi}{2}} = 2^{5/4}e^{i \frac{-\pi + 8k\pi}{8}}, \quad k = 0, 1
  \]
  * \( w_0 = 2^{5/4}e^{-i\pi/8} \)
  * \( w_1 = 2^{5/4}e^{i7\pi/8} \)

---

## Focus on Concepts (Problems 27 – 34)

### Problem 27
Roots are equally spaced on a circle with angular spacing \( 2\pi/n \).
* For \( n = 3 \): Spacing is \( 120^\circ \). The other two roots are rotated by \( \pm 120^\circ \).
* For \( n = 4 \): Spacing is \( 90^\circ \). The other roots are rotated by \( 90^\circ, 180^\circ, 270^\circ \).
* For \( n = 5 \): Spacing is \( 72^\circ \). The other roots are rotated by multiples of \( 72^\circ \).

### Problem 28
The equation \( z^n = 1 \) has only real solutions if and only if all vertices of the root polygon lie on the real axis.
* For \( n=1 \): Root is \( 1 \) (real).
* For \( n=2 \): Roots are \( 1, -1 \) (real).
* For \( n \ge 3 \): The roots form a regular polygon inscribed in the unit circle, which must have vertices in the upper/lower half-planes (yielding non-real roots).
* Thus, the only values are \( \boxed{n=1 \text{ and } n=2} \).

### Problem 29
* **(a) Calculator values:**
  \( w_0 = 2^{1/4}(\cos(\pi/8) + i\sin(\pi/8)) \approx 1.1892(0.9239 + 0.3827i) \approx 1.09868 + 0.45509i \).
  \( w_1 = -w_0 \approx -1.09868 - 0.45509i \).
* **(b) Exact values:** derived using half-angle formulas:
  \[
  \boxed{w_0 = \sqrt{\frac{1+\sqrt{2}}{2}} + i \sqrt{\frac{\sqrt{2}-1}{2}}, \quad w_1 = -\sqrt{\frac{1+\sqrt{2}}{2}} - i \sqrt{\frac{\sqrt{2}-1}{2}}}
  \]

### Problem 30
The sum of the vectors representing the \( n \)-th roots of unity is zero. Physically, this means that the center of mass (centroid) of the regular polygon formed by the roots lies at the origin.

### Problem 31
No. If a non-real complex number \( z \) had a real \( n \)-th root \( w = x \in \mathbb{R} \), then \( w^n = x^n \) would be a real number. But \( w^n = z \) is non-real, which is a contradiction.

### Problem 32
No. The cube roots of \( z \) are spaced by \( 120^\circ \) in argument. Since the first quadrant only spans an angle of \( 90^\circ \), it is geometrically impossible for two distinct cube roots to lie in the first quadrant.

### Problem 33
The roots form a square centered at the origin. Let \( w_0 = a + ib \) be one root (neither real nor pure imaginary, so \( a \ne 0, b \ne 0 \)). The remaining roots are:
\[
w_1 = iw_0 = -b + ai, \quad w_2 = -w_0 = -a - bi, \quad w_3 = -iw_0 = b - ai
\]
Since \( a \ne 0 \) and \( b \ne 0 \), all roots have nonzero real and imaginary parts, meaning none of them are real or pure imaginary.

### Problem 34
*Graph description:* Plot \( w_0 = r^{1/3}e^{i\theta/3} \) in the first quadrant. Plot its square \( w_0^2 \) and cube \( w_0^3 = z \), demonstrating modulus scaling and argument addition.

---

<a name="section-1.5"></a>

### Problems 1 – 50 · Complete Solutions

---

> **Key Concepts for Sets**
>
> 1. **Common Regions:**
>    * **Circle:** \( |z - z_0| = \rho \)
>    * **Open Disk:** \( |z - z_0| < \rho \)
>    * **Closed Disk:** \( |z - z_0| \le \rho \)
>    * **Annulus:** \( \rho_1 < |z - z_0| < \rho_2 \)
> 2. **Topological Properties:**
>    * **Open Set:** Every point has a neighborhood contained entirely within the set.
>    * **Closed Set:** Contains all its boundary points.
>    * **Connected Set:** Any two points can be joined by a polygonal line segment lying entirely in the set.
>    * **Domain:** An open, connected set.
>    * **Bounded Set:** Can be enclosed entirely within a sufficiently large disk centered at the origin.
> 3. **Stereographic Projection:** Maps a point \( z = a + ib \) in the complex plane to a point \( (x_0, y_0, u_0) \) on the Riemann sphere \( x^2 + y^2 + u^2 = 1 \):
>    \[
>    x_0 = \frac{2a}{|z|^2 + 1}, \quad y_0 = \frac{2b}{|z|^2 + 1}, \quad u_0 = \frac{|z|^2 - 1}{|z|^2 + 1}
>    \]

---

## Problems 1 – 12

**Sketch the graph of the given equation in the complex plane.**

### Problem 1: \( |z - 4 + 3i| = 5 \)
* **Equation:** \( |z - (4 - 3i)| = 5 \)
* **Geometric Interpretation:** A circle of radius \( R = 5 \) centered at the point \( z_0 = 4 - 3i \) (or Cartesian coordinate \( (4, -3) \)).
* **Cartesian Equation:** \( (x - 4)^2 + (y + 3)^2 = 25 \)
* **Boundary:** Included (solid line).

### Problem 2: \( |z + 2 + 2i| = 2 \)
* **Equation:** \( |z - (-2 - 2i)| = 2 \)
* **Geometric Interpretation:** A circle of radius \( R = 2 \) centered at the point \( z_0 = -2 - 2i \) (or Cartesian coordinate \( (-2, -2) \)).
* **Cartesian Equation:** \( (x + 2)^2 + (y + 2)^2 = 4 \)
* **Boundary:** Included (solid line).

### Problem 3: \( |z + 3i| = 2 \)
* **Equation:** \( |z - (-3i)| = 2 \)
* **Geometric Interpretation:** A circle of radius \( R = 2 \) centered at the point \( z_0 = -3i \) (or Cartesian coordinate \( (0, -3) \)).
* **Cartesian Equation:** \( x^2 + (y + 3)^2 = 4 \)
* **Boundary:** Included (solid line).

### Problem 4: \( |2z - 1| = 4 \)
* **Equation:** \( 2\left|z - \frac{1}{2}\right| = 4 \implies \left|z - \frac{1}{2}\right| = 2 \)
* **Geometric Interpretation:** A circle of radius \( R = 2 \) centered at the point \( z_0 = \frac{1}{2} \) (or Cartesian coordinate \( (1/2, 0) \)).
* **Cartesian Equation:** \( \left(x - \frac{1}{2}\right)^2 + y^2 = 4 \)
* **Boundary:** Included (solid line).

### Problem 5: \( \operatorname{Re}(z) = 5 \)
* **Geometric Interpretation:** A vertical line.
* **Cartesian Equation:** \( x = 5 \)
* **Boundary:** Included (solid line).

### Problem 6: \( \operatorname{Im}(z) = -2 \)
* **Geometric Interpretation:** A horizontal line.
* **Cartesian Equation:** \( y = -2 \)
* **Boundary:** Included (solid line).

### Problem 7: \( \operatorname{Im}(\bar{z} + 3i) = 6 \)
* **Simplify:** Let \( z = x + iy \implies \bar{z} = x - iy \).
  \[
  \bar{z} + 3i = x - iy + 3i = x + (3 - y)i
  \]
  \[
  \operatorname{Im}(\bar{z} + 3i) = 3 - y = 6 \implies y = -3
  \]
* **Geometric Interpretation:** A horizontal line.
* **Cartesian Equation:** \( y = -3 \)
* **Boundary:** Included (solid line).

### Problem 8: \( \operatorname{Im}(z - i) = \operatorname{Re}(z + 4 - 3i) \)
* **Simplify:** Let \( z = x + iy \).
  * LHS: \( \operatorname{Im}(x + i(y-1)) = y - 1 \)
  * RHS: \( \operatorname{Re}((x+4) + i(y-3)) = x + 4 \)
  Set equal: \( y - 1 = x + 4 \implies y = x + 5 \)
* **Geometric Interpretation:** A line with slope \( 1 \) and \( y \)-intercept \( 5 \).
* **Cartesian Equation:** \( y = x + 5 \)
* **Boundary:** Included (solid line).

### Problem 9: \( |\operatorname{Re}(1 + i\bar{z})| = 3 \)
* **Simplify:** Let \( z = x + iy \implies \bar{z} = x - iy \).
  \[
  1 + i\bar{z} = 1 + i(x - iy) = 1 + y + ix \implies \operatorname{Re}(1 + i\bar{z}) = 1 + y
  \]
  Set equal: \( |1 + y| = 3 \implies 1 + y = 3 \text{ or } 1 + y = -3 \implies y = 2 \text{ or } y = -4 \)
* **Geometric Interpretation:** A pair of parallel horizontal lines.
* **Cartesian Equations:** \( y = 2 \) and \( y = -4 \)
* **Boundary:** Included (solid line).

### Problem 10: \( z^2 + \bar{z}^2 = 2 \)
* **Simplify:** Let \( z = x + iy \implies z^2 = x^2 - y^2 + 2ixy \).
  \[
  z^2 + \bar{z}^2 = (x^2 - y^2 + 2ixy) + (x^2 - y^2 - 2ixy) = 2(x^2 - y^2)
  \]
  Set equal: \( 2(x^2 - y^2) = 2 \implies x^2 - y^2 = 1 \)
* **Geometric Interpretation:** A hyperbola opening horizontally with vertices at \( (\pm 1, 0) \).
* **Cartesian Equation:** \( x^2 - y^2 = 1 \)
* **Boundary:** Included (solid line).

### Problem 11: \( \operatorname{Re}(z^2) = 1 \)
* **Simplify:** Let \( z = x + iy \implies z^2 = x^2 - y^2 + 2ixy \implies \operatorname{Re}(z^2) = x^2 - y^2 \).
  Set equal: \( x^2 - y^2 = 1 \)
* **Geometric Interpretation:** A hyperbola opening horizontally with vertices at \( (\pm 1, 0) \) (identical to Problem 10).
* **Cartesian Equation:** \( x^2 - y^2 = 1 \)
* **Boundary:** Included (solid line).

### Problem 12: \( \arg(z) = \pi/4 \)
* **Geometric Interpretation:** A ray emanating from the origin (origin excluded) making a \( 45^\circ \) angle with the positive real axis.
* **Cartesian Form:** \( y = x \) for \( x > 0 \)
* **Boundary:** Solid ray line, excluding the point \( (0,0) \).

---

## Problems 13 – 24

**Sketch the set \( S \) of points in the complex plane satisfying the given inequality. Determine whether the set is (a) open, (b) closed, (c) a domain, (d) bounded, or (e) connected.**

| Problem | Inequality | (a) Open | (b) Closed | (c) Domain | (d) Bounded | (e) Connected |
| :--- | :--- | :---: | :---: | :---: | :---: | :---: |
| **13** | \( \operatorname{Re}(z) < -1 \) | Yes | No | Yes | No | Yes |
| **14** | \( |\operatorname{Re}(z)| > 2 \) | Yes | No | No | No | No |
| **15** | \( \operatorname{Im}(z) > 3 \) | Yes | No | Yes | No | Yes |
| **16** | \( \operatorname{Re}((2+i)z+1) > 0 \) | Yes | No | Yes | No | Yes |
| **17** | \( 2 < \operatorname{Re}(z-1) < 4 \) | Yes | No | Yes | No | Yes |
| **18** | \( -1 \le \operatorname{Im}(z) < 4 \) | No | No | No | No | Yes |
| **19** | \( \operatorname{Re}(z^2) > 0 \) | Yes | No | No | No | No |
| **20** | \( \operatorname{Im}(z) < \operatorname{Re}(z) \) | Yes | No | Yes | No | Yes |
| **21** | \( |z-i| > 1 \) | Yes | No | Yes | No | Yes |
| **22** | \( 2 < |z-i| < 3 \) | Yes | No | Yes | Yes | Yes |
| **23** | \( 1 \le |z - 1 - i| < 2 \) | No | No | No | Yes | Yes |
| **24** | \( 2 \le |z - 3 + 4i| \le 5 \) | No | Yes | No | Yes | Yes |

### Details on Non-Obvious Cases:
* **Problem 14:** The inequality is equivalent to \( x > 2 \) or \( x < -2 \). This represents two disjoint half-planes, which is not connected.
* **Problem 16:** Let \( z = x + iy \implies \operatorname{Re}((2+i)(x+iy)+1) = 2x - y + 1 > 0 \implies y < 2x + 1 \). This represents the open half-plane below the line \( y = 2x + 1 \).
* **Problem 17:** Equivalent to \( 2 < x-1 < 4 \implies 3 < x < 5 \). This is an infinite open vertical strip.
* **Problem 19:** Equivalent to \( x^2 - y^2 > 0 \implies |x| > |y| \). This represents the two open V-shaped sectors containing the positive and negative real axes, meeting at the origin (origin excluded). Since the origin is not included, a path cannot connect the left and right sectors, making the set disconnected.
* **Problem 23:** An annulus with inner circle \( |z - 1 - i| = 1 \) included, and outer circle \( |z - 1 - i| = 2 \) excluded.
* **Problem 24:** A closed annulus where both the inner boundary circle (radius 2) and the outer boundary circle (radius 5) are included.

---

## Problem 25

**Give the boundary points of the sets in Problems 13 – 24.**

* **Problem 13:** The vertical line \( x = -1 \).
* **Problem 14:** The two vertical lines \( x = 2 \) and \( x = -2 \).
* **Problem 15:** The horizontal line \( y = 3 \).
* **Problem 16:** The line \( y = 2x + 1 \).
* **Problem 17:** The two vertical lines \( x = 3 \) and \( x = 5 \).
* **Problem 18:** The two horizontal lines \( y = -1 \) and \( y = 4 \).
* **Problem 19:** The two straight lines \( y = x \) and \( y = -x \).
* **Problem 20:** The line \( y = x \).
* **Problem 21:** The circle \( |z - i| = 1 \).
* **Problem 22:** The two concentric circles \( |z - i| = 2 \) and \( |z - i| = 3 \).
* **Problem 23:** The two concentric circles \( |z - (1+i)| = 1 \) and \( |z - (1+i)| = 2 \).
* **Problem 24:** The two concentric circles \( |z - (3-4i)| = 2 \) and \( |z - (3-4i)| = 5 \).

---

## Problem 26

**Consider the set \( S \) consisting of the complex plane with the circle \( |z| = 5 \) deleted.**
* **Boundary Points:** The circle \( |z| = 5 \).
* **Connectivity:** **No**, \( S \) is not connected. It is partitioned into the interior region \( |z| < 5 \) and the exterior region \( |z| > 5 \). Any path connecting a point in the interior to a point in the exterior must cross the deleted circle boundary, which is not in \( S \).

---

## Problems 27 – 30

**Sketch the set of points in the complex plane satisfying the given inequality or description.**

### Problem 27: \( 0 \le \arg(z) \le \pi/6 \)
* **Description:** An infinite sector of angle \( 30^\circ \) in Quadrant I, bounded by the positive real axis and the ray \( y = \frac{1}{\sqrt{3}}x \) for \( x > 0 \). The origin is excluded (argument is undefined).

### Problem 28: \( -\pi < \arg(z) < \pi/2 \)
* **Description:** An infinite sector extending from the negative real axis (exclusive) counterclockwise to the positive imaginary axis (exclusive). This includes all of Quadrants I, III, and IV, excluding the boundary rays.

### Problem 29: Describe the set shown in Figure 1.25.
* **Analysis:** The boundary consists of two solid rays emanating from the origin with angles \( 2\pi/3 \) and \( -2\pi/3 \). The shaded region contains the positive real axis.
* **Inequality:**
  \[
  \boxed{-\frac{2\pi}{3} \le \operatorname{arg}(z) \le \frac{2\pi}{3}} \quad \text{or} \quad \boxed{|\operatorname{arg}(z)| \le \frac{2\pi}{3}}
  \]

### Problem 30: Describe the set shown in Figure 1.26.
* **Analysis:** The boundary is the imaginary axis (solid vertical line), and the shaded region is the left half-plane.
* **Inequality:**
  \[
  \boxed{\frac{\pi}{2} \le \operatorname{arg}(z) \le \frac{3\pi}{2}} \quad \text{or} \quad \boxed{|\operatorname{arg}(z)| \ge \frac{\pi}{2}}
  \]

---

## Problems 31 – 32

**Solve the given pair of simultaneous equations.**

### Problem 31: \( |z| = 2 \) and \( |z - 2| = 2 \)
These equations represent two circles:
1. \( x^2 + y^2 = 4 \) (Circle centered at origin)
2. \( (x - 2)^2 + y^2 = 4 \implies x^2 - 4x + 4 + y^2 = 4 \implies x^2 - 4x + y^2 = 0 \)

Subtracting the second equation from the first:
\[
(x^2 + y^2) - (x^2 - 4x + y^2) = 4 - 0
\]
\[
4x = 4 \implies x = 1
\]
Substitute \( x = 1 \) back into the first circle:
\[
1^2 + y^2 = 4 \implies y^2 = 3 \implies y = \pm \sqrt{3}
\]
The two solutions are:
\[
\boxed{z = 1 + \sqrt{3}i \quad \text{and} \quad z = 1 - \sqrt{3}i}
\]

### Problem 32: \( |z - i| = 5 \) and \( \arg(z) = \pi/4 \)
* Since \( \arg(z) = \pi/4 \), we can write \( z = x + ix \) for some \( x > 0 \).
* Substitute \( z = x + ix \) into the circle equation:
  \[
  |x + ix - i| = 5 \implies |x + i(x - 1)| = 5
  \]
  \[
  x^2 + (x - 1)^2 = 25
  \]
  \[
  x^2 + x^2 - 2x + 1 = 25 \implies 2x^2 - 2x - 24 = 0
  \]
  \[
  x^2 - x - 12 = 0 \implies (x - 4)(x + 3) = 0
  \]
* Since \( x > 0 \), we select \( x = 4 \).
* The solution is:
  \[
  \boxed{z = 4 + 4i}
  \]

---

## Focus on Concepts (Problems 33 – 50)

### Problem 33
If \( \rho_1 = 0 \), the inequality \( 0 < |z - z_0| \) defines the set of all complex numbers except \( z = z_0 \). This is a **punctured or deleted complex plane**.
For \( |z + 2 - 5i| > 0 \), it represents **the entire complex plane excluding the single point \( z_0 = -2 + 5i \)**.

### Problem 34
* **(a)** The boundary points of a deleted neighborhood of \( z_0 \) (defined by \( 0 < |z - z_0| < \rho \)) are **the center point \( z_0 \)** and **the outer circle \( |z - z_0| = \rho \)**.
* **(b)** The boundary points of the complex plane \( \mathbb{C} \) is **the empty set \( \emptyset \)** because \( \mathbb{C} \) has no boundary points in \( \mathbb{C} \).
* **(c)** Examples of sets that are neither open nor closed:
  1. The half-open line segment \( \{ z = x \in \mathbb{R} : 0 \le x < 1 \} \).
  2. The half-open disk \( \{ z \in \mathbb{C} : |z| \le 1 \} \setminus \{ 1 \} \).
  3. The semi-open annulus \( 1 < |z| \le 2 \).

### Problem 35
* **(a) Connected Sets:**
  1. Open disk: \( |z| < 1 \)
  2. Entire plane: \( \mathbb{C} \)
  3. Upper half-plane: \( \operatorname{Im}(z) > 0 \)
  4. Closed annulus: \( 1 \le |z| \le 2 \)
  5. Ray: \( \arg(z) = \pi/4 \)
* **(b) Disconnected Sets:**
  1. Disjoint half-planes: \( |\operatorname{Re}(z)| > 1 \)
  2. Punctured plane minus an axis: \( \mathbb{C} \setminus \operatorname{Re}(z) \)
  3. Finite set: \( \{ 1, 2 \} \)
  4. Union of two disjoint disks: \( |z| < 1 \cup |z - 3| < 1 \)
  5. Punctured plane: \( \operatorname{Re}(z) \ne 0 \)

### Problem 36
Let \( z \) lie in the disk \( |z - z_0| \le \rho \). By the triangle inequality:
\[
|z| = |z - z_0 + z_0| \le |z - z_0| + |z_0| \le \rho + |z_0|
\]
Since \( \rho + |z_0| \) is a finite real number, we can choose any real number \( R > \rho + |z_0| \). Then \( |z| < R \) for all \( z \) in the disk, proving that the disk is bounded.

### Problem 37
The equation \( |z - z_0| = |z - z_1| \) states that the distance from \( z \) to \( z_0 \) is equal to the distance from \( z \) to \( z_1 \). This defines the **perpendicular bisector of the line segment joining the points \( z_0 \) and \( z_1 \)**.

### Problem 38
The equation \( |z - i| + |z + i| = 1 \) represents the set of points where the sum of the distances to the two foci \( i \) and \( -i \) is \( 1 \).
However, the distance between the two foci is \( |i - (-i)| = 2 \). By the triangle inequality, for any point \( z \):
\[
|z - i| + |z + i| \ge |(z - i) - (z + i)| = 2
\]
Since a sum of distances cannot be less than the distance between the points, the equation has no solutions.
**The set of points is the empty set \( \emptyset \).**

### Problem 39
* **Analysis:** The shaded region is exterior to the circle of radius 3 centered at \( 3i \) and exterior to the circle of radius 2 centered at \( -i \). Both boundaries are included.
* **Set Notation:**
  \[
  \boxed{\{ z : |z - 3i| \ge 3 \text{ and } |z + i| \ge 2 \}}
  \]

### Problem 40
* **Analysis:** The shaded region is a half-annulus in the upper half-plane, bounded by circles of radius \( r \) and \( R \). All boundaries are included.
* **Set Notation:**
  \[
  \boxed{\{ z : r \le |z| \le R \text{ and } \operatorname{Im}(z) \ge 0 \}} \quad \text{or} \quad \boxed{\{ z : r \le |z| \le R \text{ and } 0 \le \operatorname{arg}(z) \le \pi \}}
  \]

### Problem 41
For the set \( S = \{ i/n : n = 1, 2, 3, \dots \} \):
* **Boundary:** Every point in \( S \) is a boundary point, and the limit point \( 0 \) (which is not in \( S \)) is also a boundary point. The set of boundary points is \( S \cup \{0\} \).
* **Open:** **No**, no point has a neighborhood contained entirely in \( S \).
* **Closed:** **No**, the boundary point \( 0 \) is not contained in the set.
* **Connected:** **No**, it consists of isolated points.
* **Bounded:** **Yes**, all points lie within the neighborhood \( |z| < 2 \).

### Problem 42
Yes, a finite set \( S = \{ z_1, z_2, \dots, z_n \} \) is always bounded.
*Proof:* Let \( M = \max\{ |z_1|, |z_2|, \dots, |z_n| \} \). Since the set is finite, the maximum exists and is a finite real number. We can choose \( R = M + 1 \). Then \( |z| < R \) for all \( z \in S \), verifying that the set is bounded.

### Problem 43
* **(a) \( |z-2+i| < 3 \):** **Convex**. All open/closed disks are convex.
* **(b) \( 1 < |z| < 2 \):** **Not Convex**. A line segment connecting two opposite points (e.g. \( 1.5 \) and \( -1.5 \)) passes through \( 0 \), which is not in the set.
* **(c) \( x > 2, y \le -1 \):** **Convex**. An intersection of two half-planes is convex.
* **(d) \( y < x^2 \):** **Not Convex**. The points \( (-2, 3) \) and \( (2, 3) \) lie in the region, but their midpoint \( (0, 3) \) does not since \( 3 \not< 0 \).
* **(e) \( \operatorname{Re}(z) \le 5 \):** **Convex**. A half-plane is always convex.
* **(f) \( \operatorname{Re}(z) \ne 0 \):** **Not Convex**. The points \( 1 \) and \( -1 \) are in the set, but their midpoint \( 0 \) is not.

### Problem 44
**Yes**. By definition, any two points in a convex set can be joined by a straight line segment that lies entirely within the set. Since a line segment is a continuous path, every convex set is path-connected and therefore connected.

### Problem 45
**Yes, the empty set \( \emptyset \) is open.**
A set is open if for every element in the set, there exists a neighborhood around it contained in the set. Since \( \emptyset \) contains no elements, the condition is vacuously true.
*(Note: It is also closed, as its complement is \( \mathbb{C} \), which is open).*

### Problem 46
* **(a) Union:** **Yes**, the union of any family of open sets is open.
  *Proof:* Let \( z \in S_1 \cup S_2 \). Then \( z \in S_1 \) or \( z \in S_2 \). If \( z \in S_1 \), since \( S_1 \) is open, there is a neighborhood \( N(z, \epsilon) \subset S_1 \subset S_1 \cup S_2 \). The same applies if \( z \in S_2 \). Thus, \( S_1 \cup S_2 \) is open.
* **(b) Intersection:** **Yes**, the finite intersection of open sets is open.
  *Proof:* Let \( z \in S_1 \cap S_2 \implies z \in S_1 \) and \( z \in S_2 \). Since they are open, there exist \( N(z, \epsilon_1) \subset S_1 \) and \( N(z, \epsilon_2) \subset S_2 \). Let \( \epsilon = \min(\epsilon_1, \epsilon_2) > 0 \). Then \( N(z, \epsilon) \subset S_1 \cap S_2 \), proving the intersection is open.

### Problem 47
The intersection of the line from \( (a, 0) \) to \( (0, 1) \) with the circle \( x_0^2 + y_0^2 = 1 \) yields:
\[
x_0 = \frac{2a}{a^2 + 1}, \quad y_0 = \frac{a^2 - 1}{a^2 + 1}
\]
* **For \( a = -1/4 \):** \( x_0 = \frac{-1/2}{17/16} = -\frac{8}{17} \), \( y_0 = \frac{-15/16}{17/16} = -\frac{15}{17} \implies \boxed{\left(-\frac{8}{17}, -\frac{15}{17}\right)} \)
* **For \( a = 1/2 \):** \( x_0 = \frac{1}{5/4} = \frac{4}{5} \), \( y_0 = \frac{-3/4}{5/4} = -\frac{3}{5} \implies \boxed{\left(\frac{4}{5}, -\frac{3}{5}\right)} \)
* **For \( a = -3 \):** \( x_0 = \frac{-6}{10} = -\frac{3}{5} \), \( y_0 = \frac{8}{10} = \frac{4}{5} \implies \boxed{\left(-\frac{3}{5}, \frac{4}{5}\right)} \)
* **For \( a = 1 \):** \( x_0 = \frac{2}{2} = 1 \), \( y_0 = \frac{0}{2} = 0 \implies \boxed{(1, 0)} \)
* **For \( a = 10 \):** \( x_0 = \frac{20}{101} \), \( y_0 = \frac{99}{101} \implies \boxed{\left(\frac{20}{101}, \frac{99}{101}\right)} \)

### Problem 48
For \( z = 2 + 5i \implies a = 2, b = 5, |z|^2 = 29 \):
\[
x_0 = \frac{2(2)}{29 + 1} = \frac{4}{30} = \frac{2}{15}
\]
\[
y_0 = \frac{2(5)}{29 + 1} = \frac{10}{30} = \frac{1}{3}
\]
\[
u_0 = \frac{29 - 1}{29 + 1} = \frac{28}{30} = \frac{14}{15}
\]
* **Point on Sphere:** \( \boxed{\left(\frac{2}{15}, \frac{1}{3}, \frac{14}{15}\right)} \)

### Problem 49
* **(a) Unit Circle \( |z| = 1 \):** Corresponds to the points where \( u_0 = 0 \). This is the **equator** of the unit sphere.
* **(b) Inside Disk \( |z| < 1 \):** Corresponds to the points where \( u_0 < 0 \). This is the **entire lower hemisphere** (including the south pole \( (0,0,-1) \)).
* **(c) Exterior \( |z| > 1 \):** Corresponds to the points where \( u_0 > 0 \). This is the **entire upper hemisphere** (excluding the north pole \( (0,0,1) \)).

### Problem 50
To find the line containing \( (0, 0, 1) \) and \( (a, b, 0) \), we parameterize it:
\[
\mathbf{L}(t) = (1 - t)(0, 0, 1) + t(a, b, 0) = (ta, tb, 1 - t)
\]
We find the intersection with the unit sphere:
\[
(ta)^2 + (tb)^2 + (1-t)^2 = 1 \implies t^2(a^2 + b^2) + 1 - 2t + t^2 = 1
\]
\[
t^2(a^2 + b^2 + 1) = 2t
\]
Since \( t \ne 0 \) (excluding the north pole itself):
\[
t = \frac{2}{a^2 + b^2 + 1}
\]
Substitute \( t \) back into the parameterization:
\[
x_0 = \frac{2a}{a^2 + b^2 + 1}, \quad y_0 = \frac{2b}{a^2 + b^2 + 1}, \quad u_0 = 1 - t = \frac{a^2 + b^2 - 1}{a^2 + b^2 + 1}
\]
These formulas match the stereographic projection coordinates exactly.

---

<a name="section-1.6"></a>

### Problems 1 – 40 · Complete Solutions

---

> **Key Concepts for Applications**
>
> 1. **Quadratic Formula:** For the complex quadratic equation \( az^2 + bz + c = 0 \):
>    \[
>    z = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
>    \]
> 2. **Exponential Form:** A complex number in polar form can be written compactly using Euler's formula \( e^{i\theta} = \cos\theta + i\sin\theta \):
>    \[
>    z = r e^{i\theta}
>    \]
> 3. **Differential Equations:** For a homogeneous linear second-order DE \( ay'' + by' + cy = 0 \) with real coefficients, if the roots of the characteristic equation \( ar^2 + br + c = 0 \) are \( \alpha \pm i\beta \), the general solution is:
>    \[
>    y = e^{\alpha x}(c_1 \cos(\beta x) + c_2 \sin(\beta x))
>    \]
> 4. **LRC Series Circuits:** The charge \( q_p(t) \) and current \( ip(t) = \frac{dq_p}{dt} \) satisfy:
>    \[
>    L \frac{d^2q}{dt^2} + R \frac{dq}{dt} + \frac{1}{C} q = E_0 \cos(\gamma t)
>    \]
>    The complex impedance is \( Z_c = R + j\left(L\gamma - \frac{1}{C\gamma}\right) = R + jX \), and the impedance is \( Z = |Z_c| \).

---

## Problems 1 – 6

**Solve the given quadratic equation using the quadratic formula. Then factor the polynomial.**

### Problem 1: \( z^2 + iz - 2 = 0 \)
* **Coefficients:** \( a = 1, \, b = i, \, c = -2 \)
* **Discriminant:** \( b^2 - 4ac = i^2 - 4(1)(-2) = -1 + 8 = 7 \)
* **Roots:**
  \[
  z = \frac{-i \pm \sqrt{7}}{2} = \pm \frac{\sqrt{7}}{2} - \frac{1}{2}i
  \]
* **Factorization:**
  \[
  \boxed{\left(z - \frac{\sqrt{7}}{2} + \frac{1}{2}i\right)\left(z + \frac{\sqrt{7}}{2} + \frac{1}{2}i\right) = 0}
  \]

### Problem 2: \( iz^2 - z + i = 0 \)
* **Coefficients:** \( a = i, \, b = -1, \, c = i \)
* **Discriminant:** \( b^2 - 4ac = (-1)^2 - 4(i)(i) = 1 - 4(-1) = 5 \)
* **Roots:**
  \[
  z = \frac{1 \pm \sqrt{5}}{2i} = \frac{1 \pm \sqrt{5}}{2}(-i) = -\frac{1 \pm \sqrt{5}}{2}i
  \]
* **Factorization:**
  \[
  \boxed{i\left(z + \frac{1 + \sqrt{5}}{2}i\right)\left(z + \frac{1 - \sqrt{5}}{2}i\right) = 0}
  \]

### Problem 3: \( z^2 - (1 + i)z + 6 - 17i = 0 \)
* **Coefficients:** \( a = 1, \, b = -(1 + i), \, c = 6 - 17i \)
* **Discriminant:**
  \[
  b^2 - 4ac = (1 + i)^2 - 4(6 - 17i) = 2i - 24 + 68i = -24 + 70i
  \]
* **Square Roots of \( -24 + 70i \):**
  Solve \( (x + iy)^2 = -24 + 70i \implies x^2 - y^2 = -24, \, 2xy = 70 \implies xy = 35 \).
  The integer solutions are \( x = \pm 5, \, y = \pm 7 \) (since \( 25 - 49 = -24 \)).
  So, \( \sqrt{-24+70i} = \pm (5 + 7i) \).
* **Roots:**
  \[
  z = \frac{(1 + i) \pm (5 + 7i)}{2} \implies z_1 = 3 + 4i, \quad z_2 = -2 - 3i
  \]
* **Factorization:**
  \[
  \boxed{(z - 3 - 4i)(z + 2 + 3i) = 0}
  \]

### Problem 4: \( z^2 - (1 + 9i)z - 20 + 5i = 0 \)
* **Coefficients:** \( a = 1, \, b = -(1 + 9i), \, c = -20 + 5i \)
* **Discriminant:**
  \[
  b^2 - 4ac = (1 + 9i)^2 - 4(-20 + 5i) = 1 + 18i - 81 + 80 - 20i = -2i
  \]
* **Square Roots of \( -2i \):**
  \( -2i = 2 e^{-i\pi/2} \implies \sqrt{-2i} = \pm \sqrt{2} e^{-i\pi/4} = \pm \sqrt{2}\left(\frac{\sqrt{2}}{2} - \frac{\sqrt{2}}{2}i\right) = \pm (1 - i) \).
* **Roots:**
  \[
  z = \frac{(1 + 9i) \pm (1 - i)}{2} \implies z_1 = 1 + 4i, \quad z_2 = 5i
  \]
* **Factorization:**
  \[
  \boxed{(z - 1 - 4i)(z - 5i) = 0}
  \]

### Problem 5: \( z^2 + 2z - \sqrt{3}i = 0 \)
* **Coefficients:** \( a = 1, \, b = 2, \, c = -\sqrt{3}i \)
* **Discriminant:** \( b^2 - 4ac = 4 + 4\sqrt{3}i = 8 e^{i\pi/3} \)
* **Square Roots of \( 4 + 4\sqrt{3}i \):**
  \( \pm \sqrt{8} e^{i\pi/6} = \pm 2\sqrt{2} \left( \frac{\sqrt{3}}{2} + \frac{1}{2}i \right) = \pm (\sqrt{6} + \sqrt{2}i) \).
* **Roots:**
  \[
  z = \frac{-2 \pm (\sqrt{6} + \sqrt{2}i)}{2} = -1 \pm \left(\frac{\sqrt{6}}{2} + \frac{\sqrt{2}}{2}i\right)
  \]
* **Factorization:**
  \[
  \boxed{\left(z + 1 - \frac{\sqrt{6}}{2} - \frac{\sqrt{2}}{2}i\right)\left(z + 1 + \frac{\sqrt{6}}{2} + \frac{\sqrt{2}}{2}i\right) = 0}
  \]

### Problem 6: \( 3z^2 + (2 - 3i)z - 1 - 3i = 0 \)
* **Coefficients:** \( a = 3, \, b = 2 - 3i, \, c = -1 - 3i \)
* **Discriminant:** \( b^2 - 4ac = (2 - 3i)^2 - 12(-1 - 3i) = -5 - 12i + 12 + 36i = 7 + 24i \)
* **Square Roots of \( 7 + 24i \):** \( \pm (4 + 3i) \) (from Problem 15 in Exercises 1.4).
* **Roots:**
  \[
  z = \frac{-(2 - 3i) \pm (4 + 3i)}{6} \implies z_1 = \frac{2 + 6i}{6} = \frac{1}{3} + i, \quad z_2 = \frac{-6}{6} = -1
  \]
* **Factorization:**
  \[
  \boxed{3\left(z - \frac{1}{3} - i\right)(z + 1) = (3z - 1 - 3i)(z + 1) = 0}
  \]

---

## Problems 7 – 12

**Express the given complex number in the exponential form \( z = r e^{i\theta} \).**

### Problem 7: \( -10 \)
* \( r = 10, \, \theta = \pi \implies \boxed{10 e^{i\pi}} \)

### Problem 8: \( -2\pi i \)
* \( r = 2\pi, \, \theta = -\frac{\pi}{2} \implies \boxed{2\pi e^{-i\pi/2}} \)

### Problem 9: \( -4 - 4i \)
* \( r = 4\sqrt{2}, \, \theta = -\frac{3\pi}{4} \equiv \frac{5\pi}{4} \pmod{2\pi} \implies \boxed{4\sqrt{2} e^{5\pi/4 i}} \) (or \( 4\sqrt{2} e^{-3\pi/4 i} \))

### Problem 10: \( \frac{2}{1 + i} \)
* Simplify: \( \frac{2(1-i)}{2} = 1 - i \)
* \( r = \sqrt{2}, \, \theta = -\frac{\pi}{4} \implies \boxed{\sqrt{2} e^{-i\pi/4}} \)

### Problem 11: \( (3 - i)^2 \)
* Expand: \( (3 - i)^2 = 9 - 6i - 1 = 8 - 6i \)
* \( r = \sqrt{64 + 36} = 10 \), \( \theta = \arctan(-6/8) = \arctan(-3/4) \approx -0.64350 \) rad
* \[
  \boxed{10 e^{i \arctan(-3/4)}}
  \]

### Problem 12: \( (1 + i)^{20} \)
* \( 1 + i = \sqrt{2} e^{i\pi/4} \)
* Raise to power: \( (1+i)^{20} = (\sqrt{2})^{20} e^{20i\pi/4} = 1024 e^{5i\pi} = \boxed{1024 e^{i\pi}} \) (since \( 5\pi \equiv \pi \pmod{2\pi} \))

---

## Problems 13 – 16

**Find linearly independent solutions of the given homogeneous differential equation.**

### Problem 13: \( y'' - 4y' + 13y = 0 \)
* **Characteristic Equation:** \( m^2 - 4m + 13 = 0 \implies (m - 2)^2 + 9 = 0 \implies m = 2 \pm 3i \)
* **Linearly Independent Solutions:**
  \[
  \boxed{y_1 = e^{2x}\cos(3x), \quad y_2 = e^{2x}\sin(3x)}
  \]

### Problem 14: \( 3y'' + 2y' + y = 0 \)
* **Characteristic Equation:** \( 3m^2 + 2m + 1 = 0 \implies m = \frac{-2 \pm \sqrt{4 - 12}}{6} = -\frac{1}{3} \pm \frac{\sqrt{2}}{3}i \)
* **Linearly Independent Solutions:**
  \[
  \boxed{y_1 = e^{-x/3}\cos\left(\frac{\sqrt{2}}{3}x\right), \quad y_2 = e^{-x/3}\sin\left(\frac{\sqrt{2}}{3}x\right)}
  \]

### Problem 15: \( y'' + y' + y = 0 \)
* **Characteristic Equation:** \( m^2 + m + 1 = 0 \implies m = -\frac{1}{2} \pm \frac{\sqrt{3}}{2}i \)
* **Linearly Independent Solutions:**
  \[
  \boxed{y_1 = e^{-x/2}\cos\left(\frac{\sqrt{3}}{2}x\right), \quad y_2 = e^{-x/2}\sin\left(\frac{\sqrt{3}}{2}x\right)}
  \]

### Problem 16: \( y'' + 2y' + 4y = 0 \)
* **Characteristic Equation:** \( m^2 + 2m + 4 = 0 \implies m = \frac{-2 \pm \sqrt{4 - 16}}{2} = -1 \pm \sqrt{3}i \)
* **Linearly Independent Solutions:**
  \[
  \boxed{y_1 = e^{-x}\cos(\sqrt{3}x), \quad y_2 = e^{-x}\sin(\sqrt{3}x)}
  \]

---

## Problems 17 – 18

**Find the steady-state charge \( q_p(t) \) and steady-state current \( i_p(t) \) for the LRC-series circuit. Find the complex impedance \( Z_c \) and impedance \( Z \).**

### Problem 17: \( 0.5 \frac{d^2q}{dt^2} + 3 \frac{dq}{dt} + 12.5 q = 10\cos(5t) \)
* **Parameters:** \( L = 0.5, \, R = 3, \, C = 1/12.5 = 0.08, \, \gamma = 5 \)
* **Complex Impedance:**
  \[
  Z_c = R + j\left(L\gamma - \frac{1}{C\gamma}\right) = 3 + j\left(0.5(5) - \frac{1}{0.08(5)}\right) = 3 + j(2.5 - 2.5) = \boxed{3 + 0j}
  \]
* **Impedance:** \( Z = |Z_c| = \boxed{3} \)
* **Steady-State Charge \( q_p(t) \):**
  Write \( E(t) = 10\cos(5t) = \operatorname{Re}(10 e^{j5t}) \). Let \( q_p(t) = \operatorname{Re}(Q e^{j5t}) \).
  \[
  \left(-L\gamma^2 + jR\gamma + \frac{1}{C}\right) Q = 10 \implies (-12.5 + 15j + 12.5) Q = 10
  \]
  \[
  15j Q = 10 \implies Q = -\frac{2}{3}j
  \]
  \[
  q_p(t) = \operatorname{Re}\left(-\frac{2}{3}j e^{j5t}\right) = \operatorname{Re}\left(-\frac{2}{3}j (\cos(5t) + j\sin(5t))\right) = \boxed{\frac{2}{3}\sin(5t)}
  \]
* **Steady-State Current \( i_p(t) = \frac{dq_p}{dt} \):**
  \[
  i_p(t) = \frac{d}{dt}\left(\frac{2}{3}\sin(5t)\right) = \boxed{\frac{10}{3}\cos(5t)}
  \]
  *(Note: The textbook answers page contains a minor typo listing \( i_p(t) = \frac{10}{3}\sin(5t) \) instead of \( \cos(5t) \).)*

### Problem 18: \( \frac{d^2q}{dt^2} + 2 \frac{dq}{dt} + 2q = 100\sin(t) \)
* **Parameters:** \( L = 1, \, R = 2, \, C = 0.5, \, \gamma = 1 \)
* **Complex Impedance:**
  \[
  Z_c = R + j\left(L\gamma - \frac{1}{C\gamma}\right) = 2 + j\left(1 - \frac{1}{0.5}\right) = \boxed{2 - j}
  \]
* **Impedance:** \( Z = |Z_c| = \sqrt{2^2 + (-1)^2} = \boxed{\sqrt{5}} \)
* **Steady-State Charge \( q_p(t) \):**
  Write \( E(t) = 100\sin(t) = \operatorname{Im}(100 e^{jt}) \). Let \( q_p(t) = \operatorname{Im}(Q e^{jt}) \).
  \[
  \left(-L\gamma^2 + jR\gamma + \frac{1}{C}\right) Q = 100 \implies (-1 + 2j + 2) Q = 100
  \]
  \[
  (1 + 2j) Q = 100 \implies Q = \frac{100(1-2j)}{5} = 20 - 40j
  \]
  \[
  q_p(t) = \operatorname{Im}((20 - 40j)(\cos t + j\sin t)) = \boxed{20\sin t - 40\cos t}
  \]
* **Steady-State Current \( i_p(t) = \frac{dq_p}{dt} \):**
  \[
  i_p(t) = \frac{d}{dt}(20\sin t - 40\cos t) = \boxed{20\cos t + 40\sin t}
  \]

---

## Focus on Concepts (Problems 19 – 30)

### Problem 19
Solve \( z^4 - 2z^2 + 1 - 2i = 0 \).
Let \( u = z^2 \). The equation becomes \( u^2 - 2u + (1-2i) = 0 \).
Factor as:
\[
(u - 1)^2 - 2i = 0 \implies (u - 1)^2 = 2i
\]
The square roots of \( 2i \) are \( \pm (1+i) \). Thus:
\[
u - 1 = \pm (1+i) \implies u_1 = 2 + i, \quad u_2 = -i
\]
Now solve \( z^2 = u \):
* **Case 1: \( z^2 = -i \)**
  \[
  z = \pm e^{-i\pi/4} = \boxed{\pm \left( \frac{\sqrt{2}}{2} - \frac{\sqrt{2}}{2}i \right)}
  \]
* **Case 2: \( z^2 = 2 + i \)**
  Let \( z = x + iy \implies x^2 - y^2 = 2, \, 2xy = 1 \implies y = 1/(2x) \).
  \[
  x^2 - \frac{1}{4x^2} = 2 \implies 4x^4 - 8x^2 - 1 = 0 \implies x^2 = \frac{8 + \sqrt{80}}{8} = \frac{2+\sqrt{5}}{2}
  \]
  Taking the positive square root:
  \[
  x = \sqrt{\frac{\sqrt{5}+2}{2}}, \quad y = \sqrt{\frac{\sqrt{5}-2}{2}}
  \]
  Thus:
  \[
  z = \boxed{\pm \left( \sqrt{\frac{\sqrt{5}+2}{2}} + i \sqrt{\frac{\sqrt{5}-2}{2}} \right)}
  \]

### Problem 20
Prove that if \( z_1 \) is a root of \( az^2 + bz + c = 0 \) with real coefficients \( a, b, c \), then \( \bar{z}_1 \) is also a root.
*Proof:* Since \( z_1 \) is a root:
\[
a z_1^2 + b z_1 + c = 0
\]
Take the conjugate of both sides:
\[
\overline{a z_1^2 + b z_1 + c} = \bar{0} = 0
\]
Using conjugate properties:
\[
\bar{a} \bar{z}_1^2 + \bar{b} \bar{z}_1 + \bar{c} = 0
\]
Since \( a, b, c \) are real, \( \bar{a} = a, \, \bar{b} = b, \, \bar{c} = c \).
\[
a \bar{z}_1^2 + b \bar{z}_1 + c = 0
\]
which proves \( \bar{z}_1 \) is also a root of the equation.

### Problem 21
Factor \( 4z^2 + 12z + 34 = 0 \) given one root \( z_1 = -\frac{3}{2} + \frac{5}{2}i \).
By Problem 20, the second root must be the conjugate \( z_2 = -\frac{3}{2} - \frac{5}{2}i \).
Using the factorization formula \( a(z - z_1)(z - z_2) = 0 \):
\[
\boxed{4\left(z + \frac{3}{2} - \frac{5}{2}i\right)\left(z + \frac{3}{2} + \frac{5}{2}i\right) = 0}
\]

### Problem 22
Factor \( 5z^2 - 2z + 4 = 0 \) given one root \( z_1 = \frac{1}{5} + \frac{\sqrt{19}}{5}i \).
The conjugate root is \( z_2 = \frac{1}{5} - \frac{\sqrt{19}}{5}i \).
Factorization:
\[
\boxed{5\left(z - \frac{1}{5} - \frac{\sqrt{19}}{5}i\right)\left(z - \frac{1}{5} + \frac{\sqrt{19}}{5}i\right) = 0}
\]

### Problem 23
* **(a)** Find a quadratic polynomial equation for which \( 2-i \) is one root:
  Assuming real coefficients, the conjugate root is \( 2+i \).
  \[
  P(z) = (z - (2-i))(z - (2+i)) = (z - 2 + i)(z - 2 - i) = (z-2)^2 + 1 = \boxed{z^2 - 4z + 5 = 0}
  \]
* **(b) Is it unique?** No, because we can multiply the equation by any nonzero complex constant \( A \ne 0 \), yielding \( A(z^2 - 4z + 5) = 0 \), which has the same roots. Furthermore, if non-real coefficients are allowed, the second root does not have to be \( 2+i \), giving infinitely many monic quadratic polynomials.

### Problem 24
Prove that if the coefficients are not all real, the conjugate \( \bar{z}_1 \) of a root \( z_1 \) is not necessarily a root.
*Proof:* Let \( z_1 \) satisfy \( a z_1^2 + b z_1 + c = 0 \). Conjugating both sides:
\[
\bar{a} \bar{z}_1^2 + \bar{b} \bar{z}_1 + \bar{c} = 0
\]
Since at least one coefficient is not real, we have \( \bar{a} \ne a \), \( \bar{b} \ne b \), or \( \bar{c} \ne c \). Thus, we cannot substitute the original coefficients, meaning \( a \bar{z}_1^2 + b \bar{z}_1 + c \ne 0 \) in general, and the conjugate is not a root.

### Problem 25
Factor \( 3iz^2 + (9 - 16i)z - 17 - i \) given \( z_1 = 5 + 2i \).
* Use the sum of roots formula: \( z_1 + z_2 = -b/a = -\frac{9-16i}{3i} = \frac{16i-9}{3i} = \frac{16}{3} + 3i \).
* Find \( z_2 \):
  \[
  z_2 = \frac{16}{3} + 3i - (5 + 2i) = \frac{1}{3} + i
  \]
* Factorization:
  \[
  \boxed{3i(z - 5 - 2i)\left(z - \frac{1}{3} - i\right) = (z - 5 - 2i)(3iz - i + 3)}
  \]

### Problem 26
Factor \( 4z^2 + (-13 + 18i)z - 5 - 10i \) given \( z_1 = 3 - 4i \).
* Sum of roots: \( z_1 + z_2 = -b/a = -\frac{-13+18i}{4} = \frac{13}{4} - \frac{9}{2}i \).
* Find \( z_2 \):
  \[
  z_2 = \frac{13}{4} - \frac{9}{2}i - (3 - 4i) = \frac{1}{4} - \frac{1}{2}i
  \]
* Factorization:
  \[
  \boxed{4(z - 3 + 4i)\left(z - \frac{1}{4} + \frac{1}{2}i\right) = (z - 3 + 4i)(4z - 1 + 2i)}
  \]

### Problem 27
Substitute \( x = i\theta \) into the Maclaurin series for \( e^x \):
\[
e^{i\theta} = \sum_{n=0}^{\infty} \frac{(i\theta)^n}{n!} = 1 + i\theta - \frac{\theta^2}{2!} - i\frac{\theta^3}{3!} + \frac{\theta^4}{4!} + i\frac{\theta^5}{5!} - \dots
\]
Group the real and imaginary parts:
\[
e^{i\theta} = \left( 1 - \frac{\theta^2}{2!} + \frac{\theta^4}{4!} - \dots \right) + i \left( \theta - \frac{\theta^3}{3!} + \frac{\theta^5}{5!} - \dots \right)
\]
Identify the Taylor series expansions of \( \cos\theta \) and \( \sin\theta \):
\[
e^{i\theta} = \cos\theta + i\sin\theta \quad \text{(Euler's Formula)}
\]

### Problem 28
* **(a) Verify general solution:**
  Let \( y = c_1\cos\theta + c_2\sin\theta \implies y' = -c_1\sin\theta + c_2\cos\theta \implies y'' = -c_1\cos\theta - c_2\sin\theta = -y \).
  Thus \( y'' + y = 0 \). Since \( \cos\theta \) and \( \sin\theta \) are linearly independent, this is the general solution.
* **(b) Verify \( e^{i\theta} \) solution:**
  Let \( y = e^{i\theta} \implies y' = i e^{i\theta} \implies y'' = i^2 e^{i\theta} = -e^{i\theta} \).
  Thus \( y'' + y = 0 \) is satisfied.
* **(c) Determine coefficients:**
  Let \( e^{i\theta} = c_1\cos\theta + c_2\sin\theta \).
  * At \( \theta = 0 \implies e^0 = c_1\cos 0 + c_2\sin 0 \implies c_1 = 1 \).
  * Derivative: \( i e^{i\theta} = -c_1\sin\theta + c_2\cos\theta \).
  * At \( \theta = 0 \implies i = c_2 \implies c_2 = i \).
  Thus, \( e^{i\theta} = \cos\theta + i\sin\theta \).

### Problem 29
Find homogeneous linear second-order DE for which \( y = e^{-5x}\cos(2x) \) is a solution.
* The roots of the characteristic equation are \( m = -5 \pm 2i \).
* The characteristic equation is:
  \[
  (m - (-5 + 2i))(m - (-5 - 2i)) = (m+5)^2 + 4 = m^2 + 10m + 29 = 0
  \]
* The corresponding differential equation is:
  \[
  \boxed{y'' + 10y' + 29y = 0}
  \]

### Problem 30
* **(a) Differentiate circuit DE:**
  \[
  \frac{d}{dt}\left(L\frac{di}{dt} + Ri + \frac{1}{C}q\right) = \frac{d}{dt}(E_0 \sin\gamma t) \implies L\frac{d^2i}{dt^2} + R\frac{di}{dt} + \frac{1}{C}i = E_0\gamma\cos\gamma t
  \]
* **(b) Solve with undetermined coefficients:**
  Let \( i_{p1}(t) = A e^{j\gamma t} \). Substitute:
  \[
  \left(-\gamma^2 L + j\gamma R + \frac{1}{C}\right) A e^{j\gamma t} = E_0\gamma e^{j\gamma t}
  \]
  \[
  A = \frac{E_0\gamma}{1/C - L\gamma^2 + jR\gamma} = \frac{E_0}{R + j(L\gamma - 1/(C\gamma))} = \frac{E_0}{Z_c}
  \]
* **(c) Real Part Connection:**
  Since \( E_0\gamma\cos\gamma t = \operatorname{Re}(E_0\gamma e^{j\gamma t}) \), the solution is the real part:
  \[
  i_p(t) = \operatorname{Re}\left(A e^{j\gamma t}\right) = \operatorname{Re}\left(\frac{E_0}{Z_c} e^{j\gamma t}\right) = \operatorname{Re}\left(\frac{E_0}{|Z_c|e^{j\theta}} e^{j\gamma t}\right) = \frac{E_0}{Z}\cos(\gamma t - \theta)
  \]
  This matches the real-method solution (15).

---

## Computer Lab Assignments (Problems 31 – 38)

### Problem 31: Factor \( z^2 - 3iz - 2 \)
* Roots: \( (z - 2i)(z - i) = 0 \implies \boxed{(z - 2i)(z - i)} \).

### Problem 32: Factor \( z^2 - \sqrt{3}z - i \)
* Discriminant: \( 3 + 4i \). Square roots: \( \pm(2 + i) \).
* Roots: \( z = \frac{\sqrt{3} \pm (2 + i)}{2} \implies z_1 = \frac{\sqrt{3}+2}{2} + \frac{1}{2}i, \, z_2 = \frac{\sqrt{3}-2}{2} - \frac{1}{2}i \).
* Factorization:
  \[
  \boxed{\left(z - \frac{\sqrt{3}+2}{2} - \frac{1}{2}i\right)\left(z - \frac{\sqrt{3}-2}{2} + \frac{1}{2}i\right)}
  \]

### Problem 33: Factor \( iz^2 - (2 + 3i)z + 1 + 5i \)
* Solve \( z^2 - (3-2i)z + (5-i) = 0 \). Discriminant: \( -15 - 8i = (1 - 4i)^2 \).
* Roots: \( z = \frac{3-2i \pm (1-4i)}{2} \implies z_1 = 2 - 3i, \, z_2 = 1 + i \).
* Factorization:
  \[
  \boxed{i(z - 2 + 3i)(z - 1 - i)}
  \]

### Problem 34: Factor \( (3 + i)z^2 + (1 + 7i)z - 10 \)
* Solve using formula. Discriminant: \( (1+7i)^2 + 40(3+i) = 72 + 26i \).
* Square root of \( 72 + 26i \approx (8.544 + 1.522i)^2 \).
* Roots:
  * \( z_1 = \frac{-(1+7i) + (8.544+1.522i)}{2(3+i)} \approx 0.362 - 0.788i \)
  * \( z_2 = \frac{-(1+7i) - (8.544+1.522i)}{2(3+i)} \approx -1.162 - 1.412i \)

### Problems 35 – 38: CAS Equation Solving
* **Problem 35 (\( z^3 - 4z^2 + 10 = 0 \)):** Three roots (1 real, 2 complex conjugates).
* **Problem 36 (\( z^4 + 4iz^2 + 10i = 0 \)):** Four complex roots.
* **Problem 37 (\( z^5 - z - 12 = 0 \)):** Five complex roots.
* **Problem 38 (\( z^6 - z^4 + 3iz^3 - 1 = 0 \)):** Six complex roots.

---

## Projects (Problems 39 – 40)

### Problem 39: Cubic Formula
* **(a) depressed cubic:**
  Substitute \( z = x - a/3 \) into \( z^3 + az^2 + bz + c = 0 \). Expanding and simplifying yields:
  \[
  x^3 + \left(b - \frac{a^2}{3}\right)x + \left(c - \frac{ab}{3} + \frac{2a^3}{27}\right) = 0 \implies x^3 = mx + n
  \]
  where:
  \[
  m = \frac{a^2}{3} - b \quad \text{and} \quad n = \frac{ab}{3} - c - \frac{2a^3}{27}
  \]
* **(b) depressed cubic for \( z^3 + 3z^2 - 3z - 9 = 0 \):**
  \( a = 3, \, b = -3, \, c = -9 \implies z = x - 1 \).
  * \( m = 3 - (-3) = 6 \)
  * \( n = -3 - (-9) - 2 = 4 \)
  * Depressed cubic: \( \boxed{x^3 = 6x + 4} \)
* **(c) solve depressed cubic:**
  Applying the formula:
  \[
  x = [2 + \sqrt{4-8}]^{1/3} + [2 - \sqrt{4-8}]^{1/3} = (2+2i)^{1/3} + (2-2i)^{1/3}
  \]
  Evaluate the roots:
  \( (2+2i)^{1/3} = \sqrt{2}e^{i\pi/12} \) and \( (2-2i)^{1/3} = \sqrt{2}e^{-i\pi/12} \).
  Adding them:
  \[
  x_1 = \sqrt{2}\left(e^{i\pi/12} + e^{-i\pi/12}\right) = 2\sqrt{2}\cos(\pi/12) = 2\sqrt{2}\left(\frac{\sqrt{6}+\sqrt{2}}{4}\right) = \sqrt{3} + 1
  \]
  This yields \( z_1 = x_1 - 1 = \boxed{\sqrt{3}} \).
  The other two roots correspond to adding multiples of \( 2\pi/3 \) to arguments, yielding:
  \[
  z_2 = -\sqrt{3}, \quad z_3 = -3
  \]
  which perfectly match the factors of \( (z^2 - 3)(z + 3) = 0 \).

### Problem 40: Complex Matrices
* **(a) Classification:**
  * \( A \) is **skew-Hermitian** since \( \bar{A}^T = -A \).
  * \( B \) is **unitary** since \( \bar{B}^T = B^{-1} \).
  * \( C \) is **Hermitian** since \( \bar{C}^T = C \).
* **(b) Hermitian Diagonal:**
  The elements on the main diagonal of a Hermitian matrix must be **real**.
  *Proof:* For diagonal elements, \( A_{ii} = \bar{A}_{ii} \), which is only possible if \( A_{ii} \in \mathbb{R} \).
* **(c) Skew-Hermitian Diagonal:**
  The diagonal elements of a skew-Hermitian matrix must be **pure imaginary or zero**.
  *Proof:* \( A_{ii} = -\bar{A}_{ii} \implies \operatorname{Re}(A_{ii}) = 0 \).
* **(d) Hermitian Eigenvalues:**
  Eigenvalues of a Hermitian matrix are **real**.
  *Proof:* Let \( Ax = \lambda x \). Then \( x^H A x = \lambda x^H x \). Taking the conjugate transpose yields \( x^H A^H x = \bar{\lambda} x^H x \). Since \( A^H = A \), we have \( \lambda x^H x = \bar{\lambda} x^H x \), which implies \( \lambda = \bar{\lambda} \) since \( x^H x \ne 0 \).
* **(e) Skew-Hermitian Eigenvalues:**
  Eigenvalues of a skew-Hermitian matrix are **pure imaginary or zero**.
  *Proof:* Let \( Ax = \lambda x \). Then \( A = iH \) where \( H \) is Hermitian. Eigenvalues of Skew-Hermitian are \( i \times \text{eigenvalues of Hermitian} \), which are real, thus they are pure imaginary or zero.
* **(f) Unitary Eigenvalues:**
  Eigenvalues of a unitary matrix are **unimodular** (\( |\lambda| = 1 \)), located on the **unit circle** in the complex plane.
* **(g) Unitary Determinant:**
  \( A^H A = I \implies \det(A^H)\det(A) = 1 \implies \bar{\det(A)}\det(A) = 1 \implies |\det(A)|^2 = 1 \implies |\det(A)| = 1 \).
* **(i) Real Analogues:**
  * Hermitian \( \rightarrow \) **Symmetric**
  * Skew-Hermitian \( \rightarrow \) **Skew-Symmetric**
  * Unitary \( \rightarrow \) **Orthogonal**

---

<a name="chapter-1-review"></a>

### Problems 1 – 50 · Complete Solutions

---

## Problems 1 – 22: True / False Questions

**Answer True or False. If the statement is false, justify your answer by explaining why it is false or providing a counterexample; if true, justify it by proving the statement or citing an appropriate result.**

### Problem 1: \( \operatorname{Re}(z_1z_2) = \operatorname{Re}(z_1)\operatorname{Re}(z_2) \)
* **Answer:** **False**
* **Counterexample:** Let \( z_1 = i \) and \( z_2 = i \).
  * LHS: \( \operatorname{Re}(z_1z_2) = \operatorname{Re}(i^2) = \operatorname{Re}(-1) = -1 \)
  * RHS: \( \operatorname{Re}(z_1)\operatorname{Re}(z_2) = \operatorname{Re}(i)\operatorname{Re}(i) = 0 \times 0 = 0 \)
  Since \( -1 \ne 0 \), the statement is false.

### Problem 2: \( \operatorname{Im}(4 + 7i) = 7i \)
* **Answer:** **False**
* **Justification:** The imaginary part of a complex number \( z = x + iy \) is the real number \( y \), not the imaginary term \( iy \). Thus, \( \operatorname{Im}(4 + 7i) = 7 \), which is a real number.

### Problem 3: \( |z - 1| = |\bar{z} - 1| \)
* **Answer:** **True**
* **Proof:** Since \( \bar{1} = 1 \), we can use the property of conjugation \( |w| = |\bar{w}| \):
  \[
  |\bar{z} - 1| = |\overline{z - 1}| = |z - 1|
  \]
  This is geometrically interpreted as: the distance from \( z \) to \( 1 \) is equal to the distance from its reflection \( \bar{z} \) to \( 1 \).

### Problem 4: If \( \operatorname{Im}(z) > 0 \), then \( \operatorname{Re}(1/z) > 0 \).
* **Answer:** **False**
* **Counterexample:** Let \( z = -1 + i \implies \operatorname{Im}(z) = 1 > 0 \).
  \[
  \frac{1}{z} = \frac{1}{-1+i} = \frac{-1-i}{2} = -\frac{1}{2} - \frac{1}{2}i
  \]
  Here, \( \operatorname{Re}(1/z) = -1/2 < 0 \). Thus, the statement is false.

### Problem 5: \( i < 10i \)
* **Answer:** **False**
* **Justification:** The complex number system \( \mathbb{C} \) is not an ordered field. Relational operators such as \( < \) and \( > \) have no meaning for non-real complex numbers.

### Problem 6: If \( z \ne 0 \), then \( \operatorname{Arg}(z + \bar{z}) = 0 \).
* **Answer:** **False**
* **Counterexample:** Let \( z = -2 + i \implies \bar{z} = -2 - i \).
  Then \( z + \bar{z} = -4 \). The principal argument of the negative real number \( -4 \) is \( \operatorname{Arg}(-4) = \pi \ne 0 \).

### Problem 7: \( |x + iy| \le |x| + |y| \)
* **Answer:** **True**
* **Proof:** By definition, \( |x + iy| = \sqrt{x^2 + y^2} \). Since \( x^2 \ge 0 \) and \( y^2 \ge 0 \):
  \[
  x^2 + y^2 \le x^2 + 2|x||y| + y^2 = (|x| + |y|)^2
  \]
  Taking the square root of both sides gives \( \sqrt{x^2+y^2} \le |x| + |y| \).

### Problem 8: \( \arg(\bar{z}) = \arg(1/z) \)
* **Answer:** **True**
* **Proof:** We know that \( \arg(\bar{z}) = -\arg(z) \pmod{2\pi} \) and \( \arg(1/z) = -\arg(z) \pmod{2\pi} \). Thus, the two sets of arguments are identical.

### Problem 9: If \( \bar{z} = -z \), then \( z \) is pure imaginary.
* **Answer:** **True**
* **Proof:** Let \( z = x + iy \implies \bar{z} = x - iy \).
  Set \( x - iy = -(x + iy) = -x - iy \implies 2x = 0 \implies x = 0 \).
  Thus \( z = iy \), which is a pure imaginary number.

### Problem 10: \( \arg(-2 + 10i) = \pi - \tan^{-1}(5) + 2n\pi \) for \( n \in \mathbb{Z} \).
* **Answer:** **True**
* **Justification:** The point \( z = -2 + 10i \) lies in Quadrant II. The reference angle is \( \theta_R = \tan^{-1}(|10/-2|) = \tan^{-1}(5) \).
  The argument in Quadrant II is \( \theta = \pi - \theta_R + 2n\pi = \pi - \tan^{-1}(5) + 2n\pi \).

### Problem 11: If \( z \) is a root of \( a_n z^n + \dots + a_0 = 0 \), then \( \bar{z} \) is also a root.
* **Answer:** **False**
* **Counterexample:** Let the equation be \( z^2 - iz = 0 \). Here the coefficients are not all real.
  The root \( z_1 = i \) satisfies \( i^2 - i(i) = -1 + 1 = 0 \).
  However, the conjugate \( \bar{z}_1 = -i \) gives \( (-i)^2 - i(-i) = -1 - 1 = -2 \ne 0 \).

### Problem 12: For any nonzero complex number \( z \), there are an infinite number of values for \( \arg(z) \).
* **Answer:** **True**
* **Justification:** The argument is a multi-valued function defined by \( \arg(z) = \operatorname{Arg}(z) + 2n\pi \) for \( n \in \mathbb{Z} \). Since there are infinitely many integers \( n \), there are infinitely many values.

### Problem 13: If \( |z - 2| < 2 \), then \( |\operatorname{Arg}(z)| < \pi/2 \).
* **Answer:** **True**
* **Justification:** The set \( |z - 2| < 2 \) is an open disk of radius 2 centered at \( 2 \). This disk lies entirely in the right half-plane \( \operatorname{Re}(z) > 0 \). Any point in the right half-plane has a principal argument in the open interval \( (-\pi/2, \pi/2) \), so \( |\operatorname{Arg}(z)| < \pi/2 \).

### Problem 14: The set \( S \) of complex numbers \( z = x + iy \) whose real and imaginary parts are related by \( y = \sin x \) is a bounded set.
* **Answer:** **False**
* **Justification:** Although the imaginary part \( y \) is bounded (\( -1 \le y \le 1 \)), the real part \( x \) can be any real number and extends to infinity. Thus, no circle of finite radius can enclose \( S \).

### Problem 15: The set \( S \) of complex numbers satisfying \( |z| < 1 \) or \( |z - 3i| < 1 \) is a domain.
* **Answer:** **False**
* **Justification:** A domain must be open and **connected**. The set \( S \) is the union of two open disks centered at \( 0 \) and \( 3i \). The distance between the centers is \( 3 \), which is greater than the sum of the radii \( 1 + 1 = 2 \). Thus the two disks are disjoint, making \( S \) disconnected, so it cannot be a domain.

### Problem 16: If the set \( A \) of real parts of \( S \) is bounded and the set \( B \) of imaginary parts of \( S \) is bounded, then \( S \) is bounded.
* **Answer:** **True**
* **Proof:** Since \( A \) is bounded, there exists \( M_1 > 0 \) such that \( |x| < M_1 \) for all \( x \in A \). Since \( B \) is bounded, there exists \( M_2 > 0 \) such that \( |y| < M_2 \) for all \( y \in B \).
  By the triangle inequality, for any \( z = x + iy \in S \):
  \[
  |z| \le |x| + |y| < M_1 + M_2
  \]
  Thus, \( S \) is bounded by \( R = M_1 + M_2 \).

### Problem 17: The sector defined by \( -\pi/6 < \arg(z) \le \pi/6 \) is neither open nor closed.
* **Answer:** **True**
* **Justification:** The boundary consists of two rays: \( \theta = \pi/6 \) (which is included in the set) and \( \theta = -\pi/6 \) (which is excluded). Since the set contains some but not all of its boundary points, it is neither open nor closed.

### Problem 18: For \( z \ne 0 \), there are exactly five values of \( z^{3/5} = (z^3)^{1/5} \).
* **Answer:** **True**
* **Justification:** For any nonzero complex number \( w = z^3 \), there are exactly \( 5 \) distinct values for the fifth root \( w^{1/5} \).

### Problem 19: A boundary point of a set \( S \) is a point in \( S \).
* **Answer:** **False**
* **Counterexample:** Let \( S \) be the open disk \( |z| < 1 \). The point \( z_0 = 1 \) is a boundary point of \( S \) since any neighborhood of \( 1 \) contains points in \( S \) and points outside \( S \), yet \( 1 \notin S \).

### Problem 20: The complex plane with the real and imaginary axes deleted has no boundary points.
* **Answer:** **False**
* **Justification:** The deleted axes themselves are the boundary points of the set, because any neighborhood of a point on either axis contains points in the four quadrants (which are in the set) and points on the axes (which are not in the set).

### Problem 21: \( \operatorname{Im}(e^{i\theta}) = \sin\theta \)
* **Answer:** **True**
* **Justification:** By Euler's formula, \( e^{i\theta} = \cos\theta + i\sin\theta \), so the imaginary part is indeed \( \sin\theta \).

### Problem 22: The equation \( z^n = 1 \), \( n \ge 1 \), will have only real solutions for \( n=1 \) and \( n=2 \).
* **Answer:** **True**
* **Justification:** The roots are the \( n \)-th roots of unity. For \( n=1 \), \( z=1 \). For \( n=2 \), \( z=\pm 1 \). For \( n \ge 3 \), the roots lie on the vertices of a regular polygon inscribed in the unit circle, meaning there will always be non-real solutions in the upper/lower half-planes.

---

## Problems 23 – 50: Fill in the Blanks

### Problem 23: If \( a + ib = \frac{3 - i}{2+3i} + \frac{2 - 2i}{1 - 5i} \), then \( a = \underline{\quad} \) and \( b = \underline{\quad} \).
* **First term:**
  \[
  \frac{3-i}{2+3i} = \frac{(3-i)(2-3i)}{13} = \frac{6 - 3 - 11i}{13} = \frac{3}{13} - \frac{11}{13}i
  \]
* **Second term:**
  \[
  \frac{2-2i}{1-5i} = \frac{(2-2i)(1+5i)}{26} = \frac{2 + 10 + 8i}{26} = \frac{12+8i}{26} = \frac{6}{13} + \frac{4}{13}i
  \]
* **Sum:**
  \[
  a + ib = \left(\frac{3}{13} + \frac{6}{13}\right) + i\left(-\frac{11}{13} + \frac{4}{13}\right) = \frac{9}{13} - \frac{7}{13}i
  \]
* **Answers:** \( a = \boxed{9/13} \), \( b = \boxed{-7/13} \)

### Problem 24: If \( z = \frac{4i}{-3 - 4i} \), then \( |z| = \underline{\quad} \).
* Apply modulus property:
  \[
  |z| = \frac{|4i|}{|-3 - 4i|} = \frac{4}{\sqrt{9 + 16}} = \frac{4}{5}
  \]
* **Answer:** \( \boxed{4/5} \)

### Problem 25: If \( |z| = \operatorname{Re}(z) \), then \( z \) is \( \underline{\quad} \).
* Let \( z = x+iy \implies \sqrt{x^2+y^2} = x \implies x \ge 0 \) and \( x^2 + y^2 = x^2 \implies y = 0 \).
* **Answer:** **a nonnegative real number** (or lies on the positive real axis including the origin).

### Problem 26: If \( z = 3 + 4i \), then \( \operatorname{Re}(z/\bar{z}) = \underline{\quad} \).
* Calculate quotient:
  \[
  \frac{z}{\bar{z}} = \frac{3+4i}{3-4i} = \frac{(3+4i)^2}{25} = \frac{9 - 16 + 24i}{25} = -\frac{7}{25} + \frac{24}{25}i
  \]
* **Answer:** \( \boxed{-7/25} \)

### Problem 27: The principal argument of \( z = -1 - i \) is \( \underline{\quad} \).
* \( z \) lies in Quadrant III with equal real and imaginary parts.
* **Answer:** \( \boxed{-3\pi/4} \)

### Problem 28: For \( z_1 = x_1 + iy_1 \) and \( z_2 = x_2 + iy_2 \), \( \bar{z}_1^2 + \bar{z}_2^2 = \underline{\quad} \).
* Using properties of conjugation:
  \[
  \bar{z}_1^2 + \bar{z}_2^2 = \overline{z_1^2} + \overline{z_2^2} = \overline{z_1^2 + z_2^2}
  \]
* **Answer:** \( \boxed{\overline{z_1^2 + z_2^2}} \)

### Problem 29: For \( (1 + i) \):
Let \( 1+i = \sqrt{2}e^{i\pi/4} \).
* **arg\(((1+i)^5)\):** \( 5 \times \pi/4 = \boxed{5\pi/4} \).
* **\( |(1+i)^6| \):** \( (\sqrt{2})^6 = \boxed{8} \).
* **Im\(((1+i)^7)\):** \( (1+i)^7 = (\sqrt{2})^7 e^{i 7\pi/4} = 8\sqrt{2} \left(\frac{\sqrt{2}}{2} - \frac{\sqrt{2}}{2}i\right) = 8 - 8i \implies \boxed{-8} \).
* **Re\(((1+i)^8)\):** \( (1+i)^8 = (\sqrt{2})^8 e^{i 2\pi} = 16 \implies \boxed{16} \).

### Problem 30: \( \left( \frac{1}{2} + \frac{\sqrt{3}}{2}i \right)^{483} = \underline{\quad} \).
* Base is \( e^{i\pi/3} \).
* Raise to power: \( e^{i 483\pi/3} = e^{i 161\pi} = e^{i\pi} = -1 \) (since \( 161 \equiv 1 \pmod 2 \)).
* **Answer:** \( \boxed{-1} \)

### Problem 31: If \( z \) is in the second quadrant, then \( i\bar{z} \) is in the \( \underline{\quad} \) quadrant.
* Let \( z = x + iy \) with \( x < 0, y > 0 \).
* Conjugate: \( \bar{z} = x - iy \).
* Multiply by \( i \): \( i\bar{z} = i(x - iy) = y + ix \).
* Since \( y > 0 \) and \( x < 0 \), the real part is positive and the imaginary part is negative.
* **Answer:** **fourth**

### Problem 32: \( i^{127} - 5i^9 + 2i - 1 = \underline{\quad} \).
* \( i^{127} = i^{124} \cdot i^3 = -i \)
* \( i^9 = i^8 \cdot i = i \)
* Sum: \( -i - 5i + 2i - 1 = -4i - 1 \).
* **Answer:** \( \boxed{-1 - 4i} \)

### Problem 33: Of the three points \( z_1 = 2.5 + 1.9i \), \( z_2 = 1.5 - 2.9i \), and \( z_3 = -2.4 + 2.2i \), \( \underline{\quad} \) is the farthest from the origin.
* Calculate moduli:
  * \( |z_1| = \sqrt{6.25 + 3.61} = \sqrt{9.86} \approx 3.14 \)
  * \( |z_2| = \sqrt{2.25 + 8.41} = \sqrt{10.66} \approx 3.26 \)
  * \( |z_3| = \sqrt{5.76 + 4.84} = \sqrt{10.60} \approx 3.25 \)
* **Answer:** \( \boxed{z_2} \)

### Problem 34: If \( 3i\bar{z} - 2z = 6 \), then \( z = \underline{\quad} \).
* Let \( z = x+iy \implies \bar{z} = x-iy \).
  \[
  3i(x - iy) - 2(x + iy) = 6 \implies 3ix + 3y - 2x - 2iy = 6
  \]
  \[
  (3y - 2x) + i(3x - 2y) = 6
  \]
* Set up system:
  1. \( -2x + 3y = 6 \)
  2. \( 3x - 2y = 0 \implies y = 1.5x \)
* Substitute: \( -2x + 4.5x = 6 \implies 2.5x = 6 \implies x = 2.4 \implies y = 3.6 \).
* **Answer:** \( \boxed{2.4 + 3.6i} \)

### Problem 35: If \( 2x - 3yi + 9 = -x + 2yi + 5i \), then \( z = \underline{\quad} \).
* Group terms:
  \[
  (2x + 9) - 3yi = -x + (2y + 5)i
  \]
* Equate parts:
  1. \( 2x + 9 = -x \implies 3x = -9 \implies x = -3 \)
  2. \( -3y = 2y + 5 \implies -5y = 5 \implies y = -1 \)
* **Answer:** \( \boxed{z = -3 - i} \)

### Problem 36: If \( z = \frac{5}{-\sqrt{3} + i} \), then \( \operatorname{Arg}(z) = \underline{\quad} \).
* Rewrite denominator: \( -\sqrt{3} + i = 2 e^{i 5\pi/6} \).
* So \( z = \frac{5}{2} e^{-i 5\pi/6} \).
* **Answer:** \( \boxed{-5\pi/6} \)

### Problem 37: If \( z \ne 0 \) is a real number, then \( z + z^{-1} \) is real. Other complex numbers \( z = x + iy \) for which \( z + z^{-1} \) is real are defined by \( |z| = \underline{\quad} \).
* Let \( z + 1/z = w \in \mathbb{R} \implies z + 1/z = \bar{z} + 1/\bar{z} \).
  \[
  (z - \bar{z}) - \left(\frac{z - \bar{z}}{|z|^2}\right) = 0 \implies (z - \bar{z})\left(1 - \frac{1}{|z|^2}\right) = 0
  \]
  For non-real \( z \) (\( z \ne \bar{z} \)), we must have \( 1 - 1/|z|^2 = 0 \implies |z| = 1 \).
* **Answer:** \( \boxed{1} \)

### Problem 38: The position vector of length \( 10 \) passing through \( (1, -1) \) is the same as the complex number \( z = \underline{\quad} \).
* Direction vector: \( 1 - i \), which has length \( \sqrt{2} \).
* Normalize and scale:
  \[
  z = 10 \frac{1 - i}{\sqrt{2}} = 5\sqrt{2} - 5\sqrt{2}i
  \]
* **Answer:** \( \boxed{5\sqrt{2} - 5\sqrt{2}i} \)

### Problem 39: The vector \( z = (2 + 2i)(\sqrt{3} + i) \) lies in the \( \underline{\quad} \) quadrant.
* Find the arguments:
  * \( \operatorname{Arg}(2 + 2i) = \pi/4 \)
  * \( \operatorname{Arg}(\sqrt{3} + i) = \pi/6 \)
* Total argument: \( \theta = \pi/4 + \pi/6 = 5\pi/12 \) (lies in \( (0, \pi/2) \)).
* **Answer:** **first**

### Problem 40: The boundary of the set \( S \) of complex numbers satisfying both \( \operatorname{Im}(z) > 0 \) and \( |z - 3i| > 1 \) is \( \underline{\quad} \).
* **Answer:** **the real axis and the circle \( |z - 3i| = 1 \)**.

### Problem 41: In words, the region in the complex plane for which \( \operatorname{Re}(z) < \operatorname{Im}(z) \) is \( \underline{\quad} \).
* **Answer:** **the set of all points \( z \) above the line \( y = x \)**.

### Problem 42: The region in the complex plane consisting of the two disks \( |z + i| \le 1 \) and \( |z - i| \le 1 \) is \( \underline{\quad} \) (connected/not connected).
* **Answer:** **connected** (they touch at the origin \( z=0 \)).

### Problem 43: The circles \( |z - z_0| = |\bar{z}_0 - z_0| \) and \( |z - \bar{z}_0| = |z_0 - \bar{z}_0| \) intersect on the \( \underline{\quad} \).
* Since the two circles are centered at conjugate points and have equal radii, their intersection is symmetric and lies on the line of symmetry.
* **Answer:** **real axis**

### Problem 44: In complex notation, an equation of the circle with center \( -1 \) that passes through \( 2 - i \) is \( \underline{\quad} \).
* Radius is the distance from \( -1 \) to \( 2-i \):
  \[
  R = |2 - i - (-1)| = |3 - i| = \sqrt{9 + 1} = \sqrt{10}
  \]
* Circle equation:
  \[
  \boxed{|z + 1| = \sqrt{10}}
  \]

### Problem 45: A positive integer \( n \) for which \( (1 + i)^n = 4096 \) is \( n = \underline{\quad} \).
* \( (1+i)^n = (\sqrt{2}e^{i\pi/4})^n = 2^{n/2} e^{in\pi/4} \).
* For this to be \( 4096 = 2^{12} \), we must have \( n/2 = 12 \implies n = 24 \).
* **Answer:** \( \boxed{24} \)

### Problem 46: \( \left| \frac{(4 - 5i)^{658}}{(5 + 4i)^{658}} \right| = \underline{\quad} \).
* Modulus of components: \( |4-5i| = \sqrt{16+25} = \sqrt{41} \) and \( |5+4i| = \sqrt{25+16} = \sqrt{41} \).
* The ratio of moduli is \( 1 \). Thus, raising to any power remains \( 1 \).
* **Answer:** \( \boxed{1} \)

### Problem 47: From \( (\cos\theta + i\sin\theta)^4 = \cos 4\theta + i\sin 4\theta \), we get the real trigonometric identities \( \cos 4\theta = \underline{\quad} \) and \( \sin 4\theta = \underline{\quad} \).
* Expand LHS using binomial theorem:
  \[
  \cos^4\theta + 4i\cos^3\theta\sin\theta - 6\cos^2\theta\sin^2\theta - 4i\cos\theta\sin^3\theta + \sin^4\theta
  \]
* **Answers:**
  * \( \boxed{\cos 4\theta = \cos^4\theta - 6\cos^2\theta\sin^2\theta + \sin^4\theta} \)
  * \( \boxed{\sin 4\theta = 4\cos^3\theta\sin\theta - 4\cos\theta\sin^3\theta} \)

### Problem 48: When \( z \) is a point within the open disk \( |z| < 4 \), an upper bound for \( |z^3 - 2z^2 + 6z + 2| \) is \( \underline{\quad} \).
* Apply the triangle inequality:
  \[
  |z^3 - 2z^2 + 6z + 2| \le |z|^3 + 2|z|^2 + 6|z| + 2
  \]
* Substitute the bound \( |z| < 4 \):
  \[
  < 4^3 + 2(4^2) + 6(4) + 2 = 64 + 32 + 24 + 2 = 122
  \]
* **Answer:** \( \boxed{122} \)

### Problem 49: A cubic polynomial equation \( az^3 + bz^2 + cz + d = 0 \) with real coefficients has at least one real root because \( \underline{\quad} \).
* **Answer:** **non-real complex roots must appear in conjugate pairs for a polynomial with real coefficients, meaning there can only be an even number of non-real roots, so a degree 3 equation must have at least one real root**.

### Problem 50: Mnemonic for Powers of \( i \)
* **(a)** Using the circular mnemonic:
  * \( i^5, i^9, i^{13}, i^{17}, \dots \implies \boxed{i} \)
  * \( i^6, i^{10}, i^{14}, i^{18}, \dots \implies \boxed{-1} \)
  * \( i^7, i^{11}, i^{15}, i^{19}, \dots \implies \boxed{-i} \)
  * \( i^8, i^{12}, i^{16}, i^{20}, \dots \implies \boxed{1} \)
* **(b)** Rule: Divide the exponent by 4 and look at the remainder \( r \):
  * Remainder \( 1 \implies i \)
  * Remainder \( 2 \implies -1 \)
  * Remainder \( 3 \implies -i \)
  * Remainder \( 0 \implies 1 \)
* Applying the rule:
  * \( i^{33} = i^1 = \boxed{i} \)
  * \( i^{68} = i^0 = \boxed{1} \)
  * \( i^{87} = i^3 = \boxed{-i} \)
  * \( i^{102} = i^2 = \boxed{-1} \)
  * \( i^{624} = i^0 = \boxed{1} \)

---