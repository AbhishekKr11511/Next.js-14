// This is general loading screen which plays while all the pages,
// within this route load

const loading = () => {
  return (
    <div><LoadingSkeleton/>
        <h2>Loading ...</h2>
    </div>
  )
}
export default loading