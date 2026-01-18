import Link from "next/link"

const page = () => {
  return (
    <div>
        <h1>Blog Page</h1>
        <p>Welcome to the blog page!</p>
        <Link href="/">Go to Home</Link>
    </div>
  )
}

export default page