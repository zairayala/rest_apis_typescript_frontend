import { useNavigate } from "react-router-dom"

export default function Login() {

    const navigate = useNavigate()
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const data = {
            username: formData.get('username') as string,
            password: formData.get('password') as string
        }
        if (data.username === import.meta.env.VITE_USERNAME && data.password === import.meta.env.VITE_PASSWORD) {
            localStorage.setItem('isAuthenticated', JSON.stringify(true))
            navigate('/productos')
        } else {
            alert('Usuario o contraseña incorrectos')
        }
    }

    return (
        <>
            <div className=" flex justify-center max-w-xl w-full">
                <div className="bg-white rounded-lg shadow-lg p-8 w-full ">
                    <h2 className="text-2xl font-bold text-green-700 text-center mb-8">Iniciar Sesión</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
                                Username
                            </label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-colors"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                                Contraseña
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-colors"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 px-4 rounded-lg font-medium hover:from-green-600 hover:to-green-700 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all duration-200 transform hover:scale-[1.02]"
                        >
                            Iniciar Sesión
                        </button>
                    </form>
                </div>

            </div>
        </>
    )
}
