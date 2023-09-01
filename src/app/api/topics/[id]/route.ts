import ConnectMongoDb from "@/app/lib/mongodb";
import Topic from "@/app/models/topic";
import { NextResponse } from "next/server";

export async function PUT(req:Request, {params}:any) {
  const { id } = params;
  const { newTitle: title, newDescription: description } = await req.json();
  await ConnectMongoDb();
  await Topic.findByIdAndUpdate(id, {title, description});
  return NextResponse.json({ message: 'Topic Updated Success!' }, { status: 200 });
}

export async function GET(_: Request, {params}: any) {
  const { id } = params;
  await ConnectMongoDb();
  const topic = await Topic.findOne({ _id: id });
  return NextResponse.json({ topic }, { status: 200 });
}