CCS10 Lab Summarized Activity 1
Mark Jerome B. Santos BSIT 1 - A

I.	Introduction
The requirement for CCS10 Lab Summarized Activity 1 is an HTML webpage that includes a letter talking to one’s self about what learnings happened during our Midterm period in CCS10. The Letter includes an appreciation part for our parents and an external narrative report in Word Document mainly for the explanation of the webpage. We are allowed to use additional methods such as stylesheets and scripting. 

II.	Webpage 
The color scheme of the webpage is black and white. I personally like the combination of black and white as it doesn’t put any stress in our eyes. For the structure I used HTML5. I have one HTML5 file named index.html. I used two images for the favicon and the background-image respectively. For the stylesheets, I used CSS3. I have three CSS files named styles.css – for the body and main stylesheet of the page, hamburger.css – for the navigation bar and the hamburger part of the page, and lastly is primary.css  - mainly for the front-page of the webpage. This is where I designed the Narrative Report Container and the mouse symbol. 
The background-image is set to cover (to cover the whole page) and attachment is set to fixed (it is only fixed to one position). The background-repeat property is also set to no-repeat so that the image will not be repeated when the image does not fit the entire page.
Note: I added comments in the HTML, CSS and JavaScript files respectively to explain the important codes that I added.

III.	Features
For my webpage, I divided it into sections and parts.
• Navigation Bar 
 
For this Navigation Bar, I used nested div tags to contain my name MJBS. (abbr) and the hamburger which is a switch to show the letter. I did this so that when the page is loaded, the typing effect I made with Javascript will not cause any delay or lag (see Section V for more details). 
   <div class = "navbar">

        <div class = "container flex">

            <h1 id = "Mark"><abbr title = "Mark Jerome B. Santos">MJB<span id = "S">S.</abbr></span></h1>

            <div class = "inner-container">

                <div class = "arrow">
                    <p class = "click">Click to show the letter</p><i class="bi bi-arrow-right arrow-angle clickable"></i>
                </div>

                <div class = "hamburger">
                    <div class = "hamburger-line"></div>
                    <div class = "hamburger-line"></div>
                    <div class = "hamburger-line"></div>
                </div>
            </div>

        </div>

The navbar is the body of the navigation bar of the page. It has a 70px height and background color of black. I set its position to sticky so that it will stick to the top (top is set to 0) whenever the user scroll down. The container class is a container for my name and the hamburger. It has a maximum-width of 1500px so that it will have some space from both sides. The flex class is a another class that I added to separate my name and the hamburger. It was achieved using flexbox and justify content of space-between. Adding to this, to center the flex class the margin of the container class must be set to 0 and auto. The first value is for the top and bottom margin, and the second value is for the left and right margin.
The name (MJBS.) is written with the font Montserrat that I imported from google fonts using the @import rule of css. I separated the letters using <span>  to set the other letter (S.) to a different color to provide more stylish look.
The hamburger is a another division that is within the navbar div. It has three children divisions with classes named hamburger-line.The hamburger lines are the three lines that you can see, they have a width of 25px and height of 3px. This is the switch to generate the letter. Whenever the hamburger is clicked, the .active class is added using Javascript to provide the styles that I added in CSS. The .active class contains the property transform which rotates the lines.
.hamburger.active .hamburger-line:nth-child(2) {
    opacity: 0;
}

.hamburger.active .hamburger-line:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
}

.hamburger.active .hamburger-line:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
}

The translateY property adjust the lines positions in the Y axis while the rotate property rotates the child 1 and 3 line. The 2nd child is hidden. This is all needed to to make the X symbol.
To provide more design, I added a transition delay to the baseclass so that there will be a delay whenever the hamburger is clicked.










• The Mouse and Title of the Activity
I designed this part in primary.css file. 
 
 <div id = "Exercise">

        <div class = "mouse-container">

            <i class="bi bi-arrow-down arrow-angle arrow-down"></i>

            <div class = "mouse">
                <span class = "wheel">

                </span>
            </div>
        </div>

        <div id = "Exercise-container">

            <h1 class = "Intro">CCS10 Summarized Activity 1</h1>
            
            <div id = "file">
                <a href = "Narrative Report.docx" download>Narrative Report</a>
                <p>Click to download the Narrative Report</p>
            </div>

        </div>

    </div>

One mistake that I did here is naming the id as Exercise. It should be Activity and not Exercise but it was too late when I realized, there will be bugs and errors if I change the name as I added a lot of styles already.
Nonetheless, it’s working fine. 

