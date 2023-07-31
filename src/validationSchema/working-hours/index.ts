import * as yup from 'yup';

export const workingHoursValidationSchema = yup.object().shape({
  hours: yup.number().integer().required(),
  user_id: yup.string().nullable(),
});
