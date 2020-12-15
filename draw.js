function draw_grid (c) {
    c.save();
    c.strokeStyle = "#32ff7e";
    c.lineWidth = 0.25;
    c.beginPath();
    var x = c.canvas.width, y = c.canvas.height;
    for (var i = 0; i <= x; ++ i) {
        if (i % 20 == 0) {
            c.moveTo (i, 0);
            c.lineTo (i, y);
        }
    }
    for (var i = 0; i <= y; ++ i) {
        if (i % 20 == 0) {
            c.moveTo(0, i);
            c.lineTo (x, i);
        }
    }
    c.closePath();
    c.stroke();
    c.restore();
}
function draw_snake (c, r, t) {
    c.save();
    c.fillStyle = "#18dcff";
    c.strokeStyle = "black";
    c.lineWidth = 0.25;
    c.beginPath();
    
        c.moveTo (-r, r);
        c.lineTo(r, r);
        c.lineTo (r, -r);
        c.lineTo(-r, -r);
    
    //c.closePath();
    c.fill();
    
    if (t) {
    c.beginPath ();
    c.fillStyle = "#ff3838";
    c.fillRect (r / 2, -r / 2 + r/ 10, r / 2, r / 4);
    c.fillRect (r / 2, r / 2 - r / 4 - r / 10, r / 2, r / 4);
    }
    c.restore();
}
function draw_bait (c, r, gg) {
    // if (t == 1) {
    //     r *= 2;
    // }
    c.save();
    c.beginPath();
    c.fillStyle = "rgba(255, 56, 56," + gg + ")";
    c.arc (0, 0, r, 0, 2 * Math.PI);
    c.closePath();
    c.fill();
    c.restore();
}