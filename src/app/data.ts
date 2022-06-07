export class Character {
  name;
  description;
  children;

  constructor(name, description, children) {
    this.name = name || 'Invalid name';
    this.description = description || 'No description';
    this.children = children || [];
  }
}

export const data = {
  name: 'Adam en Eva',
  description: 'Adam en Eva (Havah) word op die 6de dag geskape.',
  children: [
    {
      name: 'Kain',
      description:
        'Beroep was n landbouer. Hy het vir Abel doodgeslaan oor hy jaloers was dat die Here Abel se offergawes aanvaar het maar nie syne nie.',
      children: [
        {
          name: 'Henog',
          description: '',
          children: [
            {
              name: 'Irad',
              description: '',
              children: [
                {
                  name: 'Megujael',
                  description: '',
                  children: [
                    {
                      name: 'Metusael',
                      description: '',
                      children: [
                        {
                          name: 'Lameg',
                          description: '',
                          children: [
                            {
                              name: 'Jabal',
                              description: '',
                              children: [],
                            },
                            {
                              name: 'Jubal',
                              description: '',
                              children: [],
                            },
                            {
                              name: 'Tubal-Kain',
                              description: '',
                              children: [],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'Abel',
      description: 'Beroep was n skaapwagter. Vermoor deur sy broer Kain.',
      children: [],
    },
  ],
};
