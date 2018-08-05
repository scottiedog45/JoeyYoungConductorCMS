import React from 'React'
import PropTypes from 'prop-types'


const NameHeader = () => (
    <div>
        <h1 className='landingName'>JOSEPH YOUNG</h1>
    </div>
)


NameHeader.PropTypes = {
    name: PropTypes.string
}

export default NameHeader 