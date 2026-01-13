import { useEffect, useState } from "react";

function useCurrencyInfo(currency){
    const[data, setData] = useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res) => {
            res.json()
        })
        .then((res) => {
            setData(res[currency])
        })
        console.log(data);
    }, [currency]) // When change inr to usd or usd to inr then automatically run this custome hook
    console.log(data)
    return data;
}

export default useCurrencyInfo;