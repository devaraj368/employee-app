import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { empModal } from './emp.Model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {


empDatas: empModal [] = []
   constructor(private http:HttpClient){}

   Empdata(){
    return this.http.get('https://jsonplaceholder.typicode.com/users')
   }

   ngOnInit(): void {
    // Get empdata in Page
    this.Empdata().subscribe((data) => {
      this.empDatas = JSON.parse(JSON.stringify(data));
      console.log(data)
    });
  }

}
