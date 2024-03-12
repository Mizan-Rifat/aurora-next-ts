import dayjs from 'dayjs';
import { CallbackDataParams } from 'echarts/types/dist/shared';

export const tooltipFormatterList = (params: CallbackDataParams[]) => {
  const result = params.map((param, index) => {
    let label = '';
    if (dayjs(params[0].name).isValid()) {
      if (index > 0) {
        label = dayjs(params[0].name).subtract(1, 'month').format('MMM DD');
      } else {
        label = dayjs(params[0].name).format('MMM DD');
      }
    } else {
      label = params[0].name;
    }
    return {
      value: param.value,
      label,
      color: param.color,
    };
  });

  const tooltipItem = result
    .map(
      (el, index: number) =>
        `<h6 style="font-family: Plus Jakarta Sans,sans-serif; font-size: 12px; margin: 0; font-weight: 400;" ${
          (result.length === 1 || index > 0) && 'mb-0'
        }"><span style="margin-right: 8px; display: inline-block; border-radius: 50%; height: 0.5rem; width: 0.5rem; background:${
          el.color
        }"></span>
    ${el.label} : ${el.value}
  </h6>`,
    )
    .join('');

  return `<div style="margin-left: 8px;">
            ${tooltipItem}
          </div>`;
};
