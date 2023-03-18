import {
  initialArtworkDetails,
  initialArtworkReduxState,
} from '../app/artwork/artworkInitialStates';
import artworkReducer, {
  artworkSetMainListQuery,
  artworkSetMainListKeywords,
  artworkSetMainListLimit,
  artworkSetMainListPage,
  artworkSetListView,
  artworkResetDetails,
} from '../app/artwork/artworkSlice';

window.scrollTo = jest.fn();

describe('artwork reducer', () => {
  it('should handle initial state', () => {
    expect(artworkReducer(undefined, { type: 'unknown' })).toEqual(initialArtworkReduxState);
  });

  it('should handle main list query changing', () => {
    const data = 'https://test.com';
    const actual = artworkReducer(initialArtworkReduxState, artworkSetMainListQuery(data));
    expect(actual.mainListQuery).toEqual(data);
  });

  it('should handle main list keywords changing and set page 1', () => {
    const data = 'test';
    const actual = artworkReducer(initialArtworkReduxState, artworkSetMainListKeywords(data));
    expect(actual.mainListKeywords).toEqual(data);
    expect(actual.mainListPage).toEqual(1);
  });

  it('should handle main list limit changing and set page 1', () => {
    const data = 12;
    const actual = artworkReducer(initialArtworkReduxState, artworkSetMainListLimit(data));
    expect(actual.mainListLimit).toEqual(data);
    expect(actual.mainListPage).toEqual(1);
  });

  it('should handle main list page changing', () => {
    const data = 2;
    const actual = artworkReducer(initialArtworkReduxState, artworkSetMainListPage(data));
    expect(actual.mainListPage).toEqual(data);
  });

  it('should handle list view changing', () => {
    const data = 'grid';
    const actual = artworkReducer(initialArtworkReduxState, artworkSetListView(data));
    expect(actual.listView).toEqual(data);
  });

  it('should handle details resetting', () => {
    const actual = artworkReducer(initialArtworkReduxState, artworkResetDetails());
    expect(actual.details).toEqual(initialArtworkDetails);
  });
});
