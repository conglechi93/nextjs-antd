export const fetchSearchPost = async (dataObject) => {
  try {
    const queryString = Object.keys(dataObject)
      .map(
        (key) =>
          `${encodeURIComponent(key)}=${encodeURIComponent(dataObject[key])}`,
      )
      .join('&');
    const url = `http://10.79.60.2:8500/vland/posts?${queryString}`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(res);
    return data;
  } catch (err) {
    console.log(err);
  }
};
