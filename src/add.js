const addHtml=`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Add Numbers</title>
  <link rel="stylesheet" href="/style.css" />
</head>
<body>
  <div class="container">
    <h1>➕ Add Numbers</h1>
    <form action="/add" method="GET">
      <input class='field1' type="number" name="num1" placeholder="Enter number 1" required />
      <input class= 'field2' type="number" name="num2" placeholder="Enter number 2" required />
      <button class='btn' type="submit">Calculate</button>
    </form>
    <a class="back" href="/">🔙 Back</a>
  </div>
</body>
</html>`


module.exports=addHtml;
