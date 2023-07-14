import { createElement } from 'rax';
import { DatePicker } from '@alifd/meet';
import dayjs from 'dayjs';
import './index.scss';

export default function Home() {
  return (
    <div style={{ background: 'blue' }}>
      <DatePicker.EmbedDatePicker
        mask-class="maskNone"
        mask-style={{ backgroundImage: 'none' }}
        validRange={[
          dayjs().subtract(100, 'year').startOf('year').toDate(),
          dayjs(`${dayjs().subtract(18, 'year').format('YYYY-01-01 08:00:00')}`).toDate(),
        ]}
      />
    </div>
  );
}
