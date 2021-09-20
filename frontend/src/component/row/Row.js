const Row = ({ children, className, justify, align, gap, style }) => {
  return (
    <div
      className={`${className} flex-row`}
      style={{ 
          justifyContent: justify, 
          alignItems: align, 
          columnGap: `${gap}px`, 
          ...style
        }}
    >
      {children}
    </div>
  );
};

export default Row;
