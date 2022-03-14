
var arr=["black","blue","orange","pink","white"];
var black=["black","black","black","black","black",]
var blue=["blue","blue","blue","blue","blue",]
var orange=["orange","orange","orange","orange","orange",]
var pink=["pink","pink","pink","pink","pink",]
var white=["white","white","white","white","white",]

// for(var i=0;i<arr.length;i++){
//     var element=document.createElement("img");
//     element.setAttribute("src",`./images/cycle-${arr[i]}.jpg`)
//     element.setAttribute("id",i);
//     var innerImages=document.getElementById("inner-image2");
//     innerImages.appendChild(element)

//     console.log(innerImages)

// }

    
// console.log(i)
// if(i=='tyre'){
//     i.classList.add('tireClass')
// }
// else if(i=='handle'){
//     i.classList.add('handleClass')

// }
// i.addEventListener('click',function(){
//     replaceImg.src=i.src;
// })

// });
   function first(){ 
    var x=0;
    for(var i=0;i<arr.length;i++){ 
    var imageElement=document.createElement("img");
    
    imageElement.setAttribute("src",`./images/cycle-${arr[i]}.jpg`);
    // console.log(imageElement)
    imageElement.setAttribute("id",x+i)
    imageElement.setAttribute("class","border")
    // console.log(imageElement)
    imageElement.setAttribute("onclick","fun"+x+i+"()");
    var innerImages=document.getElementById("inner-image2");
    innerImages.appendChild(imageElement)

    }
     
    }

    
    // }}
    function USeAble(){  

        var replaceImg=document.getElementById("first");
        var dataUSe=document.querySelectorAll("#inner-image2 >img");
        // console.log(dataUSe)
        dataUSe.forEach(function(i){
     
        i.addEventListener('click',function(){
          
            replaceImg.src=i.src;
        })
    })
}

first();
USeAble();

function Border(){
    
var replaceImg=document.getElementById("first");
var dataUSe=document.querySelectorAll("#inner-image2 >img");
// console.log(dataUSe)
dataUSe.forEach(function(i){

i.addEventListener('mouseover',function(){
  
   i.style.border = "2px solid red";
   i.style.boxShadow = "5px 5px 10px red"; 

  
})

i.addEventListener('mouseout',function(){
  
    i.style.border = "none";
    i.style.boxShadow = "none"; 
  
 })

})
}

Border();
   


function fun00(){
    


    var dataUSe=document.getElementById("inner-image2").innerHTML="";
 
    for(var i=0;i<black.length;i++){
     var imageElement=document.createElement("img");
     imageElement.setAttribute("src",`./images/cycle-${black[i]}.jpg`);
     var placement=document.getElementById("inner-image2");
     placement.appendChild(imageElement)


    
    }
    USeAble();
    Border();
    

}
function fun01(){

    


    var dataUSe=document.getElementById("inner-image2").innerHTML="";
 
    for(var i=0;i<blue.length;i++){
     var imageElement=document.createElement("img");
     imageElement.setAttribute("src",`./images/cycle-${blue[i]}.jpg`);
     var placement=document.getElementById("inner-image2");
     placement.appendChild(imageElement)
    
    }
    USeAble();
    Border();
}    
function fun02(){
    


    var dataUSe=document.getElementById("inner-image2").innerHTML="";
 
    for(var i=0;i<orange.length;i++){
     var imageElement=document.createElement("img");
     imageElement.setAttribute("src",`./images/cycle-${orange[i]}.jpg`);
     var placement=document.getElementById("inner-image2");
     placement.appendChild(imageElement)
    
    }
    USeAble();
    Border();
}
function fun03(){
    


    var dataUSe=document.getElementById("inner-image2").innerHTML="";
 
    for(var i=0;i<pink.length;i++){
     var imageElement=document.createElement("img");
     imageElement.setAttribute("src",`./images/cycle-${pink[i]}.jpg`);
     var placement=document.getElementById("inner-image2");
     placement.appendChild(imageElement)
    
    }
    USeAble();
    Border();
}
 
function fun04(){
    


    var dataUSe=document.getElementById("inner-image2").innerHTML="";
 
    for(var i=0;i<white.length;i++){
     var imageElement=document.createElement("img");
     imageElement.setAttribute("src",`./images/cycle-${white[i]}.jpg`);
     var placement=document.getElementById("inner-image2");
     placement.appendChild(imageElement)
    
    }
    USeAble();
    Border();
}