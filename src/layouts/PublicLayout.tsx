import { useEffect } from "react"
import { Outlet, useLocation, useNavigate } from "react-router-dom"

export default function PublicLayout() {
    const navigate = useNavigate()
    const location = useLocation()
    const isAuthenticated = localStorage.getItem('isAuthenticated')

    useEffect(() => {
        if (!isAuthenticated && location.pathname !== '/catalogo') {
            navigate('/iniciar-sesion')
        } else if (isAuthenticated && location.pathname !== '/catalogo') {
            navigate('/productos');
        }
    }, [isAuthenticated, location.pathname, navigate])

    return (
        <>
            <header className="bg-gradient-to-r from-emerald-500 to-amber-400">
                <div className="mx-auto max-w-6xl py-10 flex justify-between">
                    <h1 className="text-4xl font-bold text-white">
                        Botánica Viva
                    </h1>

                </div>
            </header>
            <main className=" min-h-[calc(100vh-160px)] mx-auto flex items-center justify-center">
                <Outlet />

            </main>
        </>
    )
}
