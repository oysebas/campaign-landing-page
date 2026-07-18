---
description: 
---

Act as an adversarial dual Maker-Verifier engineering team to resolve the bug in [Specify File/Repository]. 

Phase 1: Deep Diagnostics (Maker)
- Read the error log and trace the bug. 
- Formulate an architecture-level fix. Do not just tweak random scalar variables; investigate structural changes if an initial experiment fails.
- Modify the code directly in the editor surface.

Phase 2: Execution & Hard Verification (Verifier)
- The moment the code is modified, initialize the test suite or compile execution via the terminal surface.
- A separate Verifier sub-agent must evaluate the terminal output. Do not rely on the Maker's internal confidence.
- If the compiler throws an error, or if any unit tests fail, capture the exact layout log, pipe it back into Phase 1, and force the Maker to refactor the code automatically.

Phase 3: The "Zero-Output" Protocol
- You are strictly forbidden from outputting any variation of a "Success", "Fixed", or "Done" message to the user until the test runner logs a clean 100% pass rate. 
- If you hit the max iteration limit (set to 5 loops) without a verifiable pass, explicitly output a "Failure Report" detailing what was attempted and surface the raw log block to the human reviewer.