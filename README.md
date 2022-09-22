<h1>Whole markdown is set as comment.</h1>

<!-- CCS10 Lab Summarized Activity 1
Mark Jerome B. Santos BSIT 1 - A

I.	Introduction
The requirement for CCS10 Lab Summarized Activity 1 is an HTML webpage that includes a letter talking to one’s self about what learnings happened during our Midterm period in CCS10. The Letter includes an appreciation part for our parents and an external narrative report in Word Document mainly for the explanation of the webpage. We are allowed to use additional methods such as stylesheets and scripting. 

II.	Webpage 
The color scheme of the webpage is black and white. I personally like the combination of black and white as it doesn’t put any stress in our eyes. For the structure I used HTML5. I have one HTML5 file named index.html. I used two images for the favicon and the background-image respectively. For the stylesheets, I used CSS3. I have three CSS files named styles.css – for the body and main stylesheet of the page, hamburger.css – for the navigation bar and the hamburger part of the page, and lastly is primary.css  - mainly for the front-page of the webpage. This is where I designed the Narrative Report Container and the mouse symbol. 
The background-image is set to cover (to cover the whole page) and attachment is set to fixed (it is only fixed to one position). The background-repeat property is also set to no-repeat so that the image will not be repeated when the image does not fit the entire page.
Note: I added comments in the HTML, CSS and JavaScript files respectively to explain the important codes that I added.
Root

html {
    scroll-behavior: smooth;
}

* {
    padding: 0;
    margin: 0;

    text-align: justify;
}

:root {
    --primary-color: white;
}


The scroll-behavior is set to smooth so that the user can smoothly scroll through the page. However, it might not work on other browsers as it is still on the development side. I recommend using Opera GX and turn on smooth scroll. 
The * symbol is called a universal selector. It sets the whole page based on the properties inside it. For this page, I set its padding and margin to 0 so that all the elements that I will add will not have their default values. 
The :root selector is where I add the variables for properties and their values so that changes will be efficient. If I decided to change the color of those with values of –primary-color, I can go to the root and change it there to quickly change all those elements with the said value. With this, I won’t have to go one by one just to change the color.    
III.	Features
For my webpage, I divided it into sections and parts.
• Navigation Bar 
 
For this Navigation Bar, I used nested div tags to contain my name MJBS. (abbr) and the hamburger which is a switch to show the letter. I did this so that when the page is loaded, the typing effect I made with JavaScript will not cause any delay or lag (see Section V for more details). 
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

The navbar is the body of the navigation bar of the page. It has a 70px height and background color of black. I set its position to sticky so that it will stick to the top (top is set to 0) whenever the user scroll down. The container class is a container for my name and the hamburger. It has a maximum-width of 1500px so that it will have some space from both sides. The flex class is an another class that I added to separate my name and the hamburger. It was achieved using flexbox and justify content of space-between. Adding to this, to center the flex class the margin of the container class must be set to 0 and auto. The first value is for the top and bottom margin, and the second value is for the left and right margin.
The name (MJBS.) is written with the font Montserrat that I imported from google fonts using the @import rule of css. I separated the letters using <span>  to set the other letter (S.) to a different color to provide more stylish look.
 
The blinking cursor is a span class with a content &nbsp; or Non-Breaking Space. A non-breaking space is a space that will not break into a new line. I planned to use this together with the typing effect that I did with JavaScript (See Section V) but it won’t work, that’s why I included it in my name instead. The blinking animation is achieved using @keyframes of CSS.
The hamburger is an another division that is within the navbar div. It has three children divisions with classes named hamburger-line.The hamburger lines are the three lines that you can see, they have a width of 25px and height of 3px. This is the switch to generate the letter. Whenever the hamburger is clicked, the .active class is added using JavaScript to provide the styles that I added in CSS. The .active class contains the property transform which rotates the lines.
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
To provide more design, I added a transition delay to the base class so that there will be a delay whenever the hamburger is clicked.










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

