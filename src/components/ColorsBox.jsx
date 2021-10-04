const ColorsBox = ({colors}) => {
  return (
    <div style={{ background: "red", height: 10 }}>
      <ul>
        {colors.map((colorDetails) => {
          console.log(colorDetails);
          return <li style={{ background: colorDetails.color, height: "100px" }}></li>;
        })}
      </ul>
    </div>
  );
};

export default ColorsBox;
