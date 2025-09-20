export default function Thumbnails({
  imageData,
  onThumbnailClick,
  selectedIndex,
}) {
  return (
    <>
      {imageData.map((item, index) => (
        <img
          className="thumbnail-image"
          key={item.id}
          src={item.url}
          title={item.title}
          alt={item.alt}
          onClick={() => onThumbnailClick(index)}
          // Accessibility fetures
          tabIndex={0} // --> images are focusable
          aria-label={item.title}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              onThumbnailClick(index); // --> Enter key selects focused image
            }
          }}
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
