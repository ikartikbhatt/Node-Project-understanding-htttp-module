const notFoundPageHtml=`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>404 - Not Found</title>
  <link rel="stylesheet" href="/style.css" />
  <style>
    .not-found {
      background-color: #fff0f5;
      padding: 40px;
      border-radius: 25px;
      box-shadow: 0 0 40px rgba(255, 105, 180, 0.3);
      text-align: center;
      max-width: 480px;
      width: 90%;
      animation: float 3s ease-in-out infinite;
    }

    .not-found h1 {
      font-size: 4rem;
      color: #ff69b4;
    }

    .not-found p {
      font-size: 1.2rem;
      color: #6c3483;
      margin-bottom: 20px;
    }

    .not-found a {
      display: inline-block;
      margin-top: 20px;
      padding: 12px 20px;
      background-color: #ffb6c1;
      color: white;
      text-decoration: none;
      border-radius: 12px;
      font-size: 1rem;
      transition: background-color 0.3s ease;
    }

    .not-found a:hover {
      background-color: #ff69b4;
    }

    @keyframes float {
      0%, 100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-6px);
      }
    }
  </style>
</head>
<body>
  <div class="not-found">
    <h1>404</h1>
    <p>Oops! The page you’re looking for doesn’t exist 🌸</p>
    <a href="/">⟵ Go Back Home</a>
  </div>
</body>
</html>`



module.exports=notFoundPageHtml;