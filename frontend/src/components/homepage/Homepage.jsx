import React from 'react'
import MyNav from '../myNav/MyNav';
import JobsSummary from '../jobsSummary/JobsSummary';
import MyFooter from '../myFooter/MyFooter'

const Homepage = () => {
    return (
        <>
        <MyNav />
        <JobsSummary />
        <MyFooter />
        </>
    );
}

export default Homepage;