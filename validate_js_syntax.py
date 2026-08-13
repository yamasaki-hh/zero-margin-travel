import subprocess

print("Checking JS syntax with node --check...")

res1 = subprocess.run(["node", "--check", "js/ai-travel-engine.js"], capture_output=True, text=True)
if res1.returncode != 0:
    print("❌ Syntax Error in js/ai-travel-engine.js:\n", res1.stderr)
else:
    print("✅ js/ai-travel-engine.js syntax is 100% VALID!")

res2 = subprocess.run(["node", "--check", "js/travel-app.js"], capture_output=True, text=True)
if res2.returncode != 0:
    print("❌ Syntax Error in js/travel-app.js:\n", res2.stderr)
else:
    print("✅ js/travel-app.js syntax is 100% VALID!")
