import { LogOut } from "lucide-react"
import { useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"

export default function Layout() {
  const navigate = useNavigate()
  const isAuthenticated = localStorage.getItem('isAuthenticated') 

  useEffect(() => {
    if(!isAuthenticated){
      navigate('/iniciar-sesion')
    }
  }, [isAuthenticated, navigate])

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated')
    navigate('/iniciar-sesion')
  }
  return (
    <>
      <header className="bg-gradient-to-r from-emerald-500 to-amber-400">
        <div className="mx-auto max-w-6xl py-10 flex justify-between">
          <h1 className="text-4xl font-bold text-white">
            Botánica Viva
          </h1>
          <button
            className="bg-white text-green-700 hover:bg-gray-100 font-medium shadow-sm rounded-xl flex items-center px-7"
            onClick={handleLogout}
          >
            <LogOut className="w-4 h-4 mr-2" />
            Cerrar Sesión
          </button>

        </div>
      </header>
      <main className="h-screen mx-auto">
        <Outlet /> {/*Los children se inyectan aqui */}

      </main>
    </>
  )
}
