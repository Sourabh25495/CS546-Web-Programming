const mongoCollections = require("./mongoCollections");
const todoitems = mongoCollections.todoitems;

let uuid = require("node-uuid");




module.exports = {

    async getTaskById(id) {
        if (!id) 
            throw "You must provide an id to search for";
        
            const mytask = await todoitems();
            const task = await mytask.findOne({ _id: id });

        if (task === null) 
            throw "No task with that id";
            
        return task;

       
    },

    //Asynchronous function which would return a promise that resolves to a string with contents of the file
    async createTask(title, description)
    
     {
         if(!title){
            throw "Need to provide a title!";
         }
         else if(!description){
            throw "Need to provide a description!";
         }
         else{
             let myCollections = await todoitems();
             let id = uuid.v1();
             let newtasks={
                    _id : id,
                    title: title,
                    description: description,
                    "completed" : "false",
                    "completedAt" : null
                };
            const insertNew = await myCollections.insertOne(newtasks);
            if (insertNew.insertedCount === 0) throw "Could not add task";

            const newId = insertNew.insertedId;
            //console.log(newId)
            const tasks=await this.getTaskById(newId);
            return tasks;
          
         }

        
    },

    async getAllTasks()
    {
        const alltasks = await todoitems();
        
            const tasks = await alltasks.find({}).toArray();
        
            return tasks;
    },

    async removeTask(id)
    {
        
        if (!id) throw "You must provide an id to search for";
        
            const mytask = await todoitems();
            const deletionInfo = await mytask.removeOne({ _id: id });
            if((deletionInfo.deleteCunt)===0){
                throw `Could not delete task with id of ${id}`;
            }
        
    },

   async  completeTask(id)
    {
        
        if(!id)
        {
            throw "Need to provide a id!";
        }
        

        //change according to async 

        let dateTime= new Date();
        let currentDateTime = dateTime.getHours()+":"+dateTime.getMinutes()+":"+dateTime.getSeconds();
        
        
          let completedTask = await todoitems();
          const updateInfo = await completedTask.updateOne({ _id: id }, {$set:{'completed' : true,'completedAt' :currentDateTime}});
          if (updateInfo.modifiedCount === 0) {
            throw "could not update todo successfully";
          }
          return await this.getTaskById(id);
       
    }
};
  //  module.exports = exportedMethods;


//module end

