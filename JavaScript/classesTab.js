import { classes } from "../Data/classData.js";

const classSaveBtn = document.getElementById('classSaveBtn')

const classDataRenderer = () => {
  const classInfo = document.querySelectorAll('.classAdd');
  const classData = {
      className: classInfo[0].value,
      classTeaacher: classInfo[1].value,
      classDescription: classInfo[2].value
      };
      classes.push(classInfo);
      localStorage.setItem("classInfo", JSON.stringify(classes));
     classInfo.forEach(element => element.value = "");

}

// get data from local storage

const getDataFromLocalStorage = () => {
  let classData = JSON.parse(localStorage.getItem("classInfoInfo"));
  // console.log(studentData);
  // console.log(students);
  if(classData != null){
    classes.length = 0;
    classes.push(...classData);
  }
}

// Create New Cart;

// ... (previous code)

const showCards = () => {
  const card = document.getElementById('classCardPart');
  card.innerHTML = classes.map((theClass, index) => {
       return `
               <div class="card" style="width: 18rem;">
                <div class="card-body text-start">
                  <button type="button" class="btn offset-10 d-inline-flex border-0 classDeleteButton" data-index="${index}">
                     <img src="../images/dash-circle.svg" alt="" srcset="">
                  </button>
                  <h5 class="card-title">${theClass.className}</h5>
                  <h6 class="card-subtitle mb-2 text-body-secondary">${theClass.classTeacher}</h6><br>
                  <p class="card-text">${theClass.classDescription}</p><br>
                </div>
               </div>`
  }).join("");

  const deleteButtons = document.querySelectorAll('.classDeleteButton');
  deleteButtons.forEach(button => {
     button.addEventListener('click', function() {
       const index = parseInt(button.getAttribute('data-index'), 10);
       deleteClass(index);
     });
  });
 };

 function deleteClass(index) {
  classes.splice(index, 1);
  localStorage.setItem("classInfo", JSON.stringify(classes));
  showCards();
}
  
classSaveBtn.addEventListener("click", function() {
  classDataRenderer();
  showCards()
})




showCards();