The mouse symbol is a symbol to scroll as I removed the scrollbar of the page. The mouse symbol is contained inside the Exercise container together with the Activity Title. The mouse symbol is achieved using a div with a width of 32px  and a height of 60px then setting its border-radius to 32px making it look like a vertical oval. The wheel is a span class with a width of 8px and a height of 10px making it look like a circle with a bit of a height. The scroll animation is achieved using animation and @keyframes in CSS. The keyframes manipulate the position of the cirle. The first value of translate is for the X-axis and the second value is for the Y-axis. First, the position is set to translate (-50%, 0) putting the circle at middle of the container. Before this, you must set the child’s position to absolute and the parent element’s position to relative. Absolute position removes the element from the document flow, so it must be relative to the parent element. Going back, the 20%, 30% value of @keyframe is opacity 1 because when the keyframe is at 100% it will turn into opacity 0 to produce a smooth fade-out animation. The most important part of the keyframe is its value in 90%, it will translate the circle’s position from (-50%, 0) to (-50%, 150%). This produces a downward motion plus adding an infinite value in the animation property to make it move forever. 
For the arrow beside the mouse, I used Bootstrap (a framework of CSS) to get the icon to provide more emphasis on the scroll down function. The arrow is hidden and the mouse will not animate until the hamburger is clicked, I used JavaScript to add their own .active class respectively. 
const arrowMouse = document.querySelector('.arrow-down');

hamburger.addEventListener('click', () => {
    arrowMouse.classList.toggle('active');
});
 
The document.querySelector selects the  .arrow-down class. For more details about the use of JavaScript, see the Section V of this report.
For the neon look, I added a box-shadow to the border of the Exercise-container div.  I values are doubled to make the shadow thicker but not compressed. The reflection is achieved using the pseudoselect ::before. I used max-width and margin auto to center the container, I did not use flexbox so that its contents will stay as block elements (block elements take up the whole width). I used flexbox for anchor and paragraphs inside the file div to center them. I also set the opacity to none and visibility to hidden when hamburger is clicked to provide more emphasis for the letter. Pointer-events is set to none to avoid misclicking the downloadable file when the container is hidden as the opacity and visibility only hide the container VISUALLY. To completely remove a feature, you must display it as none. This also remove the space its taking, the downside is you cannot animate or put a transition delay to the element. The transform perspective property make the ::before selector (square) look 3d or more like an isosceles trapezoid. The rotateX is needed to achieve the 3d look of perspective, without it the perspective property will only look like it reduced the size of the light. Scale  on the other hand is for the adjustment of size, first value of scale is for scaleX and the second value is for scaleY. To finish up the reflection texture, you must set the filter: blur to (64px) or more.
IV.	Letter


V.	JavaScript

My main.js file is for the scripts of the webpage. The first function of this file is for Event Delegation, simply put is the efficient selection of the HTML DOM. It is a function using .addEventListener where it listens to my commands, I used ‘click’ for this function. The main purpose of this function is to add the respective .active class of each classes.
In here you can see all the classes that I selected using the query selector.
const hamburger = document.querySelector('.hamburger');
const letter = document.querySelector('#letter');

const click = document.querySelector('.click');
const clickable = document.querySelector('.clickable');

const arrowMouse = document.querySelector('.arrow-down');
const Exercise = document.querySelector('#Exercise-container');

const wheel = document.querySelector('.wheel');

and this is the main function of the file.
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    letter.classList.toggle('active');

    click.classList.toggle('active');
    clickable.classList.toggle('active');

    arrowMouse.classList.toggle('active');

    Exercise.classList.toggle('active');

    wheel.classList.toggle('active');
});
The function listens to the hamburger class, as it is only the interactive feature of the page.
Typing Effect
  Including in my main.js file is a function to make a typing effect.
const Intro = document.querySelector('.Intro');
const text = "CCS10 Summarized Activity 1";
let charIndex = 0;

function typeEffect() {
    Intro.textContent += text.charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, 100);
}

document.addEventListener("DOMContentLoaded", function() {
    typeEffect();
});

The first variable (Intro) targets the class .Intro in HTML 
<h1 class = "Intro"></h1>
 using document.querySelector. We need this so that JavaScript knows where to put the textcontent. 
The second variable (text) contains the string laterals or content that I want to type. 
The third variable (charIndex) is the index or position of the letter, as the letters will be typed one by one. It must be set to 0 as its initial value to get the first letter’s index, then it will be incremented by one using charindex++.
Intro.textContent += text.charAt(charIndex);
.Intro will be targeted and we will use the method textContent to target its (.Intro) content. += (or a = a + b) means adding the text contents by character indexes using charAt. The parameter of charAt must be an integer type hence the charIndex is set to 0…++. 
 setTimeout(typeEffect, 100);
setTimeout is a delay when calling the function. The function is a recursion  as it calls itself. That means, when you call the function, one character is added, the 100 is simply a delay between the calls.
As it is a recursion, it needs to be called inside the function and also outside the function.
document.addEventListener("DOMContentLoaded", function() {
    typeEffect();
});

The .addEventListener is added to listen to the whole document when it is loaded using the “DOMContentLoaded”. Inside this listener, you must call the function typeEffect(); to run it ONLY when the html is finished on loading, therefore you must set the <script> tag on the bottom of your body or else your JavaScript might not run or cause lag.
 <script src = "main.js"></script>

