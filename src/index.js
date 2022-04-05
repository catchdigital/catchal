import React from 'react';
import {createRoot} from 'react-dom/client';
import Hello from './components/hello';


// Define available elements on this method.
const dictionary = {
  // User managements components
  Hello: Hello
}

// Get all 'data-react' elements on the page
const $reactElements = document.querySelectorAll('[data-react]');
$reactElements.forEach($el => {
  let component = $el.getAttribute('data-react');
  const root = createRoot($el);
  if (dictionary[component]) {
    let props = $el.dataset;
    delete props.react;
    let Component = dictionary[component];
    root.render(<Component {...props} />);
  }
});
