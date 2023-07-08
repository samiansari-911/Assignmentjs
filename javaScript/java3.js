let car={

    Name:'Corolla',
    Color:'black',
    Model:'2010',
  
}


function object() {

    console.log(car);


    for(let a in car){
        
        document.write(a+':'+car[a]+"<br>")
    }
}

object()
