function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
	changeLightColor()
}

function draw() {
	translate(width/2,height/2);
	rectMode(CENTER);
	background(lightColor)
	stroke(0)
	strokeWeight(5);
	fill("#8b8c89")
	rect(0,30,200,120,0,0,20,20)
	rect(0,-70,200,80,20,20,0,0)
	fill("#274c77")
	rect(-50,-70,50,80)
	rect(50,-70,50,80)
	rect(-50,20,50,80)
	rect(50,20,50,80)
	fill(50)
	rect(0,-30,210,20,10)
	fill(255)
	rect(0,-30,50,50,20)
	fill(0)
	circle(0,-40,15)
	rect(0,-25,10,20)
	
	fill("#baff29")
	circle(87,50,10)
	circle(87,20,10)
	circle(87,-10,10)
	
	circle(87,-60,10)
	circle(87,-90,10)
	circle(-87,50,10)
	circle(-87,20,10)
	circle(-87,-10,10)
	
	circle(-87,-60,10)
	circle(-87,-90,10)
	
	if(frameCount%5==0){
		changeLightColor()
	}
}
function changeLightColor(){
	lightColor=color(random([
		"#7FFFD4",
		"#7FFF00",
		"#008B8B",
		"#9932CC",
		"#FFB6C1",
		"#000080",
		"#8B4513"
	]))
}