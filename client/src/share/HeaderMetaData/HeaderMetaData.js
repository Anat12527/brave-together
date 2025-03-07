import React from 'react'
import {Helmet} from 'react-helmet'
import PropTypes from 'prop-types'

const HeaderMetaData = (props) => {
    return (
       <Helmet>
           <meta name='title' content={props.title} data-react-helmet="true"/>
           <meta name='description' content={props.description} data-react-helmet="true"/>
           <meta name='image' content='https://imagestoshare.s3.us-east-2.amazonaws.com/images/myImage.png' data-react-helmet="true"/>
       </Helmet>
    )
}

HeaderMetaData.propTypes ={
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}

export default HeaderMetaData
