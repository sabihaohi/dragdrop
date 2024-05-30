import zim from "https://zimjs.org/cdn/016/zim";

const { Frame, Container, Rectangle, Label, Button } = zim;

const frame = new Frame("fit", 1920, 1080, "#ddd");
frame.on("ready", () => {
    // const stage = frame.stage;
    // const stageW = frame.width;
    // const stageH = frame.height;

    // const correctPositions = [
    //     {x: 100, y: 100},
    //     {x: 300, y: 100},
    //     {x: 500, y: 100}
    // ];

    // // Function to snap to nearest position
    // function snapToPosition(rect) {
    //     let closest = null;
    //     let minDist = Infinity;

    //     correctPositions.forEach(pos => {
    //         const dist = zim.dist(rect.x, rect.y, pos.x, pos.y);
    //         if (dist < minDist) {
    //             minDist = dist;
    //             closest = pos;
    //         }
    //     });

    //     const rectangles = [];
    //     for (let i = 0; i < correctPositions.length; i++) {
    //         const rect = new zim.Rectangle(100, 100, zim.randCol())
    //             .center(stage)
    //             .pos(zim.rand(50, stageW-150), zim.rand(50, stageH-150))
    //             .drag();

    //         rect.on("pressup", () => snapToPosition(rect));

    //         rectangles.push(rect);
    //     }

    //     stage.update();
    // }




    const rects =[];
    const rect = new Rectangle({width:400, height:80, color:"grey", corner:20}).center().mov(0,-100);
   
    const rect1 = rect.clone();
    rect1.center().drag();
    // const label1 =label.clone();
    // label1.text="Rect2"
    // label1.center(rect1);

    const rect2 = rect.clone();
    rect2.center().mov(0,100).drag();
    // const label2 =label.clone();
    // label2.text="Rect3";
    // label2.center(rect2);

    
    console.log(rect1.x,rect1.y)

  const option1 = new Rectangle({width:300, height:80, color:"red", corner:20}).loc(760,400).drag();
  const option2 = new Rectangle({width:300, height:80, color:"red", corner:20}).loc(760,500).drag();
  const option3 = new Rectangle({width:300, height:80, color:"red", corner:20}).loc(760,600).drag();

  const label = new Label({
    text:"Rect1",
 }).center(option1);

 const label2 =label.clone();
 label2.text="Rect2"
 label2.center(option2);

 const label3 =label.clone();
 label3.text="Rect3"
 label3.center(option3);


 option1.on()





    


    
  rects.push(rect,rect1,rect2);

  console.log(rects);




    
   


});
