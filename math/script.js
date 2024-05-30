import zim from "https://zimjs.org/cdn/016/zim";

const { Frame, Container, Rectangle, Label, Button } = zim;

const frame = new Frame(800, 600); // Create a new ZIM Frame with width 800 and height 600
frame.on("ready", () => {

// Create an array to store the initial positions of rectangles
const initialPositions = [
    { x: 100, y: 100 },
    { x: 300, y: 100 },
    { x: 100, y: 300 },
    { x: 300, y: 300 }
];

// Create an array to store draggable rectangles
const rectangles = [];

// Create and shuffle rectangles
for (let i = 0; i < 4; i++) {
    const rect = new Rectangle(100, 100, "red");
    rect.x = initialPositions[i].x;
    rect.y = initialPositions[i].y;
    rect.drag(); // Make the rectangle draggable
    rectangles.push(rect);
}

// Function to snap a rectangle to the nearest initial position
function snapToNearestPosition(rect) {
    let minDist = Infinity;
    let nearestPosition = null;

    initialPositions.forEach((pos) => {
        const dist = Math.sqrt(Math.pow(rect.x - pos.x, 2) + Math.pow(rect.y - pos.y, 2));
        if (dist < minDist) {
            minDist = dist;
            nearestPosition = pos;
        }
    });

    rect.x = nearestPosition.x;
    rect.y = nearestPosition.y;
}

// Event handlers for drag and drop
rectangles.forEach((rect) => {
    rect.on("pressup", () => {
        snapToNearestPosition(rect); // Snap the rectangle to the nearest position
        // Update positions of other rectangles
        rectangles.filter(r => r !== rect).forEach(r => snapToNearestPosition(r));
    });
});

// Add rectangles to the canvas
frame.on("ready", () => {
    rectangles.forEach(rect => frame.add(rect));
    frame.update();
});




    // const rects =[];
    // const rect = new Rectangle({width:300, height:80, color:"blue", corner:20}).center().mov(0,-100).drag();
    // const label = new Label({
    //     text:"Rect1",
    //  }).center(rect);
    // const rect1 = rect.clone();
    // rect1.center().drag();
    // const label1 =label.clone();
    // label1.text="Rect2"
    // label1.center(rect1);

    // const rect2 = rect.clone();
    // rect2.center().mov(0,100).drag();
    // const label2 =label.clone();
    // label2.text="Rect3";
    // label2.center(rect2)




    
    // rects.push(rect,rect1,rect2);

    // console.log(rects);




    
   


});
