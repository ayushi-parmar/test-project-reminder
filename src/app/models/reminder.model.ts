export class Reminder{
    private Name: string;
    private Time: string;
    private Iteration: string;

   
constructor(Name,Time,Iteration){
this.Name =Name
this.Time = Time
this.Iteration = Iteration

}
   
    getName() {
      return this.Name 
    }
    getTime() {
        return this.Time 
      }
      getiteration() {
        return this.Iteration 
      }
      
    getReminderObject(){
        return {Name:this.Name}
    }
    
  }