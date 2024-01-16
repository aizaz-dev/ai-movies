import React from "react";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";
const storyItems = [
  {
    titleKey: "about.topstory.1",
    descriptionKey: "about.topstory.1des",
    direction: "right",
  },
  {
    titleKey: "about.topstory.2",
    descriptionKey: "about.topstory.2des",
    direction: "left",
  },
  // Add more items as needed
];
interface SlideInItemProps {
  delay: number;
  direction: "left" | "right"; // Assuming direction can only be 'left' or 'right'
  children: React.ReactNode;
}

const SlideInItem: React.FC<SlideInItemProps> = ({
  delay,
  direction,
  children,
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const wrapperStyle = {
    transitionDelay: `${delay}ms`,
  };

  const transformClass = `transform transition-transform ease-out duration-1000 ${
    inView
      ? "translate-x-0 opacity-100"
      : direction === "left"
      ? "-translate-x-full opacity-0"
      : "translate-x-full opacity-0"
  }`;

  return (
    <div ref={ref} style={wrapperStyle} className={transformClass}>
      {children}
    </div>
  );
};

const Topstory = () => {
  return (
    <div className="relative w-full m-auto">
      <div className="overflow-hidden bg-light100 w-full flex flex-col items-center justify-center py-[80px] px-[80px]">
        {/* Other elements... */}

        <div className="max-w-[2000px] w-full mx-auto flex gap-[20px] items-start">
          {/* Other elements... */}

          <div className="imgline flex flex-col gap-3 items-center justify-center">
            {storyItems.map((item, index) => (
              <React.Fragment key={index}>
                <div
                  className={`flex gap-[70px] ${
                    index % 2 === 0 ? "" : "flex-row-reverse"
                  }`}
                >
                  <StoryItem {...item} />
                  <div className="greyline w-[20px] h-auto bg-light300 opacity-[0.3]"></div>
                </div>
                <div className="circle w-[100px] h-[100px] bg-primary rounded-full"></div>
              </React.Fragment>
            ))}
          </div>

          {/* Other elements... */}
        </div>
      </div>
    </div>
  );
};
const StoryItem = ({ titleKey, descriptionKey, direction }) => {
  const { t } = useTranslation();
  return (
    <SlideInItem direction={direction} delay={0}>
      <div className="story-item w-[300px]">
        <h3 className="text-sm font-[Outfit-Bold] text-primary">
          {t(titleKey)}
        </h3>
        <p className="text-sm font-[Outfit-Regular]">{t(descriptionKey)}</p>
      </div>
    </SlideInItem>
  );
};

export default Topstory;
