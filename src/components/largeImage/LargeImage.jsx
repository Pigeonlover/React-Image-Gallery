export default function LargeImage({ image }) {
  // Ternary operators! :D
  if (!image) return image; // First image in array appears on page load

  return (
    <div className="large-image-container">
      <img src={image.url} alt={image.alt} title={image.title} />
    </div>
  );
}
