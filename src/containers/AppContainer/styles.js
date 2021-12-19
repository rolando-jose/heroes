import styled from 'styled-components'

export const AppGrid = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(350px, max-content));
  justify-content: center;
  width: 100%;
  margin-top: 90px;
  @media (max-width: 768px) {
    margin-top: 180px;
  }
  margin-right: auto;
`

export const AppContainerGrid = styled.div`
  width: 100%;
  margin: 0 auto;
  justify-items: center;
  display: grid;
  grid-template-columns: 1fr;

`