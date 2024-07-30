import { Outlet } from "react-router-dom"


export const Layout = () => {
  return (
    <>
    <div>Desde layout</div>
    <Outlet/>
    </>
  )
}
