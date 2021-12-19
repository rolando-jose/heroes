import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  width: 300px;
  height: 520px;
  border: rgba(66, 66, 66, 0.87) 1px solid;
  border-radius: 1%;
  font-size: 14px;
  //margin: 1%;
`

export const Header = styled.div`
  margin: 0 auto;
  text-align: center;
  line-height: 9px;
  padding: 0;
  span {
    font-weight: bold;
  }
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  justify-items: center;
  line-height: 10px;
  text-align: center;
  span {
    font-weight: bold;
  }
`