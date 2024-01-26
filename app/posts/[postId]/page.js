// Dynamic routers where the rout changes based on individual components
// localhost:3000/posts/:postId

const page = ({postId}) => {
  return (
    <div>Individual post {postId}</div>
  )
}
export default page