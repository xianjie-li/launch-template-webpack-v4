import { useState, useEffect } from 'react';
import configValidate from './validate';
import * as util from '@lxjx/utils';

const defaulOption = {
  formatBonus: source => source,
};

export default (option = {}) => {

  option = { ...defaulOption, ...option };

  const validate = configValidate({
    language: option.language || 'zh-cn',
  });

  /* 格式化错误信息 */
  function formatError(error, extra) {
    let isPass = util.isEmpty(error);

    let formated = {
      validateStatus: isPass ? 'success' : 'error',
      isPass,
      required: extra.rules[extra.name].presence || false,
    };

    let help = error && error[0];
    help && (formated.help = help);

    return option.formatBonus(formated);
  }

  /**
   * 批量验证
   * @param models {Object}   当前models的值
   * @param rules {Object}    验证规则
   * @returns {*[]}   包含转换后的验证结果以及是否通过的数组
   */
  function verify(models, rules) {
    let err = validate.validate(models, rules);
    let isPass = util.isEmpty(err);
    let res = {};

    // if(!util.isEmpty(err)) {
    Object.entries(models).forEach(([name, value]) => {

      res[name] = formatError(isPass ? false : err[name], {
        rules,
        name,
        model: models,
      });

    });
    // }

    return [res, isPass];
  }

  return (rules, defaultmodel = {}) => {
    const [model, setModel] = useState(defaultmodel);
    const [bonus, setBonus] = useState({});

    /* 初始化时设置根据rules设置required, 以及对默认值进行验证 */
    useEffect(() => {
      let _bonus = {};
      let localRules = {};    // 只对包含默认值的项进行验证

      for (let [name, value] of Object.entries(rules)) {
        _bonus[name] = {};
        _bonus[name].required = value.presence || false;

        if (defaultmodel[name]) localRules[name] = value;
      }

      let [res, isPass] = verify(defaultmodel, localRules);

      setBonus(option.formatBonus({ ..._bonus, ...res }));
    }, []);


    return [
      bonus,
      (name, value) => {
        const newModel = {
          ...model,
          [name]: value,
        };

        let err = validate.single(newModel[name], rules[name]);

        let formatBonus = formatError(err, {
          rules,
          name,
          model: newModel,
        });

        setModel(newModel);

        setBonus({
          ...bonus,
          [name]: formatBonus,
        });
      },
      {
        model,
        /* 验证全部，返回验证状态、当前表单值、 错误信息 */
        verify() {
          let [res, isPass] = verify(model, rules);
          setBonus(res);
          return [isPass, model, res];
        },
      }];
  };
}