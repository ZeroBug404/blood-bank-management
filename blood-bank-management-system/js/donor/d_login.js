document.addEventListener("DOMContentLoaded", () => {
  const dLoginForm = document.querySelector("#dLoginForm");

  if (!dLoginForm) return;

  dLoginForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const dLoginEmail = document.querySelector("#dLoginEmail").value;
    const dLoginPassword = document.querySelector("#dLoginPassword").value;

    try {
      const response = await fetch("http://localhost:5000/api/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: dLoginEmail,
          password: dLoginPassword,
        }),
      });

      const data = await response.json();

      if (response.ok && data.user.role === "donor") {
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("userRole", data.user.role);
        localStorage.setItem("userId", data.user._id);
        window.location.href = "/donor/d_dashboard.html";
      } else {
        alert("Invalid donor credentials or not a donor!");
      }
    } catch (error) {
      alert("Error connecting to server");
      console.error(error);
    }
  });
});
