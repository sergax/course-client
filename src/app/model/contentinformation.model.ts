export class ContentInformation {
    id: number;
    contentId: number;
    studentId: number;
    passed: boolean;

    constructor(id: number, contentId: number, studentId: number, passed: boolean) {
        this.id = id;
        this.contentId = contentId;
        this.studentId = studentId;
        this.passed = passed;
    }
}