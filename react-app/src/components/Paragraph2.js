import styled from '@emotion/styled';
import {motion, useTransform, transform} from 'framer-motion';
import gsap from 'gsap';
import {useRef, useEffect, useMemo, createRef} from 'react';
import {css} from '@emotion/css';
import {useScrollTrigger} from './ScrollTriggerProvider';

const StyledStaggerParagraph = styled(motion.div)`
  display: flex;
  align-items: center;
  margin: 0px 20px;
  padding: 10px 60px;
  @media screen and (max-width: 768px) {
    padding: 10px 30px;
    margin: 0px 20px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 30px;
    backdrop-filter: blur(1px);
  }
`;

const StyledParagraph = styled(motion.p)`
  font-size: 1.1rem;
  @media screen and (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const Paragraph2 = ({paragraphInfo, sectionNumber, activeSectionNumber}) => {
  const paragraphRef = useRef(null);

  const {progress} = useScrollTrigger();

  // Fade background from start to finish.
  const opacity = useTransform(
    progress,
    [paragraphInfo.startProgress, paragraphInfo.endProgress],
    [0, 1]
  );

  useEffect(() => {
    if (sectionNumber === activeSectionNumber) {
    } else {
      gsap.timeline().set(paragraphRef.current, {opacity: 0});
    }
    // eslint-disable-next-line
  }, [sectionNumber, activeSectionNumber]);

  const renderParagraph = () => {
    return (
      <StyledParagraph ref={paragraphRef} style={{opacity: opacity}}>
        {paragraphInfo.text}
      </StyledParagraph>
    );
  };

  return <StyledStaggerParagraph>{renderParagraph()}</StyledStaggerParagraph>;
};

export {Paragraph2};
