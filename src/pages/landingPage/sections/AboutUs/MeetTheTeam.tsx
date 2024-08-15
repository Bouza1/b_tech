import { motion } from 'framer-motion';
import { staff } from '../../../../constants';
import { TeamProfileCard } from './index.tsx';

const MeetTheTeam = () => {
    return (
        <div className="flex flex-col gap-10">
            <motion.div
                className=""
                initial={{
                    opacity: 0,
                    x: 0,
                    y: -100,
                }}
                whileInView={{
                    opacity: 1,
                    x: 0,
                    y: 0,
                    transition: {
                        type: 'tween',
                        bounce: 0.4,
                        duration: 0.8,
                    },
                }}
                viewport={{ once: false }}
            >
                <h2 className="text-8xl text-left font-palanquin text-gray-900 font-bold">
                    Meet The <span className="text-blue-500"> Team</span>
                </h2>
            </motion.div>

            <div className="relative flex w-full">
                <motion.div
                    className="flex absolute w-full h-full bg-triangle_purple"
                    initial={{
                        opacity: 0,
                        x: 100,
                        y: 0,
                    }}
                    whileInView={{
                        opacity: 1,
                        x: 0,
                        y: 0,
                        transition: {
                            type: 'tween',
                            bounce: 0.4,
                            duration: 0.8,
                        },
                    }}
                    viewport={{ once: false }}
                ></motion.div>
                <div className="flex flex-row relative justify-evenly w-full">
                    {staff.map((staff, i) => (
                        <TeamProfileCard
                            key={i}
                            email={staff.email}
                            job={staff.job}
                            linkedin={staff.linkedin}
                            name={staff.name}
                            photo={staff.photo}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MeetTheTeam;
