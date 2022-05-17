setInterval(() => {
  rerender();
}, 100);

function rerender() {
  svg("user", "user", `<svg width="18" height="18" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M10.55 2.533a2.25 2.25 0 0 1 2.9 0l6.75 5.695c.508.427.8 1.056.8 1.72v9.802a1.75 1.75 0 0 1-1.75 1.75h-3a1.75 1.75 0 0 1-1.75-1.75v-5a.75.75 0 0 0-.75-.75h-3.5a.75.75 0 0 0-.75.75v5a1.75 1.75 0 0 1-1.75 1.75h-3A1.75 1.75 0 0 1 3 19.75V9.947c0-.663.292-1.292.8-1.72l6.75-5.694Z" fill="#f1c40f"/></svg>`)
  const MESSAGES_ICON = `<svg width="24" height="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22 8.608v8.142a3.25 3.25 0 0 1-3.066 3.245L18.75 20H5.25a3.25 3.25 0 0 1-3.245-3.066L2 16.75V8.608l9.652 5.056a.75.75 0 0 0 .696 0L22 8.608ZM5.25 4h13.5a3.25 3.25 0 0 1 3.234 2.924L12 12.154l-9.984-5.23a3.25 3.25 0 0 1 3.048-2.919L5.25 4h13.5-13.5Z" fill="#f39c12"/></svg>`;
  svg("timeline", "timeline", MESSAGES_ICON)
  svg("news", "news", MESSAGES_ICON)
  svg("home", "home", `<svg width="24" height="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.75 2.007a2.25 2.25 0 0 1 2.245 2.096l.005.154v15.498A2.25 2.25 0 0 1 17.904 22l-.154.005H6.25a2.25 2.25 0 0 1-2.245-2.096L4 19.755V4.257a2.25 2.25 0 0 1 2.096-2.245l.154-.005h11.5ZM7.75 7a.75.75 0 1 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5ZM7 11.75c0 .414.336.75.75.75h8.5a.75.75 0 0 0 0-1.5h-8.5a.75.75 0 0 0-.75.75ZM7.75 15a.75.75 0 1 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z" fill="#16a085"/></svg>`);
  const CLASSREGISTER_ICON = `<svg width="24" height="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M6.5 2A2.5 2.5 0 0 0 4 4.5v15A2.5 2.5 0 0 0 6.5 22h13.25a.75.75 0 0 0 0-1.5H6.5a1 1 0 0 1-1-1h14.25a.75.75 0 0 0 .75-.75V4.5A2.5 2.5 0 0 0 18 2H6.5ZM8 5h8a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z" fill="#3498db"/></svg>`;
  svg("ttday", "ttday", CLASSREGISTER_ICON);
  svg("dailyplan", "dailyplan", CLASSREGISTER_ICON);
  const RESULTS_ICON = `<svg width="24" height="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5.75 3a2.25 2.25 0 0 1 2.248 2.25v13.5a2.25 2.25 0 1 1-4.498 0V5.25A2.25 2.25 0 0 1 5.75 3Zm6.5 4a2.25 2.25 0 0 1 2.248 2.25v9.5a2.25 2.25 0 1 1-4.498 0v-9.5A2.25 2.25 0 0 1 12.25 7Zm6.5 4a2.25 2.25 0 0 1 2.248 2.25v5.5a2.25 2.25 0 1 1-4.498 0v-5.5A2.249 2.249 0 0 1 18.75 11Z" fill="#00bcd4"/></svg>`;
  svg("results", "results", RESULTS_ICON)
  svg("elearning", "elearning", RESULTS_ICON)
  svg("vyucovanie", "vyucovanie", `<svg width="24" height="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6c.768 0 1.47-.289 2-.764.53.475 1.232.764 2 .764h6a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-6c-.768 0-1.47.289-2 .764A2.989 2.989 0 0 0 10 4H4Zm7 3v10a1 1 0 0 1-1 1H4V6h6a1 1 0 0 1 1 1Zm2 10V7a1 1 0 0 1 1-1h6v12h-6a1 1 0 0 1-1-1Z" fill="#2980b9"/></svg>`);
  svg("komunikacia", "komunikacia", `<svg width="24" height="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9.5 3a7.5 7.5 0 0 0-6.797 10.675 68.094 68.094 0 0 0-.681 3.142.996.996 0 0 0 1.153 1.17c.623-.11 1.978-.36 3.236-.65A7.5 7.5 0 1 0 9.5 3Zm-.038 16a7.473 7.473 0 0 0 5.1 2c1.1 0 2.145-.237 3.088-.663 1.043.244 2.186.488 2.913.64a1.244 1.244 0 0 0 1.467-1.5c-.162-.703-.418-1.795-.671-2.803A7.503 7.503 0 0 0 17.015 6.41a8.44 8.44 0 0 1 .8 2.048 5.995 5.995 0 0 1 2.747 5.042c0 .992-.24 1.925-.665 2.747l-.13.253.07.276c.228.895.467 1.9.642 2.65-.774-.163-1.818-.39-2.74-.61l-.264-.062-.243.121c-.804.4-1.71.625-2.67.625a5.974 5.974 0 0 1-2.92-.756 8.517 8.517 0 0 1-2.18.256Z" fill="#c0392b"/></svg>`)
  svg("timetable", "timetable", `<svg width="32" height="32" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9.5 21h5v-5h-5v5ZM16 21h1.75A3.25 3.25 0 0 0 21 17.75V16h-5v5ZM21 14.5v-5h-5v5h5ZM21 8V6.25A3.25 3.25 0 0 0 17.75 3H16v5h5ZM14.5 3h-5v5h5V3ZM8 3H6.25A3.25 3.25 0 0 0 3 6.25V8h5V3ZM3 9.5v5h5v-5H3ZM3 16v1.75A3.25 3.25 0 0 0 6.25 21H8v-5H3ZM14.5 9.5v5h-5v-5h5Z" fill="#c0392b"/></svg>`)
  svg("substitution", "substitution", `<svg width="32" height="32" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M15.75 13.997a2.249 2.249 0 0 1 2.25 2.25v.918c0 .285-.045.567-.13.836h-2.035a1.75 1.75 0 0 0-2.822-1.98l-2.5 2.498a1.75 1.75 0 0 0 0 2.477l.935.933c-.465.046-.948.07-1.452.07-3.42 0-5.943-1.073-7.486-3.237A2.75 2.75 0 0 1 2 17.166v-.92a2.249 2.249 0 0 1 2.249-2.249H15.75ZM9.996 2.002a5 5 0 1 1 0 10 5 5 0 0 1 0-10Z" fill="#e85748"/><path d="M14.78 17.784a.75.75 0 0 0-1.06-1.06l-2.5 2.5a.75.75 0 0 0 0 1.06l2.5 2.5a.75.75 0 0 0 1.06-1.061l-1.22-1.22h6.88l-1.22 1.22a.75.75 0 0 0 1.06 1.06l2.5-2.498a.75.75 0 0 0 0-1.06l-2.5-2.502a.75.75 0 1 0-1.06 1.06l1.218 1.22h-6.877l1.22-1.22Z" fill="#fff"/></svg>`)
  svg("attendance", "attendance", `<svg width="32" height="32" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12.022 14A6.47 6.47 0 0 0 11 17.5c0 1.63.6 3.12 1.592 4.261-.796.16-1.66.24-2.592.24-3.42 0-5.944-1.072-7.486-3.237a2.75 2.75 0 0 1-.51-1.595v-.92a2.249 2.249 0 0 1 2.249-2.25h7.77Zm5.478-2a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11Zm0 7.75a.625.625 0 1 0 0 1.25.625.625 0 0 0 0-1.25Zm0-5.876c-1.048 0-1.864.817-1.853 1.954a.5.5 0 1 0 1-.01c-.006-.579.36-.944.853-.944.473 0 .854.392.854.95 0 .192-.056.342-.224.56l-.094.117-.1.113-.265.29-.136.157c-.384.457-.535.793-.535 1.31a.5.5 0 1 0 1 0c0-.203.059-.359.239-.59l.085-.104.1-.116.267-.29.134-.155c.378-.45.529-.783.529-1.293 0-1.103-.823-1.95-1.854-1.95ZM10 2.004a5 5 0 1 1 0 10 5 5 0 0 1 0-10Z" fill="#16a085"/></svg>`)
  svg("platby", "platby", `<svg width="32" height="32" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.755 14c.78 0 1.466.397 1.87 1H13.5a2.5 2.5 0 0 0-2.5 2.5v4c0 .161.015.32.045.472-2.939-.186-5.136-1.25-6.53-3.207a2.75 2.75 0 0 1-.511-1.596v-.92A2.249 2.249 0 0 1 6.253 14h11.502ZM12 2.005a5 5 0 1 1 0 10 5 5 0 0 1 0-10ZM12 17.5a1.5 1.5 0 0 1 1.5-1.5h8a1.5 1.5 0 0 1 1.5 1.5v4a1.5 1.5 0 0 1-1.5 1.5h-8a1.5 1.5 0 0 1-1.5-1.5v-4Zm10 .5a1 1 0 0 1-1-1h-1a2 2 0 0 0 2 2v-1Zm0 2a2 2 0 0 0-2 2h1a1 1 0 0 1 1-1v-1Zm-8-3a1 1 0 0 1-1 1v1a2 2 0 0 0 2-2h-1Zm1 5a2 2 0 0 0-2-2v1a1 1 0 0 1 1 1h1Zm4.25-2.5a1.75 1.75 0 1 0-3.5 0 1.75 1.75 0 0 0 3.5 0Z" fill="#27ae60"/></svg>`);
  svg("konzultacie", "konzultacie", `<svg width="32" height="32" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5.254 14h10.988c.104.172.231.332.38.474l.72.682a3.96 3.96 0 0 1-.421 1.002 4.23 4.23 0 0 1-.687.894l-.794-.265a2.19 2.19 0 0 0-2.507.866l-.722 1.06a2.36 2.36 0 0 0 .27 2.975l.227.228c-.541.057-1.11.085-1.708.085-2.89 0-5.128-.657-6.691-2a3.75 3.75 0 0 1-1.305-2.844v-.907A2.25 2.25 0 0 1 5.254 14Zm11.757-1.755.503-1.187c.236-.557.801-.86 1.356-.744l.118.031.63.202c.626.2 1.104.735 1.259 1.407.367 1.598-.074 3.543-1.322 5.835-1.247 2.29-2.614 3.666-4.1 4.13a1.76 1.76 0 0 1-1.663-.343l-.124-.113-.478-.48a1.36 1.36 0 0 1-.222-1.591l.07-.116.722-1.06c.284-.417.77-.615 1.237-.515l.127.035 1.332.444a5.081 5.081 0 0 0 1.33-1.52 4.798 4.798 0 0 0 .596-1.59l.038-.269-1.109-1.053a1.354 1.354 0 0 1-.348-1.372l.048-.131.503-1.187-.503 1.187ZM11 2.005a5 5 0 1 1 0 10 5 5 0 0 1 0-10Z" fill="#7cb342"/></svg>`);

  sizeCheck("user")
  sizeCheck("timeline");
  sizeCheck("home");
  sizeCheck("ttday")
  sizeCheck("results")
  sizeCheck("vyucovanie");
  sizeCheck("komunikacia");
  sizeCheckm("timetable");
  sizeCheckm("substitution");
  sizeCheckm("attendance");
  sizeCheckm("platby");
  sizeCheckm("konzultacie");

  fixUserButtonSize();
}

