class Father{

    constructor(name,lname,phone,age,email,address){

        this.name=name
        this.lname=lname,
        this.phone=phone,
        this.age=age,
        this.email=email,
        this.address=address
    }

}

class son extends Father{

    constructor(name,lname,phone,age,email,address){

        super(name,lname,phone,age,email,address)
    }
}


let parent= new Father('zayin','khan','0343545150','30','wasit@email.com','hyderabad'+"<br>")

let child= new son('Salem','khan','0335374683','25','saleem@email.com','lahore')

console.log(parent);

console.d(child);

for(let p in parent){

    document.write(p+':'+parent[p]+'<br>')

}
