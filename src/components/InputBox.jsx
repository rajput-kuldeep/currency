import React, { useId } from 'react'

function InputBox({
    
        label,
        amount,
        onAmountChange,
        onCurrencyChange,
        currencyOptions = [],
        selectCurrency = "usd",
        amountDisable = false,
        currencyDisable = false,
        className = "",
    })

    {
    const amountInputId = useId();
    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex`}>
            <div className='w-1/2'>
                <label htmlFor="amountInputId" className='text-black mb-2 inline-block'>
                    {label}
                </label>

                <input
                id={amountInputId}
                type="number"
                placeholder='amount'
                value={amount}
                disabled ={amountDisable}
                className='outline-none bg-transparent w-full py-1.5'
                onChange={(e)=> onAmountChange && onAmountChange(Number(e.target.value))} />
            </div>

            <div className='flex flex-wrap justify-end text-right w-1/2'>
                <p className='text-blacl-40 mb-2 '>Currency Type</p>
                <select className='rounded-lg px-1 py-1 bg-gray-100 outline-none cursor-pointer'
                    value={selectCurrency}
                    onChange={(e)=> onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled ={currencyDisable}>

                        {currencyOptions.map((currency)=>
                            (
                                <option value={currency} key={currency}>
                                    {currency}
                                </option>
                            )
                        )}

                    </select>
            </div>
        </div>
    )
}

export default InputBox;
