import { Component } from '@angular/core';
import { SideBarItem } from './side-bar-item/side-bar-item';

@Component({
  imports: [SideBarItem],
  selector: 'app-side-bar',
  styleUrl: './side-bar.css',
  templateUrl: './side-bar.html',
})
export class SideBar {
  routes = [
    { name: 'Home', path: '/home' },
    { name: 'Notes', path: '/notes' },
    { name: 'Trash', path: '/trash' },
  ];
}
