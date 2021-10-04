import ColorsBox from "./ColorsBox";

const Palette = ({ palettes }) => {
  const australiaPalette = palettes.find((palette) => palette.emoji === "🇦🇺");
  return (
    <article className="palette">
      <h1>{australiaPalette.paletteName}</h1>
      <ColorsBox colors={australiaPalette.colors}/>
    </article>
  );
};

export default Palette;
