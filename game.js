// alert("cc");
var context = document.getElementById("snake").getContext("2d");
var guide = 0, length = 1, isPause = 0, nbait = 0, timeC = 60 * 10 - 3, nbaita = 0, score = 0, max_score = 0;
var isEnd = 0, isRestart = 0, isStart = 0;
var check = [];
for (var i = 1; i <= 10000; ++ i) {
    check[i] = 0;
}
check[score] = 1;
var tx = [1, 0, -1, 0];
var ty = [0, 1, 0, -1];
var snakes = [new Snake(300, 30, 10, 0, 15)];
var baits = [];
snakes[0].isHead = 1;
function collision (x, y, r, xa, ya, ra) {
    var dis = Math.sqrt ((x - xa) * (x - xa) + (y - ya) * (y - ya));
    if (dis < r + ra) return true;
    return false;
}
function checkBait (x, y) {
    for (var i = 0; i < length; ++ i) {
        if (collision (x, y, 10, snakes[i].x, snakes[i].y, snakes[i].radius)) return true;
    }
    return false;
}
function addBait (t) {
    var x, y;
    do {
        x = Math.random() * context.canvas.width;
        y = Math.random() * context.canvas.height;
    }
    while (checkBait (x, y));
    baits.push (new Bait (x, y, 10, t));
    ++ nbait;
    ++ nbaita;
}
function addLength () {
    snakes.push (new Snake (snakes[length - 1].x - tx[snakes[length - 1].angle] * 2 * snakes[length - 1].radius, snakes[length - 1].y - ty[snakes[length - 1].angle] * 2 * snakes[length - 1].radius,
        snakes[length - 1].radius, snakes[length - 1].angle, snakes[length - 1].speed));
    ++ length;
}
// for (var i = 1; i <= 11; ++ i) addLength();
var previous;
function update() {
    if (isStart == 0) return;
    else {
        document.getElementById("start").style.display = "none";
    }
    max_score = Math.max (max_score, score);
    document.getElementById("score").innerHTML = score;
    document.getElementById("max_score").innerHTML = max_score;
    if (isEnd) {
        if (isRestart) {
            document.getElementById("end").style.display = "none";
            isRestart = 0;
            isEnd = 0;
        }
        else return;
    }
    for (var i = 0; i < nbait; ++ i) {
        baits[i].update(context);
    }
    if (isPause && isEnd == 0) return;
    for (var i = 1; i < length; ++ i) {
        if (collision (snakes[0].x, snakes[0].y, snakes[0].radius, snakes[i].x, snakes[i].y, snakes[i].radius)) {
            isEnd = 1;
            score = 0;
            snakes[0].x = 10;
            snakes[0].y = 10;
            snakes[0].angle = 0;
            for (var i = 1; i < length; ++ i) {
                snakes.pop();
            }
            for (var i = 0; i < nbait; ++ i) {
                baits.pop();
            }
            length = 1;
            nbait = 0;
            nbaita = 0;
            timeC = 60 * 10 - 3;
            document.getElementById("end").style.display = "inline-block";
            return;
        } 
    }
    ++ timeC;
    if (timeC / 60 == 10) {
        if (check[score] == 0 && score % 5 == 0) {
            addBait (1);
            check[score] = 1;
        }
        else {
            addBait (0);
        } 
        timeC = 0;
    }
    for (var i = 0; i < nbait; ++ i) {
        if (baits[i].active && collision (baits[i].x, baits[i].y, baits[i].radius, snakes[0].x, snakes[0].y, snakes[0].radius)) {
            addLength();
            baits[i].active = 0;
            -- nbaita;
            if (baits[i].type) {
                score += 6;
            }
            else {
                ++ score;
            }
            if (nbaita == 0) {
                if (check[score] == 0 && score % 5 == 0) {
                    addBait (1);
                    check[score] = 1;
                }
                else {
                    addBait (0);
                } 
                timeC = 0;
            }
        }
    }
    for (var i = 0; i < length; ++ i) {
        snakes[i].update(context);
    }
    for (var i = length - 1; i >= 1; -- i) {
        if (snakes[i - 1].flagSpeed == snakes[i - 1].speed) {
            snakes[i].angle = snakes[i - 1].angle;
        }
    }
}
function draw(context) {
    if (guide) {
        draw_grid(context);
    }
    for (var i = 0; i < length; ++ i) {
        snakes[i].draw(context);
    }
    for (var i = 0; i < nbait; ++ i) {
        baits[i].draw (context);
    }
}
function frame() {
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    draw(context);
    update();
    window.requestAnimationFrame(frame);
}
function pause (t) {
    if (!t) {
        document.getElementById("resume").style.display = "none";
    }
    else {
        document.getElementById("resume").style.display = "inline-block";
    }
}
window.requestAnimationFrame(frame);
window.onkeydown = function (e) {
    let key = e.key || e.keyCode;
    switch (key) {
        case "ArrowDown":
        case 40:
            snakes[0].angle = 1;
            break;
        case "ArrowLeft":
        case 37: // left arrow keyCode
            snakes[0].angle = 2;
            break;
        case "ArrowUp":
        case 38: // up arrow keyCode
            snakes[0].angle = 3;
            break;
        case "ArrowRight":
        case 39: // right arrow keyCode
            snakes[0].angle = 0;
            break;
        case " ":
        case 32:
            isPause = ! isPause;
            pause (isPause);
            break;
        case "Enter":
        case 13:
            if (isStart == 0) isStart = 1;
            else isRestart = 1;
            break;
    }
}