import { z } from "zod";

class ValidationService {
  static emailSchema = z.string().email({ message: "Invalid email address" });
  static passwordSchema = z
    .string()
    .min(8, { message: "Password must be at least 8 characters" })
    .regex(/[A-Z]/, {
      message: "Password must contain at least one uppercase letter",
    })
    .regex(/[0-9]/, { message: "Password must contain at least one number" });

  static validateBySchema(payload, schema) {
    if (!payload) {
      return { success: false, message: "Email is required" };
    }
    if (!schema) {
      console.error("Schema not recived");
      return;
    }
    const result = schema.safeParse(payload);

    const { success, data, error } = result;

    if (success) {
      return { success, data };
    } else {
      const errorMessage =
        error.issues?.[0]?.message || "Validation error, try again";
      return { success: false, message: errorMessage };
    }
  }
}

export default ValidationService;
