const Col = ({ className, children, align, justify, gap, style }) => {
  return (
    <div
      className={`${className} flex-col`}
      style={{
        alignItems: align,
        justifyContent: justify,
        rowGap: gap,
        ...style
      }}
    >
      {children}
    </div>
  );
};

export default Col;
