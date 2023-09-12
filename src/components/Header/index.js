import './index.css'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import {RxCross2} from 'react-icons/rx'
import {GiHamburgerMenu} from 'react-icons/gi'

const Header = () => (
    <>
    <nav className='nav-container-lg'>
        <div className='navbar-section'>
        <img src='https://res.cloudinary.com/dwlbneeh4/image/upload/v1694456016/Shopify-Logo_hixsz1.png' className='website-logo' alt='webiste logo'/>
        <div className='nav-items-section'>
                <li className='nav-item'>Solutions</li>
                <li className='nav-item'>
                    <select id='price' className='select-element'>
                    <option>Pricing</option>
                    <option>0-500</option>
                    <option>500-1000</option>
                    <option>1000-2000</option>
                    <option>>2000</option>
                    </select>
                </li>
                <li className='nav-item'>Resources</li>
            </div>
        </div>
        <div className='items'>
        <li className='item'>Log in</li>
        <button type='button' className='trail-button'>Start free trail</button>
        </div>
    </nav>
    <nav className='nav-container-sm'>
        <img src='https://res.cloudinary.com/dwlbneeh4/image/upload/v1694456016/Shopify-Logo_hixsz1.png' className='website-logo' alt='webiste logo'/>
        <div className='nav-small-device-items'>
            <button type='button' className='trail-button'>Start free trails</button>
            <Popup
            modal
            trigger = {
                <button type='button' className='menu-button'><GiHamburgerMenu size={20}/></button>
            }
            position = 'top right'
            >
            {close => (
                <div className='nav-items-section-sm'>
                <div className='nav-items-sm'>
                <li className='nav-item'>Solutions</li>
                <li className='nav-item'>
                    <select id='price' className='select-element'>
                    <option className='nav-item'>Pricing</option>
                    <option>0-500</option>
                    <option>500-1000</option>
                    <option>1000-2000</option>
                    <option>>2000</option>
                    </select>
                </li>
                <li className='nav-item'>Resources</li>
                <li className='nav-item'>Log in</li>
            </div>
                <button type='button' className='cross-button' onClick={() => close()}><RxCross2/></button>
                </div>
            )}

            </Popup>
        </div>
    </nav>
    </>
)

export default Header