import { Dispatch, SetStateAction } from 'react';

interface Props {
    value: string | number;
    setValue: Dispatch<SetStateAction<string>>;
}

const TextArea = ({ value, setValue }: Props) => {
    return (
        <div className="flex justify-center h-full w-full">
            <label></label>
            <textarea
                className="w-full rounded-xl h-full bg-gray-800 mt-1 border border-gray-300 text-white block p-2.5 focus:bg-white focus:text-black"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            ></textarea>
        </div>
    );
};

export default TextArea;
