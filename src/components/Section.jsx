import SectionSvg from "../assets/svg/SectionSvg";

const Section = ({
  classes,
  id,
  crosses,
  crossesOffset,
  customPaddings,
  children,
}) => {
  return (
    <div
      className={`relative ${
        customPaddings ||
        `py-10 lg:py-16 xl:20 ${crosses ? "lg:py-32 xl:py-40" : ""} ${
          classes || ""
        }`
      }`}
    >
      {children}
      <div className="hidden absolute top-0 left-5 w-0.25 h-full bg-stroke-1 pointer-events-none md:block lg:left-7.5 xl:left-10" />
      <div className="hidden absolute top-0 left-5 w-0.25 h-full bg-stroke-1 pointer-events-none md:block lg:right-7.5 xl:right-10" />
      {crosses && (
        <>
          <div
            className={`hidden absolute top-0 left-7.5 h-0.25 bg-stroke-1 ${
              crossesOffset && crossesOffset
            } pointer-events-none lg:block xl:left-10 xl:right-10`}
          />
          <SectionSvg crossesOffset={crossesOffset} />
        </>
      )}
    </div>
  );
};

export default Section;
