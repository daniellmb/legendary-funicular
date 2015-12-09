(function(c) {
    function rounded(x, y, width, height, radius) {
        c.beginPath();
        c.moveTo(x + radius, y);
        c.lineTo(x + width - radius, y);
        c.quadraticCurveTo(x + width, y, x + width, y + radius);
        c.lineTo(x + width, y + height - radius);
        c.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
        c.lineTo(x + radius, y + height);
        c.quadraticCurveTo(x, y + height, x, y + height - radius);
        c.lineTo(x, y + radius);
        c.quadraticCurveTo(x, y, x + radius, y);
        c.closePath();
        c.fill();
    }
    // wheels
    rounded(48, 20, 10, 10, 6);
    rounded(62, 14, 10, 10, 6);
    // rail
    c.beginPath();
    c.moveTo(111, 17);
    c.lineTo(111, 13);
    c.lineTo(8, 52);
    c.lineTo(8, 56);
    c.closePath();
    c.fill();
    // post
    c.beginPath();
    c.moveTo(60, 60);
    c.lineTo(60, 42);
    c.lineTo(65, 40);
    c.lineTo(65, 60);
    c.closePath();
    c.fill();
    // tram
    rounded(31, 60, 61, 45, 5);
    // windows
    c.fillStyle = '#fff';
    rounded(34, 66, 15, 15, 2);
    rounded(54, 66, 15, 15, 2);
    rounded(74, 66, 15, 15, 2);
}(document.querySelector('canvas').getContext('2d')));