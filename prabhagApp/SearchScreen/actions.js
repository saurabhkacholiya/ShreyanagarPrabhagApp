export const SET_LOADER = 'boilerplate/LoginScreen/SET_LOADER';
export function setLoader(data) {
  return {
    type: SET_LOADER,
    data,
  };
}

export const SEARCH_TERM = 'boilerplate/LoginScreen/SEARCH_TERM';
export function searchTermAction(data) {
  return {
    type: SEARCH_TERM,
    data,
  };
}

export const SET_SEARCH_TERM_DATA = 'boilerplate/LoginScreen/SET_SEARCH_TERM_DATA';
export function setSearchTermData(data) {
  return {
    type: SET_SEARCH_TERM_DATA,
    data,
  };
}

export const GET_SINGLE_USER_DATA = 'boilerplate/LoginScreen/GET_SINGLE_USER_DATA';
export function getSingleUserData(data) {
  return {
    type: GET_SINGLE_USER_DATA,
    data,
  };
}

export const SET_SINGLE_USER_DATA = 'boilerplate/LoginScreen/SET_SINGLE_USER_DATA';
export function setSingleUserData(data) {
  return {
    type: SET_SINGLE_USER_DATA,
    data,
  };
}

export const SET_SINGLE_USER_DATA_NULL = 'boilerplate/LoginScreen/SET_SINGLE_USER_DATA_NULL';
export function setSingleUserDataNull(data) {
  return {
    type: SET_SINGLE_USER_DATA_NULL,
    data,
  };
}

export const SET_TOTAL_PAGE_NO = 'boilerplate/LoginScreen/SET_TOTAL_PAGE_NO';
export function setTotalPageNo(data) {
  return {
    type: SET_TOTAL_PAGE_NO,
    data,
  };
}

export const GET_DATA_FROM_SEARCH_TERM = 'boilerplate/LoginScreen/GET_DATA_FROM_SEARCH_TERM';
export function getDataFromSearchTerm(data) {
  return {
    type: GET_DATA_FROM_SEARCH_TERM,
    data,
  };
}

export const SET_MODAL_STATUS = 'boilerplate/LoginScreen/SET_MODAL_STATUS';
export function setModalStatus(data){
  return {
    type : SET_MODAL_STATUS,
    data,
  }
}

export const SET_MODAL_INDICATOR = 'boilerplate/LoginScreen/SET_MODAL_INDICATOR';
export function setModalIndicator(data){
  return {
    type : SET_MODAL_INDICATOR,
    data,
  }
}