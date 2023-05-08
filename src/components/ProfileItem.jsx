import React, { useState } from 'react'
import Close from '../assets/close.svg'


const ProfileItem = ({ img, title, details }) => {
    const [modal, setModal] = useState(false);

    const toggleModel = () => {
        setModal(!modal);
    }
    return (
        <div className='profile__item'>
            <img src={img} alt='' className='profile__img' />

            <div className='profile__hover' onClick={toggleModel}>
                <h3 className='profile__title'>{title}</h3>
            </div>

            {modal && (
                <div className='profile__modal'>
                    <div className='profile__modal-content'>
                        <img src={Close} alt="" className='modal__close' onClick={toggleModel} />
                        <h3 className="modal__title">
                            {title}
                        </h3>
                        <ul className='modal__list grid'>
                            {details.map(({ icon, title, desc }, index) => {
                                return (
                                    <li className="modal__item" key={index}>
                                        <span className='item__icon'>{icon}</span>

                                        <div>
                                            <span className='item__title'>{title}</span>
                                            <span className='item__details'>{desc}</span>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                        <img src={img} alt="" className="modal__img" />

                    </div>
                </div>
            )}
        </div>
    )
}

export default ProfileItem