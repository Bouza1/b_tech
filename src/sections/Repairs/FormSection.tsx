import { ReactNode } from 'react';

interface Props {
    title: string;
    leading?: string;
    children: ReactNode;
}

const FormSection = ({ title, leading, children }: Props) => {
    return (
        <div className="flex flex-col h-full">
            <div className="flex flex-col">
                <p className="font-palanquin font-semibold text-3xl text-gray-800">{title}</p>
                {leading && (
                    <p className="font-montserrat text-slate-gray text-center text-lg">
                        {leading}
                    </p>
                )}
            </div>
            <div className="flex flex-1 flex-col justify-evenly h-full">{children}</div>
        </div>
    );
};

export default FormSection;
