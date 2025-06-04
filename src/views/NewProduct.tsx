import { Link, Form, useActionData, ActionFunctionArgs, redirect } from "react-router-dom";
import ErrorMessage from "../components/ErrorMessage";
import { addProduct } from "../services/ProductService";
import ProductForm from "../ProductForm";

export async function action({ request }: ActionFunctionArgs) {
    const data = Object.fromEntries(await request.formData())
    let error = ''

    if (Object.values(data).includes('')) {
        error = 'Todos los campos son obligatorios'
    }

    if (error.length) {
        return error
    }
    await addProduct(data) //la siguiente linea no se ejecutara hasta que addProduct finalice
    return redirect('/')
}

export default function NewProduct() {

    const error = useActionData() as string //se usa cuando queremos obtener resultados de lo que enviamos
    return (
        <>
            <div className="p-10 max-w-4xl mx-auto bg-white m-10 rounded-xl shadow-md">
                <div className='flex justify-between'>
                    <h2 className='text-4xl font-bold text-emerald-700'>Registrar Producto</h2>
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

                    <ProductForm />
                    <input
                        type="submit"
                        className="mt-5 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-500 transition-colors p-2 text-white font-bold text-lg cursor-pointer"
                        value="Registrar Producto"
                    />
                </Form>

            </div>
        </>
    )
}
