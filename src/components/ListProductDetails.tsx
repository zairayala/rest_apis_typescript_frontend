import { ActionFunctionArgs, Form, redirect, useFetcher, useNavigate } from 'react-router-dom'
import { Product } from "../types"
import { formatCurrency } from "../utils"
import { deleteProduct } from '../services/ProductService'

type ListProductsDetailsProps = {
    product: Product
}
export async function action({ params }: ActionFunctionArgs) {
    if (params.id !== undefined) {
        await deleteProduct(+params.id)
        return redirect('/') //para que no nos dirija a la url del action
    }
}
export default function ListProductsDetails({ product }: ListProductsDetailsProps) {
    const fetcher = useFetcher()
    const isAvailable = product.availability

    return (
        <tr className="">
            <td className="p-3 text-lg text-gray-800 w-1/3">
                {product.name}
            </td>
            <td className="p-3 text-lg text-gray-800 w-1/3">
                {formatCurrency(product.price)}
            </td>

            <td className="p-3 text-lg text-gray-800 w-1/3">
                <div
                    className={`${isAvailable ? 'text-green-600' : 'text-red-600'} 
                        rounded-lg p-2 text-xs uppercase font-bold w-full`}
                >
                    {isAvailable ? 'Disponible' : 'No disponible'}
                </div>
            </td>
        </tr>
    )
}
