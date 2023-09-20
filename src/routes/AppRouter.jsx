import { Route, Routes } from "react-router-dom"
import { Landing } from "../views/Landing"

export const AppRouter = () => {
  return (
    <Routes>
        <Route path='/' element={ <Landing />} />
    </Routes>
  )
}
