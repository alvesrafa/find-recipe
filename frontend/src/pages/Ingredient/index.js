import React, { useState, useEffect } from 'react';

import { toast } from 'react-toastify';

import { Container } from './styles';

import api from '../../services/api';

const Ingredient = () => {
  const [ingredients, setIngredients] = useState([]);

  const loadIngredients = async () => {
    try {
      const response = await api.get('ingredients');

      if (response.data.success) {
        setIngredients(response.data.content);
      } else {
        toast.error('Falha ao buscar ingredientes. ');
        console.log(response.data);
      }
    } catch (e) {
      toast.error(
        e?.response?.data?.message || 'Falha ao buscar ingredientes.'
      );
      console.log(e?.response);
    }
  };
  useEffect(() => {
    loadIngredients();
  }, []);
  return (
    <Container>
      <h1>Listagem de ingredientes</h1>
    </Container>
  );
};

export default Ingredient;
