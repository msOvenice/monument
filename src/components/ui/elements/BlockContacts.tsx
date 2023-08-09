import { useGetContactsQuery } from '@/redux/services/userApi'
import { FC } from 'react'
import { BiSolidMap, BiSolidPhone } from 'react-icons/bi'
import { MdEmail } from 'react-icons/md'

const BlockContacts: FC = () => {
  const { data, error, isLoading, isFetching } = useGetContactsQuery(null);
  
  return (
    <ul>
      {error ? (
          <p>Oh no, there was an error</p>
        ) : isFetching || isLoading ? (
          <p>Loading...</p>
        ) : data ?
      data.map((contact, index) => (
        <li key={index} className='flex mb-6'>
          {contact.type === 'phone' && <BiSolidPhone size={24} color='#5F51FF' />}
          {contact.type === 'email' && <MdEmail size={24} color='#5F51FF' />}
          {contact.type === 'map' && <BiSolidMap size={24} color='#5F51FF' />}
          <p className='ml-2'>{contact.value}</p>
        </li>
      )): null}
    </ul>
  );
};

export default BlockContacts;
