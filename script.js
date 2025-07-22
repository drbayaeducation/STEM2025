let studentsData = [];

fetch('data.json')
  .then(response => response.json())
  .then(data => {
    studentsData = data;

    const seatInput = document.getElementById('seatInput');
    const resultCard = document.getElementById('result');
    const notFoundAlert = document.getElementById('notFound');
    const studentName = document.getElementById('studentName');
    const studentScore = document.getElementById('studentScore');
    const studentRank = document.getElementById('studentRank');
    const studentTrack = document.getElementById('studentTrack');

    seatInput.addEventListener('input', function () {
      const seatNumber = this.value.trim();
      const student = studentsData.find(s => s.seatNumber === seatNumber);

      if (student) {
        studentName.textContent = student.name;
        studentScore.textContent = student.score;
        studentRank.textContent = student.rank;
        studentTrack.textContent = student.track;

        resultCard.classList.remove('d-none');
        notFoundAlert.classList.add('d-none');
      } else {
        resultCard.classList.add('d-none');
        if (seatNumber !== "") {
          notFoundAlert.classList.remove('d-none');
        } else {
          notFoundAlert.classList.add('d-none');
        }
      }
    });
  })
  .catch(error => {
    console.error("⚠️ Failed to load data.json:", error);
  });
