import Star from "../assets/star.png";
import StarOuter from "../assets/starOuter.png";

interface ITestimonialCardProps {
  profileImage: string;
  name: string;
  role: string;
  text: string;
  stars: number;
}

export default function TestimonialCard({
  profileImage,
  name,
  role,
  text,
  stars,
}: ITestimonialCardProps) {
  const starsArray = Array.from({ length: 5 }, (_, index) => index < stars);

  return (
    <div className="carousel-content">
      <div className="carousel-card">
        <img src={profileImage} alt={`Foto de ${name}`} />
        <span className="testimony">
          <p>"{text}"</p>
        </span>
        <span className="rating">
          {starsArray.map((isFilled, index) => (
            <img
              key={index}
              src={isFilled ? Star : StarOuter}
              alt={isFilled ? "ícone estrela cheia" : "ícone estrela vazia"}
              width={22}
              height={20}
            />
          ))}
        </span>
        <span className="names">
          <p>{name}</p>
          <p>{role}</p>
        </span>
      </div>
    </div>
  );
}
