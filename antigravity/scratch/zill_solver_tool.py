import os
import sys


def check_dependencies():
    try:
        import sympy  # noqa: F401
    except ImportError:
        print("SymPy is required. Installing now...")
        import subprocess
        try:
            subprocess.run([sys.executable, "-m", "pip", "install", "sympy"], check=True)
            print("SymPy installed successfully!\n")
        except Exception as e:
            print(f"Failed to install SymPy: {e}. Please run: pip install sympy")
            sys.exit(1)


check_dependencies()

import sympy as sp  # noqa: E402


def clear_screen():
    os.system('cls' if os.name == 'nt' else 'clear')


# ---------------------------------------------------------------------------
# Tool 1: Simplify complex expression
# ---------------------------------------------------------------------------

def simplify_expression():
    print("\n=== 1. SIMPLIFY COMPLEX EXPRESSION ===")
    print("Use 'I' for the imaginary unit, 'pi' for pi, 'sqrt(n)' for radicals.")
    print("Examples:  (1 + I)/(2 - I)   |   (3 - I)*(2 + 3*I)/(1 + I)")
    expr_str = input("\nExpression: ").strip()
    try:
        expr = sp.sympify(expr_str, locals={'I': sp.I, 'pi': sp.pi})
        simplified = sp.simplify(expr)

        real_part = sp.nsimplify(sp.re(simplified), rational=False)
        imag_part = sp.nsimplify(sp.im(simplified), rational=False)
        modulus   = sp.simplify(sp.sqrt(real_part**2 + imag_part**2))
        argument  = sp.simplify(sp.arg(simplified))

        print("\n--- Results ---")
        print(f"  Original expression  : {expr}")
        print(f"  Simplified           : {simplified}")
        print(f"  Cartesian form a+bi  : {real_part} + ({imag_part})*I")
        print(f"  Modulus |z|          : {modulus}", end="")
        try:
            print(f"  (approx. {float(modulus.evalf()):.6f})")
        except Exception:
            print()
        print(f"  Argument Arg(z) [rad]: {argument}", end="")
        try:
            print(f"  (approx. {float(argument.evalf()):.6f} rad)")
        except Exception:
            print()
        print(f"  Polar form           : {modulus} * exp(I * {argument})")
    except Exception as e:
        print(f"Error: {e}")
    input("\nPress Enter to return to main menu...")


# ---------------------------------------------------------------------------
# Tool 2: N-th roots of a complex number
# ---------------------------------------------------------------------------

def find_roots():
    print("\n=== 2. FIND N-TH ROOTS OF A COMPLEX NUMBER ===")
    print("Finds all n distinct roots of z^(1/n) using SymPy's solver.")
    print("Example: 4th roots of  -8 + 8*sqrt(3)*I")
    num_str = input("\nComplex number z (use I): ").strip()
    n_str   = input("Root degree n           : ").strip()
    try:
        z = sp.sympify(num_str, locals={'I': sp.I, 'pi': sp.pi})
        n = int(n_str)
        if n < 1:
            raise ValueError("n must be a positive integer.")

        x = sp.Symbol('x')
        roots = sp.solve(x**n - z, x)

        print(f"\nAll {n} root(s) of  {z}:")
        print("-" * 52)
        for idx, r in enumerate(roots):
            r_s = sp.simplify(r)
            print(f"\n  w_{idx} = {r_s}")
            print(f"       ~= {r_s.evalf()}")
            try:
                print(f"       |w_{idx}| = {float(sp.Abs(r_s).evalf()):.6f},  "
                      f"Arg = {float(sp.arg(r_s).evalf()):.6f} rad")
            except Exception:
                pass
    except Exception as e:
        print(f"Error: {e}")
    input("\nPress Enter to return to main menu...")


# ---------------------------------------------------------------------------
# Tool 3: Cauchy-Riemann equations and analyticity
# ---------------------------------------------------------------------------

