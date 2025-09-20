export default function LargeImage({ image }) {
  if (!image) return null; // Don't render if no image is selected

  return (
    <div className="large-image-container">
      <img
        src={image.url}
        alt={image.alt}
        title={image.title}
        style={{ width: "400px", height: "400px", objectFit: "contain" }}
      />
    </div>
  );
}
