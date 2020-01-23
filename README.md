# Adding a BMC Social Story

## Step 1: Upload images
Create a folder in the "img" file with the name of the story. Upload story images into the folder — a good rule is to name them in page order, so like "1.jpg" for the first image, "2.jpg" for the second, etc.

## Step 2: Create story page
Create a folder with the name of the story. In that folder, create a file, title it "index.html", and copy and paste the contents of "template.html" into the new file. 

The only parts that need modifying in "index.html" now are all labeled "EDIT". Here are tips on modifying those: 
#### 1
The first "EDIT" between ```<title>``` tags is the title of the page — the label you see on a browser tab.
  
#### 2
The second "EDIT" between ```<h2>``` tags is the title of the social story.
  
#### 3
There's a chunk that appears like this: 
```html
<div class="slide">
<p>EDIT</p>
<img class="slide-img" src="../img/EDIT">
</div>
```
This represents a page of the story. Copy and paste this as many times as necessary. The "EDIT" here can be replaced with the text for that page. Replace the "EDIT" in the image src attribute to represent the file path of the image. If you followed Step 1 correctly, this should look something like ```src="../img/story-image-folder-name/1.jpg"```.

#### 4
Finally, there is an "EDIT" in a function called "restart" which tells the restart button where to return to. Replace "EDIT" with the name of the story folder — the complete code should look like ```window.location.assign("https://bmcautismfriendly.github.io/socialstories/story-folder-name/")```.
  
## Step 3: Update JavaScript
Pop into the "js" file and open the page called "index.js". Create a function that links to your story. For example, if the story was about a root canal, we might store the story in a folder called "root-canal", and name our function "rootcanal". The code would look like this:
```javascript
function rootcanal(){
  window.location.assign("https://bmcautismfriendly.github.io/socialstories/root-canal/");
}
```

## Step 4: Upload an icon for the main page
When the story appears as a button on the main page, we want it to have a cute icon! A good resource for these is https://thenounproject.com/, but there are lots of other icon-finding and icon-making resources online. Find an icon, and save it in the "img" file with a name that makes sense for the story (like "root-canal.png").

## Step 5: Update landing page
Finally, we want to update the main Social Stories page to contain our new story. Open "index.html" from the main GitHub page, and scroll down to the section with a list of items with the class "grid-item". Add another item to this list. Using our same example of a root canal above, we might add code that looks like this: 
```html
<div class="grid-item">
  <button class="main-button teal" onclick="rootcanal()"><img class="grid-img" src="img/root-canal.png"/>
    <p>Root canal</p>
  </button></div>
```
You have an option here to change the color of the tile that this story will have on the main page. There are six colors available: blue, teal, orange, red, green, and purple. Type your favorite option in place of "teal" in the section that says ```class="main-button teal"``` above.

### Step 6: Enjoy the story! 
Congrats! You've added a Social Story!
