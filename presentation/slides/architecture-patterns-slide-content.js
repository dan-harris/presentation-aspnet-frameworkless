import React from 'react';
import { Heading, Layout } from 'spectacle';

export const ArchitecturePatternsSlideContent = () => (
  <Layout style={{ justifyContent: 'center' }}>
    <Heading size={5}>App / Mini / Sprinkles / Static</Heading>
  </Layout>
);

export const ArchitecturePatternsSlideNotes = (
  <>
    <h3>App</h3>
    <ul>
      <li>Highly interactive client, may use its own routing</li>
      <li>Because page skeleton is static, can pre-render this for even better TTR/TTI</li>
      <li>Still not intended to be incredibly deep</li>
    </ul>
    <h3>Mini-app</h3>
    <ul>
      <li>Very similar to App, but just smaller in scope.</li>
      <li>Usually a pointed interaction that requires hgih-interactability (e.g. a map)</li>
    </ul>
    <h3>Sprinkles</h3>
    <ul>
      <li>small component-based interactivity</li>
      <li />
      <li>slight distinction to SPA</li>
    </ul>
    <h3>Static</h3>
    <ul>
      <li>Direct DOM manipulation</li>
      <li>event listeners .etc</li>
      <li>e.g. alot of the methods that jQuery provides</li>
      <li>side note - jQuery API was so good, that browser native has them... no need for jQuery most of the time</li>
      <li>ideally hardly any scope & just presentational</li>
    </ul>
  </>
);

// HOW TO SUPPORT ALL THESE PATTERNS IN 1 ARCH?
// -> same pattern (TS Class ..etc)
