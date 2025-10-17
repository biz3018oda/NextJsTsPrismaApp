import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
// import fetchMock from 'jest-fetch-mock'; // fetchMock操作用に必要
import HomePage from '../app/page'; // Next.js のトップページ

beforeEach(() => {
  fetchMock.resetMocks(); // 各テスト前にモックをリセット
});

describe('HomePage', () => {
  test('fetches and renders main content', async () => {
    // モックされたAPIレスポンス
    fetchMock.mockResponseOnce(JSON.stringify([
      {
        id: 1,
        familyname: 'my-terraform',
        firstname: 'my-terraform2',
        nick: 'my-terraform',
        impressions: 'my-terraform',
        image: 'my-terraform',
      }
    ]));

    render(<HomePage />);

    // fetch による state 更新を待つ
    await waitFor(() => {
      // mainタグ表示確認
      const main = screen.getByRole('main');
      expect(main).toBeInTheDocument();
    });
  });
});
