import ConnectMongoDb from "@/app/lib/mongodb";
import Topic from "@/app/models/topic";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req:Request) {
  const { title, description } = await req.json();
  await ConnectMongoDb();
  await Topic.create({ title, description });
  return NextResponse.json({message:'Topic Create Success!'},{status: 201})
}

export async function GET() {
  await ConnectMongoDb();
  const topics = await Topic.find()
  return NextResponse.json({topics})
}

export async function DELETE(req: NextRequest) {
  const id = req.nextUrl.searchParams.get('id');
  await ConnectMongoDb();
  await Topic.findByIdAndDelete(id)
  return NextResponse.json({message:'Delete Success!'},{status:200})
}