import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { __PostCart } from '../redux/modules/ItemSlice';

const navigate = useNavigate();
const dispatch = useDispatch();
const param = useParams();
const { id } = param;

export const buyNow = () => {
  dispatch(__PostCart(id));
  navigate('/Carts');
};
