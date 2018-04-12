import React, { Fragment } from 'react';
import { declMod, Bem } from 'bem-react-core';

import CardImage from 'e:CardImage';
import CardDescription from 'e:CardDescription';
import CardButtons from 'e:CardButtons';

export default declMod({ type: 'smallWithText' }, {
  block: 'CardsContainer',
  elem: 'Card',
  content() {
    const {
      image,
      description,
    } = this.props.data;
    return (
      <Fragment>
        {this.__base(...arguments)}
        <CardDescription description={description} />
        <CardButtons />
      </Fragment>
    )
  }
});
