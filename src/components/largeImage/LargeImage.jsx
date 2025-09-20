export default function LargeImage({ image }) {
  // Ternary operators! :D
  if (!image) return null; // First image in array appears on page load

  return (
    <div className="large-image-container">
      <img
        src={image.urls.regular}
        alt={image.alt_description}
        title={image.description}
      />
    </div>
  );
}
