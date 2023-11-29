import { useState } from 'react';

import { StyledForm } from '../../components/StyledForm';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmitClick = () => {

  }

  return (
    <main className='w-1/2 md:w-1/5 h-full flex flex-col items-center justify-center'>
      <h1 className='text-3xl text-salmon font-graduate mb-3'>Musclify</h1>
      <StyledForm.Form onSubmit={handleSubmitClick}>
        <StyledForm.Input type='email' value={email} onChange={evt => setEmail(evt.currentTarget.value)} placeholder='email' />
        <StyledForm.Input type='password' value={password} onChange={evt => setPassword(evt.currentTarget.value)} placeholder='senha' />
        <StyledForm.Button type='submit'>LOGIN</StyledForm.Button>
      </StyledForm.Form>
      <div className="w-full flex justify-between mt-3">
        <a href="#" className="text-salmon font-roboto text-sm hover:text-lavander-indigo transition-all">nova conta</a>
        <a href="#" className="text-salmon font-roboto text-sm hover:text-lavander-indigo transition-all">esqueci minha senha</a>
      </div>
    </main>
  )
}