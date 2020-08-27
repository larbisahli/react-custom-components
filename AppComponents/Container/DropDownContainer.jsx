import { memo, useState } from "react";
import Container from "./Container";
import styles from "./scss/dropContainer.module.scss";
import DropStyles from "./scss/customDropdown.module.scss";
import { DropDown } from "../../CustomComponents";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import dark from "react-syntax-highlighter/dist/cjs/styles/prism/vs-dark";
import classNames from "classnames/bind";

let cx = classNames.bind(styles);

const DropDownContainer = () => {
  const [selectedItem, setSelectedItem] = useState("Users");

  //

  const [hoverEffect, setHoverEffect] = useState(false);
  const [closeOnSelect, setCloseOnSelect] = useState(true);
  const [width, setWidth] = useState("90");
  const [selectOption, setSelectOption] = useState("Select");

  return (
    <Container label="DropDown">
      <div className={`${styles.play_area} flexcenter`}>
        {/* ----------------------------- */}
        <DropDown
          Value={selectedItem}
          onSelect={setSelectedItem}
          closeOnSelect={closeOnSelect}
          topText={selectOption}
          hoverEffect={hoverEffect}
          width={`${width}px`}
          //customClass=""
        >
          <option className={DropStyles["dd-item"]} data-id="Users">
            Users
          </option>
          <option className={DropStyles["dd-item"]} data-id="Group">
            Group
          </option>
          <option className={DropStyles["dd-item"]} data-id="Items">
            Items
          </option>
        </DropDown>
        {/* ----------------------------- */}
      </div>
      <div className={`${styles.code_container} flexcenter`}>
        <div className={styles.code_area}>
          <SyntaxHighlighter language="javascript" style={dark}>
            {`
      const [selectedItem, setSelectedItem] = useState("Users")

      <DropDown 
          Value={selectedItem}
          onSelect={setSelectedItem}
          closeOnSelect={${closeOnSelect ? "true" : "false"}}
          topText="${selectOption}"
          hoverEffect={${hoverEffect ? "true" : "false"}}
          width="${width}px"
          customClass="" 
      > 
        <option className="my_custom_class" data-id="Users">Users</option>
        <option className="my_custom_class" data-id="Group">Group</option>
        <option className="my_custom_class" data-id="Items">Items</option>
        .
        .
      </DropDown>`}
          </SyntaxHighlighter>
        </div>
        <div className={styles.options_container}>
          <div className={styles.headtxt}>Options:</div>
          <div className={styles.opcon}>
            <div className={styles.lltxt}>closeOnSelect</div>
            <div className="flexcenter">
              <div
                onClick={() => setCloseOnSelect(true)}
                className={cx("bb", { "bb--active": closeOnSelect })}
              >
                true
              </div>
              <div
                onClick={() => setCloseOnSelect(false)}
                className={cx("bb", { "bb--active": !closeOnSelect })}
              >
                false
              </div>
            </div>
          </div>
          {/*  */}
          <div className={styles.opcon}>
            <div className={styles.lltxt}>hoverEffect</div>
            <div className="flexcenter">
              <div
                onClick={() => setHoverEffect(true)}
                className={cx("bb", { "bb--active": hoverEffect })}
              >
                true
              </div>
              <div
                onClick={() => setHoverEffect(false)}
                className={cx("bb", { "bb--active": !hoverEffect })}
              >
                false
              </div>
            </div>
          </div>
          {/*  */}
          <div className={styles.opcon}>
            <div className={styles.lltxt}>topText</div>
            <div className={styles.inpcon}>
              <input
                type="text"
                spellCheck={false}
                placeholder="top text"
                onChange={(e) => setSelectOption(e.target.value)}
                value={selectOption}
              />
            </div>
          </div>
          {/*  */}
          <div className={styles.opcon}>
            <div className={styles.lltxt}>width</div>
            <div className="flexcenter">
              <div className={styles.inpcon}>
                <input
                  style={{ width: "110px" }}
                  type="number"
                  placeholder="width"
                  onChange={(e) => setWidth(e.target.value)}
                  value={width}
                />
              </div>
              <div style={{ marginLeft: "5px", fontFamily: "Roboto-Medium" }}>
                px
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default memo(DropDownContainer);
