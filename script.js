class sketch {
    constructor(){
        this.name="Tom";
        this.color="blue";
    }
}


sketch.prototype.speak = function(){
    console.log("no, cats can't speak");
}
sketch.prototype.walk = function(){
    console.log("Yeah, cats can walk");
}

let sk1= new sketch;

Obj={
    
}