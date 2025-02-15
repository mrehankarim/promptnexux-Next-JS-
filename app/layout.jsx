import '@/styles/global.css'
import Nav from '@components/Nav'
import Provider from '@components/Provider'
import {connectToDB} from '@utils/database'
export const metadata={
    title:'Promptnexnus',
    description:'Discover and share AI prompts'
}
const RootLayout = ({children}) => {
  return (
    <html lang="en">
        <body>
            <Provider>
            <div className='main'>
                <div className='gradient'/>
            </div>
            <main className='app'>
                <Nav></Nav>
                {children}
            </main>
            </Provider>
        </body>
      
    </html>
  )
}

export default RootLayout
