const connection = require("./mongoConnection");
const todo = require("./todo");




 
async function main() {

    
try{

    const createdTask1 = await todo.createTask("Ponder Dinosaurs", "Has Anyone Really Been Far Even as Decided to Use Even Go Want to do Look More Like?");
    console.log("task 1 created");
    console.log(createdTask1);
    console.log();
    console.log();
    
    
    const createdTask2 = await todo.createTask("Play Pokemon with Twitch TV", "Should we revive Helix?");
    console.log("task 2 created");
    console.log(createdTask2);
    
    console.log();
    console.log();
    
    
    
    
    
//querrying all tasks and logging them

    console.log("Printing All Tasks....");
    console.log();
    console.log();
    const getTasks = await todo.getAllTasks();
    console.log(getTasks);


    // change id accordingly  and Remove first task
    
    console.log("remove task 1")
    console.log("The Id for that task is: " +getTasks[0]._id)
    const deleteIT = await todo.removeTask(getTasks[0]._id); 
    
    console.log();
    console.log();
    

    //Querry remaining task and print

    console.log("Printing All Remaining Tasks....");
    console.log();
    console.log();
    const getTasks1 = await todo.getAllTasks();
    console.log(getTasks1);
    console.log();
    console.log();
 


    console.log("Updating Finished Tasks...")
    console.log();
    console.log();

    const completedTask = await todo.getAllTasks(getTasks1);   
    for(i=0;i<completedTask.length;i++){
   
     finishedTask = await todo.completeTask(getTasks1[i]._id); 
     console.log(finishedTask);
    }

    console.log();
    console.log();



    
    
        try {
            return await todo.getTaskById(completedTask);  // change id accordingly
        } catch (error) {
          console.error(error);
       }
    }catch(e){
        console.log(e);
    }
       
       console.log("Done!");

       
  


       const db = await connection();
       await db.close();
     
       


       
       
       
}
try{

main();
}catch(e){
    console.log(e)
}
