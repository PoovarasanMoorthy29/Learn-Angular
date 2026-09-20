
import { Component ,EventEmitter,Input,Output} from '@angular/core';

import { User } from '../../models/User';
@Component({
  imports: [],
  selector: 'app-data',
  styleUrl: './data.css',
  templateUrl: './data.html',
})
export class Data {

  @Output() success :EventEmitter<boolean>=new EventEmitter();
  @Input() user !:User;


  onSubmit(){
    this.success.emit(true);
  }

}
