# About

The retard is a research project to understand how front-end development can be more effective. Most of the systems that we use are not optimized for self-development. The retard tries to find the best way for this. More about that in the story section.


Goals short, expectable, simple but not easy.


Retard frontend only has 5 functions and 1 callable class.  Every function is driven by the input variable count and types. 


# Functions

## single 

return with an empty DOMElement

## multi

return with a DOMElement that contains the elements that are injected into the function. 

## make

Make is a combined version of the single and the multi, which can result in an empty or not empty DOM.

## inner

Like the multi but with the not-safe innerHTML. Mainly for SVG injection. Do not use it if it is another way.

 

# Class
 Not implemented yet.

# ...

 In the current implementation, the inner and text functions exist but may removed in the future.



# Story.

 Retard started as a joke to extend the dragon web-fronted builder to make the frontend code heavy to read and minifyable.

 The retard himself was a joke because the original version was fast. Some versions used web assembly to run way faster. Serve the purpose everybody shake head when I showed. 

 However, the experience from the project was useful. More useful than I expected. 

 Over the years I worked with multiple template engines Mustache, Twig, Blade, Smarty, Razor, and Jinja. I worked with fronted with frontend frameworks like angular js, reactjs (JSX important here), and Vuejs. 

 They have differences and similarities. My favorites are React and Vuejs because they manage the HTML tags as objects (DOMElements). However, most of the templates try to inject the logic into the HTML. The Vuejs do this too but not force it. 

 But if You work with an AI tool and you want to keep the code readable you should inject the functionality to the object, not to the metalang. If I am not lazy I should write retard2react and retard2vuejs converter soon. 
