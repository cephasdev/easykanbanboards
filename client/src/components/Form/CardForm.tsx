import { useEffect, useRef } from 'react';
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
  onSubmit: (values: Record<string, string>) => void;
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

const CardForm = ({ initialValues, onSubmit, onClose }: ICardFormProps) => {
  const { values, errors, handleChange, handleSubmit, isSubmitted } = useForm(
    initialValues,
    validateCardForm,
  );
  const firstInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    firstInputRef.current?.focus();
  }, []);

  const handleKeyDown = (ev: React.KeyboardEvent<HTMLInputElement>) => {
    if (ev.key === 'Escape') {
      onClose();
    }
  };

  return (
    <StyledFormWrapper onSubmit={handleSubmit(() => onSubmit(values))}>
      <StyledLabel htmlFor="cardTitle">Title</StyledLabel>
      <StyledInput
        id="cardTitle"
        name="cardTitle"
        type="text"
        value={values.cardTitle}
        onChange={handleChange}
        ref={firstInputRef}
        onKeyDown={handleKeyDown}
        aria-invalid={!!errors.cardTitle}
        aria-describedby="title-error"
        required
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
