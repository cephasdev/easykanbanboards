import {
  StyledGhostButton,
  StyledPrimaryButton,
} from '../shared/Button/Button.styles';
import {
  StyledErrorText,
  StyledFormWrapper,
  StyledInput,
  StyledLabel,
} from './Form.styles';
import useForm from './useForm';

interface ICardFormProps {
  initialValues: Record<string, string>;
  onClose: () => void;
}

const validateCardForm = (values: Record<string, string>) => {
  const errors: Record<string, string | null> = {
    cardTitle: null,
  };

  if (!values.cardTitle) {
    errors.cardTitle = 'Title is required';
  }

  return errors;
};

const CardForm = ({ initialValues, onClose }: ICardFormProps) => {
  const { values, errors, handleChange, handleSubmit, isSubmitted } = useForm(
    initialValues,
    validateCardForm,
  );

  const onSubmit = () => {
    console.log('Form submitted');
    onClose();
  };

  return (
    <StyledFormWrapper onSubmit={handleSubmit(onSubmit)}>
      <StyledLabel htmlFor="cardTitle">Title</StyledLabel>
      <StyledInput
        id="cardTitle"
        name="cardTitle"
        type="text"
        value={values.cardTitle}
        onChange={handleChange}
        aria-invalid={!!errors.cardTitle}
        aria-describedby="title-error"
      />
      {errors.cardTitle && (
        <StyledErrorText id="title-error">{errors.cardTitle}</StyledErrorText>
      )}

      {isSubmitted && <div>Card added successfully</div>}

      <div style={{ display: 'flex', gap: '1rem' }}>
        <StyledPrimaryButton type="submit">Save</StyledPrimaryButton>
        <StyledGhostButton onClick={onClose}>Cancel</StyledGhostButton>
      </div>
    </StyledFormWrapper>
  );
};

export default CardForm;
