export const Register = () => {
  return (
    <S.Container>
      <S.Content>
        <S.Title>Register</S.Title>
        <S.Form action="">
          <S.Input type="email" placeholder="Email" />
          <S.Input type="text" placeholder="Name" />
          <S.Input type="password" placeholder="Password" />
          <S.Button type="submit">Register</S.Button>
        </S.Form>
      </S.Content>
    </S.Container>
  )
}