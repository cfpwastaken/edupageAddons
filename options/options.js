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
  const value = await getValue(v);
  if(document.querySelector("#" + v).type == "checkbox") {
    document.querySelector("#" + v).checked = value;
    document.querySelector("[addon-" + v + "]").classList.remove("addon-selected");
    if(value) {
      document.querySelector("[addon-" + v + "]").classList.add("addon-selected");
    }
  } else {
    if(value !== undefined) document.querySelector("#" + v).value = value;
    else document.querySelector("#" + v).value = "";
  }
}

function save() {
  inputSave("darkmode");
  inputSave("nocallout");
  inputSave("nostart");
  inputSave("nohelp");
  inputSave("eqadecode");
  inputSave("keycombo");
  // inputSave("markdown");
  inputSave("autologin");
  inputSave("autologin_host");
  inputSave("autologin_username");
  inputSave("autologin_password");
  inputSave("modernicons");
  inputSave("pixelfix");
  inputSave("modernfont");
}

async function load() {
  await inputLoad("darkmode");
  await inputLoad("nocallout");
  await inputLoad("nostart");
  await inputLoad("nohelp");
  await inputLoad("eqadecode");
  await inputLoad("keycombo");
  // await inputLoad("markdown");
  await inputLoad("autologin");
  await inputLoad("autologin_host");
  await inputLoad("autologin_username");
  await inputLoad("autologin_password");
  await inputLoad("modernicons");
  await inputLoad("pixelfix");
  await inputLoad("modernfont");
}

load();
for(var i = 0; i < document.querySelectorAll(".option input").length; i++) {
  document.querySelectorAll(".option input")[i].addEventListener("change", save);
}

for(var i = 0; i < document.querySelectorAll(".addon").length; i++) {
  const addon = document.querySelectorAll(".addon")[i];
  let configOpen = false;
  addon.addEventListener("click", (e) => {
    if(e.target == addon.querySelector(".open-config") || configOpen) return;
    addon.classList.toggle("addon-selected");
    addon.querySelector("input").checked = !addon.querySelector("input").checked;
    save();
  });
  if(addon.querySelector(".addon-name .open-config")) {
    addon.querySelector(".addon-name .open-config").addEventListener("click", () => {
      configOpen = true;
      addon.querySelector(".addon-config").style.display = "";
      addon.querySelector(".addon-name").style.display = "none";
      addon.querySelector(".addon-image").style.display = "none";
    });
  }
  if(addon.querySelector(".addon-config .close-config-container .close-config")) {
    addon.querySelector(".addon-config .close-config-container .close-config").addEventListener("click", () => {
      addon.querySelector(".addon-config").style.display = "none";
      addon.querySelector(".addon-name").style.display = "";
      addon.querySelector(".addon-image").style.display = "";
      setInterval(() => { configOpen = false; }, 1000);
    });
  }
}