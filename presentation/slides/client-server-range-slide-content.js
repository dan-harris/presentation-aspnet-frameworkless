import React from 'react';
import { Heading, Layout } from 'spectacle';

export const ClientServerRangeSlideContent = () => (
  <Layout style={{ justifyContent: 'center' }}>
    <Heading size={5}>Client > Server</Heading>
  </Layout>
);

export const ClientServerRangeSlideNotes = (
  <>
    <h3>Client</h3>
    <ul>
      <li>fully client driven</li>
      <li>traditional SPA...</li>
      <li>things like PWA, mobile</li>
    </ul>
    <h3>Mini SPA / Mini-app</h3>
    <ul>
      <li>similar to SPA, but smaller in scope</li>
      <li>page skeleton + (outer) routing controlled elsewhere</li>
      <li>slight distinction to SPA</li>
    </ul>
    <h3>Web Components</h3>
    <ul>
      <li>again, slight step down from mini-app</li>
      <li>generally different scope, as can compose multiple components (e.g. SPA)</li>
      <li>slight distinction to SPA</li>
    </ul>
    <h3>Light interaction</h3>
    <ul>
      <li>Direct DOM manipulation</li>
      <li>event listeners .etc</li>
      <li>e.g. alot of the methods that jQuery provides</li>
      <li>side note - jQuery API was so good, that browser native has them... no need for jQuery most of the time</li>
      <li>ideally hardly any scope & just presentational</li>
    </ul>
    <h3>Server</h3>
    <ul>
      <li>server render</li>
      <li>aspnet, tada</li>
      <li>purely static markup, no client side interaction</li>
    </ul>
  </>
);
