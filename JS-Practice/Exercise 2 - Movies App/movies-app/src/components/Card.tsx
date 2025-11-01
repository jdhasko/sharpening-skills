interface CardProps {
  title: string;
  releaseYear: number;
}

const Card = ({ title, releaseYear }: CardProps) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{releaseYear}</p>
    </div>
  );
};

export default Card;
