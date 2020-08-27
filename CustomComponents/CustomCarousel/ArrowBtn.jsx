import { memo } from "react";
import styles from "./scss/customCarousel.module.scss";
import classNames from "classnames/bind";
import PropTypes from "prop-types";

let cx = classNames.bind(styles);

const ArrowBtn = ({ onClick, className }) => {
  return (
    <div onClick={onClick} className={cx("btn_container")}>
      <div className={cx("arrow_btn", className)}>
        <svg
          height="32"
          width="32"
          viewBox="0 0 24 24"
          fill="#57585a"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 
              0l4.59 4.59c.39.39.39 1.02 0 1.41L10.7 17.3c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

ArrowBtn.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
};

ArrowBtn.defaultProps = {
  className: "",
};

export default memo(ArrowBtn);
