import UsersCarousel from './UsersCarousel';
import styles from '@/../styles/Users.module.css'
const Users = () => {
  return (
    <div className='bg-[transparent] py-16'>
      <div className='relative z-[1] flex flex-col gap-12'>
        <h2 className='text-center text-[1.75rem] font-semibold md:text-[2.5rem] lg:text-[2.813rem]'>Here&apos;s why marketers <span className={`${styles.pulsingHeart}`}>Semrush</span></h2>
        <UsersCarousel />
      </div>
    </div>
  )
}

export default Users;