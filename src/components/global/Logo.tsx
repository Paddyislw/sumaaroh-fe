import logo from '../../assets/Logo.png'

const Logo = () => {
  return (
    <div className=''>
        <img src={logo} alt="Logo" className='mx-auto'/>
        <p className='text-center text-[#D1C4A1] font-semibold'>THE WEDDING COMPANY</p>
    </div>
  )
}

export default Logo