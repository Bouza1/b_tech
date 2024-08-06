import { useState, useEffect } from 'react';
import FormSection from './FormSection.tsx';

import {
    CheckIcon,
    ComputerDesktopIcon,
    PhoneIcon,
    UserIcon,
    WrenchIcon,
} from '@heroicons/react/16/solid';
import { SendButton, StandardInput } from '../../components';
import { TextArea } from '../../components/Inputs';
import SectionButton from '../../components/Buttons/SectionButton.tsx';
import { MdOutlineEmail, MdOutlineMessage, MdWhatsapp } from 'react-icons/md';

const RepairForm = () => {

    // Section 1
    const [fullName, setFullName] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [email, setEmail] = useState('');
    const [isSection1Valid, setIsSection1Valid] = useState(true);
    const [showSection1, setShowSection1] = useState(true);

    // Section 2
    const [isSection2Valid, setIsSection2Valid] = useState(false);
    const [deviceType, setDeviceType] = useState('');
    const [deviceBrand, setDeviceBrand] = useState('');
    const [deviceModel, setDeviceModel] = useState('');
    const [showSection2, setShowSection2] = useState(false);

    // Section 3
    const [isSection3Valid, setIsSection3Valid] = useState(false);
    const [issuesDescription, setIssuesDescription] = useState('');
    const [showSection3, setShowSection3] = useState(false);

    // Section 4
    const [isSection4Valid, setIsSection4Valid] = useState(false);
    const [prefMethod, setPrefMethod] = useState('');
    const [showSection4, setShowSection4] = useState(false);

    // Section 5
    const [showSection5, setShowSection5] = useState(false)

    useEffect(() => {
        const isValidFullName = fullName.trim().length > 0;
        const isValidContactNumber = contactNumber.length > 0;
        const isValidEmail = email.length > 0;

        const isValidDeviceType =
            deviceType === 'Phone' ||
            deviceType === 'Tablet' ||
            deviceType === 'Desktop' ||
            deviceType === 'Laptop';
        const isValidDeviceBrand = deviceBrand.length > 0;
        const isValidDeviceModel = deviceModel.length > 0;

        const isValidIssues = issuesDescription.length > 0;

        const isValidPrefs = prefMethod != ""

        setIsSection1Valid(isValidFullName && isValidContactNumber && isValidEmail);
        setIsSection2Valid(
            isValidDeviceType && isValidDeviceBrand && isValidDeviceModel,
        );
        setIsSection3Valid(isValidIssues);
        setIsSection4Valid(isValidPrefs)
    }, [fullName, contactNumber, email, deviceType, deviceBrand, deviceModel, issuesDescription.length, prefMethod]);

    const handleNextSectionClick = () => {
        const sectionsValid = [showSection1, showSection2, showSection3, showSection4];
        const isSectionValid = [isSection1Valid, isSection2Valid, isSection3Valid, isSection4Valid];
        const currentSection = sectionsValid.findIndex((item) => item);
        if(isSectionValid[currentSection]) {
            handleSectionVisibility(currentSection <= 4 ? currentSection+1 : currentSection);
            console.log(currentSection)
        }

    }

    const handleSectionVisibility = (section: number) => {
        setShowSection1(section === 0);
        setShowSection2(section === 1);
        setShowSection3(section === 2);
        setShowSection4(section === 3);
        setShowSection5(section === 4);
    };

    return (
        <div className="flex flex-col h-[440px] gap-4 items-center rounded-2xl">
            <div
                className="rounded-2xl flex flex-col shadow-2xl bg-hero bg-cover gap-3 w-full p-7 h-full justify-between">

                <div className="flex w-full justify-evenly flex-row">
                    <SectionButton
                        isValid={isSection1Valid}
                        isActive={showSection1}
                        IconValid={CheckIcon}
                        IconInvalid={UserIcon}
                        onClick={() => handleSectionVisibility(0)}
                    />
                    <SectionButton
                        isValid={isSection2Valid}
                        isActive={showSection2}
                        IconValid={CheckIcon}
                        IconInvalid={ComputerDesktopIcon}
                        onClick={() => {
                            if (isSection1Valid) {
                                handleSectionVisibility(1);
                            } else {
                                handleSectionVisibility(0);
                            }
                        }}
                    />
                    <SectionButton
                        isValid={isSection3Valid}
                        isActive={showSection3}
                        IconValid={CheckIcon}
                        IconInvalid={WrenchIcon}
                        onClick={() => {
                            if (isSection1Valid && isSection2Valid) {
                                handleSectionVisibility(2);
                            } else if (isSection1Valid) {
                                handleSectionVisibility(1);
                            } else {
                                handleSectionVisibility(0);
                            }
                        }}
                    />
                    <SectionButton
                        isValid={isSection4Valid}
                        isActive={showSection4}
                        IconValid={CheckIcon}
                        IconInvalid={PhoneIcon}
                        onClick={() => {
                            if (isSection1Valid && isSection2Valid && isSection3Valid) {
                                handleSectionVisibility(3);
                            } else if (isSection1Valid && isSection2Valid) {
                                handleSectionVisibility(2);
                            } else if (isSection1Valid) {
                                handleSectionVisibility(1);
                            } else {
                                handleSectionVisibility(0);
                            }
                        }}
                    />
                </div>
                <form className="flex flex-col h-full">
                    {showSection1 && (
                        <FormSection leading={"Please provide your personal details so we can accurately identify and assist you with your specific needs."}>
                            <StandardInput
                                type={'text'}
                                label={'Full Name'}
                                id={'fullName'}
                                placeholder={'Jane Doe'}
                                value={fullName}
                                setValue={setFullName}
                            />
                            <StandardInput
                                type={'text'}
                                label={'Contact Number'}
                                id={'contactNumber'}
                                placeholder={'+44'}
                                value={contactNumber}
                                setValue={setContactNumber}
                            />
                            <StandardInput
                                type={'text'}
                                label={'Email'}
                                id={'email'}
                                placeholder={'@outlook.com'}
                                value={email}
                                setValue={setEmail}
                            />
                        </FormSection>
                    )}
                    {showSection2 && (
                        <FormSection leading={"Share the details of your device to ensure we have all the necessary information to diagnose and address any issues."}>
                            <StandardInput
                                type={'select'}
                                label={'Device Type'}
                                id={'deviceType'}
                                placeholder={''}
                                value={deviceType}
                                setValue={setDeviceType}
                                options={['Phone', 'Tablet', 'Desktop', 'Laptop']}
                            />
                            <StandardInput
                                type={'text'}
                                label={'Brand'}
                                id={'deviceBrand'}
                                placeholder={'Apple'}
                                value={deviceBrand}
                                setValue={setDeviceBrand}
                            />
                            <StandardInput
                                type={'text'}
                                label={'Model'}
                                id={'deviceModel'}
                                placeholder={'iPhone 11'}
                                value={deviceModel}
                                setValue={setDeviceModel}
                            />
                        </FormSection>
                    )}
                    {showSection3 && (
                        <FormSection leading={"Describe the issues or problems you are experiencing in as much detail as possible."}>
                            <TextArea value={issuesDescription} setValue={setIssuesDescription} />
                        </FormSection>
                    )}
                    {showSection4 && (
                        <>
                            <FormSection leading={"Let us know your contact preferences so we can reach out to you in the most convenient way."}>

                                <div className="flex flex-col w-full h-full justify-evenly">

                                    <div className="flex flex-row w-full justify-evenly">

                                        <div
                                            className={`cursor-pointer`}
                                            onClick={() => setPrefMethod('email')}
                                        >

                                            <div
                                                className={`rounded-full border-4 px-5 py-2 ${prefMethod === 'email' ? 'bg-blue-500 border-gray-800 shadow-2xl' : 'border-transparent'}`}>
                                                {<MdOutlineEmail size={84}
                                                                 color={prefMethod === 'email' ? '#ffffff' : '#1F2C37'} />}
                                                <label
                                                    className={`font-montserrat ${prefMethod === 'email' ? 'text-white' : 'text-gray-800'} text-center text-lg`}>Email</label>
                                            </div>
                                        </div>

                                        <div
                                            className={`cursor-pointer`}
                                            onClick={() => setPrefMethod('text')}
                                        >
                                            <div
                                                className={`rounded-full border-4 px-5 py-2 ${prefMethod === 'text' ? 'bg-blue-500 border-gray-800 shadow-2xl' : 'border-transparent'}`}>
                                                {<MdOutlineMessage size={84}
                                                                   color={prefMethod === 'text' ? '#ffffff' : '#1F2C37'} />}
                                                <label
                                                    className={`font-montserrat ${prefMethod === 'text' ? 'text-white' : 'text-gray-800'} text-center text-lg`}>Text</label>
                                            </div>

                                        </div>

                                        <div
                                            className={`cursor-pointer`}
                                            onClick={() => setPrefMethod('whatsapp')}
                                        >
                                            <div
                                                className={`rounded-full border-4 px-7 py-4 ${prefMethod === 'whatsapp' ? 'bg-blue-500 border-gray-800 shadow-2xl' : 'border-transparent'}`}>
                                                {<MdWhatsapp size={84}
                                                                   color={prefMethod === 'whatsapp' ? '#ffffff' : '#1F2C37'} />}
                                                <label
                                                    className={`font-montserrat ${prefMethod === 'whatsapp' ? 'text-white' : 'text-gray-800'} text-center text-lg`}>Whatsapp</label>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </FormSection>
                        </>
                    )}
                    {showSection5 &&
                        <SendButton/>
                    }
                </form>


                {!showSection5 &&
                    <div>
                        <button
                            className="rounded-lg text-2xl font-palanquin hover:bg-blue-500 cursor-pointer border-2 border-gray-800 py-2 px-7"
                            onClick={handleNextSectionClick}
                        >Next
                        </button>
                    </div>
                }

            </div>
        </div>
    );
};

export default RepairForm;
