interface Props {
    label: string;
    iconURL: string;
    onClick?: () => void;
}

const BigButton = ({ label, iconURL, onClick }: Props) => {
    return (
        <button
            className="text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900 rounded-lg text-lg px-5 py-2.5 flex gap-2 justify-center items-center text-center"
            onClick={onClick}
        >
            {label}
            {iconURL && (
                <img src={iconURL} alt="arrow right" className="ml-2 rounded-full w-5 h-5" />
            )}
        </button>
    );
};

export default BigButton;
