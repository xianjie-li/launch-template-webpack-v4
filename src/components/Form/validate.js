import validate from 'validate.js';
import * as util from '@lxjx/utils';

export default (options = {}) => {
  /* 覆盖和自定义配置 */

  // 设置时间解析和格式化函数
  validate.extend(validate.validators.datetime, {
    parse: function (value, options) {
      return Number(new Date(value));
    },
    format: function (value, options) {
      let format = options.dateOnly ? 'YYYY-MM-DD' : 'YYYY-MM-DD hh:mm:ss';
      return util.datetime(value, format);
    },
  });

  // 将 {} [] "" " "  也列入空值
  validate.validators.presence.options = {
    allowEmpty: false,
  };

  // 提示中文化
  if (options.language === 'zh-cn') {
    validate.validators.datetime.notValid = '^日期格式错误';
    validate.validators.datetime.tooEarly = '^必须在 %{date} 之后';
    validate.validators.datetime.tooLate = '^必须在 %{date} 之前';
    validate.validators.email.message = '^邮箱格式错误';
    validate.validators.equality.message = '^必须与 %{attribute} 相等';
    validate.validators.exclusion.message = '^“%{value}” 不在有效值内';
    validate.validators.inclusion.message = '^“%{value}” 不在有效值内';
    validate.validators.format.message = '^格式错误';
    validate.validators.length.wrongLength = '^长度只能为 %{count}位';
    validate.validators.length.tooLong = '^长度不超过 %{count}';
    validate.validators.length.tooShort = '^长度不少于 %{count}';
    validate.validators.numericality.notValid = '^只能是数字';
    validate.validators.numericality.notInteger = '^只能是整数';
    validate.validators.numericality.notGreaterThan = '^必须大于 %{count}';
    validate.validators.numericality.notGreaterThanOrEqualTo =
      '^必须大于或等于 %{count}';
    validate.validators.numericality.notEqualTo = '^只能是 %{count}';
    validate.validators.numericality.notLessThan = '^必须小于 %{count}';
    validate.validators.numericality.notLessThanOrEqualTo =
      '^必须小于或等于 %{count}';
    validate.validators.numericality.notDivisibleBy = '^必须能被 %{count} 整除';
    validate.validators.numericality.notOdd = '^只能是奇数';
    validate.validators.numericality.notEven = '^只能是偶数';
    validate.validators.presence.message = '^这是一个必填';
  }

  return validate;
};