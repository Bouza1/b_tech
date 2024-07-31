import { ReactNode } from 'react';

interface Props {
    id: string;
    children: ReactNode;
}

const Section = ({ id, children }: Props) => {
    return (
        <section id={id} className={`w-full flex justify-center items-center mb-5 border-b-4 border-b-blue-500`}>
            {children}
        </section>
    );
};

export default Section;
