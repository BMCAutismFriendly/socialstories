# Adding a BMC Social Story

## Step 1: Upload images + PDF
Create a folder in the "img" file with the name of the story. Upload story images into the folder — a good rule is to name them in page order, so like "1.jpg" for the first image, "2.jpg" for the second, etc.

Then, upload the PDF of the social story in the "pdfs" file. If this is a PDF for a non-English language, upload it to the appropriate folder and ensure it is named the same as the English version. 

## Step 2: Create story page
Create a folder with the name of the story. In that folder, create a file, title it "index.html", and copy and paste the contents of "template.html" into the new file. 

The only parts that need modifying in "index.html" now are all labeled "EDIT". Here are tips on modifying those: 
#### 1
The first "EDIT" between ```<title>``` tags is the title of the page — the label you see on a browser tab.
  
#### 2
The second "EDIT" is in this line of code: ```<button class="blue" onclick="showPDF('EDIT')"><img class="button-img" src="../img/printer.svg"></button>```. Update it to reflect the name of the PDF file for the social story.

#### 3
There's a chunk that appears like this: 
```html
<div class="slide">
<p id="line1"></p>
<img class="slide-img" src="../img/EDIT">
</div>
```
This represents a page of the story. Copy and paste this as many times as necessary, changing the line number as necessary. Replace the "EDIT" in the image src attribute to represent the file path of the image. If you followed Step 1 correctly, this should look something like ```src="../img/story-image-folder-name/1.jpg"```.

## Step 3: Update the text
You should now have tags that mark locations in the code. Near the bottom, you will see a chunk 
```<script>
var english={
  "title":"TITLE",
  "line1":"Line1",
}
var languages={
  "english":english,
}
</script>
```
This is where you will tell the code what to put into each of the tags. Start with the text in English. 

## Step 4: Update JavaScript
Pop into the "js" folder and open the page called "index.js". Unless you're changing the way the website fundamentally operates, you shouldn't need to change "socialstories.js". Create a function that links to your story. For example, if the story was about a shot, we might store the story in a folder called "shot", and name our function "shot". The code would look like this:
```javascript
function shot(){
    redir("https://bmcautismfriendly.github.io/socialstories/getting-a-shot/");
}
```
    

## Step 5: Upload an icon for the main page
When the story appears as a button on the main page, we want it to have a cute icon! A good resource for these is https://thenounproject.com/, but there are lots of other icon-finding and icon-making resources online. Find an icon, and save it in the "img" file with a name that makes sense for the story (like "shot.png"). As an additional note, icons downloaded from https://thenounproject.com/ and many other sites are black with transparent background. Websites such as https://pinetools.com/invert-image-colors are able to invert the color to white with white background, which we want for our website. 

## Step 6: Update landing page
Finally, we want to update the main Social Stories page to contain our new story. Open "index.html" from the main GitHub page, and scroll down to the section with a list of items with the class "grid-item". Add another item to this list. Using our same example of a root canal above, we might add code that looks like this: 
```html
<div class="grid-item">
    <button class="main-button purple" onclick="shot()"><img class="grid-img" src="img/getting-a-shot.png"/>
        <p id="story2"></p>
        </button></div>
```
You have an option here to change the color of the tile that this story will have on the main page. There are six colors available: blue, teal, orange, red, green, and purple. Type your favorite option in place of "teal" in the section that says ```class="main-button teal"``` above.

At the bottom, you should update the Javascript JSON object for the languages you're adding the social story for. This should follow the format 
```javascript
var english={
    "title":"Autism Friendly Social Stories",
    "story1":"Getting to the</br>Doctor's Office",
    "story2":"Getting</br>a Shot",
}
```

The title text won't wrap on its own for the buttons, so if the title is too long, you can insert a line break by putting ```<br>``` between the words you want a break for. An example would be ```<p>Really long</br>title here</p>```.

### Step 7: Enjoy the story! 
Congrats! You've added a social story!

# Adding Languages
As of February 2021, the website now can support multiple languages! The website allows manual inputting of text from other languages for each page and an option to show a PDF of a different language that we upload. If the page has not been updated with a language, it will remain in English. 

On every page that you add a language, you should add a corresponding language button at the top of the page. Find the code 
```
<header>
  <ul class="lang">
    <button class="blue" onclick="changelang('english')">English</button>
  </ul>
</header>
```
and add a button. For example, adding Korean would entail adding the code ```<button class="red" onclick="changelang('korean')">한국어</button>```.

