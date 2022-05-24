function mdmsg() {
    const initialMsg = document.querySelector("div.messageViewer div.mvtMainScroller.replies > div.messageViewerText");
    const replies = document.querySelector("div.messageViewer > div.mvtMainScroller.replies > div.messageViewerReplies.messageViewerReplies0 > ul");

    if(initialMsg == null) {
        return;
    }

    parseMD(initialMsg);

    for (let message of replies.querySelectorAll(".messageReakcia")) {
        parseMD(message.querySelector(".messageReakciaInner span"));
    }
}

function parseMD(el) {
    var converter = new showdown.Converter({ extensions: [xssfilter()], emoji: true, ghCodeBlocks: true, simplifiedAutoLink: true, strikethrough: true, tables: true }),
    text      = el.innerText,
    html      = converter.makeHtml(text);
    el.innerHTML = html;
}

setTimeout(() => {
    document.arrive(".messageViewer .mvtMainScroller.replies > div.messageViewerText", () => {
        mdmsg();
    })
}, 500);
