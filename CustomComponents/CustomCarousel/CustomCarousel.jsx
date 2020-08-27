import { memo, useState, useEffect, useCallback } from "react";
import styles from "./scss/customCarousel.module.scss";
import classNames from "classnames/bind";
import ImageSlide from "./ImageSlide";
import ArrowBtn from "./ArrowBtn";
import PropTypes from "prop-types";
import Dots from "./Dots";

let cx = classNames.bind(styles);

let CarouselInterval;

const CustomCarousel = ({ children, width, height, playInterval }) => {
  const [CurrentIndex, setCurrentIndex] = useState(0);
  const [move, setMove] = useState(true);

  const Length = children.length - 1;

  useEffect(() => {
    if (move) {
      CarouselInterval = setInterval(nextImage, playInterval);
    } else {
      clearInterval(CarouselInterval);
    }

    return () => {
      clearInterval(CarouselInterval);
    };
  }, [move]);

  const nextImage = useCallback(() => {
    setCurrentIndex((index) => {
      if (index === Length) return 0;
      return index + 1;
    });
  }, [setCurrentIndex]);

  const prevImage = useCallback(() => {
    setCurrentIndex((index) => {
      if (index === 0) return Length;
      return index - 1;
    });
  }, [setCurrentIndex]);

  const OnEnter = useCallback(() => {
    setMove(false);
  }, [setMove]);

  const OnLeave = useCallback(() => {
    setMove(true);
  }, [setMove]);

  return (
    <div
      className={cx("carousel")}
      style={{ width: `${width}px`, height: `${height}px` }}
      onMouseEnter={OnEnter}
      onMouseLeave={OnLeave}
      id="customcarousel"
    >
      <ArrowBtn className={cx("left-side")} onClick={nextImage} />
      <ImageSlide
        currentIndex={CurrentIndex}
        children={children}
        Interval={false}
      />
      <ArrowBtn className={cx("right-side")} onClick={prevImage} />
      <Dots CurrentIndex={CurrentIndex} Length={Length} />
    </div>
  );
};

CustomCarousel.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element.isRequired),
  width: PropTypes.number,
  height: PropTypes.number,
  playInterval: PropTypes.number,
};

CustomCarousel.defaultProps = {
  width: 600,
  height: 300,
  playInterval: 5000,
};

export default memo(CustomCarousel);
