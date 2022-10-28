import React, { useCallback, useState } from 'react';

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const handler = useCallback((e) => {
    const blank = /\s/;
    if (blank.test(e.target.value) === true) {
      alert('공백은 사용할 수 없습니다.');
      return;
    }
    setValue(e.target.value);
  }, []);

  return [value, handler, setValue];
};
export default useInput;
