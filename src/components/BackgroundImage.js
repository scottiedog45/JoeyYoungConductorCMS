import React from 'react'

export default class BackgroundImage extends React.Component {
    render () {
        return (
            <div className='picContainer'>
                <img src={this.props.picSource} />
            </div>
        )
    }
}