import * as S from './styles'

export const Login = () => {
  return(
    <S.Container>
      <S.Content>
        <S.Title>Login</S.Title>
        <S.Form>
          <S.Input type="text" placeholder="Email" />
          <S.Input type="password" placeholder="Senha" />
          <S.Button>Entrar</S.Button>
        </S.Form>
      </S.Content>
    </S.Container>
  )
}