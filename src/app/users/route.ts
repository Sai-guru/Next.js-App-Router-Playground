
// ❌ Using Request (No nextUrl)


// export async function GET(req: Request) {
//   const { searchParams } = new URL(req.url);
//   const name = searchParams.get('name') || 'Guest';
//   return new Response(`Hello, ${name}!`);
// }

// req.url is a plain string (e.g., https://example.com/api/hello?name=John).
// You must manually parse it with new URL(req.url).
// req.nextUrl is not available.



import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {

    const { searchParams } =req.nextUrl;
    const name = searchParams.get('name') || 'Default';
    const age = searchParams.get('age') || '0';

    return Response.json({ message: `I am ${name} , ${age} years old.` });
}

// eg : http://localhost:3000/users?name=baddy&age=4

// ✅ Key Point: nextUrl is only available when you have a NextRequest object.  It does not work independently.

// NextRequest is required to access the nextUrl property in Next.js
//  middleware.  The nextUrl is a NextURL object 
//  derived from the NextRequest and provides access to the 
//  current request's URL, including its pathname, 
// search parameters, and other components. 


 