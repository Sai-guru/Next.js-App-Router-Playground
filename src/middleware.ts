import { NextResponse } from "next/server";

//globally works on all routes
// export async function middleware() {
//     console.log('Middleware triggered');
//     return NextResponse.next();
// }

//if needed to limit to specific routes, 
// use config object like below:
export const config = {
    matcher:['/users/:userId',
        // ...etc
    ]
}

export async function middleware() {
    console.log('Middleware triggered');
    const resp = NextResponse.next();

   return resp.headers.append('authToken','xyz123');
    
}
