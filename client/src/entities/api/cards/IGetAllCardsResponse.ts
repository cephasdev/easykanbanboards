import ICard from '@/entities/interfaces/ICard';

interface IGetAllCardsResponse {
  data: {
    getAllCards: ICard[];
  };
}

export default IGetAllCardsResponse;