function fixUserButtonSize() {
  for(let i = 0; i < document.querySelectorAll(".user-button-icon").length; i++) {
    if(document.querySelectorAll(".user-button-icon")[i].hasChildNodes()) {
      document.querySelectorAll(".user-button-icon")[i].firstElementChild.setAttribute("width", "56");
      document.querySelectorAll(".user-button-icon")[i].firstElementChild.setAttribute("height", "56");
    }
  }
}

function sizeCheck(el) {
  if(document.querySelector(".eduicon-module-" + el).parentElement.parentElement.classList.contains("active")) {
    document.querySelector(".eduicon-module-" + el).firstElementChild.setAttribute("width", "27");
    document.querySelector(".eduicon-module-" + el).firstElementChild.setAttribute("height", "27");
  } else {
    document.querySelector(".eduicon-module-" + el).firstElementChild.setAttribute("width", "18");
    document.querySelector(".eduicon-module-" + el).firstElementChild.setAttribute("height", "18");
  }
}

function sizeCheckm(el) {
  if(document.querySelector(".eduicon-module-" + el).parentElement.parentElement.classList.contains("active")) {
    document.querySelector(".eduicon-module-" + el).firstElementChild.setAttribute("width", "32");
    document.querySelector(".eduicon-module-" + el).firstElementChild.setAttribute("height", "32");
  } else {
    // document.querySelector(".eduicon-module-" + el).firstElementChild.setAttribute("width", "18");
    // document.querySelector(".eduicon-module-" + el).firstElementChild.setAttribute("height", "18");
  }
}

function svgSingle(el, name, svg, newClass) {
  if(!document.querySelector("." + el)) return;
  document.querySelector("." + el).classList.add(newClass + name);
  document.querySelector("." + el).classList.remove(el);
  document.querySelector("." + newClass + name).classList.remove(el);
  document.querySelector("." + newClass + name).innerHTML = svg;
}

function svg(el, name, svg) {
  svgSingle("ebicon-module-" + el, name, svg, "eduicon-module-");
  svgSingle("usericon-" + el, name, svg, "eduicon-user-");
}

rerender();
setTimeout(() => {
  rerender();
}, 1000)