On each page you update, be sure to create a new variable for the language JSON object to tell the code to use different text when a different language is selected. Every pair of "line" and "text" will tell the code to put the text where the line shows up. To add a language, be sure to also update the ```languages``` JSON object. For example, if a ```korean``` JSON with Korean text were added, then the ```languages``` object should become 
```var languages={
  "english":english,
  "korean":korean,
}
```
Special characters can be directly copied and pasted into Github. In the event that does not work, there are tools online to convert strings of characters to 6-character HTML codes. 

Upload the PDF of the social story. This must be manually created and stored under pdfs in a dedicated folder for that language. The PDF should have the same name as the English version, but just in a different folder. 

Finally, don't forget to update the title of the story in the landing page!

# Switching to Categories

## Step 1: Create a category page
On the main page, there is a page called "template-category.html". Create a new folder with the name of the category (for example, "medical-procedures"), and create a file in that folder called "index.html". Copy and paste the text of "template-category.html" into this "index.html" file.

There should be two areas markekd "EDIT" in this file. They are similar to the first two categories marked in the story template. The first one will edit the text on top of the browser tab, and the second one will edit the title on the page itself. Replace "EDIT" with the title of the category.

## Step 2: Update stories in the category page 
There is a section of the category template page that contains this code:
```html
<div class="grid-item">
  <button class="main-button green" onclick="doctorsoffice()"><img class="grid-img" src="../img/stethoscope.png"/>
    <p>Getting to the</br>doctor's office</p>
  </button></div>
```
This represents a single button, which is green, leads to the Doctor's Office story when clicked on (see "Update JavaScript"), has the icon "stethoscope.png", and is titled "Getting to the doctor's office". Copy and paste this code in the same section to add a new button. There are a few properties to change about each button: 

#### Color
Simply change the "green" in ```class="main-button green"``` to one of the BMC colors. The ones available are "teal", "orange", "red", "green", "blue", and "purple". 

#### Title
Change the text between the tags ```<p>``` and ```</p>``` to your desired title. To break the text (if you want the title to be on more than one line), add ```</br>``` wherever you want a break.

#### Icon
Upload an icon into the "img" folder. Then update ```src``` to reflect the new icon. See "Relative links" section below.

### Where the button goes 
There are two ways to do this. One is to add a function in "index.js" (in the "js" folder) that leads to the desired page (see "Update JavaScript"). The other way is to add JavaScript directly into the html code. To do that, update ```onclick``` so it reads ```onclick="windows.location.assign('https://bmcautismfriendly.github.io/socialstories/EDIT/')"``` where "EDIT" is replaced with the name of the folder of the story you're trying to link to.

## Step 3: Update landing page 
See "Step 5: Update landing page" above. If things aren't showing up properly, check "Relative links" below.

# Something's Broken?
Here are some things to do if things are broken: 

## Relative links
A common error might be incorrect relative links. You can tell this happens if your image isn't showing, or you get a 404 error from Github saying that the page doesn't exist. 

#### Image isn't loading 
An image loading error probably means the image address is incorrect. Googling "relative links" or "relative URLs" can help you understand how to access an image that's been uploaded to the GitHub project. Essentially, an image with ```src="../img/name.jpg"``` is located one folder up from the file, then in the "img" folder, and is called "name.jpg".

#### JavaScript isn't working 
An error with JavaScript is probably because the "index.js" file is referenced incorrectly. Scroll down to the bottom of your page to the section that says
```html
<script src="../js/index.js" type="text/javascript"></script>
```
This is telling your webpage that it needs code from "index.js", but the ```src``` might be incorrectly addressed. Check that "../js/index.js" or whatever is in the ```src``` actually leads to "index.js".

#### Everything is ugly
The file "index.css" in the "css" folder is what keeps the website looking stylish. The code on the page that says 
```html
<link rel="stylesheet" type="text/css" href="../css/index.css">
```
tells the page that it looks at "index.css" for its style. If ```href``` doesn't actually point to "index.css", then the page won't look cute. Make sure that the relative link is correct.

#### Page isn't found 
Make sure that whatever links to the page is going to the correct address. The reason why pages are named "index.html" in a folder with the page name (for example, "medical-principles"), is so that we can have a cute URL (that doesn't end in "index.html"). For example, an address that ends in "socialstories/category-name/project-name/" goes to the "category-name" folder, then into the "project-name" folder, then looks for a file called "index.html". If the file is incorrectly named, or you give the wrong folder path, the address won't work.

## If all else fails ...
If the above instructions don't clear things up, something that can be really helpful is to look at a page that DOES work that is similar to the page that is broken. Typos can ruin everything! 
