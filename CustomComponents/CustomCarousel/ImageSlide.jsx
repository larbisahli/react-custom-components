import { memo, useEffect } from "react";
import styles from "./scss/customCarousel.module.scss";
import classNames from "classnames/bind";
import PropTypes from "prop-types";

let cx = classNames.bind(styles);

const ImageSlide = memo(({ currentIndex, children }) => {
  return (
    <div className={cx("slide_container")}>
      <div
        id="slides"
        className={cx("img_container")}
        style={{
          transform: `translate(${-currentIndex * 100}%)`,
          transition: `transform ${
            currentIndex === 0 ? 100 : 400
          }ms cubic-bezier(0.165, 0.84, 0.44, 1) 0s`,
        }}
      >
        {React.Children.map(children, (child, index) => {
          return (
            <div key={index} className={cx("img_wrapper")}>
              <a className={cx("img_link")} href={child.props["data-url"]}>
                {React.cloneElement(child, {
                  key: index,
                  alt: child.props.alt,
                  className: cx("img_"),
                })}
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
});

ImageSlide.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element.isRequired),
  currentIndex: PropTypes.number,
};

ImageSlide.defaultProps = {
  currentIndex: 0,
};

export default memo(ImageSlide);
