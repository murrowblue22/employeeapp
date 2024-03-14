import classes from './style.module.scss'
import Image from 'next/image'
import { IPersonData } from '../../utils/model'

import personIcon from '../../../../public/assets/imgs/avatars/person.jpg'

const { infoBtnCntr, btnAvatarSection, btnAvatarCntr, btnAvatar } = classes
const { btnInfoSection, btnInfoCntr, btnInfo } = classes



export default function PersonInfoBtn({ value, id }:{ value: IPersonData, id: number }) {

    

    return (
        <li className={infoBtnCntr} >
            <button>
                <section className={btnAvatarSection}>
                    <picture className={btnAvatarCntr}>
                        <img className={btnAvatar} src={value.picture.thumbnail} alt="Person Image icon" />
                    </picture>
                </section>
                <section className={btnInfoSection}>
                    <div className={btnInfoCntr}>
                        <div className={btnInfo}>
                            <label>
                                <span>Name: </span>
                            </label>
                            <div>
                                <span>{`${value.name.first} ${value.name.last}`}</span>
                            </div>
                        </div>
                        <div className={btnInfo}>
                            <label>
                                <span>Age: </span>
                            </label>
                            <div>
                                <span>{`${value.dob.age}`}</span>
                            </div>
                        </div>
                        <div className={btnInfo}>
                            <label>
                                <span>City: </span>
                            </label>
                            <div>
                                <span>{value.location.city}</span>
                            </div>
                        </div>
                    </div>
                </section>
            </button>
        </li>
    )
}