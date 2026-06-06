import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { VscTerminal, VscSend, VscCloud, VscCheck } from "react-icons/vsc";

// Local fallback component representing the official Microsoft VS Code Warning/Error icon.
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

const coldStartLogs: string[] = [
  "[SYS] POST https://api.fredymata.dev/api/contact",
  "[WARN] Target serverless container is asleep (Render idle state detected).",
  "[INFO] Sending wake-up trigger to instance pool...",
  "[SYS] Spin-up initialized. Provisioning memory space...",
  "[SYS] Container active. Handshaking TLS gateway...",
  "[DB] Initializing PostgreSQL state sockets...",
  "[SYS] Pipeline fully established. Streaming payload...",
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

  // Live timer tracking the cold start duration to demonstrate latency reality
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

  // Telemetry logger interval simulating system spin-up frames
  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | undefined;
    if (status === "loading") {
      setLogIndex(0);
      interval = setInterval(() => {
        setLogIndex((prev) => {
          if (prev < coldStartLogs.length - 1) return prev + 1;
          return prev;
        });
      }, 3500); // Cycles logs progressively during the cold start
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [status]);

  // Strictly typed input/textarea change handler
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // Strictly typed form submission handler
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
      if (!res.ok) throw new Error("Failed");

      setStatus("success");
      setForm({ name: "", email: "", message: "" }); // Reset inputs
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="h-screen max-h-screen snap-start overflow-hidden bg-bg-dark text-fg flex flex-col items-center justify-start py-8 px-4 sm:px-8 md:px-12 xl:px-20 relative"
    >
      <div className="w-full max-w-7xl h-full flex flex-col min-h-0 space-y-6 mt-8">
        {/* API Header */}
        <div className="flex items-end justify-between border-b border-accent-primary/20 pb-4 flex-shrink-0">
          <div className="space-y-1">
            <h2 className="text-3xl md:text-4xl font-mono font-bold text-accent-primary">
              POST_request(<span className="text-fg">/api/contact</span>)
            </h2>
            <p className="text-fg-muted font-mono text-xs md:text-sm">
              Transmit a stateful payload directly to my database mailbox.
            </p>
          </div>
        </div>

        {/* Client Workspace Split Pane */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-6 min-h-0 w-full pb-6">
          {/* LEFT COLUMN: Request Parameters Form (Spans 5 cols) */}
          <div className="md:col-span-5 border border-fg-muted/10 rounded-xl overflow-hidden bg-bg-darker/60 backdrop-blur-md flex flex-col min-h-0">
            <div className="flex items-center justify-between border-b border-fg-muted/10 px-4 py-2.5 bg-bg-darker/80 select-none flex-shrink-0">
              <span className="text-[10px] font-mono text-accent-secondary flex items-center gap-1.5 font-bold">
                <VscTerminal /> request_parameters.env
              </span>
              <span className="w-2 h-2 rounded-full bg-accent-warning animate-pulse" />
            </div>

            <form
              onSubmit={handleSubmit}
              className="flex-1 p-5 md:p-6 flex flex-col space-y-4 overflow-y-auto custom-scrollbar font-mono text-xs"
            >
              <div className="flex flex-col space-y-1">
                <label htmlFor="name" className="text-fg-muted font-semibold">
                  // name (string, required)
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  disabled={status === "loading"}
                  value={form.name}
                  onChange={handleInputChange}
                  placeholder="<your_name />"
                  className="px-3 py-2 rounded bg-bg-dark border border-fg-muted/10 text-fg focus:outline-none focus:border-accent-primary disabled:opacity-50"
                />
              </div>

              <div className="flex flex-col space-y-1">
                <label htmlFor="email" className="text-fg-muted font-semibold">
                  // email (string, required)
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

              <div className="flex flex-col space-y-1">
                <label
                  htmlFor="message"
                  className="text-fg-muted font-semibold"
                >
                  // message (string, required)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  disabled={status === "loading"}
                  value={form.message}
                  onChange={handleInputChange}
                  placeholder="// Todo: outline opportunities, schedules, or feedback."
                  className="px-3 py-2 rounded bg-bg-dark border border-fg-muted/10 text-fg focus:outline-none focus:border-accent-primary disabled:opacity-50 resize-none"
                />
              </div>

              {/* POST/CURL Trigger Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={
                    status === "loading" ||
                    !form.name ||
                    !form.email ||
                    !form.message
                  }
                  className="w-full py-2.5 bg-accent-success/15 border border-accent-success/40 text-accent-success rounded font-semibold hover:bg-accent-success/25 hover:border-accent-success hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-40 disabled:scale-100 disabled:pointer-events-none"
                >
                  <VscSend /> EXECUTE_POST_PAYLOAD.sh
                </button>
              </div>
            </form>
          </div>

          {/* RIGHT COLUMN: Terminal Observability / Response Payload (Spans 7 cols) */}
          <div className="md:col-span-7 border border-fg-muted/10 rounded-xl overflow-hidden bg-[#181825]/90 flex flex-col min-h-0">
            <div className="flex items-center justify-between border-b border-fg-muted/10 px-5 py-3 bg-[#1e1e2e]/90 flex-shrink-0 select-none">
              <span className="text-xs font-mono text-accent-secondary uppercase tracking-widest font-bold flex items-center gap-1.5">
                <VscCloud /> console_output.json
              </span>
              <span className="text-[10px] font-mono text-fg-muted">
                {status === "loading"
                  ? `Latency: ${elapsedTime}s`
                  : "Status: IDLE"}
              </span>
            </div>

            {/* Simulated Live Console Output Canvas */}
            <div className="flex-1 p-6 overflow-y-auto custom-scrollbar font-mono text-xs md:text-sm min-h-0 relative">
              <AnimatePresence mode="wait">
                {/* 1. IDLE STATE: Live-updating JSON syntax block */}
                {status === "idle" && (
                  <motion.div
                    key="idle"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-4"
                  >
                    <div className="text-[#6c7086] italic">
                      // Raw HTTP POST Request Payload Preview
                    </div>
                    <pre className="text-[#cad3f5] leading-relaxed select-all">
                      <span className="text-[#c6a0f6]">POST</span>{" "}
                      <span className="text-[#a6e3a1]">
                        "https://api.fredymata.dev/api/contact"
                      </span>
                      {"\n"}
                      <span className="text-[#eed49f]">Content-Type:</span>{" "}
                      <span className="text-[#a6e3a1]">"application/json"</span>
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

                {/* 2. LOADING STATE: Telemetry spin-up output log tracker */}
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
                        Executing Serverless Lifecycle Thread
                      </span>
                    </div>

                    <div className="space-y-1.5 font-mono text-xs">
                      {coldStartLogs.slice(0, logIndex + 1).map((log, idx) => (
                        <div
                          key={idx}
                          className="animate-fadeIn font-semibold leading-relaxed"
                        >
                          {log}
                        </div>
                      ))}

                      {/* Active waiting pulse */}
                      {logIndex < coldStartLogs.length - 1 ? (
                        <div className="flex items-center gap-1.5 pt-2 text-[#6c7086] italic">
                          <span className="w-1.5 h-4 bg-accent-warning animate-pulse" />
                          <span>
                            Container provisioning in progress... (Can take up
                            to 40 seconds)
                          </span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-1.5 pt-2 text-[#eed49f] italic font-bold">
                          <span className="w-1.5 h-4 bg-accent-warning animate-pulse" />
                          <span>
                            Streaming HTTP request buffer... final handshaking
                            target socket...
                          </span>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}

                {/* 3. SUCCESS STATE: Return HTTP payload code */}
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

                    <pre className="text-[#a6e3a1] leading-relaxed">
                      {"{"}
                      {"\n"}
                      {"  "}
                      <span className="text-[#89b4fa]">"status"</span>:{" "}
                      <span className="text-[#eed49f]">201</span>,{"\n"}
                      {"  "}
                      <span className="text-[#89b4fa]">"response"</span>:{" "}
                      <span className="text-[#eed49f]">"CREATED"</span>,{"\n"}
                      {"  "}
                      <span className="text-[#89b4fa]">"message"</span>:{" "}
                      <span className="text-[#eed49f]">
                        "Payload mapped and saved inside Postgres DB mailbox."
                      </span>
                      ,{"\n"}
                      {"  "}
                      <span className="text-[#89b4fa]">"telemetry"</span>: {"{"}
                      {"\n"}
                      {"    "}
                      <span className="text-[#89b4fa]">"recipient"</span>:{" "}
                      <span className="text-[#eed49f]">"fredymata.dev"</span>,
                      {"\n"}
                      {"    "}
                      <span className="text-[#89b4fa]">"handshake"</span>:{" "}
                      <span className="text-[#eed49f]">"SUCCESS"</span>
                      {"\n"}
                      {"  "}
                      {"}"}
                      {"\n"}
                      {"}"}
                    </pre>

                    <button
                      onClick={() => setStatus("idle")}
                      className="mt-2 px-3 py-1 border border-accent-secondary/20 hover:border-accent-secondary hover:text-accent-secondary rounded transition-colors text-xs font-semibold"
                    >
                      [ clear_console_and_return ]
                    </button>
                  </motion.div>
                )}

                {/* 4. ERROR STATE: Return error trace packet */}
                {status === "error" && (
                  <motion.div
                    key="error"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-4"
                  >
                    <div className="flex items-center gap-2 text-accent-error border-b border-fg-muted/10 pb-2 mb-2 font-bold uppercase tracking-wider text-[11px]">
                      <VscWarning className="text-sm shrink-0" /> HTTP/1.1 500
                      Internal Server Error
                    </div>

                    <pre className="text-accent-error leading-relaxed">
                      {"{"}
                      {"\n"}
                      {"  "}
                      <span className="text-[#89b4fa]">"status"</span>:{" "}
                      <span className="text-[#eed49f]">500</span>,{"\n"}
                      {"  "}
                      <span className="text-[#89b4fa]">"error"</span>:{" "}
                      <span className="text-[#eed49f]">
                        "INTERNAL_SERVER_ERROR"
                      </span>
                      ,{"\n"}
                      {"  "}
                      <span className="text-[#89b4fa]">"reason"</span>:{" "}
                      <span className="text-[#eed49f]">
                        "API route failed to parse parameters."
                      </span>
                      ,{"\n"}
                      {"  "}
                      <span className="text-[#89b4fa]">"action"</span>:{" "}
                      <span className="text-[#eed49f]">
                        "Please retry connection sequence or reach out directly
                        at linkedin.com/in/fmata17"
                      </span>
                      {"\n"}
                      {"}"}
                    </pre>

                    <button
                      onClick={() => setStatus("idle")}
                      className="mt-2 px-3 py-1 border border-accent-error/20 hover:border-accent-error hover:text-accent-error rounded transition-colors text-xs font-semibold"
                    >
                      [ retry_session ]
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Command status bar */}
            <div className="bg-[#181825]/90 border-t border-fg-muted/10 px-5 py-3 h-12 flex items-center justify-between flex-shrink-0 font-mono text-[10px] text-fg-muted select-none">
              <span>STATE: SYNCHRONIZED</span>
              <span className="hidden sm:inline">
                PROVISION_TARGET: Render Serverless Pool
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
