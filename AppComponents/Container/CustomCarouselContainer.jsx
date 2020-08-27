import { memo } from "react";
import Container from "./Container";
import { CustomCarousel } from "../../CustomComponents";
import { CarouselSchema } from "../../data";
import styles from "./scss/customCarouselContainer.module.scss";
import classNames from "classnames/bind";

let cx = classNames.bind(styles);

const Properties = CarouselSchema.specialCollections;

const CustomCarouselContainer = () => {
  return (
    <Container label="Custom Carousel">
      <div className={cx("carousel_area")}>
        {/* ----------------------------- */}
        <CustomCarousel width={600} height={300} playInterval={5000}>
          {Properties.map((image) => {
            return (
              <img
                key={image.index}
                data-url={image.url}
                src={image.ImageUrl}
                alt=""
              />
            );
          })}
        </CustomCarousel>
        {/* ----------------------------- */}
      </div>
    </Container>
  );
};

export default memo(CustomCarouselContainer);
