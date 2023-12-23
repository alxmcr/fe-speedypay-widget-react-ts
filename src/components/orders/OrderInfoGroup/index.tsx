import { formatterOrderLikeAnArray } from '../../../helpers/helpers-formatters';
import { DataOrder, Order } from '../../../types/appTypes';
import AppInfo from '../../info/AppInfo';

type OrderInfoGroupProps = {
  order: Order;
};

export default function OrderInfoGroup({ order }: OrderInfoGroupProps) {
  if (order === null) {
    return null;
  }

  return (
    <div>
      {formatterOrderLikeAnArray(order).map((data: DataOrder) => (
        <AppInfo labelText={data.label} valueText={data.value} />
      ))}
    </div>
  );
}
