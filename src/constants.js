export const styleMap = {
    HIGHLIGHT: {
        backgroundColor: '#faed27',
    },
    REDLINE: {
        color: 'red'
    },
    H1: {
        fontSize: '24px',
        fontWeight: 'bold'
    },
};

export const charMappingWithStyle = {
    '# ': 'H1',
    '* ': 'BOLD',
    '** ': 'REDLINE',
    '*** ': 'UNDERLINE',
    '``` ': 'HIGHLIGHT'
};

export const APP_TITLE = 'Demo editor by : Prachi';
export const SAVE = 'Save';