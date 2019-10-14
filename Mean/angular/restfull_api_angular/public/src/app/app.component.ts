import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
   constructor(private _httpService: HttpService){}
   allTasks: any;
   anotherTask: any;
   isClicked = false;
   oneTask: any;

   ngOnInit(){
     this.getTasksFromService();
   }

   showTask(){
     this.oneTask = this.allTasks[3];
     console.log(this.oneTask)
     this.isClicked = true;
   }

   getTasksFromService(){
     console.log("Angular componenet.")
     console.log("-> going to service")
     this._httpService.getAllTask().subscribe(data => {
       console.log("retreived data back in angular")
      //  console.log(data);
       this.allTasks = data;
       this.anotherTask = data[1];
       console.log(this.allTasks);
     })
   }
}
