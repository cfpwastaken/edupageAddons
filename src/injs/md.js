function mdmsg() {
    const initialMsg = document.querySelector("#dlg1 > div > div.mvtMainScroller.replies > div.messageViewerText");
    const replies = document.querySelector("#dlg1 > div > div.mvtMainScroller.replies > div.messageViewerReplies.messageViewerReplies0 > ul");


    parseMD(initialMsg);

    for (let message of replies.querySelectorAll(".messageReakcia")) {
        parseMD(message.querySelector(".messageReakciaInner span"));
    }
    
}

function parseMD(message) {
    const msgElem = message;
    console.log(msgElem);
    var text = msgElem.innerText;
    // for every line in the text
    let i = 0;
    for (let line of text.split("\n")) {
        var oldLine = line;
        if (line.startsWith("###### ")) {
            text = text.replace(line, "<h6>" + line + "</h6>");
            // Remove the hashes from the start
            line = line.substring(7);
        } else if (line.startsWith("##### ")) {
            text = text.replace(line, "<h5>" + line + "</h5>");
            // Remove the hashes from the start
            line = line.substring(6);
        } else if (line.startsWith("#### ")) {
            text = text.replace(line, "<h4>" + line + "</h4>");
            // Remove the hashes from the start
            line = line.substring(5);
        } else if (line.startsWith("### ")) {
            text = text.replace(line, "<h3>" + line + "</h3>");
            // Remove the hashes from the start
            line = line.substring(4);
        } else if (line.startsWith("## ")) {
            text = text.replace(line, "<h2>" + line + "</h2>");
            // Remove the hashes from the start
            line = line.substring(3);
        } else if (line.startsWith("# ")) {
            text = text.replace(line, "<h1>" + line + "</h1>");
            // Remove the hashes from the start
            line = line.substring(2);
        }

        // if the line ends and starts with ` make the font monospace
        if (line.endsWith("`") && line.startsWith("`")) {
            text = text.replace(line, "<pre>" + line + "</pre>");
            // Remove the `
            line = line.substring(1, line.length - 1);
        }

        if (line.endsWith("~") && line.startsWith("~")) {
            text = text.replace(line, "<strike>" + line + "</strike>");
            // Remove the `
            line = line.substring(1, line.length - 1);
        }

        if (line.endsWith("***") && line.startsWith("***")) {
            text = text.replace(line, "<i><b>" + line + "</b></i>");
            // Remove the `
            line = line.substring(3, line.length - 3);
        } else if (line.endsWith("**") && line.startsWith("**")) {
            text = text.replace(line, "<b>" + line + "</b>");
            // Remove the `
            line = line.substring(2, line.length - 2);
        } else if (line.endsWith("*") && line.startsWith("*")) {
            text = text.replace(line, "<i>" + line + "</i>");
            // Remove the `
            line = line.substring(1, line.length - 1);
        }

        if(line.startsWith("> ")) {
            text = text.replace(line, "<blockquote>" + line + "</blockquote>");
            // Remove the >
            line = line.substring(2);
        }

        if(line.startsWith("||") && line.endsWith("||")) {

        }

        // Make the line variable be in the text
        text = text.replace(oldLine, line);

        i++;
    }

    msgElem.innerHTML = text.replaceAll("\n", "<br>");
}

function escapeHTML(text) {
    return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}