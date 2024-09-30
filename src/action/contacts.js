export const AddActionCreator = (payload = undefined) => ({
  type: "ADD_CONTACT",
  payload,
});

export const DeleteActionCreator = (id = undefined) => ({
  type: "DELETE_CONTACT",
  payload: id,
});
