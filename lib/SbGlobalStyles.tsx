import { createGlobalStyle } from 'styled-components';

export const SbGlobalStyles = createGlobalStyle`
    body {
        font-family: sans-serif;
        background-color: ${({ theme }) => theme.colors.surface} !important;
        color: ${({ theme }) => theme.colors.onSurface} !important;
    }

    .sbdocs-preview {
        background-color: ${({ theme }) => theme.colors.surface} !important;
        color: ${({ theme }) => theme.colors.onSurface} !important;
    }
`;
