import React, { useState } from 'react';
import useJobs from '../../hooks/useJobs';
import HotJobCard from '../Home/HotJobCard';
import Loading from '../../router/Loading';

const AllJobs = () => {

    const [sort, setSort] = useState(false);
    const { jobs, loading } = useJobs(sort);
    if(loading){
        return <h1><Loading></Loading></h1>;
    }
    // console.log(sort)

    return (
        <div>
            <h1 className='py-5 text-4xl font-bold text-center'>All Jobs</h1>

            <div className='bg-base-200 py-5 p-3 flex items-center mb-5'>
                <button onClick={() => setSort(!sort)} className={`btn btn-neutral ${sort && "btn-success text-white"}`}>
                {sort == true ? "Sorted by Salary" : "Sort by Salary" }
                </button>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {
                    jobs.map(job => <HotJobCard key={job._id} job={job}></HotJobCard>)
                }
            </div>
        </div>
    );
};

export default AllJobs;