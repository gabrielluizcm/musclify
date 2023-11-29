import { useState } from 'react';
import { StyledForm } from '../../components/StyledForm';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmitClick = () => {

  }

  return (
    <section className='w-full h-full flex flex-col items-center justify-center'>
      <h1 className='text-3xl text-salmon font-montserrat mb-3'>Musclify</h1>
      <StyledForm.Form>
        <StyledForm.Input type='email' value={email} onChange={evt => setEmail(evt.currentTarget.value)} placeholder='email' />
        <StyledForm.Input type='password' value={password} onChange={evt => setPassword(evt.currentTarget.value)} placeholder='senha' />
        <StyledForm.Button onClick={handleSubmitClick}>Login</StyledForm.Button>
      </StyledForm.Form>
    </section>
  )
}