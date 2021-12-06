/**
 * TODO:
 *
 * When Add checkbox is checked, clicking the count button should increment the number.
 * When Add checkbox is unchecked, clicking the count button should decrement the number.
 */

import { useState } from 'react';

function CountButton({ isAdd }) {
  const [count, setCount] = useState(0);

  const processStuff = (count) => {
    if (isAdd) {
      setCount(count + 1);
    } else {
      setCount(count - 1);
    }
  };

  return (
    <button
      type="button"
      onClick={() => setCount((count) => processStuff(count))}
    >
      count is: {count}
    </button>
  );
}

function Toggle({ isAdd, setIsAdd }) {
  return (
    <label className="checkbox">
      <input
        type="checkbox"
        checked={isAdd}
        onChange={(ev) => setIsAdd(ev.target.checked)}
      />
      Add
    </label>
  );
}

export function One() {
  const [isAdd, setIsAdd] = useState(true);

  return (
    <div>
      <h1>One</h1>
      <CountButton isAdd={isAdd} />
      <Toggle isAdd={isAdd} setIsAdd={setIsAdd} />
    </div>
  );
}
