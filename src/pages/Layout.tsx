import { Outlet, useNavigate } from "react-router-dom"
import { useEffect } from "react"

export default function Layout() {
    const navigate = useNavigate();

    useEffect(() => {
        navigate("/login");
    }, [navigate])

    return (
        <Outlet/>
    )
}