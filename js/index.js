function redir(url){
	var newurl=language?url+"#"+language:url;
	window.location.href=newurl;
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
    redir(window.location.href.replace(location.hash,""));
	update();
}
        
function update() {
    for (lineID in languages[language?language:"english"]) {
    	document.getElementById(lineID).innerHTML=languages[language?language:"english"][lineID];
    }
}
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
    redir("https://bmcautismfriendly.github.io/socialstories/wearingglasses/"); //test; "https://htmlpreview.github.io/?https://github.com/BMCAutismFriendly/socialstories/blob/multi_lang/test/espanol_asdf.html"
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
