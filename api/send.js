export default async function handler(req, res) {

    if (req.method !== "POST") {
        return res.status(405).json({ error: "Only POST allowed" });
    }

    // 🔴 PUT YOUR DISCORD WEBHOOK HERE
    const webhook = "PASTE_YOUR_WEBHOOK_HERE";

    const { name, age, address, email, course, year } = req.body;

    const payload = {
        content: `📋 NEW REGISTRATION

👤 Name: ${name}
🎂 Age: ${age}
📍 Address: ${address}
📧 Email: ${email}
📚 Course: ${course}
🏫 Year: ${year}`
    };

    try {
        const response = await fetch(webhook, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
        });

        return res.status(200).json({ success: true });

    } catch (err) {
        return res.status(500).json({ error: "Failed to send" });
    }
}
