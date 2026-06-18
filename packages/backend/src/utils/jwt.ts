import jwt from "jsonwebtoken";
import { getEnv } from "./env";

type JwtUserPayload = {
  sub: string;
  email: string;
  role: "STUDENT" | "TUTOR" | "ADMIN";
};

export function signAccessToken(payload: JwtUserPayload, expiresIn?: string): string {
  const env = getEnv();
  // jsonwebtoken typings can be strict; cast options to SignOptions.
  return jwt.sign(payload, env.JWT_SECRET, {
    expiresIn: (expiresIn || env.JWT_EXPIRES_IN) as any,
  } as jwt.SignOptions);
}

export function verifyAccessToken(token: string): JwtUserPayload {
  const env = getEnv();
  return jwt.verify(token, env.JWT_SECRET) as JwtUserPayload;
}

