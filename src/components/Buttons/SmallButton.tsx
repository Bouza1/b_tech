interface Props {
    label: string;
}
const SmallButton = ({ label }: Props) => {
    return (
        <button className="text-white bg-blue-500 hover:bg-blue-700 focus:ring-2 focus:outline-none focus:ring-blue-200 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900 rounded-lg text-sm px-3 py-1.5 justify-center text-center">
            {' '}
            {label}
        </button>
    );
};

export default SmallButton;
