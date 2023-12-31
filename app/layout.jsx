import '@styles/globals.css'
import Nav from '@components/Nav';
import Provider from '@components/Provider'


export const metadata = {
    title: "nextjs-app",
    description: 'Discover & Share AI Prompts'
}

const RootLayout = ({ children }) => {
  return (
    <html leng="eng">
        <body>
            <Provider>
            <div className="main">
                <div className="gradient" />
            </div>
            
            <main className="app">
                <Nav />
                {children}
            </main>
            </Provider>
        </body>
    </html>
  )
}

export default RootLayout
