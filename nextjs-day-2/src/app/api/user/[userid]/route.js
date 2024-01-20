import { NextResponse } from "next/server";

export function DELETE(request,{params})
{
    console.log(params)
    console.log(params.userid)
    return NextResponse.json({
        msg:"message is deleted",
        id:params.userid
    })

}
export function GET()
{
    
}