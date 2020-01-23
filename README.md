# Adding a BMC Social Story
## Step 1: Upload images
Create a folder in the "img" file with the name of the story. Upload story images into the folder — a good rule is to name them in page order, so like "1.jpg" for the first image, "2.jpg" for the second, etc.
## Step 2: Create story page
Create a folder with the name of the story. In that folder, create a file, title it "index.html", and copy and paste the contents of "template.html" into the new file. 

The only parts that need modifying in "index.html" now are all labeled "EDIT". Here are tips on modifying those: 
* The first "EDIT" between <title> tags is the title of the page — the label you see on a browser tab.
* The second "EDIT" between <h2> tags is the title of the social story.
* There's a chunk that appears like this: 
```html
'<div class="slide">'
'<p>EDIT</p>'
'<img class="slide-img" src="../img/EDIT">'
'</div>'
```
  This represents a page of the story. Copy and paste this as many times as necessary. The "EDIT" here can be replaced with the text for that page. Replace the "EDIT" in the image src attribute to represent the file path of the image. If you followed Step 1 correctly, this should look something like src="../img/story-image-folder-name/1.jpg".
* Finally, there is an "EDIT" in a function called "restart" which tells the restart button where to return to. Replace "EDIT" with the name of the story folder — the complete URL should look like "https://bmcautismfriendly.github.io/socialstories/story-folder-name/".
  
## Updating JavaScript
If an image is not appearing, it may have an incorrect reference address. Check the "src" attribute of the image and make sure that it directs to the appropriate file. For help on how to do this, read this article on file paths: https://www.w3schools.com/html/html_filepaths.asp.

If the site does not appear formatted (no colors, no fonts, no layout, etc.), check that the CSS file is properly referenced, using the file path link above to figure out the correct file path if necessary. 

If the site buttons aren't working, check that the the index.js JavaScript file is properly referenced.
