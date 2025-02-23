function changePage(pageNumber) {
  //if pageNumber is 4 display success and return
  if (pageNumber === 1) {
    let error = false;
    const inputs = document.querySelectorAll(".input-1");

    inputs.forEach((elem) => {
      checkError(elem);
      elem.addEventListener("input", removeErrorOnInput);
    });

    function checkError(params) {
      if (params.type === "email" && !isValidEmail(params.value.trim())) {
        params.classList.add("error");
        error = true;
      } else if (params.value.trim() === "") {
        params.classList.add("error");
        error = true;
      } else {
        params.classList.remove("error");
      }
    }
    function isValidEmail(email) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(email);
    }

    function removeErrorOnInput(event) {
      if (event.target.type === "email" && isValidEmail(event.target.trim())) {
        event.target.classList.remove("error");
      } else if (event.target.value.trim() != "") {
        event.target.classList.remove("error");
      }
    }

    if (error) return;
  }
  document.getElementById("p" + pageNumber).style.display = "none";
  document.getElementById("p" + (pageNumber + 1)).style.display = "block";

  if (pageNumber === 4) {
    return;
  }

  document.getElementById("n" + pageNumber).classList.remove("active");
  document.getElementById("n" + (pageNumber + 1)).classList.add("active");
}
document.getElementById("form").addEventListener("click", function (e) {
  e.preventDefault();
});

function previousPage(pageNumber) {
  //if pageNumber is 4 display success and return

  document.getElementById("p" + pageNumber).style.display = "none";
  document.getElementById("p" + (pageNumber - 1)).style.display = "block";

  if (pageNumber === 4) {
    return;
  }

  document.getElementById("n" + pageNumber).classList.remove("active");
  document.getElementById("n" + (pageNumber - 1)).classList.add("active");
}
document.getElementById("form").addEventListener("click", function (e) {
  e.preventDefault();
});

function togglePrice(params) {}

document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("toggle");
  const priceMonthly = document.querySelectorAll(".price-monthly");
  const priceYearly = document.querySelectorAll(".price-yearly");
  const freeText = document.querySelectorAll(".free-text");

  toggle.addEventListener("change", function () {
    if (toggle.checked) {
      priceMonthly.forEach((price) => (price.style.display = "none"));
      priceYearly.forEach((price) => (price.style.display = "block"));
      freeText.forEach((text) => (text.style.display = "block"));
    } else {
      priceMonthly.forEach((price) => (price.style.display = "block"));
      priceYearly.forEach((price) => (price.style.display = "none"));
      freeText.forEach((text) => (text.style.display = "none"));
    }
  });
});
