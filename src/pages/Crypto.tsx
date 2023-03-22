/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { useAppDispatch } from '../app/hooks';
import { Filters } from '../components';
import { Table } from '../components/Table';
import { getCoins } from '../store/coins/ActionCreator';

const Crypto: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCoins());
  }, [dispatch]);

  return (
    <>
      <Filters />
      <Table />
    </>
  );
};

export default Crypto;
