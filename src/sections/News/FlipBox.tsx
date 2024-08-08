import { ReactNode } from 'react';

interface Props {
    front:ReactNode;
    back:ReactNode;
}
const FlipBox = () => {
    return (
        <div className="container flex w-full h-24 bg-blue-400">
            <div className="box">
                <div className="side front"></div>
                <div className="side back"></div>
            </div>
        </div>
    );
};

export default FlipBox;