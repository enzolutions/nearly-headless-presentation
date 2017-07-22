// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Link,
  Image,
  CodePane
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/logo-weknow.png"),
  webpack: require("../assets/webpack.png"),
  drupal: require("../assets/drupal-8.png"),
  symfony: require("../assets/symfony-logo.png")
};

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quartenary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["slide"]} bgImage={images.city.replace("/", "")} bgDarken={0.65}>
          <Appear fid="1">
            <div>
              <Heading size={1} caps fit textColor="tertiary">
                Nearly headless Drupal
              </Heading>
            <Heading size={1} caps fit textColor="primary">
              with ReactJS
            </Heading>
            <Heading size={6} textColor="primary">
              by <strong>enzo - Eduardo Garcia</strong>
            </Heading>
            </div>
          </Appear>
        </Slide>
        <Slide transition={["spin", "slide"]} bgColor="primary">
          <Heading size={1} caps fit lineHeight={1.5} textColor="tertiary">
            Made with love in Australia by
          </Heading>
          <Link href="http://www.weknowinc.com"><Image width="100%" src={images.logo}/></Link>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={6} textColor="tertiary" caps>Nearly headless Drupal / Symfony</Heading>
          <List>
            <ListItem>Node.js</ListItem>
            <ListItem>Webpack</ListItem>
            <ListItem>React.js</ListItem>
            <ListItem>Drupal</ListItem>
            <ListItem>Symfony</ListItem>
          </List>
        </Slide>
        <Slide id="wait-what" transition={["slide"]} bgColor="black" notes="You can even put notes on your slide. How awesome is that?">
          <Image src={images.kat.replace("/", "")} margin="0px auto 40px" height="293px"/>
          <Heading size={2} caps fit textColor="primary" textFont="primary">
            Wait what?
          </Heading>
        </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="secondary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
          <Heading size={6} textColor="tertiary" caps>Webpack</Heading>
          <CodePane
              lang="jsx"
              source={require("raw-loader!../assets/webpack.jsx")}
              margin="20px auto"
          />
        </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
          <Heading size={6} textColor="tertiary" caps>Webpack</Heading>
          <Image src={images.webpack.replace("/", "")} margin="0px auto 40px" height="293px"/>
          <Link href="https://github.com/enzolutions/webpack-demo"><Text size={12} textColor="secondary">https://github.com/enzolutions/webpack-demo</Text></Link>
        </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="secondary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
          <Heading size={6} textColor="tertiary" caps>Drupal + React</Heading>
          <CodePane
              lang="php"
              source={require("raw-loader!../assets/drupal-8-controller.php")}
              margin="20px auto"
          />
        </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
          <Heading size={6} textColor="tertiary" caps>Drupal + React</Heading>
          <Image src={images.drupal.replace("/", "")} margin="0px auto 40px" height="293px"/>
          <Link href="https://github.com/enzolutions/drupal-8-reactjs-form"><Text size={12} textColor="secondary">https://github.com/enzolutions/drupal-8-reactjs-form</Text></Link>
        </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="secondary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
          <Heading size={6} textColor="tertiary" caps>Symfony + React</Heading>
          <CodePane
              lang="php"
              source={require("raw-loader!../assets/symfony-twig.twig")}
              margin="20px auto"
          />
        </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
          <Heading size={6} textColor="tertiary" caps>Symfony + React</Heading>
          <Image src={images.symfony.replace("/", "")} margin="0px auto 40px" height="293px"/>
          <Link href="https://github.com/enzolutions/symfony-react-demo"><Text size={12} textColor="secondary">https://github.com/enzolutions/symfony-react-demo</Text></Link>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Questions</Quote>
            <Cite>enzo [Eduardo Garcia]</Cite>
            <Cite>@weknowinc</Cite>
            <Cite>@enzolutions</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}
