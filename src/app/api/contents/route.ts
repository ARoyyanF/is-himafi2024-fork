import { NextResponse } from "next/server";

import { prisma } from "@/prisma";

export async function GET() {
  const contents = await prisma.contents.findMany({}).catch((err) => {
    return NextResponse.json(err, { status: 500 });
  });
  return NextResponse.json(contents, { status: 200 });
}