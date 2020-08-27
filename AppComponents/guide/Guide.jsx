import styles from "./guide.module.scss";
import classNames from "classnames/bind";
import { useContext, memo } from "react";
import ComponentsList from "./data";
import { Link, animateScroll as scroll } from "react-scroll";
import { GuideContext } from "../Context/GuideContext";

let cx = classNames.bind(styles);

const Guide = () => {
  const { select, _ } = useContext(GuideContext);
  return (
    <div className={cx("container")}>
      <div className={cx("wrapper")}>
        <div className={cx("content_container")}>
          <div
            onClick={() => scroll.scrollToTop()}
            className={cx("header", "flexcenter")}
          >
            <div className={cx("header_content")}>React custom component</div>
          </div>
          {ComponentsList.map((comp, index) => {
            return (
              <Link
                to={comp}
                activeClass={styles.av}
                spy={true}
                smooth={true}
                offset={-20}
                duration={600}
                key={comp}
                className={cx("content_wrapper")}
              >
                <div
                  className={cx("wrap", "flexcenter", {
                    "wrap--selected": select === comp,
                  })}
                >
                  <div
                    className={cx("dot", { "dot--selected": select === comp })}
                  ></div>
                  <div
                    className={cx("txt", { "txt--selected": select === comp })}
                  >
                    {comp}
                  </div>
                </div>
              </Link>
            );
          })}
          <a
            href="https://github.com/larbisahli/react-custom-components"
            target="_blank"
            rel="noopener noreferrer"
            className={cx("footer", "flexcenter")}
          >
            <img
              className={styles.gitimg}
              src="/GitHub-Mark-Light-32px.png"
              width="25"
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default memo(Guide);
