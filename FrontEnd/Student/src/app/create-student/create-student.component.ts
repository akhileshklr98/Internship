import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IStudent } from '../student.modal';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {

  model = new IStudent(null, null, null, null);

  constructor(public studentService: StudentService) { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm){
    this.studentService.addStudent(this.model).subscribe( data=>{
      if(data != null){
        alert('Student Added Successfully...!');
        f.resetForm();
      }
    });
  }

}
