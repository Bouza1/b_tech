interface Props {
    label: string;
    iconURL?: string;
    onClick?: () => void;
}

const BigButton = ({ label, iconURL, onClick }: Props) => {
    return (
        <button
            className="text-blue-500 font-semibold border-b-4 border-transparent hover:border-b-blue-500 text-2xl  flex gap-2 justify-center items-center text-center"
            onClick={onClick}
        >
            {label}
            {iconURL && <img src={iconURL} alt="arrow right" className="w-8 h-8" />}
        </button>
    );
};

export default BigButton;
