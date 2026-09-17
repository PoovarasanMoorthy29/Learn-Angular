<<<<<<< HEAD
import { Component ,Input,Output,EventEmitter} from '@angular/core';
=======
import { Component ,EventEmitter,Input,Output} from '@angular/core';
>>>>>>> 27169b4 (output decarator used)
import { User } from '../../models/User';
@Component({
  imports: [],
  selector: 'app-data',
  styleUrl: './data.css',
  templateUrl: './data.html',
})
export class Data {
<<<<<<< HEAD
  // @Input() user !:User;

  @Output() success :EventEmitter<boolean>=new EventEmitter();
=======
  @Input() user !:User;

  @Output() success:EventEmitter<boolean>=new EventEmitter();
>>>>>>> 27169b4 (output decarator used)

  onSubmit(){
    this.success.emit(true);
  }

}
