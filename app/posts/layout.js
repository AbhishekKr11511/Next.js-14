const layout = ({children}) => {
  return (
    <div>
        <h1>This is header</h1>
        <main>{children}</main>
        <h2>This is footer</h2>
    </div>
  )
}
export default layout