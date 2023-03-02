export const idlFactory = ({ IDL }) => {
  return IDL.Service({ 'topUp' : IDL.Func([], [], ['oneway']) });
};
export const init = ({ IDL }) => { return []; };