The mouse symbol is a symbol to scroll as I removed the scrollbar of the page. 
::-webkit-scrollbar {
    width: 0.4vw;
    display: none;
}
As you can see it is displayed as none. But in case, the other browsers does not support it. I have prepared a ready designed scrollbar. 
::-webkit-scrollbar-thumb {
    background-color: var(--primary-color);
    border-radius: 20px;
}

::-webkit-scrollbar-track {
    background-color: rgb(0, 0, 0);
}
  
I won’t go deep into this as I don’t plan to use this. But simply put, I re-designed the default scrollbar. The -thumb is the one that you move, and the -track is the container.
The mouse symbol is contained inside the Exercise container together with the Activity Title. The mouse symbol is achieved using a div with a width of 32px  and a height of 60px then setting its border-radius to 32px making it look like a vertical oval. The wheel is a span class with a width of 8px and a height of 10px making it look like a circle with a bit of a height. The scroll animation is achieved using animation and @keyframes in CSS. The keyframes manipulate the position of the cirle. The first value of translate is for the X-axis and the second value is for the Y-axis. First, the position is set to translate (-50%, 0) putting the circle at middle of the container. Before this, you must set the child’s position to absolute and the parent element’s position to relative. Absolute position removes the element from the document flow, so it must be relative to the parent element. Going back, the 20%, 30% value of @keyframe is opacity 1 because when the keyframe is at 100% it will turn into opacity 0 to produce a smooth fade-out animation. The most important part of the keyframe is its value in 90%, it will translate the circle’s position from (-50%, 0) to (-50%, 150%). This produces a downward motion plus adding an infinite value in the animation property to make it move forever. 
For the arrow beside the mouse, I used Bootstrap (a framework of CSS) to get the icon to provide more emphasis on the scroll down function. The arrow is hidden and the mouse will not animate until the hamburger is clicked, I used JavaScript to add their own .active class respectively. 
const arrowMouse = document.querySelector('.arrow-down');

hamburger.addEventListener('click', () => {
    arrowMouse.classList.toggle('active');
});
 
The document.querySelector selects the  .arrow-down class. For more details about the use of JavaScript, see the Section V of this report.
#Exercise-container {
    border: solid 2px white;

    position: relative;

    max-width: max-content;
    margin: 0 auto;

    border-radius: 15px;
    padding: 20px 20px;

    transition: all 0.8s linear;

    text-shadow: 0 0 3px rgb(255, 255, 255, 0.3), 0 0 16px cyan;

    box-shadow: 0 0 10px cyan, 0 0 10px cyan;
}

#Exercise-container::before {
    content: '';

    position: absolute;
    top: 140px;
    left: 0;
    height: 100%;
    width: 100%;

    background: linear-gradient( cyan, white, cyan);
    
    transform: perspective(120px) rotateX(55deg) scale(1, 0.5);

    filter: blur(64px);
}

For the neon look, I added a text-shadow for the text and a box-shadow to the border of the Exercise-container div.  Its values are doubled to make the shadow thicker but not compressed. The reflection is achieved using the pseudoselect ::before. I used max-width and margin auto to center the container, I did not use flexbox so that its contents will stay as block elements (block elements take up the whole width). I used flexbox for anchor and paragraphs inside the file div to center them. I also set the opacity to none and visibility to hidden when hamburger is clicked to provide more emphasis for the letter. Pointer-events is set to none to avoid misclicking the downloadable file when the container is hidden as the opacity and visibility only hide the container VISUALLY. To completely remove a feature, you must display it as none. This also remove the space its taking, the downside is you cannot animate or put a transition delay to the element. The transform perspective property make the ::before selector (square) look 3d or more like an isosceles trapezoid. The rotateX is needed to achieve the 3d look of perspective, without it the perspective property will only look like it reduced the size of the light. Scale  on the other hand is for the adjustment of size, first value of scale is for scaleX and the second value is for scaleY. To finish up the reflection texture, you must set the filter: blur to (64px) or more.

