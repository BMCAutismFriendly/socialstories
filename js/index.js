function redir(url){
	newurl=url+"#"+language;
	window.location.assign(newurl);
}

function aboutapp(){
    redir("https://bmcautismfriendly.github.io/socialstories/about-app/");
}

function aboutbmcautism(){
    redir("https://bmcautismfriendly.github.io/socialstories/about-bmc-autism/");
}

function exit(){
    redir("https://bmcautismfriendly.github.io/socialstories/");
}

//language functionality
var language=window.location.hash.substring(1);

function changelang(x) {
    language=x;
    redir(window.location.href.hostname);
}
        
function update() {
    for (lineID in languages[language?language:"english"]) {
    	document.getElementById(lineID).innerHTML=languages[language?language:"english"][lineID];
    }
}

update()
//end language functionality

function doctorsoffice(){
    redir("https://bmcautismfriendly.github.io/socialstories/doctorsoffice/");
}

function medicalprocedures(){
    redir("https://bmcautismfriendly.github.io/socialstories/medical-procedures/");
}

function bloodpressure(){
    redir("https://bmcautismfriendly.github.io/socialstories/blood-pressure/");
}

function heightandweight(){
    redir("https://bmcautismfriendly.github.io/socialstories/height-and-weight/");
}

function dentist(){
    redir("https://bmcautismfriendly.github.io/socialstories/dentist/");
}

function shot(){
    redir("https://bmcautismfriendly.github.io/socialstories/getting-a-shot/");
}

function blooddraw(){
    redir("https://bmcautismfriendly.github.io/socialstories/blood-draw/");
}

function physicalexam(){
    redir("https://bmcautismfriendly.github.io/socialstories/physical-exam/");
}

function wearing_face_mask(){
    redir("https://bmcautismfriendly.github.io/socialstories/wearing-face-mask/");
}

function earexam(){
    redir("https://bmcautismfriendly.github.io/socialstories/ear-exam/");
}

function wearing_medical_bracelet(){
    redir("https://bmcautismfriendly.github.io/socialstories/wearing-medical-bracelet/");
}

function eyeexam(){
    redir("https://bmcautismfriendly.github.io/socialstories/eyeexam/");
}

function renal_ultrasound(){
    redir("https://bmcautismfriendly.github.io/socialstories/renal_ultrasound/");
}

function covidtest(){
    redir("https://bmcautismfriendly.github.io/socialstories/covidtest/");
}

function takingmedicine(){
    redir("https://bmcautismfriendly.github.io/socialstories/takingmedicine/");
}

function wearingglasses(){
    redir("https://htmlpreview.github.io/?https://github.com/BMCAutismFriendly/socialstories/blob/multi_lang/test/espanol_asdf.html"); //test
}

function mri(){
    redir("https://bmcautismfriendly.github.io/socialstories/mri/");
}

function period(){
    redir("https://bmcautismfriendly.github.io/socialstories/period/");
}

function inhaler(){
    redir("https://bmcautismfriendly.github.io/socialstories/inhaler/");
}
