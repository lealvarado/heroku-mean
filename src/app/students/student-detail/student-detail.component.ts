import { Component, Input } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.scss']
})
export class StudentDetailComponent{
  @Input()
  student: Student;

  @Input()
  createHandler: Function;
  @Input()
  updateHandler: Function;
  @Input()
  deleteHandler: Function;

  constructor(private studentService: StudentService) { }

  createStudent(student: Student) {
    this.studentService.createStudent(student).then((newStudent: Student) => {
      this.createHandler(newStudent);
    });
  }

  updateStudent(student: Student): void {
    this.studentService.updateStudent(student).then((updatedStudent: Student) => {
      this.updateHandler(updatedStudent);
    });
  }

  deleteStudent(studentId: String): void {
    this.studentService.deleteStudent(studentId).then((deletedStudentId: String) => {
      this.deleteHandler(deletedStudentId);
    });
  }


}
