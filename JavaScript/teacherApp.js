import { teachers } from "../Data/teacherData.js";


const teacherSaveBtn = document.getElementById('teacherSaveBtn');


const teacherDataRenderer = () => {
    const teacherInfo = document.querySelectorAll('.teacherAdd');
    const teacherData = {
        name: teacherInfo[0].value,
        surName: teacherInfo[1].value,
        departement: teacherInfo[2].value,
        message: teacherInfo[3].value,
        };
        teachers.push(teacherData);
        localStorage.setItem("teacherInfo", JSON.stringify(teachers));
       teacherInfo.forEach(inputEl => inputEl.value = "");
  }

  const getDataFromLocalStorage = () => {
    let teacherData = JSON.parse(localStorage.getItem("teacherInfo"));
    // console.log(studentData);
    // console.log(students);
    if(teacherData != null){
      teachers.length = 0;
      teachers.push(...teacherData);
    }
  };

  const showCards = () => {
    const teacherCard = document.getElementById('teacherCartPart');
    teacherCard.innerHTML = teachers.map((teacher, index) => {
      return `
      <div class="card" style="width: 18rem;">
      <div class="card-body text-start">
      <button class="btn offset-10 d-inline-flex border-0 teacherDeleteButton" data-index="${index}">
                  <img src="../images/dash-circle.svg" alt="" srcset="">
        </button>
        <h5 class="card-title">${teacher.name} ${teacher.surName}</h5>
        <h6 class="card-subtitle mb-2 text-body-secondary">${teacher.departement}</h6><br>
        <p class="card-text">${teacher.message}</p> <br>
        <a href="#" class="card-link">Students</a>
        <a href="#" class="card-link">Classes</a>
      </div>
    </div>`;
    }).join("");
  
    // Attach event listener to all delete buttons
    const teacherDeleteButton = document.querySelectorAll('.teacherDeleteButton');
    
      teacherDeleteButton.forEach(button => {
        button.addEventListener('click', function() {
            const index = parseInt(button.getAttribute('data-index'), 10);
            deleteTeacher(index);
          });
      })
    };

    function deleteTeacher(index) {
        teachers.splice(index, 1);
        localStorage.setItem("teacherInfo", JSON.stringify(teachers));
        showCards();
      }

  teacherSaveBtn.addEventListener("click", function () {
    teacherDataRenderer();
    showCards();
  });