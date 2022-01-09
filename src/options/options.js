chrome.options.opts.about = `
Yes
`;

chrome.options.addTab("General", [
    { name: "darkmode", desc: "Enable dark mode" },
    { name: "keycombo", desc: "Add key combinations" },
    { name: "markdown", desc: "Enable Markdown" }
]);

chrome.options.addTab("Remove", [
    { name: "callout", desc: "Remove Callouts" },
    { name: "startbutton", desc: "No Start Button" },
    { name: "help", desc: "No Help Button" }
]);

chrome.options.addTab("Util", [
    { name: "eqaDecode", desc: "EQA Decode" }
]);

chrome.options.addTab("Community", "Nothing here yet! Submit your own Addons by sending me a DM on Discord: cfp#7174", []);

chrome.options.addTab("Advanced", [
    { name: "debug", desc: "Enable debug mode" }
])