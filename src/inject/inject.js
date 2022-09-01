// const addCSS = s => document.head.appendChild(document.createElement("style")).innerHTML=s;
function addCSS(s) {
	const style = document.createElement("style");
	style.innerHTML = s;
	style.classList.add("edupage-addons");
	document.head.appendChild(style);
}

function addJS(s) {
	const script = document.createElement("script");
	script.src = chrome.runtime.getURL("src/injs/" + s);
	script.classList.add("edupage-addons");
	document.head.appendChild(script);
}

function addJSRemote(s) {
	const script = document.createElement("script");
	script.src = s;
	script.classList.add("edupage-addons");
	document.head.appendChild(script);
}

function addCSSFile(s) {
	const style = document.createElement("link");
	style.rel = "stylesheet";
	style.href = chrome.runtime.getURL("src/injs/" + s);
	style.classList.add("edupage-addons");
	document.head.appendChild(style);
}

var debug = false;
isEnabled("advanved.debug").then((v) => {
	debug = v;
});

function log(str) {
	console.log("[Edupage Addons] " + str);
}

log("Loading...");

async function getValue(k) {
  return (await browser.storage.local.get(k))[k];
}

async function isEnabled(addon) {
	return (await getValue(addon)) == true;
}

async function cssInject(addon, css, name) {
	if(await isEnabled(addon)) {
		addCSS(css);
		log("Injected " + name);
	}
}

async function cssInjectFile(addon, css, name) {
	if(await isEnabled(addon)) {
		addCSSFile(css);
		log("Injected " + name);
	}
}

async function jsInject(addon, js, name) {
	if(await isEnabled(addon)) {
		addJS(js);
		log("Injected " + name);
	}
}

window.addEventListener("message", async (e) => {
	console.log(e.data);
	if(e.data.message === "getValue") {
		e.source.postMessage({message: "getValueResponse", key: e.data.key, value: await getValue(e.data.key)}, "*");
	}
})

cssInjectFile("darkmode", "darkmode.css", "Dark mode");
cssInject("nocallout", `
.callout,
.hwMenuListItemArr {
	display: none !important;
}
`, "No callout");
cssInject("nostart", `
#edubarStartButton {
	visibility: hidden;
}
`, "No start button");
cssInject("nohelp", `
.learnMoreBtn,
#edubarHelpMenuBtn {
	display: none !important;
}
`, "No Help");
jsInject("eqadecode", "eqadecode.js", "EQA Decode");
jsInject("keycombo", "keycombo.js", "Key combo");
// jsInject("markdown", "md.js", "Markdown");
cssInjectFile("markdown", "animations.css", "Animations")
// jsInject("markdown", "showdown.js", "Markdown (Showdown lib)")
// jsInject("markdown", "arrive.min.js", "Markdown (Arrive lib)")
// jsInject("markdown", "xss.js", "Markdown (XSS)")
// setTimeout(() => {
// 	jsInject("markdown", "showdown-xss-config.js", "Markdown (Showdown XSS Config)")
// }, 500);
cssInject("markdown", `
.tt-cell {
	animation: fadein 0.5s;
}

@keyframes fadein {from {
    opacity: 0;
    -webkit-transform: translate3d(30%, 0, 0);
    transform: translate3d(30%, 0, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
`, "Animations");
jsInject("autologin", "autologin.js", "Auto login");
jsInject("modernicons", "modernicons.js", "Modern Icons");
cssInjectFile("pixelfix", "pixelfix.css", "Pixel Fix");
cssInject("modernfont", `
@font-face {
  font-family: "Roboto Round";
  src: url("${chrome.runtime.getURL("src/injs/font/Roboto-Round-Regular.eot")}");
  src: url("${chrome.runtime.getURL("src/injs/font/Roboto-Round-Regular.eot?#iefix")}") format("embedded-opentype"),
		url("${chrome.runtime.getURL("src/injs/font/Roboto-Round-Regular.woff2")}") format("woff2"),
		url("${chrome.runtime.getURL("src/injs/font/Roboto-Round-Regular.woff")}") format("woff"),
		url("${chrome.runtime.getURL("src/injs/font/Roboto-Round-Regular.ttf")}") format("truetype"),
		url("${chrome.runtime.getURL("src/injs/font/Roboto-Round-Regular.svg#Roboto-Round-Regular")}") format("svg");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

* {
	font-family: "Roboto Round" !important;
	font-weight: 900 !important;
}
`, "Modern Font");

document.addEventListener('DOMContentLoaded', () => {
	chrome.storage.local.get("update", (v) => {
		log("Updater disabled.");
	});
});
