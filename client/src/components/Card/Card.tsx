interface ICardProps {
  title: string;
  // TODO: add other required props.
}

const Card = ({ title }: ICardProps) => {
  return (
    <div>
      <h3>{title}</h3>
    </div>
  );
};

export default Card;
