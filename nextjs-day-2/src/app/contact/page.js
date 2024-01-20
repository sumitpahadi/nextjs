
async function Showing()
{
    await new Promise((res)=>{
        setTimeout(res,3000)
    })
}
export default async function Contact()
{
    await Showing()
    throw new Error("this is mannal error")
    return (
        <div>
            <h1>this is contact page</h1>
        </div>
    )
}