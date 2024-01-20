import Task from "@/models/task";
import { connect } from "@/helper/db";
import { NextResponse } from "next/server";
connect();

export async function PUT(request, { params }) {
  try {
    const { taskid } = params;
    console.log("id is",taskid);
    // const findtask = Task.findOne({ userid:taskid });
    const { title, content, addeddate } = await request.json();
    console.log(title,content,addeddate)
    const updatetask = await Task.updateOne(
      { userid: taskid },
      { $set: { title, content, addeddate } }
    );
    console.log(updatetask)

    return NextResponse.json({
      status: 200,
      update: updatetask,
      msg: "task is updated",
    });
  } catch (error) {
    return NextResponse.json({
      status: 500,

      msg: error,
    });
  }
}

export async function DELETE(request,{params})
{
  try {
    const {taskid}=params
    console.log("taskk is is ",taskid)
  const delettask=await Task.deleteOne({userid:taskid})
  return NextResponse.json(
    {
      status:200,
      msg:"task is deleted"
    }
  )
    
  } catch (error) {
    return NextResponse.json(
      {
        status:500,
        msg:error
      }
    )
    
  }
  
}