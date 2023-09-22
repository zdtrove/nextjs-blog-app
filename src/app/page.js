import styles from './page.module.css'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      <Footer />
    </div>
  )
}
