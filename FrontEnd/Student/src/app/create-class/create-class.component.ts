import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IClass } from '../class.modal';
import { ClassService } from '../class.service';

@Component({
  selector: 'app-create-class',
  templateUrl: './create-class.component.html',
  styleUrls: ['./create-class.component.css']
})
export class CreateClassComponent implements OnInit {
  
  model = new IClass(null, null);

  constructor(public classService: ClassService) { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm){
    this.classService.addClass(this.model).subscribe( data=>{
      if(data != null){
        alert('Class Added Successfully...!');
        f.resetForm();
      }
    });
  }

}
