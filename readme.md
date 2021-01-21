### jQuery - Introduction
---

1. What is jQuery?
    - What is a library?
        * A library is code someone ele wrote that you can incorporate into your own projects to improve your project or make it easier.
        * Bootstrap is another popular example of a library.
    
    - jQuery is a JS library that lets you write the same thing but using much less caracters.
        * document.querySelector("h1) is how you would select h1 using traditional DOM.
        * In jQuery this can be written like:   jQuery("h1")
        * Even more simplified you can write it like this using jQuery:   
            $("h1")  // Amazing Right?


2. How do we incorporate jQuery?
    - Like Bootstrap, the most common method is using a CDN, popular CDNs include:
        1. Google
            
            ```
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
            ```

        2. Microsoft
        3. CDNJS
        4. jsDelivr
    
    [link to CDNs](jquery.com/download/)

3. Why use a popular CDN?
    1. Increases the chances of the CDN being cached, which will load the site faster than someone using an obscure CDN or local copy.


4. Bootstrap is to CSS/HTML as jQuery is to JavaScript.
    - It's all about minification
    - [Minifier](minifier.org) - Popular Minifier Site for CSS or JS minification

## jQuery - Challenge 1.
    1. Change text color of h1 to red.
    2. Add jQuery CDN above the local JS file to make the jQuery functional.



## jQuery - Basics
    1. Selecting Elements 
    ```
    $("h1"); // Basic Query Selector
    $("button"); // Selects 1 or Many 
    $("h1").css("color"); // Basic Query Selector with CSS property value query
    $("h1").css("font-size"); // Basic Query Selector with CSS property value query
    $("h1").css("color", "green"); // Basic Query Selector with CSS property value change
    $("h1").addClass("big-title)"; // Adds Class
    $("h1").removeClass("big-title") // Removes Class
    $("h1").addClass("big-title margin-50");  // Adds Multiple Classes
    $("h1").hasClass("margin-50"); // Returns Boolean

    ```

    2. In jQuery a value with one property is a Getter.

    ```
    $("h1").css("color"); // Getter Example
    ```

    3. In jQuery a value with two properties is a Setter.

    ```$("h1").css("color", "green"); // Basic Query Selector with CSS property value change  //Setter Example```


    4. Best practices suggest we Don't use JS to stylize. Remember to use jQuery to modify classes to in CSS to stylize.

    ```$("h1").addClass("big-title");  // This would add the class with appropriate styles using best practices.```

## jQuery - Intermediate
---

    1. Text Manipulation with jQuery
        
        ```
        $("h1").text("Bye")   // Changes Hello to GoodBye
        $("button").text("Don't Click Me")   // Changes Changes ALL the buttons text
        $("button").html("<em>Hey</em>");  // instead of innerHTML in DOM, jQuery uses .html to modify the innerHTML. This Changes button to emphasized "Hey" text.
        ```

    2. Attribute Manipulation with jQuery
        ```
        $("img").attr("src")  // This is how you Change the SRC attribute of an IMG tag
        $("a").attr("href", "www.google.com") // The first property Gets our Attribute and second property Sets our attribute. This changes ALL anchor tags hrefs.
        $("a").attr("class"); // This returns all the classes associated with our A tag.
        ```


    3. Adding Event Listeners with jQuery
        ```
        $("h1").click(function(){  // Here is how we add a click event 
            $("h1").css("color", "purple")  // Inside the anonymous function we add more jQuery to change the css color to purple
        })

        $("button").click(function(){       // No For loop when using jQuery as the querySelector automatically applies to all elements selected. Including the event handller.
            $("h1").css("color", "purple") 
        })

        $("input").keypress(function(event){
            console.log(event)  // This is how †o console log a keypress when entered into the input field.
        })

         $("body").keypress(function(event){  // This is how †o add event listener to the whole page, like the drum kit excercise.
        })

         $("document").keypress(function(event){  // This is how †o add event listener to the whole page, like the drum kit excercise.
        })


    4. Adding/Removing Elements with jQuery

    5. Website Animations with jQuery

## jQuery Challenge 1
---

1. Using jQuery, change the h1 tag to display the character pressed on the screen.