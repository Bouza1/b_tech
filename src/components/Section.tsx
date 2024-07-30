import { ReactNode } from 'react';

interface Props {
    id: string;
    children: ReactNode;
}

const Section = ({ id, children }: Props) => {
    return (
        <section id={id} className={`min-h-svh max-h-svh w-full flex justify-center items-center`}>
            {children}
        </section>
    );
};

export default Section;
