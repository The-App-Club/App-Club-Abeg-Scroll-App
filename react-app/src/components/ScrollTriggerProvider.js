import {useMotionValue} from 'framer-motion';
import {
  useCallback,
  useContext,
  createContext,
  useLayoutEffect,
  useEffect,
  useMemo,
  useRef,
} from 'react';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/all';
import {ScrollToPlugin} from 'gsap/all';
import clamp from 'lodash/clamp';

gsap.registerPlugin(ScrollToPlugin);

const ScrollTriggerContext = createContext({
  progress: 0,
  setParagraphsRef: () => {},
});

const useScrollTrigger = () => {
  return useContext(ScrollTriggerContext);
};

const scrollTriggerPinInfo = new Map();

const ScrollTriggerProvider = ({
  children,
  progressesRef,
  sectionNumber,
  jumpedSectionNumber,
  sectionHeight,
  spSectionHeight,
  forceJumped,
  paragraphInfoList,
  setAnimateTitle,
  setAnimateImages,
  setAnimateParagraphs,
  setActiveSectionNumber,
}) => {
  const scrollTriggerRef = useRef(null);
  const paragraphDomList = useRef(null);
  const progress = useMotionValue(0);

  const setParagraphsRef = useCallback((domList) => {
    paragraphDomList.current = null;
    paragraphDomList.current = domList;
  }, []);

  const value = useMemo(
    () => ({
      progress,
      setParagraphsRef,
    }),
    [progress, setParagraphsRef]
  );

  useEffect(() => {
    const pinInfo = scrollTriggerPinInfo.get(
      `section-${jumpedSectionNumber + 1}`
    );
    if (pinInfo) {
      // eslint-disable-next-line
      const {pinStart, pinEnd} = pinInfo;
      gsap.to(window, {
        duration: 1,
        scrollTo: {y: pinStart, offsetY: 0},
      });
    }
  }, [jumpedSectionNumber, forceJumped]);

  useLayoutEffect(() => {
    const progressDomList = progressesRef.map((progressRef) => {
      return progressRef.current;
    });
    gsap.registerPlugin(ScrollTrigger);

    // リサイズ時のトリガーの開始と終了の位置を再構築するために必要
    // https://www.youtube.com/watch?v=R7-3oEiDaZo
    ScrollTrigger.matchMedia({
      '(min-width: 769px)': () => {
        const s = ScrollTrigger.create({
          trigger: scrollTriggerRef.current,
          start: 'top top',
          end: `bottom+=${sectionHeight} top`,
          toggleClass: 'is-crossed',
          markers: false,
          scrub: 1,
          pin: true,
          onUpdate: (e) => {
            const p = clamp(e.progress, 0, 1);
            const progressDom = progressDomList[sectionNumber];
            progressDom.style.height = `${p * 100}%`;
            progress.set(p);
            setActiveSectionNumber(sectionNumber);
            if (paragraphDomList?.current) {
              for (
                let index = 0;
                index < paragraphDomList.current.length;
                index++
              ) {
                const paragraphDom = paragraphDomList.current[index];
                const paragraphInfo = paragraphInfoList[index];
                if (
                  paragraphInfo.startProgress <= p &&
                  p <= paragraphInfo.endProgress
                ) {
                  paragraphDom.style.opacity = 1;
                } else {
                  paragraphDom.style.opacity = 0.45;
                }
              }
            }
          },
          onEnter: (e) => {
            console.log('[enter]');
            setAnimateTitle(true);
            setAnimateImages(true);
            setAnimateParagraphs(true);
          },
          onLeave: (e) => {
            console.log('[leave]');
            window['previousSectionNumber'] = sectionNumber;
            setAnimateTitle(false);
            setAnimateImages(false);
            setAnimateParagraphs(false);
          },
          onEnterBack: (e) => {
            console.log('[enterback]');
            setAnimateTitle(true);
            setAnimateImages(true);
            setAnimateParagraphs(true);
          },
          onLeaveBack: (e) => {
            console.log('[leaveback]');
            window['previousSectionNumber'] = sectionNumber;
            setAnimateTitle(false);
            setAnimateImages(false);
            setAnimateParagraphs(false);
          },
        });
        scrollTriggerPinInfo.set(`section-${sectionNumber + 1}`, {
          pinStart: s.start,
          pinEnd: s.end,
        });
      },
      '(max-width: 768px)': () => {
        ScrollTrigger.create({
          trigger: scrollTriggerRef.current,
          start: 'top top',
          end: `bottom+=${spSectionHeight} top`,
          toggleClass: 'is-crossed',
          markers: false,
          scrub: 1,
          pin: true,
          onUpdate: (e) => {
            const p = clamp(e.progress, 0, 1);
            const progressDom = progressDomList[sectionNumber];
            progressDom.style.height = `${p * 100}%`;
            progress.set(p);
            setActiveSectionNumber(sectionNumber);
          },
          onEnter: (e) => {
            console.log('[enter]');
            setAnimateTitle(true);
            setAnimateImages(true);
            setAnimateParagraphs(true);
          },
          onLeave: (e) => {
            console.log('[leave]');
            window['previousSectionNumber'] = sectionNumber;
            setAnimateTitle(false);
            setAnimateImages(false);
            setAnimateParagraphs(false);
          },
          onEnterBack: (e) => {
            console.log('[enterback]');
            setAnimateTitle(true);
            setAnimateImages(true);
            setAnimateParagraphs(true);
          },
          onLeaveBack: (e) => {
            console.log('[leaveback]');
            window['previousSectionNumber'] = sectionNumber;
            setAnimateTitle(false);
            setAnimateImages(false);
            setAnimateParagraphs(false);
          },
        });
      },
    });

    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.kill();
    };
    // eslint-disable-next-line
  }, []);
  return (
    <div ref={scrollTriggerRef}>
      <ScrollTriggerContext.Provider value={value}>
        {children}
      </ScrollTriggerContext.Provider>
    </div>
  );
};

export {ScrollTriggerProvider, useScrollTrigger};
