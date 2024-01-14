import { useRef, useState } from "react";

export const Logic1 = () => {
    const dataRef = useRef<HTMLInputElement | null>(null);
    const [sum, setSum] = useState<number>(0);
    const handleData = () => {
        if (dataRef.current && dataRef.current.value) {
            let value = dataRef.current.value.split(",");
            let data = 0;
            console.log(value);
            for (let item of value) {
                if (item !== "" && !isNaN(parseInt(item, 10))) {
                    data += parseInt(item, 10);
                }
            }
            setSum(data)
        }

    }
    return (
        <>
            <input ref={dataRef} type="text" />
            <button onClick={handleData}>Calculate</button>
            {sum && <p>{sum}</p>}
        </>
    );
}