import { memo } from "react";
import styles from "./scss/customCarousel.module.scss";
import classNames from "classnames/bind";
import PropTypes from "prop-types";

let cx = classNames.bind(styles);

const Dots = ({ CurrentIndex, Length }) => {
  return (
    <ul className={cx("dot_container")}>
      {[...Array(Length + 1)].map((_, i) => {
        return (
          <li
            className={cx("dot", { dot_active: CurrentIndex === i })}
            key={i}
          ></li>
        );
      })}
    </ul>
  );
};

Dots.propTypes = {
  CurrentIndex: PropTypes.number,
  Length: PropTypes.number,
};

export default memo(Dots);
