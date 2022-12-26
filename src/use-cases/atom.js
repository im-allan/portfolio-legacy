export const atom = () => {
    let cant = 20,
        offset = 2 / cant;
    let increment = Math.PI * (3 - Math.sqrt(5));
    const canvas = document.getElementById("circle");
    //---Build the elements
    for (let i = 0; i < cant; i++) {
        let circle;
        circle = document.createElement("section");
        circle.className = "point";
        circle.setAttribute("data-index", i);
        canvas.appendChild(circle);
    };
    //---Apply transformations to points
    const updatePoints = (event) => {

        let x, y, z, r, a, scale, opacity, point, style,
            angle = (event) ? (-event.pageX / 6) * Math.PI / 180 : 0;

        for (let i = 0; i < cant; i++) {

            y = (i * offset - 1) + (offset / 2);
            r = Math.sqrt(1 - Math.pow(y, 2));
            a = ((i + 1) % cant) * increment + angle;
            x = Math.cos(a) * r;
            z = Math.sin(a) * r;

            scale = Math.round(z * 20000) / 100;
            opacity = (1 + z) / 1.5;

            style = "translate3d(" + ((125 + x * 100) / 16) + "rem, " + ((125 + y * 100) / 16) + "rem, " + (scale / 16) + "rem)";

            point = canvas.querySelectorAll("[data-index='" + i + "']");
            point[0].style.WebkitTransform = style;
            point[0].style.msTransform = style;
            point[0].style.transform = style;
            point[0].style.opacity = opacity;

        }
    }
    //---Update the points at start
    updatePoints();
    //---Update the points on mouse move
    document.addEventListener("mousemove", updatePoints);
}