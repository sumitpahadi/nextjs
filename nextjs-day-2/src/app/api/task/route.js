import Task from "@/models/task";
import { connect } from "@/helper/db";
import { NextResponse } from "next/server";
connect();

export async function POST(request) {
  try {
    const { title, content, userid } = await request.json();
    const task = await Task.create({
      title: title,
      content: content,
      userid: userid,
    });
    console.log(task);

    return NextResponse.json({
      status: 200,
      body: {
        message: "task is inserted",
        userdata: task,
      },
    });
  } catch (error) {
    return NextResponse.json({
      status: 500,
      body: {
        message: error.message,
      },
    });
  }
}

export async function GET(request) {
  try {
    const taskdata = await Task.find({});
    console.log(taskdata);
    return NextResponse.json({
      status: 200,
      body: {
        message: "task is inserted",
        userdata: taskdata,
      },
    });
  } catch (error) {
    return NextResponse.json({
      status: 500,
      body: {
        message: error.message,
      },
    });
  
  }
}


