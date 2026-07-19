let b4 = document.getElementById("before");
const cmd = document.getElementById("typer");
const ta = document.getElementById("texter");
const tm = document.getElementById("terminal");
const cs = document.getElementById("contentscroll");

let idx = 0;
const cmds = [];

const cmdMap = {
  help: "help",
  aboutme: "aboutme",
  email: "email",
  "capitalist-snake": "capitalist-snake",
  clear: "clear",
  exit: "exit",
};

const scroll = () => {
  if (cs) cs.scrollTop = cs.scrollHeight;
};

setTimeout(() => {
  loopLines(banner, "", 80);
  ta.focus();
  scroll();
}, 100);

const focus = () => {
  ta.focus();
  scroll();
};

window.addEventListener("keyup", (e) => {
  enterKey(e);
  scroll();
});

window.addEventListener("keydown", focus);
document.addEventListener("click", focus);
tm.addEventListener("click", focus);
ta.addEventListener("input", scroll);

ta.value = "";
cmd.innerHTML = ta.value;

ta.addEventListener("input", () => {
  cmd.innerHTML = ta.value;
});

function enterKey(e) {
  if (e.keyCode === 13) {
    const inp = cmd.innerHTML.trim().toLowerCase();
    addLine("[subh@terminal]~$" + cmd.innerHTML, "no-animation", 0);
    cmds.push(cmd.innerHTML);
    idx = cmds.length;
    commander(inp);
    cmd.innerHTML = "";
    ta.value = "";
    scroll();
  }

  if (e.keyCode === 38 && idx !== 0) {
    idx -= 1;
    ta.value = cmds[idx];
    cmd.innerHTML = ta.value;
    scroll();
  }

  if (e.keyCode === 40 && idx !== cmds.length) {
    idx += 1;
    ta.value = cmds[idx] || "";
    cmd.innerHTML = ta.value;
    scroll();
  }
}

function commander(c) {
  switch (c) {
    case "help":
      loopLines(help, "color2 margin", 80);
      break;
    case "aboutme":
      loopLines(aboutme, "color2 margin", 80);
      break;
    
      newTab(email);
      break;
    case "clear":
      setTimeout(() => {
        tm.querySelectorAll("p").forEach((p) => p.remove());
        if (!document.getElementById("before")) {
          const el = document.createElement("a");
          el.id = "before";
          tm.insertBefore(el, tm.firstChild);
          b4 = el;
        }
        if (banner) loopLines(banner, "", 80);
        ta.focus();
        scroll();
      }, 1);
      break;
   
    case "capitalist-snake":
      runSnakeGame();
      break;
    case "quit":
    case "logout":
    case "exit":
      addLine("Session terminated.", "color2", 0);
      setTimeout(() => {
        window.open("", "_self");
        window.close();
      }, 500);
      break;
    default:
      addLine(
        `<span class="inherit">Command not found. Type <span class="command">'help'</span> for available commands.</span>`,
        "error",
        100,
      );
  }
  scroll();
}

const newTab = (link) => {
  setTimeout(() => window.open(link, "_blank"), 500);
};

const addLine = (txt, s, t) => {
  let out = txt.replace(/ {2}/g, "&nbsp;&nbsp;");
  setTimeout(() => {
    const p = document.createElement("p");
    p.innerHTML = out;
    p.className = s;
    b4.parentNode.insertBefore(p, b4);
    cs.scrollTop = cs.scrollHeight;
  }, t);
};

const loopLines = (ln, s, t) => {
  ln.forEach((item, i) => addLine(item, s, i * t));
  setTimeout(() => scroll(), ln.length * t + 50);
};

const runSnakeGame = () => {
  const w = 20, h = 10;
  let s = [{ x: 5, y: 5 }], f = { x: 10, y: 5 }, d = "right", sc = 0, iv, ge;

  const draw = () => {
    let scrn = `Score: ${sc}\n`;
    for (let y = 0; y < h; y++) {
      let r = "";
      for (let x = 0; x < w; x++) {
        if (x === f.x && y === f.y) r += "$";
        else if (s.some((p) => p.x === x && p.y === y)) r += "O";
        else r += ".";
      }
      scrn += r + "\n";
    }
    if (!ge) {
      ge = document.createElement("p");
      ge.className = "color2";
      b4.parentNode.insertBefore(ge, b4);
    }
    ge.innerHTML = `<pre>${scrn}</pre>`;
    cs.scrollTop = cs.scrollHeight;
  };

  const move = () => {
    const h = { ...s[0] };
    if (d === "up") h.y--;
    else if (d === "down") h.y++;
    else if (d === "left") h.x--;
    else if (d === "right") h.x++;

    if (h.x < 0 || h.x >= w || h.y < 0 || h.y >= h || s.some((p) => p.x === h.x && p.y === h.y)) {
      clearInterval(iv);
      ge.innerHTML += `<br><span class="error">Game Over! Final Score: ${sc}</span>`;
      window.removeEventListener("keydown", kh);
      return;
    }

    s.unshift(h);
    if (h.x === f.x && h.y === f.y) {
      sc++;
      f = { x: Math.floor(Math.random() * w), y: Math.floor(Math.random() * h) };
    } else {
      s.pop();
    }
    draw();
  };

  const kh = (e) => {
    if (e.key === "ArrowUp" && d !== "down") d = "up";
    else if (e.key === "ArrowDown" && d !== "up") d = "down";
    else if (e.key === "ArrowLeft" && d !== "right") d = "left";
    else if (e.key === "ArrowRight" && d !== "left") d = "right";
    else if (e.key === "Escape" || e.key === "q") {
      clearInterval(iv);
      window.removeEventListener("keydown", kh);
      ge.innerHTML += `<br><span class="color2">Game exited.</span>`;
    }
  };

  window.addEventListener("keydown", kh);
  addLine("Starting Capitalist Snake. Use arrow keys to move. 'q' or Esc to quit.", "color2", 0);
  draw();
  iv = setInterval(move, 250);
};
