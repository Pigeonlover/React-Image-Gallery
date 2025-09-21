//
export default function Thumbnails({
  imageData,
  onThumbnailClick,
  selectedIndex,
}) {
  const images = imageData.results || [];
  return (
    <>
      {images.map((item, index) => (
        <img
          className="thumbnail-image"
          key={item.id}
          src={item.urls.regular}
          title={item.description}
          alt={item.alt_description}
          onClick={() => onThumbnailClick(index)}
          // Accessibility fetures
          tabIndex={0} // --> images are focusable
          aria-label={item.title}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              onThumbnailClick(index); // --> Enter key selects focused image
            }
          }}
          // When picture is selected/showing as a large image, style differs from other thumbnails to make it obvious
          style={
            index === selectedIndex
              ? { border: "3px solid rgb(0, 255, 255)" }
              : {}
          }
        />
      ))}
    </>
  );
}
