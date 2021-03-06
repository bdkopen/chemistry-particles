var sketchProc_left=function(processingInstance){ with (processingInstance){
    setup = function() {
        size(windowWidth/4-5, windowHeight/2);
        strokeWeight(3);
        textAlign(CENTER, TOP);
        background(227, 220, 209);
        //line centered in canvas. -25 to 125
        fill(0, 0, 0);
        text("Heat Source Temperature (°C)", (windowWidth/4)*0.5, 10);
        line((windowWidth/4)*0.25, 30, (windowWidth/4)*0.75, 30);
        ellipse(barX, 30, 10, 10);
    };
    //define the x location of drag bar.
    var barX = windowWidth/4*0.5;
    var changeSourceTemperature = function() {
        heat_source_temperature = barX;
    }
    var screenLeftUpdate = function() {
        background(227, 220, 209);
        //line centered in canvas. -25 to 125
        fill(0, 0, 0);
        text("Heat Source Temperature (°C)", (windowWidth/4)*0.5, 10);
        line((windowWidth/4)*0.25, 30, (windowWidth/4)*0.75, 30);
        ellipse(barX, 30, 10, 10);
        //screenLeftUpdate();
    };
    //screenLeftUpdate();
    
    mouseDragged = function() {
        if(mouseX >= (windowWidth/4)*0.25 && mouseX <= (windowWidth/4)*0.75 && mouseY > 20 && mouseY < 40) {
            barX = mouseX;
            changeSourceTemperature();
        }
        screenLeftUpdate();
    };
    
    mouseClicked = function() {
        
    };
    
    mouseReleased = function() {
        screenLeftUpdate();
    };

}};
