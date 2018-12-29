
//change bgm
var rand = {};
rand.get = function(begin,end){
	return Math.floor(Math.random()*(end-begin))+begin;
}
var v = rand.get(1,bgm_ls_length)-1
var prev = v, next
bgm = document.getElementById("myAudio")
console.log(bgm)
bgm.src = bgm_pre+Object.values(bgm_dict)[v]+".mp3"
bgm.volume = 0.2
bgmtext = document.getElementById("bgmtext_txt")
bgmtext.innerHTML= Object.keys(bgm_dict)[v]
bgmtext.style.opacity="0"

function bgmplay(){

    bgm.play();
    bgmtext.style.opacity="1"
}
function bgmstop(){
    bgm.pause();
    bgmtext.style.opacity="0"
}
function bgmnext(){
	prev = rand.get(1,bgm_ls_length)-1
	bgm.src = bgm_pre+Object.values(bgm_dict)[prev]+".mp3"
    bgmtext.innerHTML= Object.keys(bgm_dict)[prev]
    bgmtext.style.opacity="1"
    bgm.play();
}
function bgmprev(){
	bgm.src = bgm_pre+Object.values(bgm_dict)[prev]+".mp3"
    bgmtext.innerHTML= Object.keys(bgm_dict)[prev]
    bgmplay()
}


//change background picture
var curIndex = 0;
var timeInterval = 10000;

setInterval(changeImg, timeInterval);
function changeImg() {
	if (curIndex == bg_pic.length - 1) {
	curIndex = 0;
	} else {
	curIndex += 1;
	}
	document.getElementById("bodydiv").style.backgroundImage = "url("+bg_pic[curIndex]+")";
}
