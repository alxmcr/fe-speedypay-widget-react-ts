import { formatterOrderLikeAnArray } from '../../../helpers/helpers-formatters';
import { DataOrder, Order } from '../../../types/appTypes';
import AppInfo from '../../info/AppInfo';
import { OrderInfoGroupStyled } from './OrderInfoGroup.styled';

type OrderInfoGroupProps = {
  order: Order;
};

export default function OrderInfoGroup({ order }: OrderInfoGroupProps) {
  if (order === null) {
    return null;
  }

  return (
    <OrderInfoGroupStyled>
      {formatterOrderLikeAnArray(order).map((data: DataOrder, index) => (
        <AppInfo
          key={index}
          label={data.label}
          typeValue={data.type}
          value={data.value}
        />
      ))}
    </OrderInfoGroupStyled>
  );
}
