import { createGlobalStyle } from 'styled-components'
import { fadeIn, slideUp } from './animations'

const GlobanStyle = createGlobalStyle`
    
    ::selection {
        background: ${({ theme }) => theme.colors.backgroundColor};
        color: ${({ theme }) => theme.colors.textColor};
    }

    * {
        box-sizing: border-box;
        -webkit-tap-highlight-color: transparent;
    }
    
    body{
        margin: 0;
        min-height: 100vh;
        font-family: ${({ theme }) => theme.fonts.primaryFont};
        color: ${({ theme }) => theme.colors.textColor};
        /* ${({ theme }) => theme.colors.backgroundColor} */
        background: linear-gradient(to bottom,
        ${({ theme }) => theme.colors.backgroundColor},
        ${({ theme }) => theme.colors.backgroundTransparentColor}
        ),url("https://previews.123rf.com/images/piotrkt/piotrkt1712/piotrkt171220410/92921391-real-java-script-code-developing-screen-programing-workflow-abstract-algorithm-concept-closeup-of-ja.jpg");
        background-position: center; 
        background-size: cover; 
    }

    ul {
        margin: 0;
        padding: 0;
        list-style-type: none;
    }

    ol {
        margin: 0;
    }

    a {
        color: ${({ theme }) => theme.colors.textColor};
        cursor: pointer;
        text-decoration: none;
    }

    button {
        border: none;
        outline: none;
    }

    .overflow--hidden {
        overflow: hidden;
    }

    .fadeIn {
        animation: ${fadeIn} 800ms ease-in forwards;
    }

    .slideUp {
        animation: ${slideUp} 1s ease-in forwards;
    }

    .delay-1 {
        animation-delay: 100ms;
    }

    .duration-1 {
        animation-duration: 100ms;
    }

    .delay-2 {
        animation-delay: 200ms;
    }

    .duration-2 {
        animation-duration: 200ms;
    }

    .delay-3 {
        animation-delay: 300ms;
    }

    .duration-3 {
        animation-duration: 300ms;
    }

    .delay-4 {
        animation-delay: 400ms;
    }

    .duration-4 {
        animation-duration: 400ms;
    }

    .delay-5 {
        animation-delay: 500ms;
    }

    .duration-5 {
        animation-duration:  500ms;
    }

    .delay-6 {
        animation-delay: 600ms;
    }

    .duration-6 {
        animation-duration: 600ms;
    }

    .delay-7 {
        animation-delay: 700ms;
    }

    .duration-7 {
        animation-duration: 700ms;
    }

    .delay-8 {
        animation-delay: 800ms;
    }

    @media screen and (max-width: 1023px) {
        div.header--visible {
            transform: translateY(0px)
        }
    }

    @media screen and (min-width: 1024px) {
        ::-webkit-scrollbar {
            width: .4em;
        }

        ::-webkit-scrollbar-track {
            background: ${({ theme }) => theme.colors.backgroundColor};
        }

        ::-webkit-scrollbar-thumb {
            background: ${({ theme }) => theme.colors.ligthColor};
        }

        ::-webkit-scrollbar-thumb:hover {
            background: ${({ theme }) => theme.colors.ligthColor};
        }
    }
`

export default GlobanStyle