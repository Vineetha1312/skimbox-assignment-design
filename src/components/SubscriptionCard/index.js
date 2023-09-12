import './index.css'
import {FaRupeeSign} from 'react-icons/fa'
import {TiTick} from 'react-icons/ti'

const SubscriptionCard = props => {
    const {cardDetails} = props
    const {title,businessType,description,amount,detailsHeading, includedItem1, includedItem2, includedItem3} = cardDetails
    return(
        <li className='subscription-card'>
        <h1 className='basic-title'>{title}</h1>
        <p className='basic-business-type'>{businessType}</p>
        <p className='basic-business-description'>{description}</p>
        <div className='basic-price-section'>
            <p className='basic-amount'><FaRupeeSign size={35}/>{amount}</p>
            <div className='price-section'>
                <p className='basic-amount-type'>INR</p>
                <p className='basic-amount-type'>/mo</p>
            </div>
        </div>
        <div className='basic-middle-section'>
                <p className='basic-month-wise-price'>Get your first 3 months for <FaRupeeSign size={12}/>20/mo</p>
            </div>
        <p className='basic-business-type'>{detailsHeading}</p>
        <div className='details-section'>
        <div className='basic-details'>
        <TiTick color="#6cf0e9" size={20}/>
            <p className='details-description'>{includedItem1}</p>
        </div>
        <div className='basic-details'>
        <TiTick color="#6cf0e9" size={20}/>
            <p className='details-description'>{includedItem2}</p>
        </div>
        <div className='basic-details'>
            <TiTick color="#6cf0e9" size={20}/>
            <p className='details-description'>{includedItem3}</p>
        </div>
        </div>
        <button type='button' className='basic-try-button'>Try for free</button>
    </li>
    )
}

export default SubscriptionCard