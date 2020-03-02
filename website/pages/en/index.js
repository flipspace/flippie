/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const { MarkdownBlock } = CompLibrary; /* Used to read markdown */
const { Container } = CompLibrary;
const { GridBlock } = CompLibrary;

class HomeSplash extends React.Component {
  render() {
    const { siteConfig, language = '' } = this.props;
    const { baseUrl, docsUrl } = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = (doc) => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = (props) => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = (props) => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Project Logo" />
      </div>
    );

    const ProjectTitle = (props) => (
      <h2 className="projectTitle">
        {props.title}
        <small>{props.tagline}</small>
      </h2>
    );
    
    const PromoSection = (props) => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );
    
    const Button = (props) => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );
    
    return (
      <SplashContainer>
        <div className="inner">
          <Logo img_src={`${baseUrl}img/icon.svg`} />
          <ProjectTitle tagline={siteConfig.tagline} title={siteConfig.title} />
          <PromoSection>
            <Button href={docUrl('doc1.html')}>Get Started</Button>
            <Button href={docUrl('doc2.html')}>Api Reference</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const { config: siteConfig, language = '' } = this.props;
    const { baseUrl } = siteConfig;

    const Block = (props) => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}
      >
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const TryOut = () => (
      <Block id="try">
        {[
          {
            content:
              'To make your landing page more attractive, use illustrations! Check out '
              + '[**unDraw**](https://undraw.co/) which provides you with customizable illustrations which are free to use. '
              + 'The illustrations you see on this page are from unDraw.',
            image: `${baseUrl}img/undraw_code_review.svg`,
            imageAlign: 'left',
            title: 'Wonderful SVG Illustrations',
          },
        ]}
      </Block>
    );

    // const Description = () => (
    //   <Block background="dark">
    //     {[
    //       {
    //         content:
    //           'This is another description of how this project is useful',
    //         image: `${baseUrl}img/undraw_note_list.svg`,
    //         imageAlign: 'right',
    //         title: 'Description',
    //       },
    //     ]}
    //   </Block>
    // );

    const Features = () => (
      <Block layout="fourColumn" background="light">
        {[
          {
            content: `The code for this project is open sourced on github
            <br />and contributions, in the form of issues, features and bug fixes
            <br />from the community are welcome`,
            image: `${baseUrl}img/community.svg`,
            imageAlign: 'top',
            title: 'Open Source',
          },
          {
            content: `Flippie and it's components are coded in Typescript
            <br/> which gives first class typescript inference and support for
            <br /> projects that want to use TS`,
            image: `${baseUrl}img/undraw_operating_system.svg`,
            imageAlign: 'top',
            title: 'First class TS support',
          },
        ]}
      </Block>
    );

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <Features />
          <TryOut />
          {/* <Description /> */}
        </div>
      </div>
    );
  }
}

module.exports = Index;
