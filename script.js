const meetingBtn = document.getElementById("meeting-btn");
const calendarContainer = document.getElementById("calendar-container");
const confirmBtn = document.getElementById("confirm-btn");
const meetingDate = document.getElementById("meeting-date");

// קובע שהתאריך ברירת מחדל יהיה היום
const today = new Date().toISOString().split('T')[0];
meetingDate.value = today;

// כשמשתמש לוחץ על "תאם פגישה"
meetingBtn.addEventListener("click", () => {
  calendarContainer.style.display = "block"; // מציג את לוח השנה
});

// כשמשתמש לוחץ על "אשר תאריך"
confirmBtn.addEventListener("click", () => {
  const date = meetingDate.value;
  if (date) {
    alert(`נקבעה פגישה לתאריך: ${date}`);
    calendarContainer.style.display = "none"; // מסתיר שוב את הלוח
  } else {
    alert("אנא בחר תאריך לפני האישור.");
  }
});
