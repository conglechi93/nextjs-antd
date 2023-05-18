export const fetchDiscoveryRealEstate = async () => {
  try {
    const res = await fetch(
      `http://10.79.60.2:8500/vland/posts/re/discovery/city`,
    );
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};
