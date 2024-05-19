/** @format */

type Props = {
  row: any;
  dtEdit?: any;
  setIsLoading: (value: boolean) => void;
  setShowModal: (value: boolean) => void;
  addData?: any;
  updateData?: any;
  resetForm?: () => void;
  toastShow: any;
};

// export default function
export default async function submitData({
  row,
  dtEdit,
  setIsLoading,
  setShowModal,
  addData,
  updateData,
  resetForm,
  toastShow,
}: Props) {
  setIsLoading(true);
  console.log({ row });
  // jika dtEdit tidak kosong maka update
  if (dtEdit) {
    const { data } = await updateData(dtEdit.id, row);
    toastShow({
      event: data,
    });
    setShowModal(false);
  } else {
    const { data } = await addData(row);
    console.log({ data });
    toastShow({
      event: data,
    });
    data?.type !== "success" ? null : resetForm && resetForm();
  }
  setIsLoading(false);
}
