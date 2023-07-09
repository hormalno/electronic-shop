import { useState } from "react";
import CurrencyContext from "./CurrencyContext";

const CurrencyState = ({children}) => {

    const [currency, setCurrency] = useState('USD');

    return (
        <CurrencyContext.Provider value={{currency,setCurrency}}>
            {children}
        </CurrencyContext.Provider>
    );
};

export default CurrencyState;