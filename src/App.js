import './App.css';
import Header from './components/Header/Header'
import NewestProducts from './components/NewestProducts'
import BestSelling from './components/BestSelling'
import Categories from './components/Categories'
import CoffeeClub from './components/CoffeeClub'
import Blogs from './components/Blogs'
import Contact from './components/Contact'
import Services from './components/Services'
import Footer from './components/Footer'

function App() {

  return (
    <div lang='fa' dir='rtl' className='bg-gray-100 dark:bg-zinc-800'>
      <Header />
      <NewestProducts />
      <Categories />
      <BestSelling />
      <CoffeeClub />
      <Blogs />
      <Contact />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
