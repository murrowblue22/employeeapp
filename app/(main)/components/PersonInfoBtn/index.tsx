import classes from './style.module.scss'
import Image from 'next/image'

import personIcon from '../../../../public/assets/imgs/avatars/person.jpg'

const { infoBtnCntr, btnAvatarSection, btnAvatarCntr, btnAvatar } = classes
const { btnInfoSection, btnInfoCntr, btnInfo } = classes

interface IPersonInfo {
    profilePath: string
    name: string
    age: string
    city: string

} 

export default function PersonInfoBtn({ value }:{ value: string }) {

    const tempPerson: IPersonInfo = {
        profilePath: '../../../../public/assets/imgs/avatars/person.jpg',
        name: 'jane doe',
        age: '31', 
        city: 'New York'
    }

    return (
        <li className={infoBtnCntr} >
            <button>
                <section className={btnAvatarSection}>
                    <picture className={btnAvatarCntr}>
                        {/* <Image className={btnAvatar} src={tempPerson.profilePath} alt="Person Image icon" /> */}
                        <img className={btnAvatar} src='assets/imgs/avatars/person.jpg' alt="Person Image icon" />
                    </picture>
                </section>
                <section className={btnInfoSection}>
                    <div className={btnInfoCntr}>
                        <div className={btnInfo}>
                            <label>
                                <span>Name: </span>
                            </label>
                            <div>
                                <span>{tempPerson.name}</span>
                            </div>
                        </div>
                        <div className={btnInfo}>
                            <label>
                                <span>Age: </span>
                            </label>
                            <div>
                                <span>{tempPerson.age}</span>
                            </div>
                        </div>
                        <div className={btnInfo}>
                            <label>
                                <span>City: </span>
                            </label>
                            <div>
                                <span>{tempPerson.city}</span>
                            </div>
                        </div>
                    </div>
                </section>
            </button>
        </li>
    )
}