//console.log("connected");

var inputs = document.querySelectorAll('input');

//console.log(inputs);

function Controler(){
  
    // var val = "";
    // // console.log(this.name);
    // // console.log(this.value);
  
    // if(!(val.charAt(0) === "#")){
      
    //     val = "px";
    //   //  console.log(val);

    // }

    const suffix = this.dataset.sizing || '';
   // console.log(suffix);
    
    console.log(`--${this.name}` ,this.value+suffix);
   // document.querySelector('img').style.setProperty(`--${this.name}` ,this.value+val);
    document.querySelector('img').style.setProperty(`--${this.name}` ,this.value+suffix);
    document.querySelector('.js').style.setProperty(`--${this.name}` ,this.value);
    
   // element.style.setProperty(property, value)

}

inputs.forEach(input=>input.addEventListener('change',Controler));
inputs.forEach(input=>input.addEventListener('mousemove',Controler));