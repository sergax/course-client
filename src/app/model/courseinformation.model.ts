export class CourseInformation {
    dateRegistered: Date;
    comments: string;
    likes: boolean;
    courseId: number;
    studentId: number;

    constructor(dateRegistered: Date, comments: string, likes: boolean, courseId: number, studentId: number) {
        this.dateRegistered = dateRegistered;
        this.comments = comments;
        this.likes = likes;
        this.courseId = courseId;
        this.studentId = studentId;
    }
}