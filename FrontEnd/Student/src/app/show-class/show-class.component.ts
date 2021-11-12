import { Component, OnInit } from '@angular/core';
import { IClass } from '../class.modal';
import { ClassService } from '../class.service';

@Component({
  selector: 'app-show-class',
  templateUrl: './show-class.component.html',
  styleUrls: ['./show-class.component.css']
})
export class ShowClassComponent implements OnInit {

  clss: IClass[];

  constructor(public classService: ClassService) { }

  ngOnInit(): void {
    this.classService.getAllClasses().subscribe( data=>{
      this.clss = JSON.parse(JSON.stringify(data));
    });
  }

  delete(id) {
    var deleteMsg = confirm('Are You Sure Delete?');
    if(deleteMsg == true) {
      this.classService.deleteClass(id).subscribe( data=>{
        alert('Deleted Successfully......!');
        console.log(data);
      });
    }
  }

}
