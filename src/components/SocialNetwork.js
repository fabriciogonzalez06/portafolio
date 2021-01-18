import React from "react";
import { SocialNetworkItem } from "./SocialNetworkItem";
import PropTypes from 'prop-types';


export const SocialNetwork = ({socialNetworks}) => {


  return (
    <div className="s-hero__content-social">

      {socialNetworks.map((s,i) => (
        <SocialNetworkItem  socialNetworkItem={s}  key={i} />
      ))}

    </div>
  );
};


SocialNetwork.prototype={
    socialNetworks:PropTypes.array.isRequired
}
