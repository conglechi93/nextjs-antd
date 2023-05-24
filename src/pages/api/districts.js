export const fetchDistricts = async (id) => {
  try {
    const res = await fetch(
      `http://10.79.60.2:8500/vcat/provinces/${id}/districts`,
    );
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};
