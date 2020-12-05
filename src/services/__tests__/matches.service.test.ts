import { MatchesService } from '../matches.service';

const fetchMock = (data: any, status = 200, statusText = '', ok = true): jest.Mock => {
  (global as any).fetch = jest.fn(() =>
    Promise.resolve({
      ok,
      status,
      statusText,
      json: () => Promise.resolve(data),
    }),
  );

  return (global as any).fetch;
};

describe('Matches Service', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('Success response', () => {
    it('should getData response', async () => {
      expect.assertions(1);
      fetchMock([1]);

      const response = await MatchesService.getData();
      expect(response).toEqual([1]);
    });
  });

  describe('Error response', () => {
    it('should throw error when getting data', async () => {
      expect.assertions(2);
      fetchMock({ noData: true }, 500, 'Error from api', false);

      try {
        await MatchesService.getData();
      } catch (err) {
        expect(err.status).toEqual(500);
        expect(err.message).toEqual('Error from api');
      }
    });
  });
});
