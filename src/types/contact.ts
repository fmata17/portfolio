export interface ContactFormState {
  name: string;
  email: string;
  message: string;
}

export type ContactStatus = "idle" | "loading" | "success" | "error";
