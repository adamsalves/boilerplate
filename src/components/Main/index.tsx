import * as S from './styles'

const Main = ({
  title = 'React Avançado',
  description = 'TypeScript, ReactJS, NextJS e Styled Components'
}) => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="Imagem de um átomo e React Avançado ao lado"
    />
    <S.Title>{title}</S.Title>
    <S.Description>{description} </S.Description>
    <S.Ilustration
      src="/img/hero-illustration.svg"
      alt="Imagem de um programador sentado em frente a um computador"
    />
  </S.Wrapper>
)

export default Main
