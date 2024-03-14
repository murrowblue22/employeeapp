import PersonDetail from '../../components/PersonDetail'
import { IPersonData } from '../../utils/model'

import classes from './style.module.scss'

const { detailCntr, detailHdr,  detailCnt} = classes


export default async function Detail({ params } : { params: any}) {

    const incList = 'picture,dob,name,location,email,phone'

    const dataRes = await fetch(`https://randomuser.me/api/?page=1&results=10&nat=us&seed=fdempl7f432f8f87&inc=${incList}`)
    const data = await dataRes.json()
    const peopleList = data.results as IPersonData[]

    return (
        <main className={detailCntr}>
            <header className={detailHdr}>
                <h1>
                    <span>Person Details</span>
                </h1>
            </header>
            <section className={detailCnt}>
                <PersonDetail value={peopleList[params.id]}/>
            </section>
        </main>
    )
}