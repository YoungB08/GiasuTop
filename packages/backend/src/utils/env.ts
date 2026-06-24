import { z } from "zod";

const EnvSchema = z.object({
  PORT: z.string().optional(),
  TRUST_PROXY_HOPS: z.coerce.number().int().min(0).default(0),

  DB_HOST: z.string().default("localhost"),
  DB_USER: z.string().default("root"),
  DB_PASSWORD: z.string().default(""),
  DB_NAME: z.string().default("giasu_kntech"),

  JWT_SECRET: z.string().min(20, "JWT_SECRET must be at least 20 chars"),
  JWT_EXPIRES_IN: z.string().default("7d"),

  CORS_ORIGINS: z.string().optional(), // comma-separated
  PUBLIC_API_URL: z.string().url().or(z.literal("")).optional(),
  PUBLIC_WEB_URL: z.string().url().or(z.literal("")).optional(),

  SEPAY_API_KEY: z.string().optional(),
  SEPAY_BANK_CODE: z.string().optional(),
  SEPAY_ACCOUNT_NUMBER: z.string().optional(),
  SEPAY_ACCOUNT_NAME: z.string().optional(),
  SEPAY_QR_TEMPLATE: z.enum(["", "compact", "qronly", "standee"]).default("compact"),
  SEPAY_QR_SHOW_INFO: z.coerce.boolean().default(true),
  SEPAY_QR_DOWNLOAD: z.coerce.boolean().default(false),
  SEPAY_QR_FULL_ACC: z.coerce.boolean().default(false),
  SEPAY_QR_STORE_NAME: z.string().optional(),
  SEPAY_MERCHANT_ID: z.string().optional(),
  SEPAY_SECRET_KEY: z.string().optional(),
  SEPAY_ENV: z.enum(["", "sandbox", "production"]).default("sandbox"),

  ZALO_BOT_TOKEN: z.string().optional(),
  ZALO_ADMIN_CHAT_IDS: z.string().optional(), // comma-separated chat ids
  ZALO_BOT_API_URL: z.string().default("https://bot-api.zaloplatforms.com"),

  VAPID_PUBLIC_KEY: z.string().optional(),
  VAPID_PRIVATE_KEY: z.string().optional(),
  VAPID_SUBJECT: z.string().default("mailto:admin@kntech.site"),
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