IV.	Letter
My styles.css mainly used for the design for the webpage itself and the body of the letter. The background color of the body is white with an opacity of 0.75. (which is why I use rgb). The body of the letter is glowing using @keyframes of CSS.
@keyframes glow {
    0% {
        box-shadow: 0 0 5px azure, 0 0 15px azure;
    }
    10% {
        box-shadow: 0 0 5px pink, 0 0 15px pink;
    }
    20% {
        box-shadow: 0 0 5px lightgoldenrodyellow, 0 0 15px lightgoldenrodyellow;
    }
    30% {
        box-shadow: 0 0 5px yellow, 0 0 15px yellow;
    }
    40% {
        box-shadow: 0 0 5px lime, 0 0 15px lime;
    }
    50% {
        box-shadow: 0 0 5px aqua, 0 0 15px aqua;
    }
    60% {
        box-shadow: 0 0 5px pink, 0 0 15px pink;
    }
    70% {
        box-shadow: 0 0 5px lightgoldenrodyellow, 0 0 15px lightgoldenrodyellow;
    }
    80% {
        box-shadow: 0 0 5px yellow, 0 0 15px yellow;
    }
    90% {
        box-shadow: 0 0 5px lime, 0 0 15px lime;
    }
    100% {
        box-shadow: 0 0 5px aqua, 0 0 15px aqua;
    }
}
The frames travels through percentages changing the color of the box-shadow. 


You might be wondering how the marks and other colors except black and white changes color. The answer is hue-rotate. 
@keyframes hue {
    100% {
        filter: hue-rotate(360deg);
    }
}


I added hue-rotate to the inner div class (the first child element of the div .letter ). I also set its animation to infinite so it will animate forever with a 10 second delay between travels. Why didn’t I use hue-rotate in the first place instead of box-shadows? The answer is, hue-rotate does not follow the transition delay between hover in and out (even if I used the animation for the baseclass and didn’t use the hover selector), hence it will animate INSTANTLY producing an obnoxious design. But why? Hue is different, its not actually an animation. Just like it says that hue animation rotates over color specters, but it is done so fast that it looks like an animation. It rotates over thousands of colors without dramatically altering the color- -specter family. It follows the sequence, it knows how to properly transition from color to color (Example: green to pink), while we do not.   
The fade animation of the letter is achieved using the scale property of CSS
#letter {
    opacity: 0;
    visibility: hidden;

    transform: scaleY(0, 1);
    transition: all 1s;
}

#letter.active {
    opacity: 1;

    transform: scaleY(1, 1);
    visibility: visible;
}

Remember: .active class is only added when you click the hamburger (See Section V for the JavaScript behind it). 
So with this, I tried experimenting. When you only put one value in scaleY.
transform: scaleY(1, 1);
The animation starts from the middle looking like a folding animation vertically. When there are two values, the animation will starts to look like its fading. When we remove the Y property and leave it only as scale, as I said from above, the first value will target the X-axis meaning it will create a horizontal animation. I chose to put two values to get the fade animation because it looks better and not causing any lag.

Now for the design of the content of the letter. Some tags were deprecated and cannot be used so I still have to use CSS instead of relying only on HTML tags (Example. <big> <font> etc.).

• Heading 
The heading is contained inside the .letter and .inner class. It is the first child of inner. 
<div id = "letter-head">
                <div id = "title">
                    <h1 class = "heading">Title</h1>

                    <div class = "labels">
                        <h2>CCS10 Summarized Activity-1</h2>
                        <div class = "underline"></div>
                    </div>
                    
                </div>

                <div id = "heading">
                    <h1  class = "heading">Heading</h1>

                    <div class = "labels">
                        <h2>A Letter to Myself About HTML Programming</h2>
                        <div class = "underline"></div>
                    </div>

                </div>

                <div id = "name">
                    <h1  class = "heading">Name</h1>

                    <div class = "labels">
                        <h2>Mark Jerome B. Santos</h2>
                        <div class = "underline"></div>
                    </div>
                       
                </div>

                <div id = "yearAndSection">
                    <h1  class = "heading">Year and Section</h1>

                    <div class = "labels">
                        <h2>BSIT 1 -A</h2>
                        <div class = "underline"></div>
                    </div>

                </div>
            </div>

 
