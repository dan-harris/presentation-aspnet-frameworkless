import React from 'react';
import { Deck, Slide } from 'spectacle';
import CodeSlide from 'spectacle-code-slide';
import preloader from 'spectacle/lib/utils/preloader';
import { images } from './images';
import { ArchitecturePatternsSlideContent, ArchitecturePatternsSlideNotes } from './slides/architecture-patterns-slide-content';
import { ClientServerRangeSlideContent, ClientServerRangeSlideNotes } from './slides/client-server-range-slide-content';
import { CreatedAPizzaShopSlideContent, CreatedAPizzaShopSlideNotes } from './slides/created-a-pizza-shop-slide-content';
import { HowToCombineInOneArchSlideContent, HowToCombineInOneArchSlideNotes } from './slides/how-to-combine-in-one-arch-slide-content';
import { IveBeenThinkingSlideContent, IveBeenThinkingSlideNotes } from './slides/ive-been-thinking-slide-content';
import { LetsDiscussStaticSlideContent, LetsDiscussStaticSlideNotes } from './slides/lets-discuss-static-slide-content';
import { StaticArchReminderSlideContent, StaticArchReminderSlideNotes } from './slides/static-arch-reminder-slide-content';
import { TitleSlideContent } from './slides/title-slide-content';
import { WhyRazorPagesSlideContent, WhyRazorPagesSlideNotes } from './slides/why-razor-pages-slide-content';
import { WhyTypescriptSlideContent, WhyTypescriptSlideNotes } from './slides/why-typescript-slide-content';
import './styles/globals.css';
import './styles/prism-theme.css';
import { createCustomTheme } from './styles/theme-custom';
import { ProfileLinksSlideContent } from './templates/profile-links-slide-content';
import { ProfileSlideContent } from './templates/profile-slide-content';

/**
 * create custom theme
 */
const customTheme = createCustomTheme();

preloader(images);

/**
 * reset CSS
 */
require('normalize.css');

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={['fade', 'slide']} transitionDuration={500} progress="pacman" controls={false} theme={customTheme}>
        <Slide bgColor="backgroundAlternate" textColor="textAlternate" bgImage={images.genericBGAlternate} bgSize="auto">
          <TitleSlideContent />
        </Slide>
        <Slide bgColor="backgroundDefault" bgImage={images.genericBGDefault} bgSize="auto">
          <ProfileSlideContent />
        </Slide>
        <Slide textColor="textAlternate" bgColor="backgroundAlternate" bgImage={images.genericBGAlternate} bgSize="auto">
          <ProfileLinksSlideContent />
        </Slide>
        <Slide bgColor="backgroundDefault" bgImage={images.genericBGDefault} bgSize="auto" notes={IveBeenThinkingSlideNotes}>
          <IveBeenThinkingSlideContent />
        </Slide>
        <Slide
          bgColor="backgroundAlternate"
          textColor="textAlternate"
          bgImage={images.genericBGAlternate}
          bgSize="auto"
          notes={ClientServerRangeSlideNotes}
        >
          <ClientServerRangeSlideContent />
        </Slide>
        <Slide
          bgColor="backgroundAlternate"
          textColor="textAlternate"
          bgImage={images.genericBGAlternate}
          bgSize="auto"
          notes={ArchitecturePatternsSlideNotes}
        >
          <ArchitecturePatternsSlideContent />
        </Slide>
        <Slide
          bgColor="backgroundAlternate"
          textColor="textAlternate"
          bgImage={images.genericBGAlternate}
          bgSize="auto"
          align="flex-start flex-start"
          className="fullwidth"
          notes={HowToCombineInOneArchSlideNotes}
        >
          <HowToCombineInOneArchSlideContent />
        </Slide>
        <Slide bgColor="backgroundDefault" bgImage={images.genericBGDefault} bgSize="auto" notes={LetsDiscussStaticSlideNotes}>
          <LetsDiscussStaticSlideContent />
        </Slide>
        <CodeSlide
          transition={[]}
          lang="js"
          bgColor="backgroundDefault"
          bgImage={images.genericBGDefault}
          bgSize="auto"
          code={require('raw-loader!../assets/code-examples/jquery-static.js.example')} // eslint-disable-line
          ranges={[
            { loc: [0, 37], title: 'jquery 👉 native' },
            { loc: [1, 5] },
            { loc: [6, 10] },
            { loc: [1, 10] },
            { loc: [12, 16] },
            { loc: [17, 21] },
            { loc: [12, 21] },
            { loc: [23, 29] },
            { loc: [31, 36] },
            { loc: [23, 36] },
            { loc: [0, 37], title: 'but at the end of the day... 🤷‍♀️' }
          ]}
        />
        <Slide
          bgColor="backgroundAlternate"
          textColor="textAlternate"
          bgImage={images.genericBGAlternate}
          bgSize="auto"
          align="flex-start flex-start"
          className="fullwidth"
          notes={WhyTypescriptSlideNotes}
        >
          <WhyTypescriptSlideContent />
        </Slide>
        <Slide
          bgColor="backgroundAlternate"
          textColor="textAlternate"
          bgImage={images.genericBGAlternate}
          bgSize="auto"
          notes={WhyRazorPagesSlideNotes}
        >
          <WhyRazorPagesSlideContent />
        </Slide>
        <Slide
          bgColor="backgroundAlternate"
          textColor="textAlternate"
          bgImage={images.genericBGAlternate}
          bgSize="auto"
          notes={StaticArchReminderSlideNotes}
        >
          <StaticArchReminderSlideContent />
        </Slide>
        <Slide
          bgColor="backgroundAlternate"
          textColor="textAlternate"
          bgImage={images.genericBGAlternate}
          bgSize="auto"
          notes={CreatedAPizzaShopSlideNotes}
        >
          <CreatedAPizzaShopSlideContent />
        </Slide>
      </Deck>
      // <div>Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
      // <div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
    );
  }
}
