import { Component, Input, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideBar } from '../shared/side-bar/side-bar';
import { User } from '../models/User';
import { Data } from '../shared/data/data';

@Component({
  imports: [RouterOutlet, SideBar, Data],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  user: User = {
    name: 'John',
    age: 23,
  };

}
