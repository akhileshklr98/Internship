import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClassService {

  constructor(public http: HttpClient) { }

  addClass(cls) {
    return this.http.post("https://localhost:3000/Internship/BackEnd/addClass",{class1: cls});
  }

  getAllClasses() {
    return this.http.get("https://localhost:3000/Internship/BackEnd/classes");
  }

  deleteClass(value) {
    return this.http.delete("https://localhost:3000/Internship/BackEnd/deleteCls"+value);
  }
}
