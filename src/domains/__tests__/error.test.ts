import { ApiError } from '../error';

describe('Error Model', () => {
  it('should test API error class', () => {
    const error = new ApiError({ message: 'information', status: 500 });
    expect(error.message).toBe('information');
    expect(error.status).toBe(500);
  });
});
