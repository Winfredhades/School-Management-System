import { students } from "../Data/studentData.js";
import { teachers } from "../Data/teacherData.js";
import { classes } from "../Data/classData.js";

export const studentCardContentInHome = () => {
    const content = document.getElementById("numberOfStudent");
    let lengthOfstudents = students.length;
    content.textContent = `${lengthOfstudents}`;
}

export const teacherCardContentInHome = () => {
    const content = document.getElementById("numberOfTeacher");
    let lengthOfTeachers = teachers.length;
    content.textContent = `${lengthOfTeachers}`;
}

export const classCardContentInHome = () => {
    const content = document.getElementById("numberOfClass");
    let lengthOfClasses = classes.length;
    content.textContent = `${lengthOfClasses}`;
}



