export const fetchRecommendRealEstate = async ({page = 4}) => {
  try {
    const res = await fetch(
      `http://10.79.60.2:8500/vland/posts/re/recommend?pageSize=${page}`,
    );
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};
