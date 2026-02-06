class a {
    b = 0;
    increase(){
        this.b ++ ;
        console.log(this.b);
    }
}

class x {
    constructor(){
        this.v = 0;
    }
    increase(){
        this.v ++;
        console.log(this.v)
    }
}

let c = new x();
c.increase();
c.increase();
c.increase();


