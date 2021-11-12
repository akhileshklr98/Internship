import { Component, OnInit } from '@angular/core';
import { IStudent } from '../student.modal';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-show-student',
  templateUrl: './show-student.component.html',
  styleUrls: ['./show-student.component.css']
})
export class ShowStudentComponent implements OnInit {

  students: IStudent[];

  constructor(public studentService: StudentService) { }

  ngOnInit(): void {
    this.studentService.getAllStudent().subscribe( data=>{
      this.students = JSON.parse(JSON.stringify(data));
    });
  }

  delete(id) {
    var deleteMsg = confirm('Are You Sure Delete?');
    if(deleteMsg == true) {
      this.studentService.deleteStudent(id).subscribe( data=>{
        alert('Deleted Successfully......!');
        console.log(data);
      });
    }
  }

}
