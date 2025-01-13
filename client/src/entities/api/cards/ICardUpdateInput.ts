interface ICardUpdateInput {
  id: string;
  title?: string;
  description?: string;
  status?: string;
  assignedTo?: string;
}

export default ICardUpdateInput;
