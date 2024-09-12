let buttons = document.getElementsByTagName("button");
let input = document.getElementById("input");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    console.log("buttons : " + buttons[i].textContent + " ได้ทำการกด");
    
    // เพิ่มข้อความของปุ่มที่กดเข้าไปใน input div
    input.textContent += buttons[i].textContent;
  });
}
