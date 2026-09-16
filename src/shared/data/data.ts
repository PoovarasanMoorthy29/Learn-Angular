import { Component ,Input} from '@angular/core';
import { User } from '../../models/User';
@Component({
  imports: [],
  selector: 'app-data',
  styleUrl: './data.css',
  templateUrl: './data.html',
})
export class Data {
  @Input() user !:User;
}
