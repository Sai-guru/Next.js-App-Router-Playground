
export async function GET() {
  return Response.json({ msg: 'Hello World' })
}

export async function POST(req: Request) {
       
 // console.log(req); // -- req holds the middleware resp data...
    const { id } = await req.json();
    return Response.json({ id, msg: 'Received' }, { status: 200 });

}
