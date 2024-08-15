import { ReactNode } from 'react';

interface Props {
    id: string;
    children: ReactNode;
}

const Section = ({ id, children }: Props) => {
    return (
        <section id={id} className={`w-full flex flex-col justify-center mt-10`}>
            {children}
        </section>
    );
};

export default Section;
