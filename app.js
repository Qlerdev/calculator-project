let buttons = document.getElementsByTagName("button");
let displayInput = document.getElementById("input");
const deleteAll = document.getElementById("delete-all");
const deleteRecent = document.getElementById("delete-recent");
const percent = document.getElementById("percent");
const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");
const multiply = document.getElementById("multiply");
const divide = document.getElementById("divide");

let inputvalue = []; //เก็บค่าที่ user ทำการกด

function collectInputValue() {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
      // เพิ่มข้อความของปุ่มที่กดเข้าไปใน input div
      displayInput.textContent += buttons[i].textContent;
      //เอาค่ามารวมกันใน array
      inputvalue.push(buttons[i].value);
      console.log(inputvalue);
    });
  }
}

increase.addEventListener("click", () => {});
collectInputValue();
