import * as yup from 'yup';

export const homeHeadNewItemSchema = yup.object().shape({
  title: yup.string().required('Title is required'),
  subtitle: yup.string().required('Subtitle is required'),
});
