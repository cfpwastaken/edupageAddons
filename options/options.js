// function debug(v) {
//   document.querySelector("#output").innerText += v + "\n";
// }

function setValue(k, v) {
  browser.storage.sync.set({
    [k]: v
  });
}

async function getValue(k) {
  return (await browser.storage.sync.get(k))[k];
}

function inputSave(v) {
  setValue(v, document.querySelector("#" + v).checked);
}

async function inputLoad(v) {
  document.querySelector("#" + v).checked = await getValue(v);
}

function save(e) {
  e.preventDefault();
  inputSave("darkmode");
  inputSave("nocallout");
  inputSave("nostart");
  inputSave("nohelp");
  inputSave("eqadecode");
  inputSave("keycombo");
  inputSave("markdown");
}

async function load() {
  await inputLoad("darkmode");
  await inputLoad("nocallout");
  await inputLoad("nostart");
  await inputLoad("nohelp");
  await inputLoad("eqadecode");
  await inputLoad("keycombo");
  await inputLoad("markdown");
}

load();
for(var i = 0; i < document.querySelectorAll("input[type=checkbox]").length; i++) {
  document.querySelectorAll("input[type=checkbox]")[i].addEventListener("change", save);
}