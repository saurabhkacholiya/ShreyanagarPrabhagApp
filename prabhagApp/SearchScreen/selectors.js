import { createSelector } from 'reselect';
import { initialState } from "./reducer";

const selectSearchDomain = state =>
  state.get('searchScreenKey', initialState);

export const getSearchTermData = () => 
  createSelector(
    selectSearchDomain, 
    subState => subState.get('searchTermData')
  )

export const getModalData = () => 
  createSelector(
    selectSearchDomain, 
    subState => subState.get('modalData')
  )

export const getLoaderValue = () => 
  createSelector(
    selectSearchDomain, 
    subState => subState.get('loader')
  )

export const getTotalPageNo = () => 
  createSelector(
    selectSearchDomain, 
    subState => subState.get('totalPageNo')
  )

export const getModalStatus = () => 
  createSelector(
    selectSearchDomain, 
    subState => subState.get('modalStatus')
  )

export const getModalIndicatorStatus = () => 
    createSelector(
      selectSearchDomain,
      subState => subState.get('setModalIndicator')
    )

