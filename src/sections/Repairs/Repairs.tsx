import RepairForm from './RepairForm.tsx';
import { RepairInstructions } from './index.tsx';

const Repairs = () => {
    return (
        <div className="flex flex-col justify-center gap-3">
            <div className="text-left">
                <h2 className="text-8xl font-palanquin font-bold">
                    Need A <span className="text-blue-500"> Repair?</span>
                </h2>
                <p className="font-montserrat text-slate-gray text-left text-lg leading-8 mt-3">
                    Whether you are facing system performance issues or want to upgrade your
                    existing operating system, The Computer Shop is here to offer comprehensive
                    computer support and maintenance solutions. We have a fully-equipped workshop
                    and can handle repair jobs of any size. From virus removal to laptop screen
                    replacement, we are your first port of call for cost-effective repair services
                    in Dorset.
                </p>
            </div>
            <div className="flex flex-col justify-center">
                <div className="flex w-full justify-end mt-3">
                    <h2 className="text-8xl font-palanquin font-bold">
                        Book Your <span className="text-blue-500"> Repair</span>
                    </h2>
                </div>
                <div className="flex flex-row w-full">
                    <div className="w-1/3 p-7">
                        <RepairInstructions/>
                    </div>
                    <div className="w-2/3 p-7">
                        <RepairForm />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Repairs;
