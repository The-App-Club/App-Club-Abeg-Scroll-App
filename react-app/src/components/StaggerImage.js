import {motion} from 'framer-motion';
import {useEffect, useMemo, createRef} from 'react';
import styled from '@emotion/styled';
import {css} from '@emotion/css';

import gsap from 'gsap';

const StyledStaggerImage = styled(motion.div)`
  display: flex;
  gap: 3rem;
  align-items: center;
  position: absolute;
  top: 20vh;
  right: 330px;
  @media screen and (max-width: 768px) {
    position: absolute;
    top: 0;
    left: 0;
    right: initial;
    width: 100%;
    height: 100%;
  }
`;

const StyledImage = styled(motion.div)`
  & {
    overflow: hidden;
    position: relative;
    width: 120px;
    @media screen and (max-width: 768px) {
      position: absolute;
    }
    img {
      display: block;
      width: 100%;
      max-width: 100%;
    }
  }
`;

const StaggerImage = ({
  imageInfoList,
  isAnimate,
  sectionNumber,
  activeSectionNumber,
}) => {
  const imagesRef = useMemo(() => {
    return imageInfoList.map((imageInfo, index) => {
      return createRef();
    });
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const imageDomList = imagesRef.map((imageref, _) => {
      return imageref.current;
    });
    if (sectionNumber === activeSectionNumber) {
      if (isAnimate) {
        gsap
          .timeline()
          .from(imageDomList, {opacity: 0, y: 120, stagger: 0.2})
          .to(imageDomList, {opacity: 1, y: 0, stagger: 0.2});
      } else {
        gsap
          .timeline()
          .from(imageDomList, {opacity: 1, y: 0, stagger: 0.1})
          .to(imageDomList, {opacity: 0, y: 120, stagger: 0.1});
      }
    } else {
      gsap.timeline().set(imageDomList, {opacity: 0, y: 120});
    }
    // eslint-disable-next-line
  }, [isAnimate, sectionNumber, activeSectionNumber]);

  return (
    <StyledStaggerImage>
      {imageInfoList.map((imageInfo, index) => {
        return (
          <StyledImage
            key={index}
            className={css`
              top: ${imageInfo.pos.top};
              left: ${imageInfo.pos.left};
              right: ${imageInfo.pos.right};
              bottom: ${imageInfo.pos.bottom};
              @media screen and (max-width: 768px) {
                top: ${imageInfo.spPos.top};
                left: ${imageInfo.spPos.left};
                right: ${imageInfo.spPos.right};
                bottom: ${imageInfo.spPos.bottom};
              }
            `}
          >
            <img
              ref={imagesRef[index]}
              src={imageInfo.url}
              alt={imageInfo.alt}
            />
          </StyledImage>
        );
      })}
    </StyledStaggerImage>
  );
};

export {StaggerImage};
