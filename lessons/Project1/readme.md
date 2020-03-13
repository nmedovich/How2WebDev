## Info

### HTML

In the last exercise, we saw the basic structure of an HTML document.  You can use and re-use this template throughout each exercise, making the necessary changes as you go.

In this section, we're going to look at how pages are laid out with HTML and CSS.  At the end, we'll use Javascript to "dynamically" change the positioning of some HTML elements as well.

Consider the following:
```
<!DOCTYPE html>
<html>
	<head>
		<title>Project1!</title>
		<link href="css/someStylesheet.css" rel="stylesheet">
	</head>
	<body>
		<h1>Paragraphs:</h1>
		<p>This is text in a paragraph!</p>
		<p>This is also text in a paragraph!</p>
		<p id="placeholder"></p>
		<script src="js/someScript.js"></script>
	</body>
</html>
```

We declare that we're using HTML5, set our title, and link our stylesheet.  In the `<body>` of the page, we see three new elements.  `<h1>`, and `<p>`.

`<h1>`, `<h2>`, `<h3>`, ..., and `<h6>` are all called *headings*.  These provide a larger, bold-faced font with which to separate pieces of the web page.  They're similar to the section headers in this article.

`<p>` is called a *paragraph*.  These provide a way to group like contents into one "line" on the web page.  Closing a paragraph element causes the following element to be placed onto a new line when it is drawn by the browser.  Note, one of the <p> elements has extra text inside the tag itself.

### Attributes

In the case of the above, `<p id="placeholder"></p>`, we can see that the <p> element has an `id` attribute.  They are used to provide more information about an HTML element, and must always be in the opening tag.  They are provided in name/value pairs, such as `id="placeholder"`, where "id" is the attribute name, and "placeholder" is the attribute value.

The HTML or text that can be found inside an element is called the `innerHTML`.  This will be useful to us in JS, when we need to edit the HTML of a given element.

Another attribute you may see frequently in HTML is the `style` attribute.  Through this, we can tie CSS styles to an element, without declaring it in a Stylesheet.  This can be helpful when looking to override some of the existing styles in the CSS sheets, and works as follows:

```
<p style="color: red">This text will be red</p>
```

We will continue to explore new attributes as we progress.

### CSS

As you'll soon find out, CSS is able to control most of how a page can be displayed.  This can be further augmented by Javascript, but let's not get ahead of ourselves.

For now, we'll start by applying a style to the background of our HTML document.  Then, we'll specify the color of the text to appear in the <p> elements.  Note, colors can be in RBG (Red, Green, Blue) coordinate pairs, or in HEX (hexadecimal, which looks like: #123456).  You can use an [online color picker](https://htmlcolorcodes.com/color-picker/) to identify colors for your pages.

```
body{
	background-color: #123456;
}

p{
	color: #BED368;
}
```

This will provide a dark blue background, and a very light green text for the <p> elements.

If you place this into the CSS file (remember to save your work, otherwise nothing new will appear on the page), and load the page in a browser, you'll see exactly that.  However, you'll probably notice that the `<h1>`	 element is still the default black text.  Fixing this will be part of your assignment.

As discussed above, we can use the "attributes" of an element to define its behavior, and to stylize the individual element.  We do this using "selectors".  There are two common selectors that you'll use to access individual elements, rather than their tag themselves.  One of these is the "id", and the other is the "class" of the element.  CSS "id"s are unique identifiers for individual HTML elements.  CSS "classes" are individual styles that are applied to one or more HTML elements for the sake of changing the "state" of an object.  We'll discuss classes in more detail later.  

IDs are selected in CSS by placing the "pound" symbol, `#`, in front of the name of the ID you'd like to select.  Using the `<p id="placeholder"></p>` element above, we'll select the individual paragraph, and be able to stylize it, as follows:

```
#placeholder{

}
```

Filling this in will be a part of the assignment of this lesson.

### JS

You might notice, however, that even if we stylize the above element, nothing will be displayed on the page.  This is because there is no "innerHTML" between the tags.  Part of this lesson will be placing HTML onto the page dynamically with JS.

JS comes with a bunch of built-in functions for editing the HTML of a given page.  In the previous example, we saw the creation of an "alert" dialog box that enabled us to write out text to the screen, but not to the page itself.  `alert()` is useful for debugging, because page-load pauses while it is waiting for you to acknowledge the alert.

JS "variables" are used to hold individual pieces of data at a location in the PC's "RAM" (which holds data that must be readily accessible by the page).  In the previous example, we passed the String "Welcome to the page!" to the alert function.  Because we explicitly declared what was being passed in to the function, we didn't need to house any data.  However, if we wanted to, we could declare this formally with the declaration:

```
var holdMyData = "Welcome to the page!";
```

In this, we create a "var"iable, and assign it the same text we assigned to the function manually before.  Using it as we did on the previous page, we can pass it to the alert function as follows:

```
alert(holdMyData);
```

Now, how does this relate to the current HTML document we are building?  Well, we've declared a variable, and we have a place in the HTML document that does not currently have text in it.  Let's assign that text to the <p> element.

First, we have to select the element that we're looking to modify.  This can be done in one line of code, should you choose to do so, but for the sake of the lesson, let's create a variable holding the content of the element itself.  We do this by utilizing the function `getElementById(id)`, which is accessible using the global variable "document", which is provided by the page itself at page-creation.  In this case, the "id" being passed into the function is the "string" of the id we're looking for.  To select the above <p> element, we do the following.  Note, we don't use the pound (#) symbol to identify the id being selected:

```
var toSelect = "placeholder";
var pElement = document.getElementById(toSelect);
```

Now we have a variable called "pElement", which contains the HTML from the tag, inward.  However, as discussed above, there is no current innerHTML.  Fortunately, JS has a built-in function that allows us to add HTML (which as we saw in the previous lesson may contain text or HTML) directly to the element.  We do this using the `innerHTML` "property".  A "property" is a reserved piece of data that applies to a variable.  Among the properties available to elements selected by the `getElementById` function, are `className`, `dir`, `id`, `innerHTML`, `lang`, `style`, `tagName`, and `title`.

Using the `pElement` variable above, let's set the innerHTML to the value held in var `holdMyData`:

```
pElement.innerHTML = holdMyData;
```

This will allow the JS to inject the data of holdMyData into the HTML document.

### Assignment

In this exercise, you must do the follow:

1. *Copy the HTML above into its own file, saving it in a new Project folder in the document root of your server as "index.html".*

2. *Build the necessary script to fill in the missing data in* `<p id="placeholder">`.  Be sure to use variables to hold the data you're passing into the functions.

3. *Copy the above CSS into the necessary folder, and link it to the project.  Be sure to add a color declaration for the `<h1>` element, and the* `<p id="placeholder">` *elements.*

4. *Edit the text in the page to make it your own.*  Building websites from tutorials isn't an fun, I get it.  In order to provide yourself with a better learning process, feel free to change text being used for examples into something that suits your interests.  The key to learning a new language, is to make it do something interesting for yourself.

5. *Add a few more elements to the page that are dynamically added by JS.*  By this I mean, add a new element to the HTML (another <p> element will do), add a style declaration in the CSS for it, and assign it a value in your JS.

The next lesson will arrive soon!
