import { z } from "zod";

const EnvSchema = z.object({
  PORT: z.coerce.number().int().positive().optional(),

  DB_HOST: z.string().default("localhost"),
  DB_USER: z.string().default("root"),
  DB_PASSWORD: z.string().default(""),
  DB_NAME: z.string().default("giasu_kntech"),

  JWT_SECRET: z.string().min(20, "JWT_SECRET must be at least 20 chars"),
  JWT_EXPIRES_IN: z.string().default("7d"),

  CORS_ORIGINS: z.string().optional(), // comma-separated

  SEPAY_API_KEY: z.string().optional(),
  SEPAY_BANK_CODE: z.string().optional(),
  SEPAY_ACCOUNT_NUMBER: z.string().optional(),
  SEPAY_ACCOUNT_NAME: z.string().optional(),
  SEPAY_MERCHANT_ID: z.string().optional(),
  SEPAY_SECRET_KEY: z.string().optional(),
  SEPAY_ENV: z.enum(["sandbox", "production"]).default("sandbox"),
});

export type Env = z.infer<typeof EnvSchema>;

export function getEnv(): Env {
  const parsed = EnvSchema.safeParse(process.env);
  if (!parsed.success) {
    const message = parsed.error.issues
      .map((i) => `${i.path.join(".") || "env"}: ${i.message}`)
      .join("\n");
    throw new Error(`Invalid environment variables:\n${message}`);
  }
  return parsed.data;
}

