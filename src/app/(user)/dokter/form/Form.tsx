/** @format */
"use client";
import InputTextDefault from "@/components/input/InputTextDefault";
import ModalDefault from "@/components/modal/ModalDefault";
import toastShow from "@/utils/toast-show";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import BodyForm from "./BodyForm";
import BtnDefault from "@/components/button/BtnDefault";
import JadwalTypes from "@/types/JadwalTypes";
import submitData from "@/services/submitData";
import LoadingSpiner from "@/components/loading/LoadingSpiner";
import moment from "moment";
import useJadwal from "@/stores/crud/Jadwal";

type Props = {
  showModal: boolean;
  setShowModal: (data: boolean) => void;
  dtEdit: any;
};

const Form = ({ showModal, setShowModal, dtEdit }: Props) => {
  const momentTime = (time: string) => {
    const date = moment(time, "HH:mm").toDate();
    return date;
  };
  // state
  const [timeStart, setTimeStart] = useState(momentTime("08:00"));
  const [timeFinish, setTimeFinish] = useState<string | Date>("");
  const [isLoading, setIsLoading] = useState(false);
  // store
  const { addData, updateData } = useJadwal();
  // state
  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors },
    watch,
  } = useForm<JadwalTypes>();

  // reset form
  const resetForm = () => {
    setValue("id", "");
    setValue("dokter_id", "");
    setValue("hari", "");
    setValue("jam_mulai", "08:00");
    setTimeStart(momentTime("08:00"));
    setValue("jam_selesai", "20:00");
    setTimeFinish(momentTime("20:00"));
  };

  // data edit
  useEffect(() => {
    if (dtEdit) {
      setValue("id", dtEdit.id);
      setValue("dokter_id", dtEdit.dokter_id);
      setValue("hari", dtEdit.hari);
      setTimeStart(momentTime(dtEdit.jam_mulai));
      setValue("jam_mulai", dtEdit.jam_mulai);
      setTimeFinish(momentTime(dtEdit.jam_selesai));
      setValue("jam_selesai", dtEdit.jam_selesai);
    } else {
      resetForm();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showModal, dtEdit]);
  // simpan data
  const onSubmit: SubmitHandler<JadwalTypes> = async (row) => {
    //  submit data
    submitData({
      row,
      dtEdit,
      setIsLoading,
      setShowModal,
      addData,
      updateData,
      resetForm,
      toastShow,
    });
  };

  return (
    <ModalDefault
      title="Form Jadwal"
      showModal={showModal}
      setShowModal={setShowModal}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputTextDefault name="id" register={register} type="hidden" />
        <div className="grid grid-cols-4 gap-2 mb-4">
          <BodyForm
            register={register}
            errors={errors}
            dtEdit={dtEdit}
            control={control}
            watch={watch}
            setValue={setValue}
            showModal={showModal}
            timeStart={timeStart}
            timeFinish={timeFinish}
          />
        </div>
        <div>
          {isLoading ? (
            <LoadingSpiner />
          ) : (
            <BtnDefault onClick={handleSubmit(onSubmit)}>Simpan</BtnDefault>
          )}
        </div>
      </form>
    </ModalDefault>
  );
};

export default Form;
