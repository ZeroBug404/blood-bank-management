document.getElementById("dWelcome").innerText = "Welcome Donor";

// Prefill email (can be dynamically set)
document.getElementById("br-email").value = "donor@gmail.com";

// Handle form submission
document.getElementById("br-form").addEventListener("submit", async (event) => {
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
  let email = document.getElementById("br-email").value;

  if (bloodGrp !== "Enter Blood Group") {
    const requestData = {
      firstName: fName,
      lastName: lName,
      age,
      gender,
      bloodGroup: bloodGrp,
      reason,
      quantity,
      address,
      phone,
      description,
      email
    };

    try {
      const response = await fetch("http://localhost:5000/api/blood-requests", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(requestData)
      });

      if (response.ok) {
        alert("Blood Request Submitted!");
        document.getElementById("br-form").reset(); // optional: clears form
      } else {
        const errorData = await response.json();
        alert(`Failed to submit: ${errorData.message || 'Unknown error'}`);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while submitting the form.");
    }
  } else {
    alert("Input All Fields!");
  }
});
