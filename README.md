# Gilt Module Boilerplate

* * *

### Problem:

It was prohibitively difficult to open-source our internal front end work because it was tightly coupled to our internal front end build system. We couldn't release just one more module from our toolkit because it depended on many other internal modules.

### Solution:

We realized that other companies have this same problem. This repo is a boilerplate for structuring a module so that it can be written with an open-source-first philosophy in mind and still be used by Gilt's internal system. We solved for testing, building, and structuring our code so that both we (Gilt) and you (YOU) can contribute to open-source modules.

* * *

### What Do You Do Next?

If you are working at Gilt, you can use this boilerplate to structure your js, css, templates, and tests in a way that will allow a module to be consumed by Gilt and others who use asynchronous module definitions. Clone this repo. Remove the current git implementation and restart it with git init and your remote url.


* * *

# SETUP

### Package.json

In the package.json code below, make the following changes:

1. Replace MODULE-NAME with the name of your repo as it exists in GitHub.
2. Replace MODULE-DESCRIPTION with the description of your repo.
3. Replace YOUR-NAME and YOUR-EMAIL with your information



```
  "name": "MODULE-NAME",
  "group": "MODULE-NAME",
  "version": "0.0.1",
  "description": "MODULE-DESCRIPTION",
  "repository": [
    {
      "type": "git",
      "url": "git@github.com:gilt/MODULE-NAME.git"
    }
  ],
  "maintainers": [
    {
      "name": "YOUR-NAME",
      "email": "YOUR-EMAIL"
    }
  ],
```


### Folder Names

Change MODULE-NAME in the following folders to match your GitHub name.

```
css/MODULE-NAME/
js/MODULE-NAME/
templates/MODULE-NAME/
```


### Gulp Tasks

Change MODULE-NAME in gulp/config.js

```
var MODULE_NAME = 'MODULE-NAME';

```

* * *

# Building your module

Once you have setup your module and you have written your code, you can build your app with the following tasks:


```
gulp js          //lint, bundle, and uglify your js
gulp less        //convert your less to css for your module
gulp less-page   //convert your less to css for your gh-pages page
gulp test        //test your module
gulp watch       //watch for changes to css, js and tests, and run the above gulp tasks accordingly
gulp watch-tests //watch for changes to tests and run phantomjs accordingly
gulp run         //run this module locally on port 8000
gulp             //run all of the above tasks in sequence listed above
```


* * *

# Consuming the module

When you run the gulp tasks, you will have CSS and JS files available to you in /dist/css and /dist/js respectively.

* * *

# Questions?

If you have questions, please contact <gmazurek@gilt.com>, <kdorman@gilt.com>, or <jsanchez@gilt.com>.
