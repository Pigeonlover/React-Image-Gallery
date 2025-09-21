export default function LargeImage({ image }) {
  // Ternary operators! :D
  if (!image) return null; // Helps prevent errors in case image data is not found

  return (
    <div className="large-image-container">
      <img
        // Behold! Unsplash nested properties (took me an ungodly amount of time to get them right)
        src={image.urls.regular}
        alt={image.alt_description}
        title={image.description}
      />
    </div>
  );
}
