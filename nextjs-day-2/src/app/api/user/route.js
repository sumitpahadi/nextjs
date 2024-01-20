import { NextResponse } from "next/server";
import { connect } from "@/helper/db";
import User from "@/models/user";
connect();
// export function GET(request) {
//     const users = [
//       {
//         name: "sumit rawat",
//         course: "java stack",
//         year: "2023",
//       },
//       {
//         name: "nitin rawat",
//         course: "mern stack",
//         year: "2023",
//       },
//       {
//         name: "karan rawat",
//         course: "python stack",
//         year: "2023",
//       },
//       {
//         name: "keshav rawat",
//         course: "go stack",
//         year: "2023",
//       },
//     ];

//     return NextResponse.json(users);
//   }

export async function POST(request) {
  try {
    const { name, email, mobile, password, message } = await request.json();
    const data = await User.create({
      name: name,
      email: email,
      mobile: mobile,
      password: password,
      
    });
    console.log(data);

    return NextResponse.json({
      status: 200,
      body: {
        message: "data is inserted",
        userdata: data,
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
    // const { name } = await request.json();
    // console.log(name)
    const data = await User.find({});
    console.log(data);

    return NextResponse.json({
      status: 200,
      body: {
        message: "Data fetched successfully",
        userdata: data,
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

export async function DELETE(request) {
  try {
    const { email } = await request.json();
    const del = await User.deleteOne({ email: email });
    return NextResponse.json({
      msg: "data is deleted",
      data: del,
    });
  } catch (error) {
    return NextResponse.json({
      msg: error,
    });
  }
}

export  async function PUT(request)
{
    try {
        const {name}=await request.json()
        const up=await User.updateOne({name:"harshita rawat"},{$set:{name:name}})
        return NextResponse.json(
            {
                msg:"name is update"
            }
        )
        
    } catch (error) {
        return NextResponse.json(
            {
                msg:error
            }
        )
        
    }
}