def _is_zero(expr, x, y):
    """Return True if expr is identically zero, trying multiple strategies."""
    strategies = [
        sp.simplify,
        sp.trigsimp,
        lambda e: sp.expand(sp.simplify(e)),
        lambda e: sp.simplify(sp.expand_trig(sp.expand(e))),
    ]
    for fn in strategies:
        try:
            if fn(expr) == sp.S.Zero:
                return True
        except Exception:
            pass
    # Numerical spot-check at an unlikely-to-cancel rational point
    try:
        val = expr.subs([(x, sp.Rational(1, 3)), (y, sp.Rational(1, 7))])
        if abs(complex(val.evalf())) < 1e-10:
            return True
    except Exception:
        pass
    return False


def check_analyticity():
    print("\n=== 3. CAUCHY-RIEMANN & ANALYTICITY CHECK ===")
    print("Enter f(z) in terms of z.")
    print("Examples:  z**2 + 5*z   |   conjugate(z)   |   exp(z)   |   Abs(z)**2")
    f_str = input("\nf(z) = ").strip()
    try:
        z_sym = sp.Symbol('z')
        x, y  = sp.symbols('x y', real=True)

        f_z  = sp.sympify(f_str, locals={'z': z_sym, 'I': sp.I, 'pi': sp.pi})
        f_xy = f_z.subs(z_sym, x + sp.I * y)
        f_xy = sp.expand(f_xy)

        u = sp.expand(sp.re(f_xy))
        v = sp.expand(sp.im(f_xy))

        print(f"\n  u(x, y) = {u}")
        print(f"  v(x, y) = {v}")

        ux = sp.diff(u, x)
        uy = sp.diff(u, y)
        vx = sp.diff(v, x)
        vy = sp.diff(v, y)

        print("\n--- Cauchy-Riemann Equations ---")
        print(f"  du/dx = {ux}   |   dv/dy = {vy}")
        cr1 = _is_zero(ux - vy, x, y)
        print(f"  du/dx = dv/dy  ->  {'SATISFIED' if cr1 else 'FAILS'}")

        print(f"\n  du/dy = {uy}   |  -dv/dx = {-vx}")
        cr2 = _is_zero(uy + vx, x, y)
        print(f"  du/dy = -dv/dx ->  {'SATISFIED' if cr2 else 'FAILS'}")

        print()
        if cr1 and cr2:
            print("Result: f(z) IS ANALYTIC everywhere it is defined.")
            df = sp.simplify(sp.diff(f_z, z_sym))
            print(f"        f'(z) = {df}")
        else:
            print("Result: f(z) is NOT ANALYTIC (Cauchy-Riemann equations fail).")
    except Exception as e:
        print(f"Error: {e}")
    input("\nPress Enter to return to main menu...")


# ---------------------------------------------------------------------------
# Tool 4: Residue at a pole (uses SymPy's Laurent-series method)
# ---------------------------------------------------------------------------

def calculate_residues():
    print("\n=== 4. CALCULATE RESIDUE AT A POLE ===")
    print("Uses SymPy's residue() function (Laurent-series expansion).")
    print("Example: f(z) = exp(z)/(z*(z-1)**2),  pole at z0 = 1")
    f_str    = input("\nf(z) = ").strip()
    pole_str = input("Pole z0 = ").strip()
    try:
        z  = sp.Symbol('z')
        f  = sp.sympify(f_str,    locals={'z': z, 'I': sp.I, 'pi': sp.pi})
        z0 = sp.sympify(pole_str, locals={'I': sp.I, 'pi': sp.pi})

        res = sp.simplify(sp.residue(f, z, z0))

        print(f"\n  Res(f, z={z0}) = {res}")
        try:
            approx = complex(res.evalf())
            if abs(approx.imag) < 1e-12:
                print(f"                ~= {approx.real:.6f}")
            else:
                print(f"                ~= {approx.real:.6f} + ({approx.imag:.6f})*I")
        except Exception:
            pass
    except Exception as e:
        print(f"Error: {e}")
    input("\nPress Enter to return to main menu...")


