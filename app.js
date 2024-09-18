let buttons = document.getElementsByTagName("button");
let displayInput = document.getElementById("input");
const deleteAll = document.getElementById("delete-all");
const deleteRecent = document.getElementById("delete-recent");
const percent = document.getElementById("percent");
const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");
const multiply = document.getElementById("multiply");
const divide = document.getElementById("divide");
const equals = document.getElementById("equals");

let inputvalue = ""; // เก็บค่าที่ user ทำการกด
let result1 = null;
let result2 = null;
let operator = null;

function collectInputValue() {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
      // ตรวจสอบว่าไม่ใช่ปุ่มเครื่องหมายคำนวณหรือปุ่มพิเศษอื่นๆ
      if (
        buttons[i].id !== "delete-all" &&
        buttons[i].id !== "delete-recent" &&
        buttons[i].id !== "equals" &&
        buttons[i].id !== "increase" &&
        buttons[i].id !== "decrease" &&
        buttons[i].id !== "multiply" &&
        buttons[i].id !== "divide"
      ) {
        displayInput.textContent += buttons[i].textContent; // แสดงค่าที่ user กดแล้วให้แสดงหน้าจอเครื่องคิดเลข
        inputvalue += buttons[i].value; // เอาค่าแต่ละปุ่มมาต่อกัน
      }
    });
  }
}

// Event listeners สำหรับเครื่องหมายคำนวณ
increase.addEventListener("click", function () {
  if (inputvalue) {
    result1 = parseFloat(inputvalue);
    inputvalue = ""; // รีเซ็ตค่าเพื่อรับ result2
    operator = "+";
    displayInput.textContent += "+"; // แสดงเครื่องหมายบนหน้าจอ
  }
});

decrease.addEventListener("click", function () {
  if (inputvalue) {
    result1 = parseFloat(inputvalue);
    inputvalue = "";
    operator = "-";
    displayInput.textContent += "-"; // แสดงเครื่องหมายบนหน้าจอ
  }
});

multiply.addEventListener("click", function () {
  if (inputvalue) {
    result1 = parseFloat(inputvalue);
    inputvalue = "";
    operator = "*";
    displayInput.textContent += "*"; // แสดงเครื่องหมายบนหน้าจอ
  }
});

divide.addEventListener("click", function () {
  if (inputvalue) {
    result1 = parseFloat(inputvalue);
    inputvalue = "";
    operator = "/";
    displayInput.textContent += "/"; // แสดงเครื่องหมายบนหน้าจอ
  }
});

// Event listener สำหรับการคำนวณเมื่อกดเครื่องหมาย =
equals.addEventListener("click", function () {
  if (inputvalue) {
    result2 = parseFloat(inputvalue);
    let sum = 0;

    switch (operator) {
      case "+":
        sum = result1 + result2;
        break;
      case "-":
        sum = result1 - result2;
        break;
      case "*":
        sum = result1 * result2;
        break;
      case "/":
        sum = result1 / result2;
        break;
      case "%":
        sum = result1% result2;
        break;
    }

    displayInput.textContent = sum;
    inputvalue = sum.toString(); // อัปเดต inputvalue เพื่อให้สามารถใช้ผลลัพธ์นี้กับการคำนวณถัดไป
    result1 = null;
    result2 = null;
    operator = null;
  }
});

// Event listeners สำหรับการลบ
deleteRecent.addEventListener("click", function () {
  inputvalue = inputvalue.slice(0, -1);
  displayInput.textContent = displayInput.textContent.slice(0, -1);
});

deleteAll.addEventListener("click", function () {
  inputvalue = "";
  result1 = null;
  result2 = null;
  operator = null;
  displayInput.textContent = "";
});

// เก็บค่าที่ user ทำการกด
collectInputValue();
