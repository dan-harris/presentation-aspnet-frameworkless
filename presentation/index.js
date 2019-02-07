import React from 'react';
import { Deck, Slide } from 'spectacle';
import CodeSlide from 'spectacle-code-slide';
import preloader from 'spectacle/lib/utils/preloader';
import { images } from './images';
import { ArchitecturePatternsSlideContent, ArchitecturePatternsSlideNotes } from './slides/architecture-patterns-slide-content';
import { ClientServerRangeSlideContent, ClientServerRangeSlideNotes } from './slides/client-server-range-slide-content';
import { IveBeenThinkingSlideContent, IveBeenThinkingSlideNotes } from './slides/ive-been-thinking-slide-content';
import { TitleSlideContent } from './slides/title-slide-content';
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
        <Slide transition={['fade']} bgColor="backgroundDefault" bgImage={images.genericBGDefault} bgSize="auto">
          <ProfileSlideContent />
        </Slide>
        <Slide
          transition={['fade']}
          textColor="textAlternate"
          bgColor="backgroundAlternate"
          bgImage={images.genericBGAlternate}
          bgSize="auto"
        >
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
        <CodeSlide
          transition={[]}
          lang="js"
          bgColor="backgroundDefault"
          bgImage={images.genericBGDefault}
          bgSize="auto"
          code={require('raw-loader!../assets/code-examples/home-page.ts.example')} // eslint-disable-line
          ranges={[
            { loc: [0, 52], title: 'Walking through some code' },
            { loc: [0, 2], title: 'The Beginning' },
            { loc: [1, 20] },
            { loc: [10, 11], note: 'Heres a note!' },
            { loc: [8, 10], image: images.goodWork },
            { loc: [21, 25] }
          ]}
        />
        <CodeSlide
          transition={[]}
          lang="js"
          bgColor="backgroundDefault"
          bgImage={images.genericBGDefault}
          bgSize="auto"
          code={require('raw-loader!../assets/code-examples/index.cshtml.cs.example')} // eslint-disable-line
          ranges={[{ loc: [0, 52], title: 'Walking through some code' }, { loc: [14, 26] }, { loc: [26, 33] }]}
        />
      </Deck>
      // <div>Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
      // <div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
    );
  }
}
