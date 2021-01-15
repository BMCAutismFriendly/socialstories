function aboutapp(){
    window.location.assign("https://bmcautismfriendly.github.io/socialstories/about-app/");
}

function aboutbmcautism(){
    window.location.assign("https://bmcautismfriendly.github.io/socialstories/about-bmc-autism/");
}

function exit(){
	window.location.assign("https://bmcautismfriendly.github.io/socialstories/");
}

//Jeffrey Shi language functionality
var language="english";

function changelang(x) {
    language=x;
    update(x);
}
        
function update(language) {
    for (lineID in languages[language]) {
	document.getElementById(lineID).innerHTML=languages[language][lineID];
    }
}

update()
//end language functionality

function doctorsoffice(){
    window.location.assign("https://bmcautismfriendly.github.io/socialstories/doctorsoffice/");
}

function medicalprocedures(){
    window.location.assign("https://bmcautismfriendly.github.io/socialstories/medical-procedures/");
}

function bloodpressure(){
    window.location.assign("https://bmcautismfriendly.github.io/socialstories/blood-pressure/");
}

function heightandweight(){
	window.location.assign("https://bmcautismfriendly.github.io/socialstories/height-and-weight/");
}

function dentist(){
	window.location.assign("https://bmcautismfriendly.github.io/socialstories/dentist/");
}

function shot(){
    window.location.assign("https://bmcautismfriendly.github.io/socialstories/getting-a-shot/");
}

function blooddraw(){
    window.location.assign("https://bmcautismfriendly.github.io/socialstories/blood-draw/");
}

function physicalexam(){
	window.location.assign("https://bmcautismfriendly.github.io/socialstories/physical-exam/");
}

function wearing_face_mask(){
	window.location.assign("https://bmcautismfriendly.github.io/socialstories/wearing-face-mask/");
}

function earexam(){
	window.location.assign("https://bmcautismfriendly.github.io/socialstories/ear-exam/");
}

function wearing_medical_bracelet(){
	window.location.assign("https://bmcautismfriendly.github.io/socialstories/wearing-medical-bracelet/");
}

function eyeexam(){
	window.location.assign("https://bmcautismfriendly.github.io/socialstories/eyeexam/");
}

function renal_ultrasound(){
	window.location.assign("https://bmcautismfriendly.github.io/socialstories/renal_ultrasound/");
}

function covidtest(){
	window.location.assign("https://bmcautismfriendly.github.io/socialstories/covidtest/");
}

function takingmedicine(){
	window.location.assign("https://bmcautismfriendly.github.io/socialstories/takingmedicine/");
}

function wearingglasses(){
	window.location.assign("https://htmlpreview.github.io/?https://github.com/BMCAutismFriendly/socialstories/blob/multi_lang/test/espanol_asdf.html"); //test
}

function mri(){
	window.location.assign("https://bmcautismfriendly.github.io/socialstories/mri/");
}

function period(){
	window.location.assign("https://bmcautismfriendly.github.io/socialstories/period/");
}

function inhaler(){
	window.location.assign("https://bmcautismfriendly.github.io/socialstories/inhaler/");
}
