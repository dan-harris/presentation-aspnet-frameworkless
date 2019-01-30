import React from 'react';
import { Deck, Image, Slide } from 'spectacle';
import CodeSlide from 'spectacle-code-slide';
import preloader from 'spectacle/lib/utils/preloader';
import { images } from './images';
import './styles/globals.css';
import './styles/prism-theme.css';
import { createCustomTheme } from './styles/theme-custom';
import { ImageSlide } from './templates/image-slide';
import { ListSlide } from './templates/list-slide';
import { QuoteSlide } from './templates/quote-slide';
import { TextSlideAlt } from './templates/text-slide-alt';
import { TitleSlide } from './templates/title-slide';

/**
 * create custom theme
 */
const customTheme = createCustomTheme();

preloader(images);

// require CSS
require('normalize.css');

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={['fade', 'slide']} transitionDuration={500} progress="pacman" controls={false} theme={customTheme}>
        <TitleSlide />
        <Slide bgColor="secondary">
          <Image src={images.formidagon} width={800} />
        </Slide>
        <TextSlideAlt />
        <ListSlide />
        <QuoteSlide />
        <ImageSlide />
        <CodeSlide
          transition={[]}
          lang="js"
          bgColor="backgroundDefault"
          code={require('raw-loader!../assets/home-page.ts.example')} // eslint-disable-line
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
          code={require('raw-loader!../assets/index.cshtml.cs.example')} // eslint-disable-line
          ranges={[{ loc: [0, 52], title: 'Walking through some code' }, { loc: [14, 26] }, { loc: [26, 33] }]}
        />
      </Deck>
      // <div>Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
      // <div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
    );
  }
}
