# Complex Analysis — Dennis G. Zill, 2nd Edition
## Chapter 1 · Section 1.1 — Complex Numbers and Their Properties
### Problems 1 – 20 · Complete Solutions


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


## Problem 1

**Evaluate each power of \( i \).**

\[
\text{(a) } i^{8} \qquad \text{(b) } i^{11} \qquad \text{(c) } i^{42} \qquad \text{(d) } i^{105}
\]

### Solution



---

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


## Problem 2

**Write each expression in \( a + ib \) form.**

### Solution



---

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


## Problem 3

**Write \( (5 - 9i) + (2 - 4i) \) in standard form.**

### Solution

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

### Solution

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

### Solution



---

## Problem 6

**Write \( i(4 - i) + 4i(1 + 2i) \) in standard form.**

### Solution

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

### Solution



---

## Problem 8

**Write \( \left(\dfrac{1}{2} - \dfrac{1}{4}i\right)\!\left(\dfrac{2}{3} + \dfrac{5}{3}i\right) \) in standard form.**

### Solution

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

### Solution

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

### Solution

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

### Solution

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

### Solution

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

### Solution

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

### Solution

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

### Solution

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

### Solution

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

### Solution

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

### Solution

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

### Solution

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

### Solution

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

### Solution

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

### Solution

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

### Solution

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

### Solution

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

### Solution

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

### Solution

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

### Solution

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

### Solution

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

### Solution

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

### Solution

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

### Solution

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

### Solution



---

## Problem 33

**Let \( z = x + iy \). Express \( \operatorname{Im}((1 + i)z) \) in terms of \( \operatorname{Re}(z) \) and \( \operatorname{Im}(z) \).**

### Solution

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

### Solution



---

## Problem 35

**Show that \( z_1 = -frac{\sqrt{2}}{2} + frac{\sqrt{2}}{2}i \) satisfies \( z^2 + i = 0 \). Find the additional solution \( z_2 \).**

### Solution



---

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


## Problem 36

**Show that \( z_1 = 1 + i \) and \( z_2 = -1 + i \) satisfy \( z^4 = -4 \). Find two additional solutions \( z_3 \) and \( z_4 \).**

### Solution



---

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


## Problem 37

**Solve the equation \( 2z = i(2 + 9i) \) for \( z = a + ib \).**

### Solution



---

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


## Problem 38

**Solve the equation \( z - 2\bar{z} + 7 - 6i = 0 \) for \( z = a + ib \).**

### Solution



---

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


## Problem 39

**Solve the equation \( z^2 = i \) for \( z = a + ib \).**

### Solution



---

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


## Problem 40

**Solve the equation \( \bar{z}^2 = 4z \) for \( z = a + ib \).**

### Solution



---

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


## Problem 41

**Solve the equation \( z + 2\bar{z} = \frac{2 - i}{1 + 3i} \) for \( z = a + ib \).**

### Solution



---

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


## Problem 42

**Solve the equation \( \frac{z}{1 + \bar{z}} = 3 + 4i \) for \( z = a + ib \).**

### Solution



---

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


## Problem 43

**Solve the system of equations for \( z_1 \) and \( z_2 \):**
\[
\begin{aligned}
i z_1 - i z_2 &= 2 + 10i \\
-z_1 + (1 - i) z_2 &= 3 - 5i
\end{aligned}
\]

### Solution



---

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


## Problem 44

**Solve the system of equations for \( z_1 \) and \( z_2 \):**
\[
\begin{aligned}
i z_1 + (1 + i) z_2 &= 1 + 2i \\
(2 - i) z_1 + 2i z_2 &= 4i
\end{aligned}
\]

### Solution



---

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



## Problem 45

**What can be said about the complex number \( z \) if \( z = \bar{z} \)? If \( z^2 = \bar{z}^2 \)?**

### Solution



---

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


## Problem 46

**Without doing any significant work, evaluate \( (1+i)^{5404} \).**

### Solution



---

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


## Problem 47

**For \( n \) a nonnegative integer, \( i^n \) can be one of four values: \( 1, i, -1, \) and \( -i \). In each of the following four cases, express the integer exponent \( n \) in terms of the symbol \( k \), where \( k = 0, 1, 2, \dots \):**
\[
\text{(a) } i^n = 1 \qquad \text{(b) } i^n = i \qquad \text{(c) } i^n = -1 \qquad \text{(d) } i^n = -i
\]

### Solution



---

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


## Problem 48

**There is an alternative to the division procedure. For example, the quotient \( (5+6i)/(1+i) \) must be expressible in the form \( a+ib \):**
\[
\frac{5+6i}{1+i} = a+ib \implies 5+6i = (1+i)(a+ib)
\]

### Solution

**Use this last result to find the given quotient. Use this method to find the reciprocal of \( 3-4i \).**

---

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


## Problem 49

**Assume for the moment that \( \sqrt{1+i} \) makes sense in the complex number system. How would you then demonstrate the validity of the equality:**
\[
\sqrt{1+i} = \sqrt{\frac{1}{2} + \frac{1}{2}\sqrt{2}} + i \sqrt{-\frac{1}{2} + \frac{1}{2}\sqrt{2}}
\]

### Solution



---

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


## Problem 50

**Suppose \( z_1 \) and \( z_2 \) are complex numbers. What can be said about \( z_1 \) or \( z_2 \) if \( z_1 z_2 = 0 \)?**

### Solution



---

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


## Problem 51

**Suppose the product \( z_1 z_2 \) of two complex numbers is a nonzero real constant. Show that \( z_2 = k \bar{z}_1 \), where \( k \) is a real number.**

### Solution



---

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


## Problem 52

**Without doing any significant work, explain why it follows immediately from (2) and (3) that \( z_1 \bar{z}_2 + \bar{z}_1 z_2 = 2\operatorname{Re}(z_1 \bar{z}_2) \).**

### Solution



---

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


## Problem 53

**Prove the proposition "The unity in the complex number system is unique."**

### Solution



---

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


## Problem 54

**Prove the proposition "The zero in the complex number system is unique."**

### Solution



---

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


## Problem 55

**A number system is said to be an ordered system provided it contains a subset \( P \) with the following two properties:**

### Solution

* **First, for any nonzero number \( x \) in the system, either \( x \) or \( -x \) (but not both) is in \( P \).**
* **Second, if \( x \) and \( y \) are numbers in \( P \), then both \( xy \) and \( x+y \) are in \( P \).**

**Discuss why the complex number system has no such subset \( P \).**

---

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
