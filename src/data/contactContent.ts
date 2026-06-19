import type { ContactFormState } from "../types/contact";

export const contactEndpoint = "https://api.fredymata.dev/api/contact";

export const initialContactForm: ContactFormState = {
  name: "",
  email: "",
  message: "",
};

export const deliveryLogs: string[] = [
  "[FORM] Validating message payload",
  "[API] Opening contact route",
  "[MAIL] Mapping note to inbox notification",
  "[DB] Saving a delivery trace",
  "[DONE] Message accepted by contact pipeline",
];

export const conversationPrompts = [
  "Role scope and team context",
  "ML, full-stack, or automation needs",
  "Timeline, interview process, or next step",
];
