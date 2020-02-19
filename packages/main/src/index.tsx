import React from 'react';
import { render } from 'react-dom';

import Application from './Application';

export const rootElement = document.querySelector('#app');

function renderToDOM() {
    if (rootElement) {
        render(<Application />, rootElement);
    }
}

renderToDOM();
export { renderToDOM };
