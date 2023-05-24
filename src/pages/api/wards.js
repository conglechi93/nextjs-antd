export const fetchWards = async (id_ity, id_dis) => {
  try {
    const res = await fetch(
      `http://10.79.60.2:8500/vcat/provinces/${id_ity}/districts/${id_dis}/wards`,
    );
    const data = await res.json();
    console.log('dataWards', data);
    return data;
  } catch (err) {
    console.log(err);
  }
};
