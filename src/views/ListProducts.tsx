import { useLoaderData } from "react-router-dom"
import { Product } from "../types"
import ListProductsDetails from "../components/ListProductDetails"

export default function ListProducts() {
    const products = useLoaderData() as Product[] //se usa más cuando queremos cargar informacion de un get
    
    return (
        <>
            <div className="p-10 max-w-4xl mx-auto bg-white m-10 rounded-xl shadow-md w-full">
                <div className="flex justify-between items-center mb-5 bg-white/80 backdrop-blur-md rounded-2xl ">
                    <h2 className="text-4xl font-bold text-emerald-700 mb-2">
                        Catálogo de productos
                    </h2>
                </div>
                <div className="bg-emerald-50 px-6 py-4 border-b">
                    <div className="grid grid-cols-3 gap-4">
                        <div className="text-emerald-900 font-semibold text-sm uppercase tracking-wider">Producto</div>
                        <div className="text-emerald-900 font-semibold text-sm uppercase tracking-wider">Precio</div>
                        <div className="text-emerald-900 font-semibold text-sm uppercase tracking-wider">Disponibilidad</div>
                    </div>
                </div>
                <table className="w-full">
                    <tbody>
                        {products.map((product) => (
                            <ListProductsDetails key={product.id} product={product} />
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}