The background of the heading of my letter changes because I added a background-image on the hover selector of the class. It changes color because it’s affected by the hue-rotate that I set. The box that you can see when you hover over the headings (Ex. Title) is a container with a max-width of max-content so that the width of the container is relative to its content and margin: 0 auto to center the container. The shadow is achieved using box-shadow 
  box-shadow: 10px 8px 10px black;

The first and second value targets the X and Y axis respectively. The third value is for the blur of the color and the fourth value is the color.
 
The underline is a div under the h2 headings. 
  <div class = "underline"></div>

I can set its width to 100% as it is relative to the max content of the container. The animation is achieved using the scale property that I explained above.

• Body 
For design of the body, I used some inline styles (which is not recommended and considered as bad practice, but I used them in this case because the page is not that long and complex) for the styling of some words and sentences as some of the HTML tags are deprecated and are not working with my IDE.
 
The questions here are italicized using the <i> tag so that questions and things that I want to emphasize will stand out. 
The word imaginary is on the top using the tag <sup>. I used this to emphasize the imagination means your mind is beyond the clouds.  :)
Some words are underlined because I want to emphasize the adjectives and problems that I want to direct to myself.
As you can see the word fascinated has different colors because I want to highlight the level of fascination that I felt with technology and computers.
Speaking of technology and computers, you can see a dashed border surrounding the words. When you hover over it, a black background with an animation similar to the letter using scaleY will come out. I did this to show the fascination that I felt with them in the past.
There are sentences that are marked because I want to highlight the memories or events that were very important at that time. The <mark> tag is changing color due to the hue-rotate that I set.
Don’t have one  is crossed because I want to show the absence of the gadgets.
Cardboards is actually highlighted with the color brown. However, due to the hue-rotate that I set, it’s changing color but if you see closely, the first and last color of the travels is brown.
Similar to cardboard, good is highlighted with green because as everyone  knows, green symbolizes correctness or goodness.
Excitement, the joy, and the happy feeling is highlighted too, but there is a difference, instead of using the <mark> tag I used CSS (inline styles to be exact).  
background-image: linear-gradient(to right,yellow, cyan, orange);

for some reason, when you use linear-gradient (mixing of colors) you must use the property background-image instead of background-color. The default value of linear-gradient is top to bottom but with the to right value, the colors will mix rightward. I did this to highlight the different emotions that I felt when I was a child. 
The bold words are the one that I want to provide more emphasis as well. 
With the acronyms such as BSIT and IT, I added a <abbr> tag with a title stating their whole meaning. When you hover over them, you will see the effect of the tag.





The impostor syndrome is underlined and has a color of purple. For this one, I surrounded the word with anchor tags <a> with an HTML Reference of its meaning from wikipedia meaning you can click it. It has a target of _blank so even if you misclick you will just go to an another tab and not lose the site (changes color because of the hue-rotate).
 
Senior High School Life  is underlined to emphasize my time or points in life. As you can see, they separated in parts in the HTML. 
The acronym ICT is also surrounded with <abbr> tags with a title of Information, Communication, and Technology.
The word important is above the line as it is surrounded with <sup> tags. I did this to make the word stand out more than anything in that sentence. In contrast to the word 
dissapointed which is under the line as it is surrounded wih <sub> tags. I did this to express my emotion, that I was down at that moment.
The numbers or time are also underlined using the <ins> tag to emphasize the time or amount. It also makes sense that soon it will be changed and I can either remove it completely or use the <del> tag.
The word playing games is crossed because I stopped doing it. 
Java, Python, JavaScript, C++, and C are highlighted because I want to highlight my tech stack that I learned throughout my self-studying sessions.
CS50x of Harvard is surrounded with <span> tags with a class of .emphasis. I want to provide an emphasis to CS50x uniquely because it is a great feat in my life. 
The class .emphasis is designed using CSS. 
.emphasis {
    display: flex;
    justify-content: center;

    text-decoration: underline;
    font-size: 30px;
}
I used flexbox to give it a justify-content of center to a new line without using <br> tags. It is also underlined using the text-decoration property and a bigger font-size than the rest. The tag <font> in HTML is deprecated and cannot be used. The documentation of HTML itself recommends not to use it. This also applies to other deprecated tags such as <center>
 
