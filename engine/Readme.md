# Stroy beginning...

What's function you want when you develop a brower application?

Here is an answer, so I try to learn and do this reposity. 
> In fact, it's just a learning record && analysis.

Requirejs, it's great one to manage your javascript and rule your javascript as a module.
So your javascript code is't so easy to crash! Yes, it's running well, but I get a problem.
what happened when i run this code? when I use function define && require, what's going on?
I even know nothing with it even so many people talk about it like it is easy...Orz  

However, I need try to do it no matter what's going on in next time.

### Part 1 - Core keywords require && define. 

First of all, when script required, the script node loaded into document indeed.
So I try to guess, here is a global variable, I called it engine, and engine has some
attributes for comunication.

When we get keyword require in script, it's will generate script tag and append it 
into document.head, and after this script has keyword define. What happened with it?
I am curious about it. So I guess the program running track maybe like this. First 
require a script from script id, like `require('a')` , it will make a key:value in global
variable. 

    require('a')
    engine.path = {
      'a.js': ''
    }

Get some variable like this. Then in `a.js` has keywors define. 

    define(function (require, module, exports) {
      ...
    })

it will retrun a function or object into `engine.path['a.js']` and get some variable like this.

    engine.path = {
      'a.js': module || function
    }

It's only some guess, let me to do this. Time at 01/13 2015 23:01:--.

---

__Guess got an answer.__

1.  Require or request module with the default base path, may the request start page or
    module directory location.

2.  When the script node you generate append to document correctly, add event `load` on it.

3.  Function define push `{id : factory}` to a global variable `context.defQueue` as valid
    function array.

4. Reload and execute define function as node's `load` completed.

__It's still some question box needed to open...__

Time at 01/18 2015 maybe 11:--. 
