import { Input } from "../UI/Input";
import { ButtonRow } from '../UI/ButtonRow';
import { Button } from '../UI/Button';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import { PhoneInput } from "../UI/PhoneInput/PhoneInput";
import { Positions } from "../Positions/Positions";
import { UploadField } from '../UI/UploadField';
import { schema } from "../../config/schema";
import { useDispatch } from 'react-redux';
import { fetchUsers } from "../../store/userSlice";
import { FETCH_URL_TOKEN, POST_URL } from "../../config/config";
import { useState } from "react";
import styles from './Form.module.scss';
import axios from 'axios';

const Form = ({ changeRegister }) => {
  const dispatch = useDispatch();
  const [error, setError] = useState("");

  const {
    register,
    reset,
    formState: {
      errors,
      isDirty,
      isValid,
    },
    handleSubmit,

  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const onSubmit = async (inputData) => {
    let formData = new FormData();

    formData.append('position_id', inputData.jobPosition);
    formData.append('name', inputData.name);
    formData.append('email', inputData.email);
    formData.append('phone', inputData.phone);
    formData.append("photo", inputData.file[0]);

    const token = (await axios.get(FETCH_URL_TOKEN)).data.token;

    try {
      setError('');
      const { data } = await axios.post(POST_URL, formData, {
        headers: {
          'Token': token,
        }
      });

      if (data.success) {
        dispatch(fetchUsers());
        changeRegister(true);
      }
      reset();
    } catch (e) {
      setError(e.response.data.message);
    }
  }

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        label="Your name"
        {...register('name')}
        error={errors?.name}
      />

      <Input
        label="Email"
        {...register('email')}
        error={errors?.email}
      />
      <PhoneInput
        label="Phone"
        {...register('phone')}
        error={errors?.phone}
        helper="+38 (XXX) XXX - XX - XX"
      />

      <Positions register={register} error={errors?.jobPosition} />

      <UploadField register={register} error={errors?.file} />

      {error && <p className={styles.error_msg}>{error}</p>}

      <ButtonRow>
        <Button
          type="submit"
          disabled={!isValid || !isDirty}
        >Sign up</Button>
      </ButtonRow>
    </form>
  )
}

export { Form };