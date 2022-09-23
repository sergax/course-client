import {Component, Inject, OnInit} from "@angular/core";
import {CourseService} from "../course.service";
import {FormControl, FormGroup} from "@angular/forms";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-course-update',
  templateUrl: './course-update.component.html',
  styleUrls: ['./course-update.component.css']
})
export class CourseUpdateComponent implements OnInit {
  isUpdated: boolean = false;
  updateForm!: FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private courseService: CourseService) {
  }

  ngOnInit(): void {
    this.updateForm = new FormGroup({
      'id': new FormControl(this.data.id),
      'name': new FormControl(this.data.name),
      'description': new FormControl(this.data.description),
      'logoUrl': new FormControl(this.data.logoUrl),
      'movieUrl': new FormControl(this.data.movieUrl),
      'dateStart': new FormControl(this.data.dateStart),
      'dateEnd': new FormControl(this.data.dateEnd),
      'status': new FormControl(this.data.status),
      'principal': new FormControl(this.data.principal),
    })
  }

  get id() {
    return this.updateForm.get('id');
  }

  get name() {
    return this.updateForm.get('name');
  }

  get description() {
    return this.updateForm.get('description');
  }

  get logoUrl() {
    return this.updateForm.get('logoUrl');
  }

  get movieUrl() {
    return this.updateForm.get('movieUrl');
  }

  get dateStart() {
    return this.updateForm.get('dateStart');
  }

  get dateEnd() {
    return this.updateForm.get('dateEnd');
  }

  get status() {
    return this.updateForm.get('status');
  }

  get principal() {
    return this.updateForm.get('principal');
  }

  onUpdate() {
    this.courseService.updateCourseById(
      this.updateForm.value.id,
      this.updateForm.value.name,
      this.updateForm.value.description,
      this.updateForm.value.logoUrl,
      this.updateForm.value.movieUrl,
      this.updateForm.value.dateStart,
      this.updateForm.value.dateEnd,
      this.updateForm.value.status,
      this.updateForm.value.principal,
    ).subscribe(() => {
      this.isUpdated = true;
    })
  }

  onClose() {
    if (this.isUpdated) {
      window.location.reload();
    }
  }

}



