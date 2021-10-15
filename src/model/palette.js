export function Palette(paletteName, colors, emoji = "") {
  this.paletteName = paletteName;
  this.id = paletteName.split(" ").join("-").toLowerCase();
  this.emoji = emoji;
  this.colors = colors;
}
