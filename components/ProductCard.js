export default function ProductCard({ image, title, price }) {
    return (
      <div className="border rounded p-4">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <h2>{title}</h2>
        <p>${price}</p>
      </div>
    );
  }
  