const form = document.getElementById("regForm");
const status = document.getElementById("status");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    status.innerHTML = "Sending...";

    const data = {
        name: document.getElementById("name").value,
        age: document.getElementById("age").value,
        address: document.getElementById("address").value,
        email: document.getElementById("email").value,
        course: document.getElementById("course").value,
        year: document.getElementById("year").value
    };

    try {
        const res = await fetch("/api/send", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        });

        if (res.ok) {
            status.innerHTML = "✅ Sent!";
            form.reset();
        } else {
            status.innerHTML = "❌ Failed!";
        }

    } catch (err) {
        console.error(err);
        status.innerHTML = "❌ Error!";
    }
});
