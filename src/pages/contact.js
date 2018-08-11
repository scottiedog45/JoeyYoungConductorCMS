import React from 'react'
import backgroundImage from '../img/contact.jpg'

export default class IndexPage extends React.Component {
    render() {
        return (
            <div>
                <img className='contactBackgroundImage' src={backgroundImage} />
									<div className='contactInfo'>
										<p>Thanks for visiting</p>
										<p>Please contact some random manager for info</p>
									</div>
            </div>
        )
    }
}