
def newton_forward(x, y, target):
    n = len(x)
    h = x[1] - x[0]
    u = (target - x[0]) / h
    diff_table = [y[:]]
    for i in range(1, n):
        prev_diff = diff_table[-1]
        current_diff = []
        for j in range(len(prev_diff) - 1):
            current_diff.append(prev_diff[j+1] - prev_diff[j])
        diff_table.append(current_diff)
    
    result = y[0]
    u_term = 1
    factorial = 1
    print(f"--- Newton Forward ---")
    print(f"u = {u}")
    print(f"Diff Table: {diff_table}")
    for i in range(1, n):
        u_term *= (u - (i-1))
        factorial *= i
        term = (u_term * diff_table[i][0]) / factorial
        result += term
    return result

def newton_backward(x, y, target):
    n = len(x)
    h = x[1] - x[0]
    u = (target - x[-1]) / h
    diff_table = [y[:]]
    for i in range(1, n):
        prev_diff = diff_table[-1]
        current_diff = []
        for j in range(len(prev_diff) - 1):
            current_diff.append(prev_diff[j+1] - prev_diff[j])
        diff_table.append(current_diff)
    
    result = y[-1]
    u_term = 1
    factorial = 1
    print(f"--- Newton Backward ---")
    print(f"u = {u}")
    # For backward, we take the last element of each difference column
    for i in range(1, n):
        u_term *= (u + (i-1))
        factorial *= i
        if not diff_table[i]: break
        val = diff_table[i][-1]
        term = (u_term * val) / factorial
        result += term
    return result

def divided_difference(x, y, target):
    n = len(x)
    full_table = [[0] * n for _ in range(n)]
    for i in range(n):
        full_table[i][0] = y[i]
    
    for j in range(1, n):
        for i in range(n - j):
            # (y2 - y1) / (x2 - x1)
            numerator = full_table[i+1][j-1] - full_table[i][j-1]
            denominator = x[i+j] - x[i]
            full_table[i][j] = numerator / denominator
            
    print(f"--- Divided Difference ---")
    for row in full_table:
        print(row)
        
    result = full_table[0][0]
    product_term = 1
    for i in range(1, n):
        product_term *= (target - x[i-1])
        result += full_table[0][i] * product_term
    return result

def lagrange(x, y, target):
    n = len(x)
    result = 0
    print(f"--- Lagrange ---")
    for i in range(n):
        term = y[i]
        for j in range(n):
            if i != j:
                term *= (target - x[j]) / (x[i] - x[j])
        print(f"Term {i}: {term}")
        result += term
    return result


def check_intervals(x):
    if len(x) < 2: return True
    h = round(x[1] - x[0], 5)
    for i in range(1, len(x) - 1):
        if round(x[i+1] - x[i], 5) != h:
            return False
    return True

scenarios = [
    {
        "id": 1, "name": "Heat", 
        "x": [300, 320, 340, 360], 
        "y": [1.005, 1.008, 1.013, 1.020], 
        "t": 305
    },
    {
        "id": 2, "name": "Pop", 
        "x": [1980, 1990, 2000, 2010], 
        "y": [10, 12, 15, 20], 
        "t": 2008
    },
    {
        "id": 3, "name": "Vel", 
        "x": [0, 1, 3, 4], 
        "y": [0, 10, 22, 28], 
        "t": 2.5
    },
    {
        "id": 4, "name": "Robot", 
        "x": [1, 2, 5, 7], 
        "y": [3, 5, 12, 8], 
        "t": 4
    }
]

methods = [
    ("Newton Forward", newton_forward, True), # Name, Func, RequiresEqual
    ("Newton Backward", newton_backward, True),
    ("Divided Diff", divided_difference, False),
    ("Lagrange", lagrange, False)
]

print("\n=== MATRIX CALCULATION ===")
for s in scenarios:
    print(f"\n[[ Scenario {s['id']}: {s['name']} (Target: {s['t']}) ]]")
    is_equal = check_intervals(s["x"])
    print(f"Intervals Equal? {is_equal}")
    
    for m_name, m_func, req_equal in methods:
        print(f"\n  > Method: {m_name}")
        if req_equal and not is_equal:
            print("  Result: N/A (Unequal Intervals)")
        else:
            try:
                res = m_func(s["x"], s["y"], s["t"])
                print(f"  Result: {res}")
            except Exception as e:
                print(f"  Error: {e}")