# ---------------------------------------------------------------------------
# Tool 5: Parameterized contour integration
# ---------------------------------------------------------------------------

def contour_integral():
    print("\n=== 5. CONTOUR INTEGRATION ===")
    print("Evaluate  integral_C f(z) dz  along a parameterized curve z(t), t in [a, b].")
    print()
    print("Examples:")
    print("  f(z)=z**2, z(t)=exp(I*t), a=0, b=2*pi   (unit circle)")
    print("  f(z)=1/z,  z(t)=exp(I*t), a=0, b=2*pi   (result: 2*pi*I)")
    print("  f(z)=z,    z(t)=t+I*t,    a=0, b=1       (straight line 0 to 1+I)")

    f_str  = input("\nf(z) = ").strip()
    zt_str = input("z(t) = ").strip()
    a_str  = input("a (lower t limit) = ").strip()
    b_str  = input("b (upper t limit) = ").strip()
    try:
        t = sp.Symbol('t', real=True)
        z = sp.Symbol('z')

        _locals_t = {'t': t, 'I': sp.I, 'pi': sp.pi, 'E': sp.E}
        f_z  = sp.sympify(f_str,  locals={'z': z,  'I': sp.I, 'pi': sp.pi, 'E': sp.E})
        z_t  = sp.sympify(zt_str, locals=_locals_t)
        a    = sp.sympify(a_str,  locals={'pi': sp.pi})
        b    = sp.sympify(b_str,  locals={'pi': sp.pi})

        dz_dt     = sp.diff(z_t, t)
        integrand = sp.expand(f_z.subs(z, z_t) * dz_dt)

        print(f"\n  f(z(t)) * z'(t) = {integrand}")
        print("  Computing integral (may take a moment for complex contours)...")

        raw_result = sp.integrate(integrand, (t, a, b))

        # Fall back to numerical if symbolic integration left an unevaluated Integral
        if isinstance(raw_result, sp.Integral):
            print("\n  [WARNING] Symbolic integration did not fully evaluate.")
            print("            Falling back to numerical approximation...")
            try:
                approx = complex(sp.N(raw_result))
                print(f"\n  integral_C f(z) dz ~= {approx.real:.6f} + ({approx.imag:.6f})*I"
                      f"  [NUMERICAL]")
            except Exception as num_e:
                print(f"  Numerical fallback also failed: {num_e}")
        else:
            result = sp.simplify(raw_result)
            print(f"\n  integral_C f(z) dz = {result}")
            try:
                approx = complex(result.evalf())
                if abs(approx.imag) < 1e-10:
                    print(f"                   ~= {approx.real:.6f}")
                else:
                    print(f"                   ~= {approx.real:.6f} + ({approx.imag:.6f})*I")
            except Exception:
                pass
    except Exception as e:
        print(f"Error: {e}")
    input("\nPress Enter to return to main menu...")


# ---------------------------------------------------------------------------
# Tool 6: Taylor / Laurent series expansion
# ---------------------------------------------------------------------------

