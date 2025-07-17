<h1>E-Commerce Product Detail Page</h1>

A fully responsive, interactive product detail page built with **Node.js**, **Express**, **EJS**, **Tailwind CSS**, **JavaScript**.

<h2>Features</h2>
1. Zoomable Product Image
<br>
2. Fully Responsive Layout
<br>
3. Product Information Section
<br>
4. Add to Cart Functionality
<br>


<h2>Project Structure</h2>

```
.
├── data.json
├── index.js
├── package-lock.json
├── package.json
├── public
│   ├── cart.js
│   ├── logo
│   ├── output.css
│   └── zoom.js
├── src
│   ├── input.css
│   
├── tailwind.config.js
└── views
    ├── cart.ejs
    ├── home.ejs
    ├── productDetails.ejs
    ├── products.ejs
    └── script.js

```

<h2>Tech Stack</h2>
<table>
<tr> 
 <th>Layer</th>           
 <th>Tech</th>    
</tr>

<tr>
 <td>Frontend</td>     
 <td>HTML, Tailwind CSS, Font Awesome </td>
</tr>  

<tr>
 <td> Templating</td>     
 <td>EJS </td>
</tr>  

<tr>
 <td> Backend  </td>     
 <td> Node.js, Express.js</td>
</tr>

<tr>
  <td>Interactivity</td>
  <td> Vanilla JavaScript (zoom/cart)</td>
</tr>

<tr>
  <td>Build Tool </td>
  <td>Tailwind CLI or PostCSS  </td>
</tr>
</table>

<h2>Local Development Setup</h2>

<h3>1. Clone the Repository</h3>

```bash
git clone https://github.com/raashi2120/project-4.git
cd project-4

```

<h3>2. Install Dependencies</h3>

```
npm install
```

<h3>3. Compile Tailwind CSS</h3>

```
npx tailwindcss -i ./src/input.css -o ./public/output.css --watch
```

<h3>4. Run the Server</h3>

```
node index.js
```

<h3>5. Visit The Link Below </h3>

```
 http://localhost:3000
```





