import Mail from '../lib/Mail';

export default {
  key: 'RegistrationMail',
  option: {
    delay: 5000,
    priority: 3
  },
  async handle({ data }) {
    const { user } = data;

    await Mail.sendMail({
      from: 'ESK <eskokado@gmail.com>',
      to: `${user.name} <${user.email}>`,
      subject: 'Cadastro de usuário',
      html: `Olá, ${user.name}, bem-vindo a ESK.`
    });
  }
}