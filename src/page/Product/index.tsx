import { useReducer, useRef, useState } from "react";

export type ProductProps = {
    name: string;
    code: string;
}

const countReducer = (state: any, action: any) => {
    console.log(state);
    console.log(action);


    if (action.type === "inc") {
        return {
            product: {
                data: [...state.product.data, { name: action.state.name, code: action.state.code }]
            }
        }
    }
    throw Error('Unknown action.');
}

const Product = () => {
    const [list, setList] = useState<ProductProps[]>([]);
    const nameRef = useRef<HTMLInputElement | null>(null)
    const codeRef = useRef<HTMLInputElement | null>(null)

    const [state, dispatch] = useReducer(countReducer, { product: { data: [] } });

    const addNewProduct = () => {
        if (nameRef.current && codeRef.current) {
            const newName = nameRef.current.value;
            const newCode = codeRef.current.value;

            if (newName !== "" && newCode !== "") {
                setList([...list, { name: newName, code: newCode }]);
                // Reset input values
                nameRef.current.value = "";
                codeRef.current.value = "";
            }
        }
    }


    return (
        <>
            <label htmlFor="name">Name</label>
            <input ref={nameRef} id="name" defaultValue={"hehe"} />
            <label htmlFor="name">Code</label>
            <input ref={codeRef} id="code" defaultValue={"code"} />
            <button onClick={() => {
                dispatch(
                    { type: "inc", state: { name: nameRef.current?.value, code: codeRef.current?.value } }
                )
            }}>Add</button>
            <table>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Code</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {state.product.data && state.product.data.map((item, index) => {
                        return <tr key={index}>
                            <td>{++index}</td>
                            <td>{item.name}</td>
                            <td>{item.code}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </>
    );
}

export default Product;