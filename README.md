# Image Gallery in React
---
---

## What did I achieve?
- I used ```useState``` and ```useEffect``` for the API data.
- Made everything as different components in different respective files to keep the code more organised and easier to understand and deal with.
- I used a ```map()``` function to render the array of images dynamically.
- A larger version of the thumbnail is showed when the thumbnail is clicked.
- All images have alt text (if they are meaningful or not, it's out of my hands as it's the alt descriptions provided by Unsplash).
- The app can be used with the keyboard (thumbnails are focusable, and pressing the Enter key works at selecting them).
- I managed to use the Unsplash API to show their images in the gallery (it took quite a few reads through the docs and multiple online articles/guides, however).
- The API variable (with the secret Unsplash key) is safely stored in my .env file and not visible to everyone and their dog.
- It's not mind-blowing, but I'm proud that I achieved the layout I initially envisioned/designed as a wireframe. At first I tried by just using flex positioning , but realised I could make my life a lot easier by just using grid. Then I sorted out the responsive design using media queries in CSS.

---

## What wasn't I happy with?
- Not too much of a negative, but I'm a bit irritated with myself on how much time I kind of wasted trying the best way to do the layout. I feel like I should have known better to choose grid straightaway. That time I used trying the other method could have been used for more stretch goals. Anyways, it's not the end of the world, just a thought ^v^
- This week was pretty tough for me. I had experience with coding before starting this bootcamp, and for years I had only used HTML, CSS and vanilla JS (well, other languages too, but not in web design). This week I pretty much had to 'reset' all I knew and used all those years, and start coding in a different way (components, JSX, etc...), which, to be honest, took me out of my comfort zone and I still can't say if I feel good about it or not. This week was a bit discomforting and I spent some nights watching other tutorials and videos on React to help with my worries, but I guess I just need to keep using it and get used to it to feel better.
- Trying to implement the Unsplash API was a bit of a struggle. Initially it was fine -- registering an account as a developer, creating a new application on their dashboard, implementing the access key in the .env file... Issues started to arise when I checked out their JSON and all that data and levels of nesting scared me. I tried to understand their documentations, but I had trouble with that, so I had to find guides and video tutorials online to see the process better step-by-step.
- Unfortunately I also didn't manage to add a feature for users to be able to search for other images by using a search bar. I had a little research on how to do that, but one way I saw was by including parts of the API link in ```fetch```, but using a variable in the part that determines what types of image the API gets (e.g.: https://api.unsplash.com/search/photos?page=1&query=${userQuery}). I wasn't sure how correct that would be though as we want the API link to be hidden in the .env file, right? But I'm not sure if that amount would be acceptable to be kept in the App.jsx file or not. Or maybe I got it all wrong and there's a better way to do it XD
In the end I had to abandon the endeavour as I was worried trying would break everything else and there wasn't much time left.

---
---

## References

- Some extra revision/learning on React --> https://laracasts.com/series/react-the-laravel-way
  https://www.w3schools.com/react/
  https://react.dev/learn
- Media queries --> https://css-tricks.com/a-complete-guide-to-css-media-queries/
- Accessibly go through the thumbnail images and be able to select them with the Enter key --> https://useful.codes/keyboard-events-and-accessibility-in-react/
- Optional chaining to access Unsplash's object data in case it returns `null` or `undefined` --> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining and https://allthingssmitty.com/2025/06/02/write-more-reliable-javascript-with-optional-chaining/
