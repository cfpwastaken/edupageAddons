window.addEventListener("keyup", (e) => {
    if(e.altKey && e.key == "t") {
        e.preventDefault();
        window.location.href = "/dashboard/eb.php?eqa=bW9kZT10aW1ldGFibGU%3D"
    } else if(e.altKey && e.key == "m" && !window.location.pathname.startsWith("/timeline")) {
        e.preventDefault();
        window.location.href = "/timeline";
    } else if(e.altKey && e.key == "h") {
        e.preventDefault();
        window.location.href = "/user"
    } else if(e.altKey && e.key == "r") {
        e.preventDefault();
        window.location.href = "/dashboard/eb.php?eqa=bW9kZT10dGRheQ%3D%3D"
    } else if(e.altKey && e.key == "g") {
        e.preventDefault();
        window.location.href = "/znamky";
    } else if(e.altKey && e.key == "#") {
        alert("Key combinations\n\n" + 
        "Alt + T: Timetable\n" +
        "Alt + M: Messages\n" +
        "Alt + H: Home\n" +
        "Alt + R: Class Register\n" +
        "Alt + G: Grades\n" +
        "Alt + #: Help");
    }

    if(pathWithQuery().startsWith("/dashboard/eb.php?eqa=bW9kZT10aW1ldGFibGU%3D")) {
        if(e.key == "ArrowRight") {
            const sel = document.querySelector("#fitheight > div:nth-child(1) > span:nth-child(8)");
            if(sel.title == ">>") sel.click();
        } else if(e.key == "ArrowLeft") {
            const sel = document.querySelector("#fitheight > div:nth-child(1) > span:nth-child(6)");
            if(sel.title == "<<") sel.click();
            else document.querySelector("#fitheight > div:nth-child(1) > span:nth-child(7)").click();
        }
    }
})

function pathWithQuery() {
    return window.location.href.substr(window.location.protocol.length + 2 + window.location.host.length, window.location.href.length)
}