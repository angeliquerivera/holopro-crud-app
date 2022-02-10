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

What command will install our regular dependencies?

```shell
# code here
```

What command will install our dev dependencies?

```shell
# code here
```

What script can we write in order to monitor our project as changes are saved? What's a good name for that script?

## Express

### Boilerplate and Initialization

How can we use the `express` library we installed in our repo?

```js
// code here
```

How do we create a new instance of an Express server?

```js
// code here
```

What express method allows us to view the connection to the process? Give an example of this method in action.

```js
// code here
```

What are some terms for the starting `/` route?

### Templates and Views

What express method allows us to dictate what view engine we'll be using? What does that code look like if we're using `ejs`?

```js
// code here
```

What is a view?

What is a partial?

How do you use partials in EJS?

### Routing

Let's say a music app has three index routes,

- `/` : the site landing page
- `/music`: the music landing page
- `/djs`: the djs landing page

What is best practice when it comes to defining and organizing these routes in your music app?

What express method allows you to define which routers should handle their corresponding routes? Give an example.

```js
// code here
```

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
