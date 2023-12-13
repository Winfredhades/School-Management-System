import { students } from "../Data/studentData.js";

const studentDataRenderer = () => {
  const studentInfo = document.querySelectorAll('.studentAdd');
  const studentData = {
      name: studentInfo[0].value,
      surName: studentInfo[1].value,
      course: studentInfo[2].value,
      grade: studentInfo[3].value,
      message: studentInfo[4].value,
      };
      students.push(studentData);
      localStorage.setItem("studdentInfo", JSON.stringify(students));
     studentInfo.forEach(element => element.value = "");

}

// get data from local storage

const getDataFromLocalStorage = () => {
  let studentData = JSON.parse(localStorage.getItem("studdentInfo"));
  // console.log(studentData);
  // console.log(students);
  if(studentData != null){
    students.length = 0;
    students.push(...studentData);
  }
}

// Create New Cart;

// ... (previous code)

const showCards = () => {
  const card = document.getElementById('studentCartPart');
  card.innerHTML = students.map((student, index) => {
    return `
      <div class="card" style="width: 18rem;">
        <div class="card-body text-start">
          <button class="btn offset-10 d-inline-flex border-0 studentDeleteButton" data-index="${index}">
            <img src="../images/dash-circle.svg" alt="" srcset="">
          </button>
          <h5 class="card-title" id="indexHint">${student.name} ${student.surName}</h5>
          <h6 class="card-subtitle mb-2 text-body-secondary">${student.course}</h6><br>
          <p class="card-text">${student.message}</p><br>
          <p class="text-primary">Average Grade: ${student.grade}</p>  
        </div>
      </div>`;
  }).join("");

  // Attach event listener to all delete buttons
  const deleteButtons = document.querySelectorAll('.studentDeleteButton');
  deleteButtons.forEach(button => {
    button.addEventListener('click', function() {
      const index = parseInt(button.getAttribute('data-index'), 10);
      deleteStudent(index);
    });
  });
}

// ... (rest of the code)




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
} );


function deleteStudent(index) {
  students.splice(index, 1);
  localStorage.setItem("studdentInfo", JSON.stringify(students));
  showCards();
}




showCards();