const name = document.getElementById("username"); //declare the value of user Name
const pass = document.getElementById("password"); //declare the value of password
const c_pass = document.getElementById("C-password"); //declare the value of confirm-password
const result = document.getElementById("result-display"); //declare the result element

document.getElementById("btn").addEventListener("click", function () {
  if (pass.value === c_pass.value) {
    result.textContent = "your's details is Correct";
    result.style.color = "Green";
    result.style.textShadow = "text-shadow: 1px 1px 8px green;";
  } else {
    result.innerHTML = "your's details Both is Wrong";
    result.style.color = "Red";
    result.style.textShadow = "text-shadow: 1px 1px 8px red;";
  }
});
