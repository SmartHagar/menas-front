/** @format */
"use client";
import InputFile from "@/components/input/InputFile";
import InputTextDefault from "@/components/input/InputTextDefault";
import { FC } from "react";

type Props = {
  register: any;
  errors: any;
  dtEdit: any;
  control: any;
  watch: any;
  setValue: any;
  showModal: boolean;
  myFile: any;
  setMyFile: any;
};

const BodyForm: FC<Props> = ({
  register,
  errors,
  control,
  dtEdit,
  watch,
  setValue,
  showModal,
  myFile,
  setMyFile,
}) => {
  return (
    <>
      <InputTextDefault
        label="Keterangan"
        name="desc"
        register={register}
        addClass="col-span-4"
      />

      <InputFile
        label="Picture"
        name="picture"
        register={register}
        accept="image/*"
        required
        errors={errors.picture}
        addClass="col-span-4"
        setValue={setValue}
        fileEdit={dtEdit?.picture}
        myFile={myFile}
        setMyFile={setMyFile}
      />
    </>
  );
};

export default BodyForm;
