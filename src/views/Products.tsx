import { ActionFunctionArgs, Link, useLoaderData } from 'react-router-dom'
import { getProducts, updateProductAvailability } from '../services/ProductService'
import ProductDetails from '../components/ProductDetails'
import { Product } from '../types'

export async function loader() {
  const products = await getProducts()
  return products
}

export async function action({request} : ActionFunctionArgs){
  const data = Object.fromEntries(await request.formData()) 
  await updateProductAvailability(+data.id)
  return {}
}

export default function Products() {
  const products = useLoaderData() as Product[] //se usa más cuando queremos cargar informacion de un get
  return (
    <>
      <div className="p-10 max-w-7xl mx-auto bg-white m-10 rounded-xl shadow-md">
        <div className="flex justify-between items-center mb-5 bg-white/80 backdrop-blur-md rounded-2xl ">
            <h2 className="text-4xl font-bold text-emerald-700 mb-2">
              Productos
            </h2>
          <Link
            to="nuevo"
            className="group relative inline-flex items-center px-6 py-3 overflow-hidden text-white font-semibold bg-emerald-500 hover:bg-emerald-600 rounded-xl hover:shadow-amber-500/25 transform hover:scale-105 transition-all duration-300"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-orange-700 to-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <svg className="w-5 h-5 mr-2 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            <span className="relative z-10">Agregar Producto</span>
          </Link>
        </div>

            <div className="bg-emerald-50 px-6 py-4 border-b ">
              <div className="grid grid-cols-4 gap-4">
                <div className="text-emerald-900 font-semibold text-sm uppercase tracking-wider">Producto</div>
                <div className="text-emerald-900 font-semibold text-sm uppercase tracking-wider">Precio</div>
                <div className="text-emerald-900 font-semibold text-sm uppercase tracking-wider">Disponibilidad</div>
                <div className="text-emerald-900 font-semibold text-sm uppercase tracking-wider text-end">Acciones</div>
              </div>
            </div>

            <table className="w-full">
              <tbody>
                {products.map((product) => (
                  <ProductDetails key={product.id} product={product} />
                ))}
              </tbody>
            </table>

          {products.length === 0 && (
            <div className="p-12 text-center">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center shadow-md">
                <svg className="w-12 h-12 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-amber-700 to-orange-700 bg-clip-text text-transparent mb-3">
                No hay productos disponibles
              </h3>
              <p className="text-slate-600">Comience agregando su primer producto a la colección</p>
            </div>
          )}
        </div>
    </>
  )
}
