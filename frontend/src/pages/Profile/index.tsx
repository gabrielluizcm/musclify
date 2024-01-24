import { useState } from "react"

import BorderlessInput from "../../components/BorderlessInput"
import NavMenu from "../../components/NavMenu"
import { StyledForm } from "../../components/StyledForm";

export default function ProfilePage() {
  const [userName, setUserName] = useState('Gabriel Luiz');
  const [userEmail, setUserEmail] = useState('gabrielluizcm@hotmail.com');
  const [userPassword, setUserPassword] = useState('');
  const [newUserPassword, setNewUserPassword] = useState('');
  const [userHeight, setUserHeight] = useState(0);
  const [userWeight, setUserWeight] = useState(0);

  const handleSubmitClick = () => {
  };

  return (
    <>
      <main className="h-full w-full md:w-1/3 flex flex-col gap-3 py-5">
        <StyledForm.Form onSubmit={handleSubmitClick}>
          <h1 className="mb-5">
            <BorderlessInput value={userName} autoFocus={false} onChange={val => setUserName(val)} />
          </h1>
          <fieldset className="mb-3 flex flex-col gap-1">
            <legend className="text-xl text-khaki">Dados de acesso</legend>
            <StyledForm.Input value={userEmail} type="email" onChange={evt => setUserEmail(evt.currentTarget.value)} label="Email" />
            <StyledForm.Input value={userPassword} type="password" onChange={evt => setUserPassword(evt.currentTarget.value)} label="Senha atual" />
            <StyledForm.Input value={newUserPassword} type="password" onChange={evt => setNewUserPassword(evt.currentTarget.value)} label="Nova senha" placeholder="Inalterada" />
          </fieldset>
          <fieldset className="mb-3 flex flex-col gap-1">
            <legend className="text-xl text-khaki">Dados pessoais</legend>
            <StyledForm.Input value={userHeight} type="text" inputMode="decimal" onChange={evt => setUserHeight(parseFloat(evt.currentTarget.value))} label="Altura" />
            <StyledForm.Input value={userWeight} type="text" inputMode="decimal" onChange={evt => setUserWeight(parseFloat(evt.currentTarget.value))} label="Peso" />
          </fieldset>
          <StyledForm.Button type="submit">Salvar</StyledForm.Button>
        </StyledForm.Form>
      </main>
      <NavMenu />
    </>
  )
}