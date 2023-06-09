import { createGlobalStyle } from 'styled-components'

const Global = createGlobalStyle`
    :root {
        font-size: 62.5%;
        --brand1: #4529E6;
        --brand2: #5126EA;
        --brand3: #B0A6F0;
        --brand4: #EDEAFD;

        --grey0: #0B0D0D;
        --grey1: #212529;
        --grey2: #495057;
        --grey3: #868E96;
        --grey4: #ADB5BD;
        --grey5: #CED4DA;
        --grey6: #DEE2E6;
        --grey7: #E9ECEF;
        --grey8: #F1F3F5;
        --grey9: #F8F9FA;
        --grey10: #FDFDFD;

        --whiteFixed: #FFFFFF;

        --alert1: #CD2B31;
        --alert2: #FDD8D8;
        --alert3: #FFE5E5;

        --success1: #18794E;
        --success2: #CCEBD7;
        --success3: #DDF3E4;

        --random1: #E34D8C;
        --random2: #C04277;
        --random3: #7D2A4D;
        --random4: #7000FF;
        --random5: #6200E3;
        --random6: #36007D;
        --random7: #349974;
        --random8: #2A7D5F;
        --random9: #153D2E;
        --random10: #6100FF;
        --random11: #5700E3;
        --random12: #30007D;

        --Heading-1-700: 700 4.4rem var(--font-family1);
        --Heading-2-600: 600 3.6rem var(--font-family1);
        --Heading-3-600: 600 3.2rem var(--font-family1);
        --Heading-3-500: 500 3.2rem var(--font-family1);
        --Heading-4-600: 600 2.8rem var(--font-family1);
        --Heading-4-500: 500 2.8rem var(--font-family1);
        --Heading-5-600: 600 2.4rem var(--font-family1);
        --Heading-5-500: 500 2.4rem var(--font-family1);
        --Heading-6-600: 600 2rem var(--font-family1);
        --Heading-6-500: 500 2rem var(--font-family1);
        --Heading-7-600: 600 1.6rem var(--font-family1);
        --Heading-7-500: 500 1.6rem var(--font-family1);
        --body-1-400: 400 1.6rem var(--font-family2);
        --body-1-600: 600 1.6rem var(--font-family2);
        --body-2-400: 400 1.4rem var(--font-family2);
        --body-2-500: 500 1.4rem var(--font-family2);
        --button-big-text: 600 1.6rem var(--font-family2);
        --button-medium-text: 600 1.4rem var(--font-family2);
        --input-placeholder: 400 1.4rem var(--font-family2);
        --input-label: 500 1.4rem var(--font-family2);
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        outline: 0;
        border: 0;
        line-height: 20px;
        text-decoration: none;
    }

    button {
        cursor: pointer;
        padding: 12px 28px;
        border-radius: 4px;
        height: 48px;
        width: 146px;
    }
`

export default Global