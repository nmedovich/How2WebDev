## Info

### HTML

The Google-able information, as always.  HTML stands for HyperText (as in text over hyperlink...) Mark-up Language.  Mark-up languages are simply used to make things pretty.  Quite literally, HTML is just a way to lay out the information being displayed on the web.

One thing that is worth noting, however, is that in October of 2014, the standard-setting group known as the World Wide Web Consortium (W3C) announced its recommendation for the transition from HTML4 to HTML5.  In laymans terms, it just means the web got an upgrade.  Several useful "elements" (also referred to as "tags", which are the building blocks of HTML) were introduced into the language.  Additionally, [several elements and attributes](https://www.tutorialspoint.com/html5/html5_deprecated_tags.htm) were deprecated in the transition.  We'll cover more of this as we go.

All documents used in these lessons will focus on the use of HTML5.  Use of deprecated elements in HTML documents will cause compatibility issues.

HTML looks like this.  Don't worry if it's too much at first.  I will explain each piece as we progress
```
<!DOCTYPE html>
<html>
	<head>
		<title>Sample Page</title>
	</head>
	<body>
		Sample text here!
	</body>
</html>
```

### CSS

More Google-able information.  CSS stands for Cascading Style Sheets.  These are used to apply "style" (font color, font alignment, background colors, element positioning, etc) to HTML elements.  These can be declared right in the HTML document, or separated into their own files for the sake of neatness and separation.

CSS is where a majority of the "design" magic happens in each web page, and they can be applied in an unlimited number of ways.  You can see a sample of CSS below.  Once again, don't worry if you don't understand everything at first.

```
body{
	background-color: black;
	color: white;
}
```

This is attached to the HTML in the <head> element.  It is not particularly important where.  They are attached as follows:

```
<head>
	... other elements
	<link href="path/to/mystylesheet.css" rel="stylesheet">
</head>
```

### JavaScript

At least that one's not an acronym.  But, I'm not gonna type that every time, so you'll see it referred to as "JS".  One might think from its name that it's got something to do with Java.  The only similarity is their "syntax" (the way things are written).  While the creators of JS (Netscape) did receive assistance in creating an embedded version of Java for the web from its creator (Sun Microsystems), JS was built in-house, and is very dissimilar in function.

JS was invented to help introduce "dynamic" web pages to the Internet.  Previously, the user would request the website, the server would fetch the necessary files, and send them to the user.  The file sent to the user was unable to be changed after it was received.  This means there was little-to-no interactivity on the web.  JS was among the first languages to allow the web page to interact with the user; and later, allowed that page to interact with the server again for more information.

JS syntax looks something like this:

```
alert("Welcome to the page!");
```

We attach Javascript files to the HTML just before the end of the <body> element, as such:

```
<body>
	... Page Contents
	<script src="path/to/myscript.js"></body>
</body>
```

### Structure

A common web structure is as follows:

```
| index.html
| css/
|----- stylesheet.css
| js/
|----- script.js
| anotherfile.php
| anotherfolder/
|----- asubfolder/
|---------------- adeeperfile.dat
```

### Assignment

1. *Create a new document in your web root and save it as "index.html"* (index is the name of the file that Apache looks to serve to viewers first, unless another file has been specified).  *Into it, insert the HTML template listed at the top of this page.*  Note, for good convention, don't be lazy.  Don't save the file as `.htm`, save it as `.html`.

2. *Create two folders in your web root to hold your JS and CSS files*.

3. *Create a CSS file in its respective folder.*  Its name doesn't matter as long as you change its name in the <link> element.  Remember, CSS file files must end with `.css`.

4. *Create a JS file in its respective folder.*  Its name also doesn't matter as long as it's edited properly.  JS files must end with `.js`.

5. *Insert the proper linking code for the CSS into the <head> element.*  Don't forget to edit the name of the CSS sheet as necessary.  **HINT**: The path to a file in the "css" folder would be `css/someSheet.css`.

6. *Insert the proper linking code for the JS into the <body> element.*  Make sure to update the name of the script!  If you're having trouble linking the script, review the above hint for potential path issues.

7. *Navigate to the project in your browser via: http://localhost/Project0*.    
⋅* If everything loads properly, you've completed the lesson!
⋅* If you have difficulty, review the code above.  It will provide a working reference

The next lesson will arrive soon!


