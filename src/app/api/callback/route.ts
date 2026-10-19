import { appendFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { validateCallback } from "@/lib/callback";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json(
      { ok: false, errors: { form: "We could not read that. Try again." } },
      { status: 400 },
    );
  }

  if (!body || typeof body !== "object") {
    return Response.json(
      { ok: false, errors: { form: "We could not read that. Try again." } },
      { status: 400 },
    );
  }

  const record = body as Record<string, unknown>;
  const { errors, value } = validateCallback({
    name: typeof record.name === "string" ? record.name : "",
    mobile: typeof record.mobile === "string" ? record.mobile : "",
    city: typeof record.city === "string" ? record.city : "",
    cover: typeof record.cover === "string" ? record.cover : "",
    note: typeof record.note === "string" ? record.note : "",
  });

  if (!value) {
    return Response.json({ ok: false, errors }, { status: 400 });
  }

  try {
    const dir = path.join(process.cwd(), "data");
    await mkdir(dir, { recursive: true });
    const line =
      JSON.stringify({ ...value, receivedAt: new Date().toISOString() }) + "\n";
    await appendFile(path.join(dir, "callbacks.ndjson"), line, "utf8");
  } catch {
    return Response.json(
      {
        ok: false,
        errors: { form: "We could not save that note. Try again in a moment." },
      },
      { status: 500 },
    );
  }

  return Response.json({ ok: true });
}
