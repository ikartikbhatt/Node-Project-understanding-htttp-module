const styleCss = `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body, html {
    height: 100%;
    font-family: 'Comic Sans MS', cursive, sans-serif;
    background: linear-gradient(to bottom right, #ffe0ec, #dfe7fd);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .container {
    background: #fff0f5;
    padding: 40px;
    border-radius: 20px;
    box-shadow: 0 0 25px rgba(255, 192, 203, 0.5);
    text-align: center;
    max-width: 400px;
    width: 90%;
  }
  
  h1 {
    color: #ff69b4;
    font-size: 2.2rem;
    margin-bottom: 25px;
    cursor: default;
  }
  
  .buttons a,
  button,
  .back {
    display: block;
    margin: 10px auto;
    background-color: #ffb6c1;
    border: none;
    padding: 12px 25px;
    font-size: 1.2rem;
    color: white;
    border-radius: 12px;
    text-decoration: none;
    transition: 0.3s;
    width: 100%;
    max-width: 300px;
  }
  .buttons a:hover,
  button:hover,
  .back:hover {
    background-color: #ff69b4;
  }
  
  input[type="number"] {
    width: 90%;
    padding: 12px;
    font-size: 1rem;
    margin: 10px 0;
    border: 2px solid #ffb6c1;
    border-radius: 10px;
    background: #fff8fb;
  }
  .result {
  margin-top: 25px;
  padding: 12px;
  font-size: 1.3rem;
  background-color: #ffe4ec;
  color: #d63384;
  border: 2px solid #ffb6c1;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(255, 182, 193, 0.4);
}
}
`;

const notFoundPageHtmlCss = `
  body {
    margin: 0;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff0f5; /* optional */
  }

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
`;


module.exports = {styleCss, notFoundPageHtmlCss };
