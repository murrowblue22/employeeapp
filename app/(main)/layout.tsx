import { ReactNode } from "react"
import { Poppins } from 'next/font/google' 
import Image from 'next/image'

import './appGlobal.css'
import classes from './app.module.scss'
import creatorIcon from '../../public/assets/imgs/avatars/creator.jpg'

const { rootContainer, header, profileCntr, profileAvatar } = classes
const { appCreatorInfo, appInfo, creatorInfo } = classes
const { mainSection, mainSectionHdr, mainSectionCnt } = classes

const poppins = Poppins({
    weight: ['100', '200', '300', '400', '500', '600'], 
    style: ['normal',  'italic'], 
    subsets: ['latin'], 
    display: 'swap'
})

export const metadata = {
    title: 'EmployeeApp',
    description: 'Nextjs Coding Challenge',
    appleWebApp: {
      statusBarStyle: 'default'
    },
}

export const viewport = {
    width: 'device-width', 
    initialScale: 1,
    minimumScale: 1, 
    maximumScale: 1,
    userScalable: 1, 
    interactiveWidget: 'resizes-visual'
}

export default function RootLayout({ children } : { children: ReactNode}) {


    return (
        <html>
            <body className={poppins.className}>
                <main className={rootContainer}>
                    <header className={header}>
                        <figure className={profileCntr}>
                            <Image className={profileAvatar} src={creatorIcon} alt="creator avatar image" />
                        </figure>
                        <p className={appCreatorInfo}>
                            <span className={appInfo}>People Directory</span>
                            <span className={creatorInfo}>Errol Pinkney</span>
                        </p>
                    </header>
                    <section className={mainSection}>
                        <header className={mainSectionHdr}>
                            <h1>People Directory Information</h1>
                        </header>
                        <section className={mainSectionCnt}>
                            {children}
                        </section>
                    </section>
                </main>
            </body>
        </html>
    )
}