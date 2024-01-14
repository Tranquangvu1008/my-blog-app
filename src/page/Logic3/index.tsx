import { useEffect, useReducer, useRef, useState } from "react"

export type ContractTypes = {
    name: any,
    phone: any
}

const contractReducer = (state: any, action: any) => {
    if (action.type === "add") {
        const data = {
            data: [...state.contract.data, { name: action.state.name, phone: action.state.phone }]
        }
        return {
            contract: data
        }
    } else if (action.type === "remove") {
        const updatedData = state.contract.data.filter((item: any, index: any) => index !== action.index);
        return {
            contract: {
                data: updatedData
            }
        }
    } else if (action.type === "update") {
        console.log("reducer", action.state.data);

        return {
            contract: {
                data: action.state.data
            }
        }
    }
}


export const Logic3 = () => {
    const [state, dispatch] = useReducer(contractReducer, { contract: { data: [] } });
    const nameRef = useRef<HTMLInputElement | null>(null)
    const phoneRef = useRef<HTMLInputElement | null>(null)
    const [data, setData] = useState<ContractTypes[]>([]);

    const handleData = (e: any) => {
        e.preventDefault();
        if (e.target.name.value && e.target.phoneNumber.value) {
            dispatch(
                { type: "add", state: { name: e.target.name.value, phone: e.target.phoneNumber.value } }
            )
        }
    }

    const handleInputChange = (index: number, field: keyof ContractTypes, value: any) => {
        const updatedData = [...data];
        updatedData[index][field] = value;
        setData(updatedData);
    };

    useEffect(() => {
        console.log(state?.contract.data);

        if (state?.contract.data) {
            setData(state?.contract.data)
        }
    }, [state?.contract.data])

    return (<>
        <form id="contractForm" onSubmit={handleData}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" />
            <label htmlFor="phoneNumber">Price</label>
            <input type="tel" id="phoneNumber" />
            <button>Add</button>
        </form>
        <table id="contract">
            <thead>
                <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Delete</th>
                    <th>Update</th>
                </tr>
            </thead>
            <tbody>
                {data && data.map((item: any, index: any) => {
                    return <tr key={index}>
                        <td >{index}</td>
                        <td > <input
                            ref={nameRef}
                            type="text"
                            value={item.name}
                            onChange={(e) => handleInputChange(index, "name", e.target.value)}
                        />
                        </td>
                        <td ><input
                            ref={phoneRef}
                            type="tel"
                            value={item.phone}
                            onChange={(e) => handleInputChange(index, "phone", e.target.value)}
                        />
                        </td>
                        <td >
                            <button onClick={() => {
                                dispatch({ type: "remove", index: index })
                            }}>Delete</button>
                        </td>
                        <td >
                            <button onClick={() => {
                                dispatch({
                                    type: "update",
                                    state: { data },
                                });
                            }}>Update</button>
                        </td>
                    </tr>
                })}
            </tbody>
        </table>
    </>)
}