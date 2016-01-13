# TO BUILD STATIC BOX

Box, I define this like a box.
In daily work, static page develop cost lots of time,
only cause it's need a lot of repeat action, like paste, copy and so on.

This repeat action, the tech-back-end can fix it well.
Here, I use Nodejs to complete thie part.

But another question is coming.
How to rebuild web view page?
Just like the tag &lt;link&gt;, script and even the html, body, div,
all of the html tag.

Maybe the way start can be this.
First, A javascript manager, it is can does something as the local config.
Second, anonymous function manager which can manage golbal and local function to
avoid variable conflict.

# Here is the first part.

1.build javascript manager
1.1 get local config. (foolish completed)
1.2 anonymous manager
1.3 config location

Charpter 1
1.1
  How to get local config?
  (function(){
    ...doSomething...
  }();
  In this code, it will run at now in javascript, so we take this.
  
  We need the absolute path of local config, so get all script node in document
  it's necessary. 
  At first, get all script node and filter node, get the name 'local' or
  other custom config base name.

  So this base model when the local.js running is that take a 
  functin (fn(){...})() in this code we get a absolute path of config file.

  Absolute path is't necessary, how to combine base path with module is a problem.
  Especially a custom base path given.

1.2
  What anonymous function in javascript?
  function(.){...} it's like a function but no function name.
  In javascript, we can call anonymous function as callback function, cause we use
  it when something action happend.

  But how can I manage my anonymous function in javascript, it's anonymous, no name,
  no place for us to get it.

  So a good data struct for anonymous and we can use this struct to manage our
  callback function package.

  Array A : [A, B, C, ..., N] --> Array A' : [fnA, fnB, fnC, ..., fnN]
  Use Array struct, it's useful and easy to modify content.

  From A[key] --> get the key mapping A' and locate the function in A'[key].
  And name N to fnN place not function name, and offer a way to get fnN.

  function anonymous manager is not only a function, it has own stack to store
  index, manage stack through index. At the beginning, there is common api for
  storing function into stack.
  
  #
  I found the anonymous manager is useless in my script loader, I can't combine it
  with loader array. What changes I need?

  A simply array manage tool is useful, so I transform the anonymous to an array manager.
  Maybe it's better or something I missed.
  #

1.3
  What's a config in javascript and how it works? It's the two important questions
  before we start code the local.config function.

  config function is just like a variable manager, so I can set something reverse 
  key words, 'baseUrl' or 'paths', and join the variable to source path when I use
  it.

After && Before
  This word appear early, like I write in the future. Because it's about Emily.
  What can Emily do? Somethme I think about this. But my lazy bone give me more
  time, I spend lots of time without thinking.

  Emily, a great lovely life in computer. The limit of my imagination is here now.
  I touch it with my warn feel in my heart, it's funny?

  At least from this point, I need restart this paper! 2015/09/16 21:16
