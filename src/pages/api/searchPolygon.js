export const fetchSearchPolygon = async (dataPolygon) => {
  try {
    const response = await fetch(
      'http://10.79.60.2:8500/vland/posts/search/polygon',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({polygon: dataPolygon}),
      },
    );
    const data = await response.json();
    console.log('response', response);
    console.log('data', data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
