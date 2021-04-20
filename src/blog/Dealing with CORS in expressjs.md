---
title: Dealing with CORS in expressjs.
author: Ekaji
date: 2021-04-11
tags: Nodejs
featuredImage: ../images/BingWallpaper.jpg
---

#
What is CORS and how do you deal with it in your express app?  
Express, is a popular open source back end web application framework for Node.js.  
CORS stands for cross origin resource sharing, it is a mechanism that allow 
restricted resources on a web page to be requested from another domain outside
the domain from which the first resource was served.  CORS is implemented in 
modern browsers to prevent the browser from making a request to  another website.  When working with applications where the Front-end is separate from the backend 
CORS needs to be implemented on the backend otherwise you get a CORS error, 
the Cross-Origin Resource Shairing standard works by adding new HTTP headers
that let servers describe which origins are permited to read that information
from a web browser.  
To implement CORS in your express app you need to install the cors NPM package  
  ```npm install cors```  
once installed add it to your express app

```
//index.js
const express = require('express');
const cors = require('cors');

const app = express();
const port = 3030;

//cors is enabled through out the entire app
app.use(cors());

app.get('/users', (request, response, next) => {
    res.json({info: 'cors is enabled'})
});

app.listen(port, () => {
    console.log(`App is running on ${port}`)
});
```

the above code would enable cors for all routes in your app, but what if you only 
want cors enabled for specific routes? we do this by adding cors to that 
particular route.

```
//index.js
const express = require('express');
const cors = require('cors');

const app = express();
const port = 3030;

//cors is enabled on this route
app.get('/users', cors(), (request, response, next) => {
    res.json({info: 'cors is enabled for this route'})
});

app.listen(port, () => {
    console.log(`App is running on ${port}`)
});

```
conclusion
CORS is a security mechanism implimented to prevent one of the most common cyber 
attack: cross-site request forgery, where a malicious website attempts to take advantage of the browser's cookie storage system.
in this article we've seen how to add CORS headers into our express app using the 
cors NPM package, we've also seen how to add cors to specific routes within our 
express app.

source: https://expressjs.com/en/resources/middleware/cors.html
        https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
