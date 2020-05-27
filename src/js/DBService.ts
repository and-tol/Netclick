interface DB {
  getData: () => {};
  getTestData: () => {};
}

export const DBService = class  {
  getData = async (url: string):Promise<any> => {
    const res: Response = await fetch(url);

    if (res.ok) {
      return res.json();
    } else {
      throw Error(`Не удалось получить данные по адресу ${url}. Ошибка ${res.status}`)
    }

  };

  getTestData = () => {
    return this.getData('../test.json');
  };
}
