import styled from '@emotion/styled';
import {motion, useTransform, transform} from 'framer-motion';
import gsap from 'gsap';
import {useEffect, useMemo, createRef} from 'react';
import {css} from '@emotion/css';
import {useScrollTrigger} from './ScrollTriggerProvider';

const StyledStaggerParagraph = styled(motion.div)`
  display: flex;
  gap: 3rem;
  align-items: center;
  position: absolute;
  top: 50vh;
  left: 0;
  margin: 0px 20px;
  padding: 10px 60px;
  @media screen and (max-width: 768px) {
    padding: 10px 30px;
    margin: 0px 20px;
    top: 15vh;
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

const Paragraph = ({
  paragraphInfoList = [],
  isAnimate,
  sectionNumber,
  activeSectionNumber,
}) => {
  const paragraphsRef = useMemo(() => {
    return paragraphInfoList.map((paragraphInfo, index) => {
      return createRef();
    });
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const paragraphDomList = paragraphsRef.map((paragraphRef, _) => {
      return paragraphRef.current;
    });
    if (sectionNumber === activeSectionNumber) {
      if (isAnimate) {
        gsap
          .timeline()
          .from(paragraphDomList, {opacity: 0, y: 120, stagger: 0.2})
          .to(paragraphDomList, {opacity: 1, y: 0, stagger: 0.2});
      } else {
        gsap
          .timeline()
          .from(paragraphDomList, {opacity: 1, y: 0, stagger: 0.1})
          .to(paragraphDomList, {opacity: 0, y: 120, stagger: 0.1});
      }
    } else {
      gsap.timeline().set(paragraphDomList, {opacity: 0, y: 120});
    }
    // eslint-disable-next-line
  }, [isAnimate, sectionNumber, activeSectionNumber]);

  const renderParagraph = () => {
    if (window.matchMedia('(min-width: 769px)').matches) {
      return (
        <>
          {paragraphInfoList.map((paragraphInfo, index) => {
            return (
              <StyledParagraph
                key={index}
                ref={paragraphsRef[index]}
                className={css`
                  /* top: ${paragraphInfo.pos.top};
              left: ${paragraphInfo.pos.left};
              right: ${paragraphInfo.pos.right};
              bottom: ${paragraphInfo.pos.bottom};
              @media screen and (max-width: 768px) {
                top: ${paragraphInfo.spPos.top};
                left: ${paragraphInfo.spPos.left};
                right: ${paragraphInfo.spPos.right};
                bottom: ${paragraphInfo.spPos.bottom};
              } */
                `}
              >
                {paragraphInfo.text}
              </StyledParagraph>
            );
          })}
        </>
      );
    } else {
      return (
        <>
          {paragraphInfoList.slice(0, 1).map((paragraphInfo, index) => {
            return (
              <StyledParagraph
                key={index}
                ref={paragraphsRef[index]}
                className={css`
                  /* top: ${paragraphInfo.pos.top};
              left: ${paragraphInfo.pos.left};
              right: ${paragraphInfo.pos.right};
              bottom: ${paragraphInfo.pos.bottom};
              @media screen and (max-width: 768px) {
                top: ${paragraphInfo.spPos.top};
                left: ${paragraphInfo.spPos.left};
                right: ${paragraphInfo.spPos.right};
                bottom: ${paragraphInfo.spPos.bottom};
              } */
                `}
              >
                {paragraphInfo.text}
              </StyledParagraph>
            );
          })}
        </>
      );
    }
  };

  return <StyledStaggerParagraph>{renderParagraph()}</StyledStaggerParagraph>;
};

export {Paragraph};
