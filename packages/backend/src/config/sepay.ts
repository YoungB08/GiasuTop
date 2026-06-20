import { SePayPgClient } from "sepay-pg-node";
import { getEnv } from "../utils/env";

let sepayClient: SePayPgClient | null = null;

export function getSePayClient(): SePayPgClient {
  if (!sepayClient) {
    const env = getEnv();
    const merchantId = env.SEPAY_MERCHANT_ID || "mock_merchant_id";
    const secretKey = env.SEPAY_SECRET_KEY || "mock_secret_key";
    const sepayEnv = env.SEPAY_ENV || "sandbox";

    sepayClient = new SePayPgClient({
      env: sepayEnv,
      merchant_id: merchantId,
      secret_key: secretKey,
    });
  }
  return sepayClient;
}
