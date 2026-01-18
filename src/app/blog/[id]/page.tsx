import axios from "axios"


export const revalidate = 3600; // revalidate this page
export const dynamicParams = true;  // false means only the paths returned by generateStaticParams 
// will be generated at build time
// if true, then the paths not returned by generateStaticParams will be generated at request time
// --this api has upto 25 data ids only
export const generateStaticParams = async () => {
   try {
     const res = await axios.get(`https://api.vercel.app/blog`);
    

    const ans = res.data.map((item : { id: string }) => ({
    id: item.id.toString(),    
        }) );
    console.log("ans", ans);
    return ans;

   } catch (error) {
    console.log("error", error)
   }
}


const page = async ({params} : {params : Promise<{id: string}>}) => {
    const {id} = await params;
    const resM = await axios.get(`https://api.vercel.app/blog/${id}`);
    
  return (
    <div>
        <h1>Blog Page</h1>
        {/* or also {id} */}
        <p>Blog ID: {resM.data.id}</p>   
        <p>Blog Title: {resM.data.title}</p>
        <p>Blog Author: {resM.data.author}</p>
        <p>Blog Content: {resM.data.content}</p>


    </div>
  )
}

export default page