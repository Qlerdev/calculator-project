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
      displayInput.textContent += buttons[i].textContent; //แสดงค่าที่ user กดแล้วให้แสดงหน้าจอเครื่องคิดเลข
      //เอาค่ามารวมกันใน array
      inputvalue.push(buttons[i].value); //ใช้ push เพราะจะเก็บค่าเป็น array ใช้ += ไม่ได้เพราะจะเก็บค่าเป็นข้อความธรรม
      console.log(inputvalue);
    });
  }
}

deleteRecent.addEventListener("click", function dltrecent() {});
deleteAll.addEventListener("click", function dltAll() {
  inputvalue.length = 0; //reset ค่าใน array ให้เป็นค่าว่าง
  displayInput.innerHTML = "";
});
increase.addEventListener("click", function increase() {});
decrease.addEventListener("click", function decreasee() {});
divide.addEventListener("click", function divide() {});
multiply.addEventListener("click", function multiply() {});
percent.addEventListener("click", function percent() {});

collectInputValue();
