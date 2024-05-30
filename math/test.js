import zim from "https://zimjs.org/cdn/016/zim";

const { Frame, Container, Rectangle, Label, Button } = zim;

const frame = new Frame("fit", 1920, 1080, "#ddd");
frame.on("ready", () => {
 

    const rects =[];
    const rect = new Rectangle({width:300, height:80, color:"blue", corner:20}).center().mov(0,-100).drag();
    const label = new Label({
        text:"Rect1",
     }).center(rect);
    const rect1 = rect.clone();
    rect1.center().drag();
    const label1 =label.clone();
    label1.text="Rect2"
    label1.center(rect1);

    const rect2 = rect.clone();
    rect2.center().mov(0,100).drag();
    const label2 =label.clone();
    label2.text="Rect3";
    label2.center(rect2)




    
    rects.push(rect,rect1,rect2);

    console.log(rects);

    

    
   


});
