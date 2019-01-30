import React from "react";
import {
  BlockQuote,
  Cite,
  Code,
  Deck,
  Heading,
  Image,
  List,
  ListItem,
  Notes,
  Quote,
  Slide,
  Text
} from "spectacle";
import CodeSlide from "spectacle-code-slide";
import preloader from "spectacle/lib/utils/preloader";
import "./styles/prism-theme.css";
import { createCustomTheme } from "./styles/theme-custom";

/**
 * create custom theme
 */
const customTheme = createCustomTheme();

const images = {
  formidagon: require("../assets/formidable-logo.svg"),
  goodWork: require("../assets/good-work.gif")
};

preloader(images);

// require CSS
require("normalize.css");

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["zoom", "slide"]}
        transitionDuration={500}
        progress="pacman"
        controls={false}
        theme={customTheme}
      >
        <Slide transition={["zoom"]} bgColor="backgroundDefault">
          <Heading size={1} fit>
            danharris presentation starter
          </Heading>
        </Slide>
        <Slide bgColor="secondary">
          <Image src={images.formidagon} width={800} />
        </Slide>
        <Slide transition={["fade"]} bgColor="backgroundDefault">
          <Heading size={1}>heading 1</Heading>
          <Heading size={2}>heading 2</Heading>
          <Heading size={3}>heading 3</Heading>
          <Heading size={4}>heading 4</Heading>
          <Heading size={5}>heading 5</Heading>
          <Text>
            Paragraph text lorem ipsum dolem sum do whatsy kung fu gangnam
            style. <Code>const foo = bar; () => something;</Code> Twinkies blue
            warehouse fund chocobos.
          </Text>
        </Slide>
        <Slide
          transition={["fade"]}
          bgColor="backgroundAlternate"
          textColor="textAlternate"
        >
          <Heading size={1}>heading 1</Heading>
          <Heading size={2}>heading 2</Heading>
          <Heading size={3}>heading 3</Heading>
          <Heading size={4}>heading 4</Heading>
          <Heading size={5}>heading 5</Heading>
          <Text>
            Paragraph text lorem ipsum dolem sum do whatsy kung fu gangnam
            style. <Code>const foo = bar;</Code> Twinkies blue warehouse fund
            chocobos.
          </Text>
        </Slide>
        <Slide
          transition={["fade"]}
          bgColor="backgroundDefault"
          textColor="textDefault"
        >
          <Heading size={1}>standard list</Heading>
          <List>
            <ListItem>item 1</ListItem>
            <ListItem>item 2</ListItem>
            <ListItem>item 3</ListItem>
            <ListItem>item 4</ListItem>
          </List>
        </Slide>
        <Slide
          transition={["fade"]}
          bgColor="backgroundDefault"
          textColor="textDefault"
        >
          <BlockQuote>
            <Quote>
              quote lorem ipsum dolem sum do whatsy kung fu gangnam style.
              Twinkies blue warehouse fund chocobos.
            </Quote>
            <Cite>author</Cite>
          </BlockQuote>
        </Slide>
        <Slide>
          <Image src={images.goodWork} width={500} />
          <Notes>gifs work too</Notes>
        </Slide>
        <CodeSlide
          transition={[]}
          lang="js"
          bgColor="backgroundDefault"
          code={require("raw-loader!../assets/home-page.ts.example")}
          ranges={[
            { loc: [0, 52], title: "Walking through some code" },
            { loc: [0, 2], title: "The Beginning" },
            { loc: [1, 20] },
            { loc: [10, 11], note: "Heres a note!" },
            { loc: [8, 10], image: images.goodWork },
            { loc: [21, 25] }
          ]}
        />
        <CodeSlide
          transition={[]}
          lang="js"
          bgColor="backgroundDefault"
          code={require("raw-loader!../assets/index.cshtml.cs.example")}
          ranges={[
            { loc: [0, 52], title: "Walking through some code" },
            { loc: [14, 26] },
            { loc: [26, 33] }
          ]}
        />
      </Deck>
    );
  }
}
