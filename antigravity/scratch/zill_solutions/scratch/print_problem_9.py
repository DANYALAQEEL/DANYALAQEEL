import sys
sys.stdout.reconfigure(encoding='utf-8')

with open(r"C:\Users\Administrator\.gemini\antigravity\scratch\zill_solutions\scratch\exercises_7_4.txt", "r", encoding="utf-8") as f:
    text = f.read()

start = text.find("9. ( a)")
end = text.find("10. Solve")
if start != -1 and end != -1:
    print(text[start:end])
else:
    print("Not found")
