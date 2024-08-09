import { ReactNode } from 'react';

interface Props {
    leading?: string;
    children: ReactNode;
}

const FormSection = ({ leading, children }: Props) => {
    return (
        <div className="flex flex-col h-full">
            <div className="flex flex-col h-full justify-evenly">
                {leading && (
                    <p className="font-montserrat text-slate-gray text-center text-lg">{leading}</p>
                )}
                {children}
            </div>
        </div>
    );
};

export default FormSection;