def series_expansion():
    print("\n=== 6. TAYLOR / LAURENT SERIES EXPANSION ===")
    print("Expand f(z) as a power series around z0 up to order n.")
    print("If f has a pole at z0, SymPy returns the Laurent series")
    print("(including negative-power terms).")
    print()
    print("Examples:")
    print("  f(z)=exp(z),       z0=0,  n=6")
    print("  f(z)=sin(z)/z,     z0=0,  n=8   (removable singularity; starts at z^0)")
    print("  f(z)=1/(z*(z-1)),  z0=1,  n=4   (Laurent at simple pole)")

    f_str  = input("\nf(z) = ").strip()
    z0_str = input("Expand around z0 = ").strip()
    n_str  = input("Order n (number of terms) = ").strip()
    try:
        z  = sp.Symbol('z')
        f  = sp.sympify(f_str,  locals={'z': z, 'I': sp.I, 'pi': sp.pi})
        z0 = sp.sympify(z0_str, locals={'I': sp.I, 'pi': sp.pi})
        n  = int(n_str)

        series = sp.series(f, z, z0, n)
        poly   = sp.collect(sp.expand(series.removeO()), z)

        print(f"\n  Series of {f} about z = {z0}  (up to O((z-{z0})^{n})):")
        print(f"\n    {series}")
        print(f"\n  Truncated approximation (no O term):")
        print(f"    {poly}")
    except Exception as e:
        print(f"Error: {e}")
    input("\nPress Enter to return to main menu...")


# ---------------------------------------------------------------------------
# Tool 7: Mobius (linear fractional) transformation
# ---------------------------------------------------------------------------

def _cross_ratio(p, p1, p2, p3):
    """
    Cross-ratio (p - p1)(p2 - p3) / ((p - p3)(p2 - p1)),
    with limit-correct handling when any pi is sp.oo.
    """
    if p1 == sp.oo:
        return (p2 - p3) / (p - p3)
    if p2 == sp.oo:
        return (p - p1) / (p - p3)
    if p3 == sp.oo:
        return (p - p1) / (p2 - p1)
    return ((p - p1) * (p2 - p3)) / ((p - p3) * (p2 - p1))


def mobius_transformation():
    print("\n=== 7. MOBIUS (LINEAR FRACTIONAL) TRANSFORMATION ===")
    print("Finds w = T(z) = (az+b)/(cz+d) mapping z1->w1, z2->w2, z3->w3.")
    print("Use 'oo' for the point at infinity.")
    print()
    print("Example: z1=1, z2=I, z3=-1  ->  w1=0, w2=1, w3=oo")

    def read_pt(label):
        s = input(f"  {label} = ").strip()
        if s.lower() in ('oo', 'inf', 'infinity'):
            return sp.oo
        return sp.sympify(s, locals={'I': sp.I, 'pi': sp.pi})

    try:
        print("\nSource points (z-plane):")
        z1, z2, z3 = read_pt("z1"), read_pt("z2"), read_pt("z3")
        print("Target points (w-plane):")
        w1, w2, w3 = read_pt("w1"), read_pt("w2"), read_pt("w3")

        z = sp.Symbol('z')
        w = sp.Symbol('w')

        lhs = _cross_ratio(w, w1, w2, w3)
        rhs = _cross_ratio(z, z1, z2, z3)

        solutions = sp.solve(sp.Eq(lhs, rhs), w)
        if not solutions:
            print("\nNo unique Mobius transformation found for these points.")
        else:
            T = sp.simplify(solutions[0])
            print(f"\n  T(z) = {T}")

            # Robustly extract coefficients a, b, c, d of (az+b)/(cz+d)
            # sp.Poly.nth() is immune to representation variations that break .coeff()
            numer, denom = sp.fraction(sp.together(T))
            numer = sp.expand(numer)
            denom = sp.expand(denom)
            try:
                a_c = sp.Poly(numer, z).nth(1)
                b_c = sp.Poly(numer, z).nth(0)
                c_c = sp.Poly(denom, z).nth(1)
                d_c = sp.Poly(denom, z).nth(0)
            except Exception:
                # Last-resort fallback
                a_c = numer.coeff(z, 1)
                b_c = numer.coeff(z, 0)
                c_c = denom.coeff(z, 1)
                d_c = denom.coeff(z, 0)
            det = sp.simplify(a_c * d_c - b_c * c_c)

            print(f"\n  Standard form (az+b)/(cz+d):")
            print(f"    a = {a_c},  b = {b_c},  c = {c_c},  d = {d_c}")
            print(f"    ad - bc = {det}  (must be nonzero for a valid transformation)")

            print(f"\n  Verification:")
            for zi, wi_exp, lbl in [(z1, w1, "z1"), (z2, w2, "z2"), (z3, w3, "z3")]:
                if zi == sp.oo:
                    mapped = sp.limit(T, z, sp.oo)
                else:
                    mapped = sp.simplify(T.subs(z, zi))
                match_ok = (sp.simplify(mapped - wi_exp) == 0) or (mapped == wi_exp)
                status = "OK" if match_ok else "?"
                print(f"    T({zi}) = {mapped}  (expected {wi_exp})  [{status}]")
    except Exception as e:
        print(f"Error: {e}")
    input("\nPress Enter to return to main menu...")


