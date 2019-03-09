const search = q => {
  const apiUrl = 'https://api.edamam.com/search';
  const id = '272285da'; // process.env.VUE_APP_EDAMAM_ID;
  const key = '350721d32466a108e2c1a23942cce821'; // process.env.VUE_APP_EDAMAM_KEY;
  const path = `${apiUrl}?q=${q}&app_id=${id}&app_key=${key}`;

  return fetch(path).then(res => res.json());
};

export default {
  search
};
