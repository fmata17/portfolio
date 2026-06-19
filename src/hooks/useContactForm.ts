import {
  useEffect,
  useState,
  type ChangeEvent,
  type FormEvent,
} from "react";

import {
  contactEndpoint,
  deliveryLogs,
  initialContactForm,
} from "../data/contactContent";
import type { ContactFormState, ContactStatus } from "../types/contact";

export default function useContactForm() {
  const [status, setStatus] = useState<ContactStatus>("idle");
  const [form, setForm] = useState<ContactFormState>(initialContactForm);
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
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setStatus("loading");

      const res = await fetch(contactEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Failed to send contact message");

      setStatus("success");
      setForm(initialContactForm);
    } catch {
      setStatus("error");
    }
  };

  const isSubmitDisabled =
    status === "loading" || !form.name || !form.email || !form.message;

  return {
    elapsedTime,
    form,
    handleInputChange,
    handleSubmit,
    isSubmitDisabled,
    logIndex,
    setStatus,
    status,
  };
}
