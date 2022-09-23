import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {CourseService} from "../course.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-course-create',
  templateUrl: './course-create.component.html',
  styleUrls: ['./course-create.component.css']
})
export class CourseCreateComponent implements OnInit {
  isCreated: boolean = false;
  createForm!: FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private courseService: CourseService) { }

  ngOnInit(): void {
    this.createForm = new FormGroup({
      'name': new FormControl(this.data.name),
      'description': new FormControl(this.data.description),
      'logoUrl': new FormControl(this.data.logoUrl),
      'movieUrl': new FormControl(this.data.movieUrl),
      'dateEnd': new FormControl(this.data.dateEnd),
      'principal': new FormControl(this.data.principal),
    })
  }

  get name() {
    return this.createForm.get('name');
  }

  get description() {
    return this.createForm.get('description');
  }

  get logoUrl() {
    return this.createForm.get('logoUrl');
  }

  get movieUrl() {
    return this.createForm.get('movieUrl');
  }

  get dateEnd() {
    return this.createForm.get('dateEnd');
  }

  get principal() {
    return this.createForm.get('principal');
  }

  onCreate() {
    this.courseService.createCourse(
      this.createForm.value.name,
      this.createForm.value.description,
      this.createForm.value.logoUrl,
      this.createForm.value.movieUrl,
      this.createForm.value.dateEnd,
      this.createForm.value.principal,
    ).subscribe(() => {
      this.isCreated = true;
    })
  }

  onClose() {
    if (this.isCreated) {
      window.location.reload();
    }
  }

}
