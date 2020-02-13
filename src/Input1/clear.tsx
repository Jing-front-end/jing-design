// import React, { useState, useEffect, useCallback } from 'react';
// import classnames from 'classnames';
// import Icon from '../icon';

// import Input from './input';
// import Group from './group';

// function useClearBtn(value: string) {
//   let [status, setStatus] = useState(value);
//   const changeStatus = (res: React.SetStateAction<string>) => {
//     setStatus(res);
//   };
//   const updateStatus = (v: string | any[]) => {
//     if (v.length === 0) {
//       setStatus(false);
//     } else {
//       setStatus(true);
//     }
//   }
//   return { status, changeStatus, updateStatus };
// }

// function useInputValue(initialValue: any) {
//   let [value, setValue] = useState(initialValue);

//   let onChange = useCallback(e => {
//     setValue(e.currentTarget.value);
//   }, []);

//   let updateValue = function (value) {
//     setValue(value);
//   }

//   return { value, onChange, updateValue };
// }

// function Clear(props: any) {
//   const { style, className, value = '', placeholder, type, maxLength, minLength, disabled, onChange, onEnter, onFocus, onBlur, onClear } = props;
//   const { status, changeStatus, updateStatus } = useClearBtn(false);
//   const oInput = useInputValue(value);

//   useEffect(() => {
//     oInput.updateValue(value)
//   }, [value]);

//   return (
//     <Group className={classnames(className)} style={style}>
//       <Input
//         placeholder={placeholder}
//         type={type}
//         maxLength={maxLength}
//         minLength={minLength}
//         disabled={disabled}
//         value={oInput.value}
//         onChange={(res, e) => {
//           updateStatus(res);
//           oInput.onChange(e);
//           onChange && onChange(res, e);
//         }}
//         onFocus={(e) => {
//           onFocus && onFocus(e);
//           updateStatus(value || oInput.value);
//         }}
//         onBlur={(e) => {
//           changeStatus(false);
//           onBlur && onBlur(e);
//         }}
//         onEnter={onEnter}
//       />
//       <Icon className={classnames('clear-btn', { 'show': status })}
//       />
//     </Group>
//   )
// }

// export default Clear;
