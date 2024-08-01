import { staff } from '../../constants';
import { TeamProfileCard } from './index.tsx';

const MeetTheTeam = () => {
    return(
        <>
            <h2 className="text-8xl text-left font-palanquin font-bold my-6">
                Meet The <span className="text-blue-500"> Team</span>
            </h2>
            <div className="flex w-full justify-evenly bg-red-400 py-3">
                {staff.map((staff, i) => (
                    <TeamProfileCard key={i} email={staff.email} job={staff.job} linkedin={staff.linkedin}
                                     name={staff.name} />
                ))}
            </div>
        </>

    )
}

export default MeetTheTeam