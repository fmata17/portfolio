import ContactConsolePanel from "../components/Contact/ContactConsolePanel";
import ContactFormPanel from "../components/Contact/ContactFormPanel";
import ContactHeader from "../components/Contact/ContactHeader";

import useContactForm from "../hooks/useContactForm";

export default function Contact() {
  const {
    elapsedTime,
    form,
    handleInputChange,
    handleSubmit,
    isSubmitDisabled,
    logIndex,
    setStatus,
    status,
  } = useContactForm();

  return (
    <section
      id="contact"
      className="h-screen max-h-screen
                overflow-hidden bg-bg-dark
                text-fg flex items-start justify-center
                pt-12 xl:pt-16
                px-4 xl:px-8
                relative
                snap-start"
    >
      <div className="w-full max-w-8xl h-full max-h-[calc(100vh-2rem)] md:max-h-[90vh] flex flex-col min-h-0 gap-3 sm:gap-4 md:gap-6">
        <ContactHeader />

        <div
          className="flex-1 min-h-0 grid
                    grid-rows-[minmax(310px,0.95fr)_minmax(0,1fr)]
                    sm:grid-rows-[minmax(320px,0.9fr)_minmax(0,1fr)]
                    md:grid-rows-1 md:grid-cols-12
                    gap-3 md:gap-4 lg:gap-6 pb-4 md:pb-6"
        >
          <ContactFormPanel
            form={form}
            isSubmitDisabled={isSubmitDisabled}
            onInputChange={handleInputChange}
            onSubmit={handleSubmit}
            status={status}
          />

          <ContactConsolePanel
            elapsedTime={elapsedTime}
            form={form}
            logIndex={logIndex}
            onClear={() => setStatus("idle")}
            onRetry={() => setStatus("idle")}
            status={status}
          />
        </div>
      </div>
    </section>
  );
}
