//console.log("connected");

var inputs = document.querySelectorAll('input');

//console.log(inputs);

function Controler(){
  
    var val = this.value;
    console.log(this.name);
  
    if(!(val.charAt(0) === "#")){
      
        val = this.value+"px";

    }

    document.querySelector('img').style.setProperty(`--${this.name}` ,this.value);
   // element.style.setProperty(property, value)

}

inputs.forEach(input=>input.addEventListener('change',Controler));
inputs.forEach(input=>input.addEventListener('mousemove',Controler));