import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import MyNav from '../../components/myNav/MyNav';
import './jobEntryPage.css'

const JobEntryPage = () => {
    const { id } = useParams()
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch(`https://localhost:3030/entry/${id}`, {
            headers:{
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.REACT_APP_BEARER_TOKEN}` // valore del contesto 
            }
        })
         .then(response => {
            if (!response.ok) throw new Error('Network error');
            return response.json();
         })
         .then(data => {
            setUser(data);
            setLoading(false);
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
            setLoading(false);
        });
      }, [id])

    if (loading) return <div>Loading...</div>;
    return (
        <>
        <MyNav />
        <div className='entry-row'>
            <p>[Job title] at [company] in [location]</p>
            <p>[link] [date]</p>
        </div>
        <div className='entry-row'>Notes</div>
        <div className='entry-row'>Recruiter</div>
        </>
    );
};

export default JobEntryPage;