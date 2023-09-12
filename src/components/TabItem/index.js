import './index.css'

const TabItem = props => {
    const {tabDetails, onClickTabItem} = props 
    const{title, tabId} = tabDetails

    const onClickTab = () => {
        onClickTabItem(tabId)
    }

    return(
        <li className='tab-item'>
            <button type='button' className='tab-button' onClick={onClickTab}>{title}</button>
        </li>
    )
}

export default TabItem