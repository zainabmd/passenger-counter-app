
let countel=document.getElementById("count-el");
let saver=document.getElementById("save-el")
let count=0

function increment(){
    count+=1;
    countel.textContent=count;
}

function save(){
    if(count!=0){
    saver.textContent+=count + " - ";
    countel.textContent=0;
    count=0;}
}
