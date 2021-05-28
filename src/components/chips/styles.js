import styled from 'styled-components';

export const ChipStyle = styled.div`
    display: inline-block;
    padding: 0 25px;
    height: 50px;
    font-size: 16px;
    line-height: 50px;
    border-radius: 25px;
    margin-inline: 10px;
    background-color: ${({color})=> color? color: '#f1f1f1' };
`
