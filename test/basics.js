const assert = require('chai').assert;
const reshape = require('../index.js').reshape;

describe('test Latin alphabet and numerals', () => {
  it('does not change Latin alphabet', () => {
    assert.equal(reshape('apple'), 'apple');
  });
  it('does not change Latin numerals', () => {
    assert.equal(reshape('123'), '123');
  });
});

describe('tests Arabic words', () => {
  it('reshapes -apple-', () => {
    assert.equal(reshape('تفاحة'),
      'ﺗﻔﺎﺣﺔ');
  });

  it('reshapes -Arabic alphabet-', () => {
    assert.equal(reshape('الأبجدية'),
      'ﺍﻷﲜﺪﻳﺔ');
  });
  
  it('reshapes -Arabic alphabet- x 2', () => {
    assert.equal(reshape('الأبجدية الأبجدية'),
      'ﺍﻷﲜﺪﻳﺔ ﺍﻷﲜﺪﻳﺔ');
  });
  
  it('reshapes -Arabic alphabet- without ligatures', () => {
    assert.equal(reshape('الأبجدية', { ligatures: false }),
      'ﺍﻟﺄﺑﺠﺪﻳﺔ');
  });
});