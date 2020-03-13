// This was provided in the lesson
var holdMyData = "Welcome to the page!";
var toSelect = "placeholder";
var pElement = document.getElementById(toSelect);
pElement.innerHTML = holdMyData;

// This is placement into the second placeholder
holdMyData = "I hate repetitive messages;";
var toSelect = "placeholder2";
pElement = document.getElementById(toSelect);
pElement.innerHTML = holdMyData;

// This is placement into the third placeholder.  See below
holdMyData = "naturally, I'm gonna change these message.";
var toSelect = "placeholder3";
pElement = document.getElementById(toSelect);
pElement.innerHTML = holdMyData;

/*
 *	Notice that I didn't declare new variables for the sake of placing the new data.
 *	Instead, we assign new values to the variables.  This is because variables are
 *	  considered "dynamic" in the JS language.  There is a way to declare variables
 *	  in such a way that they are unable to be changed, too.  This is done by 
 *	  declaring it as a "constant".  Attempts to change the data in a constant will
 *	  throw a "TypeError".  It's documentation can be found below.  This is because
 *	  a constant is of known (constant) "type" (int, str, float, etc), and declared in a way
 *	  that does not allow the assignment of new value to it.
 *	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError
 *	An example of a use of a constant can be seen below, however, to view the
 *	  output, you must open the debug console.  This varies from browser to browser,
 *	  and is Google-able.
 */
const foo = 10;
const bar = 9;
var foobar = foo + bar;
document.log(foo)
document.log(bar)
document.log(foobar)
