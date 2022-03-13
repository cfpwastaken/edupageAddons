// function debug(v) {
//   document.querySelector("#output").innerText += v + "\n";
// }

function setValue(k, v) {
  browser.storage.local.set({
    [k]: v
  });
}

async function getValue(k) {
  return (await browser.storage.local.get(k))[k];
}

function inputSave(v) {
  if(document.querySelector("#" + v).type == "checkbox") {
    setValue(v, document.querySelector("#" + v).checked);
  } else {
    setValue(v, document.querySelector("#" + v).value);
  }
}

async function inputLoad(v) {
  if(document.querySelector("#" + v).type == "checkbox") {
    document.querySelector("#" + v).checked = await getValue(v);
  } else {
    document.querySelector("#" + v).value = await getValue(v);
  }
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
  inputSave("autologin");
  inputSave("autologin_host");
  inputSave("autologin_username");
  inputSave("autologin_password");
}

async function load() {
  await inputLoad("darkmode");
  await inputLoad("nocallout");
  await inputLoad("nostart");
  await inputLoad("nohelp");
  await inputLoad("eqadecode");
  await inputLoad("keycombo");
  await inputLoad("markdown");
  await inputLoad("autologin");
  await inputLoad("autologin_host");
  await inputLoad("autologin_username");
  await inputLoad("autologin_password");
}

load();
for(var i = 0; i < document.querySelectorAll("input").length; i++) {
  document.querySelectorAll("input")[i].addEventListener("change", save);
}