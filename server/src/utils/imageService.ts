const fs = require('fs');
const path = require('path');

interface ICottageImagesProps {
  main: string;
  'single-page': string[];
}

async function getCottageImages(
  cottageName: string,
): Promise<ICottageImagesProps> {
  const dirPath = path.join(
    __dirname,
    'public',
    'images',
    'cottages',
    cottageName,
  );

  try {
    // Главное изображение
    const mainImage = path.join(
      `/images/cottages/${cottageName}/main/main.jpg`,
    );

    // Изображения для страницы коттеджа
    const singlePageDir = path.join(dirPath, 'single-page');
    const files = await fs.readdir(singlePageDir);

    const singlePageImages = files
      .filter((file) => file.endsWith('.jpg') || file.endsWith('.png'))
      .map((file) => `/images/cottages/${cottageName}/single-page/${file}`);

    return {
      main: mainImage,
      'single-page': singlePageImages,
    };
  } catch (err) {
    console.error('Ошибка в получении директории:', err);
    return {
      main: '',
      'single-page': [],
    };
  }
}

module.exports = {
  getCottageImages,
};
