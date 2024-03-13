
import PersonInfoBtn from '../components/PersonInfoBtn'

import classes from './style.module.scss'

const { homeCntr, homeHdr, homeCnt, peopleListCntr } = classes

const peopleList: string[] = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]

export default function Home({}:{}) {

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
                            <PersonInfoBtn key={index} value={val} />
                        )
                    }
                </ul>
            </section>
        </main>
    )
}