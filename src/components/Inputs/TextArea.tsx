import { Dispatch, SetStateAction } from 'react';

interface Props {
    value: string | number;
    setValue: Dispatch<SetStateAction<string>>
}


const TextArea = ({value, setValue}: Props) => {
    return (
        <div className="flex justify-center my-3 w-full">
            <label></label>
            <textarea className="w-full rounded-xl h-40 bg-gray-800 border border-gray-300 text-white block p-2.5 focus:bg-white focus:text-black" value={value} onChange={(e) => setValue(e.target.value)}></textarea>
        </div>

    )
}

export default TextArea