console.log("script.js 已成功載入！");
const form = document.querySelector("#course-form");
const nameInput = document.querySelector("#name");
const studentIdInput = document.querySelector("#studentId");
const emailInput = document.querySelector("#email");
const classGradeInput = document.querySelector("#classGrade");
const courseSelect = document.querySelector("#course");
const courseDescription = document.querySelector("#course-description");
const message = document.querySelector("#message");
console.log("message =", message);
const result = document.querySelector("#result");
console.log("result =", result);
console.log("result 元素：", result);

// 不同課程的簡短介紹
const descriptions = {
  "程式設計": "學習程式語法、邏輯思考與基本程式開發。",
  "網頁設計": "學習 HTML、CSS 與 JavaScript，製作互動網頁。",
  "資料庫管理": "認識資料庫、資料表與資料管理的基本概念。",
  "資訊管理": "了解資訊科技如何應用在企業管理中。",
  "商業概論": "認識商業活動、企業經營與市場的基本知識。"
};

// 選擇課程時，更新課程介紹
courseSelect.addEventListener("change", function () {
  if (courseSelect.value === "") {
    courseDescription.textContent = "請先選擇一門課程。";
  } else {
    courseDescription.textContent =
      descriptions[courseSelect.value];
  }
});

// 監聽表單送出
form.addEventListener("submit", function (event) {
  // 阻止網頁重新整理
  event.preventDefault();

  // 清除上一次的訊息
  message.textContent = "";
  result.textContent = "";
  result.className = "";

  // 讀取使用者輸入的內容
  const studentName = nameInput.value.trim();
  const studentId = studentIdInput.value.trim();
  const email = emailInput.value.trim();
  const classGrade = classGradeInput.value.trim();
  const course = courseSelect.value;

  // 檢查資料是否完整
  if (
    studentName === "" ||
    studentId === "" ||
    email === "" ||
    classGrade === "" ||
    course === ""
  ) {
    message.textContent = "請填寫完整資料並選擇課程！";
    message.className = "error";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    message.textContent = "Email 格式不正確，請重新輸入。";
    message.className = "error";
  } else {
    // 顯示成功結果
    message.textContent = "選課申請成功！";
    message.className = "success";

    result.textContent =
      "姓名：" + studentName +
      "｜學號：" + studentId +
      "｜課程：" + course;

    result.className = "success";
  }
});

// 按下重新填寫時，清除訊息和結果
form.addEventListener("reset", function () {
  message.textContent = "";
  result.textContent = "";
  message.className = "";
  result.className = "";
  courseDescription.textContent = "請先選擇一門課程。";
});