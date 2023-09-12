import {Component} from 'react'
import './index.css'
import { CustomButton } from "./styledComponents";
import Header from '../Header'
import BasicCard from '../BasicCard'
import SubscriptionCard from '../SubscriptionCard'
import TabItem from '../TabItem'

const tabsList = [
    {'tabId' : 'BASIC', 'title':'Basic'},
    {'tabId' : 'SHOPIFY', 'title':'Shopify'},
    {'tabId' : 'ADVANCED', 'title':'advanced'}
]

const subscriptionList = [
    {
        'id' : 'SHOPIFY', 
        'title' : 'Shopify',
        'businessType' : 'FOR SMALL BUSINESSES',
        'description' : 'Level up your business with professional reporting and more staff accounts',
        'amount' : '7,447',
        'threeMonthsDesctription' : 'Get your first 3 months for ₹20/mo',
        'detailsHeading' : "What's included on Shopify",
         'includedItem1' : 'Professional reports',
         'includedItem2' : 'Up to 1,000 inventory locations',
         'includedItem3' : '5 staff accounts'

    },
    {
        'id' : 'ADVANCED', 
        'title' : 'Advanced',
        'businessType' : 'FOR MEDIUM TO LARGE BUSINESSES',
        'description' : 'Get the best of Shopify with custom reporting and our lowest transaction fees',
        'amount' : '30,164',
        'threeMonthsDesctription' : 'Get your first 3 months for ₹20/mo',
        'detailsHeading' : "What's included on Advanced",
         'includedItem1' : 'Custom report builder',
         'includedItem2' : 'Up to 1,000 inventory locations',
         'includedItem3' : '15 staff accounts'

    }
]

const subscriptionListSmallDeviced = [
    {
        'id' : 'BASIC', 
        'title' : 'Basic',
        'businessType' : 'FOR INDIVIDUALS & SMALL BUSINESSES',
        'description' : 'Everything you need to create your store, ship products, and process payments',
        'amount' : '1,994',
        'threeMonthsDesctription' : 'Get your first 3 months for ₹20/mo',
        'detailsHeading' : "What's included on Basic",
         'includedItem1' : 'Basic reports',
         'includedItem2' : 'Up to 1,000 inventory locations',
         'includedItem3' : '2 staff accounts'

    },
    {
        'id' : 'SHOPIFY', 
        'title' : 'Shopify',
        'businessType' : 'FOR SMALL BUSINESSES',
        'description' : 'Level up your business with professional reporting and more staff accounts',
        'amount' : '7,447',
        'threeMonthsDesctription' : 'Get your first 3 months for ₹20/mo',
        'detailsHeading' : "What's included on Shopify",
         'includedItem1' : 'Professional reports',
         'includedItem2' : 'Up to 1,000 inventory locations',
         'includedItem3' : '5 staff accounts'

    },
    {
        'id' : 'ADVANCED', 
        'title' : 'Advanced',
        'businessType' : 'FOR MEDIUM TO LARGE BUSINESSES',
        'description' : 'Get the best of Shopify with custom reporting and our lowest transaction fees',
        'amount' : '30,164',
        'threeMonthsDesctription' : 'Get your first 3 months for ₹20/mo',
        'detailsHeading' : "What's included on Advanced",
         'includedItem1' : 'Custom report builder',
         'includedItem2' : 'Up to 1,000 inventory locations',
         'includedItem3' : '15 staff accounts'

    }
]

class ShopifyRoute extends Component {
        state = {
            activeTabId : tabsList[0].tabId,
        }

        onClickTabItem = tabId => {
            this.setState({activeTabId : tabId})
        }

        getFilteredCards = () => {
            const {activeTabId} = this.state 
            const filteredCards = subscriptionListSmallDeviced.filter(eachCard => eachCard.id === activeTabId)
            return filteredCards
        }

    render(){
        const filteredProjects = this.getFilteredCards()
        return(
            <div className='bg-container'>
        <Header/>
        <div className='body-container-large'>
        <div className='subscription-container'>
            <CustomButton type='button' activeButton={true} onClick={this.onClickActiveButton}>Pay Monthly</CustomButton>
            <CustomButton type='button' activeButton={false} onClick={this.onClickActiveButton}>Pay Yearly(Save 25%)</CustomButton>
        </div>
        <div className='subscription-plans-section'>
        <fieldset className='basic-card-container'>
        <legend className='legend-item'>MOST POPULAR</legend>
            <BasicCard/>
            </fieldset>
            <ul className='cards-lg'>
            {subscriptionList.map(eachCard => (
                <SubscriptionCard cardDetails={eachCard} key={eachCard.id}/>
            ))}
            </ul>
        </div>
        </div>
        <div className='body-container-sm'>
            <ul className='tabs-container'>
                {tabsList.map(eachTab => (
                    <TabItem tabDetails={eachTab} key={eachTab.tabId} onClickTabItem = {this.onClickTabItem}/>
                ))}
            </ul>
            <div className='card-for-small-devices'>
                    {filteredProjects.map(eachItem => (
                        <SubscriptionCard cardDetails={eachItem} key={eachItem.id}/>
                    ))}
            </div>
        </div>
    </div>
        )
    }
}



export default ShopifyRoute