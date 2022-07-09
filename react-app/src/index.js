import {useId, createRef, useMemo, useState} from 'react';
import {createRoot} from 'react-dom/client';
import '@fontsource/kaushan-script';
import './styles/index.scss';

import {Section} from './components/Section';
import {Progress} from './components/Progress';
import {Paragraph} from './components/Paragraph';
import {Paragraph2} from './components/Paragraph2';
import {Paragraph3} from './components/Paragraph3';
import {Banner} from './components/Banner';
import {StaggerImage} from './components/StaggerImage';
import {ScrollTriggerProvider} from './components/ScrollTriggerProvider';

const sectionCount = 11;

const App = ({context}) => {
  const sectionInfoList = [
    {
      id: useId(),
      title: `Nice Bebop`,
      imageInfoList: [
        {
          pos: {
            top: `20px`,
            left: `455px`,
            right: `initial`,
            bottom: `initial`,
          },
          spPos: {
            top: `20px`,
            left: `initial`,
            right: `0px`,
            bottom: `initial`,
          },
          url: `/assets/image/dog.png`,
          alt: ``,
        },
        {
          pos: {
            top: `0px`,
            left: `120px`,
            right: `initial`,
            bottom: `initial`,
          },
          spPos: {
            top: `220px`,
            left: `initial`,
            right: `10px`,
            bottom: `initial`,
          },
          url: `/assets/image/girl.png`,
          alt: ``,
        },
        {
          pos: {
            top: `160px`,
            left: `30px`,
            right: `initial`,
            bottom: `initial`,
          },
          spPos: {
            top: `80%`,
            left: `50%`,
            right: `initial`,
            bottom: `initial`,
          },
          url: `/assets/image/girl-3.png`,
          alt: ``,
        },
        {
          pos: {
            top: `220px`,
            left: `40px`,
            right: `initial`,
            bottom: `initial`,
          },
          spPos: {
            top: `180px`,
            left: `100px`,
            right: `initial`,
            bottom: `initial`,
          },
          url: `/assets/image/man.png`,
          alt: ``,
        },
        {
          pos: {
            top: `110px`,
            left: `100px`,
            right: `initial`,
            bottom: `initial`,
          },
          spPos: {
            top: `65%`,
            left: `25px`,
            right: `initial`,
            bottom: `initial`,
          },
          url: `/assets/image/man-2.png`,
          alt: ``,
        },
      ],
      startColor: `#E4E9BE`,
      endColor: `#A2B38B`,
      sectionHeight: `300%`,
      spSectionHeight: `600%`,
      paragraphInfoList: [
        {
          id: useId(),
          pos: {
            top: `20px`,
            left: `455px`,
            right: `initial`,
            bottom: `initial`,
          },
          spPos: {
            top: `20px`,
            left: `initial`,
            right: `0px`,
            bottom: `initial`,
          },
          startProgress: 0.0,
          endProgress: 0.3,
          text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
        },
        {
          id: useId(),
          pos: {
            top: `20px`,
            left: `455px`,
            right: `initial`,
            bottom: `initial`,
          },
          spPos: {
            top: `20px`,
            left: `initial`,
            right: `0px`,
            bottom: `initial`,
          },
          startProgress: 0.3,
          endProgress: 0.6,
          text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
        },
        {
          id: useId(),
          pos: {
            top: `20px`,
            left: `455px`,
            right: `initial`,
            bottom: `initial`,
          },
          spPos: {
            top: `20px`,
            left: `initial`,
            right: `0px`,
            bottom: `initial`,
          },
          startProgress: 0.6,
          endProgress: 1.0,
          text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
        },
      ],
    },
    {
      id: useId(),
      title: `Turing Complete`,
      imageInfoList: [
        {
          pos: {
            top: `20px`,
            left: `455px`,
            right: `initial`,
            bottom: `initial`,
          },
          spPos: {
            top: `20px`,
            left: `initial`,
            right: `0px`,
            bottom: `initial`,
          },
          url: `/assets/image/dog.png`,
          alt: ``,
        },

        {
          pos: {
            top: `220px`,
            left: `40px`,
            right: `initial`,
            bottom: `initial`,
          },
          spPos: {
            top: `180px`,
            left: `100px`,
            right: `initial`,
            bottom: `initial`,
          },
          url: `/assets/image/man.png`,
          alt: ``,
        },
        {
          pos: {
            top: `310px`,
            left: `100px`,
            right: `initial`,
            bottom: `initial`,
          },
          spPos: {
            top: `65%`,
            left: `25px`,
            right: `initial`,
            bottom: `initial`,
          },
          url: `/assets/image/man-2.png`,
          alt: ``,
        },
      ],
      startColor: `#D3DEDC`,
      endColor: `#7C99AC`,
      sectionHeight: `800%`,
      spSectionHeight: `1600%`,
      paragraphInfoList: [
        {
          id: useId(),
          pos: {
            top: `20px`,
            left: `455px`,
            right: `initial`,
            bottom: `initial`,
          },
          spPos: {
            top: `20px`,
            left: `initial`,
            right: `0px`,
            bottom: `initial`,
          },
          startProgress: 0.0,
          endProgress: 0.3,
          text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
        },
        {
          id: useId(),
          pos: {
            top: `20px`,
            left: `455px`,
            right: `initial`,
            bottom: `initial`,
          },
          spPos: {
            top: `20px`,
            left: `initial`,
            right: `0px`,
            bottom: `initial`,
          },
          startProgress: 0.3,
          endProgress: 0.7,
          text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
        },
        {
          id: useId(),
          pos: {
            top: `20px`,
            left: `455px`,
            right: `initial`,
            bottom: `initial`,
          },
          spPos: {
            top: `20px`,
            left: `initial`,
            right: `0px`,
            bottom: `initial`,
          },
          startProgress: 0.7,
          endProgress: 1.0,
          text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
        },
      ],
    },
    {
      id: useId(),
      imageInfoList: [
        {
          pos: {
            top: `20px`,
            left: `455px`,
            right: `initial`,
            bottom: `initial`,
          },
          spPos: {
            top: `20px`,
            left: `initial`,
            right: `0px`,
            bottom: `initial`,
          },
          url: `/assets/image/dog.png`,
          alt: ``,
        },
        {
          pos: {
            top: `0px`,
            left: `120px`,
            right: `initial`,
            bottom: `initial`,
          },
          spPos: {
            top: `220px`,
            left: `initial`,
            right: `10px`,
            bottom: `initial`,
          },
          url: `/assets/image/girl.png`,
          alt: ``,
        },
        {
          pos: {
            top: `160px`,
            left: `30px`,
            right: `initial`,
            bottom: `initial`,
          },
          spPos: {
            top: `80%`,
            left: `50%`,
            right: `initial`,
            bottom: `initial`,
          },
          url: `/assets/image/girl-3.png`,
          alt: ``,
        },
      ],
      startColor: `#FCF1F1`,
      endColor: `#FFD5CD`,
      sectionHeight: `1300%`,
      spSectionHeight: `2600%`,
      paragraphInfoList: [
        {
          id: useId(),
          pos: {
            top: `20px`,
            left: `455px`,
            right: `initial`,
            bottom: `initial`,
          },
          spPos: {
            top: `20px`,
            left: `initial`,
            right: `0px`,
            bottom: `initial`,
          },
          startProgress: 0.0,
          endProgress: 0.3,
          text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
        },
        {
          id: useId(),
          pos: {
            top: `20px`,
            left: `455px`,
            right: `initial`,
            bottom: `initial`,
          },
          spPos: {
            top: `20px`,
            left: `initial`,
            right: `0px`,
            bottom: `initial`,
          },
          startProgress: 0.3,
          endProgress: 0.6,
          text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
        },
        {
          id: useId(),
          pos: {
            top: `20px`,
            left: `455px`,
            right: `initial`,
            bottom: `initial`,
          },
          spPos: {
            top: `20px`,
            left: `initial`,
            right: `0px`,
            bottom: `initial`,
          },
          startProgress: 0.6,
          endProgress: 1.0,
          text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
        },
      ],
    },
  ];

  const [jumpedSectionNumber, setJumpedSectionNumber] = useState(-1);
  const [activeSectionNumber, setActiveSectionNumber] = useState(-1);
  const [forceJumped, setForceJumped] = useState(new Date());
  const [animateTitle, setAnimateTitle] = useState(false);
  const [animateImages, setAnimateImages] = useState(false);
  const [animateParagraphs, setAnimateParagraphs] = useState(false);

  const progressesRef = useMemo(() => {
    return [...Array(sectionCount)].map((n, index) => {
      return createRef();
    });
  }, []);

  const sectionsRef = useMemo(() => {
    return [...Array(sectionCount)].map((n, index) => {
      return createRef();
    });
  }, []);

  const jumpToSection = (e, n) => {
    setJumpedSectionNumber(n);
    setForceJumped(new Date());
  };

  return (
    <div className="app">
      <nav>
        <ul>
          {[...Array(sectionInfoList.length)].map((n, index) => {
            return (
              <div key={index}>
                <li
                  onClick={(e) => {
                    jumpToSection(e, index);
                  }}
                ></li>
                <Progress ref={progressesRef[index]} sectionNumber={index} />
              </div>
            );
          })}
        </ul>
      </nav>
      <header>Hello</header>
      <main>
        <article>
          {sectionInfoList.map((sectionInfo, index) => {
            return (
              <ScrollTriggerProvider
                key={index}
                progressesRef={progressesRef}
                sectionNumber={index}
                jumpedSectionNumber={jumpedSectionNumber}
                sectionHeight={sectionInfo.sectionHeight}
                spSectionHeight={sectionInfo.spSectionHeight}
                forceJumped={forceJumped}
                paragraphInfoList={sectionInfo.paragraphInfoList}
                setAnimateTitle={setAnimateTitle}
                setAnimateImages={setAnimateImages}
                setAnimateParagraphs={setAnimateParagraphs}
                setActiveSectionNumber={setActiveSectionNumber}
              >
                <Section
                  id={`section-${index + 1}`}
                  ref={sectionsRef[index]}
                  sectionInfo={sectionInfo}
                >
                  <Banner
                    title={sectionInfo.title}
                    isAnimate={animateTitle}
                    sectionNumber={index}
                    activeSectionNumber={activeSectionNumber}
                  />
                  <StaggerImage
                    imageInfoList={sectionInfo.imageInfoList}
                    isAnimate={animateImages}
                    sectionNumber={index}
                    activeSectionNumber={activeSectionNumber}
                  />
                  <Paragraph3
                    paragraphInfoList={sectionInfo.paragraphInfoList}
                    isAnimate={animateParagraphs}
                    sectionNumber={index}
                    activeSectionNumber={activeSectionNumber}
                  />
                  {/* <Paragraph
                    paragraphInfoList={sectionInfo.paragraphInfoList}
                    isAnimate={animateParagraphs}
                    sectionNumber={index}
                    activeSectionNumber={activeSectionNumber}
                  /> */}
                  {/* {window.matchMedia('(min-width: 769px)').matches &&
                    sectionInfo.paragraphInfoList.map((paragraphInfo, j) => {
                      return (
                        <Paragraph2
                          key={j}
                          paragraphInfo={paragraphInfo}
                          sectionNumber={index}
                          activeSectionNumber={activeSectionNumber}
                        />
                      );
                    })}
                  {window.matchMedia('(max-width: 768px)').matches &&
                    sectionInfo.paragraphInfoList
                      .slice(0, 1)
                      .map((paragraphInfo, j) => {
                        return (
                          <Paragraph2
                            key={j}
                            paragraphInfo={paragraphInfo}
                            sectionNumber={index}
                            activeSectionNumber={activeSectionNumber}
                          />
                        );
                      })} */}
                </Section>
              </ScrollTriggerProvider>
            );
          })}
        </article>
      </main>
      <footer>Bye</footer>
    </div>
  );
};

const container = document.getElementById('root');

const root = createRoot(container);

root.render(<App />);
