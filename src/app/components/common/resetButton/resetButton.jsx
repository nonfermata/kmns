import React from 'react';

const ResetButton = () => {
    return (
        <button
            style={{
                position: 'absolute',
                right: '0',
                top: '0',
                opacity: '0',
                cursor: 'pointer',
                width: '70px',
                height: '40px'
            }}
            onClick={() => localStorage.removeItem('mainPageLoaded')}
        >
            сброс
        </button>
    );
};

export default ResetButton;
