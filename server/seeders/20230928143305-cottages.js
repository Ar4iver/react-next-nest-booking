module.exports = {
  up: async (queryInterface, Sequelize) => {
    const cottages = [
      {
        name: 'BordoHouse',
        description: 'Это BordoHouse',
        numberOfBedrooms: 10,
        maxGuests: 7,
        price: 2545,
        rate: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'WhiteHouse',
        description: 'Это Whitehouse',
        numberOfBedrooms: 10,
        maxGuests: 7,
        price: 2545,
        rate: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'BrownHouse',
        description: 'Это BrownHouse',
        numberOfBedrooms: 10,
        maxGuests: 7,
        price: 2545,
        rate: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    await queryInterface.bulkInsert('cottages', cottages);

    const insertedCottages = await queryInterface.sequelize.query(
      `SELECT * FROM cottages ORDER BY id DESC LIMIT ${cottages.length}`,
      { type: Sequelize.QueryTypes.SELECT },
    );

    // const cottageImages = [
    //   [
    //     'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    //     'https://images.unsplash.com/photo-1584132905271-512c958d674a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    //     'https://images.unsplash.com/photo-1584132905271-512c958d674a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    //   ],
    //   [
    //     'https://images.unsplash.com/photo-1540518614846-7eded433c457?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1157&q=80',
    //     'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    //     'https://images.unsplash.com/photo-1584132905271-512c958d674a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    //     // ... другие изображения для WhiteHouse
    //   ],
    //   [
    //     'https://images.unsplash.com/photo-1612320743558-020669ff20e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80',
    //     'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    //     'https://images.unsplash.com/photo-1584132905271-512c958d674a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    //     // ... другие изображения для BrownHouse
    //   ],
    // ];

    const cottageImages = [
      {
        cottageId: 1,
        images: [
          'изображение массив 1',
          'изображение массив 1',
          'изображение массив 1',
        ],
      },
      {
        cottageId: 2,
        images: [
          'изображение массив 2',
          'изображение массив 2',
          'изображение массив 2',
        ],
      },
      {
        cottageId: 3,
        images: [
          'изображение массив 3',
          'изображение массив 3',
          'изображение массив 3',
        ],
      },
    ];

    const images = [];

    insertedCottages.forEach((cottage) => {
      const matchingImages = cottageImages.find(
        (ci) => ci.cottageId === cottage.id,
      );
      if (matchingImages) {
        matchingImages.images.forEach((url) => {
          images.push({
            cottageId: cottage.id,
            url: url,
            createdAt: new Date(),
            updatedAt: new Date(),
          });
        });
      }
    });

    await queryInterface.bulkInsert('images', images);
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.bulkDelete('images', null, {}),
      queryInterface.bulkDelete('cottages', null, {}),
    ]);
  },
};
