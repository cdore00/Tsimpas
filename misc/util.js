<!--

var rightnav, divmenu, menuCart;
var transitionsSupported = ('transition' in document.documentElement.style) || ('WebkitTransition' in document.documentElement.style);

window.addEventListener('resize', function () { 

	document.getElementById('pagestyle').setAttribute('href', 'misc/photo.css');

});

function getCode(){
//
windowOref = window.open("https://accounts.google.com/o/oauth2/auth?access_type=offline&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fspreadsheets%20https%3A%2F%2Fmail.google.com%2F%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fgmail.send&response_type=code&client_id=425059252383-7ir1gosfrn60o59b3uvp8du7ehctlmdn.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fservg4-cd-serv.1d35.starter-us-east-1.openshiftapps.com%2F",
  "_blank","width=100,height=100,menubar=no,location=no,resizable=no,scrollbars=no,status=no,alwaysLowered=yes,z-lock=yes");
	
	setTimeout(function() {
	sendComm();
	}, 2000);
}


function scrollRightNav(){
var topValue;
if (document.documentElement.scrollTop)
	topValue = document.documentElement.scrollTop;
else
	topValue = document.body.scrollTop;

	//rightnav.style.top = topValue + 7 + 'px';
if (!isMobile)
	divmenu.style.top = topValue + 'px';

if (menuCart)
	menuCart.style.top = topValue + 'px';
}

var isMobile = false;
 if("matchMedia" in window) // Détection
   if(window.matchMedia("(max-width: 540px)").matches) 
		isMobile = true;

/*var isMobile = { 
Android: function() { return navigator.userAgent.match(/Android/i); }, 
BlackBerry: function() { return navigator.userAgent.match(/BlackBerry/i); }, 
iOS: function() { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, 
Opera: function() { return navigator.userAgent.match(/Opera Mini/i); }, 
Windows: function() { return navigator.userAgent.match(/IEMobile/i); }, 
any: function() { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };
*/
	
var sreenOrientation = -1;
window.onorientationchange = function(){
	//alert(window.orientation);
	//setFontSize();
    validOrientation();
}

function validOrientation(){
var showPhoto = document.getElementById('showPhoto');
var objImg = document.getElementById('objImg');

if (showPhoto.style.visibility == "visible"){
	objImg.style.maxWidth  = (getWindowWidth() - 30) + 'px';
	objImg.scrollIntoView (true);
	}
//alert(window.orientation);
}

function setFontS(sizeAD, oIncDec){
var fs = document.body.style.fontSize;
var oCtls = document.getElementsByClassName('divFont');

for (i = 0; i < oCtls.length; i++) {
	oCtls[i].style.color = "#efe";
}
if (sizeAD && typeof sizeAD == "number"){
	fs = eval(fs.replace("em", "")) + sizeAD; 
	if (sizeAD > 0){
		if (fs >= 2){
			fs = 2;
			if (oIncDec)
				oIncDec.style.color = "#555";
		}
	}
	if (sizeAD < 0){
		if (fs <= 0.8){
			fs = 0.8;
			if (oIncDec)
				oIncDec.style.color = "#555";
		}
	}
	document.body.style.fontSize = fs + "em";
	SetCook( "_fontSize", fs + "em");
}else{
	if (!sizeAD){
		//setLanguage();
		fs = GetCookie( "_fontSize");
		if (!fs || fs == "" || fs == "NaNem"){
			fs = document.body.style.fontSize;
			if (fs == "")
				fs = "1em";
		}
	}else{
		fs = sizeAD;
	}
	document.body.style.fontSize = fs;
	var pageZone = document.getElementById('pageZone');
	if (pageZone)
		pageZone.style.visibility = "visible";
}
}

function initPage(callBackFunct){
divmenu = document.getElementById('divmenu');
rightnav = document.getElementById('fontAdjust');
//menuCart = document.getElementById('menu-cart');
//var x = callBackFunct;
setFontS();
//if (s_nav)
	if("matchMedia" in window) { // Détection
		if(!window.matchMedia("(max-width: 540px)").matches)
			window.onscroll = scrollRightNav;}
	else	
	window.onscroll = scrollRightNav;
if (callBackFunct)
	callBackFunct();

}

