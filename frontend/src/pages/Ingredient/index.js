import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { Container, Content } from './styles';

import { getAllIngredients } from '../../store/modules/ingredients/actions';

import Header from '../../components/Header';
import Pagination from '../../components/Pagination';

import { CgSearch, CgTrash, CgPen } from 'react-icons/cg';

const Ingredient = () => {
  const dispatch = useDispatch();
  const { ingredients } = useSelector((state) => state.ingredients);

  useEffect(() => {
    dispatch(getAllIngredients());
  }, []);
  useEffect(() => {
    console.log(ingredients);
  }, [ingredients]);

  return (
    <Container>
      <Header withBanner />
      <Content>
        <div className="header">
          <h1>Ingredientes cadastados</h1>

          <div className="search-wrapper">
            <CgSearch size={18} />
            <input placeholder="Buscar ingrediente" />
          </div>
        </div>

        <div className="listing">
          {[0, 1, 2, 3, 4, 5, 6, 7].map((item) => (
            <div className="item" key={item}>
              <h4>Ingrediente</h4>
              <div className="actions">
                <button>
                  <CgPen color="#FFF" size={22} />
                </button>
                <button>
                  <CgTrash color="#FFF" size={22} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <Pagination
          current={1}
          paginate={(number) => {}}
          perPage={8}
          total={56}
        />
      </Content>
    </Container>
  );
};

export default Ingredient;
