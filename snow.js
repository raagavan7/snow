class Snow
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:0.4
		
			}
			this.body=Bodies.circle(x,y,r, options)

		this.x=x;
		this.y=y;
		this.r=r;
		
		
        this.image=loadImage("snow4.webp");
		World.add(world, this.body);

	}
	display()
	{
			
			var paperpos=this.body.position;
var angle =this.body.angle;
			push();
			translate(paperpos.x, paperpos.y);
			rotate(angle);
			//strokeWeight(4);
			noStroke();
			fill("white")
			imageMode(CENTER);
			image(this.image, 0,0,25,25);
			
			pop();
			
	}

}