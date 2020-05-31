'use strict'
function startgame(){
let score=0;
let root =document.getElementById("root");
let points =document.getElementById("points");
let start =document.getElementById("start");
let congrats =document.getElementById("congrats");
let visited=[];    
let bombIndexes=generateRandomNumArray();
    let gameOver=false;
    bombIndexes=Array.from(bombIndexes);
    console.log(bombIndexes);
for(let i=0;i<9;i++)
    {
        let row=document.createElement("div");
        row.style.height="20px";
        
        for(let j=0; j<9;j++)
            {
                let currentIndex=i*9+j;
                let cell=document.createElement("div");
                cell.style.height="20px";
                cell.style.width="20px";
                cell.style.border="1px solid black";
                cell.style.display="inline-block";
                cell.setAttribute("id",currentIndex);
                //cell.style.background="red";
                if(bombIndexes.includes(currentIndex)){
                  cell.addEventListener("contextmenu",(event)=>{
                   event.preventDefault();
                    cell.innerHTML="!";
                    cell.style.background="yellow";
                    cell.style.verticalAlign="bottom";
                })
                }
                cell.addEventListener("click",()=>
                                     {
                    if(!bombIndexes.includes(currentIndex) && !gameOver  )
                        {
                            let count =0;
                            let top=currentIndex-9;
                            if(bombIndexes.includes(top))
                                {
                                    
                                  count++;  
                                }
                            let bottom=currentIndex+9;
                           if(bombIndexes.includes(bottom))
                                {
                                  count++;  
                                }
                            let topleft=currentIndex-10;
                          if(bombIndexes.includes(topleft) && currentIndex%9!=0)
                                {
                                  count++;  
                                }
                             let left=currentIndex-1;
                          if(bombIndexes.includes(left) && currentIndex%9!=0)
                                {
                                  count++;  
                                }
                            let bottomleft=currentIndex+8;
                          if(bombIndexes.includes(bottomleft) && currentIndex%9!=0)
                                {
                                  count++;  
                                }
                              let topright=currentIndex-8;
                          if(bombIndexes.includes(topright) && currentIndex%9!=8)
                                {
                                  count++;  
                                }
                             let right=currentIndex+1;
                          if(bombIndexes.includes(right) && currentIndex%9!=8)
                                {
                                  count++;  
                                }
                            let bottomright=currentIndex+10;
                           if(bombIndexes.includes(bottomright) && currentIndex%9!=8)
                                {
                                  count++;  
                                }
                           cell.textContent=count;
                          cell.style.background="green"; 
                            cell.style.verticalAlign="bottom";
                            if(!visited.includes(currentIndex)){
                            score=score+1;
                            visited.push(currentIndex);
                            }
                            if(score==71)
                                {
                                  congrats.style.display="block" ; 
                                  start.style.display="block";
                                 }
                          
                           points.innerHTML="Score:"+score;
                        }
                    else{
                        for(let x=0;x<10;x++)
                            {
                                let bomb=bombIndexes[x];
                                let bombNode =document.getElementById(bomb);
                                bombNode.style.background="red";
                                bombNode.innerHTML="";
                            }
                  
                        gameOver=true;
                        start.style.display="block";
                    }
                    
                })
               
                row.appendChild(cell);
            }
        root.appendChild(row);
    }
function generateRandomNumArray()
{
    let set=new Set();
    for(let i=1;set.size!=10;i++)
        {
            set.add(Math.ceil(Math.random()*80));
        }
    return set;

}
    start.addEventListener("click",()=>
                          {
        location.reload();
    })
    
}
startgame();