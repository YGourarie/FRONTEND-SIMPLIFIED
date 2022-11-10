function hello() {
  if (!document.body.classList.contains("change--fool")) {
    document.body.classList += "change--fool";
  }
  else {
    document.body.classList.remove("change--fool");
  }
}


