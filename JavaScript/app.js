import { students } from "../Data/studentData.js";

// set data to local storage

const studentDataRenderer = () => {
    const studentInfo = document.getElementsByClassName('studentAdd');
    const studentData = {
        name: studentInfo[0].value,
        surName: studentInfo[1].value,
        course: studentInfo[2].value,
        message: studentInfo[3].value,
        };
        localStorage.setItem("studdentInfo", JSON.stringify(studentData));
}

// get data from local storage

const getDataFromLocalStorage = () => {
    const studentData = JSON.parse(localStorage.getItem("studdentInfo"));
    students.push(studentData);
    return studentData;
}

// Create New Cart;

const cardCreator = () => {
    const card = document.getElementById('studentCartPart');
    students.forEach(student => {
      const studentCardText = `
    <div class="card" style="width: 18rem;">
    <div class="card-body text-start">
      <h5 class="card-title">${student.name} ${student.surName}</h5>
      <h6 class="card-subtitle mb-2 text-body-secondary">${student.course}</h6><br>
      <p class="card-text">${student.message}</p><br>
      <p class="text-primary">Average Grade:</p>  
    </div>
  </div>`;
  card.innerHTML += studentCardText;
    })
}



const saveBtn = document.getElementById('studentSaveBtn');

saveBtn.addEventListener("click", function() {
   studentDataRenderer();
   getDataFromLocalStorage();
   cardCreator()
   localStorage.clear()
})

