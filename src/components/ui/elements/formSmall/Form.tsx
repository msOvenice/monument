import { IShippingField } from '@/utils/tests.data'
import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import Button from '../../Button'
import styles from './Form.module.scss'

const Form:FC = () => {
  const { register, handleSubmit } = useForm<IShippingField>()

  const onSubmit:SubmitHandler<IShippingField> = (data) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <input {...register('email')} type='email' placeholder='Ваша пошта' required />
      <Button className={styles.button}>Надіслати</Button>
    </form>
  )
}

export default Form