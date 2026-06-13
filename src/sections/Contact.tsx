import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { VscCheck, VscCloud, VscSend, VscTerminal } from "react-icons/vsc";

const VscWarning: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 16 16"
    fill="currentColor"
    className={props.className || "w-4 h-4"}
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.56 1h.88l6.54 12.26-.44.74H1.44L1 13.26 7.56 1zM8 5c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1s1-.45 1-1V6c0-.55-.45-1-1-1zm0 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
    />
  </svg>
);

const deliveryLogs: string[] = [
  "[FORM] Validating message payload",
  "[API] Opening contact route",
  "[MAIL] Mapping note to inbox notification",
  "[DB] Saving a delivery trace",
  "[DONE] Message accepted by contact pipeline",
];

const conversationPrompts = [
  "Role scope and team context",
  "ML, full-stack, or automation needs",
  "Timeline, interview process, or next step",
];

interface FormState {
  name: string;
  email: string;
  message: string;
}

type StatusType = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<StatusType>("idle");
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });
  const [logIndex, setLogIndex] = useState<number>(0);
  const [elapsedTime, setElapsedTime] = useState<number>(0);

  useEffect(() => {
    let timer: ReturnType<typeof setInterval> | undefined;

    if (status === "loading") {
      timer = setInterval(() => {
        setElapsedTime((prev) => prev + 1);
      }, 1000);
    } else {
      setElapsedTime(0);
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [status]);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | undefined;

    if (status === "loading") {
      setLogIndex(0);
      interval = setInterval(() => {
        setLogIndex((prev) => {
          if (prev < deliveryLogs.length - 1) return prev + 1;
          return prev;
        });
      }, 900);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [status]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setStatus("loading");

      const res = await fetch("https://api.fredymata.dev/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Failed to send contact message");

      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const isSubmitDisabled =
    status === "loading" || !form.name || !form.email || !form.message;

  return (
    <section
      id="contact"
      className="h-screen max-h-screen
                overflow-hidden bg-bg-dark
                text-fg flex items-start justify-center
                pt-12 md:pt-16
                px-4 md:px-8
                relative
                snap-start"
    >
      <div className="w-full max-w-8xl h-full max-h-[calc(100vh-2rem)] md:max-h-[90vh] flex flex-col min-h-0 gap-3 sm:gap-4 md:gap-6">
        <div
          className="flex flex-col md:flex-row md:items-end
                 justify-between border-b border-accent-primary/20
                 gap-2 md:gap-4 flex-shrink-0"
        >
          <div className="space-y-0.5 md:space-y-1">
            <h2 className="text-accent-primary text-3xl md:text-4xl lg:text-5xl font-bold">
              Contact
            </h2>

            <p className="text-fg-muted text-xs md:text-sm lg:text-md">
              Send a concise note about the role, the problem space, or the next
              useful step.
            </p>
          </div>
        </div>

        <div
          className="flex-1 min-h-0 grid
                    grid-rows-[minmax(310px,0.95fr)_minmax(0,1fr)]
                    sm:grid-rows-[minmax(320px,0.9fr)_minmax(0,1fr)]
                    md:grid-rows-1 md:grid-cols-12
                    gap-3 md:gap-4 lg:gap-6 pb-4 md:pb-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.35 }}
            transition={{ duration: 0.35 }}
            className="md:col-span-5 border border-fg-muted/10 rounded-lg overflow-hidden bg-bg-darker/70 backdrop-blur-md flex flex-col min-h-0"
          >
            <div className="flex items-center justify-between border-b border-fg-muted/10 px-4 py-2.5 bg-bg-darker/80 select-none flex-shrink-0">
              <span className="text-[10px] font-mono text-accent-secondary flex items-center gap-1.5 font-bold">
                <VscTerminal /> message.payload
              </span>
              <span
                className={`w-2 h-2 rounded-full ${
                  status === "loading"
                    ? "bg-accent-warning animate-pulse"
                    : "bg-accent-success/80"
                }`}
              />
            </div>

            <form
              onSubmit={handleSubmit}
              className="flex-1 min-h-0 p-4 sm:p-5 md:p-6 flex flex-col gap-3 overflow-y-auto custom-scrollbar font-mono text-xs"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-2 gap-3">
                <div className="flex flex-col gap-1">
                  <label htmlFor="name" className="text-fg-muted font-semibold">
                    // name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    disabled={status === "loading"}
                    value={form.name}
                    onChange={handleInputChange}
                    placeholder="Your name"
                    className="px-3 py-2 rounded bg-bg-dark border border-fg-muted/10 text-fg focus:outline-none focus:border-accent-primary disabled:opacity-50"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="email"
                    className="text-fg-muted font-semibold"
                  >
                    // email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    disabled={status === "loading"}
                    value={form.email}
                    onChange={handleInputChange}
                    placeholder="recruiter@company.ai"
                    className="px-3 py-2 rounded bg-bg-dark border border-fg-muted/10 text-fg focus:outline-none focus:border-accent-primary disabled:opacity-50"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1 flex-1 min-h-[108px]">
                <label
                  htmlFor="message"
                  className="text-fg-muted font-semibold"
                >
                  // message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  disabled={status === "loading"}
                  value={form.message}
                  onChange={handleInputChange}
                  placeholder="Role, team, timeline, and what you want to explore."
                  className="flex-1 min-h-[96px] px-3 py-2 rounded bg-bg-dark border border-fg-muted/10 text-fg focus:outline-none focus:border-accent-primary disabled:opacity-50 resize-none"
                />
              </div>

              <div className="rounded-md border border-fg-muted/10 bg-bg-dark/60 p-3 text-[11px] text-fg-muted leading-relaxed">
                <span className="text-accent-info font-bold">Best signal:</span>{" "}
                share the problem you are hiring for and the kind of ownership
                the role needs.
              </div>

              <button
                type="submit"
                disabled={isSubmitDisabled}
                className="w-full py-2.5 bg-accent-success/15 border border-accent-success/40 text-accent-success rounded font-semibold hover:bg-accent-success/25 hover:border-accent-success hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-40 disabled:scale-100 disabled:pointer-events-none"
              >
                <VscSend /> Send message
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 0.35, delay: 0.05 }}
            className="md:col-span-7 border border-fg-muted/10 rounded-lg overflow-hidden bg-bg-darker/80 flex flex-col min-h-0"
          >
            <div className="flex items-center justify-between border-b border-fg-muted/10 px-4 md:px-5 py-3 bg-bg-darker/90 flex-shrink-0 select-none">
              <span className="text-[10px] md:text-xs font-mono text-accent-secondary uppercase tracking-widest font-bold flex items-center gap-1.5">
                <VscCloud /> contact_route.json
              </span>
              <span className="text-[10px] font-mono text-fg-muted">
                {status === "loading" ? `sending: ${elapsedTime}s` : "ready"}
              </span>
            </div>

            <div className="flex-1 min-h-0 p-4 sm:p-5 md:p-6 overflow-y-auto custom-scrollbar font-mono text-xs md:text-sm relative">
              <AnimatePresence mode="wait">
                {status === "idle" && (
                  <motion.div
                    key="idle"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-4"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
                      {conversationPrompts.map((prompt) => (
                        <div
                          key={prompt}
                          className="border border-fg-muted/10 rounded-md bg-bg-dark/55 p-3 text-[11px] md:text-xs text-fg-muted leading-relaxed"
                        >
                          <VscCheck className="text-accent-success mb-1" />
                          {prompt}
                        </div>
                      ))}
                    </div>

                    <div className="text-[#6c7086] italic">
                      // Live payload preview
                    </div>

                    <pre className="whitespace-pre-wrap break-words text-[#cad3f5] leading-relaxed select-all">
                      <span className="text-[#c6a0f6]">POST</span>{" "}
                      <span className="text-[#a6e3a1]">
                        "https://api.fredymata.dev/api/contact"
                      </span>
                      {"\n\n"}
                      {"{"}
                      {"\n"}
                      {"  "}
                      <span className="text-[#89b4fa]">"name"</span>:{" "}
                      <span className="text-[#a6e3a1]">
                        "{form.name || ""}"
                      </span>
                      ,{"\n"}
                      {"  "}
                      <span className="text-[#89b4fa]">"email"</span>:{" "}
                      <span className="text-[#a6e3a1]">
                        "{form.email || ""}"
                      </span>
                      ,{"\n"}
                      {"  "}
                      <span className="text-[#89b4fa]">"message"</span>:{" "}
                      <span className="text-[#a6e3a1]">
                        "{form.message || ""}"
                      </span>
                      {"\n"}
                      {"}"}
                    </pre>
                  </motion.div>
                )}

                {status === "loading" && (
                  <motion.div
                    key="loading"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-3 text-accent-warning"
                  >
                    <div className="flex items-center gap-2 border-b border-fg-muted/10 pb-2 mb-1">
                      <span className="w-2 h-2 rounded-full bg-accent-warning animate-ping" />
                      <span className="font-bold uppercase tracking-wider text-[11px]">
                        Sending Contact Payload
                      </span>
                    </div>

                    <div className="space-y-1.5 text-xs">
                      {deliveryLogs.slice(0, logIndex + 1).map((log) => (
                        <div
                          key={log}
                          className="font-semibold leading-relaxed"
                        >
                          {log}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {status === "success" && (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-4"
                  >
                    <div className="flex items-center gap-2 text-accent-success border-b border-fg-muted/10 pb-2 mb-2 font-bold uppercase tracking-wider text-[11px]">
                      <VscCheck className="text-sm shrink-0" /> HTTP/1.1 201
                      Created
                    </div>

                    <pre className="whitespace-pre-wrap break-words text-[#a6e3a1] leading-relaxed">
                      {"{"}
                      {"\n"}
                      {"  "}
                      <span className="text-[#89b4fa]">"status"</span>:{" "}
                      <span className="text-[#eed49f]">201</span>,{"\n"}
                      {"  "}
                      <span className="text-[#89b4fa]">"message"</span>:{" "}
                      <span className="text-[#eed49f]">
                        "Message received. I will review the context and reply."
                      </span>
                      ,{"\n"}
                      {"  "}
                      <span className="text-[#89b4fa]">"route"</span>:{" "}
                      <span className="text-[#eed49f]">"fredymata.dev"</span>
                      {"\n"}
                      {"}"}
                    </pre>

                    <button
                      onClick={() => setStatus("idle")}
                      className="mt-2 px-3 py-1 border border-accent-secondary/20 hover:border-accent-secondary hover:text-accent-secondary rounded transition-colors text-xs font-semibold"
                    >
                      clear console
                    </button>
                  </motion.div>
                )}

                {status === "error" && (
                  <motion.div
                    key="error"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-4"
                  >
                    <div className="flex items-center gap-2 text-accent-error border-b border-fg-muted/10 pb-2 mb-2 font-bold uppercase tracking-wider text-[11px]">
                      <VscWarning className="text-sm shrink-0" /> Delivery
                      failed
                    </div>

                    <pre className="whitespace-pre-wrap break-words text-accent-error leading-relaxed">
                      {"{"}
                      {"\n"}
                      {"  "}
                      <span className="text-[#89b4fa]">"status"</span>:{" "}
                      <span className="text-[#eed49f]">500</span>,{"\n"}
                      {"  "}
                      <span className="text-[#89b4fa]">"next_step"</span>:{" "}
                      <span className="text-[#eed49f]">
                        "Please retry or reach out directly at
                        linkedin.com/in/fmata17"
                      </span>
                      {"\n"}
                      {"}"}
                    </pre>

                    <button
                      onClick={() => setStatus("idle")}
                      className="mt-2 px-3 py-1 border border-accent-error/20 hover:border-accent-error hover:text-accent-error rounded transition-colors text-xs font-semibold"
                    >
                      retry
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="bg-bg-darker/90 border-t border-fg-muted/10 px-4 md:px-5 py-3 h-12 flex items-center justify-between flex-shrink-0 font-mono text-[10px] text-fg-muted select-none">
              <span>STATE: READY</span>
              <span className="hidden sm:inline">
                RESPONSE_TARGET: recruiting_or_collaboration
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
