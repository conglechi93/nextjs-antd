export const fetchCategoryAll = async (id) => {
  try {
    const res = await fetch(`http://10.79.60.2:8500/vcat/categories/all`);
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};
