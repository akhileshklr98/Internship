import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(public http: HttpClient) { }

  addStudent(st) {
    return this.http.post("https://localhost:3000/Internship/BackEnd/addStudent",{student: st});
  }

  getAllStudent() {
    return this.http.get("https://localhost:3000/Internship/BackEnd/students");
  }

  deleteStudent(value) {
    return this.http.delete("https://localhost:3000/Internship/BackEnd/deleteStudent"+value);
  }
}
