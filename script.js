function convert(unit) {
  const input = document.getElementById("input").value;
  const seconds = parseFloat(input);
  let resultText = "";
  if (isNaN(seconds)) {
    resultText = "請輸入有效的秒數";
  } else {
    let result;
    if (unit === "minutes") result = seconds / 60;
    else if (unit === "hours") result = seconds / 3600;
    else if (unit === "days") result = seconds / 86400;
    resultText = `轉換結果：${result.toFixed(2)} ${unit}`;
  }
  document.getElementById("result").innerText = resultText;
}
