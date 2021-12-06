/**
 * TODO:
 *
 * 1. When different promotion is shown, trackImpression should be called.
 * 2. Reorder promotions should not cause trackImpression to be called again.
 */

import { useState, useEffect } from 'react';
import { trackImpression } from '../services/analytics';

const promotions = [
  { text: '50% Discount', done: false },
  { text: 'Friends and Family Package', done: false },
  { text: 'Deepavali Promotion', done: false },
  { text: 'Raya Promotion', done: false },
  { text: 'Christimas Promotion', done: false },
  { text: 'New Year Discount', done: false },
];

const Item = ({ text }) => {
  useEffect(() => {
    trackImpression(text);
  }, []);

  return (
    <div>
      <p>{text}</p>
    </div>
  );
};

const Promotions = () => {
  const [page, setPage] = useState(0);
  const [isReversed, setIsReversed] = useState(false);

  const displayedPromotions = promotions.slice(page * 2, (page + 1) * 2);

  return (
    <div>
      <div>
        <button
          onClick={() => setPage(page - 1)}
          type="button"
          disabled={page === 0}
        >
          {'<'}
        </button>
        <button onClick={() => setPage(page + 1)} type="button">
          {'>'}
        </button>
        <button onClick={() => setIsReversed(!isReversed)}>Reorder</button>
      </div>
      <ul>
        {(isReversed ? displayedPromotions.reverse() : displayedPromotions).map(
          (promotion, i) => (
            <Item text={promotion.text} key={i} />
          )
        )}
      </ul>
    </div>
  );
};

export function Three() {
  return (
    <div>
      <h1>Three</h1>
      <Promotions />
    </div>
  );
}
