function appendDisplay(e) {
  var display = document.getElementById("display");
  display.value += e;
}

function clearDisplay() {
  var display = document.getElementById("display");
  display.value = "";
}

function Delete(del) {
  let display = document.getElementById("display");
  display.value = display.value.toString().slice(0, -1);
}

function Calculate() {
  let display = document.getElementById("display");
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}
