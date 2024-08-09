import { Phone } from '../../pages/landingPage/sections/Home/WelcomeBanner.tsx';

interface Props {
    phone: Phone;
    setPhoneSelected: (phone: Phone) => void;
    phoneSelected: Phone;
}

const PhoneDealCard = ({ phone, setPhoneSelected, phoneSelected }: Props) => {
    const handleClick = () => {
        if (phoneSelected.bigPhone !== phone.bigPhone) {
            setPhoneSelected(phone);
        }
    };

    return (
        <div
            className={`border-2 rounded-xl ${
                phoneSelected.bigPhone === phone.bigPhone ? 'border-blue-500' : 'border-transparent'
            } cursor-pointer max-sm:flex-1`}
            onClick={handleClick}
        >
            <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
                <img
                    src={phone.thumbnail}
                    alt="phone collection"
                    width={127}
                    height={103.34}
                    className="object-contain"
                />
            </div>
        </div>
    );
};

export default PhoneDealCard;
