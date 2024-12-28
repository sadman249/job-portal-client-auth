import React, { useEffect, useState } from 'react';
import HotJobCard from './HotJobCard';

const HotJobs = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/jobs?sort=false`)
            .then(res => res.json())
            .then(data => {
                setJobs(data);
            })
    }, [])

    return (
        <div>
            <h2 className='text-4xl mt-10 mb-5 text-center font-bold'>Hot Jobs</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {
                    jobs.map(job => <HotJobCard key={job._id} job={job}></HotJobCard>)
                }
            </div>
        </div>
    );
};

export default HotJobs;