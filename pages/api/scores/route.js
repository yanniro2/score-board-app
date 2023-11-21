import connectMongoDB from "@/libs/mongodb";
import Score from "../../../models/score";
import { NextResponse } from "next/server";

export async function POST(request) {
  const {
    try_one,
    try_two,
    conversion_one,
    conversion_two,
    penalty_one,
    penalty_two,
    dropGoal_one,
    dropGoal_two,
    duration,
    addional_time,
  } = await request.json();
  await connectMongoDB();
  await Score.create({
    try_one,
    try_two,
    conversion_one,
    conversion_two,
    penalty_one,
    penalty_two,
    dropGoal_one,
    dropGoal_two,
    duration,
    addional_time,
  });
  return NextResponse.json({ message: "Score Created" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const score = await Score.find();
  return NextResponse.json({ score });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Score.findByIdAndDelete(id);
  return NextResponse.json({ message: "Score deleted" }, { status: 200 });
}
