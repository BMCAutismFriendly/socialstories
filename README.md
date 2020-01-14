# BMC Social Stories
## File storage structure 
Files should be stored in the relevant folders in the **master** branch, or within subfolders. Images related to a page should be stored in a folder called "img" within the folder of the page they're used in. (With the exception right now of images that were in the original web app, and the BMC logo image.)
## Page structure 
Pages should be referenced in hrefs by URL. To get to a page called "index.html" in a folder "myFolder", reference it by using an href equal to "https://bmcautismfriendly.github.io.socialstories/myFolder/" instead of "https://bmcautismfriendly.github.io/socialstories/myFolder/index.html". (This helps site addresses appear cleaner.) However, if a page in a folder is not named "index.html", reference it with its name. For example, to get to a page named "myPage.html" in a folder "myFolder", you would use the href equal to "https://bmcautismfriendly.github.io/socialstories/myFolder/myPage.html".

Where possible, create a folder for each new page, where the page is named "index.html" and resides in a folder with the name of that page that you'd like.
## Common errors
If an image is not appearing, it is probably not being found correctly. Check the "src" attribute of the image and make sure that it directs to the appropriate file. For help on how to do this, read this article on file paths: https://www.w3schools.com/html/html_filepaths.asp.

If the site does not appear formatted (no colors, no fonts, no layout, etc.), check that the CSS file is properly referenced, using the file path link above to figure out the correct file path if necessary. 

If the site buttons aren't working, check that the the index.js JavaScript file is properly referenced.
