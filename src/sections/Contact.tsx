import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      setStatus("loading");

      const res = await fetch("https://api.fredymata.dev/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Failed");

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen snap-start px-6 py-6 bg-bg-dark text-fg flex flex-col items-center justify-center"
    >
      <div className="w-full max-w-xl flex-grow space-y-6">
        {/* Section Headings */}
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl text-accent-primary font-bold">
            Contact Me
          </h2>
          <h3 className="text-3lg sm:text-xl text-fg-muted">
            Let’s make something happen!
          </h3>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-bg p-6 rounded shadow-lg border border-accent-primary space-y-4"
        >
          {/* Name */}
          <div className="flex flex-col">
            <label htmlFor="name" className="mb-1 text-sm text-fg-muted">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="<Your Name Here />"
              className="px-4 py-2 rounded bg-bg-dark border border-accent-primary focus:outline-none focus:ring-2 focus:ring-accent-primary"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-1 text-sm text-fg-muted">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="foo@bar.dev"
              className="px-4 py-2 rounded bg-bg-dark border border-accent-primary focus:outline-none focus:ring-2 focus:ring-accent-primary"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col">
            <label htmlFor="message" className="mb-1 text-sm text-fg-muted">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              placeholder="// TODO: Write a real message"
              className="px-4 py-2 rounded bg-bg-dark border border-accent-primary focus:outline-none focus:ring-2 focus:ring-accent-primary"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 bg-accent-primary text-bg font-semibold rounded hover:bg-accent-secondary transition"
          >
            Send Message
          </button>

          {/* Submission Feedback */}
          {status === "loading" && (
            <p className="text-sm text-accent-warning mt-2">
              Sending message... please wait.
            </p>
          )}
          {status === "success" && (
            <p className="text-sm text-accent-success mt-2">
              Message sent successfully!
            </p>
          )}
          {status === "error" && (
            <p className="text-sm text-accent-error mt-2">
              There was an error. Please try again.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
