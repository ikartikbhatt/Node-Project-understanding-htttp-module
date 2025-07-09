const subHtml=`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Add Numbers</title>
  <link rel="stylesheet" href="/style.css" />
</head>
<body>
  <div class="container">
    <h1>➖ Subtract Numbers</h1>
    <form action="/sub" method="GET">
      <input type="number" name="num1" placeholder="Enter number 1" required />
      <input type="number" name="num2" placeholder="Enter number 2" required />
      <button type="submit">Calculate</button>
    </form>
    <a class="back" href="/">🔙 Back</a>
  </div>
</body>
</html>`


module.exports=subHtml;