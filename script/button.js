
function buttonsClick(id) {
    alert("Board updated successfully");

    

}
function clearHistory(id){

    let d = new Date();

    let hour = d.getHours();

    let min = d.getMinutes();
    let sec= d.getSeconds();
    let p="AM";
    

    if (hour >= 12) {
        p = "PM";
        if (hour > 12) {
            hour = hour - 12;
        }
    } else if (hour === 0) {
        hour = 12;
    }
    


    const Clear=document.getElementById("history");

    const div= document.createElement("div");
    div.innerHTML=`

    <h1 class="bg-[#F4F7FF] p-3 rounded-xl mt-4 mb-4">You have completed the task ${id} at ${hour}:${min}:${sec} ${p}</h1>


    `
    Clear.appendChild(div);
}
document.getElementById("clear-history-btn").addEventListener("click",function(){
    const H_container = document.getElementById("history");
    H_container.innerHTML=" ";
})

function task_dec(id){
    const taskValue = document.getElementById("task-value").innerText;
    let convertTask = parseInt(taskValue); 

    if (convertTask > 0) {
        convertTask--;  
        document.getElementById("task-value").innerText = convertTask; 
        
    }

    if (convertTask === 0) {
        alert("Congrates!!! You have completed all the current task");
    }
}

function total_task(id){
    const T_task=document.getElementById("Total_task").innerText;
    let convert_T_task=parseInt(T_task);

    const sum=convert_T_task+1;
    document.getElementById("Total_task").innerText=sum;
}



document.getElementById("btn-1").addEventListener("click", function() {
    buttonsClick();
    task_dec()
    total_task()
    clearHistory(t1)
    this.disabled = true; 


});

document.getElementById("btn-2").addEventListener("click", function() {
    buttonsClick();
    task_dec()
    total_task()
    clearHistory(t2)
    this.disabled = true;  
});

document.getElementById("btn-3").addEventListener("click", function() {
    buttonsClick();
    task_dec()
    total_task()
    clearHistory(t3)
    this.disabled = true;  
});

document.getElementById("btn-4").addEventListener("click", function() {
    buttonsClick();
    task_dec()
    total_task()
    clearHistory(t4)
    this.disabled = true;  
});

document.getElementById("btn-5").addEventListener("click", function() {
    buttonsClick();
    task_dec()
    total_task()
    clearHistory(t5)
    this.disabled = true;  
});

document.getElementById("btn-6").addEventListener("click", function() {
    buttonsClick();
    task_dec()
    total_task()
    clearHistory(t6)
    this.disabled = true;  
});

const t1=document.getElementById("title-1").innerText;
const t2=document.getElementById("title-2").innerText;
const t3=document.getElementById("title-3").innerText;
const t4=document.getElementById("title-4").innerText;
const t5=document.getElementById("title-5").innerText;
const t6=document.getElementById("title-6").innerText;