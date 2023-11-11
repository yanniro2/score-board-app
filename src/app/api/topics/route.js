import { NextResponse } from "next/server";
import connetMongoDB from "../../../../lib/mongodb";
import Topic from "../../../../models/topic";

export async function POST(request) {
  const { title, description } = await request.json();
  await connetMongoDB();

  await Topic.create({ title, description });
  return NextResponse.json({ message: "Topic Created" }, { status: 201 });
}

export async function GET() {
  await connetMongoDB();
  const topics = await Topic.find();
  return NextResponse.json({ topics });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connetMongoDB();
  await Topic.findByIdAndDelete(id);
  return NextResponse.json({ message: "Topic Deleted" }, { status: 200 });
}
