import styles from "./scss/dropdown.module.scss";
import { useState, memo } from "react";
import PropTypes from "prop-types";
import RippleEffect from "../RippleEffect/RippleEffect";
import TextSign from "./TextSign";
import ArrowSvg from "./ArrowSvg";
import classNames from "classnames/bind";
let cx = classNames.bind(styles);

const DropDown = ({
  children,
  Value,
  closeOnSelect,
  topText,
  hoverEffect,
  customClass,
  onSelect,
  width,
}) => {
  const [display, setDisplay] = useState(false);

  const getNodeLengt = () => {
    if (children) return children.length;
    else 0;
  };

  const CloseMenu = (e) => {
    const DropNode = document.getElementById("dd");
    let target = e.target;
    if (display) {
      document.removeEventListener("click", CloseMenu);
    } else if (!DropNode.contains(target) || closeOnSelect) {
      setDisplay(false);
      document.removeEventListener("click", CloseMenu);
    }
  };

  const ShowMenu = () => {
    setDisplay((value) => !value);
    document.addEventListener("click", CloseMenu);
  };

  console.log(":>> ");

  const HandleHover = () => {
    setDisplay(true);
    document.addEventListener("click", CloseMenu);
  };

  return (
    <div
      title={Value}
      style={{ width: width }}
      className={cx("container")}
      onMouseEnter={hoverEffect ? HandleHover : () => {}}
    >
      <RippleEffect
        style={{ position: "relative" }}
        onclick={ShowMenu}
        classname={customClass}
      >
        <div className={cx("btnwrapper")}>
          <div className={cx("txtarea")}>{Value}</div>
          <div className={cx("svgarea")}>
            <ArrowSvg rotate={display} />
          </div>
        </div>
        <TextSign topText={topText} show={display} />
      </RippleEffect>
      {/*  */}
      <div id="dd" className={cx("items_container", { "dd-show": display })}>
        {React.Children.map(children, (child, index) =>
          React.cloneElement(child, {
            key: index,
            onClick: () => onSelect(child.props["data-id"]),
            className: cx(child.props.className || "", {
              active: Value === child.props["data-id"],
              "radius--top": index === 0,
              "radius--bottom": index + 1 === getNodeLengt(),
            }),
          })
        )}
      </div>
    </div>
  );
};

DropDown.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element.isRequired),
  Value: PropTypes.string.isRequired,
  closeOnSelect: PropTypes.bool,
  topText: PropTypes.string,
  hoverEffect: PropTypes.bool,
  customClass: PropTypes.string,
  onSelect: PropTypes.func,
  width: PropTypes.string,
};

DropDown.defaultProps = {
  Value: "Select",
  closeOnSelect: true,
  topText: null,
  hoverEffect: false,
  customClass: cx("btn_wrapper"),
  onSelect: () => {},
  width: "90px",
};

export default memo(DropDown);
