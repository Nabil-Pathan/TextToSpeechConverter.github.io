var voiceList = document.querySelector('#voiceList');
var txtInput = document.querySelector('#txtInput');
var btnSpeak = document.querySelector('#btnSpeak');


var tts = window.speechSynthesis;
 
var voices  = [];

GetVoices();

if(speechSynthesis != undefined){
    speechSynthesis.onvoiceschanged = GetVoices ;
}



btnSpeak.addEventListener('click',()=>{
    var toSpeak = new SpeechSynthesisUtterance(txtInput.value);
    var selectedVoiceName  = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice)=>{
        if(voice.name === selectedVoiceName){
            toSpeak.voice = voice ;
        }
    });
    tts.speak(toSpeak);
});

function GetVoices() {
    voices = tts.getVoices();
    voiceList.innerHTML ='';
    voices.forEach((voice)=>{
        var listItems = document.createElement('option');
        listItems.textContent = voice.name ;
        listItems.setAttribute('data-lang', voice.lang);
        listItems.setAttribute('data-name', voice.name);
        voiceList.appendChild(listItems);
    });
    voiceList.selectedIndex = 0 ;

}