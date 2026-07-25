import HeroBanner from '../components/home/HeroBanner'
import MarqueeBanner from '../components/home/MarqueeBanner'
import CategorySection from '../components/home/CategorySection'
import FeaturedProducts from '../components/home/FeaturedProducts'
import BestSellers from '../components/home/BestSellers'
import NewArrivals from '../components/home/NewArrivals'
import WhyChooseUs from '../components/home/WhyChooseUs'
import Testimonials from '../components/home/Testimonials'
import Newsletter from '../components/home/Newsletter'

function HomePage() {
  return (
    <main>
      <HeroBanner />
      <MarqueeBanner />
      <CategorySection />
      <FeaturedProducts />
      <WhyChooseUs />
      <BestSellers />
      <Testimonials />
      <NewArrivals />
      <Newsletter />
    </main>
  )
}

export default HomePage