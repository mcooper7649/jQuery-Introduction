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



## jQuery - Challenge 1.
    1. Change text color of h1 to red.
    2. Add jQuery CDN above the local JS file to make the jQuery functional.# jQuery-Introduction
