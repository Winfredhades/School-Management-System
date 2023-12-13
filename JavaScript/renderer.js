import { studentDataRenderer, showStudentCards, saveStudentBtn, deleteStudent } from "./studentApp.js";
import { teacherDataRenderer, showTeacherCards, teacherSaveBtn, deleteTeacher } from "./teacherApp.js";
import { classDataRenderer, showClassCards, classSaveBtn, deleteClass } from "./classesTab.js";
import { studentCardContentInHome, teacherCardContentInHome, classCardContentInHome, signedUser, signInButton } from "./homeTab.js";


saveStudentBtn.addEventListener("click", function() {
    studentDataRenderer();
    showStudentCards();
    studentCardContentInHome();
   });

teacherSaveBtn.addEventListener("click", function () {
    teacherDataRenderer();
    showTeacherCards();
    teacherCardContentInHome();
  });

  classSaveBtn.addEventListener("click", function() {
    classDataRenderer();
    showClassCards()
    classCardContentInHome()
  })
signInButton.addEventListener("click", signedUser)




studentCardContentInHome()
teacherCardContentInHome();
classCardContentInHome();
showClassCards();
showStudentCards();
showTeacherCards();