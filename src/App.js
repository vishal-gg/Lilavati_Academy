import './globals.scss';
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Home from './screens/home/Home'
import Contact from './screens/contact/Contact'
import Team from './screens/team/Team'
import NotFound from './components/notfound/NotFound'

const App = () => {
  // Routes

  const Layout = () => {
    return (
      <div className='main'>
        <Navbar />
        <div className='contentContainer'>
          <Outlet />
          {/* <Example /> */}
        </div>
        <Footer />
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '*',
          element: <NotFound />
        },
        {
          path: '/',
          element: <Home />
        },
        //  {
        //     path: "/about",
        //     element: <About />,
        //  },
        {
          path: '#contact',
          element: <Contact />
        },
        {
          path: '/team',
          element: <Team />
        }
        //  {
        //     path: "/faq",
        //     element: <FAQ />,
        //  },
      ]
    }
  ])

  return <RouterProvider router={router} />
}
export default App
