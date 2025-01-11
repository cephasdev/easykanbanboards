import { CardStatus } from '../enumerations/CardStatus';

interface ICard {
  id: string;
  title: string;
  description: string;
  status: CardStatus;
  createdBy: string;
  assignedTo: string;
  createdAt: string; // ISO 8601 format
  updatedAt: string; // ISO 8601 format
  // TODO: suggestion: add "priority"?
}

export default ICard;
