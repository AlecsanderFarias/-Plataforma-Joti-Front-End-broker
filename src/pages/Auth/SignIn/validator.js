import * as Yup from 'yup';

export default async (data) => {
  const schema = Yup.object().shape({
    email: Yup.string().required('Por favor, digite o seu registro.'),
    password: Yup.string().required('Por favor, digite sua senha.'),
  });

  await schema.validate(data, { abortEarly: false });
};
