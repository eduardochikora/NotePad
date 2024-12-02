import { styled, createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    * {
        font-family: 'Montserrat', serif;
    }

    body {
        background-color: #f7f9fd;
    }
`

export const ContainerAnotations = styled.div`
    text-align: center;
    display: flex;
    align-items: center;
    flex-direction: column;

    h1 {
        border-bottom: 3px solid #f8f848;
        padding-bottom: 5px;
    }

    button {
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 10px;
        background: #f8f848;
        padding: 1.2rem 1rem;
        font-size: 1.5rem;
        font-weight: 600;
        border: none;
        color: #fff;
        border-radius: 10px;
        transition: 0.5s;
        cursor: pointer;
    }

    .icon-anotation {
        display: flex;
        align-items: center;
        width: 20px;
        height: 20px;
        padding: 10px;
        border: 2px dashed #fff;
        border-radius: 50%;
    }

    button:hover {
        background-color: #f9ff54;
    }

    .divider {
        width: 45%;
        height: 1px;
        margin-top: 1.5rem;
        background-color: #ccc;
    }
`

export const ModalAnotation = styled.div`
    position: absolute;
    padding: 10px 2.5rem 1.5rem;
    top: 1.5rem;
    background-color: #fff;
    box-shadow: 0 0 5rem #ccc;
    border-radius: 1rem;

    .btn-close {
        padding: 4px 8px;
        color: #fff;
        background-color: #f8f848;
        position: absolute;
        right: 1.2rem;
        font-size: 1.7rem;
        border-radius: 10px;
        transition: 0.5s;
    }

    h2 {
        text-align: center;
        border-bottom: 2px solid #f8f848;
        margin-top: 2.5rem;
        padding-bottom: 10px;
    }
`

export const AddAnotation = styled.div`
    display: flex;
    flex-direction: column;
    text-align: start;

    span {
        color: #fc0505;
        font-weight: 600;
        margin-bottom: 5px;
    }

    label {
        margin-bottom: 5px;
        font-size: 1.1rem;
        font-weight: 600;
    }

    textarea {
        border: 1px solid #ccc;
        border-radius: 10px;
        padding: 10px;
        font-size: 1rem;
        font-weight: 500;
        margin-bottom: 10px;
        transition: 0.3s;
        resize: none;
        outline: none;

        &:focus {
            border-color: #f8f848;
        }
    }

    .btn-add {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1rem;
        font-weight: 600;
        background-color: #f8f848;
        padding: 12px;
        color: #fff;
        border: none;
        border-radius: 10px;
        transition: 0.5s;
        cursor: pointer;

        &:hover {
            background-color: #f9ff54;
        }
    }
`

export const ContainerCards = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 0 2.7rem;
    gap: 1.5rem;

    .none-anotations {
        margin-top: 2rem;
    }

    .none-anotations p {
        font-weight: 500;
        font-size: 1.1rem;
        color: #9c9c9c;
    }
`

export const CardAnotation = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 250px;
    height: 200px;
    background-color: #fff;
    padding: 0 1.5rem 1.2rem;
    margin-top: 2rem;
    box-shadow: 0 0 2rem #ccc;
    border-radius: 1rem;
    overflow: hidden;
    overflow-y: scroll;
    
    h3 {
        text-align: start;
        color: #f8f848;
        word-break: break-all;
    }

    p {
        font-weight: 600;
        word-break: break-all;
    }

    .btns-card {
        display: flex;
        justify-content: end;
        gap: 1.3rem;
    }

    .btns-card button {
        padding: 0;
        background: none;
        border: none;
        font-size: 1.3rem;
        color: #f8f848;
        border-radius: 5px;
        cursor: pointer;
    }
`