# ---------------------------------------------------------------------------
# Tool 8: Real integrals via the Residue Theorem
# ---------------------------------------------------------------------------

def real_integral_residue():
    print("\n=== 8. REAL INTEGRALS VIA THE RESIDUE THEOREM ===")
    print("Evaluate  integral_{-oo}^{oo} f(x) dx  for rational f(x) = P(x)/Q(x).")
    print("Algorithm: close the contour in the Upper Half-Plane (UHP),")
    print("collect all poles with Im(z) > 0, then result = 2*pi*I * sum(residues).")
    print()
    print("Examples:")
    print("  f(z) = 1/(z**2 + 1)             -> pi")
    print("  f(z) = 1/(z**2 + 1)**2          -> pi/2")
    print("  f(z) = 1/(z**4 + 1)             -> pi/sqrt(2)")
    print("  f(z) = z**2/(z**4 + 5*z**2 + 4) -> pi/6")

    f_str = input("\nf(z) = ").strip()
    try:
        z = sp.Symbol('z')
        f = sp.sympify(f_str, locals={'z': z, 'I': sp.I, 'pi': sp.pi})

        # Isolate denominator Q(z)
        numer, denom = sp.fraction(sp.together(f))
        denom_expanded = sp.expand(denom)
        print(f"\n  Numerator   P(z) = {sp.expand(numer)}")
        print(f"  Denominator Q(z) = {denom_expanded}")

        # Find poles via sp.solve; for polynomials also try sp.roots for completeness
        try:
            poles_list = sp.solve(denom_expanded, z)
        except Exception:
            poles_list = []

        try:
            roots_dict = sp.roots(sp.Poly(denom_expanded, z))
            for p in roots_dict:
                if not any(sp.simplify(p - q) == sp.S.Zero for q in poles_list):
                    poles_list.append(p)
        except Exception:
            pass

        if not poles_list:
            print("\n  Could not determine poles. Ensure f(z) is a rational function.")
            input("\nPress Enter to return to main menu...")
            return

        print(f"\n  All poles: {poles_list}")

        # Classify poles into UHP, real axis, LHP
        uhp_poles   = []
        real_poles  = []
        for p in poles_list:
            try:
                im_val = float(sp.im(sp.simplify(p)).evalf())
                if im_val > 1e-10:
                    uhp_poles.append(sp.simplify(p))
                elif abs(im_val) <= 1e-10:
                    real_poles.append(sp.simplify(p))
            except Exception:
                pass

        if real_poles:
            print(f"\n  [WARNING] Poles on the real axis detected: {real_poles}")
            print("            The standard UHP formula requires no real-axis poles.")

        if not uhp_poles:
            print("\n  No poles lie in the Upper Half-Plane (Im(z) > 0).")
            print("  The residue theorem method cannot be applied.")
            input("\nPress Enter to return to main menu...")
            return

        print(f"\n  UHP poles (Im > 0): {uhp_poles}")
        print()

        # Compute residues and sum
        residues = []
        for p in uhp_poles:
            res = sp.simplify(sp.residue(f, z, p))
            residues.append(res)
            print(f"  Res(f, z = {p})")
            print(f"       = {res}")
            try:
                approx = complex(res.evalf())
                print(f"      ~= {approx.real:.6f} + ({approx.imag:.6f})*I")
            except Exception:
                pass
            print()

        total_res  = sp.simplify(sum(residues))
        result_sym = sp.simplify(2 * sp.pi * sp.I * total_res)
        # Try to express cleanly (e.g. pi/2 instead of 3.14.../2)
        try:
            result_sym = sp.nsimplify(result_sym, [sp.pi, sp.sqrt(2), sp.sqrt(3)],
                                      rational=False)
        except Exception:
            pass

        print(f"  Sum of UHP residues = {total_res}")
        print(f"\n  integral_{{-oo}}^{{oo}} f(x) dx")
        print(f"      =  2 * pi * I * (sum of UHP residues)")
        print(f"      =  {result_sym}")
        try:
            approx = complex(result_sym.evalf())
            if abs(approx.imag) < 1e-10:
                print(f"     ~= {approx.real:.6f}")
            else:
                print(f"     ~= {approx.real:.6f} + ({approx.imag:.6f})*I")
        except Exception:
            pass
    except Exception as e:
        print(f"Error: {e}")
    input("\nPress Enter to return to main menu...")


