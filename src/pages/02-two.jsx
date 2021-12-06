/**
 * When the dismiss (X) button is click, the alert will be removed after 1.5s.
 *
 * Bug: when you click the dismiss button for 2nd time, it should not be removed anymore,
 * but currently it still be removed.
 *
 * TODO: Fix the bug.
 *
 * Tips: To reinitialize state, click on other page and come back.
 */

import { useState, useEffect } from 'react';

const DismissableAlert = () => {
  const [state, setState] = useState('idle'); // idle, dismissing, dismissed

  useEffect(() => {
    var timer;
    if (state === 'dismissing') {
      timer = setTimeout(() => setState('dismissed'), 1500);
    }

    return () => clearTimeout(timer); // Here unsubsribe the timer when unmount
  }, [state]);

  return state === 'dismissed' ? null : (
    <div className="alert">
      <p>{state === 'dismissing' ? 'Dismissing...' : 'Dismiss Me.'}</p>
      <button
        onClick={() => {
          setState(state === 'idle' ? 'dismissing' : 'idle');
        }}
        type="button"
        aria-label="Dismiss"
      >
        X
      </button>
    </div>
  );
};

export function Two() {
  return (
    <div>
      <h1>Two</h1>
      <DismissableAlert />
    </div>
  );
}
