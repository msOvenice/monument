import { FC } from 'react'
import Contacts from './home-component/contacts/Contacts'
import HeaderMain from './home-component/headerMain/HeaderMain'
import Info from './home-component/info/Info'
import News from './home-component/news/News'
import Pages from './home-component/pages/Pages'
import Services from './home-component/services/Services'

const HomePage:FC = () => {
  return (
    <main className="min-h-screen">
      <HeaderMain />
      <Info />
      <Services />
      <Pages />
      <News />
      <Contacts />
    </main>
  )
}

export default HomePage