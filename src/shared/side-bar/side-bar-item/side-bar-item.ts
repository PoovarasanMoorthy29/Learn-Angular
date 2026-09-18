import { Component ,Input} from '@angular/core';

@Component({
  imports: [],
  selector: 'app-side-bar-item',
  styleUrl: './side-bar-item.css',
  templateUrl: './side-bar-item.html',
})
export class SideBarItem {
  @Input() menuDetails!:{name:string,path:string};
}
