import classes from './style.module.scss'

const { infoBtnCntr } = classes


export default function PersonInfoBtn({ value }:{ value: string }) {

    return (
        <li className={infoBtnCntr} >
            <button>
                <h1><span>{value}</span></h1>
            </button>
        </li>
    )
}