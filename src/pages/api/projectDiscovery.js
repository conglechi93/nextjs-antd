export const fetchProjectDiscovery = async () => {
  try {
    const res = await fetch(
      `http://10.79.60.2:8500/vland/posts/projects/discovery`,
    );
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};
