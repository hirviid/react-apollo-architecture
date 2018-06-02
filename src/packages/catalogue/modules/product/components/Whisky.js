// @flow
import React from 'react';
import FormattedPrice from '../../../../../common/components/FormattedPrice';

type Props = {
  whisky: Product,
  addToCart: Function,
};

const Whisky = ({ whisky, addToCart }: Props) => (
  <div>
    <img src={`/images/catalogue/${whisky.id}.jpg`} width={200} alt={whisky.name} />
    <FormattedPrice {...whisky.price} /> {whisky.name}
    <button onClick={addToCart}>Add to cart</button>
  </div>
);

export default Whisky;
