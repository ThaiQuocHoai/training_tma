export const randomFunc = (quantity) => {
  let results = [];
  for (let i = 0; i < quantity; i++) {
    const rs = Math.floor(Math.random() * 30);
    if (results.includes(rs)) {
      i --;
    } else {
      results.push(rs);
    }
  }
  return results;
};
