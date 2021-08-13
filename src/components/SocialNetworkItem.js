import React from 'react'

import PropTypes from 'prop-types';
export const SocialNetworkItem = ({ socialNetworkItem }) => {

    return (
        <a href={socialNetworkItem?.url} target="_blanck" >
            <i className={socialNetworkItem?.icon} aria-hidden="true"></i>
        </a>
    )
}

SocialNetworkItem.prototype = {
    socialNetworkItem: PropTypes.object.isRequired
}
