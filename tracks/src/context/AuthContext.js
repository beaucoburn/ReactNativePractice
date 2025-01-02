import createDataContext from '~/src/context/DataContext';

const authReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const { Provider, Context } = createDataContext( authReducer, {}, { isSignedIn: false });
