import { Link, Form, useActionData, ActionFunctionArgs, redirect, LoaderFunctionArgs, useLoaderData } from "react-router-dom";
import ErrorMessage from "../components/ErrorMessage";
import { getProductById, updateProduct } from "../services/ProductService";
import { Product } from "../types";
import ProductForm from "../ProductForm";

export async function loader({ params }: LoaderFunctionArgs) {
    if (params.id !== undefined) {
        const product = await getProductById(+params.id)
        if (!product) {
            return redirect('/')
        }
        return product
    }
}

export async function action({ request, params }: ActionFunctionArgs) {
    const data = Object.fromEntries(await request.formData())
    let error = ''

    if (Object.values(data).includes('')) {
        error = 'Todos los campos son obligatorios'
    }

    if (error.length) {
        return error
    }
    if (params.id !== undefined) {
        await updateProduct(data, +params.id)
        return redirect('/')
    }
}

const availabilityOptions = [
    { name: 'Disponible', value: true },
    { name: 'No Disponible', value: false }
]

export default function EditProduct() {
    const product = useLoaderData() as Product
    const error = useActionData() as string //se usa cuando queremos obtener resultados de lo que enviamos
    return (
        <>
            <div className="p-10 max-w-4xl mx-auto bg-white m-10 rounded-xl shadow-md">
                <div className='flex justify-between'>
                    <h2 className='text-4xl font-bold text-emerald-700'>Editar Producto</h2>
                    <Link
                        to="/"
                        className=' transition-colors rounded-xl font-semibold underline p-3 text-emerald-600 text-base hover:text-emerald-500'
                    >
                        Volver a Productos
                    </Link>
                </div>
                {error && <ErrorMessage>{error}</ErrorMessage>}
                <Form
                    className="mt-10"
                    method="POST"
                >
                    <ProductForm
                        product={product}
                    />
                    <div className="mb-4">
                        <label
                            className="text-gray-800"
                            htmlFor="availability"
                        >Disponibilidad:</label>
                        <select
                            id="availability"
                            className="mt-2 block w-full p-3 bg-gray-50"
                            name="availability"
                            defaultValue={product?.availability.toString()}
                        >
                            {availabilityOptions.map(option => (
                                <option key={option.name} value={option.value.toString()}>{option.name}</option>
                            ))}
                        </select>
                    </div>

                    <input
                        type="submit"
                        className="mt-5 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-500 transition-colors p-2 text-white font-bold text-lg cursor-pointer"
                        value="Guardar Cambios"
                    />
                </Form>

            </div>
        </>
    )
}
