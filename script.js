const leftButton=document.getElementById('leftButton').setAttribute('onClick','leftButtonClicked()')
const rightButton=document.getElementById('rightButton').setAttribute('onClick','rightButtonClicked()')

let x=1

     function applyStyle(){
    const img=document.getElementById(`image${x}`)
    img.style.cssText+='transform: translate(-15px-15px);transition-duration: 1s;box-shadow: 25px 25px 25px red;';
     }

     function leftButtonClicked(){

      if(x>1){

        const img=document.getElementById(`image${x}`)
        img.style.cssText+='height: 400px; width: 400px;background-color: gray;box-shadow: 10px 10px 10px red;transition-duration:1s';
        x=x-1

       applyStyle()
      }
        
     }

     function rightButtonClicked(){
           if(x<5){
            const img=document.getElementById(`image${x}`)
            img.style.cssText+='height: 400px; width: 400px;background-color: gray;box-shadow: 10px 10px 10px red;transition-duration:1s';
            x=x+1
            applyStyle()
           }
     }


applyStyle()