
export async function GET(req : Request,{params} : {params : Promise<{userId : string}>}) {

    const {userId} = await params;
    return new Response(`User ID is: ${userId}`);

}

export async function POST(req:Request){

    // console.log(req); --req holds the middleware resp data...

    const headers = await req.headers;
    // console.log(headers);


    const info = await req.json();
    return Response.json({message: "Data received", data: info});

}