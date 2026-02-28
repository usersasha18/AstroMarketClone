import { Outlet } from 'react-router-dom'
import  Header  from '../../widgets/Header/Header'
import  Footer  from '../../widgets/Footer/Footer'

export const MainLayout = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 container mx-auto p-4">
                <Outlet />
            </main>
          <Footer />
        </div>
    )
}