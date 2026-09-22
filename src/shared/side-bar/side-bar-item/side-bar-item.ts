import { Component ,Input} from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-side-bar-item',
  styleUrl: './side-bar-item.css',
  templateUrl: './side-bar-item.html',
})
export class SideBarItem {
  // @Input() route!:{path:string,name:string };

  @Input() route!:{path:string , name:string};
}