function getCookieVal(offset){
var endstr = document.cookie.indexOf(";", offset)
var tostr = ""+document.cookie.indexOf(";", offset)
if (tostr != ""){
if (endstr == -1)
	endstr = document.cookie.length;
return unescape(document.cookie.substring(offset, endstr))
}
}

function GetCookie(name){
var arg = name + "=";
var alen = arg.length;
var clen = document.cookie.length;
var i = 0;
while (i < clen){
	var j = i + alen;
	if (document.cookie.substring(i, j) == arg){
		return getCookieVal (j);
		}
	i = document.cookie.indexOf(" ", i) + 1;
	if (i == 0) break;
	}
	return null;
}

function SetCook(cname, cvalue){
    var d = new Date();
    d.setTime(d.getTime() + (720*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
	var newcookie = cname + "=" + cvalue + ";" + expires ;
    document.cookie = newcookie;
	//alert(document.cookie);
}


function adjustScreen(hauteurUtil){
	var divMap, dispH, pxRatio
	
	pxRatio = 1;
	if( window.devicePixelRatio )
		pxRatio = window.devicePixelRatio;
		
	dispH = document.getElementsByTagName('body')[0].clientHeight - (hauteurUtil * pxRatio);
	divMap = document.getElementById("map_canvas");
	divMap.style.height = dispH + "px";
	//alert(pxRatio);

}

function getWindowWidth() {
	var windowWidth = 0;
	if (typeof(window.innerWidth) == 'number') {
		windowWidth = window.innerWidth;
	}
	else {
		if (document.documentElement && document.documentElement.clientWidth) {
			windowWidth = document.documentElement.clientWidth;
		}
		else {
			if (document.body && document.body.clientWidth) {
				windowWidth = document.body.clientWidth;
			}
		}
	}
	return windowWidth;
}

function getWindowHeight() {
	var windowHeight = 0;
	if (typeof(window.innerHeight) == 'number') {
		windowHeight = window.innerHeight;
	}
	else {
		if (document.documentElement && document.documentElement.clientHeight) {
			windowHeight = document.documentElement.clientHeight;
		}
		else {
			if (document.body && document.body.clientHeight) {
				windowHeight = document.body.clientHeight;
			}
		}
	}
	return windowHeight;
}

function GetCoordY(obj) {                       
var p = posObj(obj);             
//alert("X:" + p.x + " Y:" + p.y); 
return p.y;
}

function GetCoordX(obj) {                       
var p = posObj(obj);             
//alert("X:" + p.x + " Y:" + p.y); 
return p.x;
}

function posObj(htmlelement){

var e = htmlelement; 
var offset = {x:0,y:0}; 
while (e) 
{ 
    offset.x += e.offsetLeft; 
    offset.y += e.offsetTop; 
    e = e.offsetParent; 
} 
return (offset);
}

function getOffset(el) {
    var _x = 0;
    var _y = 0;
    while( el && !isNaN( el.offsetLeft ) && !isNaN( el.offsetTop ) )
    {
        _x += el.offsetLeft - el.scrollLeft + el.clientLeft;
        _y += el.offsetTop - el.scrollTop + el.clientTop;
        el = el.offsetParent;
    }
    return { top: _y, left: _x };
}


function findIndex(el){
for ( var index = 0; index < el.parentNode.childNodes.length; index++ ) { 
if ( el == el.parentNode.childNodes[ index ] ) { 
	return index; } } 
return -1;
}

function getXMLHttpRequest() {
    var xhr = null;
    if (window.XMLHttpRequest || window.ActiveXObject) {
        if (window.ActiveXObject) {
            try {
                xhr = new ActiveXObject("Msxml2.XMLHTTP");
            } catch(e) {
                xhr = new ActiveXObject("Microsoft.XMLHTTP");
            }
        } else {
            xhr = new XMLHttpRequest(); 
        }
    } else {
        alert("Votre navigateur ne supporte pas l'objet XMLHTTPRequest...");
        return null;
    }
    return xhr;
}


// -->
