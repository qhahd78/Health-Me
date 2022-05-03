import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import COLORS from "../Colors/colors";

const GlobalStyle = createGlobalStyle`
    ${reset}
    html, 
    body {
        color: ${COLORS.BLACK};
        font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
        font-size: 16px;
        font-weight: 500;
        /* white 임시 */
        background-color: white; 
    }
    *{
        box-sizing: border-box;
    }
    a,
    a:link,
    a:visited,
    a:hover{
        text-decoration: none;
        color: inherit;
    }
    input{
        font-family: Pretendard;
        padding: 0;
        margin: 0;
    }
    textarea {
        font-family: Pretendard;
    }
`;

export default GlobalStyle;
