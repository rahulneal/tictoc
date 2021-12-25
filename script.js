const div1 = document.querySelector("#div1");
const div2 = document.querySelector("#div2");
const div3 = document.querySelector("#div3");
const div4 = document.querySelector("#div4");
const div5 = document.querySelector("#div5");
const div6 = document.querySelector("#div6");
const div7 = document.querySelector("#div7");
const div8 = document.querySelector("#div8");
const div9 = document.querySelector("#div9");

div1.addEventListener("click",function(){
    console.log(div1)
    fill("div1")

})
div2.addEventListener("click",function(){
    console.log(div2)
    fill("div2")

})
div3.addEventListener("click",function(){
    console.log(div3)
    fill("div3")

})
div4.addEventListener("click",function(){
    console.log(div4)
    fill("div4")

})
div5.addEventListener("click",function(){
    console.log(div5)
    fill("div5")

})
div6.addEventListener("click",function(){
    console.log(div6)
    fill("div6")

})
div7.addEventListener("click",function(){
    console.log(div7)
    fill("div7")

})
div8.addEventListener("click",function(){
    console.log(div8)
    fill("div8")

})
div9.addEventListener("click",function(){
    console.log(div9)
    fill("div9")
    
})

var count = 1;
function fill(x) {

       
   if (count <= 9) {
        if (count % 2 != 0) {
            document.getElementById(x).innerHTML = "X"
        }
        else {
            document.getElementById(x).innerHTML = "0"
        }
        count++
        if (checkwin()) {
            
           alert("Winner");
           reset();
           count=1;
        }
        

    }else
    {
        alert("Match Is Draw ");
        reset();
        count=1;
    
    }
    


}


function reset(){
    for(var i=1;i<=9;i++){
        document.getElementById("div"+i).innerHTML="";

    }
}

function checkwin() {
    if (checkCondition('div1', 'div2', 'div3') ||       checkCondition('div4', 'div5', 'div6') ||
        checkCondition('div7', 'div8', 'div9') ||
        checkCondition('div1', 'div5', 'div9') || checkCondition('div3', 'div5', 'div7') ||
        checkCondition('div1', 'div4', 'div7') || checkCondition('div2', 'div5', 'div8') ||
        checkCondition('div3', 'div6', 'div9'))
         {
        return true;
    }
}


function checkCondition(div1,div2,div3){
    if(getdata(div1)!="" && getdata(div2)!="" && getdata(div3)!="" && getdata(div1)==getdata(div2) && getdata(div2)==getdata(div3))
    {
        return true;
    }

}

function getdata(div){
    return document.getElementById(div).innerHTML;
}
    
// 


// console.log("here")




   




