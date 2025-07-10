const styleCss = require("../styles/style");

const indexHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Math Playground</title>
  <style>
  ${styleCss.styleCss}
  </style>
</head>
<body>
  <div class="container">
    <h1>🧮 Choose an Operation</h1>
    <div class="buttons">
      <a href="/add">➕ Add</a>
      <a href="/sub">➖ Subtract</a>
      <a href="/mul">✖️ Multiply</a>
      <a href="/div">➗ Divide</a>
    </div>
  </div>
</body>
</html>`;

const notFoundPageHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>404 - Not Found</title>
  <style>
  ${styleCss.notFoundPageHtmlCss}
  </style>
</head>
<body>
  <div class="not-found">
    <h1>404</h1>
    <p>Oops! The page you’re looking for doesn’t exist 🌸</p>
    <a href="/">⟵ Go Back Home</a>
  </div>
</body>
</html>`;

const operationTemplate = (operationName) => {
  const operationTable = {
    add: { symbol: "➕", text: "Add" },
    sub: { symbol: "➖", text: "Subtract" },
    mul: { symbol: "✖️", text: "Multiply" },
    div: { symbol: "➗", text: "Divide" },
  };

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>${operationTable[operationName].text} Numbers</title>
    <style>
  ${styleCss.styleCss}
  </style>
</head>
<body>
  <div class="container">
    <h1>${operationTable[operationName].symbol} ${operationTable[operationName].text} Numbers</h1>
    <form method="GET">
      <input class='field1' type="number" name="num1" placeholder="Enter number 1" required />
      <input class= 'field2' type="number" name="num2" placeholder="Enter number 2" required />
      <button class='btn' type="submit">Calculate</button>
    </form>
    <a class="back" href="/">🔙 Back</a>
  </div>
</body>
</html>`;
};

module.exports = {
  notFoundPageHtml,
  indexHtml,
  operationTemplate,
};