# ---------------------------------------------------------------------------
# Tool 9: Harmonic conjugates (Milne-Thomson method)
# ---------------------------------------------------------------------------

def harmonic_conjugate():
    print("\n=== 9. HARMONIC CONJUGATES (MILNE-THOMSON METHOD) ===")
    print("Given a real harmonic function u(x, y), find its conjugate v(x, y)")
    print("such that f(z) = u + iv is analytic, using the Milne-Thomson method.")
    print()
    print("Examples:")
    print("  u = x**2 - y**2          (conjugate: 2*x*y)")
    print("  u = x**3 - 3*x*y**2      (conjugate: 3*x**2*y - y**3)")
    print("  u = exp(x)*cos(y)         (conjugate: exp(x)*sin(y))")
    print("  u = x/(x**2 + y**2)       (conjugate: -y/(x**2 + y**2))")

    u_str = input("\nu(x, y) = ").strip()
    try:
        x, y = sp.symbols('x y', real=True)
        z    = sp.Symbol('z')
        _sym_locals = {'x': x, 'y': y, 'pi': sp.pi, 'E': sp.E,
                       'exp': sp.exp, 'cos': sp.cos, 'sin': sp.sin, 'log': sp.log}
        u = sp.sympify(u_str, locals=_sym_locals)

        # ── Step 1: Verify harmonicity ──────────────────────────────────────
        uxx       = sp.diff(u, x, 2)
        uyy       = sp.diff(u, y, 2)
        laplacian = sp.simplify(uxx + uyy)

        print(f"\n  u_xx        = {sp.expand(uxx)}")
        print(f"  u_yy        = {sp.expand(uyy)}")
        print(f"  u_xx + u_yy = {laplacian}")

        is_harmonic = (sp.simplify(laplacian) == sp.S.Zero)
        if not is_harmonic:
            try:
                test_val = abs(complex(
                    laplacian.subs([(x, sp.Rational(1, 3)),
                                    (y, sp.Rational(1, 7))]).evalf()))
                is_harmonic = test_val < 1e-10
            except Exception:
                pass

        if not is_harmonic:
            print("\n  u(x, y) is NOT harmonic (Laplacian != 0).")
            print("  A harmonic conjugate does not exist.")
            input("\nPress Enter to return to main menu...")
            return

        print("\n  u(x, y) IS harmonic (satisfies Laplace's equation).")

        # ── Step 2: Milne-Thomson — build f'(z) ────────────────────────────
        ux = sp.diff(u, x)
        uy = sp.diff(u, y)

        print(f"\n  u_x(x, y) = {ux}")
        print(f"  u_y(x, y) = {uy}")

        # f'(z) = u_x(z, 0) - I * u_y(z, 0)
        ux_sub  = ux.subs([(x, z), (y, sp.S.Zero)])
        uy_sub  = uy.subs([(x, z), (y, sp.S.Zero)])
        f_prime = sp.simplify(ux_sub - sp.I * uy_sub)

        print(f"\n  Milne-Thomson:  f'(z) = u_x(z,0) - I * u_y(z,0)")
        print(f"                        = {f_prime}")

        # ── Step 3: Integrate f'(z) ─────────────────────────────────────────
        f_z = sp.simplify(sp.integrate(f_prime, z))
        print(f"\n  f(z) = integral f'(z) dz  =  {f_z}  +  C")

        # ── Step 4: Extract v(x, y) ─────────────────────────────────────────
        f_xy = sp.expand(f_z.subs(z, x + sp.I * y))
        u_recovered = sp.simplify(sp.re(f_xy))
        v           = sp.simplify(sp.im(f_xy))

        print(f"\n  Substituting z = x + iy into f(z):")
        print(f"    Re[f(x+iy)] = {u_recovered}  (should match u)")
        print(f"    Im[f(x+iy)] = {v}")
        print(f"\n  Harmonic conjugate:  v(x, y) = {v}  +  C_0")
        print(f"  (C_0 is an arbitrary real constant)")
        print(f"\n  Analytic function:   f(z) = {f_z}  +  C")

        # ── Step 5: Verify Cauchy-Riemann ───────────────────────────────────
        vx  = sp.diff(v, x)
        vy  = sp.diff(v, y)
        cr1 = _is_zero(sp.expand(ux - vy), x, y)
        cr2 = _is_zero(sp.expand(uy + vx), x, y)
        print(f"\n  Cauchy-Riemann verification:")
        print(f"    u_x = v_y  ?  {'SATISFIED' if cr1 else 'FAILS'}")
        print(f"    u_y = -v_x ?  {'SATISFIED' if cr2 else 'FAILS'}")

    except Exception as e:
        print(f"Error: {e}")
    input("\nPress Enter to return to main menu...")


