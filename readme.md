## Preface

This is meant to be less of a "here's how to do everything", and more of a "here's how to use the technology".  I personally believe that segmenting what one learns is often more detrimental in the long run.  To this end, I'm going to be providing some frameworks in code, and you'll be asked to complete pieces, or make modification to existing code.

### Required

Completion of the first several tutorials can be done without a web server, because you'll only be using HTLM, CSS, and JavaScript.  However, as we move on and start to discuss the kind of information a web page needs in order to be interactive, you'll need access to the following:

* Apache
* PHP7
* MySQL
* phpMyAdmin (not necessary, just handy to have)

These can be installed via most operating system's package managers, but a simpler alternative exists for Windows.  XAMPP can be [downloaded here](https://www.apachefriends.org/download.html).  For the purposes of this tutorial, just be sure the above packages are installed within XAMPP, and decline other offers.

### Details

On Linux servers, the folder in which you should place your projects and web documents, the web "root directory", is likely to be `/var/www/`.  However, this can vary system to system.

On Windows servers running XAMPP (assuming you installed on disk C:), your root directory will be `C:\xampp\htdocs\`.

Either way, to test whether or not your server is running, open a browser and navigate to [http://localhost/](http://localhost/).  Assuming you're served a web page, you're free to delete the existing files in the root directory.

Remeber to create a new folder inside the web root to hold each project.  This will help you segment what is going on in each lesson, and prevent you having to have a million files in the same directory.  For Project0, create a new folder in your web root called Project0.  Place all files for each lesson into this folder.  When accessing this in-browser, navigate to [http://localhost/Project0](http://localhost/Project0/).  Note, if you try to access this before you have placed a file into the directory, you will receive Error 404 (file does not exist).

### Lessons

* [Project0](lessons/Project0)
