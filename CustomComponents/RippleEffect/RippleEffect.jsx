import { useCallback, useState, memo } from "react";
import styles from "./rippleEffect.module.scss";
import PropTypes from "prop-types";
import classNames from "classnames/bind";
let cx = classNames.bind(styles);

const RippleEffect = ({ children, onclick, classname }) => {
  const [{ y, x, show }, setRipple] = useState({
    y: 0,
    x: 0,
    show: false,
  });

  const HandleRipple = useCallback((e) => {
    var rect = e.target.getBoundingClientRect();

    var offset = {
      top: rect.top + window.scrollY,
      left: rect.left + window.scrollX,
    };

    setRipple({
      y: e.pageY - offset.top,
      x: e.pageX - offset.left,
      show: true,
    });

    setTimeout(() => {
      setRipple({
        y: 0,
        x: 0,
        show: false,
      });
    }, 500);
  }, []);

  return (
    <div
      onMouseDown={HandleRipple}
      onClick={onclick}
      className={cx("container", classname)}
    >
      <div className={cx("wrap")}>
        {show && (
          <div
            className={cx("circle")}
            style={{ top: `${y}px`, left: `${x}px` }}
          ></div>
        )}
      </div>
      {React.Children.map(children, (child) => React.cloneElement(child))}
    </div>
  );
};

RippleEffect.propTypes = {
  onclick: PropTypes.func,
  classname: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.element.isRequired),
};

RippleEffect.defaultProps = {
  onclick: () => {},
  classname: "",
};

export default memo(RippleEffect);
