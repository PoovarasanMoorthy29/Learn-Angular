import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-testing',
  styleUrl: './testing.css',
  templateUrl: './testing.html',
})
export class Testing {
  name:string="Poovarasan";

  family=[
    {name:"John",age:45},
    {name:"Cena",age:25},
    {name:"Tom", age:15},
  ]
  getPerson(){
    return this.family;
  }
  getAge(){
    return this.family.filter(x => x.age>18);
  }
}
