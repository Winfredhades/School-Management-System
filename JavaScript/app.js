import { students } from "../Data/studentData.js";

//--------------------------- Student Card Creating Part Start -------------------------

// set data to local storage

const studentDataRenderer = () => {
    const studentInfo = document.getElementsByClassName('studentAdd');
    const studentData = {
        name: studentInfo[0].value,
        surName: studentInfo[1].value,
        course: studentInfo[2].value,
        grade: studentInfo[3].value,
        message: studentInfo[4].value,
        };
        students.push(studentData);
        localStorage.setItem("studdentInfo", JSON.stringify(students));

}

// get data from local storage

const getDataFromLocalStorage = () => {
    let studentData = JSON.parse(localStorage.getItem("studdentInfo"));
    console.log(studentData);
    console.log(students);
    if(studentData != null){
      students.length = 0;
      students.push(...studentData);
    }
}

// Create New Cart;

const showCards = () => {
  console.log(students.length)
    const card = document.getElementById('studentCartPart');
    card.innerHTML = students.map(student => {
      return `
    <div class="card" style="width: 18rem;">
    <div class="card-body text-start">
      <h5 class="card-title">${student.name} ${student.surName}</h5>
      <h6 class="card-subtitle mb-2 text-body-secondary">${student.course}</h6><br>
      <p class="card-text">${student.message}</p><br>
      <p class="text-primary">Average Grade: ${student.grade}</p>  
    </div>
  </div>`;
    }).join("")
}



const saveBtn = document.getElementById('studentSaveBtn');

saveBtn.addEventListener("click", function() {
   studentDataRenderer();
   showCards()
  // localStorage.clear()
})

//--------------------- Student Cart Creating Part End ----------------------------

//--------------------- Teacher Cart Creating Part Start --------------------------



const studentTab = document.getElementById('nav-students-tab');

studentTab.addEventListener("click", function () {
  getDataFromLocalStorage();
  showCards();
} )


// localStorage.clear()