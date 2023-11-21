import connectMongoDB from "@/libs/mongodb";
import Score from "../../../../models/score";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;
  const {
    newTry_one: try_one,
    newTry_tne: try_two,
    newConversion_one: conversion_one,
    newConversion_two: conversion_two,
    newPenalty_one: penalty_one,
    newPenalty_tne: penalty_two,
    newDropGoal_one: dropGoal_one,
    newDropGoal_two: dropGoal_two,
    newDuration: duration,
    newAddional: addional_time,
  } = await request.json();
  await connectMongoDB();
  await Score.findByIdAndUpdate(id, {
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
  return NextResponse.json({ message: "Score updated" }, { status: 200 });
}

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const score = await Score.findOne({ _id: id });
  return NextResponse.json({ score }, { status: 200 });
}
