import Link from 'next/link'
import { FC } from 'react'
import { BsFacebook, BsInstagram, BsTelegram, BsTwitter } from 'react-icons/bs'

const links = [
  {
    type: "telegram",
    href: "/"
  },
  {
    type: "instagram",
    href: "/"
  },
  {
    type: "facebook",
    href: "/"
  },
  {
    type: "twitter",
    href: "/"
  },
]

const SocialItems: FC = () => {
  return (
    <ul className='flex mt-6'>
      {links.map((contact, index) => (
        <li key={index} className='mr-3'>
          <Link href={contact.href}>
            {contact.type === 'telegram' && <BsTelegram size={28} color='#fff' />}
            {contact.type === 'instagram' && <BsInstagram size={28} color='#fff' />}
            {contact.type === 'facebook' && <BsFacebook size={28} color='#fff' />}
            {contact.type === 'twitter' && <BsTwitter size={28} color='#fff' />}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SocialItems;
