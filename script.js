
const equals = document.getElementById("equals");



function calc(operation, a, b) {


  if (typeof a !== "number" || typeof b !== "number" || Number.isNaN(a) || Number.isNaN(b)) {
    return "ошибка ввода: не передан операнд или цифра.";
  }



 
  switch (operation) {
    case "add":
      return Number((a + b).toFixed(2));
    case "multi":
      return Number((a * b).toFixed(2));
    case "sub":
      return Number((a - b).toFixed(2));
    case "div":
      if (b === 0) {
        return "Ошибка. Деление на ноль.";
      }
      return Number((a / b).toFixed(2));
    default:
      return "Неизвестная операция";
  }
}



equals.addEventListener("click", () => {

const a = document.getElementById("input1").value
const b = document.getElementById("input2").value
const operation = document.getElementById("operation").value
const result = document.getElementById("result")

if (a.trim() === "" || b.trim() === "") {
  result.textContent = "Ошибка: одно из полей пустое.";
  const input1 = document.getElementById("input1")
  const input2 = document.getElementById("input2")
  input1.style.transition = "border 0.5s ease"; // отдельно transition
input2.style.transition = "border 0.5s ease";
input1.style.border = "1px solid red";        // отдельно border
input2.style.border = "1px solid red";

   setTimeout(() => {
    if (a.trim() === "") input1.style.border = "";
    if (b.trim() === "") input2.style.border = "";
  }, 3000);
 
  return;
  
}



const resultA = Number(a.trim().replaceAll(",", "."))
const resultB = Number(b.trim().replaceAll(",", "."))


result.textContent = (`Результат: ${calc(operation, resultA, resultB)}`)
});
