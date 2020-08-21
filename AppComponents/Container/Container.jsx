import styles from "./container.module.scss";
import LinkSvg from "../../public/svg/link.svg";
import { GuideContext } from "../Context/GuideContext";
import { useContext, memo } from "react";
import { Link } from "react-scroll";

const Container = ({ label, children }) => {
  const { select, setSelect } = useContext(GuideContext);
  return (
    <div id={label} className={styles.container}>
      <div className={styles.label_container}>
        <div className={`${styles.label_wrapper} flexcenter`}>
          <Link
            onSetActive={() => setSelect(label)}
            to={label}
            className={styles.label}
            activeClass={styles.av}
            spy={true}
            smooth={true}
            offset={-20}
            duration={600}
          >
            {label}
          </Link>
          <div className={styles.lsvg}>
            <LinkSvg />
          </div>
        </div>
      </div>
      <div className={styles.comwrap}>{children}</div>
    </div>
  );
};

export default memo(Container);
