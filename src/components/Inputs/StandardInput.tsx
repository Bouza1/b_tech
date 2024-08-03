import { Dispatch, SetStateAction } from 'react';

interface Props {
    type: 'text' | 'number' | 'select' | 'text-area'
    label: string;
    id: string;
    placeholder: string;
    value: string | number;
    setValue: Dispatch<SetStateAction<string>>
    options? : string[];
}

const StandardInput = ({ type, label, id, placeholder, value, setValue, options }: Props) => {
    return (
        <div className="flex flex-row mx-5 my-5 items-center">
            <div className="flex w-1/3 justify-center">
                <label className="block font-palanquin font-semibold text-xl text-gray-800"
                       htmlFor={`input_${id}`}>
                    {label}:
                </label>
            </div>
            <div className="flex flex-row w-2/3">
                {type === 'text' &&
                    <input type={type} id={`input_${id}`} aria-describedby={`Input for ${label}`}
                           className="bg-gray-800 border border-gray-300 text-white rounded-lg block w-full p-2.5 focus:bg-white focus:text-gray-800"
                           placeholder={placeholder} required
                           value={value} onChange={(e) => setValue(e.target.value)} />
                }

                {type === 'select' &&
                    <select
                        className={'bg-gray-800 border border-gray-300 text-white rounded-lg block w-full p-2.5 focus:bg-white focus:text-gray-800'}
                        name="mould_select"
                        id="mould_select"
                        value={value}
                        onChange={(event) => {
                            const selectedValue = event.target.value;
                            setValue(selectedValue);
                        }}>
                        <option value="">Select&hellip;</option>
                        {options && options.map(option => (
                            <option key={`select_${option}`} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                }


            </div>
        </div>

    )
}

export default StandardInput;

