import { getLocalStorage } from '../general/middlewares';
import { tDropDownOptions } from '../general/types';
import { tArtworkReduxState } from './artworkTypes';

// Base url
export const artworkApiUrl = 'https://api.artic.edu/api/v1/artworks';

// Dinamic image url
export const artworkApiImageUrl = (id: string) =>
  `https://www.artic.edu/iiif/2/${id}/full/843,/0/default.jpg`;

// Base state of limits of artwork pages
export const artworkLimits: tDropDownOptions = [
  { key: '12', value: '12 / page' },
  { key: '24', value: '24 / page' },
  { key: '48', value: '48 / page' },
];

// Initial state of view of list
const listView = getLocalStorage('listView');

// Initial state of redux for artwork slice
export const initialArtworkReduxState: tArtworkReduxState = {
  status: 'idle',
  listView: listView ? listView : 'grid',

  mainListResult: '1184 results', // TODO set back to 0 result
  mainListKeywords: '',
  mainListLimit: '24',
  mainListPage: '1',
  mainListQuery: '',
  mainList: [
    {
      id: 109314,
      title: 'Fishing in Spring, the Pont de Clichy (Asnières)',
      image_id: '92827fc4-78a3-a263-75a2-6470eabad38b',
    },
    {
      id: 59211,
      title: 'Stag',
      image_id: '3134a709-c180-5aea-20ed-97f8613217e5',
    },
    {
      id: 11434,
      title: 'Salome with the Head of Saint John the Baptist',
      image_id: '1f5b595f-dbbd-3c9d-ca49-9263c3d93841',
    },
    {
      id: 14572,
      title: 'The Millinery Shop',
      image_id: '6f513908-03cc-b974-633b-adfce56b7936',
    },
    {
      id: 14556,
      title: 'Auvers, Panoramic View',
      image_id: '90bc0cec-0d4e-9af5-3912-52a082a428e5',
    },
    {
      id: 16487,
      title: "The Bay of Marseille, Seen from L'Estaque",
      image_id: 'd4ca6321-8656-3d3f-a362-2ee297b2b813',
    },
    {
      id: 16564,
      title: 'Branch of the Seine near Giverny (Mist)',
      image_id: '838d8c33-a3b4-68ea-587b-87ceec2011af',
    },
    {
      id: 18754,
      title: 'Bust of a Woman',
      image_id: '725d19ab-4bd4-e640-86f2-a119e0a154e0',
    },
    {
      id: 18751,
      title: 'Bust of Said Abdullah of the Darfour People',
      image_id: '6a0e3e40-1e36-2109-378f-3fc5d29176b3',
    },
    {
      id: 22736,
      title: 'Ghana',
      image_id: '89625930-0b63-e877-8eef-207df15b92cb',
    },
    {
      id: 22242,
      title: 'Caroline',
      image_id: '5451f8c7-184e-6cec-106a-6c952001c375',
    },
    {
      id: 25838,
      title: 'Pistachio Tree at Château Noir',
      image_id: 'ff4eb409-5b54-0443-8c05-270921a5de20',
    },
    {
      id: 22749,
      title: 'Ghana',
      image_id: 'c53ee143-de2d-8a0f-682b-dc1247c6677f',
    },
    {
      id: 27024,
      title: 'Virgin of the Annunciation',
      image_id: '1e70b08e-31d2-58aa-d538-2d2cbfed4028',
    },
    {
      id: 26715,
      title: 'Seated Nude',
      image_id: 'cf95a821-e48a-1d64-0375-47e7597fb197',
    },
    {
      id: 41236,
      title: 'Dobeckmun Metallic Stripe (Curtain Fabric)',
      image_id: '4c79f7b4-74fa-19a5-e57f-48a5e192ee5d',
    },
    {
      id: 34145,
      title: 'Vincent and Tony',
      image_id: 'f1c1fd79-266b-26d8-3c14-ccb4cf3248a6',
    },
    {
      id: 27103,
      title: 'Beside the Sea #34',
      image_id: '857653de-8087-38f4-0a4c-305862f85154',
    },
    {
      id: 45240,
      title: 'The Bathers',
      image_id: '2e166f7c-a959-d686-eeb0-a63a52a4d368',
    },
    {
      id: 62337,
      title: 'Francis Bacon Walking on Primrose Hill, London',
      image_id: 'c001843e-62fd-b45c-8628-3d5f7b11a018',
    },
    {
      id: 62323,
      title: 'Magnetic Mountain',
      image_id: '4212f149-f02a-9deb-3806-8bb2396a2d91',
    },
    {
      id: 65811,
      title: 'The Plate of Apples',
      image_id: '2e6d6a89-61bd-5098-59d3-b41d14bf7973',
    },
    {
      id: 62371,
      title: 'Madame Cezanne in a Yellow Chair',
      image_id: '4822cd01-44ac-041a-36b8-c0542377b750',
    },
    {
      id: 70036,
      title: 'It Was Yellow and Pink III',
      image_id: '5f158c2a-16e1-63ed-f4bb-f922f0b279a6',
    },
  ],

  favoriteListKeywords: '',
  favoriteList: [],
};
