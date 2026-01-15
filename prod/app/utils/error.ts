import { toast } from "sonner";
import axios from "axios";

export function getErrorMessage(error: unknown): string {
  // Axios error
  if (axios.isAxiosError(error)) {
    return (
      error.response?.data?.message ||
      error.response?.statusText ||
      error.message ||
      "Network request failed"
    );
  }

  // class error
  if (error instanceof Error) {
    return error.message;
  }

  // React Router response error
  if (typeof error === "object" && error && "statusText" in error) {
    return String((error as any).statusText);
  }

  return "Something went wrong";
}

export function handleGlobalError(error: unknown) {
  const message = getErrorMessage(error);

  toast.error(message);

  console.error("GLOBAL ERROR:", error);
}
