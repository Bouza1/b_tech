import { Dispatch, SetStateAction } from 'react';

interface Props {
    value: string | number;
    setValue: Dispatch<SetStateAction<string>>;
}

const TextArea = ({ value, setValue }: Props) => {
    return (
        <div className="flex justify-center h-full w-full my-2">
            <label></label>
            <textarea
                className="w-full rounded-xl h-full bg-white my-2 border-2 border-gray-800 block p-2.5 focus:bg-white focus:text-black"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            ></textarea>
        </div>
    );
};

export default TextArea;
