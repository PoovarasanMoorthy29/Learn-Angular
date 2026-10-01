import { Component } from '@angular/core';
import { SideBarItem } from './side-bar-item/side-bar-item';

@Component({
  imports: [SideBarItem],
  selector: 'app-side-bar',
  styleUrl: './side-bar.css',
  templateUrl: './side-bar.html',
})
export class SideBar {
  routes=[
    {path:'/',name:'Home'},
    {path:'/notes',name:'Notes'},
    {path:'/trash',name:'Trash'},
    // {path:'/testing',name:'Testing'}
  ]
}
