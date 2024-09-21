import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({
    ok: true,
    fullName: "Phuwannat Taratipparai",
    studentId: "660610786",
  });
};
