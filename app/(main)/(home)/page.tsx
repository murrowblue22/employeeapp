
import PersonInfoBtn from '../components/PersonInfoBtn'
import { IPersonData } from '../utils/model'

import classes from './style.module.scss'

const { homeCntr, homeHdr, homeCnt, peopleListCntr } = classes


export default async function Home({}:{}) {
    const incList = 'picture,dob,name,location,email,phone'

    const dataRes = await fetch(`https://randomuser.me/api/?page=1&results=10&nat=us&seed=fdempl7f432f8f87&inc=${incList}`)
    const data = await dataRes.json()
    const peopleList = data.results as IPersonData[]

    return (
        <main className={homeCntr}>
            <header className={homeHdr}>
                <h1>
                    <span>People List</span>
                </h1>
            </header>
            <section className={homeCnt}>
                <ul className={peopleListCntr}>
                    {
                        peopleList.map((val, index) => 
                            <PersonInfoBtn key={`person_${index}`} value={val} id={index} />
                        )
                    }
                </ul>
            </section>
        </main>
    )
}