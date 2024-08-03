import  { useState, useEffect } from 'react';
import FormSection from './FormSection.tsx';
import { CheckIcon, ComputerDesktopIcon, PhoneIcon, UserIcon, WrenchIcon } from '@heroicons/react/16/solid';
import { BigButton, SendButton, StandardInput } from '../../components';
import { TextArea } from '../../components/Inputs';
import { STR_PROB_ISSUES } from '../../constants';

const RepairForm = () => {

    // Section 1
    const [fullName, setFullName] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [email, setEmail] = useState('');
    const [isSection1Valid, setIsSection1Valid] = useState(true);
    const [showSection1, setShowSection1] = useState(true);

    // Section 2
    const [isSection2Valid, setIsSection2Valid] = useState(false);
    const [deviceType, setDeviceType] = useState('')
    const [deviceBrand, setDeviceBrand] = useState('')
    const [deviceModel, setDeviceModel] = useState('')
    const [deviceSerialNumber, setDeviceSerialNumber] = useState('')
    const [showSection2, setShowSection2] = useState(false);

    // Section 3
    const [isSection3Valid, setIsSection3Valid] = useState(false);
    const [issuesDescription, setIssuesDescription] = useState('')
    const [showSection3, setShowSection3] = useState(false);

    // Section 4
    const [isSection4Valid, setIsSection4Valid] = useState(false);
    const [showSection4, setShowSection4] = useState(false);

    useEffect(() => {
        const isValidFullName = fullName.trim().length > 0;
        const isValidContactNumber = contactNumber.length > 0;
        const isValidEmail = email.length > 0;

        const isValidDeviceType = deviceType === "Phone" || deviceType === "Tablet" || deviceType === "Desktop" || deviceType === "Laptop";
        const isValidDeviceBrand = deviceBrand.length > 0
        const isValidDeviceModel = deviceModel.length > 0
        const isValidSerialNumber = deviceSerialNumber.length > 0

        const isValidIssues = issuesDescription.length > 0
        
        

        setIsSection1Valid(isValidFullName && isValidContactNumber && isValidEmail);
        setIsSection2Valid(isValidDeviceType && isValidDeviceBrand && isValidDeviceModel && isValidSerialNumber);
        setIsSection3Valid(isValidIssues);
    }, [fullName, contactNumber, email, deviceType, deviceBrand, deviceModel, deviceSerialNumber, issuesDescription.length]);

    return (
        <div className="flex flex-col items-center gap-6 bg-gray-800 mt-4 py-4 rounded-2xl">
            <div className="flex w-full justify-center mt-3">
                <p className="font-montserrat text-gray-300 text-center text-4xl leading-8">Book Your Repair Below</p>
            </div>

            <div className='rounded-2xl shadow-2xl bg-gray-300 w-3/4 py-5 px-5'>
                <form>
                    {showSection1 &&
                        <FormSection title={'Your Details'}>
                            <StandardInput type={'text'} label={'Full Name'} id={'fullName'} placeholder={"Jane Doe"} value={fullName} setValue={setFullName}/>
                            <StandardInput type={'text'} label={'Contact Number'} id={'contactNumber'} placeholder={"+44"} value={contactNumber} setValue={setContactNumber}/>
                            <StandardInput type={'text'} label={'Email'} id={'email'} placeholder={'@outlook.com'} value={email} setValue={setEmail}/>
                        </FormSection>
                    }
                    {showSection2 &&
                        <FormSection title={"Device Details"}>
                            <StandardInput type={'select'} label={'Device Type'} id={'deviceType'} placeholder={""} value={deviceType} setValue={setDeviceType} options={['Phone', 'Tablet', 'Desktop', 'Laptop']}/>
                            <StandardInput type={'text'} label={'Brand'} id={'deviceBrand'} placeholder={"Apple"} value={deviceBrand} setValue={setDeviceBrand}/>
                            <StandardInput type={'text'} label={'Model'} id={'deviceModel'} placeholder={'iPhone 11'} value={deviceModel} setValue={setDeviceModel}/>
                            <StandardInput type={'text'} label={'Serial Number'} id={'deviceSerialNumber'} placeholder={'SN:'} value={deviceSerialNumber} setValue={setDeviceSerialNumber}/>
                        </FormSection>
                    }
                    {showSection3 &&
                        <FormSection title={"Problems & Issues"} leading={STR_PROB_ISSUES}>
                            <TextArea value={issuesDescription} setValue={setIssuesDescription}/>
                        </FormSection>
                    }
                    {showSection4 &&
                        <>
                            <FormSection title={"Contact Preferences"}>
                                <p>Test</p>
                            </FormSection>
                            <div className="flex w-full justify-center mt-3">
                                <SendButton/>
                            </div>

                        </>

                    }


                </form>

                <div className="flex w-full justify-evenly flex-row">
                    <div className={`p-2 rounded-full ${isSection1Valid ? "bg-blue-400" : "bg-gray-400"}  ${showSection1 ? "ring-3 border-4 border-gray-800" : "ring-3 border-4 border-gray-300"}`}>
                        {isSection1Valid ? (
                            <CheckIcon className="size-14" onClick={() => {
                                setShowSection1(true)
                                setShowSection2(false)
                                setShowSection3(false)
                                setShowSection4(false)
                            }} />
                        ) : (
                            <UserIcon className={"size-14 text-gray-800"} onClick={() => {
                                setShowSection1(true)
                                setShowSection2(false)
                                setShowSection3(false)
                                setShowSection4(false)
                            }} />
                        )}
                    </div>
                    <div className={`p-2 rounded-full ${isSection2Valid ? "bg-blue-400" : "bg-gray-400"}  ${showSection2 ? "ring-3 border-4 border-gray-800" : "ring-3 border-4 border-gray-300"}`}>
                        {isSection2Valid ? (
                            <CheckIcon className="size-14 text-gray-800" onClick={() => {
                                setShowSection1(false)
                                setShowSection2(true)
                                setShowSection3(false)
                                setShowSection4(false)
                            }} />
                        ) : (
                            <ComputerDesktopIcon
                                className="size-14 text-gray-600"
                                onClick={() => {
                                    if (isSection1Valid) {
                                        setShowSection1(false);
                                        setShowSection2(true);
                                        setShowSection3(false)
                                        setShowSection4(false)
                                    } else {
                                        setShowSection1(true);
                                        setShowSection2(false);
                                        setShowSection3(false)
                                        setShowSection4(false)
                                    }
                                }}
                            />
                        )}
                    </div>


                    <div className={`p-2 rounded-full ${isSection3Valid ? 'bg-blue-400' : 'bg-gray-400'}  ${showSection3 ? "ring-3 border-4 border-gray-800" : "ring-3 border-4 border-gray-300"}`}>
                        {isSection3Valid ? (
                            <CheckIcon className="size-14 text-gray-800" onClick={() => {
                                setShowSection1(false)
                                setShowSection2(false)
                                setShowSection3(true)
                                setShowSection4(false)
                            }} />
                        ) : (
                            <WrenchIcon
                                className="size-14 text-gray-600"
                                onClick={() => {
                                    if (isSection2Valid) {
                                        setShowSection1(false);
                                        setShowSection2(false);
                                        setShowSection3(true);
                                        setShowSection4(false)
                                    } else {
                                        setShowSection1(false);
                                        setShowSection2(true);
                                        setShowSection3(false);
                                        setShowSection4(false)

                                    }
                                }}
                            />
                        )}
                    </div>


                    <div className={`p-2 rounded-full ${isSection4Valid ? 'bg-blue-400' : 'bg-gray-400'}  ${showSection4 ? "ring-3 border-4 border-gray-800" : "ring-3 border-4 border-gray-300"}`}>
                        {isSection4Valid ? (
                            <CheckIcon className="size-14 text-gray-800" onClick={() => {
                                setShowSection1(false)
                                setShowSection2(false)
                                setShowSection3(false)
                                setShowSection3(false)
                                setShowSection4(true)
                            }} />
                        ) : (
                            <PhoneIcon
                                className="size-14 text-gray-600"
                                onClick={() => {
                                    if (isSection3Valid) {
                                        setShowSection1(false);
                                        setShowSection2(false);
                                        setShowSection3(false);
                                        setShowSection4(true)
                                    } else {
                                        setShowSection1(false);
                                        setShowSection2(false);
                                        setShowSection3(true);
                                        setShowSection4(false)

                                    }
                                }}
                            />
                        )}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default RepairForm
