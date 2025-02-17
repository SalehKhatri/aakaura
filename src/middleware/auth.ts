import { NextRequest, NextResponse } from "next/server";

const ADMIN_EMAIL = process.env.ADMIN_EMAIL!;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD!;

export function authenticate(req: NextRequest) {
  const authHeader = req.headers.get("authorization");

  if (!authHeader || !authHeader.startsWith("Basic ")) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const base64Credentials = authHeader.split(" ")[1];
  const credentials = atob(base64Credentials).split(":");
  const [email, password] = credentials;

  if (email !== ADMIN_EMAIL || password !== ADMIN_PASSWORD) {
    return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
  }

  return null; // Authenticated successfully
}
