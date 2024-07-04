import React from 'react'
import MyNav from '../../components/myNav/MyNav';

const JobEntryPage = () => {
    return (
        <>
            <MyNav />
            <div>[Job title] at [company] in [location]</div>
            <div>[link] [date]</div>
            <div>Notes</div>
            <div>Recruiter</div>
        </>
    )
}

export default JobEntryPage;