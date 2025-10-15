import '@testing-library/jest-dom';
import fetchMock from 'jest-fetch-mock';

// fetch をグローバルモックに差し替え
fetchMock.enableMocks();
