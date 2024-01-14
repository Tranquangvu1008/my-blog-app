import { useState } from "react";

type Product = {
    name: string,
    price: number,
}

export const ProductList = () => {
    const [product, setProduct] = useState<Product[]>([])
    const [sum, setSum] = useState<number>();
    const handleData = (e: any) => {
        e.preventDefault();
        if (e.target.name.value && e.target.price.value) {
            setProduct([...product, { name: e.target.name.value, price: e.target.price.value }])
        }
    }

    const calculateSum = () => {
        if (product.length > 0) {
            let tong = 0;
            for (let item of product) {
                tong += Number(item.price);
            }
            setSum(tong)
        }
    }
    return (<>
        <form id="productForm" onSubmit={handleData}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" />
            <label htmlFor="price">Price</label>
            <input type="text" id="price" />
            <button>Add</button>
        </form>
        <table id="product">
            <thead>
                <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>

                {product && product.map((item, index) => {
                    return <tr key={index}>
                        <td >{item.name}</td>
                        <td >{item.price}</td>
                    </tr>
                })}
            </tbody>
        </table>
        <button onClick={calculateSum}>Sum</button>
        {sum && <p>{sum}</p>}
    </>);
}