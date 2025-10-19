# Express.js Basic Server Practice 🚀

This is a simple **Express.js** practice script that sets up a basic web server using Node.js.  
It helps understand how **Express applications** handle requests and responses at the simplest level.

---

## 🧠 Concepts Practiced

- Setting up a **basic Express server**
- Using the **`app.listen()`** method to start the server
- Understanding the **middleware function `app.use()`**
- Logging incoming requests to the console

---

## 📜 Code Overview

```js
const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`App is listening at ${port}`);
});

app.use((req, res) => {
  console.log("Request received");
  res.send("This is text");
  res.send({
    name: "Subhamoy",
    sec: "A"
  });
  
});
