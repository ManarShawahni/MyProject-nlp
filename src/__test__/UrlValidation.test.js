import { UrlValidation } from '../client/js/UrlValidation';

describe('URL Validation', () => {
  test('should validate http URLs', () => {
    expect(UrlValidation('https://wirhelfen.eu/en/protect-scams/')).toBe(true);
  });

  test('should validate https URLs', () => {
    expect(UrlValidation('https://icermediation.org/components-of-couples-interactional-empathy/')).toBe(true);
  });

  test('should reject non-http/https URLs', () => {
    expect(UrlValidation('htps://github.com/ManarShawahni/website-cookieJar')).toBe(false);
  });

  test('should handle URLs missing hostname', () => {
    expect(UrlValidation('http://')).toBe(false);
  });

  test('should reject scheme-relative URLs', () => {
    expect(UrlValidation('//example.com')).toBe(false);
  });


  test('should handle internationalized domain names', () => {
    expect(UrlValidation('http://例子.测试')).toBe(true);
    expect(UrlValidation('http://москва.рф')).toBe(true);
  });
});
