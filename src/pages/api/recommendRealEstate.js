export const fetchRecommendRealEstate = async ({page, pageSize = 4}) => {
  try {
    const res = await fetch(
      `http://10.79.60.2:8500/vland/posts/re/recommend?page=${page}&pageSize=${pageSize}`,
    );
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};
