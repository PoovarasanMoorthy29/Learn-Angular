import { Component } from '@angular/core';
import { SideBarItem } from './side-bar-item/side-bar-item';

@Component({
  imports: [SideBarItem],
  selector: 'app-side-bar',
  styleUrl: './side-bar.css',
  templateUrl: './side-bar.html',
})
export class SideBar {}
