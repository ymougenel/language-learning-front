import { defaultsDeep } from 'lodash';

export class Translation {
  private static readonly _default: () => Partial<Translation> = () => ({
    language1: '',
    language2: '',
    category: '',
    word1: '',
    word2: '',
    id: 0
  });


  language1: string;
  language2: string;
  category: string;
  word1: string;
  word2: string;
  id: number;

  constructor(translation?: Partial<Translation>) {
    defaultsDeep(this, translation, Translation._default());
  }

}
