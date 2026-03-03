# ESLint + Husky + Gitleaks Demo Project

This project demonstrates:

* Git initialization
* ESLint setup
* Husky pre-commit hooks
* Gitleaks secret scanning
* Connecting local repo to GitHub

---

# 1️⃣ Initialize Git Repository

```bash
git init
```

Check status:

```bash
git status
```

---

# 2️⃣ Initialize Node Project

```bash
npm init -y
```

---

# 3️⃣ Install ESLint

```bash
npm install eslint --save-dev
```

Initialize ESLint config:

```bash
npx eslint --init
```

Run ESLint manually:

```bash
npx eslint .
```

---

# 4️⃣ Install Husky

```bash
npm install husky --save-dev
```

Initialize Husky (v9+):

```bash
npx husky init
```

This creates:

```
.husky/
```

---

# 5️⃣ Add ESLint to Pre-commit Hook

Edit `.husky/pre-commit` file:

```bash
npx eslint .
```

Now every commit runs ESLint automatically.

---

# 6️⃣ Install Gitleaks

(If using Chocolatey on Windows)

```bash
choco install gitleaks
```

Verify installation:

```bash
gitleaks version
```

---

# 7️⃣ Add Gitleaks to Pre-commit Hook

Edit `.husky/pre-commit`:

```bash
gitleaks detect --no-banner --redact
```

Now commits will fail if secrets are detected.

---


# 🧪 Testing the Setup

1. Add a syntax error in JS file → commit should fail (ESLint)
2. Add a fake password like:

```js
const password = "12345678";
```

Commit should fail (Gitleaks)

---

# 📌 Final Workflow Summary

```bash
git add .
git commit -m "message"
```

Behind the scenes:

* Husky runs pre-commit
* ESLint checks code
* Gitleaks scans secrets
* If clean → commit succeeds
* If not → commit blocked

```

---

# Project Purpose

This repository demonstrates how to:

- Enforce code quality before commit
- Prevent secret leaks
- Automate checks using Git hooks
- Follow professional DevOps workflow

---


```
