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
import { STR_PROB_ISSUES } from '../../constants';
import SectionButton from '../../components/Buttons/SectionButton.tsx';

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
    const [deviceSerialNumber, setDeviceSerialNumber] = useState('');
    const [showSection2, setShowSection2] = useState(false);

    // Section 3
    const [isSection3Valid, setIsSection3Valid] = useState(false);
    const [issuesDescription, setIssuesDescription] = useState('');
    const [showSection3, setShowSection3] = useState(false);

    // Section 4
    const [isSection4Valid, setIsSection4Valid] = useState(false);
    const [showSection4, setShowSection4] = useState(false);

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
        const isValidSerialNumber = deviceSerialNumber.length > 0;

        const isValidIssues = issuesDescription.length > 0;

        setIsSection1Valid(isValidFullName && isValidContactNumber && isValidEmail);
        setIsSection2Valid(
            isValidDeviceType && isValidDeviceBrand && isValidDeviceModel && isValidSerialNumber,
        );
        setIsSection3Valid(isValidIssues);
    }, [
        fullName,
        contactNumber,
        email,
        deviceType,
        deviceBrand,
        deviceModel,
        deviceSerialNumber,
        issuesDescription.length,
    ]);

    const handleSectionVisibility = (section: number) => {
        setShowSection1(section === 1);
        setShowSection2(section === 2);
        setShowSection3(section === 3);
        setShowSection4(section === 4);
    };

    return (
        <div className="flex flex-col h-[440px] gap-4 items-center rounded-2xl">
            <div className="rounded-2xl flex flex-col shadow-2xl bg-card object-cover gap-3 w-full p-7 h-full justify-between">
                <form className="flex flex-col h-full">
                    {showSection1 && (
                        <FormSection title={'Your Details'}>

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
                        <FormSection title={'Device Details'}>
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
                            <StandardInput
                                type={'text'}
                                label={'Serial Number'}
                                id={'deviceSerialNumber'}
                                placeholder={'SN:'}
                                value={deviceSerialNumber}
                                setValue={setDeviceSerialNumber}
                            />
                        </FormSection>
                    )}
                    {showSection3 && (
                        <FormSection title={'Problems & Issues'} leading={STR_PROB_ISSUES}>
                            <TextArea value={issuesDescription} setValue={setIssuesDescription} />
                        </FormSection>
                    )}
                    {showSection4 && (
                        <>
                            <FormSection title={'Contact Preferences'}>
                                <div className="flex w-full justify-center mt-3">
                                    <SendButton />
                                </div>
                            </FormSection>

                        </>
                    )}
                </form>

                <div className="flex w-full justify-evenly flex-row">
                    <SectionButton
                        isValid={isSection1Valid}
                        isActive={showSection1}
                        IconValid={CheckIcon}
                        IconInvalid={UserIcon}
                        onClick={() => handleSectionVisibility(1)}
                    />
                    <SectionButton
                        isValid={isSection2Valid}
                        isActive={showSection2}
                        IconValid={CheckIcon}
                        IconInvalid={ComputerDesktopIcon}
                        onClick={() => {
                            if (isSection1Valid) {
                                handleSectionVisibility(2);
                            } else {
                                handleSectionVisibility(1);
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
                                handleSectionVisibility(3);
                            } else if (isSection1Valid) {
                                handleSectionVisibility(2);
                            } else {
                                handleSectionVisibility(1);
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
                                handleSectionVisibility(4);
                            } else if (isSection1Valid && isSection2Valid) {
                                handleSectionVisibility(3);
                            } else if (isSection1Valid) {
                                handleSectionVisibility(2);
                            } else {
                                handleSectionVisibility(1);
                            }
                        }}
                    />

                </div>
            </div>
        </div>
    );
};

export default RepairForm;
