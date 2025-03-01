
function buttonsClick(id) {
    alert("Board update successful");
 

}

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
    this.disabled = true; 
});

document.getElementById("btn-2").addEventListener("click", function() {
    buttonsClick();
    task_dec()
    total_task()
    this.disabled = true;  
});

document.getElementById("btn-3").addEventListener("click", function() {
    buttonsClick();
    task_dec()
    total_task()
    this.disabled = true;  
});

document.getElementById("btn-4").addEventListener("click", function() {
    buttonsClick();
    task_dec()
    total_task()
    this.disabled = true;  
});

document.getElementById("btn-5").addEventListener("click", function() {
    buttonsClick();
    task_dec()
    total_task()
    this.disabled = true;  
});

document.getElementById("btn-6").addEventListener("click", function() {
    buttonsClick();
    task_dec()
    total_task()
    this.disabled = true;  
});