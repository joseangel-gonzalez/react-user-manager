import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html {
        font-size: 16px
    }

    body {
        overflow-x: hidden;
        font-size: 1rem;
        line-height: 1.6;
        margin: 0;
        padding: 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
        "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #555;
    }

    img {
        max-width: 100%;
    }

    ul,
    li {
        padding: 0;
        list-style: none;
    }

    * {
       box-sizing: border-box;
    }

    #root {
        width: 100%;
        float: left;
        overflow: hidden;
    }

    .login {
        display: flex;
        display-direction: column;
        align-items: center;
        justify-content: space-around;
        height: 100vh;
        width: 100vw;
    }

    form {
        display: block;
        width: 100%;
        float: left;
    }

    label {
        display: inline-block;
        margin-bottom: .5rem;
        font-weight: 500;
    }

    button,
    input {
        overflow: visible;
    }

    .button {
        display: inline-block;
        font-weight: 400;
        text-align: center;
        white-space: nowrap;
        vertical-align: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        border: 1px solid #bbb;
        padding: .25rem .5rem;
        font-size: .9rem;
        line-height: 1.25;
        border-radius: .25rem;
        color: #333;
        background-color: #fff;
        transition: color .5s ease-in-out, background-color .5s ease-in-out, border-color .5s ease-in-out;

        &:not(:disabled):not(.disabled) {
            cursor: pointer;
        }

        &:not(:disabled):not(.disabled):hover {
            color: #111;
            background-color:#f7f7f7;
            border-color:#999 ;
        }

        &:focus {
            outline: none;
        }

        &.disabled, &:disabled {
            opacity: .65;
        }
    }

    @keyframes loading{0%{background-position:100% 50%}100%{background-position:0 50%}}
    .loading-animate{
                background: linear-gradient(90deg, #f2f2f2 25%, #e6e6e6 37%, #f2f2f2 63%);
                animation: loading 1.4s ease infinite;
                background-size: 400% 100%;
    }
`;

export default GlobalStyle;
