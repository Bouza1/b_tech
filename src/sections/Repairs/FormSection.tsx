import { ReactNode } from 'react';

interface Props {
    title:string;
    leading? : string;
    children:ReactNode;
}

const FormSection = ({title, leading,children}: Props) => {
    return (
        <>
            <div className="flex flex-col justify-center items-center">
                <p className="font-palanquin font-semibold text-3xl text-gray-800">{title}</p>
                {leading &&  <p className="font-montserrat text-slate-gray text-center text-lg leading-8">{leading}</p>}
            </div>
            <div>
                {children}
            </div>
        </>

    )
}

export default FormSection