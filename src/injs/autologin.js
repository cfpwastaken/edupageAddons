async function getValue(k) {
  return new Promise((resolve, reject) => {
    window.addEventListener("message", (e) => {
      console.log(e);
      if (e.data.message === "getValueResponse") {
        resolve(e.data.value);
      }
    });
    window.postMessage({message: "getValue", key: k}, "*");
  });
}

(async () => {
  const userField = document.querySelector("#home_Login_1e1");
  const passField = document.querySelector("#home_Login_1e2");
  const submitField = document.querySelector(".skgdFormSubmit");
  console.log("A");
  if(userField) {
    if(location.host == await getValue("autologin_host") + ".edupage.org") {
      console.log("B");
      userField.value = await getValue("autologin_username");
      passField.value = await getValue("autologin_password");
      submitField.click();
      console.log("B");
    }
  }
})();