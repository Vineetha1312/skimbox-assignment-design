import './index.css'
import {FaRupeeSign} from 'react-icons/fa'
import {TiTick} from 'react-icons/ti'

const BasicCard = () => (
    <div className='basic-card'>
        <h1 className='basic-title'>Basic</h1>
        <p className='basic-business-type'>FOR INDIVIDUALS & SMALL BUSINESSES</p>
        <p className='basic-business-description'>Everything you need to create your store, ship products, and process payments</p>
        <div className='basic-price-section'>
            <p className='basic-amount'><FaRupeeSign size={35}/>1,994</p>
            <div className='price-section'>
                <p className='basic-amount-type'>INR</p>
                <p className='basic-amount-type'>/mo</p>
            </div>
        </div>
        <div className='basic-middle-section'>
                <p className='basic-month-wise-price'>Get your first 3 months for <FaRupeeSign size={12}/>20/mo</p>
            </div>
        <p className='basic-business-type'>What's included on Basic</p>
        <div className='details-section'>
        <div className='basic-details'>
        <TiTick color="#6cf0e9" size={20}/>
            <p className='details-description'>Basic Reports</p>
        </div>
        <div className='basic-details'>
        <TiTick color="#6cf0e9" size={20}/>
            <p className='details-description'>Up to 1,000 inventory locations</p>
        </div>
        <div className='basic-details'>
            <TiTick color="#6cf0e9" size={20}/>
            <p className='details-description'>2 staff accounts</p>
        </div>
        </div>
        <button type='button' className='basic-try-button'>Try for free</button>
    </div>
)

export default BasicCard