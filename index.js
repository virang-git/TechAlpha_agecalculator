let userinput = document.getElementById("date");

function calculateage() {
  if (userinput.value === "") {
    alert("Please Select A Date..!");
    return;
  }
  let birthdate = new Date(userinput.value);

  let d1 = birthdate.getDate();
  let m1 = birthdate.getMonth() + 1;
  let y1 = birthdate.getFullYear();

  let today = new Date();

  let d2 = today.getDate();
  let m2 = today.getMonth() + 1;
  let y2 = today.getFullYear();

  let d3, m3, y3;

  y3 = y2 - y1;

  if (m2 >= m1) {
    m3 = m2 - m1;
  } else {
    y3--;
    m3 = 12 + m2 - m1;
  }

  if (d2 >= d1) {
    d3 = d2 - d1;
  } else {
    m3--;
    d3 = daysinmonth(y1, m1) + d2 - d1;
  }

  if (m3 < 0) {
    m3 = 11;
    y3--;
  }

  document.getElementById("year").innerHTML = y3;
  document.getElementById("month").innerHTML = m3;
  document.getElementById("day").innerHTML = d3;
}

function daysinmonth(year, month) {
  return new Date(year, month, 0).getDate();
}
