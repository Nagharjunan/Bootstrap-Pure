document.getElementById("light").addEventListener("click",function(event){
    var lig = ["#BCA3AC","#5b5f97","#a9fdac","#81c3d7","#bbdef0","#f2e5d7","#aeb8fe"];
    var ran = (Math.random())*7;
    ran =  Math.floor(ran);
    var sam = document.querySelector(".dark");
    sam.style.backgroundColor = lig[ran];
    //console.log(event)
})

document.getElementById("btndark").addEventListener("click",function(event){
    
            
                var lig = ["#306b34","#2a1e5c","#e15554","#463239","#791e94","#59546c","#38405f"];
                var ran = (Math.random())*7;
                ran =  Math.floor(ran);
                var sam = document.querySelector(".dark");
                sam.style.backgroundColor = lig[ran]; 
    
    // console.log(event)
})