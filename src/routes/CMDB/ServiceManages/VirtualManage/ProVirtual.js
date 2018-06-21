import React, { Component } from 'react';
import CommonEnv from './CommonEnvTalbe/CommonEnv';

export default class ProVirtual extends Component {
  render() {
    const showBtnType = {
      add: false, // 新增
      edit: true, // 编辑
      info: true, // 详情
      offline: true, // 下线
      allot: false, // 分配
      destroy: false, // 销毁
      regress: false, // 重新上线
    };
    return (
      <div>
        <CommonEnv
          env="pro"
          title="生产物理机服务器"
          btnType={showBtnType}
        />
      </div>
    );
  }
}
