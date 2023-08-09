const mockFetch = async (input: RequestInfo, init?: RequestInit): Promise<Response> => {
  const url = typeof input === "string" ? input : input.url;

  if (url.includes("users")) {
    return new Response(JSON.stringify([
      { id: 1, name: "User first", email: "user1@example.com" },
      { id: 2, name: "User 2", email: "user2@example.com" },
    ]));
  } else if (url.includes("info")) {
    return new Response(JSON.stringify(
      {
        qr: [
          { id: 1, value: "Навчіть дитину зберігати пам’ять предків та дивитися сторінку" },
          { id: 2, value: "Пригадайте сімейні моменти" },
          { id: 3, value: "Розмістіть табличку з посиланням для переходу на сторінку пам’яті" },
        ],
        services: [
          { title: 'Текстові описи', description: 'Епітафія, короткий опис, біографія, історії з життя' },
          { title: 'Відео', description: 'Youtube, Vimeo, Facebook та інші відеосервіси' },
          { title: 'Посилання', description: 'Youtube, Vimeo, Facebook та інші відеосервіси' },
          { title: 'Аудіо записи', description: 'Запис голосу, пісні або заходів' },
          { title: 'Фотографії', description: 'Youtube, Vimeo, Facebook та інші відеосервіси' },
          { title: 'Карти', description: 'Youtube, Vimeo, Facebook та інші відеосервіси' },
        ]
      }
      
    ));
  } else if (url.includes("services")) {
    return new Response(JSON.stringify(
      {
        title: "Розширена сторінка",
        subtitle: "Оптимальний вибір",
        price: 5450,
        services: [
          'Біографія з фото', 'Відео та аудіозаписи', 'Металічна табличка з QR-кодом', 'Фотогалерея', 'Гостьова книга'
        ],
        image: 'images/Illust.svg'
      }
      
    ));
  } else if (url.includes("news")) {
    return new Response(JSON.stringify([
      {
        data: "20/01/2023",
        title: "Хто такий Григорій Степанець",
        description: "Виявилося, що особистість таємничого мецената не менш яскрава. Хоча його фотографій у публічному доступі",
        category: "Категорія"
      },
      {
        data: "20/01/2023",
        title: "Хто такий Григорій Степанець",
        description: "Виявилося, що особистість таємничого мецената не менш яскрава. Хоча його фотографій у публічному доступі",
        category: "Категорія"
      },
      {
        data: "20/01/2023",
        title: "Хто такий Григорій Степанець",
        description: "Виявилося, що особистість таємничого мецената не менш яскрава. Хоча його фотографій у публічному доступі",
        category: "Категорія"
      },
      {
        data: "20/01/2023",
        title: "Хто такий Григорій Степанець",
        description: "Виявилося, що особистість таємничого мецената не менш яскрава. Хоча його фотографій у публічному доступі немає, проте є інформація про професійні досягнення.",
        category: "Категорія"
      },
    ]));
  } else if (url.includes("contacts")) {
    return new Response(JSON.stringify([
      {
        type: "phone",
        value: "88005553535"
      },
      {
        type: "email",
        value: "mail@mail.com"
      },
      {
        type: "map",
        value: "addressaddress"
      },
    ]));
  } else if (url.includes("social")) {
    return new Response(JSON.stringify([
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
    ]));
  } else if (url.includes("cemetery")) {
    return new Response(JSON.stringify([
      {
        id: 1,
        title: "Кладовище Дружба",
        data: [
          {
            title: 'address',
            value: 'Ukraine'
          },
          {
            title: 'people',
            value: 455
          },
        ],
        images: "/images/cemetery.jpg",
        info: [
          {
            title: 'Години роботи',
            value: '08:00 - 22:00'
          },
          {
            title: 'Телефон',
            value: '0412 241 988'
          },
        ],
        description: 'Розташоване на околиці Житомира, неподалік від мікрорайону Корбутівка, від якого бере назву. Єдиний діючий міський цвинтар, який складається з двох частин: старого та нового кладовища (останнє відкрито у 1999 році). Площа старого кладовища складає 55,6 га, нового – 21 га.'
      },
      {
        id: 2,
        title: "Корбутівське кладовище",
        data: [
          {
            title: 'address',
            value: 'Західне шосе, Житомирська обл.'
          },
          {
            title: 'people',
            value: 455
          },
        ],
        images: "/images/cemenery.jpg",
        info: [
          {
            title: 'Години роботи',
            value: '08:00 - 22:00'
          },
          {
            title: 'Телефон',
            value: '0412 241 988'
          },
        ],
        description: 'Розташоване на околиці Житомира, неподалік від мікрорайону Корбутівка, від якого бере назву. Єдиний діючий міський цвинтар, який складається з двох частин: старого та нового кладовища (останнє відкрито у 1999 році). Площа старого кладовища складає 55,6 га, нового – 21 га.'
      },
      {
        id: 3,
        title: "Кладовище Дружба",
        data: [
          {
            title: 'address',
            value: 'Ukraine'
          },
          {
            title: 'people',
            value: 455
          },
        ],
        images: "/images/cemenery1.jpg",
        info: [
          {
            title: 'Години роботи',
            value: '08:00 - 22:00'
          },
          {
            title: 'Телефон',
            value: '0412 241 988'
          },
        ],
        description: 'Розташоване на околиці Житомира, неподалік від мікрорайону Корбутівка, від якого бере назву. Єдиний діючий міський цвинтар, який складається з двох частин: старого та нового кладовища (останнє відкрито у 1999 році). Площа старого кладовища складає 55,6 га, нового – 21 га.'
      },
      {
        id: 4,
        title: "Кладовище Дружба",
        data: [
          {
            title: 'address',
            value: 'Ukraine'
          },
          {
            title: 'people',
            value: 455
          },
        ],
        images: "/images/cemenery.jpg",
        info: [
          {
            title: 'Години роботи',
            value: '08:00 - 22:00'
          },
          {
            title: 'Телефон',
            value: '0412 241 988'
          },
        ],
        description: 'Розташоване на околиці Житомира, неподалік від мікрорайону Корбутівка, від якого бере назву. Єдиний діючий міський цвинтар, який складається з двох частин: старого та нового кладовища (останнє відкрито у 1999 році). Площа старого кладовища складає 55,6 га, нового – 21 га.'
      },
      {
        id: 5,
        title: "Кладовище Дружба",
        data: [
          {
            title: 'address',
            value: 'Ukraine'
          },
          {
            title: 'people',
            value: 455
          },
        ],
        images: "/images/cemenery.jpg",
        info: [
          {
            title: 'Години роботи',
            value: '08:00 - 22:00'
          },
          {
            title: 'Телефон',
            value: '0412 241 988'
          },
        ],
        description: 'Розташоване на околиці Житомира, неподалік від мікрорайону Корбутівка, від якого бере назву. Єдиний діючий міський цвинтар, який складається з двох частин: старого та нового кладовища (останнє відкрито у 1999 році). Площа старого кладовища складає 55,6 га, нового – 21 га.'
      },
      {
        id: 6,
        title: "Кладовище Дружба",
        data: [
          {
            title: 'address',
            value: 'Ukraine'
          },
          {
            title: 'people',
            value: 455
          },
        ],
        images: "/images/cemetery.jpg",
        info: [
          {
            title: 'Години роботи',
            value: '08:00 - 22:00'
          },
          {
            title: 'Телефон',
            value: '0412 241 988'
          },
        ],
        description: 'Розташоване на околиці Житомира, неподалік від мікрорайону Корбутівка, від якого бере назву. Єдиний діючий міський цвинтар, який складається з двох частин: старого та нового кладовища (останнє відкрито у 1999 році). Площа старого кладовища складає 55,6 га, нового – 21 га.'
      },
      {
        id: 7,
        title: "Кладовище Дружба",
        data: [
          {
            title: 'address',
            value: 'Ukraine'
          },
          {
            title: 'people',
            value: 455
          },
        ],
        images: "/images/cemenery1.jpg",
        info: [
          {
            title: 'Години роботи',
            value: '08:00 - 22:00'
          },
          {
            title: 'Телефон',
            value: '0412 241 988'
          },
        ],
        description: 'Розташоване на околиці Житомира, неподалік від мікрорайону Корбутівка, від якого бере назву. Єдиний діючий міський цвинтар, який складається з двох частин: старого та нового кладовища (останнє відкрито у 1999 році). Площа старого кладовища складає 55,6 га, нового – 21 га.'
      },
      {
        id: 8,
        title: "Кладовище Дружба",
        data: [
          {
            title: 'address',
            value: 'Ukraine'
          },
          {
            title: 'people',
            value: 455
          },
        ],
        images: "/images/cemenery.jpg",
        info: [
          {
            title: 'Години роботи',
            value: '08:00 - 22:00'
          },
          {
            title: 'Телефон',
            value: '0412 241 988'
          },
        ],
        description: 'Розташоване на околиці Житомира, неподалік від мікрорайону Корбутівка, від якого бере назву. Єдиний діючий міський цвинтар, який складається з двох частин: старого та нового кладовища (останнє відкрито у 1999 році). Площа старого кладовища складає 55,6 га, нового – 21 га.'
      },
      {
        id: 9,
        title: "Кладовище Дружба",
        data: [
          {
            title: 'address',
            value: 'Ukraine'
          },
          {
            title: 'people',
            value: 455
          },
        ],
        images: "/images/cemenery.jpg",
        info: [
          {
            title: 'Години роботи',
            value: '08:00 - 22:00'
          },
          {
            title: 'Телефон',
            value: '0412 241 988'
          },
        ],
        description: 'Розташоване на околиці Житомира, неподалік від мікрорайону Корбутівка, від якого бере назву. Єдиний діючий міський цвинтар, який складається з двох частин: старого та нового кладовища (останнє відкрито у 1999 році). Площа старого кладовища складає 55,6 га, нового – 21 га.'
      },
      {
        id: 10,
        title: "Кладовище Дружба",
        data: ["Ukraine", 455],
        images: "/images/cemenery.jpg",
        info: [
          {
            title: 'Години роботи',
            value: '08:00 - 22:00'
          },
          {
            title: 'Телефон',
            value: '0412 241 988'
          },
        ],
        description: 'Розташоване на околиці Житомира, неподалік від мікрорайону Корбутівка, від якого бере назву. Єдиний діючий міський цвинтар, який складається з двох частин: старого та нового кладовища (останнє відкрито у 1999 році). Площа старого кладовища складає 55,6 га, нового – 21 га.'
      },
      {
        id: 11,
        title: "Кладовище Дружба",
        data: [
          {
            title: 'address',
            value: 'Ukraine'
          },
          {
            title: 'people',
            value: 455
          },
        ],
        images: "/images/cemetery.jpg",
        info: [
          {
            title: 'Години роботи',
            value: '08:00 - 22:00'
          },
          {
            title: 'Телефон',
            value: '0412 241 988'
          },
        ],
        description: 'Розташоване на околиці Житомира, неподалік від мікрорайону Корбутівка, від якого бере назву. Єдиний діючий міський цвинтар, який складається з двох частин: старого та нового кладовища (останнє відкрито у 1999 році). Площа старого кладовища складає 55,6 га, нового – 21 га.'
      },
      {
        id: 12,
        title: "Кладовище Дружба",
        data: [
          {
            title: 'address',
            value: 'Ukraine'
          },
          {
            title: 'people',
            value: 455
          },
        ],
        images: "/images/cemenery.jpg",
        info: [
          {
            title: 'Години роботи',
            value: '08:00 - 22:00'
          },
          {
            title: 'Телефон',
            value: '0412 241 988'
          },
        ],
        description: 'Розташоване на околиці Житомира, неподалік від мікрорайону Корбутівка, від якого бере назву. Єдиний діючий міський цвинтар, який складається з двох частин: старого та нового кладовища (останнє відкрито у 1999 році). Площа старого кладовища складає 55,6 га, нового – 21 га.'
      },
      {
        id: 13,
        title: "Кладовище Дружба",
        data: [
          {
            title: 'address',
            value: 'Ukraine'
          },
          {
            title: 'people',
            value: 455
          },
        ],
        images: "/images/cemenery1.jpg",
        info: [
          {
            title: 'Години роботи',
            value: '08:00 - 22:00'
          },
          {
            title: 'Телефон',
            value: '0412 241 988'
          },
        ],
        description: 'Розташоване на околиці Житомира, неподалік від мікрорайону Корбутівка, від якого бере назву. Єдиний діючий міський цвинтар, який складається з двох частин: старого та нового кладовища (останнє відкрито у 1999 році). Площа старого кладовища складає 55,6 га, нового – 21 га.'
      },
      {
        id: 14,
        title: "Кладовище Дружба",
        data: [
          {
            title: 'address',
            value: 'Ukraine'
          },
          {
            title: 'people',
            value: 455
          },
        ],
        images: "/images/cemenery.jpg",
        info: [
          {
            title: 'Години роботи',
            value: '08:00 - 22:00'
          },
          {
            title: 'Телефон',
            value: '0412 241 988'
          },
        ],
        description: 'Розташоване на околиці Житомира, неподалік від мікрорайону Корбутівка, від якого бере назву. Єдиний діючий міський цвинтар, який складається з двох частин: старого та нового кладовища (останнє відкрито у 1999 році). Площа старого кладовища складає 55,6 га, нового – 21 га.'
      },
      {
        id: 15,
        title: "Кладовище Дружба",
        data: [
          {
            title: 'address',
            value: 'Ukraine'
          },
          {
            title: 'people',
            value: 455
          },
        ],
        images: "/images/cemenery.jpg",
        info: [
          {
            title: 'Години роботи',
            value: '08:00 - 22:00'
          },
          {
            title: 'Телефон',
            value: '0412 241 988'
          },
        ],
        description: 'Розташоване на околиці Житомира, неподалік від мікрорайону Корбутівка, від якого бере назву. Єдиний діючий міський цвинтар, який складається з двох частин: старого та нового кладовища (останнє відкрито у 1999 році). Площа старого кладовища складає 55,6 га, нового – 21 га.'
      },
      {
        id: 16,
        title: "Кладовище Дружба",
        data: [
          {
            title: 'address',
            value: 'Ukraine'
          },
          {
            title: 'people',
            value: 455
          },
        ],
        images: "/images/cemetery.jpg",
        info: [
          {
            title: 'Години роботи',
            value: '08:00 - 22:00'
          },
          {
            title: 'Телефон',
            value: '0412 241 988'
          },
        ],
        description: 'Розташоване на околиці Житомира, неподалік від мікрорайону Корбутівка, від якого бере назву. Єдиний діючий міський цвинтар, який складається з двох частин: старого та нового кладовища (останнє відкрито у 1999 році). Площа старого кладовища складає 55,6 га, нового – 21 га.'
      },
      {
        id: 17,
        title: "Кладовище Дружба",
        data: [
          {
            title: 'address',
            value: 'Ukraine'
          },
          {
            title: 'people',
            value: 455
          },
        ],
        images: "/images/cemenery1.jpg",
        info: [
          {
            title: 'Години роботи',
            value: '08:00 - 22:00'
          },
          {
            title: 'Телефон',
            value: '0412 241 988'
          },
        ],
        description: 'Розташоване на околиці Житомира, неподалік від мікрорайону Корбутівка, від якого бере назву. Єдиний діючий міський цвинтар, який складається з двох частин: старого та нового кладовища (останнє відкрито у 1999 році). Площа старого кладовища складає 55,6 га, нового – 21 га.'
      },
      {
        id: 18,
        title: "Кладовище Дружба",
        data: [
          {
            title: 'address',
            value: 'Ukraine'
          },
          {
            title: 'people',
            value: 455
          },
        ],
        images: "/images/cemenery.jpg",
        info: [
          {
            title: 'Години роботи',
            value: '08:00 - 22:00'
          },
          {
            title: 'Телефон',
            value: '0412 241 988'
          },
        ],
        description: 'Розташоване на околиці Житомира, неподалік від мікрорайону Корбутівка, від якого бере назву. Єдиний діючий міський цвинтар, який складається з двох частин: старого та нового кладовища (останнє відкрито у 1999 році). Площа старого кладовища складає 55,6 га, нового – 21 га.'
      },
      {
        id: 19,
        title: "Кладовище Дружба",
        data: [
          {
            title: 'address',
            value: 'Ukraine'
          },
          {
            title: 'people',
            value: 455
          },
        ],
        images: "/images/cemenery.jpg",
        info: [
          {
            title: 'Години роботи',
            value: '08:00 - 22:00'
          },
          {
            title: 'Телефон',
            value: '0412 241 988'
          },
        ],
        description: 'Розташоване на околиці Житомира, неподалік від мікрорайону Корбутівка, від якого бере назву. Єдиний діючий міський цвинтар, який складається з двох частин: старого та нового кладовища (останнє відкрито у 1999 році). Площа старого кладовища складає 55,6 га, нового – 21 га.'
      },
      {
        id: 20,
        title: "Кладовище Дружба",
        data: [
          {
            title: 'address',
            value: 'Ukraine'
          },
          {
            title: 'people',
            value: 455
          },
        ],
        images: "/images/cemenery.jpg",
        info: [
          {
            title: 'Години роботи',
            value: '08:00 - 22:00'
          },
          {
            title: 'Телефон',
            value: '0412 241 988'
          },
        ],
        description: 'Розташоване на околиці Житомира, неподалік від мікрорайону Корбутівка, від якого бере назву. Єдиний діючий міський цвинтар, який складається з двох частин: старого та нового кладовища (останнє відкрито у 1999 році). Площа старого кладовища складає 55,6 га, нового – 21 га.'
      },
    ]));
  } else if (url.includes("people")) {
    return new Response(JSON.stringify([
      {
        id: 1,
        title: "Іванов Іван Іванович",
        data: [
          {
            title: 'date',
            value: '02.20.1921-01.02.2000'
          },
          {
            title: 'people',
            value: 455
          },
          {
            title: 'age',
            value: '45 років'
          },
          {
            title: 'ukrainian',
            value: 'Українець'
          }
        ],
        info: [
          {
            title: 'Місце народження',
            value: 'Житомир, Україна'
          },
          {
            title: 'Місце смерті',
            value: 'Житомир, Україна'
          },
          {
            title: 'Жінка',
            value: 'Іванова Інна Іванівна'
          },
          {
            title: 'Освіта',
            value: 'Житомирський агротехнічний університет'
          },
          {
            title: 'Діяльність',
            value: 'Діяльність'
          }
        ],
        images: "/images/human.jpg",
        imageProfile: "/images/profile.jpg",
        cemetary: 'Кладовище Дружба',
        awards: [
          {
            title: 'Нагорода'
          },
          {
            title: 'Нагорода'
          },
          {
            title: 'Нагорода'
          },
          {
            title: 'Нагорода'
          },
        ]
      },
      {
        id: 2,
        title: "Іванов Іван Іванович",
        data: [
          {
            title: 'date',
            value: '02.20.1921-01.02.2000'
          },
          {
            title: 'people',
            value: 455
          },
          {
            title: 'age',
            value: '45 років'
          },
          {
            title: 'ukrainian',
            value: 'Українець'
          }
        ],
        info: [
          {
            title: 'Місце народження',
            value: 'Житомир, Україна'
          },
          {
            title: 'Місце смерті',
            value: 'Житомир, Україна'
          },
          {
            title: 'Жінка',
            value: 'Іванова Інна Іванівна'
          },
          {
            title: 'Освіта',
            value: 'Житомирський агротехнічний університет'
          },
          {
            title: 'Діяльність',
            value: 'Діяльність'
          }
        ],
        images: "/images/human.jpg",
        imageProfile: "/images/profile.jpg",
        cemetary: 'Корбутівське кладовище',
        awards: [
          {
            title: 'Нагорода'
          },
          {
            title: 'Нагорода'
          },
          {
            title: 'Нагорода'
          },
          {
            title: 'Нагорода'
          },
        ]
      },
      {
        id: 3,
        title: "Іванов Іван Іванович",
        data: [
          {
            title: 'date',
            value: '02.20.1921-01.02.2000'
          },
          {
            title: 'people',
            value: 455
          },
          {
            title: 'age',
            value: '45 років'
          },
          {
            title: 'ukrainian',
            value: 'Українець'
          }
        ],
        info: [
          {
            title: 'Місце народження',
            value: 'Житомир, Україна'
          },
          {
            title: 'Місце смерті',
            value: 'Житомир, Україна'
          },
          {
            title: 'Жінка',
            value: 'Іванова Інна Іванівна'
          },
          {
            title: 'Освіта',
            value: 'Житомирський агротехнічний університет'
          },
          {
            title: 'Діяльність',
            value: 'Діяльність'
          }
        ],
        images: "/images/human.jpg",
        imageProfile: "/images/profile.jpg",
        cemetary: 'Кладовище Дружба',
        awards: [
          {
            title: 'Нагорода'
          },
          {
            title: 'Нагорода'
          },
          {
            title: 'Нагорода'
          },
          {
            title: 'Нагорода'
          },
        ]
      },
      {
        id: 4,
        title: "Іванов Іван Іванович",
        data: [
          {
            title: 'date',
            value: '02.20.1921-01.02.2000'
          },
          {
            title: 'people',
            value: 455
          },
          {
            title: 'age',
            value: '45 років'
          },
          {
            title: 'ukrainian',
            value: 'Українець'
          }
        ],
        info: [
          {
            title: 'Місце народження',
            value: 'Житомир, Україна'
          },
          {
            title: 'Місце смерті',
            value: 'Житомир, Україна'
          },
          {
            title: 'Жінка',
            value: 'Іванова Інна Іванівна'
          },
          {
            title: 'Освіта',
            value: 'Житомирський агротехнічний університет'
          },
          {
            title: 'Діяльність',
            value: 'Діяльність'
          }
        ],
        images: "/images/human.jpg",
        imageProfile: "/images/profile.jpg",
        cemetary: 'Корбутівське кладовище',
        awards: [
          {
            title: 'Нагорода'
          },
          {
            title: 'Нагорода'
          },
          {
            title: 'Нагорода'
          },
          {
            title: 'Нагорода'
          },
        ]
      },
      {
        id: 5,
        title: "Іванов Іван Іванович",
        data: [
          {
            title: 'date',
            value: '02.20.1921-01.02.2000'
          },
          {
            title: 'people',
            value: 455
          },
          {
            title: 'age',
            value: '45 років'
          },
          {
            title: 'ukrainian',
            value: 'Українець'
          }
        ],
        info: [
          {
            title: 'Місце народження',
            value: 'Житомир, Україна'
          },
          {
            title: 'Місце смерті',
            value: 'Житомир, Україна'
          },
          {
            title: 'Жінка',
            value: 'Іванова Інна Іванівна'
          },
          {
            title: 'Освіта',
            value: 'Житомирський агротехнічний університет'
          },
          {
            title: 'Діяльність',
            value: 'Діяльність'
          }
        ],
        images: "/images/human.jpg",
        imageProfile: "/images/profile.jpg",
        cemetary: 'Кладовище Дружба',
        awards: [
          {
            title: 'Нагорода'
          },
          {
            title: 'Нагорода'
          },
          {
            title: 'Нагорода'
          },
          {
            title: 'Нагорода'
          },
        ]
      },
      {
        id: 6,
        title: "Іванов Іван Іванович",
        data: [
          {
            title: 'date',
            value: '02.20.1921-01.02.2000'
          },
          {
            title: 'people',
            value: 455
          },
          {
            title: 'age',
            value: '45 років'
          },
          {
            title: 'ukrainian',
            value: 'Українець'
          }
        ],
        info: [
          {
            title: 'Місце народження',
            value: 'Житомир, Україна'
          },
          {
            title: 'Місце смерті',
            value: 'Житомир, Україна'
          },
          {
            title: 'Жінка',
            value: 'Іванова Інна Іванівна'
          },
          {
            title: 'Освіта',
            value: 'Житомирський агротехнічний університет'
          },
          {
            title: 'Діяльність',
            value: 'Діяльність'
          }
        ],
        images: "/images/human.jpg",
        imageProfile: "/images/profile.jpg",
        cemetary: 'Кладовище Дружба',
        awards: [
          {
            title: 'Нагорода'
          },
          {
            title: 'Нагорода'
          },
          {
            title: 'Нагорода'
          },
          {
            title: 'Нагорода'
          },
        ]
      },
      {
        id: 7,
        title: "Іванов Іван Іванович",
        data: [
          {
            title: 'date',
            value: '02.20.1921-01.02.2000'
          },
          {
            title: 'people',
            value: 455
          },
          {
            title: 'age',
            value: '45 років'
          },
          {
            title: 'ukrainian',
            value: 'Українець'
          }
        ],
        info: [
          {
            title: 'Місце народження',
            value: 'Житомир, Україна'
          },
          {
            title: 'Місце смерті',
            value: 'Житомир, Україна'
          },
          {
            title: 'Жінка',
            value: 'Іванова Інна Іванівна'
          },
          {
            title: 'Освіта',
            value: 'Житомирський агротехнічний університет'
          },
          {
            title: 'Діяльність',
            value: 'Діяльність'
          }
        ],
        images: "/images/human.jpg",
        imageProfile: "/images/profile.jpg",
        cemetary: 'Кладовище Дружба',
        awards: [
          {
            title: 'Нагорода'
          },
          {
            title: 'Нагорода'
          },
          {
            title: 'Нагорода'
          },
          {
            title: 'Нагорода'
          },
        ]
      },
      {
        id: 8,
        title: "Іванов Іван Іванович",
        data: [
          {
            title: 'date',
            value: '02.20.1921-01.02.2000'
          },
          {
            title: 'people',
            value: 455
          },
          {
            title: 'age',
            value: '45 років'
          },
          {
            title: 'ukrainian',
            value: 'Українець'
          }
        ],
        info: [
          {
            title: 'Місце народження',
            value: 'Житомир, Україна'
          },
          {
            title: 'Місце смерті',
            value: 'Житомир, Україна'
          },
          {
            title: 'Жінка',
            value: 'Іванова Інна Іванівна'
          },
          {
            title: 'Освіта',
            value: 'Житомирський агротехнічний університет'
          },
          {
            title: 'Діяльність',
            value: 'Діяльність'
          }
        ],
        images: "/images/human.jpg",
        imageProfile: "/images/profile.jpg",
        cemetary: 'Кладовище Дружба',
        awards: [
          {
            title: 'Нагорода'
          }
        ]
      },
      {
        id: 9,
        title: "Іванов Іван Іванович",
        data: [
          {
            title: 'date',
            value: '02.20.1921-01.02.2000'
          },
          {
            title: 'people',
            value: 455
          },
          {
            title: 'age',
            value: '45 років'
          },
          {
            title: 'ukrainian',
            value: 'Українець'
          }
        ],
        info: [
          {
            title: 'Місце народження',
            value: 'Житомир, Україна'
          },
          {
            title: 'Місце смерті',
            value: 'Житомир, Україна'
          },
          {
            title: 'Жінка',
            value: 'Іванова Інна Іванівна'
          },
          {
            title: 'Освіта',
            value: 'Житомирський агротехнічний університет'
          },
          {
            title: 'Діяльність',
            value: 'Діяльність'
          }
        ],
        images: "/images/human.jpg",
        imageProfile: "/images/profile.jpg",
        cemetary: 'Корбутівське кладовище',
        awards: [
          {
            title: 'Нагорода'
          }
        ]
      },
      {
        id: 10,
        title: "Іванов Іван Іванович",
        data: [
          {
            title: 'date',
            value: '02.20.1921-01.02.2000'
          },
          {
            title: 'people',
            value: 455
          },
          {
            title: 'age',
            value: '45 років'
          },
          {
            title: 'ukrainian',
            value: 'Українець'
          }
        ],
        info: [
          {
            title: 'Місце народження',
            value: 'Житомир, Україна'
          },
          {
            title: 'Місце смерті',
            value: 'Житомир, Україна'
          },
          {
            title: 'Жінка',
            value: 'Іванова Інна Іванівна'
          },
          {
            title: 'Освіта',
            value: 'Житомирський агротехнічний університет'
          },
          {
            title: 'Діяльність',
            value: 'Діяльність'
          }
        ],
        images: "/images/human.jpg",
        imageProfile: "/images/profile.jpg",
        cemetary: 'Кладовище Дружба',
        awards: [
          {
            title: 'Нагорода'
          }
        ]
      },
      {
        id: 11,
        title: "Іванов Іван Іванович",
        data: [
          {
            title: 'date',
            value: '02.20.1921-01.02.2000'
          },
          {
            title: 'people',
            value: 455
          },
          {
            title: 'age',
            value: '45 років'
          },
          {
            title: 'ukrainian',
            value: 'Українець'
          }
        ],
        info: [
          {
            title: 'Місце народження',
            value: 'Житомир, Україна'
          },
          {
            title: 'Місце смерті',
            value: 'Житомир, Україна'
          },
          {
            title: 'Жінка',
            value: 'Іванова Інна Іванівна'
          },
          {
            title: 'Освіта',
            value: 'Житомирський агротехнічний університет'
          },
          {
            title: 'Діяльність',
            value: 'Діяльність'
          }
        ],
        images: "/images/human.jpg",
        imageProfile: "/images/profile.jpg",
        cemetary: 'Кладовище Дружба',
        awards: [
          {
            title: 'Нагорода'
          }
        ]
      },
      {
        id: 12,
        title: "Іванов Іван Іванович",
        data: [
          {
            title: 'date',
            value: '02.20.1921-01.02.2000'
          },
          {
            title: 'people',
            value: 455
          },
          {
            title: 'age',
            value: '45 років'
          },
          {
            title: 'ukrainian',
            value: 'Українець'
          }
        ],
        info: [
          {
            title: 'Місце народження',
            value: 'Житомир, Україна'
          },
          {
            title: 'Місце смерті',
            value: 'Житомир, Україна'
          },
          {
            title: 'Жінка',
            value: 'Іванова Інна Іванівна'
          },
          {
            title: 'Освіта',
            value: 'Житомирський агротехнічний університет'
          },
          {
            title: 'Діяльність',
            value: 'Діяльність'
          }
        ],
        images: "/images/human.jpg",
        imageProfile: "/images/profile.jpg",
        cemetary: 'Корбутівське кладовище',
        awards: [
          {
            title: 'Нагорода'
          }
        ]
      },
      {
        id: 13,
        title: "Іванов Іван Іванович",
        data: [
          {
            title: 'date',
            value: '02.20.1921-01.02.2000'
          },
          {
            title: 'people',
            value: 455
          },
          {
            title: 'age',
            value: '45 років'
          },
          {
            title: 'ukrainian',
            value: 'Українець'
          }
        ],
        info: [
          {
            title: 'Місце народження',
            value: 'Житомир, Україна'
          },
          {
            title: 'Місце смерті',
            value: 'Житомир, Україна'
          },
          {
            title: 'Жінка',
            value: 'Іванова Інна Іванівна'
          },
          {
            title: 'Освіта',
            value: 'Житомирський агротехнічний університет'
          },
          {
            title: 'Діяльність',
            value: 'Діяльність'
          }
        ],
        images: "/images/human.jpg",
        imageProfile: "/images/profile.jpg",
        cemetary: 'Корбутівське кладовище',
        awards: [
          {
            title: 'Нагорода'
          }
        ]
      },
      {
        id: 14,
        title: "Іванов Іван Іванович",
        data: [
          {
            title: 'date',
            value: '02.20.1921-01.02.2000'
          },
          {
            title: 'people',
            value: 455
          },
          {
            title: 'age',
            value: '45 років'
          },
          {
            title: 'ukrainian',
            value: 'Українець'
          }
        ],
        info: [
          {
            title: 'Місце народження',
            value: 'Житомир, Україна'
          },
          {
            title: 'Місце смерті',
            value: 'Житомир, Україна'
          },
          {
            title: 'Жінка',
            value: 'Іванова Інна Іванівна'
          },
          {
            title: 'Освіта',
            value: 'Житомирський агротехнічний університет'
          },
          {
            title: 'Діяльність',
            value: 'Діяльність'
          }
        ],
        images: "/images/human.jpg",
        imageProfile: "/images/profile.jpg",
        cemetary: 'Кладовище Дружба',
        awards: [
          {
            title: 'Нагорода'
          }
        ]
      },
      {
        id: 15,
        title: "Іванов Іван Іванович",
        data: [
          {
            title: 'date',
            value: '02.20.1921-01.02.2000'
          },
          {
            title: 'people',
            value: 455
          },
          {
            title: 'age',
            value: '45 років'
          },
          {
            title: 'ukrainian',
            value: 'Українець'
          }
        ],
        info: [
          {
            title: 'Місце народження',
            value: 'Житомир, Україна'
          },
          {
            title: 'Місце смерті',
            value: 'Житомир, Україна'
          },
          {
            title: 'Жінка',
            value: 'Іванова Інна Іванівна'
          },
          {
            title: 'Освіта',
            value: 'Житомирський агротехнічний університет'
          },
          {
            title: 'Діяльність',
            value: 'Діяльність'
          }
        ],
        images: "/images/human.jpg",
        imageProfile: "/images/profile.jpg",
        cemetary: 'Корбутівське кладовище',
        awards: [
          {
            title: 'Нагорода'
          }
        ]
      },
      {
        id: 16,
        title: "Іванов Іван Іванович",
        data: [
          {
            title: 'date',
            value: '02.20.1921-01.02.2000'
          },
          {
            title: 'people',
            value: 455
          },
          {
            title: 'age',
            value: '45 років'
          },
          {
            title: 'ukrainian',
            value: 'Українець'
          }
        ],
        info: [
          {
            title: 'Місце народження',
            value: 'Житомир, Україна'
          },
          {
            title: 'Місце смерті',
            value: 'Житомир, Україна'
          },
          {
            title: 'Жінка',
            value: 'Іванова Інна Іванівна'
          },
          {
            title: 'Освіта',
            value: 'Житомирський агротехнічний університет'
          },
          {
            title: 'Діяльність',
            value: 'Діяльність'
          }
        ],
        images: "/images/human.jpg",
        imageProfile: "/images/profile.jpg",
        cemetary: 'Кладовище Дружба',
        awards: [
          {
            title: 'Нагорода'
          }
        ]
      },
      {
        id: 17,
        title: "Іванов Іван Іванович",
        data: [
          {
            title: 'date',
            value: '02.20.1921-01.02.2000'
          },
          {
            title: 'people',
            value: 455
          },
          {
            title: 'age',
            value: '45 років'
          },
          {
            title: 'ukrainian',
            value: 'Українець'
          }
        ],
        info: [
          {
            title: 'Місце народження',
            value: 'Житомир, Україна'
          },
          {
            title: 'Місце смерті',
            value: 'Житомир, Україна'
          },
          {
            title: 'Жінка',
            value: 'Іванова Інна Іванівна'
          },
          {
            title: 'Освіта',
            value: 'Житомирський агротехнічний університет'
          },
          {
            title: 'Діяльність',
            value: 'Діяльність'
          }
        ],
        images: "/images/human.jpg",
        imageProfile: "/images/profile.jpg",
        cemetary: 'Корбутівське кладовище',
        awards: [
          {
            title: 'Нагорода'
          }
        ]
      },
      {
        id: 18,
        title: "Іванов Іван Іванович",
        data: [
          {
            title: 'date',
            value: '02.20.1921-01.02.2000'
          },
          {
            title: 'people',
            value: 455
          },
          {
            title: 'age',
            value: '45 років'
          },
          {
            title: 'ukrainian',
            value: 'Українець'
          }
        ],
        info: [
          {
            title: 'Місце народження',
            value: 'Житомир, Україна'
          },
          {
            title: 'Місце смерті',
            value: 'Житомир, Україна'
          },
          {
            title: 'Жінка',
            value: 'Іванова Інна Іванівна'
          },
          {
            title: 'Освіта',
            value: 'Житомирський агротехнічний університет'
          },
          {
            title: 'Діяльність',
            value: 'Діяльність'
          }
        ],
        images: "/images/human.jpg",
        imageProfile: "/images/profile.jpg",
        cemetary: 'Кладовище Дружба',
        awards: [
          {
            title: 'Нагорода'
          }
        ]
      },
      {
        id: 19,
        title: "Іванов Іван Іванович",
        data: [
          {
            title: 'date',
            value: '02.20.1921-01.02.2000'
          },
          {
            title: 'people',
            value: 455
          },
          {
            title: 'age',
            value: '45 років'
          },
          {
            title: 'ukrainian',
            value: 'Українець'
          }
        ],
        info: [
          {
            title: 'Місце народження',
            value: 'Житомир, Україна'
          },
          {
            title: 'Місце смерті',
            value: 'Житомир, Україна'
          },
          {
            title: 'Жінка',
            value: 'Іванова Інна Іванівна'
          },
          {
            title: 'Освіта',
            value: 'Житомирський агротехнічний університет'
          },
          {
            title: 'Діяльність',
            value: 'Діяльність'
          }
        ],
        images: "/images/human.jpg",
        imageProfile: "/images/profile.jpg",
        cemetary: 'Кладовище Дружба',
        awards: [
          {
            title: 'Нагорода'
          }
        ]
      },
      {
        id: 20,
        title: "Іванов Іван Іванович",
        data: [
          {
            title: 'date',
            value: '02.20.1921-01.02.2000'
          },
          {
            title: 'people',
            value: 455
          },
          {
            title: 'age',
            value: '45 років'
          },
          {
            title: 'ukrainian',
            value: 'Українець'
          }
        ],
        info: [
          {
            title: 'Місце народження',
            value: 'Житомир, Україна'
          },
          {
            title: 'Місце смерті',
            value: 'Житомир, Україна'
          },
          {
            title: 'Жінка',
            value: 'Іванова Інна Іванівна'
          },
          {
            title: 'Освіта',
            value: 'Житомирський агротехнічний університет'
          },
          {
            title: 'Діяльність',
            value: 'Діяльність'
          }
        ],
        images: "/images/human.jpg",
        imageProfile: "/images/profile.jpg",
        cemetary: 'Кладовище Дружба',
        awards: [
          {
            title: 'Нагорода'
          }
        ]
      },
    ]));
  } else if (url.includes("users/")) {
    const id = url.split("/").pop();
    return new Response(JSON.stringify({ id: Number(id), name: `User ${id}`, email: `user${id}@example.com` }));
  }

  throw new Error("Unhandled URL");
};

export default mockFetch