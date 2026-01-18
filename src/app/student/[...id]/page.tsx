// ---------- Static Params Generation ----------
//static site generation for dynamic routes 
// with catch-all segments
const studs :string[] = ['1','2','3','4','5'];

export const generateStaticParams = async () => {
  return studs.map((id : string) => ({ id : [id] }));
};
// ------------------
const page = async ({ params } : {params : Promise<{id: string[]}>}) => {
    const {id} = await params;
    console.log(id);

  return (
    <div>
        <h1>Student Page</h1>
        <p>Student ID: {id ? id.join('/') : 'No ID provided'}</p>
    </div>
  )
}

export default page;


//--------------before----------
// ✓ Compiled successfully in 8.7s
// ✓ Finished TypeScript in 5.5s    
// ✓ Collecting page data using 3 workers in 1741.9ms    
// ✓ Generating static pages using 3 workers (7/7) in 513.7ms
// ✓ Finalizing page optimization in 27.5ms    

// Route (app)
// ┌ ○ /
// ├ ○ /_not-found
// ├ ○ /about
// ├ ○ /student
// ├ ƒ /student/[...id]
// └ ○ /title

// ○  (Static)   prerendered as static content
// ƒ  (Dynamic)  server-rendered on demand

// --------------after----------


//  Creating an optimized production build ...
// ✓ Compiled successfully in 8.6s
// ✓ Finished TypeScript in 4.6s    
// ✓ Collecting page data using 3 workers in 1537.6ms    
// [ '2' ]
// [ '1' ]
// [ '3' ]
// [ '4' ]
// [ '5' ]
// ✓ Generating static pages using 3 workers (12/12) in 482.3ms
// ✓ Finalizing page optimization in 26.3ms    

// Route (app)
// ┌ ○ /
// ├ ○ /_not-found
// ├ ○ /about
// ├ ○ /student
// ├ ● /student/[...id]
// │ ├ /student/1
// │ ├ /student/2
// │ ├ /student/3
// │ └ [+2 more paths]
// └ ○ /title


// ○  (Static)  prerendered as static content
// ●  (SSG)     prerendered as static HTML (uses generateStaticParams)




