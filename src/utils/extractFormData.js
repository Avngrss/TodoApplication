export const extractFormData = (formData) => {
  const data = {};
  formData.forEach((value, key) => {
    data[key] = value;
  });

  return data;
};
