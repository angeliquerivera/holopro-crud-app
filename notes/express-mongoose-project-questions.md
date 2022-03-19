# Express & Mongoose Project Questions

## Project initialization

What is the runtime environment that we've already installed and have been using to make our JS projects possible thus far?

- `nodejs`

What are the key libraries we'll be using for this project? Give a short description of each and describe whether they are regular or dev dependendencies.

- Express: allows you to build web frameworks such as APIs; regular dep
- Mongoose: MongoDB object modeling tool designed to work in an async environment; regular dep
- ejs: Embedded JavaScript Templates (allows you to use JS in HTML); regular dep
- Nodemon: tool to develop nodejs apps by automatically restarting the node app when file changes are detected; dev dep

What command sets up our project with a `package.json` file?

```shell
npm init -y
```

What command starts a new Git repo?

```shell
git init
```

What file do we need to create so git ignores certain files and folders?

- .gitignore

What do we need to add to `.gitignore` so that the `node_modules/` folder is NOT added when you stage new files to commit?

```
node_modules/
```

What command will install our regular dependencies?

```shell
npm i express mongoose ejs
```

What command will install our dev dependencies?

```shell
npm i nodemon --save-dev
```

What's a good name for a server base file for Express? Where does this file go in the project?

- server.js

What script can we write in order to monitor our project as changes are saved? What's a good name for that script?

```
  "scripts": {
    "devStart": "nodemon server.js"
  },
```

## Express

### Boilerplate and Initialization

How can we use the `express` library we installed in our repo?

```js
const express = require("express");
```

How do we create a new instance of an Express server?

```js
const app = express();
```

What express method allows us to view the connection to the server? Give an example of this method in action.

```js
app.listen(4269, () => {
  console.log("¡Yo, the server's running on port 4269!");
});
```

What are some terms for the starting `/` route?

- index route, root URL, base route, index landing

### Templates and Views

What express method allows us to dictate what view engine we'll be using? What does that code look like if we're using `ejs`?

```js
app.set("view engine", "ejs");
```

What is a view?

- A template that corresponds to a certain route

How should we organize our app's views when using Express?

- By making a views folder in the project root.

What is a partial?

How do you use partials in EJS?

### Routing

Let's say a music app has three index routes,

- `/` : the site landing page
- `/music`: the music landing page
- `/djs`: the djs landing page

What is best practice when it comes to defining and organizing these routes in your music app?

- Create a `routes` folder in the project root.

How do we create a new router instance?

```js
const talentsRouter = express.Router();
```

How do export this router instance for use in other files?

```js
module.exports = talentsRouter;
```

How do we import this router in another file?

```js
const talentsRouter = require("./routes/talentsRouter");
```

What express method allows you to define which routers should handle their corresponding routes? Give an example.

```js
app.use("/talents", talentsRouter);
```

How do we tell Express to use this new router for a certain route landing, e.g. `/talents`?

## Javascript extras

### `Date`

What is the `Date` constructor?

How is a JavaScript date defined?

What static method returns a numeric value that corresponds to the current time? Give an example of its use.

```js
// code here
```

What is a `Date` instance method that you can use to output **just the date portion** of a specified `Date` object? Give an example of its use.

```js
// code here
```

What is a `Date` instance method that you can use to output **just the time portion** of a specified `Date` object? Give an example of its use.

```js
// code here
```

What are some ways to create a `Date` object based off a given date? Use today's date in your examples.

```js
// code here
```

## Front-end goodness

### Bootstrap

What is Bootstrap?

What are some ways to add Bootstrap to a project?

How do we access Bootstrap's CSS components in our template files?

#### Component Details

##### Container

What is the `container` layout element? How do we use this element in our template?

##### Card

What is the `card` layout element? How do we use this element in our template?

What are some the `card` content types we're using? How do we mix and match them to create `card` layouts?

##### Button

What is the `button` layout element? How do we use this element in our template?

##### Form

What is the `form` layout element?

What do Bootstrap's form controls allow us to do with form elements?

## Partials

- Partials are components that allow you to use the same HTML across multiple views
- Partials help keep us DRY (Don't Repeat Yourself)
- File names begin with underscores
- In EJS syntax, we can render out the HTML of a partial view like so: `req`

## Holopro Talent Fields

### Required fields

- Name
- Debut date
- Unit name
- Youtube page link
- Twitter page link
- Talent bio blurb

### Expected field value and input type

#### Name

- String value
- Text `<input>`

#### Debut date

- Date value
- three number `<input>`

#### Unit Name

- String value
- `<select>` element with `<option>`

#### Youtube link

- String value
- URL `<input>`

#### Twitter link

- String value
- URL `<input>`

#### Talent bio blurb

- String value
- `<textarea>`

## URL Slugs

### What is a slug?

- A URL slug is the part of the URL after the final backslash.
- A good URL slug also helps the Google crawlbots understand how to get to your page and confirms the content on it.

## HTTP Methods via HTML

- `<a>` tags can only `GET`
- `<form>` tags can only `GET` or `POST`

## Google crawling and link protection

### Crawlbot behavior

- Since Google crawls over every single link in our page and enters those links to access the pages, it would be a TERRIBLE idea to place a button in each talent card that would lead to a deletion on click. Every talent would be deleted by the crawlbot on click.
- Instead, we place the delete button inside of a nested form.

## What is HTML sanitization?

- When you sanitize HTML, it's the process of examining an HTML document that preserves only whatever tags are designated safe and desired.
- HTML sanitization can be used to protect against attacks such as cross-site scripting (XSS attacks) by sanitizing any HTML code submitted by a user.
- Basic tags for changing fonts are often allowed, while more advanced tags such as `<script>`, `<object>`, `<embed>`, and `<link>` are removed.
- Potentially dangerous attributes such as the `onClick` attributes are removed in order to prevent malicious code from being injected.

## What is the DOM?

- DOM = Document Object Model
- DOM is the data representation of the objects that comprise the structure and content of a document on the web.
- It is a programming interface for web documents
- The DOM represents documents as nodes and objects. That way, programming languages can interact with the pages.
