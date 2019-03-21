module.exports = (demos, brand) => {
  let list = '';

  for (let demo of demos) {
    if (!demo.brands && demo.name || demo.brands && demo.brands.includes(brand)) {
      list += `<li>
      <a href="./${demo.name}.html">${demo.title}</a>
      </li>
      `
    } 
  }

return `<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
  <link href="https://fonts.googleapis.com/css?family=Ubuntu+Mono" rel="stylesheet"> 

  <style>
    ul {
      font-family: 'Ubuntu Mono', monospace;
      font-size: 16px;
      list-style: none;
    }

    li {
      padding: 8px 0;
    }

    a {
      color: black;
      padding: 4px;
    }

    a:hover {
      background-color: turquoise; 
    }

    a:visited {
      color: inherit;
    }
  </style>
</head>
<body>
  <ul>
    ${list}
  </ul>
</body>
</html>`
}