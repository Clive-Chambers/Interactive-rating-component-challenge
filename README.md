# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshots

![](./design/desktop-design.jpg)

![](./design/desktop-thank-you-state.jpg)

### Links

- Solution URL: [Clive Chambers GitHub](https://github.com/Clive-Chambers/Interactive-rating-component-challenge)
- Live Site URL: [Interactive-rating-component-challenge](https://clive-chambers.github.io/Interactive-rating-component-challenge/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- JavaScript
- Mobile-first workflow

### What I learned

In this challange I got to practise & implement Flexbox which I used to align the ratings component and its content both horizontally and vertically, see below:

```css

body {
    font-family: 'Overpass', sans-serif;
    font-size: 15px;
    font-weight: 400;
    background-color: hsl(216, 12%, 8%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
}

```

```css

.Main-container ul {
    display: flex;
    justify-content: space-between;
    list-style-type: none;
    margin-bottom: 15px;
    
}

```

```css

.thank-you {
    display: flex;
    flex-direction: column;
    align-items: center;
}

```

I also got to practise my JavaScript skills interacting with the DOM to select html elements using query selector and getElementById, see below: 

```js

const mainContainer = document.querySelector('.Main-container');
const thanksContainer = document.querySelector('.thank-you');
const submitBtn = document.getElementById('submit');
const ratingBtn = document.getElementById('rate');
const rating = document.getElementById('rating');
const rates = document.querySelectorAll('.btn');

```
This allowed me to manipulate both the main container that I used for displaying the ratings form and the thank you state of the interactive rating component. This was achieved by attacthing two event listeners to each of the buttons displayed on the form in either state and displaying either state when each button was clicked by using an onclick event, see below: 

```js

submitBtn.addEventListener('click', () => {
    thanksContainer.classList.remove('hidden');
    mainContainer.style.display = 'none';
})

```

```js

ratingBtn.addEventListener('click', () => {
    thanksContainer.classList.add('hidden');
    mainContainer.style.display = 'block';
})

```

I then used a forEach Loop to loop through the ratings buttons and display the content of the rating button when it was selected by again creating an event listener with the onclick event and assigning the innerHTML of the button to a span element to be displayed in the thank you state of the interactive rating component, see below:

```js
const rating = document.getElementById('rating');
const rates = document.querySelectorAll('.btn');

rates.forEach((rate) => {
    rate.addEventListener('click', () => {
        rating.innerHTML = rate.innerHTML;
    })
})

```

```html

<p class="notice">You selected <span id="rating">5</span> out of 5</p>

```

### Continued development

I would like to practise more challenge projects that implement the use of JavaScript in future projects to gain more experience and solidify my JavaScript skills. I have a good understanding of JavaScript concepts but need to practice more on real project so that i have a firm understanding of the language and feel more comfortable with it. 

## Author

- Website - [My portfolio](https://clive-chambers.github.io/portfolio/)
- Frontend Mentor - [@Clive-Chambers](https://www.frontendmentor.io/profile/Clive-Chambers)
- GitHub - [Clive-Chambers](https://github.com/Clive-Chambers)
