interface ICard {
  id: string;
  title: string;
  description: string;
  status: string;
  createdBy: string;
  assignedTo: string;
  createdAt: string;
  updatedAt: string;
  // TODO: suggestion: add "priority"?
}

export default ICard;
