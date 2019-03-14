function Circle( radius, color){
    this.radius = radius;
    this.color = color;
    
    this.getRadius = function(){
        return this.radius;
    }

    this.getArea = function(){
        return this.radius * this.radius * Math.PI; 
    }
}

let circle1 = new Circle(5, "blue");

console.log( circle1);
console.log(circle1.getArea() );
console.log( circle1.getRadius());