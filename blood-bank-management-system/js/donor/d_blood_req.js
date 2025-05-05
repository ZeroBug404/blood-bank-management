document.getElementById("dWelcome").innerText = "Welcome Donor";

//blood request form
document.getElementById("br-email").value = "donor@gmail.com"; // will  be added dynamically

document.getElementById("br-form").addEventListener("submit", (event) => {
  event.preventDefault();

  let fName = document.getElementById("br-fName").value;
  let lName = document.getElementById("br-lName").value;
  let age = document.getElementById("br-age").value;
  let gender = document.querySelector('input[name="br-gender"]:checked').value;
  let bloodGrp = document.getElementById("br-bloodGrp").value;
  let reason = document.getElementById("br-reason").value;
  let quantity = document.getElementById("br-quantity").value;
  let address = document.getElementById("br-address").value;
  let phone = document.getElementById("br-phone").value;
  let description = document.getElementById("br-description").value;

  if (bloodGrp !== "Enter Blood Group") {
    //will be stored in db
    console.log(`Name: ${fName} ${lName}`);
    console.log(`Age: `, age);
    console.log("Gender: ", gender);
    console.log(`Blood Group: `, bloodGrp);
    console.log(`Reason: `, reason);
    console.log(`Quantity: `, quantity);
    console.log(`Address: `, address);
    console.log(`Phone: `, phone);
    console.log(`Description: `, description);
    alert("Blood Request Submitted!");
  } else {
    alert("Input All Fields!");
  }
});
