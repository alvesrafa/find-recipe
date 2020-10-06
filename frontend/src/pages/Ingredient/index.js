import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { Container } from './styles';

import { getAllIngredients } from '../../store/modules/ingredients/actions';

const Ingredient = () => {
  const dispatch = useDispatch();
  const { ingredients } = useSelector((state) => state.ingredients);

  useEffect(() => {
    dispatch(getAllIngredients());
  }, []);

  return <Container></Container>;
};

export default Ingredient;
