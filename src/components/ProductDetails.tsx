import { ActionFunctionArgs, Form, redirect, useFetcher, useNavigate } from 'react-router-dom'
import { Product } from "../types"
import { formatCurrency } from "../utils"
import { deleteProduct } from '../services/ProductService'
import { Pencil, Trash } from 'lucide-react'

type ProductDetailsProps = {
    product: Product
}
export async function action({ params }: ActionFunctionArgs) {
    if (params.id !== undefined) {
        await deleteProduct(+params.id)
        return redirect('/') //para que no nos dirija a la url del action
    }
}
export default function ProductDetails({ product }: ProductDetailsProps) {
    const fetcher = useFetcher()
    const navigate = useNavigate()
    const isAvailable = product.availability

    return (
        <tr className="">
            <td className="p-3 text-lg text-gray-800 w-1/4">
                {product.name}
            </td>
            <td className="p-3 text-lg text-gray-800  w-1/4">
                {formatCurrency(product.price)}
            </td>

            <td className="p-3 text-lg text-gray-800 w-1/4">
                <fetcher.Form method="POST">
                    <button
                        type='submit'
                        name='id'
                        value={product.id}
                        className={`${isAvailable ? 'text-black' : 'text-red-600'} 
                        rounded-lg p-2 text-xs uppercase font-bold w-full border border-black-100
                        hover:cursor-pointer`}
                    >
                        {isAvailable ? 'Disponible' : 'No disponible'}
                    </button>
                </fetcher.Form>
            </td>
            <td className="p-3 text-lg text-gray-800 w-1/4 ">
                <div className="flex gap-2 justify-end">
                    <button
                        onClick={() => navigate(`${product.id}/editar`)}
                        className="border border-amber-300 text-amber-600 hover:bg-amber-50 hover:text-amber-700 rounded-lg p-2 uppercase font-bold text-xs text-center flex items-center justify-center gap-2"
                    >
                        <Pencil className='w-5 h-5'/>
                    </button>
                    <Form
                        method='POST'
                        action={`${product.id}/eliminar`} //se dirije a esta ruta
                        onSubmit={(e) => {
                            if (!confirm('¿Eliminar?')) {
                                e.preventDefault()
                            }
                        }}
                    >
                        <button
                            type='submit'
                            className='cursor-pointer border border-rose-300 text-rose-600 hover:bg-rose-50 hover:text-rose-700 rounded-lg p-2 uppercase font-bold text-xs text-center'

                        ><Trash className='w-5 h-5'/></button>
                    </Form>
                </div>
            </td>
        </tr>
    )
}
