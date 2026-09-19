import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-sample',
  styleUrl: './sample.css',
  templateUrl: './sample.html',
})
export class Sample {
  input:string='john';
  
}
