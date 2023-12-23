import { Order } from '../../../types/appTypes';
import AppInfo from '../../info/AppInfo';

type OrderInfoGroupProps = {
  order: Order;
};

export default function OrderInfoGroup({ order }: OrderInfoGroupProps) {
  return (
    <div>
      <AppInfo labelText="Order ID" valueText={order?.id || ''} />
      <AppInfo
        labelText="Expiration date"
        valueText={order?.expiration_date.toString() || ''}
      />
    </div>
  );
}
