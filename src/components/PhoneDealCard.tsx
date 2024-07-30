interface Props {
    imgURL: { bigPhone: string; thumbnail: string };
    changeBigPhoneImage: (shoe: string) => void;
    bigPhoneImg: string;
}

const PhoneDealCard = ({ imgURL, changeBigPhoneImage, bigPhoneImg }: Props) => {
    const handleClick = () => {
        if (bigPhoneImg !== imgURL.bigPhone) {
            changeBigPhoneImage(imgURL.bigPhone);
        }
    };

    return (
        <div
            className={`border-2 rounded-xl ${
                bigPhoneImg === imgURL.bigPhone ? 'border-blue-500' : 'border-transparent'
            } cursor-pointer max-sm:flex-1`}
            onClick={handleClick}
        >
            <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
                <img
                    src={imgURL.thumbnail}
                    alt="shoe colletion"
                    width={127}
                    height={103.34}
                    className="object-contain"
                />
            </div>
        </div>
    );
};

export default PhoneDealCard;
