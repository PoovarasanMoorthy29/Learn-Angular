import { Component, Input, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideBar } from '../shared/side-bar/side-bar';
import { User } from '../models/User';
import { Data } from '../shared/data/data';

import { Sample } from '../shared/sample/sample';

@Component({
  imports: [RouterOutlet, SideBar, Data,Sample],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  // user: User = {
  //   name: 'John',
  //   age: 23,
  // };

  // onSuccess(e:boolean ){
  //   if(e==true){
  //     alert("Success!")
  //   }
  //   else{
  //     alert("failed!")
  //   }
  // }
  input:string='john';

}
