//My website by Tian.K

//button even listener
document.getElementById("guess-btn").addEventListener("click", btnClicked);

function btnClicked() {
  //input
  let name = document.getElementById("q1").value.toLowerCase();

  //Question-1
  if (
    name === "psg" ||
    name === "paris saint-germain" ||
    name === "paris saint germain"
  ) {
    document.getElementById("q1-response").innerHTML = `Correct 1/1`;
    document.getElementById("q1").style.border = "3px solid green";
  } else {
    document.getElementById("q1-response").innerHTML = `Incorrect 0/1`;
    document.getElementById("q1").style.border = "3px solid red";
  }

  //input2
  let name2 = document.getElementById("q2").value.toLowerCase();

  //Question-2
  if (name2 === "five" || "5") {
    document.getElementById("q2-response").innerHTML = `Correct 1/1`;
    document.getElementById("q2").style.border = "3px solid green";
  } else {
    document.getElementById("q2-response").innerHTML = `Incorrect 0/1`;
    document.getElementById("q2").style.border = "3px solid red";
  }

  //input3
  let name3 = document.getElementById("q3").value.toLowerCase();

  //Question-3
  if (name3 === "february 5 1992") {
    document.getElementById("q3-response").innerHTML = `Correct 1/1`;
    document.getElementById("q3").style.border = "3px solid green";
  } else {
    document.getElementById("q3-response").innerHTML = `Incorrect 0/1`;
    document.getElementById("q3").style.border = "3px solid red";
  }

  //input4
  let name4 = document.getElementById("q4").value.toLowerCase();

  //Question-4
  if (name4 === "1999") {
    document.getElementById("q4-response").innerHTML = `Correct 1/1`;
    document.getElementById("q4").style.border = "3px solid green";
  } else {
    document.getElementById("q4-response").innerHTML = `Incorrect 0/1`;
    document.getElementById("q4").style.border = "3px solid red";
  }

  //input5
  let name5 = document.getElementById("q5").value.toLowerCase();

  //Question-5
  if (name5 === "argentina") {
    document.getElementById("q5-response").innerHTML = `Correct 1/1`;
    document.getElementById("q5").style.border = "3px solid green ";
  } else {
    document.getElementById("q5-response").innerHTML = `Incorrect 0/1`;
    document.getElementById("q5").style.border = "3px solid red";
  }

  //input6
  let name6 = document.getElementById("q6").value.toLowerCase();

  //Question-6
  if (name6 === "1998") {
    document.getElementById("q6-response").innerHTML = `Correct 1/1`;
    document.getElementById("q6").style.border = "3px solid green";
  } else {
    document.getElementById("q6-response").innerHTML = `Incorrect 0/1`;
    document.getElementById("q6").style.border = "3px solid red";
  }

  //input7
  let name7 = document.getElementById("q7").value.toLowerCase();

  //Question-7
  if (name7 === "yes") {
    document.getElementById("q7-response").innerHTML = `Correct 1/1`;
    document.getElementById("q7").style.border = "3px solid green";
  } else {
    document.getElementById("q7-response").innerHTML = `Incorrect 0/1`;
    document.getElementById("q7").style.border = "3px solid red";
  }
}
