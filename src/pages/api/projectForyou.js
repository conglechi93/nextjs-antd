export const fetchProjectForYou = async () => {
  try {
    const res = await fetch(
      `http://10.79.60.2:8500/vland/posts/projects/recommend`,
    );
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};
