import { useRef, useState } from "react";

type ProductProps = {
    name: string;
    code: string;
}

const Product = () => {
    const [list, setList] = useState<ProductProps[]>([]);
    const nameRef = useRef<HTMLInputElement | null>(null)
    const codeRef = useRef<HTMLInputElement | null>(null)

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
            <button onClick={addNewProduct}>Add</button>
            <table>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Code</th>
                    </tr>
                </thead>
                <tbody>
                    {list && list.map((item, index) => {
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