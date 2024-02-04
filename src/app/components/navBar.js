
export default function NavBar() {
  return (
    <nav className="flex flex-row pb-10 pt-5">
      <div className="pr-6">
        <a href='/' className="font-racingsans">home</a>
      </div>

      <div className="pr-6">
        <a href='/projects'>projects</a>
      </div>

      <div className="pr-6">
        <a href='/blog'>blog</a>
      </div>
    </nav>
  )
}