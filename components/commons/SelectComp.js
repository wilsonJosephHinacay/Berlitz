import React, { forwardRef } from 'react';
import { Divider, Select } from 'antd';
import _ from 'lodash';

function SelectComp(props, ref) {

	let lists = _.map(props.choices, (data, i) => {
		return (
			<Select.Option key={i} value={data.value}>
				{data.label}
			</Select.Option>
		);
	});

	let placeholder = !_.isEmpty(props.label) && props.label !== null
		? `SELECT ${_.toUpper(props.label)}` : props.placeholder ? _.toUpper(props.placeholder) : 'SELECT DATA';

	return (
		<>
			{!_.isEmpty(props.label) && (
				<label htmlFor={props.field} className={'form-label'}>
					{props.label}
				</label>
			)}
			<div style={{ marginTop: 10 }}>
				<Select
					ref={ref}
					{...props}
					id={props.field}
					placeholder={placeholder}
					showSearch
					optionFilterProp="children"
					filterOption={(input, option) =>
						option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
					}
				>
					{lists}
				</Select>
			</div>
		</>
	);
}

export default forwardRef(SelectComp);
