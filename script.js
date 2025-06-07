
const equals = document.getElementById("equals");



function calc(operation, a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return "ошибка ввода: не передан операнд или цифра.";
  }

  if (Number.isNaN(a) || Number.isNaN(b)) {
    return "Легчайшая для величайшего";
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
const a = Number(document.getElementById("input1").value)
const b = Number(document.getElementById("input2").value)
const operation = document.getElementById("operation").value
const result = document.getElementById("result")

document.getElementById("result").innerHTML = `
    Результат: ${result.textContent = (calc(operation, a, b))}
    <img src="5f5e600d53beb17488a7341f.png" alt="иконка" style="margin-left: 10px; vertical-align: middle; width:200px;">
  `;
});
