export default function Thumbnails({
  imageData,
  onThumbnailClick,
  selectedIndex,
}) {
  return (
    <>
      {imageData.map((item, i) => (
        <img
          className="thumbnail-image"
          key={item.id}
          src={item.url}
          title={item.title}
          alt={item.alt}
          onClick={() => onThumbnailClick(i)}
          style={i === selectedIndex ? { border: "2px solid blue" } : {}}
        />
      ))}
    </>
  );
}
