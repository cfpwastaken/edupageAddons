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

function isEnabled(addon) {
	var promise = new Promise(function(resolve, reject) {
		// chrome.storage.sync.get(addon, (v) => {
		// 	if(debug) log(v);
		// 	if(debug) log(v[addon]);
		// 	if(v[addon] == true) {
		// 		resolve(true);
		// 	} else {
		// 		resolve(false);
		// 	}
		// });
		resolve(true);
	});
	return promise;
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

cssInjectFile("general.darkmode", "darkmode.css", "Dark mode");
cssInject("remove.callout", `
.callout,
.hwMenuListItemArr {
	display: none !important;
}
`, "No callout");
cssInject("remove.startbutton", `
#edubarStartButton {
	visibility: hidden;
}
`, "No start button");
cssInject("remove.help", `
.learnMoreBtn,
#edubarHelpMenuBtn {
	display: none !important;
}
`, "No Help");
jsInject("util.eqaDecode", "eqadecode.js", "EQA Decode");
jsInject("general.keycombo", "keycombo.js", "Key combo");
jsInject("general.markdown", "md.js", "Markdown");
cssInject("general.markdown", `
blockquote, blockquote > *:not(a) { color: black }

blockquote { background: #fed; margin: 1em 0; padding: 8px; border-left: 2px solid #cba }

pre {
	background: #ccc;
}
`, "Markdown CSS");

cssInject("general.markdown", `
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

document.addEventListener('DOMContentLoaded', () => {
	chrome.storage.local.get("update", (v) => {
		log("Updater disabled.");
	});
});
