import React from 'react'
import { profile1 } from '../../data'
import ProfileItem from '../../components/ProfileItem'
import "./profile.css";


const Profile = () => {
    return (
        <section className='profile section'>
            <h2 className='section__title'>My <span>Profile</span></h2>

            <div className='profile__container container grid'>
                {profile1.map((item) => {
                    return <ProfileItem key={item.id} {...item} />;
                })}
            </div>
        </section>
    )
}

export default Profile