The APIs, Version Control and other technical terms are italicized using the <i> tag because I want to stress that they are somehow complicated or new to other people.
Different has different colors because it is the word different! I also want to emphasize the different jobs that you can apply to in the future.
The word,		Center 		is centered because it is the word center.
The worth depth is below the line using <sub> tags because it symbolizes the word depth.



 
Here is the list. I used inline styles to style each of the <li> with different colors. They are changing color because as I said, anything that has light colors travels its color-specter family due to the hue-rotate that I set.
• heading is surrounded by <h1> tags.
• paragraph is surrounded by <p> tags.
• tables is above the line using the <table> tags.
• description lists is surrounded by <dl> tags and <dd> tags for its sub list.
• ordered list is surrounded by <ol> tags but the number is messing with the bullets of my parent <ul> tags that is why I set its type to none.
• the word size has a class of .size so I can change its font-size using CSS as the <font> tag is deprecated.
• basefont is surrounded by <basefont> tags (not working, deprecated)
• The center is crossed because it is also deprecated and not working in my IDE. 



 
The gratitude part is contained on a separate container called .section. Inside this div, there is an unordered list and an anchor tag containing the texts.
I used the anchor tag to use the pseudoselector ::after. When you hover over this div, the pseudoselector of the anchor (see carefully the CSS selectors) will pop up providing more emphasis to the section. It was achieved using CSS.
.gratitude li a::after {
    content: '';

    width: 100%;
    height: 100%;

    top: 0;
    left: 0;

    background-color: rgb(26, 26, 26);
    
    position: absolute;

    transform: scaleY(0);
    transition: 0.5s;

    z-index: -1;
}

.gratitude li a:hover::after {
    transform: scaleY(1);
}


The pseudoselector must be position: absolute to move it around but it should be relative to the parent div. 
You must also set its z-index to -1 so that it will not be above the texts.
.section {
    position: relative;
}

The animation is similar to what I explained above about the letter animation. The scaleY animation starts from the middle then animating vertically. Remember to set the scaleY to 1 in the :hover selector or else it will not work.
.gratitude li a:hover::after {
    transform: scaleY(1);
}

But the texts are also zooming, and the texts are not part of the pseudoselector? How? 
Here comes the tranform and scale property. 
.gratitude:hover {
    transform: scale(1.048);
}

In order for the texts to zoom, you need to contain it with a div and set the scale above 1. 
I set its value to 1.048 so that the zoom will look perfect. But why exactly 1.048? Apparently, 1.048 does not blur the text for some reason and it actually works, when you go 1.05 and above you can see that the text is starting to be blurry which is why it’s better not to increase the scale drastically. Take note that the blurry bug only applies on some browsers especially when you contain the text inside the div itself. This is also one reason, why I used an unordered list and set the texts inside the anchor tags.

The last part of the gratitude part is marked with a background color of aqua. It changes because of the hue-rotate. I also set its own scale so that It will provide more emphasis to the last phrase.
 
The first “yourself”  is surrounded by <sup> tags to emphasize that you are not below anyone. Be proud of yourself. This is also why the next “yourself” are big compared to the normal text to symbolize that you are not small and stop underestimating yourself. 

There is a long space between “this” and “far” to symbolize the distance  between the past me and the present me. 

 
The first highlighted sentence is contained in a <span> tag with inline styles as I only want to center it.
 <span style="display:flex;justify-content:center"><mark><em>The challenge is now here, so don't give up on us. You worked really hard for this so study hard and don't waste any opportunity.</em></mark></span>

It is italicized using the <em> tags because I want to emphasize it as a reminder for myself.
The second highlighted sentence is contained in a <div>  tag with a class of .fifth-sub-part and another class that I used previously called .emphasis. 
.fifth-sub-part {
    background-image: linear-gradient(to right, yellow, cyan, orange);
    max-width: max-content;
    margin: 0 auto;
    
    padding: 0 5px;

    border-radius: 5px;
}

It has a linear-gradient background-image and instead of flexbox I used max-width: max-content and set its margin to 0 and auto to center it.  I didn’t use flexbox because I used a background-image so it will take the whole div, as we know a div is a block element which gets the whole width of a section. That is why, I used max-content so that the background-image width is relative to the max-content. The margin 0 auto is simply used to center the text. As I said from above, The first value is for the top and bottom margin, and the second value is for the left and right margin.

 