# ---------------------------------------------------------------------------
# Main menu
# ---------------------------------------------------------------------------

def main_menu():
    while True:
        clear_screen()
        print("+====================================================+")
        print("|   DENNIS G. ZILL -- COMPLEX ANALYSIS SOLVER        |")
        print("|   A First Course in Complex Analysis (2nd Ed.)     |")
        print("+====================================================+")
        print("|  1. Simplify Complex Expressions (Cartesian/Polar) |")
        print("|  2. Find n-th Roots of a Complex Number            |")
        print("|  3. Check Analyticity (Cauchy-Riemann Equations)   |")
        print("|  4. Calculate Residue at a Pole                    |")
        print("|  5. Contour Integration (Parameterized)            |")
        print("|  6. Taylor / Laurent Series Expansion              |")
        print("|  7. Mobius (Linear Fractional) Transformations     |")
        print("|  8. Real Integrals via the Residue Theorem         |")
        print("|  9. Harmonic Conjugates (Milne-Thomson Method)     |")
        print("|  0. Exit                                           |")
        print("+====================================================+")
        choice = input("\nEnter choice (0-9): ").strip()

        if   choice == '1':
            simplify_expression()
        elif choice == '2':
            find_roots()
        elif choice == '3':
            check_analyticity()
        elif choice == '4':
            calculate_residues()
        elif choice == '5':
            contour_integral()
        elif choice == '6':
            series_expansion()
        elif choice == '7':
            mobius_transformation()
        elif choice == '8':
            real_integral_residue()
        elif choice == '9':
            harmonic_conjugate()
        elif choice == '0':
            print("\nHappy studying! Exiting...")
            break
        else:
            input("Invalid choice. Press Enter to try again...")


if __name__ == "__main__":
    main_menu()
