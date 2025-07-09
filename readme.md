# 🔢 Simple Node.js Calculator (No Frameworks)

A modular, beginner-friendly calculator web app built using **only Node.js's native `http` module**. No Express, no frontend libraries — just core Node.js and clean file organization. It supports **addition, subtraction, multiplication, and division**.

---

## 🚀 Features

- ➕ Add two numbers
- ➖ Subtract two numbers
- ✖️ Multiply two numbers
- ➗ Divide two numbers
- 🧩 Modular design using custom `utils/` and `modules/`
- 💅 Cute aesthetic HTML & CSS (inline via JavaScript)
- 🧠 Built for learning core Node.js concepts and routing logic

---

## 🗂️ Project Structure

PROJECT-1/
│
├── modules/ # Logic for arithmetic operations
│ ├── add.js
│ ├── sub.js
│ ├── mul.js
│ └── div.js
│
├── utils/ # Helper functions and page handlers
│ ├── handleAddPage.js
│ ├── handleSubPage.js
│ ├── handleMulPage.js
│ ├── handleDivPage.js
│ 
|
├── src/ # Static HTML/CSS strings (exported)
│ ├── index.js # Home page
│ ├── add.js # Add page
│ ├── sub.js # Subtract page
│ ├── mul.js # Multiply page
│ ├── div.js # Divide page
│ ├── style.js # CSS as JS string
│ └── 404.js # Not Found page
│
├── server/
│ └── server.js # Starts the HTTP server
│
└── README.md # This file

-----

## 🧪 How to Run

### 📦 Prerequisites

- Node.js installed (v14+)
- A terminal / shell

### 🛠 Steps

```bash
# Clone the project
git clone https://github.com/your-username/simple-calculator.git

cd simple-calculator/server

# Start the server
node server.js

#visit in your browser:
http://localhost:4000
