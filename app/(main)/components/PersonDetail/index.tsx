import Image from 'next/image';
import Link from 'next/link';
import backArrowIcon from '../../../../public/assets/icons/back_arrow_icon.svg'

import classes from './style.module.scss'

const { detailCntr, detailCntrHdr, btnArrowCntr, btnArrowIcon } = classes
const { personAvatarSection, personAvatarCntr, personAvatar } = classes
const { personInfoSection, infoLabelCntr, infoValueCntr } = classes

import { IPersonData } from "../../utils/model";

export default function PersonDetail({ value }:{ value: IPersonData}) {

    return (
        <section className={detailCntr}> 
            <header className={detailCntrHdr}>
               <Link href='/' className={btnArrowCntr}>
                    <Image className={btnArrowIcon} src={backArrowIcon} alt="back arrow icon" />
               </Link>
            </header>
            <section className={personAvatarSection}>
                <picture className={personAvatarCntr}>
                    <img className={personAvatar} src={value.picture.thumbnail} alt="Person Image icon" />
                </picture>
            </section>
            <section className={personInfoSection}>
                <div className={infoLabelCntr}>
                    <label><span>Name: </span></label>
                    <label><span>Age: </span></label>
                    <label><span>Address: </span></label>
                    <label><span>Email: </span></label>
                    <label><span>DoB: </span></label>
                    <label><span>Phone#: </span></label>

                </div>
                <div className={infoValueCntr}>
                    <div><span>{`${value.name.first} ${value.name.last}`}</span></div>
                    <div><span>{`${value.dob.age}`}</span></div>
                    <div><span>{`${value.location.street.name} ${value.location.street.number}, ${value.location.city} ${value.location.state}, ${value.location.postcode}`}</span></div>
                    <div><span>{`${value.email}`}</span></div>
                    <div><span>{`${value.dob.date}`}</span></div>
                    <div><span>{`${value.phone}`}</span></div>
                </div>
            </section>
        </section>
    )


}