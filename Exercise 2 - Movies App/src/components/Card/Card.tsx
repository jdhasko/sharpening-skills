import "./Card.css";

interface CardProps {
  title: string;
  releaseYear: number;
  imgSrc: string;
}

const Card = ({ title, releaseYear, imgSrc }: CardProps) => {
  return (
    <div className="card">
      <div className="flex-row">
        <img
          className="index-image"
          src={imgSrc || "movies-appsrcassets\react.svg"}
          alt={"Index photo of movie: " + title}
        />
        <h2 className="card-title ">{title}</h2>
        <p className="card-content">{releaseYear}</p>
      </div>
    </div>
  );
};

export default Card;