For the last part of the last part,  I read between the lines. For the up, I used the <sup> tags and for the down I used the <sub> tags. I decreased the font-size of the word smaller using <small> tags while I  increased the font-size of the word bigger and larger using CSS. 

For the quote, I surrounded the texts using the <q> tags and I also put the .emphasis class to give it its own space. I also used the <code> tags that is why the font looks different than the rest of the texts. It also has its own class named .quote.
The class has; 
    background-image: linear-gradient(to right, yellow, lime, orange);
and a changing scale to 1.2 when you hover over it.


 
For the signature, I used https://www.signwell.com/online-signature/draw/ to draw my signature. I contained it within a span with a class named .img. The sole purpose of the class is to move the image using position relative.
I might have other img elements that is why I used a span and used the selector > to target the img itself.
.img > img{
    position: relative;
    top: 180px;
}

• Footer 
Lastly, the footer is contained inside a div with an ID named me. The div has only one child element, a footer using <footer> tags. I used flexbox for the div to put it at the end using the value flex-end. 
#me {
    display: flex;
    justify-content: flex-end;

    margin: 50px 90px;
}

It also has an icon from FontAwesome contained inside its own span.
<i class="fa fa-code icon-html-mini"></i>


.icon-html-mini {
    font-size: 35px;

    display: flex;
    align-self: center;

    padding: 0;
    margin: 0;
    margin-left: 10px;

    transition: all 0.5s linear;
}

.icon-html-mini:hover {
    transform: scale(1.2);

    text-shadow: 10px 10px 5px cyan;
    
}

I also used flexbox to align it. Align is used to adjust the position of an element on the Y axis compared to the justify which adjust the position of an element on the X axis.
I also added a reflection effect on it when you hover using text-shadow. Text-shadow is similar to the box-shadow but the difference is it targets the content itself and not the container that it is relative to.







V.	JavaScript

My main.js file is for the scripts of the webpage. The first function of this file is for Event Delegation, simply put, it is the efficient selection of the HTML DOM. It is a function using .addEventListener where it listens to my commands, I used ‘click’ for this function. The main purpose of this function is to add the respective .active class of each classes.
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


• Typing Effect
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
The third variable (charIndex) is the index or position of the letter, as the letters will be typed one by one. It must be set to 0 as its initial value to get the first letter’s index (Array rule), then it will be incremented by one using charindex++.
If you are wondering why charIndex is let instead of const is because the value of charIndex changes, it is incremented. On the other hand, when you set a variable to const, its value must not change (const = constant). One more, JavaScript is a DYNAMICALLY TYPE language, meaning you can declare a variable without a data type similar to Python.
P.S: let is a better choice instead of using var when declaring a variable in JS, when you declare a variable with var, its value can be overwriten when you create another variable with the same name. let will tell you that there is an error in the same circumstances.
Going back,
Intro.textContent += text.charAt(charIndex);
.Intro will be targeted and we will use the method textContent to target its content (.Intro). += (means a = a + b) is used on adding the text contents by character indexes using charAt. The arguments passed on the parameter of charAt must be an integer type hence the charIndex is set to 0…++. 
 setTimeout(typeEffect, 100);
setTimeout is a delay when calling the function. The function is a recursion  as it calls itself. That means, when you call the function, one character is added, the 100 is simply a delay between the calls.
As it is a recursion, it needs to be called inside the function and also outside the function.
document.addEventListener("DOMContentLoaded", function() {
    typeEffect();
});

The .addEventListener is added to listen to the whole document when it is loaded using the “DOMContentLoaded”. Inside this listener, you must call the function typeEffect(); to run it ONLY when the html is finished on loading, therefore you must set the <script> tag on the bottom of your body or else your JavaScript might not run or cause lag.
 <script src = "main.js"></script>
__________________________________________________________________
VI.	End
This marks the end of my Narrative Report. Thank you.

Santos, Mark Jerome B. | BSIT 1-A -->
